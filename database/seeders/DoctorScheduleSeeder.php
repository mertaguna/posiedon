<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\Schedule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $doctors = Doctor::all();
        $schedules = Schedule::all();
        foreach ($doctors as $doctor) {
            $doctor->schedules()->attach($schedules->random(rand(1, 3))); // Assign random schedules
        }
    }
}
