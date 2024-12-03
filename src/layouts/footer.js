import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-white text-gray-800 shadow-md rounded-t-lg">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tzc_him/profilecard/?igsh=ZzR6NTE3YngxZHAx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shedrack-ntandu-1ab209327"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Ntandu-Shedrack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>

            {/* Copyright Info */}
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ntandu S.J. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
