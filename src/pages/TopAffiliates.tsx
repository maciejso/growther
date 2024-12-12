import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const trendData = [
  { name: 'AmericanTS', Affiliate1: 0.35, Affiliate2: 0.32, Affiliate3: 0.25, Affiliate4: 0.22 },
  { name: 'Animal41', Affiliate1: 0.38, Affiliate2: 0.35, Affiliate3: 0.26, Affiliate4: 0.24 },
  { name: 'BayFed3', Affiliate1: 0.36, Affiliate2: 0.40, Affiliate3: 0.28, Affiliate4: 0.25 },
  { name: 'BengalMB2', Affiliate1: 0.34, Affiliate2: 0.35, Affiliate3: 0.24, Affiliate4: 0.22 },
  { name: 'Boston47', Affiliate1: 0.37, Affiliate2: 0.38, Affiliate3: 0.27, Affiliate4: 0.26 },
  { name: 'Bronco89', Affiliate1: 0.35, Affiliate2: 0.36, Affiliate3: 0.25, Affiliate4: 0.24 },
  { name: 'Brown11', Affiliate1: 0.36, Affiliate2: 0.38, Affiliate3: 0.26, Affiliate4: 0.23 },
];

const affiliateData = [
  { rank: 1, name: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { rank: 2, name: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { rank: 3, name: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { rank: 4, name: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { rank: 5, name: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
  { rank: 6, name: "ABC", clicks: 20, conversions: 250, revenue: "$4500" },
];

const TopAffiliates = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">Top Performing Affiliates</h1>
          
          <div className="space-y-6">
            {/* Filters Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Filters</span>
              </div>
              
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
                <option>This Year</option>
              </select>
              
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>Program</option>
              </select>
              
              <Button variant="outline" className="px-4">
                Clicks
              </Button>
              
              <Button variant="outline" className="px-4">
                Conversions
              </Button>
              
              <Button variant="outline" className="px-4">
                Revenue
              </Button>
              
              <Button className="bg-primary text-white hover:bg-primary/90 px-6">
                Apply
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Affiliates Table */}
              <div className="bg-white rounded-lg border p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank#</TableHead>
                      <TableHead>Affiliate Name</TableHead>
                      <TableHead colSpan={3} className="text-center">Profile Summary</TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead></TableHead>
                      <TableHead></TableHead>
                      <TableHead className="text-sm font-normal">Clicks</TableHead>
                      <TableHead className="text-sm font-normal">Conversions</TableHead>
                      <TableHead className="text-sm font-normal">Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {affiliateData.map((affiliate) => (
                      <TableRow key={affiliate.rank}>
                        <TableCell>{affiliate.rank}</TableCell>
                        <TableCell>{affiliate.name}</TableCell>
                        <TableCell>{affiliate.clicks}</TableCell>
                        <TableCell>{affiliate.conversions}</TableCell>
                        <TableCell>{affiliate.revenue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Revenue Trend Chart */}
              <div className="bg-white rounded-lg border p-4">
                <h3 className="text-lg font-semibold mb-4">Revenue Contribution & Trend</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Affiliate1" stroke="#8884d8" name="Affiliate 1" />
                      <Line type="monotone" dataKey="Affiliate2" stroke="#82ca9d" name="Affiliate 2" />
                      <Line type="monotone" dataKey="Affiliate3" stroke="#ffc658" name="Affiliate 3" />
                      <Line type="monotone" dataKey="Affiliate4" stroke="#ff7300" name="Affiliate 4" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TopAffiliates;