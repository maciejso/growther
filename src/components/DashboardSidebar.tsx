import { Home, BarChart2, Users, FileText, DollarSign, Settings, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true, submenu: ["Overview", "Key Metrics", "Notifications"] },
  { icon: Users, label: "Program Management" },
  { icon: FileText, label: "Affiliate Tools" },
  { icon: BarChart2, label: "Analytics" },
  { icon: FileText, label: "Marketing Assets" },
  { icon: DollarSign, label: "Payment & Finance" },
  { icon: Settings, label: "Support & Settings" },
];

export const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="font-bold text-xl">GROWTHER</span>
        </div>
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-1">
            <button
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
                item.active && "bg-gray-100 font-medium"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
            {item.submenu && item.active && (
              <div className="ml-8 mt-1 space-y-1">
                {item.submenu.map((subitem, subindex) => (
                  <button
                    key={subindex}
                    className="w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
                  >
                    {subitem}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};