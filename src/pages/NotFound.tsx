
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-avance-blue mb-6">404</h1>
            <p className="text-2xl mb-2">Página no encontrada</p>
            <p className="text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn-primary">
                Volver al inicio
              </Link>
              <Link to="/contacto" className="bg-white border border-avance-blue text-avance-blue hover:bg-avance-lightblue rounded-md px-6 py-3 font-medium transition-all">
                Contactar soporte
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
