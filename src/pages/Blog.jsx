import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const posts = [
    { slug: '1', title: '10 Tendencias en Bodas para 2026', excerpt: 'Desde micro-bodas con experiencias inmersivas hasta decoración sostenible, descubrí las tendencias que marcarán la temporada.', date: '15 Feb 2026', category: 'Bodas', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', readTime: '5 min' },
    { slug: '2', title: 'Cómo Elegir el Menú Perfecto para tu Evento', excerpt: 'Guía completa para seleccionar el menú ideal según el tipo de evento, temporada y perfil de invitados.', date: '10 Feb 2026', category: 'Gastronomía', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', readTime: '7 min' },
    { slug: '3', title: 'La Importancia de la Iimperiusción en Eventos', excerpt: 'La iimperiusción puede transformar completamente un espacio. Te contamos cómo usarla a tu favor.', date: '5 Feb 2026', category: 'Diseño', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', readTime: '4 min' },
    { slug: '4', title: 'Flores de Temporada: Guía Mes a Mes', excerpt: 'Conocé cuáles son las mejores flores para cada época del año y cómo incorporarlas en tu evento.', date: '28 Ene 2026', category: 'Decoración', image: 'https://images.unsplash.com/photo-1561128290-005859246e58?w=600&q=80', readTime: '6 min' },
    { slug: '5', title: 'Checklist: 12 Meses Antes de tu Boda', excerpt: 'Todo lo que necesitás hacer mes a mes para que tu boda sea perfecta. Checklist descargable incluido.', date: '20 Ene 2026', category: 'Bodas', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', readTime: '8 min' },
    { slug: '6', title: 'Eventos Corporativos Post-Pandemia', excerpt: 'Cómo la industria de eventos corporativos se reinventó y las nuevas expectativas de los asistentes.', date: '12 Ene 2026', category: 'Corporativo', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', readTime: '5 min' },
];

export default function Blog() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout title="Blog" subtitle="Inspiración & Consejos" bannerImage="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1920&q=80">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div ref={ref}>
                    {/* Featured post */}
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img src={posts[0].image} alt={posts[0].title} className="w-full h-[350px] object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">{posts[0].category} • {posts[0].date}</span>
                            <h2 className="font-serif text-3xl text-dark mb-4">{posts[0].title}</h2>
                            <p className="text-dark-medium/60 leading-relaxed mb-6">{posts[0].excerpt}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-dark-medium/40">{posts[0].readTime} lectura</span>
                                <Link to={`/blog/${posts[0].slug}`} className="text-gold text-sm font-medium hover:text-gold-dark transition-colors">Leer más →</Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Post grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post, i) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1 }}
                                className="group rounded-2xl overflow-hidden border border-champagne-dark/15 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-5">
                                    <span className="text-gold text-xs tracking-wider uppercase">{post.category} • {post.readTime}</span>
                                    <h3 className="font-serif text-lg text-dark mt-2 mb-2">{post.title}</h3>
                                    <p className="text-dark-medium/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-dark-medium/40">{post.date}</span>
                                        <Link to={`/blog/${post.slug}`} className="text-gold text-sm font-medium hover:text-gold-dark transition-colors">Leer más →</Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
