
const InsurancePartners = () => {
  const partners = [
    { name: "Seguros Sura", logo: "/seguros-sura-logo.png" },
    { name: "Seguros Bolivar", logo: "/seguros-bolivar-logo.png" },
    { name: "Allianz", logo: "/allianz-logo.png" },
    { name: "Liberty Seguros", logo: "/liberty-seguros-logo.png" },
    { name: "Seguros Mundial", logo: "/seguros-mundial-logo.png" }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-avance-blue">
          Respaldados por las mejores aseguradoras
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
          Trabajamos con las compañías de seguros más reconocidas y confiables del mercado para ofrecerte las mejores opciones y coberturas según tus necesidades.
        </p>
      </div>
    </section>
  );
};

export default InsurancePartners;
