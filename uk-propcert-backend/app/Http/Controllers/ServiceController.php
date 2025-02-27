<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ServiceController extends Controller
{
    // Get all services with category
    public function index()
    {
        return response()->json(Service::with('category')->get());
    }

    // Create a new service
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:service_categories,id',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $service = Service::create($request->all());
        return response()->json($service, 201);
    }

    // Update an existing service
    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'required|exists:service_categories,id',
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('services')->ignore($id)
            ],
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $service = Service::findOrFail($id);
        $service->update($request->all());

        return response()->json($service);
    }

    // Delete a service
    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return response()->json([
            'message' => 'Service deleted successfully'
        ]);
    }
}