<?php

namespace App\Http\Controllers;

use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class ServiceCategoryController extends Controller
{
    // Get all categories
    public function index()
    {
        return response()->json(ServiceCategory::all());
    }

    // Create a new category
    public function store(Request $request)
    {
        $request->validate(['name' => 'required|unique:service_categories']);
        $category = ServiceCategory::create($request->all());
        return response()->json($category, 201);
    }

    // Delete a category
    public function destroy($id)
    {
        ServiceCategory::destroy($id);
        return response()->json(['message' => 'Category deleted successfully']);
    }
}
