import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Facebook, Instagram, ChevronRight } from 'lucide-react';

// Componente TopBar para información de contacto
const TopBar = () => {
  const [isContactExpanded, setIsContactExpanded] = useState(false);
  
  return (
    <div className="hidden md:block bg-slate-800 text-white py-1.5 text-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                className="flex items-center text-white/90 hover:text-white transition-colors group"
                onClick={() => setIsContactExpanded(!isContactExpanded)}
              >
                <Phone size={14} className="mr-1.5" />
                <span>(312) 282 98 50</span>
                <ChevronDown size={14} className={`ml-1 transition-transform ${isContactExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {isContactExpanded && (
                <div className="absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-lg rounded-md py-2 px-3 z-50 min-w-[220px]">
                  <a href="tel:+573122829850" className="flex items-center py-1.5 hover:text-avance-blue transition-colors">
                    <Phone size={14} className="mr-2" />
                    <span>(312) 282 98 50</span>
                  </a>
                  <a href="tel:+570344444916" className="flex items-center py-1.5 hover:text-avance-blue transition-colors">
                    <Phone size={14} className="mr-2" />
                    <span>(034) 444 49 16</span>
                  </a>
                </div>
              )}
            </div>
            
            <a href="mailto:contacto@avanceseguros.com" className="flex items-center text-white/90 hover:text-white transition-colors">
              <Mail size={14} className="mr-1.5" />
              <span>contacto@avanceseguros.com</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com/avanceseguroscol" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com/avanceseguroscol" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente DropdownItem para elementos del menú con submenús
const DropdownItem = ({ title, items }) => {
  return (
    <li className="group relative">
      <button className="flex items-center px-5 py-2.5 font-medium text-gray-700 hover:text-avance-blue transition-colors">
        {title}
        <ChevronDown size={16} className="ml-1.5 group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="hidden group-hover:block absolute z-10 left-0 mt-1 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {items.map((item, index) => (
          <Link 
            key={index}
            to={item.path} 
            className="flex items-center px-5 py-2.5 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue group/item"
          >
            <span className="mr-3 w-7 h-7 flex items-center justify-center bg-avance-lightblue text-avance-blue rounded-full">
              {item.icon}
            </span>
            <div>
              <span className="font-medium block">{item.label}</span>
              {item.description && (
                <span className="text-xs text-gray-500">{item.description}</span>
              )}
            </div>
            <ChevronRight size={14} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </li>
  );
};

// Componente MobileMenu para navegación en dispositivos móviles
const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    personal: false,
    empresarial: false,
    contacto: false
  });
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/30" onClick={onClose}>
      <div 
        className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-xl overflow-y-auto transform transition-transform duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="block" onClick={onClose}>
            <img 
              src="https://storage.googleapis.com/cluvi/Imagenes/logo-avance-seguro.jpg" 
              alt="Avance Seguros" 
              className="h-10" 
            />
          </Link>
          <button 
            className="p-1.5 rounded-full hover:bg-gray-100"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link to="/" className="block w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                Inicio
              </Link>
            </li>
            
            <li className="border-b pb-1">
              <button 
                className="flex items-center justify-between w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg"
                onClick={() => toggleSection('personal')}
              >
                <span>Seguros Personales</span>
                <ChevronDown size={20} className={`transition-transform ${expandedSections.personal ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSections.personal && (
                <ul className="mt-1 pl-4 space-y-1">
                  <li>
                    <Link to="/seguros/automovil" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      Seguro de Automóvil
                    </Link>
                  </li>
                  <li>
                    <Link to="/seguros/salud" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      Seguro de Salud
                    </Link>
                  </li>
                  <li>
                    <Link to="/seguros/hogar" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      Seguro de Hogar
                    </Link>
                  </li>
                  <li>
                    <Link to="/seguros/vida" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      Seguro de Vida
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            <li className="border-b pb-1 pt-1">
              <button 
                className="flex items-center justify-between w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg"
                onClick={() => toggleSection('empresarial')}
              >
                <span>Seguros Empresariales</span>
                <ChevronDown size={20} className={`transition-transform ${expandedSections.empresarial ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSections.empresarial && (
                <ul className="mt-1 pl-4 space-y-1">
                  <li>
                    <Link to="/seguros/pymes" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      Seguro para PYMES
                    </Link>
                  </li>
                  <li>
                    <Link to="/seguros/cumplimiento" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      Seguro de Cumplimiento
                    </Link>
                  </li>
                  <li>
                    <Link to="/seguros/transporte" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      Seguro de Transporte
                    </Link>
                  </li>
                  <li>
                    <Link to="/seguros/arl" className="block w-full py-2.5 px-4 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                      ARL
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            
            <li>
              <Link to="/quienes-somos" className="block w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                Quiénes Somos
              </Link>
            </li>
            
            <li>
              <Link to="/blog" className="block w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                Blog
              </Link>
            </li>
            
            <li className="border-b pb-2">
              <Link to="/contacto" className="block w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg" onClick={onClose}>
                Contacto
              </Link>
            </li>
            
            <li className="pt-1">
              <button
                className="flex items-center justify-between w-full text-left px-4 py-3 font-medium text-gray-800 hover:bg-gray-100 rounded-lg"
                onClick={() => toggleSection('contacto')}
              >
                <span>Información de Contacto</span>
                <ChevronDown size={20} className={`transition-transform ${expandedSections.contacto ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSections.contacto && (
                <div className="mt-2 px-4 space-y-3">
                  <a href="tel:+573122829850" className="flex items-center text-gray-700">
                    <Phone size={18} className="mr-3 text-avance-blue" />
                    <span>(312) 282 98 50</span>
                  </a>
                  <a href="tel:+570344444916" className="flex items-center text-gray-700">
                    <Phone size={18} className="mr-3 text-avance-blue" />
                    <span>(034) 444 49 16</span>
                  </a>
                  <a href="mailto:contacto@avanceseguros.com" className="flex items-center text-gray-700">
                    <Mail size={18} className="mr-3 text-avance-blue" />
                    <span>contacto@avanceseguros.com</span>
                  </a>
                </div>
              )}
            </li>
          </ul>
          
          <div className="mt-6">
            <Link to="/cotizar" className="block w-full py-3 px-4 bg-avance-gold text-white text-center font-medium rounded-lg shadow-md hover:bg-amber-600 transition-colors" onClick={onClose}>
              Cotizar Ahora
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Datos para los menús desplegables
  const personalInsuranceItems = [
    { label: 'Seguro de Automóvil', path: '/seguros/automovil', icon: '🚗', description: 'Protección completa para tu vehículo' },
    { label: 'Seguro de Salud', path: '/seguros/salud', icon: '❤️', description: 'Cuida de ti y tu familia' },
    { label: 'Seguro de Hogar', path: '/seguros/hogar', icon: '🏠', description: 'Protección para tu patrimonio' },
    { label: 'Seguro de Vida', path: '/seguros/vida', icon: '👤', description: 'Tranquilidad para ti y los tuyos' }
  ];
  
  const businessInsuranceItems = [
    { label: 'Seguro para PYMES', path: '/seguros/pymes', icon: '🏢', description: 'Protección integral para tu negocio' },
    { label: 'Seguro de Cumplimiento', path: '/seguros/cumplimiento', icon: '🤝', description: 'Garantía para tus contratos' },
    { label: 'Seguro de Transporte', path: '/seguros/transporte', icon: '🚚', description: 'Seguridad para tus mercancías' },
    { label: 'ARL', path: '/seguros/arl', icon: '⛑️', description: 'Protección laboral para tus empleados' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      
      <header className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://storage.googleapis.com/cluvi/Imagenes/logo-avance-seguro.jpg" 
                alt="Avance Seguros" 
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14'}`} 
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-2">
                <li>
                  <Link to="/" className="px-5 py-2.5 font-medium text-gray-700 hover:text-avance-blue transition-colors">
                    Inicio
                  </Link>
                </li>
                
                <DropdownItem title="Seguros Personales" items={personalInsuranceItems} />
                <DropdownItem title="Seguros Empresariales" items={businessInsuranceItems} />
                
                <li>
                  <Link to="/quienes-somos" className="px-5 py-2.5 font-medium text-gray-700 hover:text-avance-blue transition-colors">
                    Quiénes Somos
                  </Link>
                </li>
                
                <li>
                  <Link to="/blog" className="px-5 py-2.5 font-medium text-gray-700 hover:text-avance-blue transition-colors">
                    Blog
                  </Link>
                </li>
                
                <li>
                  <Link to="/contacto" className="px-5 py-2.5 font-medium text-gray-700 hover:text-avance-blue transition-colors">
                    Contacto
                  </Link>
                </li>
                
                <li className="ml-2">
                  <Link to="/cotizar" className="px-6 py-2.5 bg-avance-gold text-white font-medium rounded-lg shadow-sm hover:bg-amber-600 transition-colors flex items-center">
                    Cotizar
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-avance-blue rounded-md hover:bg-gray-100" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;