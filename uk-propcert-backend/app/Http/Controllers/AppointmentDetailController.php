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
        ]);

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
}
