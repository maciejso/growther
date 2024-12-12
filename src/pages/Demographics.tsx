import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Download, Filter } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const demographicsData = [
  { age: "20-24", male: 70, female: 110, other: 90 },
  { age: "25-29", male: 110, female: 90, other: 85 },
  { age: "30-34", male: 170, female: 150, other: 100 },
  { age: "35-39", male: 145, female: 130, other: 80 },
  { age: "40-44", male: 100, female: 85, other: 75 },
  { age: "45-49", male: 80, female: 130, other: 90 },
];

const trendsData = Array.from({ length: 12 }, (_, i) => ({
  month: format(new Date(2024, i, 1), 'MMM'),
  "20-24": Math.floor(Math.random() * 100) + 100,
  "25-29": Math.floor(Math.random() * 100) + 150,
  "30-34": Math.floor(Math.random() * 100) + 175,
  "35-44": Math.floor(Math.random() * 100) + 125,
  "45+": Math.floor(Math.random() * 100) + 75,
}));

const conversionGroups = [
  {
    age: "20-25",
    gender: "Male",
    location: "USA",
    insights: "Focus campaigns and promotions on this age range."
  },
  {
    age: "25-29",
    gender: "Female",
    location: "Australia",
    insights: "This age group shows the highest conversion rates."
  },
  {
    age: "20-25",
    gender: "Male",
    location: "USA",
    insights: "Focus campaigns and promotions on this age range."
  },
  {
    age: "25-29",
    gender: "Female",
    location: "Australia",
    insights: "This age group shows the highest conversion rates."
  }
];

const Demographics = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Audience Demographics Dashboard</h1>
        </header>

        <main className="p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium">Filters</span>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[200px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Date Range</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {["Campaign", "Age", "Gender", "Location"].map((filter) => (
              <Select key={filter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={filter} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            ))}

            <Button className="ml-auto bg-primary text-white">Apply</Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Funnel Metrics</h2>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CSV
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Affiliate</th>
                      <th className="text-left py-2">Campaign</th>
                      <th className="text-left py-2">Age</th>
                      <th className="text-left py-2">Gender</th>
                      <th className="text-left py-2">Locations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-2">ABC</td>
                        <td className="py-2">ABC</td>
                        <td className="py-2">45000</td>
                        <td className="py-2">500</td>
                        <td className="py-2">ABC</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Demographics Chart</h2>
              <BarChart width={500} height={300} data={demographicsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="male" fill="#90caf9" />
                <Bar dataKey="female" fill="#f48fb1" />
                <Bar dataKey="other" fill="#a5d6a7" />
              </BarChart>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">High Conversion Groups</h2>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CSV
                </Button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th colSpan={3} className="text-left py-2">Category</th>
                    <th className="text-left py-2">Insights</th>
                  </tr>
                  <tr className="border-b text-sm text-gray-600">
                    <th className="text-left py-2">Age</th>
                    <th className="text-left py-2">Gender</th>
                    <th className="text-left py-2">Location</th>
                    <th className="text-left py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {conversionGroups.map((group, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2">{group.age}</td>
                      <td className="py-2">{group.gender}</td>
                      <td className="py-2">{group.location}</td>
                      <td className="py-2">{group.insights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Audience Trends</h2>
              <p className="text-sm text-gray-600 mb-6">Audience Trend Over Time by Age Group and Location</p>
              <LineChart width={500} height={300} data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="20-24" stroke="#8884d8" />
                <Line type="monotone" dataKey="25-29" stroke="#82ca9d" />
                <Line type="monotone" dataKey="30-34" stroke="#ffc658" />
                <Line type="monotone" dataKey="35-44" stroke="#ff7300" />
                <Line type="monotone" dataKey="45+" stroke="#00C49F" />
              </LineChart>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Demographics;