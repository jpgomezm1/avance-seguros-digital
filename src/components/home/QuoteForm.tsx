import { useState } from 'react';
import { 
  ArrowRight, CheckCircle, Lock, 
  Sparkles, Star, CalendarClock
} from 'lucide-react';
import { motion } from 'framer-motion';

const QuoteForm = () => {
  const [formState, setFormState] = useState({
    insuranceType: 'salud'
  });

  // Tipos de seguros con imágenes
  const personalInsurance = [
    { 
      id: 'salud', 
      name: 'Salud', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Salud.png', 
      description: 'Para ti y tu familia'
    },
    { 
      id: 'vida', 
      name: 'Vida', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Vida.png', 
      description: 'Protección futura'
    },
    { 
      id: 'hogar', 
      name: 'Hogar', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Hogar.png', 
      description: 'Para tu vivienda'
    },
    { 
      id: 'movilidad', 
      name: 'Movilidad', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Autos.png', 
      description: 'Para tu vehículo'
    },
    { 
      id: 'mascotas', 
      name: 'Mascotas', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Mascotas.png', 
      description: 'Para tus mascotas'
    },
    { 
      id: 'asistencia-viajes', 
      name: 'Viajes', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/asistencia_viajes.png', 
      description: 'Para tus viajes'
    }
  ];

  const businessInsurance = [
    { 
      id: 'corporativos-pymes', 
      name: 'Corporativos y PYMES', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Pymes.png', 
      description: 'Para tu negocio'
    },
    { 
      id: 'responsabilidad-civil', 
      name: 'Responsabilidad Civil', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Responsabilidad_Civil.png', 
      description: 'Protección legal'
    },
    { 
      id: 'transporte', 
      name: 'Transporte', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Transporte.png', 
      description: 'Para mercancías'
    },
    { 
      id: 'todo-riesgo-construccion', 
      name: 'Todo Riesgo Construcción', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Todo_Riesgo.png', 
      description: 'Para obras'
    },
    { 
      id: 'cumplimiento', 
      name: 'Cumplimiento', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Cumplimiento.png', 
      description: 'Para contratos'
    },
    { 
      id: 'arl', 
      name: 'ARL', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/ARL.png', 
      description: 'Riesgos laborales'
    },
    { 
      id: 'ciberseguridad', 
      name: 'Ciberseguridad', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Cyberseguridad.png', 
      description: 'Protección digital'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('personal');
  const currentInsuranceTypes = activeCategory === 'personal' ? personalInsurance : businessInsurance;

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir SIEMPRE al cotizador externo
    window.open('https://avance-seguros-cotizaciones.netlify.app/', '_blank');
  };

  const selectedInsurance = [...personalInsurance, ...businessInsurance].find(
    type => type.id === formState.insuranceType
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondo con solo colores de Avance */}
      <div className="absolute inset-0 bg-gradient-to-br from-avance-blue via-avance-blue-dark to-avance-blue"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>
      
      {/* Elementos decorativos con colores de marca */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-avance-gold/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-avance-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Columna izquierda - Formulario */}
            <div className="lg:col-span-7 p-8 lg:p-12">
              <div className="max-w-2xl mx-auto">
                {/* Encabezado */}
                <div className="mb-10">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center mb-6"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl flex items-center justify-center mr-4">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-avance-blue">Cotización gratuita</h2>
                      <p className="text-gray-600">Accede a nuestro cotizador especializado</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-gray-600 text-lg">
                      Selecciona el tipo de seguro que necesitas y accede a nuestro cotizador especializado para obtener la mejor propuesta.
                    </p>
                  </motion.div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    {/* Selector de categoría */}
                    <div className="flex justify-center mb-8">
                      <div className="relative p-1 bg-gray-100 rounded-2xl inline-flex">
                        <button 
                          type="button"
                          onClick={() => setActiveCategory('personal')}
                          className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            activeCategory === 'personal' 
                              ? 'text-white shadow-lg' 
                              : 'text-gray-600 hover:text-avance-blue'
                          }`}
                        >
                          {activeCategory === 'personal' && (
                            <motion.div
                              layoutId="categoryTab"
                              className="absolute inset-0 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10">Seguros Personales</span>
                        </button>
                        <button 
                          type="button"
                          onClick={() => setActiveCategory('business')}
                          className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            activeCategory === 'business' 
                              ? 'text-white shadow-lg' 
                              : 'text-gray-600 hover:text-avance-blue'
                          }`}
                        >
                          {activeCategory === 'business' && (
                            <motion.div
                              layoutId="categoryTab"
                              className="absolute inset-0 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10">Seguros Empresariales</span>
                        </button>
                      </div>
                    </div>

                    {/* Grid de seguros */}
                    <div className={`grid gap-4 ${
                      activeCategory === 'personal' 
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                        : 'grid-cols-1 sm:grid-cols-2'
                    }`}>
                      {currentInsuranceTypes.map((type, index) => (
                        <motion.label 
                          key={type.id} 
                          htmlFor={`insurance-${type.id}`}
                          className="cursor-pointer group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ y: -4 }}
                        >
                          <input
                            type="radio"
                            id={`insurance-${type.id}`}
                            name="insuranceType"
                            value={type.id}
                            checked={formState.insuranceType === type.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`relative p-6 border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                            formState.insuranceType === type.id 
                              ? 'border-avance-blue bg-gradient-to-br from-avance-blue/5 to-avance-blue/10 shadow-lg' 
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white'
                          }`}>
                            {/* Fondo sutil para seleccionado */}
                            {formState.insuranceType === type.id && (
                              <div className="absolute inset-0 bg-gradient-to-br from-avance-lightblue/30 to-avance-lightblue/20"></div>
                            )}
                            
                            <div className="relative z-10">
                              <div className="w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <img 
                                  src={type.iconSrc} 
                                  alt={`${type.name} icon`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <h3 className={`font-bold text-lg mb-2 ${
                                formState.insuranceType === type.id ? 'text-avance-blue' : 'text-gray-800'
                              }`}>
                                {type.name}
                              </h3>
                              <p className={`text-sm ${
                                formState.insuranceType === type.id ? 'text-avance-blue/80' : 'text-gray-600'
                              }`}>
                                {type.description}
                              </p>
                              
                              {/* Indicador de selección */}
                              {formState.insuranceType === type.id && (
                                <motion.div 
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-avance-gold to-avance-gold rounded-full flex items-center justify-center"
                                >
                                  <CheckCircle className="text-white" size={14} />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.label>
                      ))}
                    </div>

                    {/* Información del seguro seleccionado */}
                    {selectedInsurance && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-2xl bg-gradient-to-r from-avance-lightblue/30 to-avance-lightblue/20 border border-avance-blue/20 mt-8"
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 flex items-center justify-center mr-4">
                            <img 
                              src={selectedInsurance.iconSrc} 
                              alt={`${selectedInsurance.name} icon`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-avance-blue">Seguro seleccionado: {selectedInsurance.name}</h3>
                            <p className="text-sm text-gray-600">{selectedInsurance.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Botón de continuar */}
                  <div className="flex justify-center mt-10 pt-6 border-t border-gray-100">
                    <button 
                      type="submit" 
                      className="relative overflow-hidden group bg-gradient-to-r from-avance-gold to-avance-gold text-white rounded-xl px-8 py-4 font-bold transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center">
                        Ir al cotizador especializado
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </span>
                      <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                  </div>
                  
                  {/* Indicadores de seguridad */}
                  <div className="flex items-center justify-center space-x-4 mt-8 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Lock className="text-avance-blue" size={16} />
                      <span>Conexión segura SSL</span>
                    </div>
                    <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <img 
                        src="https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/ARL.png" 
                        alt="Datos protegidos"
                        className="w-4 h-4 object-contain"
                      />
                      <span>Datos protegidos</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Columna derecha - Beneficios */}
            <div className="lg:col-span-5 bg-gradient-to-br from-avance-blue via-avance-blue-dark to-avance-blue text-white p-8 lg:p-12 relative overflow-hidden">
              {/* Elementos decorativos con colores de marca */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-avance-gold opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center mb-6">
                    <Star className="text-avance-gold mr-3" size={32} />
                    <div>
                      <h3 className="text-3xl font-bold">¿Por qué elegir Avance Seguros?</h3>
                      <p className="text-white/80">Más de 17 años protegiendo familias colombianas</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-lg mb-10 leading-relaxed">
                    Te ofrecemos la mejor asesoría para que encuentres el seguro que realmente necesitas, 
                    al mejor precio posible y con el respaldo de las aseguradoras más confiables del país.
                  </p>
                </motion.div>
                
                <div className="space-y-6 flex-1">
                  {[
                    {
                      icon: CheckCircle,
                      title: "Cotizaciones 100% personalizadas",
                      description: "Analizamos tu situación específica para encontrar exactamente lo que necesitas, sin productos genéricos."
                    },
                    {
                      icon: Star,
                      title: "Comparamos todas las opciones",
                      description: "No te limitamos a una sola aseguradora. Encontramos la mejor opción entre más de 15 aseguradoras aliadas."
                    },
                    {
                      icon: CalendarClock,
                      title: "Respuesta garantizada en 24h",
                      description: "Te contactaremos en menos de 24 horas con opciones reales adaptadas a tu presupuesto y necesidades."
                    }
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                    >
                      <div className="bg-white/10 p-3 rounded-xl mr-4 group-hover:bg-white/20 transition-colors">
                        <benefit.icon className="text-avance-gold" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-avance-gold transition-colors">{benefit.title}</h4>
                        <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;