import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Auth Provider to wrap your app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on page load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Log out function
  const logout = () => {
    localStorage.removeItem("authToken"); // Clear token
    setIsAuthenticated(false); // Update state
  };

  // Login function
  const login = () => {
    localStorage.setItem("authToken", "some-fake-token"); // Simulate login token
    setIsAuthenticated(true); // Update state
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
