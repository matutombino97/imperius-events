import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';

const timeline = [
    { year: '2010', title: 'El Comienzo', desc: 'Imperius Events nace con la visión de transformar la industria de eventos en Argentina.' },
    { year: '2013', title: 'Primer Salón', desc: 'Inauguramos nuestro primer salón con capacidad para 150 personas en Zona Norte.' },
    { year: '2016', title: 'Expansión', desc: 'Ampliamos nuestras instalaciones con el jardín para ceremonias al aire libre y el salón principal de 800m².' },
    { year: '2019', title: 'Reconocimiento', desc: 'Premiados como "Mejor Venue del Año" por la Asociación de Wedding Planners de Argentina.' },
    { year: '2022', title: 'Innovación', desc: 'Incorporamos tecnología de realidad aumentada para previsualizaciones de eventos y diseño 3D.' },
    { year: '2026', title: 'Hoy', desc: 'Más de 500 eventos realizados y un equipo de 30+ profesionales dedicados a la excelencia.' },
];

const values = [
    { title: 'Misión', desc: 'Crear experiencias extraordinarias que superen las expectativas de nuestros clientes, transformando cada evento en un recuerdo inolvidable.', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: 'Visión', desc: 'Ser el referente de excelencia en eventos de lujo en Latinoamérica, innovando constantemente en diseño, tecnología y servicio al cliente.', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg> },
    { title: 'Valores', desc: 'Pasión, excelencia, creatividad, compromiso y atención personalizada son los pilares que guían cada uno de nuestros eventos.', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
];

export default function SobreNosotros() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout
            title="Sobre Nosotros"
            subtitle="Nuestra Historia"
            bannerImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                {/* Story */}
                <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
                        <div className="w-12 h-px bg-gold mb-6" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">Nuestra <span className="text-gold">Historia</span></h2>
                        <p className="text-dark-medium/70 leading-relaxed mb-4">
                            Imperius Events fue fundada en 2010 por María Elena Rodríguez y Sebastián Alvarez, dos apasionados por el diseño de experiencias. Lo que comenzó como un pequeño emprendimiento de wedding planning se ha convertido en el venue de eventos más prestigioso de la región.
                        </p>
                        <p className="text-dark-medium/70 leading-relaxed">
                            Con más de 15 años de trayectoria, hemos tenido el honor de ser parte de los momentos más importantes en la vida de más de 500 familias y empresas. Cada evento es para nosotros una nueva oportunidad de crear algo extraordinario.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" alt="Nuestra historia" className="w-full h-[400px] object-cover" />
                    </motion.div>
                </div>

                {/* Mission, Vision, Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {values.map((v, i) => (
                        <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }} className="p-8 rounded-2xl bg-white-warm/50 border border-champagne-dark/10 text-center hover:border-gold/20 transition-all duration-300">
                            <span className="mb-6 flex justify-center text-gold">{v.icon}</span>
                            <h3 className="font-serif text-2xl text-dark mb-3">{v.title}</h3>
                            <p className="text-dark-medium/60 leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div>
                    <div className="text-center mb-16">
                        <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">Trayectoria</p>
                        <h2 className="font-serif text-3xl md:text-4xl text-dark">Nuestro <span className="text-gold-gradient">Recorrido</span></h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/10 to-transparent hidden md:block" />
                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: i * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="text-gold-gradient font-serif text-2xl font-bold mb-1">{item.year}</div>
                                        <h3 className="font-serif text-xl text-dark mb-2">{item.title}</h3>
                                        <p className="text-dark-medium/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gold to-gold-dark border-4 border-cream flex-shrink-0 hidden md:block" />
                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
