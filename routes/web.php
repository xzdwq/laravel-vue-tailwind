<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ClientController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ ClientController::class, 'index']);

Route::get('/dashboard', [ DashboardController::class, 'index']);
Route::get('/dashboard/{any}', [ DashboardController::class, 'index'])->where('any', '(.*)');