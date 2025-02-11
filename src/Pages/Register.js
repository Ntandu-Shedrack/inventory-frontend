import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");

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
            <h2 className="text-2xl font-semibold mt-2">Welcome 👋</h2>
            <p className="text-gray-500">Please fill the form to Sign up</p>
          </div>

          {/* Register Form */}
          <form className="mt-6 space-y-4">
            {/* Full Name Field */}
            <div>
              <label className="text-gray-600 text-sm">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            {/* Username Field */}
            <div>
              <label className="text-gray-600 text-sm">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="text-gray-600 text-sm">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            {/* Phone Number Field */}
            <div>
              <label className="text-gray-600 text-sm">Phone Number</label>
              <div className="w-full">
                <PhoneInput
                  country={"tz"}
                  value={phone}
                  onChange={setPhone}
                  containerClass="w-full border !rounded-lg !focus:outline-none !focus:ring-2 !focus:ring-blue-500"
                  inputClass="!w-full !py-2 !border !rounded-lg !focus:outline-none !focus:ring-2 !focus:ring-blue-500"
                  buttonClass="!border-r !bg-gray-100"
                />
              </div>
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
            {/* Confirm Password Field */}
            <div className="relative">
              <label className="text-gray-600 text-sm">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/*Already have an account */}
            <div className="flex items-center justify-between">
              <label className="text-gray-500 text-sm">
                Already have an account?
              </label>
              <Link to="/login" className="text-blue-500 text-sm">
                Login
              </Link>
            </div>

            {/* Register Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
