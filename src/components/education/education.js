import React, { useState } from 'react';

function Education() {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: '',
    courseOrDegree: '',
    schoolOrUniversity: '',
    gradeOrScore: '',
    admissionYear: '',
    graduationYear: '',
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
      const response = await fetch('https://portfoliobackend-3tzc.onrender.com/api/educations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Education saved successfully!');
        console.log('Response:', data);

        // Clear form fields
        setFormData({
          userId: '',
          courseOrDegree: '',
          schoolOrUniversity: '',
          gradeOrScore: '',
          admissionYear: '',
          graduationYear: '',
        });
      } else {
        alert('Failed to save the education. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the education.');
    }
  };

  return (
    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <form
        className="space-y-8 divide-y divide-gray-200 sm:space-y-5"
        onSubmit={handleSubmit} // Attach submit handler
      >
        {/* Section: Contact Information */}
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

            {/* Course Title Field */}
            <div>
              <label
                htmlFor="courseOrDegree"
                className="block text-sm font-medium text-gray-900"
              >
                Course Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="courseOrDegree"
                  id="courseOrDegree"
                  autoComplete="courseOrDegree"
                  required
                  value={formData.courseOrDegree} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* School/University Title Field */}
            <div>
              <label
                htmlFor="schoolOrUniversity"
                className="block text-sm font-medium text-gray-900"
              >
                School/University
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="schoolOrUniversity"
                  id="schoolOrUniversity"
                  autoComplete="schoolOrUniversity"
                  required
                  value={formData.schoolOrUniversity} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Grade/Score Field */}
            <div>
              <label
                htmlFor="gradeOrScore"
                className="block text-sm font-medium text-gray-900"
              >
                Grade/Score
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="gradeOrScore"
                  id="gradeOrScore"
                  autoComplete="gradeOrScore"
                  required
                  value={formData.gradeOrScore} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Admission Year Field */}
            <div>
              <label
                htmlFor="admissionYear"
                className="block text-sm font-medium text-gray-900"
              >
                Admission Year
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="admissionYear"
                  id="admissionYear"
                  autoComplete="admissionYear"
                  required
                  value={formData.admissionYear} // Bind to state
                  onChange={handleChange} // Update state on change
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Graduation Year Field */}
            <div>
              <label
                htmlFor="graduationYear"
                className="block text-sm font-medium text-gray-900"
              >
                Graduation Year
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="graduationYear"
                  id="graduationYear"
                  autoComplete="graduationYear"
                  required
                  value={formData.graduationYear} // Bind to state
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
                setFormData({ userId: '', title: '', description: '' })
              } // Reset form fields
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Save Education
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Education;
