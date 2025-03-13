<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function show (Category $category){
        $articles = Article::query()
            ->orWhereBelongsTo($category)
            ->select('title', 'slug', 'picture', 'teaser','user_id','created_at','id')
            ->with(['tags' => fn($tag) => $tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate(9);
            // return ArticleItemResource::collection($articles);
        return inertia('category/show',[
            'category' => $category,
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }
}
