import React from "react";
import { Search, Bell, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");

    navigate("/login");
    console.log("User logged out");
  };

  return (
    <div className="flex justify-between items-center p-6">
      {/* Greetings */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Hello {localStorage.getItem("name")} 👋
        </h1>
        <p className="text-gray-500">
          {(() => {
            const hour = new Date().getHours();
            if (hour < 12) return "Good Morning";
            if (hour < 18) return "Good Afternoon";
            return "Good Evening";
          })()}
        </p>
      </div>

      {/* Search & Notifications */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />

        {/* User Profile */}
        <div className="flex items-center gap-3">
          {/* <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          /> */}
          <CircleUserRound className="w-10 h-10 rounded-full border border-gray-300" />
          <div>
            <p className="font-semibold text-gray-800">Mathias W.</p>
            <p className="text-gray-500 text-sm">Store Manager</p>
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
