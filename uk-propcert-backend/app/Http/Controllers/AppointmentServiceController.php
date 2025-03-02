<?php

namespace App\Http\Controllers;

use App\Models\AppointmentService;
use Illuminate\Http\Request;

class AppointmentServiceController extends Controller
{
    public function index()
    {
        return response()->json(AppointmentService::all(), 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'booking_id' => 'required|exists:appointment_details,booking_id',
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'service_id' => 'required|exists:services,id',
            'certifier' => 'nullable|string',
        ]);

        $service = AppointmentService::create($validatedData);
        return response()->json($service, 201);
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
