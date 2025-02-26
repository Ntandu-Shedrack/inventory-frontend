import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 5) {
      setError("Please enter a valid 5-digit OTP.");
      return;
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otpCode }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify OTP");
      }

      const data = await response.json();
      console.log("OTP verified successfully:", data);
      // Handle successful verification (e.g., redirect to another page)
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center rounded-r-3xl">
        {/* This div is empty just to match the image style */}
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button className="flex items-center text-gray-600 text-sm mb-4">
            <span className="mr-1">
              <ChevronLeft />
            </span>
            Back
          </button>

          {/* Title */}
          <h2 className="text-2xl font-semibold">Enter OTP</h2>
          <p className="text-gray-500 text-sm mt-1">
            We have shared a five digit code to your registered email address,
            please enter the code to continue.
          </p>

          {/* OTP Input Fields */}
          <div className="flex justify-between my-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                maxLength="1"
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Verify Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
