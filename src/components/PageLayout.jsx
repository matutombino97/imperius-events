import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ title, subtitle, children, bannerImage }) {
    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={bannerImage || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80'}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
                    />
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne"
                    >
                        {title}
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
                    />
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                <div className="flex items-center gap-2 text-sm text-dark-medium/50">
                    <Link to="/" className="hover:text-gold transition-colors">Inicio</Link>
                    <span>›</span>
                    <span className="text-gold">{title}</span>
                </div>
            </div>

            {/* Page Content */}
            <main>{children}</main>

            <Footer />
        </div>
    );
}
