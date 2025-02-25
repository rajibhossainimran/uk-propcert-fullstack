import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { ukprop } from "../../Url/config";
import useValidation from "../../Error/useValidation";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Basic validation before sending request
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: ["Passwords do not match"] });
      setIsLoading(false);
      return;
    }

    try {
      // Correct Axios request without unnecessary headers
      const response = await axios.post(`${ukprop}/register`, formData);

      toast.success(response.data.message || "Registered successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });

      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        toast.error("Registration failed. Please try again.", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign up to get started
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {useValidation(errors, "name")}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {useValidation(errors, "email")}
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Register As</label>
            <div className="flex gap-4">
              {["customer", "inspector"].map((role) => (
                <label key={role} className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={formData.role === role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="mr-2 accent-lime-600"
                  />
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {useValidation(errors, "password")}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            {useValidation(errors, "confirmPassword")}
          </div>

          {/* Error Messages */}
          {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

          {/* Terms Checkbox */}
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2 rounded border-gray-300 accent-lime-600"
              required
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </span>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-2 rounded-lg transition duration-200 ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
