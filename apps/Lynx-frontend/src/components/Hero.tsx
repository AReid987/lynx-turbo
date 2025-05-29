import React from "react";
export function Hero() {
  return <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 pt-20 text-center relative">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#19FAF2] to-[#10A49E]">
            Your AI Sales Agent that Never Sleeps
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lynx autonomously generates and qualifies leads for your sales team
            24/7, so you can focus on closing deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-[#19FAF2] hover:bg-[#19FAF2]/90 rounded-md">
              Start Free Trial
            </a>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-input rounded-md hover:bg-accent">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>;
}