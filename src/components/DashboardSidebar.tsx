import { Home, BarChart2, Users, FileText, DollarSign, Settings, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { 
    icon: Home, 
    label: "Dashboard", 
    active: true, 
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
      { label: "Manage Programs", path: "/management/manage" },
      { label: "Drafts", path: "/management/drafts" }
    ]
  },
  { icon: FileText, label: "Affiliate Tools", path: "/dashboard/tools" },
  { icon: BarChart2, label: "Analytics", path: "/dashboard/analytics" },
  { icon: FileText, label: "Marketing Assets", path: "/dashboard/assets" },
  { icon: DollarSign, label: "Payment & Finance", path: "/dashboard/finance" },
  { icon: Settings, label: "Support & Settings", path: "/dashboard/settings" },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="font-bold text-xl">GROWTHER</span>
        </Link>
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <div key={index} className="mb-1">
              <Link
                to={item.path}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
                  isActive && "bg-gray-100 font-medium"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
              {item.submenu && isActive && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      to={subitem.path}
                      className={cn(
                        "block w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded-lg",
                        location.pathname === subitem.path && "bg-gray-100 text-gray-900"
                      )}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};