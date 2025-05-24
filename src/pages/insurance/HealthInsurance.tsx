import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, Heart, HeartPulse, Stethoscope, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HealthInsurance = () => {
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
      title: "Hospitalización", 
      description: "Cobertura de gastos médicos por hospitalización, incluyendo habitación, atención médica y medicamentos.",
      icon: Building
    },
    { 
      title: "Consultas médicas", 
      description: "Acceso a consultas con médicos generales y especialistas con copagos reducidos.",
      icon: Stethoscope
    },
    { 
      title: "Atención de emergencias", 
      description: "Servicio de urgencias 24/7 con transporte de ambulancia incluido.",
      icon: HeartPulse
    },
    { 
      title: "Cobertura familiar", 
      description: "Protección extendida para todos los miembros de tu familia bajo una misma póliza.",
      icon: Users
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "¿Cuál es el período de carencia?",
      answer: "El período de carencia varía según la cobertura, desde 30 días para atención básica hasta 10 meses para maternidad. Consulta con nuestros asesores para detalles específicos según el plan."
    },
    {
      question: "¿Cubre enfermedades preexistentes?",
      answer: "Dependiendo del plan y la aseguradora, algunas enfermedades preexistentes pueden ser cubiertas después de un período de carencia. Realizamos un estudio personalizado para ofrecerte las mejores opciones."
    },
    {
      question: "¿Tiene cobertura internacional?",
      answer: "Sí, ofrecemos planes con cobertura internacional para viajes, así como planes especializados para residentes en el exterior o personas que viajan frecuentemente."
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
                Seguro de <span className="text-avance-gold">Salud</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protege lo más importante: tu salud y la de tu familia. Diseñamos planes personalizados que se adaptan a tus necesidades específicas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=salud" 
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
                src="https://storage.googleapis.com/cluvi/Imagenes/health.png" 
                alt="Seguro de salud" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Coberturas principales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestras pólizas de salud te brindan acceso a la mejor atención médica cuando más lo necesitas.
            </p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PREGUNTAS FRECUENTES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Resolvemos tus dudas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros seguros de salud.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-avance-blue mb-3 flex items-center">
                  <Heart className="mr-2 text-avance-gold" size={20} />
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-avance-blue p-8 md:p-12 rounded-2xl shadow-lg text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Tu salud merece la mejor protección</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              En Avance Seguros te ayudamos a encontrar el plan de salud que mejor se adapte a tus necesidades y presupuesto.
            </p>
            <Link 
              to="/cotizar?tipo=salud" 
              className="bg-avance-gold hover:bg-avance-gold-light text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
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

export default HealthInsurance;