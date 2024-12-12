import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Overview from "./pages/Overview";
import KeyMetrics from "./pages/KeyMetrics";
import Notifications from "./pages/Notifications";
import CreateProgram from "./pages/CreateProgram";
import ManagePrograms from "./pages/ManagePrograms";
import Drafts from "./pages/Drafts";
import Affiliate from "./pages/Affiliate";
import TopAffiliates from "./pages/TopAffiliates";
import AffiliateMessaging from "./pages/AffiliateMessaging";
import Analytics from "./pages/Analytics";
import ROIAnalytics from "./pages/ROIAnalytics";
import Funnels from "./pages/Funnels";
import Demographics from "./pages/Demographics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/key-metrics" element={<KeyMetrics />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/management" element={<ManagePrograms />} />
          <Route path="/management/create" element={<CreateProgram />} />
          <Route path="/management/drafts" element={<Drafts />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/affiliate/top" element={<TopAffiliates />} />
          <Route path="/affiliate/messaging" element={<AffiliateMessaging />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analytics/roi" element={<ROIAnalytics />} />
          <Route path="/analytics/funnels" element={<Funnels />} />
          <Route path="/analytics/demographics" element={<Demographics />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;