import { DashboardSidebar } from "@/components/DashboardSidebar";
import { ClicksChart, ConversionsChart, RevenueChart } from "@/components/MetricsCharts";
import { PerformanceComparison } from "@/components/PerformanceComparison";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const KeyMetrics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Key Metrics Overview</h1>
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="p-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ClicksChart />
              <ConversionsChart />
              <RevenueChart />
            </div>
            <PerformanceComparison />
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-[#5B8C51] hover:bg-[#4A7342] text-white px-8"
                size="lg"
              >
                Adjust Campaigns
              </Button>
              <Button 
                className="bg-[#5B8C51] hover:bg-[#4A7342] text-white px-8"
                size="lg"
              >
                Explore Analytics
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KeyMetrics;