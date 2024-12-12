import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ConversionChart } from "@/components/ConversionChart";
import { AffiliateTable } from "@/components/AffiliateTable";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Company Name</h1>
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="p-8">
          <div className="space-y-6">
            <DashboardHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ConversionChart />
              <AffiliateTable />
            </div>
            <AdvancedAnalytics />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;