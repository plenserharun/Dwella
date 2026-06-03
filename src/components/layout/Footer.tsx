"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPinIcon, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-midnight-500 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/images/dwella-logo.png" alt="Dwella" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">Dwella</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Kenya's premier property platform. Find your perfect home, office, or investment property.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm"><Phone className="w-4 h-4 text-gold-400" /> +254 700 123 456</div>
              <div className="flex items-center gap-2 text-gray-400 text-sm"><Mail className="w-4 h-4 text-gold-400" /> info@dwella.co.ke</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Properties</h3>
            <ul className="space-y-2">
              {["Buy", "Rent", "Lease", "Commercial"].map((l) => (
                <li key={l}><Link href={`/${l.toLowerCase()}`} className="text-gray-400 text-sm hover:text-gold-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Movers", "Property Valuation", "Legal Services", "Interior Design"].map((l) => (
                <li key={l}><Link href="#" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog", "Contact"].map((l) => (
                <li key={l}><Link href="#" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Dwella. All rights reserved. Made in Kenya.</p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <button key={i} className="p-2 rounded-lg text-gray-400 hover:text-gold-400 transition-all"><Icon className="w-5 h-5" /></button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
