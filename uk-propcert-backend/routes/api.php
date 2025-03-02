<?php

use App\Http\Controllers\AppointmentDetailController;
use App\Http\Controllers\ServiceCategoryController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

// Secure routes with authentication
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UsersController::class, 'logout']);
    Route::get('/users', function (Request $request) {
        return response()->json($request->user());
    });
});


// category route 

Route::get('/categories', [ServiceCategoryController::class, 'index']);
Route::post('/categories', [ServiceCategoryController::class, 'store']);
Route::delete('/categories/{id}', [ServiceCategoryController::class, 'destroy']);
Route::put('/categories/{id}', [ServiceCategoryController::class, 'update']);
// service route 
Route::get('/services', [ServiceController::class, 'index']);
Route::post('/services', [ServiceController::class, 'store']);
Route::put('services/{id}', [ServiceController::class, 'update']);
Route::delete('services/{id}', [ServiceController::class, 'destroy']);

// appointment details route 
Route::get('/appointments', [AppointmentDetailController::class, 'index']);
Route::post('/appointments', [AppointmentDetailController::class, 'store']);
Route::get('/appointments/{id}', [AppointmentDetailController::class, 'show']);
Route::put('/appointments/{id}', [AppointmentDetailController::class, 'update']);
Route::delete('/appointments/{id}', [AppointmentDetailController::class, 'destroy']);