import { 
  Home, 
  ListTodo, 
  Wrench, 
  BarChart2, 
  Megaphone, 
  DollarSign, 
  Settings,
  ChevronDown
} from "lucide-react";

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
    icon: ListTodo, 
    label: "Program Management", 
    path: "/management",
    submenu: [
      { label: "Create Program", path: "/management/create" },
      { label: "Manage Programs", path: "/management" },
      { label: "Drafts", path: "/management/drafts" }
    ]
  },
  { 
    icon: Wrench, 
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
      { label: "Conversion Funnels", path: "/analytics/funnels" },
      { label: "Audience Demographics", path: "/analytics/demographics" }
    ]
  },
  { 
    icon: Megaphone, 
    label: "Marketing Assets", 
    path: "/marketing",
  },
  { 
    icon: DollarSign, 
    label: "Payment & Finance", 
    path: "/finance",
  },
  { 
    icon: Settings, 
    label: "Support & Settings", 
    path: "/settings",
  },
];