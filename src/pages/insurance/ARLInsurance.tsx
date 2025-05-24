import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, ShieldCheck, UserCheck, BookOpen, Stethoscope, Building2, HandMetal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ARLInsurance = () => {
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
      title: "Accidentes de trabajo", 
      description: "Cobertura para lesiones corporales sufridas durante la realización de actividades laborales.",
      icon: ShieldCheck
    },
    { 
      title: "Enfermedades laborales", 
      description: "Atención médica y compensación económica por enfermedades causadas por exposición a factores de riesgo laboral.",
      icon: Stethoscope
    },
    { 
      title: "Incapacidad temporal", 
      description: "Subsidio económico durante el periodo de recuperación por accidente o enfermedad laboral.",
      icon: UserCheck
    },
    { 
      title: "Incapacidad permanente", 
      description: "Indemnización por pérdida parcial o total de capacidad laboral como consecuencia de riesgos laborales.",
      icon: HandMetal
    },
    { 
      title: "Prevención de riesgos", 
      description: "Programas y capacitaciones para la identificación, evaluación y control de riesgos en el entorno laboral.",
      icon: BookOpen
    },
    { 
      title: "Responsabilidad patronal", 
      description: "Cobertura para la empresa ante demandas por responsabilidad civil en accidentes laborales.",
      icon: Building2
    }
  ];

  // Services
  const preventionServices = [
    "Evaluación de riesgos laborales",
    "Capacitación en seguridad industrial",
    "Implementación de sistemas de gestión en SST",
    "Análisis de puestos de trabajo",
    "Estudios de higiene industrial",
    "Planes de emergencia y contingencia"
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
                Administración de <span className="text-avance-gold">Riesgos Laborales</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protege a tu equipo de trabajo y cumple con tus obligaciones legales a través de nuestras soluciones integrales de ARL.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=arl" 
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
                src="https://storage.googleapis.com/cluvi/Imagenes/arl.png" 
                alt="Riesgos laborales" 
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
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PROTECCIÓN LABORAL</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Coberturas integrales para tu empresa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestras soluciones de ARL te ofrecen una protección integral para tus empleados y tu empresa.
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

      {/* Prevention Services Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">SERVICIOS DE PREVENCIÓN</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Prevenir es mejor que remediar</h2>
              <p className="text-gray-600 mb-8">
                Te ofrecemos un completo portafolio de servicios enfocados en la gestión preventiva de los riesgos laborales en tu empresa.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {preventionServices.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-avance-gold mr-3">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <img 
                src="https://storage.googleapis.com/cluvi/Imagenes/arl.png" 
                alt="Prevención de riesgos laborales" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Levels Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">NIVELES DE RIESGO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Soluciones adaptadas a tu actividad</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Las tarifas de ARL varían según el nivel de riesgo de tu actividad económica. Te asesoramos para encontrar la clasificación correcta.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-300"></div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Riesgo I</h3>
              <p className="text-sm text-gray-600 mb-3">Actividades de riesgo mínimo</p>
              <p className="text-xs text-gray-500">Empresas financieras, trabajos de oficina, centros educativos, restaurantes.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-300"></div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Riesgo II</h3>
              <p className="text-sm text-gray-600 mb-3">Actividades de riesgo bajo</p>
              <p className="text-xs text-gray-500">Confecciones, manufactura ligera, almacenes, hospitales.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-300"></div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Riesgo III</h3>
              <p className="text-sm text-gray-600 mb-3">Actividades de riesgo medio</p>
              <p className="text-xs text-gray-500">Manufactura de alimentos, transporte, manipulación de químicos leves.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-300"></div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Riesgo IV</h3>
              <p className="text-sm text-gray-600 mb-3">Actividades de riesgo alto</p>
              <p className="text-xs text-gray-500">Construcción, industria maderera, manufactura con maquinaria pesada.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-300"></div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Riesgo V</h3>
              <p className="text-sm text-gray-600 mb-3">Actividades de riesgo máximo</p>
              <p className="text-xs text-gray-500">Minería, industrias extractivas, manejo de explosivos, trabajos en altura.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protege a tu equipo de trabajo</h2>
            <p className="mb-8 text-white/90">
              En Avance Seguros te asesoramos para elegir la mejor ARL y te acompañamos en el proceso de afiliación de tus colaboradores.
            </p>
            <Link 
              to="/cotizar?tipo=arl" 
              className="bg-avance-gold hover:bg-avance-gold-light text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
            >
              Solicitar asesoría especializada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default ARLInsurance;