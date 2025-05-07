
import { motion } from 'framer-motion';

const InsurancePartners = () => {
  const partners = [
    { name: "Seguros Sura", logo: "/seguros-sura-logo.png" },
    { name: "Seguros Bolivar", logo: "/seguros-bolivar-logo.png" },
    { name: "Allianz", logo: "/allianz-logo.png" },
    { name: "Liberty Seguros", logo: "/liberty-seguros-logo.png" },
    { name: "Seguros Mundial", logo: "/seguros-mundial-logo.png" }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-avance-gray/20 to-white"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-avance-gold font-semibold mb-3 inline-block">NUESTROS ALIADOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-avance-blue">
            Respaldados por las mejores aseguradoras
          </h2>
          <p className="text-gray-600 text-lg">
            Trabajamos con las compañías de seguros más reconocidas y confiables de Colombia para ofrecerte las mejores coberturas y beneficios.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl shadow-sm p-10 border border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-20 w-48 transition-all duration-300 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-full max-h-16 object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110" 
                  />
                </div>
                <p className="text-center mt-3 text-gray-500 text-sm group-hover:text-avance-blue transition-colors">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-avance-lightblue/60 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-xl text-avance-blue mb-3">¿Por qué es importante?</h3>
            <p className="text-gray-700">
              Al trabajar con múltiples aseguradoras, podemos comparar diferentes opciones y encontrar el plan que mejor se adapte a tus necesidades específicas y presupuesto. Esto nos permite ofrecerte la cobertura ideal al mejor precio posible.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">¿Listo para proteger lo que más valoras?</p>
          <a href="/cotizar" className="btn-primary inline-block">
            Solicitar asesoría ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
