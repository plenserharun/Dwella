"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Star, MapPin, Phone, Mail, Globe, CheckCircle2, Clock, Search } from "lucide-react";
import { kenyanMovers } from "@/lib/data/movers";
import { formatPrice } from "@/lib/utils";

export default function MoversPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const filtered = kenyanMovers.filter(m =>
    m.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.coverage.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-midnight-400">
      <div className="bg-midnight-500 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Truck className="w-4 h-4" /> / <span>Movers</span></div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Moving <span className="gradient-text-gold">Services</span></h1>
          <p className="text-gray-400">Trusted moving companies across Kenya</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search moving companies or locations..."
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mover, index) => (
            <motion.div key={mover.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="glass-card glass-card-hover p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/20 to-teal-400/20 flex items-center justify-center"><Truck className="w-7 h-7 text-gold-400" /></div>
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-gold-400 fill-gold-400" /><span className="text-white font-semibold">{mover.rating}</span><span className="text-gray-400 text-sm">({mover.reviews})</span></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{mover.companyName}</h3>
              <div className="flex items-center gap-2 mb-3"><CheckCircle2 className="w-4 h-4 text-teal-400" /><span className="text-teal-400 text-sm">Verified</span></div>
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Coverage:</p>
                <div className="flex flex-wrap gap-2">{mover.coverage.slice(0, 3).map(c => <span key={c} className="px-2 py-1 bg-white/5 rounded-lg text-gray-400 text-xs">{c}</span>)}</div>
              </div>
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Services:</p>
                <div className="flex flex-wrap gap-2">{mover.services.map(s => <span key={s} className="px-2 py-1 bg-gold-400/10 rounded-lg text-gold-400 text-xs">{s}</span>)}</div>
              </div>
              <div className="mb-4 p-3 rounded-xl bg-white/5">
                <p className="text-gray-400 text-sm mb-1">Starting from</p>
                <p className="text-xl font-bold text-white">{formatPrice(mover.pricing.base)}</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 gold-btn rounded-lg text-sm">Book Now</button>
                <button className="p-2 glass-card rounded-lg text-white"><Phone className="w-4 h-4" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
