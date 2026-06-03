"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search, Home, Building2, Store, Briefcase, Warehouse,
  MapPin, ChevronRight, ArrowRight, Bed, Bath, Square, Car,
} from "lucide-react";
import PropertyCard from "@/components/cards/PropertyCard";
import { kenyanProperties, getFeaturedProperties } from "@/lib/data/properties";
import { propertyCategories } from "@/lib/data/locations";

const categoryIcons: Record<string, React.ElementType> = {
  Home, Building2, Store, Briefcase, Warehouse,
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const featuredProperties = getFeaturedProperties();

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "lease", label: "Lease" },
    { id: "commercial", label: "Commercial" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - EXACT match to UI design */}
      <section className="relative min-h-[85vh] flex items-end pb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920"
            alt="Luxury Villa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-400/95 via-midnight-400/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-400 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Find your<br />perfect place
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Buy, rent, lease homes, shops, offices<br />
                and warehouses across the country.
              </p>
            </motion.div>

            {/* Search Box - EXACT match to UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-1 rounded-2xl"
            >
              {/* Tabs */}
              <div className="flex gap-1 p-1 mb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="flex gap-2 p-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter location or property"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div className="hidden sm:block">
                  <select className="h-full px-3 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm focus:outline-none focus:border-gold-400">
                    <option>Property Type</option>
                    <option>Any Type</option>
                  </select>
                </div>
                <div className="hidden md:block">
                  <select className="h-full px-3 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm focus:outline-none focus:border-gold-400">
                    <option>Price Range</option>
                    <option>Any Price</option>
                  </select>
                </div>
                <button className="px-6 py-3 bg-white text-midnight-400 font-semibold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
                  <Search className="w-4 h-4" /> Search
                </button>
              </div>
            </motion.div>

            {/* Category Icons - EXACT match to UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-6 mt-8"
            >
              {propertyCategories.map((cat) => {
                const Icon = categoryIcons[cat.icon] || Home;
                return (
                  <Link
                    key={cat.id}
                    href={`/${cat.id === "homes" ? "buy" : cat.id === "apartments" ? "rent" : cat.id === "shops" ? "lease" : cat.id === "offices" ? "commercial" : "commercial"}`}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-400/20 group-hover:border-gold-400/30 transition-all">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
                    </div>
                    <div className="text-center">
                      <p className="text-white text-sm font-medium">{cat.label}</p>
                      <p className="text-gray-500 text-xs">{cat.action}</p>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties - EXACT match to UI */}
      <section className="py-16 bg-midnight-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Properties</h2>
            <Link href="/buy" className="flex items-center gap-1 text-gray-400 hover:text-gold-400 text-sm transition-colors">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.slice(0, 4).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PropertyCard property={property} featured />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category - EXACT match to UI */}
      <section className="py-16 bg-midnight-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {propertyCategories.map((cat, index) => {
              const Icon = categoryIcons[cat.icon] || Home;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/${cat.id === "homes" ? "buy" : cat.id === "apartments" ? "rent" : cat.id === "shops" ? "lease" : cat.id === "offices" ? "commercial" : "commercial"}`}
                    className="glass-card glass-card-hover p-6 text-center block group"
                  >
                    <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-400/20 group-hover:border-gold-400/30 transition-all">
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-gold-400 transition-colors" />
                    </div>
                    <h3 className="text-white font-medium mb-1">{cat.label}</h3>
                    <p className="text-gray-500 text-sm">{cat.action}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-midnight-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "12,000+", label: "Properties" },
              { value: "2,500+", label: "Happy Clients" },
              { value: "800+", label: "Verified Agents" },
              { value: "47", label: "Counties" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <p className="text-3xl font-bold gradient-text-gold">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-midnight-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 to-teal-400/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Find Your <span className="gradient-text-gold">Dream Property</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Join thousands of Kenyans who have found their perfect property through Dwella.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/buy" className="px-8 py-4 gold-btn rounded-xl inline-flex items-center justify-center gap-2">
                  Browse Properties <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/dashboard" className="px-8 py-4 glass-card rounded-xl inline-flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-all">
                  List Your Property <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
