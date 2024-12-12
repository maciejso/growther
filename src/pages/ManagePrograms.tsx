import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Plus } from "lucide-react";

const ManagePrograms = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Program Management</h1>
          <p className="text-gray-600">Manage and monitor your affiliate programs</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search programs..."
                  className="pl-10 w-[300px]"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Program
            </Button>
          </div>

          <Tabs defaultValue="active" className="mb-6">
            <TabsList>
              <TabsTrigger value="active">Active (24)</TabsTrigger>
              <TabsTrigger value="draft">Draft (2)</TabsTrigger>
              <TabsTrigger value="archived">Archived (12)</TabsTrigger>
            </TabsList>
          </Tabs>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Affiliates</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">Summer Sale 2024</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Active
                    </span>
                  </TableCell>
                  <TableCell>142</TableCell>
                  <TableCell>15%</TableCell>
                  <TableCell>1,234</TableCell>
                  <TableCell>$12,345</TableCell>
                  <TableCell>2 hours ago</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManagePrograms;