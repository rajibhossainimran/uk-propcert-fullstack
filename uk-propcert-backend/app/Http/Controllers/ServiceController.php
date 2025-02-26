<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

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
}
