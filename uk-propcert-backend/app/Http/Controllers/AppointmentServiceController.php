<?php

namespace App\Http\Controllers;

use App\Models\AppointmentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class AppointmentServiceController extends Controller
{
    public function index()
    {
        return response()->json(AppointmentService::all(), 200);
    }

    public function store(Request $request)
{
    $services = $request->input('services');

    foreach ($services as $service) {
        // Simply store the service without foreign key checks
        AppointmentService::create([
            'booking_id'   => $service['booking_id'], // No constraint on this field
            'name'         => $service['name'],
            'description'  => $service['description'],
            'price'        => $service['price'],
            'service_id'   => $service['service_id'],
            'certifier' => $service['certifier'] ?? null,
        ]);
    }

    return response()->json(['success' => true, 'message' => 'Services added successfully!']);
}

    public function show($id)
    {
        $service = AppointmentService::find($id);
        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }
        return response()->json($service, 200);
    }

    public function update(Request $request, $id)
    {
        $service = AppointmentService::find($id);
        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $service->update($request->all());
        return response()->json($service, 200);
    }

    public function destroy($id)
    {
        $service = AppointmentService::find($id);
        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $service->delete();
        return response()->json(['message' => 'Service deleted'], 200);
    }
}
