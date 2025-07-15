import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, Home, Umbrella, Shield, Lock, AlertTriangle, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeInsurance = () => {
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
      title: "Daños estructurales", 
      description: "Protección ante daños a la estructura de tu casa por eventos como terremotos o incendios.",
      icon: Home
    },
    { 
      title: "Contenidos del hogar", 
      description: "Cubre tus bienes y pertenencias dentro de la vivienda en caso de robo o daños.",
      icon: Lock
    },
    { 
      title: "Responsabilidad civil", 
      description: "Protección frente a daños que puedas causar a terceros en tu vivienda.",
      icon: Shield
    },
    { 
      title: "Incendio y aliados", 
      description: "Cobertura para daños por incendio, explosión, caída de rayos y más.",
      icon: AlertTriangle
    },
    { 
      title: "Daños por agua", 
      description: "Protección contra inundaciones, roturas de tuberías y filtraciones.",
      icon: Droplet
    },
    { 
      title: "Asistencia domiciliaria", 
      description: "Servicios de emergencia como plomería, cerrajería y electricidad.",
      icon: Umbrella
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
                Seguro de <span className="text-avance-gold">Hogar</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protege tu hogar y todo lo que hay en él con un seguro que te brinda tranquilidad frente a cualquier imprevisto.
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/SEGUROS_Hogar.webp" 
                alt="Seguro de hogar" 
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
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PROTECCIÓN COMPLETA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Coberturas que protegen tu hogar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros seguros de hogar te brindan protección integral para tu vivienda y tus bienes más valiosos.
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

      {/* Why Choose Us Section */}
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
              <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">¿POR QUÉ ELEGIRNOS?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Tu hogar merece la mejor protección</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 text-avance-gold">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-avance-blue mb-2">Cobertura completa</h3>
                    <p className="text-gray-600">
                      Protegemos tu casa, tus pertenencias y te brindamos asistencia domiciliaria para emergencias.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 text-avance-gold">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-avance-blue mb-2">Protección contra robos</h3>
                    <p className="text-gray-600">
                      Compensación por robo o hurto de tus bienes dentro de la vivienda.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 text-avance-gold">
                    <Home size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-avance-blue mb-2">Asistencia 24/7</h3>
                    <p className="text-gray-600">
                      Servicio de emergencia disponible todos los días del año para cuando más lo necesites.
                    </p>
                  </div>
                </div>
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/FOTO_Foto%20p%C3%A1gina%20principal.webp" 
                alt="Protección para tu hogar" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-avance-blue p-8 md:p-12 rounded-2xl shadow-lg text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Protege tu hogar hoy mismo</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              En Avance Seguros te ayudamos a encontrar el seguro de hogar que mejor se adapte a tus necesidades y presupuesto.
            </p>
            <a 
  href="https://avance-seguros-cotizaciones.netlify.app/" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-avance-gold hover:bg-avance-gold/90 text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
>
  Solicitar cotización gratuita
  <ArrowRight className="ml-2 h-5 w-5" />
</a>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default HomeInsurance;