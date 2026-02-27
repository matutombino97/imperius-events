import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';

const testimonials = [
    { name: 'Ana & Marcos', event: 'Boda - Marzo 2025', text: 'Imperius hizo de nuestra boda un sueño hecho realidad. Cada detalle fue perfecto, desde las flores hasta la comida. No podríamos estar más agradecidos con María Elena y su equipo.', rating: 5, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80' },
    { name: 'Corporación TechSur', event: 'Gala Anual - Noviembre 2024', text: 'Tercer año consecutivo trabajando con Imperius para nuestra gala anual. La producción es impecable, siempre superan nuestras expectativas. Una inversión que vale cada peso.', rating: 5, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80' },
    { name: 'Laura Méndez', event: 'Fiesta de 40 - Agosto 2025', text: 'Mi fiesta de 40 fue espectacular. La ambientación, la música, la comida... todo estuvo increíble. Mis invitados no paran de hablar de lo hermoso que fue todo.', rating: 5, image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80' },
    { name: 'Patricia & Roberto', event: 'Boda - Enero 2025', text: 'Desde la primera reunión nos sentimos en las mejores manos. Valentina coordinó todo con una precisión increíble y el día fue absolutamente perfecto.', rating: 5, image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80' },
    { name: 'Fundación Esperanza', event: 'Gala Benéfica - Junio 2025', text: 'Gracias a Imperius recaudamos un 40% más que el año anterior. La producción del evento fue cinematográfica y los invitados quedaron impresionados.', rating: 5, image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&q=80' },
    { name: 'Carolina & Diego', event: 'Boda - Diciembre 2024', text: 'Nuestra boda en el jardín de Imperius fue mágica. La ceremonia al atardecer, las luces, el banquete... todo fue como lo soñamos y más. ¡Gracias por todo!', rating: 5, image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80' },
];

export default function Testimonios() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout title="Testimonios" subtitle="Lo que dicen nuestros clientes" bannerImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div ref={ref} className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                        <div className="w-12 h-px bg-gold mb-6 mx-auto" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">Historias <span className="text-gold">reales</span></h2>
                        <p className="text-dark-medium/70 max-w-2xl mx-auto leading-relaxed">
                            Cada testimonio representa una experiencia única. Estas son las palabras de quienes confiaron en nosotros para sus momentos más especiales.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-white-warm/50 border border-champagne-dark/10 hover:border-gold/20 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h3 className="font-serif text-lg text-dark">{t.name}</h3>
                                    <p className="text-gold text-xs tracking-wider uppercase">{t.event}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 mb-3">
                                {[...Array(t.rating)].map((_, j) => (
                                    <span key={j} className="text-gold text-sm">★</span>
                                ))}
                            </div>
                            <p className="text-dark-medium/60 text-sm leading-relaxed italic">"{t.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
