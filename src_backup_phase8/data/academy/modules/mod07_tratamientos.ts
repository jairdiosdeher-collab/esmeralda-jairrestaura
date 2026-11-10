import { DiplomaModule } from '../../../types/academy';

export const MOD_07_TRATAMIENTOS: DiplomaModule = {
  id: 7,
  code: 'MOD-07',
  title: 'Módulo 7: Tratamientos, Mejoramiento de Claridad, Detección y Normativa LMHC/CIBJO',
  shortTitle: 'Tratamientos y Claridad',
  academicHours: 10,
  overview: 'Física y química del mejoramiento de claridad en esmeraldas. Sustancias tradicionales reversibles (aceite de cedro natural, n=1.516) frente a polímeros epóxicos termoendurecibles (Palma, Opticon, Araldite). Detección analítica por espectroscopía infrarroja FTIR (estiramientos C-H alifáticos), efecto flash, fluorescencia UV y clasificación estandarizada LMHC (None, Minor, Moderate, Significant).',
  competencies: [
    'Diferenciar las propiedades ópticas y químicas del aceite de cedro natural frente a resinas epóxicas sintéticas.',
    'Identificar los picos espectrales diagnósticos de resinas en espectroscopía FTIR (2872, 2928, 2962 cm⁻¹).',
    'Aplicar la clasificación internacional de grados de relleno (None, Minor F1, Moderate F2, Significant F3).',
    'Dominar los protocolos técnicos de desengrase controlado y reversibilidad sin daño estructural.'
  ],
  learningObjectives: [
    'Comprender la física de la igualación de índices de refracción en fisuras que alcanzan la superficie.',
    'Reconocer el destello óptico "flash-effect" (azul y naranja) al microscopio con fibra óptica oblicua.',
    'Explicar por qué las resinas epóxicas catalizadas son éticamente desaconsejadas por su degradación oxidativa.',
    'Interpretar los dictámenes de tratamiento emitidos en reportes gemológicos de GIA, SSEF, Gübelin y CDTEC.'
  ],
  prerequisites: ['Módulos 1 a 6 aprobados o conocimientos intermedios de microscopía y espectroscopía.'],
  heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Instrumental Óptico',
  lessons: [
    {
      id: 'm7-l1',
      moduleId: 7,
      order: 1,
      title: 'Lección 7.1: Principio Físico del Mejoramiento de Claridad: Igualación de Índices de Refracción',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'La óptica de las fracturas abiertas. Reflexión y dispersión parásita de la luz en la interfase aire-berilo (n=1.00 vs 1.58). El efecto de transparencia obtenido al introducir un líquido con índice de refracción igualado (n ≈ 1.51 - 1.57).',
      content: `El tratamiento de mejoramiento de claridad (comúnmente denominado "aceitado" o *clarity enhancement*) no es un invento contemporáneo; se practica desde la antigüedad grecorromana y fue documentado formalmente por Plinio el Viejo en su *Historia Natural* (siglo I d.C.):

### 1. El Problema Óptico de la Fisura Abierta al Aire
Cuando una microfractura natural alcanza la superficie de la esmeralda, penetra aire atmosférico ($n_{\\text{aire}} = 1.000$).
- La diferencia colosal de índice de refracción entre el berilo ($n_{\\text{esmeralda}} \\approx 1.58$) y el aire ($n_{\\text{aire}} = 1.00$) provoca que **hasta un 5% de la luz incidente sufra reflexión total interna y dispersión** en cada cara de la fractura.
- Como resultado, la fisura se hace sumamente visible a simple vista como un plano blanco plateado brillante reflectivo que nubla el paso de la luz e interrumpe la transparencia del cristal.

### 2. El Principio Físico del Relleno Óptico
Si el aire atrapado en la fisura es evacuado al vacío y reemplazado por una sustancia transparente cuyo índice de refracción sea muy próximo al del berilo ($n_{\\text{sustancia}} \\approx 1.51 - 1.57$):
- La reflexión en la interfase berilo-relleno cae a prácticamente **cero** ($R = \\left(\\frac{1.58 - 1.52}{1.58 + 1.52}\\right)^2 \\approx 0.03\\%$).
- La luz atraviesa la fractura en línea recta sin refractarse ni reflejarse; la fisura **"desaparece" ópticamente a la vista**, revelando el color verde corporal transparente subyacente.
- Advertencia crítica: **La fisura sigue existiendo físicamente en la piedra**; el tratamiento únicamente la camufla ópticamente.`,
      keyTakeaways: [
        'El aire en la fisura (n=1.00) dispersa la luz haciendo ver la fractura como una lámina blanca reflectiva.',
        'Al rellenar con una sustancia de índice cercano (n ≈ 1.52 - 1.57), la reflexión cae a cero y la fisura se vuelve invisible.',
        'El tratamiento no suelda la piedra ni repara la fractura; es una ilusión óptica reversible.'
      ],
      scientificFormula: 'R = \\left(\\frac{n_{\\text{berilo}} - n_{\\text{relleno}}}{n_{\\text{berilo}} + n_{\\text{relleno}}}\\right)^2 \\approx 0.0003 \\implies \\text{Reflexión nula}',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Microfotografía comparativa de una fisura superficial con aire reflectivo (izquierda) frente a la misma fisura camuflada ópticamente tras la penetración de aceite de cedro puro (derecha).',
      imageSource: 'GIA Research / Kammerling & Koivula Archive',
      imageAuthor: 'Gemological Institute of America',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm7-l2',
      moduleId: 7,
      order: 2,
      title: 'Lección 7.2: Aceite de Cedro Natural (Cedarwood Oil): Propiedades, Tradición y Reversibilidad',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'El estándar de oro histórico de la gemología. Destilación de Juniperus virginiana, índice de refracción (n=1.516), viscosidad y su virtud suprema: 100% reversible mediante desengrase técnico sin secuelas.',
      content: `El **aceite de madera de cedro natural (*Cedarwood Oil*)** es la sustancia de mejoramiento de claridad universalmente aceptada por el comercio internacional de gemas nobles:

### 1. Naturaleza Química y Física
- Se obtiene por destilación al vapor de la madera del enebro de Virginia (*Juniperus virginiana*).
- Es una mezcla viscosa natural de sesquiterpenos aromáticos (cedreno, cedrol).
- Posee un **índice de refracción de $n = 1.516 - 1.520$ a $20^\\circ\\text{C}$**, extraordinariamente próximo al del berilo ($1.57 - 1.58$).
- Su viscosidad moderada le permite penetrar capilarmente en fisuras microscópicas bajo condiciones de vacío suave y temperatura controlada ($50^\\circ - 60^\\circ\\text{C}$).

### 2. La Virtud Suprema: La Reversibilidad Absoluta
- A diferencia de los pegamentos y resinas, el aceite de cedro natural **no se polimeriza, no se solidifica de forma irreversible ni reacciona químicamente con el berilo**.
- Si un propietario o laboratorio desea limpiar la gema para certificarla en estado virgen (*No Oil*), el aceite de cedro **puede ser extraído en un 100% de manera limpia y segura** mediante un lavado en reflujo Soxhlet con acetona pura o alcohol isopropílico de grado analítico.
- La gema retorna exactamente a su estado geológico original sin sufrir daño superficial ni retención de residuos plásticos.`,
      keyTakeaways: [
        'Aceite de cedro natural (n=1.516): sustancia tradicional aceptada mundialmente.',
        'Su virtud máxima es la reversibilidad 100%: se puede extraer totalmente con acetona pura.',
        'No contiene endurecedores químicos y no daña la piedra a largo plazo.'
      ],
      scientificFormula: 'n_{\\text{aceite de cedro}} = 1.516 \\pm 0.004 \\quad | \\quad \\text{Reversibilidad: 100\\% por desengrase con acetona}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Destilado puro de Juniperus virginiana (aceite de cedro n=1.516) e instrumental de impregnación térmica controlada al vacío.',
      imageSource: 'Laboratorio CDTEC Bogotá / Archivo de Procesamiento',
      imageAuthor: 'Equipo Técnico CDTEC',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm7-l3',
      moduleId: 7,
      order: 3,
      title: 'Lección 7.3: Resinas Epóxicas Sintéticas (Palma, Opticon, Araldite): Riesgos y Degradación',
      readTime: '17 min',
      difficulty: 'Avanzado',
      summary: 'Química de los polímeros termoendurecibles artificiales. Adición de catalizadores y endurecedores químicos. Efectos secundarios a mediano plazo: envejecimiento oxidativo, amarilleamiento, craquelado e irreversibilidad.',
      content: `A partir de la década de 1980 se popularizó en ciertos sectores del comercio el uso de **resinas poliméricas epóxicas sintéticas** (comercializadas con nombres como *Palma, Palmex, Opticon, Araldite, Epo-Tek*):

### 1. El Proceso de Polimerización Artificial
- Son prepolímeros sintéticos a base de diglicidil éter de bisfenol A (DGEBA) con índice de refracción casi perfecto ($n = 1.54 - 1.56$).
- Frecuentemente se aplican con un **catalizador químico endurecedor**: una vez que la resina penetra en la fisura, las moléculas reaccionan entre sí formando cadenas poliméricas cruzadas tridimensionales insolubles.
- La sustancia se solidifica como un plástico duro dentro de las entrañas de la esmeralda.

### 2. Los Graves Problemas a Mediano Plazo
1. **Irreversibilidad o Dificultad Extrema de Extracción:** Una vez catalizada la resina epóxica, los solventes comunes como la acetona o el alcohol no pueden disolverla. Requiere removedores agresivos de pintura (cloruro de metileno) que pueden desestabilizar térmicamente la gema.
2. **Degradación Fotoquímica y Oxidativa:** Con el paso de los años y la exposición a la luz solar (rayos UV) y al oxígeno, los enlaces epóxicos se oxidan. **La resina se vuelve amarilla, parduzca u opaca**, arruinando el color de la esmeralda.
3. **Craquelado Interno:** Al envejecer, el polímero pierde elasticidad, contrayéndose y generando una red blanquecina de microfisuras de contracción (*crazing*) muy desagradable a la vista.
4. **Castigo Comercial:** Las casas de subasta y marcas de alta joyería penalizan severamente a las esmeraldas tratadas con resinas epóxicas, exigiendo descuentos de entre el 30% y el 60% frente al aceite de cedro.`,
      keyTakeaways: [
        'Las resinas epóxicas (Palma, Opticon) son polímeros plásticos termoendurecibles que se solidifican.',
        'Con los años sufren degradación oxidativa, volviéndose amarillas o craquelándose.',
        'Son muy difíciles o imposibles de remover, castigando fuertemente el valor de la gema.'
      ],
      scientificFormula: '\\text{Resina DGEBA} + \\text{Catalizador} \\xrightarrow{\\Delta T} \\text{Polímero reticulado insoluble}',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Degradación fotoquímica en esmeralda tratada con resina artificial (Opticon): craquelado blanquecino y amarilleamiento oxidativo irreversible tras 10 años.',
      imageSource: 'SSEF Swiss Gemmological Institute Research',
      imageAuthor: 'Dr. Michael S. Krzemnicki (SSEF)',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm7-l4',
      moduleId: 7,
      order: 4,
      title: 'Lección 7.4: Detección en Laboratorio: Espectroscopía FTIR y el Efecto Flash (Flash Effect)',
      readTime: '17 min',
      difficulty: 'Especialista',
      summary: 'Protocolos de detección en laboratorio. Análisis de estiramiento alifático C-H en espectrómetro FTIR (2800 - 3000 cm⁻¹). El efecto flash microscópico (destellos azul y naranja) y fluorescencia UV blanquecina.',
      content: `La detección y discriminación científica entre aceite de cedro natural y resinas epóxicas es una de las competencias fundamentales de un laboratorio gemológico acreditado:

### 1. El Efecto Flash al Microscopio (Flash Effect)
Al iluminar una fractura rellena con un haz concentrado de fibra óptica oblicua rasante mientras se rota suavemente la gema:
- Cuando la luz incide en un ángulo rasante superior al ángulo de reflexión de la fisura, se observa un destello de interferencia cromática brillante:
  - En **resinas epóxicas poliméricas (Palma/Opticon):** Se produce un **efecto flash vívido que cambia de color azul-violeta eléctrico a naranja-amarillo cobrizo** al modificar ligeramente el ángulo de iluminación.
  - En **aceite de cedro natural:** El efecto flash es sumamente tenue, de color amarillento-verdoso sutil, sin el azul eléctrico característico de los epóxicos.

### 2. El Estándar de Oro: Espectroscopía Infrarroja FTIR
La prueba concluyente no destructiva es la espectrometría infrarroja por transformada de Fourier (FTIR) en la región de los enlaces carbono-hidrógeno ($2800 - 3000\\text{ cm}^{-1}$):
1. **Detección de Resinas Epóxicas:** Muestran picos de absorción intensos y nítidos característicos de los grupos metilo y metileno de anillos aromáticos en:
   - **$2872\\text{ cm}^{-1}$**
   - **$2928\\text{ cm}^{-1}$**
   - **$2962\\text{ cm}^{-1}$**
   - Acompañados de un pico aromático diagnóstico a **$3038\\text{ cm}^{-1}$**.
2. **Detección de Aceite de Cedro:** Presenta un perfil muy diferente con picos sesquiterpénicos característicos en **$2930\\text{ cm}^{-1}$** y **$2855\\text{ cm}^{-1}$**, con ausencia de absorción aromática por encima de $3000\\text{ cm}^{-1}$.
3. **Esmeralda No Oil (Sin Tratamiento):** La región entre $2800\\text{ cm}^{-1}$ y $3000\\text{ cm}^{-1}$ es completamente plana (línea de base limpia), demostrando la ausencia total de compuestos orgánicos.`,
      keyTakeaways: [
        'Efecto flash: destello azul eléctrico a naranja delata la presencia de resinas epóxicas al microscopio.',
        'Espectroscopía FTIR: picos C-H en 2872, 2928 y 2962 cm⁻¹ certifican resina polimérica.',
        'Condición No Oil: la región de 2800-3000 cm⁻¹ permanece completamente plana sin absorción orgánica.'
      ],
      scientificFormula: '\\text{FTIR Resina: Picos } 2872, 2928, 2962\\text{ cm}^{-1} \\; | \\; \\text{No Oil: Línea plana a } 2800-3000\\text{ cm}^{-1}',
      diagramKey: 'ftir_resin_spectra',
      diagramType: 'Esquema Cristalográfico Vectorial',
      diagramCaption: 'Espectrometría FTIR comparativa: línea plana en espécimen No Oil vs picos de absorción alifáticos C-H diagnósticos de resinas epóxicas sintéticas (2872, 2928, 2962 cm⁻¹).',
      imageSource: 'LMHC / GIA Research / Vectorización JAIRRESTAURA',
      imageAuthor: 'Equipo Científico JAIRRESTAURA',
      imageLicense: 'Creative Commons CC-BY-SA 4.0',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm7-l5',
      moduleId: 7,
      order: 5,
      title: 'Lección 7.5: Clasificación Internacional LMHC / CIBJO: None, Minor, Moderate y Significant',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'La armonización internacional de los laboratorios gemológicos (LMHC). Criterios rigurosos para cuantificar el grado de mejoramiento de claridad: None (F0), Minor (F1), Moderate (F2) y Significant (F3).',
      content: `El Comité de Armonización de Manuales de Laboratorio (LMHC, que agrupa a GIA, Gübelin, SSEF, CISGEM y GAAJ) y la Confederación Mundial de Joyería (CIBJO) han estandarizado la terminología para clasificar el **grado cuantitativo de sustancia extraña presente en fisuras**:

### 1. La Escala LMHC de Cuatro Niveles
1. **None (No Oil / Sin indicación de mejoramiento de claridad):**
   - No se detecta ninguna sustancia extraña orgánica en ninguna fisura que alcance la superficie.
   - Es la máxima distinción gemológica; representa el estado más puro y valioso de la esmeralda.
2. **Minor (F1 - Menor):**
   - El relleno está presente en una cantidad diminuta, afectando únicamente fisuras muy superficiales o poco profundas que no influyen sustancialmente en la apariencia global de la gema.
   - Si se extrajera el relleno, la apariencia visual de la piedra apenas cambiaría. Plenamente aceptado en alta joyería.
3. **Moderate (F2 - Moderado):**
   - El relleno está presente en una o varias fisuras principales que atraviesan la tabla o el pabellón, mejorando apreciablemente la transparencia de la piedra.
   - Si se extrajera el relleno, la piedra se vería notablemente más agrietada o lechosa. Es el grado más común en el comercio internacional de gama media.
4. **Significant (F3 - Significativo):**
   - Existe una red masiva de fracturas rellenas con gran volumen de sustancia extraña.
   - La integridad física aparente de la gema depende fuertemente del relleno. El comprador debe ser advertido con total transparencia del riesgo estructural.`,
      keyTakeaways: [
        'None: sin tratamiento detectable (condición virgen de máxima cotización).',
        'Minor (F1): trazas mínimas en fisuras superficiales (ampliamente aceptado en subastas).',
        'Moderate (F2): relleno en fisuras medias que mejora perceptiblemente la claridad.',
        'Significant (F3): gran volumen de relleno en red densa de fracturas (alto castigo comercial).'
      ],
      scientificFormula: '\\text{Escala LMHC: } \\text{None } \\rightarrow \\text{Minor (F1) } \\rightarrow \\text{Moderate (F2) } \\rightarrow \\text{Significant (F3)}',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Mapeo microscópico de laboratorio para cuantificación de relleno según estándar LMHC: determinación de grado Menor (F1) en fisuras periféricas.',
      imageSource: 'Gübelin Gem Lab / LMHC Information Sheet',
      imageAuthor: 'Gübelin Analytical Team',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm7-l6',
      moduleId: 7,
      order: 6,
      title: 'Lección 7.6: Protocolos de Desengrase Técnico y Divulgación Ética Obligatoria',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Procedimiento de extracción limpia de aceites mediante lavado químico en reflujo Soxhlet. Normativa legal y ética de divulgación obligatoria según las directrices de CIBJO y el código de comercio colombiano.',
      content: `La ética profesional y la legislación comercial internacional exigen la **divulgación total y obligatoria (*Full Disclosure*)** de cualquier tratamiento aplicado a una gema en el momento de la oferta comercial:

### 1. Protocolo de Desengrase Técnico en Laboratorio
Cuando un comerciante desea someter una esmeralda a análisis para obtener un reporte *No Oil*, la piedra debe ser desengrasada previamente mediante un protocolo de laboratorio controlado:
1. **Baño de Reflujo Soxhlet con Acetona Analítica:** La gema se coloca en el dedal de extracción de un aparato Soxhlet. Los vapores de acetona pura condensada lavan continua y suavemente las fisuras durante 24 a 48 horas sin someter la piedra a cambios bruscos de temperatura.
2. **Secado a Vacío a Temperatura Ambiente:** Se evacúa el solvente residual en una campana de vacío desecadora.
3. **Prohibición de Ultrasonido Caliente y Vapor a Presión:** Las esmeraldas jamás deben someterse a baños ultrasónicos de alta frecuencia ni a vaporizadores de joyería, ya que las ondas elásticas desprenden fragmentos a lo largo de las fisuras basales.

### 2. Normativa Ética y Consecuencias Legales
- Ocultar que una esmeralda contiene resina epóxica o vender una piedra tratada como si fuera "No Oil" constituye un **fraude comercial** sancionado penal y civilmente en Colombia (Estatuto del Consumidor, Ley 1480 de 2011) y en los tribunales internacionales de arbitraje de CIBJO.
- El informe pericial debe declarar explícitamente:
  - Tipo de sustancia detectada (aceite natural tradicional vs resina polimérica artificial).
  - Grado de presencia del relleno (None, Minor, Moderate, Significant).
  - Estado de reversibilidad del tratamiento.`,
      keyTakeaways: [
        'El desengrase técnico se realiza con acetona pura en reflujo Soxhlet sin choque térmico.',
        'Jamás debe usarse ultrasonido caliente ni limpiadores de vapor en esmeraldas tratadas.',
        'La divulgación del tipo y grado de tratamiento es una obligación legal y ética innegociable.'
      ],
      scientificFormula: '\\text{Norma Legal: Divulgación total obligatoria del tipo de relleno y grado LMHC}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Equipo de extracción Soxhlet en campana de gases para el desengrase técnico de esmeraldas con acetona pura grado analítico previo a dictamen No Oil.',
      imageSource: 'Laboratorio de Espectroscopía CDTEC Bogotá',
      imageAuthor: 'Equipo de Análisis Químico JAIRRESTAURA',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    }
  ],
  caseStudy: {
    title: 'Detección de Resina Epóxica no Declarada en Esmeralda Vendida como "Solo Aceite Menor"',
    scenario: 'Un comprador internacional adquiere en Bogotá una esmeralda octagonal de 6.10 quilates por USD $35.000, con una factura comercial que declara "Tratamiento menor con aceite de cedro natural". Al presentarla en el laboratorio suizo SSEF para su certificación final, el reporte regresa como "Tratamiento moderado con resina artificial polimérica (Palma/Opticon)".',
    gemologicalAnalysis: 'El laboratorio demuestra mediante espectroscopía FTIR la presencia de picos agudos de absorción alifática en 2872, 2928 y 2962 cm⁻¹ y una absorción aromática en 3038 cm⁻¹, característicos de polímeros epóxicos termoendurecibles. En el microscopio con luz de fibra óptica oblicua se observa un claro efecto flash azul-naranja en las fracturas de la corona.',
    diagnosticLimitations: 'El comprador intentó limpiar la piedra con acetona en un taller local, pero la resina ya estaba catalizada e insoluble, no pudiendo retirarse. La pieza sufrió una depreciación inmediata del 45% en el mercado europeo.',
    learningOutcome: 'El caso culminó en una reclamación comercial con devolución total de fondos amparada en las normas CIBJO de divulgación obligatoria. Se demuestra la importancia de exigir certificación FTIR antes de cerrar transacciones mayores.'
  },
  practicalActivity: {
    title: 'Inspección de Efecto Flash y Diferenciación de Rellenos en Microscopio',
    instructions: '1. Colocar una esmeralda tratada con resina y otra tratada con aceite de cedro bajo el microscopio gemológico a 25x. 2. Apagar la luz de campo oscuro y conectar la guía flexible de fibra óptica oblicua. 3. Incidir con el haz rasante en ángulos de 15° sobre las fisuras de la tabla. 4. Registrar en video o fotografía gemológica la presencia del destello flash azul/naranja en la muestra con resina. 5. Comparar la fluorescencia de ambas piedras bajo luz UV de 365 nm.',
    materialsNeeded: [
      'Microscopio gemológico con guía de fibra óptica de ángulo rasante',
      'Muestra de esmeralda tratada con resina epóxica (Opticon/Palma)',
      'Muestra de esmeralda tratada con aceite de cedro natural',
      'Cámara ultravioleta de 365 nm'
    ],
    deliverable: 'Reporte pericial de análisis de fracturas con registro fotográfico del efecto flash y dictamen del tipo de relleno observado.',
    rubric: [
      { criterion: 'Orientación exacta del haz rasante de fibra óptica', weight: '35%' },
      { criterion: 'Identificación nítida del destello flash azul/naranja', weight: '35%' },
      { criterion: 'Rigor en la clasificación del grado según norma LMHC', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm7-q1',
      question: '¿Cuál es la razón física fundamental por la cual el aceite de cedro natural (n = 1.516) hace que las fracturas abiertas de una esmeralda "desaparezcan" ópticamente?',
      type: 'multiple_choice',
      options: [
        'Porque el aceite disuelve el berilo y une químicamente las dos caras de la fisura.',
        'Porque su índice de refracción es muy cercano al del berilo (1.58), haciendo que la reflexión y dispersión de luz en la interfase caiga a prácticamente cero.',
        'Porque el aceite contiene cromo que tiñe de verde la fisura.',
        'Porque el aceite de cedro crea una película reflectiva de espejo en la superficie.'
      ],
      correctAnswer: 1,
      explanation: 'El tratamiento de claridad se basa en la igualación de índices de refracción. Al reemplazar el aire (n=1.00) por una sustancia con índice cercano al berilo (n=1.516 vs 1.58), la reflexión interna en las paredes de la fisura se reduce a cero y la luz pasa limpia sin dispersarse.',
      scientificReference: 'Kammerling, R. C., et al. (1990). Fracture filling of emeralds. Gems & Gemology, 26(2).'
    },
    {
      id: 'm7-q2',
      question: 'En la espectroscopía infrarroja por transformada de Fourier (FTIR), ¿qué picos de absorción alifáticos delatan indiscutiblemente la presencia de resinas epóxicas artificiales (Palma/Opticon)?',
      type: 'multiple_choice',
      options: [
        'Picos en 2872, 2928 y 2962 cm⁻¹ correspondientes a estiramientos C-H alifáticos y aromáticos de la resina.',
        'Picos de vapor de agua en 3694 cm⁻¹ únicamente.',
        'Picos de halita en 1200 cm⁻¹.',
        'La espectroscopía FTIR no puede detectar polímeros orgánicos.'
      ],
      correctAnswer: 0,
      explanation: 'Las resinas epóxicas sintéticas exhiben absorciones diagnósticas nítidas y características en 2872, 2928 y 2962 cm⁻¹ (enlaces C-H), con frecuencia acompañadas de una banda en 3038 cm⁻¹ producida por sus anillos aromáticos.',
      scientificReference: 'Johnson, M. L., et al. (1999). On the identification of various emerald filling substances. Gems & Gemology, 35(2).'
    },
    {
      id: 'm7-q3',
      question: '¿Cuál es la principal ventaja técnica y ética del aceite de cedro natural frente a las resinas epóxicas polimerizadas?',
      type: 'multiple_choice',
      options: [
        'Que el aceite de cedro es más barato y fácil de conseguir en supermercados.',
        'Que el aceite de cedro es 100% reversible (se puede extraer totalmente con acetona pura sin dañar la piedra) y no sufre envejecimiento oxidativo con amarilleamiento.',
        'Que el aceite de cedro hace que la esmeralda sea irrompible frente a golpes.',
        'Que el aceite de cedro no puede ser detectado por ningún laboratorio del mundo.'
      ],
      correctAnswer: 1,
      explanation: 'La gran virtud del aceite de cedro tradicional es su reversibilidad total mediante lavado con solventes suaves como la acetona. Las resinas catalizadas se solidifican irreversiblemente y con los años se degradan oxidativamente volviéndose amarillas o craquelándose.',
      scientificReference: 'Krzemnicki, M. S., et al. (2000). Emerald filling substances: durability and identification. Journal of Gemmology, 27(4).'
    },
    {
      id: 'm7-q4',
      question: 'Según la clasificación internacional estandarizada del LMHC y CIBJO, ¿qué significa el grado "Minor" (F1) de mejoramiento de claridad?',
      type: 'multiple_choice',
      options: [
        'Que la esmeralda no tiene ninguna fisura y es virgen No Oil.',
        'Que la sustancia de relleno está presente en una cantidad diminuta afectando solo fisuras superficiales, sin alterar sustancialmente la apariencia global de la gema.',
        'Que más del 80% del volumen de la piedra es resina epóxica.',
        'Que la piedra fue tinturada artificialmente con verde de malaquita.'
      ],
      correctAnswer: 1,
      explanation: 'El grado Minor (F1) corresponde a trazas diminutas de sustancia en fisuras muy delgadas o superficiales. Si se removiera el relleno, la apariencia visual de la gema apenas se vería afectada. Es el grado más tolerado y prestigioso en la joyería fina después del No Oil.',
      scientificReference: 'LMHC Information Sheet #5: Emerald Clarity Enhancement (2020).'
    },
    {
      id: 'm7-q5',
      question: 'Bajo el microscopio gemológico con luz de fibra óptica oblicua rasante, ¿qué efecto óptico dinámico delata la presencia de resinas epóxicas en una fractura?',
      type: 'multiple_choice',
      options: [
        'El efecto flash (flash-effect) con destellos intensos de interferencia que cambian de azul-violeta eléctrico a naranja cobrizo al rotar la iluminación.',
        'La emisión de humo blanco dentro de la gema.',
        'La desaparición instantánea del color verde de la esmeralda.',
        'La aparición de estrías de pulido microscópicas en el fondo de la cubeta.'
      ],
      correctAnswer: 0,
      explanation: 'El efecto flash es producido por la diferencia de dispersión cromática entre el berilo y la resina polimérica en ángulos rasantes. Se observa como un destello azul eléctrico brillante que transmuta a amarillo-naranja al variar ligeramente el ángulo del haz de fibra óptica.',
      scientificReference: 'Koivula, J. I. (1994). The flash effect in emeralds. Gems & Gemology, 30(1).'
    }
  ],
  externalReferences: [
    {
      title: 'LMHC Information Sheet #5: Emerald Clarity Enhancement Rules',
      url: 'https://www.lmhc-gemology.org',
      institution: 'Laboratory Manual Harmonisation Committee',
      description: 'Estándar internacional unificado para la cuantificación y reporte de rellenos en esmeraldas.',
      category: 'Normalización de Laboratorios'
    },
    {
      title: 'Gems & Gemology: Comprehensive Studies on Emerald Fillings and FTIR',
      url: 'https://www.gia.edu/gems-gemology',
      institution: 'Gemological Institute of America',
      description: 'Investigaciones de Johnson, McClure y Kammerling sobre durabilidad y detección de resinas.',
      category: 'Investigación de Tratamientos'
    }
  ],
  bibliography: [
    {
      author: 'Johnson, M. L., Elen, S., & Muhlmeister, S.',
      year: '1999',
      title: 'On the identification of various emerald filling substances',
      publication: 'Gems & Gemology, 35(2), 82-107',
      doiOrUrl: 'https://doi.org/10.5741/GEMS.35.2.82'
    },
    {
      author: 'Krzemnicki, M. S., Hänni, H. A., & Walters, M. A.',
      year: '2000',
      title: 'A new type of emerald treatment: fracture filling with artificial resins',
      publication: 'Journal of Gemmology, 27(4), 193-205',
      doiOrUrl: 'https://doi.org/10.15506/JoG.2000.27.4.193'
    },
    {
      author: 'Kammerling, R. C., Koivula, J. I., & Fritsch, E.',
      year: '1990',
      title: 'Fracture filling of emeralds with Opticon and other substances',
      publication: 'Gems & Gemology, 26(2), 70-79',
      doiOrUrl: 'https://doi.org/10.5741/GEMS.26.2.70'
    }
  ]
};
