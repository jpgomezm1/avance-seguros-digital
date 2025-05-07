
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  insurance: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Ramírez",
      role: "Empresario",
      image: "/testimonial-1.jpg",
      quote: "Avance Seguros me ayudó a encontrar el paquete perfecto para mi empresa a un precio competitivo. Su servicio personalizado marcó la diferencia. Siempre están disponibles para resolver cualquier duda.",
      insurance: "Seguro para PYMES",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Martínez",
      role: "Médico",
      image: "/testimonial-2.jpg",
      quote: "Después de comparar varias opciones, Avance me ofreció el mejor seguro de automóvil con una cobertura completa y un precio inmejorable. El proceso fue rápido y la atención excepcional.",
      insurance: "Seguro de Automóvil",
      rating: 5
    },
    {
      id: 3,
      name: "Luis Gómez",
      role: "Padre de familia",
      image: "/testimonial-3.jpg",
      quote: "La tranquilidad de tener a mi familia protegida con un seguro que realmente se ajusta a nuestras necesidades no tiene precio. Gracias Avance Seguros por su excelente asesoría y seguimiento.",
      insurance: "Seguro de Vida",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  const goToNextSlide = () => {
    if (isAnimating) return;
    goToTestimonial((currentIndex + 1) % testimonials.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
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
      goToNextSlide();
    }

    if (touchEndX - touchStartX > 50) {
      // Swipe right
      goToPrevSlide();
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-avance-gray relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl">
        <div className="text-avance-blue/5 text-[180px] font-bold leading-none text-center font-montserrat">
          OPINIONES
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-avance-gold font-semibold mb-3 inline-block">TESTIMONIOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-avance-blue">Lo que nuestros clientes dicen</h2>
          <p className="text-gray-600 text-lg">
            Descubre por qué miles de colombianos confían en nosotros para proteger lo que más valoran.
          </p>
        </div>

        <div 
          className="relative overflow-hidden max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation arrows */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-lg text-avance-blue hover:text-avance-gold transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-lg text-avance-blue hover:text-avance-gold transition-colors"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonial slider */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 flex-shrink-0">
                      <div className="relative">
                        <div className="w-40 h-40 mx-auto overflow-hidden rounded-2xl border-4 border-avance-lightblue shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-avance-gold text-white text-xs px-3 py-1 rounded-full">
                          Cliente verificado
                        </div>
                      </div>
                      
                      <div className="text-center mt-5">
                        <h4 className="font-bold text-xl text-avance-blue">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                        
                        <div className="flex items-center justify-center mt-2 space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-avance-gold text-avance-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="relative">
                        <svg className="h-10 w-10 text-avance-gold/20 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed relative z-10">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-avance-lightblue text-avance-blue text-sm font-medium">
                          {testimonial.insurance}
                        </span>
                        <span className="text-sm text-gray-500">
                          Desde 2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 w-12 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-avance-blue w-12' 
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block border border-avance-blue text-avance-blue hover:bg-avance-blue hover:text-white rounded-md px-8 py-3 font-medium transition-all">
            Ver todas las opiniones
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
