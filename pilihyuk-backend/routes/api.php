<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PollController;

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


// create group route and prefix v1
Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('login', [
            AuthController::class, 'login'
        ]);
        Route::post('me', [
            AuthController::class, 'me'
        ]);
        Route::post('logout', [
            AuthController::class, 'logout'
        ]);
    });

    Route::prefix('poll')->group(function() {
        Route::post('/', [
            PollController::class, 'store'
        ]);
        Route::get('/', [
            PollController::class, 'index'
        ]);
        Route::get('/{poll}', [
            PollController::class, 'show'
        ]);
        Route::post('/{poll}/vote/{choise}', [
            PollController::class, 'vote'
        ]);
        Route::delete('/{poll}', [
            PollController::class, 'destroy'
        ]);
    });
});
