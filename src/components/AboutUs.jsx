import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const stats = [
    { number: '15+', label: 'Años de Experiencia' },
    { number: '500+', label: 'Eventos Realizados' },
    { number: '98%', label: 'Clientes Satisfechos' },
    { number: '50+', label: 'Premios Obtenidos' },
];

const values = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Pasión por los Detalles',
        desc: 'Cada flor, cada vela, cada servilleta está colocada con intención. Creemos que la magia está en los detalles que otros pasan por alto.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
        title: 'Excelencia Garantizada',
        desc: 'Trabajamos con los mejores proveedores del mercado para asegurar que cada aspecto de tu evento supere tus expectativas.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Equipo Dedicado',
        desc: 'Un equipo de más de 30 profesionales creativos, coordinadores y especialistas trabajando en armonía para tu evento.',
    },
];

export default function AboutUs() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const statsRef = useRef(null);
    const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

    return (
        <section id="about" className="py-24 md:py-32 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div ref={sectionRef} className="text-center mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4"
                    >
                        Sobre Nosotros
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark mb-6"
                    >
                        Donde los Sueños se
                        <span className="text-gold-gradient"> Hacen Realidad</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
                    />
                </div>

                {/* Story section with image */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                                alt="Salón de eventos Imperius"
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                        </div>
                        {/* Floating accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="w-12 h-px bg-gold mb-6" />
                        <h3 className="font-serif text-3xl md:text-4xl text-dark mb-6 leading-tight">
                            Más de 15 años creando momentos <span className="text-gold">extraordinarios</span>
                        </h3>
                        <p className="text-dark-medium/70 leading-relaxed mb-6">
                            Imperius Events nació en 2010 con un sueño simple pero poderoso: transformar cada celebración en una experiencia que trascienda lo ordinario. Desde bodas íntimas hasta galas de 500 invitados, cada evento es una obra de arte única que refleja la esencia de quienes lo celebran.
                        </p>
                        <p className="text-dark-medium/70 leading-relaxed mb-8">
                            Nuestro equipo de planificadores, diseñadores y coordinadores trabaja incansablemente para que cada detalle sea perfecto. Porque creemos que los momentos más importantes de la vida merecen nada menos que la excelencia absoluta.
                        </p>
                        <Link
                            to="/sobre-nosotros"
                            className="inline-flex items-center gap-2 text-gold font-medium tracking-wider uppercase text-sm hover:text-gold-dark transition-colors group"
                        >
                            Conocer más sobre nosotros
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                            className="text-center p-8 rounded-2xl bg-white-warm/50 border border-champagne-dark/10 hover:border-gold/20 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/10 to-champagne/20 flex items-center justify-center mx-auto mb-5 text-gold">
                                {value.icon}
                            </div>
                            <h4 className="font-serif text-xl text-dark mb-3">{value.title}</h4>
                            <p className="text-dark-medium/60 text-sm leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={statsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center p-6"
                        >
                            <div className="text-gold-gradient font-serif text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                            <div className="text-dark-medium/50 text-sm tracking-wider uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
