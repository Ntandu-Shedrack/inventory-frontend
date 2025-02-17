import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/password-reset/send-password-reset-email",
        { email }
      );
      setMessage("OTP has been sent to your email address.");
      navigate("/verify-email");
    } catch (error) {
      setMessage("Failed to send OTP. Please try again.");
    }
  };

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
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label className="text-gray-600 text-sm">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* OTP Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Send OTP
            </button>
          </form>

          {/* Message */}
          {message && <p className="text-sm text-gray-600 mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
