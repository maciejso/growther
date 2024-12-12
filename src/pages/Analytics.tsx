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
import { Filter, Download, Share2 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { campaign: "ABC", affiliateName: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { campaign: "ABC", affiliateName: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { campaign: "ABC", affiliateName: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { campaign: "ABC", affiliateName: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { campaign: "ABC", affiliateName: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { campaign: "ABC", affiliateName: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
];

const trendData = [
  { date: "9/4/2017", clicks: 8, conversions: 7 },
  { date: "9/11/2017", clicks: 10, conversions: 9 },
  { date: "9/18/2017", clicks: 12, conversions: 8 },
  { date: "9/25/2017", clicks: 9, conversions: 10 },
  { date: "10/1/2017", clicks: 11, conversions: 7 },
  { date: "10/8/2017", clicks: 8, conversions: 8 },
  { date: "10/15/2017", clicks: 12, conversions: 9 },
  { date: "10/22/2017", clicks: 13, conversions: 11 },
  { date: "10/29/2017", clicks: 14, conversions: 8 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-6">Performance Analytics Dashboard</h1>
            
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
                Clicks
              </Button>
              
              <Button variant="outline" className="border-gray-300">
                Conversions
              </Button>
              
              <Button variant="outline" className="border-gray-300">
                Revenue
              </Button>
              
              <Button className="bg-primary text-white ml-auto">
                Apply
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Summary Metrics</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Affiliate Name</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>Conversions</TableHead>
                        <TableHead>Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {performanceData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.campaign}</TableCell>
                          <TableCell>{row.affiliateName}</TableCell>
                          <TableCell>{row.clicks}</TableCell>
                          <TableCell>{row.conversions}</TableCell>
                          <TableCell>{row.revenue}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download CSV
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Campaign Performance Trends</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="clicks" 
                        stroke="#2E96FF" 
                        strokeWidth={2}
                        name="Clicks"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="conversions" 
                        stroke="#FF9800" 
                        strokeWidth={2}
                        name="Conversions"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button className="bg-primary text-white">
                Explore Detailed ROI
              </Button>
              <Button className="bg-primary text-white">
                Conversion Funnels
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;