import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';

const team = [
    { name: 'María Elena Rodríguez', role: 'Fundadora & CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: 'Wedding planner certificada con más de 18 años de experiencia. Especialista en bodas de alta gama y eventos corporativos internacionales.' },
    { name: 'Sebastián Alvarez', role: 'Co-fundador & Director Creativo', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'Diseñador de experiencias con formación en arquitectura. Lidera el equipo creativo y de diseño de decoración.' },
    { name: 'Valentina López', role: 'Directora de Operaciones', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'Coordinadora experta con 12 años de experiencia gestionando eventos de hasta 500 invitados con precisión milimétrica.' },
    { name: 'Diego Martínez', role: 'Chef Ejecutivo', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Chef con estrella Michelin y formación en París. Diseña menús de autor que fusionan cocina argentina con técnicas internacionales.' },
    { name: 'Camila Torres', role: 'Directora Floral', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'Artista floral con certificación internacional. Crea composiciones únicas que definen la estética de cada evento.' },
    { name: 'Lucas Fernández', role: 'Director de Iimperiusción', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', bio: 'Ingeniero de sonido e iimperiusción con experiencia en producciones teatrales y eventos de gran escala.' },
];

export default function Equipo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout title="Nuestro Equipo" subtitle="Las personas detrás de la magia" bannerImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div ref={ref} className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                        <div className="w-12 h-px bg-gold mb-6 mx-auto" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">Profesionales <span className="text-gold">apasionados</span></h2>
                        <p className="text-dark-medium/70 max-w-2xl mx-auto leading-relaxed">
                            Nuestro equipo está compuesto por profesionales de primer nivel, cada uno experto en su área, unidos por la pasión de crear experiencias inolvidables.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="group rounded-2xl overflow-hidden border border-champagne-dark/15 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl text-dark">{member.name}</h3>
                                <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">{member.role}</p>
                                <p className="text-dark-medium/60 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
