import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricsCards } from "@/components/MetricsCards";
import { ConversionChart } from "@/components/ConversionChart";
import { AffiliateTable } from "@/components/AffiliateTable";
import { Plus, Bell } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Company Name</h1>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main className="p-8">
          <div className="mb-8 flex justify-between items-center">
            <Button className="inline-flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create New Affiliate Program
            </Button>
          </div>
          <div className="space-y-8">
            <MetricsCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ConversionChart />
              <AffiliateTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;