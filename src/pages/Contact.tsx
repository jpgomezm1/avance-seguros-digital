import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const offices = [
    {
      city: "Medellín",
      address: "Calle 10 #30-50, Edificio Plaza, Of. 402",
      phone: "(312) 282 98 50",
      email: "medellin@avanceseguros.com",
      hours: "Lunes a Viernes: 8:00 AM - 5:00 PM"
    },
    {
      city: "Bogotá",
      address: "Carrera 15 #85-20, Torre Empresarial, Of. 301",
      phone: "(302) 345 67 89",
      email: "bogota@avanceseguros.com",
      hours: "Lunes a Viernes: 8:00 AM - 5:00 PM"
    }
  ];

  // Message sent state
  const [messageSent, setMessageSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending a message
    setTimeout(() => {
      setMessageSent(true);
    }, 1000);
  };

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-avance-blue to-avance-blue-dark text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Estamos para ayudarte con todas tus necesidades de protección. Contáctanos y recibe asesoría personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">CONTÁCTANOS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Estamos aquí para ayudarte</h2>
              <p className="text-gray-600 mb-8">
                Puedes comunicarte con nosotros a través de cualquiera de los siguientes canales o completar el formulario para que un asesor te contacte.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-blue flex-shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-avance-blue text-lg">Teléfono</h3>
                    <p className="text-gray-600">(312) 282 98 50</p>
                    <p className="text-gray-600">(034) 444 49 16</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-blue flex-shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-avance-blue text-lg">Correo electrónico</h3>
                    <p className="text-gray-600">contacto@avanceseguros.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-blue flex-shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-avance-blue text-lg">Horario de atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 12:00 PM</p>
                    </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-avance-lightblue rounded-full flex items-center justify-center text-avance-blue flex-shrink-0 mt-1">
                    <MessageSquare size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-avance-blue text-lg">Chat en línea</h3>
                    <p className="text-gray-600">Disponible en horario de oficina</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-avance-lightblue p-6 rounded-xl">
                <h3 className="font-semibold text-avance-blue text-lg mb-3">¿Prefieres una visita presencial?</h3>
                <p className="text-gray-600 mb-4">
                  Te invitamos a visitar nuestras oficinas donde un asesor te atenderá personalmente.
                </p>
                <button className="text-avance-blue font-medium flex items-center">
                  Ver ubicación en mapa
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                {!messageSent ? (
                  <>
                    <h3 className="text-2xl font-bold text-avance-blue mb-6">Envíanos un mensaje</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                          <input 
                            type="text" 
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                          <input 
                            type="email" 
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                          <input 
                            type="tel" 
                            id="phone"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                          <select 
                            id="subject"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent bg-white"
                          >
                            <option value="">Seleccionar...</option>
                            <option value="cotizacion">Solicitar cotización</option>
                            <option value="informacion">Información general</option>
                            <option value="reclamacion">Proceso de reclamación</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                        <textarea 
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-start">
                        <input 
                          type="checkbox" 
                          id="privacy"
                          className="mt-1"
                          required
                        />
                        <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                          Acepto la <a href="/politica-privacidad" className="text-avance-blue hover:underline">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales
                        </label>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-avance-blue hover:bg-avance-blue-light text-white rounded-lg px-6 py-3 font-medium transition-colors flex items-center justify-center"
                      >
                        Enviar mensaje
                        <ArrowRight className="ml-2" size={18} />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-avance-blue mb-4">¡Mensaje enviado!</h3>
                    <p className="text-gray-600 mb-6">
                      Gracias por contactarnos. Un asesor se comunicará contigo a la brevedad posible.
                    </p>
                    <button 
                      onClick={() => setMessageSent(false)} 
                      className="bg-avance-blue hover:bg-avance-blue-light text-white rounded-lg px-6 py-3 font-medium transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">NUESTRAS OFICINAS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Visítanos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con oficinas en las principales ciudades de Colombia para brindarte una atención personalizada.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-avance-blue mb-4">{office.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-avance-gold mt-1 mr-3" size={20} />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-avance-gold mt-1 mr-3" size={20} />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-avance-gold mt-1 mr-3" size={20} />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-avance-gold mt-1 mr-3" size={20} />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="text-avance-blue font-medium flex items-center">
                    Ver en mapa
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-avance-blue p-8 md:p-12 rounded-2xl shadow-lg text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Prefieres que te llamemos?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              Déjanos tu número y un asesor se comunicará contigo a la brevedad para brindarte toda la información que necesitas.
            </p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="tel" 
                placeholder="Tu número de teléfono" 
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-avance-gold"
              />
              <button className="bg-avance-gold hover:bg-avance-gold-light text-white rounded-r-lg px-6 py-3 font-medium">
                Solicitar llamada
              </button>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Contact;