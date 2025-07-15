import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Datos simplificados para los enlaces principales
  const mainLinks = [
    { title: 'Seguros Personales', path: '/seguros-personales' },
    { title: 'Seguros Empresariales', path: '/seguros-empresariales' },
    { title: 'Quiénes Somos', path: '/quienes-somos' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contacto', path: '/contacto' },
  ];
  
  // Logos de aseguradoras
  const partners = [
    'Sura', 'Bolivar', 'Allianz', 'Liberty', 'Mundial'
  ];

  return (
    <footer className="bg-[#0A4958] text-white">
      <div className="container-custom py-12">
        {/* Sección principal */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Columna izquierda - Logo e información */}
          <div className="max-w-xs">
            <img 
              src="https://storage.googleapis.com/cluvi/Imagenes/logo_avance_blanco.png" 
              alt="Avance Seguros"
              className="h-12 mb-4" 
            />
            <p className="text-white/70 text-sm mb-6">
              Encontramos la protección que realmente necesitas al mejor precio.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/avanceseguroscol" className="text-white/70 hover:text-[#C69C3F] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/avanceseguroscol" className="text-white/70 hover:text-[#C69C3F] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/avanceseguroscol" className="text-white/70 hover:text-[#C69C3F] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna central - Enlaces principales */}
          <div>
            <h3 className="text-base font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Columna derecha - Contacto */}
          <div>
            <h3 className="text-base font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="text-[#C69C3F] mr-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">(310)-848-35-62</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-[#C69C3F] mr-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">info@avanceseguros.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-[#C69C3F] mr-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">Medellín, Colombia</span>
              </li>
            </ul>
          </div>
          
          {/* Columna derecha - Botón de cotización */}
          <div className="flex flex-col justify-center">
            <a 
               href="https://avance-seguros-cotizaciones.netlify.app/" 
               target="_blank"
               rel="noopener noreferrer"
              className="bg-[#C69C3F] hover:bg-[#C69C3F]/90 text-white text-center px-6 py-3 rounded-lg font-medium transition-all"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
        
        {/* Sección inferior simplificada */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-white/10">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <p className="text-white/60 text-xs">
              © {currentYear} Avance Seguros
            </p>
            <span className="text-white/30">•</span>
            <Link to="/politica-privacidad" className="text-white/60 hover:text-white transition-colors text-xs">
              Privacidad
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/terminos-condiciones" className="text-white/60 hover:text-white transition-colors text-xs">
              Términos
            </Link>
          </div>
          
          {/* Versión minimalista de logos de aseguradoras */}
          <div className="flex space-x-3">
            {partners.map((partner, index) => (
              <span key={index} className="text-white/40 text-xs">{partner}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;