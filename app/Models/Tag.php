<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function articles(){
        return $this->belongsToMany(Article::class)
        ->select('title','slug','picture','teaser','user_id','category_id','created_at')
        ->with(['tags' => fn($tag) => $tag->select('name', 'slug')]);
    }
}
