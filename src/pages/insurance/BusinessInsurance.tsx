import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, Building2, ShieldCheck, Briefcase, LibrarySquare, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BusinessInsurance = () => {
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
      title: "Daños materiales", 
      description: "Protección para las instalaciones físicas, equipos, inventarios y activos de tu empresa.",
      icon: Building2
    },
    { 
      title: "Responsabilidad civil", 
      description: "Cobertura por posibles daños a terceros derivados de la actividad empresarial.",
      icon: ShieldCheck
    },
    { 
      title: "Interrupción de negocio", 
      description: "Compensación por pérdidas económicas durante el tiempo que no puedas operar por un siniestro.",
      icon: AlertTriangle
    },
    { 
      title: "Robo y hurto", 
      description: "Protección ante robos de mercancías, equipos o dinero en efectivo.",
      icon: Briefcase
    },
    { 
      title: "Riesgos cibernéticos", 
      description: "Cobertura ante ciberataques, robo de datos y responsabilidad por filtración de información.",
      icon: LibrarySquare
    },
    { 
      title: "Seguro para empleados", 
      description: "Protección integral para tu equipo de trabajo y cumplimiento de obligaciones laborales.",
      icon: FileText
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
                Seguro para <span className="text-avance-gold">PYMES</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protege tu negocio ante imprevistos con soluciones de seguros diseñadas específicamente para pequeñas y medianas empresas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=pymes" 
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/SEGUROS_PYMES.webp" 
                alt="Seguro para PYMES" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Coberturas para tu negocio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestras soluciones para PYMES brindan protección completa para que puedas enfocarte en hacer crecer tu negocio con tranquilidad.
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

      {/* Industries Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">SOLUCIONES POR SECTOR</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Adaptado a tu industria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con soluciones de seguros diseñadas específicamente para las necesidades de diferentes sectores empresariales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-avance-gold"
            >
              <h3 className="text-xl font-semibold text-avance-blue mb-4">Comercio minorista</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-gold mr-2"></div>
                  <span>Protección contra robo de mercancía</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-gold mr-2"></div>
                  <span>Daños a instalaciones comerciales</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-gold mr-2"></div>
                  <span>Responsabilidad ante clientes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-avance-blue"
            >
              <h3 className="text-xl font-semibold text-avance-blue mb-4">Restaurantes y hostelería</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-blue mr-2"></div>
                  <span>Seguro para equipamiento de cocina</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-blue mr-2"></div>
                  <span>Cobertura por intoxicación alimentaria</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-blue mr-2"></div>
                  <span>Pérdida de beneficios por cierre</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-avance-gold"
            >
              <h3 className="text-xl font-semibold text-avance-blue mb-4">Servicios profesionales</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-gold mr-2"></div>
                  <span>Responsabilidad civil profesional</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-gold mr-2"></div>
                  <span>Protección de datos y ciberriesgos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-avance-gold mr-2"></div>
                  <span>Seguro para equipos electrónicos</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-avance-blue p-8 md:p-12 rounded-2xl shadow-lg text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Protege el futuro de tu empresa</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              En Avance Seguros contamos con asesores especializados en seguros para PYMES que te ayudarán a encontrar la protección ideal para tu negocio.
            </p>
            <Link 
              to="/cotizar?tipo=pymes" 
              className="bg-avance-gold hover:bg-avance-gold/90 text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
            >
              Solicitar asesoría personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default BusinessInsurance;