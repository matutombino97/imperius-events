import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Inicio', href: '/#hero' },
    { name: 'Galería', href: '/#gallery' },
    { name: 'Disponibilidad', href: '/#availability' },
    { name: 'Cotización', href: '/#quote' },
    { name: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-dark/95 backdrop-blur-lg shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="/#hero" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center">
                            <span className="font-serif text-dark text-lg font-bold">L</span>
                        </div>
                        <span className="font-serif text-2xl text-champagne tracking-wider group-hover:text-gold transition-colors duration-300">
                            Imperius
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-champagne/70 hover:text-gold text-sm font-medium tracking-widest uppercase transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href="/#quote"
                            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold-dark to-gold text-dark text-sm font-semibold tracking-wider uppercase rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                        >
                            Reservar
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 group"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-champagne group-hover:bg-gold transition-colors"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-0.5 bg-champagne group-hover:bg-gold transition-colors"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-champagne group-hover:bg-gold transition-colors"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.35 }}
                        className="fixed inset-0 top-20 bg-dark/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-champagne text-2xl font-serif tracking-wider hover:text-gold transition-colors duration-300"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="/#quote"
                            onClick={() => setMobileOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 px-8 py-3 bg-gradient-to-r from-gold-dark to-gold text-dark font-semibold tracking-wider uppercase rounded-full"
                        >
                            Reservar Ahora
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
