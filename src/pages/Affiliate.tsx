import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const affiliateData = Array(10).fill({
  name: "ABC",
  clicks: "20",
  conversions: "250",
  revenue: "$4500",
  status: "Status"
});

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">Manage Your Affiliates</h1>
          
          <div className="space-y-6">
            {/* Filters Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Filters</span>
              </div>
              
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>Performance</option>
              </select>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Join Date
              </Button>
              
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>Activity</option>
              </select>
              
              <Button className="bg-primary text-white hover:bg-primary/90">
                Apply
              </Button>
            </div>

            {/* Search Bar */}
            <div className="flex justify-end gap-2">
              <Input
                placeholder="Search..."
                className="max-w-xs"
              />
              <Button className="bg-primary text-white hover:bg-primary/90">
                Search
              </Button>
            </div>

            {/* Affiliates Table */}
            <div className="bg-white rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Affiliate Name</TableHead>
                    <TableHead colSpan={3} className="text-center">Performance Metrics</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead className="text-sm font-normal">Clicks</TableHead>
                    <TableHead className="text-sm font-normal">Conversions</TableHead>
                    <TableHead className="text-sm font-normal">Revenue</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {affiliateData.map((affiliate, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{affiliate.name}</TableCell>
                      <TableCell>{affiliate.clicks}</TableCell>
                      <TableCell>{affiliate.conversions}</TableCell>
                      <TableCell>{affiliate.revenue}</TableCell>
                      <TableCell>{affiliate.status}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="link" className="text-blue-500">
                            Pause
                          </Button>
                          <Button className="bg-primary text-white hover:bg-primary/90">
                            Approve
                          </Button>
                          <Button variant="destructive">
                            Remove Affiliate
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Invite New Affiliates
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90">
                View Inactive Affiliates
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Affiliate;