<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\AppointmentService;
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


    // get data by status 
    public function getServiceByStatus($status)
{
    $validStatuses = ['pending', 'approved', 'completed'];

    if (!in_array($status, $validStatuses)) {
        return response()->json(['message' => 'Invalid status'], 400);
    }

    $services = AppointmentService::where('status', $status)->get();

    if ($services->isEmpty()) {
        return response()->json(['message' => 'Service not found'], 404);
    }

    return response()->json($services, 200);
}

public function updateStatus(Request $request, $id)
{
    $validated = $request->validate([
        'status' => 'required|in:pending,approved,completed',
        'certifier' => 'required_if:status,approved|nullable|exists:users,id'
    ]);

    $appointment = AppointmentService::findOrFail($id);
    
    $updateData = ['status' => $validated['status']];
    
    if ($validated['status'] === 'approved') {
        $updateData['certifier'] = $validated['certifier'];
    }
    
    if ($validated['status'] === 'completed') {
        $updateData['order_status'] = 'completed';
        // Add any additional completion logic here
    }

    $appointment->update($updateData);

    return response()->json($appointment);
}


public function getServicesByBookingId($booking_id)
{
    $services = AppointmentService::where('booking_id', $booking_id)->get();

    if ($services->isEmpty()) {
        return response()->json(['message' => 'No services found'], 404);
    }

    return response()->json($services, 200);
}

}
