import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqData = [
    {
        question: '¿Cuál es la capacidad máxima del salón?',
        answer: 'Nuestro salón principal tiene capacidad para hasta 350 invitados en formato banquete y 500 en formato cocktail. También contamos con salones más íntimos para eventos de hasta 80 personas.',
    },
    {
        question: '¿Ofrecen servicio de catering propio?',
        answer: 'Sí, contamos con un equipo de chefs exclusivos especializados en gastronomía gourmet. Ofrecemos menús personalizados que incluyen opciones internacionales, veganas, kosher y para personas con alergias alimentarias.',
    },
    {
        question: '¿Puedo realizar la ceremonia y la recepción en el mismo lugar?',
        answer: 'Por supuesto. Disponemos de un jardín con pérgola para ceremonias al aire libre y el salón interior para la recepción. También ofrecemos la posibilidad de realizar ambas en el salón principal con cambio de escenografía.',
    },
    {
        question: '¿Con cuánta anticipación debo reservar?',
        answer: 'Recomendamos reservar con al menos 8 a 12 meses de anticipación para fechas premium (viernes y sábados). Para eventos entre semana, el plazo puede ser menor. Las fechas de temporada alta se reservan incluso con más anticipación.',
    },
    {
        question: '¿Qué incluye el servicio de Wedding Planning?',
        answer: 'Nuestro servicio integral incluye: coordinación completa del evento, selección y gestión de proveedores, diseño de decoración personalizada, timeline detallado, ensayo previo, coordinación el día del evento y seguimiento post-evento.',
    },
    {
        question: '¿Cuáles son las opciones de decoración?',
        answer: 'Trabajamos con los mejores diseñadores florales y de eventos del país. Ofrecemos desde decoración clásica hasta diseño de vanguardia. Cada propuesta se crea a medida del estilo y visión de nuestros clientes.',
    },
    {
        question: '¿Tienen estacionamiento disponible?',
        answer: 'Sí, contamos con estacionamiento privado para 150 vehículos con servicio de valet parking incluido. También ofrecemos servicio de transfer para grupos que lo soliciten.',
    },
];

function AccordionItem({ item, index, isOpen, onToggle }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-30px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <div
                className={`border-b transition-colors duration-300 ${isOpen ? 'border-gold/30' : 'border-champagne/10'
                    }`}
            >
                <button
                    onClick={onToggle}
                    className="w-full flex items-center justify-between py-6 text-left group"
                >
                    <span className={`font-serif text-lg md:text-xl transition-colors duration-300 pr-8 ${isOpen ? 'text-gold' : 'text-champagne group-hover:text-gold'
                        }`}>
                        {item.question}
                    </span>
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen
                                ? 'bg-gradient-to-br from-gold to-gold-dark'
                                : 'border border-champagne/20 group-hover:border-gold/50'
                            }`}
                    >
                        <svg
                            className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-dark' : 'text-champagne/60 group-hover:text-gold'
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <div className="pb-6 pr-12">
                                <div className="w-8 h-px bg-gold/30 mb-4" />
                                <p className="text-champagne/60 leading-relaxed">{item.answer}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="faq" className="py-24 md:py-32 bg-dark">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div ref={sectionRef} className="text-center mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4"
                    >
                        Preguntas Frecuentes
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne mb-6"
                    >
                        Todo lo que
                        <span className="text-gold-gradient"> Necesitás Saber</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
                    />
                </div>

                {/* Accordion items */}
                <div>
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* CTA below FAQ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 }}
                    className="text-center mt-16"
                >
                    <p className="text-champagne/40 mb-6">¿Tenés otra consulta?</p>
                    <a
                        href="#quote"
                        className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/30 text-gold font-medium tracking-wider uppercase text-sm rounded-full hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
                    >
                        Contactanos
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
