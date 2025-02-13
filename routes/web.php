<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExcellenceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('locale')->group(function () {

    Route::controller(LanguageController::class)->group(function () {
        Route::get('/language', 'create');
        Route::post('/language', 'store');
    });

    Route::get('/', HomeController::class)->name('home');
    Route::get('/excellence', ExcellenceController::class)->name('excellence');
    Route::get('/about', AboutController::class)->name('about');

    Route::get('/dashboard',DashboardController::class)->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    require __DIR__.'/auth.php';
});
