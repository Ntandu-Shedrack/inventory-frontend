import { ChevronLeft } from "lucide-react";
import React from "react";

function ForgotPassword() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-50 flex items-center justify-center rounded-r-3xl">
        {/* Empty div just for styling */}
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-sm">
          {/* Back Button */}
          <button className="flex items-center text-gray-600 mb-4">
            <ChevronLeft className="mr-2" /> Back
          </button>

          {/* Title */}
          <h2 className="text-2xl font-semibold">Forgot Password</h2>
          <p className="text-gray-500 text-sm mb-6">
            Enter your registered email address. We’ll send you a code to reset
            your password.
          </p>

          {/* Forgot Password Form */}
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="text-gray-600 text-sm">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* OTP Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
