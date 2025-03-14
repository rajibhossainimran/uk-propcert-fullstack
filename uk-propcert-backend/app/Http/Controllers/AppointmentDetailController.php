<?php

namespace App\Http\Controllers;

use App\Models\AppointmentDetail;
use Illuminate\Http\Request;

class AppointmentDetailController extends Controller
{
    public function index()
    {
        return response()->json(AppointmentDetail::with('services')->get(), 200);
    }
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'user_id' => 'required|exists:users,id',
        'booking_id' => 'required|unique:appointment_details,booking_id',
        'name' => 'required|string',
        'email' => 'required|email',
        'phone' => 'required|string',
        'property_address' => 'required|string',
        'property_details' => 'nullable|string',
        'date' => 'required|date',
        'total_price' => 'required|numeric',
        'certifier' => 'nullable|string',
        'payment_status' => 'nullable|string', 
    ]);

    
    $validatedData['payment_status'] = $validatedData['payment_status'] ?? 'pending';

    $appointment = AppointmentDetail::create($validatedData);

    return response()->json($appointment, 201);
}


    public function show($id)
    {
        $appointment = AppointmentDetail::with('services')->find($id);
        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }
        return response()->json($appointment, 200);
    }

    public function update(Request $request, $id)
    {
        $appointment = AppointmentDetail::find($id);
        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        $appointment->update($request->all());
        return response()->json($appointment, 200);
    }

    public function destroy($id)
    {
        $appointment = AppointmentDetail::find($id);
        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        $appointment->delete();
        return response()->json(['message' => 'Appointment deleted'], 200);
    }

        // get data by status 
        public function getServiceDetailByStatus($status)
        {
            $validStatuses = ['pending', 'approved', 'completed'];
        
            if (!in_array($status, $validStatuses)) {
                return response()->json(['message' => 'Invalid status'], 400);
            }
        
            $services = AppointmentDetail::where('order_status', $status)->get();
        
            if ($services->isEmpty()) {
                return response()->json(['message' => 'No services found'], 404);
            }
        
            return response()->json($services, 200);
        }
        
        

        public function updateStatus(Request $request, $id)
        {
            $validated = $request->validate([
                'order_status' => 'required|in:pending,approved,completed',
                'certifier' => 'required_if:status,approved|nullable|exists:users,id'
            ]);

            $appointment = AppointmentDetail::findOrFail($id);
            
            $updateData = ['order_status' => $validated['order_status']];
            
            if ($validated['order_status'] === 'approved') {
                $updateData['certifier'] = $validated['certifier'];
            }
            
            if ($validated['order_status'] === 'completed') {
                $updateData['order_status'] = 'completed';
                
            }

            $appointment->update($updateData);

            return response()->json($appointment);
}

    public function getServicesByUserId($user_id)
    {
        $services = AppointmentDetail::where('user_id', $user_id)->get();

        if ($services->isEmpty()) {
            return response()->json(['message' => 'No services found for this user'], 404);
        }

        return response()->json($services, 200);
    }


    public function getServicesDetailByBookingId($booking_id)
    {
        $service = AppointmentDetail::where('booking_id', $booking_id)->first();
    
        if (!$service) {
            return response()->json(['message' => 'No services found'], 404);
        }
    
        return response()->json([
            "name" => $service->name,
            "email" => $service->email,
            "details" => $service->property_details, 
            "address" => $service->property_address,
            "phone" => $service->phone,
            "date" => $service->date,
            "order_status" => $service->order_status
        ], 200);
    }
}
