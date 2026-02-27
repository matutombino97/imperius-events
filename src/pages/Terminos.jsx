import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PageLayout from '../components/PageLayout';

export default function Terminos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout title="Términos y Condiciones" subtitle="Información Legal" bannerImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                    <div className="w-12 h-px bg-gold mb-8" />

                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">1. Condiciones Generales</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>Estos términos y condiciones regulan la relación contractual entre Imperius Events S.R.L. (en adelante "Imperius") y el cliente contratante (en adelante "el Cliente") para la prestación de servicios de planificación, organización y/o alquiler de espacios para eventos.</p>
                                <p>La contratación de cualquier servicio de Imperius implica la aceptación plena de estos términos y condiciones.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">2. Reserva y Pagos</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>La reserva se confirma únicamente con el pago de la seña correspondiente (30% del presupuesto total) y la firma del contrato de servicios.</p>
                                <p>El saldo restante se abona en cuotas mensuales según el cronograma establecido en el contrato, finalizando 15 días antes del evento.</p>
                                <p>Los precios incluyen IVA. Cualquier servicio adicional no contemplado en el presupuesto original será cotizado por separado.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">3. Responsabilidades del Cliente</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>El Cliente se compromete a proporcionar información veraz sobre la cantidad de invitados, tipo de evento y requerimientos especiales con al menos 30 días de anticipación.</p>
                                <p>El Cliente es responsable del comportamiento de sus invitados y de cualquier daño causado a las instalaciones durante el evento.</p>
                                <p>Cualquier cambio en la cantidad de invitados (±15%) debe comunicarse con al menos 15 días de anticipación.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">4. Responsabilidades de Imperius Events</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>Imperius se compromete a prestar los servicios contratados según lo estipulado en el presupuesto y contrato firmado.</p>
                                <p>Imperius garantiza la disponibilidad del salón, el equipo técnico y la coordinación general del evento en la fecha acordada.</p>
                                <p>En caso de fallas técnicas, Imperius dispondrá de planes de contingencia para garantizar el desarrollo normal del evento.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">5. Propiedad Intelectual</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>Las fotografías y videos del evento podrán ser utilizados por Imperius con fines promocionales (redes sociales, sitio web, portfolio), salvo que el Cliente solicite expresamente lo contrario por escrito.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-dark mb-4">6. Jurisdicción</h2>
                            <div className="space-y-3 text-dark-medium/70 leading-relaxed text-sm">
                                <p>Para cualquier controversia derivada de la interpretación o cumplimiento de estos términos, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, República Argentina.</p>
                            </div>
                        </div>

                        <p className="text-dark-medium/40 text-xs">Última actualización: Febrero 2026</p>
                    </div>
                </motion.div>
            </div>
        </PageLayout>
    );
}
