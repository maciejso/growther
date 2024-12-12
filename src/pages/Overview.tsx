import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricsCards } from "@/components/MetricsCards";
import { ConversionChart } from "@/components/ConversionChart";
import { AffiliateSection } from "@/components/AffiliateSection";
import { Bell, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Overview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="p-8">
          <div className="space-y-8">
            <MetricsCards />
            <ConversionChart />
            <AffiliateSection />
            <div className="flex justify-center pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Add New Campaign
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;