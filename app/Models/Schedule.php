<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    public function doctors() {
        return $this->belongsToMany(Doctor::class, 'doctor_schedule')
        ->select('name','picture','specialist_id')
        ->with(['schedules' => fn($schedule) => $schedule->select('day', 'start_time', 'end_time')]);
    }
}
