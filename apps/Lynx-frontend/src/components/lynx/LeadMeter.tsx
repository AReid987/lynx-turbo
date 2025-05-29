import React from "react";
interface LeadMeterProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}
export function LeadMeter({
  label,
  value,
  maxValue,
  color
}: LeadMeterProps) {
  const percentage = Math.min(value / maxValue * 100, 100);
  return <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-mono" style={{
        color
      }}>
          {value.toLocaleString()}
        </span>
      </div>
      <div className="h-2 rounded-full neu-meter overflow-hidden">
        <div className="h-full transition-all duration-500 rounded-full" style={{
        width: `${percentage}%`,
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}`
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