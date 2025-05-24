import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Award, ChevronRight, Clock, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  // Estado para controlar las animaciones de conteo
  const [countersVisible, setCountersVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    insurers: 0,
    years: 17
  });

  // Variables para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const counterContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const counterCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      } 
    }
  };
  
  // Animación de contador
  useEffect(() => {
    if (countersVisible) {
      // Animación de conteo para clientes
      const clientInterval = setInterval(() => {
        setCounters(prev => {
          if (prev.clients >= 5000) {
            clearInterval(clientInterval);
            return prev;
          }
          return {...prev, clients: Math.min(prev.clients + 250, 5000)};
        });
      }, 30);
      
      // Animación de conteo para aseguradoras
      const insurersInterval = setInterval(() => {
        setCounters(prev => {
          if (prev.insurers >= 8) {
            clearInterval(insurersInterval);
            return prev;
          }
          return {...prev, insurers: prev.insurers + 1};
        });
      }, 200);
      
      // Animación de conteo para años
      const yearsInterval = setInterval(() => {
        setCounters(prev => {
          if (prev.years >= 12) {
            clearInterval(yearsInterval);
            return prev;
          }
          return {...prev, years: prev.years + 1};
        });
      }, 150);
      
      return () => {
        clearInterval(clientInterval);
        clearInterval(insurersInterval);
        clearInterval(yearsInterval);
      };
    }
  }, [countersVisible]);

  // Efecto parallax para elementos decorativos
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (mouseX - centerX) / 50;
      const moveY = (mouseY - centerY) / 50;
      
      const decorElements = document.querySelectorAll('.decor-element');
      decorElements.forEach((elem, index) => {
        const depth = index + 1;
        elem.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Elementos decorativos del fondo mejorados
  const decorElements = [
    { top: '10%', left: '5%', size: 'w-60 h-60', color: 'bg-avance-gold/10', blur: 'blur-3xl', delay: 0.2 },
    { top: '60%', right: '5%', size: 'w-80 h-80', color: 'bg-avance-blue/15', blur: 'blur-3xl', delay: 0.3 },
    { top: '25%', right: '15%', size: 'w-40 h-40', color: 'bg-white/10', blur: 'blur-2xl', delay: 0.4 },
    { bottom: '25%', left: '15%', size: 'w-72 h-72', color: 'bg-avance-gold/8', blur: 'blur-3xl', delay: 0.5 },
  ];

  return (
    <div 
      ref={heroRef}
      className="relative pt-28 pb-48 md:pt-28 lg:pt-24 bg-cover bg-center min-h-screen flex items-center overflow-hidden" 
      style={{ backgroundImage: "linear-gradient(to bottom right, #0A4958, #05313D)" }}
    >
      {/* Patrones de fondo para textura */}
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light z-0"></div>
      
      {/* Elementos decorativos animados */}
      {decorElements.map((elem, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: elem.delay, duration: 1.2 }}
          className={`absolute ${elem.color} ${elem.blur} rounded-full ${elem.size} decor-element`}
          style={{
            top: elem.top || 'auto', 
            left: elem.left || 'auto', 
            right: elem.right || 'auto',
            bottom: elem.bottom || 'auto'
          }}
        />
      ))}
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-12 gap-x-10 gap-y-8 items-center">
          <motion.div 
            className="md:col-span-7 lg:col-span-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setCountersVisible(true)}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center bg-avance-gold/90 backdrop-blur-md text-white text-sm md:text-base px-5 py-2 rounded-full mb-7 font-medium shadow-lg border border-avance-gold/30"
            >
              <Clock size={16} className="mr-2 text-white animate-pulse" />
              Más de 17 años protegiendo lo que más valoras
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 lg:mb-8"
            >
              <span className="block text-white">Protección que</span> 
              <span className="block bg-gradient-to-r from-avance-gold to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
                 Evoluciona contigo
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 lg:mb-10 text-white/95 max-w-2xl leading-relaxed"
            >
              Ofrecemos soluciones de protección diseñadas para adaptarse a las diferentes etapas de tu vida, 
              <span className="relative inline-block font-medium">
                <span className="text-avance-gold">  Nuestro compromiso es brindarte la cobertura que necesitas.</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-avance-gold/50"></span>
              </span>  Porque sabemos que tu vida no es estática, y tu seguro tampoco debería serlo.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 mb-16"
            >
              <Link 
                to="/cotizar" 
                className="group relative overflow-hidden bg-gradient-to-r from-avance-gold to-amber-500 text-white rounded-xl px-8 py-4 font-medium text-center transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Obtener cotización gratuita</span>
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/quienes-somos" 
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-xl px-8 py-4 font-medium transition-all text-center flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <span className="relative z-10">Descubre nuestra historia</span>
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Imagen o ilustración en la columna derecha con badge mejorado */}
          <div className="md:col-span-5 lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Efecto de spotlight */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-avance-gold/20 via-white/5 to-avance-blue/20 blur-2xl transform -rotate-6 scale-95 opacity-40"></div>
              
              {/* Contenedor de imagen con borde brillante */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-avance-gold/30 via-white/20 to-transparent shadow-2xl overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/cluvi/Imagenes/image_seguros.png" 
                  alt="Familia protegida" 
                  className="relative z-10 rounded-xl w-full object-cover shadow-inner"
                />
                
                {/* Overlay decorativo en la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-avance-blue/50 to-transparent mix-blend-overlay rounded-xl z-10"></div>
              </div>
              
              {/* Badge flotante mejorado */}
              
            </motion.div>
          </div>
        </div>
        
        {/* Estadísticas mejoradas con layout independiente para evitar problemas de corte */}
        <motion.div 
          variants={counterContainerVariants}
          initial="hidden"
          animate={countersVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 z-20 relative mt-16 md:mt-8 max-w-4xl mx-auto"
        >
          {/* Tarjeta de estadística - Clientes protegidos */}
          <motion.div 
            variants={counterCardVariants}
            className="group relative overflow-hidden bg-white/15 backdrop-blur-md p-5 rounded-xl text-center text-white border border-white/30 hover:border-white/40 hover:bg-white/20 transition-all duration-300 shadow-lg"
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-avance-gold-light to-avance-gold bg-clip-text text-transparent">
              {counters.clients > 0 ? `+${counters.clients.toLocaleString()}` : '0'}
            </div>
            <div className="text-sm mt-2 flex flex-col items-center justify-center font-medium">
              <span>Clientes</span>
              <span>protegidos</span>
            </div>
            <Users size={20} className="absolute top-3 right-3 text-white/40" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-avance-gold/10 rounded-full blur-xl group-hover:bg-avance-gold/20 transition-all duration-500"></div>
          </motion.div>
          
          {/* Tarjeta de estadística - Aseguradoras premium */}
          <motion.div 
            variants={counterCardVariants}
            className="group relative overflow-hidden bg-white/15 backdrop-blur-md p-5 rounded-xl text-center text-white border border-white/30 hover:border-white/40 hover:bg-white/20 transition-all duration-300 shadow-lg"
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-avance-gold-light to-avance-gold bg-clip-text text-transparent">
              {counters.insurers}
            </div>
            <div className="text-sm mt-2 flex flex-col items-center justify-center font-medium">
              <span>Aseguradoras</span>
              <span>premium</span>
            </div>
            <Award size={20} className="absolute top-3 right-3 text-white/40" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-avance-gold/10 rounded-full blur-xl group-hover:bg-avance-gold/20 transition-all duration-500"></div>
          </motion.div>
          
          {/* Tarjeta de estadística - Años de experiencia */}
          <motion.div 
            variants={counterCardVariants}
            className="group relative overflow-hidden bg-white/15 backdrop-blur-md p-5 rounded-xl text-center text-white border border-white/30 hover:border-white/40 hover:bg-white/20 transition-all duration-300 shadow-lg"
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-avance-gold-light to-avance-gold bg-clip-text text-transparent">
              {counters.years}+
            </div>
            <div className="text-sm mt-2 flex flex-col items-center justify-center font-medium">
              <span>Años de</span>
              <span>experiencia</span>
            </div>
            <ShieldCheck size={20} className="absolute top-3 right-3 text-white/40" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-avance-gold/10 rounded-full blur-xl group-hover:bg-avance-gold/20 transition-all duration-500"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white text-sm z-20"
      >
        <span className="mb-2 text-white/70">Descubre más</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-avance-gold" />
        </motion.div>
      </motion.div>
      
      {/* Wave decoration con posicionamiento mejorado */}
      <div className="absolute -bottom-2 left-0 right-0 z-10 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" className="w-full" preserveAspectRatio="none">
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,140L1380,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z">
          </path>
        </svg>
      </div>
      
      {/* Elementos flotantes adicionales */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-avance-gold rounded-full opacity-70 decor-element"
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
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full opacity-50 decor-element"
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
    </div>
  );
};

export default Hero;