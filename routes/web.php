<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\ExcellenceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SpecialistController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;

Route::middleware('locale')->group(function () {

    Route::controller(LanguageController::class)->group(function () {
        Route::get('/language', 'create');
        Route::post('/language', 'store');
    });

    Route::get('/', HomeController::class)->name('home');

    Route::middleware('auth')->group(function () {
        Route::get('doctor/table', [DoctorController::class, 'table'])->name('doctor.table');
        Route::resource('doctor', DoctorController::class)->except(['index', 'show']);
        Route::get('article/table', [ArticleController::class, 'table'])->name('article.table');
        Route::resource('article', ArticleController::class)->except(['index', 'show']);
        Route::get('dashboard', DashboardController::class)->name('dashboard');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::get('article', [ArticleController::class, 'index'])->name('article.index');
    Route::get('article/{article}', [ArticleController::class, 'show'])->name('article.show');

    Route::get('doctor', [DoctorController::class, 'index'])->name('doctor.index');
    Route::get('doctor/{doctor}', [DoctorController::class, 'show'])->name('doctor.show');

    Route::get('specialist', [SpecialistController::class, 'index'])->name('specialist.index');
    Route::get('specialist/{specialist:slug}', [SpecialistController::class, 'show'])->name('specialist.show');

    Route::get('categories/{category:slug}', [CategoryController::class, 'show'])->name('categories.show');
    Route::get('tags/{tag:slug}', [TagController::class, 'show'])->name('tags.show');

    Route::get('excellence', ExcellenceController::class)->name('excellence');
    Route::get('about', AboutController::class)->name('about');
    Route::get('chatbot', ChatbotController::class)->name('chatbot');


    Route::match(['get', 'post'], '/botman', [App\Http\Controllers\BotManController::class, 'handle']);

    require __DIR__ . '/auth.php';
});
