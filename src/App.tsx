
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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
          <Route path="/seguros/automovil" element={<NotFound />} />
          <Route path="/seguros/salud" element={<NotFound />} />
          <Route path="/seguros/hogar" element={<NotFound />} />
          <Route path="/seguros/vida" element={<NotFound />} />
          
          {/* Rutas de seguros empresariales */}
          <Route path="/seguros/pymes" element={<NotFound />} />
          <Route path="/seguros/cumplimiento" element={<NotFound />} />
          <Route path="/seguros/transporte" element={<NotFound />} />
          <Route path="/seguros/arl" element={<NotFound />} />
          
          {/* Otras rutas */}
          <Route path="/quienes-somos" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/contacto" element={<NotFound />} />
          <Route path="/cotizar" element={<NotFound />} />
          <Route path="/politica-privacidad" element={<NotFound />} />
          <Route path="/terminos-condiciones" element={<NotFound />} />
          
          {/* Ruta 404 para cualquier otra URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
