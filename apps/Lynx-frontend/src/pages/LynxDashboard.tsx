import React, { useEffect, useState } from "react";
import { IgnitionSwitch } from "../components/lynx/IgnitionSwitch";
import { StatusMeter } from "../components/lynx/StatusMeter";
import { TerminalConsole } from "../components/lynx/TerminalConsole";
import { LeadMeter } from "../components/lynx/LeadMeter";
export function LynxDashboard() {
  const [isRunning, setIsRunning] = useState(false);
  const [systemStatus, setSystemStatus] = useState<"idle" | "starting" | "running" | "error" | "retry">("idle");
  const [totalLeads, setTotalLeads] = useState(0);
  const [qualifiedLeads, setQualifiedLeads] = useState(0);
  useEffect(() => {
    if (isRunning && systemStatus === "running") {
      const leadInterval = setInterval(() => {
        setTotalLeads(prev => Math.min(prev + Math.floor(Math.random() * 5), 1000));
      }, 2000);
      const qualificationInterval = setInterval(() => {
        setQualifiedLeads(prev => Math.min(prev + Math.floor(Math.random() * 3), totalLeads));
      }, 3000);
      return () => {
        clearInterval(leadInterval);
        clearInterval(qualificationInterval);
      };
    }
  }, [isRunning, systemStatus, totalLeads]);
  useEffect(() => {
    if (isRunning) {
      setSystemStatus("starting");
      const timer = setTimeout(() => {
        setSystemStatus("running");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setSystemStatus("idle");
      setTotalLeads(0);
      setQualifiedLeads(0);
    }
  }, [isRunning]);
  useEffect(() => {
    if (isRunning && systemStatus === "running") {
      const errorCheck = setInterval(() => {
        if (Math.random() < 0.1) {
          // 10% chance of error
          setSystemStatus("error");
          setTimeout(() => {
            setSystemStatus("retry");
            setTimeout(() => setSystemStatus("running"), 2000);
          }, 2000);
        }
      }, 15000);
      return () => clearInterval(errorCheck);
    }
  }, [isRunning, systemStatus]);
  return <div className="p-6 pt-20 min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#19FAF2] to-[#10A49E]">
              Lynx Control Center
            </h1>
            <p className="text-sm text-muted-foreground">
              AI Lead Generation System
            </p>
          </div>
          <IgnitionSwitch isRunning={isRunning} onToggle={() => setIsRunning(!isRunning)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status Section */}
          <div className="neu-container p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">System Status</h2>
            <StatusMeter status={systemStatus} />
            <div className="mt-4 text-sm text-muted-foreground">
              {systemStatus === "running" && "All systems operational"}
              {systemStatus === "starting" && "Initializing systems..."}
              {systemStatus === "error" && "Error detected - initiating recovery"}
              {systemStatus === "retry" && "Recovering system state..."}
              {systemStatus === "idle" && "System ready - press ignition to start"}
            </div>
          </div>
          {/* Metrics Section */}
          <div className="neu-container p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Lead Metrics</h2>
            <div className="space-y-4">
              <LeadMeter label="Total Leads Found" value={totalLeads} maxValue={1000} color="#19FAF2" />
              <LeadMeter label="Qualified Leads" value={qualifiedLeads} maxValue={totalLeads || 1} color="#64FA19" />
            </div>
          </div>
        </div>
        {/* Terminal Section */}
        <div className="neu-container p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">System Logs</h2>
          <TerminalConsole isRunning={isRunning} />
        </div>
      </div>
      <style jsx>{`
        .neu-container {
          background: var(--background);
          box-shadow:
            20px 20px 60px #1a1b1e,
            -20px -20px 60px #242529;
          transition: all 0.3s ease;
        }
        .neu-container:hover {
          box-shadow:
            25px 25px 75px #1a1b1e,
            -25px -25px 75px #242529;
        }
      `}</style>
    </div>;
}