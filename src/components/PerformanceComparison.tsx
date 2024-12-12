import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "9/4/2017", current: 8, lastMonth: 7.5 },
  { date: "9/11/2017", current: 8.5, lastMonth: 9 },
  { date: "9/18/2017", current: 9, lastMonth: 8.5 },
  { date: "9/25/2017", current: 9.5, lastMonth: 10.5 },
  { date: "10/1/2017", current: 9, lastMonth: 8 },
  { date: "10/8/2017", current: 9.2, lastMonth: 7.5 },
  { date: "10/15/2017", current: 9.5, lastMonth: 7.8 },
  { date: "10/22/2017", current: 10, lastMonth: 8 },
  { date: "10/29/2017", current: 12.5, lastMonth: 10 },
  { date: "11/5/2017", current: 11, lastMonth: 8 },
];

export const PerformanceComparison = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Performance Comparison With Last Month</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="current" 
              stroke="#2E96FF" 
              strokeWidth={2}
              name="Current"
            />
            <Line 
              type="monotone" 
              dataKey="lastMonth" 
              stroke="#FF9800" 
              strokeWidth={2}
              name="Last Month"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};