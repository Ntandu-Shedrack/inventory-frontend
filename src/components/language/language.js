import React, { useState } from "react";

function Language() {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: "",
    language: "",
    proficiency: "", // Updated to match the select field
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
        "https://portfoliobackend-3tzc.onrender.com/api/languages",
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
        alert("Language saved successfully!");
        console.log("Response:", data);

        // Clear form fields
        setFormData({
          userId: "",
          language: "",
          proficiency: "",
        });
      } else {
        alert("Failed to save the language. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the language.");
    }
  };

  return (
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <form
        className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
        onSubmit={handleSubmit} // Attach submit handler
      >
        {/* Section: Language */}
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="mt-6 space-y-6 sm:mt-5">
            {/* UserId Field */}
            <div>
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

            {/* Language Field */}
            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-900"
              >
                Language
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="language"
                  id="language"
                  autoComplete="language"
                  required
                  value={formData.language} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Proficiency Field */}
            <div>
              <label
                htmlFor="proficiency"
                className="block text-sm font-medium text-gray-900"
              >
                Proficiency
              </label>
              <div className="mt-1 relative">
                <select
                  name="proficiency"
                  id="proficiency"
                  required
                  value={formData.proficiency} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none shadow-sm"
                >
                  <option value="" disabled>
                    Select proficiency
                  </option>
                  <option value="Mother Tongue">Mother Tongue</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Professional">Professional</option>
                </select>
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
                setFormData({ userId: "", language: "", proficiency: "" })
              } // Reset form fields
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Save Language
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Language;
