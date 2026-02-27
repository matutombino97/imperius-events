import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const services = [
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z M19 10v2a7 7 0 01-14 0v-2 M12 19v4 M8 23h8" /></svg>, title: 'Conferencias & Seminarios', desc: 'Salones equipados con tecnología de punta, pantallas LED, sistema de traducción simultánea y streaming en vivo.' },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M21 5L12 14 3 5h18z M12 14v7 M8 21h8" /></svg>, title: 'Cocktails Empresariales', desc: 'Espacios elegantes para networking con barra premium, finger food gourmet y ambientación corporativa.' },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 4h14a1 1 0 011 1v2.5a4.5 4.5 0 01-4.5 4.5H16a4 4 0 01-8 0H5.5A4.5 4.5 0 011 7.5V5a1 1 0 011-1z M12 16v6 M8 22h8" /></svg>, title: 'Entregas de Premios', desc: 'Producción completa de galas corporativas con escenario, iluminación profesional y conducción.' },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 4.318A4.5 4.5 0 0116.5 8c0 3-4.5 7-4.5 7S7.5 11 7.5 8a4.5 4.5 0 014.5-3.682z" /></svg>, title: 'Team Building', desc: 'Actividades personalizadas de integración de equipos en nuestros espacios interiores y exteriores.' },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>, title: 'Fiestas de Fin de Año', desc: 'Celebraciones de fin de año corporativas con show en vivo, DJ y catering de primer nivel.' },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6m0-6V7m0 0H7" /></svg>, title: 'Lanzamientos de Producto', desc: 'Eventos de lanzamiento con diseño de experiencia inmersiva, branding integral y prensa invitada.' },
];

const clients = ['TechCorp Argentina', 'Banco Nacional', 'Aerolíneas Premium', 'Universidad del Sur', 'Grupo Médico Integral', 'Laboratorios Nova'];

export default function Corporativos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout
            title="Eventos Corporativos"
            subtitle="Servicios"
            bannerImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                {/* Intro */}
                <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-12 h-px bg-gold mb-6" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                            Eventos que impulsan tu <span className="text-gold">marca</span>
                        </h2>
                        <p className="text-dark-medium/70 leading-relaxed mb-4">
                            En Imperius Events comprendemos que cada evento corporativo es una extensión de la identidad de tu empresa. Nuestro equipo especializado en eventos de negocios trabaja con las marcas más importantes del país para crear experiencias que generan impacto real.
                        </p>
                        <p className="text-dark-medium/70 leading-relaxed mb-6">
                            Desde conferencias intimistas hasta convenciones de 500 asistentes, ofrecemos soluciones integrales que combinan tecnología de vanguardia, gastronomía gourmet y producción impecable.
                        </p>
                        <Link
                            to="/#quote"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-dark font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                        >
                            Solicitar Propuesta
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="Evento corporativo" className="w-full h-[400px] object-cover" />
                    </motion.div>
                </div>

                {/* Services grid */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Qué Ofrecemos</p>
                        <h2 className="font-serif text-3xl md:text-4xl text-dark">Soluciones <span className="text-gold-gradient">corporativas</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white-warm/50 border border-champagne-dark/10 hover:border-gold/20 hover:shadow-lg transition-all duration-300"
                            >
                                <span className="mb-6 flex text-gold">{s.icon}</span>
                                <h3 className="font-serif text-xl text-dark mb-2">{s.title}</h3>
                                <p className="text-dark-medium/60 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trusted by */}
                <div className="text-center">
                    <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-8">Confían en nosotros</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {clients.map((c) => (
                            <div key={c} className="px-6 py-3 rounded-full border border-champagne-dark/15 text-dark-medium/50 text-sm font-medium">
                                {c}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
