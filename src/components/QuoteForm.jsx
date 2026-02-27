import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const eventTypes = [
    { id: 'boda', label: 'Boda', icon: '💍' },
    { id: 'corporativo', label: 'Corporativo', icon: '🏢' },
    { id: 'cumpleanos', label: 'Cumpleaños', icon: '🎂' },
    { id: 'gala', label: 'Gala Benéfica', icon: '✨' },
    { id: 'aniversario', label: 'Aniversario', icon: '🥂' },
    { id: 'otro', label: 'Otro', icon: '🎉' },
];

const guestRanges = [
    { id: '50', label: 'Hasta 50', desc: 'Evento íntimo' },
    { id: '100', label: '50 - 100', desc: 'Evento mediano' },
    { id: '200', label: '100 - 200', desc: 'Evento grande' },
    { id: '300', label: '200 - 300', desc: 'Gran celebración' },
    { id: '300+', label: 'Más de 300', desc: 'Mega evento' },
];

const steps = [
    { number: 1, title: 'Tipo de Evento', subtitle: '¿Qué celebramos?' },
    { number: 2, title: 'Invitados', subtitle: '¿Cuántos serán?' },
    { number: 3, title: 'Fecha', subtitle: '¿Cuándo será?' },
    { number: 4, title: 'Contacto', subtitle: 'Tus datos' },
];

const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -200 : 200, opacity: 0 }),
};

