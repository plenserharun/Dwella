"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Home, Building2, MapPin, Truck, Users, Menu, X, Search, Heart, User, Bell, ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/lease", label: "Lease" },
  { href: "/commercial", label: "Commercial" },
  { href: "/agents", label: "Find Agent" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-400/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Using uploaded Dwella logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/dwella-logo.png" 
                alt="Dwella" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">Dwella</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-gold-400"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <button className="flex items-center gap-1 px-4 py-2 text-gray-400 hover:text-white text-sm">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link href="/auth/signin" className="hidden sm:block text-gray-400 hover:text-white text-sm transition-colors">
              Sign in
            </Link>
            <Link href="/auth/signup" className="px-4 py-2 gold-btn rounded-lg text-sm">
              Sign up
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-midnight-500/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium",
                  pathname === link.href ? "text-gold-400" : "text-gray-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
