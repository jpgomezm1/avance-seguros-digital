
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: 'automovil',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aquí se implementaría la lógica para enviar el formulario
    console.log('Form submitted:', formState);
    
    toast({
      title: "Solicitud recibida",
      description: "Un asesor se pondrá en contacto contigo pronto.",
      duration: 5000,
    });
    
    setFormState({
      name: '',
      email: '',
      phone: '',
      insuranceType: 'automovil',
      message: '',
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-avance-blue rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para asegurar lo que más valoras?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Déjanos tus datos y un asesor especializado te contactará para brindarte una cotización personalizada sin costo.
              </p>
              
              <div className="bg-avance-blue/40 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-avance-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Cotizaciones sin compromiso
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-avance-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Comparamos múltiples aseguradoras
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-avance-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Asesoría personalizada
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-avance-gold mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Respuesta rápida garantizada
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-avance-blue">Solicita tu cotización gratuita</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nombre completo*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-avance-blue"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-avance-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-avance-blue"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="insuranceType" className="block text-gray-700 mb-2">Tipo de seguro*</label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formState.insuranceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-avance-blue"
                    required
                  >
                    <option value="automovil">Seguro de Automóvil</option>
                    <option value="salud">Seguro de Salud</option>
                    <option value="hogar">Seguro de Hogar</option>
                    <option value="vida">Seguro de Vida</option>
                    <option value="pymes">Seguro para PYMES</option>
                    <option value="cumplimiento">Seguro de Cumplimiento</option>
                    <option value="transporte">Seguro de Transporte</option>
                    <option value="arl">ARL</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje (opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-avance-blue"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-secondary w-full py-4"
                >
                  Solicitar cotización gratuita
                </button>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <a href="/politica-privacidad" className="text-avance-blue hover:underline">Política de Privacidad</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
