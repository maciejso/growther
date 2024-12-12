import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Cell,
} from "recharts";

const funnelData = [
  { value: 12000, name: "Impressions", fill: "#88D4D8" },
  { value: 900, name: "Clicks", fill: "#FCD34D" },
  { value: 400, name: "Conversions", fill: "#4CAF50" },
];

const dropOffsData = [
  { name: "Impressions", value: 1100, fill: "#3B82F6" },
  { name: "Clicks", value: 700, fill: "#F97316" },
  { name: "Conversions", value: 99, fill: "#FCD34D" },
];

const metricsData = [
  { campaign: "ABC", impressions: 45000, clicks: 500, conversions: 50 },
  { campaign: "ABC", impressions: 45000, clicks: 500, conversions: 50 },
  { campaign: "ABC", impressions: 45000, clicks: 500, conversions: 50 },
  { campaign: "ABC", impressions: 45000, clicks: 500, conversions: 50 },
  { campaign: "ABC", impressions: 45000, clicks: 500, conversions: 50 },
  { campaign: "ABC", impressions: 45000, clicks: 500, conversions: 50 },
];

const Funnels = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-6">Conversion Funnels Dashboard</h1>
            
            <div className="flex gap-4 items-center mb-8">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <span className="font-medium">Filters</span>
              </div>
              
              <Button variant="outline" className="border-gray-300">
                Date Range
              </Button>
              
              <Button variant="outline" className="border-gray-300">
                Campaign
              </Button>
              
              <Button variant="outline" className="border-gray-300">
                Affiliate
              </Button>
              
              <Button className="bg-primary text-white ml-auto">
                Apply
              </Button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Recommendations:</h3>
                  <p className="text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">×</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Funnel Metrics</h2>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download CSV
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>Conversions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metricsData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.campaign}</TableCell>
                          <TableCell>{row.impressions}</TableCell>
                          <TableCell>{row.clicks}</TableCell>
                          <TableCell>{row.conversions}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Steps With Total Count</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <FunnelChart>
                      <Tooltip />
                      <Funnel
                        data={funnelData}
                        dataKey="value"
                      >
                        <LabelList
                          position="right"
                          fill="#000"
                          stroke="none"
                          dataKey="name"
                          offset={10}
                        />
                        <LabelList
                          position="right"
                          fill="#666"
                          stroke="none"
                          dataKey="value"
                          offset={45}
                        />
                      </Funnel>
                    </FunnelChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <Card className="mt-6 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Drop-Offs</h2>
                <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm">
                  <option>Last 30 Days</option>
                  <option>Last 60 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dropOffsData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8">
                      {dropOffsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Funnels;
