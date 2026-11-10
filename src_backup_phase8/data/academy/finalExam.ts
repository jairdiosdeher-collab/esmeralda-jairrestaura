import { FinalExamQuestion } from '../../types/academy';

export const FINAL_EXAM_BANK: FinalExamQuestion[] = [
  // --- MÓDULO 1: Fundamentos de Gemología ---
  {
    id: 'fe-01',
    moduleCode: 'MOD-01',
    category: 'Fundamentos de Gemología',
    question: '¿Qué condiciones epistemológicas y fisicoquímicas debe satisfacer un mineral para ser clasificado como una gema preciosa noble?',
    options: [
      'Únicamente poseer un color verde saturado y proceder de un yacimiento en Sudamérica',
      'Satisfacer simultáneamente la tríada de belleza óptica, rareza geoquímica anómala y durabilidad estructural (dureza y estabilidad química)',
      'Haber sido extraído mediante métodos artesanales y no tener ninguna fractura interna',
      'Haber sido sometido a tratamiento térmico por encima de 1000 °C'
    ],
    correctAnswer: 1,
    explanation: 'La tríada clásica de una gema noble exige belleza óptica (color, brillo, diafanidad), rareza geológica y durabilidad fisicoquímica para resistir el uso y la intemperie sin degradarse.',
    scientificReference: 'Liddicoat, R. T. (1993). Handbook of Gem Identification. GIA.'
  },
  {
    id: 'fe-02',
    moduleCode: 'MOD-01',
    category: 'Fundamentos de Gemología',
    question: '¿Por qué la esmeralda, a pesar de tener una dureza de 7.5 a 8.0 en la escala de Mohs, exhibe una baja tenacidad y es propensa a fracturas por impacto?',
    options: [
      'Porque su red de ciclosilicato hexagonal carece de enlaces covalentes',
      'Porque la presencia inherente de microfisuras de origen tectónico/hidrotermal y planos de partición basal concentran los esfuerzos mecánicos',
      'Porque el berilio es un metal líquido a temperatura ambiente',
      'Porque se deshidrata de forma instantánea al contacto con el aire'
    ],
    correctAnswer: 1,
    explanation: 'La dureza de Mohs mide la resistencia al rayado de la red cristalina, mientras que la tenacidad mide la resistencia al choque mecánico. Las esmeraldas albergan tensiones residuales y microfracturas hidrotermales que actúan como concentradores de esfuerzos.',
    scientificReference: 'Nassau, K. (1980). Gems Made by Man. Chilton Book Company.'
  },
  {
    id: 'fe-03',
    moduleCode: 'MOD-01',
    category: 'Fundamentos de Gemología',
    question: 'Al determinar la densidad relativa de una esmeralda mediante pesaje hidrostático con agua destilada a 20 °C, ¿cuál es el rango característico de las esmeraldas colombianas?',
    options: [
      '2.15 a 2.30 g/cm³',
      '2.68 a 2.74 g/cm³',
      '3.50 a 3.53 g/cm³',
      '4.00 a 4.05 g/cm³'
    ],
    correctAnswer: 1,
    explanation: 'Las esmeraldas colombianas presentan una densidad hidrostática típica de 2.68 a 2.74 g/cm³, ligeramente inferior a las esmeraldas ricas en hierro de Zambia o Brasil (2.74 - 2.78 g/cm³).',
    scientificReference: 'Webster, R. (1994). Gems: Their Sources, Descriptions and Identification. Butterworth-Heinemann.'
  },
  {
    id: 'fe-04',
    moduleCode: 'MOD-01',
    category: 'Fundamentos de Gemología',
    question: '¿Qué fenómeno óptico describe la birrefringencia uniaxial negativa en el cristal de berilo?',
    options: [
      'El rayo ordinario (no) posee un índice de refracción mayor que el rayo extraordinario (ne) (no > ne)',
      'La luz viaja a la misma velocidad en todas las direcciones cristalográficas',
      'El cristal divide la luz en tres rayos con índices refractivos perpendiculares',
      'El rayo extraordinario tiene mayor índice que el rayo ordinario (ne > no)'
    ],
    correctAnswer: 0,
    explanation: 'El berilo cristaliza en el sistema hexagonal (ópticamente uniaxial). Al ser uniaxial negativo, el índice del rayo ordinario (no ≈ 1.577-1.583) es superior al extraordinario (ne ≈ 1.571-1.577), con birrefringencia de 0.005 a 0.007.',
    scientificReference: 'Bloss, F. D. (1999). Optical Crystallography. Mineralogical Society of America.'
  },

  // --- MÓDULO 2: Geología y Génesis ---
  {
    id: 'fe-05',
    moduleCode: 'MOD-02',
    category: 'Geología y Depósitos',
    question: '¿Por qué el modelo genético de las esmeraldas colombianas es único a nivel global frente al 95% de los yacimientos mundiales?',
    options: [
      'Porque se originaron por intrusiones ígneas graníticas pegmatíticas ricas en cuarzo y feldespato',
      'Porque es un modelo hidrotermal sedimentario en cuencas invertidas sin magmatismo asociado, donde salmueras de evaporitas lixiviaron berilio, cromo y vanadio de lutitas negras',
      'Porque precipitaron en chimeneas volcánicas kimberlíticas a más de 150 km de profundidad',
      'Porque se formaron por meteorización superficial en suelos lateríticos tropicales'
    ],
    correctAnswer: 1,
    explanation: 'Las esmeraldas colombianas no están vinculadas a pegmatitas ni magmatismo. Son de origen hidrotermal sedimentario: salmueras no magmáticas movilizadas por tectónica de inversión lixiviaron elementos cromóforos de lutitas ricas en materia orgánica.',
    scientificReference: 'Giuliani, G., et al. (2000). Science, 287(5453), 630-633.'
  },
  {
    id: 'fe-06',
    moduleCode: 'MOD-02',
    category: 'Geología y Depósitos',
    question: 'Según los estudios termobarométricos e isotópicos de inclusiones fluidas (Giuliani et al.), ¿cuáles fueron las condiciones de presión y temperatura de formación de las esmeraldas colombianas?',
    options: [
      '700 a 850 °C y presiones de 5 a 8 kbar en manto litosférico',
      '290 a 360 °C y presiones de 1.0 a 1.5 kbar (profundidad estimada de 3.5 a 5 km)',
      '75 a 120 °C a presión atmosférica superficial',
      '1200 a 1400 °C bajo condiciones de desvolatilización magmática'
    ],
    correctAnswer: 1,
    explanation: 'Los análisis de microtermometría en inclusiones fluidas y fraccionamiento isotópico calibran una temperatura de formación de 290 °C a 360 °C bajo presiones hidrostáticas de 1.0 a 1.5 kbar.',
    scientificReference: 'Cheilletz, A., & Giuliani, G. (1996). Mineralium Deposita, 31(5), 450-461.'
  },
  {
    id: 'fe-07',
    moduleCode: 'MOD-02',
    category: 'Geología y Depósitos',
    question: '¿Qué mecanismo geoquímico permitió la reducción del sulfato (SO4²⁻) y la precipitación de pirita y esmeraldas en las brechas hidrotermales de Boyacá?',
    options: [
      'Reducción Termoquímica de Sulfatos (TSR) mediada por materia orgánica bituminosa en las lutitas cretácicas',
      'Oxidación por bacterias fotosintéticas aeróbicas en la superficie',
      'Desgasificación de vapor de agua a partir de un magma basáltico en el fondo marino',
      'Desintegración radiactiva de uranio y torio en granitos'
    ],
    correctAnswer: 0,
    explanation: 'La reacción de Reducción Termoquímica de Sulfatos (TSR - Thermochemical Sulfate Reduction) oxidó la materia orgánica (kerógeno) a CO2 y redujo el sulfato evaporítico a H2S, precipitando sulfuros (pirita) y desestabilizando los complejos de Be-Cr-V.',
    scientificReference: 'Branquet, Y., et al. (1999). Journal of South American Earth Sciences, 12(2), 171-186.'
  },
  {
    id: 'fe-08',
    moduleCode: 'MOD-02',
    category: 'Geología y Depósitos',
    question: '¿Cuál es la edad radiométrica Ar-Ar y K-Ar obtenida para la mineralización del Cinturón Esmeraldero Oriental (Chivor) frente al Occidental (Muzo)?',
    options: [
      'Oriental: ~65 Ma (Paleoceno) | Occidental: ~32-38 Ma (Oligoceno)',
      'Oriental: Precámbrico (1200 Ma) | Occidental: Jurásico (150 Ma)',
      'Ambos cinturones precipitaron simultáneamente hace solo 2 millones de años en el Cuaternario',
      'Oriental: 15 Ma | Occidental: 120 Ma'
    ],
    correctAnswer: 0,
    explanation: 'Las dataciones 40Ar/39Ar en fuchsite y micas hidrotermales demuestran dos pulsos tectono-termales diacrónicos: el Cinturón Oriental data de ~65 Ma (límite Cretácico-Paleoceno) y el Occidental de ~32 a 38 Ma (Eoceno tardío - Oligoceno).',
    scientificReference: 'Cheilletz, A., et al. (1994). Journal of Geology, 102(5), 535-544.'
  },

  // --- MÓDULO 3: Cristalografía y Mineralogía ---
  {
    id: 'fe-09',
    moduleCode: 'MOD-03',
    category: 'Cristalografía & Mineralogía',
    question: '¿A qué clase y grupo espacial pertenece la celda unidad cristalina del berilo?',
    options: [
      'Sistema cúbico, grupo espacial Fd-3m',
      'Sistema hexagonal, clase dihexagonal dipiramidal (6/mmm), grupo espacial P6/mcc',
      'Sistema triclínico, clase pinacoidal (1), grupo espacial P-1',
      'Sistema ortorrómbico, clase dipiramidal (mmm), grupo espacial Pnma'
    ],
    correctAnswer: 1,
    explanation: 'El berilo pertenece a la clase holoédrica dihexagonal dipiramidal (6/mmm) del sistema hexagonal, con grupo espacial P6/mcc y parámetros a ≈ 9.21 Å y c ≈ 9.19 Å.',
    scientificReference: 'Deer, W. A., Howie, R. A., & Zussman, J. (1992). An Introduction to the Rock-Forming Minerals.'
  },
  {
    id: 'fe-10',
    moduleCode: 'MOD-03',
    category: 'Cristalografía & Mineralogía',
    question: 'En los canales estructurales paralelos al eje c del berilo, ¿cómo se diferencia espectroscópicamente el Agua Tipo I del Agua Tipo II en el infrarrojo (FTIR)?',
    options: [
      'El Agua Tipo I no tiene hidrógeno, mientras que el Agua Tipo II contiene deuterio',
      'El Agua Tipo I no tiene iones alcalinos vecinos y su vector H-H es paralelo al eje c; el Agua Tipo II está asociada a un catión alcalino (Na+) y su vector H-H es perpendicular al eje c',
      'El Agua Tipo I se encuentra en estado sólido y el Agua Tipo II en estado gaseoso',
      'El Agua Tipo I solo existe en esmeraldas sintéticas'
    ],
    correctAnswer: 1,
    explanation: 'El Agua Tipo I orienta su dipolo molecular perpendicular al eje c (vector H-H paralelo a c). El Agua Tipo II interactúa electrostáticamente con iones alcalinos como Na+ en el canal, reorientando su vector H-H perpendicular al eje c (bandas FTIR 3592 y 3655 cm⁻¹).',
    scientificReference: 'Wood, D. L., & Nassau, K. (1968). American Mineralogist, 53(5-6), 777-800.'
  },
  {
    id: 'fe-11',
    moduleCode: 'MOD-03',
    category: 'Cristalografía & Mineralogía',
    question: 'Científicamente, ¿cuál es el origen cristalográfico demostrado de las esmeraldas Trapiche de Muzo y Peñas Blancas?',
    options: [
      'Maclas cíclicas de seis cristales de berilo pegados artificialmente',
      'Crecimiento sectorial esqueletal simultáneo de un monocristal único, donde el núcleo hexagonal {0001} y 6 brazos prismáticos {10-10} expulsaron inclusiones de lutita y albita a las uniones sectoriales',
      'Dobleces inducidos por metamorfismo de contacto sobre un cristal preexistente',
      'Impresión láser externa sobre un berilo facetado'
    ],
    correctAnswer: 1,
    explanation: 'La esmeralda Trapiche es un monocristal continuo formado por crecimiento sectorial esqueletal bajo fuerte sobressaturación. No es una macla de varios cristales; las 6 ramas y el núcleo comparten idéntica orientación de celda unitaria continua.',
    scientificReference: 'Pignatelli, I., et al. (2015). Carbon, 88, 237-247.'
  },
  {
    id: 'fe-12',
    moduleCode: 'MOD-03',
    category: 'Cristalografía & Mineralogía',
    question: '¿Cuál es la causa cuántica del color verde esmeralda y el desdoblamiento del campo cristalino octaédrico?',
    options: [
      'Transiciones d-d del ion Cr³⁺ coordinado octaédricamente en el sitio de Al³⁺, que generan bandas de absorción en 430 nm y 600 nm dejando una ventana de transmisión verde a 510-530 nm',
      'Dispersión de Rayleigh provocada por burbujas de gas microscópicas',
      'Presencia de trazas de plomo radiactivo en los canales del berilo',
      'Transferencia de carga interfacial entre moléculas de agua y berilio'
    ],
    correctAnswer: 0,
    explanation: 'El cromo trivalente (Cr³⁺) en simetría octaédrica sufre desdoblamiento de sus orbitales 3d por campo de ligando, provocando transiciones electrónicas ⁴A₂g → ⁴T₁g (430 nm) y ⁴A₂g → ⁴T₂g (600 nm), transmitiendo la región espectral verde.',
    scientificReference: 'Nassau, K. (2001). The Physics and Chemistry of Color. Wiley-Interscience.'
  },

  // --- MÓDULO 4: Identificación Gemológica ---
  {
    id: 'fe-13',
    moduleCode: 'MOD-04',
    category: 'Identificación Gemológica',
    question: 'Al utilizar un refractómetro estándar con líquido de contacto de bromonaftaleno (n = 1.81), ¿cuáles son los índices de refracción esperados para una esmeralda colombiana natural?',
    options: [
      'ne = 1.500 | no = 1.505 (Birrefringencia = 0.005 positiva)',
      'ne ≈ 1.571-1.577 | no ≈ 1.577-1.583 (Birrefringencia = 0.005-0.007 uniaxial negativa)',
      'ne = 1.620 | no = 1.640 (Birrefringencia = 0.020 biaxial positiva)',
      'Índice único no birrefringente de n = 1.544'
    ],
    correctAnswer: 1,
    explanation: 'Las esmeraldas colombianas tienen índices de refracción muy estables: ne ≈ 1.571-1.577 y no ≈ 1.577-1.583 con una birrefringencia típica de 0.006, carácter uniaxial negativo.',
    scientificReference: 'Anderson, B. W. (1990). Gem Testing. Butterworth-Heinemann.'
  },
  {
    id: 'fe-14',
    moduleCode: 'MOD-04',
    category: 'Identificación Gemológica',
    question: 'Al observar una esmeralda bajo el polariscopio con polarizadores cruzados, ¿qué figura de interferencia óptica se observa en el conoscopio al aislar el eje óptico?',
    options: [
      'Una cruz negra isógira fija con anillos circulares concéntricos que no se abre al girar la piedra (figura uniaxial)',
      'Dos hipérbolas isógiras que se separan en dos ojos de melatopo al girar la platina (figura biaxial)',
      'Extinción anómala permanente con bandas de deformación plástica en todos los ángulos',
      'Ausencia total de luz en rotación de 360° por isotropía'
    ],
    correctAnswer: 0,
    explanation: 'Al ser un mineral del sistema hexagonal, el berilo es uniaxial. Al alinear el eje óptico paralelo al haz de luz con una esfera conoscópica se observa una cruz negra centrada rodeada de anillos de interferencia cromática.',
    scientificReference: 'Read, P. G. (2005). Gemmology. Elsevier Butterworth-Heinemann.'
  },
  {
    id: 'fe-15',
    moduleCode: 'MOD-04',
    category: 'Identificación Gemológica',
    question: '¿Por qué las esmeraldas colombianas naturales suelen verse fuertemente rojas bajo el filtro Chelsea (CDCF) mientras que muchas esmeraldas de Zambia o Brasil se ven verdes o grisáceas?',
    options: [
      'Porque las colombianas son falsas y están coloreadas con anilina roja',
      'Porque las esmeraldas colombianas tienen un contenido ultra-bajo de hierro (<0.15% FeO), permitiendo que la intensa fluorescencia roja de Cr³⁺ excitada no sufra extinción (quenching) por Fe²⁺/Fe³⁺',
      'Porque las piedras africanas no contienen berilio en su celda cristalina',
      'Porque el filtro Chelsea solo reacciona con resina epóxica'
    ],
    correctAnswer: 1,
    explanation: 'El hierro es un agente de extinción (*quenching*) de la fluorescencia del cromo. Las esmeraldas colombianas tienen concentraciones muy bajas de hierro (<0.1% FeO), emitiendo rojo intenso a través del filtro Chelsea. Las de Zambia o Brasil son ricas en Fe (0.5 - 1.5% FeO), apagando la fluorescencia.',
    scientificReference: 'Webster, R. (1994). Gems: Their Sources, Descriptions and Identification.'
  },
  {
    id: 'fe-16',
    moduleCode: 'MOD-04',
    category: 'Identificación Gemológica',
    question: '¿Qué líneas de absorción y emisión en el espectroscopio de prisma o red de difracción son diagnósticas de cromo en una esmeralda natural de calidad gema?',
    options: [
      'Doble línea de emisión/absorción en el rojo profundo a 683 nm y 680 nm, junto a bandas finas en 662 y 646 nm y absorción total del violeta (< 440 nm)',
      'Una banda ancha de absorción a 850 nm en el infrarrojo cercano sin líneas visibles',
      'Una línea única de absorción a 589 nm correspondiente al doblete D del sodio',
      'Un espectro plano sin ninguna línea de absorción'
    ],
    correctAnswer: 0,
    explanation: 'El espectro de absorción de Cr³⁺ en la esmeralda exhibe el famoso doblete en el rojo en 683 y 680 nm (que puede aparecer en emisión brillante con luz intensa), dos líneas subsidiarias a 662 y 646 nm, y una banda ancha en el amarillo-verde.',
    scientificReference: 'Liddicoat, R. T. (1993). Handbook of Gem Identification.'
  },

  // --- MÓDULO 5: Inclusiones y Microscopía ---
  {
    id: 'fe-17',
    moduleCode: 'MOD-05',
    category: 'Inclusiones & Microscopía',
    question: '¿Es verdad que la presencia de inclusiones trifásicas (líquido + burbuja de gas + cristal cúbico de halita) prueba de forma 100% exclusiva e infalible el origen colombiano de una esmeralda?',
    options: [
      'Sí, es una regla absoluta de la gemología: ninguna otra mina en el mundo tiene inclusiones con halita',
      'No. Esmeraldas de depósitos sedimentarios o hidrotermales como Panjshir (Afganistán), Davdar (China) e incluso algunas de Nigeria pueden presentar inclusiones multifásicas con halita; el origen seguro requiere espectrometría de elementos traza (LA-ICP-MS) o isótopos de oxígeno',
      'Sí, porque el gas CO2 solo existe en la atmósfera de Colombia',
      'No, porque las inclusiones trifásicas solo se presentan en esmeraldas sintéticas Biron'
    ],
    correctAnswer: 1,
    explanation: 'La creencia de exclusividad es un error gemológico grave. Panjshir (Afganistán) y Davdar (China) albergan inclusiones trifásicas y multifásicas morfológicamente muy parecidas. La asignación científica de origen exige LA-ICP-MS o análisis isotópico de δ¹⁸O.',
    scientificReference: 'Groat, L. A., et al. (2008). In Geology of Gem Deposits. Mineralogical Association of Canada.'
  },
  {
    id: 'fe-18',
    moduleCode: 'MOD-05',
    category: 'Inclusiones & Microscopía',
    question: '¿Qué especie mineral, rara a nivel mundial y perteneciente al grupo de los fluorocarbonatos de tierras raras cerio-lantano, es una inclusión sólida diagnóstica de Muzo y Coscuez?',
    options: [
      'Zircón metamíctico con halos pleocroicos',
      'Parisita-(Ce) [Ca(Ce,La)2(CO3)3F2], caracterizada por cristales prismáticos hexagonales acanalados en forma de barril de color pardo amarillento',
      'Tremolita actinolita en agujas verdes',
      'Diamante microcristalino octaédrico'
    ],
    correctAnswer: 1,
    explanation: 'La parisita-(Ce) fue descubierta en las minas de Muzo por J.J. Paris en 1845. Aparece típicamente como inclusión singenética en forma de pequeños prismas estriados o pirámides truncadas de color pardo-miel.',
    scientificReference: 'Gübelin, E. J., & Koivula, J. I. (2005). Photoatlas of Inclusions in Gemstones, Vol. 2.'
  },
  {
    id: 'fe-19',
    moduleCode: 'MOD-05',
    category: 'Inclusiones & Microscopía',
    question: '¿Cuál es la explicación física y óptica real del codiciado fenómeno "Gota de Aceite" (Efecto Mariposa / Butterfly Effect) en las esmeraldas de Muzo y Peñas Blancas?',
    options: [
      'Es causado por la impregnación profunda de aceite de oliva o de linaza en las fisuras',
      'Es un fenómeno estructural originado por micro-zonaciones de crecimiento sectorial poligonal y sub-granos con ligeras desorientaciones reticulares que dispersan suavemente la luz sin turbidez, creando una textura visual aterciopelada',
      'Es provocado por burbujas de gas atrapadas en pegamento epóxico',
      'Es el resultado de pulir la piedra con diamante contaminado'
    ],
    correctAnswer: 1,
    explanation: 'El efecto Gota de Aceite no se debe a ningún aceite orgánico. Es una anomalía de crecimiento cristalográfico: una estructura celular tridimensional que actúa como difusor volumétrico de la luz, confiriendo a la gema un aspecto aterciopelado (*velvety*) sin perder transparencia.',
    scientificReference: 'Koivula, J. I. (2000). The Microworld of Diamonds and Gemstones.'
  },
  {
    id: 'fe-20',
    moduleCode: 'MOD-05',
    category: 'Inclusiones & Microscopía',
    question: '¿Qué inclusiones sólidas son diagnósticas del Cinturón Esmeraldero Oriental (Chivor / Gachalá) frente al Occidental (Muzo / Coscuez)?',
    options: [
      'Abundantes cristales euhedrales de pirita dorada en cubos y piritoedros, junto a cristales incoloros de albita y cuarzo',
      'Cristales de biotita marrón y esmeraldas trapiche de 12 brazos',
      'Agujas de rutilo cruzadas en estrella de seis puntas',
      'Inclusiones de cianita azul metamórfica'
    ],
    correctAnswer: 0,
    explanation: 'En Chivor es muy característica la presencia de pirita euhedral brillante (dorada metálica) y cristales de albita/cuarzo hidrotermal, mientras que en Muzo predominan calcita/dolomita, parisita-(Ce) y bitumen carbonoso.',
    scientificReference: 'Gübelin, E. J., & Koivula, J. I. (1986). Photoatlas of Inclusions in Gemstones, Vol. 1.'
  },

  // --- MÓDULO 6: Color y Valoración ---
  {
    id: 'fe-21',
    moduleCode: 'MOD-06',
    category: 'Color & Valoración',
    question: 'En el sistema tridimensional de grading de color del GIA, ¿cuáles son los tres atributos ortogonales utilizados para definir el color de una esmeralda?',
    options: [
      'Talla, Kilates y Claridad',
      'Tono o Matiz (Hue), Grado de Oscuridad o Tono (Tone) y Pureza o Saturación (Saturation)',
      'Brillo, Pulido y Simetría',
      'Índice de refracción, Fluorescencia y Densidad'
    ],
    correctAnswer: 1,
    explanation: 'El color se define formalmente en un espacio de tres ejes: Matiz/Tono (*Hue*, la longitud de onda dominante), Grado de oscuridad (*Tone*, escala 0 incoloro a 10 negro opaco) y Saturación (*Saturation*, intensidad o pureza espectral del 1 al 6).',
    scientificReference: 'King, J. M., et al. (1994). Gems & Gemology, 30(4), 220-242.'
  },
  {
    id: 'fe-22',
    moduleCode: 'MOD-06',
    category: 'Color & Valoración',
    question: 'Bajo la escala de color GIA, ¿cuál es la descripción de color que define el rango de mayor cotización de mercado para una esmeralda colombiana de grado excepcional?',
    options: [
      'vslbG 5/5 o G 5/6 (Very slightly bluish Green o Green puro, tono medio-oscuro 5 y saturación viva 5 a 6)',
      'yG 2/2 (Yellowish Green muy claro y saturación apagada)',
      'bG 8/1 (Bluish Green casi negro y grisáceo)',
      'G 1/1 (Verde extremadamente pálido casi incoloro)'
    ],
    correctAnswer: 0,
    explanation: 'El color premium corresponde a un verde puro o verde ligeramente azulado (vslbG), con un tono medio a medio-oscuro balanceado (5 a 6) y una saturación intensa a viva (5 o 6), sin tonos pardos o grisáceos secundarios.',
    scientificReference: 'GIA Coloured Stone Grading System Course Materials.'
  },
  {
    id: 'fe-23',
    moduleCode: 'MOD-06',
    category: 'Color & Valoración',
    question: '¿Por qué la esmeralda está clasificada por el GIA como una gema de "Claridad Tipo III"?',
    options: [
      'Porque nunca debe presentar fracturas ni inclusiones para considerarse auténtica',
      'Porque en la naturaleza se forma casi invariablemente con inclusiones y fracturas internas (*jardin*); la pureza "Eye Clean" es extremadamente rara y alcanza primas de precio exponenciales',
      'Porque solo se comercializa como gema opaca para cabuchones',
      'Porque su claridad se clasifica igual a la de los diamantes (IF, VVS1)'
    ],
    correctAnswer: 1,
    explanation: 'Las gemas Tipo III (esmeralda, turmalina roja) crecen en ambientes geológicos hidrotermales turbulentos, por lo que casi siempre contienen inclusiones visibles a simple vista. Una esmeralda colombiana transparente sin inclusiones mayores es un milagro geológico.',
    scientificReference: 'GIA Diamond and Colored Stone Grading Manual.'
  },
  {
    id: 'fe-24',
    moduleCode: 'MOD-06',
    category: 'Color & Valoración',
    question: '¿Qué es el "efecto ventana" (windowing) en una esmeralda facetada y cómo perjudica su valor comercial?',
    options: [
      'Una zona de vidrio pegada en la corona',
      'Un área central desprovista de brillo donde la luz entra y escapa por la culata sin reflejarse internamente, debido a un corte excesivamente plano por debajo del ángulo crítico de 39.5°',
      'Un tratamiento con aceite de cedro que se evapora al calor',
      'Una inclusión de pirita de forma cuadrada'
    ],
    correctAnswer: 1,
    explanation: 'Cuando la culata se talla con ángulos inferiores al ángulo crítico del berilo (~39.5°), la luz no experimenta reflexión interna total y se escapa por el fondo, provocando que la gema parezca transparente y vacía ("ventana"), depreciando su valor.',
    scientificReference: 'Hughes, R. W. (2017). Ruby & Sapphire: A Gemologist\'s Guide.'
  },

  // --- MÓDULO 7: Tratamientos y Mejoramiento ---
  {
    id: 'fe-25',
    moduleCode: 'MOD-07',
    category: 'Tratamientos & Claridad',
    question: '¿Cuál es la razón física fundamental por la cual un aceite o resina reduce la visibilidad de una fractura en una esmeralda?',
    options: [
      'Porque el líquido disuelve químicamente los bordes de la fractura y une la piedra',
      'Porque el índice de refracción del fluido (ej. aceite de cedro n ≈ 1.516 o resinas n ≈ 1.54-1.57) se aproxima al del berilo (n ≈ 1.57-1.58), minimizando la reflexión y refracción dispersa en la interfase aire-cristal',
      'Porque el aceite absorbe todos los fotones de luz visible',
      'Porque endurece la red cristalina aumentando su dureza a 10 en Mohs'
    ],
    correctAnswer: 1,
    explanation: 'En una fractura abierta al aire (n = 1.00), la diferencia con el berilo (n = 1.58) produce una fuerte reflexión de Fresnel blanca. Al llenar la fisura con una sustancia de índice similar (n ≈ 1.51-1.57), la luz atraviesa la interfase sin dispersarse, haciendo invisible la fisura.',
    scientificReference: 'Nassau, K. (1994). Gemstone Enhancement. Butterworth-Heinemann.'
  },
  {
    id: 'fe-26',
    moduleCode: 'MOD-07',
    category: 'Tratamientos & Claridad',
    question: '¿Por qué el aceite de cedro natural purificado (Juniperus virginiana) es aceptado como el tratamiento tradicional preferido frente a las resinas epóxicas sintéticas?',
    options: [
      'Porque es completamente reversible mediante limpieza en solventes suaves, no se descompone en polímeros irreversibles ni daña la gema con el tiempo',
      'Porque tiñe la esmeralda de verde permanente sin necesidad de cromo',
      'Porque cuesta más que la propia piedra preciosa',
      'Porque fue inventado en el siglo XXI por el laboratorio GIA'
    ],
    correctAnswer: 0,
    explanation: 'El aceite de cedro es una resina vegetal natural no polimerizable. Es 100% reversible (puede extraerse en caliente con alcohol sin alterar la piedra) y no sufre el amarilleamiento ni craquelado que aqueja a las resinas epóxicas con catalizador.',
    scientificReference: 'Krzemnicki, M. S., et al. (2000). Gems & Gemology, 36(4), 312-328.'
  },
  {
    id: 'fe-27',
    moduleCode: 'MOD-07',
    category: 'Tratamientos & Claridad',
    question: 'En la espectroscopia infrarroja por transformada de Fourier (FTIR), ¿qué bandas de absorción confirman de forma inequívoca la presencia de resinas epóxicas artificiales (como Opticon, Araldite o Palma)?',
    options: [
      'Bandas de estiramiento C-H aromático y alifático en 2872, 2928 y 2962 cm⁻¹, acompañadas con frecuencia de un pico en 3038 cm⁻¹ y la banda carbonilo a ~1730 cm⁻¹',
      'Bandas de absorción en 3592 y 3655 cm⁻¹ correspondientes al agua Tipo II',
      'Picos de sulfuro en 1050 cm⁻¹',
      'Ausencia total de absorción entre 2000 y 4000 cm⁻¹'
    ],
    correctAnswer: 0,
    explanation: 'Las resinas artificiales son polímeros de carbono e hidrógeno. Las vibraciones de estiramiento simétrico y asimétrico de los enlaces C-H generan tripletes agudos característicos en 2872, 2928 y 2962 cm⁻¹, inconfundibles frente a los aceites de cedro puros.',
    scientificReference: 'Johnson, M. L., et al. (1999). Gems & Gemology, 35(2), 82-107.'
  },
  {
    id: 'fe-28',
    moduleCode: 'MOD-07',
    category: 'Tratamientos & Claridad',
    question: 'Bajo el sistema unificado del LMHC (Laboratory Manual Harmonisation Committee) y la CIBJO, ¿cuáles son los cuatro grados estandarizados de mejoramiento de claridad?',
    options: [
      'Excelente, Muy Bueno, Bueno, Malo',
      'Ninguno (None / Insignificant), Menor (Minor - F1), Moderado (Moderate - F2) y Significativo (Significant - F3)',
      'Nivel 1, Nivel 2, Nivel 3, Nivel 4',
      'Grado A (Natural), Grado B (Resina), Grado C (Teñido)'
    ],
    correctAnswer: 1,
    explanation: 'El LMHC (GIA, SSEF, Gübelin, CDTEC) califica el volumen de sustancia de relleno en: None (sin evidencia de relleno), Minor (F1, presencia mínima), Moderate (F2, presencia moderada) y Significant (F3, presencia sustancial en fracturas extensas).',
    scientificReference: 'LMHC Information Sheet #5: Emerald with Clarity Enhancement.'
  },

  // --- MÓDULO 8: Talla y Lapidación ---
  {
    id: 'fe-29',
    moduleCode: 'MOD-08',
    category: 'Talla & Lapidación',
    question: 'Al orientar un cristal de esmeralda colombiana para su preformado, ¿por qué es fundamental que la tabla quede perpendicular al eje óptico c (o ligeramente inclinada hacia la base pinacoidal {0001})?',
    options: [
      'Para evitar que la piedra se vuelva roja al facetar',
      'Para aprovechar el dicroísmo y exhibir a través de la tabla el color extraordinario verde azulado más rico, en lugar del color ordinario verde amarillento menos apreciado',
      'Porque la esmeralda solo puede cortarse a lo largo del eje c sin romperse',
      'Para que el peso final se duplique automáticamente'
    ],
    correctAnswer: 1,
    explanation: 'El pleocroísmo del berilo muestra verde azulado intenso paralelo al eje c y verde amarillento perpendicular a él. Orientar la tabla perpendicular a c asegura que el observador perciba el tono verde azulado saturado más valioso.',
    scientificReference: 'Sinkankas, J. (1984). Gem Cutting: A Lapidary\'s Manual. Van Nostrand Reinhold.'
  },
  {
    id: 'fe-30',
    moduleCode: 'MOD-08',
    category: 'Talla & Lapidación',
    question: '¿Por qué la clásica "Talla Esmeralda" (octogonal escalonada) posee cuatro chaflanes oblicuos en sus esquinas en lugar de esquinas en ángulo recto de 90°?',
    options: [
      'Para gastar menos disco de diamante durante el corte',
      'Para proteger los vértices cristalinos frágiles frente al astillamiento mecánico durante el engaste en joyería y el uso cotidiano',
      'Para que la piedra encaje en monturas de reloj redondas',
      'Porque las normas tributarias colombianas así lo ordenan'
    ],
    correctAnswer: 1,
    explanation: 'Los vértices agudos en minerales de baja tenacidad como la esmeralda son propensos al astillamiento catastrófico con el menor golpe. Las esquinas facetadas a 45° redistribuyen las fuerzas mecánicas protegiendo la gema.',
    scientificReference: 'Vargas, G., & Vargas, M. (1989). Faceting for Amateurs.'
  },
  {
    id: 'fe-31',
    moduleCode: 'MOD-08',
    category: 'Talla & Lapidación',
    question: '¿Cuál es el rango de rendimiento o recuperación de peso (recovery rate) típico al tallar esmeraldas colombianas en bruto de buena calidad?',
    options: [
      '75% a 85%',
      '20% a 35% del peso en bruto original (pérdida del 65% al 80%)',
      '5% a 10%',
      '95% a 98%'
    ],
    correctAnswer: 1,
    explanation: 'La eliminación de la matriz calcárea, la remoción de fracturas críticas y la conformación de la culata con ángulos ópticos provocan una pérdida de masa de entre el 65% y el 80%, resultando en un rendimiento de solo el 20-35%.',
    scientificReference: 'Sinkankas, J. (1981). Emerald and Other Beryls. Geoscience Press.'
  },
  {
    id: 'fe-32',
    moduleCode: 'MOD-08',
    category: 'Talla & Lapidación',
    question: '¿Qué combinación de disco y agente abrasivo se emplea en la etapa final de pulido para obtener un brillo especular en esmeraldas sin sobrecalentar el cristal?',
    options: [
      'Disco de plomo puro a 5000 RPM con pasta de esmeril grueso',
      'Disco metálico de estaño pulido a baja revolución (300-600 RPM) lubricado con agua y polvo de diamante micronizado de 0.25 a 0.5 µm',
      'Lija de papel para madera seca',
      'Disco de tela con alcohol industrial sin ningún lubricante'
    ],
    correctAnswer: 1,
    explanation: 'El acabado espejo en la esmeralda exige un disco blando de estaño o estaño-plomo a baja velocidad con pasta de diamante ultrafina (0.25 µm), lubricando continuamente con agua o aceite mineral para prevenir choques térmicos.',
    scientificReference: 'Sinkankas, J. (1984). Gem Cutting: A Lapidary\'s Manual.'
  },

  // --- MÓDULO 9: Laboratorios y Certificación ---
  {
    id: 'fe-33',
    moduleCode: 'MOD-09',
    category: 'Laboratorios & Certificación',
    question: '¿Por qué un laboratorio gemológico independiente de tercera parte debe carecer de cualquier interés comercial o societario en la compraventa de las gemas que analiza?',
    options: [
      'Porque así lo exige la norma ISO/IEC 17025 para garantizar imparcialidad objetiva, ausencia de conflicto de interés y trazabilidad metrológica',
      'Porque los laboratorios comerciales pagan menos impuestos',
      'Porque los comerciantes no saben operar computadores',
      'Para evitar que los joyeros aprendan química'
    ],
    correctAnswer: 0,
    explanation: 'La norma internacional ISO/IEC 17025 exige total independencia financiera y operativa: un laboratorio que comercialice gemas o comisione sobre su venta pierde su credibilidad como certificador neutral ante el mercado global.',
    scientificReference: 'ISO/IEC 17025:2017 - General requirements for the competence of testing and calibration laboratories.'
  },
  {
    id: 'fe-34',
    moduleCode: 'MOD-09',
    category: 'Laboratorios & Certificación',
    question: '¿Qué técnica analítica cuantitativa de micro-espectrometría de masas acoplada a plasma por ablación láser se utiliza para la determinación concluyente de origen geográfico?',
    options: [
      'LA-ICP-MS (Laser Ablation Inductively Coupled Plasma Mass Spectrometry)',
      'Microscopía de lupa 10x',
      'Densimetría con líquidos pesados tóxicos',
      'Medición de dureza con punta de diamante'
    ],
    correctAnswer: 0,
    explanation: 'El LA-ICP-MS vaporiza un micro-punto de 30 a 50 µm en el filetín y cuantifica elementos traza en partes por millón (Li, Sc, V, Cr, Fe, Ga, Rb, Cs). El perfil multielemental actúa como la firma geoquímica digital inequívoca del yacimiento.',
    scientificReference: 'Groat, L. A., et al. (2008). Canadian Mineralogist, 46(4), 1055-1072.'
  },
  {
    id: 'fe-35',
    moduleCode: 'MOD-09',
    category: 'Laboratorios & Certificación',
    question: '¿Cuál es el rango de valores de composición isotópica de oxígeno (δ¹⁸O) característico de las esmeraldas colombianas frente al resto de yacimientos mundiales?',
    options: [
      'δ¹⁸O muy empobrecido de -15 a -5 ‰',
      'δ¹⁸O extraordinariamente enriquecido y positivo, entre +15.0 y +23.5 ‰, producto de la interacción de salmueras con evaporitas y sedimentos marinos',
      'δ¹⁸O constante de 0.00 ‰ igual al agua del mar actual',
      'δ¹⁸O entre +4.0 y +7.0 ‰ característico de fluidos magmáticos del manto'
    ],
    correctAnswer: 1,
    explanation: 'El valor de δ¹⁸O en Colombia (+15 a +23.5‰ V-SMOW) es el más elevado del mundo para esmeraldas, debido a que las salmueras lixiviaron cuarcitas y calizas evaporíticas marinas del Cretácico. Yacimientos ígneos como Brasil o Zambia exhiben valores entre +6 y +10‰.',
    scientificReference: 'Giuliani, G., et al. (2000). Science, 287(5453), 630-633.'
  },
  {
    id: 'fe-36',
    moduleCode: 'MOD-09',
    category: 'Laboratorios & Certificación',
    question: 'Al emitir un reporte gemológico formal bajo directrices LMHC, ¿cómo debe reportarse una esmeralda que presenta aceite de cedro en un grado Moderado (F2)?',
    options: [
      '"Esmeralda sintética creada en laboratorio"',
      '"Esmeralda natural colombiana, con presencia moderada de aceite de cedro tradicional en fisuras (Clarity Enhancement: Moderate / F2)"',
      '"Esmeralda de plástico tratada con vidrio"',
      '"Gema sin ninguna modificación humana"'
    ],
    correctAnswer: 1,
    explanation: 'El reporte debe declarar explícitamente: 1) Especie mineral y variedad (Berilo natural, esmeralda), 2) Tipo de sustancia detectada (aceite tradicional), y 3) Nivel cuantificado de mejoramiento (Moderado / F2), de acuerdo con LMHC Sheet #5.',
    scientificReference: 'LMHC Information Sheet #5.'
  },

  // --- MÓDULO 10: Comercio y Economía ---
  {
    id: 'fe-37',
    moduleCode: 'MOD-10',
    category: 'Comercio & Economía',
    question: '¿En qué lugar emblemático del centro histórico de Bogotá se ha concentrado tradicionalmente el mercado a cielo abierto de compraventa de esmeraldas en bruto y facetadas?',
    options: [
      'La Plaza de Bolívar',
      'La Plazoleta del Rosario y el Eje Ambiental (Avenida Jiménez con Carrera 6ª y 7ª)',
      'El Parque de la 93',
      'Corferias'
    ],
    correctAnswer: 1,
    explanation: 'La Plazoleta del Rosario y la Avenida Jiménez han sido el epicentro del comercio esmeraldero por más de seis décadas, donde comisionistas, rescatadores y mayoristas negocian parcelas de gemas inspeccionándolas a la luz del día.',
    scientificReference: 'Guerrero, J. (2018). El Mercado de la Esmeralda en Colombia. Universidad Nacional.'
  },
  {
    id: 'fe-38',
    moduleCode: 'MOD-10',
    category: 'Comercio & Economía',
    question: '¿Qué instrumento de embalaje y visualización tradicional utiliza el comisionista esmeraldero para presentar las gemas y evaluar su tono sin reflejos espurios?',
    options: [
      'Un frasco de vidrio ámbar con alcohol',
      'Un papel blanco doblado en dobleces especiales (pliegue diamantino) con un forro interior de papel celofán transparente o azul suave',
      'Una caja metálica cerrada con candado',
      'Una bolsa de polietileno negro opaco'
    ],
    correctAnswer: 1,
    explanation: 'El "papel de esmeraldas" consiste en una cartulina blanca mate doblada con precisión que alberga un papel fino interior. Permite manipular las gemas con pinzas y contrastar el color puro contra un fondo blanco neutro.',
    scientificReference: 'Liddicoat, R. T. (1993). Handbook of Gem Identification.'
  },
  {
    id: 'fe-39',
    moduleCode: 'MOD-10',
    category: 'Comercio & Economía',
    question: '¿Qué hito histórico en subastas públicas ostenta la esmeralda "Rockefeller Emerald" (18.04 quilates, origen Colombia, sin tratamiento)?',
    options: [
      'Fue vendida por USD $1000 en 1950',
      'Alcanzó en 2017 en Christie\'s Nueva York un precio récord de USD $5.51 millones, estableciendo el récord mundial de USD $305,500 por quilate para una esmeralda',
      'Fue declarada falso berilo por el Museo Británico',
      'Fue fundida para crear un lingote de oro'
    ],
    correctAnswer: 1,
    explanation: 'La Rockefeller Emerald fue adquirida por Harry Winston en Christie\'s por USD $5.51 millones, consagrando el récord histórico de USD $305,500 por quilate para una esmeralda colombiana sin mejoramiento de claridad.',
    scientificReference: 'Christie\'s Auction Catalogue, Magnificent Jewels, New York, June 2017.'
  },
  {
    id: 'fe-40',
    moduleCode: 'MOD-10',
    category: 'Comercio & Economía',
    question: 'Bajo la Ley 488 de 1998, ¿cuál es la contribución parafiscal obligatoria sobre las exportaciones de esmeraldas que financia el Fondo Nacional de la Esmeralda (FNE)?',
    options: [
      'El 50% del valor comercial en puerto',
      'El 1% sobre el valor FOB de las exportaciones de esmeraldas, administrado por Fedesmeraldas para inversión social e investigación tecnológica',
      'Cero impuestos de parafiscalidad',
      'El 15% sobre el peso bruto en gramos'
    ],
    correctAnswer: 1,
    explanation: 'La Ley 488 de 1998 creó la Cuota de Fomento de la Esmeralda del 1% sobre el valor FOB de exportación, administrada por Fedesmeraldas para programas de salud comunitaria, formalización y el laboratorio CDTEC.',
    scientificReference: 'Ley 488 de 1998, República de Colombia.'
  },

  // --- MÓDULO 11: Marco Normativo y Minería Responsable ---
  {
    id: 'fe-41',
    moduleCode: 'MOD-11',
    category: 'Normativa & Legal',
    question: 'Bajo el Código de Minas colombiano (Ley 685 de 2001), ¿quién es el titular soberano de los recursos del subsuelo y qué figura jurídica otorga el derecho de explotación?',
    options: [
      'El dueño del predio superficial es el dueño del subsuelo sin necesidad de trámite alguno',
      'El Estado colombiano es el propietario exclusivo e inalienable del subsuelo; el derecho a explorar y explotar se confiere únicamente mediante un Contrato de Concesión Minera inscrito en el Registro Minero Nacional (RMN)',
      'Las empresas extranjeras que radiquen una carta en la alcaldía municipal',
      'El primer minero que ingrese al túnel'
    ],
    correctAnswer: 1,
    explanation: 'El Artículo 5 de la Ley 685 de 2001 consagra que los minerales son de exclusiva propiedad del Estado. El derecho minero nace con la inscripción del Contrato de Concesión en el RMN tras agotar los requisitos de ley.',
    scientificReference: 'Ley 685 de 2001 - Código de Minas de Colombia.'
  },
  {
    id: 'fe-42',
    moduleCode: 'MOD-11',
    category: 'Normativa & Legal',
    question: '¿Qué documento oficial expedido por la Agencia Nacional de Minería (ANM) es obligatorio para movilizar legalmente cualquier lote de esmeraldas dentro del territorio nacional?',
    options: [
      'Una factura de tienda de barrio',
      'La Guía de Transporte Minero con código QR verificable en la plataforma de la ANM, vinculada a un titular de RUCOM activo',
      'Una carta informal del alcalde municipal',
      'Un carné de socio de un club de tiro'
    ],
    correctAnswer: 1,
    explanation: 'La Guía de Transporte Minero emitida por la ANM acredita la procedencia lícita de los minerales durante su transporte. Debe incluir el número de RUCOM, origen del título, peso exacto en quilates/gramos y vigencia en horas.',
    scientificReference: 'Resolución ANM 361 de 2018 - Guías de Transporte de Minerales.'
  },
  {
    id: 'fe-43',
    moduleCode: 'MOD-11',
    category: 'Normativa & Legal',
    question: '¿Cuáles son los 5 pasos fundamentales establecidos en la Guía de Debida Diligencia de la OCDE para cadenas de suministro responsables de minerales?',
    options: [
      '1. Comprar, 2. Tallar, 3. Pulir, 4. Vender, 5. Cobrar',
      '1. Establecer sistemas de gestión de empresa, 2. Identificar y evaluar riesgos en la cadena, 3. Diseñar e implementar respuesta al riesgo, 4. Auditoría independiente de tercera parte, 5. Informar públicamente sobre debida diligencia',
      '1. Extraer con mercurio, 2. Evadir aduanas, 3. Pagar en efectivo, 4. Cambiar certificados, 5. Ocultar origen',
      '1. Firmar contrato, 2. Viajar a Suiza, 3. Abrir cuenta, 4. Subastar, 5. Gastar dividendos'
    ],
    correctAnswer: 1,
    explanation: 'Los 5 pasos de la OCDE constituyen el estándar mundial contra el financiamiento de conflictos armados, trabajo infantil y lavado de activos en el comercio internacional de gemas y minerales preciosos.',
    scientificReference: 'OECD Due Diligence Guidance for Responsible Supply Chains (Third Edition, 2016).'
  },
  {
    id: 'fe-44',
    moduleCode: 'MOD-11',
    category: 'Normativa & Legal',
    question: 'Bajo la regulación ambiental colombiana, ¿qué instrumento técnico es de cumplimiento obligatorio antes de iniciar la etapa de explotación minera subterránea?',
    options: [
      'Una encuesta telefónica a los vecinos',
      'El Estudio de Impacto Ambiental (EIA) aprobado por la Corporación Autónoma Regional (Corpoboyacá o CAR) y la obtención de la Licencia Ambiental formal',
      'Una donación de balones a la escuela de fútbol',
      'Una promesa verbal de reforestación futura'
    ],
    correctAnswer: 1,
    explanation: 'El Contrato de Concesión Minera confiere el título pero no permite explotar hasta obtener la Licencia Ambiental aprobada por la autoridad ambiental competente (Corpoboyacá o CAR) tras evaluar el EIA.',
    scientificReference: 'Decreto 1076 de 2015 - Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.'
  },

  // --- MÓDULO 12: Emprendimiento e Innovación ---
  {
    id: 'fe-45',
    moduleCode: 'MOD-12',
    category: 'Innovación & Emprendimiento',
    question: '¿Qué ventaja estructural ofrece el modelo Direct-to-Consumer (D2C) para un taller o cooperativa minera de esmeraldas en Boyacá?',
    options: [
      'Permite evadir el pago de regalías mineras a la ANM',
      'Desintermedia la cadena comercial tradicional de 6-8 niveles, capturando mayor margen de valor y transmitiendo trazabilidad y ética directa al comprador final',
      'Permite comercializar piedras sintéticas como naturales',
      'Elimina la necesidad de utilizar reportes de laboratorio'
    ],
    correctAnswer: 1,
    explanation: 'El modelo D2C conecta directamente al creador/productor con el comprador global mediante plataformas seguras, reteniendo el valor económico en la región y garantizando autenticidad total.',
    scientificReference: 'Cartier, L. E., & Ali, S. H. (2012). Resources Policy, 37(4).'
  },
  {
    id: 'fe-46',
    moduleCode: 'MOD-12',
    category: 'Innovación & Emprendimiento',
    question: '¿Cómo funciona la tecnología de trazabilidad física "Emerald Paternity Test" desarrollada por el laboratorio Gübelin?',
    options: [
      'Inyecta ADN humano en el cristal para identificar a los trabajadores',
      'Aplica nanopartículas sintéticas a base de sílice con secuencias de ADN codificadas en las fisuras del cristal en la mina, resistentes al facetado, pulido y decapado ácido',
      'Pinta un número con marcador indeleble en la corona',
      'Graba un código de barras visible a simple vista que cubre la tabla'
    ],
    correctAnswer: 1,
    explanation: 'Las nanopartículas de sílice contienen una secuencia de ADN sintético que identifica la mina y el año. Penetran en las microfisuras en bruto y resisten todas las etapas lapidarias, pudiendo ser leídas por PCR en laboratorio.',
    scientificReference: 'Gübelin, R., & Cartier, L. E. (2018). InColor Magazine.'
  },
  {
    id: 'fe-47',
    moduleCode: 'MOD-12',
    category: 'Innovación & Emprendimiento',
    question: '¿Qué papel cumple la Inteligencia Artificial (Machine Learning) en el análisis espectroscópico FTIR de esmeraldas?',
    options: [
      'Crea esmeraldas de vidrio en impresoras 3D',
      'Clasifica y detecta de forma automatizada y reproducible patrones ultra-sutiles de absorción de enlaces C-H (2800-3000 cm⁻¹) característicos de resinas epóxicas artificiales',
      'Reemplaza al computador por un teléfono de disco',
      'Acelera la desintegración del berilio'
    ],
    correctAnswer: 1,
    explanation: 'Los modelos de Machine Learning entrenados con miles de espectros identifican micro-picos de polímeros orgánicos artificiales con mayor velocidad y menor margen de error que el análisis visual manual sobre espectros ruidosos.',
    scientificReference: 'Krzemnicki, M. S., & Wang, H. A. O. (2021). The Journal of Gemmology.'
  },
  {
    id: 'fe-48',
    moduleCode: 'MOD-12',
    category: 'Innovación & Emprendimiento',
    question: '¿Qué dos farallones sedimentarios colosales en el cañón del Río Minero en Muzo constituyen el mayor hito geológico, cultural y ecoturístico del Cinturón Occidental?',
    options: [
      'El Morro de Moravia y Monserrate',
      'Los picachos de Fura y Tena, farallones de más de 500 metros de roca sedimentaria del Cretácico atravesados por vetas hidrotermales',
      'La Piedra del Peñol y el Pan de Azúcar',
      'Los Farallones de Cali'
    ],
    correctAnswer: 1,
    explanation: 'Fura y Tena son dos colosales farallones de roca sedimentaria cretácica que se elevan sobre el Río Minero en Muzo, íconos de la geología, la mitología prehispánica y el geoturismo sostenible de Boyacá.',
    scientificReference: 'Gómez, J., & Montes, N. E. (2020). Servicio Geológico Colombiano.'
  },
  {
    id: 'fe-49',
    moduleCode: 'MOD-12',
    category: 'Innovación & Emprendimiento',
    question: '¿Cómo transforman las cooperativas y talleres de talla comunitarios la participación de las mujeres seleccionadoras (guaqueras/barequeras)?',
    options: [
      'Prohibiéndoles el ingreso a las instalaciones mineras',
      'Capacitándolas como maestras lapidarias y diseñadoras de joyas de autor, agregando valor local y garantizando retención de ingresos en los hogares',
      'Obligándolas a vender gemas exclusivamente a comisionistas informales',
      'Eliminando el uso de herramientas mecánicas'
    ],
    correctAnswer: 1,
    explanation: 'La capacitación técnica y formalización gremial de las mujeres de las cuencas mineras permite transformar el barequeo marginal en empleo calificado de alta lapidación y orfebrería sostenible con sello de comercio justo.',
    scientificReference: 'Hilson, G., & Eftimie, A. (2019). The Extractive Industries and Society.'
  },
  {
    id: 'fe-50',
    moduleCode: 'MOD-12',
    category: 'Innovación & Emprendimiento',
    question: '¿Qué representa la integración de Pasaportes Digitales Gemológicos respaldados en Blockchain (DPP) para el futuro del comercio de esmeraldas colombianas?',
    options: [
      'Un sistema para no pagar impuestos de exportación',
      'La creación de una huella digital criptográfica inmutable que vincula datos geológicos, reportes de laboratorio independientes y la cadena de custodia auditada desde la mina hasta el comprador',
      'Una aplicación para cambiar el color de las fotos de esmeraldas',
      'Un sustituto que elimina la necesidad de tener gemas físicas'
    ],
    correctAnswer: 1,
    explanation: 'El Pasaporte Digital Gemológico (DPP) garantiza que los datos de laboratorio, las pruebas de tratamiento y la procedencia ética queden grabados de forma inalterable, construyendo confianza absoluta en el mercado de alta joyería mundial.',
    scientificReference: 'Cartier, L. E., et al. (2020). Journal of Gemmology, 37(3).'
  }
];

export const TOTAL_EXAM_QUESTIONS = 50;
export const PASSING_SCORE_PERCENTAGE = 80;
export const PASSING_CORRECT_COUNT = 40; // 40 out of 50
export const EXAM_DURATION_MINUTES = 90;
