<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function show (Tag $tag){
        $articles = $tag->articles()->latest()->fastPaginate(6);
        // return ArticleItemResource::collection($articles);
        return inertia('tag/show',[
            'tag' => $tag,
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }
}
