import { DiplomaModule } from '../../../types/academy';

export const MOD_09_CERTIFICACION: DiplomaModule = {
  id: 9,
  code: 'MOD-09',
  title: 'Módulo 9: Laboratorios Gemológicos, Espectrometría Avanzada y Certificación Científica',
  shortTitle: 'Laboratorios y Certificación',
  academicHours: 10,
  overview: 'Instrumentación analítica de frontera en laboratorios gemológicos internacionales (CDTEC, GIA, SSEF, Gübelin). Espectrometría FTIR, micro-Raman, espectrometría de masas por ablación láser (LA-ICP-MS) e isotopía estable de oxígeno (δ18O). Anatomía y lectura crítica de dictámenes periciales independientes de tercera parte.',
  competencies: [
    'Interpretar los perfiles espectrales de absorción infrarroja (FTIR) y dispersión Raman en gemas nobles.',
    'Analizar datos geoquímicos multielementales de LA-ICP-MS para trazabilidad de yacimientos.',
    'Distinguir entre certificados de tercera parte independientes y documentos comerciales sesgados de primera parte.',
    'Auditar los estándares de divulgación de tratamientos y origen geográfico en reportes internacionales.'
  ],
  learningObjectives: [
    'Explicar el funcionamiento de la micro-espectrometría Raman en la identificación de inclusiones sólidas y fluidas.',
    'Comprender cómo la ablación láser (LA-ICP-MS) cuantifica trazas en ppm (Li, Sc, V, Cr, Fe, Rb, Cs).',
    'Conocer los rangos de valores isotópicos de oxígeno δ18O (+15 a +23 ‰) característicos de Colombia.',
    'Aprender a detectar certificados falsos, manipulados o emitidos por entidades no acreditadas.'
  ],
  prerequisites: ['Módulos 1 a 8 aprobados o formación profesional en química analítica y gemología.'],
  heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Instrumental Óptico',
  lessons: [
    {
      id: 'm9-l1',
      moduleId: 9,
      order: 1,
      title: 'Lección 9.1: Los Laboratorios de Tercera Parte: Rol, Independencia y Acreditación',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Diferencia deontológica entre laboratorios independientes de tercera parte (Third-Party Labs) y laboratorios comerciales de comerciantes juez y parte. La red internacional de laboratorios de referencia (CDTEC, GIA, SSEF, Gübelin, CISGEM).',
      content: `En el mercado internacional de gemas y alta joyería, la confianza se sostiene sobre una regla estructural: **la separación absoluta entre el comercio y la certificación científica**:

### 1. Laboratorios de Primera, Segunda y Tercera Parte
1. **Primera Parte (Comerciante / Vendedor):** Cuando el propio vendedor emite un "certificado de autenticidad". Es un documento con conflicto de interés directo y nula validez pericial imparcial.
2. **Segunda Parte (Comprador o Asociación Comercial Local):** Evaluación emitida por el comprador o su gremio para fines de fijación de precio interno.
3. **Tercera Parte Independiente (Third-Party Gemological Laboratory):** Entidad técnica y científica que **no compra, no vende, no tasa dinero ni intermedia comercialmente en gemas**. Su único servicio es emitir dictámenes científicos imparciales sustentados en análisis instrumental de laboratorio.

### 2. Los Grandes Laboratorios Internacionales de Referencia
- **CDTEC (Centro de Desarrollo Tecnológico de la Esmeralda, Bogotá):** El laboratorio insignia de Colombia, fundado para la investigación aplicada y certificación de esmeraldas con equipamiento de nivel internacional (FTIR, Raman, EDXRF).
- **GIA (Gemological Institute of America, EE.UU. / Bangkok):** El referente mundial en estandarización de las 4C y bases de datos de procedencia.
- **SSEF (Swiss Gemmological Institute, Basilea) y Gübelin Gem Lab (Lucerna):** Los dos pilares helvéticos más respetados en las subastas de Christie's y Sotheby's para dictámenes de origen geográfico y estado *No Oil*.`,
      keyTakeaways: [
        'Los laboratorios de tercera parte no compran, no venden ni valoran dinero comercial.',
        'La certificación de tercera parte garantiza neutralidad científica ante disputas legales y aduaneras.',
        'CDTEC en Colombia, GIA en EE.UU. y SSEF/Gübelin en Suiza son los referentes globales en esmeraldas.'
      ],
      scientificFormula: '\\text{Norma ISO/IEC 17025: Requisitos generales para la competencia de laboratorios de ensayo}',
      diagramUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Área de análisis espectrométrico y microscopía confocal en laboratorio gemológico acreditado.'
    },
    {
      id: 'm9-l2',
      moduleId: 9,
      order: 2,
      title: 'Lección 9.2: Micro-Espectrometría Raman: Identificación de Fases Minerales y CO₂',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'El efecto Raman de dispersión inelástica de luz láser monocromática. Identificación no destructiva in situ de microcristales de parisita, pirita, calcita y albita atrapados dentro del berilo.',
      content: `La **micro-espectrometría Raman** es una de las herramientas más revolucionarias del análisis gemológico porque permite identificar minerales microscópicos invisibles al ojo **sin necesidad de extraerlos ni cortar la gema**:

### 1. Fundamento Físico de la Dispersión Inelástica Raman
Cuando un haz láser monocromático focalizado (típicamente láser verde de $532\\text{ nm}$ o infrarrojo cercano de $785\\text{ nm}$) incide sobre una molécula o red cristalina, la mayor parte de los fotones se dispersa elásticamente con la misma energía (dispersión Rayleigh).
- Una fracción minúscula (un fotón por cada diez millones) interactúa inelásticamente con los modos de vibración de la red atómica, cediendo o absorbiendo energía (dispersión Raman).
- El corrimiento de frecuencia resultante ($\Delta\\nu$ en $\\text{cm}^{-1}$) es una **huella dactilar vibracional unívoca** de cada mineral.

### 2. Aplicaciones Prácticas en la Esmeralda Colombiana
1. **Identificación de Inclusiones Sólidas Profundas:**
   - Permite confirmar un microcristal de **parisita-(Ce)** en el interior de una esmeralda sin tocarlo, detectando sus picos carbonatados característicos a $1082\\text{ cm}^{-1}$ y vibraciones REE-O a $270$ y $380\\text{ cm}^{-1}$.
   - Diferencia con certeza entre calcita ($1085\\text{ cm}^{-1}$), dolomita ($1098\\text{ cm}^{-1}$) y cuarzo ($464\\text{ cm}^{-1}$).
2. **Análisis de la Burbuja Gaseosa en Inclusiones Trifásicas:**
   - Al focalizar el micro-láser en la burbuja de la inclusión trifásica, el Raman revela el doblete característico de **dióxido de carbono ($CO_2$) supercrítico o gaseoso a $1285\\text{ cm}^{-1}$ y $1388\\text{ cm}^{-1}$** (*bandas de Fermi*).`,
      keyTakeaways: [
        'El láser micro-Raman identifica minerales incluidos dentro de la gema sin destruirla ni dañarla.',
        'Confirma parisita, calcita, dolomita, pirita y albita en segundos comparando con librerías de espectros.',
        'Revela la presencia y presión interna del gas CO2 en las cavidades trifásicas.'
      ],
      scientificFormula: '\\Delta\\nu = \\left(\\frac{1}{\\lambda_0} - \\frac{1}{\\lambda_R}\\right) \\quad [\\text{CO}_2\\text{ Fermi Diad: } 1285\\text{ y } 1388\\text{ cm}^{-1}]',
      diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Espectro Óptico / FTIR',
      diagramCaption: 'Equipo micro-Raman confocal acoplado a microscopio óptico para enfoque de inclusiones microscópicas.'
    },
    {
      id: 'm9-l3',
      moduleId: 9,
      order: 3,
      title: 'Lección 9.3: Cuantificación Química de Elementos Traza: LA-ICP-MS y EDXRF',
      readTime: '17 min',
      difficulty: 'Especialista',
      summary: 'La geoquímica de elementos traza como base científica del origen geográfico. Análisis no destructivo EDXRF y micro-destructivo cuasi-invisible por ablación láser (LA-ICP-MS). Perfiles de Li, Sc, V, Cr, Fe, Ga, Rb y Cs.',
      content: `Cuando las inclusiones ópticas son ambiguas o la gema es extraordinariamente limpia, la ciencia recurre a la **quimiometría multielemental de alta resolución**:

### 1. Fluorescencia de Rayos X por Energía Dispersiva (EDXRF)
- Técnica completamente no destructiva.
- Bombardea la superficie de la esmeralda con fotones de rayos X, provocando la emisión de rayos X secundarios característicos de cada elemento químico.
- Cuantifica con rapidez elementos mayores y trazas medianas como cromo ($Cr$), vanadio ($V$), hierro ($Fe$), potasio ($K$) y titanio ($Ti$).
- Es la técnica estándar para confirmar en menos de 2 minutos que una gema tiene bajo contenido de hierro ($Fe < 0.15\\%\\text{ wt.}$), descartando Zambia o Brasil.

### 2. Ablación Láser con Plasma Acoplado Inductivamente (LA-ICP-MS)
Es la tecnología más potente de la geoquímica moderna:
- Un pulso láser ultravioleta enfocado vaporiza una micro-mancha microscópica cuasi-invisible de apenas **30 a 50 micras de diámetro** en el filetín de la gema (merma de masa menor a una millonésima de quilate).
- El aerosol de material es transportado por un flujo de helio a una antorcha de plasma de argón a $8.000^\\circ\\text{C}$, donde los átomos se ionizan y son analizados por un espectrómetro de masas de cuadrupolo o sector magnético.
- Mide concentraciones a nivel de **partes por millón (ppm) e incluso partes por billón (ppb)** de elementos ultratrazas: $Li, Be, Sc, V, Cr, Fe, Ga, Rb, Cs, Ba$.
- **El Perfil Genético Colombiano:**
  - Las esmeraldas colombianas se caracterizan por valores extremadamente bajos de hierro ($Fe < 1.000\\text{ ppm}$) y cesio ($Cs < 100\\text{ ppm}$), con relaciones $Cr/V$ muy particulares, separándose limpiamente de Afganistán ($Cs > 500\\text{ ppm}$, $Li > 200\\text{ ppm}$) y Zambia ($Fe > 8.000\\text{ ppm}$).`,
      keyTakeaways: [
        'EDXRF: técnica no destructiva rápida para cuantificar Fe, Cr y V en superficie.',
        'LA-ICP-MS: vaporiza una micro-marca invisible de 40 µm para medir elementos ultratraza en ppm.',
        'El perfil multielemental (Li, Sc, Fe, Rb, Cs) es la prueba de ADN químico de cada yacimiento.'
      ],
      scientificFormula: '\\text{Perfil Colombia: } Fe < 1000\\text{ ppm}, \\; Cs < 100\\text{ ppm} \\; | \\; \\text{Afganistán: } Cs > 500\\text{ ppm}, \\; Li > 200\\text{ ppm}',
      diagramUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Espectro Óptico / FTIR',
      diagramCaption: 'Diagrama de discriminación geoquímica binaria de elementos traza (Fe vs Cs) clasificando yacimientos mundiales.'
    },
    {
      id: 'm9-l4',
      moduleId: 9,
      order: 4,
      title: 'Lección 9.4: Isótopos Estables de Oxígeno (δ¹⁸O): La Firma Hidrotermal Definitiva',
      readTime: '15 min',
      difficulty: 'Especialista',
      summary: 'La firma isotópica del oxígeno en la red cristalina del berilo. Valores anormalmente pesados de δ18O (+15 a +23 ‰) derivados de salmueras evaporíticas sedimentarias frente a valores magmáticos (+6 a +12 ‰).',
      content: `El oxígeno representa casi el 50% de la masa de la red cristalina del berilo ($Be_3Al_2Si_6O_{18}$). La proporción entre sus dos isótopos estables más abundantes, el oxígeno-18 ($^{18}\\text{O}$) y el oxígeno-16 ($^{16}\\text{O}$), es un marcador indeleble del ambiente hidrotermal:

### 1. La Notación Delta ($\\delta^{18}\\text{O}$)
La composición isotópica se expresa en partes por mil ($\\text{‰}$) respecto al estándar internacional de agua de mar media oceánica (V-SMOW):

$$\\delta^{18}\\text{O} (\\text{‰}) = \\left(\\frac{(^{18}\\text{O}/^{16}\\text{O})_{\\text{muestra}} - (^{18}\\text{O}/^{16}\\text{O})_{\\text{SMOW}}}{(^{18}\\text{O}/^{16}\\text{O})_{\\text{SMOW}}}\\right) \\times 1000$$

### 2. La Singularidad Isotópica Colombiana
- **Yacimientos Magmáticos y Metamórficos Globales (Zambia, Brasil, Rusia, Pakistán):** Sus fluidos se equilibraron con magmas graníticos félsicos o fluidos metamórficos corticales, arrojando valores de $\\delta^{18}\\text{O}$ moderados, situados entre **$+6.0\\text{ ‰}$ y $+12.0\\text{ ‰}$**.
- **Esmeraldas Colombianas (Cordillera Oriental):** Al formarse por salmueras evaporíticas que interactuaron intensamente con calizas y lodolitas ricas en carbonato sedimentario marino a $>300^\\circ\\text{C}$, se enriquecieron extraordinariamente en el isótopo pesado $^{18}\\text{O}$.
- Los valores de $\\delta^{18}\\text{O}$ para Colombia oscilan entre **$+15.0\\text{ ‰}$ y $+23.5\\text{ ‰}$** (Muzo $\\approx +21.1\\text{ ‰}$, Chivor $\\approx +15.5\\text{ ‰}$).
- No existe ningún otro yacimiento mayor de esmeralda en el mundo que alcance valores de $\\delta^{18}\\text{O}$ superiores a $+15\\text{ ‰}$.
- Este análisis (Giuliani et al., 2000, publicado en *Science*) permitió demostrar científicamente el origen colombiano de las esmeraldas del tesoro de la corona española y de gemas de la época del Imperio Romano.`,
      keyTakeaways: [
        'La firma isotópica de oxígeno del berilo refleja el fluido hidrotermal original.',
        'Colombia tiene valores extremadamente altos de δ18O (+15 a +23.5 ‰) por interacción con sedimentos marinos.',
        'El resto de esmeraldas mundiales tienen valores magmáticos de δ18O entre +6 y +12 ‰.'
      ],
      scientificFormula: '\\delta^{18}\\text{O}_{\\text{Colombia}} = +15.0\\text{ a } +23.5\\text{ ‰ (V-SMOW)} \\quad | \\quad \\delta^{18}\\text{O}_{\\text{Mundial}} = +6.0\\text{ a } +12.0\\text{ ‰}',
      diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Espectro Óptico / FTIR',
      diagramCaption: 'Gráfica de rangos de δ18O discriminando esmeraldas colombianas frente a depósitos globales de África y Brasil.'
    },
    {
      id: 'm9-l5',
      moduleId: 9,
      order: 5,
      title: 'Lección 9.5: Anatomía y Lectura Crítica de un Reporte Gemológico Oficial',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Estructura formal de los reportes gemológicos de GIA, SSEF, Gübelin y CDTEC. Secciones obligatorias: identificación de especie, peso exacto a 3 decimales, dimensiones, dictamen de origen geográfico y dictamen de tratamiento.',
      content: `Un reporte gemológico oficial es un documento pericial legal que debe leerse con riguroso conocimiento técnico:

### 1. Secciones Obligatorias de un Reporte Internacional
1. **Encabezado y Código Serial Criptográfico:** Número único de reporte verificable en la base de datos digital del laboratorio mediante código QR seguro o búsqueda en línea.
2. **Descripción del Objeto:** Masa exacta en quilates (pesada con precisión de 3 decimales, ej. 3.421 ct), dimensiones milimétricas (longitud × anchura × profundidad), contorno de corte (*Shape*) y estilo de facetado (*Cutting Style*).
3. **Identificación de Especie:** Declaración explícita de especie mineral: *"Natural Emerald"* (Berilo natural variedad esmeralda).
4. **Dictamen de Tratamiento (Clarity Enhancement):** Clasificación según los términos armonizados del LMHC:
   - *None / No indications of clarity enhancement:* Máxima distinción de pureza virgen.
   - *Minor / F1:* Trazas mínimas. Especificando sustancia si fue identificada (aceite natural tradicional vs resina).
   - *Moderate / F2* o *Significant / F3*.
5. **Opinión de Origen Geográfico (*Geographic Origin Opinion*):**
   - Redacción estándar: *"In the opinion of the laboratory, the gemological characteristics described above indicate that the geographic origin of this emerald is Colombia"*.
   - Nótese que los laboratorios serios declaran el origen como una **opinión experta fundamentada**, no como un dogma absoluto de fe, reconociendo las limitaciones científicas de la geoquímica.`,
      keyTakeaways: [
        'El reporte debe incluir peso a 3 decimales, dimensiones milimétricas y especie mineral confirmada.',
        'El dictamen de tratamiento debe cuantificar el grado (None, Minor, Moderate, Significant) y la sustancia.',
        'El origen geográfico se formula profesionalmente como una opinión pericial experta basada en evidencia.'
      ],
      scientificFormula: '\\text{Estructura: Identificación } + \\text{Dimensiones } + \\text{Tratamiento LMHC } + \\text{Opinión de Origen}',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Muestra de reporte gemológico oficial de laboratorio con fotografía incrustada y sello holográfico de seguridad.'
    },
    {
      id: 'm9-l6',
      moduleId: 9,
      order: 6,
      title: 'Lección 9.6: Detección de Fraudes, Certificados Falsos y Laboratorios Fantasma',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Tipologías de fraude documental en el comercio esmeraldero. Certificados apócrifos con sellos fotocopiados, páginas web clonadas con bases de datos falsas, certificados de favor y sustitución de gemas en blister sellados.',
      content: `La alta cotización de las esmeraldas colombianas ha impulsado el desarrollo de sofisticadas redes de fraude documental:

### 1. Las Cuatro Modalidades de Fraude Documental Más Comunes
1. **El Certificado Totalmente Falso con Laboratorio Inexistente:**
   - Creación de nombres rimbombantes que imitan siglas oficiales (ej. "International Gemological Bureau", "Swiss Gemological Authority").
   - Suelen operar páginas web fraudulentas donde cualquier serial consultado arroja un resultado positivo falso de "Muzo No Oil de 10 quilates".
2. **El Certificado Clonado de un Laboratorio Real (GIA/CDTEC apócrifo):**
   - Copia de un número de serial auténtico expedido para otra piedra de peso similar.
   - La tipografía, el grosor del papel moneda y la calidad del microtexto difieren del original.
3. **El "Certificado de Favor" emitido por Comerciantes Juez y Parte:**
   - Tiendas de joyería que emiten sus propios reportes sin equipo instrumental alguno, calificando gemas con resina pesada como "Natural No Oil".
4. **Sustitución de Gema en Blister Sellado:**
   - Apertura térmica imperceptible del estuche plástico (*blister*) y reemplazo de la esmeralda certificada por un berilo sintético de peso milimétricamente idéntico.

### 2. Protocolo de Auditoría y Verificación de Seguridad
- Nunca aceptar un certificado impreso sin verificarlo **en tiempo real en la página oficial del laboratorio**.
- Comparar con microscopio las dimensiones milimétricas exactas (a centésimas de milímetro) y el mapa de inclusiones fotografiado en el reporte.
- Comprobar sellos holográficos de seguridad reactivos a luz UV y microtextos de seguridad en el papel moneda del laboratorio.`,
      keyTakeaways: [
        'Verificar siempre el número de certificado en la base de datos oficial del laboratorio emisor.',
        'Comprobar dimensiones a centésima de milímetro y cotejar el mapa de inclusiones fotográfico.',
        'Desconfiar de certificados emitidos por tiendas que venden la propia gema que califican.'
      ],
      scientificFormula: '\\text{Regla de Oro: Coincidencia de peso a 3 decimales } + \\text{ Verificación web oficial } + \\text{ Mapeo de inclusiones}',
      diagramUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Cotejo de mapa microscópico de inclusiones de una esmeralda contra la fotografía impresa en el certificado.'
    }
  ],
  caseStudy: {
    title: 'Auditoría Forense: Detección de Certificado Suizo Clonado en Venta de Lote de Inversión',
    scenario: 'Un fondo de inversión privado en Medellín solicita una auditoría pericial antes de pagar USD $80.000 por una esmeralda octagonal de 4.80 quilates acompañada de un supuesto reporte del laboratorio suizo Gübelin que certificaba origen Muzo y estado "No Oil".',
    gemologicalAnalysis: 'El perito ingresa al portal oficial de verificación de Gübelin (Lucerna). Al teclear el número de reporte y el peso de 4.80 ct, la base de datos del laboratorio confirma que el certificado efectivamente existe, pero la fotografía original del archivo suizo muestra una esmeralda con una inclusión de pirita en la esquina inferior izquierda, mientras que la piedra física que se ofrecía en venta tenía una inclusión de calcita blanca y una fisura en la tabla.',
    diagnosticLimitations: 'Los estafadores buscaron en el mercado una gema de peso idéntico (4.80 ct) y color similar para emparejarla con un reporte genuino clonado en papel de alta resolución.',
    learningOutcome: 'Se descubrió el fraude de sustitución de gema mediante el cotejo fotográfico de inclusiones. El comprador salvó su capital y el peritaje fue remitido a la Fiscalía General de la Nación.'
  },
  practicalActivity: {
    title: 'Auditoría Crítica de un Reporte Gemológico y Verificación Criptográfica',
    instructions: '1. Recibir dos reportes gemológicos de muestra (uno legítimo de CDTEC y otro con irregularidades documentales). 2. Verificar la presencia de las secciones obligatorias según norma LMHC. 3. Escanear el código QR y validar la coincidencia de los datos en la base de datos del laboratorio emisor. 4. Medir con calibrador digital la gema física y comprobar si sus dimensiones coinciden con un margen de tolerancia de ±0.02 mm. 5. Emitir dictamen de auditoría documental.',
    materialsNeeded: [
      'Ejemplar de reporte gemológico CDTEC con sellos de seguridad',
      'Dispositivo móvil con lector QR y conexión a internet',
      'Calibrador digital Leveridge y balanza analítica',
      'Gema correspondiente al reporte'
    ],
    deliverable: 'Informe de auditoría pericial de 1 página certificando si el documento es auténtico, consistente y válido para comercio internacional.',
    rubric: [
      { criterion: 'Cotejo minucioso de dimensiones y peso analítico', weight: '35%' },
      { criterion: 'Verificación web digital e interpretación de secciones LMHC', weight: '35%' },
      { criterion: 'Claridad y fundamento técnico en el dictamen final', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm9-q1',
      question: '¿Por qué la técnica de ablación láser con plasma acoplado inductivamente (LA-ICP-MS) es el estándar supremo para determinar el origen geográfico en laboratorios como SSEF o GIA?',
      type: 'multiple_choice',
      options: [
        'Porque disuelve la esmeralda completa en ácido caliente.',
        'Porque vaporiza una micro-marca cuasi-invisible de 40 micras en el filetín y cuantifica trazas en ppm (Li, Sc, V, Cr, Fe, Rb, Cs), generando un perfil genético químico único de cada depósito.',
        'Porque cambia el color de la piedra permanentemente a azul.',
        'Porque solo mide la dureza de rayado de la piedra.'
      ],
      correctAnswer: 1,
      explanation: 'El LA-ICP-MS realiza un micro-muestreo casi invisible de escala microscópica en el filetín sin dañar la gema comercialmente, cuantificando elementos traza a nivel de partes por millón. La combinación matemática de concentraciones multielementales diferencia con precisión matemática Colombia de Afganistán, Zambia o Brasil.',
      scientificReference: 'Groat, L. A., et al. (2008). The Geology and Genesis of Gem Deposits. MAC.'
    },
    {
      id: 'm9-q2',
      question: '¿Qué rango de valores de isótopos estables de oxígeno (δ18O) es exclusivo y diagnóstico de las esmeraldas colombianas de la Cordillera Oriental?',
      type: 'multiple_choice',
      options: [
        'Valores entre -5.0 y 0.0 ‰.',
        'Valores anormalmente pesados comprendidos entre +15.0 y +23.5 ‰ V-SMOW, derivados de su interacción hidrotermal con evaporitas y sedimentos marinos.',
        'Valores de +6.0 a +10.0 ‰ idénticos a los granitos magmáticos.',
        'El oxígeno no tiene isótopos en la esmeralda.'
      ],
      correctAnswer: 1,
      explanation: 'Las esmeraldas colombianas poseen los valores más pesados del planeta en δ18O (+15 a +23.5 ‰) debido a su génesis en rocas sedimentarias marinas ricas en carbonatos. El resto de esmeraldas mundiales tienen valores magmáticos de +6 a +12 ‰.',
      scientificReference: 'Giuliani, G., et al. (2000). Oxygen isotopes and emerald trade routes since antiquity. Science, 287(5453).'
    },
    {
      id: 'm9-q3',
      question: 'En un reporte oficial emitido bajo las directrices del LMHC (Laboratory Manual Harmonisation Committee), ¿cómo se declara una esmeralda sin ninguna sustancia de relleno en sus fisuras?',
      type: 'multiple_choice',
      options: [
        'F4 - Relleno Total.',
        'None / No indications of clarity enhancement (Sin indicios de mejoramiento de claridad).',
        'Aceitado menor con parafina.',
        'Gema garantizada para siempre por el joyero.'
      ],
      correctAnswer: 1,
      explanation: 'El LMHC estandariza que las gemas en estado virgen libre de sustancias extrañas se reportan como "None" o "No indications of clarity enhancement", el máximo grado de pureza en el comercio internacional.',
      scientificReference: 'LMHC Information Sheet #5: Emerald Clarity Enhancement (2020).'
    },
    {
      id: 'm9-q4',
      question: '¿Qué información proporciona la micro-espectrometría Raman sobre la burbuja gaseosa de una inclusión trifásica en una esmeralda natural?',
      type: 'multiple_choice',
      options: [
        'Demuestra que la burbuja está vacía sin ningún tipo de materia.',
        'Identifica el doblete de Fermi característico del dióxido de carbono (CO2) a 1285 y 1388 cm⁻¹ y permite estimar su densidad y presión interna.',
        'Convierte el gas en agua líquida al contacto con el láser.',
        'Indica cuántos quilates pesará la piedra tallada.'
      ],
      correctAnswer: 1,
      explanation: 'El láser Raman enfocado dentro de la burbuja revela las vibraciones moleculares del CO2 (doblete de Fermi a 1285 y 1388 cm⁻¹), confirmando el carácter natural del fluido hidrotermal atrapado durante la era geológica.',
      scientificReference: 'Frezzotti, M. L., et al. (2012). Raman spectroscopy for fluid inclusion analysis. Journal of Geochemical Exploration, 112.'
    },
    {
      id: 'm9-q5',
      question: '¿Por qué un "Certificado de Garantía" emitido por la misma tienda o joyería que vende la esmeralda carece de validez pericial imparcial en el mercado internacional?',
      type: 'multiple_choice',
      options: [
        'Porque está redactado en idioma español.',
        'Porque es un documento de primera parte con evidente conflicto de interés comercial, donde el comerciante actúa como juez y parte sin someter la gema a ensayos instrumentales independientes de tercera parte.',
        'Porque no tiene una cinta dorada pegada.',
        'Porque las joyerías no tienen permitido imprimir en computadores.'
      ],
      correctAnswer: 1,
      explanation: 'En la deontología pericial internacional (normas ISO y CIBJO), los certificados de primera parte representan un conflicto de interés directo. Solo los reportes de laboratorios independientes de tercera parte (sin interés comercial en la compraventa) garantizan neutralidad e imparcialidad técnica.',
      scientificReference: 'CIBJO Diamond, Coloured Gemstone and Pearl Blue Books.'
    }
  ],
  externalReferences: [
    {
      title: 'CDTEC: Centro de Desarrollo Tecnológico de la Esmeralda Colombiana',
      url: 'https://cdtec.com.co',
      institution: 'CDTEC Colombia',
      description: 'El laboratorio de referencia gemológica de Colombia con acreditación técnica y equipamiento FTIR/Raman.',
      category: 'Laboratorio Colombiano'
    },
    {
      title: 'SSEF Swiss Gemmological Institute — Origin & Testing Standards',
      url: 'https://www.ssef.ch',
      institution: 'Swiss Gemmological Institute (SSEF)',
      description: 'Publicaciones y manuales de certificación de esmeraldas de alta gama y origen geográfico.',
      category: 'Laboratorios Suizos'
    }
  ],
  bibliography: [
    {
      author: 'Giuliani, G., Chaussidon, M., Schubnel, H. J., et al.',
      year: '2000',
      title: 'Oxygen isotopes and emerald trade routes since antiquity',
      publication: 'Science, 287(5453), 631-633',
      doiOrUrl: 'https://doi.org/10.1126/science.287.5453.631'
    },
    {
      author: 'Groat, L. A., Giuliani, G., Marshall, D. D., & Turner, D.',
      year: '2008',
      title: 'The Geology and Genesis of Gem Deposits',
      publication: 'Mineralogical Association of Canada, Short Course Series, Vol. 37',
      doiOrUrl: 'https://www.mineralogicalassociation.ca'
    },
    {
      author: 'Krzemnicki, M. S.',
      year: '2001',
      title: 'Polyphase inclusions in emerald from Colombia and Afghanistan',
      publication: 'Journal of Gemmology, 27(8), 487-495',
      doiOrUrl: 'https://doi.org/10.15506/JoG.2001.27.8.487'
    }
  ]
};
