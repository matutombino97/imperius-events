import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const features = [
    { icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, title: 'Producción Integral', desc: 'Desde la conceptualización hasta la ejecución, nos encargamos de cada aspecto de la producción.' },
    { icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>, title: 'Entretenimiento Premium', desc: 'Orquestas en vivo, artistas internacionales, shows de danza y espectáculos únicos.' },
    { icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 21a9 9 0 100-18 9 9 0 000 18z M12 17V7 M8 12h8" /></svg>, title: 'Gastronomía de Alta Gama', desc: 'Menús diseñados por chefs estrella con maridaje de vinos seleccionados.' },
    { icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, title: 'Subastas & Recaudación', desc: 'Organización de subastas benéficas, sistemas de donación y gestión de fondos.' },
];

export default function Galas() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout
            title="Galas & Beneficencia"
            subtitle="Servicios"
            bannerImage="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&q=80"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
                        <div className="w-12 h-px bg-gold mb-6" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">Galas que <span className="text-gold">trascienden</span></h2>
                        <p className="text-dark-medium/70 leading-relaxed mb-4">
                            Nuestras galas benéficas son eventos de alto impacto diseñados para recaudar fondos y generar conciencia, todo envuelto en una experiencia de lujo inolvidable.
                        </p>
                        <p className="text-dark-medium/70 leading-relaxed mb-6">
                            Trabajamos con fundaciones, ONGs y empresas para crear eventos que combinan elegancia social con propósito solidario.
                        </p>
                        <Link to="/#quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-dark font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                            Organizar Gala
                        </Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80" alt="Gala benéfica" className="w-full h-[400px] object-cover" />
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-white-warm/50 border border-champagne-dark/10 hover:border-gold/20 hover:shadow-lg transition-all duration-300">
                            <span className="mb-6 block text-gold">{f.icon}</span>
                            <h3 className="font-serif text-lg text-dark mb-2">{f.title}</h3>
                            <p className="text-dark-medium/60 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
