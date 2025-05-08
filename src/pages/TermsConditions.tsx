import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Scale, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
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
                    <a href="#definiciones" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Definiciones
                    </a>
                  </li>
                  <li>
                    <a href="#servicios" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Servicios ofrecidos
                    </a>
                  </li>
                  <li>
                    <a href="#uso" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Uso del sitio web
                    </a>
                  </li>
                  <li>
                    <a href="#propiedad" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Propiedad intelectual
                    </a>
                  </li>
                  <li>
                    <a href="#limitaciones" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Limitaciones de responsabilidad
                    </a>
                  </li>
                  <li>
                    <a href="#legislacion" className="text-gray-700 hover:text-avance-blue transition-colors flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      Legislación aplicable
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
                    Bienvenido a Avance Seguros. Estos Términos y Condiciones rigen el uso de nuestro sitio web ubicado en www.avanceseguros.com, así como cualquier otro sitio web relacionado, aplicaciones móviles, y servicios ofrecidos por Avance Seguros (colectivamente, los "Servicios").
                  </p>
                  <p>
                    Al acceder o utilizar nuestros Servicios, usted acepta estar legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros Servicios.
                  </p>
                </section>
                
                <section id="definiciones" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Definiciones</h2>
                  </div>
                  <p>
                    Para facilitar la comprensión de estos Términos y Condiciones, se establecen las siguientes definiciones:
                  </p>
                  <ul>
                    <li><strong>Usuario:</strong> Cualquier persona que acceda, navegue o utilice nuestros Servicios.</li>
                    <li><strong>Cliente:</strong> Usuario que contrata alguno de nuestros servicios de intermediación de seguros.</li>
                    <li><strong>Contenido:</strong> Textos, gráficos, imágenes, música, software, audio, vídeo, información u otros materiales que se encuentran en nuestros Servicios.</li>
                    <li><strong>Aseguradora:</strong> Compañía de seguros con la que Avance Seguros tiene acuerdos de colaboración para ofrecer productos de seguros.</li>
                  </ul>
                </section>
                
                <section id="servicios" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Servicios ofrecidos</h2>
                  </div>
                  <p>
                    Avance Seguros actúa como intermediario de seguros, ofreciendo los siguientes servicios:
                  </p>
                  <ul>
                    <li>Asesoramiento personalizado sobre productos de seguros</li>
                    <li>Comparación de ofertas de diferentes aseguradoras</li>
                    <li>Gestión de la contratación de pólizas de seguros</li>
                    <li>Asistencia en la gestión de siniestros</li>
                    <li>Renovación y actualización de pólizas</li>
                  </ul>
                  <p>
                    Estos servicios se prestan de conformidad con la legislación colombiana aplicable a la intermediación de seguros. Avance Seguros no es una compañía aseguradora, sino un corredor de seguros autorizado.
                  </p>
                </section>
                
                <section id="uso" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Uso del sitio web</h2>
                  </div>
                  <p>
                    Al utilizar nuestro sitio web y servicios, usted se compromete a:
                  </p>
                  <ul>
                    <li>Proporcionar información veraz, precisa, actual y completa cuando se le solicite</li>
                    <li>Mantener y actualizar prontamente su información para mantenerla veraz, precisa, actual y completa</li>
                    <li>No utilizar nuestros Servicios con fines ilegales o no autorizados</li>
                    <li>No interferir o interrumpir la integridad o el rendimiento de nuestros Servicios</li>
                    <li>No intentar obtener acceso no autorizado a nuestros sistemas o redes</li>
                    <li>No copiar, modificar, distribuir, vender o alquilar ninguna parte de nuestros Servicios sin autorización</li>
                  </ul>
                  <p>
                    Nos reservamos el derecho a suspender o terminar su acceso a nuestros Servicios si viola cualquiera de estos términos o si realiza cualquier actividad que consideremos perjudicial para otros usuarios, para nuestra empresa o para terceros.
                  </p>
                </section>
                
                <section id="propiedad" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Propiedad intelectual</h2>
                  </div>
                  <p>
                    Todo el contenido presente en nuestros Servicios, incluyendo, pero no limitado a, textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Avance Seguros o de sus proveedores de contenido y está protegido por leyes de propiedad intelectual colombianas e internacionales.
                  </p>
                  <p>
                    No se permite la reproducción, distribución, modificación, visualización pública, ejecución pública, republicación, descarga, almacenamiento o transmisión de cualquier material de nuestros Servicios sin el consentimiento previo por escrito de Avance Seguros.
                  </p>
                </section>
                
                <section id="limitaciones" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <AlertTriangle className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Limitaciones de responsabilidad</h2>
                  </div>
                  <p>
                    Avance Seguros se esfuerza por proporcionar información precisa y actualizada. Sin embargo, no garantiza que:
                  </p>
                  <ul>
                    <li>La información en nuestros Servicios sea completa, precisa, actualizada o libre de errores</li>
                    <li>Nuestros Servicios estén disponibles ininterrumpidamente, sean seguros, o estén libres de errores</li>
                    <li>Los resultados obtenidos del uso de nuestros Servicios sean exactos o confiables</li>
                  </ul>
                  <p>
                    Usted acepta que el uso de nuestros Servicios es bajo su propio riesgo. En la medida máxima permitida por la ley, Avance Seguros no será responsable por daños directos, indirectos, incidentales, especiales, consecuentes o punitivos resultantes de su uso o incapacidad para usar nuestros Servicios.
                  </p>
                  <p>
                    Como intermediario de seguros, Avance Seguros no asume ninguna responsabilidad por las obligaciones de las compañías aseguradoras hacia los asegurados. Nuestra responsabilidad se limita a actuar con diligencia en la intermediación y asesoramiento.
                  </p>
                </section>
                
                <section id="legislacion" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <Scale className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Legislación aplicable</h2>
                  </div>
                  <p>
                    Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales colombianos.
                  </p>
                  <p>
                    Adicionalmente, nuestras actividades como intermediario de seguros están reguladas por la Superintendencia Financiera de Colombia y cumplimos con todas las normativas aplicables al sector de seguros.
                  </p>
                </section>
                
                <section id="modificaciones" className="mb-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-avance-blue/10 p-2 rounded-full mr-4">
                      <FileText className="text-avance-blue" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-avance-blue mt-1">Modificaciones a estos términos</h2>
                  </div>
                  <p>
                    Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Su uso continuado de nuestros Servicios después de la publicación de los cambios constituirá su aceptación de tales cambios.
                  </p>
                  <p>
                    Le recomendamos revisar estos Términos y Condiciones periódicamente para estar informado de cualquier cambio. La fecha de "última actualización" al principio de este documento indica cuándo fue revisado por última vez.
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
                    Si tiene preguntas o comentarios sobre estos Términos y Condiciones, no dude en contactarnos:
                  </p>
                  <div className="bg-avance-lightblue p-4 rounded-lg mt-4">
                    <p className="font-medium">Avance Seguros</p>
                    <p>Dirección: Calle 10 #30-50, Edificio Plaza, Of. 402, Medellín, Colombia</p>
                    <p>Correo electrónico: info@avanceseguros.com</p>
                    <p>Teléfono: (312) 282 98 50</p>
                  </div>
                </section>
              </div>
              
              {/* Final CTA */}
              <div className="bg-avance-lightblue p-6 rounded-xl mt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-avance-blue mb-2">¿Necesitas más información?</h3>
                    <p className="text-gray-600">Estamos aquí para resolver todas tus dudas.</p>
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

export default TermsConditions;