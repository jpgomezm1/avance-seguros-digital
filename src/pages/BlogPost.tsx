import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { getBlogPostBySlug, getRecentPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const recentPosts = getRecentPosts(3);

  // Si no se encuentra el post, redirigir a 404
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Filtrar posts recientes excluyendo el actual
  const relatedPosts = recentPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <BaseLayout>
      {/* Breadcrumb */}
      <section className="bg-avance-lightblue py-6">
        <div className="container-custom">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-avance-blue">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-avance-blue">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-avance-blue">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block bg-avance-blue text-white text-sm font-medium px-4 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-avance-blue mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center">
                  <User size={18} className="mr-2 text-avance-gold" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2 text-avance-gold" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2 text-avance-gold" />
                  <span>{post.readTime} de lectura</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none
                  prose-headings:text-avance-blue
                  prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-avance-blue prose-strong:font-semibold
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-li:text-gray-700
                  prose-a:text-avance-blue prose-a:no-underline hover:prose-a:text-avance-gold
                "
              >
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </motion.article>

              {/* Share Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-xl font-bold text-avance-blue flex items-center">
                    <Share2 className="mr-2" size={24} />
                    Compartir artículo
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Navigation to other posts */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-avance-blue hover:text-avance-gold font-medium transition-colors"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Volver al blog
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-avance-lightblue p-6 rounded-xl mb-8"
              >
                <h3 className="text-xl font-bold text-avance-blue mb-4">Sobre el autor</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-avance-blue text-white flex items-center justify-center text-2xl font-bold mr-4">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-avance-blue">{post.author}</h4>
                    <p className="text-sm text-gray-600">Experto en seguros</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Especialista en asesoría de seguros con amplia experiencia ayudando a personas y empresas a proteger lo que más valoran.
                </p>
              </motion.div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white border border-gray-100 p-6 rounded-xl mb-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-avance-blue mb-4">Artículos relacionados</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-avance-blue line-clamp-2 mb-1 text-sm group-hover:text-avance-gold transition-colors">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center text-gray-500 text-xs">
                              <Calendar size={12} className="mr-1" />
                              <span>{relatedPost.date}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-avance-blue text-white p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">¿Necesitas asesoría?</h3>
                <p className="text-white/90 text-sm mb-6">
                  Nuestros expertos están listos para ayudarte a encontrar el seguro perfecto para ti.
                </p>
                <Link
                  to="/contacto"
                  className="block w-full bg-avance-gold hover:bg-avance-gold/90 text-white rounded-lg py-3 font-medium text-center transition-colors"
                >
                  Contactar asesor
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default BlogPost;
