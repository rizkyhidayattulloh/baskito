<?php

use Illuminate\Support\Facades\Route;

Route::get('login', function () {
    return inertia('admin.auth.login');
})->name('login');

Route::get('login-2', function () {
    return inertia('admin.auth.login-2');
})->name('login');

Route::get('/', function () {
    return inertia('admin.dashboard.index');
})->name('dashboard');
