<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

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
            'name'          => $this->name,
            'picture'       => $this->picture ? Storage::url($this->picture) : null,
            'specialist'    => [
                'name' => $this->specialist->name,
                'slug' => $this->specialist->slug,
            ],
            'schedules' => $this->schedules->map(fn($schedule) => [
                'day'           => $schedule->day,
                'start_time'    => $schedule->start_time,
                'end_time'      => $schedule->end_time,
            ])
        ];
    }
}
