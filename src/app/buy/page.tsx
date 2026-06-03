"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Grid3X3, List, Home } from "lucide-react";
import PropertyCard from "@/components/cards/PropertyCard";
import { getPropertiesByPriceType } from "@/lib/data/properties";
import { priceRanges } from "@/lib/data/locations";

export default function BuyPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const buyProperties = getPropertiesByPriceType("sale");
  const filtered = buyProperties.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.county.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-midnight-400">
      <div className="bg-midnight-500 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4"><Home className="w-4 h-4" /> / <span>Buy</span></div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Properties for <span className="gradient-text-gold">Sale</span></h1>
          <p className="text-gray-400">Find your dream home or investment property in Kenya</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by location, property name..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400" />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="px-6 py-3 glass-card rounded-xl flex items-center gap-2 text-white text-sm">
            <SlidersHorizontal className="w-5 h-5" /> Filters
          </button>
          <div className="flex items-center gap-2">
            <button onClick={() => setViewMode("grid")} className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-gold-400/20 text-gold-400" : "bg-white/5 text-gray-400 hover:text-white"}`}><Grid3X3 className="w-5 h-5" /></button>
            <button onClick={() => setViewMode("list")} className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-gold-400/20 text-gold-400" : "bg-white/5 text-gray-400 hover:text-white"}`}><List className="w-5 h-5" /></button>
          </div>
        </div>
        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="glass-card p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Property Type</label>
                <select className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400">
                  <option>All Types</option><option>Residential</option><option>Commercial</option><option>Land</option>
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Price Range</label>
                <select className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-400">
                  <option>All Prices</option>{priceRanges.map(r => <option key={r.label}>{r.label}</option>)}
                </select>
              </div>
            </div>
          </motion.div>
        )}
        <p className="text-gray-400 text-sm mb-4">Showing <span className="text-white font-semibold">{filtered.length}</span> properties</p>
        <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
          {filtered.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
              <PropertyCard property={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
