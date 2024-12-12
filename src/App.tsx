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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;