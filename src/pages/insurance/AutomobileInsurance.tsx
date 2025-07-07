import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AutomobileInsurance = () => {
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
      title: "Responsabilidad Civil", 
      description: "Protección ante daños causados a terceros, ya sea a personas o sus bienes.",
      icon: Shield
    },
    { 
      title: "Perdidas Parciales por daño o hurto", 
      description: "Cubre los daños a tu vehículo por colisión, volcadura o caída de objetos.",
      icon: CheckCircle
    },
    { 
      title: "Perdidas Totales por daño o hurto", 
      description: "Indemnizacion del 100% del valor comercial de tu vehiculo",
      icon: AlertTriangle
    },
    { 
      title: "Asistencia", 
      description: "Atencion 24/7 en caso de varada o accidente",
      icon: CheckCircle
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
                Seguro de <span className="text-avance-gold">Automóvil</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protege tu vehículo con un seguro personalizado que te brinda la tranquilidad de estar cubierto ante cualquier eventualidad en la vía.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=automovil" 
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/SEGUROS_Movilidad.webp" 
                alt="Seguro de automóvil" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Coberturas que ofrecemos</h2>

          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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

      {/* CTA Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-avance-blue mb-4">¿Listo para proteger tu vehículo?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              En Avance Seguros te presentamos soluciones que se adaptan a tus necesidades.
            </p>
            <Link 
              to="/cotizar?tipo=automovil" 
              className="bg-avance-gold hover:bg-avance-gold/90 text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
            >
              Solicitar cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default AutomobileInsurance;