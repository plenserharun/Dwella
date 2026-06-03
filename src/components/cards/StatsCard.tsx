"use client";

import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
}

export default function StatsCard({ title, value, change, changeType = "positive", icon: Icon, iconColor = "text-gold-400" }: StatsCardProps) {
  return (
    <div className="glass-card p-5 hover:border-gold-400/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg bg-white/5 ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        {change && (
          <span className={`text-xs font-medium ${
            changeType === "positive" ? "text-teal-400" : 
            changeType === "negative" ? "text-red-400" : "text-gray-400"
          }`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{value}</h3>
      <p className="text-gray-400 text-xs">{title}</p>
    </div>
  );
}
