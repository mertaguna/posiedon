<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Alergi', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Gangguan Kecemasan', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Diet Sehat', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Wajah', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Kebugaran', 'slug' =>str($name)->slug()],
        ])->each(fn($category)=>Tag::create($category));
    }
}
