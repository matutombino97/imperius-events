import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const packages = [
    {
        name: 'Íntimo',
        guests: 'Hasta 80 invitados',
        price: 'Desde $850.000',
        features: ['Salón boutique', 'Decoración básica floral', 'DJ 4 horas', 'Menú 3 pasos', 'Coordinación del día'],
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    },
    {
        name: 'Clásico',
        guests: 'Hasta 200 invitados',
        price: 'Desde $1.850.000',
        popular: true,
        features: ['Salón principal', 'Decoración premium', 'DJ + banda en vivo', 'Menú 5 pasos + cocktail', 'Wedding planner dedicada', 'Photobooth'],
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    },
    {
        name: 'Royal',
        guests: 'Hasta 350 invitados',
        price: 'Desde $3.500.000',
        features: ['Salón completo + jardín', 'Diseño de decoración exclusivo', 'Banda + DJ + show', 'Menú degustación 7 pasos', 'Wedding planner + equipo', 'Video cinematográfico', 'After party'],
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    },
];

const process = [
    { step: '01', title: 'Consulta Inicial', desc: 'Nos reunimos para conocer tu visión, estilo y expectativas. Sin compromiso.' },
    { step: '02', title: 'Propuesta Personalizada', desc: 'Diseñamos una propuesta única con opciones de decoración, menú y timeline.' },
    { step: '03', title: 'Planificación', desc: 'Coordinamos cada proveedor, cada detalle y cada momento del evento.' },
    { step: '04', title: 'Tu Gran Día', desc: 'Nuestro equipo se encarga de todo para que vos solo disfrutes.' },
];

export default function Bodas() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout
            title="Bodas de Ensueño"
            subtitle="Servicios"
            bannerImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
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
                            Tu boda, tu historia, <span className="text-gold">nuestra pasión</span>
                        </h2>
                        <p className="text-dark-medium/70 leading-relaxed mb-4">
                            En Imperius Events entendemos que tu boda es uno de los días más importantes de tu vida. Por eso, cada detalle — desde la selección de flores hasta el último acorde de la banda — es cuidadosamente planeado para crear una celebración que refleje tu amor de manera única.
                        </p>
                        <p className="text-dark-medium/70 leading-relaxed mb-6">
                            Nuestro equipo de wedding planners certificadas cuenta con más de 15 años de experiencia organizando bodas que van desde ceremonias íntimas en jardín hasta celebraciones de 350 invitados con shows de primer nivel.
                        </p>
                        <Link
                            to="/#quote"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-dark font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                        >
                            Solicitar Presupuesto
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80"
                            alt="Boda de ensueño"
                            className="w-full h-[400px] object-cover"
                        />
                    </motion.div>
                </div>

                {/* Process */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Nuestro Proceso</p>
                        <h2 className="font-serif text-3xl md:text-4xl text-dark">De la idea al <span className="text-gold-gradient">altar</span></h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.15 }}
                                className="text-center"
                            >
                                <div className="text-gold-gradient font-serif text-5xl font-bold mb-4">{item.step}</div>
                                <h3 className="font-serif text-xl text-dark mb-2">{item.title}</h3>
                                <p className="text-dark-medium/60 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Packages */}
                <div>
                    <div className="text-center mb-16">
                        <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Paquetes</p>
                        <h2 className="font-serif text-3xl md:text-4xl text-dark">Elegí tu <span className="text-gold-gradient">experiencia</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 * i }}
                                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${pkg.popular ? 'border-gold/40 shadow-lg shadow-gold/10' : 'border-champagne-dark/20'
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-gold-dark to-gold text-dark text-xs font-bold tracking-wider uppercase rounded-full">
                                        Popular
                                    </div>
                                )}
                                <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="font-serif text-2xl text-dark mb-1">{pkg.name}</h3>
                                    <p className="text-dark-medium/50 text-sm mb-2">{pkg.guests}</p>
                                    <p className="text-gold font-serif text-xl mb-4">{pkg.price}</p>
                                    <ul className="space-y-2 mb-6">
                                        {pkg.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm text-dark-medium/70">
                                                <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/#quote"
                                        className="block text-center px-6 py-3 border border-gold/30 text-gold font-medium tracking-wider uppercase text-sm rounded-full hover:bg-gold/10 transition-all"
                                    >
                                        Consultar
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
