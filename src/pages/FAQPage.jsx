import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const faqData = [
    { category: 'General', question: '¿Cuál es la capacidad máxima del salón?', answer: 'Nuestro salón principal tiene capacidad para hasta 350 invitados en formato banquete y 500 en formato cocktail. También contamos con salones más íntimos para eventos de hasta 80 personas.' },
    { category: 'General', question: '¿Puedo realizar la ceremonia y la recepción en el mismo lugar?', answer: 'Por supuesto. Disponemos de un jardín con pérgola para ceremonias al aire libre y el salón interior para la recepción. También ofrecemos la posibilidad de realizar ambas en el salón principal con cambio de escenografía.' },
    { category: 'General', question: '¿Tienen estacionamiento disponible?', answer: 'Sí, contamos con estacionamiento privado para 150 vehículos con servicio de valet parking incluido. También ofrecemos servicio de transfer para grupos que lo soliciten.' },
    { category: 'Servicios', question: '¿Ofrecen servicio de catering propio?', answer: 'Sí, contamos con un equipo de chefs exclusivos especializados en gastronomía gourmet. Ofrecemos menús personalizados que incluyen opciones internacionales, veganas, kosher y para personas con alergias alimentarias.' },
    { category: 'Servicios', question: '¿Qué incluye el servicio de Wedding Planning?', answer: 'Nuestro servicio integral incluye: coordinación completa del evento, selección y gestión de proveedores, diseño de decoración personalizada, timeline detallado, ensayo previo, coordinación el día del evento y seguimiento post-evento.' },
    { category: 'Servicios', question: '¿Cuáles son las opciones de decoración?', answer: 'Trabajamos con los mejores diseñadores florales y de eventos del país. Ofrecemos desde decoración clásica hasta diseño de vanguardia. Cada propuesta se crea a medida del estilo y visión de nuestros clientes.' },
    { category: 'Reservas', question: '¿Con cuánta anticipación debo reservar?', answer: 'Recomendamos reservar con al menos 8 a 12 meses de anticipación para fechas premium (viernes y sábados). Para eventos entre semana, el plazo puede ser menor. Las fechas de temporada alta se reservan incluso con más anticipación.' },
    { category: 'Reservas', question: '¿Cuál es la política de seña?', answer: 'Para confirmar la reserva se requiere una seña del 30% del presupuesto total. El 70% restante se abona en 3 cuotas mensuales previas al evento. Aceptamos transferencia bancaria, tarjetas de crédito y débito.' },
    { category: 'Reservas', question: '¿Puedo hacer cambios de fecha?', answer: 'Los cambios de fecha están sujetos a disponibilidad y deben solicitarse con al menos 90 días de anticipación. Se cobra un cargo administrativo del 5%. Consultar nuestra política de cancelación para más detalles.' },
    { category: 'Día del Evento', question: '¿Cuál es el horario del evento?', answer: 'Los eventos normalmente inician entre las 20:00 y 21:00 y finalizan a las 5:00 o 6:00 del día siguiente. Ofrecemos horarios especiales para ceremonias diurnas. El acceso al salón para montaje comienza 6 horas antes del evento.' },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('Todas');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const categories = ['Todas', ...new Set(faqData.map(f => f.category))];
    const filtered = activeCategory === 'Todas' ? faqData : faqData.filter(f => f.category === activeCategory);

    return (
        <PageLayout title="Preguntas Frecuentes" subtitle="Resolvé tus dudas" bannerImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div ref={ref}>
                    {/* Category filters */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => { setActiveCategory(cat); setOpenIndex(null); }} className={`px-5 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${activeCategory === cat ? 'bg-gradient-to-r from-gold-dark to-gold text-dark' : 'border border-champagne-dark/20 text-dark-medium/60 hover:border-gold/30 hover:text-gold'}`}>
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* FAQ items */}
                    {filtered.map((item, index) => (
                        <motion.div key={item.question} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.05 }} className={`border-b transition-colors duration-300 ${openIndex === index ? 'border-gold/30' : 'border-champagne-dark/15'}`}>
                            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between py-5 text-left group">
                                <div>
                                    <span className="text-gold text-xs tracking-wider uppercase mr-2">{item.category}</span>
                                    <span className={`font-serif text-lg transition-colors duration-300 ${openIndex === index ? 'text-gold' : 'text-dark group-hover:text-gold'}`}>{item.question}</span>
                                </div>
                                <motion.span animate={{ rotate: openIndex === index ? 45 : 0 }} transition={{ duration: 0.3 }} className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-gradient-to-br from-gold to-gold-dark text-dark' : 'border border-champagne-dark/20 text-dark-medium/40'}`}>+</motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                        <div className="pb-5 pr-12">
                                            <div className="w-8 h-px bg-gold/30 mb-3" />
                                            <p className="text-dark-medium/60 leading-relaxed text-sm">{item.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
