import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const months = [
    { name: 'Marzo 2026', startDay: 0, days: 31 },
    { name: 'Abril 2026', startDay: 3, days: 30 },
];

const premiumDates = {
    'Marzo 2026': [7, 14, 21, 28],
    'Abril 2026': [4, 11, 18, 25],
};

const bookedDates = {
    'Marzo 2026': [5, 6, 12, 13, 19, 20, 26, 27],
    'Abril 2026': [2, 3, 9, 10, 16, 17, 23, 24],
};

const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

function CalendarMonth({ month, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const blanks = Array.from({ length: month.startDay }, (_, i) => i);
    const days = Array.from({ length: month.days }, (_, i) => i + 1);
    const premium = premiumDates[month.name] || [];
    const booked = bookedDates[month.name] || [];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8"
        >
            <h3 className="font-serif text-2xl text-champagne text-center mb-6">{month.name}</h3>

            {/* Week day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                    <div key={day} className="text-center text-gold/60 text-xs font-medium tracking-wider uppercase py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-1">
                {blanks.map((_, i) => (
                    <div key={`blank-${i}`} />
                ))}
                {days.map((day) => {
                    const isPremium = premium.includes(day);
                    const isBooked = booked.includes(day);

                    return (
                        <motion.div
                            key={day}
                            whileHover={!isBooked ? { scale: 1.15 } : {}}
                            className={`
                relative aspect-square flex items-center justify-center rounded-lg text-sm font-medium cursor-default transition-colors duration-200
                ${isPremium
                                    ? 'bg-gradient-to-br from-gold/25 to-gold-dark/15 text-gold border border-gold/30 hover:border-gold/60'
                                    : isBooked
                                        ? 'bg-dark-lighter/50 text-champagne/25 line-through'
                                        : 'text-champagne/60 hover:bg-champagne/5 hover:text-champagne'
                                }
              `}
                        >
                            {day}
                            {isPremium && (
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gold rounded-full" />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}

export default function Availability() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="availability" className="py-24 md:py-32 bg-cream">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div ref={sectionRef} className="text-center mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4"
                    >
                        Disponibilidad
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark mb-6"
                    >
                        Reservá tu
                        <span className="text-gold-gradient"> Fecha Premium</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-dark-medium/70 max-w-lg mx-auto"
                    >
                        Las fechas marcadas en dorado son nuestras fechas premium con disponibilidad inmediata.
                    </motion.p>
                </div>

                {/* Calendar grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {months.map((month, index) => (
                        <CalendarMonth key={month.name} month={month} index={index} />
                    ))}
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-6 mt-10"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-gold/25 to-gold-dark/15 border border-gold/30" />
                        <span className="text-dark-medium/60 text-sm">Fecha Premium</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-dark-lighter/50" />
                        <span className="text-dark-medium/60 text-sm">Reservado</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border border-dark-medium/20" />
                        <span className="text-dark-medium/60 text-sm">Disponible</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
