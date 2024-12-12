import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, MessageSquare, Send, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const affiliates = [
  { id: 1, name: "Affiliate 1", lastMessage: "You: your last message to Affiliate" },
  { id: 2, name: "Affiliate 2", lastMessage: "You: your last message to Affiliate" },
  { id: 3, name: "Affiliate 3", lastMessage: "You: your last message to Affiliate" },
  { id: 4, name: "Affiliate 4", lastMessage: "You: your last message to Affiliate" },
  { id: 5, name: "Affiliate 5", lastMessage: "You: your last message to Affiliate" },
];

const messages = [
  { id: 1, sender: "Affiliate", content: "Message of Affiliate to you..." },
  { id: 2, sender: "You", content: "Your message to Affiliate OR Affiliates" },
  { id: 3, sender: "Affiliate", content: "Message of Affiliate to you..." },
  { id: 4, sender: "You", content: "Your message to Affiliate OR Affiliates" },
  { id: 5, sender: "Affiliate", content: "Message of Affiliate to you..." },
  { id: 6, sender: "You", content: "Your message to Affiliate OR Affiliates" },
];

const AffiliateMessaging = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="pl-64">
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">Affiliate Messaging System</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inbox Section */}
            <Card>
              <CardHeader>
                <CardTitle>Inbox</CardTitle>
                <div className="flex gap-2 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input className="pl-10" placeholder="Search conversations..." />
                  </div>
                  <Button variant="secondary">Search</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {affiliates.map((affiliate) => (
                    <div
                      key={affiliate.id}
                      className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div>
                        <h3 className="font-medium">{affiliate.name}</h3>
                        <p className="text-sm text-gray-600">{affiliate.lastMessage}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Conversation
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Messaging Section */}
            <Card>
              <CardHeader>
                <CardTitle>Messaging</CardTitle>
                <div className="flex items-center gap-2 mt-4">
                  <div className="relative flex-1">
                    <div className="flex flex-wrap gap-2 p-2 border rounded-md">
                      <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        Affiliate 1
                        <button className="text-gray-500 hover:text-gray-700">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        Affiliate 2
                        <button className="text-gray-500 hover:text-gray-700">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Compose
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "You" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "You"
                            ? "bg-primary text-white"
                            : "bg-gray-100"
                        }`}
                      >
                        <p className="text-sm font-medium mb-1">{message.sender}</p>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type Your Message Here..."
                    className="min-h-[44px] flex-1"
                  />
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              className="bg-primary text-white hover:bg-primary/90"
              size="lg"
            >
              New Message
            </Button>
            <Button
              className="bg-primary text-white hover:bg-primary/90"
              size="lg"
            >
              Import Affiliate Contact List
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AffiliateMessaging;