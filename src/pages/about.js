import React from "react";
import {
  DocumentArrowDownIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";

function About() {
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
              className="w-60 h-60 rounded-full object-cover border-4 border-gray-200"
            />
          </div>
          {/* Details */}
          <div className="text-center lg:text-left mt-6 lg:mt-0">
            <p className="text-sm text-gray-500">
              Full-Stack Software Developer
            </p>
            <h1 className="text-4xl font-bold text-gray-900">
              Shedrack Ntandu
            </h1>
            <p className="text-gray-600 mt-4">
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
              convallis, risus non condimentum gravida, odio mauris ullamcorper
              felis, ut venenatis purus ex eu mi.
            </p>
            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <button className="flex items-center px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow hover:bg-gray-100 transition">
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
            <div className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                <CodeBracketIcon className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Software Development
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Building robust, scalable, and efficient software
                  applications.
                </p>
              </div>
            </div>

            {/* Service Card: ICT Technical Support */}
            <div className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                <ComputerDesktopIcon className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  ICT Technical Support
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Ensuring seamless operations of hardware, software, and
                  networks.
                </p>
              </div>
            </div>

            {/* Service Card: Web Design */}
            <div className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                <PaintBrushIcon className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Web Design
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Creating visually appealing and user-friendly website designs.
                </p>
              </div>
            </div>

            {/* Service Card: Marketing */}
            <div className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                <MegaphoneIcon className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Marketing
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Driving brand awareness and conversions through strategic
                  campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
