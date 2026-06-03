"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Building2, Truck, Users, ArrowRight } from "lucide-react";

const roles = [
  { id: "tenant", label: "Tenant", description: "I'm looking to rent or buy property", icon: Home, path: "/dashboard" },
  { id: "landlord", label: "Landlord", description: "I want to list and manage my properties", icon: Building2, path: "/landlord" },
  { id: "agent", label: "Agent", description: "I help clients find properties", icon: Users, path: "/agents" },
  { id: "mover", label: "Mover", description: "I offer moving and relocation services", icon: Truck, path: "/movers" },
];

export default function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleContinue = () => {
    if (selectedRole) {
      localStorage.setItem("dwella-role", selectedRole);
      const role = roles.find(r => r.id === selectedRole);
      if (role) window.location.href = role.path;
    }
  };

  return (
    <div className="min-h-screen bg-midnight-400 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image src="/images/dwella-logo.png" alt="Dwella" fill className="object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Select Your Role</h1>
            <p className="text-gray-400 text-sm">Choose how you want to use Dwella</p>
          </div>

          <div className="space-y-3">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full p-4 rounded-xl border transition-all flex items-center gap-4 ${
                    selectedRole === role.id
                      ? "border-gold-400 bg-gold-400/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedRole === role.id ? "bg-gold-400/20" : "bg-white/5"}`}>
                    <Icon className={`w-6 h-6 ${selectedRole === role.id ? "text-gold-400" : "text-gray-400"}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold">{role.label}</h3>
                    <p className="text-gray-400 text-sm">{role.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`w-full mt-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
              selectedRole
                ? "gold-btn"
                : "bg-white/5 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>

          <div className="mt-4 text-center">
            <Link href="/auth/signin" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
              Back to Sign In
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
