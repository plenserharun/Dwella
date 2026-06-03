export const kenyanCounties = [
  {
    name: "Nairobi",
    code: "047",
    subCounties: ["Westlands", "Kilimani", "Karen", "Kileleshwa", "Lavington", "Runda", "Muthaiga", "Industrial Area", "Eastleigh", "Ngong"],
    propertyCount: 3450,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",
  },
  {
    name: "Mombasa",
    code: "001",
    subCounties: ["Mombasa Island", "Nyali", "Bamburi", "Shanzu", "Diani", "Likoni", "Changamwe"],
    propertyCount: 1890,
    image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800",
  },
  {
    name: "Kiambu",
    code: "022",
    subCounties: ["Kiambu Town", "Ruaka", "Thika", "Kikuyu", "Limuru", "Juja"],
    propertyCount: 1230,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
  },
  {
    name: "Kajiado",
    code: "034",
    subCounties: ["Kajiado North", "Kajiado Central", "Isinya", "Ongata Rongai", "Kitengela"],
    propertyCount: 890,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    name: "Nakuru",
    code: "032",
    subCounties: ["Nakuru Town", "Naivasha", "Gilgil", "Molo", "Njoro"],
    propertyCount: 760,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
  },
  {
    name: "Kisumu",
    code: "042",
    subCounties: ["Kisumu Central", "Kisumu East", "Kisumu West", "Muhoroni"],
    propertyCount: 540,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
  },
];

export const propertyCategories = [
  { id: "homes", label: "Homes", action: "Buy", icon: "Home" },
  { id: "apartments", label: "Apartments", action: "Rent", icon: "Building2" },
  { id: "shops", label: "Shops", action: "Lease", icon: "Store" },
  { id: "offices", label: "Offices", action: "Lease", icon: "Briefcase" },
  { id: "warehouses", label: "Warehouses", action: "Lease", icon: "Warehouse" },
];

export const priceRanges = [
  { label: "Under KES 50K", min: 0, max: 50000 },
  { label: "KES 50K - 100K", min: 50000, max: 100000 },
  { label: "KES 100K - 500K", min: 100000, max: 500000 },
  { label: "KES 500K - 1M", min: 500000, max: 1000000 },
  { label: "KES 1M - 10M", min: 1000000, max: 10000000 },
  { label: "KES 10M - 50M", min: 10000000, max: 50000000 },
  { label: "Above KES 50M", min: 50000000, max: Infinity },
];
