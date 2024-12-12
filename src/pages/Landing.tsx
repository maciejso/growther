import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="font-bold text-xl">GROWTHER</span>
            </div>
            <Button onClick={() => navigate("/dashboard")} variant="outline">
              Go to Dashboard
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Grow your business with</span>
              <span className="block text-primary">Affiliate Marketing</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Launch, scale, and manage your affiliate program with our powerful platform. Connect with the right partners and drive sustainable growth.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button
                  onClick={() => navigate("/dashboard")}
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                >
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Quick Setup</h3>
                <p className="mt-2 text-base text-gray-500">Get your affiliate program up and running in minutes with our intuitive platform.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Analytics</h3>
                <p className="mt-2 text-base text-gray-500">Track performance and optimize your campaigns with detailed insights.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Partner Management</h3>
                <p className="mt-2 text-base text-gray-500">Easily manage and communicate with your affiliate partners.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;