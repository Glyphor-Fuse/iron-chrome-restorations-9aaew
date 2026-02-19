import { lazy, Suspense } from 'react';

// Section Components
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { RestorationJourney } from "@/components/RestorationJourney";
import { Gallery } from "@/components/Gallery";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
          <Navbar />
          <Hero />
          <Services />
          <RestorationJourney />
          <Gallery />
          <Team />
          <CTA />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
