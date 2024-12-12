import { TrendingUp, Users, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value: 40 },
  { value: 30 },
  { value: 45 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 55 },
];

const MetricCard = ({ title, value, trend }: { title: string; value: string; trend: React.ReactNode }) => (
  <Card className="p-6">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="w-24 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </Card>
);

export const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricCard title="Conversions" value="122" trend={<TrendingUp className="text-green-500" />} />
      <MetricCard title="Clicks" value="1003" trend={<Users className="text-blue-500" />} />
      <MetricCard title="Revenue" value="$100,000" trend={<DollarSign className="text-purple-500" />} />
    </div>
  );
};