import React, { useEffect, useState, useRef } from "react";
interface TerminalConsoleProps {
  isRunning: boolean;
}
export function TerminalConsole({
  isRunning
}: TerminalConsoleProps) {
  const [logs, setLogs] = useState<Array<{
    message: string;
    timestamp: string;
  }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isRunning) {
      const messages = ["Initializing Lynx AI system...", "Loading machine learning models...", "Connecting to lead sources...", "Starting lead discovery process...", "Analyzing potential leads...", "Applying qualification criteria...", "Processing results..."];
      let index = 0;
      const interval = setInterval(() => {
        if (index < messages.length) {
          const timestamp = new Date().toLocaleTimeString();
          setLogs(prev => [...prev, {
            message: messages[index],
            timestamp
          }]);
          index++;
        } else {
          // Cycle through ongoing operation messages
          const ongoingMessages = ["Scanning business networks...", "Analyzing company profiles...", "Processing lead data...", "Validating contact information...", "Updating lead database..."];
          const randomMessage = ongoingMessages[Math.floor(Math.random() * ongoingMessages.length)];
          const timestamp = new Date().toLocaleTimeString();
          setLogs(prev => [...prev.slice(-50), {
            message: randomMessage,
            timestamp
          }]);
        }
      }, 2000);
      return () => clearInterval(interval);
    } else {
      setLogs([]);
    }
  }, [isRunning]);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);
  return <div ref={terminalRef} className="h-64 overflow-y-auto font-mono text-sm p-4 rounded-lg neu-terminal">
      {logs.map(({
      message,
      timestamp
    }, index) => <div key={index} className="py-1">
          <span className="text-[#19FAF2]">[{timestamp}]</span>
          <span className="text-[#64FA19] ml-2">{">"}</span>
          <span className="ml-2">{message}</span>
        </div>)}
      {isRunning && <div className="py-1">
          <span className="text-[#19FAF2]">
            [{new Date().toLocaleTimeString()}]
          </span>
          <span className="text-[#64FA19] ml-2">{">"}</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>}
      <style jsx>{`
        .neu-terminal {
          background: var(--background);
          box-shadow:
            inset 3px 3px 6px #1a1b1e,
            inset -3px -3px 6px #242529;
        }
      `}</style>
    </div>;
}