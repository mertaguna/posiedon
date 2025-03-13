<?php

namespace Database\Seeders;

use App\Models\Specialist;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpecialistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Penyakit Dalam', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Bedah Umum', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Bedah Saraf', 'slug' =>str($name)->slug()],
        ])->each(fn($specialist)=>Specialist::create($specialist));
    }
}
