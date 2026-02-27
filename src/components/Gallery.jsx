import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
        height: 'h-64 md:h-80',
        label: 'Salón Principal',
        description: 'Nuestro salón principal con capacidad para 350 invitados, equipado con iimperiusción LED programable, sistema de sonido profesional y un escenario modular que se adapta a cualquier tipo de evento.',
        details: ['Capacidad: 350 personas', 'Superficie: 800m²', 'Iimperiusción LED RGB', 'Escenario modular'],
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1561128290-005859246e58?w=800&q=80',
        height: 'h-48 md:h-60',
        label: 'Decoración Floral',
        description: 'Trabajamos con los mejores floristas del país para crear arreglos únicos que transforman cada espacio. Desde centros de mesa clásicos hasta instalaciones florales de vanguardia.',
        details: ['Diseño personalizado', 'Flores frescas importadas', 'Instalaciones artísticas', 'Consulta de estilo incluida'],
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
        height: 'h-72 md:h-96',
        label: 'Ceremonia al Aire Libre',
        description: 'Nuestro jardín de 2000m² con pérgola de madera natural y vista panorámica es el escenario perfecto para ceremonias al aire libre. Incluye sistema de respaldo climático.',
        details: ['Jardín de 2000m²', 'Pérgola artesanal', 'Plan de contingencia climática', 'Hasta 200 invitados'],
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        height: 'h-56 md:h-72',
        label: 'Banquete Gourmet',
        description: 'Nuestro equipo de chefs ofrece menús de alta cocina con ingredientes premium. Cada plato es una experiencia gastronómica diseñada para sorprender a tus invitados.',
        details: ['Chefs internacionales', 'Menú degustación', 'Opciones veganas y kosher', 'Maridaje personalizado'],
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        height: 'h-64 md:h-80',
        label: 'Iimperiusción Ambiental',
        description: 'Diseño de iimperiusción profesional que transforma completamente la atmósfera del evento. Desde ambientes cálidos e íntimos hasta espectáculos de luces dinámicos.',
        details: ['Diseño lumínico 3D', 'LED programable', 'Efectos especiales', 'Técnico dedicado'],
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80',
        height: 'h-48 md:h-64',
        label: 'Mesa Imperial',
        description: 'Montajes de mesa con vajilla de porcelana fina, cristalería importada y cubertería de plata. Cada detalle de la mesa refleja la elegancia y sofisticación de Imperius.',
        details: ['Vajilla de porcelana', 'Cristalería Riedel', 'Cubertería de plata', 'Mantelería premium'],
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        height: 'h-72 md:h-80',
        label: 'Recepción Nocturna',
        description: 'Nuestro espacio de recepción se transforma de noche en un ambiente mágico con iimperiusción ambiental, barra de cocktails premium y DJ profesional.',
        details: ['Barra premium', 'DJ profesional', 'Pista de baile LED', 'Servicio hasta las 6 AM'],
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        height: 'h-56 md:h-68',
        label: 'Detalles de Lujo',
        description: 'Los pequeños detalles hacen la diferencia. Desde las invitaciones artesanales hasta los souvenirs personalizados, cuidamos cada elemento.',
        details: ['Invitaciones calligráficas', 'Souvenirs artesanales', 'Papelería premium', 'Packaging personalizado'],
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
        height: 'h-64 md:h-72',
        label: 'Pista de Baile',
        description: 'Pista de baile con iimperiusción LED interactiva de 100m², sistema de sonido envolvente y cabina de DJ elevada. La fiesta que tus invitados nunca olvidarán.',
        details: ['100m² de pista', 'Sonido envolvente', 'Iimperiusción interactiva', 'Máquina de humo'],
    },
];

function GalleryItem({ image, index, onSelect }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="masonry-item"
        >
            <motion.div
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => onSelect(image)}
                className={`relative ${image.height} rounded-xl overflow-hidden cursor-pointer group`}
            >
                {/* Real image */}
                <img
                    src={image.src}
                    alt={image.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />

                {/* Hover overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-dark/60 flex items-end"
                >
                    <div className="p-5 w-full">
                        <div className="w-8 h-px bg-gold mb-3" />
                        <p className="text-champagne font-serif text-lg">{image.label}</p>
                        <p className="text-champagne/50 text-sm mt-1">Click para más información →</p>
                    </div>
                </motion.div>

                {/* Bottom label always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <p className="text-champagne font-serif text-sm drop-shadow-lg">{image.label}</p>
                </div>

                {/* Subtle border glow on hover */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    className="absolute inset-0 rounded-xl border border-gold/30"
                />
            </motion.div>
        </motion.div>
    );
}

function Lightbox({ image, onClose }) {
    if (!image) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" />

            {/* Content */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-lighter border border-gold/10"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-dark/80 border border-champagne/10 flex items-center justify-center text-champagne/60 hover:text-gold hover:border-gold/30 transition-all"
                >
                    ✕
                </button>

                {/* Image */}
                <div className="relative h-[40vh] md:h-[50vh]">
                    <img
                        src={image.src.replace('w=800', 'w=1200')}
                        alt={image.label}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter via-transparent to-transparent" />
                </div>

                {/* Details */}
                <div className="p-6 md:p-10 -mt-16 relative">
                    <div className="w-12 h-px bg-gold mb-4" />
                    <h3 className="font-serif text-3xl md:text-4xl text-champagne mb-4">{image.label}</h3>
                    <p className="text-champagne/60 leading-relaxed mb-8 max-w-2xl">{image.description}</p>

                    {/* Details grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        {image.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-dark/40 border border-champagne/5">
                                <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                                <span className="text-champagne/70 text-sm">{detail}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="#quote"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-dark font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                    >
                        Consultar por este espacio
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Gallery() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <section id="gallery" className="py-24 md:py-32 bg-dark">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section header */}
                    <div ref={sectionRef} className="text-center mb-16 md:mb-20">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4"
                        >
                            Nuestra Galería
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne mb-6"
                        >
                            Espacios que
                            <span className="text-gold-gradient"> Inspiran</span>
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                            className="text-champagne/40 max-w-lg mx-auto"
                        >
                            Hacé click en cualquier imagen para conocer los detalles de cada espacio y servicio.
                        </motion.p>
                    </div>

                    {/* Masonry grid */}
                    <div className="masonry-grid">
                        {galleryImages.map((image, index) => (
                            <GalleryItem key={image.id} image={image} index={index} onSelect={setSelectedImage} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
            </AnimatePresence>
        </>
    );
}
