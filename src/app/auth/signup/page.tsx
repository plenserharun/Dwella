"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, ArrowRight, CheckCircle2, Home, Building2, Truck, Users } from "lucide-react";

const roles = [
  { id: "tenant", label: "Tenant", description: "Looking to rent or buy property", icon: Home },
  { id: "landlord", label: "Landlord", description: "List and manage your properties", icon: Building2 },
  { id: "agent", label: "Agent", description: "Help clients find properties", icon: Users },
  { id: "mover", label: "Mover", description: "Offer moving services", icon: Truck },
];

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    location: "",
  });

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    localStorage.setItem("dwella-role", roleId);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store user data and redirect based on role
    localStorage.setItem("dwella-user", JSON.stringify({ ...formData, role: selectedRole }));
    const redirectPath = selectedRole === "landlord" ? "/landlord" : selectedRole === "agent" ? "/agents" : selectedRole === "mover" ? "/movers" : "/dashboard";
    window.location.href = redirectPath;
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
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image src="/images/dwella-logo.png" alt="Dwella" fill className="object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {step === 1 ? "Choose Your Role" : "Create Your Account"}
            </h1>
            <p className="text-gray-400 text-sm">
              {step === 1 ? "Select how you want to use Dwella" : "Fill in your details to get started"}
            </p>
          </div>

          {step === 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className={`p-4 rounded-xl border transition-all text-left ${
                      selectedRole === role.id
                        ? "border-gold-400 bg-gold-400/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-400/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{role.label}</h3>
                    <p className="text-gray-400 text-xs">{role.description}</p>
                  </button>
                );
              })}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-gold-400/10 border border-gold-400/20">
                <CheckCircle2 className="w-5 h-5 text-gold-400" />
                <span className="text-gold-400 text-sm font-medium capitalize">{selectedRole} Account</span>
                <button type="button" onClick={() => setStep(1)} className="ml-auto text-gray-400 text-xs hover:text-white">Change</button>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Nairobi, Kenya"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Create a password"
                    className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 text-gray-400 text-sm">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5" required />
                I agree to the <Link href="#" className="text-gold-400 hover:text-gold-300">Terms of Service</Link> and <Link href="#" className="text-gold-400 hover:text-gold-300">Privacy Policy</Link>
              </label>

              <button type="submit" className="w-full py-3 gold-btn rounded-xl flex items-center justify-center gap-2">
                Create Account <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-gold-400 hover:text-gold-300">Sign in</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
