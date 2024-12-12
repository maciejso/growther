import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarSubmenu } from "./SidebarSubmenu";

interface SidebarMenuItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  submenu?: Array<{ label: string; path: string }>;
  isActive: boolean;
  currentPath: string;
}

export const SidebarMenuItem = ({ 
  icon: Icon, 
  label, 
  path, 
  submenu, 
  isActive, 
  currentPath 
}: SidebarMenuItemProps) => {
  return (
    <div className="mb-1">
      <Link
        to={path}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
          isActive && "bg-gray-100 font-medium"
        )}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </Link>
      {submenu && <SidebarSubmenu submenu={submenu} isActive={isActive} currentPath={currentPath} />}
    </div>
  );
};