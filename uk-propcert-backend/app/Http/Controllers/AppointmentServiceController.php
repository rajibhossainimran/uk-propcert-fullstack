<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\AppointmentService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

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
            'booking_id'   => $service['booking_id'], 
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

public function getApprovedServicesByUserId($user_id)
{
    $services = AppointmentService::where('certifier', $user_id)
                                  ->where('status', 'approved')
                                  ->get();

    if ($services->isEmpty()) {
        return response()->json(['message' => 'No approved services found'], 404);
    }

    return response()->json($services, 200);
}

public function updateStatusComplete(Request $request, $id)
{
    $validated = $request->validate([
        'status' => 'required|in:pending,approved,completed',
        'certificate_img' => 'required_if:status,completed|url',
        'issued' => 'required_if:status,completed|date',
        'expire' => 'required_if:status,completed|date',
        'submit_date' => 'required_if:status,completed|date',
    ]);

    $appointment = AppointmentService::findOrFail($id);
    
    $updateData = [
        'status' => $validated['status'],
        'certificate_img' => $validated['certificate_img'] ?? null,
        'issued' => $validated['issued'] ?? null,
        'expire' => $validated['expire'] ?? null,
        'submit_date' => $validated['submit_date'] ?? null,
    ];

    if ($validated['status'] === 'completed') {
        $updateData['order_status'] = 'completed';
    }

    $appointment->update($updateData);

    return response()->json($appointment);
}


// get inspector all services 
public function getCompletedServices($user_id)
{
    // Query to fetch services where user_id matches and status is 'completed'
    $services = AppointmentService::where('certifier', $user_id)
                       ->where('status', 'completed')
                       ->get();

    // Return the services as JSON
    return response()->json($services);
}

}
