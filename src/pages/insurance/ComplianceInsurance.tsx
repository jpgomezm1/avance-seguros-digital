import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, FileCheck, ShieldCheck, Award, Scale, Landmark, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ComplianceInsurance = () => {
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
      title: "Seriedad de la oferta", 
      description: "Garantiza el cumplimiento de las obligaciones contraídas al presentar una propuesta en un proceso de contratación.",
      icon: FileCheck
    },
    { 
      title: "Cumplimiento del contrato", 
      description: "Cubre el incumplimiento de las obligaciones contraídas por el contratista según los términos pactados.",
      icon: Handshake
    },
    { 
      title: "Buen manejo del anticipo", 
      description: "Garantiza la correcta inversión y amortización de los recursos recibidos como anticipo.",
      icon: ShieldCheck
    },
    { 
      title: "Estabilidad de la obra", 
      description: "Cubre los perjuicios derivados de daños estructurales de una obra tras su entrega.",
      icon: Landmark
    },
    { 
      title: "Calidad del servicio", 
      description: "Garantiza la calidad de los servicios prestados según lo establecido en el contrato.",
      icon: Award
    },
    { 
      title: "Pago de salarios y prestaciones", 
      description: "Cubre el incumplimiento de las obligaciones laborales del contratista con su personal.",
      icon: Scale
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
                Seguro de <span className="text-avance-gold">Cumplimiento</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Garantiza el cumplimiento de las obligaciones contractuales con pólizas diseñadas para diversos tipos de contratos y licitaciones.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=cumplimiento" 
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
                src="https://storage.googleapis.com/cluvi/Imagenes/cumplimiento.png" 
                alt="Seguro de cumplimiento" 
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
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">GARANTÍAS CONTRACTUALES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Principales coberturas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los seguros de cumplimiento protegen a las partes involucradas en un contrato ante posibles incumplimientos.
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

      {/* Contract Types Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">AMPLIA COBERTURA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Para todo tipo de contratos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diseñamos pólizas de cumplimiento ajustadas a los requisitos específicos de diferentes tipos de contratos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-avance-blue mb-6">Contratos con entidades estatales</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-avance-blue/10 p-2 rounded-full mr-4 text-avance-blue">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-avance-blue">Licitaciones públicas</h4>
                    <p className="text-gray-600 text-sm">Garantías para participar en procesos de contratación con el Estado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-avance-blue/10 p-2 rounded-full mr-4 text-avance-blue">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-avance-blue">Contratos de obra pública</h4>
                    <p className="text-gray-600 text-sm">Coberturas para construcción y obras de infraestructura estatal.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-avance-blue/10 p-2 rounded-full mr-4 text-avance-blue">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-avance-blue">Prestación de servicios</h4>
                    <p className="text-gray-600 text-sm">Garantías para contratos de servicios con entidades gubernamentales.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-avance-blue mb-6">Contratos entre particulares</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-avance-gold/10 p-2 rounded-full mr-4 text-avance-gold">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-avance-blue">Contratos de arrendamiento</h4>
                    <p className="text-gray-600 text-sm">Garantía para el pago de cánones y cumplimiento de obligaciones arrendaticias.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-avance-gold/10 p-2 rounded-full mr-4 text-avance-gold">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-avance-blue">Contratos de suministro</h4>
                    <p className="text-gray-600 text-sm">Cobertura para el cumplimiento en la entrega de bienes y servicios.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-avance-gold/10 p-2 rounded-full mr-4 text-avance-gold">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-avance-blue">Contratos de construcción</h4>
                    <p className="text-gray-600 text-sm">Garantías para proyectos inmobiliarios y obras privadas.</p>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">¿Necesitas una póliza de cumplimiento?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              En Avance Seguros te asesoramos durante todo el proceso para encontrar la póliza que mejor se adapte a los requisitos de tu contrato.
            </p>
            <Link 
              to="/cotizar?tipo=cumplimiento" 
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

export default ComplianceInsurance;