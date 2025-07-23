import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, Shield, CheckCircle, AlertTriangle, CreditCard, DollarSign, Clock, Users } from 'lucide-react';
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

  // Beneficios del crédito vehicular
  const creditBenefits = [
    {
      icon: DollarSign,
      title: "Tasas competitivas",
      description: "Ofrecemos las mejores tasas del mercado para tu crédito vehicular"
    },
    {
      icon: Clock,
      title: "Aprobación rápida",
      description: "Proceso de aprobación ágil en menos de 48 horas"
    },
    {
      icon: Users,
      title: "Asesoría personalizada",
      description: "Te acompañamos en todo el proceso de financiación"
    },
    {
      icon: CreditCard,
      title: "Flexibilidad de pago",
      description: "Plazos desde 12 hasta 72 meses adaptados a tu capacidad"
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
                <a 
                  href="https://avance-seguros-cotizaciones.netlify.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-avance-gold text-white font-medium rounded-lg shadow-sm hover:bg-avance-gold/90 transition-colors"
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

      {/* Crédito Vehicular Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">FINANCIACIÓN VEHICULAR</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">¿Necesitas financiar tu vehículo?</h2>
              <p className="text-gray-600 mb-8 text-justify">
                Además del seguro, te ofrecemos crédito vehicular con las mejores condiciones del mercado. 
                Cumple tu sueño de tener el vehículo que deseas con nuestras opciones de financiación flexibles.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {creditBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-avance-blue mr-4 flex-shrink-0">
                      <benefit.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-avance-blue mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a 
                href="https://avance-seguros-cotizaciones.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-avance-gold hover:bg-avance-gold/90 text-white rounded-lg px-6 py-3 font-medium transition-colors"
              >
                Solicitar crédito vehicular
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Imagen principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/credito_vehicular.png" 
                  alt="Crédito vehicular" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay con información destacada */}
                <div className="absolute inset-0 bg-gradient-to-t from-avance-blue/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <div className="flex items-center mb-4">
                      <CreditCard className="mr-3 text-avance-gold" size={28} />
                      <span className="text-lg font-semibold">Crédito hasta por</span>
                    </div>
                    <div className="text-3xl font-bold text-avance-gold mb-2">
                      $500.000.000
                    </div>
                    <p className="text-sm opacity-90">
                      Con plazos flexibles hasta 72 meses
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -top-4 -right-4 bg-avance-gold text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-medium">Tasa desde</div>
                  <div className="text-xl font-bold">1.0% M.V.</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Información adicional en cards */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-avance-blue mb-2">Vehículos nuevos</div>
                <p className="text-gray-600 text-sm">Financia hasta el 90% del valor del vehículo</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-avance-blue mb-2">Vehículos usados</div>
                <p className="text-gray-600 text-sm">Financia hasta el 80% con vehículos hasta 10 años</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-avance-blue mb-2">Nuestros Aliados</div>
                <p className="text-gray-600 text-sm">Sufi, Banco de Bogota, Finandina, Banco de Occidente</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-avance-lightblue to-avance-lightblue/50 p-8 md:p-12 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-avance-blue mb-4">¿Listo para proteger tu vehículo?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              En Avance Seguros te presentamos soluciones integrales que se adaptan a tus necesidades: 
              seguros y financiación en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://avance-seguros-cotizaciones.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-avance-gold text-white font-medium rounded-lg shadow-sm hover:bg-avance-gold/90 transition-colors"
              >
                Cotizar seguro
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://avance-seguros-cotizaciones.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-avance-blue text-white font-medium rounded-lg shadow-sm hover:bg-avance-blue/90 transition-colors"
              >
                Solicitar crédito
                <CreditCard className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default AutomobileInsurance;