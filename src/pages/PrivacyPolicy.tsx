import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  // Last updated date
  const lastUpdated = "15 abril, 2025";

  return (
    <BaseLayout>
      {/* Header Section */}
      <section className="bg-avance-blue py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-lg text-white/90">
              Última actualización: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-avance-lightblue rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-avance-blue mb-4">Contenido</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#introduccion" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Introducción
                    </a>
                  </li>
                  <li>
                    <a href="#recopilacion" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Recopilación de datos
                    </a>
                  </li>
                  <li>
                    <a href="#uso" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Uso de la información
                    </a>
                  </li>
                  <li>
                    <a href="#comparticion" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Compartición de datos
                    </a>
                  </li>
                  <li>
                    <a href="#seguridad" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Seguridad de los datos
                    </a>
                  </li>
                  <li>
                    <a href="#derechos" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Derechos del usuario
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Política de cookies
                    </a>
                  </li>
                  <li>
                    <a href="#modificaciones" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Modificaciones
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <section id="introduccion" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Introducción</h2>
                  </div>
                  <p>
                    En Avance Seguros, valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos la información personal que obtenemos a través de nuestro sitio web, aplicaciones móviles, y durante la prestación de nuestros servicios de corretaje de seguros.
                  </p>
                  <p>
                    Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política. Le recomendamos leer detenidamente este documento para comprender nuestro compromiso con la protección de sus datos personales y cómo puede ejercer sus derechos.
                  </p>
                </section>
                
                <section id="recopilacion" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Recopilación de datos</h2>
                  </div>
                  <p>
                    Recopilamos información personal que usted nos proporciona directamente al:
                  </p>
                  <ul>
                    <li>Solicitar cotizaciones o información sobre nuestros servicios</li>
                    <li>Crear una cuenta en nuestro sitio web o aplicación móvil</li>
                    <li>Contratar alguno de nuestros servicios</li>
                    <li>Comunicarse con nuestro equipo de atención al cliente</li>
                    <li>Suscribirse a nuestros boletines o actualizaciones</li>
                    <li>Participar en encuestas, concursos o promociones</li>
                  </ul>
                  <p>
                    Los tipos de información personal que podemos recopilar incluyen:
                  </p>
                  <ul>
                    <li>Nombre completo y datos de contacto (correo electrónico, número de teléfono, dirección)</li>
                    <li>Fecha de nacimiento e información de identificación</li>
                    <li>Información financiera necesaria para la contratación de seguros</li>
                    <li>Historial de siniestros y reclamaciones previas</li>
                    <li>Información sobre los bienes o personas a asegurar</li>
                  </ul>
                  <p>
                    También recopilamos automáticamente cierta información cuando visita nuestro sitio web o utiliza nuestra aplicación, como su dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y otros datos de uso.
                  </p>
                </section>
                
                <section id="uso" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Uso de la información</h2>
                  </div>
                  <p>
                    Utilizamos la información personal recopilada para:
                  </p>
                  <ul>
                    <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                    <li>Procesar solicitudes de cotización y contratación de seguros</li>
                    <li>Gestionar su cuenta y las comunicaciones relacionadas con ella</li>
                    <li>Brindar asistencia técnica y atención al cliente</li>
                    <li>Personalizar su experiencia y ofrecerle contenido relevante</li>
                    <li>Enviarle actualizaciones, alertas y comunicaciones promocionales (si ha dado su consentimiento)</li>
                    <li>Cumplir con nuestras obligaciones legales y regulatorias</li>
                    <li>Prevenir fraudes y proteger nuestros servicios</li>
                    <li>Realizar análisis y estudios para mejorar nuestros productos</li>
                  </ul>
                </section>
                
                <section id="comparticion" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Compartición de datos</h2>
                  </div>
                  <p>
                    Podemos compartir su información personal con:
                  </p>
                  <ul>
                    <li>Compañías aseguradoras para la gestión de cotizaciones y pólizas</li>
                    <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                    <li>Autoridades gubernamentales cuando sea requerido por ley</li>
                    <li>Socios comerciales con quienes ofrecemos productos o servicios conjuntos (siempre con su consentimiento)</li>
                  </ul>
                  <p>
                    No vendemos ni alquilamos su información personal a terceros con fines de marketing. Cualquier tercero con quien compartimos su información está obligado contractualmente a mantener la confidencialidad y seguridad de sus datos.
                  </p>
                </section>
                
                <section id="seguridad" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <Lock className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Seguridad de los datos</h2>
                  </div>
                  <p>
                    Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger su información personal contra acceso no autorizado, pérdida, alteración o destrucción. Estas medidas incluyen:
                  </p>
                  <ul>
                    <li>Encriptación de datos sensibles</li>
                    <li>Firewalls y sistemas de detección de intrusiones</li>
                    <li>Acceso restringido a la información personal</li>
                    <li>Monitoreo regular de nuestros sistemas para detectar vulnerabilidades</li>
                    <li>Capacitación del personal en prácticas de seguridad de datos</li>
                  </ul>
                  <p>
                    Sin embargo, ningún sistema de seguridad es completamente infalible. No podemos garantizar la seguridad absoluta de su información, pero nos comprometemos a notificarle sin demora indebida en caso de una brecha de seguridad que pudiera afectar sus datos personales.
                  </p>
                </section>
                
                <section id="derechos" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <Shield className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Derechos del usuario</h2>
                  </div>
                  <p>
                    De acuerdo con la legislación aplicable, usted tiene derecho a:
                  </p>
                  <ul>
                    <li>Acceder a su información personal que poseemos</li>
                    <li>Solicitar la rectificación de datos inexactos</li>
                    <li>Solicitar la eliminación de sus datos en determinadas circunstancias</li>
                    <li>Limitar u oponerse al procesamiento de sus datos</li>
                    <li>Solicitar la portabilidad de sus datos</li>
                    <li>Retirar su consentimiento en cualquier momento (cuando el procesamiento se base en su consentimiento)</li>
                  </ul>
                  <p>
                    Para ejercer estos derechos, contacte con nuestro Delegado de Protección de Datos a través del correo electrónico: privacidad@avanceseguros.com.
                  </p>
                </section>
                
                {/* Continuing with more sections */}
                <section id="cookies" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Política de cookies</h2>
                  </div>
                  <p>
                    Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia, analizar el tráfico y personalizar el contenido. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador o mediante nuestro banner de cookies al visitar nuestro sitio por primera vez.
                  </p>
                  <p>
                    Para más información sobre cómo utilizamos las cookies, consulte nuestra <a href="/politica-cookies" className="text-avance-blue hover:text-avance-gold">Política de Cookies</a>.
                  </p>
                </section>
                
                <section id="modificaciones" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Modificaciones a esta política</h2>
                  </div>
                  <p>
                    Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas de información o en la legislación aplicable. Le notificaremos sobre cualquier cambio material publicando la nueva versión en nuestro sitio web y, cuando sea legalmente necesario, le enviaremos una notificación directa.
                  </p>
                  <p>
                    La fecha de "última actualización" al principio de esta política indica cuándo fue revisada por última vez. Le recomendamos revisar periódicamente esta página para estar informado sobre cómo protegemos su información.
                  </p>
                </section>
                
                <section id="contacto" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Contacto</h2>
                  </div>
                  <p>
                    Si tiene preguntas, comentarios o inquietudes sobre esta Política de Privacidad o sobre nuestras prácticas relacionadas con sus datos personales, no dude en contactarnos:
                  </p>
                  <div className="bg-avance-lightblue p-4 rounded-lg mt-4">
                    <p className="font-medium">Avance Seguros</p>
                    <p>Atención: Delegado de Protección de Datos</p>
                    <p>Dirección: Calle 10 #30-50, Edificio Plaza, Of. 402, Medellín, Colombia</p>
                    <p>Correo electrónico: privacidad@avanceseguros.com</p>
                    <p>Teléfono: (312) 282 98 50</p>
                  </div>
                  <p className="mt-4">
                    También puede presentar una reclamación ante la autoridad de protección de datos correspondiente si considera que el procesamiento de su información personal infringe la legislación aplicable.
                  </p>
                </section>
              </div>
              
              {/* Final CTA */}
              <div className="bg-avance-lightblue p-6 rounded-xl mt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-avance-blue mb-2">¿Tienes alguna pregunta?</h3>
                    <p className="text-gray-600">Nuestro equipo está disponible para aclarar cualquier duda.</p>
                  </div>
                  <Link 
                    to="/contacto" 
                    className="mt-4 sm:mt-0 bg-avance-blue hover:bg-avance-blue-light text-white rounded-lg px-6 py-3 font-medium inline-flex items-center"
                  >
                    Contáctanos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PrivacyPolicy;