import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';

export default function PoliticaCancelacion() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout title="Política de Cancelación" subtitle="Información Legal" bannerImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="prose-custom">
                    <div className="w-12 h-px bg-gold mb-8" />

                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">1. Cancelación por parte del Cliente</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p><strong>Más de 180 días antes del evento:</strong> Se reembolsa el 80% de la seña abonada. Se retiene un 20% en concepto de gastos administrativos.</p>
                                <p><strong>Entre 90 y 180 días:</strong> Se reembolsa el 50% de la seña abonada.</p>
                                <p><strong>Entre 30 y 90 días:</strong> Se reembolsa el 25% de la seña abonada.</p>
                                <p><strong>Menos de 30 días:</strong> No se realizan reembolsos. El monto abonado podrá ser utilizado como crédito para un evento futuro dentro de los 12 meses siguientes.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">2. Cambio de Fecha</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>Los cambios de fecha están sujetos a disponibilidad y deben solicitarse con al menos 90 días de anticipación.</p>
                                <p>Se aplica un cargo administrativo del 5% sobre el valor total del evento por cada cambio de fecha.</p>
                                <p>Se permite un máximo de 2 cambios de fecha por contrato.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">3. Fuerza Mayor</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>En caso de eventos de fuerza mayor (desastres naturales, pandemia, restricciones gubernamentales), se ofrecerá reprogramación sin cargo adicional o reembolso del 100% de los montos abonados.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">4. Cancelación por parte de Imperius Events</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>En el improbable caso de que Imperius Events deba cancelar un evento, se realizará el reembolso del 100% de los montos abonados más una compensación del 10% adicional.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
                            <p className="text-dark-medium/70 text-sm leading-relaxed">
                                <strong className="text-gold">Nota importante:</strong> Todas las solicitudes de cancelación deben realizarse por escrito al email reservas@imperiusevents.com. La fecha de recepción del email será considerada como fecha oficial de la solicitud.
                            </p>
                        </div>

                        <p className="text-dark-medium/40 text-xs">Última actualización: Febrero 2026</p>
                    </div>
                </motion.div>
            </div>
        </PageLayout>
    );
}
