<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExcellenceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;

Route::middleware('locale')->group(function () {

    Route::controller(LanguageController::class)->group(function () {
        Route::get('/language', 'create');
        Route::post('/language', 'store');
    });

    Route::get('/', HomeController::class)->name('home');
    Route::get('categories/{category:slug}', [CategoryController::class, 'show'])->name('categories.show');
    Route::get('/article', ArticleController::class)->name('article');
    Route::get('/excellence', ExcellenceController::class)->name('excellence');
    Route::get('/about', AboutController::class)->name('about');

    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::match(['get', 'post'], '/botman', [App\Http\Controllers\BotManController::class, 'handle']);

    require __DIR__ . '/auth.php';
});
