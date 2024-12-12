import { Card } from "@/components/ui/card";

export const AdvancedAnalytics = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Advanced Analytics</h3>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h4 className="font-medium mb-4">Traffic Sources</h4>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-4">Audience Demographics</h4>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-4">ROI Trend</h4>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};