
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Car, Heart, House, User, Building, Handshake, Truck, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: 'automovil',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const insuranceTypes = [
    { id: 'automovil', name: 'Seguro de Automóvil', icon: Car },
    { id: 'salud', name: 'Seguro de Salud', icon: Heart },
    { id: 'hogar', name: 'Seguro de Hogar', icon: House },
    { id: 'vida', name: 'Seguro de Vida', icon: User },
    { id: 'pymes', name: 'Seguro para PYMES', icon: Building },
    { id: 'cumplimiento', name: 'Seguro de Cumplimiento', icon: Handshake },
    { id: 'transporte', name: 'Seguro de Transporte', icon: Truck },
    { id: 'arl', name: 'ARL', icon: Shield },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    try {
      // Aquí se implementaría la lógica para enviar el formulario
      console.log('Form submitted:', formState);
      
      // Simulamos un pequeño retraso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Solicitud recibida!",
        description: "Un asesor especializado se pondrá en contacto contigo en menos de 24 horas.",
        duration: 5000,
      });
      
      setFormState({
        name: '',
        email: '',
        phone: '',
        insuranceType: 'automovil',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Ha ocurrido un error. Por favor intenta nuevamente.",
        variant: "destructive",
        duration: 5000,
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-avance-blue to-avance-blue/80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-avance-gold opacity-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-5 rounded-tr-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-avance-blue">Obtén tu cotización gratuita</h2>
              <p className="text-gray-600 mb-8">Completa el formulario y un asesor especializado te contactará con las mejores opciones del mercado.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nombre completo*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent transition-all"
                    placeholder="Ingresa tu nombre completo"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Correo electrónico*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent transition-all"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Teléfono*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent transition-all"
                      placeholder="Ej: 312 282 9850"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="insuranceType" className="block text-gray-700 mb-4 font-medium">Tipo de seguro*</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {insuranceTypes.map((type) => (
                      <label 
                        key={type.id} 
                        htmlFor={`insurance-${type.id}`}
                        className={`cursor-pointer flex flex-col items-center justify-center border p-4 rounded-lg transition-all ${
                          formState.insuranceType === type.id 
                            ? 'border-avance-blue bg-avance-lightblue ring-2 ring-avance-blue shadow-md' 
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          id={`insurance-${type.id}`}
                          name="insuranceType"
                          value={type.id}
                          checked={formState.insuranceType === type.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <type.icon className={`mb-2 ${formState.insuranceType === type.id ? 'text-avance-blue' : 'text-gray-500'}`} size={24} />
                        <span className={`text-sm text-center ${formState.insuranceType === type.id ? 'text-avance-blue font-medium' : 'text-gray-700'}`}>
                          {type.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Mensaje (opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent transition-all"
                    placeholder="Cuéntanos más sobre lo que necesitas..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="relative overflow-hidden group bg-avance-gold hover:bg-opacity-90 text-white rounded-lg w-full py-4 font-semibold transition-all flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? 'Enviando...' : 'Solicitar cotización gratuita'}
                    {!isSubmitting && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />}
                  </span>
                  <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <a href="/politica-privacidad" className="text-avance-blue hover:underline">Política de Privacidad</a>
                </p>
              </form>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="bg-gradient-to-br from-avance-blue to-avance-blue/80 text-white p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-avance-gold opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">¿Por qué elegir Avance Seguros?</h3>
                <p className="text-white/90 text-lg mb-8">
                  Te ofrecemos la mejor asesoría para que encuentres el seguro que realmente necesitas, al mejor precio posible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <CheckCircle className="text-avance-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Cotizaciones personalizadas</h4>
                      <p className="text-white/80">Analizamos tu situación específica para encontrar exactamente lo que necesitas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <CheckCircle className="text-avance-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Comparamos múltiples opciones</h4>
                      <p className="text-white/80">No te limitamos a una sola aseguradora, encontramos la mejor entre todas las opciones.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <CheckCircle className="text-avance-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Respuesta garantizada</h4>
                      <p className="text-white/80">Te contactaremos en menos de 24 horas con opciones adaptadas a tus necesidades.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <CheckCircle className="text-avance-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Acompañamiento completo</h4>
                      <p className="text-white/80">Te apoyamos durante todo el proceso, desde la cotización hasta las reclamaciones.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-white/10 rounded-xl p-5 border border-white/20">
                  <p className="italic text-white/90 mb-4">
                    "Avance Seguros nos ayudó a encontrar un seguro que realmente se adaptaba a nuestras necesidades y presupuesto. Su asesoría fue invaluable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden">
                      <img src="/testimonial-1.jpg" alt="Cliente satisfecho" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold">Carlos Ramírez</div>
                      <div className="text-sm text-white/80">Cliente desde 2019</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
