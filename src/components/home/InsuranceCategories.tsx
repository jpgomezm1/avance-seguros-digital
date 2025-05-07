
import { Link } from 'react-router-dom';
import { Car, Heart, House, User, Building, Handshake, Truck, Shield } from 'lucide-react';

const InsuranceCategories = () => {
  const personalInsurance = [
    { icon: Car, title: 'Automóvil', path: '/seguros/automovil', description: 'Protección completa para tu vehículo', color: 'bg-blue-50' },
    { icon: Heart, title: 'Salud', path: '/seguros/salud', description: 'Cuida de ti y tu familia', color: 'bg-red-50' },
    { icon: House, title: 'Hogar', path: '/seguros/hogar', description: 'Protección para tu patrimonio', color: 'bg-amber-50' },
    { icon: User, title: 'Vida', path: '/seguros/vida', description: 'Tranquilidad para ti y los tuyos', color: 'bg-green-50' },
  ];

  const businessInsurance = [
    { icon: Building, title: 'PYMES', path: '/seguros/pymes', description: 'Protección integral para tu negocio', color: 'bg-purple-50' },
    { icon: Handshake, title: 'Cumplimiento', path: '/seguros/cumplimiento', description: 'Garantía para tus contratos', color: 'bg-indigo-50' },
    { icon: Truck, title: 'Transporte', path: '/seguros/transporte', description: 'Seguridad para tus mercancías', color: 'bg-cyan-50' },
    { icon: Shield, title: 'ARL', path: '/seguros/arl', description: 'Protección laboral para tus empleados', color: 'bg-emerald-50' },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-avance-lightblue rounded-full opacity-70 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-avance-gold/10 rounded-full opacity-70 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-avance-gold font-semibold mb-3 inline-block">NUESTRAS SOLUCIONES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-avance-blue">Seguros diseñados para cada necesidad</h2>
          <p className="text-gray-600 text-lg">Ofrecemos una amplia gama de soluciones tanto para personas como para empresas, adaptadas a tus necesidades específicas y respaldadas por las mejores aseguradoras.</p>
        </div>

        {/* Personal Insurance */}
        <div className="mb-20">
          <h3 className="section-subtitle text-center mb-10 flex items-center justify-center">
            <span className="bg-avance-blue rounded-full w-2 h-2 mr-2"></span>
            Seguros para Personas
            <span className="bg-avance-blue rounded-full w-2 h-2 ml-2"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalInsurance.map((item, index) => (
              <div key={index} className="group relative">
                <div className={`${item.color} absolute inset-0 rounded-2xl transition-all duration-500 group-hover:scale-105`}></div>
                <div className="bg-white rounded-xl shadow-lg transition-all hover:shadow-xl p-8 text-center relative z-10 group-hover:-translate-y-2 duration-500 border border-gray-100 h-full flex flex-col">
                  <div className="insurance-icon mx-auto mb-6 bg-white">
                    <item.icon size={32} className="text-avance-blue" />
                  </div>
                  <h4 className="font-bold text-2xl mb-3 text-avance-blue">{item.title}</h4>
                  <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
                  <Link to={item.path} className="text-avance-blue font-medium hover:text-avance-gold transition-colors inline-flex items-center justify-center mt-auto">
                    Conocer más
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Insurance */}
        <div>
          <h3 className="section-subtitle text-center mb-10 flex items-center justify-center">
            <span className="bg-avance-blue rounded-full w-2 h-2 mr-2"></span>
            Seguros para Empresas
            <span className="bg-avance-blue rounded-full w-2 h-2 ml-2"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessInsurance.map((item, index) => (
              <div key={index} className="group relative">
                <div className={`${item.color} absolute inset-0 rounded-2xl transition-all duration-500 group-hover:scale-105`}></div>
                <div className="bg-white rounded-xl shadow-lg transition-all hover:shadow-xl p-8 text-center relative z-10 group-hover:-translate-y-2 duration-500 border border-gray-100 h-full flex flex-col">
                  <div className="insurance-icon mx-auto mb-6 bg-white">
                    <item.icon size={32} className="text-avance-blue" />
                  </div>
                  <h4 className="font-bold text-2xl mb-3 text-avance-blue">{item.title}</h4>
                  <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
                  <Link to={item.path} className="text-avance-blue font-medium hover:text-avance-gold transition-colors inline-flex items-center justify-center mt-auto">
                    Conocer más
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link to="/cotizar" className="inline-block bg-avance-blue hover:bg-opacity-90 text-white rounded-md px-8 py-4 font-semibold transition-all">
            Explorar todos nuestros seguros
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
