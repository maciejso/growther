import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Filter, Search, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const Drafts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">Unfinished Affiliate Programs</h1>
          
          <div className="space-y-6">
            {/* Filters Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Filters</span>
              </div>
              
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Date
              </Button>
              
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>Performance</option>
              </select>
              
              <Button className="bg-primary text-white hover:bg-primary/90">
                Apply
              </Button>
            </div>

            {/* Status Tabs */}
            <div className="border-b">
              <div className="flex gap-4">
                <button className="px-4 py-2 border-b-2 border-primary font-medium">
                  Active
                </button>
                <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                  Inactive
                </button>
                <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                  Pending
                </button>
              </div>
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

            {/* Programs Table */}
            <div className="bg-white rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Program Name</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(10)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>ABC</TableCell>
                      <TableCell>12/4/2024</TableCell>
                      <TableCell>Archived</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="link" className="text-blue-500 p-0">
                            Preview
                          </Button>
                          <span className="text-gray-300">|</span>
                          <Button variant="link" className="text-blue-500 p-0">
                            Resume Creation
                          </Button>
                          <Button className="bg-primary text-white hover:bg-primary/90 ml-2">
                            Publish
                          </Button>
                          <Button variant="destructive">
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* New Program Button */}
            <div className="flex justify-center mt-8">
              <Link to="/management/create">
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  Start New Program
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Drafts;
