import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const partyTypes = [
    { title: 'Cumpleaños de 15', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', desc: 'Celebraciones mágicas para quinceañeras con temáticas personalizadas, shows y producción integral.' },
    { title: 'Cumpleaños Adultos', image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&q=80', desc: 'Fiestas de cumpleaños sofisticadas para adultos con cocktails premium, DJ y ambientación exclusiva.' },
    { title: 'Aniversarios', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80', desc: 'Celebraciones de aniversario íntimas y elegantes para parejas y familias.' },
    { title: 'Baby Showers', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80', desc: 'Baby showers con decoración temática, juegos interactivos y catering dulce personalizado.' },
];

export default function Fiestas() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout
            title="Fiestas Privadas"
            subtitle="Servicios"
            bannerImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div ref={ref} className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                        <div className="w-12 h-px bg-gold mb-6 mx-auto" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
                            Celebrá cada momento <span className="text-gold">especial</span>
                        </h2>
                        <p className="text-dark-medium/70 max-w-2xl mx-auto leading-relaxed">
                            Desde fiestas íntimas hasta grandes celebraciones, creamos experiencias únicas para cada tipo de evento privado. Nuestro equipo se encarga de todo para que vos solo disfrutes.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {partyTypes.map((party, i) => (
                        <motion.div
                            key={party.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15 }}
                            className="group rounded-2xl overflow-hidden border border-champagne-dark/15 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img src={party.image} alt={party.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-2xl text-dark mb-3">{party.title}</h3>
                                <p className="text-dark-medium/60 leading-relaxed mb-4">{party.desc}</p>
                                <Link to="/#quote" className="text-gold text-sm font-medium tracking-wider uppercase hover:text-gold-dark transition-colors">
                                    Consultar →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
