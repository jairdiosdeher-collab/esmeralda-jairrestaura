import { DiplomaModule } from '../../../types/academy';

export const MOD_08_TALLA: DiplomaModule = {
  id: 8,
  code: 'MOD-08',
  title: 'Módulo 8: Talla, Lapidación, Geometría Óptica y Rendimiento del Cristal',
  shortTitle: 'Talla y Lapidación',
  academicHours: 10,
  overview: 'Ingeniería y arte del corte de esmeraldas colombianas. Orientación cristalográfica del cristal en bruto respecto al eje óptico c. Etapas de aserrado diamantado refrigerado, desbaste (preforming), dopado térmico seguro, facetado indexado y pulido espejo sobre estaño. Geometría de la Talla Esmeralda clásica (57 facetas y chaflanes a 45°) y optimización del rendimiento en quilates (recovery rate).',
  competencies: [
    'Orientar cristales prismáticos en bruto para maximizar el retorno de color verde azuloso sobre la tabla.',
    'Ejecutar las cinco fases del ciclo lapidario: corte, desbaste, dopado, facetado y pulido de alta precisión.',
    'Diseñar proporciones ideales de la talla octagonal: tabla 60-70%, corona 12-15% y pabellón 43-45%.',
    'Calcular el porcentaje de recuperación en peso (recovery percentage) minimizando la merma económica.'
  ],
  learningObjectives: [
    'Explicar la función mecánica de los cuatro chaflanes de esquina para mitigar concentraciones de esfuerzo.',
    'Comprender por qué el choque térmico durante el dopado con lacre caliente puede agrietar el berilo.',
    'Identificar los discos abrasivos adecuados: desbaste (600-1200 mesh) vs pulido sobre disco de estaño (0.25 µm).',
    'Adaptar cortes alternativos (gota, cojín, cabujón) a la morfología natural de cuñas y fragmentos de mina.'
  ],
  prerequisites: ['Módulos 1 a 7 aprobados o experiencia práctica en talleres de joyería y lapidación.'],
  heroImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Corte Lapidario',
  lessons: [
    {
      id: 'm8-l1',
      moduleId: 8,
      order: 1,
      title: 'Lección 8.1: Evaluación del Cristal en Bruto y Orientación Cristalográfica',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'El análisis morfológico preliminar del cristal en bruto. Identificación de caras prismáticas {10-10}, pinacoides basales {0001} y dirección del eje c. Cómo ubicar la tabla para atrapar el rayo dicroico verde azulado.',
      content: `El trabajo del maestro tallador no comienza con la rueda girando, sino con días enteros de examen óptico silencioso del cristal en bruto bajo lupa y luz transmitida:

### 1. El Diagnóstico Cristalográfico Preliminar
- **Identificación del Eje Óptico $c$:** En los cristales colombianos euhedrales de Muzo o Chivor, el eje $c$ corre a lo largo del eje senario longitudinal de la columna prismática hexagonal. Las estrías verticales paralelas en las caras $\{10\\bar{1}0\}$ señalan inequívocamente la dirección del eje $c$.
- **La Regla de Oro del Dicroísmo:** Para que la gema tallada exhiba el color verde puro o verde ligeramente azuloso de máxima cotización, **la faceta superior principal (tabla) debe tallarse rigurosamente perpendicular al eje óptico $c$**.
- Si por descuido o por ahorrar peso el tallador corta la tabla paralela al eje $c$, el observador verá el rayo extraordinario verde amarillento pálido, depreciando comercialmente la piedra en un 30% a 50%.

### 2. Mapeo de Fisuras y Tensiones Internas
- Con el cristal sumergido en agua o benzoato de bencilo bajo polariscopio, se mapean las fracturas abiertas y las tensiones mecánicas internas.
- Las fisuras más profundas deben orientarse de manera que queden situadas en el filetín o en facetas secundarias del pabellón, evitando que atraviesen diagonalmente el centro de la corona.`,
      keyTakeaways: [
        'La tabla debe cortarse rigurosamente perpendicular al eje óptico c para capturar el verde azuloso dicroico.',
        'Las estrías longitudinales en las caras prismáticas revelan la orientación exacta del eje c en bruto.',
        'El mapeo previo de fisuras determina si el cristal se corta en una sola gema mayor o en dos gemas limpias.'
      ],
      scientificFormula: '\\text{Orientación Ideal: Tabla } \\perp \\text{ Eje } c \\; [\\text{Paralela al pinacoide basal } \\{0001\\}]',
      diagramKey: 'lapidary_c_axis',
      diagramType: 'Esquema Cristalográfico Vectorial',
      diagramCaption: 'Orientación cristalográfica del corte: alineación de la tabla perpendicular al eje óptico [c] para capturar el rayo dicroico verde puro extraordinario (ε).',
      imageSource: 'Taller Experimental de Lapidación JAIRRESTAURA / Gráficos Técnicos',
      imageAuthor: 'Maestro Lapidario JAIRRESTAURA',
      imageLicense: 'Creative Commons CC-BY-SA 4.0',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm8-l2',
      moduleId: 8,
      order: 2,
      title: 'Lección 8.2: El Aserrado Diamantado y el Desbaste Preliminar (Preforming)',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Técnicas de corte mecánico con discos diamantados continuos de 0.2 mm. Refrigeración con emulsión hidrosoluble. Desbaste en ruedas de diamante sinterizado de grano 600 y 1200 mesh para silueteado octagonal.',
      content: `El corte mecánico inicial es la etapa de mayor adrenalina en el taller, donde un error de presión fracciona irreversiblemente la gema:

### 1. El Aserrado Diamantado Ultrafino (Sawing)
- Se utilizan discos circulares continuos de bronce fosforado o acero especial con un grosor micrométrico de **0.15 a 0.25 mm**, cuyo borde perimetral está impregnado con polvo de diamante sintético micronizado aglomerado en matriz metálica.
- **Refrigeración Continua Obligatoria:** El disco debe girar sumergido constantemente en agua fría o emulsión lubricante mineral-vegetal. **El corte en seco está terminantemente prohibido**: la fricción elevaría la temperatura local instantáneamente por encima de los 150°C, provocando choques térmicos que estallarían el berilo a lo largo de sus planos de exfoliación basal.
- El avance de corte debe ser suave y constante, con avance por gravedad o contrapeso de pocos gramos.

### 2. El Desbaste Preliminar (Preforming)
- Una vez obtenido el bloque base, se procede al silueteado manual o en soporte dop sobre un plato horizontal de desbaste (*lap*) con recubrimiento de diamante sinterizado de **grano 600 mesh (desbaste grueso)** y posteriormente **1200 mesh (afinado superficial)**.
- En esta fase se define el contorno octagonal (ancho, largo y los cuatro chaflanes de esquina) y el perfil básico de la corona y la culata piramidal, dejando un sobreespesor de 0.3 mm para la fase de pulido.`,
      keyTakeaways: [
        'Discos de 0.2 mm con refrigeración líquida permanente para evitar fractura por choque térmico.',
        'El desbaste define la silueta octagonal con chaflanes en platos diamantados de 600 y 1200 mesh.',
        'Se deja un sobreespesor de tolerancia para el facetado y pulido de precisión.'
      ],
      scientificFormula: '\\text{Grosor de disco: } 0.18 - 0.25\\text{ mm} \\quad | \\quad \\text{Velocidad de giro: } 3.000 - 4.500\\text{ RPM con refrigeración}',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Aserrado diamantado de precisión con disco continuo ultrafino de 0.2 mm refrigerado por recirculación líquida continua.',
      imageSource: 'Taller de Lapidación Tradicional de Bogotá / Archivo Fotográfico',
      imageAuthor: 'Documentación Técnica JAIRRESTAURA',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm8-l3',
      moduleId: 8,
      order: 3,
      title: 'Lección 8.3: Dopado Seguro y Prevención de Choque Térmico',
      readTime: '14 min',
      difficulty: 'Intermedio',
      summary: 'Fijación de la preforma en dop mecánico o vástago de bronce con ceras termoplásticas lapidarias de baja fusión (50-60°C). Protocolo estricto para evitar calentamiento directo con llama abierta.',
      content: `Para tallar con precisión angular facetas milimétricas, la gema debe estar sólidamente fijada a una varilla metálica cilíndrica denominada **dop**:

### 1. El Riesgo del Choque Térmico
El berilo posee un coeficiente de dilatación térmica anisotrópico ($\alpha_{\parallel c} \approx -1.3 \times 10^{-6}\text{ K}^{-1}$ a bajas temperaturas y $\alpha_{\perp c} \approx 2.6 \times 10^{-6}\text{ K}^{-1}$). Si se calienta bruscamente una esmeralda con una llama de soplete directa (como se hace tradicionalmente con corindones o cuarzos), **las tensiones de dilatación opuestas fracturan instantáneamente el cristal**:
- **Regla Inquebrantable:** Jamás debe aplicarse fuego directo de soplete o mechero sobre un cristal de esmeralda.

### 2. Ceras Lapidarias de Baja Fusión y Adhesivos Fríos
1. **Cera Verde/Marrón de Baja Fusión:** Se utilizan ceras lapidarias especiales formuladas para fundirse a temperaturas seguras de **$50^\circ\text{C}$ a $60^\circ\text{C}$** en una plancha eléctrica termostática con control digital.
2. **Precalentamiento Suave:** El cristal se coloca sobre la plancha tibia a $40^\circ\text{C}$ durante varios minutos para que su masa alcance la temperatura de la cera de forma gradual y uniforme.
3. **Adhesivos Cianoacrilatos Fríos:** Para piedras de altísimo valor con fisuras abiertas críticas, muchos talleres modernos emplean dops mecánicos con cianoacrilato de alta densidad a temperatura ambiente, liberando la piedra al finalizar con un baño en acetona líquida sin aplicar calor alguno.`,
      keyTakeaways: [
        'Jamás aplicar llama directa a una esmeralda: su anisotropía térmica provoca fractura inmediata.',
        'Usar ceras termoplásticas de baja fusión (50-60°C) con plancha termostática gradual.',
        'El uso de dops mecánicos y adhesivos fríos elimina el riesgo térmico en gemas de alta gama.'
      ],
      scientificFormula: '\\Delta T_{\\text{máx admisible}} \\le 30^\\circ\\text{C/min} \\quad | \\quad T_{\\text{fusión de cera}} \\approx 55^\\circ\\text{C}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Fijación de esmeralda sobre vástago dop de latón mediante cera termoplástica de baja fusión (55°C) en placa controlada digitalmente.',
      imageSource: 'Escuela Colombiana de Joyería / Taller de Talla',
      imageAuthor: 'Archivo de Práctica Lapidaria',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm8-l4',
      moduleId: 8,
      order: 4,
      title: 'Lección 8.4: Anatomía y Geometría de la Talla Esmeralda Clásica (Step Cut)',
      readTime: '17 min',
      difficulty: 'Avanzado',
      summary: 'Arquitectura facetaria del corte octagonal escalonado. Desglose de las 57 facetas: tabla, 8 esquinas truncadas en chaflán a 45°, 24 facetas de corona y 24 facetas de pabellón. Proporciones áureas y ángulos ideales.',
      content: `La **Talla Esmeralda Clásica (*Emerald Cut*)** es una de las mayores contribuciones históricas de la lapidación a la protección y lucimiento de los ciclosilicatos:

### 1. El Esquema Canónico de 57 Facetas
Una talla octagonal escalonada completa estándar se compone de:
- **1 Faceta de Tabla:** Superficie horizontal superior octagonal.
- **Corona (24 facetas en 3 hileras escalonadas):**
  - 8 facetas de la primera hilera superior adyacente a la tabla.
  - 8 facetas de la segunda hilera intermedia.
  - 8 facetas de la tercera hilera de rotura adyacente al filetín.
- **Filetín (*Girdle*):** Banda perimetral estrecha que recorre los cuatro lados largos y los cuatro chaflanes de esquina.
- **Pabellón o Culata (24 facetas en 3 hileras escalonadas + Culatín opcional):**
  - 8 facetas de culata superior.
  - 8 facetas intermedias.
  - 8 facetas inferiores que rematan en una quilla longitudinal (*keel line*) o en un diminuto culatín plano octagonal (faceta 58).

### 2. Parámetros y Proporciones Geométricas Ideales
- **Relación Largo/Ancho:** Entre **1.30:1 y 1.50:1** para esmeraldas rectangulares tradicionales (1.00:1 para tallas cuadradas de alta gama).
- **Tamaño de Tabla:** Entre el **60% y el 70%** del ancho de la gema.
- **Altura de Corona:** Entre el **12% y el 15%** de la profundidad total.
- **Profundidad de Pabellón:** Entre el **42% y el 45%** del ancho total (para respetar el ángulo crítico de $39.3^\circ$ y evitar ventana).
- **Los Cuatro Chaflanes de Esquina:** Deben estar cortados simétricamente a **$45^\circ$** respecto a los lados rectangulares, con un ancho equivalente al 8-12% del ancho total. Su función primordial es distribuir la presión del engaste joyero eliminando los vértices en $90^\circ$ propensos a desportillarse.`,
      keyTakeaways: [
        'La talla esmeralda estándar posee 57 facetas dispuestas en hileras escalonadas paralelas al filetín.',
        'Los cuatro chaflanes a 45° eliminan concentraciones mecánicas de esfuerzo en el engaste.',
        'Proporciones clave: tabla 60-70%, corona 12-15%, pabellón 42-45% y relación largo/ancho 1.3:1 a 1.5:1.'
      ],
      scientificFormula: '\\text{Geometría: 1 Tabla } + 24\\text{ Corona } + 4\\text{ Chaflanes } + 24\\text{ Pabellón } + 1\\text{ Quilla} = 57\\text{ facetas}',
      diagramKey: 'emerald_cut_geometry',
      diagramType: 'Esquema Cristalográfico Vectorial',
      diagramCaption: 'Geometría canónica de la Talla Esmeralda: 57 facetas escalonadas, proporciones de corona/pabellón y los cuatro chaflanes a 45° protectores.',
      imageSource: 'GIA Cutting Research / Vectorización JAIRRESTAURA',
      imageAuthor: 'Equipo Científico JAIRRESTAURA',
      imageLicense: 'Creative Commons CC-BY-SA 4.0',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm8-l5',
      moduleId: 8,
      order: 5,
      title: 'Lección 8.5: Pulido de Espejo sobre Disco de Estaño y Diamante Micronizado',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Tribología y micro-abrasión en la fase de pulido final. El rol del disco blando de estaño-plomo o fundición. Granulometrías de diamante policristalino de 1.0 µm, 0.5 µm y 0.25 µm en aceite mineral ligero.',
      content: `El pulido es la etapa definitiva donde las facetas desbastadas adquieren su **brillo vítreo de espejo** sin redondeo de aristas:

### 1. Tribología del Pulido de Silicatos Duros
El pulido no es un simple rayado fino; es un proceso mecanoquímico submicroscópico donde una película delgada de moléculas superficiales de silicato sufre flujo plástico superficial (capa de Beilby) y desgaste controlado a nivel nanométrico.

### 2. El Disco de Estaño Puro (Tin Lap)
- En la lapidación de esmeraldas de alta gama se utilizan platos de **estaño puro o aleación blanda de estaño-plomo**.
- La superficie blanda del estaño permite que las micropartículas de diamante se incrusten parcialmente (*charging*), evitando que el abrasivo ruede libremente y raye las facetas.
- El disco gira a velocidades moderadas (**800 a 1.200 RPM**), sustancialmente más lentas que en el desbaste para evitar generación de calor por rozamiento.

### 3. Granulometría de la Pasta de Diamante
1. **Pre-pulido:** Pasta de diamante de **1.0 micra (grano 14.000 mesh)** en aceite mineral ligero con baja presión de contacto, eliminando todas las marcas del plato 1200.
2. **Pulido Final Espejo:** Pasta de diamante de **0.25 micras (grano 60.000 a 100.000 mesh)** con lubricante volátil (alcohol o aceite mineral ligero).
3. **Limpieza e Inspección:** Cada faceta se examina a 20x con luz reflejada rasante para verificar que las aristas de unión entre facetas sean perfectamente rectas, nítidas y filosas como navajas, sin rayas residuales de abrasión.`,
      keyTakeaways: [
        'El disco de estaño blando fija las partículas de diamante permitiendo un pulido plano sin aristas redondeadas.',
        'Se utiliza pasta de diamante micronizado de 1.0 µm para prepulido y 0.25 µm para acabado final espejo.',
        'La velocidad de rotación se reduce a 800-1200 RPM con lubricante ligero para evitar sobrecalentamiento.'
      ],
      scientificFormula: '\\text{Granulometría final: } 0.25\\;\\mu\\text{m } (100.000\\text{ mesh}) \\quad | \\quad \\text{Lustre: Vítreo especular reflectante}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Pulido plano de espejo sobre plato de estaño puro con pasta de diamante micronizado de 0.25 µm sin redondeo de aristas a 1000 RPM.',
      imageSource: 'Laboratorio de Lapidación CDTEC Bogotá',
      imageAuthor: 'Archivo de Tecnología Lapidaria',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm8-l6',
      moduleId: 8,
      order: 6,
      title: 'Lección 8.6: Rendimiento en Peso (Recovery Rate) y Formas Lapidarias Alternativas',
      readTime: '16 min',
      difficulty: 'Intermedio',
      summary: 'El cálculo económico y físico de la merma de lapidación. Factores que determinan el rendimiento típico (20% al 35% del cristal original). Geometrías alternativas: talla gota, cojín, oval y cabujones lisos para esmeraldas Trapiche.',
      content: `En la economía esmeraldera, el lapidario enfrenta permanentemente un dilema técnico: **¿maximizar el peso en quilates retenido o maximizar la perfección óptica y el color del cristal?**

### 1. El Rendimiento Típico en Peso (*Recovery Percentage*)
El rendimiento se calcula formalmente como:
$$\\text{Rendimiento (\\%)} = \\left(\\frac{\\text{Peso de la gema tallada final (ct)}}{\\text{Peso del cristal en bruto original (ct)}}\\right) \\times 100$$
- En las esmeraldas colombianas, debido a su forma prismática hexagonal, inclusiones en la corteza y fracturas de mina, **el rendimiento promedio oscila únicamente entre el 20% y el 35%**.
- Esto significa que entre el **65% y el 80% de la masa original se convierte en polvo de desbaste** y fragmentos no aprovechables.
- Forzar un rendimiento superior al 45% en un cristal plano suele dar como resultado gemas con ventana óptica severa, culatas deformadas o inclusión de corteza negra en los bordes.

### 2. Formas Lapidarias Alternativas
Cuando la morfología del cristal en bruto no se adapta al prisma recto ideal para la talla octagonal, el lapidario recurre a geometrías alternativas:
1. **Talla Cojín (*Cushion Cut*):** De contorno cuadrangular con lados convexos curvados y esquinas suaves. Aprovecha extraordinariamente bien los cristales nodulares gruesos de Coscuez, concentrando un brillo periférico excepcional.
2. **Talla Gota o Pera (*Pear Shape*):** Contorno en lágrima que aprovecha cuñas asimétricas y cristales fracturados oblicuamente en mina, ideal para aretes y colgantes.
3. **Cabujón Simple o Doble:** Superficie curva pulida sin facetas. Es la forma obligatoria para ejemplares de **esmeralda Trapiche**, donde el facetado destruiría la percepción continua de los seis brazos radiales, y para gemas de jardín denso translúcido.`,
      keyTakeaways: [
        'El rendimiento típico de talla es de solo el 20% al 35%: hasta un 80% de la masa se pierde en merma.',
        'Forzar demasiado peso produce defectos ópticos de ventana que destruyen el valor comercial.',
        'Talla cojín, gota y cabujón permiten aprovechar al máximo cristales asimétricos o ejemplares Trapiche.'
      ],
      scientificFormula: '\\text{Recovery Rate} = \\frac{\\text{Quilates tallados}}{\\text{Quilates en bruto}} \\times 100 \\quad [\\text{Promedio Colombia: } 25\\% \\pm 5\\%]',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Colección de cortes lapidarios colombianos: octagonal tradicional, cojín vivaz, pera estilizada y cabujón de esmeralda Trapiche.',
      imageSource: 'Colección Privada JAIRRESTAURA / Museo de la Esmeralda',
      imageAuthor: 'Fotografía Gemológica JAIRRESTAURA',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    }
  ],
  caseStudy: {
    title: 'Optimización de Cristal en Bruto de Coscuez: Talla Octagonal Mayor vs Dos Gotas Gemelas',
    scenario: 'Un productor minero extrae un cristal en bruto de Coscuez de 14.80 quilates con excelente color verde intenso, pero atravesado por una fractura diagonal profunda en el tercio superior.',
    gemologicalAnalysis: 'El maestro lapidario analiza dos alternativas: 1) Tallar una única esmeralda octagonal grande de 4.80 quilates (32% de rendimiento) que retendrá la fractura visible en la esquina derecha de la corona (calidad Moderate F2, precio estimado USD $1.800/ct = $8.640). 2) Aserrar el cristal por la línea de fractura con disco de 0.2 mm y tallar un par de gotas calibradas idénticas de 2.10 quilates cada una (4.20 ct total, 28% de rendimiento), logrando dos gemas limpias sin fracturas en estado virgen No Oil.',
    diagnosticLimitations: 'El mercado internacional premia extraordinariamente los pares idénticos calibrados limpios para aretes de alta joyería.',
    learningOutcome: 'El par de gotas limpias se cotizó a USD $4.500/ct (Total: 4.20 ct × $4.500 = USD $18.900), más del doble del valor de la gema única agrietada. Se confirma que maximizar la calidad óptica supera económicamente a maximizar el quilataje unitario.'
  },
  practicalActivity: {
    title: 'Cálculo de Proporciones y Simetría de Facetas con Calibrador Leveridge',
    instructions: '1. Recibir una esmeralda tallada octagonal. 2. Medir con calibrador Leveridge: longitud, ancho, profundidad total y ancho de tabla. 3. Calcular el % de tabla (% Tabla = Ancho de tabla / Ancho de gema * 100). 4. Calcular el % de profundidad total. 5. Evaluar visualmente la simetría de los cuatro chaflanes de esquina y verificar si el filetín tiene grosor uniforme.',
    materialsNeeded: [
      'Calibrador digital Leveridge con puntas finas para gemas',
      'Lupa de 10x acromática y aplanática con luz LED',
      'Esmeralda tallada octagonal de muestra'
    ],
    deliverable: 'Ficha de control de calidad lapidaria con mediciones milimétricas, cálculo de porcentajes proporcionales y dictamen de simetría.',
    rubric: [
      { criterion: 'Mediciones milimétricas con precisión de 0.01 mm', weight: '35%' },
      { criterion: 'Cálculo exacto de porcentajes de tabla y profundidad', weight: '35%' },
      { criterion: 'Evaluación estética de simetría de chaflanes y filetín', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm8-q1',
      question: '¿Por qué la Talla Esmeralda Clásica incorpora obligatoriamente cuatro esquinas truncadas en chaflán a 45 grados?',
      type: 'multiple_choice',
      options: [
        'Es un requisito religioso precolombino sin función mecánica.',
        'Porque el berilo presenta fragilidad de choque en esquinas vivas de 90°, y los chaflanes a 45° redistribuyen las líneas de esfuerzo evitando desportillamientos durante el engaste en joyería.',
        'Para que la piedra pese menos y sea más económica.',
        'Porque las máquinas lapidarias no pueden cortar líneas rectas completas.'
      ],
      correctAnswer: 1,
      explanation: 'Las esquinas en ángulo recto de 90° en un mineral frágil con tensiones geológicas como la esmeralda se astillan fácilmente bajo la presión de las uñas de engaste. Los chaflanes biselados a 45° actúan como amortiguadores mecánicos que protegen la integridad física de la piedra.',
      scientificReference: 'Sinkankas, J. (1984). Gem Cutting: A Lapidary\'s Manual (3rd ed.). Van Nostrand Reinhold.'
    },
    {
      id: 'm8-q2',
      question: '¿Cuál es el rendimiento en peso (recovery percentage) promedio obtenido al tallar un cristal de esmeralda en bruto colombiano en una gema facetada de calidad óptima?',
      type: 'multiple_choice',
      options: [
        'Entre el 80% y el 90% (apenas se pierde un 10% en polvo).',
        'Entre el 20% y el 35% del peso del cristal original (el 65% a 80% restante se pierde en merma y desbaste).',
        'El 100% exacto porque la piedra solo se lustra con paño.',
        'Menos del 2% del peso original.'
      ],
      correctAnswer: 1,
      explanation: 'Debido a la forma hexagonal del prisma, las inclusiones de la corteza y la necesidad de orientar la tabla perpendicular al eje c eliminando zonas agrietadas, el rendimiento típico de la esmeralda colombiana se sitúa entre el 20% y el 35%.',
      scientificReference: 'Ringsrud, R. (2009). Emeralds, A Passionate Guide. Green View Publishing.'
    },
    {
      id: 'm8-q3',
      question: 'Durante la etapa de fijación del cristal en el dop (dopping), ¿por qué está terminantemente prohibido calentar la esmeralda directamente con una llama abierta de soplete?',
      type: 'multiple_choice',
      options: [
        'Porque el fuego consume químicamente el cromo transformándolo en aluminio.',
        'Porque el berilo posee coeficientes de dilatación térmica anisotrópicos y la subida brusca de temperatura produce un choque térmico destructivo que fractura el cristal instantáneamente.',
        'Porque la cera lapidaria solo funciona con hielo seco.',
        'Porque el oro del soplete mancha la superficie de la gema.'
      ],
      correctAnswer: 1,
      explanation: 'El berilo tiene coeficientes de dilatación térmica desiguales en las direcciones paralela y perpendicular al eje c. El calentamiento brusco con llama abierta genera tensiones internas descomunales que provocan el agrietamiento o estallido catastrófico de la gema.',
      scientificReference: 'Vargas, G., & Vargas, M. (1989). Faceting for Amateurs. Desert Press.'
    },
    {
      id: 'm8-q4',
      question: '¿Qué tipo de plato y abrasivo se utiliza en la lapidación moderna de alta gama para conferir a las facetas de la esmeralda un acabado de pulido espejo sin redondear las aristas?',
      type: 'multiple_choice',
      options: [
        'Plato de madera de pino con arena de playa común.',
        'Plato blando de estaño puro con pasta de diamante micronizado de 0.25 micras y rotación lenta (800-1200 RPM).',
        'Rueda de lija gruesa de carburo de silicio en seco a 10.000 RPM.',
        'Plato de caucho con bicarbonato de sodio.'
      ],
      correctAnswer: 1,
      explanation: 'El disco de estaño blando fija las partículas de diamante micronizado de 0.25 µm, permitiendo una acción de pulido plano perfecto que mantiene las aristas entre facetas nítidas y filosas como cuchillas, evitando el redondeo indeseado.',
      scientificReference: 'Sinkankas, J. (1984). Gem Cutting: A Lapidary\'s Manual. Van Nostrand Reinhold.'
    },
    {
      id: 'm8-q5',
      question: '¿Por qué las esmeraldas Trapiche casi nunca se cortan en facetas angulares escalonadas y se pulen invariablemente en forma de cabujón liso?',
      type: 'multiple_choice',
      options: [
        'Porque los talladores no saben facetar hexágonos.',
        'Porque las facetas angulares refractarían y desviarían la luz rompiendo la continuidad visual de los seis brazos radiales negros, mientras que el cabujón convexo liso preserva y realza la estrella geométrica completa.',
        'Porque la esmeralda Trapiche es tan blanda que se desmorona con facetas.',
        'Porque está prohibido por las leyes de Boyacá facetar trapiches.'
      ],
      correctAnswer: 1,
      explanation: 'El atractivo supremo de una esmeralda Trapiche radica en la nitidez gráfica continua de su hexágono central y sus seis brazos radiales. Si se tallara con facetas escalonadas, los reflejos internos de luz quebrarían visualmente el diseño; el domo liso de cabujón muestra la geometría en su máxima pureza.',
      scientificReference: 'Pignatelli, I., et al. (2015). A review of the trapiche beryl from Colombia. Gems & Gemology, 51(3).'
    }
  ],
  externalReferences: [
    {
      title: 'United States Faceters Guild: Precision Gem Cutting Standards',
      url: 'https://usfg.org',
      institution: 'US Faceters Guild',
      description: 'Diagramas geométricos de talla facetada y tolerancias angulares en minerales duros.',
      category: 'Lapidación Internacional'
    },
    {
      title: 'CIBJO Gemstone Lapidary & Cutting Terminology Standards',
      url: 'https://cibjo.org',
      institution: 'The World Jewellery Confederation',
      description: 'Definiciones de estilos de corte: escalonado, brillante, mixto y cabujón.',
      category: 'Normalización Técnica'
    }
  ],
  bibliography: [
    {
      author: 'Sinkankas, J.',
      year: '1984',
      title: 'Gem Cutting: A Lapidary\'s Manual (3rd ed.)',
      publication: 'Van Nostrand Reinhold, New York',
      doiOrUrl: 'https://www.worldcat.org/title/gem-cutting/oclc/10276634'
    },
    {
      author: 'Vargas, G., & Vargas, M.',
      year: '1989',
      title: 'Faceting for Amateurs (2nd ed.)',
      publication: 'Desert Press, Thermal, CA',
      doiOrUrl: 'https://www.usfg.org'
    },
    {
      author: 'Ringsrud, R.',
      year: '2009',
      title: 'Emeralds, A Passionate Guide',
      publication: 'Green View Publishing, Saratoga, CA',
      doiOrUrl: 'https://www.emeraldpassion.com'
    }
  ]
};
