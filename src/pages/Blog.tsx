import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Calendar, User, ArrowRight, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "¿Por qué es importante tener un seguro para tu automóvil?",
      excerpt: "Descubre las razones por las cuales contar con un seguro de automóvil es fundamental para proteger tu patrimonio y garantizar tu tranquilidad en la vía.",
      date: "15 mayo, 2025",
      author: "Juan Pérez",
      readTime: "5 min",
      category: "Seguros Personales",
      image: "https://storage.googleapis.com/cluvi/Imagenes/car-insurance-blog.png"
    },
    {
      id: 2,
      title: "5 claves para elegir el seguro de salud perfecto para tu familia",
      excerpt: "Te compartimos los aspectos más importantes que debes considerar a la hora de seleccionar un seguro de salud que se adapte a las necesidades específicas de tu familia.",
      date: "3 mayo, 2025",
      author: "Ana Gómez",
      readTime: "7 min",
      category: "Seguros Personales",
      image: "https://storage.googleapis.com/cluvi/Imagenes/health-insurance-blog.png"
    },
    {
      id: 3,
      title: "Seguros para PYMES: Protege tu negocio ante imprevistos",
      excerpt: "Las pequeñas y medianas empresas enfrentan diversos riesgos que pueden impactar negativamente su operación. Conoce cómo un seguro integral puede ayudarte a mitigarlos.",
      date: "28 abril, 2025",
      author: "Carlos Martínez",
      readTime: "6 min",
      category: "Seguros Empresariales",
      image: "https://storage.googleapis.com/cluvi/Imagenes/business-insurance-blog.png"
    },
    {
      id: 4,
      title: "¿Qué hacer en caso de un siniestro con tu vehículo?",
      excerpt: "Guía paso a paso sobre cómo actuar correctamente ante un accidente automovilístico para garantizar una gestión eficiente de tu reclamación.",
      date: "20 abril, 2025",
      author: "María López",
      readTime: "8 min",
      category: "Seguros Personales",
      image: "https://storage.googleapis.com/cluvi/Imagenes/car-accident-blog.png"
    },
    {
      id: 5,
      title: "Seguros de transporte: Factores clave para la protección de mercancías",
      excerpt: "El transporte de mercancías implica riesgos significativos. Conoce cómo un seguro especializado puede proteger tu carga durante todo el trayecto.",
      date: "12 abril, 2025",
      author: "Andrés Ramírez",
      readTime: "5 min",
      category: "Seguros Empresariales",
      image: "https://storage.googleapis.com/cluvi/Imagenes/transport-insurance-blog.png"
    },
    {
      id: 6,
      title: "Cómo elegir la cobertura ideal para tu hogar",
      excerpt: "Proteger tu vivienda es fundamental. Te explicamos los diferentes tipos de cobertura disponibles para que elijas la que mejor se adapte a tus necesidades.",
      date: "5 abril, 2025",
      author: "Laura Sánchez",
      readTime: "6 min",
      category: "Seguros Personales",
      image: "https://storage.googleapis.com/cluvi/Imagenes/home-insurance-blog.png"
    }
  ];

  // Categories
  const categories = [
    "Todos",
    "Seguros Personales",
    "Seguros Empresariales",
    "Consejos",
    "Noticias"
  ];

  // Recent posts (for sidebar)
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="bg-avance-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg mb-8 text-white/90">
              Artículos sobre seguros, consejos para proteger lo que más valoras y novedades del sector.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text"
                placeholder="Buscar artículos..."
                className="w-full px-4 py-3 pl-12 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-avance-gold bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" size={18} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Categories */}
              <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0 
                        ? 'bg-avance-blue text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-avance-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-xs mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-avance-blue mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <a 
                          href={`/blog/${post.id}`} 
                          className="text-avance-blue font-medium text-sm flex items-center hover:text-avance-gold transition-colors"
                        >
                          Leer más
                          <ArrowRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors">
                    <ArrowRight size={18} className="rotate-180" />
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-transparent bg-avance-blue text-white">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                    3
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Categories Widget */}
              <div className="bg-avance-lightblue p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-avance-blue mb-4">Categorías</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between text-gray-700 hover:text-avance-blue transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          {index === 0 ? '12' : Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts Widget */}
              <div className="bg-white border border-gray-100 p-6 rounded-xl mb-8 shadow-sm">
                <h3 className="text-xl font-bold text-avance-blue mb-4">Publicaciones recientes</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-4">
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-avance-blue line-clamp-2 mb-1 text-sm">
                          <a href={`/blog/${post.id}`} className="hover:text-avance-gold transition-colors">
                            {post.title}
                          </a>
                        </h4>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar size={12} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Widget */}
              <div className="bg-avance-blue text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Suscríbete a nuestro newsletter</h3>
                <p className="text-white/90 text-sm mb-4">
                  Recibe nuestros artículos, novedades y consejos directamente en tu correo.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-avance-gold"
                  />
                  <button className="w-full bg-avance-gold hover:bg-avance-gold/90 text-white rounded-lg py-2.5 font-medium transition-colors">
                    Suscribirme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avance-lightblue">
        <div className="container-custom">
          <div className="bg-avance-blue p-8 md:p-12 rounded-2xl shadow-lg text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Tienes preguntas sobre seguros?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              Nuestros asesores están disponibles para ayudarte a encontrar la mejor protección para ti, tu familia o tu empresa.
            </p>
            <Link 
              to="/contacto" 
              className="bg-avance-gold hover:bg-avance-gold/90 text-white rounded-lg px-8 py-4 font-medium inline-flex items-center"
            >
              Contactar a un asesor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Blog;