"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, CheckCircle2, Phone, Mail, MessageSquare, Search } from "lucide-react";
import Image from "next/image";
import { kenyanProperties } from "@/lib/data/properties";

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const agents = kenyanProperties.map(p => p.agent).filter((a, i, self) => i === self.findIndex(b => b.id === a.id));
  const filtered = agents.filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()) || a.company.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-midnight-400">
      <div className="bg-midnight-500 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Users className="w-4 h-4" /> / <span>Agents</span></div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Verified <span className="gradient-text-gold">Agents</span></h1>
          <p className="text-gray-400">Connect with trusted real estate professionals across Kenya</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search agents by name or company..."
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((agent, index) => (
            <motion.div key={agent.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="glass-card glass-card-hover p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden"><Image src={agent.image} alt={agent.name} fill className="object-cover" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                  <p className="text-gray-400 text-sm">{agent.company}</p>
                  <div className="flex items-center gap-2 mt-1"><CheckCircle2 className="w-4 h-4 text-teal-400" /><span className="text-teal-400 text-xs">Verified Agent</span></div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm"><Phone className="w-4 h-4 text-gold-400" />{agent.phone}</div>
                <div className="flex items-center gap-2 text-gray-400 text-sm"><Mail className="w-4 h-4 text-gold-400" />{agent.email}</div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 gold-btn rounded-lg text-sm flex items-center justify-center gap-2"><MessageSquare className="w-4 h-4" /> Message</button>
                <button className="p-2 glass-card rounded-lg text-white"><Phone className="w-4 h-4" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
