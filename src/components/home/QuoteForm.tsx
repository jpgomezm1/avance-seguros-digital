import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { 
  Car, Heart, Home, User, Building2, FileCheck, Truck, Shield, 
  ArrowRight, CheckCircle, Phone, Mail, CalendarClock, Lock
} from 'lucide-react';
import { motion } from 'framer-motion';

const QuoteForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: 'automovil',
    message: '',
    agreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const insuranceTypes = [
    { id: 'automovil', name: 'Automóvil', icon: Car, description: 'Para tu vehículo' },
    { id: 'salud', name: 'Salud', icon: Heart, description: 'Para ti y tu familia' },
    { id: 'hogar', name: 'Hogar', icon: Home, description: 'Para tu vivienda' },
    { id: 'vida', name: 'Vida', icon: User, description: 'Protección futuro' },
    { id: 'pymes', name: 'PYMES', icon: Building2, description: 'Para tu negocio' },
    { id: 'cumplimiento', name: 'Cumplimiento', icon: FileCheck, description: 'Para contratos' },
    { id: 'transporte', name: 'Transporte', icon: Truck, description: 'Para tus mercancías' },
    { id: 'arl', name: 'ARL', icon: Shield, description: 'Riesgos laborales' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (step < totalSteps) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulación de envío
    try {
      // Aquí se implementaría la lógica para enviar el formulario
      console.log('Form submitted:', formState);
      
      // Simulamos un pequeño retraso
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
        agreed: false
      });
      
      setStep(1);
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
      {/* Fondo con patrón sutil y gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A4958] to-[#0A4958]/90"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>
      
      {/* Elementos decorativos modernos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#C69C3F] opacity-10 rounded-bl-full transform rotate-6"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-5 rounded-tr-full transform -rotate-6"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-[#C69C3F]/10 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Columna izquierda - Formulario */}
            <div className="lg:col-span-7 p-8 lg:p-12">
              <div className="max-w-lg mx-auto">
                {/* Encabezado con indicador de pasos */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A4958]">Obtén tu cotización gratuita</h2>
                    <div className="hidden sm:flex items-center space-x-1">
                      {Array.from({ length: totalSteps }).map((_, index) => (
                        <div 
                          key={index} 
                          className={`h-2 w-8 rounded-full transition-all ${
                            index + 1 <= step ? 'bg-[#C69C3F]' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {step === 1 ? 
                      'Selecciona el tipo de seguro que necesitas para comenzar.' : 
                      'Completa tus datos para recibir una cotización personalizada.'}
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Paso 1: Selección de seguro */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-gray-700 mb-4 font-medium">Tipo de seguro*</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {insuranceTypes.map((type) => (
                          <label 
                            key={type.id} 
                            htmlFor={`insurance-${type.id}`}
                            className={`cursor-pointer flex flex-col items-center justify-center h-28 border p-4 rounded-xl transition-all ${
                              formState.insuranceType === type.id 
                                ? 'border-[#0A4958] bg-[#0a495810] ring-2 ring-[#0A4958] shadow-md' 
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
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
                            <type.icon 
                              className={`mb-2 ${formState.insuranceType === type.id ? 'text-[#0A4958]' : 'text-gray-500'}`} 
                              size={28} 
                            />
                            <span className={`text-sm font-medium text-center ${formState.insuranceType === type.id ? 'text-[#0A4958]' : 'text-gray-700'}`}>
                              {type.name}
                            </span>
                            <span className={`text-xs text-center ${formState.insuranceType === type.id ? 'text-[#0A4958]/70' : 'text-gray-500'}`}>
                              {type.description}
                            </span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Paso 2: Información personal */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nombre completo*</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4958] focus:border-transparent transition-all"
                            placeholder="Ingresa tu nombre completo"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Correo electrónico*</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4958] focus:border-transparent transition-all"
                              placeholder="correo@ejemplo.com"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Teléfono*</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4958] focus:border-transparent transition-all"
                              placeholder="Ej: 312 282 9850"
                              required
                            />
                          </div>
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A4958] focus:border-transparent transition-all"
                          placeholder="Cuéntanos más sobre lo que necesitas..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agreed"
                          name="agreed"
                          checked={formState.agreed as boolean}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 text-[#0A4958] border-gray-300 rounded focus:ring-[#0A4958]"
                          required
                        />
                        <label htmlFor="agreed" className="ml-3 text-sm text-gray-600">
                          Acepto la <a href="/politica-privacidad" className="text-[#0A4958] hover:underline">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales
                        </label>
                      </div>
                    </motion.div>
                  )}

                  {/* Botones de navegación */}
                  <div className="flex items-center justify-between mt-8">
                    {step > 1 && (
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center"
                      >
                        <ArrowRight className="mr-2 rotate-180" size={18} />
                        Anterior
                      </button>
                    )}
                    
                    <button 
                      type="submit" 
                      className={`relative overflow-hidden group bg-gradient-to-r from-[#C69C3F] to-[#d4a93f] text-white rounded-lg px-8 py-3 font-semibold transition-all flex items-center justify-center shadow-md hover:shadow-lg ${step === 1 ? 'ml-auto' : 'flex-1 ml-4'}`}
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? 'Enviando...' : step < totalSteps ? 'Continuar' : 'Solicitar cotización gratuita'}
                        {!isSubmitting && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />}
                      </span>
                      <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                  </div>
                  
                  {/* Indicadores de seguridad */}
                  <div className="flex items-center justify-center space-x-2 mt-8 text-xs text-gray-500">
                    <Lock size={14} />
                    <span>Conexión segura</span>
                    <span>•</span>
                    <span>Datos protegidos</span>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Columna derecha - Beneficios */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0A4958] to-[#0A4958]/90 text-white p-8 lg:p-12 relative overflow-hidden">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C69C3F] opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">¿Por qué elegir Avance Seguros?</h3>
                <p className="text-white/90 text-lg mb-10">
                  Te ofrecemos la mejor asesoría para que encuentres el seguro que realmente necesitas, al mejor precio posible.
                </p>
                
                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <CheckCircle className="text-[#C69C3F]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Cotizaciones personalizadas</h4>
                      <p className="text-white/80">Analizamos tu situación específica para encontrar exactamente lo que necesitas.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <CheckCircle className="text-[#C69C3F]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Comparamos múltiples opciones</h4>
                      <p className="text-white/80">No te limitamos a una sola aseguradora, encontramos la mejor entre todas las opciones.</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="bg-white/10 p-2 rounded-full mr-4">
                      <CalendarClock className="text-[#C69C3F]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Respuesta garantizada</h4>
                      <p className="text-white/80">Te contactaremos en menos de 24 horas con opciones adaptadas a tus necesidades.</p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-14 bg-white/10 rounded-xl p-6 border border-white/20 relative overflow-hidden backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {/* Comillas decorativas */}
                  <div className="absolute -top-4 -left-4 text-[#C69C3F]/20 text-8xl font-serif">"</div>
                  
                  <p className="italic text-white/90 mb-4 relative z-10">
                    Avance Seguros nos ayudó a encontrar un seguro que realmente se adaptaba a nuestras necesidades y presupuesto. Su asesoría fue invaluable.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden">
                      <img src="https://storage.googleapis.com/cluvi/Imagenes/persona1.png" alt="Cliente satisfecho" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold">Carlos Ramírez</div>
                      <div className="text-sm text-white/80">Cliente desde 2019</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Logos de aseguradoras */}
                <div className="mt-10">
                  <p className="text-sm text-white/70 mb-4">Respaldados por las mejores aseguradoras:</p>
                  <div className="flex flex-wrap gap-3">
                    {["Sura", "Bolivar", "Allianz", "Liberty", "Mundial"].map((company) => (
                      <div key={company} className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-xs">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;