import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Solo importamos ArrowRight ya que es el único icono que se mantiene
import { ArrowRight } from 'lucide-react';

const InsuranceCategories = () => {
  const [activeCategory, setActiveCategory] = useState('personal');
  
  // Datos actualizados con imágenes en lugar de iconos
  const personalInsurance = [
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Salud.png',
      title: 'Salud',
      path: '/seguros/salud',
      description: 'Cuida de ti y tu familia',
      features: ['Cobertura hospitalaria', 'Consultas médicas', 'Medicamentos']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Vida.png',
      title: 'Vida',
      path: '/seguros/vida',
      description: 'Tranquilidad para ti y los tuyos',
      features: ['Fallecimiento', 'Incapacidad', 'Enfermedades graves']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Hogar.png',
      title: 'Hogar',
      path: '/seguros/hogar',
      description: 'Protección para tu patrimonio',
      features: ['Incendio', 'Robo', 'Daños por agua']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Autos.png',
      title: 'Movilidad',
      path: '/seguros/movilidad',
      description: 'Protección completa para tu vehículo',
      features: ['Responsabilidad civil', 'Daños a terceros', 'Asistencia en carretera']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Mascotas.png',
      title: 'Mascotas',
      path: '/seguros/mascotas',
      description: 'Cuidado integral para tus mascotas',
      features: ['Consultas veterinarias', 'Emergencias médicas', 'Cirugías']
    }
  ];

  const businessInsurance = [
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Pymes.png',
      title: 'Corporativos y PYMES',
      path: '/seguros/corporativos-pymes',
      description: 'Protección integral para tu negocio',
      features: ['Multirriesgo empresarial', 'Pérdida de beneficios', 'RC patronal']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Responsabilidad_Civil.png',
      title: 'Responsabilidad Civil',
      path: '/seguros/responsabilidad-civil',
      description: 'Protección ante responsabilidades',
      features: ['Daños a terceros', 'RC profesional', 'Defensa jurídica']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Transporte.png',
      title: 'Transporte',
      path: '/seguros/transporte',
      description: 'Seguridad para tus mercancías',
      features: ['Daños', 'Robo', 'Cobertura internacional']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Todo_Riesgo.png',
      title: 'Todo Riesgo Construcción',
      path: '/seguros/todo-riesgo-construccion',
      description: 'Protección integral para obras',
      features: ['Daños físicos', 'Maquinaria', 'Periodo de mantenimiento']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Cumplimiento.png',
      title: 'Cumplimiento',
      path: '/seguros/cumplimiento',
      description: 'Garantía para tus contratos',
      features: ['Anticipos', 'Estabilidad de obra', 'Seriedad de oferta']
    },
    {
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/ARL.png',
      title: 'ARL',
      path: '/seguros/arl',
      description: 'Protección laboral para tus empleados',
      features: ['Accidentes laborales', 'Enfermedades profesionales', 'Capacitaciones']
    }
  ];

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos con colores de Avance */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-avance-blue/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-avance-gold/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-avance-blue/5 to-avance-gold/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-avance-blue/10 to-avance-gold/10 text-avance-blue font-semibold rounded-full text-sm border border-avance-blue/20 mb-6"
          >
            ✨ NUESTRAS SOLUCIONES
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-avance-blue leading-tight">
            Seguros diseñados para{' '}
            <span className="bg-gradient-to-r from-avance-gold to-avance-gold bg-clip-text text-transparent">
              cada necesidad
            </span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Ofrecemos una amplia gama de soluciones tanto para personas como para empresas, 
            adaptadas a tus necesidades específicas y respaldadas por las mejores aseguradoras.
          </p>
        </motion.div>

        {/* Selector mejorado */}
        <div className="flex justify-center mb-16">
          <div className="relative p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex">
              <button 
                onClick={() => setActiveCategory('personal')}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === 'personal' 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 hover:text-avance-blue'
                }`}
              >
                {activeCategory === 'personal' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Seguros Personales</span>
              </button>
              <button 
                onClick={() => setActiveCategory('business')}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === 'business' 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 hover:text-avance-blue'
                }`}
              >
                {activeCategory === 'business' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Seguros Empresariales</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid mejorado para seguros personales */}
        {activeCategory === 'personal' && (
          <motion.div
            key="personal"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Primera fila - 3 tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {personalInsurance.slice(0, 3).map((item, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-gray-100 group-hover:border-avance-blue/20">
                    {/* Fondo sutil con colores de Avance */}
                    <div className="absolute inset-0 bg-gradient-to-br from-avance-lightblue/10 to-avance-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Imagen en lugar de icono - SIN fondo azul */}
                    <div className="relative p-8 pb-4">
                      <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={item.iconSrc} 
                          alt={`${item.title} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <h3 className="mt-6 text-2xl font-bold text-avance-blue group-hover:text-avance-blue-dark transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Características */}
                    <div className="relative px-8 pb-4 flex-1">
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-avance-gold rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Botón */}
                    <div className="relative p-8 pt-4">
                      <Link 
                        to={item.path} 
                        className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-avance-blue to-avance-blue-dark text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <span>Conocer más</span>
                        <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Segunda fila - 2 tarjetas centradas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {personalInsurance.slice(3, 5).map((item, index) => (
                <motion.div 
                  key={index + 3} 
                  className="group"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-gray-100 group-hover:border-avance-blue/20">
                    {/* Fondo sutil con colores de Avance */}
                    <div className="absolute inset-0 bg-gradient-to-br from-avance-lightblue/10 to-avance-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Imagen en lugar de icono - SIN fondo azul */}
                    <div className="relative p-8 pb-4">
                      <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={item.iconSrc} 
                          alt={`${item.title} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <h3 className="mt-6 text-2xl font-bold text-avance-blue group-hover:text-avance-blue-dark transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Características */}
                    <div className="relative px-8 pb-4 flex-1">
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-avance-gold rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Botón */}
                    <div className="relative p-8 pt-4">
                      <Link 
                        to={item.path} 
                        className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-avance-blue to-avance-blue-dark text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <span>Conocer más</span>
                        <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Grid para seguros empresariales */}
        {activeCategory === 'business' && (
          <motion.div
            key="business"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {businessInsurance.map((item, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-gray-100 group-hover:border-avance-blue/20">
                  {/* Fondo sutil con colores de Avance */}
                  <div className="absolute inset-0 bg-gradient-to-br from-avance-lightblue/10 to-avance-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Imagen en lugar de icono - SIN fondo azul */}
                  <div className="relative p-8 pb-4">
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={item.iconSrc} 
                        alt={`${item.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="mt-6 text-2xl font-bold text-avance-blue group-hover:text-avance-blue-dark transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Características */}
                  <div className="relative px-8 pb-4 flex-1">
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-avance-gold rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Botón */}
                  <div className="relative p-8 pt-4">
                    <Link 
                      to={item.path} 
                      className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-avance-blue to-avance-blue-dark text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <span>Conocer más</span>
                      <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* CTA con colores de Avance */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 relative"
        >
          <div className="bg-gradient-to-r from-avance-blue via-avance-blue-dark to-avance-blue text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Elementos decorativos del CTA */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-avance-gold/20 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                ¿Necesitas un seguro{' '}
                <span className="bg-gradient-to-r from-avance-gold to-avance-gold bg-clip-text text-transparent">
                  personalizado?
                </span>
              </h3>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Nuestros asesores expertos te ayudarán a encontrar la mejor opción que se adapte a tus necesidades específicas.
              </p>
              
              <Link 
                to="/cotizar" 
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-avance-gold to-avance-gold text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span>Explorar todos nuestros seguros</span>
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceCategories;