import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import PageLayout from '../components/PageLayout';

export default function Contacto() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [submitted, setSubmitted] = useState(false);

    return (
        <PageLayout title="Contacto" subtitle="Hablemos de tu evento" bannerImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <div ref={ref} className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
                        <div className="w-12 h-px bg-gold mb-6" />
                        <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">Estamos para <span className="text-gold">ayudarte</span></h2>
                        <p className="text-dark-medium/70 leading-relaxed mb-8">
                            ¿Tenés un evento en mente? Contactanos y nuestro equipo te responderá dentro de las próximas 24 horas con una propuesta personalizada.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-dark mb-1">Dirección</h3>
                                    <p className="text-dark-medium/60 text-sm">Av. del Libertador 5200, Zona Norte<br />Buenos Aires, Argentina</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-dark mb-1">Teléfono</h3>
                                    <p className="text-dark-medium/60 text-sm">+54 11 5555-0000<br />WhatsApp: +54 9 11 5555-0001</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-dark mb-1">Email</h3>
                                    <p className="text-dark-medium/60 text-sm">info@imperiusevents.com<br />reservas@imperiusevents.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-dark mb-1">Horarios</h3>
                                    <p className="text-dark-medium/60 text-sm">Lunes a Viernes: 9:00 - 19:00<br />Sábados: 10:00 - 14:00 (con cita previa)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
                        {submitted ? (
                            <div className="h-full flex items-center justify-center p-12 rounded-2xl bg-white-warm/50 border border-champagne-dark/10 text-center">
                                <div>
                                    <svg className="w-12 h-12 text-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <h3 className="font-serif text-2xl text-dark mb-3">¡Mensaje Enviado!</h3>
                                    <p className="text-dark-medium/60">Te responderemos dentro de las próximas 24 horas.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="p-8 rounded-2xl bg-white-warm/50 border border-champagne-dark/10">
                                <h3 className="font-serif text-2xl text-dark mb-6">Envianos un mensaje</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Nombre" className="w-full bg-cream border border-champagne-dark/15 rounded-xl px-4 py-3 text-dark placeholder-dark-medium/30 focus:outline-none focus:border-gold transition-colors text-sm" />
                                        <input type="text" placeholder="Apellido" className="w-full bg-cream border border-champagne-dark/15 rounded-xl px-4 py-3 text-dark placeholder-dark-medium/30 focus:outline-none focus:border-gold transition-colors text-sm" />
                                    </div>
                                    <input type="email" placeholder="Email" className="w-full bg-cream border border-champagne-dark/15 rounded-xl px-4 py-3 text-dark placeholder-dark-medium/30 focus:outline-none focus:border-gold transition-colors text-sm" />
                                    <input type="tel" placeholder="Teléfono" className="w-full bg-cream border border-champagne-dark/15 rounded-xl px-4 py-3 text-dark placeholder-dark-medium/30 focus:outline-none focus:border-gold transition-colors text-sm" />
                                    <select className="w-full bg-cream border border-champagne-dark/15 rounded-xl px-4 py-3 text-dark-medium/50 focus:outline-none focus:border-gold transition-colors text-sm">
                                        <option>Tipo de evento</option>
                                        <option>Boda</option>
                                        <option>Evento Corporativo</option>
                                        <option>Fiesta Privada</option>
                                        <option>Gala</option>
                                        <option>Otro</option>
                                    </select>
                                    <textarea placeholder="Contanos sobre tu evento..." rows={4} className="w-full bg-cream border border-champagne-dark/15 rounded-xl px-4 py-3 text-dark placeholder-dark-medium/30 focus:outline-none focus:border-gold transition-colors text-sm resize-none" />
                                    <button onClick={() => setSubmitted(true)} className="w-full px-8 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-dark font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </PageLayout>
    );
}
