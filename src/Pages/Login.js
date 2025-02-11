import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-50 flex items-center justify-center rounded-r-3xl">
        {/* This div is empty just to match the image style */}
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center">
            <img
              src="/app-logo.png"
              alt="Inventory Logo"
              className="w-22 mx-auto"
            />
            <h2 className="text-2xl font-semibold mt-2">Welcome Back 😊</h2>
            <p className="text-gray-500">Please login here</p>
          </div>

          {/* Login Form */}
          <form className="mt-6 space-y-4">
            {/* Email Field */}
            <div>
              <label className="text-gray-600 text-sm">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="text-gray-600 text-sm">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span>Remember Me</span>
              </label>
              <Link to="/forgot-password" className="text-blue-500 text-sm">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
