<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\Specialist;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $specialists = Specialist::all();
        foreach (['Dr. Smith', 'Dr. Johnson', 'Dr. Brown', 'Dr. Davis'] as $index => $name) {
            Doctor::create(['name' => $name, 'specialist_id' => $specialists->random()->id]);
        }
    }
}
