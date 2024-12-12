import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const clicksData = [
  { name: "Jan", clicks: 35 },
  { name: "Feb", clicks: 40 },
  { name: "Mar", clicks: 38 },
  { name: "Apr", clicks: 95 },
  { name: "May", clicks: 85 },
  { name: "Jun", clicks: 110 },
  { name: "Jul", clicks: 120 },
  { name: "Aug", clicks: 130 },
];

const conversionData = [
  { month: "Jan", nonConversions: 300, conversions: 200, rate: 0.15 },
  { month: "Feb", nonConversions: 400, conversions: 300, rate: 0.18 },
  { month: "Mar", nonConversions: 500, conversions: 400, rate: 0.22 },
  { month: "Apr", nonConversions: 600, conversions: 500, rate: 0.20 },
  { month: "May", nonConversions: 450, conversions: 350, rate: 0.19 },
  { month: "Jun", nonConversions: 550, conversions: 450, rate: 0.21 },
  { month: "Jul", nonConversions: 650, conversions: 550, rate: 0.23 },
];

const revenueData = [
  { name: "Product A", value: 40 },
  { name: "Product B", value: 30 },
  { name: "Product C", value: 10 },
  { name: "Product D", value: 7 },
  { name: "Product E", value: 13 },
];

const COLORS = ['#00C4D4', '#2E96FF', '#FFA726', '#66BB6A', '#78909C'];

export const ClicksChart = () => (
  <Card className="p-4">
    <h3 className="text-lg font-semibold mb-4">Total Clicks</h3>
    <div className="text-3xl font-bold mb-4">1003</div>
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={clicksData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="clicks" stroke="#2E96FF" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export const ConversionsChart = () => (
  <Card className="p-4">
    <h3 className="text-lg font-semibold mb-4">Total Conversions</h3>
    <div className="text-3xl font-bold mb-4">25000</div>
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={conversionData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="nonConversions" stackId="a" fill="#E5E7EB" />
          <Bar dataKey="conversions" stackId="a" fill="#FCD34D" />
          <Line type="monotone" dataKey="rate" stroke="#2196F3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

export const RevenueChart = () => (
  <Card className="p-4">
    <h3 className="text-lg font-semibold mb-4">Revenue Generated</h3>
    <div className="text-3xl font-bold mb-4">$100,000</div>
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={revenueData}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {revenueData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </Card>
);