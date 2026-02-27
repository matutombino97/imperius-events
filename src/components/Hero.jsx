import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video / gradient background with parallax */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: `linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 30%, #1A1A1A 60%, #333333 100%)`,
                    backgroundAttachment: 'fixed',
                }}
            />

            {/* Animated ambient particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gold/20"
                        style={{
                            width: Math.random() * 4 + 2,
                            height: Math.random() * 4 + 2,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/80" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Decorative top line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-gold tracking-[0.35em] uppercase text-xs md:text-sm font-medium mb-6"
                >
                    Wedding Planner & Salón de Eventos
                </motion.p>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-champagne leading-tight mb-6"
                >
                    Imperius
                    <span className="block text-gold-gradient mt-2">Events</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-champagne/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    Creamos experiencias inolvidables. Cada detalle, cada momento, diseñado con elegancia y pasión para hacer de tu evento algo extraordinario.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#quote"
                        className="group px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-dark font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 flex items-center gap-2"
                    >
                        Solicitar Cotización
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#gallery"
                        className="px-8 py-4 border border-gold/30 text-champagne font-medium tracking-wider uppercase text-sm rounded-full hover:border-gold hover:text-gold transition-all duration-300"
                    >
                        Ver Galería
                    </a>
                </motion.div>

                {/* Bottom decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
                    className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12"
                />
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-champagne/40 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 border border-gold/30 rounded-full flex justify-center pt-1.5"
                >
                    <div className="w-1 h-1.5 bg-gold rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
