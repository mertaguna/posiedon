<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Merta',
            'email' => 'admin@admin.com',
        ]);

        $this->call([
            CategorySeeder::class,
            TagSeeder::class,
            ArticleSeeder::class,
            SpecialistSeeder::class,
            DoctorSeeder::class,
            ScheduleSeeder::class,
            DoctorScheduleSeeder::class,
        ]);
    }
}
