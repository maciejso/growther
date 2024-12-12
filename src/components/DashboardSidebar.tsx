import { useLocation, Link } from "react-router-dom";
import { menuItems } from "@/config/sidebarConfig";
import { SidebarMenuItem } from "./sidebar/SidebarMenuItem";

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
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
            submenu={item.submenu}
            isActive={location.pathname.startsWith(item.path)}
            currentPath={location.pathname}
          />
        ))}
      </nav>
    </div>
  );
};