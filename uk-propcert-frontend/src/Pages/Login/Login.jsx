import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Sign in to your account</p>

        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 rounded border-gray-300" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          {/* Login Button */}
          <Link to="/dashboard">
          <button
            type="submit"
            className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Sign In
          </button>
          </Link>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
