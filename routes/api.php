<?php

use App\Http\Controllers\PostControlador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', [PostControlador::class, 'index']);
Route::post('/', [PostControlador::class, 'store']);
Route::delete('/{id}', [PostControlador::class, 'destroy']);
Route::get('/like/{id}', [PostControlador::class, 'like']);
