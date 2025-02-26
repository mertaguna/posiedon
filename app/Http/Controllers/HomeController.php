<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $articles = Article::query()
            ->select('title', 'slug', 'picture', 'teaser','user_id', 'category_id','created_at')
            ->with(['tags' => fn($tag) => $tag->select('name', 'slug')])
            ->limit(6)
            ->latest()
            ->get();

        // return ArticleItemResource::collection($articles);
        return inertia('home', [
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }
}
