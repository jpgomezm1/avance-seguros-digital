
import { useState, useRef, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  insurance: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Ramírez",
      role: "Empresario",
      image: "/testimonial-1.jpg",
      quote: "Avance Seguros me ayudó a encontrar el paquete perfecto para mi empresa a un precio competitivo. Su servicio personalizado marcó la diferencia.",
      insurance: "Seguro para PYMES"
    },
    {
      id: 2,
      name: "Ana Martínez",
      role: "Médico",
      image: "/testimonial-2.jpg",
      quote: "Después de comparar varias opciones, Avance me ofreció el mejor seguro de automóvil con una cobertura completa y un precio inmejorable.",
      insurance: "Seguro de Automóvil"
    },
    {
      id: 3,
      name: "Luis Gómez",
      role: "Padre de familia",
      image: "/testimonial-3.jpg",
      quote: "La tranquilidad de tener a mi familia protegida con un seguro que realmente se ajusta a nuestras necesidades no tiene precio. Gracias Avance Seguros.",
      insurance: "Seguro de Vida"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
      8000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }

    if (touchEndX - touchStartX > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="py-16 bg-avance-gray">
      <div className="container-custom">
        <h2 className="section-title text-center">Clientes Satisfechos</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Estas son algunas de las experiencias de nuestros clientes que han confiado en Avance Seguros para proteger lo que más valoran.
        </p>

        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 flex-shrink-0">
                      <div className="rounded-full overflow-hidden h-32 w-32 mx-auto border-4 border-avance-lightblue">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <svg className="h-8 w-8 text-avance-gold mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-700 text-lg mb-6">{testimonial.quote}</p>
                      <div>
                        <h4 className="font-bold text-xl text-avance-blue">{testimonial.name}</h4>
                        <div className="flex items-center mt-2">
                          <span className="text-gray-600">{testimonial.role}</span>
                          <span className="mx-2">•</span>
                          <span className="text-avance-gold font-medium">{testimonial.insurance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-avance-blue' : 'bg-gray-300'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
