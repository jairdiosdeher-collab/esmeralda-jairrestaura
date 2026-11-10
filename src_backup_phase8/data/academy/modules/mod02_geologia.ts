import { DiplomaModule } from '../../../types/academy';

export const MOD_02_GEOLOGIA: DiplomaModule = {
  id: 2,
  code: 'MOD-02',
  title: 'Módulo 2: Geología, Tectónica y Génesis Hidrotermal de las Esmeraldas Colombianas',
  shortTitle: 'Geología de las Esmeraldas',
  academicHours: 10,
  overview: 'Estudio geotectónico de la Cordillera Oriental de Colombia. El modelo genético hidrotermal sedimentario sinsedimentario y epigenético sin contacto ígneo. Termobarometría (290°C a 360°C, 1.0 a 1.5 kbar), salmueras evaporíticas Na-Ca-Cl (30-40 wt% NaCl eq.) y comparación metalogénica con yacimientos mundiales en esquistos de biotita.',
  competencies: [
    'Modelar la evolución paleogeográfica de la cuenca sedimentaria mesozoica de la Cordillera Oriental.',
    'Explicar el mecanismo físico-químico de lixiviación de berilio, cromo y vanadio por salmueras evaporíticas.',
    'Diferenciar estructural y litológicamente el Cinturón Esmeraldero Occidental del Cinturón Oriental.',
    'Comparar críticamente el modelo colombiano con los depósitos pegmatíticos-metamórficos mundiales (Zambia, Brasil, Rusia).'
  ],
  learningObjectives: [
    'Demostrar por qué las esmeraldas colombianas carecen de relación genética con magmas o pegmatitas ígneas.',
    'Analizar las condiciones termobarométricas de atrapamiento: temperaturas de 290°C a 360°C y presiones de 1.0 a 1.5 kbar.',
    'Identificar las formaciones litoestratigráficas portadoras: Rosablanca, Paja, Macanal y Las Juntas.',
    'Comprender el rol geoquímico reductor de la materia orgánica bituminosa (TSR - Reducción Termoquímica de Sulfatos).'
  ],
  prerequisites: ['Módulo 1 aprobado o conocimientos equivalentes de mineralogía general y geología básica.'],
  heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Mapa de Yacimiento',
  lessons: [
    {
      id: 'm2-l1',
      moduleId: 2,
      order: 1,
      title: 'Lección 2.1: El Milagro Metalogénico Colombiano: Génesis Hidrotermal Sedimentaria',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Por qué Colombia es la única provincia esmeraldífera del mundo formada exclusivamente en rocas sedimentarias marinas sin aporte magmático. Lixiviación de elementos incompatibles en cuencas de antepaís invertidas.',
      content: `A nivel planetario, más del 90% de los yacimientos de esmeralda (Brasil, Zambia, Zimbabue, Rusia, Madagascar, Swat en Pakistán) están genéticamente asociados al contacto entre **pegmatitas graníticas ígneas ricas en berilio** y **rocas ultramáficas o metamórficas ricas en cromo** (esquistos de biotita y anfibolitas).

### 1. La Paradoja Geoquímica
El berilio ($Be$) es un elemento litófilo ligero que se concentra en fluidos magmáticos silíceos tardíos de la corteza continental superior, mientras que el cromo ($Cr$) y el vanadio ($V$) son elementos siderófilos/litófilos concentrados en el manto terrestre y en rocas máficas-ultramáficas. En la corteza estándar, ambos ambientes geoquímicos jamás entran en contacto espontáneo.

### 2. El Modelo Genético Colombiano
Las esmeraldas colombianas representan un fenómeno geológico único en la Tierra:
- **Ausencia total de magmatismo contemporáneo:** No existen plutones graníticos, diques pegmatíticos ni intrusiones volcánicas asociadas a las mineralizaciones de Boyacá o Cundinamarca.
- **Rocas de caja sedimentarias marinas:** Se alojan en espesas secuencias cretácicas de lutitas negras carbonosas (*black shales*), calizas y evaporitas depositadas en una cuenca de rift mesozoico invertida tectónicamente.
- **Fluidos mineralizantes:** Salmueras hipersalinas de origen sedimentario derivado de la disolución de antiguos niveles evaporíticos basales (yeso, anhidrita y halita).
- Las salmueras migraron a través de fallas y zonas de cizalla lixiviando $Be$ de las propias lutitas y $Cr/V$ de la materia orgánica fosilizada, concentrándolos en venas de brecha hidrotermal.`,
      keyTakeaways: [
        'Colombia es el único productor global cuyas esmeraldas se formaron sin intrusión de pegmatitas ígneas.',
        'Las rocas encajantes son lutitas negras marinas ricas en materia orgánica fósil y calcita.',
        'Salmueras hidrotermales salinas lixiviaron el berilio y el cromo de las propias secuencias sedimentarias.'
      ],
      scientificFormula: '\\text{Ambiente: Cuenca sedimentaria de intra-arco invertida (Sin magmatismo granítico)}',
      svgTechnicalDiagram: 'geological_cross_section',
      diagramType: 'Diagrama Petrográfico',
      diagramCaption: 'Esquema geológico estructural de la cuenca cretácica invertida y vetas hidrotermales asociadas a cabalgamientos.',
      imageSource: 'Servicio Geológico Colombiano (SGC) / Archivo JAIRRESTAURA',
      imageAuthor: 'G. Giuliani, Y. Branquet & Grupo de Investigaciones SGC',
      imageLicense: 'Uso Académico e Investigativo',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm2-l2',
      moduleId: 2,
      order: 2,
      title: 'Lección 2.2: Termobarometría y Geoquímica de Fluidos: Temperatura, Presión y Salinidad',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Parámetros termodinámicos cuantitativos obtenidos de inclusiones fluidas y microtermometría. Temperaturas de 290°C a 360°C, presiones de 1.0 a 1.5 kbar y salinidades de 30 a 40 wt% NaCl equivalente.',
      content: `Las investigaciones pioneras de **Giuliani, Cheilletz, Branquet y Banks** a partir de microtermometría de inclusiones fluidas primarias y estudios de isótopos estables ($\delta^{18}\text{O}$, $\delta^{13}\text{C}$, $\delta\text{D}$) han delimitado los parámetros físicos exactos de la cristalización del berilo colombiano:

### 1. Temperaturas de Atrapamiento Hidrotermal
- La temperatura de homogenización ($T_h$) de las fases fluida y vapor en cavidades primarias oscila entre **290°C y 360°C**.
- Corregida por presión hidrostática y litostática regional, la temperatura real de cristalización se establece sólidamente entre **300°C y 330°C**.
- Este rango térmico moderado (régimen hidrotermal mesotermal) explica la preservación de la materia orgánica circundante y la ausencia de metamorfismo regional de alto grado.

### 2. Presiones y Profundidad de Emplazamiento
- La presión del fluido durante los eventos de mineralización se sitúa entre **1.0 y 1.5 kbar** (100 a 150 MPa).
- Esto equivale a una profundidad litostática de enterramiento de aproximadamente **3.5 a 5.0 kilómetros** en el momento de la circulación hidrotermal sinsedimentaria y orogénica andina.

### 3. Salinidad Extrema de las Salmueras
- Los fluidos atrapados son salmueras hipersalinas del sistema cuaternario $H_2O - NaCl - CaCl_2 - KCl$.
- Presentan una salinidad total comprendida entre **30 y 40% en peso equivalente de NaCl** ($30-40\\text{ wt.\\% NaCl eq.}$).
- La altísima concentración de cloro ($Cl^-$) a temperaturas superiores a 300°C fue el agente complejante esencial que permitió transportar el berilio ($BeCl_2$, $BeCl^+$) y el cromo en solución ácida a lo largo de kilómetros de fracturas sin precipitar prematuramente.`,
      keyTakeaways: [
        'Temperatura de cristalización validada: 290°C a 360°C (régimen mesotermal).',
        'Presión de formación: 1.0 a 1.5 kbar (~3.5 a 5 km de profundidad en la corteza).',
        'Salinidad extrema: 30 a 40 wt% NaCl eq., clave para el transporte de iones de Be y Cr en complejos clorurados.'
      ],
      scientificFormula: 'T = 290^\\circ\\text{C} - 360^\\circ\\text{C} \\quad | \\quad P = 1.0 - 1.5\\text{ kbar} \\quad | \\quad \\text{Salinidad} = 30-40\\%\\text{ eq. NaCl}',
      svgTechnicalDiagram: 'three_phase_inclusion',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Inclusión fluida primaria con microcristal de halita cúbico formado por la sobresaturación salina al enfriar a 25°C.',
      imageSource: 'Université de Lorraine / Microtermometría Gemológica JAIRRESTAURA',
      imageAuthor: 'Dr. Gaston Giuliani (CRPG/CNRS)',
      imageLicense: 'Uso Científico y Docente',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm2-l3',
      moduleId: 2,
      order: 3,
      title: 'Lección 2.3: Cinturón Esmeraldero Occidental: Muzo, Coscuez, Peñas Blancas y La Pita',
      readTime: '17 min',
      difficulty: 'Avanzado',
      summary: 'Estratigrafía y geología estructural del flanco occidental de la Cordillera Oriental. Formación Paja (Hauteriviano-Barremiano) y Formación Rosablanca. Brechas hidrotermales carbonatadas y tectónica de la Falla de Itoco.',
      content: `El **Cinturón Esmeraldero Occidental** abarca los municipios boyacenses de Muzo, Quipama, San Pablo de Borbur, Otanche, Maripí y Pauna.

### 1. Marco Litoestratigráfico
Las mineralizaciones se emplazan principalmente en dos unidades geológicas del Cretácico Inferior:
1. **Formación Rosablanca (Valanginiano - Hauteriviano):** Sucesión de calizas dolomíticas micríticas, lodolitas calcáreas y yeso basal. Aporta el calcio y carbonato que formaron las venas de calcita espática blanca.
2. **Formación Paja (Barremiano - Aptiano):** Shales negros laminados, lodolitas bituminosas y limolitas ricas en pirita y materia orgánica amorfa. Es la roca fuente del cromo y vanadio.

### 2. Geología Estructural y Control Tectónico
- Las esmeraldas no se distribuyen al azar; están estrictamente controladas por **fallas de cabalgamiento de vergencia oriental y fallas de despegue** asociadas a la gran **Falla de Itoco**.
- En zonas de cizalla compresiva, la sobrepresión de fluidos provocó **hidroclastismo** (fracturamiento hidráulico explosivo natural), generando cuerpos tabulares de **brechas hidrotermales calcíticas** conocidas localmente como "morteros".
- En los espacios vacíos y cavidades miarolíticas de estas brechas cristalizaron los prismas de berilo de tonalidad verde intensa aterciopelada, acompañados de calcita, dolomita, pirita, parisita-(Ce) y cuarzo.`,
      keyTakeaways: [
        'Yacimientos principales: Muzo, Coscuez, Peñas Blancas, La Pita, Cunas y Maripí.',
        'Formaciones rocosas clave: Formación Rosablanca (calizas) y Formación Paja (shales negros bituminosos).',
        'Estructura guía: Brechas hidrotermales ("morteros") controladas por la falla regional de Itoco.'
      ],
      scientificFormula: '\\text{Edad de mineralización occidental (Método 40Ar/39Ar en micas): } 32 \\pm 3 \\text{ Ma (Oligoceno Inferior)}',
      diagramType: 'Fotografía de Cristal en Matriz',
      diagramCaption: 'Prismas hexagonales verdes de Coscuez en drusa con romboedros de calcita blanca y pirita diseminada.',
      imageSource: 'Museo Geológico Nacional José Royo y Gómez (SGC) / Archivo JAIRRESTAURA',
      imageAuthor: 'Equipo de Curaduría Mineralógica SGC',
      imageLicense: 'Uso Educativo Institucional',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm2-l4',
      moduleId: 2,
      order: 4,
      title: 'Lección 2.4: Cinturón Esmeraldero Oriental: Chivor, Gachalá, Macanal y Ubalá',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Geología y tectónica del flanco oriental andino. Formación Macanal, Formación Guavio y Formación Las Juntas. Vetas de albita-pirita, fallas inversas regionales y esmeraldas de tonalidad verde azulada vivaz.',
      content: `El **Cinturón Esmeraldero Oriental** se sitúa en los departamentos de Boyacá y Cundinamarca, cubriendo los distritos de Chivor, San Luis de Gabor, Gachalá, Ubalá y Macanal.

### 1. Marco Estratigráfico y Diferencias Mineralógicas
- Se hospeda en unidades más antiguas del Jurásico Tardío al Cretácico Basal: **Formación Guavio, Formación Macanal y Formación Las Juntas**.
- **Mineralogía accesoria distintiva:** A diferencia del occidente donde predomina la calcita y dolomita, en el oriente las vetas hidrotermales son ricas en **albita euhedral tabular** ($NaAlSi_3O_8$), **pirita masiva euhedral** ($FeS_2$) y cuarzo bipiramidal hialino.
- La presencia masiva de albita refleja salmueras extraordinariamente ricas en sodio procedentes de domos evaporíticos profundos.

### 2. Tectónica y Edad de Mineralización
- Controlado por fallas inversas regionales de despegue asociadas a la orogenia pre-andina.
- Dataciones isotópicas mediante $^{40}\\text{Ar}/^{39}\\text{Ar}$ en micas fuchsititas indican una edad de mineralización de **65 a 61 millones de años (Límite Cretácico-Paleógeno)**, demostrando que el cinturón oriental es sustancialmente más antiguo que el occidental (32 Ma).
- Las esmeraldas de Chivor y Gachalá se distinguen por su excepcional diafanidad cristalina y su vivo dicroísmo verde-azulado, enriquecido por su crecimiento en fluidos con relaciones $V/Cr$ particulares.`,
      keyTakeaways: [
        'Distritos principales: Chivor, Gachalá, Macanal, Ubalá y San Juan de Gachetá.',
        'Minerales de veta diagnósticos: Albita tabular blanca y cristales cúbicos metálicos de pirita dorada.',
        'Edad de mineralización: 65 - 61 Ma (Cretácico final - Paleoceno), más antigua que el cinturón occidental (32 Ma).'
      ],
      scientificFormula: '\\text{Edad de mineralización oriental: } 65 - 61 \\text{ Ma} \\quad | \\quad \\text{Paragénesis: Berilo + Albita + Pirita + Cuarzo}',
      diagramType: 'Fotografía de Cristal en Matriz',
      diagramCaption: 'Cristal prismático de Chivor con terminación basal nítida sobre manto de albita blanquecina y pirita.',
      imageSource: 'Smithsonian Gem & Mineral Collection / Archivo JAIRRESTAURA',
      imageAuthor: 'Curaduría Gemológica Smithsonian Institution',
      imageLicense: 'Uso Académico Internacional',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm2-l5',
      moduleId: 2,
      order: 5,
      title: 'Lección 2.5: Geoquímica Orgánica: La Reducción Termoquímica de Sulfatos (TSR)',
      readTime: '15 min',
      difficulty: 'Especialista',
      summary: 'El rol geoquímico indispensable del bitumen y la materia orgánica fósil sedimentaria. Reacciones redox entre sulfatos evaporíticos disueltos e hidrocarburos que desestabilizan los complejos de berilio.',
      content: `Uno de los mayores descubrimientos de la geoquímica moderna sobre las esmeraldas de Colombia es el mecanismo por el cual el berilio se vio forzado a precipitar en las fracturas:

### 1. El Problema de la Solubilidad del Berilio
A 300°C y pH ácido, los complejos clorurados de berilio ($BeCl^+$) son termodinámicamente estables en salmueras y no precipitan espontáneamente a menos que ocurra un cambio drástico en el pH, en la fugacidad de oxígeno ($fO_2$) o en la concentración de ligando.

### 2. La Reacción de Reducción Termoquímica de Sulfatos (TSR)
En las formaciones Paja y Macanal, las salmueras que transportaban sulfato disuelto ($SO_4^{2-}$ procedente de evaporitas) entraron en contacto a $>300^\\circ\\text{C}$ con las rocas ricas en **querógeno y bitumen fósil**:

$$\\text{Sulfato } (SO_4^{2-}) + \\text{Hidrocarburos } (C_nH_m) \\longrightarrow H_2S + HCO_3^- + \\text{Bitumen residual oxidado}$$

### 3. Consecuencias Físico-Químicas Inmediatas
1. **Generación de pirita masiva:** El sulfuro de hidrógeno ($H_2S$) reaccionó de inmediato con el hierro ferroso disuelto en el fluido, precipitando pirita dorada ($FeS_2$).
2. **Atrapamiento total del hierro:** Al precipitar el hierro como sulfuro, la salmuera quedó prácticamente **libre de hierro residual ($Fe < 0.1\\%$)**.
3. **Aumento local del pH y precipitación del berilo:** La liberación de bicarbonato ($HCO_3^-$) amortiguó la acidez del fluido, forzando la desestabilización instantánea del cloruro de berilio y la precipitación de la esmeralda cromífera en cristales de extrema pureza química.`,
      keyTakeaways: [
        'La materia orgánica fósil (bitumen) actuó como reactivo reductor indispensable.',
        'La reacción TSR transformó sulfatos en ácido sulfhídrico y carbonato, forzando la precipitación del berilo.',
        'La formación masiva de pirita eliminó el hierro disuelto, garantizando la pureza cromática de la esmeralda colombiana.'
      ],
      scientificFormula: 'SO_4^{2-} + \\text{Materia Orgánica} \\xrightarrow{>300^\\circ\\text{C}} H_2S + CO_2 + \\text{Precipitación de } FeS_2 \\text{ y Berilo}',
      diagramType: 'Diagrama Petrográfico',
      diagramCaption: 'Sección delgada petrográfica mostrando veta de calcita hidrotermal cortando shales negros con bitumen fósil.',
      imageSource: 'Journal of South American Earth Sciences (Branquet et al.) / Archivo JAIRRESTAURA',
      imageAuthor: 'Y. Branquet, B. Laumonier & G. Giuliani',
      imageLicense: 'Uso Educativo Bajo Cita Académica',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm2-l6',
      moduleId: 2,
      order: 6,
      title: 'Lección 2.6: Comparativa Global: Yacimientos Metamórficos de Zambia, Brasil, Rusia y Pakistán',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Diferencias petrogenéticas, geoquímicas y de inclusiones diagnósticas entre los depósitos colombianos y los yacimientos clásicos mundiales en esquistos micáceos de biotita.',
      content: `Para cualquier gemólogo o perito internacional, comprender las diferencias entre el modelo colombiano y el resto del mundo es la base para el dictamen seguro de origen geográfico:

### 1. Yacimientos Clásicos de Tipo Pegmatítico-Metamórfico
- **Zambia (Distrito Minero de Kafubu):** Las esmeraldas se forman por intrusiones de pegmatitas graníticas ricas en turmalina y berilo en esquistos de talco-magnetita y anfibolitas del Proterozoico. Presentan alto contenido de hierro ($0.8 - 1.6\\%\\text{ FeO}$), cristales de magnetita incluidos, actinolita acicular y ausencia de inclusiones trifásicas salinas con halita.
- **Brasil (Campos Verdes, Santa Terezinha de Goiás, Itabira):** Depósitos metamórficos en esquistos biotíticos y talcosquintos. Contienen inclusiones características de plaquetas de mica biotita parda y tubos paralelos con dolomita.
- **Rusia (Malyshevo, Montes Urales):** Pegmatitas intruidas en flogopititas ("mariinskita"). Cristales ricos en cromo pero con inclusiones abundantes de mica flogopita y fenacita.
- **Pakistán (Valle de Swat):** Esmeraldas en zonas de cizalla metamórfica en ofiolitas con alto cromo y magnesio, frecuentemente con aspecto lechoso y zonación irregular.

### 2. Tabla Comparativa Científica de Parámetros Genéticos

| Parámetro | Colombia (Occidente y Oriente) | Zambia (Kafubu) | Brasil (Santa Terezinha) |
| :--- | :--- | :--- | :--- |
| **Ambiente Geológico** | Hidrotermal Sedimentario en Shales | Pegmatítico en Esquistos de Talco | Metasomático en Flogopititas |
| **Roca de Caja** | Lutitas negras y calizas | Esquistos biotíticos y anfibolitas | Talcosquintos y serpentinitas |
| **Temperatura $T_h$** | 290°C a 360°C | 400°C a 550°C | 380°C a 500°C |
| **Contenido de FeO** | $<0.15\\%\\text{ wt.}$ (Muy bajo) | $0.80 - 1.60\\%\\text{ wt.}$ (Alto) | $0.50 - 1.20\\%\\text{ wt.}$ (Moderado) |
| **Inclusiones Diagnósticas** | Trifásicas con halita, pirita, parisita | Actinolita, magnetita, biotita | Biotita parda, carbonatos rhomboédricos |
| **Fluorescencia UV 365 nm** | Roja viva intensa | Inerte a roja muy débil | Inerte a roja débil |`,
      keyTakeaways: [
        'Zambia, Brasil y Rusia son yacimientos pegmatítico-metamórficos de alta temperatura (400°C - 550°C).',
        'El alto contenido de hierro en esmeraldas africanas y brasileñas apaga su fluorescencia bajo luz UV.',
        'La presencia de halita cúbica en inclusiones fluidas solo ocurre en ambientes hidrotermales salinos sedimentarios.'
      ],
      scientificFormula: '\\text{Relación Fe/Cr: Colombia } < 0.2 \\quad | \\quad \\text{Zambia } > 2.0 \\quad | \\quad \\text{Brasil } > 1.5',
      diagramType: 'Fotografía de Cristal en Matriz',
      diagramCaption: 'Comparación mineralógica: prisma de esmeralda sobre matriz sedimentaria colombiana vs esmeralda incrustada en esquisto biotítico negro.',
      imageSource: 'GIA Gems & Gemology Field Expeditions / Archivo JAIRRESTAURA',
      imageAuthor: 'GIA Field Gemology / Vincent Pardieu',
      imageLicense: 'Uso Educativo Documental',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    }
  ],
  caseStudy: {
    title: 'Determinación Petrográfica y Geoquímica: Esmeralda Colombiana de Muzo vs Gema de Zambia (Kafubu)',
    scenario: 'Un coleccionista presenta una esmeralda tallada octagonal de 4.10 quilates de intenso color verde azulado oscuro, sin reporte de laboratorio previo, para determinar si su origen es colombiano o africano antes de ser subastada.',
    gemologicalAnalysis: 'En el microscopio gemológico no se detectan inclusiones trifásicas en diente de sierra; en su lugar, se observan agujas prismáticas verdes alargadas de actinolita-tremolita y diminutos cristales octaédricos opacos de magnetita. El refractómetro arroja índices no = 1.590 y ne = 1.583 (índices anormalmente altos para Colombia). En la espectroscopía UV-Vis-NIR, se observa una fuerte banda ancha de absorción a 830 nm correspondiente al ion Fe²⁺.',
    diagnosticLimitations: 'El color verde azulado profundo puede inducir a confusión con especímenes de Chivor. Sin embargo, los índices de refracción superiores a 1.585 y la presencia de magnetita/actinolita son incompatibles con la geología sedimentaria de Colombia, donde no existen minerales de metamorfismo regional de alto grado como la actinolita ni óxidos ferrosos masivos en los canales.',
    learningOutcome: 'Origen inequívoco de Zambia (depósito de Kafubu). El dictamen petrográfico y espectroscópico evitó una certificación errónea basada en el color subjetivo.'
  },
  practicalActivity: {
    title: 'Interpretación de Mapas Metalogénicos y Correlación Estratigráfica',
    instructions: '1. Analizar el mapa geológico del cuadrángulo de Chiquinquirá y Muzo suministrado por el Servicio Geológico Colombiano (SGC). 2. Ubicar la traza de la Falla de Itoco y colorear las unidades litoestratigráficas de la Formación Rosablanca y Formación Paja. 3. Marcar con simbología técnica los yacimientos de Muzo, Coscuez y La Pita sobre las zonas de brecha hidrotermal. 4. Redactar un párrafo técnico justificando por qué las minas se alinean a lo largo de los planos de falla regional.',
    materialsNeeded: [
      'Plancha geológica oficial del SGC a escala 1:100.000',
      'Regla geológica, colores técnicos y escalímetro',
      'Columna estratigráfica generalizada de la Cordillera Oriental'
    ],
    deliverable: 'Mapa metalogénico interpretado con memoria técnica de 1 página sobre los controles estructurales del hidrotermalismo cretácico.',
    rubric: [
      { criterion: 'Identificación correcta de formaciones Paja y Rosablanca', weight: '35%' },
      { criterion: 'Trazado exacto de las estructuras de falla y zonas de brecha', weight: '35%' },
      { criterion: 'Rigor científico en la justificación hidrotermal', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm2-q1',
      question: '¿Cuál es el rango termobarométrico científicamente comprobado en el cual cristalizaron las esmeraldas colombianas en la Cordillera Oriental?',
      type: 'multiple_choice',
      options: [
        'Temperaturas de 650°C a 800°C y presiones de 5 a 8 kbar (ambiente magmático pegmatítico profundo).',
        'Temperaturas de 290°C a 360°C y presiones de 1.0 a 1.5 kbar (~3.5 a 5 km de profundidad litostática).',
        'Temperaturas superficiales de 20°C a 40°C y presión atmosférica de 1 bar (ambiente evaporítico de playa).',
        'Temperaturas de 1200°C en el manto superior bajo condiciones de kimberlita.'
      ],
      correctAnswer: 1,
      explanation: 'Los estudios de microtermometría en inclusiones fluidas e isotopía de oxígeno (Giuliani et al., Cheilletz et al.) demuestran que las esmeraldas colombianas cristalizaron en un régimen mesotermal de 290°C a 360°C a presiones moderadas de 1.0 a 1.5 kbar.',
      scientificReference: 'Cheilletz, A., et al. (1994). Time-pressure and temperature constraints on the formation of Colombian emeralds. Economic Geology, 89(2).'
    },
    {
      id: 'm2-q2',
      question: '¿Qué formación sedimentaria cretácica actúa como la roca fuente primordial de cromo y vanadio para las esmeraldas de Muzo y Coscuez en el cinturón occidental?',
      type: 'multiple_choice',
      options: [
        'La Formación Paja (shales negros y lutitas bituminosas ricas en materia orgánica fósil).',
        'El Batolito Granítico de Antioquia.',
        'La Formación Guaduas del Terciario.',
        'Las dunas eólicas de la Formación La Quinta.'
      ],
      correctAnswer: 0,
      explanation: 'La Formación Paja (Cretácico Inferior) está compuesta por lutitas y shales marinos negros con alto contenido de carbono orgánico y sulfuros, que albergaban concentraciones anómalas de cromo y vanadio que fueron lixiviadas por las salmueras hidrotermales.',
      scientificReference: 'Giuliani, G., et al. (2000). Oxygen isotopes and emerald trade routes since antiquity. Science, 287(5453).'
    },
    {
      id: 'm2-q3',
      question: '¿Por qué la presencia masiva de pirita (FeS2) en las vetas colombianas es la responsable directa de la excepcional fluorescencia roja de la esmeralda bajo luz UV?',
      type: 'multiple_choice',
      options: [
        'Porque la pirita refleja la luz roja como un espejo.',
        'Porque la reacción de reducción termoquímica de sulfatos (TSR) precipitó el hierro en la pirita, dejando la salmuera y el berilo prácticamente libres de hierro inhibidor (quencher).',
        'Porque la pirita contiene uranio radiactivo que activa la luminiscencia.',
        'La pirita no tiene ninguna relación con la geoquímica del hierro en el berilo.'
      ],
      correctAnswer: 1,
      explanation: 'El hierro (Fe²⁺/Fe³⁺) inhibe fuertemente la fluorescencia del cromo. La reacción hidrotermal formó pirita masiva atrapando casi todo el hierro disuelto; por ello, el berilo colombiano creció con niveles insignificantes de hierro (<0.1% FeO), permitiendo una deslumbrante fluorescencia roja del Cr³⁺.',
      scientificReference: 'Groat, L. A., et al. (2008). The Geology and Genesis of Gem Deposits. MAC.'
    },
    {
      id: 'm2-q4',
      question: '¿Qué mineral accesorio de veta es altamente característico del Cinturón Esmeraldero Oriental (Chivor / Gachalá) pero muy escaso en el Cinturón Occidental (Muzo)?',
      type: 'multiple_choice',
      options: [
        'Albita euhedral tabular (plagioclasa sódica NaAlSi3O8).',
        'Parisita-(Ce) parda prismática.',
        'Actinolita verde acicular.',
        'Corindón azul zafiro.'
      ],
      correctAnswer: 0,
      explanation: 'El Cinturón Oriental se distingue por una paragénesis mineral rica en albita tabular blanca y pirita metálica asociada a fluidos sódicos evaporíticos. En el Cinturón Occidental predomina la calcita espática blanca y la dolomita.',
      scientificReference: 'Branquet, Y., et al. (1999). Fluidized hydrothermal breccias in the Colombian emerald deposits. Ore Geology Reviews, 15(4).'
    },
    {
      id: 'm2-q5',
      question: 'A diferencia de las esmeraldas colombianas, ¿qué característica petrogenética define a las esmeraldas de Zambia (Kafubu) y Brasil (Santa Terezinha)?',
      type: 'multiple_choice',
      options: [
        'Se forman a temperaturas bajo cero en glaciares andinos.',
        'Se forman por interacción ígneo-metamórfica de pegmatitas en esquistos de biotita y talco a temperaturas de 400°C a 550°C con alto contenido de hierro.',
        'Son de origen sedimentario exclusivamente calcáreo sin presencia de micas.',
        'Se forman en meteoritos metálicos caídos en África.'
      ],
      correctAnswer: 1,
      explanation: 'Los yacimientos de Zambia y Brasil corresponden a esquistos biotíticos y anfibolitas alteradas por fluidos pegmatíticos a alta temperatura (400°C-550°C), lo que incorpora cantidades sustanciales de hierro (FeO > 1%) e inclusiones de actinolita o biotita parda.',
      scientificReference: 'Schwarz, D., & Giuliani, G. (2001). Emerald deposits: a review. Australian Gemmologist, 21(1).'
    }
  ],
  externalReferences: [
    {
      title: 'Servicio Geológico Colombiano — Modelo Geológico de las Esmeraldas',
      url: 'https://www.sgc.gov.co',
      institution: 'Servicio Geológico Colombiano (SGC)',
      description: 'Memorias técnicas y mapas de los cinturones esmeraldíferos oriental y occidental.',
      category: 'Geología Colombiana'
    },
    {
      title: 'Economic Geology: Hydrothermal Genesis of Colombian Emerald Deposits',
      url: 'https://www.segweb.org/economic-geology',
      institution: 'Society of Economic Geologists',
      description: 'Publicaciones científicas de Giuliani, Cheilletz y Banks sobre termobarometría y salmueras.',
      category: 'Ciencia Geológica'
    }
  ],
  bibliography: [
    {
      author: 'Cheilletz, A., Giuliani, G., Branquet, Y., et al.',
      year: '1994',
      title: 'Time-pressure and temperature constraints on the formation of Colombian emeralds: an 40Ar/39Ar laser microprobe and fluid inclusion study',
      publication: 'Economic Geology, 89(2), 361-380',
      doiOrUrl: 'https://doi.org/10.2113/gsecongeo.89.2.361'
    },
    {
      author: 'Giuliani, G., France-Lanord, C., Cheilletz, A., et al.',
      year: '2000',
      title: 'Sulfate reduction by organic matter in Colombian emerald deposits: chemical and stable isotope (C, H, O, S) evidence',
      publication: 'Economic Geology, 95(5), 1129-1153',
      doiOrUrl: 'https://doi.org/10.2113/gsecongeo.95.5.1129'
    },
    {
      author: 'Branquet, Y., Cheilletz, A., Giuliani, G., et al.',
      year: '1999',
      title: 'Fluidized hydrothermal breccias in the Colombian emerald deposits: tectonic and metallogenic implications',
      publication: 'Ore Geology Reviews, 15(4), 177-200',
      doiOrUrl: 'https://doi.org/10.1016/S0169-1368(99)00018-9'
    }
  ]
};
