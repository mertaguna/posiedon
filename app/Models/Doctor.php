<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Doctor extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded=[];

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
