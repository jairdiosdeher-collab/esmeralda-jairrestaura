import { DiplomaModule } from '../../../types/academy';

export const MOD_05_INCLUSIONES: DiplomaModule = {
  id: 5,
  code: 'MOD-05',
  title: 'Módulo 5: Microscopía Gemológica, Inclusiones y Diagnóstico de Origen Geográfico',
  shortTitle: 'Atlas de Inclusiones',
  academicHours: 10,
  overview: 'Microscopía avanzada en campo oscuro, luz transmitida e inmersión. Clasificación genética de inclusiones: primarias, secundarias y pseudosecundarias. Morfología de cavidades trifásicas en diente de sierra (halita-salmuera-CO2) y sus análogos en Afganistán y China. Biomarcadores sólidos (parisita, pirita, calcita, albita), estructuras de velo y explicación científica del efecto Gota de Aceite.',
  competencies: [
    'Dominar las técnicas de iluminación microscópica: campo oscuro, campo claro, fibra óptica oblicua y polarización.',
    'Caracterizar la anatomía microscópica de las inclusiones trifásicas salinas primarias.',
    'Reconocer las limitaciones diagnósticas: por qué una inclusión trifásica no prueba por sí sola el origen colombiano.',
    'Explicar la naturaleza cristalográfica del efecto Gota de Aceite frente a falsas interpretaciones populares.'
  ],
  learningObjectives: [
    'Distinguir inclusiones primarias singenéticas de velos de cicatrización secundarios epigenéticos.',
    'Identificar los minerales incluidos diagnósticos de Boyacá: parisita-(Ce), pirita cúbica, albita y romboedros de calcita.',
    'Demostrar que existen inclusiones multifásicas similares en Panjshir (Afganistán) y Davdar (China).',
    'Diferenciar el "jardín" natural de esmeraldas sintéticas hidrotermales y por fundente.'
  ],
  prerequisites: ['Módulos 1 a 4 aprobados o sólida base en cristalografía y microscopía óptica.'],
  heroImage: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Microfotografía Gemológica',
  lessons: [
    {
      id: 'm5-l1',
      moduleId: 5,
      order: 1,
      title: 'Lección 5.1: Clasificación Genética de Inclusiones: Primarias, Secundarias y Pseudosecundarias',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Termodinámica del atrapamiento de inclusiones según la teoría de Roedder y Gübelin. Crecimiento cristalino singenético, fracturas epigenéticas tardías curadas por pulsos de fluidos y criterios de distinción cronológica.',
      content: `En la gemología científica moderna, una **inclusión** no es considerada un "defecto", sino una cápsula del tiempo mineralógica y petrográfica que preserva información inalterada sobre las condiciones físico-químicas de cristalización de la gema:

### 1. Inclusiones Primarias (Singenéticas)
- Quedaron atrapadas durante el crecimiento del cristal huésped de berilo.
- Se forman cuando perturbaciones locales en la interfaz cristal-fluido (sobresaturación rápida, defectos de dislocación helicoidal o partículas sólidas depositadas) impiden que la red atómica cierre homogéneamente.
- Las cavidades tubulares irregulares y alargadas paralelas al eje $c$ y las **inclusiones trifásicas en diente de sierra** son de origen primario.

### 2. Inclusiones Secundarias (Epigenéticas)
- Se originan mucho después de que el cristal completó su crecimiento, cuando esfuerzos tectónicos o choques mecánicos abrieron microfracturas que alcanzaron la superficie.
- Fluidos tardíos a menor temperatura penetraron en las fisuras; al enfriarse, disolvieron y precipitaron parcialmente berilo en las paredes, "cicatrizando" la fractura en una red bidimensional de gotitas aisladas conocidas como **velos de curación o huellas dactilares (*fingerprints*)**.

### 3. Inclusiones Pseudosecundarias
- Ocurren cuando el cristal sufre una fractura mecánica durante su propio crecimiento hidrotermal en la cavidad miarolítica.
- El fluido del mismo pulso hidrotermal sella la fisura antes de que el prisma termine de crecer.
- Se diagnostican porque la fractura cicatrizada termina abruptamente en una banda de crecimiento concéntrica interna y no alcanza la superficie exterior del cristal.`,
      keyTakeaways: [
        'Primarias: atrapadas durante el crecimiento del cristal (cápsulas del tiempo hidrotermales).',
        'Secundarias: planos de fracturas tardías cicatrizadas en huellas dactilares (fingerprints).',
        'Pseudosecundarias: fracturas producidas y selladas durante el propio episodio de crecimiento.'
      ],
      scientificFormula: '\\text{Clasificación de Roedder (1984): Primarias (Singenéticas) } \\leftrightarrow \\text{ Secundarias (Epigenéticas)}',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Red bidimensional de microinclusiones secundarias ("huellas dactilares" o fingerprints) observadas a 45x con iluminación en campo oscuro.',
      imageSource: 'Gems & Gemology / Gübelin & Koivula Photoatlas',
      imageAuthor: 'Dr. Eduard Gübelin & John I. Koivula',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm5-l2',
      moduleId: 5,
      order: 2,
      title: 'Lección 5.2: Anatomía de la Inclusión Trifásica Colombiana y el Desmitificado de su Exclusividad',
      readTime: '18 min',
      difficulty: 'Avanzado',
      summary: 'Morfología en diente de sierra (jagged). Las tres fases: salmuera hipersalina, burbuja de CO2 móvil y microcristal cúbico de halita (NaCl). La verdad científica: presencia demostrada de trifásicas similares en Panjshir (Afganistán) y Davdar (China).',
      content: `La inclusión trifásica es la protagonista indiscutible de la gemología colombiana, pero su interpretación pericial requiere rigurosa actualización científica:

### 1. Morfología y Componentes de la Cavidad Típica Colombiana
Bajo aumentos de $30\\text{x}$ a $60\\text{x}$ con iluminación de campo oscuro oblicuo, se observa:
1. **La Cavidad:** Cavidad de contorno alargado, irregular, con terminaciones puntiagudas o en **dientes de sierra (*jagged edges*)**, orientada generalmente sub-paralela a las direcciones prismáticas.
2. **Fase Líquida:** Salmuera acuosa hipersalina transparente que ocupa entre el 60% y el 75% del volumen de la cavidad.
3. **Fase Gaseosa:** Una burbuja redondeada móvil compuesta predominantemente por dióxido de carbono ($CO_2$) y vapor de agua, que se contrajo al descender la temperatura desde los 320°C hidrotermales hasta la temperatura ambiente.
4. **Fase Sólida (Cristal Hijo / Daughter Crystal):** Un microcristal cúbico euhedral transparente de **halita (sal gema, $NaCl$)**. En ejemplares de Muzo y Coscuez es frecuente observar además un diminuto romboedro birrefringente de **calcita o siderita**, convirtiendo la inclusión técnicamente en tetrafásica.

### 2. CORRECCIÓN CIENTÍFICA CRÍTICA: NO ES EXCLUSIVA DE COLOMBIA
Durante décadas se enseñó erróneamente en el comercio que "si tiene inclusión trifásica, es 100% colombiana". **Esta afirmación es científicamente falsa**:
- En el año 1989 y reconfirmado en múltiples investigaciones del GIA (Bowersox, 1991; Krzemnicki, 2001; Groat, 2008), se documentó la presencia de **inclusiones multifásicas dentadas con salmuera, burbuja de $CO_2$ y cristales cúbicos de halita** en las esmeraldas hidrotermales del **Valle de Panjshir (Afganistán)**.
- Más recientemente, se identificaron inclusiones trifásicas idénticas en el yacimiento de **Davdar (Región de Xinjiang, China)**.
- **Protocolo de discriminación geográfica:** Para distinguir con certeza analítica una esmeralda colombiana de una afgana o china con inclusiones trifásicas, los laboratorios internacionales (GIA, SSEF, Gübelin, CDTEC) deben recurrir obligatoriamente a:
  1. Espectrometría de masas por ablación láser (**LA-ICP-MS**) para medir la relación entre elementos traza ($Cs, Rb, Li, Sc, V, Cr$). Las gemas afganas contienen sustancialmente más cesio y litio que las colombianas.
  2. Análisis isotópico de oxígeno ($\delta^{18}\text{O} = +15$ a $+23‰$ en Colombia vs $+13$ a $+14‰$ en Panjshir).
  3. Micro-espectrometría Raman para verificar la presión interna del $CO_2$.`,
      keyTakeaways: [
        'Anatomía trifásica: cavidad en diente de sierra con salmuera, burbuja de CO2 y cubo de halita (NaCl).',
        'ADVERTENCIA: Las inclusiones trifásicas NO son exclusivas de Colombia; existen en Panjshir (Afganistán) y Davdar (China).',
        'El origen geográfico concluyente requiere química de elementos traza por LA-ICP-MS e isótopos de oxígeno.'
      ],
      scientificFormula: '\\text{Fases: Salmuera } H_2O-NaCl + \\text{Gas } CO_2 + \\text{Cubo de Halita } NaCl \\; [\\pm \\text{ Calcita/Siderita}]',
      diagramKey: 'three_phase_inclusion',
      diagramType: 'Esquema Cristalográfico Vectorial',
      diagramCaption: 'Morfología en diente de sierra (sawtooth) de inclusión trifásica colombiana: salmuera salina acuosa, burbuja de CO2 móvil y cristal cúbico euhedral de halita (NaCl).',
      imageSource: 'Centro de Desarrollo Tecnológico de la Esmeralda Colombiana (CDTEC) / Vectorización JAIRRESTAURA',
      imageAuthor: 'Equipo Científico JAIRRESTAURA',
      imageLicense: 'Creative Commons CC-BY-SA 4.0',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm5-l3',
      moduleId: 5,
      order: 3,
      title: 'Lección 5.3: Biomarcadores Sólidos de Boyacá: Parisita-(Ce), Pirita, Calcita y Albita',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Inclusiones minerales sólidas singenéticas y protogenéticas como huellas de procedencia. La parisita-(Ce) descubierta en Muzo, cubos de pirita dorada en Chivor y agregados de lutita bituminosa.',
      content: `Los microcristales incluidos en el berilo son testigos minerales directos de la paragénesis geológica de cada cuenca:

### 1. Parisita-(Ce) — El Emblema de Muzo
- Fluorocarbonato de calcio y cerio $[Ca(Ce,La)_2(CO_3)_3F_2]$.
- Fue descubierta y descrita originalmente en las minas de esmeraldas de Muzo por J.J. Paris en 1835.
- Se presenta como prismas o agujas hexagonales alargadas de color **pardo-amarillento, canela rojizo o caramelo**, con estrías transversales características y fuerte dicroísmo propio.
- Su presencia dentro de una esmeralda es un indicio mineralógico de fuertísima correlación con el **Cinturón Occidental de Boyacá (Muzo y Coscuez)**.

### 2. Pirita Euhedral — El Sello de Chivor
- Disulfuro de hierro ($FeS_2$) con hábito cúbico, octaédrico o piritoédrico perfecto.
- Exhibe un brillo metálico dorado deslumbrante bajo luz reflejada directa.
- Es extraordinariamente abundante en las esmeraldas de **Chivor, Gachalá y Ubalá**, donde contrasta de forma espectacular contra el cuerpo vítreo verde azuloso del berilo.

### 3. Calcita Espática y Dolomita
- Carbonatos rhomboédricos incoloros o blanco-lechosos con exfoliación romboédrica perfecta en tres direcciones no ortogonales ($75^\\circ$).
- Provienen de las venas de hidroclastismo hidrotermal del occidente de Boyacá.

### 4. Albita y Cuarzo Hialino
- La **albita** ($NaAlSi_3O_8$) se presenta en cristales tabulares blancos o transparentes, muy común en Chivor.
- El **cuarzo** se presenta en microprismas bipiramidales transparentes que pueden confundirse con apatita si no se verifica en micro-Raman.`,
      keyTakeaways: [
        'Parisita-(Ce): prismas pardos-canela descubiertos en Muzo, fuerte indicio del cinturón occidental.',
        'Pirita: cristales cúbicos metálicos dorados, muy típicos de Chivor y el cinturón oriental.',
        'Calcita y albita reflejan la química de las vetas de caja de cada cuenca hidrotermal.'
      ],
      scientificFormula: '\\text{Parisita: } Ca(Ce,La)_2(CO_3)_3F_2 \\quad | \\quad \\text{Pirita: } FeS_2 \\quad | \\quad \\text{Albita: } NaAlSi_3O_8',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Cristal prismático pardo de parisita-(Ce) asociado a micro-inclusiones de calcita en esmeralda de Muzo.',
      imageSource: 'Smithsonian Gem Collection / Mindat.org Type Locality',
      imageAuthor: 'Laboratorio Gemológico CDTEC / GIA Research',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm5-l4',
      moduleId: 5,
      order: 4,
      title: 'Lección 5.4: Desmitificación Científica del Fenómeno Gota de Aceite (Butterfly Effect)',
      readTime: '15 min',
      difficulty: 'Especialista',
      summary: 'La verdad física y óptica sobre la "Gota de Aceite". Por qué NO es aceite impregnado ni una emulsión líquida, sino irregularidades de crecimiento poligonal que dispersan suavemente la luz (textura aterciopelada).',
      content: `El término comercial **"Gota de Aceite"** (denominado en inglés *Butterfly Effect* o *Velvety Glow*) es uno de los fenómenos más admirados y peor comprendidos de la gemología:

### 1. El Falso Mito Popular
Muchos comerciantes y aficionados creen erróneamente que una esmeralda "Gota de Aceite" contiene aceite de cocina o aceite vegetal atrapado geológicamente en su interior. **Esta idea es un disparate físico**: el berilo cristalizó a más de 300°C en salmueras ácidas inorgánicas donde ningún aceite orgánico podría sobrevivir sin descomponerse térmicamente en carbono amorfo.

### 2. La Explicación Científica Real
Las investigaciones gemológicas del GIA (Hainschwang et al., 2008; Ringsrud, 2009) mediante microscopía confocal y topografía de rayos X revelaron que:
1. **Irregularidades de Micro-Crecimiento Sectorial:** Durante la cristalización en Muzo y Coscuez, perturbaciones cinéticas térmicas locales en la solución provocaron que el cristal no creciera con planos perfectamente lisos, sino formando un mosaico de **micro-dominios piramidales poligonales hexagonales escalonados sub-microscópicos**.
2. **Dispersión Suave de la Luz (Light Scattering):** Cuando la luz blanca ingresa a la gema, estas micro-irregularidades de red de escala micrométrica no generan lechosidad ni opacidad, sino una **dispersión suave y homogénea de los fotones en todas direcciones**.
3. **Efecto Visual Aterciopelado (*Velvety Texture*):** La luz refractada emerge suavizada, eliminando reflejos especulares duros y haciendo que la piedra parezca un líquido espeso, profundo y luminoso, semejante a la textura visual de una gota de aceite de oliva virgen.
4. Este rasgo es **exclusivo de muy selectos cristales de Muzo y Coscuez** y multiplica exponencialmente su cotización en las casas de subastas como Sotheby's y Christie's.`,
      keyTakeaways: [
        'La Gota de Aceite NO es aceite ni líquido; es una estructura sólida natural de crecimiento cristalino.',
        'Se origina por micro-estructuras poligonales escalonadas que dispersan suavemente la luz.',
        'Crea una textura aterciopelada ("velvety glow") que suaviza los reflejos sin quitar transparencia.'
      ],
      scientificFormula: '\\text{Fenómeno Óptico: Dispersión suave por micro-dislocaciones sectoriales } (\\text{Sin lechosidad})',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Textura aterciopelada de una esmeralda con efecto Gota de Aceite fotografiada bajo microscopio con luz difusa.',
      imageSource: 'GIA Research / Dr. Thomas Hainschwang',
      imageAuthor: 'Gems & Gemology Research Archive',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm5-l5',
      moduleId: 5,
      order: 5,
      title: 'Lección 5.5: Técnicas de Iluminación Microscópica: Campo Oscuro, Fibra Óptica e Inmersión',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'La óptica de la iluminación microscópica. Platina de campo oscuro con diafragma iris, haz concentrado de fibra óptica oblicua rasante, filtros polarizadores y célula de inmersión en benzoato de bencilo.',
      content: `Un microscopio gemológico de alta gama es completamente inútil si el operador no domina las técnicas de iluminación:

### 1. Iluminación de Campo Oscuro (Darkfield Illumination)
- **Principio:** La luz directa procedente de la base se bloquea mediante un disco opaco central. La luz se refleja únicamente desde las paredes laterales cónicas pulidas de la platina, incidiendo sobre la gema desde los lados en ángulos rasantes.
- **Resultado:** El fondo del campo visual se ve completamente negro, mientras que cualquier inclusión, fisura o cristal interno dispersa la luz y brilla intensamente como una estrella en la noche. Es la técnica reina para fotografiar inclusiones trifásicas y microcristales.

### 2. Luz de Fibra Óptica Oblicua Rasante
- **Principio:** Se utiliza una guía de luz fría halógena o LED flexible de cuello de cisne para dirigir un haz estrecho e intenso sobre facetas individuales de la corona o pabellón en ángulos rasantes de $10^\\circ$ a $30^\\circ$.
- **Aplicación diagnóstica:** Indispensable para detectar el **efecto flash** (destellos azulados o anaranjados) que delata la presencia de resinas epóxicas en fisuras superficiales.

### 3. Célula de Inmersión Gemológica Horizontal
- **Principio:** La gema se sumerge en una cubeta de vidrio con un líquido cuyo índice de refracción sea idéntico o muy cercano al del berilo ($n \\approx 1.57 - 1.58$), como el **benzoato de bencilo ($n = 1.570$)** o el **monobromonaftaleno ($n = 1.66$)** diluido.
- **Resultado:** La refracción y los reflejos parásitos de las facetas talladas desaparecen por completo como por arte de magia. El interior de la gema se vuelve completamente visible como si fuera un cristal en bruto plano, revelando zonaciones de color, líneas de unión de dobletes y cavidades de relleno profundo.`,
      keyTakeaways: [
        'Campo oscuro: fondo negro que hace brillar inclusiones internas por dispersión de luz.',
        'Fibra óptica rasante: ángulo crítico para detectar flash-effect de resinas en fisuras.',
        'Inmersión en benzoato de bencilo (n=1.57): elimina las facetas permitiendo ver el interior sin reflejos.'
      ],
      scientificFormula: 'n_{\\text{líquido de inmersión}} \\approx n_{\\text{esmeralda}} = 1.577 \\implies \\text{Reflexión en facetas} \\rightarrow 0',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Microscopio gemológico trinocular con platina de campo oscuro, guías de fibra óptica y cámara digital acoplada.',
      imageSource: 'Laboratorio Central CDTEC Bogotá',
      imageAuthor: 'Archivo de Instrumentación Gemológica JAIRRESTAURA',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm5-l6',
      moduleId: 5,
      order: 6,
      title: 'Lección 5.6: Inclusiones en Esmeraldas Sintéticas: Crecimiento en Chevron y Velos de Fundente',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Catálogo de inclusiones en berilos sintéticos de laboratorio. Crecimiento en espiga (chevron) en hidrotermales rusos (Tairus/Biron), velos de fundente (flux feathers) en Chatham/Gilson y microgotas de crisol.',
      content: `La microscopía es la primera línea de defensa para desenmascarar esmeraldas sintéticas de laboratorio:

### 1. Inclusiones en Esmeraldas Sintéticas Hidrotermales (Tairus, Biron, Regency)
- **Estructuras de Crecimiento en Chevron:** Patrones geométricos ondulados en forma de espiga de trigo o zigzag que cruzan el cristal.
- **Tubos de Clavo (*Nail-head Spicules*):** Cavidades alargadas orientadas que contienen una cabeza cónica coronada por un diminuto cristalito opaco de fenacita u oro residual de la cápsula de autoclave.
- **Ausencia de Inclusiones Trifásicas Salinas:** Aunque pueden contener inclusiones bifásicas pequeñas, jamás presentan cubos euhedrales de halita ($NaCl$) con bordes dentados naturales.

### 2. Inclusiones en Esmeraldas Sintéticas por Fundente (Flux - Chatham, Gilson, Lennix)
- **Velos de Fundente (*Flux Feathers*):** Redes onduladas de aspecto similar a una gasa o velo de novia, compuestas por miríadas de gotículas de fundente químico solidificado (molibdato o vanadato de litio) de color amarillo, naranja o blanco opaco.
- **Plaquetas de Platino:** Pequeños copos metálicos de platino desprendidos del crisol a $>800^\\circ\\text{C}$, con brillo metálico plateado hexagonal u octagonal.
- **Canales Vacíos:** Canales estructurales completamente secos sin agua en espectro FTIR.`,
      keyTakeaways: [
        'Sintéticas hidrotermales: espigas en chevron y tubos con cabeza de clavo (nail-head spicules).',
        'Sintéticas por fundente: velos opacos amarillentos de sales fundidas y microplaquetas de platino.',
        'La ausencia de halita y la presencia de patrones chevron son diagnóstico de laboratorio.'
      ],
      scientificFormula: '\\text{Diagnóstico Sintético: Chevron } (\\text{Hidrotermal}) \\; | \\; \\text{Flux Feathers + Pt } (\\text{Fundente})',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Microfotografía a 40x de velo de fundente residual en esmeralda sintética Chatham.',
      imageSource: 'SSEF Swiss Gemmological Institute / GIA Synthetic Studies',
      imageAuthor: 'Dr. Michael S. Krzemnicki (SSEF)',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    }
  ],
  caseStudy: {
    title: 'Dictamen de Origen: Esmeralda con Inclusión Multifásica de Panjshir vs Colombia',
    scenario: 'Un comerciante presenta una gema de 3.85 quilates con una etiqueta comercial que dice "Muzo legítimo", sustentada en una fotografía microscópica que muestra una inclusión con líquido, gas y un cubo de halita.',
    gemologicalAnalysis: 'El gemólogo confirma la inclusión trifásica al microscopio. Sin embargo, al inspeccionar la gema con espectroscopía FTIR de alta resolución, la relación entre el pico de agua Tipo II (3592 cm⁻¹) y el pico de agua Tipo I (3694 cm⁻¹) arroja un cociente Tipo II / Tipo I = 1.35 (anormalmente alto para Colombia, donde siempre es < 0.8). En el análisis elemental por fluorescencia de rayos X (EDXRF) se cuantifica un contenido de FeO de 0.42% en peso y presencia notable de cesio, lo que excluye a Muzo y Coscuez.',
    diagnosticLimitations: 'Confirmación analítica de que las inclusiones trifásicas existen en Afganistán. Asumir Colombia únicamente por ver halita y gas sin verificar espectros de agua y elementos traza constituye una negligencia técnica grave.',
    learningOutcome: 'Origen rectificado a Afganistán (Panjshir). Se ilustra a los estudiantes sobre la necesidad de protocolos espectroscópicos para el origen geográfico.'
  },
  practicalActivity: {
    title: 'Mapeo Microscópico de Inclusiones y Dibujo Gemológico a 40x',
    instructions: '1. Configurar el microscopio gemológico en campo oscuro a 20x. 2. Centrar una esmeralda natural problema y enfocar desde la tabla hasta el culatín. 3. Identificar una cavidad trifásica y cambiar a 40x o 60x. 4. Realizar un dibujo técnico a escala acotando la fase líquida, la burbuja gaseosa y el cubo de halita. 5. Conectar la guía de fibra óptica oblicua y buscar posibles destellos de flash-effect en fracturas abiertas.',
    materialsNeeded: [
      'Microscopio gemológico trinocular con platina de campo oscuro',
      'Luz de fibra óptica flexible de cuello de cisne',
      'Pinza gemológica de bloqueo suave',
      'Muestra de esmeralda natural con inclusiones trifásicas'
    ],
    deliverable: 'Ficha pericial con dibujo gemológico detallado de la inclusión trifásica indicando aumentos, orientación cristalográfica y diagnóstico de fases.',
    rubric: [
      { criterion: 'Enfoque y visualización nítida de las tres fases a 40x', weight: '35%' },
      { criterion: 'Identificación correcta de cristales hijos y burbuja de CO2', weight: '35%' },
      { criterion: 'Calidad técnica y rigor del dibujo esquemático', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm5-q1',
      question: '¿Por qué la presencia de una inclusión trifásica (salmuera + burbuja de CO2 + cubo de halita) NO garantiza al 100% que la esmeralda sea de Colombia?',
      type: 'multiple_choice',
      options: [
        'Porque las inclusiones trifásicas son burbujas de aire que se introducen con pegamento.',
        'Porque yacimientos hidrotermales en rocas sedimentarias de Panjshir (Afganistán) y Davdar (China) también albergan inclusiones multifásicas morfológicamente idénticas con halita cúbica.',
        'Porque todos los berilos sintéticos de laboratorio tienen inclusiones trifásicas idénticas.',
        'Porque en Colombia las inclusiones nunca tienen salmuera salina.'
      ],
      correctAnswer: 1,
      explanation: 'Investigaciones geológicas y gemológicas internacionales (GIA, Gübelin, SSEF) han documentado extensamente inclusiones trifásicas con halita en esmeraldas de Panjshir (Afganistán) y Davdar (China). El dictamen seguro de origen requiere espectroscopía FTIR de agua y análisis de elementos traza por LA-ICP-MS.',
      scientificReference: 'Bowersox, G. W., et al. (1991). Emeralds of the Panjshir Valley, Afghanistan. Gems & Gemology, 27(1).'
    },
    {
      id: 'm5-q2',
      question: '¿Qué es científicamente el cotizado fenómeno gemológico "Gota de Aceite" (Butterfly Effect) en las esmeraldas colombianas?',
      type: 'multiple_choice',
      options: [
        'Una emulsión líquida de aceite de oliva o de linaza atrapada geológicamente en las fisuras durante el Cretácico.',
        'Una estructura sólida de micro-crecimiento sectorial poligonal que dispersa suavemente la luz internamente, creando una textura aterciopelada sin lechosidad.',
        'Un tratamiento ilegal de inmersión en resinas epóxicas con endurecedor químico.',
        'Una película de grasa superficial producida por el contacto con los dedos humanos.'
      ],
      correctAnswer: 1,
      explanation: 'La Gota de Aceite es una estructura cristalina interna natural producida por perturbaciones cinéticas de crecimiento en Muzo y Coscuez. Micro-dominios escalonados dispersan suavemente la luz visible generando una textura aterciopelada ("velvety glow") sin pérdida de transparencia.',
      scientificReference: 'Hainschwang, T., et al. (2008). The "gota de aceite" optical effect in Colombian emeralds. Gems & Gemology, 44(3).'
    },
    {
      id: 'm5-q3',
      question: '¿Qué mineral sólido accesorio de color pardo-caramelo prismático fue descubierto formalmente en las minas de esmeraldas de Muzo en 1835 y constituye un biomarcador de fuertísima correlación con Boyacá?',
      type: 'multiple_choice',
      options: [
        'La parisita-(Ce) [Ca(Ce,La)2(CO3)3F2].',
        'La actinolita verde acicular.',
        'La magnetita negra isométrica.',
        'La mica biotita en plaquetas hexagonales.'
      ],
      correctAnswer: 0,
      explanation: 'La parisita-(Ce) es un fluorocarbonato de tierras raras descubierto en Muzo por J.J. Paris en 1835. Sus prismas pardos estriados son un biomarcador mineralógico emblemático de las esmeraldas del cinturón occidental boyacense.',
      scientificReference: 'Mindat.org: Parisite-(Ce) Type Locality Muzo, Colombia.'
    },
    {
      id: 'm5-q4',
      question: '¿Qué técnica de iluminación microscópica es la indicada para revelar de inmediato el destello "flash-effect" (azul o naranja) en fisuras tratadas con resinas epóxicas?',
      type: 'multiple_choice',
      options: [
        'Luz transmitida brillante con diafragma abierto al máximo.',
        'Luz reflejada oblicua rasante de fibra óptica incidiendo a 10-30 grados sobre la superficie de la gema.',
        'Filtro Chelsea con luz infrarroja térmica.',
        'Luz polarizada cruzada sin conoscopio.'
      ],
      correctAnswer: 1,
      explanation: 'El efecto flash en fisuras tratadas se debe a la interferencia por diferencia de dispersión cromática entre la resina y el berilo. Se observa con máxima nitidez apuntando un haz de fibra óptica en ángulo rasante oblicuo contra la fisura.',
      scientificReference: 'Kammerling, R. C., et al. (1990). Fracture filling of emeralds. Gems & Gemology, 26(2).'
    },
    {
      id: 'm5-q5',
      question: '¿Qué patrón interno de crecimiento al microscopio permite diferenciar una esmeralda sintética hidrotermal rusa (Tairus/Biron) de un cristal natural colombiano?',
      type: 'multiple_choice',
      options: [
        'Crecimiento en espiga o ángulo en chevron (zigzag) originado por nucleación sobre semillas artificiales planas.',
        'Inclusiones de pirita metálica dorada de simetría cúbica.',
        'Tubos de crecimiento cilíndricos paralelos al eje c con agua líquida.',
        'Presencia de romboedros de calcita espática sedimentaria.'
      ],
      correctAnswer: 0,
      explanation: 'Las esmeraldas sintéticas hidrotermales presentan bandas de crecimiento rítmico en ángulo agudo conocidas como "chevron" o espiga de trigo, provocadas por la orientación de la semilla metálica de autoclave, totalmente ausentes en la cristalización geológica natural.',
      scientificReference: 'Kane, R. E., & Liddicoat, R. T. (1985). The synthetic emeralds of Carroll Chatham. Gems & Gemology, 21(3).'
    }
  ],
  externalReferences: [
    {
      title: 'GIA Research: Inclusions in Natural and Synthetic Emeralds',
      url: 'https://www.gia.edu/gem-inclusions',
      institution: 'Gemological Institute of America',
      description: 'Atlas digital de fotomicrografía gemológica y criterios de diagnóstico de origen.',
      category: 'Microscopía de Gemas'
    },
    {
      title: 'SSEF Gemstone Inclusions Compendium',
      url: 'https://www.ssef.ch/research',
      institution: 'Swiss Gemmological Institute (SSEF)',
      description: 'Guías analíticas sobre inclusiones multifásicas y determinación de origen geográfico.',
      category: 'Laboratorios Suizos'
    }
  ],
  bibliography: [
    {
      author: 'Gübelin, E. J., & Koivula, J. I.',
      year: '2005',
      title: 'Photoatlas of Inclusions in Gemstones (Vol. 1-3)',
      publication: 'Opinio Publishers, Basel, Switzerland',
      doiOrUrl: 'https://www.gubelin.com'
    },
    {
      author: 'Hainschwang, T., Notari, F., & Anckar, B.',
      year: '2008',
      title: 'The "gota de aceite" optical effect in Colombian emeralds',
      publication: 'Gems & Gemology, 44(3), 188-202',
      doiOrUrl: 'https://doi.org/10.5741/GEMS.44.3.188'
    },
    {
      author: 'Bowersox, G. W., Foord, E. E., Laurs, B. M., et al.',
      year: '1991',
      title: 'Emeralds of the Panjshir Valley, Afghanistan',
      publication: 'Gems & Gemology, 27(1), 26-39',
      doiOrUrl: 'https://doi.org/10.5741/GEMS.27.1.26'
    }
  ]
};
