import { DiplomaModule } from '../../../types/academy';

export const MOD_01_FUNDAMENTOS: DiplomaModule = {
  id: 1,
  code: 'MOD-01',
  title: 'Módulo 1: Fundamentos de Gemología y Ciencia de los Materiales Gemológicos',
  shortTitle: 'Fundamentos de Gemología',
  academicHours: 10,
  overview: 'Introducción física, epistemológica y cristaloquímica a la ciencia gemológica. Diferenciación rigurosa entre mineral, cristal, roca, gema natural, material sintético y vidrio de imitación. Principios físicos fundamentales: dureza de Mohs, tenacidad, clivaje, densidad hidrostática y óptica mineral anisótropa.',
  competencies: [
    'Diferenciar ontológica y químicamente entre roca, mineral, cristal y gema preciosa.',
    'Evaluar las propiedades mecánicas tensoriales: dureza de Mohs vs tenacidad y fractura concoidea.',
    'Determinar la densidad hidrostática relativa y su correlación con la composición química del berilo.',
    'Identificar los fundamentos de la interacción electromagnética de la luz en medios uniaxiales negativos.'
  ],
  learningObjectives: [
    'Definir los criterios de belleza, rareza y durabilidad aplicados al berilo variedad esmeralda.',
    'Explicar por qué la esmeralda tiene dureza 7.5-8.0 en Mohs pero es tenazmente frágil frente a choques mecánicos.',
    'Calcular la densidad relativa mediante el principio de Arquímedes y balanza de precisión de 4 decimales.',
    'Reconocer las diferencias fundamentales entre gemas naturales, gemas sintéticas de laboratorio y dobles pegados.'
  ],
  prerequisites: ['Conocimientos de física elemental (óptica ondulatoria) y química inorgánica básica.'],
  heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Fotografía de Cristal en Matriz',
  lessons: [
    {
      id: 'm1-l1',
      moduleId: 1,
      order: 1,
      title: 'Lección 1.1: Epistemología Gemológica: Mineral, Gema, Cristal y Roca',
      readTime: '14 min',
      difficulty: 'Iniciación',
      summary: 'Diferenciación conceptual y termodinámica entre fases minerales homogéneas, rocas sedimentarias y agregados cristalinos. La tríada de una gema noble: belleza, rareza geológica y durabilidad.',
      content: `La **gemología** es una ciencia empírica y aplicada, nacida en la encrucijada entre la mineralogía, la cristalografía, la física óptica del estado sólido y la geoquímica.

### 1. Definiciones Fundamentales Rigurosas
- **Mineral:** Sustancia natural, inorgánica, químicamente homogénea, con una composición química estequiométrica definida (sujeta a sustituciones atómicas controladas) y un ordenamiento atómico tridimensional periódico de largo alcance (red cristalina).
- **Cristal:** Expresión morfológica poliédrica externa de un mineral, delimitada por caras planas espontáneas que reflejan la simetría microscópica de su celda unidad.
- **Roca:** Agregado polimineral o monomineral natural que forma unidades cartografiables de la corteza terrestre (ej. las lutitas negras cretácicas de Boyacá o las calizas de la Formación Rosablanca).
- **Gema (Piedra Preciosa):** Mineral o material de origen orgánico que satisface simultáneamente la **tríada clásica**:
  1. *Belleza:* Cualidad visual derivada de la interacción entre luz y materia (color espectral puro, transparencia vítrea, brillo superficial y dispersión).
  2. *Rareza geológica:* Probabilidad de coexistencia anómala de elementos incompatibles (el berilio, elemento de corteza continental félsica, con cromo/vanadio, elementos de rocas pelíticas y máficas).
  3. *Durabilidad:* Resistencia química frente a reactivos atmosféricos y resistencia mecánica al rayado continuo por partículas ambientales.

### 2. Clasificación Sistemática del Berilo
El berilo es un ciclosilicato de berilio y aluminio ($Be_3Al_2Si_6O_{18}$). Cuando la sustitución de $Al^{3+}$ en sitios octaédricos por trazas de cromo ($Cr^{3+}$) y/o vanadio ($V^{3+}$) alcanza niveles perceptibles (generalmente $>0.05\\%\\text{ wt.}$), el mineral recibe el nombre gemológico de **esmeralda**.`,
      keyTakeaways: [
        'Toda esmeralda natural es un mineral de ciclosilicato, pero no todo berilo verde es una esmeralda noble.',
        'La tríada innegociable de una gema es belleza óptica, rareza geoquímica y durabilidad estructural.',
        'La esmeralda es un mineral natural, mientras que la lutita de caja que la rodea es una roca sedimentaria.'
      ],
      scientificFormula: 'Be3Al2Si6O18 : (Cr3+, V3+)',
      svgTechnicalDiagram: 'm1_l1_mineral_rock_gem',
      diagramType: 'Diagrama Vectorial Estandarizado',
      diagramCaption: 'Cuadrante comparativo ontológico: Mineral (ciclosilicato Be3Al2Si6O18), Roca (lutita negra bituminosa), Cristal (prisma euhedral {10-10}) y Gema Noble (talla octagonal con chaflanes).',
      imageSource: 'Smithsonian National Museum of Natural History / Comité Científico JAIRRESTAURA',
      imageAuthor: 'Comité de Cristalografía y Mineralogía JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial JAIRRESTAURA',
      isRealPhoto: false,
      verificationStatus: 'Verificada Científicamente',
      visualControlCard: {
        moduleCode: 'MOD-01',
        lessonCode: 'LECC-1.1',
        resourceName: 'Cuadrante Ontológico Comparativo: Mineral, Roca, Cristal y Gema',
        scientificConcept: 'Diferenciación ontológica y cristaloquímica entre fase mineral homogénea, roca sedimentaria hospedante y cristal euhedral tallado',
        technicalDescription: 'Matriz analítica de 4 cuadrantes que contrasta la celda unidad atómica del berilo (P6/mcc), la roca caja sedimentaria bituminosa de Muzo (Fm. Paja), la morfología prismática natural con pinacoide basal {0001} y la gema noble con talla de precisión diseñada para optimizar retorno de luz.',
        source: 'Smithsonian National Museum of Natural History / CIBJO Diamond, Coloured Gemstone and Pearl Book',
        resourceType: 'Diagrama Vectorial Estandarizado',
        validationStatus: 'Verificada Científicamente',
        altText: 'Diagrama comparativo de cuatro cuadrantes diferenciando mineral, roca sedimentaria, cristal prismático euhedral y gema facetada'
      }
    },
    {
      id: 'm1-l2',
      moduleId: 1,
      order: 2,
      title: 'Lección 1.2: Propiedades Mecánicas: Dureza de Mohs vs Tenacidad y Clivaje',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Diferencia tensorial entre la resistencia al rayado (dureza de Mohs) y la resistencia a la propagación catastrófica de fracturas (tenacidad). Análisis de la partición basal {0001} y tensiones geológicas residuales.',
      content: `Uno de los errores más comunes en la práctica comercial y pericial es confundir **dureza** con **tenacidad**.

### 1. Dureza según la Escala de Friedrich Mohs (1812)
La dureza es una propiedad cualitativa ordinal que mide la resistencia relativa de la red cristalina a ser penetrada o rayada por otro material:
- La esmeralda posee una dureza entre **7.5 y 8.0 en la escala de Mohs**.
- Esto significa que raya al cuarzo (Mohs 7) y al feldespato (Mohs 6), y únicamente puede ser rayada por el topacio (Mohs 8), el corindón (zafiro/rubí, Mohs 9) y el diamante (Mohs 10).
- Su alta dureza le permite mantener facetas nítidas y pulidas durante generaciones frente al polvo ambiental (cuyo componente abrasivo principal es microcuarzo).

### 2. Tenacidad: La Vulnerabilidad Intrínseca del Berilo
La tenacidad mide la energía mecánica necesaria para provocar la fractura del material bajo cargas de choque o compresión dinámica:
- A pesar de su alta dureza, la esmeralda es un material **frágil**.
- Presenta **partición o clivaje basal imperfecto** paralelo al pinacoide basal $\{0001\}$, y una tendencia a la fractura concoidea frágil.
- Las tensiones tectónicas sinsedimentarias atrapadas durante su enfriamiento hidrotermal rápido generan microfisioclasas internas que disminuyen la tenacidad global.
- Esta característica física justifica históricamente la invención del **corte esmeralda octagonal**, cuyas esquinas truncadas en chaflán a $45^\\circ$ redistribuyen las líneas de esfuerzo durante el engaste en joyería.`,
      keyTakeaways: [
        'Dureza es resistencia al rayado; tenacidad es resistencia al impacto mecánico.',
        'La esmeralda tiene alta dureza (7.5 - 8.0) pero baja tenacidad debido a microfisuras y tensiones internas.',
        'Las esquinas biseladas en chaflán de la talla esmeralda son una respuesta ingenieril a su fragilidad de impacto.'
      ],
      scientificFormula: 'K_IC \\approx 0.8 - 1.2 \\text{ MPa}\\cdot\\text{m}^{1/2} \\text{ (Tenacidad a la fractura)}',
      svgTechnicalDiagram: 'm1_l2_mohs_hardness_cleavage',
      diagramType: 'Diagrama Vectorial Estandarizado',
      diagramCaption: 'Diferenciación mecánica tensorial: Escala ordinal de Mohs (1 al 10 con berilo en 7.5-8.0), fragilidad por tenacidad K_IC y disipación de esfuerzos mediante chaflanes a 45° de la talla esmeralda.',
      imageSource: 'Academia Esmeraldera JAIRRESTAURA / Lapidary Design Lab',
      imageAuthor: 'Comité Técnico Lapidario JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial JAIRRESTAURA',
      isRealPhoto: false,
      verificationStatus: 'Verificada Científicamente',
      visualControlCard: {
        moduleCode: 'MOD-01',
        lessonCode: 'LECC-1.2',
        resourceName: 'Comparador Mecánico Tensorial: Dureza de Mohs vs Tenacidad K_IC',
        scientificConcept: 'Separación entre resistencia al rayado y tenacidad a la fractura con partición basal {0001}',
        technicalDescription: 'Representación ordinal de la escala de Mohs de 1 a 10 destacando el berilo (7.5-8.0) por encima del cuarzo, complementada con el análisis de fragilidad estructural (K_IC = 0.8-1.2 MPa·m^1/2) y la función disipadora de tensiones en esquinas de chaflán a 45°.',
        source: 'GIA Gem Reference Guide / Instituto Gemológico Español (IGE)',
        resourceType: 'Diagrama Vectorial Estandarizado',
        validationStatus: 'Verificada Científicamente',
        altText: 'Diagrama técnico de escala de Mohs y tenacidad de fractura en esmeralda con chaflanes protectores a 45 grados'
      }
    },
    {
      id: 'm1-l3',
      moduleId: 1,
      order: 3,
      title: 'Lección 1.3: Densidad Relativa y Métodos de Medición Hidrostática',
      readTime: '12 min',
      difficulty: 'Intermedio',
      summary: 'Determinación de la densidad relativa (peso específico) mediante el principio de Arquímedes. Comparativa sistemática entre esmeraldas colombianas (2.68 - 2.72 g/cm³) y depósitos ricos en álcalis.',
      content: `La densidad relativa (SG, por sus siglas en inglés *Specific Gravity*) es una constante escalar física definida como la relación entre la masa de la gema y la masa de un volumen equivalente de agua destilada a $4^\\circ\\text{C}$ a 1 atmósfera de presión.

### 1. Fundamento Hidrostático
El principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del volumen de fluido desalojado:

$$\\rho_{\\text{relativa}} = \\frac{W_{\\text{aire}}}{W_{\\text{aire}} - W_{\\text{agua}}}$$

Donde:
- $W_{\\text{aire}}$ es el peso de la gema limpia en seco pesada en una balanza gemológica calibrada de 4 decimales.
- $W_{\\text{agua}}$ es el peso aparente de la gema completamente suspendida en agua destilada mediante un hilo de platino o cazoleta hidrostática sumergida.

### 2. Correlación Geoquímica en Esmeraldas
- **Esmeraldas Colombianas:** Presentan valores de densidad relativa característicamente bajos, situados entre **2.68 y 2.72 g/cm³**. Esto se debe a su bajísimo contenido de metales de transición pesados como hierro ($Fe$) y metales alcalinos pesados en los canales del berilo ($Cs, Rb$).
- **Esmeraldas de Zambia (Kafubu) y Brasil (Santa Terezinha):** Tienen densidades más elevadas, típicamente de **2.74 a 2.78 g/cm³**, debido a la incorporación masiva de iones $Fe^{2+}$, $Fe^{3+}$, $Na^+$ y $Cs^+$ en su red cristalina.
- Este ensayo físico, aunque no destructivo, permite descartar al instante imitaciones de cuarzo teñido ($2.65\\text{ g/cm}^3$), turmalina verde ($3.05 - 3.10\\text{ g/cm}^3$), diópsido ($3.29\\text{ g/cm}^3$) y vidrios plomizos ($>3.00\\text{ g/cm}^3$).`,
      keyTakeaways: [
        'Las esmeraldas colombianas tienen una densidad de 2.68 a 2.72 g/cm³ por su pureza composicional sin metales pesados.',
        'Esmeraldas de África y Brasil son más densas (2.74 a 2.78 g/cm³) por presencia de hierro y cesio en canales.',
        'La pesada hidrostática es un ensayo no destructivo esencial para el cribado rápido en laboratorio.'
      ],
      scientificFormula: 'SG = W_{aire} / (W_{aire} - W_{agua}) \\quad [\\text{Valor típico Colombia: } 2.695 \\pm 0.02\\text{ g/cm}^3]',
      svgTechnicalDiagram: 'hydrostatic_balance',
      diagramType: 'Ilustración Técnica Vectorial',
      diagramCaption: 'Balanza gemológica analítica de 4 decimales con kit hidrostático: pesada en aire (W_aire = 1.0484 g), puente aislado, recipiente de vidrio con agua destilada a 20°C y esmeralda suspendida en cazoleta sumergida (W_agua = 0.6594 g). SG = 2.695 g/cm³.',
      imageSource: 'Laboratorio de Metrología Gemológica CDTEC / Comité Técnico JAIRRESTAURA',
      imageAuthor: 'Comité de Metrología y Física del Estado Sólido JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial JAIRRESTAURA',
      isRealPhoto: false,
      verificationStatus: 'Verificada Científicamente',
      visualControlCard: {
        moduleCode: 'MOD-01',
        lessonCode: 'LECC-1.3',
        resourceName: 'Balanza Analítica con Kit de Medición Hidrostática de Inmersión',
        scientificConcept: 'Determinación de la Gravedad Específica (SG) y Principio de Arquímedes en Berilo Variedad Esmeralda',
        technicalDescription: 'Aparato experimental compuesto por balanza electrónica con resolución 0.0001 g, puente estático desacoplado del plato de pesada, vaso de precipitados de borosilicato con agua destilada desaireada a 20°C, y juego de cazoletas conectadas por filamento de platino. Permite calcular el empuje hidrostático E = W_aire - W_agua para discriminar esmeraldas colombianas (2.68 - 2.72 g/cm³) frente a berilos alcalinos de África/Brasil (>2.74 g/cm³) y cuarzos teñidos (2.65 g/cm³).',
        source: 'Laboratorio CDTEC Bogotá / Estándar CIBJO & GIA Gem Instruments',
        resourceType: 'Diagrama Vectorial Estandarizado',
        validationStatus: 'Verificada Científicamente',
        altText: 'Diagrama técnico interactivo de balanza analítica digital de precisión conectada a kit de inmersión hidrostática para esmeralda'
      }
    },
    {
      id: 'm1-l4',
      moduleId: 1,
      order: 4,
      title: 'Lección 1.4: Óptica Mineral Fundamental: Refracción, Birrefringencia y Anisotropía',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Interacción de la radiación visible con redes periódicas anisótropas. Velocidad de la luz en medios densos, Ley de Snell, elipsoide de índices uniaxiales negativos y cálculo del retardo de onda.',
      content: `Cuando un haz de luz visible incide sobre una sustancia transparente, su velocidad de propagación $v$ se reduce respecto a la velocidad en el vacío $c$ ($c \\approx 300.000\\text{ km/s}$).

### 1. Índice de Refracción (IR)
El índice de refracción es la relación dimensional entre ambas velocidades:
$$n = \\frac{c}{v}$$

En materiales ópticamente **isótropos** (como el diamante, los granates y el vidrio amorfo), la luz viaja con idéntica velocidad en todas las direcciones cristalográficas, manifestando un único índice de refracción.

### 2. Anisotropía y Birrefringencia en el Berilo
El berilo pertenece al sistema hexagonal (grupo espacial $P6/mcc$), por lo que es un material **ópticamente anisótropo uniaxial**:
- Al ingresar un rayo de luz incidente no paralelo al eje óptico $c$, se descompone en dos rayos linealmente polarizados en planos perpendiculares entre sí:
  1. **Rayo Ordinario ($n_o$ o $\\omega$):** Sigue la ley ordinaria de refracción de Snell en todas direcciones; su vector de vibración es perpendicular al eje óptico $c$. En esmeraldas colombianas: $n_o \\approx 1.577 - 1.584$.
  2. **Rayo Extraordinario ($n_e$ o $\\epsilon$):** Su velocidad varía según el ángulo respecto al eje óptico $c$. En esmeraldas colombianas: $n_e \\approx 1.571 - 1.578$.
- Como $n_o > n_e$, el berilo es clasificado formalmente como **uniaxial ópticamente negativo** (Signo óptico: U-).
- La **birrefringencia** ($\\Delta n$) es la diferencia matemática entre ambos índices:
$$\\Delta n = n_o - n_e = 0.005 - 0.007$$
- Esta birrefringencia moderada es diagnóstica: separa al berilo de imitaciones uniaxiales positivas (como el cuarzo $\\Delta n = +0.009$, $1.544 - 1.553$) o de materiales fuertemente birrefringentes como la calcita ($\\Delta n = 0.172$).`,
      keyTakeaways: [
        'El berilo es un cristal uniaxial ópticamente negativo (U-).',
        'Presenta dos índices principales: no ≈ 1.577 - 1.584 y ne ≈ 1.571 - 1.578.',
        'Su birrefringencia constante oscila entre 0.005 y 0.007, permitiendo diferenciarlo con refractómetro.'
      ],
      scientificFormula: '\\Delta n = n_o - n_e = 0.006 \\quad (\\text{Carácter: Uniaxial Negativo, } U-)',
      svgTechnicalDiagram: 'm1_l4_refraction_anisotropy',
      diagramType: 'Diagrama Vectorial Estandarizado',
      diagramCaption: 'Óptica mineral anisótropa uniaxial negativa (U-): Desdoblamiento del rayo incidente en rayo ordinario (no=1.577) y rayo extraordinario (ne=1.571), birrefringencia Δn=0.006.',
      imageSource: 'GIA Gem Identification Handbook / Diagrama JAIRRESTAURA',
      imageAuthor: 'Comité de Óptica Mineral JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial JAIRRESTAURA',
      isRealPhoto: false,
      verificationStatus: 'Verificada Científicamente',
      visualControlCard: {
        moduleCode: 'MOD-01',
        lessonCode: 'LECC-1.4',
        resourceName: 'Desdoblamiento Anisótropo Uniaxial Negativo y Ley de Snell',
        scientificConcept: 'Refracción, birrefringencia y propagación electromagnética de ondas ordinaria y extraordinaria en el berilo',
        technicalDescription: 'Simulación del paso de un rayo de luz incidente no polarizado a través de una celda hexagonal de berilo, descomponiéndose en el rayo ordinario omega (no = 1.577) y extraordinario epsilon (ne = 1.571) con birrefringencia constante de 0.006.',
        source: 'Mineralogical Society of America / GIA Gem Instruments',
        resourceType: 'Diagrama Vectorial Estandarizado',
        validationStatus: 'Verificada Científicamente',
        altText: 'Diagrama vectorial de refracción de luz y birrefringencia en cristal uniaxial negativo de berilo'
      }
    },
    {
      id: 'm1-l5',
      moduleId: 1,
      order: 5,
      title: 'Lección 1.5: Pleocroísmo y Dicroísmo de la Esmeralda',
      readTime: '13 min',
      difficulty: 'Intermedio',
      summary: 'Origen cuántico del dicroísmo en cristales uniaxiales cromíferos. Diferenciación visual entre el rayo ordinario (verde azuloso intenso) y el rayo extraordinario (verde amarillento).',
      content: `El **pleocroísmo** es la propiedad de los minerales coloreados birrefringentes de exhibir diferentes colores o matices cromáticos según la dirección en que la luz polarizada vibra a través de la red cristalina.

### 1. El Dicroísmo en el Sistema Hexagonal
Dado que el berilo es uniaxial, presenta dos rayos vibracionales principales, por lo que su pleocroísmo se manifiesta específicamente como **dicroísmo**:
1. **Rayo Ordinario (vibración perpendicular al eje $c$):** Manifiesta una absorción selectiva que genera un color **verde puro a verde ligeramente azulado**, rico, aterciopelado y de máxima saturación espectral.
2. **Rayo Extraordinario (vibración paralela al eje $c$):** Manifiesta un tono **verde amarillento a verde limón pálido**, con menor saturación y calidez.

### 2. Trascendencia Crítica en la Lapidación
Esta polarización cromática es la regla de oro del maestro tallador:
- Para que una esmeralda tallada ofrezca al observador el verde más profundo, vivo y cotizado, **la tabla superior de la gema debe cortarse rigurosamente perpendicular al eje óptico $c$** (paralela al pinacoide basal $\{0001\}$).
- Si un tallador inexperto orienta la tabla paralela al eje $c$, el tono dominante visible en la cara superior será verde-amarillento, depreciando comercialmente el valor de la piedra hasta en un 40%.
- El dicroscopio de calcita o de lámina polarizadora es el instrumento de bolsillo indispensable para verificar esta orientación cristalográfica.`,
      keyTakeaways: [
        'La esmeralda es dicroica: rayo ordinario verde-azulado y rayo extraordinario verde-amarillento.',
        'La tabla debe tallarse perpendicular al eje c para que el color observado sea el verde azuloso noble.',
        'El dicroscopio de calcita separa simultáneamente ambas ondas cromáticas en dos ventanas contiguas.'
      ],
      scientificFormula: '\\text{Rayo } \\omega: \\text{Verde azuloso} \\quad | \\quad \\text{Rayo } \\epsilon: \\text{Verde amarillento}',
      svgTechnicalDiagram: 'm1_l5_dicroscope_pleochroism',
      diagramType: 'Diagrama Vectorial Estandarizado',
      diagramCaption: 'Dicroscopio de calcita: Ventana dual simultánea comparando rayo ordinario (verde azuloso intenso noble) vs rayo extraordinario (verde amarillento cálido). Regla de corte con mesa perpendicular al eje [c].',
      imageSource: 'GIA Gem Instruments / Laboratorio Óptico JAIRRESTAURA',
      imageAuthor: 'Comité de Óptica Instrumental JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial JAIRRESTAURA',
      isRealPhoto: false,
      verificationStatus: 'Verificada Científicamente',
      visualControlCard: {
        moduleCode: 'MOD-01',
        lessonCode: 'LECC-1.5',
        resourceName: 'Dicroscopio de Calcita con Ventana Dual y Control del Eje Óptico [c]',
        scientificConcept: 'Absorción anisotrópica cuántica dependiente de la dirección de polarización (Dicroísmo)',
        technicalDescription: 'Aparato de birrefringencia interna con romboedro de espato de Islandia que separa espacialmente los dos estados de vibración ortogonales de la esmeralda colombiana: rayo omega verde azuloso saturado vs rayo epsilon verde amarillento pálido.',
        source: 'Gems & Gemology (GIA) / Archivo Científico JAIRRESTAURA',
        resourceType: 'Diagrama Vectorial Estandarizado',
        validationStatus: 'Verificada Científicamente',
        altText: 'Diagrama técnico interactivo de dicroscopio de calcita mostrando la separación simultánea de colores del dicroísmo'
      }
    },
    {
      id: 'm1-l6',
      moduleId: 1,
      order: 6,
      title: 'Lección 1.6: Tipología de Materiales: Naturales, Sintéticos, Imitaciones y Dobletes',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Clasificación taxonómica y normativa CIBJO. Criterios de diferenciación para esmeraldas sintéticas hidrotermales (Biron/Tairus) y por fundente (Chatham), vidrios manufacturados y dobletes pegados.',
      content: `La confederación internacional de joyería (CIBJO) y los manuales del LMHC exigen una distinción inequívoca entre materiales naturales, sintéticos y compuestos:

### 1. Esmeralda Natural
Mineral natural formado exclusivamente por procesos geológicos endógenos o hidrotermales sin intervención humana en su nucleación o crecimiento. Puede o no contener mejoramiento tradicional de claridad no permanente.

### 2. Esmeralda Sintética de Laboratorio
Material manufacturado por el ser humano que posee la **misma composición química estequiométrica ($Be_3Al_2Si_6O_{18}:Cr,V$), la misma estructura cristalina hexagonal y las mismas propiedades físicas y ópticas** que la esmeralda natural:
- **Síntesis por Flujo / Fundente (Flux Melt - Chatham, Gilson):** Crecidas a altas temperaturas ($>800^\\circ\\text{C}$) disolviendo óxidos en molibdato o vanadato de litio. Presentan velos de fundente residual opacos en forma de pluma ("flux feathers") y crisol de platino microscópico.
- **Síntesis Hidrotermal (Tairus, Biron, Regency):** Crecidas en autoclaves de alta presión imitando soluciones acuosas calientes. Se diagnostican por estructuras de crecimiento en chevron (galón o espiga de trigo), bandas en zigzag y ausencia total de inclusiones trifásicas salinas naturales con halita.

### 3. Imitaciones y Simuladores
Materiales que imitan la apariencia cromática externa de la esmeralda pero poseen una composición química y física completamente ajena:
- Vidrios comunes coloreados con óxidos de cromo (isótropos, monofásicos con burbujas de gas esféricas).
- Granates tsavoritas (isótropos, $n = 1.74$, dureza 7.5).
- YAG (Granate de itrio y aluminio sintético, $n = 1.83$).

### 4. Gemas Compuestas (Dobletes y Tripletes)
Piezas ensambladas artificialmente uniendo dos o más capas mediante pegamento epóxico o resinas teñidas:
- **Doblete de berilo:** Corona de berilo incoloro o aguamarina pegada a un culatín de berilo sintético mediante una lámina verde intermedia.
- Se diagnostican sumergiendo la gema en agua o benzoato de bencilo bajo microscopio, revelando la línea plana horizontal de pegamento y burbujas de adhesión fluorescentes.`,
      keyTakeaways: [
        'Sintético comparte composición, dureza y red cristalina; imitación solo imita el color exterior.',
        'La síntesis hidrotermal produce patrones de crecimiento en chevron (espiga) inexistentes en la naturaleza.',
        'Los dobletes y tripletes se descubren por la línea de ensamblaje en inmersión microscópica.'
      ],
      scientificFormula: '\\text{Norma CIBJO Blue Book: Divulgación obligatoria de material compuesto o sintético}',
      svgTechnicalDiagram: 'm1_l6_natural_synthetic_imitation',
      diagramType: 'Diagrama Vectorial Estandarizado',
      diagramCaption: 'Taxonomía cuádruple de identificación: Esmeralda natural (inclusiones trifásicas), sintética hidrotermal (crecimiento en chevron), imitación vítrea (burbujas esféricas e isotropía) y doblete compuesto (plano de pegamento).',
      imageSource: 'LMHC / CIBJO Gemstone Standards / Comité Forense JAIRRESTAURA',
      imageAuthor: 'Comité Forense de Identificación Gemológica JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial JAIRRESTAURA',
      isRealPhoto: false,
      verificationStatus: 'Verificada Científicamente',
      visualControlCard: {
        moduleCode: 'MOD-01',
        lessonCode: 'LECC-1.6',
        resourceName: 'Matriz Taxonómica Cuádruple: Natural, Sintético, Imitación y Doblete',
        scientificConcept: 'Criterios microestructurales y cristaloquímicos de diferenciación gemológica forense',
        technicalDescription: 'Muestra comparativa que expone las cavidades trifásicas en diente de sierra típicas de fluidos hidrotermales naturales, los patrones en chevron de síntesis en autoclave (Tairus/Biron), las líneas de remolino con burbujas de gas de vidrios manufacturados y el plano adhesivo fluorescente de los dobletes de berilo.',
        source: 'Laboratory Manual Harmonisation Committee (LMHC) / CIBJO',
        resourceType: 'Diagrama Vectorial Estandarizado',
        validationStatus: 'Verificada Científicamente',
        altText: 'Diagrama de taxonomía gemológica en cuatro cuadrantes para identificar esmeralda natural frente a sintéticos e imitaciones'
      }
    }
  ],
  caseStudy: {
    title: 'Peritaje de Lote Importado: Distinción entre Berilo Hidrotermal Sintético y Esmeralda Colombiana de Alta Gama',
    scenario: 'Un importador de alta joyería en Bogotá adquiere un lote de 6 gemas facetadas en talla octagonal de 2.50 a 3.20 quilates, comercializadas como "esmeraldas vírgenes No Oil de Muzo" por un precio significativamente inferior al promedio del mercado formal.',
    gemologicalAnalysis: 'La refractometría muestra valores de no = 1.578 y ne = 1.572 (Δn = 0.006, U-), consistentes con berilo. Sin embargo, en la inspección microscópica con iluminación de inmersión en campo oscuro oblicuo, se evidencian estructuras de crecimiento sub-paralelas en ángulo en chevron (espiga de trigo) y delgadas semillas planas de nucleación con microagujas orientadas. No se detectan inclusiones fluidas trifásicas dentadas con cubos de halita.',
    diagnosticLimitations: 'El índice de refracción y la densidad de las esmeraldas sintéticas hidrotermales modernas coinciden casi perfectamente con el berilo natural. El gemólogo jamás debe emitir un dictamen basándose únicamente en la prueba del refractómetro. La prueba microscópica de patrones de crecimiento y la espectroscopía infrarroja FTIR (ausencia de picos característicos de agua tipo I/II natural en las bandas de 3694 cm⁻¹) son obligatorias.',
    learningOutcome: 'Identificación concluyente de esmeralda sintética hidrotermal rusa (tipo Tairus). Se previene una estafa comercial mayor mediante protocolo analítico multinivel.'
  },
  practicalActivity: {
    title: 'Laboratorio de Cribado Físico y Determinación de Birrefringencia Uniaxial',
    instructions: '1. Calibrar la balanza analítica a cero. Pesar en seco tres muestras problema de aspecto verde vítreo. 2. Realizar pesada hidrostática sumergiendo cada muestra en agua destilada a 20°C y calcular la densidad relativa SG. 3. Colocar cada muestra en el refractómetro con una microgota de líquido de contacto (n=1.81). Determinar índices no, ne y signo óptico girando el polarizador 360°. 4. Registrar si el material es isótropo (vidrio/granate) o anisótropo birrefringente (berilo).',
    materialsNeeded: [
      'Balanza analítica con precisión de 0.0001 g y kit hidrostático',
      'Agua destilada a temperatura ambiente medida con termómetro',
      'Refractómetro gemológico con filtro monocromático de 589 nm',
      'Líquido de contacto refractométrico de Anderson (n=1.81)'
    ],
    deliverable: 'Ficha técnica de caracterización física con tabla comparativa de masa en aire, masa en agua, SG calculada, lectura refractométrica y dictamen preliminar.',
    rubric: [
      { criterion: 'Cálculo hidrostático con 3 decimales', weight: '30%' },
      { criterion: 'Determinación correcta de no, ne y birrefringencia', weight: '40%' },
      { criterion: 'Diagnóstico correcto de la especie mineral', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm1-q1',
      question: '¿Por qué la esmeralda, a pesar de tener una dureza de 7.5 a 8.0 en la escala de Mohs, es un mineral mecánicamente frágil?',
      type: 'multiple_choice',
      options: [
        'Porque su dureza en Mohs es inferior a la del cuarzo atmosférico.',
        'Porque la dureza solo mide la resistencia al rayado superficial, mientras que su tenacidad es baja debido a microtensiones geológicas y partición basal.',
        'Porque el berilo contiene agua en sus canales que se evapora al contacto con el aire.',
        'Porque las esmeraldas son rocas sedimentarias poco cohesionadas.'
      ],
      correctAnswer: 1,
      explanation: 'La dureza de Mohs mide la resistencia al rayado de los enlaces atómicos de la red cristalina, pero la tenacidad mide la resistencia a la propagación catastrófica de grietas. Las esmeraldas presentan fisuras sinsedimentarias y partición basal {0001} que las hacen frágiles frente a impactos mecánicos.',
      scientificReference: 'Nassau, K. (1994). Gemstone Enhancement. Butterworth-Heinemann.'
    },
    {
      id: 'm1-q2',
      question: '¿Cuál es la orientación cristalográfica obligatoria de la tabla de la talla para obtener el color verde-azulado más intenso y cotizado en una esmeralda colombiana?',
      type: 'multiple_choice',
      options: [
        'Paralela al eje óptico c (aprovechando el rayo extraordinario verde amarillento).',
        'Perpendicular al eje óptico c (haciendo que el observador perciba el rayo ordinario verde-azulado).',
        'A 45 grados de las caras prismáticas para crear ventana óptica.',
        'La orientación cristalográfica no influye en absoluto en el color de una gema anisótropa.'
      ],
      correctAnswer: 1,
      explanation: 'El berilo es un cristal dicroico: el rayo ordinario (vibración perpendicular al eje c) genera un verde azulado profundo y rico, mientras que el rayo extraordinario (vibración paralela al eje c) genera un verde amarillento pálido. La tabla debe tallarse perpendicular al eje c para maximizar el verde azulado comercialmente apetecido.',
      scientificReference: 'Ringsrud, R. (2009). Emeralds, A Passionate Guide. Green View Publishing.'
    },
    {
      id: 'm1-q3',
      question: 'Una gema verde facetada presenta un índice de refracción único e invariable de 1.740 al girarla 360 grados en el refractómetro, y no muestra birrefringencia en el polariscopio. ¿De qué material se trata con certeza?',
      type: 'multiple_choice',
      options: [
        'Una esmeralda natural de Muzo sin tratar.',
        'Un berilo sintético hidrotermal Biron.',
        'Un granate tsavorita o un material ópticamente isótropo (no es berilo).',
        'Un cuarzo prasiolita birrefringente.'
      ],
      correctAnswer: 2,
      explanation: 'El berilo es obligatoriamente anisótropo uniaxial negativo con índices de no ≈ 1.58 y ne ≈ 1.57 (birrefringencia 0.006). Un material monorrefringente (isótropo) con índice fijo de 1.740 no puede ser berilo; corresponde a un granate tsavorita (sistema cúbico).',
      scientificReference: 'Liddicoat, R. T. (1989). Handbook of Gem Identification. GIA.'
    },
    {
      id: 'm1-q4',
      question: '¿Cuál es el rango de densidad relativa (peso específico) típico de las esmeraldas colombianas en comparación con las de Zambia o Brasil?',
      type: 'multiple_choice',
      options: [
        '2.68 a 2.72 g/cm³ en Colombia, frente a 2.74 a 2.78 g/cm³ en Zambia/Brasil debido a la ausencia casi total de hierro y metales alcalinos pesados.',
        '3.52 g/cm³ en Colombia, idéntico al diamante natural.',
        '1.95 a 2.10 g/cm³, siendo más ligeras que el vidrio plástico.',
        '2.90 a 3.10 g/cm³ debido a su alto contenido de inclusiones de pirita.'
      ],
      correctAnswer: 0,
      explanation: 'Las esmeraldas colombianas tienen una densidad de 2.68 a 2.72 g/cm³ porque su red cristalina casi no alberga hierro ni cesio pesado. Las esmeraldas de Zambia y Brasil, al tener entre 0.5% y 1.8% de FeO y álcalis en sus canales, presentan densidades superiores (2.74 - 2.78 g/cm³).',
      scientificReference: 'Groat, L. A., et al. (2008). The Geology and Genesis of Gem Deposits. Mineralogical Association of Canada.'
    },
    {
      id: 'm1-q5',
      question: 'En la inspección microscópica con inmersión, ¿qué rasgo estructural interno es concluyente para diagnosticar una esmeralda sintética cultivada por método hidrotermal?',
      type: 'multiple_choice',
      options: [
        'Inclusiones multifásicas con cristal de sal gema cúbico y salmuera.',
        'Estructuras de crecimiento en ángulo con morfología en chevron (espiga de trigo o zigzag) provocadas por semillas de nucleación artificiales.',
        'Bandeamiento de calcita espática romboédrica de ambiente sedimentario.',
        'Presencia de agujas de parisita-(Ce) alargadas.'
      ],
      correctAnswer: 1,
      explanation: 'El método hidrotermal de síntesis acelera el crecimiento forzando la precipitación sobre láminas de semilla, lo que genera ondulaciones rítmicas diagnósticas en ángulo chevron o espiga de trigo, ausentes en la cristalización geológica natural lenta.',
      scientificReference: 'Kane, R. E., & Liddicoat, R. T. (1985). The synthetic emeralds of Carroll Chatham. Gems & Gemology, 21(3).'
    }
  ],
  externalReferences: [
    {
      title: 'GIA Gem Encyclopedia: Emerald Physical and Chemical Properties',
      url: 'https://www.gia.edu/emerald',
      institution: 'Gemological Institute of America',
      description: 'Compendio internacional de propiedades cristalográficas, mecánicas y ópticas del berilo noble.',
      category: 'Propiedades Físicas'
    },
    {
      title: 'Mindat Mineral Database: Beryl Mineral Data & Localities',
      url: 'https://www.mindat.org/min-1375.html',
      institution: 'Hudson Institute of Mineralogy',
      description: 'Ficha cristaloquímica completa, celda unidad P6/mcc y bibliografía geológica mundial.',
      category: 'Mineralogía Oficial'
    }
  ],
  bibliography: [
    {
      author: 'Liddicoat, R. T.',
      year: '1989',
      title: 'Handbook of Gem Identification (12th ed.)',
      publication: 'Gemological Institute of America (GIA), Santa Monica, CA',
      doiOrUrl: 'https://www.gia.edu'
    },
    {
      author: 'Nassau, K.',
      year: '1994',
      title: 'Gemstone Enhancement: History, Science and State of the Art',
      publication: 'Butterworth-Heinemann, Oxford',
      doiOrUrl: 'https://www.sciencedirect.com'
    },
    {
      author: 'Ringsrud, R.',
      year: '2009',
      title: 'Emeralds, A Passionate Guide: The Emeralds, The People, Their Stories',
      publication: 'Green View Publishing, Saratoga, CA',
      doiOrUrl: 'https://www.emeraldpassion.com'
    }
  ]
};
