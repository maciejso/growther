import { Bell, Calendar, Filter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DashboardHeader } from "@/components/DashboardHeader";

const NotificationItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-center justify-between p-4 border-b last:border-b-0">
    <div className="space-y-1">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <Button variant="outline" size="sm">View</Button>
  </div>
);

const Notifications = () => {
  return (
    <div className="p-8 space-y-6">
      <DashboardHeader
        title="Notifications Overview"
        icon={Bell}
        description="Manage and view all your notifications in one place"
      />

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <span className="font-medium">Filters</span>
        </div>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Notification Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Notifications</SelectItem>
            <SelectItem value="campaign">Campaign Alerts</SelectItem>
            <SelectItem value="payment">Payment Reminders</SelectItem>
            <SelectItem value="system">System Updates</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <input
              type="date"
              className="px-3 py-2 border rounded-md"
              placeholder="Date From"
            />
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <input
              type="date"
              className="px-3 py-2 border rounded-md"
              placeholder="Date To"
            />
          </div>
        </div>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Priority Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High Priority</SelectItem>
            <SelectItem value="medium">Medium Priority</SelectItem>
            <SelectItem value="low">Low Priority</SelectItem>
          </SelectContent>
        </Select>

        <Button className="ml-auto">Apply</Button>

        <div className="flex items-center gap-2">
          <Checkbox id="markAllRead" />
          <label htmlFor="markAllRead" className="text-sm font-medium">
            Mark All as Read
          </label>
        </div>
      </div>

      <Card className="mb-6">
        <div className="divide-y">
          <NotificationItem
            title="New Campaign Performance Update"
            description="Your summer campaign has reached 10,000 impressions"
          />
          <NotificationItem
            title="Payment Processing Complete"
            description="Monthly affiliate payments have been processed successfully"
          />
          <NotificationItem
            title="New Affiliate Sign-up"
            description="A new affiliate has joined your program"
          />
          <NotificationItem
            title="Campaign Goal Achieved"
            description="Your Q2 campaign has reached its target conversion rate"
          />
        </div>
      </Card>

      <div className="flex justify-center">
        <Button variant="outline" className="px-8">
          View All Notifications
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Campaign Alerts</h3>
            <div className="space-y-4">
              <NotificationItem
                title="Campaign Performance Alert"
                description="Daily clicks have increased by 25%"
              />
              <NotificationItem
                title="Budget Update"
                description="Campaign 'Summer Sale' is at 80% of budget"
              />
              <NotificationItem
                title="New Campaign Opportunity"
                description="Seasonal promotion opportunity detected"
              />
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Payment Reminders</h3>
            <div className="space-y-4">
              <NotificationItem
                title="Monthly Payment Due"
                description="Affiliate payments for June are due in 3 days"
              />
              <NotificationItem
                title="Invoice Generated"
                description="New invoice #INV-2024-001 has been generated"
              />
              <NotificationItem
                title="Payment Confirmation"
                description="Last month's payments have been processed"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;