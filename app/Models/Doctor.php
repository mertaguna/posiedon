<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Doctor extends Model
{
    use SoftDeletes;
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function specialist() {
        return $this->belongsTo(Specialist::class);
    }

    public function schedules() {
        return $this->belongsToMany(Schedule::class, 'doctor_schedule');
    }
}
