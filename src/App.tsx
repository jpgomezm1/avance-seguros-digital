import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import personal insurance page components
import AutomobileInsurance from "./pages/insurance/AutomobileInsurance";
import HealthInsurance from "./pages/insurance/HealthInsurance";
import HomeInsurance from "./pages/insurance/HomeInsurance";
import LifeInsurance from "./pages/insurance/LifeInsurance";
import PetInsurance from "./pages/insurance/PetInsurance";
import TravelAssistanceInsurance from "./pages/insurance/TravelAssistanceInsurance";

// Import business insurance page components
import BusinessInsurance from "./pages/insurance/BusinessInsurance";
import ComplianceInsurance from "./pages/insurance/ComplianceInsurance";
import TransportInsurance from "./pages/insurance/TransportInsurance";
import ARLInsurance from "./pages/insurance/ARLInsurance";
import CivilLiabilityInsurance from "./pages/insurance/CivilLiabilityInsurance";
import ConstructionInsurance from "./pages/insurance/ConstructionInsurance";
import CybersecurityInsurance from "./pages/insurance/CybersecurityInsurance";

// Import other page components
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import QuoteRequest from "./pages/QuoteRequest";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rutas de seguros personales */}
          <Route path="/seguros/automovil" element={<AutomobileInsurance />} />
          <Route path="/seguros/salud" element={<HealthInsurance />} />
          <Route path="/seguros/hogar" element={<HomeInsurance />} />
          <Route path="/seguros/vida" element={<LifeInsurance />} />
          <Route path="/seguros/mascotas" element={<PetInsurance />} />
          <Route path="/seguros/asistencia-viaje" element={<TravelAssistanceInsurance />} />
          
          {/* Rutas de seguros empresariales */}
          <Route path="/seguros/pymes" element={<BusinessInsurance />} />
          <Route path="/seguros/cumplimiento" element={<ComplianceInsurance />} />
          <Route path="/seguros/transporte" element={<TransportInsurance />} />
          <Route path="/seguros/arl" element={<ARLInsurance />} />
          <Route path="/seguros/responsabilidad-civil" element={<CivilLiabilityInsurance />} />
          <Route path="/seguros/todo-riesgo-construccion" element={<ConstructionInsurance />} />
          <Route path="/seguros/ciberseguridad" element={<CybersecurityInsurance />} />
          
          {/* Otras rutas */}
          <Route path="/quienes-somos" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cotizar" element={<QuoteRequest />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-condiciones" element={<TermsConditions />} />
          
          {/* Ruta 404 para cualquier otra URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;