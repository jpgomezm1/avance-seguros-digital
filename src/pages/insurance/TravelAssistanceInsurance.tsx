import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, Plane, Shield, Phone, Heart, MapPin, Globe, Clock, Briefcase, Users, Car, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const TravelAssistanceInsurance = () => {
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
      title: "Asistencia médica en el exterior", 
      description: "Cobertura médica completa durante tu viaje, incluyendo hospitalización y medicamentos.",
      icon: Heart
    },
    { 
      title: "Repatriación sanitaria", 
      description: "Traslado médico de emergencia a tu país de origen en caso de enfermedad grave.",
      icon: Plane
    },
    { 
      title: "Equipaje y efectos personales", 
      description: "Protección ante pérdida, robo o daño de tu equipaje durante el viaje.",
      icon: Briefcase
    },
    { 
      title: "Cancelación de viaje", 
      description: "Reembolso de gastos no recuperables por cancelación involuntaria del viaje.",
      icon: Shield
    },
    { 
      title: "Asistencia 24/7", 
      description: "Línea de emergencia disponible las 24 horas en tu idioma durante todo el viaje.",
      icon: Phone
    },
    { 
      title: "Responsabilidad civil", 
      description: "Cobertura ante daños involuntarios causados a terceros durante tu viaje.",
      icon: Users
    }
  ];

  // Tipos de viaje
  const travelTypes = [
    {
      icon: Globe,
      title: "Viajes internacionales",
      description: "Cobertura completa para destinos fuera de Colombia",
      features: ["Asistencia médica hasta USD $150,000", "Repatriación ilimitada", "Equipaje hasta USD $2,000"]
    },
    {
      icon: MapPin,
      title: "Viajes nacionales", 
      description: "Protección para tus destinos dentro del país",
      features: ["Asistencia médica $50,000,000 COP", "Traslados de emergencia", "Equipaje hasta $3,000,000 COP"]
    },
    {
      icon: Car,
      title: "Viajes de negocios",
      description: "Cobertura especializada para viajeros corporativos",
      features: ["Extensión por trabajo", "Equipos electrónicos", "Reuniones reprogramadas"]
    }
  ];

  // Beneficios adicionales
  const additionalBenefits = [
    "Asistencia odontológica de emergencia",
    "Adelanto de fianza penal",
    "Localización y envío de equipaje",
    "Gastos por demora de vuelo",
    "Asistencia jurídica en el extranjero",
    "Compensación por overbooking"
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
                Asistencia en <span className="text-avance-gold">Viaje</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl text-justify">
                Viaja con tranquilidad sabiendo que estás protegido ante cualquier imprevisto. 
                Nuestra asistencia en viaje te acompaña 24/7 dondequiera que vayas.
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/asistencia_viajes1.png" 
                alt="Asistencia en viaje" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Coberturas principales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              Nuestra asistencia en viaje te ofrece protección completa para que disfrutes tu viaje sin preocupaciones.
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

      {/* Travel Types Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">TIPOS DE VIAJE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Cobertura para cada tipo de viaje</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              Tenemos planes específicos adaptados a tus necesidades de viaje, ya sea por placer, negocios o emergencia.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {travelTypes.map((type, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-avance-blue rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <type.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-avance-blue mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-justify">{type.description}</p>
                </div>
                
                <div className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-avance-gold rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">BENEFICIOS ADICIONALES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Más que una simple cobertura</h2>
              <p className="text-gray-600 mb-8 text-justify">
                Nuestra asistencia en viaje incluye beneficios adicionales que hacen la diferencia en momentos críticos 
                durante tu viaje.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-gold mr-3">
                      <Shield size={16} />
                    </div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/asistencia_viajes2.png" 
                  alt="Beneficios de asistencia en viaje" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay con estadística */}
                <div className="absolute inset-0 bg-gradient-to-t from-avance-blue/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <div className="flex items-center mb-4">
                      <Clock className="mr-3 text-avance-gold" size={28} />
                      <span className="text-lg font-semibold">Asistencia disponible</span>
                    </div>
                    <div className="text-3xl font-bold text-avance-gold mb-2">
                      24/7
                    </div>
                    <p className="text-sm opacity-90">
                      En más de 150 países alrededor del mundo
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -top-4 -right-4 bg-avance-gold text-white px-6 py-3 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-medium">Desde</div>
                  <div className="text-xl font-bold">$35.000/día</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PROCESO SIMPLE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">¿Cómo funciona?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              Activar tu asistencia en viaje es muy fácil. Solo sigue estos pasos en caso de emergencia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Comunícate", description: "Llama a nuestra línea 24/7 desde cualquier parte del mundo" },
              { number: "02", title: "Identifícate", description: "Proporciona tu número de póliza y datos personales" },
              { number: "03", title: "Recibe asistencia", description: "Nuestro equipo coordina la ayuda que necesitas" },
              { number: "04", title: "Disfruta tranquilo", description: "Continúa tu viaje con la seguridad de estar protegido" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-avance-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-avance-blue mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 text-justify">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Viaja protegido desde tu próximo destino</h2>
            <p className="mb-8 text-white/90 text-justify">
              No dejes que los imprevistos arruinen tu viaje. Con nuestra asistencia en viaje tienes la tranquilidad 
              de contar con apoyo profesional las 24 horas del día.
            </p>
            <a 
              href="https://avance-seguros-cotizaciones.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-avance-gold hover:bg-avance-gold-light text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
            >
              Cotizar mi asistencia en viaje
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default TravelAssistanceInsurance;