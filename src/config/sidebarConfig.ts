import { Home, BarChart2, Users, FileText, Megaphone, DollarSign, Settings } from "lucide-react";

export const menuItems = [
  { 
    icon: Home, 
    label: "Dashboard", 
    path: "/dashboard",
    submenu: [
      { label: "Overview", path: "/dashboard/overview" },
      { label: "Key Metrics", path: "/dashboard/key-metrics" },
      { label: "Notifications", path: "/dashboard/notifications" }
    ]
  },
  { 
    icon: Users, 
    label: "Program Management", 
    path: "/management",
    submenu: [
      { label: "Create Program", path: "/management/create" },
      { label: "Manage Programs", path: "/management" },
      { label: "Drafts", path: "/management/drafts" }
    ]
  },
  { 
    icon: FileText, 
    label: "Affiliate Tools", 
    path: "/affiliate",
    submenu: [
      { label: "Manage Affiliates", path: "/affiliate" },
      { label: "Top Affiliates", path: "/affiliate/top" },
      { label: "Affiliate Messaging", path: "/affiliate/messaging" }
    ]
  },
  { 
    icon: BarChart2, 
    label: "Analytics", 
    path: "/analytics",
    submenu: [
      { label: "Performance Analytics", path: "/analytics" },
      { label: "ROI Analytics", path: "/analytics/roi" },
      { label: "Conversion Funnels", path: "/analytics/funnels" }
    ]
  },
  { icon: Megaphone, label: "Marketing Assets", path: "/dashboard/assets" },
  { icon: DollarSign, label: "Payment & Finance", path: "/dashboard/finance" },
  { icon: Settings, label: "Support & Settings", path: "/dashboard/settings" },
];