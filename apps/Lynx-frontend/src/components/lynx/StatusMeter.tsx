import React from "react";
interface StatusMeterProps {
  status: "idle" | "starting" | "running" | "error" | "retry";
}
export function StatusMeter({
  status
}: StatusMeterProps) {
  const getStatusColor = () => {
    switch (status) {
      case "running":
        return "#19FAF2";
      case "starting":
        return "#FAF219";
      case "error":
        return "#FA4119";
      case "retry":
        return "#FA9C19";
      default:
        return "#4B5563";
    }
  };
  const getStatusText = () => {
    switch (status) {
      case "running":
        return "System Operational";
      case "starting":
        return "Initializing Systems";
      case "error":
        return "System Error";
      case "retry":
        return "Attempting Recovery";
      default:
        return "System Idle";
    }
  };
  return <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Status</span>
        <span className="text-sm" style={{
        color: getStatusColor()
      }}>
          {getStatusText()}
        </span>
      </div>
      <div className="h-3 rounded-full neu-meter overflow-hidden">
        <div className="h-full transition-all duration-1000 rounded-full" style={{
        width: status === "idle" ? "0%" : "100%",
        backgroundColor: getStatusColor(),
        boxShadow: `0 0 10px ${getStatusColor()}`
      }} />
      </div>
      <style jsx>{`
        .neu-meter {
          background: var(--background);
          box-shadow:
            inset 3px 3px 6px #1a1b1e,
            inset -3px -3px 6px #242529;
        }
      `}</style>
    </div>;
}