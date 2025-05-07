
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center min-h-[90vh] flex items-center overflow-hidden" 
         style={{ backgroundImage: "url('/family-hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-avance-blue/80 to-avance-blue/60 z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-avance-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-avance-blue opacity-20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center bg-avance-gold/90 text-white text-sm md:text-base px-5 py-2 rounded-full mb-6 font-medium animate-fade-in backdrop-blur-sm">
            <span className="bg-white h-2 w-2 rounded-full mr-2"></span>
            Más de 12 años protegiendo lo que más valoras
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white text-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="block">Protección que</span> 
            <span className="block text-avance-gold">se adapta a tu vida</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-white/95 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            En Avance Seguros, analizamos tus necesidades para ofrecerte la mejor cobertura al mejor precio. No vendemos seguros, encontramos la protección que realmente necesitas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/cotizar" className="relative overflow-hidden group bg-avance-gold hover:bg-opacity-90 text-white rounded-md px-8 py-4 font-semibold text-center transition-all flex items-center justify-center">
              <span className="relative z-10">Obtener cotización gratuita</span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link to="/quienes-somos" className="relative overflow-hidden group bg-white hover:bg-opacity-90 text-avance-blue rounded-md px-8 py-4 font-semibold transition-all text-center flex items-center justify-center">
              <span className="relative z-10">Descubre nuestra historia</span>
              <div className="absolute inset-0 w-full h-full bg-avance-lightblue/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center text-white border border-white/10">
              <div className="text-2xl font-bold text-avance-gold">+5,000</div>
              <div className="text-xs">Clientes protegidos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center text-white border border-white/10">
              <div className="text-2xl font-bold text-avance-gold">8</div>
              <div className="text-xs">Aseguradoras premium</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center text-white border border-white/10">
              <div className="text-2xl font-bold text-avance-gold">12+</div>
              <div className="text-xs">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,192C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
