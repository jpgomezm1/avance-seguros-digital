
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Top Bar with contact info */}
          <div className="flex items-center justify-between mb-2 md:mb-0">
            <Link to="/" className="mr-6">
              <img 
                src="/logo-avance.png" 
                alt="Avance Seguros"
                className="h-12 md:h-14" 
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+573122829850" className="flex items-center text-gray-700 hover:text-avance-blue transition-colors">
                <Phone size={18} className="mr-2" />
                <span>(312) 282 98 50</span>
              </a>
              <a href="tel:+570344444916" className="flex items-center text-gray-700 hover:text-avance-blue transition-colors">
                <Phone size={18} className="mr-2" />
                <span>(034) 444 49 16</span>
              </a>
              <a href="mailto:contacto@avanceseguros.com" className="flex items-center text-gray-700 hover:text-avance-blue transition-colors">
                <Mail size={18} className="mr-2" />
                <span>contacto@avanceseguros.com</span>
              </a>
            </div>
            
            {/* Mobile menu toggle */}
            <button 
              className="md:hidden p-2 text-avance-blue" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-auto">
            <ul className="flex space-x-1">
              <li>
                <Link to="/" className="px-4 py-2 font-medium text-gray-700 hover:text-avance-blue transition-colors">Inicio</Link>
              </li>
              <li className="group relative">
                <button className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-avance-blue transition-colors">
                  Seguros Personales
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="hidden group-hover:block absolute z-10 left-0 mt-1 w-56 bg-white border shadow-lg rounded-md py-2">
                  <Link to="/seguros/automovil" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">Seguro de Automóvil</Link>
                  <Link to="/seguros/salud" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">Seguro de Salud</Link>
                  <Link to="/seguros/hogar" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">Seguro de Hogar</Link>
                  <Link to="/seguros/vida" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">Seguro de Vida</Link>
                </div>
              </li>
              <li className="group relative">
                <button className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-avance-blue transition-colors">
                  Seguros Empresariales
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="hidden group-hover:block absolute z-10 left-0 mt-1 w-56 bg-white border shadow-lg rounded-md py-2">
                  <Link to="/seguros/pymes" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">Seguro para PYMES</Link>
                  <Link to="/seguros/cumplimiento" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">Seguro de Cumplimiento</Link>
                  <Link to="/seguros/transporte" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">Seguro de Transporte</Link>
                  <Link to="/seguros/arl" className="block px-4 py-2 text-gray-700 hover:bg-avance-lightblue hover:text-avance-blue">ARL</Link>
                </div>
              </li>
              <li><Link to="/quienes-somos" className="px-4 py-2 font-medium text-gray-700 hover:text-avance-blue transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/blog" className="px-4 py-2 font-medium text-gray-700 hover:text-avance-blue transition-colors">Blog</Link></li>
              <li><Link to="/contacto" className="px-4 py-2 font-medium text-gray-700 hover:text-avance-blue transition-colors">Contacto</Link></li>
              <li><Link to="/cotizar" className="btn-primary ml-2">Cotizar</Link></li>
            </ul>
          </nav>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 absolute top-16 left-0 right-0 mx-4 z-50">
              <ul className="flex flex-col space-y-3">
                <li><Link to="/" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link></li>
                
                <li className="py-2">
                  <span className="font-medium mb-1 block">Seguros Personales</span>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li><Link to="/seguros/automovil" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Seguro de Automóvil</Link></li>
                    <li><Link to="/seguros/salud" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Seguro de Salud</Link></li>
                    <li><Link to="/seguros/hogar" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Seguro de Hogar</Link></li>
                    <li><Link to="/seguros/vida" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Seguro de Vida</Link></li>
                  </ul>
                </li>
                
                <li className="py-2">
                  <span className="font-medium mb-1 block">Seguros Empresariales</span>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li><Link to="/seguros/pymes" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Seguro para PYMES</Link></li>
                    <li><Link to="/seguros/cumplimiento" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Seguro de Cumplimiento</Link></li>
                    <li><Link to="/seguros/transporte" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Seguro de Transporte</Link></li>
                    <li><Link to="/seguros/arl" className="block py-1 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>ARL</Link></li>
                  </ul>
                </li>
                
                <li><Link to="/quienes-somos" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Quiénes Somos</Link></li>
                <li><Link to="/blog" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
                <li><Link to="/contacto" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link></li>
                
                <li className="pt-2">
                  <div className="flex flex-col space-y-2">
                    <a href="tel:+573122829850" className="flex items-center text-gray-700">
                      <Phone size={16} className="mr-2" />
                      <span>(312) 282 98 50</span>
                    </a>
                    <a href="tel:+570344444916" className="flex items-center text-gray-700">
                      <Phone size={16} className="mr-2" />
                      <span>(034) 444 49 16</span>
                    </a>
                  </div>
                </li>
                
                <li className="pt-2">
                  <Link to="/cotizar" className="btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Cotizar Ahora</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
