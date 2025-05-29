import React from "react";
import { ChevronLeft, ChevronRight, LayoutDashboard, Bot, Settings, BarChart, Mail } from "lucide-react";
interface SidebarProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  onNavigate: (page: "home" | "dashboard" | "lynx") => void;
  currentPage: "home" | "dashboard" | "lynx";
}
export function Sidebar({
  expanded,
  setExpanded,
  onNavigate,
  currentPage
}: SidebarProps) {
  return <aside className={`fixed left-0 top-0 h-screen bg-background border-r transition-all duration-300 ${expanded ? "w-64" : "w-16"} z-50`}>
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {expanded && <div className="flex items-center">
            <img src="/BlackNoir_2.1_Lynx_Logo.png" alt="Lynx Logo" className="h-10 w-10" />
          </div>}
        <button onClick={() => setExpanded(!expanded)} className={`p-1.5 rounded-lg hover:bg-accent transition-colors ${!expanded && "w-full flex justify-center"}`}>
          {expanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
      </div>
      <nav className="p-3 space-y-2">
        <NavItem icon={<LayoutDashboard />} label="Dashboard" expanded={expanded} active={currentPage === "dashboard"} onClick={() => onNavigate("dashboard")} />
        <NavItem icon={<Bot className="text-[#19FAF2]" />} label="Lynx" expanded={expanded} active={currentPage === "lynx"} onClick={() => onNavigate("lynx")} />
        <NavItem icon={<Mail />} label="Campaigns" expanded={expanded} />
        <NavItem icon={<BarChart />} label="Analytics" expanded={expanded} />
        <NavItem icon={<Settings />} label="Settings" expanded={expanded} />
      </nav>
    </aside>;
}
function NavItem({
  icon,
  label,
  expanded,
  active,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
  active?: boolean;
  onClick?: () => void;
}) {
  return <button onClick={onClick} className={`w-full flex items-center rounded-lg hover:bg-accent p-3 text-muted-foreground hover:text-foreground transition-colors ${!expanded ? "justify-center" : ""} ${active ? "bg-accent text-foreground" : ""}`}>
      {icon}
      {expanded && <span className="ml-3">{label}</span>}
    </button>;
}