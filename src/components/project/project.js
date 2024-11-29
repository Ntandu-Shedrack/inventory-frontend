import React, { useState } from "react";

function Project() {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: "",
    title: "",
    skillsUsed: "",
    description: "",
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
        "https://portfoliobackend-3tzc.onrender.com/api/projects",
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
        alert("Project saved successfully!");
        console.log("Response:", data);

        // Clear form fields
        setFormData({
          userId: "",
          title: "",
          skillsUsed: "",
          description: "",
        });
      } else {
        alert("Failed to save the project. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the project.");
    }
  };

  return (
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <form
        className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
        onSubmit={handleSubmit} // Attach submit handler
      >
        {/* Section: Project */}
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

            {/* Project Title Field */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-900"
              >
                Project Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  required
                  value={formData.title} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Skills Used Field */}
            <div>
              <label
                htmlFor="skilsUsed"
                className="block text-sm font-medium text-gray-900"
              >
                Skills Applied
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="skilsUsed"
                  id="skilsUsed"
                  autoComplete="skilsUsed"
                  required
                  value={formData.skillsUsed} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Project Description Field */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-900"
              >
                Project Description
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="description"
                  rows={4}
                  required
                  value={formData.description} // Bind to state
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
                  title: "",
                  skillsUsed: "",
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
              Save Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Project;
