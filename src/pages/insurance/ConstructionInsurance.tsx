import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, ShieldCheck, Building2, Hammer, Users, Zap, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ConstructionInsurance = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Coverage options
  const coverageOptions = [
    { 
      title: "Daños físicos directos", 
      description: "Cobertura para daños materiales a la obra en construcción por causas súbitas e imprevistas.",
      icon: Building2
    },
    { 
      title: "Maquinaria y equipos", 
      description: "Protección para maquinaria de construcción, equipos y herramientas utilizados en la obra.",
      icon: Hammer
    },
    { 
      title: "Responsabilidad civil", 
      description: "Cobertura por daños a terceros, propiedades vecinas y responsabilidad del contratista.",
      icon: Users
    },
    { 
      title: "Gastos adicionales", 
      description: "Cobertura para gastos de remoción de escombros, demolición y reconstrucción.",
      icon: ShieldCheck
    },
    { 
      title: "Falla de diseño", 
      description: "Protección ante defectos de diseño, materiales defectuosos o errores de construcción.",
      icon: Zap
    },
    { 
      title: "Periodo de mantenimiento", 
      description: "Cobertura extendida durante el periodo de garantía y mantenimiento de la obra.",
      icon: HardHat
    }
  ];

  // Construction types
  const constructionTypes = [
    "Edificaciones residenciales",
    "Construcciones comerciales e industriales",
    "Obras de infraestructura",
    "Proyectos de ingeniería civil",
    "Ampliaciones y remodelaciones",
    "Instalaciones especializadas"
  ];

  // Project phases
  const projectPhases = [
    {
      phase: "Fase de Construcción",
      description: "Cobertura durante toda la ejecución del proyecto",
      duration: "Duración de la obra",
      coverage: "100% del valor de la obra",
      color: "bg-blue-100 border-blue-200 text-blue-800"
    },
    {
      phase: "Periodo de Pruebas",
      description: "Protección durante las pruebas y puesta en marcha",
      duration: "3-6 meses",
      coverage: "Valor completo + equipos",
      color: "bg-orange-100 border-orange-200 text-orange-800"
    },
    {
      phase: "Periodo de Mantenimiento",
      description: "Cobertura de garantía post-entrega",
      duration: "12-24 meses",
      coverage: "Defectos y vicios ocultos",
      color: "bg-green-100 border-green-200 text-green-800"
    }
  ];

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-avance-blue to-avance-blue-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Seguro <span className="text-avance-gold">Todo Riesgo Construcción</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protección integral para tus proyectos de construcción desde el inicio hasta el periodo de garantía.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=todo-riesgo-construccion" 
                  className="btn-secondary flex items-center"
                >
                  Cotizar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="#coverages" 
                  className="btn-outline"
                >
                  Ver coberturas
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img 
                src="https://storage.googleapis.com/cluvi/Imagenes/construccion.png" 
                alt="Seguro de construcción" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white" id="coverages">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PROTECCIÓN INTEGRAL</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Cobertura completa para tu proyecto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desde la primera piedra hasta la entrega final, protegemos cada etapa de tu proyecto de construcción.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coverageOptions.map((coverage, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-avance-lightblue rounded-lg flex items-center justify-center text-avance-blue mb-4">
                  <coverage.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">{coverage.title}</h3>
                <p className="text-gray-600">{coverage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Phases Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">FASES DEL PROYECTO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Protección en cada etapa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro seguro se adapta a las diferentes fases de tu proyecto, ofreciendo la cobertura adecuada en cada momento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectPhases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${phase.color}`}>
                  {phase.phase}
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">{phase.description}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Duración:</p>
                    <p className="font-medium text-avance-blue">{phase.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cobertura:</p>
                    <p className="font-medium text-avance-blue">{phase.coverage}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Types Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">TIPOS DE CONSTRUCCIÓN</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Cobertura para todo tipo de proyectos</h2>
              <p className="text-gray-600 mb-8">
                Desde pequeñas remodelaciones hasta grandes obras de infraestructura, tenemos la solución perfecta para tu proyecto.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {constructionTypes.map((type, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-gold mr-3">
                      <Building2 size={16} />
                    </div>
                    <span className="text-gray-700">{type}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/cotizar?tipo=todo-riesgo-construccion" 
                  className="inline-flex items-center px-6 py-3 bg-avance-blue text-white rounded-lg font-medium hover:bg-avance-blue/90 transition-colors"
                >
                  Cotizar mi proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://storage.googleapis.com/cluvi/Imagenes/construccion.png" 
                alt="Tipos de construcción" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">¿POR QUÉ ELEGIRNOS?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Ventajas de nuestro seguro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos especialistas en seguros de construcción con la experiencia necesaria para proteger tu inversión.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Cobertura 24/7</h3>
              <p className="text-sm text-gray-600">Protección continua durante toda la duración del proyecto.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <Hammer size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Inspecciones técnicas</h3>
              <p className="text-sm text-gray-600">Evaluaciones periódicas para prevenir riesgos y siniestros.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Atención especializada</h3>
              <p className="text-sm text-gray-600">Equipo experto en riesgos de construcción e ingeniería.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <HardHat size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Ajuste rápido</h3>
              <p className="text-sm text-gray-600">Tramitación ágil de siniestros para minimizar demoras.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">DETALLES DE COBERTURA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">¿Qué riesgos cubrimos?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-avance-blue mb-3">Riesgos Naturales</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Incendio y explosión</li>
                <li>• Terremoto y temblor</li>
                <li>• Inundación y desbordamiento</li>
                <li>• Vendaval y granizo</li>
                <li>• Rayo</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-avance-blue mb-3">Riesgos Humanos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Hurto calificado</li>
                <li>• Actos malintencionados</li>
                <li>• Huelgas y motines</li>
                <li>• Terrorismo</li>
                <li>• Sabotaje</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-avance-blue mb-3">Riesgos Técnicos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Errores de diseño</li>
                <li>• Materiales defectuosos</li>
                <li>• Mano de obra deficiente</li>
                <li>• Falla de maquinaria</li>
                <li>• Colapso estructural</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protege tu inversión desde el primer día</h2>
            <p className="mb-8 text-white/90">
              No dejes tu proyecto al azar. Con nuestro seguro Todo Riesgo Construcción tendrás la tranquilidad de saber que tu inversión está protegida.
            </p>
            <Link 
              to="/cotizar?tipo=todo-riesgo-construccion" 
              className="bg-avance-gold hover:bg-avance-gold-light text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
            >
              Solicitar cotización especializada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default ConstructionInsurance;