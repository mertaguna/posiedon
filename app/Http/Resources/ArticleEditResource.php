<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ArticleEditResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title'         => $this->title,
            'slug'          => $this->slug,
            'teaser'        => $this->teaser,
            'category_id'   => $this->category_id,
            'body'          => $this->body,
            'picture'       => $this->picture ? Storage::url($this->picture) : null,
            'category'  => [
                'id' => $this->category->id,
                'name' => $this->category->name,
            ],
            'tags'  => $this->tags->map(fn($tag)=>[
                'id' => $tag->id,
                'name' => $tag->name,
            ]),
        ];
    }
}
