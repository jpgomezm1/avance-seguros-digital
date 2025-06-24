import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, HeartPulse, User, Clock, Users, ShieldCheck, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LifeInsurance = () => {
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
      title: "Seguro de vida", 
      description: "Protección económica para tus seres queridos en caso de fallecimiento.",
      icon: User
    },
    { 
      title: "Incapacidad total y permanente", 
      description: "Cobertura en caso de que no puedas seguir trabajando por una discapacidad.",
      icon: HeartPulse
    },
    { 
      title: "Enfermedades graves", 
      description: "Indemnización si eres diagnosticado con una enfermedad grave cubierta por la póliza.",
      icon: ShieldCheck
    },
    { 
      title: "Renta por hospitalización", 
      description: "Compensación diaria durante tu estancia hospitalaria.",
      icon: DollarSign
    }
  ];

  // Life stages
  const lifeStages = [
    {
      title: "Jóvenes adultos",
      description: "Ideal si estás comenzando tu vida profesional o tienes deudas como préstamos estudiantiles.",
      icon: User
    },
    {
      title: "Parejas y familias",
      description: "Protección para tu familia y respaldo financiero ante imprevistos en la etapa de crianza.",
      icon: Users
    },
    {
      title: "Pre-jubilación",
      description: "Asegura un legado para tus seres queridos y cobertura para gastos médicos importantes.",
      icon: Clock
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
                Seguro de <span className="text-avance-gold">Vida</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Asegura la tranquilidad financiera de los que más quieres, incluso cuando ya no estés presente para cuidarlos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=vida" 
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
                src="https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/SEGUROS_Vida.webp" 
                alt="Seguro de vida" 
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
              Nuestros seguros de vida te ofrecen protección integral para ti y respaldo financiero para tu familia.
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

      {/* Life Stages Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PROTECCIÓN EN CADA ETAPA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Seguros adaptados a tu momento de vida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada etapa de la vida tiene necesidades de protección únicas. Te ayudamos a encontrar el seguro que mejor se adapte a tu situación actual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {lifeStages.map((stage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-avance-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <stage.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">{stage.title}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">PREGUNTAS FRECUENTES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Resolvemos tus dudas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre los seguros de vida.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-avance-lightblue p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-avance-blue mb-2 flex items-center">
                  <ArrowRight className="mr-2 text-avance-gold" size={18} />
                  ¿A qué edad debo contratar un seguro de vida?
                </h3>
                <p className="text-gray-600">
                  El momento ideal es cuando tienes personas que dependen económicamente de ti. Mientras más joven contrates tu seguro, las primas suelen ser más económicas y tienes menos probabilidad de tener condiciones preexistentes.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-avance-lightblue p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-avance-blue mb-2 flex items-center">
                  <ArrowRight className="mr-2 text-avance-gold" size={18} />
                  ¿Qué monto de cobertura necesito?
                </h3>
                <p className="text-gray-600">
                  Depende de tus circunstancias personales. Generalmente, se recomienda una cobertura de 5 a 10 veces tu ingreso anual, más cualquier deuda pendiente y gastos futuros importantes como educación de los hijos.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-avance-lightblue p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-avance-blue mb-2 flex items-center">
                  <ArrowRight className="mr-2 text-avance-gold" size={18} />
                  ¿Los seguros de vida cubren enfermedades terminales?
                </h3>
                <p className="text-gray-600">
                  Muchas pólizas incluyen beneficios por diagnóstico de enfermedades terminales, que te permiten recibir parte del beneficio por muerte anticipadamente para cubrir gastos médicos y mejorar tu calidad de vida.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protege a los que más amas</h2>
            <p className="mb-8 text-white/90">
              Un seguro de vida es más que una póliza, es una muestra de amor hacia tu familia. Asegura su bienestar financiero incluso cuando ya no estés.
            </p>
            <Link 
              to="/cotizar?tipo=vida" 
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

export default LifeInsurance;