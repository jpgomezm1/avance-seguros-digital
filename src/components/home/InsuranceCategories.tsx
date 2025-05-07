import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

// Importar todos los iconos de Lucide con el mismo tamaño
import { 
  Building2, FileCheck, Truck, ShieldCheck,
  Car, HeartPulse, Home, User
} from 'lucide-react';

const InsuranceCategories = () => {
  const [activeCategory, setActiveCategory] = useState('personal');
  const containerRef = useRef(null);
  
  // Paleta consistente con la identidad de Avance Seguros
  const colorScheme = {
    primary: {
      main: '#0A4958', // Azul Avance
      light: '#0a495814', // Versión transparente para fondos
      border: '#0a495833' // Versión para bordes
    },
    secondary: {
      main: '#C69C3F', // Dorado Avance
      light: '#c69c3f14', // Versión transparente para fondos
      border: '#c69c3f33' // Versión para bordes
    }
  };
  
  // Datos con colores e iconos consistentes
  const personalInsurance = [
    {
      icon: Car,
      title: 'Automóvil',
      path: '/seguros/automovil',
      description: 'Protección completa para tu vehículo',
      features: ['Responsabilidad civil', 'Daños a terceros', 'Asistencia en carretera'],
      borderColor: colorScheme.primary.main
    },
    {
      icon: HeartPulse,
      title: 'Salud',
      path: '/seguros/salud',
      description: 'Cuida de ti y tu familia',
      features: ['Cobertura hospitalaria', 'Consultas médicas', 'Medicamentos'],
      borderColor: colorScheme.primary.main
    },
    {
      icon: Home,
      title: 'Hogar',
      path: '/seguros/hogar',
      description: 'Protección para tu patrimonio',
      features: ['Incendio', 'Robo', 'Daños por agua'],
      borderColor: colorScheme.primary.main
    },
    {
      icon: User,
      title: 'Vida',
      path: '/seguros/vida',
      description: 'Tranquilidad para ti y los tuyos',
      features: ['Fallecimiento', 'Incapacidad', 'Enfermedades graves'],
      borderColor: colorScheme.primary.main
    },
  ];

  const businessInsurance = [
    {
      icon: Building2,
      title: 'PYMES',
      path: '/seguros/pymes',
      description: 'Protección integral para tu negocio',
      features: ['Multirriesgo empresarial', 'Pérdida de beneficios', 'RC patronal'],
      borderColor: colorScheme.primary.main
    },
    {
      icon: FileCheck,
      title: 'Cumplimiento',
      path: '/seguros/cumplimiento',
      description: 'Garantía para tus contratos',
      features: ['Anticipos', 'Estabilidad de obra', 'Seriedad de oferta'],
      borderColor: colorScheme.primary.main
    },
    {
      icon: Truck,
      title: 'Transporte',
      path: '/seguros/transporte',
      description: 'Seguridad para tus mercancías',
      features: ['Daños', 'Robo', 'Cobertura internacional'],
      borderColor: colorScheme.primary.main
    },
    {
      icon: ShieldCheck,
      title: 'ARL',
      path: '/seguros/arl',
      description: 'Protección laboral para tus empleados',
      features: ['Accidentes laborales', 'Enfermedades profesionales', 'Capacitaciones'],
      borderColor: colorScheme.primary.main
    },
  ];

  // Animaciones
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
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos sutiles con los colores de la marca */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0A4958] opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C69C3F] opacity-5 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#C69C3F] font-semibold mb-3 inline-block px-4 py-1 bg-[#c69c3f14] rounded-full text-sm">NUESTRAS SOLUCIONES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A4958]">Seguros diseñados para cada necesidad</h2>
          <p className="text-gray-600 text-lg">Ofrecemos una amplia gama de soluciones tanto para personas como para empresas, adaptadas a tus necesidades específicas y respaldadas por las mejores aseguradoras.</p>
        </motion.div>

        {/* Selector de tipo de seguro con colores de la marca */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#0a495814] p-1.5 rounded-xl inline-flex">
            <button 
              onClick={() => setActiveCategory('personal')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'personal' 
                  ? 'bg-white text-[#0A4958] shadow-md' 
                  : 'text-gray-600 hover:text-[#0A4958]'
              }`}
            >
              Seguros Personales
            </button>
            <button 
              onClick={() => setActiveCategory('business')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'business' 
                  ? 'bg-white text-[#0A4958] shadow-md' 
                  : 'text-gray-600 hover:text-[#0A4958]'
              }`}
            >
              Seguros Empresariales
            </button>
          </div>
        </div>

        {/* Contenedor de tarjetas */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {(activeCategory === 'personal' ? personalInsurance : businessInsurance).map((item, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-100 overflow-hidden">
                {/* Borde superior con color de la marca */}
                <div className="h-1 w-full bg-[#0A4958]"></div>
                
                <div className="p-6">
                  {/* Encabezado con ícono consistente */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0a495814] flex items-center justify-center">
                      <item.icon size={24} strokeWidth={1.75} className="text-[#0A4958]" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-[#0A4958]">{item.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {/* Lista de características */}
                  <ul className="mb-6 space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-[#C69C3F] mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Botón de acción con colores de la marca */}
                  <div className="mt-auto pt-4">
                    <Link 
                      to={item.path} 
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-white border border-[#0a495833] rounded-lg text-[#0A4958] font-medium hover:bg-[#0a495814] transition-all duration-300 group-hover:border-[#0A4958]"
                    >
                      Conocer más
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA con colores de la marca */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center p-10 rounded-2xl bg-[#0A4958] shadow-md relative overflow-hidden"
        >
          {/* Elementos decorativos del CTA */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-white opacity-5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white opacity-5 rounded-full blur-xl"></div>
          
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">¿Necesitas un seguro personalizado?</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Nuestros asesores expertos te ayudarán a encontrar la mejor opción que se adapte a tus necesidades específicas.
          </p>
          
          <Link 
            to="/cotizar" 
            className="inline-block bg-[#C69C3F] hover:bg-[#b38935] text-white rounded-lg px-8 py-4 font-medium transition-all shadow-md"
          >
            Explorar todos nuestros seguros
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceCategories;