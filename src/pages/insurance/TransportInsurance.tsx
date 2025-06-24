import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, Truck, Anchor, Ship, Plane, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TransportInsurance = () => {
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
      title: "Transporte terrestre", 
      description: "Cobertura para mercancías transportadas por carretera a nivel nacional o internacional.",
      icon: Truck
    },
    { 
      title: "Transporte marítimo", 
      description: "Protección para carga en contenedores, buques y embarcaciones para importación y exportación.",
      icon: Ship
    },
    { 
      title: "Transporte aéreo", 
      description: "Seguro para envíos urgentes o de alto valor transportados vía aérea.",
      icon: Plane
    },
    { 
      title: "Póliza multimodal", 
      description: "Cobertura integral que combina diferentes medios de transporte en una sola póliza.",
      icon: Anchor
    },
    { 
      title: "Responsabilidad del transportador", 
      description: "Protección para empresas de transporte ante reclamaciones por daños a la carga.",
      icon: ShieldCheck
    },
    { 
      title: "Rastreo y recuperación", 
      description: "Servicios complementarios de monitoreo GPS y asistencia en caso de siniestro.",
      icon: MapPin
    }
  ];

  // Damage types
  const damageTypes = [
    "Accidentes del medio de transporte",
    "Robo con violencia",
    "Incendio o explosión",
    "Daños por agua o humedad",
    "Contaminación por contacto con otras sustancias",
    "Rotura o daño físico de la mercancía"
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
                Seguro de <span className="text-avance-gold">Transporte</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protege tus mercancías y productos durante el transporte, garantizando la continuidad de tu negocio ante imprevistos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=transporte" 
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/SEGUROS_Transporte.webp" 
                alt="Seguro de transporte" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Types Section */}
      <section className="py-16 bg-white" id="coverages">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">MODALIDADES DE COBERTURA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Soluciones para todo tipo de transporte</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros seguros de transporte te brindan protección para tus mercancías en cualquier medio y destino.
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

      {/* Damage Coverage Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">RIESGOS CUBIERTOS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Protección contra diversos tipos de daños</h2>
              <p className="text-gray-600 mb-8">
                Nuestras pólizas cubren una amplia variedad de riesgos que pueden afectar a tus mercancías durante el transporte.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {damageTypes.map((damage, index) => (
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
                    <span className="text-gray-700">{damage}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://storage.googleapis.com/cluvi/Imagenes/trans.png" 
                alt="Transporte de mercancías" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">SERVICIOS ADICIONALES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Más que un seguro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complementamos tu seguro con servicios que agregan valor y tranquilidad a tus operaciones logísticas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-avance-blue rounded-full flex items-center justify-center text-white mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-avance-blue mb-3">Monitoreo en tiempo real</h3>
              <p className="text-gray-600">
                Sistema de seguimiento satelital para controlar el estado y ubicación de tus mercancías durante todo el trayecto.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-avance-gold rounded-full flex items-center justify-center text-white mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold text-avance-blue mb-3">Asesoría en embalaje</h3>
              <p className="text-gray-600">
                Recomendaciones especializadas para el embalaje adecuado según el tipo de mercancía y condiciones de transporte.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-avance-blue rounded-full flex items-center justify-center text-white mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-semibold text-avance-blue mb-3">Asistencia 24/7</h3>
              <p className="text-gray-600">
                Servicio de atención permanente para gestionar siniestros y emergencias en cualquier momento y lugar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protege tus mercancías en tránsito</h2>
            <p className="mb-8 text-white/90">
              Asegura la continuidad de tu negocio con una póliza de transporte que te brinda cobertura ante cualquier imprevisto.
            </p>
            <Link 
              to="/cotizar?tipo=transporte" 
              className="bg-avance-gold hover:bg-avance-gold-light text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
            >
              Solicitar cotización personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default TransportInsurance;