import { Card } from "@/components/ui/card";
import { MousePointer, Users, DollarSign } from "lucide-react";

const MetricCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => (
  <Card className="p-6 bg-white">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold mt-1 text-gray-900">{value}</p>
      </div>
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </div>
  </Card>
);

export const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricCard title="Total Clicks" value="1003" icon={MousePointer} />
      <MetricCard title="Total Conversions" value="25000" icon={Users} />
      <MetricCard title="Revenue Generated" value="$100,000" icon={DollarSign} />
    </div>
  );
};