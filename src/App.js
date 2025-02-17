import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainLayout from "./Layouts/MainLayout";
import LoadingSpinner from "./Components/LoadingSpinner"; // Loading Component

// Pages
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import EmailVerification from "./Pages/EmailVerification";
import Items from "./Pages/Items";

// Function to check if user is authenticated
const isAuthenticated = () => localStorage.getItem("authToken") !== null;

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuth(isAuthenticated());
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LoadingSpinner />;
  return auth ? children : <Navigate to="/login" replace />;
};

// Public Route Component (Prevents logged-in users from accessing auth pages)
const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/" replace /> : children;
};

function App() {
  return (
    <Routes>
      {/* Public Authentication Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />
      <Route
        path="/verify-email"
        element={
          <PublicRoute>
            <EmailVerification />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/items"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Items />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      {/* Add more routes inside MainLayout */}
    </Routes>
  );
}

export default App;
