import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { LynxDashboard } from "./pages/LynxDashboard";
export function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState<"home" | "dashboard" | "lynx">("home");
  return <main className="min-h-screen w-screen bg-background">
      <Sidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded} onNavigate={setCurrentPage} currentPage={currentPage} />
      <div className={`transition-all duration-300 ${sidebarExpanded ? "pl-64" : "pl-16"}`}>
        <Navbar />
        {currentPage === "home" ? <Hero /> : currentPage === "dashboard" ? <Dashboard /> : <LynxDashboard />}
      </div>
    </main>;
}