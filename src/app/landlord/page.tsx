"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Building2, Users, TrendingUp, DollarSign, Calendar, MessageSquare, Settings, LogOut,
  Plus, Eye, Heart, ArrowUpRight, Wrench, AlertCircle, CheckCircle2, BarChart3,
} from "lucide-react";
import { cn, formatPrice, formatDate } from "@/lib/utils";
import StatsCard from "@/components/cards/StatsCard";
import { sampleLandlordDashboard } from "@/lib/data/dashboard";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";

const sidebarItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "properties", label: "My Properties", icon: Building2 },
  { id: "tenants", label: "Tenants", icon: Users },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function LandlordPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const { user, properties, analytics, tenants } = sampleLandlordDashboard;

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Income" value={formatPrice(analytics.totalIncome)} change="+5.2%" changeType="positive" icon={DollarSign} iconColor="text-gold-400" />
        <StatsCard title="Properties" value={analytics.totalProperties} change="+1 this month" changeType="positive" icon={Building2} iconColor="text-teal-400" />
        <StatsCard title="Occupancy Rate" value={`${analytics.occupancyRate}%`} change="+2.3%" changeType="positive" icon={Users} iconColor="text-blue-400" />
        <StatsCard title="Avg Response" value={`${analytics.avgResponseTime}h`} change="-0.5h" changeType="positive" icon={TrendingUp} iconColor="text-green-400" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Monthly Income</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analytics.monthlyData}>
              <defs><linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3}/><stop offset="95%" stopColor="#C9A84C" stopOpacity={0}/></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#94A3B8" /><YAxis stroke="#94A3B8" />
              <Tooltip contentStyle={{ backgroundColor: '#162238', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} labelStyle={{ color: '#fff' }} />
              <Area type="monotone" dataKey="income" stroke="#C9A84C" fillOpacity={1} fill="url(#colorIncome)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Property Views</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#94A3B8" /><YAxis stroke="#94A3B8" />
              <Tooltip contentStyle={{ backgroundColor: '#162238', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} labelStyle={{ color: '#fff' }} />
              <Bar dataKey="views" fill="#2A9D8F" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">My Properties</h3>
          <button onClick={() => setActiveTab("properties")} className="text-gold-400 text-sm hover:text-gold-300 transition-colors flex items-center gap-1">View All <ArrowUpRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map(p => (
            <div key={p.id} className="glass-card p-4">
              <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${p.status === "active" ? "bg-teal-400/20 text-teal-400" : p.status === "pending" ? "bg-gold-400/20 text-gold-400" : "bg-gray-400/20 text-gray-400"}`}>{p.status}</span>
                </div>
              </div>
              <h4 className="text-white font-medium mb-2">{p.title}</h4>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {p.views}</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {p.inquiries}</span>
                </div>
                <span className="text-gold-400 font-semibold">{formatPrice(p.income)}/mo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Current Tenants</h3>
          <button onClick={() => setActiveTab("tenants")} className="text-gold-400 text-sm hover:text-gold-300 transition-colors flex items-center gap-1">View All <ArrowUpRight className="w-4 h-4" /></button>
        </div>
        <div className="space-y-3">
          {tenants.map(t => (
            <div key={t.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400/20 to-teal-400/20 flex items-center justify-center"><span className="text-gold-400 font-bold">{t.name.charAt(0)}</span></div>
                <div><p className="text-white font-medium">{t.name}</p><p className="text-gray-400 text-sm">{t.property}</p></div>
              </div>
              <div className="text-right">
                <p className="text-gold-400 font-semibold">{formatPrice(t.rent)}/mo</p>
                <span className={`text-xs ${t.status === "active" ? "text-teal-400" : t.status === "late" ? "text-red-400" : "text-gray-400"}`}>{t.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">My Properties</h2>
        <button className="px-4 py-2 gold-btn rounded-xl flex items-center gap-2 text-sm"><Plus className="w-4 h-4" /> Add Property</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(p => (
          <div key={p.id} className="glass-card glass-card-hover overflow-hidden">
            <div className="relative h-48">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${p.status === "active" ? "bg-teal-400/20 text-teal-400" : p.status === "pending" ? "bg-gold-400/20 text-gold-400" : "bg-gray-400/20 text-gray-400"}`}>{p.status}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/5 text-center"><p className="text-2xl font-bold text-white">{p.views}</p><p className="text-gray-400 text-xs">Views</p></div>
                <div className="p-2 rounded-lg bg-white/5 text-center"><p className="text-2xl font-bold text-white">{p.inquiries}</p><p className="text-gray-400 text-xs">Inquiries</p></div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gold-400 font-bold">{formatPrice(p.income)}<span className="text-gray-400 text-sm font-normal">/month</span></p>
                <button className="px-3 py-1 glass-card rounded-lg text-sm text-white">Manage</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTenants = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Tenants</h2>
      <div className="glass-card p-6">
        <div className="space-y-4">
          {tenants.map(t => (
            <div key={t.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-teal-400/20 flex items-center justify-center"><span className="text-gold-400 font-bold text-lg">{t.name.charAt(0)}</span></div>
                <div><h4 className="text-white font-medium">{t.name}</h4><p className="text-gray-400 text-sm">{t.property}</p><p className="text-gray-500 text-xs">Since {formatDate(t.moveInDate)}</p></div>
              </div>
              <div className="text-right">
                <p className="text-gold-400 font-bold">{formatPrice(t.rent)}</p>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${t.status === "active" ? "bg-teal-400/20 text-teal-400" : t.status === "late" ? "bg-red-400/20 text-red-400" : "bg-gray-400/20 text-gray-400"}`}>{t.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analytics.monthlyData}>
              <defs><linearGradient id="colorIncome2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3}/><stop offset="95%" stopColor="#C9A84C" stopOpacity={0}/></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#94A3B8" /><YAxis stroke="#94A3B8" />
              <Tooltip contentStyle={{ backgroundColor: '#162238', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} labelStyle={{ color: '#fff' }} />
              <Area type="monotone" dataKey="income" stroke="#C9A84C" fillOpacity={1} fill="url(#colorIncome2)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Property Views</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#94A3B8" /><YAxis stroke="#94A3B8" />
              <Tooltip contentStyle={{ backgroundColor: '#162238', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} labelStyle={{ color: '#fff' }} />
              <Bar dataKey="views" fill="#2A9D8F" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderMaintenance = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Maintenance Requests</h2>
        <button className="px-4 py-2 gold-btn rounded-xl flex items-center gap-2 text-sm"><Plus className="w-4 h-4" /> New Request</button>
      </div>
      <div className="glass-card p-6">
        <div className="space-y-4">
          {[{id:1,property:"2-Bedroom Apartment in Kileleshwa",issue:"Plumbing leak in bathroom",priority:"high",status:"pending",date:"2026-06-01"},{id:2,property:"Studio in Ngong Road",issue:"AC not working",priority:"medium",status:"in-progress",date:"2026-05-28"},{id:3,property:"2-Bedroom Apartment in Kileleshwa",issue:"Broken window lock",priority:"low",status:"completed",date:"2026-05-20"}].map(r => (
            <div key={r.id} className="flex items-start justify-between p-4 rounded-xl bg-white/5">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${r.priority === "high" ? "bg-red-400/20 text-red-400" : r.priority === "medium" ? "bg-gold-400/20 text-gold-400" : "bg-blue-400/20 text-blue-400"}`}><AlertCircle className="w-5 h-5" /></div>
                <div><h4 className="text-white font-medium">{r.issue}</h4><p className="text-gray-400 text-sm">{r.property}</p><p className="text-gray-500 text-xs">{formatDate(r.date)}</p></div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${r.status === "completed" ? "bg-teal-400/20 text-teal-400" : r.status === "in-progress" ? "bg-blue-400/20 text-blue-400" : "bg-gold-400/20 text-gold-400"}`}>{r.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="glass-card p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Messages</h2>
      <div className="space-y-4">
        {[{id:1,from:"Mary Akinyi",subject:"Rent payment confirmation",message:"Hi, I've just made the rent payment for June. Please confirm receipt.",time:"2 hours ago",unread:true},{id:2,from:"John Kipchirchir",subject:"Maintenance request",message:"The kitchen sink is leaking. Can you send someone to fix it?",time:"5 hours ago",unread:true},{id:3,from:"Sarah Ochieng",subject:"Property inquiry",message:"Is the Ngong Road studio still available? I'd like to schedule a viewing.",time:"1 day ago",unread:false}].map(msg => (
          <div key={msg.id} className={`flex items-start gap-4 p-4 rounded-xl ${msg.unread ? "bg-gold-400/5 border border-gold-400/20" : "bg-white/5 hover:bg-white/10"} transition-all`}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-teal-400/20 flex items-center justify-center"><span className="text-gold-400 font-bold">{msg.from.charAt(0)}</span></div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1"><h4 className="text-white font-medium">{msg.from}</h4><span className="text-gray-500 text-xs">{msg.time}</span></div>
              <p className="text-gold-400 text-sm font-medium">{msg.subject}</p>
              <p className="text-gray-300 text-sm mt-1">{msg.message}</p>
            </div>
            {msg.unread && <div className="w-2 h-2 rounded-full bg-gold-400 mt-2" />}
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
          <div><h3 className="text-white font-semibold">{user.name}</h3><p className="text-gray-400 text-sm">{user.email}</p><p className="text-gray-500 text-sm">Landlord since {formatDate(user.memberSince)}</p></div>
          <button className="ml-auto px-4 py-2 bg-white/10 rounded-lg text-sm text-white hover:bg-white/20 transition-all">Edit Profile</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className="text-gray-400 text-sm mb-2 block">Full Name</label><input type="text" defaultValue={user.name} className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
          <div><label className="text-gray-400 text-sm mb-2 block">Email</label><input type="email" defaultValue={user.email} className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
          <div><label className="text-gray-400 text-sm mb-2 block">Phone</label><input type="tel" defaultValue={user.phone} className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
          <div><label className="text-gray-400 text-sm mb-2 block">Company</label><input type="text" defaultValue="Omondi Properties Ltd" className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400" /></div>
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
                <div><p className="text-white font-medium text-sm">{user.name}</p><p className="text-gray-400 text-xs">Landlord</p></div>
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
              {activeTab === "properties" && renderProperties()}
              {activeTab === "tenants" && renderTenants()}
              {activeTab === "analytics" && renderAnalytics()}
              {activeTab === "maintenance" && renderMaintenance()}
              {activeTab === "messages" && renderMessages()}
              {activeTab === "settings" && renderSettings()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
