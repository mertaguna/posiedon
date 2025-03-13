<?php

namespace Database\Seeders;

use App\Models\Schedule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        foreach ($days as $day) {
            $start_time = now()->setTime(rand(8, 14), 0, 0);
            $end_time = $start_time->copy()->addHours(rand(2, 4));
            Schedule::create(['day' => $day, 'start_time' => $start_time, 'end_time' => $end_time]);
        }
    }
}
