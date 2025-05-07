
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const benefits = [
    'Asesoría personalizada según tus necesidades',
    'Análisis comparativo de múltiples aseguradoras',
    'Más de 12 años de experiencia en el mercado',
    'Respaldo de las mejores compañías de seguros',
    'Acompañamiento durante todo el proceso de reclamación',
  ];

  return (
    <section className="py-16 bg-avance-lightblue">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-avance-blue font-semibold mb-2 inline-block">QUIÉNES SOMOS</span>
            <h2 className="section-title mb-6">Expertos en encontrar la mejor protección para ti</h2>
            <p className="text-gray-700 mb-8 text-lg">
              En Avance Seguros utilizamos la información y necesidades de nuestros clientes para obtener la mejor opción del mercado y establecer comparativos que brinden productos a la medida.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-avance-gold mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link to="/quienes-somos" className="btn-primary inline-block">
              Conócenos mejor
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-avance-gold rounded-full opacity-20"></div>
            <img 
              src="/about-insurance-team.jpg" 
              alt="Equipo Avance Seguros" 
              className="w-full h-auto rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-avance-blue rounded-full opacity-20"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg absolute -bottom-10 left-10 w-40 md:w-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-avance-blue">12+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
