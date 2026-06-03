"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bed, Bath, Square, Car, MapPin, Heart, Share2, Eye, CheckCircle2, Star,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Property } from "@/lib/data/properties";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const priceLabel = property.priceType === "sale" ? "For Sale" : 
                     property.priceType === "rent" ? "For Rent" : "For Lease";

  const priceColor = property.priceType === "sale" ? "bg-emerald-500/90" : 
                     property.priceType === "rent" ? "bg-blue-500/90" : "bg-purple-500/90";

  return (
    <div className={`property-card glass-card glass-card-hover overflow-hidden transition-all duration-500 ${featured ? 'ring-1 ring-gold-400/30' : ''}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="property-image object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-400/80 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-3 py-1 ${priceColor} text-white text-xs font-bold rounded-lg uppercase`}>
            {priceLabel}
          </span>
          {property.verified && (
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-lg flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Verified
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="p-2 rounded-lg bg-white/10 backdrop-blur-md text-white hover:bg-gold-400/20 hover:text-gold-400 transition-all">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <p className="text-xl font-bold text-white">
            {formatPrice(property.price)}
          </p>
          <p className="text-gray-300 text-xs">
            {property.priceType === "rent" ? "/month" : property.priceType === "lease" ? "/year" : ""}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-white mb-1 line-clamp-1">{property.title}</h3>

        <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
          <MapPin className="w-3 h-3 text-teal-400" />
          {property.location.neighborhood}, {property.location.county}
        </div>

        {/* Features */}
        <div className="flex items-center gap-3 mb-3">
          {property.features.bedrooms > 0 && (
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <Bed className="w-3 h-3" /> {property.features.bedrooms} Beds
            </div>
          )}
          {property.features.bathrooms > 0 && (
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <Bath className="w-3 h-3" /> {property.features.bathrooms} Baths
            </div>
          )}
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Square className="w-3 h-3" /> {property.features.sqft.toLocaleString()} sqft
          </div>
        </div>

        {/* Agent */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image src={property.agent.image} alt={property.agent.name} fill className="object-cover" />
            </div>
            <span className="text-xs text-gray-400">{property.agent.name}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <Eye className="w-3 h-3" /> {property.views.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
