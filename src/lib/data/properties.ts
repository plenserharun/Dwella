export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceType: "sale" | "rent" | "lease";
  propertyType: "residential" | "commercial" | "industrial" | "land";
  subtype: string;
  location: {
    county: string;
    subCounty: string;
    neighborhood: string;
    address: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    parking: number;
    furnished: boolean;
  };
  images: string[];
  agent: {
    id: string;
    name: string;
    company: string;
    phone: string;
    email: string;
    image: string;
    verified: boolean;
  };
  status: "available" | "pending" | "sold" | "rented";
  listedDate: string;
  views: number;
  favorites: number;
  featured: boolean;
  verified: boolean;
}

export const kenyanProperties: Property[] = [
  {
    id: "prop-001",
    title: "Luxury 5-Bedroom Villa in Karen",
    description: "Stunning modern villa in the prestigious Karen neighborhood. Features a swimming pool, expansive garden, and state-of-the-art security system.",
    price: 85000000,
    priceType: "sale",
    propertyType: "residential",
    subtype: "villa",
    location: {
      county: "Nairobi",
      subCounty: "Karen",
      neighborhood: "Karen Hardy",
      address: "Karen Road, Off Langata Road",
    },
    features: {
      bedrooms: 5,
      bathrooms: 4,
      sqft: 6500,
      parking: 4,
      furnished: false,
    },
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    ],
    agent: {
      id: "agent-001",
      name: "James Mwangi",
      company: "Prime Properties Kenya",
      phone: "+254 712 345 678",
      email: "james@primeproperties.co.ke",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-15",
    views: 2340,
    favorites: 156,
    featured: true,
    verified: true,
  },
  {
    id: "prop-002",
    title: "Modern Apartment in Kilimani",
    description: "Contemporary 3-bedroom apartment in the heart of Kilimani. Close to Yaya Centre, Junction Mall, and major hospitals.",
    price: 180000,
    priceType: "rent",
    propertyType: "residential",
    subtype: "apartment",
    location: {
      county: "Nairobi",
      subCounty: "Kilimani",
      neighborhood: "Kilimani Estate",
      address: "Kilimani Road, Near Yaya Centre",
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      parking: 2,
      furnished: true,
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    ],
    agent: {
      id: "agent-002",
      name: "Sarah Ochieng",
      company: "Urban Living Kenya",
      phone: "+254 723 456 789",
      email: "sarah@urbanliving.co.ke",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-20",
    views: 1890,
    favorites: 98,
    featured: true,
    verified: true,
  },
  {
    id: "prop-003",
    title: "Commercial Office Space in Westlands",
    description: "Premium office space in Westlands Business District. 500 sqm open-plan layout with meeting rooms and reception area.",
    price: 450000,
    priceType: "lease",
    propertyType: "commercial",
    subtype: "office",
    location: {
      county: "Nairobi",
      subCounty: "Westlands",
      neighborhood: "Westlands CBD",
      address: "Waiyaki Way, Near Sarit Centre",
    },
    features: {
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5000,
      parking: 20,
      furnished: false,
    },
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
    ],
    agent: {
      id: "agent-003",
      name: "David Kimani",
      company: "Westlands Commercial",
      phone: "+254 734 567 890",
      email: "david@westlandscommercial.co.ke",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-10",
    views: 1560,
    favorites: 72,
    featured: true,
    verified: true,
  },
  {
    id: "prop-004",
    title: "Retail Shop in Mombasa CBD",
    description: "Prime retail space on Moi Avenue, Mombasa. High foot traffic area with display windows and storage.",
    price: 120000,
    priceType: "rent",
    propertyType: "commercial",
    subtype: "retail",
    location: {
      county: "Mombasa",
      subCounty: "Mombasa Island",
      neighborhood: "CBD",
      address: "Moi Avenue, Near Fort Jesus",
    },
    features: {
      bedrooms: 0,
      bathrooms: 2,
      sqft: 1200,
      parking: 5,
      furnished: false,
    },
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
    ],
    agent: {
      id: "agent-004",
      name: "Amina Hassan",
      company: "Coastal Properties",
      phone: "+254 711 234 567",
      email: "amina@coastalproperties.co.ke",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-18",
    views: 2100,
    favorites: 134,
    featured: true,
    verified: true,
  },
  {
    id: "prop-005",
    title: "Warehouse in Industrial Area, Nairobi",
    description: "Large warehouse facility in Nairobi's Industrial Area. 10,000 sqft with loading docks and office space.",
    price: 350000,
    priceType: "lease",
    propertyType: "industrial",
    subtype: "warehouse",
    location: {
      county: "Nairobi",
      subCounty: "Industrial Area",
      neighborhood: "Enterprise Road",
      address: "Enterprise Road, Industrial Area",
    },
    features: {
      bedrooms: 0,
      bathrooms: 3,
      sqft: 10000,
      parking: 30,
      furnished: false,
    },
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      "https://images.unsplash.com/photo-1565611460905-1a2da294d95f?w=800",
    ],
    agent: {
      id: "agent-005",
      name: "Peter Njoroge",
      company: "Industrial Properties Ltd",
      phone: "+254 722 345 678",
      email: "peter@industrialproperties.co.ke",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-12",
    views: 980,
    favorites: 45,
    featured: false,
    verified: true,
  },
  {
    id: "prop-006",
    title: "Beachfront Villa in Diani",
    description: "Exclusive beachfront villa in Diani Beach. 4 bedrooms with private pool and direct beach access.",
    price: 45000000,
    priceType: "sale",
    propertyType: "residential",
    subtype: "villa",
    location: {
      county: "Kwale",
      subCounty: "Msambweni",
      neighborhood: "Diani Beach",
      address: "Diani Beach Road, South Coast",
    },
    features: {
      bedrooms: 4,
      bathrooms: 3,
      sqft: 4200,
      parking: 3,
      furnished: true,
    },
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba934822d?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    ],
    agent: {
      id: "agent-006",
      name: "Fatima Said",
      company: "Diani Luxury Homes",
      phone: "+254 733 456 789",
      email: "fatima@dianiluxury.co.ke",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-25",
    views: 3200,
    favorites: 245,
    featured: true,
    verified: true,
  },
  {
    id: "prop-007",
    title: "Studio Apartment in Kileleshwa",
    description: "Cozy furnished studio apartment in Kileleshwa. Ideal for young professionals. All utilities included.",
    price: 45000,
    priceType: "rent",
    propertyType: "residential",
    subtype: "studio",
    location: {
      county: "Nairobi",
      subCounty: "Kileleshwa",
      neighborhood: "Kileleshwa Estate",
      address: "Othaya Road, Kileleshwa",
    },
    features: {
      bedrooms: 1,
      bathrooms: 1,
      sqft: 450,
      parking: 1,
      furnished: true,
    },
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    ],
    agent: {
      id: "agent-007",
      name: "Grace Wanjiku",
      company: "City Living Kenya",
      phone: "+254 744 567 890",
      email: "grace@cityliving.co.ke",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-22",
    views: 1450,
    favorites: 87,
    featured: false,
    verified: true,
  },
  {
    id: "prop-008",
    title: "Land for Sale in Kiambu",
    description: "Prime 1-acre plot in Kiambu with ready title deed. Flat terrain, good road access. Suitable for residential development.",
    price: 8500000,
    priceType: "sale",
    propertyType: "land",
    subtype: "residential-land",
    location: {
      county: "Kiambu",
      subCounty: "Kiambu Town",
      neighborhood: "Kiambu Road",
      address: "Kiambu Road, Near Ruaka Junction",
    },
    features: {
      bedrooms: 0,
      bathrooms: 0,
      sqft: 43560,
      parking: 0,
      furnished: false,
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800",
    ],
    agent: {
      id: "agent-008",
      name: "John Kamau",
      company: "Kiambu Land Solutions",
      phone: "+254 755 678 901",
      email: "john@kiambuland.co.ke",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
      verified: true,
    },
    status: "available",
    listedDate: "2026-05-08",
    views: 780,
    favorites: 34,
    featured: false,
    verified: true,
  },
];

export const getFeaturedProperties = () => kenyanProperties.filter(p => p.featured);
export const getPropertiesByType = (type: string) => kenyanProperties.filter(p => p.propertyType === type);
export const getPropertiesByPriceType = (priceType: string) => kenyanProperties.filter(p => p.priceType === priceType);
export const getPropertyById = (id: string) => kenyanProperties.find(p => p.id === id);
export const getPropertiesByCounty = (county: string) => kenyanProperties.filter(p => p.location.county === county);
