
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center min-h-[90vh] flex items-center overflow-hidden" 
         style={{ backgroundImage: "url('/family-hero-image.jpg')" }}>
      {/* Overlay de gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-r from-avance-blue/90 to-avance-blue/70 z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-avance-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-avance-blue opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-avance-gold/90 text-white text-sm md:text-base px-5 py-2 rounded-full mb-8 font-medium backdrop-blur-sm shadow-lg"
          >
            <span className="bg-white h-2 w-2 rounded-full mr-2 animate-pulse"></span>
            Más de 12 años protegiendo lo que más valoras
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10 text-white text-shadow"
          >
            <span className="block">Protección que</span> 
            <span className="block text-avance-gold drop-shadow-lg">se adapta a tu vida</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl mb-12 text-white/95 max-w-2xl leading-relaxed"
          >
            En Avance Seguros, analizamos tus necesidades para ofrecerte la mejor cobertura al mejor precio. 
            <span className="font-medium text-avance-gold/90"> No vendemos seguros</span>, encontramos la protección que realmente necesitas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="/cotizar" className="group relative overflow-hidden bg-avance-gold hover:bg-opacity-90 text-white rounded-md px-8 py-4 font-semibold text-center transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
              <span className="relative z-10">Obtener cotización gratuita</span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link to="/quienes-somos" className="group relative overflow-hidden bg-white hover:bg-opacity-95 text-avance-blue rounded-md px-8 py-4 font-semibold transition-all text-center flex items-center justify-center shadow-md hover:shadow-lg">
              <span className="relative z-10">Descubre nuestra historia</span>
              <ChevronRight className="ml-1 opacity-70 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 w-full h-full bg-avance-lightblue/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
          >
            <div className="relative overflow-hidden bg-white/10 backdrop-blur-md p-4 rounded-xl text-center text-white border border-white/20 shadow-lg group hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-avance-gold">+5,000</div>
              <div className="text-sm mt-1 flex flex-col items-center justify-center">
                <span>Clientes</span>
                <span>protegidos</span>
              </div>
              <Users size={18} className="absolute top-2 right-2 text-white/30" />
            </div>
            <div className="relative overflow-hidden bg-white/10 backdrop-blur-md p-4 rounded-xl text-center text-white border border-white/20 shadow-lg group hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-avance-gold">8</div>
              <div className="text-sm mt-1 flex flex-col items-center justify-center">
                <span>Aseguradoras</span>
                <span>premium</span>
              </div>
              <Award size={18} className="absolute top-2 right-2 text-white/30" />
            </div>
            <div className="relative overflow-hidden bg-white/10 backdrop-blur-md p-4 rounded-xl text-center text-white border border-white/20 shadow-lg group hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-avance-gold">12+</div>
              <div className="text-sm mt-1 flex flex-col items-center justify-center">
                <span>Años de</span>
                <span>experiencia</span>
              </div>
              <ShieldCheck size={18} className="absolute top-2 right-2 text-white/30" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave decoration mejorada */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,192C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
