/**
 * ESMERALDA INTELIGENTE JAIRRESTAURA
 * Atlas Científico y Fotográfico Gemológico
 * Microfotografía de inclusiones, caracterización de yacimientos, estructuras y tratamientos
 */

import { ScientificAtlasItem } from '../../types/academy';

export const SCIENTIFIC_ATLAS_ITEMS: ScientificAtlasItem[] = [
  // INCLUSIONES FLUIDAS
  {
    id: 'atl-inc-01',
    category: 'inclusiones_fluidas',
    title: 'Inclusión Trifásica Colombiana Típica (Fisura en Dientes de Sierra)',
    scientificName: 'Inclusión multifásica hidrotermal salina primaria',
    chemicalFormula: 'H2O-NaCl-CO2 en cavidad de berilo Be3Al2Si6O18',
    depositOrOrigin: 'Cinturón Esmeraldero Occidental (Muzo / Coscuez)',
    description: 'Cavidad tubular irregular con extremos puntiagudos o en diente de sierra (jagged cavity) que alberga una fase líquida (salmuera acuosa saturada), una burbuja de gas móvil (predominantemente dióxido de carbono CO2) y un microcristal cúbico de sal gema (halita, NaCl).',
    geologicalEnvironment: 'Fluidos hidrotermales salinos de temperatura moderada (290°C a 360°C) atrapados durante la precipitación sinsedimentaria y metasomática del berilo en shales negros del Cretácico.',
    gemologicalSignificance: 'Elemento de diagnóstico microscópico fundamental que indica origen natural hidrotermal salino. Históricamente considerado el sello distintivo de la esmeralda colombiana.',
    diagnosticCaveat: 'ADVERTENCIA CIENTÍFICA: La presencia de una inclusión trifásica NO garantiza de manera absoluta y exclusiva el origen colombiano. Inclusiones multifásicas morfológicamente semejantes han sido documentadas y confirmadas en esmeraldas hidrotermales de Panjshir (Afganistán) y Davdar (Xinjiang, China). El diagnóstico de origen requiere espectroscopia FTIR, Raman y química cuantitativa de elementos traza (LA-ICP-MS).',
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=1200&q=80',
    magnification: '40x a 65x',
    illuminationType: 'Campo oscuro con fibra óptica oblicua',
    sourceCredit: 'Fototeca Gemológica JAIRRESTAURA / Archivo de Investigación Microscópica',
    referenceUrl: 'https://www.gia.edu/gems-gemology'
  },
  {
    id: 'atl-inc-02',
    category: 'inclusiones_fluidas',
    title: 'Inclusiones Bifásicas Secundarias en Planos de Fisioclasa (Velo Líquido)',
    scientificName: 'Planos de curación hidrotermal secundaria con microgotas bifásicas',
    chemicalFormula: 'Salmuera líquida H2O + Burbuja de contracción de vapor',
    depositOrOrigin: 'Chivor / Gachalá (Cinturón Oriental)',
    description: 'Arreglos laminares ondulados que se extienden a lo largo de planos de fractura cicatrizada («huellas dactilares» o «fingerprints»), compuestos por miríadas de diminutas inclusiones bifásicas con glóbulo gaseoso central.',
    geologicalEnvironment: 'Eventos tectónicos posteriores a la cristalización del prisma de berilo donde microfracturas fueron penetradas por pulsos de fluidos tardíos que cristalizaron parcialmente el berilo circundante.',
    gemologicalSignificance: 'Permite confirmar la naturaleza natural de la gema frente a esmeraldas sintéticas hidrotermales rusas (Biron/Tairus) que muestran estructuras de crecimiento en galón en lugar de cicatrizaciones tectónicas naturales.',
    diagnosticCaveat: 'Planos de velos de sanación también se producen en gemas sintéticas hidrotermales y berilos tratados. Se debe evaluar la tridimensionalidad y la presencia de microhalitas asociadas.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    magnification: '30x a 50x',
    illuminationType: 'Luz transmitida brillante con diafragma iris cerrado',
    sourceCredit: 'GIA Gems & Gemology Reference / Atlas JAIRRESTAURA',
    referenceUrl: 'https://www.gia.edu'
  },
  {
    id: 'atl-inc-03',
    category: 'inclusiones_fluidas',
    title: 'Tubos de Crecimiento en Embudo Paralelos al Eje Óptico c',
    scientificName: 'Canales huecos primarios de crecimiento acicular orientados según [0001]',
    chemicalFormula: 'Canales cilíndricos en matriz de berilo',
    depositOrOrigin: 'Peñas Blancas / Otanche (Boyacá)',
    description: 'Tubos capilares finos y alargados que corren rigurosamente paralelos al eje cristalográfico c. Frecuentemente presentan terminaciones ensanchadas en forma de embudo que retienen fluidos residuales.',
    geologicalEnvironment: 'Crecimiento cristalino rápido bajo gradientes locales de sobre-saturación donde defectos puntuales de dislocación helicoidal impiden el relleno continuo de la red cristalina.',
    gemologicalSignificance: 'Permite al lapidario identificar al instante la orientación del eje óptico antes de orientar la tabla de la talla, maximizando el dicroísmo verde esmeralda más puro.',
    diagnosticCaveat: 'Tubos paralelos también ocurren en esmeraldas de Brasil (Santa Terezinha de Goiás) y Zambia (Kafubu). Su orientación sola no prueba país de procedencia.',
    imageUrl: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=1200&q=80',
    magnification: '25x a 40x',
    illuminationType: 'Luz polarizada cruzada con compensador de cuarzo',
    sourceCredit: 'Laboratorio CDTEC Bogotá / Documentación JAIRRESTAURA',
    referenceUrl: 'https://cdtec.com.co'
  },

  // INCLUSIONES SÓLIDAS
  {
    id: 'atl-sol-01',
    category: 'inclusiones_solidas',
    title: 'Microcristales Euhedrales de Pirita Dorada',
    scientificName: 'Disulfuro de hierro (Pirita isométrica)',
    chemicalFormula: 'FeS2',
    depositOrOrigin: 'Distrito Minero de Chivor (Boyacá)',
    description: 'Cristales idiomorfos de pirita con brillo metálico reluciente, que exhiben hábitos cúbicos, octaédricos y piritoédricos perfectos embebidos en la masa vítrea verde de la esmeralda.',
    geologicalEnvironment: 'Formación sedimentaria evaporítica rica en azufre y hierro donde fluidos hidrotermales precipitaron sulfuros antes y coetáneamente con el berilo cromífero.',
    gemologicalSignificance: 'Altamente característico de las esmeraldas del cinturón oriental (Chivor, San Juan de Gachetá, Ubalá). En ocasiones se acompaña de cristales de albita tabular.',
    diagnosticCaveat: 'Aunque la pirita es muy frecuente en Chivor, también se encuentra ocasionalmente en esmeraldas de Muzo y en depósitos metamórficos extranjeros. Debe evaluarse junto a la presencia de albita y el espectro de absorción bajo en hierro férrico.',
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80',
    magnification: '20x a 45x',
    illuminationType: 'Iluminación reflejada superficial combinada con campo oscuro',
    sourceCredit: 'Colección Mineralógica Nacional / Atlas JAIRRESTAURA',
    referenceUrl: 'https://www.mindat.org/min-3314.html'
  },
  {
    id: 'atl-sol-02',
    category: 'inclusiones_solidas',
    title: 'Prismas Aciculares y Cristales Pardos de Parisita-(Ce)',
    scientificName: 'Fluorocarbonato de calcio y tierras raras de cerio',
    chemicalFormula: 'Ca(Ce,La)2(CO3)3F2',
    depositOrOrigin: 'Muzo / Coscuez (Especie tipo descubierta en Muzo)',
    description: 'Cristales prismáticos hexagonales y agujas alargadas de color pardo-amarillento a canela rojizo, a menudo estriados horizontalmente, asociados a agregados de calcita espática.',
    geologicalEnvironment: 'Fase hidrotermal metasomática en lutitas negras ricas en elementos de tierras raras (REE) movilizados por salmueras ácidas a alta presión.',
    gemologicalSignificance: 'La parisita fue descubierta formalmente en las minas de esmeraldas de Muzo por J.J. Paris en 1835. Su presencia es un biomarcador mineralógico de fuertísima correlación con el cinturón esmeraldero occidental colombiano.',
    diagnosticCaveat: 'Aunque extremadamente rara fuera de Colombia en esmeraldas, se requiere identificación cristalográfica o micro-Raman, ya que agujas de rutilo o anfíboles en esmeraldas africanas pueden confundir al observador inexperto.',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    magnification: '35x a 70x',
    illuminationType: 'Campo oscuro con luz polarizada parcial',
    sourceCredit: 'Smithsonian Gem Collection / Documentos Históricos de Muzo',
    referenceUrl: 'https://www.mindat.org/min-3121.html'
  },
  {
    id: 'atl-sol-03',
    category: 'inclusiones_solidas',
    title: 'Romboedros de Calcita Espática y Bitumen Carbonoso',
    scientificName: 'Carbonato de calcio y materia orgánica bitumen en lutita',
    chemicalFormula: 'CaCO3 + Hidrocarburos complejos aromáticos C-H-O',
    depositOrOrigin: 'Coscuez / La Pita (Boyacá)',
    description: 'Cristales romboédricos de calcita lechosa o transparente intercrecidos con velos negruzcos de bitumen orgánico y partículas microgranulares de lutita carbonosa que forman el característico «jardín» colombiano.',
    geologicalEnvironment: 'Reacciones de descarbonatación y reducción hidrotermal de sulfatos donde la materia orgánica sedimentaria actúa como agente reductor primordial de los fluidos mineralizantes.',
    gemologicalSignificance: 'Explica la fragilidad estructural de la gema frente a presiones de engaste y orienta las decisiones del maestro lapidario para ubicar fisuras perpendiculares al plano de choque.',
    diagnosticCaveat: 'Calcita y cuarzo existen en múltiples minerales. En gemas sintéticas hidrotermales rusas no se forman romboedros de calcita natural ni bitumen fósil de lutita.',
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=1200&q=80',
    magnification: '25x a 50x',
    illuminationType: 'Luz transmitida con filtro difusor opalino',
    sourceCredit: 'Archivo Técnico JAIRRESTAURA',
    referenceUrl: 'https://cdtec.com.co'
  },

  // ESTRUCTURAS DE CRECIMIENTO
  {
    id: 'atl-est-01',
    category: 'estructuras_crecimiento',
    title: 'Esmeralda Trapiche: Núcleo Hexagonal con Seis Brazos Radiales',
    scientificName: 'Macla y crecimiento sectorial esqueletal de berilo con partición carbonosa',
    chemicalFormula: 'Be3Al2Si6O18 con inclusiones interradiales de lutita bituminosa',
    depositOrOrigin: 'Muzo, Coscuez y Peñas Blancas (Exclusividad Geológica Colombiana)',
    description: 'Estructura geométrica extraordinaria compuesta por un núcleo prismático hexagonal central del cual irradian seis brazos o sectores triangulares de berilo verde translúcido, delimitados por tabiques oscuros de lutita carbonosa y albita.',
    geologicalEnvironment: 'Crecimiento cristalino episódico de alta velocidad en una matriz plástica de lutita durante descompresiones tectónicas bruscas que generaron sobre-saturación rítmica.',
    gemologicalSignificance: 'Una de las maravillas de la mineralogía mundial. Debe su nombre al «trapiche», molino tradicional de molienda de caña de azúcar de seis engranajes de madera.',
    diagnosticCaveat: 'No confundir con zafiros o rubíes trapiche de Myanmar y Vietnam (que tienen simetría trigonal y rutilo) ni con dobles pegados artificiales. Las esmeraldas trapiche genuinas son policristalinas pero con coherencia cristalográfica.',
    imageUrl: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=80',
    magnification: '10x a 25x o inspección macroscópica',
    illuminationType: 'Luz difusa superior perpendicular a la base basal (0001)',
    sourceCredit: 'Museo de la Esmeralda Bogotá / Colección de Gemología JAIRRESTAURA',
    referenceUrl: 'https://www.gia.edu/gems-gemology/spring-1995-trapiche-emeralds-colombia'
  },
  {
    id: 'atl-est-02',
    category: 'estructuras_crecimiento',
    title: 'Zonación Oscilatoria de Color (Bandas de Cromo y Vanadio)',
    scientificName: 'Zonación sectorial y de quimiotaxonomía paralela a caras prismáticas {10-10}',
    chemicalFormula: 'Gradientes locales Cr3+ / V3+ / Fe2+',
    depositOrOrigin: 'Muzo / Peñas Blancas',
    description: 'Bandas paralelas alternas de mayor y menor intensidad verde que siguen estrictamente las caras prismáticas del cristal de berilo, reflejando pulsos de concentración química durante el crecimiento.',
    geologicalEnvironment: 'Flujos hidrotermales pulsantes donde episodios de fracturamiento hidráulico renovaban la concentración de cromo lixiviado de las rocas de caja.',
    gemologicalSignificance: 'Crucial para la orientación de la talla: el lapidario debe concentrar las zonas de verde más saturado en el culatín o pabellón para enriquecer el tono visual en la tabla.',
    diagnosticCaveat: 'Las esmeraldas sintéticas hidrotermales presentan bandas en ángulo chevron o espiga distintivas que nunca se confunden con la geometría hexagonal recta natural.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    magnification: '15x a 30x con inmersión en benzoato de bencilo',
    illuminationType: 'Célula de inmersión gemológica horizontal con luz polarizada',
    sourceCredit: 'GIA Research / Atlas JAIRRESTAURA',
    referenceUrl: 'https://www.gia.edu'
  },

  // YACIMIENTOS
  {
    id: 'atl-yac-01',
    category: 'yacimientos',
    title: 'Distrito Minero de Muzo: Shales Negros y Brechas Hidrotermales',
    scientificName: 'Formación Paja y Formación Rosablanca (Cretácico Inferior)',
    chemicalFormula: 'Rocas sedimentarias marinas pelíticas carbonosas fracturadas',
    depositOrOrigin: 'Muzo, Cuenca de la Cordillera Oriental (Boyacá)',
    description: 'Afloramiento geológico de lutitas negras laminadas, atravesadas por densas redes de vetillas hidrotermales de calcita espática blanca, dolomita, pirita y cuarzo que albergan las cavidades miarolíticas de esmeralda.',
    geologicalEnvironment: 'Cuenca tectónica extensiva invertida compresivamente durante la orogenia andina, con salmueras de basamento a 300°C interactuando con materia orgánica.',
    gemologicalSignificance: 'Foco histórico mundial del color «verde Muzo» aterciopelado con ligero matiz amarillento y saturación insuperable debido al alto ratio Cr3+/V3+ y bajísimo hierro.',
    diagnosticCaveat: 'El color no es certificado de origen. Esmeraldas con aspecto «tipo Muzo» pueden provenir de Coscuez, Peñas Blancas o yacimientos de Zambia de alta pureza.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    sourceCredit: 'Servicio Geológico Colombiano / Federación Nacional de Esmeraldas',
    referenceUrl: 'https://www.sgc.gov.co'
  },
  {
    id: 'atl-yac-02',
    category: 'yacimientos',
    title: 'Distrito Minero de Chivor: Cuenca Oriental de Alto Dicroísmo',
    scientificName: 'Formación Macanal / Formación Las Juntas',
    chemicalFormula: 'Shales grises, areniscas calcáreas e intercalaciones evaporíticas',
    depositOrOrigin: 'Chivor / San Luis de Gabor (Boyacá)',
    description: 'Topografía andina escarpada del flanco este de la Cordillera Oriental donde las esmeraldas se alojan en mantos de brecha tectónica con abundante albita, cuarzo prismático y pirita metálica.',
    geologicalEnvironment: 'Ambiente hidrotermal salino asociado a fallas inversas regionales con presencia de evaporitas marinas que aportaron sodio y cloro a los fluidos mineralizantes.',
    gemologicalSignificance: 'Famosas mundialmente por su tono verde azuloso vivaz («verde Chivor»), altísima transparencia cristalina y cristales prismáticos birrefringentes muy limpios.',
    diagnosticCaveat: 'No todas las esmeraldas de Chivor son azuladas ni están libres de inclusiones. Las inclusiones de pirita cúbica son un excelente indicio pero deben correlacionarse con la geología estructural.',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    sourceCredit: 'Archivo Técnico de Minería Chivor / JAIRRESTAURA',
    referenceUrl: 'https://www.anm.gov.co'
  },
  {
    id: 'atl-yac-03',
    category: 'yacimientos',
    title: 'Distrito de Coscuez: Estructura de «Las Ruedas» y Alto Rendimiento',
    scientificName: 'Complejo sedimentario de la Formación Rosablanca y Paja',
    chemicalFormula: 'Brechas de disolución hidrotermal carbonatadas',
    depositOrOrigin: 'Coscuez (San Pablo de Borbur, Boyacá)',
    description: 'Yacimiento caracterizado por cuerpos brechosos de colapso hidrotermal extremadamente ricos en carbonatos, donde los prismas de berilo aparecen en agregados radiales y cristales individuales de excepcional brillo.',
    geologicalEnvironment: 'Pulsos múltiples de fluidos a alta presión con precipitación masiva de calcita que amortiguaron los esfuerzos tectónicos preservando cristales de gran tamaño.',
    gemologicalSignificance: 'Históricamente responsable de más del 60% del volumen comercial producido en el occidente de Boyacá, célebre por cristales con tonos verde hierba cálidos y excelente vida óptica.',
    diagnosticCaveat: 'La frontera geológica entre Muzo y Coscuez comparte formaciones idénticas; distinguir analíticamente entre Muzo y Coscuez requiere espectroscopia de absorción UV-Vis-NIR y LA-ICP-MS de alta precisión.',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    sourceCredit: 'Minas de Coscuez / Archivo Histórico Gemológico JAIRRESTAURA',
    referenceUrl: 'https://cdtec.com.co'
  },

  // INSTRUMENTOS
  {
    id: 'atl-ins-01',
    category: 'instrumentos',
    title: 'Refractómetro Gemológico con Líquido de Inmersión de Alto Índice',
    scientificName: 'Medición de refracción total interna crítica (Ángulo límite)',
    chemicalFormula: 'Líquido de Anderson (Yoduro de metileno saturado con azufre n=1.81)',
    depositOrOrigin: 'Laboratorio de Gemología Clásica',
    description: 'Instrumento óptico provisto de un hemicilindro de vidrio de alto índice o prisma de titanato de estroncio, escala graduada de 1.300 a 1.810 y filtro de luz monocromática de sodio (589 nm).',
    geologicalEnvironment: 'Técnica física no destructiva estándar internacional.',
    gemologicalSignificance: 'Determina con precisión el índice de refracción ordinario (no ≈ 1.577 a 1.583) y extraordinario (ne ≈ 1.571 a 1.577), estableciendo una birrefringencia uniaxial negativa constante de Δn = 0.005 a 0.007.',
    diagnosticCaveat: 'Gemas de índice muy similar como el berilo verde no cromífero, apatita o dobles sintéticos requieren prueba de dicroísmo y espectroscopia para confirmar especie.',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    sourceCredit: 'Manual de Prácticas Gemológicas JAIRRESTAURA',
    referenceUrl: 'https://www.gia.edu/gem-tools'
  },
  {
    id: 'atl-ins-02',
    category: 'instrumentos',
    title: 'Espectroscopio Gemológico de Difracción y Espectro de Cromo',
    scientificName: 'Espectroscopia óptica de absorción electrónica visible (400-700 nm)',
    chemicalFormula: 'Transiciones de campo ligando del ion Cr3+ octaédrico',
    depositOrOrigin: 'Análisis Espectral de Laboratorio',
    description: 'Tubo óptico con red de difracción holográfica o prismas Amici en tándem que descompone la luz transmitida a través de la esmeralda, revelando las bandas características de absorción atómica.',
    geologicalEnvironment: 'Interacción de fotones visibles con orbitales 3d del ion de cromo trivalente que sustituye al aluminio en la posición octaédrica del berilo.',
    gemologicalSignificance: 'Muestra el diagnóstico infalible de la esmeralda: doblete fino de emisión/absorción en el rojo profundo a 683 nm y 680 nm, líneas débiles a 662 y 646 nm, y una banda ancha de absorción en el amarillo-verde alrededor de 600 nm.',
    diagnosticCaveat: 'Si la gema está coloreada exclusivamente por vanadio (V3+) sin cromo detectable (como algunas esmeraldas de Salininha o berilos vanadíferos), el doblete fino de 683 nm puede estar ausente. En Colombia el cromo siempre acompaña al vanadio.',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
    sourceCredit: 'Laboratorio Espectroscópico JAIRRESTAURA',
    referenceUrl: 'https://cdtec.com.co'
  },

  // TALLAS
  {
    id: 'atl-tal-01',
    category: 'tallas',
    title: 'Talla Esmeralda Clásica (Octagonal Escalonada)',
    scientificName: 'Corte rectangular/cuadrado con esquinas truncadas en escalón (Step cut)',
    chemicalFormula: 'Geometría optimizada para berilo frágil por hendidura basal',
    depositOrOrigin: 'Bogotá / Centro Joyero de la Candelaria',
    description: 'Diseño geométrico emblemático compuesto por 57 a 58 facetas dispuestas en hileras concéntricas paralelas al filetín, con 4 chaflanes o esquinas biseladas a 45 grados que mitigan las concentraciones mecánicas de esfuerzo.',
    geologicalEnvironment: 'Desarrollada históricamente para minimizar las pérdidas de peso de los prismas hexagonales de berilo y evitar la fractura de esquinas agudas vulnerables durante el engaste joyero.',
    gemologicalSignificance: 'Resalta el color corporal, la transparencia y el fuego interno sin crear destellos centelleantes que oculten el «jardín» natural de la gema.',
    diagnosticCaveat: 'Un pabellón demasiado plano o bajo genera efecto de ventana (windowing) donde la luz se fuga sin reflejarse hacia el observador. Una culata excesivamente honda oscurece el tono central («extinction»).',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80',
    sourceCredit: 'Gremio de Talladores de Bogotá / Academia JAIRRESTAURA',
    referenceUrl: 'https://cibjo.org'
  },
  {
    id: 'atl-tal-02',
    category: 'tallas',
    title: 'Talla Gota / Pera para Gotas de Rocío y Alta Joyería',
    scientificName: 'Corte mixto facetado en gota con extremo ojival y base semicircular',
    chemicalFormula: 'Adaptación a cristales prismáticos cónicos o fragmentos de fractura',
    depositOrOrigin: 'Talleres de Lapidación Tradicional Colombiana',
    description: 'Elegante contorno asimétrico que combina la redondez de la talla brillante con el extremo agudo de una marquesa, exigiendo al tallador una orientación precisa del eje c para que el color no se acumule en la punta.',
    geologicalEnvironment: 'Aprovecha fragmentos naturales de cristales que sufrieron microfracturación en mina, salvando quilataje con el máximo valor comercial.',
    gemologicalSignificance: 'Silueta predilecta para aretes colgantes, dijes y piezas centrales de collares de alta gama.',
    diagnosticCaveat: 'El extremo agudo es la zona de mayor vulnerabilidad al astillamiento mecánico durante el engaste. Requiere uña en V (chevrón) protectora en la joya.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
    sourceCredit: 'Taller Experimental Lapidario JAIRRESTAURA',
    referenceUrl: 'https://cibjo.org'
  }
];
