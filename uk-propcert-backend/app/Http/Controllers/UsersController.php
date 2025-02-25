<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;

class UsersController extends Controller
{
    // **🔹 1. Register User**
    public function register(StoreUserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        // Create and store authentication token
        $token = $user->createToken('auth_token')->plainTextToken;
        $user->update(['api_token' => $token]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user
        ], 201);
    }

    // **🔹 2. Login User**
    public function login(AuthUserRequest $request)
    {
        $user = User::where('email', $request->email)
            ->where('role', $request->role)
            ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials or role mismatch'],
            ]);
        }

        // Create new token and update user record
        $token = $user->createToken('auth_token')->plainTextToken;
        $user->update(['api_token' => $token]);

        return response()->json([
            'message' => 'User login successfully',
            'token' => $token,
            'user' => $user
        ], 200);
    }

    // **🔹 3. Logout User** (Fixed)
    public function logout(Request $request)
    {
        try {
            $user = $request->user();

            if ($user) {
                $user->currentAccessToken()->delete();
                $user->update(['api_token' => null]);

                Log::info("User {$user->id} logged out");  
                return response()->json(['message' => 'Logged out successfully'], 200);
            }

            return response()->json(['error' => 'Unauthorized'], 401);
        } catch (\Exception $e) {
            Log::error('Logout failed: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong'], 500);
        }
    }
}