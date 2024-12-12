import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Button variant="outline" size="lg" className="gap-2 text-base">
        <Plus className="w-5 h-5" />
        Create New Affiliate Program
      </Button>
      <div className="flex gap-8 items-center bg-white rounded-lg border border-gray-200 px-6 py-4">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Conversion Trend</p>
          <div className="w-24 h-8 bg-gray-50 rounded" />
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Conversions</p>
          <p className="text-2xl font-bold">122</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Clicks</p>
          <p className="text-2xl font-bold">1003</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Revenue</p>
          <p className="text-2xl font-bold">$100,000</p>
        </div>
      </div>
    </div>
  );
};