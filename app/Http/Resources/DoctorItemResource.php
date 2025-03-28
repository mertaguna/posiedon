<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class DoctorItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'slug'          => $this->slug,
            'picture'       => $this->picture ? Storage::url($this->picture) : null,
            'specialist'    => [
                'name' => $this->specialist->name,
                'slug' => $this->specialist->slug,
            ],
            'schedules' => $this->schedules->map(fn($schedule) => [
                'day'           => $schedule->day,
                'start_time'    => Carbon::parse($schedule->start_time)->format('h:i A'),
                'end_time'      => Carbon::parse($schedule->end_time)->format('h:i A'),
            ])
        ];
    }
}
