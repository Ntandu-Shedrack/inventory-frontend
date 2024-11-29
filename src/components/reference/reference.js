import React, { useState } from "react";

function Reference() {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: "",
    refereeName: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
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
        "https://portfoliobackend-3tzc.onrender.com/api/references",
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
        alert("Reference saved successfully!");
        console.log("Response:", data);

        // Clear form fields
        setFormData({
          userId: "",
          refereeName: "",
          jobTitle: "",
          companyName: "",
          email: "",
          phone: "",
        });
      } else {
        alert("Failed to save the reference. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the reference.");
    }
  };

  return (
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <form
        className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
        onSubmit={handleSubmit} // Attach submit handler
      >
        {/* Section: Reference */}
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

            {/* Referee Name Field */}
            <div>
              <label
                htmlFor="refereeName"
                className="block text-sm font-medium text-gray-900"
              >
                Referee Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="refereeName"
                  id="refereeName"
                  autoComplete="refereeName"
                  required
                  value={formData.refereeName} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Reference Job Title Field */}
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-900"
              >
                Job Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  autoComplete="jobTitle"
                  required
                  value={formData.jobTitle} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Reference Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Referee Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Phone Field */}
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
                  refereeName: "",
                  jobTitle: "",
                  companyName: "",
                  email: "",
                  phone: "",
                })
              } // Reset form fields
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Save Reference
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Reference;
