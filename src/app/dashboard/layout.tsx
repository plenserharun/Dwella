export const metadata = {
  title: "Dashboard - Dwella",
  description: "Manage your properties, saved listings, and account settings.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-midnight-400">{children}</div>;
}
