import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Award, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const benefits = [
    {
      text: 'Asesoría personalizada según tus necesidades',
      icon: Users,
      color: 'text-avance-gold'
    },
    {
      text: 'Análisis comparativo de múltiples aseguradoras',
      icon: Award,
      color: 'text-avance-blue'
    },
    {
      text: 'Más de 17 años de experiencia en el mercado',
      icon: Clock,
      color: 'text-avance-gold'
    },
    {
      text: 'Respaldo de las mejores compañías de seguros',
      icon: Shield,
      color: 'text-avance-blue'
    },
    {
      text: 'Acompañamiento durante todo el proceso de reclamación',
      icon: CheckCircle,
      color: 'text-avance-gold'
    },
  ];

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f9fa] to-white relative overflow-hidden">
      {/* Elementos decorativos mejorados */}
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full border-[40px] border-avance-gold/5 blur-sm"></div>
      <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full border-[30px] border-avance-blue/5 blur-sm"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-avance-gold/5"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-avance-blue/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Columna de texto */}
          <motion.div 
            className="lg:col-span-6 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">QUIÉNES SOMOS</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-avance-blue leading-tight">
                Expertos en encontrar la <span className="text-avance-gold relative">
                  mejor protección
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-avance-gold/20 rounded-full"></span>
                </span> para ti
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 mb-8 text-lg leading-relaxed"
            >
              En Avance Seguros utilizamos la información y necesidades de nuestros clientes para obtener la mejor opción del mercado y establecer comparativos que brinden productos verdaderamente personalizados.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="space-y-5 mb-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-avance-gold"
                  variants={itemVariants}
                >
                  <div className={`${benefit.color} mr-3 flex-shrink-0 bg-gray-50 p-2 rounded-full group-hover:scale-110 transition-transform`}>
                    <benefit.icon size={20} />
                  </div>
                  <span className="text-gray-700 pt-1">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/quienes-somos" 
                className="inline-flex items-center group px-6 py-3 bg-avance-blue text-white rounded-lg hover:bg-avance-blue/90 transition-colors shadow-sm hover:shadow-md"
              >
                <span>Conocer más sobre nosotros</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Columna de imagen */}
          <motion.div 
            className="lg:col-span-6 order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Elementos decorativos mejorados */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-avance-gold/10 to-transparent rounded-full opacity-70"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-tl from-avance-blue/15 to-transparent rounded-full opacity-70"></div>
            
            {/* Contenedor principal de imagen */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-avance-blue/20 to-transparent mix-blend-overlay z-10"></div>
              
              {/* Imagen con mejor manejo de escala */}
              <img 
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/Pagina%20principal%202_Foto%20p%C3%A1gina%20principal.webp" 
                alt="Equipo Avance Seguros" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Distintivo en la esquina */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-20 flex items-center">
                <Award size={20} className="text-avance-gold mr-2" />
                <span className="text-avance-blue font-medium text-sm">+17 años de experiencia</span>
              </div>
            </div>
            
            {/* Tarjeta de estadísticas mejorada */}
       
            
            {/* Elemento decorativo adicional - 'Sello de calidad' */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;