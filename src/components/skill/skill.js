import React, { useState } from "react";

function Skill() {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: "",
    skill: "",
    level: "",
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
        "https://portfoliobackend-3tzc.onrender.com/api/skills",
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
        alert("Skill saved successfully!");
        console.log("Response:", data);

        // Clear form fields
        setFormData({
          userId: "",
          title: "",
          description: "",
        });
      } else {
        alert("Failed to save the skill. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the skill.");
    }
  };

  return (
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <form
        className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
        onSubmit={handleSubmit} // Attach submit handler
      >
        {/* Section: Skill */}
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

            {/* Skill Title Field */}
            <div>
              <label
                htmlFor="skill"
                className="block text-sm font-medium text-gray-900"
              >
                Skill Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="skill"
                  id="skill"
                  autoComplete="skill"
                  required
                  value={formData.skill} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Skill Level Field */}
            <div>
              <label
                htmlFor="level"
                className="block text-sm font-medium text-gray-900"
              >
                Skill Level
              </label>
              <div className="mt-1 relative">
                <select
                  name="level"
                  id="level"
                  required
                  value={formData.level} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none shadow-sm"
                >
                  <option value="" disabled>
                    Select level
                  </option>
                  <option value="1">1 - Low</option>
                  <option value="2">2 - Medium</option>
                  <option value="3">3 - High</option>
                  <option value="4">4 - Master</option>
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
                setFormData({
                  userId: "",
                  title: "",
                  description: "",
                })
              } // Reset form fields
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Save Skill
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Skill;
