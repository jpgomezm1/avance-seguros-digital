import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { CheckCircle, Users, Award, Clock, MapPin, PhoneCall, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Company values
  const values = [
    {
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la honestidad y transparencia con nuestros clientes.",
      icon: Users
    },
    {
      title: "Excelencia",
      description: "Buscamos la mejora continua para ofrecer un servicio de calidad superior.",
      icon: Award
    },
    {
      title: "Compromiso",
      description: "Nos dedicamos a encontrar las mejores soluciones adaptadas a las necesidades específicas de cada cliente.",
      icon: CheckCircle
    },
    {
      title: "Experiencia",
      description: "Más de 12 años en el mercado nos respaldan con conocimiento profundo del sector asegurador.",
      icon: Clock
    }
  ];

  // Team members
  const team = [
    {
      name: "Carlos Rodríguez",
      position: "Director General",
      image: "https://storage.googleapis.com/cluvi/Imagenes/persona1.png"
    },
    {
      name: "Ana Martínez",
      position: "Directora Comercial",
      image: "https://storage.googleapis.com/cluvi/Imagenes/mujer1.png"
    },
    {
      name: "Juan Pérez",
      position: "Asesor Senior",
      image: "https://storage.googleapis.com/cluvi/Imagenes/persona2.png"
    }
  ];

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="py-20 bg-avance-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Quiénes Somos
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Somos una agencia especializada en brokerage de seguros, dedicada a encontrar la mejor protección para ti y tu familia al mejor precio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">NUESTRA HISTORIA</span>
              <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-6">Una trayectoria dedicada a proteger lo que más valoras</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Fundada en 2010, Avance Seguros nació con la misión de transformar la manera en que las personas acceden a los seguros en Colombia. Nos dimos cuenta de que muchos clientes no encontraban opciones que realmente se adaptaran a sus necesidades específicas.
                </p>
                <p>
                  A lo largo de más de una década, hemos construido relaciones sólidas con las principales aseguradoras del mercado, lo que nos permite ofrecer condiciones preferenciales y un servicio personalizado que va más allá de simplemente vender pólizas.
                </p>
                <p>
                  Hoy somos un equipo de profesionales apasionados por brindar asesoría especializada, ayudando a nuestros clientes a tomar decisiones informadas sobre la protección de lo que más valoran.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://storage.googleapis.com/cluvi/Imagenes/about-us-team.png" 
                  alt="Equipo Avance Seguros" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-5 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-avance-blue">12+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-avance-gold">5000+</div>
                    <div className="text-sm text-gray-600">Clientes satisfechos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-avance-lightblue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">NUESTROS VALORES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Los principios que nos guían</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos valores son el corazón de nuestra filosofía de trabajo y definen cada interacción con nuestros clientes.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-avance-blue/10 rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-avance-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-avance-blue/10 text-avance-blue font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">NUESTRO EQUIPO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-avance-blue mb-4">Profesionales comprometidos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con un equipo de expertos dedicados a brindarte el mejor servicio y asesoría en seguros.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-5 relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-avance-lightblue">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-avance-blue">{member.name}</h3>
                <p className="text-avance-gold">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-avance-blue text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/10 text-white font-semibold mb-4 px-4 py-1.5 rounded-full text-sm">CONTÁCTANOS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes preguntas? Estamos para ayudarte</h2>
              <p className="mb-8 text-white/90">
                Nuestro equipo está listo para brindarte la asesoría que necesitas. No dudes en contactarnos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneCall className="text-avance-gold mr-3" size={20} />
                  <span>(312) 282 98 50</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-avance-gold mr-3" size={20} />
                  <span>contacto@avanceseguros.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-avance-gold mr-3 mt-1" size={20} />
                  <span>Medellín, Colombia</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">Solicita información</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nombre completo" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-avance-gold"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-avance-gold"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-avance-gold"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mensaje" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-avance-gold"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-avance-gold hover:bg-avance-gold-light text-white rounded-lg px-6 py-3 font-medium transition-colors flex items-center justify-center"
                  >
                    Enviar mensaje
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default AboutUs;