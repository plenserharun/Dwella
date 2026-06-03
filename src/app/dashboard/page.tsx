"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Heart, MessageSquare, Calendar, Search, Settings, Bell, LogOut,
  Home, Eye, Clock, CheckCircle2, AlertCircle, X, Grid3X3, List, ChevronRight,
} from "lucide-react";
import { cn, formatPrice, formatDate } from "@/lib/utils";
import StatsCard from "@/components/cards/StatsCard";
import PropertyCard from "@/components/cards/PropertyCard";
import { sampleUserDashboard } from "@/lib/data/dashboard";
import { kenyanProperties } from "@/lib/data/properties";

const sidebarItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "saved", label: "Saved Listings", icon: Heart },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "bookings", label: "Bookings", icon: Calendar },
  { id: "searches", label: "Recent Searches", icon: Search },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { user, stats, activities, savedProperties, recentSearches, notifications } = sampleUserDashboard;
  const savedProps = kenyanProperties.filter(p => savedProperties.includes(p.id));

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Saved Listings" value={stats.savedListings} change="+3 this week" changeType="positive" icon={Heart} iconColor="text-red-400" />
        <StatsCard title="Properties Viewed" value={stats.viewedProperties} change="+12 this week" changeType="positive" icon={Eye} iconColor="text-teal-400" />
        <StatsCard title="Inquiries Sent" value={stats.inquiries} change="2 pending" changeType="neutral" icon={MessageSquare} iconColor="text-gold-400" />
        <StatsCard title="Bookings" value={stats.bookings} change="1 confirmed" changeType="positive" icon={Calendar} iconColor="text-blue-400" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {activities.slice(0, 5).map(a => (
              <div key={a.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <div className={`p-2 rounded-lg ${a.type === "view" ? "bg-teal-400/20 text-teal-400" : a.type === "save" ? "bg-red-400/20 text-red-400" : a.type === "inquiry" ? "bg-gold-400/20 text-gold-400" : "bg-blue-400/20 text-blue-400"}`}>
                  {a.type === "view" && <Eye className="w-4 h-4" />}{a.type === "save" && <Heart className="w-4 h-4" />}{a.type === "inquiry" && <MessageSquare className="w-4 h-4" />}{a.type === "booking" && <Calendar className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{a.propertyTitle}</p>
                  <p className="text-gray-400 text-xs capitalize">{a.type} • {formatDate(a.date)}</p>
                </div>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${a.status === "completed" ? "bg-teal-400/20 text-teal-400" : a.status === "active" ? "bg-green-400/20 text-green-400" : a.status === "pending" ? "bg-gold-400/20 text-gold-400" : "bg-blue-400/20 text-blue-400"}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
          <div className="space-y-3">
            {notifications.map(n => (
              <div key={n.id} className={`flex items-start gap-3 p-3 rounded-xl ${n.read ? "bg-white/5" : "bg-gold-400/5 border border-gold-400/20"}`}>
                <div className={`p-2 rounded-lg ${n.type === "success" ? "bg-teal-400/20 text-teal-400" : n.type === "info" ? "bg-blue-400/20 text-blue-400" : n.type === "warning" ? "bg-gold-400/20 text-gold-400" : "bg-red-400/20 text-red-400"}`}>
                  {n.type === "success" && <CheckCircle2 className="w-4 h-4" />}{n.type === "info" && <Bell className="w-4 h-4" />}{n.type === "warning" && <AlertCircle className="w-4 h-4" />}{n.type === "error" && <X className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{n.title}</p>
                  <p className="text-gray-400 text-xs">{n.message}</p>
                  <p className="text-gray-500 text-xs mt-1">{formatDate(n.date)}</p>
                </div>
                {!n.read && <div className="w-2 h-2 rounded-full bg-gold-400 mt-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Saved Properties</h3>
          <button onClick={() => setActiveTab("saved")} className="text-gold-400 text-sm hover:text-gold-300 transition-colors flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedProps.slice(0, 3).map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </div>
    </div>
  );

  const renderSaved = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Saved Listings</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-gold-400/20 text-gold-400" : "text-gray-400"}`}><Grid3X3 className="w-5 h-5" /></button>
          <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-gold-400/20 text-gold-400" : "text-gray-400"}`}><List className="w-5 h-5" /></button>
        </div>
      </div>
      <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
        {savedProps.map(p => <PropertyCard key={p.id} property={p} />)}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="glass-card p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Messages</h2>
      <div className="space-y-4">
        {[{id:1,name:"James Mwangi",company:"Prime Properties",message:"Hi, I'd like to schedule a viewing for the Karen villa. Are you available this Saturday?",time:"2 hours ago",unread:true},{id:2,name:"Sarah Ochieng",company:"Urban Living",message:"The Kilimani apartment is still available. Would you like to see it this week?",time:"5 hours ago",unread:true},{id:3,name:"David Kimani",company:"Westlands Commercial",message:"Thank you for your inquiry about the office space. I've attached the floor plan.",time:"1 day ago",unread:false}].map(msg => (
          <div key={msg.id} className={`flex items-start gap-4 p-4 rounded-xl ${msg.unread ? "bg-gold-400/5 border border-gold-400/20" : "bg-white/5 hover:bg-white/10"} transition-all`}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-teal-400/20 flex items-center justify-center"><span className="text-gold-400 font-bold">{msg.name.charAt(0)}</span></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1"><h4 className="text-white font-medium">{msg.name}</h4><span className="text-gray-500 text-xs">{msg.time}</span></div>
              <p className="text-gray-400 text-sm">{msg.company}</p>
              <p className="text-gray-300 text-sm mt-2">{msg.message}</p>
            </div>
            {msg.unread && <div className="w-2 h-2 rounded-full bg-gold-400 mt-2" />}
          </div>
        ))}
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">My Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[{id:1,property:"Luxury 5-Bedroom Villa in Karen",date:"2026-06-15",time:"10:00 AM",status:"confirmed",agent:"James Mwangi"},{id:2,property:"Beachfront Villa in Diani",date:"2026-06-20",time:"2:00 PM",status:"pending",agent:"Fatima Said"},{id:3,property:"Commercial Office in Westlands",date:"2026-06-10",time:"11:00 AM",status:"completed",agent:"David Kimani"}].map(b => (
          <div key={b.id} className="glass-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div><h3 className="text-white font-semibold">{b.property}</h3><p className="text-gray-400 text-sm">with {b.agent}</p></div>
              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${b.status === "confirmed" ? "bg-teal-400/20 text-teal-400" : b.status === "pending" ? "bg-gold-400/20 text-gold-400" : "bg-gray-400/20 text-gray-400"}`}>{b.status}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4 text-gold-400" />{formatDate(b.date)}</div>
              <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-gold-400" />{b.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSearches = () => (
    <div className="glass-card p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Recent Searches</h2>
      <div className="space-y-3">
        {recentSearches.map((s, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-gold-400/20 text-gold-400"><Search className="w-4 h-4" /></div><span className="text-white">{s}</span></div>
            <button className="text-gold-400 hover:text-gold-300 transition-colors"><ChevronRight className="w-5 h-5" /></button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="glass-card p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
          <div className="relative w-20 h-20 rounded-full overflow-hidden"><Image src={user.avatar} alt={user.name} fill className="object-cover" /></div>
          <div><h3 className="text-white font-semibold">{user.name}</h3><p className="text-gray-400 text-sm">{user.email}</p><p className="text-gray-500 text-sm">Member since {formatDate(user.memberSince)}</p></div>
          <button className="ml-auto px-4 py-2 bg-white/10 rounded-lg text-sm text-white hover:bg-white/20 transition-all">Edit Profile</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className="text-gray-400 text-sm mb-2 block">Full Name</label><input type="text" defaultValue={user.name} className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
          <div><label className="text-gray-400 text-sm mb-2 block">Email</label><input type="email" defaultValue={user.email} className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
          <div><label className="text-gray-400 text-sm mb-2 block">Phone</label><input type="tel" defaultValue={user.phone} className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
          <div><label className="text-gray-400 text-sm mb-2 block">Location</label><input type="text" defaultValue={user.location} className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
        </div>
        <div className="flex justify-end"><button className="px-6 py-3 gold-btn rounded-xl text-sm">Save Changes</button></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-midnight-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="glass-card p-4 sticky top-24">
              <div className="flex items-center gap-3 p-4 mb-4 rounded-xl bg-white/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden"><Image src={user.avatar} alt={user.name} fill className="object-cover" /></div>
                <div><p className="text-white font-medium text-sm">{user.name}</p><p className="text-gray-400 text-xs capitalize">{user.role}</p></div>
              </div>
              <nav className="space-y-1">
                {sidebarItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <button key={item.id} onClick={() => setActiveTab(item.id)} className={cn("sidebar-link w-full", activeTab === item.id && "active")}>
                      <Icon className="w-5 h-5" />{item.label}
                    </button>
                  );
                })}
              </nav>
              <button className="sidebar-link w-full mt-4 text-red-400 hover:text-red-300 hover:bg-red-400/10"><LogOut className="w-5 h-5" />Logout</button>
            </div>
          </div>
          <div className="flex-1">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {activeTab === "overview" && renderOverview()}
              {activeTab === "saved" && renderSaved()}
              {activeTab === "messages" && renderMessages()}
              {activeTab === "bookings" && renderBookings()}
              {activeTab === "searches" && renderSearches()}
              {activeTab === "settings" && renderSettings()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
