import React, { useState, useEffect } from "react";
import {
  DocumentArrowDownIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function About() {
  const [user, setUser] = useState(null);
  const [objective, setObjective] = useState("");
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        // Fetch user, objective, and services data concurrently
        const [userRes, objectiveRes, serviceRes] = await Promise.all([
          fetch(
            process.env.REACT_APP_USER_API ||
              "https://portfoliobackend-3tzc.onrender.com/api/users/"
          ),
          fetch(
            process.env.REACT_APP_OBJECTIVE_API ||
              "https://portfoliobackend-3tzc.onrender.com/api/objectives/"
          ),
          fetch(
            process.env.REACT_APP_SERVICE_API ||
              "https://portfoliobackend-3tzc.onrender.com/api/services/"
          ),
        ]);

        const userData = await userRes.json();
        const objectiveData = await objectiveRes.json();
        const serviceData = await serviceRes.json();

        // Update state if responses are successful
        if (userRes.ok) setUser(userData[0]);
        if (objectiveRes.ok) setObjective(objectiveData[0]);
        if (serviceRes.ok) setService(serviceData);
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

  // Mapping service data to icons manually
  const getIcon = (title) => {
    switch (title) {
      case "Software Development":
        return CodeBracketIcon; // Code icon for software development
      case "IT Support Services":
        return ComputerDesktopIcon; // Computer desktop icon for IT support
      case "Web Design":
        return PaintBrushIcon; // Paintbrush icon for web design
      case "Network Security and Maintenance":
        return ShieldExclamationIcon; // Shield icon for network security and maintenance
      default:
        return null;
    }
  };

  return (
    <div className="bg-white py-12">
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/me1.jpg"
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
              <a
                href="https://drive.google.com/my-cv"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Ensures security for the new tab
                className="flex items-center px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow hover:bg-gray-100 transition"
              >
                <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                Download CV
              </a>
              <Link
                to="/contact" // Use Link to navigate to the Contact page
                className="px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow hover:bg-gray-100 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* "What I Do" Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Service Cards */}
            {service.map((s, index) => (
              <ServiceCard
                key={index}
                icon={getIcon(s.title)}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable ServiceCard Component
function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 w-full">
      {/* Icon Section */}
      <div className="h-16 w-16 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full mx-auto">
        {Icon && <Icon className="h-10 w-10" />}
      </div>

      {/* Title Section */}
      <h3 className="text-lg font-semibold text-gray-900 mt-4 text-center">
        {title}
      </h3>

      {/* Description Section */}
      {description && (
        <p className="text-gray-600 text-center mt-2">{description}</p>
      )}
    </div>
  );
}

export default About;
