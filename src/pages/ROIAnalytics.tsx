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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const roiData = [
  { ranking: 1, campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { ranking: 2, campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { ranking: 3, campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { ranking: 4, campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { ranking: 5, campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
];

const campaignData = [
  { affiliate: "ABC", campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { affiliate: "ABC", campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { affiliate: "ABC", campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { affiliate: "ABC", campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
  { affiliate: "ABC", campaign: "ABC", spend: "$100000", return: "$150000", roi: "50%" },
];

const trendData = [
  { date: "9/4/2017", revenue: 8.5, spend: 7.5 },
  { date: "9/11/2017", revenue: 9.0, spend: 8.0 },
  { date: "9/18/2017", revenue: 8.5, spend: 7.8 },
  { date: "9/25/2017", revenue: 10.5, spend: 9.5 },
  { date: "10/1/2017", revenue: 9.0, spend: 8.2 },
  { date: "10/8/2017", revenue: 9.5, spend: 8.8 },
  { date: "10/15/2017", revenue: 10.0, spend: 9.0 },
  { date: "10/22/2017", revenue: 11.0, spend: 10.0 },
  { date: "10/29/2017", revenue: 10.5, spend: 9.5 },
  { date: "11/5/2017", revenue: 9.8, spend: 9.0 },
];

const ROIAnalytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">ROI Analysis Dashboard</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">ROI</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Download PDF</Button>
                  <Button variant="outline" size="sm">Download CSV</Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ranking</TableHead>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Spend</TableHead>
                    <TableHead>Return</TableHead>
                    <TableHead>ROI</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roiData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.ranking}</TableCell>
                      <TableCell>{row.campaign}</TableCell>
                      <TableCell>{row.spend}</TableCell>
                      <TableCell>{row.return}</TableCell>
                      <TableCell>{row.roi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-500">Total Spend: $700000</div>
                  <div className="text-sm text-gray-500">Total Generated: $950000</div>
                </div>
                <h2 className="text-lg font-semibold">ROI Spend VS Revenue</h2>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#2E96FF" 
                      strokeWidth={2}
                      name="Revenue"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="spend" 
                      stroke="#FF9800" 
                      strokeWidth={2}
                      name="Spend"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">ROI by Campaign & Affiliate</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Download PDF</Button>
                  <Button variant="outline" size="sm">Download CSV</Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Affiliate</TableHead>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Spend</TableHead>
                    <TableHead>Return</TableHead>
                    <TableHead>ROI</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaignData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.affiliate}</TableCell>
                      <TableCell>{row.campaign}</TableCell>
                      <TableCell>{row.spend}</TableCell>
                      <TableCell>{row.return}</TableCell>
                      <TableCell>{row.roi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">High ROI VS Under-performing Campaigns</h2>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#2E96FF" 
                      strokeWidth={2}
                      name="High"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="spend" 
                      stroke="#FF9800" 
                      strokeWidth={2}
                      name="Under"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ROIAnalytics;