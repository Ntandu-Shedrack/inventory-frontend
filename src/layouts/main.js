import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";

// Map route paths to titles
const routeTitles = {
  "/": "About Shedrack Ntandu",
  "/resume": "Resume",
  "/contact": "Get In Touch",
};

export default function Main({ children }) {
  const location = useLocation();

  // Get the page title based on the current route
  const pageTitle = routeTitles[location.pathname] || "Default Title";

  return (
    <div className="min-h-full">
      <Navigation />

      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-2xl font-bold tracking-tight text-gray-900">
            {pageTitle}
          </p>
        </div>
      </header>

      {/* Dynamic Page Content */}
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
