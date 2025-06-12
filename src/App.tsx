import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CountryList from "./components/CountryList";
import CountryProfile from "./components/CountryProfile";
import PillarPage from "./components/PillarPage";
import ChatAssistant from "./components/ChatAssistant";
import About from "./pages/about";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/countries" element={<CountryList />} />
                <Route path="/country/:id" element={<CountryProfile />} />
                <Route path="/pillar/:pillarId" element={<PillarPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ChatAssistant />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
