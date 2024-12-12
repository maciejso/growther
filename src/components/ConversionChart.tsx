import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";

const data = [
  { name: "Jan", conversions: 400, nonConversions: 100, rate: 0.15 },
  { name: "Feb", conversions: 500, nonConversions: 200, rate: 0.2 },
  { name: "Mar", conversions: 600, nonConversions: 300, rate: 0.25 },
  { name: "Apr", conversions: 700, nonConversions: 200, rate: 0.15 },
  { name: "May", conversions: 500, nonConversions: 300, rate: 0.2 },
  { name: "Jun", conversions: 800, nonConversions: 400, rate: 0.25 },
  { name: "Jul", conversions: 600, nonConversions: 300, rate: 0.15 },
];

export const ConversionChart = () => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Traffic Trend</h3>
        <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm">
          <option>Last 30 Days</option>
          <option>Last 60 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="nonConversions" stackId="a" fill="#E5E7EB" name="Non-Conversions" />
            <Bar yAxisId="left" dataKey="conversions" stackId="a" fill="#FCD34D" name="Conversions" />
            <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#2196F3" name="Conversion Rate" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};