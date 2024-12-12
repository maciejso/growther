import { Link } from "react-router-dom";
import { LucideIcon, ChevronDown } from "lucide-react";
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
          "w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
          isActive && "bg-gray-100 font-medium"
        )}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </div>
        {submenu && <ChevronDown className={cn(
          "w-4 h-4 transition-transform",
          isActive && "transform rotate-180"
        )} />}
      </Link>
      {submenu && <SidebarSubmenu submenu={submenu} isActive={isActive} currentPath={currentPath} />}
    </div>
  );
};