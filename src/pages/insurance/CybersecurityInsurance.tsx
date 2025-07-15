import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, ShieldCheck, Lock, AlertTriangle, Database, Users, Globe, FileText, Monitor, Cloud, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CybersecurityInsurance = () => {
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
      title: "Ataques cibernéticos", 
      description: "Protección contra ransomware, malware, phishing y otros ataques dirigidos a tu infraestructura digital.",
      icon: ShieldCheck
    },
    { 
      title: "Violación de datos", 
      description: "Cobertura para el manejo de incidentes de filtración de información sensible y datos personales.",
      icon: Database
    },
    { 
      title: "Responsabilidad digital", 
      description: "Protección ante demandas por daños a terceros derivados de incidentes de seguridad informática.",
      icon: Users
    },
    { 
      title: "Interrupción de negocio", 
      description: "Compensación por pérdidas económicas durante la suspensión de operaciones por ciberataques.",
      icon: AlertTriangle
    },
    { 
      title: "Recuperación de sistemas", 
      description: "Costos de restauración de sistemas, datos y infraestructura tecnológica comprometida.",
      icon: Monitor
    },
    { 
      title: "Extorsión cibernética", 
      description: "Cobertura para el manejo de amenazas de extorsión digital y pagos de rescate autorizado.",
      icon: Lock
    }
  ];

  // Services
  const preventionServices = [
    "Evaluación de vulnerabilidades",
    "Auditorías de seguridad informática",
    "Implementación de protocolos de seguridad",
    "Capacitación en ciberseguridad",
    "Monitoreo continuo de amenazas",
    "Planes de respuesta a incidentes"
  ];

  // Risk levels
  const riskLevels = [
    {
      level: "Básico",
      color: "bg-green-300",
      description: "Pequeñas empresas",
      details: "Comercio local, servicios básicos, mínima presencia digital",
      icon: Globe
    },
    {
      level: "Intermedio",
      color: "bg-blue-300", 
      description: "Empresas medianas",
      details: "E-commerce, servicios profesionales, manejo de datos de clientes",
      icon: FileText
    },
    {
      level: "Avanzado",
      color: "bg-yellow-300",
      description: "Grandes corporaciones",
      details: "Industrias reguladas, gran volumen de datos, múltiples ubicaciones",
      icon: Cloud
    },
    {
      level: "Crítico",
      color: "bg-orange-300",
      description: "Sectores estratégicos",
      details: "Servicios financieros, salud, infraestructura crítica",
      icon: Zap
    },
    {
      level: "Máximo",
      color: "bg-red-300",
      description: "Alto valor objetivo",
      details: "Defensa, gobierno, tecnología avanzada, datos altamente sensibles",
      icon: Eye
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
                Seguro de <span className="text-avance-gold">Ciberseguridad</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl text-justify">
                Protege tu empresa contra amenazas digitales con nuestra cobertura integral de riesgos cibernéticos y respaldo especializado.
              </p>
              <div className="flex flex-wrap gap-4">
              <a 
  href="https://avance-seguros-cotizaciones.netlify.app/" 
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary flex items-center"
>
  Cotizar ahora
  <ArrowRight className="ml-2 h-5 w-5" />
</a>
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/image1_ciber.png" 
                alt="Ciberseguridad empresarial" 
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
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PROTECCIÓN DIGITAL</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Coberturas integrales contra riesgos cibernéticos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              Nuestro seguro de ciberseguridad te ofrece protección completa contra amenazas digitales modernas y sus consecuencias financieras.
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
                <p className="text-gray-600 text-justify">{coverage.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Prevención proactiva de amenazas</h2>
              <p className="text-gray-600 mb-8 text-justify">
                Nuestro equipo especializado te ofrece servicios integrales de prevención y respuesta ante incidentes de ciberseguridad.
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/image2_ciber.png" 
                alt="Prevención de amenazas cibernéticas" 
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
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">NIVELES DE EXPOSICIÓN</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Protección adaptada a tu nivel de riesgo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              Evaluamos tu exposición digital para diseñar una cobertura personalizada según tu industria y nivel de riesgo cibernético.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {riskLevels.map((risk, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${risk.color}`}></div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-avance-blue">{risk.level}</h3>
                  <risk.icon size={20} className="text-avance-blue" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{risk.description}</p>
                <p className="text-xs text-gray-500 text-justify">{risk.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protege tu negocio en el mundo digital</h2>
            <p className="mb-8 text-white/90 text-justify">
              En Avance Seguros te ayudamos a evaluar tus riesgos cibernéticos y diseñar una estrategia de protección integral para tu empresa.
            </p>
            <a 
  href="https://avance-seguros-cotizaciones.netlify.app/" 
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary flex items-center"
>
  Cotizar ahora
  <ArrowRight className="ml-2 h-5 w-5" />
</a>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default CybersecurityInsurance;