<?php

use App\Http\Controllers\AppointmentDetailController;
use App\Http\Controllers\AppointmentServiceController;
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

// get inspector data 
Route::get('/inspectors', [UsersController::class, 'getInspectors']);

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
Route::get('/appointment-services/{user_id}', [AppointmentDetailController::class, 'getServicesByUserId']);
Route::get('/appointmentdetails/{booking_id}', [AppointmentDetailController::class, 'getServicesDetailByBookingId']);

// appointment service route getServicesDetailByBookingId
Route::get('/appointment-services', [AppointmentServiceController::class, 'index']);
Route::post('/appointment-services', [AppointmentServiceController::class, 'store']);
Route::get('/appointment-services/{id}', [AppointmentServiceController::class, 'show']);
Route::put('/appointment-services/{id}', [AppointmentServiceController::class, 'update']);
Route::delete('/appointment-services/{id}', [AppointmentServiceController::class, 'destroy']);
Route::get('/appointmentServices/{booking_id}', [AppointmentServiceController::class, 'getServicesByBookingId']);
// get approved services 
Route::get('/approvedservices/{user_id}', [AppointmentServiceController::class, 'getApprovedServicesByUserId']);
// put completed services by inspector 
Route::put('/appointment-services/{id}/update-status', [AppointmentServiceController::class, 'updateStatusComplete']);
// get inspector completed services 
Route::get('completedservices/{user_id}', [AppointmentServiceController::class, 'getCompletedServices']);

// get service details data by order_status 
Route::get('/appointmentdetails/{status}', [AppointmentDetailController::class, 'getServiceDetailByStatus']);
// update status of appointment
Route::put('/appointmentdetails/{id}/{status}', [AppointmentDetailController::class, 'updateStatus']);
Route::put('/appointmentdetails-services/{id}/status', [AppointmentDetailController::class, 'updateStatus']);



// get service data by status 
Route::get('/appointment/{status}', [AppointmentServiceController::class, 'getServiceByStatus']);
// update status of appointment
Route::put('/appointment/{id}/{status}', [AppointmentServiceController::class, 'updateStatus']);
Route::put('/appointment-services/{id}/status', [AppointmentServiceController::class, 'updateStatus']);