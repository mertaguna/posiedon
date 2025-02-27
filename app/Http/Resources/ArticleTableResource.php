<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleTableResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'url' => route('article.show', $this->slug),
            'slug' => $this->slug,
            'author' => $this->author,
            'category' => [
               'name' => $this->category->name,
               'url' => route('categories.show', $this->category),
            ],
            'tags' => $this->tags->map(fn($tag) => [
                'name' => $tag->name,
                'url' => route('tags.show', $tag),
            ])
        ];
    }
}
