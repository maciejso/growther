import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarSubmenuProps {
  submenu: Array<{ label: string; path: string }>;
  isActive: boolean;
  currentPath: string;
}

export const SidebarSubmenu = ({ submenu, isActive, currentPath }: SidebarSubmenuProps) => {
  if (!submenu) return null;
  
  return (
    <div className="ml-8 mt-1 space-y-1">
      {submenu.map((subitem, subindex) => (
        <Link
          key={subindex}
          to={subitem.path}
          className={cn(
            "block w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded-lg",
            currentPath === subitem.path && "bg-gray-100 text-gray-900"
          )}
        >
          {subitem.label}
        </Link>
      ))}
    </div>
  );
};