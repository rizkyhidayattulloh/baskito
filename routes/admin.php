<?php

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Route;

Route::get('login', function () {
    return inertia('admin.auth.login');
})->name('login');

Route::get('login-2', function () {
    return inertia('admin.auth.login-2');
})->name('login-2');

Route::post('login', [LoginController::class, 'login']);
Route::delete('logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/', function () {
    return inertia('admin.dashboard.index');
})->name('dashboard');

Route::get('select2', function () {
    return inertia('admin.select2.index');
})->name('select2');

Route::get('modal', function () {
    return inertia('admin.modal.index');
})->name('modal');

Route::get('pagination', function () {
    $users = \App\Models\User::paginate(1);

    $collections = UserResource::collection($users);

    return inertia('admin.pagination.index', compact('users', 'collections'));
})->name('pagination');
