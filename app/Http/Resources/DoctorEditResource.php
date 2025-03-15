<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class DoctorEditResource extends JsonResource
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
            'specialist_id' => $this->specialist_id,
            'picture'       => $this->picture ? Storage::url($this->picture) : null,
            'specialist'    => [
                'id' => $this->specialist->id,
                'name' => $this->specialist->name,
            ],
            'schedules' => $this->schedules->map(fn($schedule) => [
                'id'            => $schedule->id,
                'day'           => $schedule->day,
                'start_time'    => Carbon::parse($schedule->start_time)->format('h:i A'),
                'end_time'      => Carbon::parse($schedule->end_time)->format('h:i A'),
            ])
        ];
    }
}
