import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { ArrowRight, ShieldCheck, Users, Building2, Car, Home, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CivilLiabilityInsurance = () => {
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
      title: "Daños a terceros", 
      description: "Cobertura por daños corporales o materiales que puedas causar involuntariamente a otras personas.",
      icon: Users
    },
    { 
      title: "Responsabilidad profesional", 
      description: "Protección ante errores u omisiones en el ejercicio de tu actividad profesional que causen perjuicios a clientes.",
      icon: Briefcase
    },
    { 
      title: "Responsabilidad patronal", 
      description: "Cobertura por accidentes laborales de empleados no cubiertos por ARL o por responsabilidad del empleador.",
      icon: Building2
    },
    { 
      title: "Responsabilidad por productos", 
      description: "Protección ante daños causados por productos defectuosos fabricados, vendidos o distribuidos por tu empresa.",
      icon: ShieldCheck
    },
    { 
      title: "Responsabilidad civil familiar", 
      description: "Cobertura por daños causados por ti, tu familia o empleados domésticos en la vida cotidiana.",
      icon: Home
    },
    { 
      title: "Responsabilidad civil automotriz", 
      description: "Protección extracontractual por daños a terceros que excedan los límites del SOAT.",
      icon: Car
    }
  ];

  // Professional activities
  const professionalActivities = [
    "Médicos y profesionales de la salud",
    "Abogados y consultores jurídicos",
    "Arquitectos e ingenieros",
    "Contadores y auditores",
    "Consultores y asesores",
    "Administradores de propiedades"
  ];

  // Coverage types
  const coverageTypes = [
    {
      type: "Responsabilidad Civil General",
      description: "Protección básica para personas naturales",
      features: ["Daños a terceros", "Responsabilidad familiar", "Cobertura nacional"],
      minAmount: "$50 millones",
      color: "bg-green-100 border-green-200 text-green-800"
    },
    {
      type: "Responsabilidad Profesional",
      description: "Para profesionales independientes",
      features: ["Errores profesionales", "Omisiones", "Defensa jurídica"],
      minAmount: "$100 millones",
      color: "bg-blue-100 border-blue-200 text-blue-800"
    },
    {
      type: "Responsabilidad Empresarial",
      description: "Cobertura integral para empresas",
      features: ["RC general", "RC patronal", "RC productos"],
      minAmount: "$200 millones",
      color: "bg-purple-100 border-purple-200 text-purple-800"
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
                Seguro de <span className="text-avance-gold">Responsabilidad Civil</span>
              </h1>
              <p className="text-lg mb-8 max-w-xl">
                Protégete ante cualquier eventualidad que pueda generar responsabilidades económicas por daños a terceros.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/cotizar?tipo=responsabilidad-civil" 
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
                src="https://storage.googleapis.com/cluvi/Imagenes/resp-civil.png" 
                alt="Responsabilidad Civil" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Cobertura completa de responsabilidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protégete ante cualquier situación que pueda generar responsabilidades civiles y económicas.
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

      {/* Coverage Types Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">TIPOS DE COBERTURA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Planes adaptados a tus necesidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos diferentes tipos de cobertura según tu perfil: personal, profesional o empresarial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${coverage.color}`}>
                  {coverage.type}
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">{coverage.description}</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Cobertura mínima desde:</p>
                  <p className="text-2xl font-bold text-avance-gold">{coverage.minAmount}</p>
                </div>
                <ul className="space-y-2">
                  {coverage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
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

      {/* Professional Activities Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">RESPONSABILIDAD PROFESIONAL</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Protección especializada por profesión</h2>
              <p className="text-gray-600 mb-8">
                Cada profesión tiene riesgos específicos. Te ofrecemos coberturas diseñadas especialmente para tu actividad profesional.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {professionalActivities.map((activity, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-gold mr-3">
                      <Briefcase size={16} />
                    </div>
                    <span className="text-gray-700">{activity}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/cotizar?tipo=responsabilidad-profesional" 
                  className="inline-flex items-center px-6 py-3 bg-avance-blue text-white rounded-lg font-medium hover:bg-avance-blue/90 transition-colors"
                >
                  Cotizar responsabilidad profesional
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://storage.googleapis.com/cluvi/Imagenes/resp-civil.png" 
                alt="Responsabilidad profesional" 
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
              Contamos con la experiencia y el respaldo necesario para protegerte ante cualquier eventualidad.
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
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Amplia cobertura</h3>
              <p className="text-sm text-gray-600">Desde $50 millones hasta $2.000 millones en sumas aseguradas.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Defensa jurídica</h3>
              <p className="text-sm text-gray-600">Incluye gastos de defensa jurídica y honorarios de abogados.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <Building2 size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Cobertura nacional</h3>
              <p className="text-sm text-gray-600">Protección válida en todo el territorio colombiano.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                <Briefcase size={28} />
              </div>
              <h3 className="text-lg font-semibold text-avance-blue mb-2">Asesoría especializada</h3>
              <p className="text-sm text-gray-600">Te ayudamos a elegir la cobertura adecuada para tu perfil.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Protege tu patrimonio y tranquilidad</h2>
            <p className="mb-8 text-white/90">
              No permitas que un accidente o error comprometa tu estabilidad económica. Con nuestro seguro de responsabilidad civil estarás protegido.
            </p>
            <Link 
              to="/cotizar?tipo=responsabilidad-civil" 
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

export default CivilLiabilityInsurance;