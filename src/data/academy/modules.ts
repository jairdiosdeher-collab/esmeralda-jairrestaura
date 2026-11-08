import { DiplomaModule } from '../../types/academy';

export const DIPLOMA_MODULES: DiplomaModule[] = [
  // ==========================================
  // MÓDULO 1. FUNDAMENTOS DE GEMOLOGÍA
  // ==========================================
  {
    id: 1,
    code: 'MOD-01',
    title: 'Módulo 1: Fundamentos de Gemología y Ciencia de los Materiales Gemológicos',
    shortTitle: 'Fundamentos de Gemología',
    academicHours: 10,
    overview: 'Introducción epistemológica y física a la gemología moderna. Distinción ontológica entre minerales, gemas, cristales y rocas. Propiedades físicas, escalares y tensoriales, óptica mineral básica y métodos de observación no destructivos.',
    competencies: [
      'Diferenciar con precisión científica los conceptos de roca, mineral, cristal y gema preciosa.',
      'Operar con destreza los principios de dureza (Mohs), tenacidad, fractura y densidad relativa.',
      'Comprender la interacción de la luz polarizada y no polarizada con medios anisótropos birrefringentes.'
    ],
    learningObjectives: [
      'Explicar el origen de las propiedades ópticas fundamentales (refracción, birrefringencia, dispersión y pleocroísmo).',
      'Describir la escala de dureza de Mohs y su diferencia crítica con la tenacidad mecánica.',
      'Identificar los métodos de observación preliminar con lupa 10x y microscopía óptica.'
    ],
    prerequisites: ['Conocimientos básicos de química inorgánica y física óptica elemental.'],
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm1-l1',
        moduleId: 1,
        order: 1,
        title: 'Lección 1.1: Epistemología Gemológica: Mineral, Gema, Cristal y Roca',
        readTime: '12 min',
        difficulty: 'Iniciación',
        summary: 'Definiciones normativas y científicas. Por qué toda gema natural es un mineral o mineraloide, pero no todo mineral alcanza la categoría de gema.',
        content: `La **gemología** es una rama interdisciplinaria de las ciencias geológicas y de los materiales dedicada al estudio, caracterización, origen, clasificación, corte y autenticación de los materiales utilizados con fines ornamentales, decorativos y de joyería.

### 1. Distinciones Fundamentales
- **Mineral:** Sustancia natural, inorgánica, homogénea, con una composición química definida (aunque sujeta a sustituciones isomórficas dentro de rangos acotados) y una estructura atómica cristalina periódica tridimensional.
- **Cristal:** Sólido homogéneo con ordenamiento periódico interno de sus átomos, iones o moléculas, delimitado espontáneamente por caras planas bajo condiciones cinéticas de crecimiento favorables.
- **Roca:** Agregado polimineral o monomineral consolidado que constituye unidades litoestratigráficas de la corteza terrestre (ej. lutita negra, caliza, mármol).
- **Gema (Piedra Preciosa):** Mineral, roca o material orgánico que reúne tres condiciones universales: **belleza** (color, transparencia, brillo), **rareza** (escasez geológica) y **durabilidad** (dureza y resistencia química).

### 2. Criterios de Calificación de la Esmeralda
El berilo variedad esmeralda es un mineral de silicato que cumple con los tres atributos supremos:
1. *Belleza:* Un verde inigualable modulado por iones de cromo y vanadio en ausencia casi total de hierro.
2. *Rareza:* Concentración geoquímica anómala de berilio (Be) con cromo (Cr) en ambientes sedimentarios tectonizados.
3. *Durabilidad:* Dureza entre 7.5 y 8.0 en la escala de Mohs, que le confiere alta resistencia al rayado por polvo atmosférico ambiental (cuarzo de dureza 7).`,
        keyTakeaways: [
          'La esmeralda es una variedad noble del mineral berilo.',
          'La tríada de una gema es belleza, rareza geológica y durabilidad física.',
          'La diferencia entre roca y mineral es la homogeneidad química y el orden reticular.'
        ]
      },
      {
        id: 'm1-l2',
        moduleId: 1,
        order: 2,
        title: 'Lección 1.2: Propiedades Mecánicas: Dureza de Mohs vs Tenacidad y Clivaje',
        readTime: '14 min',
        difficulty: 'Intermedio',
        summary: 'Por qué una gema de dureza 8 puede romperse ante un golpe leve: la confusión común entre dureza al rayado y tenacidad ante impactos mecánicos.',
        content: `Uno de los errores más graves en el comercio y taller lapidario es confundir **dureza** con **tenacidad**.

### 1. Dureza según Mohs
Establecida en 1812 por el mineralogista Friedrich Mohs, mide la resistencia relativa de un mineral a ser rayado por otro:
- Talco (1) < Yeso (2) < Calcita (3) < Fluorita (4) < Apatito (5) < Ortoclasa (6) < Cuarzo (7) < Topacio (8) < Corindón (9) < Diamante (10).
- La esmeralda se ubica en **7.5 - 8.0**, lo que significa que el polvo ambiental común (constituido en gran parte por partículas de cuarzo de dureza 7) no raya su superficie con el uso cotidiano.

### 2. Tenacidad y Fragilidad
La **tenacidad** es la energía mecánica absorbida por un material antes de sufrir fractura. 
A pesar de su notable dureza, la esmeralda es un material **frágil**:
- Su red cristalina alberga canales paralelos al eje C y, en el caso colombiano, un sistema omnipresente de microfracturas tectónicas primarias ("el jardín").
- Un impacto perpendicular a las facetas o un choque térmico brusco genera concentración de tensiones en los vértices, provocando propagación de grietas catastróficas.
- Por esta razón, el maestro lapidario utiliza chaflanes protectores a 45 grados para truncar las esquinas frágiles.`,
        keyTakeaways: [
          'Dureza (resistencia al rayado) no equivale a tenacidad (resistencia a los golpes).',
          'La esmeralda tiene dureza 7.5 - 8 pero es frágil por tensiones y fracturas intrínsecas.',
          'El engaste requiere monturas con protección en esquinas (biseles o uñas redondeadas).'
        ]
      },
      {
        id: 'm1-l3',
        moduleId: 1,
        order: 3,
        title: 'Lección 1.3: Óptica Mineral: Índice de Refracción, Birrefringencia y Dispersión',
        readTime: '15 min',
        difficulty: 'Avanzado',
        summary: 'Comportamiento de la luz al atravesar el berilo hexagonal: birrefringencia uniaxial negativa, dicroísmo y ley de Snell.',
        content: `La interacción de la radiación electromagnética visible con la materia cristalina define la belleza lumínica de la esmeralda.

### 1. Ley de Snell e Índice de Refracción (IR)
Cuando un haz luminoso pasa del aire ($n_1 \\approx 1.000$) al interior de la esmeralda ($n_2 \\approx 1.577$), su velocidad disminuye de $300.000\\text{ km/s}$ a aproximadamente $190.000\\text{ km/s}$, desviándose según la ley de Snell:
$$n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)$$

### 2. Anisotropía y Birrefringencia
Al pertenecer al sistema hexagonal, el berilo es un cristal **ópticamente anisótropo uniaxial negativo**:
- Todo rayo luminoso que penetra con ángulo oblicuo al eje C se divide en dos rayos polarizados perpendicularmente: el **rayo ordinario (o)** y el **rayo extraordinario (e)**.
- Índices típicos para esmeralda colombiana:
  - $n_o \\approx 1.583$
  - $n_e \\approx 1.577$
  - Birrefringencia: $\\Delta n = n_o - n_e = 0.006$

### 3. Pleocroísmo (Dicroísmo)
Debido a que cada rayo es absorbido diferencialmente por los átomos de cromo:
- **Rayo ordinario (vibración perpendicular al eje C):** Verde esmeralda intenso y puro a verde ligeramente azuloso.
- **Rayo extraordinario (vibración paralela al eje C):** Verde amarillento más claro.`,
        keyTakeaways: [
          'La esmeralda es un cristal uniaxial negativo con birrefringencia de 0.005 a 0.007.',
          'El rayo ordinario transmite el verde azuloso profundo; el extraordinario un verde amarillento.',
          'El refractómetro gemológico es el instrumento diagnóstico fundamental para medir el IR.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 1: Diferenciación Rápida entre Esmeralda, Vidrio y Turmalina Verde',
      scenario: 'Un comerciante recibe un lote en bruto procedente de una compra informal. Una de las piezas presenta un color verde intenso extraordinario pero sin caras cristalinas evidentes.',
      gemologicalAnalysis: 'En el refractómetro gemológico, la pieza exhibe una sola sombra de lectura constante en 1.510 al girar la muestra 360 grados, sin mostrar duplicación de líneas. Bajo el polariscopio permanece totalmente oscura en todas las orientaciones (comportamiento isótropo). Bajo lupa 10x se aprecian burbujas de gas esféricas y remolinos fluidos.',
      diagnosticLimitations: 'El refractómetro por sí solo no indica si una muestra es sintética o natural si los índices coinciden con el berilo, pero descarta de manera instantánea e incontestable el vidrio artificial o minerales con índices disímiles.',
      learningOutcome: 'La pieza analizada era vidrio coloreado artificial (paste). El uso metódico del refractómetro y polariscopio evita fraudes comerciales inmediatos sin necesidad de pruebas químicas destructivas.'
    },
    practicalActivity: {
      title: 'Taller Práctico: Determinación de Anisotropía y Medición del Índice de Refracción',
      instructions: '1. Calibrar el refractómetro gemológico con líquido de contacto de alta refracción (1.81). 2. Colocar la faceta plana de la tabla de la esmeralda sobre el prisma de vidrio de plomo. 3. Observar la escala micrométrica y rotar la piedra 45 grados sucesivamente registrando la lectura más alta (rayo ordinario) y la más baja (rayo extraordinario). 4. Calcular la birrefringencia restando ambas lecturas.',
      materialsNeeded: ['Refractómetro gemológico', 'Líquido de contacto 1.81', 'Luz monocromática de sodio 589 nm', 'Pinzas gemológicas', 'Paño de microfibra'],
      deliverable: 'Ficha técnica con tabla de lecturas a 0°, 45°, 90°, 135°, cálculo de birrefringencia y conclusión del carácter uniaxial.',
      rubric: [
        { criterion: 'Técnica de colocación sin rayar el prisma', weight: '30%' },
        { criterion: 'Precisión en la lectura de los índices (3 decimales)', weight: '40%' },
        { criterion: 'Cálculo correcto de la birrefringencia', weight: '30%' }
      ]
    },
    quiz: [
      {
        id: 'q1-1',
        question: '¿Cuál es la fórmula química estequiométrica del berilo mineral base de la esmeralda?',
        type: 'multiple_choice',
        options: ['Al2O3 : Cr', 'Be3Al2Si6O18', 'ZrSiO4', 'Mg3Al2(SiO4)3'],
        correctAnswer: 1,
        explanation: 'El berilo es un ciclosilicato de berilio y aluminio con fórmula Be3Al2Si6O18.',
        scientificContext: 'Estructura hexagonal compuesta por anillos senarios de tetraedros [Si6O18]¹²⁻.'
      },
      {
        id: 'q1-2',
        question: 'La esmeralda es un mineral de gran tenacidad que resiste impactos mecánicos severos sin riesgo de fracturarse.',
        type: 'true_false',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Aunque su dureza en Mohs es 7.5 - 8.0 (difícil de rayar), su tenacidad es baja (es quebradiza) debido a tensiones internas y microfracturas naturales.',
        scientificContext: 'Fragilidad mecánica por concentración de tensiones elásticas en fisuras preexistentes.'
      },
      {
        id: 'q1-3',
        question: '¿Qué propiedad óptica explica que una esmeralda tallada muestre dos matices de verde distintos al observarla en direcciones perpendiculares?',
        type: 'multiple_choice',
        options: ['Dispersión cromática', 'Dicroísmo (Pleocroísmo)', 'Fluorescencia de rayos X', 'Fosforescencia'],
        correctAnswer: 1,
        explanation: 'El dicroísmo es la absorción diferencial de luz polarizada en dos direcciones vibracionales del cristal uniaxial.',
        scientificContext: 'El rayo ordinario transmite verde azuloso saturado; el extraordinario verde amarillento.'
      }
    ],
    externalReferences: [
      {
        title: 'GIA Gem Encyclopedia — Emerald Properties',
        url: 'https://www.gia.edu/emerald',
        institution: 'Gemological Institute of America',
        description: 'Monografía exhaustiva con datos físicos, espectrales y estándares gemológicos mundiales.',
        category: 'Gemología de Referencia'
      },
      {
        title: 'Mineral Spectroscopy Server — Beryl Spectra',
        url: 'https://minerals.gps.caltech.edu/',
        institution: 'Caltech Division of Geological and Planetary Sciences',
        description: 'Biblioteca científica de espectros UV-Vis e infrarrojos de berilos y esmeraldas.',
        category: 'Espectroscopía Mineral'
      }
    ],
    bibliography: [
      { author: 'Webster, R. & Read, P.G.', year: '1994', title: 'Gems: Their Sources, Descriptions and Identification (5th Ed.)', publication: 'Butterworth-Heinemann' },
      { author: 'Sinkankas, J.', year: '1981', title: 'Emerald and Other Beryls', publication: 'Chilton Book Company' },
      { author: 'Nassau, K.', year: '2001', title: 'The Physics and Chemistry of Color: The Fifteen Causes of Color (2nd Ed.)', publication: 'Wiley-Interscience' }
    ]
  },

  // ==========================================
  // MÓDULO 2. GEOLOGÍA DE LAS ESMERALDAS COLOMBIANAS
  // ==========================================
  {
    id: 2,
    code: 'MOD-02',
    title: 'Módulo 2: Geología, Metalogenia y Yacimientos Esmeraldíferos de Colombia',
    shortTitle: 'Geología de Yacimientos Colombianos',
    academicHours: 10,
    overview: 'Análisis metalogénico, estructural y tectónico de las cuencas cretácicas de la Cordillera Oriental de Colombia. Génesis hidrotermal epigenética sedimentaria, trampas estructurales y estudio detallado de Muzo, Coscuez, Peñas Blancas, La Pita, Chivor, Gachalá y Gachetá.',
    competencies: [
      'Identificar los modelos estructurales de fallas de sobrecorrimiento y cabalgamiento que controlan la mineralización.',
      'Analizar la geoquímica de fluidos hipersalinos y la lixiviación de elementos en lutitas negras.',
      'Diferenciar las particularidades litológicas entre el cinturón esmeraldífero occidental y oriental evitando mitos diagnósticos.'
    ],
    learningObjectives: [
      'Explicar el modelo hidrotermal sedimentario único en el mundo frente a los yacimientos pegmatíticos extranjeros.',
      'Detallar el papel de las evaporitas cretácicas en la generación de salmueras calientes a 300°C.',
      'Caracterizar los yacimientos principales: Muzo, Coscuez, La Pita, Peñas Blancas, Chivor y Gachalá con base bibliográfica verificable.'
    ],
    prerequisites: ['Módulo 1: Fundamentos de Gemología y Geología básica.'],
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm2-l1',
        moduleId: 2,
        order: 1,
        title: 'Lección 2.1: El Modelo Tectónico Hidrotermal Colombiano',
        readTime: '15 min',
        difficulty: 'Avanzado',
        summary: 'Por qué Colombia no tiene pegmatitas en sus minas de esmeraldas: la circulación hidrotermal profunda en la cuenca de trasarco cretácica.',
        content: `A diferencia de Brasil, Zambia, Madagascar o Rusia, donde las esmeraldas se formaron por intrusiones graníticas ígneas (pegmatitas) que aportaron berilio en rocas máficas con cromo, en Colombia **no existe ninguna intrusión magmática asociada a las esmeraldas**.

### 1. La Tectónica de la Cordillera Oriental
Durante el Mesozoico (Cretácico Temprano), la cuenca sedimentaria acumuló miles de metros de lutitas, calizas y evaporitas (yeso, halita):
- En las orogenias del Cretácico Tardío y Cenozoico, la tectónica compresiva reactivó fallas profundas.
- El agua atrapada en los sedimentos se convirtió en salmueras hipersalinas debido a la disolución de horizontes evaporíticos profundos.
- Estas soluciones alcanzaron temperaturas entre **290°C y 360°C** a profundidades estimadas de 4.5 a 6 kilómetros, impulsadas por gradientes geotérmicos y sobrepresión de fluidos.

### 2. Mecanismo de Lixiviación Geoquímica
- Las salmueras ácidas y ricas en cloruros disolvieron el berilio disperso en las arcillas de las lutitas negras.
- Simultáneamente extrajeron el cromo y vanadio contenidos en la abundante materia orgánica carbonosa.
- Al ascender hacia trampas tectónicas (zonas de brechamiento en charnelas de pliegues anticlinales), reaccionaron con rocas carbonatadas, alcalinizándose y precipitando calcita, dolomita, pirita y **berilo esmeralda**.`,
        keyTakeaways: [
          'Génesis epigenética hidrotermal sedimentaria sin magmatismo pegmatítico.',
          'Las evaporitas aportaron el cloruro y sodio que formaron las salmueras hipersalinas.',
          'El ambiente sedimentario reductor atrapó el hierro en pirita, dejando libre al cromo para teñir el berilo con máxima fluorescencia.'
        ]
      },
      {
        id: 'm2-l2',
        moduleId: 2,
        order: 2,
        title: 'Lección 2.2: Yacimientos del Cinturón Occidental: Muzo, Coscuez, Peñas Blancas y La Pita',
        readTime: '18 min',
        difficulty: 'Avanzado',
        summary: 'Geología litoestratigráfica de las formaciones Paja y Rosablanca en el valle del río Minero en Boyacá.',
        content: `El Cinturón Occidental se extiende longitudinalmente en el departamento de Boyacá y Santander:

### 1. Mina de Muzo
- **Marco Geológico:** Formación Paja (Cretácico Inferior, Hauteriviano-Barremiano). Lutitas carbonosas calcáreas negras intensamente plegadas y falladas por la Falla de Itoco.
- **Mineralogía Diagnóstica de Veta:** Vetas y brechas de calcita fibrosa blanca, dolomita, cuarzo, pirita dorada, fluorita y la rarísima **parisita-(Ce)**.
- **Esmeraldas de Muzo:** Cristales prismáticos con caras terminales basales netas. Se caracterizan por un verde saturado cálido o neutro aterciopelado. Es el epicentro de la *Gota de Aceite*.

### 2. Mina de Coscuez (San Pablo de Borbur)
- **Marco Geológico:** Formación Rosablanca y Paja. Calizas micríticas intercaladas con lutitas negras muy tectonizadas.
- **Características:** Yacimiento de altísimo rendimiento histórico. Los cristales suelen presentar hábitos nodulares, agregados cristalinos complejos y una zonación de color marcada con tonalidades verde vivas ligeramente amarillentas ("fuego de Coscuez").

### 3. La Pita y Peñas Blancas
- **La Pita:** Descubierta e intensificada comercialmente a finales del siglo XX. Productora de cristales prismáticos de gran pureza cristalina y tamaño considerable.
- **Peñas Blancas:** Famosa en la literatura gemológica por concentrar una fracción significativa de las legendarias **esmeraldas Trapiche** de simetría hexagonal perfecta.`,
        keyTakeaways: [
          'Muzo: Formación Paja, vetas con calcita y parisita, verde aterciopelado profundo.',
          'Coscuez: Intercalaciones calcáreas, cristales nodulares luminosos de alto rendimiento.',
          'Peñas Blancas: Epicentro geológico de especímenes Trapiche simétricos.'
        ]
      },
      {
        id: 'm2-l3',
        moduleId: 2,
        order: 3,
        title: 'Lección 2.3: Yacimientos del Cinturón Oriental: Chivor, Gachalá y Gachetá',
        readTime: '16 min',
        difficulty: 'Avanzado',
        summary: 'Estructuras de fallas de sobrecorrimiento en el valle de Tenza (Boyacá y Cundinamarca) y formación de esmeraldas de alta transparencia.',
        content: `El Cinturón Oriental presenta diferencias geológicas y morfológicas notables frente al occidental:

### 1. Mina de Chivor
- **Contexto Geológico:** Formación Guavio y Macanal (Kimeridgiano a Berriasiano). Grandes fallas inversas y mantos de corrimiento donde paquetes de areniscas y lutitas descansan sobre calizas.
- **Particularidades Mineralógicas:** Abundante precipitación de **albita** (feldespato sódico) y **pirita euhedral** en las venas.
- **Aspecto Típico:** Cristales de esmeralda muy estilizados, prismas alargados y esbeltos, de brillo vítreo muy cristalino y una tonalidad verde ligeramente azulada de gran luminosidad diurna.

### 2. Gachalá y Gachetá (Cundinamarca)
- **Gachalá:** Conocida por vetas en lutitas calcáreas donde se han hallado megacristales históricos como la *Esmeralda Gachalá* (858 quilates descubierta en 1967 en la mina Vega de San Juan).
- **Gachetá:** Zona de manifestaciones hidrotermales con menor escala comercial pero de gran interés científico por la transición litológica de la cuenca oriental.

*Aviso de Precaución Científica:* La gemología moderna prohíbe taxativamente atribuir una gema a una mina basándose exclusivamente en el matiz verde. Existen esmeraldas de Chivor de verde cálido y esmeraldas de Muzo con reflejo azulado. Solo el análisis de inclusiones diagnósticas y química isotópica traza permite emitir una opinión fundada de origen.`,
        keyTakeaways: [
          'Chivor: Formaciones Guavio y Macanal con presencia característica de albita y pirita.',
          'Gachalá: Histórico yacimiento productor de grandes cristales prismáticos.',
          'Rigurosa regla gemológica: No se determina procedencia de mina únicamente por el color.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 2: Intento de Clasificación de Mina por Simple Tonalidad',
      scenario: 'Un coleccionista adquiere una esmeralda tallada de 4.1 quilates con un verde azulado luminoso, asumiendo categóricamente que procede de Chivor. Al solicitar un informe pericial en laboratorio, se descubre que la muestra contiene agujas de parisita-(Ce) y calcita rhomboédrica con FTIR típico del Cinturón Occidental.',
      gemologicalAnalysis: 'La presencia de parisita-(Ce) es un indicador paragenético exclusivo de ciertas zonas hidrotermales del Cinturón Occidental (Muzo/Borbur). Aunque la piedra poseía un tono azulado que el mercado suele asociar a Chivor, su composición de inclusiones diagnósticas demostró mineralización occidental.',
      diagnosticLimitations: 'El color responde al balance de absorción Cr/V y a la orientación de la talla respecto al eje óptico, variables que varían enormemente dentro de un mismo bolsillo mineralizado.',
      learningOutcome: 'Nunca debe atribuirse una procedencia a una mina por el color a simple vista. Los laboratorios serios analizan microinclusiones y elementos traza antes de sugerir procedencia geográfica.'
    },
    practicalActivity: {
      title: 'Cartografía Geológica Comparativa: Elaboración de Columnas Litoestratigráficas',
      instructions: '1. Comparar los mapas geológicos oficiales del SGC de la plancha 169 (Muzo) y la plancha 190 (Chivor). 2. Identificar la posición relativa de las formaciones Paja y Guavio. 3. Listar los minerales de ganga presentes en cada distrito según la literatura revisada.',
      materialsNeeded: ['Mapas geológicos digitales SGC', 'Software visor PDF o SIG', 'Fichas bibliográficas de Giuliani y Groat'],
      deliverable: 'Cuadro comparativo litoestratigráfico y mineralógico Cinturón Occidental vs Oriental.',
      rubric: [
        { criterion: 'Identificación correcta de formaciones cretácicas', weight: '40%' },
        { criterion: 'Descripción de minerales accesorios diagnósticos', weight: '40%' },
        { criterion: 'Manejo riguroso de fuentes geológicas oficiales', weight: '20%' }
      ]
    },
    quiz: [
      {
        id: 'q2-1',
        question: '¿Qué tipo de proceso geológico generó los depósitos de esmeraldas de Colombia?',
        type: 'multiple_choice',
        options: ['Intrusión magmática pegmatítica', 'Proceso hidrotermal sedimentario epigenético', 'Metamorfismo regional de ultra alta presión', 'Vulcanismo piroclástico andino'],
        correctAnswer: 1,
        explanation: 'En Colombia las esmeraldas se formaron por salmueras hidrotermales a 290°C - 360°C en lutitas negras sedimentarias sin intrusiones pegmatíticas.',
        scientificContext: 'Giuliani et al., Nature (2000) y Cheilletz et al. (1994).'
      },
      {
        id: 'q2-2',
        question: '¿Es científicamente válido afirmar con certeza que una esmeralda proviene de Chivor únicamente porque su color es verde azuloso?',
        type: 'true_false',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. La tonalidad varía dentro de cada mina según la orientación del corte y la relación Cr/V. Se requieren análisis microscópicos y espectroscópicos para respaldar el origen.',
        scientificContext: 'Directrices internacionales de reporte de origen de laboratorios CDTEC, GIA y SSEF.'
      },
      {
        id: 'q2-3',
        question: '¿Cuál de los siguientes minerales de tierras raras es una inclusión sólida diagnóstica casi exclusiva de la zona minera de Muzo?',
        type: 'multiple_choice',
        options: ['Biotita', 'Chorlo (Turmalina negra)', 'Parisita-(Ce)', 'Crisoberilo'],
        correctAnswer: 2,
        explanation: 'La parisita-(Ce) es un fluorocarbonato de cerio y lantano descubierto en Muzo, muy típico de sus vetas hidrotermales.',
        scientificContext: 'Descubierto en Muzo por J.J. Paris en 1835 y descrito cristalográficamente en la literatura mineralógica.'
      }
    ],
    externalReferences: [
      {
        title: 'Servicio Geológico Colombiano — Recursos Minerales de Boyacá',
        url: 'https://www.sgc.gov.co',
        institution: 'Servicio Geológico Colombiano (SGC)',
        description: 'Mapas geológicos y memorias técnicas oficiales de los cuadrángulos de Muzo, Coscuez y Chivor.',
        category: 'Geología Estatal'
      },
      {
        title: 'The Colombian Emerald Deposits: A Unique Model — Economic Geology',
        url: 'https://pubs.geoscienceworld.org/economicgeology',
        institution: 'Society of Economic Geologists (SEG)',
        description: 'Artículo seminal de Giuliani, Cheilletz et al. sobre metalogenia hidrotermal.',
        category: 'Geología Económica'
      }
    ],
    bibliography: [
      { author: 'Giuliani, G., Cheilletz, A., Arboleda, C. et al.', year: '1995', title: 'An evaporitic origin of the parent brines of Colombian emeralds', publication: 'Chemical Geology, 124(3-4), 209-219' },
      { author: 'Cheilletz, A., Féraud, G., Giuliani, G. & Rodriguez, C.', year: '1994', title: 'Time-pressure and temperature constraints on the formation of Colombian emeralds', publication: 'Economic Geology, 89(2), 361-380' },
      { author: 'Groat, L.A., Giuliani, G., Marshall, D. & Turner, D.', year: '2008', title: 'Emerald deposits: a review', publication: 'Elements, 4(2), 99-104' }
    ]
  },

  // ==========================================
  // MÓDULO 3. CRISTALOGRAFÍA Y MINERALOGÍA
  // ==========================================
  {
    id: 3,
    code: 'MOD-03',
    title: 'Módulo 3: Cristalografía, Simetría Reticular y Mineralogía de Paragénesis',
    shortTitle: 'Cristalografía y Mineralogía',
    academicHours: 10,
    overview: 'Estructura atómica interna del ciclosilicato de berilo. Simetría hexagonal dihexagonal bipiramidal (6/m 2/m 2/m), canales estructurales c, coordinación de iones cromóforos y minerales de paragénesis hidrotermal (calcita, dolomita, pirita, albita, cuarzo y parisita).',
    competencies: [
      'Representar e interpretar la estructura de anillos senarios [Si6O18]¹²⁻ en la red cristalina del berilo.',
      'Analizar los mecanismos de sustitución isomórfica octaédrica y canalicular de álcalis (Na, Cs) y agua (Tipo I y II).',
      'Identificar la asociación paragenética de minerales accesorios en muestras de mano y cortes delgados.'
    ],
    learningObjectives: [
      'Describir el grupo espacial P6/mcc y los índices de Miller para formas cristalográficas prismáticas {10-10} y pinacoidales {0001}.',
      'Explicar el comportamiento del agua estructural tipo I y tipo II dentro de los canales paralelos al eje C.',
      'Diferenciar hábitos macroscópicos: prismas esbeltos, prismas chatos y maclas de crecimiento.'
    ],
    prerequisites: ['Módulo 1: Fundamentos de Gemología.'],
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm3-l1',
        moduleId: 3,
        order: 1,
        title: 'Lección 3.1: Estructura Reticular del Berilo y Anillos [Si6O18]¹²⁻',
        readTime: '16 min',
        difficulty: 'Avanzado',
        summary: 'Arquitectura atómica tridimensional: ciclosilicatos con canales huecos a lo largo del eje C y sitios de sustitución de cationes.',
        content: `El berilo cristaliza en la clase **dihexagonal bipiramidal** ($6/m\\,2/m\\,2/m$) del sistema hexagonal, perteneciendo al grupo espacial $P6/mcc$ con parámetros de celda unitaria:
- $a = b \\approx 9.21\\text{ Å}$
- $c \\approx 9.19\\text{ Å}$
- $Z = 2$ unidades de fórmula por celda unitaria.

### 1. La Red Ciclosilicatada
La estructura fundamental está compuesta por:
1. **Anillos senarios de tetraedros de silicio $[\\text{Si}_6\\text{O}_{18}]^{12-}$:** Cada anillo comparte dos vértices de oxígeno con tetraedros vecinos.
2. Estos anillos se apilan paralelos al plano basal $(0001)$, formando **canales abiertos continuos** a lo largo del eje óptico C.
3. Los anillos se enlazan lateralmente mediante:
   - **Tetraedros de Berilio:** Coordinados por cuatro oxígenos $[\text{BeO}_4]^{6-}$.
   - **Octaedros de Aluminio:** Coordinados por seis oxígenos $[\text{AlO}_6]^{9-}$.

### 2. Canales Estructurales y Moléculas de Agua
Los canales hexagonales tienen un diámetro de aproximadamente $5.1\\text{ Å}$, suficiente para albergar:
- Moléculas de agua atrapadas durante la cristalización hidrotermal.
- **Agua Tipo I:** Molécula cuyo vector dipolar $H-H$ es paralelo al eje C (típica en berilos pobres en álcalis como los colombianos).
- **Agua Tipo II:** Molécula cuyo vector dipolar $H-H$ es perpendicular al eje C (asociada a cationes alcalinos como $\text{Na}^+$ ubicados en los canales).`,
        keyTakeaways: [
          'Estructura de ciclosilicato con canales huecos paralelos al eje C.',
          'El cromo y vanadio sustituyen al aluminio en los sitios octaédricos.',
          'El agua en los canales se detecta mediante espectroscopía infrarroja FTIR para diferenciar berilos sintéticos y naturales.'
        ]
      },
      {
        id: 'm3-l2',
        moduleId: 3,
        order: 2,
        title: 'Lección 3.2: Índices de Miller y Morfología Cristalina del Berilo',
        readTime: '14 min',
        difficulty: 'Intermedio',
        summary: 'Orientación de caras prismáticas, piramidales y pinacoides en el sistema hexagonal de Bravais-Miller.',
        content: `Para indexar caras en el sistema hexagonal se utiliza el sistema de cuatro índices de Bravais-Miller $(hkil)$, donde $h + k + i = 0$.

### 1. Formas Cristalográficas Principales en Esmeraldas Colombianas
- **Prisma de primer orden $\\{10\\bar{1}0\\}$:** Las seis caras verticales dominantes del prisma hexagonal.
- **Pinacoide basal $\\{0001\\}$:** Caras planas superior e inferior que truncan perpendicularmente el prisma.
- **Prisma de segundo orden $\\{11\\bar{2}0\\}$:** Caras intermedias que biselan las aristas del prisma principal.
- **Bipirámides $\\{10\\bar{1}1\\}$ y $\\{11\\bar{2}1\\}$:** Facetas inclinadas triangulares en la cúspide del cristal (comunes en Chivor, menos frecuentes en Muzo donde prevalece la terminación plana).

### 2. Estrías Verticales y Dislocaciones
Las caras del prisma hexagonal suelen exhibir estrías verticales finas paralelas al eje C producidas por oscilaciones cinéticas de crecimiento entre prismas de diferente orden.`,
        keyTakeaways: [
          'Índices de Bravais-Miller de cuatro dígitos (h k i l).',
          'El pinacoide basal {0001} es la terminación plana típica de cristales de Muzo.',
          'Las estrías longitudinales son huellas morfológicas de crecimiento natural.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 3: Identificación de Esmeralda Sintética de Flujo por Ausencia de Agua en Canales',
      scenario: 'Llega a un laboratorio de Bogotá una gema de verde perfecto, sin inclusiones visibles a 20x. El cliente afirma que es una esmeralda natural colombiana de pureza extrema.',
      gemologicalAnalysis: 'El examen FTIR en el rango de 3500 a 3800 cm⁻¹ muestra una línea de base completamente plana, sin ninguna banda de absorción de agua estructural Tipo I ni Tipo II. Como los procesos de síntesis por fundente anhidro (Flux, como Chatham o Gilson) operan sin agua a altas temperaturas, sus cristales carecen de moléculas en los canales hexagonales.',
      diagnosticLimitations: 'El análisis visual por lupa no permitía confirmar la síntesis debido a la ausencia de velos de fundente típicos, pero la espectroscopía infrarroja fue contundente.',
      learningOutcome: 'Toda esmeralda natural hidrotermal contiene agua en sus canales reticulares. La ausencia de agua en FTIR certifica síntesis por método de flujo anhidro.'
    },
    practicalActivity: {
      title: 'Modelado Tridimensional de la Celda Unitaria del Berilo',
      instructions: 'Construir un esquema digital o físico de los anillos senarios de silicio y la posición de los sitios octaédricos donde se ubican los iones de cromo.',
      materialsNeeded: ['Software cristalográfico libre (VESTA o Mercury) o esferas de modelado molecular', 'Archivo CIF de estructura de berilo'],
      deliverable: 'Gráfico con identificación del eje C, canales hexagonales y distancia interatómica Al-O.',
      rubric: [
        { criterion: 'Exactitud en la coordinación tetraédrica y octaédrica', weight: '50%' },
        { criterion: 'Representación correcta de la simetría senaria', weight: '50%' }
      ]
    },
    quiz: [
      {
        id: 'q3-1',
        question: '¿En qué sitios de la red atómica del berilo se ubican los iones cromóforos de cromo (Cr³⁺) y vanadio (V³⁺)?',
        type: 'multiple_choice',
        options: ['En los tetraedros de silicio', 'En los sitios octaédricos sustituyendo al Al³⁺', 'En los canales centrales huecos', 'En las caras pinacoidales externas'],
        correctAnswer: 1,
        explanation: 'El cromo y vanadio sustituyen isomórficamente al ion aluminio Al³⁺ en los sitios octaédricos coordinados por 6 oxígenos.',
        scientificContext: 'Coordinación octaédrica con simetría local D3.'
      },
      {
        id: 'q3-2',
        question: '¿Qué método espectroscópico identifica la presencia o ausencia de moléculas de agua en los canales hexagonales del berilo?',
        type: 'multiple_choice',
        options: ['Espectroscopía infrarroja FTIR', 'Balanza de densidad', 'Filtro Chelsea', 'Lupa triplete 10x'],
        correctAnswer: 0,
        explanation: 'La espectroscopía FTIR detecta las vibraciones de estiramiento del enlace O-H de moléculas de agua tipo I y II entre 3500 y 3800 cm⁻¹.',
        scientificContext: 'Bandas características a 3694 cm⁻¹ (Tipo I) y 3592 cm⁻¹ (Tipo II).'
      }
    ],
    externalReferences: [
      {
        title: 'Mindat.org — Beryl Mineralogical Properties & Structure',
        url: 'https://www.mindat.org/min-813.html',
        institution: 'Hudson Institute of Mineralogy',
        description: 'Base de datos mineralógica con parámetros de celda unitaria, grupo espacial y difracción de rayos X.',
        category: 'Mineralogía'
      }
    ],
    bibliography: [
      { author: 'Bragg, W.L. & West, J.', year: '1926', title: 'The structure of beryl, Be3Al2Si6O18', publication: 'Proceedings of the Royal Society of London. Series A, 111(759), 691-714' },
      { author: 'Aurisicchio, C., Fioravanti, G., Grubessi, O. & Zanazzi, P.F.', year: '1988', title: 'Reappraisal of the crystal chemistry of beryl', publication: 'American Mineralogist, 73(7-8), 826-837' }
    ]
  },

  // ==========================================
  // MÓDULO 4. IDENTIFICACIÓN GEMOLÓGICA
  // ==========================================
  {
    id: 4,
    code: 'MOD-04',
    title: 'Módulo 4: Metodología e Instrumentación en Identificación Gemológica',
    shortTitle: 'Identificación Gemológica',
    academicHours: 10,
    overview: 'Protocolos de laboratorio no destructivos para la identificación concluyente de esmeraldas naturales, diferenciación frente a sintéticos (hidrotermales y de fundente), imitaciones vítreas, dobletes y materiales análogos (turmalina, peridoto, tsavorita, diópsido y fluorita).',
    competencies: [
      'Aplicar la batería instrumental estándar: refractómetro, polariscopio, dicroscopio, microscopio y densidad.',
      'Diferenciar inequívocamente esmeraldas naturales de esmeraldas sintéticas Chatham, Biron, Gilson y Tairus.',
      'Identificar gemas compuestas (dobletes de berilo/vidrio) y tratamientos no declarados.'
    ],
    learningObjectives: [
      'Reconocer los límites operacionales de cada instrumento óptico y físico.',
      'Explicar por qué ninguna prueba aislada es suficiente para un diagnóstico concluyente.',
      'Documentar los pasos de la cadena de custodia y análisis gemológico no destructivo.'
    ],
    prerequisites: ['Módulo 1: Fundamentos de Gemología', 'Módulo 3: Cristalografía.'],
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm4-l1',
        moduleId: 4,
        order: 1,
        title: 'Lección 4.1: Batería Instrumental Clásica y Protocolo de Diagnóstico',
        readTime: '15 min',
        difficulty: 'Intermedio',
        summary: 'Secuencia lógica de ensayos no destructivos para identificar una gema verde sin margen de error.',
        content: `El gemólogo profesional nunca emite un dictamen con una sola prueba. Se sigue un protocolo riguroso:

1. **Inspección Óptica Preliminar (Lupa 10x):** Identificación de simetría de facetas, marcas de pulido, fracturas y burbujas.
2. **Polariscopio:** Diagnóstico de anisotropía.
   - Si permanece oscuro en 360°: Material isótropo (vidrio, granate tsavorita, espinela sintética).
   - Si se ilumina y extingue 4 veces en 360°: Anisótropo cristalino (esmeralda, turmalina, peridoto).
   - Si muestra sombras anómalas anulares: Vidrio tensionado o plástico.
3. **Refractometría:**
   - Esmeralda natural: $1.577 - 1.583$ (Birrefringencia $0.006$).
   - Cuarzo (aventurina/prasiolita): $1.544 - 1.553$.
   - Turmalina verde (verdelita): $1.624 - 1.644$ (Birrefringencia mucho mayor: $0.020$).
   - Granate tsavorita: $1.74$ (Monorrefringente).
   - Peridoto: $1.654 - 1.690$ (Fuerte duplicación de facetas de culata visible bajo lupa).
4. **Densidad Relativa Hidrostática:**
   - Berilo esmeralda: $2.68 - 2.74\\text{ g/cm}^3$.`,
        keyTakeaways: [
          'El polariscopio separa de inmediato vidrios de minerales anisótropos.',
          'El refractómetro separa la esmeralda de turmalinas, peridotos y granates.',
          'El microscopio gemológico es el árbitro supremo para separar esmeraldas naturales de sintéticas.'
        ]
      },
      {
        id: 'm4-l2',
        moduleId: 4,
        order: 2,
        title: 'Lección 4.2: Detección de Sintéticos (Flux vs Hidrotermales) y Dobletes',
        readTime: '18 min',
        difficulty: 'Avanzado',
        summary: 'Microestructuras diagnósticas de esmeraldas de laboratorio y gemas compuestas armadas.',
        content: `Las esmeraldas sintéticas tienen idéntica composición química básica y propiedades ópticas casi idénticas a las naturales, por lo que **el refractómetro da lecturas superpuestas**. Su diferenciación reside en las inclusiones microscópicas:

### 1. Esmeraldas Sintéticas de Flujo (Flux: Chatham, Gilson, Lennix)
- **Método de Crecimiento:** Disolución de óxidos de berilo en un fundente de molibdato o vanadato de litio a alta temperatura ($800°C - 1000°C$).
- **Inclusiones Diagnósticas:** Residuos de fundente en forma de velos de encaje ("veil-like inclusions"), glóbulos opacos y cristales metálicos de platino del crisol. No contienen agua en FTIR.

### 2. Esmeraldas Sintéticas Hidrotermales (Biron, Tairus, Malossi)
- **Método:** Autoclave de alta presión con soluciones acuosas alcalinas o ácidas imitando la naturaleza.
- **Inclusiones Diagnósticas:**
  - Estructuras de crecimiento en zigzag o espiga ("chevron / growth banding").
  - Inclusiones en cabeza de clavo ("nail-head spicules"): microespículas que parten de un cristalito semilla fenacítico.
  - Espectro FTIR muestra bandas de absorción distintas a las de la esmeralda colombiana natural.

### 3. Dobletes y Tripletes
- Unión de una capa superior de berilo incoloro o granate con una base de vidrio verde mediante adhesivo coloreado.
- **Diagnóstico:** Bajo inmersión en agua o líquido refractivo se observa con nitidez el plano de unión horizontal y burbujas esféricas aplanadas atrapadas en la película de pegamento.`,
        keyTakeaways: [
          'Los sintéticos tienen el mismo índice de refracción que el berilo natural.',
          'Las inclusiones en velo de fundente delatan síntesis Flux.',
          'Las estructuras chevron y clavos fenacíticos delatan síntesis hidrotermal.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 4: Doblete de Berilo con Resina Verde Presentado como Gema de Muzo',
      scenario: 'Un joyero adquiere un anillo con una supuesta esmeralda de 5 quilates montada en oro blanco de 18k. Al desengastar la piedra para limpieza ultrasónica, la piedra se divide en dos secciones planas.',
      gemologicalAnalysis: 'La gema era un doblete compuesto por una corona de berilo incoloro (goshenita) y una base de cuarzo incoloro, unidas mediante una capa de resina epóxica teñida de verde esmeralda. El ultrasonido y el solvente disolvieron el adhesivo.',
      diagnosticLimitations: 'Montada en una joya con bisel cerrado, la línea de unión del doblete suele quedar oculta bajo el metal. Toda gema de valor debe evaluarse suelta para inspeccionar el filetín a 360 grados.',
      learningOutcome: 'Inspeccionar siempre el filetín con luz transmitida oblicua. En gemas engastadas con fondo ciego, debe advertirse en el informe la limitación pericial de montura.'
    },
    practicalActivity: {
      title: 'Laboratorio de Inmersión para Detección de Gemas Compuestas',
      instructions: '1. Llenar una cubeta de vidrio óptico con agua destilada o benzoato de bencilo. 2. Sostener la muestra con pinzas paralelas al plano del filetín. 3. Iluminar con luz transmitida difusa y verificar si existe discontinuidad de color o una línea de unión nítida entre corona y culata.',
      materialsNeeded: ['Cubeta gemológica de vidrio', 'Líquido de inmersión', 'Pinzas', 'Microscopio estereoscópico'],
      deliverable: 'Informe fotográfico con dibujo de trayectoria del haz e identificación de capas.',
      rubric: [
        { criterion: 'Manejo correcto de la celda de inmersión', weight: '50%' },
        { criterion: 'Identificación de la película de cementación', weight: '50%' }
      ]
    },
    quiz: [
      {
        id: 'q4-1',
        question: '¿Qué revela un polariscopio cuando una muestra permanece totalmente oscura al rotarla 360 grados entre filtros cruzados?',
        type: 'multiple_choice',
        options: ['Que es un cristal birrefringente', 'Que es un material isótropo monorrefringente (ej. vidrio o granate)', 'Que es un cristal hexagonal', 'Que tiene alto pleocroísmo'],
        correctAnswer: 1,
        explanation: 'Los materiales isótropos (vidrios y sistema cúbico) no desvían el plano de polarización y permanecen en extinción completa.',
        scientificContext: 'Comportamiento óptico isótropo sin birrefringencia.'
      },
      {
        id: 'q4-2',
        question: 'Las estructuras de crecimiento en chevron (zigzag) y las espículas en "cabeza de clavo" son diagnósticas de:',
        type: 'multiple_choice',
        options: ['Esmeraldas naturales de Chivor', 'Esmeraldas sintéticas hidrotermales', 'Esmeraldas sintéticas de flujo (Flux)', 'Vidrio de botella'],
        correctAnswer: 1,
        explanation: 'Son microestructuras de crecimiento creadas por la cinemática de precipitación en autoclaves hidrotermales de síntesis.',
        scientificContext: 'Descritas en esmeraldas sintéticas Biron, Tairus y rusas.'
      }
    ],
    externalReferences: [
      {
        title: 'GIA Gem Identification Lab Manual Overview',
        url: 'https://www.gia.edu',
        institution: 'Gemological Institute of America',
        description: 'Protocolos estandarizados de ensayos gemológicos no destructivos.',
        category: 'Metodología'
      }
    ],
    bibliography: [
      { author: 'Liddicoat, R.T.', year: '1989', title: 'Handbook of Gem Identification (12th Ed.)', publication: 'Gemological Institute of America' },
      { author: 'Hurlbut, C.S. & Kammerling, R.C.', year: '1991', title: 'Gemology (2nd Ed.)', publication: 'Wiley-Interscience' }
    ]
  },

  // ==========================================
  // MÓDULO 5. ATLAS DE INCLUSIONES
  // ==========================================
  {
    id: 5,
    code: 'MOD-05',
    title: 'Módulo 5: Atlas Científico de Inclusiones y Caracterización Microscópica',
    shortTitle: 'Atlas de Inclusiones',
    academicHours: 10,
    overview: 'Microscopía gemológica avanzada. Estudio sistemático de inclusiones primarias, secundarias y pseudosecundarias: inclusiones fluidas bifásicas y trifásicas colombianas, fases sólidas paragenéticas (calcita, pirita, albita, dolomita, parisita, cuarzo), velos de curación y estructuras de crecimiento.',
    competencies: [
      'Clasificar genéticamente las inclusiones bajo microscopía óptica de inmersión y campo oscuro.',
      'Analizar los límites diagnósticos de las inclusiones trifásicas (no exclusivas de Colombia al 100%).',
      'Interpretar la historia geológica de enfriamiento y reactivación tectónica a través de los jardines internos.'
    ],
    learningObjectives: [
      'Diferenciar inclusiones protogenéticas, singenéticas y epigenéticas.',
      'Detallar la anatomía de una cavidad trifásica: forma dentada, halita cúbica, salmuera y burbuja de CO2.',
      'Describir las inclusiones sólidas minerales asociadas al cinturón oriental y occidental.'
    ],
    prerequisites: ['Módulo 4: Identificación Gemológica.'],
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm5-l1',
        moduleId: 5,
        order: 1,
        title: 'Lección 5.1: Clasificación Genética de Inclusiones en el Berilo',
        readTime: '16 min',
        difficulty: 'Avanzado',
        summary: 'De Eduard Gübelin a la gemología moderna: inclusiones protogenéticas, singenéticas y epigenéticas.',
        content: `Las inclusiones son testigos geológicos del ambiente físico-químico en que cristalizó la esmeralda. El Dr. Eduard Gübelin las clasificó en tres categorías genéticas:

1. **Protogenéticas:** Minerales que ya existían antes de la formación de la esmeralda y fueron englobados por el cristal en crecimiento (ej. cristales de pirita preexistentes o materia orgánica carbonosa de las lutitas).
2. **Singenéticas:** Fases que cristalizaron o quedaron atrapadas **simultáneamente** con el berilo:
   - Inclusiones fluidas primarias que conservan el fluido hidrotermal madre.
   - Cristales de calcita, dolomita y parisita que crecieron de la misma solución.
3. **Epigenéticas:** Modificaciones que ocurrieron **después** de la cristalización:
   - Fracturas tectónicas posteriores penetradas por nuevos fluidos.
   - Fisuras abiertas a la superficie rellenadas artificialmente por aceites o polímeros modernos.`,
        keyTakeaways: [
          'Inclusiones singenéticas: atrapadas al mismo tiempo que la esmeralda crecía.',
          'Inclusiones epigenéticas: formadas con posterioridad a la cristalización.',
          'El "jardín" es un archivo geológico natural de inmenso valor histórico.'
        ]
      },
      {
        id: 'm5-l2',
        moduleId: 5,
        order: 2,
        title: 'Lección 5.2: Inclusiones Trifásicas: Morfología, Comportamiento y Límites Diagnósticos',
        readTime: '18 min',
        difficulty: 'Especialista',
        summary: 'Estudio morfológico detallado y advertencia científica: por qué una inclusión trifásica requiere análisis contextual para certificar origen colombiano.',
        content: `La inclusión trifásica colombiana es famosa en todo el mundo, pero la ciencia gemológica exige rigor:

### 1. Morfología Clásica
- **Cavidad dentada o en serrucho:** Producida por disolución y crecimiento epitaxial en los bordes de la cavidad.
- **Fase Sólida:** Microcristal cúbico de **halita** ($NaCl$). En ocasiones se aprecian cristales hijos adicionales de calcita o silvita ($KCl$).
- **Fase Líquida:** Salmuera saturada residual.
- **Fase Gaseosa:** Burbuja de dióxido de carbono ($CO_2$) y vapor acuoso.

### 2. Comportamiento Térmico
Al someter la muestra a calentamiento controlado bajo la platina del microscopio:
- A $31.1°C$ (temperatura crítica del $CO_2$), la interfase menisco de la burbuja de gas sufre homogeneización temporal, demostrando la presencia de dióxido de carbono denso.

### 3. Límites Diagnósticos Rigurosos
- **Importante:** Aunque son emblemáticas de Colombia, **las inclusiones trifásicas NO son exclusivas de Colombia al 100%**.
- Se han documentado inclusiones multifásicas con cristales de sal en esmeraldas de Afganistán (Panjshir), Pakistán (Swat), China (Davdar) y Nigeria.
- Por tanto, el laboratorio pericial no certifica origen colombiano únicamente por ver una cavidad trifásica; evalúa el conjunto paragenético, las estrías de crecimiento y la espectrometría de masas LA-ICP-MS.`,
        keyTakeaways: [
          'La cavidad trifásica alberga cubo de halita + salmuera + burbuja de CO2.',
          'Presente en Muzo, Coscuez y Chivor.',
          'Riguroso límite diagnóstico: Se han hallado inclusiones trifásicas similares en Afganistán y China; se requiere análisis integral de laboratorio.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 5: Esmeralda de Afganistán Confundida con Esmeralda Colombiana',
      scenario: 'Una casa de subastas recibe una esmeralda de 3.2 quilates con inclusión trifásica. El tasador preliminar declara inmediatamente que es "100% colombiana de Muzo". El laboratorio de referencia somete la pieza a espectrometría de masas LA-ICP-MS.',
      gemologicalAnalysis: 'El análisis geoquímico cuantitativo reveló concentraciones anómalamente altas de cesio (Cs > 1500 ppm) y litio (Li > 300 ppm), con una relación isotópica de oxígeno incongruente con la cuenca sedimentaria de Boyacá. La piedra procedía del valle de Panjshir en Afganistán, cuyas esmeraldas hidrotermales también alojan inclusiones trifásicas con cubos de halita.',
      diagnosticLimitations: 'La observación óptica microscópica de una inclusión trifásica es un fuerte indicio, pero no una prueba jurídica irrefutable de origen colombiano sin soporte geoquímico.',
      learningOutcome: 'Los dictámenes profesionales deben declarar el grado de certidumbre y reconocer las limitaciones diagnósticas de la microscopía óptica tradicional.'
    },
    practicalActivity: {
      title: 'Identificación Microscópica de Inclusiones en Campo Oscuro y Fibra Óptica',
      instructions: '1. Colocar una esmeralda en la pinza del microscopio gemológico. 2. Seleccionar iluminación de campo oscuro (darkfield). 3. Ajustar el enfoque a 20x, 40x y 60x buscando cavidades fluidas primarias. 4. Utilizar luz de fibra óptica oblicua para verificar si el cubo de halita es isótropo.',
      materialsNeeded: ['Microscopio gemológico de investigación', 'Iluminador de fibra óptica flexible', 'Pinzas gemológicas', 'Muestras de estudio'],
      deliverable: 'Dibujo o microfotografía rotulada con identificación de las tres fases y minerales accesorios.',
      rubric: [
        { criterion: 'Enfoque nítido y control de iluminación', weight: '40%' },
        { criterion: 'Rotulación correcta de las tres fases', weight: '40%' },
        { criterion: 'Descripción de la morfología de la cavidad', weight: '20%' }
      ]
    },
    quiz: [
      {
        id: 'q5-1',
        question: '¿Qué mineral constituye el microcristal cúbico transparente que se observa dentro de una inclusión trifásica colombiana típica?',
        type: 'multiple_choice',
        options: ['Cuarzo', 'Halita (Sal común, NaCl)', 'Diamante', 'Pirita'],
        correctAnswer: 1,
        explanation: 'El cubo sólido es halita (NaCl) que precipitó a partir de la salmuera hipersalina atrapada.',
        scientificContext: 'Isótropo en polariscopio y confirmado por micro-Raman.'
      },
      {
        id: 'q5-2',
        question: '¿La presencia de una inclusión trifásica demuestra de forma 100% matemática y excluyente que una esmeralda es colombiana?',
        type: 'true_false',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. Esmeraldas de Afganistán (Panjshir) y China también pueden presentar inclusiones trifásicas con halita. Se requiere análisis complementario.',
        scientificContext: 'Groat et al. (2008) y Bowersox et al. (1991).'
      }
    ],
    externalReferences: [
      {
        title: 'Gübelin Gem Lab Photoatlas of Inclusions in Gemstones',
        url: 'https://www.gubelingemlab.com',
        institution: 'Gübelin Gem Lab',
        description: 'La obra cumbre de la microscopía gemológica iniciada por el Dr. Eduard Gübelin y John Koivula.',
        category: 'Microscopía'
      }
    ],
    bibliography: [
      { author: 'Gübelin, E.J. & Koivula, J.I.', year: '2005', title: 'Photoatlas of Inclusions in Gemstones (Vol. 2 & 3)', publication: 'Opinio Publishers, Basel' },
      { author: 'Roedder, E.', year: '1984', title: 'Fluid Inclusions', publication: 'Reviews in Mineralogy, Mineralogical Society of America, Vol. 12' }
    ]
  },

  // ==========================================
  // MÓDULO 6. COLOR, CALIDAD Y VALORACIÓN
  // ==========================================
  {
    id: 6,
    code: 'MOD-06',
    title: 'Módulo 6: Colorimetría, Calidad Gemológica y Factores de Valoración Comercial',
    shortTitle: 'Color, Calidad y Valoración',
    academicHours: 10,
    overview: 'Colorimetría según el modelo Munsell (matiz, tono, saturación). Factores universales de calidad adaptados a la esmeralda (Color, Claridad, Talla, Quilates y Tratamiento). Estructura de valor orientativa en mercados mayoristas de Bogotá y plazas globales sin algoritmos arbitrarios.',
    competencies: [
      'Desglosar el color en sus tres parámetros físicos: Hue (matiz), Tone (tono/claridad) y Saturation (pureza/vivacidad).',
      'Evaluar el impacto relativo del jardín en la belleza visual frente a la durabilidad estructural.',
      'Calcular rangos de orientación preliminar transparentes explicando supuestos, limitaciones y comparables reales.'
    ],
    learningObjectives: [
      'Explicar por qué el color representa más del 50% del valor comercial de una esmeralda.',
      'Identificar el "tono óptimo" (medio a medio-oscuro 60-75%) que busca el mercado de alta joyería.',
      'Manejar la calculadora de valoración orientativa reconociendo que no constituye avalúo pericial vinculante.'
    ],
    prerequisites: ['Módulo 1: Fundamentos de Gemología.'],
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm6-l1',
        moduleId: 6,
        order: 1,
        title: 'Lección 6.1: Colorimetría Gemológica: Matiz (Hue), Tono (Tone) y Saturación (Saturation)',
        readTime: '15 min',
        difficulty: 'Intermedio',
        summary: 'Cómo evaluar el color científicamente sin adjetivos subjetivos engañosos.',
        content: `El color es el factor determinante en la esmeralda. El sistema internacional (adoptado por GIA y CIBJO) lo descompone en tres variables geométricas:

### 1. Matiz (Hue)
El color espectral básico:
- En la esmeralda, el matiz ideal es **verde puro (G)** o **verde muy ligeramente azuloso (vslbG)**.
- Si el matiz vira hacia verde amarillento (yG), el valor comercial disminuye sensiblemente.
- Si el matiz vira excesivamente a azul (bG), se aproxima a la aguamarina.

### 2. Tono (Tone)
El grado de claridad u oscuridad de la gema, medido en una escala del 0% (incoloro/blanco) al 100% (negro opaco):
- El rango óptimo y más cotizado para esmeraldas de alta gama es **Medio a Medio-Oscuro (55% a 75%)**.
- Un tono inferior al 40% resulta pálido (clasificado a menudo como berilo verde común).
- Un tono superior al 85% resulta sombrío y apagado ("morralla").

### 3. Saturación (Saturation)
La pureza, vivacidad y fuerza del color verde, libre de tonos modificadores grises o marrones:
- En la esmeralda colombiana, gracias a la ausencia de hierro, la saturación alcanza niveles de **Muy Intensa a Excepcional (grados 5 y 6 de GIA)**.`,
        keyTakeaways: [
          'Color = Matiz (verde puro a verde azuloso) + Tono (60-75%) + Saturación (viva sin gris).',
          'La ausencia de modificadores marrones o grises es la mayor virtud del berilo colombiano.',
          'La luz estándar para evaluar color es luz diurna normalizada D65 (5500K - 6500K).'
        ]
      },
      {
        id: 'm6-l2',
        moduleId: 6,
        order: 2,
        title: 'Lección 6.2: Las 4C+T: Peso, Talla, Claridad y Tratamiento en la Valoración',
        readTime: '16 min',
        difficulty: 'Avanzado',
        summary: 'Ponderación de factores y por qué el tratamiento es el quinto pilar indispensable en la esmeralda.',
        content: `A diferencia del diamante (donde rige la escala de pureza FL-I3), en la esmeralda las inclusiones se aceptan como parte de su naturaleza, siempre que no obstruyan el paso de la luz ni amenacen la integridad mecánica:

### Ponderación Relativa en Valoración Comercial
1. **Color (50% - 60%):** Es el rey indiscutible. Una esmeralda con jardín moderado pero color verde imperial aterciopelado supera en precio a una gema limpia pero pálida.
2. **Claridad y Transparencia (20% - 25%):** Transparencia cristalina vítrea con jardín estético no invasivo.
3. **Tratamiento de Claridad (15% - 20%):** Una piedra *No Oil* puede valer el doble o triple que la misma gema con tratamiento moderado.
4. **Talla y Proporciones (10% - 15%):** Ausencia de ventana, paralelismo de facetas, brillo homogéneo y simetría.
5. **Peso en Quilates (Efecto Escala):** El precio por quilate no es lineal; se incrementa exponencialmente al cruzar barreras de peso de 1.00 ct, 2.00 ct, 3.00 ct, 5.00 ct y 10.00 ct.`,
        keyTakeaways: [
          'El color aporta más de la mitad del valor comercial.',
          'La escala de precios por quilate aumenta exponencialmente con el peso.',
          'El estatus de tratamiento (No Oil vs Aceite Menor vs Resina) altera radicalmente el precio final.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 6: Discrepancia de Valoración entre Piedra Limpia Pálida vs Piedra Saturada con Jardín',
      scenario: 'Dos esmeraldas de 2.00 quilates se comparan en una mesa de negocios. La Piedra A es casi transparente como vidrio pero de tono verde claro (tono 30%). La Piedra B tiene jardín visible a 10x pero un verde Muzo profundo aterciopelado (tono 65%, saturación 6).',
      gemologicalAnalysis: 'El comprador inexperto suele preferir erróneamente la Piedra A por creer que "está más limpia". Sin embargo, el mercado mayorista internacional cotiza la Piedra B a un precio por quilate hasta tres veces superior debido a su saturación y tono óptimo.',
      diagnosticLimitations: 'La claridad extrema no compensa un color débil en el mercado de esmeraldas de alta joyería.',
      learningOutcome: 'En la esmeralda, el color es el parámetro rey. La claridad complementa la belleza, pero jamás sustituye al color.'
    },
    practicalActivity: {
      title: 'Ejercicio de Gradación Colorimétrica con Cartilla Munsell y Luz D65',
      instructions: '1. Colocar las piedras de muestra sobre fondo blanco mate neutro bajo lámpara con tubo D65 (temperatura de color 6500 K). 2. Identificar el matiz (Hue) comparando con patrones de verde puro y verde azuloso. 3. Asignar el porcentaje de tono (Tone) y grado de saturación (1 a 6).',
      materialsNeeded: ['Lámpara de luz diurna estandarizada 6500 K', 'Bandeja blanca neutra', 'Cartas de color GIA GemSet o Munsell', 'Muestras de estudio'],
      deliverable: 'Ficha de gradación de color con matiz, tono, saturación y justificación técnica.',
      rubric: [
        { criterion: 'Condiciones de iluminación estandarizada', weight: '30%' },
        { criterion: 'Descomposición correcta de matiz, tono y saturación', weight: '70%' }
      ]
    },
    quiz: [
      {
        id: 'q6-1',
        question: '¿Qué porcentaje aproximado del valor comercial de una esmeralda está determinado por su color?',
        type: 'multiple_choice',
        options: ['Menos del 10%', 'Entre el 20% y 25%', 'Más del 50% (50% a 60%)', 'El 100%'],
        correctAnswer: 2,
        explanation: 'En las gemas de color, y especialmente en la esmeralda, el color determina más de la mitad de su cotización comercial.',
        scientificContext: 'CIBJO Coloured Gemstone Guide y GIA Colored Stone Grading.'
      },
      {
        id: 'q6-2',
        question: '¿Cuál es el rango de tono (Tone) considerado óptimo y más cotizado para esmeraldas de alta gama?',
        type: 'multiple_choice',
        options: ['Muy claro (10% a 25%)', 'Medio a Medio-Oscuro (55% a 75%)', 'Extremadamente oscuro (90% a 95%)', 'Blanco translúcido (0%)'],
        correctAnswer: 1,
        explanation: 'El tono medio a medio-oscuro maximiza la intensidad del verde sin hacer que la piedra se vea oscura o sombría.',
        scientificContext: 'Escala de tonos GIA 1 (incoloro) a 10 (negro).'
      }
    ],
    externalReferences: [
      {
        title: 'GIA Color Grading System for Colored Gemstones',
        url: 'https://www.gia.edu',
        institution: 'Gemological Institute of America',
        description: 'Metodología sistemática de evaluación de color en gemas preciosas.',
        category: 'Colorimetría'
      }
    ],
    bibliography: [
      { author: 'Wise, R.W.', year: '2016', title: 'Secrets of the Gem Trade: The Connoisseur\'s Guide to Precious Gemstones (2nd Ed.)', publication: 'Brunswick House Press' },
      { author: 'Matlins, A.L. & Bonanno, A.C.', year: '2009', title: 'Colored Gemstones: The Antoinette Matlins Buying Guide (3rd Ed.)', publication: 'GemStone Press' }
    ]
  },

  // ==========================================
  // MÓDULO 7. TRATAMIENTOS Y MEJORAMIENTO DE CLARIDAD
  // ==========================================
  {
    id: 7,
    code: 'MOD-07',
    title: 'Módulo 7: Tratamientos de Claridad, Protocolos de Laboratorio y Divulgación Ética',
    shortTitle: 'Tratamientos y Mejoramiento',
    academicHours: 10,
    overview: 'Historia, termodinámica y físico-química del mejoramiento de claridad. Aceite de cedro natural vs resinas termoestables y polímeros sintéticos (Opticon, Permasafe, Palma). Detección espectroscópica FTIR y fluorescencia UV. Escalas internacionales de reporte (CIBJO, LMHC, CDTEC) y obligaciones éticas de divulgación.',
    competencies: [
      'Diferenciar las sustancias de relleno naturales reversibles de los polímeros artificiales permanentes.',
      'Interpretar gráficos de espectroscopía infrarroja FTIR para identificar bandas diagnósticas de resinas.',
      'Redactar declaraciones comerciales transparentes de acuerdo con las directrices de CIBJO y Fedesmeraldas.'
    ],
    learningObjectives: [
      'Explicar el principio óptico de igualación de índices de refracción entre el berilo y la sustancia de relleno.',
      'Identificar los riesgos de degradación, amarilleamiento y cuarteamiento en resinas epóxicas con catalizador.',
      'Describir los grados de mejoramiento: Ninguno (No Oil), Menor (Minor), Moderado (Moderate) y Significativo (Significant).'
    ],
    prerequisites: ['Módulo 4: Identificación Gemológica', 'Módulo 6: Valoración.'],
    heroImage: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm7-l1',
        moduleId: 7,
        order: 1,
        title: 'Lección 7.1: Físico-Química del Relleno de Fracturas: Aceite de Cedro vs Resinas',
        readTime: '16 min',
        difficulty: 'Avanzado',
        summary: 'Por qué la luz no rebota en una fractura aceitada: compatibilidad de refracción, tensión superficial y reversibilidad.',
        content: `Cuando la luz incide en una fisura abierta llena de aire ($n = 1.00$), la diferencia con el berilo ($n = 1.58$) produce reflexión total interna, haciendo que la grieta luzca como un espejo plateado blanquecino brillante.

### 1. El Principio de Relleno Óptico
Al introducir un líquido con índice de refracción cercano al de la esmeralda:
- **Aceite de Cedro (*Cedrus deodara / libani*):** Índice $n \\approx 1.512 - 1.518$. La diferencia de refracción se reduce a solo $0.06$, por lo que la luz atraviesa la fractura casi sin desviarse. La fisura se vuelve prácticamente invisible.
- **Ventaja esencial:** Es una sustancia natural monocomponente, **completamente reversible**. Puede ser extraída lavando la gema con solventes suaves (alcohol isopropílico o acetona) sin deteriorar el cristal.

### 2. Resinas Epóxicas Artificiales (Opticon, Palma, Permasafe)
- Son polímeros prepolimerizados que se inyectan con calor y vacío profundo, a menudo con endurecedores químicos catalizadores.
- **Problema temporal:** Con el tiempo sufren fotodegradación por luz ultravioleta, se oxidan, amarillean y se cuartean en patrones de telaraña blanca opaca.
- Su retiro es sumamente complejo y puede requerir solventes ácidos agresivos que ponen en riesgo la gema.`,
        keyTakeaways: [
          'El relleno óptico elimina el contraste de refracción con el aire en la fisura.',
          'El aceite de cedro es natural y reversible.',
          'Las resinas epóxicas con catalizador se degradan con los años y son difíciles de extraer.'
        ]
      },
      {
        id: 'm7-l2',
        moduleId: 7,
        order: 2,
        title: 'Lección 7.2: Detección Instrumental y Escalas Internacionales LMHC y CDTEC',
        readTime: '17 min',
        difficulty: 'Especialista',
        summary: 'Espectroscopía FTIR, luz ultravioleta y clasificación estandarizada de mejoramiento de claridad.',
        content: `Los laboratorios acreditados mundialmente (CDTEC en Bogotá, GIA, Gübelin, SSEF) utilizan el sistema unificado del **LMHC (Laboratory Manual Harmonisation Committee)**:

### 1. Grados de Mejoramiento de Claridad
No se juzga la cantidad de fracturas que tiene la piedra, sino la **cantidad de sustancia de relleno introducida**:
1. **None / No Oil:** No se detectan sustancias extrañas.
2. **Minor (Menor):** Relleno insignificante en fisuras capilares muy superficiales.
3. **Moderate (Moderado):** Relleno estándar en fracturas medias.
4. **Significant (Significativo):** Fracturas extensas rellenas; si se retira el relleno, la piedra pierde notablemente su transparencia.

### 2. Detección por Espectroscopía FTIR
- Las resinas sintéticas exhiben bandas de absorción de enlaces aromáticos y alifáticos muy intensas entre $2800\\text{ cm}^{-1}$ y $3100\\text{ cm}^{-1}$, y la banda carbonílica a $1730\\text{ cm}^{-1}$.
- El aceite de cedro exhibe un patrón alifático natural característico fácilmente distinguible por el software espectral.`,
        keyTakeaways: [
          'El grado mide la cantidad de relleno, no el número total de fisuras.',
          'FTIR es el estándar pericial para separar aceite natural de polímeros sintéticos.',
          'La divulgación ética protege al mercado esmeraldero colombiano.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 7: Venta de Esmeralda con Resina Oculta que Amarilleó tras Dos Años',
      scenario: 'Un comprador adquiere un anillo de alta gama con un certificado comercial informal que decía "Esmeralda 100% natural de Muzo". Dos años después, la gema adquiere un aspecto lechoso y amarillento con fisuras blancas.',
      gemologicalAnalysis: 'El examen en CDTEC confirmó que la gema había sido tratada con resina artificial epóxica (Opticon con catalizador) no declarada. La exposición solar cotidiana degradó el polímero, oxidándolo y cuarteándolo.',
      diagnosticLimitations: 'Una inspección a simple vista no delata la resina en el momento de la compra; solo la espectroscopía FTIR y fluorescencia UV advierten el polímero antes de que envejezca.',
      learningOutcome: 'Exigir siempre certificados de laboratorios acreditados que especifiquen si el tratamiento es aceite de cedro tradicional o resina artificial, con indicación expresa del grado.'
    },
    practicalActivity: {
      title: 'Identificación de Resinas mediante Microscopía y Luz Ultravioleta (UV)',
      instructions: '1. Examinar la esmeralda en microscopio con luz reflejada oblicua buscando destellos anaranjados o azulados ("flash effect"). 2. Someter la gema a luz ultravioleta de onda larga (365 nm) en caja oscura y verificar si las fracturas emiten fluorescencia blanquecina o amarillenta.',
      materialsNeeded: ['Lámpara UV 365 nm', 'Caja de visualización oscura', 'Microscopio gemológico', 'Gafas de protección UV'],
      deliverable: 'Ficha técnica con mapa de fracturas y reporte de presencia de fluorescencia en fisuras.',
      rubric: [
        { criterion: 'Uso de protección ocular UV adecuada', weight: '20%' },
        { criterion: 'Mapeo correcto de las fracturas con relleno', weight: '80%' }
      ]
    },
    quiz: [
      {
        id: 'q7-1',
        question: '¿Cuál es la razón principal por la cual el aceite de cedro natural es aceptado éticamente en la industria internacional?',
        type: 'multiple_choice',
        options: ['Porque endurece la piedra haciéndola irrompible', 'Porque no altera la estructura de la red cristalina y es completamente reversible mediante solventes', 'Porque tiñe la esmeralda de verde permanente', 'Porque elimina las inclusiones trifásicas'],
        correctAnswer: 1,
        explanation: 'El aceitado tradicional de cedro no altera el cristal y puede removerse y limpiarse en cualquier momento sin dejar residuos irreversibles.',
        scientificContext: 'CIBJO Coloured Stone Commission Rules.'
      },
      {
        id: 'q7-2',
        question: '¿Qué método científico no destructivo permite distinguir con certeza el aceite de cedro de una resina sintética como Opticon?',
        type: 'multiple_choice',
        options: ['Lupa de 10 aumentos', 'Espectroscopía infrarroja FTIR', 'Calentamiento con soplete', 'Prueba de rayado con cuarzo'],
        correctAnswer: 1,
        explanation: 'La espectroscopía FTIR detecta los enlaces químicos específicos de polímeros sintéticos (bandas aromáticas y carbonilo) frente a aceites naturales.',
        scientificContext: 'Kiefert et al., Gems & Gemology (1999).'
      }
    ],
    externalReferences: [
      {
        title: 'LMHC Information Sheet No. 5 — Emerald Clarity Enhancement',
        url: 'https://www.lmhc-gemology.org',
        institution: 'Laboratory Manual Harmonisation Committee',
        description: 'Criterios unificados mundiales de reporte de mejoramiento de claridad.',
        category: 'Estándar Internacional'
      }
    ],
    bibliography: [
      { author: 'Kiefert, L., Hänni, H.A., Chalain, J.P. et al.', year: '1999', title: 'Identification of filler substances in emeralds by infrared and Raman spectroscopy', publication: 'Journal of Gemmology, 26(8), 501-515' },
      { author: 'Hänni, H.A.', year: '1998', title: 'A short review of the enhancement of emeralds', publication: 'Swiss Gemmological Institute SSEF' }
    ]
  },

  // ==========================================
  // MÓDULO 8. TALLA Y LAPIDACIÓN
  // ==========================================
  {
    id: 8,
    code: 'MOD-08',
    title: 'Módulo 8: Lapidación Magistral, Geometría de Facetas y Rendimiento Óptico',
    shortTitle: 'Talla y Lapidación',
    academicHours: 10,
    overview: 'Anatomía lapidaria del berilo: tabla, corona, filetín, pabellón y chaflanes. Planificación del cristal en bruto, evaluación de tensiones internas, orientación respecto al eje óptico C para exaltar el pleocroísmo verde azuloso y técnicas de desbaste, facetado, pulido y brillado en disco de diamante.',
    competencies: [
      'Planificar el corte de un prisma hexagonal en bruto maximizando peso retenido y retorno óptico de color.',
      'Calcular ángulos críticos de corona (38°-45°) y culata (40°-43°) para erradicar la ventana central.',
      'Dominar el cálculo matemático de rendimiento lapidario (%) y merma económica en taller.'
    ],
    learningObjectives: [
      'Describir la función protectora de los chaflanes a 45° en la talla esmeralda clásica.',
      'Explicar el uso de discos de diamante (600, 1200, 3000) y pastas de óxido de cerio o diamante micronizado.',
      'Identificar los estilos de talla: Octagonal esmeralda, oval, pera, cojín, marquesa y cabujón.'
    ],
    prerequisites: ['Módulo 1: Fundamentos de Gemología', 'Módulo 3: Cristalografía.'],
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm8-l1',
        moduleId: 8,
        order: 1,
        title: 'Lección 8.1: Anatomía de la Talla Esmeralda y los Chaflanes Protectores',
        readTime: '15 min',
        difficulty: 'Intermedio',
        summary: 'Por qué la talla octagonal escalonada es el estándar indiscutible de la esmeralda.',
        content: `A diferencia del diamante tallado en brillante (57 facetas triangulares y cometa diseñadas para maximizar la dispersión de fuego), la **talla esmeralda clásica** es un corte escalonado rectangular u octagonal diseñado para **resaltar la profundidad y pureza del color verde**:

### 1. Elementos Anatómicos
- **Tabla (Mesa):** La faceta octagonal plana superior que actúa como ventana principal de entrada de luz. Debe ocupar entre el 55% y el 65% del ancho de la piedra.
- **Corona:** La parte superior compuesta por 2 o 3 escalones de facetas trapezoidales concéntricas.
- **Filetín (Cinturón):** La faja perimetral que protege el borde y sirve de agarre en la montura.
- **Pabellón (Culata):** La parte inferior en 3 o 4 escalones que converge en una arista o pequeña faceta de culata.
- **Chaflanes (Cut Corners):** Cuatro facetas biseladas a 45° en las esquinas que eliminan los vértices puntiagudos donde se concentran las tensiones del berilo.

### 2. Ventajas Mecánicas y Ópticas
- Protege a la esmeralda de fracturas por clivaje basal durante el engaste y uso diario.
- Evita que las esquinas se desportillen con el roce.
- Mantiene las facetas amplias y paralelas, permitiendo admirar el "jardín" interno sin destellos confusos.`,
        keyTakeaways: [
          'La talla esmeralda es escalonada y optimiza color sobre dispersión.',
          'Los chaflanes a 45° son indispensables para la resistencia mecánica.',
          'La tabla ideal ocupa entre 55% y 65% del ancho de la gema.'
        ]
      },
      {
        id: 'm8-l2',
        moduleId: 8,
        order: 2,
        title: 'Lección 8.2: Rendimiento, Orientación del Eje Óptico C y Prevención de Ventana',
        readTime: '17 min',
        difficulty: 'Avanzado',
        summary: 'Física aplicada en el banco de lapidación: pleocroísmo, ángulo crítico de reflexión total interna y rendimiento económico.',
        content: `El maestro tallador toma decisiones críticas antes de tocar el disco:

### 1. Orientación Respecto al Eje Óptico C
- El berilo es dicroico: el color más verde y puro se transmite **perpendicular al eje C** (rayo ordinario).
- Por lo tanto, la tabla de la esmeralda debe orientarse **perpendicular al eje óptico C** del prisma en bruto. Si se orienta paralela, la piedra final quedará verde amarillenta pálida, perdiendo gran parte de su valor.

### 2. Erradicación de la "Ventana"
- El ángulo crítico del berilo en aire es aproximadamente de **$39.3°$**.
- Si las facetas del pabellón se tallan con un ángulo menor a $39°$ para "engordar" la piedra y no perder peso en quilates, la luz que entra por la tabla no sufre reflexión total interna, sino que **escapa directamente por el fondo**.
- El centro de la esmeralda luce descolorido, lavado y transparente como un vidrio de ventana.
- Un tallado maestro exige ángulos de pabellón entre **$40°$ y $43°$** para lograr reflexión total interna y retorno de color homogéneo.

### 3. Rendimiento en Taller (%)
$$\\text{Rendimiento (\\%)} = \\left( \\frac{\\text{Peso Final Tallado (ct)}}{\\text{Peso Inicial Bruto (ct)}} \\right) \\times 100$$
En cristales de buena formación prismática, el rendimiento promedio es del **25% al 40%**. En cristales muy fisurados puede bajar al 15%-20%.`,
        keyTakeaways: [
          'Tabla perpendicular al eje C = máxima expresión del verde azuloso puro.',
          'Ángulo de pabellón menor a 39° produce ventana (fuga de luz por el centro).',
          'Rendimiento promedio de talla: 25% a 40% del peso en bruto.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 8: Dilema de Taller: Retener 5 Quilates con Ventana vs 3.5 Quilates de Excelencia Óptica',
      scenario: 'Un tallador recibe un prisma en bruto de 11 quilates. Tiene dos opciones de corte: Opción A, tallar una piedra con pabellón plano para retener 5.1 quilates pero con ventana visible en el 40% de la tabla. Opción B, tallar con ángulos correctos a 42°, obteniendo 3.6 quilates con retorno óptico pleno sin ventana.',
      gemologicalAnalysis: 'Aunque la Opción A retiene 1.5 quilates más, los compradores internacionales de alta joyería castigan severamente las piedras con ventana central (hasta un 40% menos de precio por quilate). La piedra de 3.6 quilates (Opción B), al ser estéticamente perfecta y luminosa, alcanza una cotización total mayor y se vende de inmediato.',
      diagnosticLimitations: 'El peso no es el único factor económico; la calidad del corte determina la liquidez comercial de la gema.',
      learningOutcome: 'En lapidación de alta gama, la excelencia óptica supera al peso muerto. Una gema sin ventana y con chaflanes simétricos siempre representa una mejor inversión.'
    },
    practicalActivity: {
      title: 'Cálculo de Rendimiento y Análisis de Ventana con Cuadrícula de Contraste',
      instructions: '1. Pesar una muestra de cristal en bruto y una esmeralda tallada. 2. Calcular el porcentaje de rendimiento. 3. Colocar la esmeralda tallada sobre un texto impreso con letras de 10 puntos: si las letras se leen claramente a través del centro de la tabla, la piedra tiene ventana severa.',
      materialsNeeded: ['Balanza de precisión (0.001 ct)', 'Muestras de gemas', 'Hoja de contraste con texto impreso'],
      deliverable: 'Informe de rendimiento porcentual y grado de ventana óptica.',
      rubric: [
        { criterion: 'Cálculo matemático exacto de rendimiento y merma', weight: '50%' },
        { criterion: 'Evaluación y fotografía del test de lectura de texto', weight: '50%' }
      ]
    },
    quiz: [
      {
        id: 'q8-1',
        question: '¿Por qué la tabla de una esmeralda debe tallarse preferentemente perpendicular al eje óptico C del cristal?',
        type: 'multiple_choice',
        options: ['Para gastar menos disco de diamante', 'Para aprovechar el pleocroísmo del rayo ordinario que entrega el verde más puro e intenso', 'Porque la ley de la ANM lo exige', 'Para que la gema pese exactamente el doble'],
        correctAnswer: 1,
        explanation: 'El pleocroísmo del berilo muestra el verde puro a través del rayo ordinario, el cual se transmite perpendicular al eje C.',
        scientificContext: 'Óptica de cristales uniaxiales negativos.'
      },
      {
        id: 'q8-2',
        question: '¿Qué defecto óptico se produce cuando los ángulos del pabellón de una esmeralda se tallan demasiado planos (< 39°)?',
        type: 'multiple_choice',
        options: ['Efecto ojo de gato', 'Ventana (fuga de luz por el centro)', 'Fluorescencia de rayos X', 'Gota de aceite'],
        correctAnswer: 1,
        explanation: 'Al tallar por debajo del ángulo crítico (39.3°), la luz no sufre reflexión total interna y escapa por la culata, dejando el centro transparente.',
        scientificContext: 'Leyes de reflexión total interna de Fresnel.'
      }
    ],
    externalReferences: [
      {
        title: 'Facet Diagrams and Cutting Proportions — USFG',
        url: 'https://usfacetersguild.org',
        institution: 'United States Faceters Guild',
        description: 'Diagramas de facetado paramétrico para berilos preciosos.',
        category: 'Lapidación'
      }
    ],
    bibliography: [
      { author: 'Vargas, G. & Vargas, M.', year: '1989', title: 'Faceting for Amateurs (3rd Ed.)', publication: 'Vargas Lapidary Publishing' },
      { author: 'Soukup, E.J.', year: '1962', title: 'Facet Cutters Handbook', publication: 'Gembooks' }
    ]
  },

  // ==========================================
  // MÓDULO 9. LABORATORIOS Y CERTIFICACIÓN GEMOLÓGICA
  // ==========================================
  {
    id: 9,
    code: 'MOD-09',
    title: 'Módulo 9: Laboratorios Gemológicos, Espectroscopía Avanzada e Informes Periciales',
    shortTitle: 'Laboratorios y Certificación',
    academicHours: 10,
    overview: 'Estructura analítica de los grandes laboratorios científicos mundiales (CDTEC en Bogotá, GIA, Gübelin, SSEF, AGL). Espectroscopía infrarroja FTIR, espectroscopía Raman confocal, fluorescencia de rayos X por dispersión de energía (EDXRF) y espectrometría de masas LA-ICP-MS. Diferencia legal entre informe pericial, certificado y avalúo mercantil.',
    competencies: [
      'Interpretar informes gemológicos oficiales distinguiendo dictamen de autenticidad, origen geográfico y nivel de claridad.',
      'Comprender el alcance y límites de técnicas instrumentales avanzadas (FTIR, Raman, EDXRF, LA-ICP-MS).',
      'Explicar la diferencia sustantiva entre un informe científico y un avalúo comercial de precio.'
    ],
    learningObjectives: [
      'Describir el proceso de cadena de custodia de una gema en un laboratorio acreditado.',
      'Analizar cómo se determina el origen geográfico mediante huellas químicas de elementos traza.',
      'Identificar la terminología estandarizada del LMHC en reportes de tratamientos.'
    ],
    prerequisites: ['Módulo 4: Identificación Gemológica', 'Módulo 7: Tratamientos.'],
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm9-l1',
        moduleId: 9,
        order: 1,
        title: 'Lección 9.1: Instrumentación Científica de Vanguardia: FTIR, Raman, EDXRF y LA-ICP-MS',
        readTime: '17 min',
        difficulty: 'Especialista',
        summary: 'Cómo los laboratorios desentrañan la química atómica de la esmeralda sin causarle el más mínimo daño físico.',
        content: `La gemología contemporánea es una ciencia fisicoquímica de alta precisión. Para emitir un reporte pericial sin margen de error, se combinan múltiples tecnologías no destructivas:

### 1. Espectroscopía Infrarroja FTIR
- Analiza vibraciones moleculares.
- Detecta agua en canales estructurales (natural vs sintético de flujo) y distingue rellenos orgánicos (aceite de cedro natural vs resinas epóxicas sintéticas).

### 2. Micro-Espectroscopía Raman
- Un láser monocromático enfoca inclusiones microscópicas profundas sin dañar la gema.
- Al chocar con el mineral atrapado, la dispersión inelástica genera un espectro de picos diagnósticos (identifica calcita, pirita, halita, parisita, cuarzo).

### 3. EDXRF (Fluorescencia de Rayos X)
- Bombardea la superficie con rayos X primarios para excitar electrones de capas internas.
- Identifica y cuantifica elementos mayoritarios y trazas: relación $\\text{Cr}/\\text{V}$, contenido de hierro $(\\text{Fe})$, potasio $(\\text{K})$, titanio $(\\text{Ti})$.

### 4. LA-ICP-MS (Ablación Láser con Espectrometría de Masas)
- Un micro-pulso láser submicrónico vaporiza una cantidad invisible a simple vista ($< 0.000001\\text{ gramos}$) y la analiza por plasma acoplado inductivamente.
- Mide elementos ultratrazas en partes por millón (ppm) o partes por billón (ppb): Li, Be, Sc, V, Cr, Rb, Cs, Ta.
- **Utilidad suprema:** Es la huella química geoquímica que permite asignar con alta certidumbre el origen geográfico a Colombia, Zambia, Afganistán o Brasil.`,
        keyTakeaways: [
          'FTIR: Agua en canales y detección de resinas vs aceites.',
          'Raman: Identificación molecular de inclusiones minerales sólidas y fluidas.',
          'EDXRF y LA-ICP-MS: Cuantificación de elementos traza para discriminación de origen geográfico.'
        ]
      },
      {
        id: 'm9-l2',
        moduleId: 9,
        order: 2,
        title: 'Lección 9.2: Anatomía de un Informe Gemológico Oficial vs Avalúo Comercial',
        readTime: '15 min',
        difficulty: 'Intermedio',
        summary: 'Por qué un laboratorio científico serio JAMÁS pone precios en un informe gemológico.',
        content: `Existe una confusión extendida entre el público general entre un **informe gemológico de laboratorio** y un **avalúo comercial**:

### 1. Informe Gemológico Pericial (Lab Report)
- Emitido por instituciones científicas independientes (CDTEC en Bogotá, GIA en EE.UU., Gübelin o SSEF en Suiza).
- **Contenido estricto:**
  1. Identificación del mineral: Berilo natural esmeralda.
  2. Dimensiones milimétricas y peso exacto en quilates ($0.001\\text{ ct}$).
  3. Color y forma de talla.
  4. Presencia y grado de tratamiento de claridad (None, Minor, Moderate, Significant) y tipo de sustancia (aceite tradicional vs polímeros).
  5. Opinión de procedencia geográfica documentada (ej. Colombia).
- **Regla de oro:** Un laboratorio científico **JAMÁS incluye precios ni cotizaciones comerciales**, garantizando su total imparcialidad e independencia de la transacción mercantil.

### 2. Avalúo Comercial (Appraisal)
- Emitido por un tasador, perito avaluador registrado o comerciante.
- Estima el valor monetario de reposición o de liquidación de la joya en un mercado específico y en una fecha determinada.`,
        keyTakeaways: [
          'Un reporte de laboratorio científico certifica datos físicos y origen, NUNCA fija precios.',
          'Los laboratorios serios no compran ni venden gemas para evitar conflicto de interés.',
          'Un avalúo comercial estima valor monetario en una fecha y mercado específico.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 9: Falso Certificado con Estimación de Precio Millonario Incluida',
      scenario: 'Un comprador adquiere un lote con un supuesto "Certificado Oficial Internacional" que fijaba un "Valor Comercial Tasado en $50.000 USD". Al acudir a venderlo, los joyeros lo rechazan de inmediato.',
      gemologicalAnalysis: 'Ningún laboratorio gemológico científico acreditado (GIA, CDTEC, Gübelin, SSEF) imprime precios en sus dictámenes. La inclusión de un valor monetario reveló que se trataba de un documento de tasación privada sin respaldo pericial científico, utilizado para inflar artificialmente las expectativas del comprador.',
      diagnosticLimitations: 'Un informe científico declara la naturaleza del mineral y su tratamiento; el precio lo fija el mercado libre entre compradores y vendedores.',
      learningOutcome: 'Desconfiar de cualquier documento que se autodenomine "certificado de laboratorio" si incluye montos de dinero. Los reportes auténticos se centran exclusivamente en datos físicos y gemológicos verificables.'
    },
    practicalActivity: {
      title: 'Lectura Crítica e Interpretación de Informes de Laboratorios CDTEC y GIA',
      instructions: '1. Examinar dos reportes periciales oficiales anonimizados. 2. Identificar el número de reporte, fecha, dimensiones, peso, descripción de color y la casilla de tratamiento (Clarity Enhancement). 3. Verificar si el reporte cuenta con código QR y validación en la base de datos oficial del laboratorio emisor.',
      materialsNeeded: ['Muestras de reportes oficiales CDTEC, GIA o SSEF', 'Acceso a internet para verificación web'],
      deliverable: 'Cuadro analítico desglosando cada sección del informe y verificación de autenticidad en línea.',
      rubric: [
        { criterion: 'Interpretación correcta de la casilla de tratamiento', weight: '50%' },
        { criterion: 'Verificación en base de datos oficial del emisor', weight: '50%' }
      ]
    },
    quiz: [
      {
        id: 'q9-1',
        question: '¿Por qué los laboratorios gemológicos científicos independientes como CDTEC o GIA nunca incluyen valores monetarios en sus informes periciales?',
        type: 'multiple_choice',
        options: ['Porque no tienen calculadora', 'Para garantizar total imparcialidad y evitar conflictos de interés con las transacciones comerciales', 'Porque está prohibido por la DIAN', 'Porque los precios son secretos'],
        correctAnswer: 1,
        explanation: 'La independencia pericial exige que el laboratorio no tenga ningún interés económico en el precio final de la piedra que analiza.',
        scientificContext: 'Código de ética internacional CIBJO e ICA.'
      },
      {
        id: 'q9-2',
        question: '¿Qué técnica analítica mide elementos ultratraza en partes por millón (ppm) mediante ablación láser para determinar el origen geográfico de una esmeralda?',
        type: 'multiple_choice',
        options: ['Lupa 10x', 'LA-ICP-MS', 'Filtro Chelsea', 'Refractómetro'],
        correctAnswer: 1,
        explanation: 'La espectrometría de masas con plasma acoplado inductivamente y ablación láser (LA-ICP-MS) mide la huella química atómica de la gema.',
        scientificContext: 'Utilizada rutinariamente en GIA, SSEF y Gübelin.'
      }
    ],
    externalReferences: [
      {
        title: 'CDTEC Colombia — Servicios Científicos y Verificación de Reportes',
        url: 'https://www.cdtec.com.co',
        institution: 'Centro de Desarrollo Tecnológico de la Esmeralda',
        description: 'Verificación digital de reportes periciales oficiales y estándares científicos en Bogotá.',
        category: 'Laboratorio Científico'
      },
      {
        title: 'SSEF Swiss Gemmological Institute — Emerald Testing Standards',
        url: 'https://www.ssef.ch',
        institution: 'SSEF Suiza',
        description: 'Monografías sobre origen y determinación de resinas en esmeraldas de alta gama.',
        category: 'Laboratorio Internacional'
      }
    ],
    bibliography: [
      { author: 'Hänni, H.A. & Kiefert, L.', year: '1998', title: 'Origin determination of emeralds: can we do it?', publication: 'In Proceedings of the 27th International Gemmological Conference' },
      { author: 'Saeseaw, S., Pardieu, V. & Sangsawong, S.', year: '2014', title: 'Three-phase inclusions in emeralds and their geographic significance', publication: 'Gems & Gemology, 50(2), 114-132' }
    ]
  },

  // ==========================================
  // MÓDULO 10. COMERCIO Y ECONOMÍA ESMERALDERA
  // ==========================================
  {
    id: 10,
    code: 'MOD-10',
    title: 'Módulo 10: Cadena de Valor, Economía Esmeraldera y Comercio Internacional',
    shortTitle: 'Comercio y Economía',
    academicHours: 10,
    overview: 'Estructura socioeconómica de la esmeralda colombiana: de la boca de mina a las vitrinas de Ginebra y Hong Kong. Dinámica de la Avenida Jiménez y Plaza del Rosario en Bogotá, intermediación ética, estructura de costos de producción, exportación y riesgos de fraude.',
    competencies: [
      'Analizar los eslabones de la cadena de valor: extracción, barequeo, comercialización en bruto, lapidación, engaste y exportación.',
      'Formular cotizaciones comerciales internacionales transparentes con términos de entrega claros.',
      'Gestionar de forma ética reservas comerciales, condiciones de pago y mitigación de riesgos de intermediación opaca.'
    ],
    learningObjectives: [
      'Explicar la función económica histórica de los comisionistas y comercializadores formales de Bogotá.',
      'Detallar la formación de precios mayoristas y la dispersión de márgenes a lo largo de la cadena.',
      'Aplicar buenas prácticas comerciales para construir reputación y confianza de marca en mercados exteriores.'
    ],
    prerequisites: ['Módulo 6: Color y Valoración.'],
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm10-l1',
        moduleId: 10,
        order: 1,
        title: 'Lección 10.1: La Cadena de Valor Esmeraldera Colombiana',
        readTime: '15 min',
        difficulty: 'Intermedio',
        summary: 'De la veta en Boyacá a las casas de alta joyería en la Place Vendôme de París: actores, márgenes y riesgos.',
        content: `La cadena de valor de la esmeralda colombiana es una de las más complejas y fascinantes de la minería de gemas preciosas:

### Eslabones Principales
1. **Extracción en Mina:** Títulos mineros formales y minería tradicional autorizada. Implica costos de galería subterránea, explosivos controlados, ventilación y seguridad social minera.
2. **Lavado y Barequeo:** Recolección artesanal en escombreras y ríos bajo figuras de subsistencia formalizada.
3. **Comercio en Bruto (Mercado Primario):** Transacciones en los municipios mineros (Muzo, Otanche, Borbur, Chivor). Evaluación preliminar de cristales con ventanas de inspección o inmersión en agua.
4. **Lapidación y Talla (La Candelaria / Av. Jiménez):** El tallador asume el riesgo físico de fractura del cristal y merma en peso para extraer la joya.
5. **Comercialización Mayorista:** Casas comercializadoras en el Emerald Trade Center y centros financieros de Bogotá.
6. **Certificación y Tratamiento Declarado:** Envío a laboratorios (CDTEC) para certificación de origen y nivel de claridad.
7. **Exportación y Joyería Final:** Salida formal hacia centros de consumo internacional (Nueva York, Ginebra, Tokio, Hong Kong, Singapur, Dubái).`,
        keyTakeaways: [
          'La cadena abarca desde la galería subterránea hasta la joyería internacional.',
          'El tallador y el comerciante asumen el riesgo de rendimiento del cristal en bruto.',
          'La certificación científica añade liquidez y elimina desconfianza en el comprador exterior.'
        ]
      },
      {
        id: 'm10-l2',
        moduleId: 10,
        order: 2,
        title: 'Lección 10.2: Comercio Mayorista en la Avenida Jiménez y Cotizaciones Éticas',
        readTime: '16 min',
        difficulty: 'Intermedio',
        summary: 'Tradición y modernización: cómo estructurar ofertas comerciales formales sin comisiones ocultas.',
        content: `La Avenida Jiménez con Carrera Séptima en Bogotá es históricamente el centro neurálgico del comercio esmeraldero de América Latina:

### 1. Dinámica Tradicional y Formalización
- Históricamente basada en la palabra de honor (*con pacto de manos*).
- En el siglo XXI, el mercado se ha modernizado hacia la formalización tributaria, salvoconductos electrónicos RUCOM, facturación electrónica y pagos bancarizados para cumplir con estándares de prevención de lavado de activos (SARLAFT/SAGRILAFT).

### 2. Estructuración de una Cotización Comercial Profesional
Toda oferta comercial formal debe contener:
- Identificación tributaria completa de la empresa vendedora (NIT, RUCOM vigente).
- Descripción gemológica verificable (código único de inventario, peso en quilates, dimensiones, forma de talla, color declarado).
- Indicación expresa de número de certificado gemológico adjunto.
- Declaración explícita del tratamiento de claridad (ej. *Aceite de cedro natural grado menor*).
- Precios unitarios y totales en moneda pactada (USD o COP) con fecha de vigencia estricta (por volatilidad cambiaria).
- Condiciones de entrega y custodia: entrega en bóveda blindada en Bogotá o envío CIF asegurado con transportadora de valores.`,
        keyTakeaways: [
          'La Avenida Jiménez evoluciona de la informalidad tradicional a la estricta bancarización y RUCOM.',
          'Una cotización profesional debe detallar tratamiento, certificado y moneda con plazo de vigencia.',
          'La transparencia en el reporte evita reclamaciones legales y retenciones aduaneras.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 10: Exportación Truncada por Falta de Declaración del Tratamiento en Factura',
      scenario: 'Una comercializadora intenta exportar un lote de 20 esmeraldas talladas valoradas en $120.000 USD hacia Tokio. En la factura comercial declaran "Esmeraldas naturales sin tratamiento". En la inspección pericial previa al visto bueno de Fedesmeraldas, el perito somete una muestra aleatoria a FTIR detectando resina epóxica en fracturas superficiales.',
      gemologicalAnalysis: 'La falta de coincidencia entre la declaración de la factura y la realidad física de la gema constituye una infracción aduanera. El embarque fue retenido preventivamente, requiriendo reexpedición de factura con la descripción exacta del tratamiento.',
      diagnosticLimitations: 'Las aduanas internacionales (especialmente Japón, Suiza y EE.UU.) realizan inspecciones aleatorias muy rigurosas.',
      learningOutcome: 'Declarar el tratamiento con total veracidad en la factura comercial no reduce el precio si el comprador ya lo sabe, pero mentir en aduana puede acarrear multas, decomiso del lote y pérdida del registro RUCOM.'
    },
    practicalActivity: {
      title: 'Simulación de Elaboración de Cotización Formal y Factura de Exportación',
      instructions: '1. Seleccionar tres esmeraldas del inventario de la plataforma. 2. Redactar una cotización formal dirigida a un comprador internacional ficticio. 3. Incluir desglose de precio por quilate en USD y su equivalente en COP con tasa TRM vigente. 4. Redactar las cláusulas de entrega en bóveda y declaración CIBJO del tratamiento.',
      materialsNeeded: ['Módulo de Comercio de la plataforma', 'Calculadora de conversión cambiaria', 'Plantilla de cotización'],
      deliverable: 'Documento formal de cotización comercial listo para impresión o exportación PDF.',
      rubric: [
        { criterion: 'Descripción gemológica impecable y completa', weight: '40%' },
        { criterion: 'Inclusión de declaración ética del tratamiento', weight: '30%' },
        { criterion: 'Cálculo aritmético exacto de totales y plazos', weight: '30%' }
      ]
    },
    quiz: [
      {
        id: 'q10-1',
        question: '¿Por qué es indispensable declarar el nivel y tipo de tratamiento de claridad en una factura de exportación de esmeraldas?',
        type: 'multiple_choice',
        options: ['Para que la aduana cobre el doble de impuestos', 'Porque las normas aduaneras y las directrices de CIBJO sancionan la omisión de tratamientos como publicidad engañosa y fraude', 'Porque el aceite de cedro es inflamable', 'No es indispensable; se puede omitir'],
        correctAnswer: 1,
        explanation: 'Omitir el tratamiento en documentos aduaneros y comerciales constituye una infracción ética y legal en los mercados formales.',
        scientificContext: 'Estatuto del Consumidor en Colombia (Ley 1480 de 2011) y CIBJO Blue Books.'
      },
      {
        id: 'q10-2',
        question: '¿Qué federación gremial administra en Colombia el Fondo Nacional de la Esmeralda (FNE) y otorga el visto bueno de exportación?',
        type: 'multiple_choice',
        options: ['Fedesmeraldas', 'Federación Nacional de Cafeteros', 'Banco de la República', 'Ecopetrol'],
        correctAnswer: 0,
        explanation: 'Fedesmeraldas representa al sector esmeraldero y vela por la legalidad y promoción de la gema colombiana.',
        scientificContext: 'Ley 488 de 1998 y decretos reglamentarios del sector minero.'
      }
    ],
    externalReferences: [
      {
        title: 'Fedesmeraldas — Federación Nacional de Esmeraldas de Colombia',
        url: 'https://www.fedesmeraldas.org',
        institution: 'Fedesmeraldas',
        description: 'Informes de producción minera formal, programas de trazabilidad y proyectos sociales en Boyacá.',
        category: 'Gremio Cúpula'
      }
    ],
    bibliography: [
      { author: 'Pignatelli, I., Giuliani, G., Ohnenstetter, D. et al.', year: '2015', title: 'Colombian emeralds and their regulation: historic perspectives', publication: 'The Canadian Mineralogist, 53(2), 245-262' },
      { author: 'Guerrero, J.', year: '2018', title: 'La cadena de valor de las esmeraldas en Colombia: retos de la formalización', publication: 'Boletín de Minas y Energía, UPME' }
    ]
  },

  // ==========================================
  // MÓDULO 11. MARCO NORMATIVO Y MINERÍA RESPONSABLE
  // ==========================================
  {
    id: 11,
    code: 'MOD-11',
    title: 'Módulo 11: Marco Normativo, Trazabilidad Minera, RUCOM y Sostenibilidad',
    shortTitle: 'Marco Normativo y Minería Responsable',
    academicHours: 10,
    overview: 'Legislación minera colombiana vigente (Ley 685 de 2001, Código de Minas). Títulos mineros de esmeralda, contrato de concesión, licenciamiento ambiental (ANLA/CAR), Registro Único de Comercializadores (RUCOM), liquidación de regalías mineras ante la ANM, debida diligencia de la OCDE y programas de minería verde.',
    competencies: [
      'Navegar el marco legal de la Agencia Nacional de Minería (ANM) y el Ministerio de Minas y Energía.',
      'Emitir y verificar la validez jurídica de salvoconductos de transporte de mineral en Colombia.',
      'Implementar protocolos de debida diligencia minera para exportación hacia mercados regulados por la OCDE.'
    ],
    learningObjectives: [
      'Explicar el procedimiento para obtener y mantener la matrícula activa en el RUCOM.',
      'Calcular la regalía minera oficial basada en los precios base fijados periódicamente por la UPME.',
      'Identificar las exigencias ambientales para la disposición de estériles y recirculación de aguas en minería subterránea.'
    ],
    prerequisites: ['Módulo 10: Comercio y Economía.'],
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm11-l1',
        moduleId: 11,
        order: 1,
        title: 'Lección 11.1: El Código de Minas y el Registro Único de Comercializadores (RUCOM)',
        readTime: '16 min',
        difficulty: 'Intermedio',
        summary: 'De la concesión minera al mostrador: cómo opera la legalidad minera en Colombia bajo la supervisión de la ANM.',
        content: `La actividad esmeraldera en Colombia está enmarcada en el Código de Minas (Ley 685 de 2001) y la Resolución 40391 del Ministerio de Minas y Energía:

### 1. Título Minero y Contrato de Concesión
- En Colombia, el subsuelo y los recursos minerales son de propiedad del Estado (Art. 332 de la Constitución Política).
- Las empresas mineras obtienen el derecho a explorar y explotar mediante un **Contrato de Concesión Minera** otorgado por la Agencia Nacional de Minería (ANM) e inscrito en el Registro Minero Nacional (RMN).
- Es requisito previo e indispensable contar con la **Licencia Ambiental** expedida por la Corporación Autónoma Regional (Corpoboyacá o CAR) o la ANLA.

### 2. El RUCOM (Registro Único de Comercializadores de Minerales)
- Todo comerciante, joyero o lapidario que compre, transforme o venda esmeraldas debe estar registrado y con certificado RUCOM vigente.
- La compra solo es legal si el proveedor acredita:
  1. Ser titular de un contrato de concesión minera activo.
  2. Ser beneficiario de un área de reserva especial o subcontrato de formalización.
  3. Ser barequero registrado ante la alcaldía municipal respectiva.
- Comprar o transportar esmeraldas sin respaldo de título o salvoconducto constituye el delito penal de **explotación ilícita de yacimiento minero** (Art. 338 del Código Penal).`,
        keyTakeaways: [
          'El Estado es el propietario del subsuelo minero.',
          'El RUCOM es obligatorio para cualquier persona o empresa que comercialice esmeraldas.',
          'Comprar mineral sin origen comprobable acarrea sanciones penales y decomiso.'
        ]
      },
      {
        id: 'm11-l2',
        moduleId: 11,
        order: 2,
        title: 'Lección 11.2: Liquidación de Regalías y Debida Diligencia Internacional (OCDE)',
        readTime: '17 min',
        difficulty: 'Avanzado',
        summary: 'Paso a paso tributario y estándares de sostenibilidad para cumplir con las exigencias del comercio ético global.',
        content: `El comercio internacional contemporáneo exige trazabilidad libre de conflicto y cumplimiento ambiental:

### 1. Liquidación de Regalías Mineras
- La Ley 141 de 1994 y la Ley 2056 de 2020 determinan el porcentaje de regalías por explotación de esmeraldas.
- La Unidad de Planeación Minero Energética (UPME) fija trimestralmente los precios base oficiales por quilate según calidad (bruto, tallada, fina, corriente).
- El titular minero o comercializador liquida el valor correspondiente y realiza el pago ante la ANM antes de obtener los certificados de movilización o visto bueno de exportación.

### 2. Guía de Debida Diligencia de la OCDE
Para exportar a países de la Unión Europea, Estados Unidos, Reino Unido y Suiza, las comercializadoras deben demostrar cumplimiento de la **Guía de Debida Diligencia de la OCDE para Cadenas de Suministro Responsables de Minerales**:
1. *Paso 1:* Establecer sistemas sólidos de gestión empresarial y trazabilidad documental.
2. *Paso 2:* Identificar y evaluar riesgos de derechos humanos, trabajo infantil o lavado de activos en la cadena.
3. *Paso 3:* Diseñar e implementar estrategias para mitigar los riesgos identificados.
4. *Paso 4:* Realizar auditorías independientes de tercera parte a los procesos de extracción y compra.
5. *Paso 5:* Informar anualmente de manera pública sobre las políticas y prácticas de debida diligencia.`,
        keyTakeaways: [
          'El pago de regalías financia proyectos de desarrollo en los municipios mineros.',
          'La UPME fija los precios base oficiales para la liquidación de regalías.',
          'La guía de la OCDE exige trazabilidad total para acceder a las marcas de lujo de Europa y Norteamérica.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 11: Decomiso Policial de Lote por Inconsistencia en Salvoconducto Electrónico',
      scenario: 'En un retén vial en la carretera Chiquinquirá - Bogotá, la Policía de Tránsito detiene un vehículo particular que transporta 350 quilates de esmeraldas en bruto. El portador muestra una fotocopia de un salvoconducto con código QR borroso y fecha vencida del día anterior.',
      gemologicalAnalysis: 'La Policía y la ANM verificaron en la plataforma electrónica de salvoconductos que el código correspondía a un lote de yeso y no de esmeraldas, y que el número de título minero estaba suspendido por sanción ambiental de Corpoboyacá. El cargamento fue incautado preventivamente y puesto a disposición de la Fiscalía General de la Nación.',
      diagnosticLimitations: 'El salvoconducto electrónico debe validarse en tiempo real en la plataforma digital de la ANM antes de iniciar el viaje.',
      learningOutcome: 'Todo transporte de mineral debe contar con el salvoconducto oficial vigente generado digitalmente en la plataforma de la ANM. No se aceptan fotocopias ilegibles ni fechas extemporáneas.'
    },
    practicalActivity: {
      title: 'Simulación de Liquidación de Regalías ante la ANM',
      instructions: '1. Consultar la última resolución de precios base de la UPME para esmeraldas talladas. 2. Calcular el valor de regalía para un lote simulado de 100 quilates de esmeralda tallada de calidad media. 3. Completar el formulario de liquidación simulado con NIT y código de título minero.',
      materialsNeeded: ['Resolución UPME vigente', 'Calculadora tributaria', 'Formulario de liquidación ANM'],
      deliverable: 'Planilla de liquidación de regalías con cálculo aritmético verificado.',
      rubric: [
        { criterion: 'Aplicación correcta de la tarifa UPME vigente', weight: '50%' },
        { criterion: 'Exactitud matemática en la liquidación', weight: '50%' }
      ]
    },
    quiz: [
      {
        id: 'q11-1',
        question: '¿Qué entidad del Estado colombiano administra el RUCOM y autoriza los contratos de concesión minera?',
        type: 'multiple_choice',
        options: ['La Agencia Nacional de Minería (ANM)', 'El Instituto Agustín Codazzi (IGAC)', 'La Superintendencia de Notariado y Registro', 'El Ministerio de Educación'],
        correctAnswer: 0,
        explanation: 'La ANM es la máxima autoridad minera concedente encargada de administrar los recursos minerales del subsuelo nacional.',
        scientificContext: 'Decreto 4134 de 2011.'
      },
      {
        id: 'q11-2',
        question: 'La Guía de Debida Diligencia de la OCDE exige que las empresas comercializadoras de esmeraldas demuestren cadenas de suministro libres de qué riesgos principales:',
        type: 'multiple_choice',
        options: ['Violaciones a derechos humanos, trabajo infantil y financiamiento de actores ilícitos', 'Fallas en la señal de telefonía celular', 'Desgaste de los discos de lapidación', 'Falta de empaque de terciopelo'],
        correctAnswer: 0,
        explanation: 'La debida diligencia de la OCDE busca garantizar que la extracción y comercio de minerales respeten los derechos humanos y la legalidad.',
        scientificContext: 'OECD Due Diligence Guidance for Responsible Supply Chains of Minerals.'
      }
    ],
    externalReferences: [
      {
        title: 'Agencia Nacional de Minería — Plataforma y Consultas RUCOM',
        url: 'https://www.anm.gov.co',
        institution: 'Agencia Nacional de Minería (ANM)',
        description: 'Ventanilla única de minería y verificación de comercializadores de minerales.',
        category: 'Entidad Estatal'
      },
      {
        title: 'OECD Due Diligence Guidance for Responsible Mineral Supply Chains',
        url: 'https://www.oecd.org',
        institution: 'OCDE (París)',
        description: 'Texto oficial de directrices internacionales para minerales éticos.',
        category: 'Normativa Internacional'
      }
    ],
    bibliography: [
      { author: 'Congreso de la República de Colombia', year: '2001', title: 'Ley 685 de 2001: Código de Minas', publication: 'Diario Oficial No. 44.545' },
      { author: 'OCDE', year: '2016', title: 'Guía de la OCDE debida diligencia para cadenas de suministro responsables de minerales (3ª Ed.)', publication: 'OECD Publishing, Paris' }
    ]
  },

  // ==========================================
  // MÓDULO 12. EMPRENDIMIENTO E INNOVACIÓN ESMERALDERA
  // ==========================================
  {
    id: 12,
    code: 'MOD-12',
    title: 'Módulo 12: Emprendimiento, Transformación Digital y Proyecto Integrador de Grado',
    shortTitle: 'Emprendimiento e Innovación',
    academicHours: 10,
    overview: 'Innovación tecnológica aplicada a la esmeralda: pasaportes digitales con código QR, trazabilidad criptográfica, fotografía gemológica macroscópica profesional para comercio electrónico, plataformas web autogestionadas, asociatividad y proyecto final integrador de grado para la acreditación de las 120 horas del diplomado.',
    competencies: [
      'Crear expedientes técnicos gemológicos y pasaportes digitales para gemas de estudio.',
      'Dominar las técnicas de iluminación difusa polarizada para fotografía macroscópica de esmeraldas en alta resolución.',
      'Diseñar un modelo de negocio gemológico formal, ético y digitalmente competitivo en el mercado global.'
    ],
    learningObjectives: [
      'Implementar pasaportes digitales con QR para trazabilidad y confianza del cliente final.',
      'Desarrollar el Proyecto Integrador de Grado: Ficha pericial completa de una esmeralda colombiana.',
      'Sintetizar los aprendizajes de los 12 módulos para aprobar la evaluación final integral de 120 horas.'
    ],
    prerequisites: ['Módulos 1 al 11 completados satisfactoriamente.'],
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'm12-l1',
        moduleId: 12,
        order: 1,
        title: 'Lección 12.1: Pasaportes Digitales, Trazabilidad QR y Comercio Electrónico',
        readTime: '15 min',
        difficulty: 'Intermedio',
        summary: 'Cómo la tecnología digital y los códigos QR revolucionan la confianza en la compraventa de esmeraldas colombianas.',
        content: `La compra de una esmeralda es una transacción basada en la confianza. La tecnología digital desarrollada en la plataforma **ESMERALDA INTELIGENTE JAIRRESTAURA** democratiza el acceso a la trazabilidad:

### 1. El Pasaporte Digital de cada Esmeralda
- Cada piedra cuenta con un identificador único estandarizado (ej. \`EMR-2025-001\`).
- Se genera un código QR dinámico que abre instantáneamente la ficha digital en cualquier dispositivo móvil sin exigir instalación de aplicaciones pesadas.
- **Modo Dual de Privacidad:**
  - *Vista de Propietario:* Almacena datos confidenciales (costo de adquisición, notas privadas de negociación, ubicación de bóveda).
  - *Vista Pública de Verificación:* Oculta los datos financieros privados y muestra únicamente las características gemológicas verificables (peso, dimensiones, origen declarado, corte, tratamiento, fotos de alta resolución y número de certificado de laboratorio).

### 2. Fotografía Gemológica de Alta Gama
- Fotografiar una esmeralda es un reto óptico mayúsculo: el cromo saturado tiende a saturar los sensores de las cámaras digitales, haciendo que el verde se vea irreal o artificial.
- **Buenas Prácticas:**
  - Uso de caja de luz con difusores acrílicos para evitar reflejos especulares de bombilla en la tabla.
  - Filtro polarizador circular en el lente para atenuar reflexiones y penetrar el jardín interior.
  - Fondo blanco neutro o gris al 18% para balance de blancos exacto a 5500 K.`,
        keyTakeaways: [
          'El pasaporte digital QR brinda transparencia inmediata al comprador final.',
          'La separación de datos públicos y privados protege la seguridad del comerciante.',
          'La fotografía con luz difusa polarizada es clave para capturar el verde real sin sobreexposición.'
        ]
      },
      {
        id: 'm12-l2',
        moduleId: 12,
        order: 2,
        title: 'Lección 12.2: El Proyecto Integrador de Grado: Elaboración del Expediente Técnico',
        readTime: '18 min',
        difficulty: 'Avanzado',
        summary: 'Pautas para estructurar el expediente gemológico y comercial de una esmeralda de estudio para graduarse del diplomado.',
        content: `El Proyecto Integrador de Grado del diplomado consiste en elaborar el **Expediente Técnico y Comercial Completo** de una esmeralda (utilizando un caso real o un espécimen académico simulado de la plataforma):

### Estructura del Expediente de Grado
1. **Ficha de Identificación:** Código único, referencia comercial, origen geográfico documentado (Muzo, Chivor, Coscuez, etc.) y fecha de registro.
2. **Parámetros Físicos:** Peso en quilates con 3 decimales, peso en gramos, dimensiones milimétricas (largo, ancho, profundidad), densidad calculada.
3. **Análisis Óptico y Colorimétrico:** Matiz (Hue), Tono (% Tone), Saturación (1-6), pleocroísmo dicroico y fluorescencia UV observada.
4. **Mapeo de Inclusiones Microscópicas:** Descripción detallada del jardín (inclusiones bifásicas/trifásicas, minerales de calcita o pirita asociados) y delimitación de riesgos mecánicos para engaste.
5. **Reporte de Tratamiento:** Clasificación del mejoramiento de claridad (No Oil, Minor, Moderate, Significant), tipo de sustancia (aceite de cedro natural vs resinas) y método de confirmación (FTIR/microscopía).
6. **Valoración y Cotización Comercial Orientativa:** Rango estimado en USD y COP según matriz 4C+T, cotización formal con términos de entrega y salvoconducto simulado.`,
        keyTakeaways: [
          'El proyecto de grado sintetiza los 12 módulos del diplomado.',
          'Genera una ficha pericial completa útil para la vida profesional real.',
          'Habilita al estudiante para emitir su Certificado Oficial de Acreditación de 120 horas.'
        ]
      }
    ],
    caseStudy: {
      title: 'Caso de Estudio 12: Creación de Marca Digital con Trazabilidad QR en el Centro de Bogotá',
      scenario: 'Un taller familiar de lapidación de la Carrera 6ta decide lanzar su propia marca de alta joyería. En lugar de limitarse a vitrinas físicas, implementa pasaportes digitales con códigos QR adheridos a los estuches de cada anillo.',
      gemologicalAnalysis: 'Los clientes que escanean el QR acceden a la microfotografía del jardín de su piedra, la explicación del aceite de cedro natural y el reporte CDTEC verificado. La transparencia genera un incremento del 60% en ventas a turistas y compradores internacionales que antes desconfiaban de comprar esmeraldas en Bogotá.',
      diagnosticLimitations: 'El QR debe enlazar a un servidor estable y duradero para que la joya pueda ser consultada a lo largo de los años.',
      learningOutcome: 'La innovación digital y la honestidad gemológica no son gastos superfluos: son la mayor ventaja competitiva para los nuevos emprendedores del sector esmeraldero.'
    },
    practicalActivity: {
      title: 'Proyecto Integrador de Grado: Expediente Técnico de Esmeralda de Estudio',
      instructions: '1. Registrar una esmeralda en el módulo de Inventario de la plataforma o seleccionar una existente. 2. Completar todos los campos técnicos (dimensiones, color, jardín, tratamiento, certificado). 3. Generar el Pasaporte Digital con código QR y guardarlo en formato PDF. 4. Redactar una memoria técnica de 2 páginas con el análisis mineralógico y comercial.',
      materialsNeeded: ['Módulo de Inventario de la plataforma', 'Módulo de Pasaporte QR', 'Módulo de Valoración IA'],
      deliverable: 'Expediente técnico completo con Pasaporte QR descargable y memoria explicativa.',
      rubric: [
        { criterion: 'Completitud y coherencia de las especificaciones gemológicas', weight: '40%' },
        { criterion: 'Generación correcta del Pasaporte Digital QR', weight: '30%' },
        { criterion: 'Rigor ético en la declaración de origen y tratamiento', weight: '30%' }
      ]
    },
    quiz: [
      {
        id: 'q12-1',
        question: '¿Qué ventaja fundamental ofrece el Pasaporte Digital con código QR frente a una etiqueta tradicional de papel en una joyería?',
        type: 'multiple_choice',
        options: ['Permite verificar al instante fotos microscópicas, certificados y trazabilidad en cualquier teléfono móvil sin deteriorarse', 'Hace que la piedra cambie de color automáticamente', 'Reemplaza el contrato de concesión minera', 'Elimina el peso de la gema'],
        correctAnswer: 0,
        explanation: 'El QR conecta la gema física con su expediente digital completo verificable en tiempo real por el comprador.',
        scientificContext: 'Trazabilidad digital y soberanía de datos del consumidor.'
      },
      {
        id: 'q12-2',
        question: 'Para fotografiar profesionalmente una esmeralda colombiana sin que el cromo sobreexponga o falsee el color verde, ¿qué iluminación es la recomendada?',
        type: 'multiple_choice',
        options: ['Flash directo de teléfono a 5 centímetros', 'Luz difusa polarizada en caja de luz con temperatura de 5500 K (luz día neutral)', 'Luz de vela con fósforos', 'Foco de luz roja incandescente'],
        correctAnswer: 1,
        explanation: 'La luz difusa neutral D65 con polarizador atenúa reflejos especulares y reproduce fielmente el verde natural.',
        scientificContext: 'Colorimetría y fotografía científica macroscópica.'
      }
    ],
    externalReferences: [
      {
        title: 'World Emerald Symposium Proceedings',
        url: 'https://www.fedesmeraldas.org',
        institution: 'Fedesmeraldas & CDTEC',
        description: 'Memorias de innovación, trazabilidad y tecnología aplicadas al sector esmeraldero.',
        category: 'Innovación'
      }
    ],
    bibliography: [
      { author: 'Ringsrud, R.', year: '2009', title: 'Emeralds: A Passionate Guide: The Forgotten Story of the World\'s Most Desirable Gem', publication: 'Green View Press' },
      { author: 'Choudhary, G.', year: '2019', title: 'Digital Passport Systems for Gemstones and Pearls', publication: 'Gemmological Association of All India' }
    ]
  }
];
