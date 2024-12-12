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
  { name: "Jan", conversions: 200, nonConversions: 400, rate: 0.15 },
  { name: "Feb", conversions: 300, nonConversions: 500, rate: 0.2 },
  { name: "Mar", conversions: 400, nonConversions: 600, rate: 0.25 },
  { name: "Apr", conversions: 200, nonConversions: 700, rate: 0.15 },
  { name: "May", conversions: 300, nonConversions: 500, rate: 0.2 },
  { name: "Jun", conversions: 400, nonConversions: 800, rate: 0.25 },
  { name: "Jul", conversions: 300, nonConversions: 600, rate: 0.2 },
];

export const ConversionChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Conversions Over Time</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="nonConversions" stackId="a" fill="#E5E7EB" />
            <Bar yAxisId="left" dataKey="conversions" stackId="a" fill="#4CAF50" />
            <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#2196F3" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};