
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-avance-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <img 
              src="/logo-avance-white.png" 
              alt="Avance Seguros"
              className="h-14 mb-6" 
            />
            <p className="mb-6 text-gray-300">
              En Avance Seguros utilizamos la información y necesidades de nuestros clientes para obtener la mejor opción del mercado y establecer comparativos que brinden productos a la medida.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/avanceseguroscol" className="hover:text-avance-gold transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/avanceseguroscol" className="hover:text-avance-gold transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com/avanceseguroscol" className="hover:text-avance-gold transition-colors" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Column 2 - Seguros Personales */}
          <div>
            <h3 className="text-xl font-bold mb-6">Seguros Personales</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/seguros/automovil" className="text-gray-300 hover:text-white transition-colors">Seguro de Automóvil</Link>
              </li>
              <li>
                <Link to="/seguros/salud" className="text-gray-300 hover:text-white transition-colors">Seguro de Salud</Link>
              </li>
              <li>
                <Link to="/seguros/hogar" className="text-gray-300 hover:text-white transition-colors">Seguro de Hogar</Link>
              </li>
              <li>
                <Link to="/seguros/vida" className="text-gray-300 hover:text-white transition-colors">Seguro de Vida</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Seguros Empresariales */}
          <div>
            <h3 className="text-xl font-bold mb-6">Seguros Empresariales</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/seguros/pymes" className="text-gray-300 hover:text-white transition-colors">Seguro para PYMES</Link>
              </li>
              <li>
                <Link to="/seguros/cumplimiento" className="text-gray-300 hover:text-white transition-colors">Seguro de Cumplimiento</Link>
              </li>
              <li>
                <Link to="/seguros/transporte" className="text-gray-300 hover:text-white transition-colors">Seguro de Transporte</Link>
              </li>
              <li>
                <Link to="/seguros/arl" className="text-gray-300 hover:text-white transition-colors">ARL</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p>(312) 282 98 50</p>
                  <p>(034) 444 49 16</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                <p>contacto@avanceseguros.com</p>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <p>Medellín, Colombia<br />Calle Principal #123</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Avance Seguros. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidad
            </Link>
            <Link to="/terminos-condiciones" className="text-gray-400 hover:text-white transition-colors text-sm">
              Términos y Condiciones
            </Link>
          </div>
        </div>
        
        {/* Insurance Companies */}
        <div className="mt-10">
          <p className="text-center text-gray-400 mb-4">Respaldados por las mejores aseguradoras:</p>
          <div className="flex justify-center space-x-8 flex-wrap">
            <img src="/seguros-sura-logo.png" alt="Seguros Sura" className="h-12 object-contain mb-4" />
            <img src="/seguros-bolivar-logo.png" alt="Seguros Bolivar" className="h-12 object-contain mb-4" />
            <img src="/allianz-logo.png" alt="Allianz" className="h-12 object-contain mb-4" />
            <img src="/liberty-seguros-logo.png" alt="Liberty Seguros" className="h-12 object-contain mb-4" />
            <img src="/seguros-mundial-logo.png" alt="Seguros Mundial" className="h-12 object-contain mb-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
