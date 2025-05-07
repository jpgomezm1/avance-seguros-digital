
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center min-h-[80vh] flex items-center" 
         style={{ backgroundImage: "url('/family-hero-image.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-white">
          <span className="inline-block bg-avance-gold text-white text-sm md:text-base px-4 py-1 rounded-full mb-4 font-medium">Más de 12 años de experiencia</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-shadow animate-fade-in">
            Soluciones de seguros personalizadas para tu tranquilidad
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            En Avance Seguros, analizamos tus necesidades para ofrecerte la mejor cobertura al mejor precio. Comparamos opciones para que tú elijas lo mejor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/cotizar" className="btn-secondary text-center">
              Obtener cotización gratis
            </Link>
            <Link to="/quienes-somos" className="bg-white text-avance-blue hover:bg-opacity-90 rounded-md px-6 py-3 font-medium transition-all text-center">
              Conocer más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
