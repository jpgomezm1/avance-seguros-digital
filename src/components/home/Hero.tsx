
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Award, ChevronRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Variables para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: 1.2,
        ease: "easeOut" 
      } 
    }
  };

  // Elementos decorativos del fondo
  const decorElements = [
    { top: '15%', left: '10%', size: 'w-60 h-60', color: 'bg-avance-gold/10', blur: 'blur-3xl', delay: 0.2 },
    { top: '60%', right: '5%', size: 'w-80 h-80', color: 'bg-avance-blue/15', blur: 'blur-3xl', delay: 0.3 },
    { top: '30%', right: '20%', size: 'w-40 h-40', color: 'bg-white/10', blur: 'blur-2xl', delay: 0.4 },
    { bottom: '20%', left: '15%', size: 'w-72 h-72', color: 'bg-avance-gold/8', blur: 'blur-3xl', delay: 0.5 },
  ];

  return (
    <div className="relative pt-28 pb-16 md:pt-32 md:pb-24 bg-cover bg-center min-h-[90vh] flex items-center overflow-hidden" 
         style={{ backgroundImage: "url('/family-hero-image.jpg')" }}>
      {/* Overlay de gradiente mejorado con patrón sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-avance-blue/95 via-avance-blue/90 to-avance-blue/80 z-0"></div>
      <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 z-0"></div>
      
      {/* Elementos decorativos animados */}
      {decorElements.map((elem, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: elem.delay, duration: 1 }}
          className={`absolute ${elem.color} ${elem.blur} rounded-full ${elem.size}`}
          style={{
            top: elem.top || 'auto', 
            left: elem.left || 'auto', 
            right: elem.right || 'auto',
            bottom: elem.bottom || 'auto'
          }}
        />
      ))}
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center bg-avance-gold/80 backdrop-blur-md text-white text-sm md:text-base px-5 py-2 rounded-full mb-8 font-medium shadow-lg border border-avance-gold/30"
          >
            <Clock size={16} className="mr-2 text-white animate-pulse" />
            Más de 12 años protegiendo lo que más valoras
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10 text-shadow"
          >
            <span className="block text-white">Protección que</span> 
            <span className="block bg-gradient-to-r from-avance-gold to-avance-gold-light bg-clip-text text-transparent drop-shadow-lg">
              se adapta a tu vida
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 text-white/95 max-w-2xl leading-relaxed"
          >
            En Avance Seguros, analizamos tus necesidades para ofrecerte la mejor cobertura al mejor precio. 
            <span className="relative inline-block font-medium">
              <span className="text-avance-gold"> No vendemos seguros</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-avance-gold/50"></span>
            </span>, encontramos la protección que realmente necesitas.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="/cotizar" className="group relative overflow-hidden bg-gradient-to-r from-avance-gold to-avance-gold-light text-white rounded-xl px-8 py-4 font-medium text-center transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
              <span className="relative z-10">Obtener cotización gratuita</span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link to="/quienes-somos" className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-xl px-8 py-4 font-medium transition-all text-center flex items-center justify-center shadow-md hover:shadow-lg">
              <span className="relative z-10">Descubre nuestra historia</span>
              <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={counterVariants}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg"
          >
            {/* Tarjeta de estadística - Clientes protegidos */}
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-md p-4 rounded-xl text-center text-white border border-white/30 hover:border-white/40 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-avance-gold-light to-avance-gold bg-clip-text text-transparent">+5,000</div>
              <div className="text-sm mt-1 flex flex-col items-center justify-center">
                <span>Clientes</span>
                <span>protegidos</span>
              </div>
              <Users size={18} className="absolute top-2 right-2 text-white/40" />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-avance-gold/10 rounded-full blur-xl group-hover:bg-avance-gold/20 transition-all duration-500"></div>
            </div>
            
            {/* Tarjeta de estadística - Aseguradoras premium */}
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-md p-4 rounded-xl text-center text-white border border-white/30 hover:border-white/40 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-avance-gold-light to-avance-gold bg-clip-text text-transparent">8</div>
              <div className="text-sm mt-1 flex flex-col items-center justify-center">
                <span>Aseguradoras</span>
                <span>premium</span>
              </div>
              <Award size={18} className="absolute top-2 right-2 text-white/40" />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-avance-gold/10 rounded-full blur-xl group-hover:bg-avance-gold/20 transition-all duration-500"></div>
            </div>
            
            {/* Tarjeta de estadística - Años de experiencia */}
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-md p-4 rounded-xl text-center text-white border border-white/30 hover:border-white/40 hover:bg-white/15 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-avance-gold-light to-avance-gold bg-clip-text text-transparent">12+</div>
              <div className="text-sm mt-1 flex flex-col items-center justify-center">
                <span>Años de</span>
                <span>experiencia</span>
              </div>
              <ShieldCheck size={18} className="absolute top-2 right-2 text-white/40" />
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-avance-gold/10 rounded-full blur-xl group-hover:bg-avance-gold/20 transition-all duration-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave decoration mejorada con animación sutil */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,192C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Elementos flotantes adicionales con animación sutil */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-avance-gold rounded-full opacity-70"
        animate={{ 
          y: [0, -10, 0], 
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full opacity-50"
        animate={{ 
          y: [0, -15, 0], 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-2 h-2 bg-avance-gold rounded-full opacity-60"
        animate={{ 
          y: [0, -12, 0], 
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default Hero;
