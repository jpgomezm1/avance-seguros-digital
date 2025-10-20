import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Briefcase, Shield, Award } from 'lucide-react';

const InsurancePartners = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  const [activePartner, setActivePartner] = useState(0);
  
  const partners = [
    {
      name: "Seguros Sura",
      logo: "https://storage.googleapis.com/cluvi/Imagenes/logo_sura.jpg",
      desc: "Líder en innovación con soluciones digitales que simplifican la gestión de seguros.",
      color: "#00529B"
    },
    {
      name: "Seguros Bolivar",
      logo: "https://storage.googleapis.com/cluvi/Imagenes/logo_bolivar.jpg",
      desc: "Más de 70 años de experiencia respaldando a las familias y empresas colombianas.",
      color: "#e4002b"
    },
    {
      name: "Allianz",
      logo: "https://storage.googleapis.com/cluvi/Imagenes/logo_allianz.jpg",
      desc: "Presencia global con soluciones locales adaptadas al mercado colombiano.",
      color: "#003781"
    },
    {
      name: "HDI Seguros",
      logo: "https://storage.googleapis.com/cluvi/Web_Avance/logo_hdi.webp",
      desc: "Respaldo internacional con coberturas innovadoras y atención especializada.",
      color: "#005AA0"
    },
    {
      name: "Seguros Mundial",
      logo: "https://storage.googleapis.com/cluvi/Imagenes/logo_mundial.jpg",
      desc: "Soluciones especializadas para empresas y personas.",
      color: "#5D2967"
    },
    {
      name: "SBS Seguros",
      logo: "https://storage.googleapis.com/cluvi/Web_Avance/logo_sbs.webp",
      desc: "Soluciones integrales de seguros con amplia cobertura y atención personalizada.",
      color: "#E30613"
    },
    {
      name: "Coomeva",
      logo: "https://storage.googleapis.com/cluvi/Web_Avance/logo_coomeva.png",
      desc: "Experiencia cooperativa brindando protección y bienestar a las familias colombianas.",
      color: "#00A859"
    },
    {
      name: "Seguros Solidaria",
      logo: "https://storage.googleapis.com/cluvi/Web_Avance/logo_solidaria.png",
      desc: "Compromiso social con seguros accesibles y coberturas diseñadas para todos.",
      color: "#F15A29"
    }
  ];
  
  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#F7FAFB]">
      {/* Línea decorativa */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#0A4958]/20 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Encabezado con efecto de paralaje */}
        <motion.div 
          style={{ y, opacity }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A4958] text-white font-medium mb-4 px-6 py-2 rounded-full"
          >
            ALIANZAS ESTRATÉGICAS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0A4958] to-[#0A4958]/80"
          >
            Un respaldo que marca la diferencia
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl"
          >
            No solo estamos asociados con estas compañías, hemos construido relaciones sólidas que nos permiten ofrecerte beneficios exclusivos.
          </motion.p>
        </motion.div>
        
        {/* Sección principal estilo showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Logos interactivos */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-8">
                <h3 className="text-[#0A4958] font-bold text-2xl mb-4">Nuestros aliados</h3>
                <p className="text-gray-600 mb-8">Selecciona una aseguradora para conocer por qué la elegimos como parte de nuestro portafolio.</p>
              </div>
              
              <div className="border-t border-gray-100">
                {partners.map((partner, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePartner(index)}
                    className={`w-full p-4 flex items-center justify-between transition-all ${
                      activePartner === index 
                        ? 'bg-gradient-to-r from-[#0A4958]/10 to-transparent border-l-4 border-[#0A4958]' 
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className={`h-full w-full object-contain ${activePartner !== index && 'grayscale opacity-70'}`} 
                        />
                      </div>
                      <span className={`ml-4 font-medium ${activePartner === index ? 'text-[#0A4958]' : 'text-gray-700'}`}>
                        {partner.name}
                      </span>
                    </div>
                    {activePartner === index && (
                      <ArrowRight className="text-[#0A4958]" size={18} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Detalles del partner seleccionado */}
          <div className="lg:col-span-8">
            <motion.div 
              key={activePartner}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden h-full border border-gray-200"
            >
              <div className="h-3" style={{ backgroundColor: partners[activePartner].color }}></div>
              <div className="p-10 flex flex-col h-full">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-8">
                  <div className="w-40 h-20 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <img 
                      src={partners[activePartner].logo} 
                      alt={partners[activePartner].name}
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0A4958] mb-2">{partners[activePartner].name}</h3>
                    <p className="text-lg text-gray-600">{partners[activePartner].desc}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center">
                    <Shield className="text-[#0A4958] mb-3" size={24} />
                    <h4 className="font-bold text-gray-800 mb-2">Coberturas Exclusivas</h4>
                    <p className="text-gray-600 text-sm">Beneficios adicionales que solo obtendrás a través de Avance Seguros</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center">
                    <Briefcase className="text-[#0A4958] mb-3" size={24} />
                    <h4 className="font-bold text-gray-800 mb-2">Atención Prioritaria</h4>
                    <p className="text-gray-600 text-sm">Canal directo para gestión rápida de reclamaciones y consultas</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center">
                    <Award className="text-[#0A4958] mb-3" size={24} />
                    <h4 className="font-bold text-gray-800 mb-2">Precios Competitivos</h4>
                    <p className="text-gray-600 text-sm">Tarifas especiales negociadas con cada compañía aseguradora</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="border-t border-gray-100 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-gray-600">
                      <span className="text-[#0A4958] font-medium">Aliados desde 2010</span> | Más de {new Date().getFullYear() - 2010} años trabajando juntos
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Sección final de llamado a la acción */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#0A4958] to-[#0A4958]/90 rounded-3xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-40 -top-40 w-80 h-80 bg-[#C69C3F]/20 blur-3xl rounded-full"></div>
              <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-[#C69C3F]/20 blur-3xl rounded-full"></div>
            </div>
            
            <div className="relative z-10 p-10 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Lo mejor de cada aseguradora, en un solo lugar</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Nuestra independencia nos permite ofrecerte lo mejor de cada compañía, adaptado a tus necesidades específicas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://avance-seguros-cotizaciones.netlify.app/" 
                  target="_blank"
  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#C69C3F] hover:bg-[#C69C3F]/90 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  Solicitar cotización
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="/contacto" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-lg font-medium transition-all"
                >
                  Hablar con un asesor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;