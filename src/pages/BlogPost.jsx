import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

// Mock database mapping slugs to content
const blogDatabase = {
    '1': {
        title: '10 Tendencias en Bodas para 2026',
        date: '15 Feb 2026',
        category: 'Bodas',
        author: 'María Elena Rodríguez',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
        content: [
            'El 2026 trae consigo una ola de innovación en el mundo de las bodas, donde la personalización extrema y la experiencia de los invitados cobran un protagonismo sin precedentes. Atrás quedaron los eventos de molde; hoy cada pareja busca contar su propia historia de amor de manera auténtica y memorable.',
            '## 1. Experiencias Inmersivas y Mapping',
            'Más allá de una simple fiesta, las parejas buscan crear universos temáticos. El uso de proyectores mapping en las paredes del salón para transformar el entorno entre la cena y el baile es una de las inversiones más solicitadas. Desde bosques encantados hasta proyecciones astrales en el techo.',
            '## 2. El Auge del Lujo Consciente',
            'La sostenibilidad ya no es una opción, es un requerimiento de la nueva generación. Veremos arreglos florales en macetas u oasis biodegradables que los invitados pueden llevarse a casa, banquetes con política zero-waste priorizando ingredientes de kilómetro cero, y papelería plantable (con semillas embebidas en el papel grueso de algodón).',
            '> "El verdadero lujo de esta década es la capacidad de celebrar a lo grande dejando un impacto positivo en nuestro entorno y nuestra comunidad." - María Elena Rodríguez',
            '## 3. Micro-bodas de Ultra Lujo',
            'Si bien los grandes eventos vuelven, la "micro-boda" (50 a 80 invitados) llegó para quedarse. La gran diferencia radica en el presupuesto per cápita. Al invitar a menos personas, las parejas invierten en menús de degustación de 8 pasos, maridaje con un sommelier exclusivo en cada mesa, y regalos personalizados de altísima gama para los asistentes.',
            '## 4. Retorno del Maximalismo Curado',
            'El minimalismo estricto da un paso atrás para dar lugar a mesas imperiales deslumbrantes. Candelabros de cristal, vajilla de colección con ribetes de oro, y espectaculares instalaciones florales aéreas dominan la escena visual. La clave de este año es el equilibrio: pueden haber muchísimos elementos sobre la mesa, pero siempre bajo una paleta de colores estrictamente definida y monocromática.',
            '## 5. Fotografía Editorial y Formato Analógico',
            'Las fotos estáticas y posadas pierden terreno continuamente frente al estilo "fashion editorial" y el fotoperiodismo puro. Adicionalmente, contratar a un fotógrafo secundario que dispare exclusivamente en formato analógico (película de 35mm) se ha vuelto un absoluto "must-have" para capturar la nostalgia, el grano imperfecto y la magia de los momentos reales, devolviéndole ese toque vintage tan buscado.',
            'En conclusión, el 2026 nos invita a romper las reglas tradicionales. Lo más importante al planificar tu casamiento no es seguir todas estas tendencias al pie de la letra para impresionar a terceros, sino elegir cuidadosamente aquellas que realmente resuenan con su identidad y su historia como pareja.'
        ]
    },
    '2': {
        title: 'Cómo Elegir el Menú Perfecto para tu Evento',
        date: '10 Feb 2026',
        category: 'Gastronomía',
        author: 'Diego Martínez (Chef Ejecutivo)',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
        content: [
            'La gastronomía es, indiscutiblemente, el ancla de cualquier celebración exitosa. Un menú bien seleccionado por profesionales no solo alimenta, sino que se convierte en un tema de conversación inmediato y en una experiencia sensorial que los invitados recordarán por muchos años.',
            '## Entender el Perfil de los Invitados',
            'El primer paso crítico es realizar un análisis pormenorizado de tus invitados. Hoy en día, pedir "menú general" no basta. Es absolutamente vital diseñar opciones veganas, sin TACC (libres de gluten) y libres de lactosa que mantengan exactamente el mismo nivel de excelencia visual, complejidad y esplendor gustativo que los platos principales tradicionales destinados a la mayoría.',
            '> "Un menú verdaderamente inclusivo es el mayor acto de hospitalidad que un anfitrión puede ofrecer. Nadie debería sentirse como una ocurrencia tardía en tu mesa." - Chef Diego Martínez',
            '## Respetar la Estacionalidad',
            'La temporada del año juega un rol crucial. Ingredientes frescos y de estación no solo garantizan el mejor sabor en boca, sino que demuestran un compromiso palpable con la calidad. Para un evento en pleno verano o mediodía, una mesa de mar y ceviches frescos seguida de platos principales ligeros será mucho más agradecida por el estómago que un ragú de carnes pesadas. A la inversa en el crudo invierno: es el momento perfecto e ideal para salsas de reducción profunda, polentas trufadas y carnes confitadas de cocción lenta.',
            '## El Ritmo del Evento (Timing)',
            'La sincronización entre la cocina, el servicio de salón y el DJ es coreografía pura. Considerá el "flow" de la fiesta: ¿Querés que los invitados pasen 3 horas ininterrumpidas sentados en una cena de gala formal, o preferís un cóctel extendido ("living style") con 15 islas de comida interactivas que fomente el movimiento y la socialización temprana en la pista?',
            '## La Elección del Maridaje',
            'De nada sirve un plato excepcional si está acompañado de una bebida que enmascara o destruye sus delicados sabores. Desde Imperius Events recomendamos enfáticamente destinar al menos un 20% del presupuesto gastronómico exclusivamente a la selección curada de vinos y espumantes. Una reunión de degustación privada con nuestro head sommelier te permitirá descubrir cómo un Pinot Noir de la Patagonia sutil puede elevar mágicamente un risotto de hongos, o cómo un Chardonnay con alto paso por roble transforma por completo una pesca blanca.'
        ]
    },
    '3': {
        title: 'La Importancia de la Iimperiusción en Eventos',
        date: '5 Feb 2026',
        category: 'Diseño',
        author: 'Lucas Fernández',
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80',
        content: [
            'Podés invertir en las flores más caras del mundo y la arquitectura del salón puede ser deslumbrante, pero si la iimperiusción es incorrecta o plana, el diseño entero colapsa. La luz es la varita mágica que dicta el estado de ánimo, dirige orgánicamente la atención y, crucialmente, determina cómo se verán el 100% de las fotos y videos.',
            '## Las Capas de Iimperiusción',
            'Un diseño lumínico profesional nunca se compone de una sola fuente general de luz, sino de múltiples "capas" trabajando en sincronía. La luz perimetral (uplighting) baña majestuosamente las paredes y define los límites del espacio arquitectónico. El "pinspotting" (luces direccionales cenitales enfocadas quirúrgicamente) resalta exclusivamente los complejos centros de mesa florales, creando drama y elegancia mientras oscurece el fondo. Finalmente, la tenue luz ambiental asegura que las posturas y los rostros de los invitados se vean espectaculares y relajados.',
            '## El Poder de la Temperatura de Color',
            'El error de principiante más común y destructor de ambientes es mezclar aleatoriamente diferentes temperaturas de color (luces frías estilo hospital con luces cálidas hogareñas). Para eventos sociales de lujo nocturnos, la regla inquebrantable de oro es mantener una paleta estricta, cálida y envolvente (alrededor de los 2500K a 3000K), una temperatura ambarina sutil que emula perfectamente la relajante luz de miles de velas y el eterno atardecer dorado.',
            '> "La luz es, sin lugar a dudas, la pintura invisible que colorea las emociones y dicta el ritmo cardíaco de tus propios invitados." - Lucas Fernández',
            '## Transiciones y Control Dinámico (DMX)',
            'La fiesta perfecta está dividida en diferentes y claros actos: recepción elegante, cena tranquila, momentos emotivos protocolares, y finalmente el desenfreno del baile. La iimperiusción debe evolucionar sinérgicamente con el avance de la noche. Mediante el uso de sofisticadas consolas de control DMX operadas por ingenieros en vivo, nuestro equipo programa transiciones totalmente imperceptibles para el ojo humano: iniciamos con una luz casi invisible, tenue y ámbar durante los discursos y brindis, que gradualmente muta, toma pulso y estalla hacia magentas vibrantes, azules profundos y agresivos efectos estroboscópicos de alto impacto exactamente en el milisegundo en que el estribillo de la banda principal explota desde el escenario.'
        ]
    },
    '4': {
        title: 'Flores de Temporada: Guía Mes a Mes',
        date: '28 Ene 2026',
        category: 'Decoración',
        author: 'Camila Torres',
        image: 'https://images.unsplash.com/photo-1561128290-005859246e58?w=1920&q=80',
        content: [
            'Contratar exclusivas flores de estación ya no es solo una respetable decisión ecológica de bajo impacto o una astuta movida económica; es nada más y nada menos que la garantía absoluta de que la madre naturaleza te entregará su maravilloso producto final en el pico máximo irrepetible de su belleza visual, tamaño de corola y resiliencia ante el estrés del salón.',
            '## Primavera Radiante (Septiembre - Noviembre)',
            'Es indudablemente la temporada reina que todas esperan. Las codiciadas peonías hacen su esperada, mágica y tristemente breve aparición (alcanzando su cenit volumétrico especialmente en pleno noviembre), siendo las protagonistas más indiscutibles y exigidas para los ramos de todas las novias del país debido a su romanticismo inherente y textura de ensueño. Al mismo tiempo, también es el instante temporal ideal de recolección para delicados tulipanes locales, oscuras anémonas de corazón negro, fragantes fresias y los espectaculares renacidos ranúnculos de mil pétalos.',
            '## Verano Vibrante (Diciembre - Febrero)',
            'El aplastante calor exige inteligentemente la utilización de grandes y audaces flores estructuralmente resilientes a la deshidratación rápida. Es definitivamente el reino monárquico de las hortensias que generan un gran impacto masivo con poco recuento de tallos, los invaluables lisianthus (que soportan excelente largas jornadas incluso fuera de pesados jarrones con agua) y las texturadas dalias reinantes en toda su extensa gama botánica de audaces y picantes colores sumamente cálidos. El exuberante y brillante verde tropical lustroso, como gigantescas hojas recortadas de monstera deliciosa autóctona y amplias palmas en abanico, aporta maravillosamente una fresca nota a los grandes e imponentes arreglos aéreos majestuosos cayendo del techo.',
            '## Otoño Dramático (Marzo - Mayo)',
            'Con el inexorable cambio cromático, el follaje arbolado recobra un protagonismo inmensamente dramático. Las elegantes y grandes hojas caídas de roble majestuosamente tintadas lentamente de un rojo y cobre otoñal, expertamente combinadas en floreros con altos y rectos tallos de amarilis atrompetados, pomposos crisantemos rizados de gran e inusual tamaño de esfera, y frágiles rosas inglesas de jardín intencionalmente "oxidadas", crean indudablemente hermosas e imponentes composiciones simétricas repletas de una profundísima textura táctil y calidez visual inigualable.',
            '> "Inspirarse profundamente y de corazón en la auténtica estación transcurrente del año es verdaderamente permitir inteligentemente que los hermosos exteriores del jardín y la naturaleza misma dialoguen de forma poética, fluida y sumamente armónica con el rígido interior estructural del salón." - Camila Torres',
            '## Invierno Sofisticado (Junio - Agosto)',
            'Contrario a la creencia urbana engañosa y tremendamente limitante y extendida de la falta de belleza del invierno desierto, este crudo tiempo del año ofrece y reserva para sus amantes una pálida paleta asombrosamente fría y sofisticada. Sorprendentemente es la anhelada gran época de esplendoroso corte para los ansiados tulipanes blancos de duro invierno con capullos súper cerrados como pimpollos perfectos, las largas y muy delgaditas y graciosas calas albinas para centros minimalistas esbeltos y alargados que estilizan fuertemente los anchos salones, además de una infinidad de oscuras y enigmáticas ramas invernales secas muy pero muy útiles en la base para dar enorme estructura visual a grandes nubes despojadas sin una sola hoja verde. Orquídeas rústicas phalaenopsis en cascada sedosa y phalaenopsis importadas aportan siempre en esta era y rincón ese anhelado indispensable golpe fuerte estético, final contundente de un lujo total y absoluto que maravillosamente reluce visualmente al lado o bien cerca contrastando maravillosamente hasta el extremo con toscas ramas fragantes de fuerte e inolvidable pino austral silvestre texturizado y un sinnúmero de plateadas hojas empolvadas opacas grisáceas del común eucalipto cinerea y su fuerte pero relajante aroma medicinal persistente.'
        ]
    },
    '5': {
        title: 'Checklist: 12 Meses Antes de tu Boda',
        date: '20 Ene 2026',
        category: 'Bodas',
        author: 'Valentina López',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
        content: [
            'La extensa, intrincada y demandante organización de una boda puede, sin dudas, parecer a priori algo sumamente abrumador, caótico e inclusive aterrador y estresante para quienes nunca lo experimentaron. Sin embargo, el sagrado gran y exclusivo secreto del aparente éxito mágico impecable de grandes producciones en equipo, y sobre todo la enorme y casi imposible capacidad vital innegociable incalculable de asegurar de llegar serenos, calmados, enteramente relajados y ampliamente felices al importante momento culmine en el soñado altar, reside inexorable y fuertemente amarrado en un minucioso e inquebrantable gran cronograma puramente estratégico y metodológico.',
            '## Meses 12 a 10: La Compleja Fundación Sólida',
            'Ésta inicial fase trascendental trata esencial e inequívocamente sobre "precisamente descubrir el amplio terreno inexplorado". Lo absolutamente primordial es, antes de ver colores, sentarse seriamente frente a crudos y helados números duros de hojas de cálculo logísticas y firmemente anclar, sellar, discutir, establecer y acordar entre los muy ansiosos novios intervinientes el claro y sensato presupuesto realista y total aproximado máximo disponible en el horizonte seguro. Al compulsoriamente hacerlo, simultáneamente definir cuidadosamente el primer gran borrador base inicial innegociable estimativo global final de una inconstante lista teórica de invitados altamente preliminar de amigos vitales y compromiso familiares ineludibles. Solamente después vendrá entonces el deseado y tan a menudo largo peregrinaje o proceso exhaustivo crítico para comparar y con altísima y estricta urgencia imperiosa fuertemente asegurar, señalando en agenda unánimemente y concretamente, firmar y fijar la importantísima primera e irreemplazable piedra de toque logística clave inquebrantable: encontrar ese muy particular gran y elusivo "venue", ese salón imponente perfecto anhelado... y fijar la fecha.',
            '## Meses 9 a 7: Equipo Exclusivo e Insustituibles',
            'El brillante aclamado muy buscado renombrado premiado artista local estrella del lente maestro experto puro inmejorable fotógrafo especializado único documental editorial cotizado internacional talentoso que admirás profundamente en secreto guardado Instagram, el codiciado gran artista de montaje en cuna videógrafo cinematográfico de bodas, y el indispensable muy enérgico infatigable anfitrión o en ocasiones carismática banda legendaria principal en vivo, suelen llenar rápidamente su año. Contratar ahora es mandatorio.',
            '> "Un evento grande bien planificado minuciosamente a nivel temporal con meses de anticipada y rigurosa estrategia, permite siempre hermosamente que los duros inevitables imprevistos resulten meras y pasajeras anécdotas superadas por siempre." - Valentina López',
            '## Meses 6 a 4: El Brillante Diseño Estético y Detalles',
            'Nos enfocamos en la mágica concepción visual corporativa de cada detalle minúsculo o mayúsculo a considerar con la paleta de colores macro elegida. Mantelería rica, vajilla importada y exuberantes instalaciones ricas de flores. Emitir pronto formalmente los "Save the Date".',
            '## Meses 3 a 2: Protocolo Fino, Cierre Menu y Ensayo Vestimenta',
            'Momento ideal seguro de realizar obligadamente la importante cata de platos del catering y asegurar las últimas pruebas tensas pero felices del vestido nupcial o ajustado traje formal a pura medida.',
            '## El Último Mes: Cierre Absoluto Resolutivo y Disfrute Sereno.',
            'A escasas 72 horas del ansiado día gran glorioso, valientemente apagá ya tu celular de comunicación, cortá con proveedores estresantes y relajate respirando confiando feliz plenamente tranquila y alegre. Todo el peso pesado recae sobre nuestros propios fuertes hombros expertos. A disfrutar.'
        ]
    },
    '6': {
        title: 'Eventos Corporativos Post-Pandemia',
        date: '12 Ene 2026',
        category: 'Corporativo',
        author: 'Equipo Imperius',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
        content: [
            'El paradigma mundial del rubro específico de planeamiento de masivos eventos corporativos presenciales ha mutado irrevocablemente, adoptando sorpresivamente maravillosas nuevas y efectivas formas colaborativas inexploradas integrales y totalmente revolucionarias para las grandes asambleas o galas corporativas.',
            '## Del Masivo e Impersonal a lo Cálido, Cercano e Íntimo',
            'Las grandes aglutinadas larguísimas cansinas aburridas rígidas y monumentales clásicas convenciones estrictas y repletísimas atlánticas multitudinarias rígidas densas tradicionales llegaron en su inmensa y colosal mayoría a un esperado fin merecido en gran parte de industrias de avanzada actuales mundiales. La marcada y definida tendencia líder mundial presente dominante innegable de recursos humanos recae firme hoy sólidamente sobre puros, muy ágiles o divertidos retiros o summits intensamente ejecutivos ("off-sites" naturales corporativos), donde el gran valioso foco puramente cualitativo corporativo reside fuertemente e intacto no verdaderamente en puramente escuchar estáticos pasivamente un denso larguísimo monólogo aburrido sino en fomentar imperiosa interacción inter-áreas activa directa fluida sincera y valioso networking personal en la cálida relajada naturaleza del país que renueve totalmente y aúne con fuerza real todos los lazos empresariales.',
            '## Experiencia Moderna Phygital (Física y Digital)',
            'La clásica conveniente transmisión satelital digital live remota llegó instalándose firme y permanentemente logrando una definitiva adopción integral. Pero evolucionó exponencialmente hacia otro universo; ya no consiste exclusivamente de meramente fijar una pobre, única, triste o vieja aburrida y pequeña cámara web pasiva estática. Hablamos imperativamente aquí sobre dinámica realización televisiva full HD multi-cámara sincronizada dinámica corporativa, sondeos masivos y muy dinámicas y eficientes encuestas ágiles remotas de empleados que en vivo instantáneamente sin latencia direccionan veloz y completamente directo las discusiones presenciales reales del salón mismo de debate.',
            '## Clara y Fuerte Sustentabilidad Empresarial Global (RSE y ESG)',
            'Las prestigiosas macro multinacionales gigantes argentinas obligan explícita y forzosamente en sus estrictísimas largas licitaciones anuales que las empresas del fuerte evento y las hermosas y espectaculares sedes locales alineen en perfecto total 100% indiscutible todos absolutamente sus procesos logísticos ecológicos a los objetivos serios mundiales sustentables globales ESG vigentes que defienden. Impresión absolutamente nula (y reemplazo masivo de inútil excesivo clásico viejo papel rústico por útiles rápidas efectivas y brillantes funcionales apps de seguimiento de evento real personalizadas), exigencia legal pura estricta de compensar obligadamente total huella pesada de polución y dióxido, y elección obligada formal pura imperativa prioritaria por catering sustentable vegetal (plant-based) muy cercano KM 0.'
        ]
    },
    'default': {
        title: 'Artículo del Blog Imperius',
        date: 'Febrero 2026',
        category: 'General',
        author: 'Equipo Imperius',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1920&q=80',
        content: [
            'Este es un artículo completo en desarrollo por el equipo editorial de Imperius Events. Muy pronto publicaremos más novedades enfocadas a seguir inspirando la creación de momentos de celebración de estilo premium inalcanzable.'
        ]
    }
};

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogDatabase[slug] || blogDatabase['default'];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <PageLayout
            title={post.category}
            subtitle="Nuestro Blog"
            bannerImage={post.image}
        >
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                {/* Article Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4 block">{post.date} &nbsp;•&nbsp; Por {post.author}</span>
                        <h1 className="font-serif text-3xl md:text-5xl text-dark mb-8 leading-tight">{post.title}</h1>
                        <div className="w-24 h-px bg-gold/50 mx-auto" />
                    </motion.div>
                </div>

                {/* Article Content */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="prose-custom space-y-8">
                    {post.content.map((block, index) => {
                        if (block.startsWith('## ')) {
                            return <h2 key={index} className="font-serif text-2xl md:text-3xl text-dark mt-16 mb-6">{block.replace('## ', '')}</h2>;
                        }
                        if (block.startsWith('> ')) {
                            return (
                                <blockquote key={index} className="relative border-l-4 border-gold bg-gold/5 p-8 rounded-r-2xl my-10">
                                    <span className="absolute top-2 left-4 text-6xl text-gold/20 font-serif leading-none">"</span>
                                    <p className="italic text-dark-medium/80 text-xl leading-relaxed relative z-10">{block.replace('> ', '')}</p>
                                </blockquote>
                            );
                        }
                        return (
                            <p key={index} className="text-dark-medium/80 leading-relaxed md:text-lg">
                                {block}
                            </p>
                        );
                    })}
                </motion.div>

                {/* Back Link */}
                <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.5 }} className="mt-20 text-center border-t border-champagne-dark/20 pt-12">
                    <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-champagne-dark/20 text-dark font-medium hover:border-gold hover:text-gold transition-all tracking-wider uppercase text-sm group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Volver al Blog
                    </Link>
                </motion.div>
            </div>
        </PageLayout>
    );
}
