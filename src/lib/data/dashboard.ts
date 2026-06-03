export const sampleUserDashboard = {
  user: {
    id: "user-001",
    name: "Wanjiku Muthoni",
    email: "wanjiku.muthoni@email.co.ke",
    phone: "+254 712 345 678",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    role: "user",
    verified: true,
    memberSince: "2026-01-15",
    location: "Nairobi, Kenya",
  },
  stats: {
    savedListings: 12,
    viewedProperties: 48,
    inquiries: 8,
    bookings: 3,
    messages: 15,
  },
  activities: [
    { id: "act-001", type: "view", propertyId: "prop-001", propertyTitle: "Luxury 5-Bedroom Villa in Karen", date: "2026-06-02T10:30:00", status: "completed" },
    { id: "act-002", type: "save", propertyId: "prop-002", propertyTitle: "Modern Apartment in Kilimani", date: "2026-06-01T14:20:00", status: "active" },
    { id: "act-003", type: "inquiry", propertyId: "prop-003", propertyTitle: "Commercial Office Space in Westlands", date: "2026-05-30T09:15:00", status: "pending" },
    { id: "act-004", type: "booking", propertyId: "prop-006", propertyTitle: "Beachfront Villa in Diani", date: "2026-05-28T16:45:00", status: "confirmed" },
  ],
  savedProperties: ["prop-002", "prop-006", "prop-007"],
  recentSearches: ["3 bedroom apartment Kilimani", "commercial space Westlands", "villa Karen under 100M", "warehouse Industrial Area"],
  notifications: [
    { id: "notif-001", title: "Price Drop Alert", message: "The villa in Karen has dropped by KES 5M", type: "success", date: "2026-06-02T08:00:00", read: false },
    { id: "notif-002", title: "New Listing", message: "A new apartment matching your criteria is available in Kileleshwa", type: "info", date: "2026-06-01T12:00:00", read: false },
    { id: "notif-003", title: "Viewing Reminder", message: "Your viewing for the Westlands office is tomorrow at 2 PM", type: "warning", date: "2026-05-30T09:00:00", read: true },
  ],
};

export const sampleLandlordDashboard = {
  user: {
    id: "landlord-001",
    name: "Charles Omondi",
    email: "charles.omondi@email.co.ke",
    phone: "+254 723 456 789",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    role: "landlord",
    verified: true,
    memberSince: "2025-08-20",
    location: "Nairobi, Kenya",
  },
  properties: [
    { id: "prop-101", title: "2-Bedroom Apartment in Kileleshwa", status: "active", views: 2340, inquiries: 45, income: 85000, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800" },
    { id: "prop-102", title: "Studio in Ngong Road", status: "active", views: 1890, inquiries: 32, income: 35000, image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800" },
    { id: "prop-103", title: "Commercial Shop in Eastleigh", status: "pending", views: 1200, inquiries: 18, income: 0, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" },
  ],
  analytics: {
    totalIncome: 120000,
    totalProperties: 3,
    occupancyRate: 85,
    avgResponseTime: 2.5,
    monthlyData: [
      { month: "Jan", income: 110000, views: 4500 },
      { month: "Feb", income: 115000, views: 5200 },
      { month: "Mar", income: 120000, views: 6100 },
      { month: "Apr", income: 120000, views: 5800 },
      { month: "May", income: 120000, views: 6500 },
      { month: "Jun", income: 120000, views: 7200 },
    ],
  },
  tenants: [
    { id: "tenant-001", name: "Mary Akinyi", property: "2-Bedroom Apartment in Kileleshwa", rent: 85000, status: "active", moveInDate: "2026-01-01" },
    { id: "tenant-002", name: "John Kipchirchir", property: "Studio in Ngong Road", rent: 35000, status: "active", moveInDate: "2026-02-15" },
  ],
};
