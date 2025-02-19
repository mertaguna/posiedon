<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Kesehatan Tubuh', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Kesehatan Mental', 'slug' =>str($name)->slug()],
            ['name' => $name = 'Pola Hidup Sehat', 'slug' =>str($name)->slug()],
        ])->each(fn($category)=>Category::create($category));
    }
}