export default function QuoteForm() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(1);
    const [formData, setFormData] = useState({
        eventType: '',
        guests: '',
        date: '',
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const goNext = () => {
        if (currentStep < 3) {
            setDirection(1);
            setCurrentStep((s) => s + 1);
        }
    };

    const goPrev = () => {
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep((s) => s - 1);
        }
    };

    const canProceed = () => {
        switch (currentStep) {
            case 0: return formData.eventType !== '';
            case 1: return formData.guests !== '';
            case 2: return formData.date !== '';
            case 3: return formData.name && formData.email && formData.phone;
            default: return false;
        }
    };

    const handleSubmit = () => {
        if (canProceed()) {
            setSubmitted(true);
        }
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <section id="quote" className="py-24 md:py-32 bg-dark">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div ref={sectionRef} className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4"
                    >
                        Cotización
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-champagne mb-6"
                    >
                        Hacé realidad tu
                        <span className="text-gold-gradient"> Evento Soñado</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
                    />
                </div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="glass-card rounded-2xl p-12 text-center"
                    >
                        <div className="text-5xl mb-6">🥂</div>
                        <h3 className="font-serif text-3xl text-champagne mb-4">¡Solicitud Enviada!</h3>
                        <p className="text-champagne/60 mb-8">Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas para coordinar los detalles de tu evento.</p>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass-card rounded-2xl p-6 md:p-10"
                    >
                        {/* Progress bar */}
                        <div className="mb-10">
                            <div className="flex justify-between mb-3">
                                {steps.map((step, i) => (
                                    <div key={step.number} className="flex flex-col items-center">
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${i <= currentStep
                                                    ? 'bg-gradient-to-br from-gold to-gold-dark text-dark'
                                                    : 'bg-dark-lighter text-champagne/30 border border-champagne/10'
                                                }`}
                                        >
                                            {i < currentStep ? '✓' : step.number}
                                        </div>
                                        <span className={`text-xs mt-2 hidden sm:block transition-colors duration-300 ${i <= currentStep ? 'text-gold' : 'text-champagne/30'
                                            }`}>
                                            {step.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full bg-dark-lighter rounded-full h-1 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                />
                            </div>
                        </div>

                        {/* Step content */}
                        <div className="min-h-[280px] relative overflow-hidden">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentStep}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                                    className="w-full"
                                >
                                    {/* Step 1: Event Type */}
                                    {currentStep === 0 && (
                                        <div>
                                            <h3 className="font-serif text-2xl text-champagne mb-2">{steps[0].subtitle}</h3>
                                            <p className="text-champagne/40 text-sm mb-8">Seleccioná el tipo de evento que estás planeando</p>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {eventTypes.map((type) => (
                                                    <motion.button
                                                        key={type.id}
                                                        whileHover={{ scale: 1.03 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        onClick={() => setFormData({ ...formData, eventType: type.id })}
                                                        className={`p-4 rounded-xl text-center transition-all duration-300 ${formData.eventType === type.id
                                                                ? 'bg-gradient-to-br from-gold/20 to-gold-dark/10 border-2 border-gold text-champagne'
                                                                : 'bg-dark-lighter/50 border border-champagne/10 text-champagne/60 hover:border-gold/30'
                                                            }`}
                                                    >
                                                        <span className="text-2xl block mb-2">{type.icon}</span>
                                                        <span className="text-sm font-medium">{type.label}</span>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 2: Guest Count */}
                                    {currentStep === 1 && (
                                        <div>
                                            <h3 className="font-serif text-2xl text-champagne mb-2">{steps[1].subtitle}</h3>
                                            <p className="text-champagne/40 text-sm mb-8">Seleccioná la cantidad aproximada de invitados</p>
                                            <div className="space-y-3">
                                                {guestRanges.map((range) => (
                                                    <motion.button
                                                        key={range.id}
                                                        whileHover={{ scale: 1.01 }}
                                                        whileTap={{ scale: 0.99 }}
                                                        onClick={() => setFormData({ ...formData, guests: range.id })}
                                                        className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 ${formData.guests === range.id
                                                                ? 'bg-gradient-to-r from-gold/15 to-gold-dark/10 border-2 border-gold'
                                                                : 'bg-dark-lighter/50 border border-champagne/10 hover:border-gold/30'
                                                            }`}
                                                    >
                                                        <div className="text-left">
                                                            <span className={`text-base font-medium ${formData.guests === range.id ? 'text-champagne' : 'text-champagne/60'}`}>
                                                                {range.label}
                                                            </span>
                                                            <p className={`text-xs mt-0.5 ${formData.guests === range.id ? 'text-gold' : 'text-champagne/30'}`}>
                                                                {range.desc}
                                                            </p>
                                                        </div>
                                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.guests === range.id
                                                                ? 'border-gold bg-gold'
                                                                : 'border-champagne/20'
                                                            }`}>
                                                            {formData.guests === range.id && (
                                                                <motion.div
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    className="w-2 h-2 bg-dark rounded-full"
                                                                />
                                                            )}
                                                        </div>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3: Date */}
                                    {currentStep === 2 && (
                                        <div>
                                            <h3 className="font-serif text-2xl text-champagne mb-2">{steps[2].subtitle}</h3>
                                            <p className="text-champagne/40 text-sm mb-8">Seleccioná una fecha tentativa para tu evento</p>
                                            <div className="flex flex-col items-center gap-6">
                                                <input
                                                    type="date"
                                                    value={formData.date}
                                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    min="2026-03-01"
                                                    className="w-full max-w-sm bg-dark-lighter/50 border border-champagne/10 rounded-xl px-5 py-4 text-champagne text-center text-lg focus:outline-none focus:border-gold transition-colors duration-300 [color-scheme:dark]"
                                                />
                                                <p className="text-champagne/30 text-xs text-center">
                                                    Las fechas de fin de semana tienen un recargo especial. <br />Consultá disponibilidad exacta con nuestro equipo.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 4: Contact Information */}
                                    {currentStep === 3 && (
                                        <div>
                                            <h3 className="font-serif text-2xl text-champagne mb-2">{steps[3].subtitle}</h3>
                                            <p className="text-champagne/40 text-sm mb-8">Dejanos tus datos para contactarte</p>
                                            <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    placeholder="Nombre completo"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-dark-lighter/50 border border-champagne/10 rounded-xl px-5 py-3.5 text-champagne placeholder-champagne/30 focus:outline-none focus:border-gold transition-colors duration-300"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-dark-lighter/50 border border-champagne/10 rounded-xl px-5 py-3.5 text-champagne placeholder-champagne/30 focus:outline-none focus:border-gold transition-colors duration-300"
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="Teléfono / WhatsApp"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full bg-dark-lighter/50 border border-champagne/10 rounded-xl px-5 py-3.5 text-champagne placeholder-champagne/30 focus:outline-none focus:border-gold transition-colors duration-300"
                                                />
                                                <textarea
                                                    placeholder="Mensaje adicional (opcional)"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    rows={3}
                                                    className="w-full bg-dark-lighter/50 border border-champagne/10 rounded-xl px-5 py-3.5 text-champagne placeholder-champagne/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-champagne/5">
                            <button
                                onClick={goPrev}
                                disabled={currentStep === 0}
                                className={`px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${currentStep === 0
                                        ? 'opacity-0 cursor-default'
                                        : 'border border-champagne/20 text-champagne/60 hover:border-gold hover:text-gold'
                                    }`}
                            >
                                ← Anterior
                            </button>

                            {currentStep < 3 ? (
                                <motion.button
                                    whileHover={canProceed() ? { scale: 1.03 } : {}}
                                    whileTap={canProceed() ? { scale: 0.97 } : {}}
                                    onClick={goNext}
                                    disabled={!canProceed()}
                                    className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${canProceed()
                                            ? 'bg-gradient-to-r from-gold-dark to-gold text-dark hover:shadow-lg hover:shadow-gold/25'
                                            : 'bg-dark-lighter text-champagne/20 cursor-not-allowed'
                                        }`}
                                >
                                    Siguiente →
                                </motion.button>
                            ) : (
                                <motion.button
                                    whileHover={canProceed() ? { scale: 1.03 } : {}}
                                    whileTap={canProceed() ? { scale: 0.97 } : {}}
                                    onClick={handleSubmit}
                                    disabled={!canProceed()}
                                    className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${canProceed()
                                            ? 'bg-gradient-to-r from-gold-dark to-gold text-dark hover:shadow-lg hover:shadow-gold/25'
                                            : 'bg-dark-lighter text-champagne/20 cursor-not-allowed'
                                        }`}
                                >
                                    Enviar Solicitud ✨
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
