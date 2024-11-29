import React, { useState } from "react";

function PersonalDetail() {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: "",
    address: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    linkedIn: "",
    website: "",
    maritalStatus: "",
    religion: "",
    passport: "",
    socialMedia: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form behavior

    try {
      const response = await fetch(
        "https://portfoliobackend-3tzc.onrender.com/api/personalDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Personal Details saved successfully!");
        console.log("Response:", data);

        // Clear form fields
        setFormData({
          userId: "",
          address: "",
          phone: "",
          dateOfBirth: "",
          gender: "",
          nationality: "",
          linkedIn: "",
          website: "",
          maritalStatus: "",
          religion: "",
          passport: "",
          socialMedia: "",
        });
      } else {
        alert("Failed to save the personal details. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the personal details.");
    }
  };

  return (
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <form
        className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
        onSubmit={handleSubmit} // Attach submit handler
      >
        {/* Section: Personal Details */}
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="mt-6 space-y-6 sm:mt-5">
            {/* UserId Field */}
            <div>
              {/* userId = 6734766454c64860fa89ba2f */}
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-900"
              >
                User Id
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="userId"
                  id="userId"
                  autoComplete="userId"
                  required
                  value={formData.userId} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Address Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  name="address"
                  id="address"
                  rows={4}
                  autoComplete="address"
                  required
                  value={formData.address} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  required
                  value={formData.phone} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Date of Birth Field */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-900"
              >
                Date Of Birth
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  autoComplete="dateOfBirth"
                  required
                  value={formData.dateOfBirth} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Gender Field */}
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-900"
              >
                Gender
              </label>
              <div className="mt-1 relative">
                <select
                  name="gender"
                  id="gender"
                  required
                  value={formData.gender} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none shadow-sm"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* Nationality Field */}
            <div>
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-900"
              >
                Nationality
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  autoComplete="nationality"
                  required
                  value={formData.nationality} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* LinkendIn Field */}
            <div>
              <label
                htmlFor="linkendIn"
                className="block text-sm font-medium text-gray-900"
              >
                LinkendIn Account
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="linkendIn"
                  id="linkendIn"
                  autoComplete="linkendIn"
                  required
                  value={formData.linkendIn} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Website Field */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-900"
              >
                Personal Website
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="website"
                  id="website"
                  autoComplete="website"
                  required
                  value={formData.website} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Marital Status Field */}
            <div>
              <label
                htmlFor="maritalStatus"
                className="block text-sm font-medium text-gray-900"
              >
                Marital Status
              </label>
              <div className="mt-1 relative">
                <select
                  name="maritalStatus"
                  id="maritalStatus"
                  required
                  value={formData.maritalStatus} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none shadow-sm"
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
            </div>

            {/* Religion Field */}
            <div>
              <label
                htmlFor="religion"
                className="block text-sm font-medium text-gray-900"
              >
                Religion
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="religion"
                  id="religion"
                  autoComplete="religion"
                  required
                  value={formData.religion} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Passport Field */}
            <div>
              <label
                htmlFor="passport"
                className="block text-sm font-medium text-gray-900"
              >
                Passport Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="passport"
                  id="passport"
                  autoComplete="passport"
                  value={formData.passport} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Social Media Field */}
            <div>
              <label
                htmlFor="socialMedia"
                className="block text-sm font-medium text-gray-900"
              >
                Social Media Links
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="socialMedia"
                  id="socialMedia"
                  autoComplete="socialMedia"
                  value={formData.socialMedia} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Submit */}
        <div className="pt-8 sm:pt-5">
          <div className="flex justify-end gap-x-6">
            <button
              type="reset"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
              onClick={() =>
                setFormData({
                  userId: "",
                  address: "",
                  phone: "",
                  dateOfBirth: "",
                  gender: "",
                  nationality: "",
                  linkedIn: "",
                  website: "",
                  maritalStatus: "",
                  religion: "",
                  passport: "",
                  socialMedia: "",
                })
              } // Reset form fields
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Save Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
