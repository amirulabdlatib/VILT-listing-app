<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/register',[RegisterController::class, 'create'])->name('register');
Route::post('/register',[RegisterController::class, 'store'])->name('user.register');
Route::get('/login',[LoginController::class, 'getLoginPage'])->name('login');
Route::post('/login',[LoginController::class, 'login'])->name('user.login');