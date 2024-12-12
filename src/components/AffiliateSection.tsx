import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AffiliateCard = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-4">
    <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
      <span className="text-xs text-gray-500">Affiliate Logo</span>
    </div>
    <h4 className="text-sm font-medium mb-2">Affiliate Name</h4>
    <p className="text-xs text-gray-500 mb-3">Available Sites —</p>
    <Button variant="outline" size="sm" className="w-full">
      Send Message
    </Button>
  </div>
);

export const AffiliateSection = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Top Affiliate</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AffiliateCard />
        <AffiliateCard />
        <AffiliateCard />
        <AffiliateCard />
      </div>
    </Card>
  );
};