import React from "react";
import { Menu } from "lucide-react";
export function Navbar() {
  return <nav className="fixed top-0 w-full border-b bg-background/60 backdrop-blur-xl z-50 px-1">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center">
            <img src="/BlackNoir_2.1_Lynx_Logo.png" alt="Lynx Logo" className="h-24 w-24" />
            <span className="text-xl font-bold">Lynx</span>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Products
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">
              Enterprise
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">
              Pricing
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:inline-flex px-4 py-2 rounded-md hover:bg-accent transition-colors">
            Sign in
          </a>
          <a href="#" className="hidden md:inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Get Started
          </a>
          <button className="md:hidden p-2 hover:bg-accent rounded-md">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>;
}