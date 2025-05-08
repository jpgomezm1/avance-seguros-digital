import React, { useState } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { useLocation } from 'react-router-dom';
import {
  Car,
  Heart,
  Home,
  User,
  Building2,
  FileCheck,
  Truck,
  Shield,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Lock,
  Phone,
  Mail,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

// Helper function to get query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const QuoteRequest = () => {
  const query = useQuery();
  const insuranceType = query.get('tipo') || 'automovil';

  // Form state
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: insuranceType,
    message: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  // Insurance options data
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

  // Find selected insurance
  const selectedInsurance = insuranceTypes.find(type => type.id === formState.insuranceType) || insuranceTypes[0];

  // Form handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step < totalSteps) {
      setStep(prev => prev + 1);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <BaseLayout>
      <section className="py-20 bg-gradient-to-b from-avance-blue to-avance-blue-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Solicitar cotización
              </h1>
              <p className="text-xl text-white/90">
                Completa el formulario y recibe una cotización personalizada según tus necesidades.
              </p>
            </div>

            {!isSubmitted ? (
              <div className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
                {/* Progress indicator */}
                <div className="bg-avance-lightblue p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-avance-blue font-medium">
                      {step === 1 ? 'Tipo de seguro' : step === 2 ? 'Información personal' : 'Detalles adicionales'}
                    </div>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: totalSteps }).map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 rounded-full transition-all ${index + 1 <= step ? 'bg-avance-gold w-8' : 'bg-gray-200 w-5'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form content */}
                <form onSubmit={handleSubmit} className="p-8">
                  {/* Step 1: Insurance Type */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-avance-blue mb-6">¿Qué tipo de seguro necesitas?</h2>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {insuranceTypes.map((type) => (
                          <label
                            key={type.id}
                            htmlFor={`insurance-${type.id}`}
                            className={`cursor-pointer flex flex-col items-center justify-center h-32 border p-4 rounded-xl transition-all ${
                              formState.insuranceType === type.id
                                ? 'border-avance-blue bg-avance-lightblue'
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
                              className={`mb-3 ${formState.insuranceType === type.id ? 'text-avance-blue' : 'text-gray-500'}`}
                              size={32}
                            />
                            <span className={`text-sm font-medium text-center ${formState.insuranceType === type.id ? 'text-avance-blue' : 'text-gray-700'}`}>
                              {type.name}
                            </span>
                            <span className={`text-xs text-center ${formState.insuranceType === type.id ? 'text-avance-blue/70' : 'text-gray-500'}`}>
                              {type.description}
                            </span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Personal Information */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-avance-blue mb-6">Tus datos de contacto</h2>

                      <div className="grid gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo*</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                              placeholder="Ingresa tu nombre completo"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico*</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                                placeholder="correo@ejemplo.com"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono*</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                                placeholder="Ej: 312 282 9850"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Details */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-avance-blue mb-6">Información adicional</h2>

                      <div>
                        <div className="bg-avance-lightblue p-4 rounded-lg mb-6">
                          <div className="flex items-center">
                            <selectedInsurance.icon className="text-avance-blue mr-3" size={24} />
                            <div>
                              <span className="text-avance-blue font-medium">Seguro seleccionado:</span>
                              <span className="ml-2">{selectedInsurance.name}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">¿Algún requisito específico o detalle que debamos considerar?</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                            placeholder="Cuéntanos sobre tus necesidades específicas..."
                          ></textarea>
                        </div>

                        <div className="mt-6 flex items-start">
                          <input
                            type="checkbox"
                            id="agreed"
                            name="agreed"
                            checked={formState.agreed}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-avance-blue"
                            required
                          />
                          <label htmlFor="agreed" className="ml-3 text-sm text-gray-600">
                            Acepto la <a href="/politica-privacidad" className="text-avance-blue hover:underline">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation buttons */}
                  <div className="mt-8 flex justify-between">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center"
                      >
                        <ArrowLeft className="mr-2" size={18} />
                        Anterior
                      </button>
                    ) : (
                      <div></div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-avance-blue text-white rounded-lg hover:bg-avance-blue-light transition-all flex items-center"
                    >
                      {isSubmitting ? 'Procesando...' : step < totalSteps ? 'Continuar' : 'Solicitar cotización'}
                      {!isSubmitting && <ArrowRight className="ml-2" size={18} />}
                    </button>
                  </div>

                  {/* Security indicators */}
                  <div className="mt-8 flex items-center justify-center text-gray-500 text-xs">
                    <Lock size={14} className="mr-1" />
                    <span>Conexión segura</span>
                    <span className="mx-2">•</span>
                    <span>Datos protegidos</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white text-gray-800 rounded-xl shadow-xl p-10 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-3xl font-bold text-avance-blue mb-4">¡Solicitud enviada correctamente!</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Gracias por tu interés en nuestros servicios. Uno de nuestros asesores se pondrá en contacto contigo en un plazo máximo de 24 horas para proporcionarte una cotización personalizada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/" className="px-6 py-3 bg-avance-blue text-white rounded-lg hover:bg-avance-blue-light transition-colors">
                    Volver al inicio
                  </a>
                  <button
                    onClick={() => {
                      setFormState({
                        name: '',
                        email: '',
                        phone: '',
                        insuranceType: 'automovil',
                        message: '',
                        agreed: false
                      });
                      setStep(1);
                      setIsSubmitted(false);
                    }}
                    className="px-6 py-3 border border-avance-blue text-avance-blue rounded-lg hover:bg-avance-lightblue transition-colors"
                  >
                    Solicitar otra cotización
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-avance-blue mb-6">¿Por qué elegir Avance Seguros?</h2>
              <p className="text-gray-600">
                En Avance Seguros te ofrecemos un servicio personalizado para encontrar la protección que realmente necesitas al mejor precio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-avance-lightblue p-6 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">Comparamos por ti</h3>
                <p className="text-gray-600">
                  Analizamos ofertas de múltiples aseguradoras para encontrar la mejor opción.
                </p>
              </div>

              <div className="text-center bg-avance-lightblue p-6 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">Asesoría personalizada</h3>
                <p className="text-gray-600">
                  Te acompañamos durante todo el proceso para resolver tus dudas.
                </p>
              </div>

              <div className="text-center bg-avance-lightblue p-6 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">Respaldo y confianza</h3>
                <p className="text-gray-600">
                  Trabajamos con las compañías aseguradoras más reconocidas del mercado.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-avance-blue text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda inmediata?</h3>
              <p className="mb-6">
                Si prefieres hablar directamente con uno de nuestros asesores, puedes contactarnos por teléfono o WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+573122829850"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-avance-blue rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="mr-2" size={18} />
                  (312) 282 98 50
                </a>
                <a
                  href="https://wa.me/573122829850"
                  className="inline-flex items-center justify-center px-6 py-3 bg-avance-gold text-white rounded-lg hover:bg-avance-gold-light transition-colors"
                >
                  Contactar por WhatsApp
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default QuoteRequest;
