import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CreateProgram = () => {
  const [commissionType, setCommissionType] = useState<"fixed" | "percentage">("fixed");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Program saved as draft",
    });
  };

  const handlePublish = () => {
    toast({
      title: "Success",
      description: "Program published successfully",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-2xl font-bold mb-8">Create New Affiliate Program</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Input 
                  placeholder="Program Title"
                  className="w-full"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Commission Structure</h3>
                <div className="flex gap-6">
                  <label className="flex items-center space-x-2">
                    <Checkbox 
                      checked={commissionType === "fixed"}
                      onCheckedChange={() => setCommissionType("fixed")}
                    />
                    <span>Fixed</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Checkbox 
                      checked={commissionType === "percentage"}
                      onCheckedChange={() => setCommissionType("percentage")}
                    />
                    <span>Percentage</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Upload Marketing Assets</h3>
                <Input 
                  placeholder="Marketing Links Separated Comma"
                  className="w-full mb-4"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <p className="text-sm text-gray-500">Click to Upload Files</p>
                    <p className="text-xs text-gray-400">Or Drag & Drop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Textarea 
                  placeholder="Program Description"
                  className="w-full h-40"
                />
              </div>

              <div>
                <Textarea 
                  placeholder="Define Rules"
                  className="w-full h-40"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              variant="outline"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Save as Draft
            </Button>
            <Button
              type="button"
              onClick={handlePublish}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Publish Program
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProgram;