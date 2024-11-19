import React, { useState, useEffect } from "react";
import {
  DocumentArrowDownIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";

function About() {
  const [user, setUser] = useState(null);
  const [objective, setObjective] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        // Fetch user and objective data concurrently
        const [userRes, objectiveRes] = await Promise.all([
          fetch(
            process.env.REACT_APP_USER_API ||
              "https://portfoliobackend-3tzc.onrender.com/api/users/"
          ),
          fetch(
            process.env.REACT_APP_OBJECTIVE_API ||
              "https://portfoliobackend-3tzc.onrender.com/api/objectives/"
          ),
        ]);

        const userData = await userRes.json();
        const objectiveData = await objectiveRes.json();

        // Update state only if responses are successful
        if (userRes.ok) {
          setUser(userData[0]);
        } else throw new Error("Failed to fetch user data");

        if (objectiveRes.ok) {
          setObjective(objectiveData[0]);
        } else throw new Error("Failed to fetch objective data");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error: {error}. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/me3.jpg"
              alt="Profile"
              onError={(e) => (e.target.src = "/fallback-image.jpg")}
              className="w-36 h-36 rounded-full object-cover border-6 border-gray-200"
            />
          </div>
          {/* Details */}
          <div className="text-center lg:text-left mt-6 lg:mt-0">
            <p className="text-md text-gray-500">
              Full-Stack Software Developer
            </p>
            <h1 className="text-4xl font-bold text-gray-900">
              {user?.name || "Anonymous User"}
            </h1>
            <p className="text-gray-600 mt-4">
              {objective?.objective || "No objective set."}
            </p>
            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <button
                className="flex items-center px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow hover:bg-gray-100 transition"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                Download CV
              </button>
              <button className="px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow hover:bg-gray-100 transition">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* "What I Do" Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Service Card: Software Development */}
            <ServiceCard
              icon={CodeBracketIcon}
              title="Software Development"
              description="Building robust, scalable, and efficient software applications."
            />
            {/* Service Card: ICT Technical Support */}
            <ServiceCard
              icon={ComputerDesktopIcon}
              title="ICT Technical Support"
              description="Ensuring seamless operations of hardware, software, and networks."
            />
            {/* Service Card: Web Design */}
            <ServiceCard
              icon={PaintBrushIcon}
              title="Web Design"
              description="Creating visually appealing and user-friendly website designs."
            />
            {/* Service Card: Marketing */}
            <ServiceCard
              icon={MegaphoneIcon}
              title="Marketing"
              description="Driving brand awareness and conversions through strategic campaigns."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable ServiceCard Component
function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start">
      <div className="h-8 w-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
        <Icon className="h-5 w-5" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default About;
