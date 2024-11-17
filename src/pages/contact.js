import React from "react";
import {
  PaperClipIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column: Contact Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Contact Information
        </h2>
        <div className="space-y-4">
          {/* Phone Card */}
          <div className="flex items-center p-4 bg-white shadow rounded-lg border border-gray-200">
            <PhoneIcon
              className="h-6 w-6 text-indigo-600 mr-3"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-600">
              <strong>Phone:</strong>
              <br />
              (+255) 689-956-145
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="flex items-center p-4 bg-white shadow rounded-lg border border-gray-200">
            <FaWhatsapp className="h-6 w-6 text-green-600 mr-3" />
            <p className="text-sm text-gray-600">
              <strong>WhatsApp:</strong>
              <br />
              (+255) 689-956-145
            </p>
          </div>

          {/* Email Card */}
          <div className="flex items-center p-4 bg-white shadow rounded-lg border border-gray-200">
            <EnvelopeIcon
              className="h-6 w-6 text-indigo-600 mr-3"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-600">
              <strong>Email:</strong>
              <br />
              josantashedrack@gmail.com
            </p>
          </div>

          {/* Address Card */}
          <div className="flex items-center p-4 bg-white shadow rounded-lg border border-gray-200">
            <MapPinIcon
              className="h-6 w-6 text-indigo-600 mr-3"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-600">
              <strong>Address:</strong>
              <br />
              13 Nzasa Street, Sinza,
              <br />
              Dar es Salaam, Tanzania
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        {/* Form Heading */}
        <h2 className="text-2xl font-semibold text-gray-900">
          How can I help you?
        </h2>
        <form className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          {/* Section: Contact Information */}
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="mt-6 space-y-6 sm:mt-5">
              {/* Name Field */}
              <div className="sm:grid sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-gray-900"
                >
                  Attach a File
                </label>
                <div className="mt-1 flex justify-center rounded-md border border-dashed border-gray-300 px-6 py-10">
                  <div className="text-center">
                    <PaperClipIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-indigo-600 font-medium hover:text-indigo-500"
                      >
                        Upload a file
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
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
              >
                Reset
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
