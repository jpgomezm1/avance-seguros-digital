
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const benefits = [
    'Asesoría personalizada según tus necesidades',
    'Análisis comparativo de múltiples aseguradoras',
    'Más de 12 años de experiencia en el mercado',
    'Respaldo de las mejores compañías de seguros',
    'Acompañamiento durante todo el proceso de reclamación',
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-avance-lightblue to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full border-[40px] border-avance-gold/5"></div>
      <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full border-[30px] border-avance-blue/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-avance-blue font-semibold mb-3 inline-block">NUESTRA HISTORIA</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-avance-blue leading-tight">
              Expertos en encontrar la <span className="text-avance-gold">mejor protección</span> para ti
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              En Avance Seguros utilizamos la información y necesidades de nuestros clientes para obtener la mejor opción del mercado y establecer comparativos que brinden productos verdaderamente personalizados.
            </p>
            
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group">
                  <CheckCircle className="text-avance-gold mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={22} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link to="/quienes-somos" className="inline-flex items-center group font-semibold text-avance-blue hover:text-avance-gold transition-colors">
              <span>Conocer más sobre nosotros</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {/* Decorative circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-avance-gold rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-avance-blue rounded-full opacity-10"></div>
            
            {/* Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="/about-insurance-team.jpg" 
                alt="Equipo Avance Seguros" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Stats card */}
            <div className="bg-white p-6 rounded-xl shadow-xl absolute -bottom-10 left-10 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-avance-blue">12+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-avance-blue">8+</div>
                  <div className="text-sm text-gray-600">Aseguradoras aliadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
