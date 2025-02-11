import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar, { SidebarItem } from "./Components/Sidebar.js";
import {
  BriefcaseBusiness,
  FileText,
  HousePlus,
  LayoutDashboard,
  PackagePlus,
  ShoppingBag,
  SlidersVertical,
  Wrench,
} from "lucide-react";

// Import Pages
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword.js";
import EmailVerification from "./Pages/EmailVerification.js";
// import Items from "./pages/Items";
// import Tools from "./pages/Tools";

function App() {
  return (
    <main className="App">
      <Routes>
        {/* Login & Registration without Sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<EmailVerification />} />

        {/* Pages with Sidebar */}
        <Route
          path="/*"
          element={
            <div className="flex w-full">
              <Sidebar>
                <SidebarItem
                  icon={<LayoutDashboard size={20} />}
                  text="Dashboard"
                  path="/"
                />
                <SidebarItem
                  icon={<ShoppingBag size={20} />}
                  text="Items"
                  path="/items"
                />
                <SidebarItem
                  icon={<Wrench size={20} />}
                  text="Tools"
                  path="/tools"
                />
                <SidebarItem
                  icon={<SlidersVertical size={20} />}
                  text="Assets"
                  path="/assets"
                />
                <SidebarItem
                  icon={<BriefcaseBusiness size={20} />}
                  text="Projects"
                  path="/projects"
                />
                <SidebarItem
                  icon={<PackagePlus size={20} />}
                  text="Requests"
                  path="/requests"
                />
                <SidebarItem
                  icon={<HousePlus size={20} />}
                  text="On Hand"
                  path="/on-hand"
                />
                <SidebarItem
                  icon={<FileText size={20} />}
                  text="GRN Report"
                  path="/grn-report"
                />
              </Sidebar>

              {/* Page Content */}
              <div className="flex-grow p-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  {/* <Route path="/items" element={<Items />} /> */}
                  {/* <Route path="/tools" element={<Tools />} /> */}
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
