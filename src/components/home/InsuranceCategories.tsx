
import { Link } from 'react-router-dom';
import { Car, Heart, House, User, Building, Handshake, Truck, Shield } from 'lucide-react';

const InsuranceCategories = () => {
  const personalInsurance = [
    { icon: Car, title: 'Automóvil', path: '/seguros/automovil', description: 'Protección completa para tu vehículo' },
    { icon: Heart, title: 'Salud', path: '/seguros/salud', description: 'Cuida de ti y tu familia' },
    { icon: House, title: 'Hogar', path: '/seguros/hogar', description: 'Protección para tu patrimonio' },
    { icon: User, title: 'Vida', path: '/seguros/vida', description: 'Tranquilidad para ti y los tuyos' },
  ];

  const businessInsurance = [
    { icon: Building, title: 'PYMES', path: '/seguros/pymes', description: 'Protección integral para tu negocio' },
    { icon: Handshake, title: 'Cumplimiento', path: '/seguros/cumplimiento', description: 'Garantía para tus contratos' },
    { icon: Truck, title: 'Transporte', path: '/seguros/transporte', description: 'Seguridad para tus mercancías' },
    { icon: Shield, title: 'ARL', path: '/seguros/arl', description: 'Protección laboral para tus empleados' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Nuestras Soluciones de Seguros</h2>

        {/* Personal Insurance */}
        <div className="mb-16">
          <h3 className="section-subtitle text-center mb-8 flex items-center justify-center">
            <span className="bg-avance-blue rounded-full w-2 h-2 mr-2"></span>
            Seguros para Personas
            <span className="bg-avance-blue rounded-full w-2 h-2 ml-2"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalInsurance.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg transition-all hover:shadow-xl p-6 text-center hover:-translate-y-1 duration-300">
                <div className="insurance-icon">
                  <item.icon size={36} className="text-avance-blue" />
                </div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link to={item.path} className="text-avance-blue font-medium hover:underline inline-flex items-center">
                  Conocer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Business Insurance */}
        <div>
          <h3 className="section-subtitle text-center mb-8 flex items-center justify-center">
            <span className="bg-avance-blue rounded-full w-2 h-2 mr-2"></span>
            Seguros para Empresas
            <span className="bg-avance-blue rounded-full w-2 h-2 ml-2"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessInsurance.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg transition-all hover:shadow-xl p-6 text-center hover:-translate-y-1 duration-300">
                <div className="insurance-icon">
                  <item.icon size={36} className="text-avance-blue" />
                </div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link to={item.path} className="text-avance-blue font-medium hover:underline inline-flex items-center">
                  Conocer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
