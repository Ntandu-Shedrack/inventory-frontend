import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Icons
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

// Sidebar Items Configuration
const sidebarItems = [
  { icon: <LayoutDashboard size={20} />, text: "Dashboard", path: "/" },
  { icon: <ShoppingBag size={20} />, text: "Items", path: "/items" },
  { icon: <Wrench size={20} />, text: "Tools", path: "/tools" },
  { icon: <SlidersVertical size={20} />, text: "Assets", path: "/assets" },
  {
    icon: <BriefcaseBusiness size={20} />,
    text: "Projects",
    path: "/projects",
  },
  { icon: <PackagePlus size={20} />, text: "Requests", path: "/requests" },
  { icon: <HousePlus size={20} />, text: "On Hand", path: "/on-hand" },
  { icon: <FileText size={20} />, text: "GRN Report", path: "/grn-report" },
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/verify-email",
  ];
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen">
      {/* Sidebar (hidden on auth pages) */}
      {!isAuthPage && (
        <Sidebar className="fixed">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              path={item.path}
              active={location.pathname === item.path}
            />
          ))}
        </Sidebar>
      )}

      {/* Main Content */}
      <div className={`flex flex-col flex-grow ${!isAuthPage ? "" : ""}`}>
        {/* Header (hidden on auth pages) */}
        {!isAuthPage && <Header className="fixed" />}

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto">{children}</div>

        {/* Footer (hidden on auth pages) */}
        {!isAuthPage && <Footer className="fixed" />}
      </div>
    </div>
  );
};

export default MainLayout;
