import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, ShieldCheck, Heart, Stethoscope, UserCheck, Building2, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PetInsurance = () => {
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
      title: "Consultas veterinarias", 
      description: "Cobertura para consultas de rutina, chequeos preventivos y diagnósticos con veterinarios especializados.",
      icon: Stethoscope
    },
    { 
      title: "Emergencias médicas", 
      description: "Atención inmediata para accidentes, intoxicaciones, fracturas y situaciones de emergencia.",
      icon: Heart
    },
    { 
      title: "Cirugías y hospitalización", 
      description: "Cobertura completa para procedimientos quirúrgicos y estancia hospitalaria de tu mascota.",
      icon: UserCheck
    },
    { 
      title: "Tratamientos especializados", 
      description: "Acceso a especialistas en cardiología, dermatología, oftalmología y otras áreas veterinarias.",
      icon: Building2
    },
    { 
      title: "Medicamentos y vacunas", 
      description: "Cobertura para medicamentos recetados, vacunas obligatorias y tratamientos preventivos.",
      icon: ShieldCheck
    },
    { 
      title: "Responsabilidad civil", 
      description: "Protección ante daños que tu mascota pueda causar a terceros o sus propiedades.",
      icon: PawPrint
    }
  ];

  // Services
  const additionalServices = [
    "Telemedicina veterinaria 24/7",
    "Red de clínicas veterinarias afiliadas",
    "Asistencia para mascotas perdidas",
    "Asesoría nutricional especializada",
    "Servicio de cremación y funeral",
    "Descuentos en productos para mascotas"
  ];

  // Pet types
  const petTypes = [
    {
      type: "Perros",
      description: "Protección completa para tu mejor amigo",
      image: "🐕",
      features: ["Todas las razas", "Desde 2 meses", "Cobertura hasta 12 años"]
    },
    {
      type: "Gatos",
      description: "Cuidado especializado para felinos",
      image: "🐱",
      features: ["Razas mixtas y puras", "Desde 2 meses", "Cobertura hasta 10 años"]
    },
    {
      type: "Mascotas exóticas",
      description: "Atención especializada para especies especiales",
      image: "🐰",
      features: ["Conejos, aves, reptiles", "Veterinarios especializados", "Cobertura personalizada"]
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
                Seguro para <span className="text-avance-gold">Mascotas</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protege la salud y el bienestar de tu mascota con nuestro seguro integral. Porque ellos también son familia.
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/SEGUROS_Mascotas.webp" 
                alt="Seguro para mascotas" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Cuidado completo para tu mascota</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desde consultas de rutina hasta emergencias médicas, tenemos la cobertura que tu mascota necesita.
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

      {/* Pet Types Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">TIPOS DE MASCOTAS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Cobertura para todo tipo de mascotas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No importa qué tipo de mascota tengas, tenemos el plan perfecto para proteger su salud y bienestar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {petTypes.map((pet, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-6xl mb-4">{pet.image}</div>
                <h3 className="text-2xl font-semibold text-avance-blue mb-3">{pet.type}</h3>
                <p className="text-gray-600 mb-6">{pet.description}</p>
                <ul className="space-y-2">
                  {pet.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-gray-600">
                      <ShieldCheck size={16} className="text-avance-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">SERVICIOS ADICIONALES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Más que un seguro, un cuidado integral</h2>
              <p className="text-gray-600 mb-8">
                Además de la cobertura médica, ofrecemos servicios complementarios que hacen la diferencia en el cuidado de tu mascota.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-gold mr-3">
                      <PawPrint size={16} />
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
            >
              <img 
                src="https://storage.googleapis.com/cluvi/Imagenes/mascotas%20(2).png" 
                alt="Servicios adicionales para mascotas" 
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
              Somos especialistas en seguros para mascotas con años de experiencia cuidando a las familias colombianas.
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
                <Heart size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Sin restricciones de raza</h3>
              <p className="text-sm text-gray-600">Aceptamos todas las razas y tipos de mascotas sin discriminación.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Red veterinaria amplia</h3>
              <p className="text-sm text-gray-600">Más de 200 clínicas veterinarias afiliadas a nivel nacional.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Proceso ágil</h3>
              <p className="text-sm text-gray-600">Autorización rápida de procedimientos y reembolsos eficientes.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <UserCheck size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Atención 24/7</h3>
              <p className="text-sm text-gray-600">Línea de emergencias disponible las 24 horas del día.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dale a tu mascota el cuidado que merece</h2>
            <p className="mb-8 text-white/90">
              En Avance Seguros entendemos que tu mascota es parte de la familia. Por eso ofrecemos planes diseñados especialmente para su bienestar.
            </p>
            <a 
  href="https://avance-seguros-cotizaciones.netlify.app/" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-avance-gold hover:bg-avance-gold-light text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
>
  Proteger a mi mascota ahora
  <ArrowRight className="ml-2 h-5 w-5" />
</a>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PetInsurance;