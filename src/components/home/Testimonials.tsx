import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Shield, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  insurance: string;
  rating: number;
  year: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Ramírez",
      role: "Empresario",
      image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/Fotos%20de%20perfil_B.webp",
      quote: "Avance Seguros me ayudó a encontrar el paquete perfecto para mi empresa a un precio competitivo. Su servicio personalizado marcó la diferencia. Siempre están disponibles para resolver cualquier duda.",
      insurance: "Seguro para PYMES",
      rating: 5,
      year: "2020"
    },
    {
      id: 2,
      name: "Ana Martínez",
      role: "Médico",
      image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/Fotos%20de%20perfil_A.webp",
      quote: "Después de comparar varias opciones, Avance me ofreció el mejor seguro de automóvil con una cobertura completa y un precio inmejorable. El proceso fue rápido y la atención excepcional.",
      insurance: "Seguro de Automóvil",
      rating: 5,
      year: "2021"
    },
    {
      id: 3,
      name: "Luis Gómez",
      role: "Padre de familia",
      image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Web_Images/Fotos%20de%20perfil_B.webp",
      quote: "La tranquilidad de tener a mi familia protegida con un seguro que realmente se ajusta a nuestras necesidades no tiene precio. Gracias Avance Seguros por su excelente asesoría y seguimiento.",
      insurance: "Seguro de Vida",
      rating: 5,
      year: "2022"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timeoutRef = useRef<number | null>(null);
  const animationDuration = 500; // animation duration in ms

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => {
        if (!isAnimating) {
          setDirection(1);
          goToNextSlide();
        }
      },
      8000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isAnimating]);

  const goToTestimonial = (index: number) => {
    if (isAnimating) return;
    
    setDirection(index > currentIndex ? 1 : -1);
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  const goToNextSlide = () => {
    if (isAnimating) return;
    setDirection(1);
    goToTestimonial((currentIndex + 1) % testimonials.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setDirection(-1);
    goToTestimonial(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (isAnimating) return;
    
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      setDirection(1);
      goToNextSlide();
    }

    if (touchEndX - touchStartX > 50) {
      // Swipe right
      setDirection(-1);
      goToPrevSlide();
    }
  };

  // Variantes para animaciones
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f5f9fa] relative overflow-hidden">
      {/* Elementos decorativos mejorados */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl">
        <div className="text-[#0a495814] text-[180px] font-bold leading-none text-center font-montserrat">
          OPINIONES
        </div>
      </div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border-[30px] border-[#c69c3f14] opacity-60"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border-[30px] border-[#0a495814] opacity-60"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#C69C3F] font-semibold mb-3 inline-block px-4 py-1 bg-[#c69c3f14] rounded-full text-sm">TESTIMONIOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A4958]">Lo que nuestros clientes dicen</h2>
          <p className="text-gray-600 text-lg">
            Descubre por qué miles de colombianos confían en nosotros para proteger lo que más valoran.
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navegación mejorada */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-[#0A4958] text-[#0A4958] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A4958] focus:ring-opacity-50"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-[#0A4958] text-[#0A4958] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A4958] focus:ring-opacity-50"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Contenedor de tarjetas con efecto de transición mejorado */}
          <div className="relative overflow-hidden min-h-[580px] md:min-h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.5 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full"
              >
                <div className="px-4">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Barra decorativa superior */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-[#0A4958] to-[#C69C3F]"></div>
                    
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Columna de perfil mejorada */}
                        <div className="md:w-1/3 flex-shrink-0">
                          <div className="relative">
                            {/* Imagen de perfil con marco mejorado */}
                            <div className="w-44 h-44 mx-auto overflow-hidden rounded-xl border-4 border-white shadow-xl relative z-10">
                              <img 
                                src={testimonials[currentIndex].image} 
                                alt={testimonials[currentIndex].name}
                                className="w-full h-full object-cover"
                              />
                              {/* Overlay sutil */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0A4958]/20 to-transparent"></div>
                            </div>
                            
                            {/* Elemento decorativo de fondo */}
                            <div className="absolute top-3 left-3 w-44 h-44 bg-[#C69C3F]/20 rounded-xl -z-10 transform -rotate-6"></div>
                            
                            {/* Badge mejorado */}

                          </div>
                          
                          <div className="text-center mt-6">
                            <h4 className="font-bold text-xl text-[#0A4958]">{testimonials[currentIndex].name}</h4>
                            <p className="text-gray-600 flex items-center justify-center gap-1.5">
                              <User size={14} />
                              <span>{testimonials[currentIndex].role}</span>
                            </p>
                            
                            {/* Estrellas de calificación mejoradas */}
                            <div className="flex items-center justify-center mt-3 space-x-1">
                              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <Star key={i} size={18} className="fill-[#C69C3F] text-[#C69C3F]" />
                              ))}
                            </div>
                            
                            {/* Año como cliente */}
                            <div className="mt-3 flex items-center justify-center text-xs text-gray-500">
                              <Calendar size={14} className="mr-1" />
                              <span>Cliente desde {testimonials[currentIndex].year}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Columna de testimonio mejorada */}
                        <div className="md:w-2/3">
                          <div className="relative">
                            {/* Comillas decorativas mejoradas */}
                            <Quote className="h-12 w-12 text-[#C69C3F]/15 absolute -top-2 -left-2" />
                            
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed relative z-10 pl-3 md:pl-7">
                              "{testimonials[currentIndex].quote}"
                            </p>
                          </div>
                          
                          <div className="flex justify-between items-center mt-8 border-t border-gray-100 pt-4">
                            {/* Tipo de seguro con icono */}
                            <span className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0a495814] text-[#0A4958] text-sm font-medium">
                              <Shield size={16} className="mr-2" />
                              {testimonials[currentIndex].insurance}
                            </span>
                            
                            {/* Número de testimonio / total */}
                            <span className="text-sm bg-[#c69c3f14] text-[#C69C3F] px-3 py-1 rounded-full font-medium">
                              {currentIndex + 1} / {testimonials.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicadores de navegación mejorados */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-[#0A4958] w-10' 
                  : 'bg-gray-300 w-2.5 hover:bg-gray-400'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
        
        {/* CTA mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border-2 border-[#0A4958] text-[#0A4958] hover:bg-[#0A4958] hover:text-white rounded-lg font-medium transition-all duration-300 group"
          >
            <span>Ver todas las opiniones</span>
            <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;