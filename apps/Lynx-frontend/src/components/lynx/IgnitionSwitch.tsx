import React from "react";
import { Power } from "lucide-react";
interface IgnitionSwitchProps {
  isRunning: boolean;
  onToggle: () => void;
}
export function IgnitionSwitch({
  isRunning,
  onToggle
}: IgnitionSwitchProps) {
  return <button onClick={onToggle} className={`
        relative flex items-center justify-center
        w-32 h-32 rounded-full
        transition-all duration-500
        ${isRunning ? "neu-switch-active" : "neu-switch"}
      `}>
      <div className={`
        absolute inset-0 rounded-full
        ${isRunning ? "animate-glow" : ""}
      `} />
      <Power className={`
          w-12 h-12 
          transition-all duration-500
          ${isRunning ? "text-[#19FAF2]" : "text-muted-foreground"}
        `} />
      <style jsx>{`
        .neu-switch {
          background: var(--background);
          box-shadow:
            6px 6px 12px #1a1b1e,
            -6px -6px 12px #242529;
        }
        .neu-switch-active {
          background: var(--background);
          box-shadow:
            inset 6px 6px 12px #1a1b1e,
            inset -6px -6px 12px #242529,
            0 0 20px #19faf2;
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
          box-shadow: 0 0 20px #19faf2;
        }
      `}</style>
    </button>;
}