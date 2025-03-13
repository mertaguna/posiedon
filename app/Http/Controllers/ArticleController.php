<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Http\Resources\ArticleItemResource;
use App\Http\Resources\ArticleSimpleResource;
use App\Http\Resources\ArticleSingleResource;
use App\Http\Resources\ArticleTableResource;
use Illuminate\Support\Facades\Storage;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Http\Request;

class ArticleController extends Controller implements HasMiddleware
{
    public $tags;
    public $categories;

    public static function middleware(): array
    {
        return [
            new Middleware('auth', ['create', 'edit', 'store']),
        ];
    }

    public function __construct()
    {
        $this->tags = Tag::select('id', 'name') ->get();
        $this->categories = Category::select('id', 'name') ->get();
    }

    public function table(Request $request)
    {
        $articles = Article::query()
            ->with([
                'author',
                'tags' => fn($query) => $query->select('name', 'slug', 'id'),
                'category' => fn($query) => $query->select('name', 'slug', 'id'),
            ])
            ->whereBelongsTo($request->user(), 'author')
            ->latest()
            ->fastPaginate(8);

        return inertia('article/table', [
            'articles' => ArticleTableResource::collection($articles)
        ]);
    }

    public function index()
    {
        $articles = Article::query()
            ->select('title', 'slug', 'picture', 'teaser','user_id','created_at')
            ->with(['tags' => fn($tag) => $tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate();


        return inertia('article/index', [
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }

    public function show (Article $article){
        $articles = Article::query()
            ->select('id', 'title', 'slug', 'picture','created_at')
            ->whereNot('id', $article->id)
            ->whereBelongsTo($article->category)
            ->limit(3)->get();
        $currentArticle = $article->load([
            'tags' => fn($query)=> $query->select('name', 'slug'),
            'category' => fn($query)=> $query->select('id', 'name', 'slug'),
        ]);
        return inertia('article/show',[
            'article' => (new ArticleSingleResource($currentArticle))->additional([
                'related' => ArticleSimpleResource::collection($articles),
            ])
        ]);
    }

    public function create (Article $article){
        return inertia('article/create',[
            'tags' => $this->tags,
            'categories' => $this->categories,
        ]);
    }

    public function store (ArticleRequest $request){
        $picture = $request->picture;
        $article= $request->user()->articles()->create([
            'title' => $title = $request->title,
            'slug' => $slug= str($title)->slug(),
            'teaser' => $request->teaser,
            'category_id' => $request->category_id,
            'body' => $request->body,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('images/articles', $slug .'.'.$picture->extension()) : null,
        ]);
        $article->tags()->attach($request->tags);
        return to_route('article.show', $article);
    }

    public function edit (Article $article){
        return inertia('article/edit',[
            'article' => $article->load([
                'tags' => fn($query) => $query->select('id', 'name'),
                'category' => fn($query) => $query->select('id', 'name')
            ]),
            'tags' => $this->tags,
            'categories' => $this->categories,
        ]);
    }

    public function update (ArticleRequest $request, Article $article){
        // dd($request->all());
        $picture = $request->picture;
        $article->update([
            'title' =>  $request->title,
            'teaser' => $request->teaser,
            'category_id' => $request->category_id,
            'body' => $request->body,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('images/articles', $article->slug .'.'.$picture->extension()) : $article->picture,
        ]);
        $article->tags()->sync($request->tags, true);
        return to_route('article.show', $article);
    }

    public function destroy ( Article $article){
        // dd($article->id);
        if($article->picture){
            Storage::delete($article->picture);
        }
        $article->tags()->detach();
        $article->delete();
        return back();
    }
}
