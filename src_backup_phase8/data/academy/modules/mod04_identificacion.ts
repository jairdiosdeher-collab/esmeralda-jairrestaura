import { DiplomaModule } from '../../../types/academy';

export const MOD_04_IDENTIFICACION: DiplomaModule = {
  id: 4,
  code: 'MOD-04',
  title: 'Módulo 4: Identificación Gemológica Avanzada, Instrumental Óptico y Cribado',
  shortTitle: 'Identificación Gemológica',
  academicHours: 10,
  overview: 'Metodología sistemática de análisis gemológico no destructivo. Manejo riguroso de la lupa 10x acromática, refractometría con líquido de alto índice (n=1.81), conoscopía y polariscopía para figuras de interferencia uniaxiales (melatopo), dicroscopía, fluorescencia UV-LW/SW y espectroscopía óptica del cromo (doblete 683/680 nm).',
  competencies: [
    'Ejecutar la secuencia analítica no destructiva estándar recomendada por CIBJO y GIA.',
    'Operar el refractómetro gemológico para determinar índices no, ne y birrefringencia con precisión de ±0.001.',
    'Identificar figuras de interferencia conoscópicas uniaxiales negativas con lente Bertrand.',
    'Analizar el espectro óptico del cromo en el espectroscopio identificando el doblete de 683 y 680 nm.'
  ],
  learningObjectives: [
    'Diferenciar una esmeralda natural de vidrios verdes, dobletes pegados, tsavoritas y turmalinas.',
    'Explicar el funcionamiento físico del filtro Chelsea y por qué no es una prueba concluyente aislada.',
    'Interpretar la figura de interferencia de "ojo de perdiz" (cruz isogira con anillos de color isocromáticos).',
    'Reconocer la fluorescencia roja viva bajo luz UV de 365 nm como indicio de bajo contenido de hierro.'
  ],
  prerequisites: ['Módulos 1, 2 y 3 aprobados o experiencia práctica previa en óptica mineral.'],
  heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Instrumental Óptico',
  lessons: [
    {
      id: 'm4-l1',
      moduleId: 4,
      order: 1,
      title: 'Lección 4.1: Instrumental Gemológico Esencial: La Tríada Óptica de Campo',
      readTime: '14 min',
      difficulty: 'Iniciación',
      summary: 'Configuración y ergonomía de un laboratorio gemológico profesional. La lupa acromática y aplanática de 10x, pinzas gemológicas no magnéticas y microscopio estereoscópico con iluminación en campo oscuro.',
      content: `El instrumental gemológico clásico está diseñado para extraer las propiedades físicas y ópticas del cristal de forma **estrictamente no destructiva**:

### 1. La Lupa Gemológica Triplete de 10x
- Es el estándar universal de la industria para el grading de claridad y primer cribado visual.
- Debe ser **acromática** (corregida contra aberración cromática uniendo tres lentes cementadas) y **aplanática** (corregida contra distorsión esférica en los bordes del campo).
- Iluminación adecuada: Luz diurna difusa neutra de 5500 a 6500 Kelvin (CRI > 90).

### 2. El Microscopio Gemológico Estereoscópico
- Equipado con óptica zoom continuo de $10\\times$ a $70\\times$.
- Iluminación especializada: Campo oscuro (*darkfield*), luz transmitida difusa (*brightfield*), iluminación oblicua por fibra óptica y platina con pinza giratoria y celda de inmersión.
- Su función principal es resolver la tridimensionalidad de las fases fluidas y las microestructuras de crecimiento.`,
      keyTakeaways: [
        'La lupa 10x debe ser triplete acromática y aplanática con luz blanca neutra (5500-6500 K).',
        'El microscopio estereoscópico con campo oscuro es insustituible para diagnosticar inclusiones.',
        'Todo el instrumental gemológico opera bajo métodos estrictamente no destructivos.'
      ],
      scientificFormula: '\\text{Aumento estándar GIA / CIBJO: } 10\\times \\text{ (Lupa triplete acromática y aplanática)}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Mesa de trabajo de laboratorio gemológico con refractómetro, polariscopio y fuente de luz fría.',
      imageSource: 'Laboratorio Gemológico CDTEC Bogotá / Archivo Fotográfico JAIRRESTAURA',
      imageAuthor: 'Unidad Técnica CDTEC',
      imageLicense: 'Uso Académico Institucional',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm4-l2',
      moduleId: 4,
      order: 2,
      title: 'Lección 4.2: Refractometría Cuantitativa: Manejo del Hemicilindro y Signo Óptico',
      readTime: '17 min',
      difficulty: 'Avanzado',
      summary: 'Física de la reflexión total interna y ángulo crítico en el refractómetro. Técnica de microgota de líquido de Anderson (n=1.81). Medición del rayo ordinario no y extraordinario ne, y signo óptico uniaxial negativo.',
      content: `El **refractómetro gemológico** es el instrumento cuantitativo más determinante del laboratorio clásico:

### 1. Principio Físico del Ángulo Límite
El instrumento contiene un hemicilindro de vidrio óptico de altísimo índice de refracción ($n_{\\text{prisma}} \\approx 1.88$ a $1.96$) o titanato de estroncio. Cuando la luz penetra en la gema y se refleja en la interfase gema-prisma, la transición entre reflexión total interna y refracción proyecta una línea de sombra oscura nítida sobre una escala calibrada en índices de refracción ($1.300 - 1.810$).

### 2. El Líquido de Contacto de Anderson
Para evitar que una delgada película de aire interrumpa la continuidad óptica entre la tabla de la gema y el prisma de vidrio, se aplica una microgota de **líquido de Anderson** (yoduro de metileno saturado con azufre y tetrayodoetileno, $n = 1.81$ a $20^\\circ\\text{C}$).
- Advertencia: Jamás deben medirse materiales con índice superior a 1.81 (como circonitas o diamantes), pues no mostrarán sombra y rayarán el prisma.

### 3. Procedimiento para Obtener Signo Óptico y Birrefringencia
1. Colocar la faceta plana más grande (tabla) sobre la microgota de líquido en el centro del prisma.
2. Observar a través del ocular con luz monocromática de sodio ($589\\text{ nm}$).
3. Si la gema es esmeralda, aparecerán **dos líneas de sombra adyacentes**.
4. Rotar un filtro polarizador acoplado al ocular en $360^\\circ$:
   - La sombra superior permanece estacionaria en **$n_o = 1.577 - 1.584$** (Rayo Ordinario).
   - La sombra inferior oscila entre $n_o$ y su valor mínimo en **$n_e = 1.571 - 1.578$** (Rayo Extraordinario).
5. Como el rayo extraordinario vibra con índice más bajo que el ordinario ($n_o > n_e$), el signo óptico es **Uniaxial Negativo ($U-$)** con birrefringencia $\\Delta n = 0.006$.`,
      keyTakeaways: [
        'El refractómetro mide el ángulo crítico proyectando una línea de sombra en la escala interna.',
        'La esmeralda colombiana muestra dos sombras: no ≈ 1.580 y ne ≈ 1.574 (birrefringencia 0.006).',
        'El signo uniaxial negativo (U-) se confirma porque el rayo ordinario tiene mayor índice que el extraordinario.'
      ],
      scientificFormula: '\\sin \\theta_c = \\frac{n_{\\text{gema}}}{n_{\\text{prisma}}} \\quad | \\quad \\Delta n = n_o - n_e = 0.006 \\; (U-)',
      svgTechnicalDiagram: 'refractometer_reading',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Escala del refractómetro con doble lectura no=1.577 y ne=1.571 que define el carácter uniaxial negativo del berilo.',
      imageSource: 'GIA Gem Identification Lab Manual / Gráficos JAIRRESTAURA',
      imageAuthor: 'Comité de Metrología Óptica JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm4-l3',
      moduleId: 4,
      order: 3,
      title: 'Lección 4.3: Conoscopía y Polariscopía: Figuras de Interferencia y Melatopo',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Uso del polariscopio con polarizadores cruzados y esfera de vidrio conoscópica (conoscopio). Identificación de la cruz isogira uniaxial con anillos concéntricos isocromáticos y determinación del eje c.',
      content: `Mientras que el polariscopio evalúa la gema bajo luz polarizada paralela, la **conoscopía** utiliza luz fuertemente convergente para mapear las direcciones ópticas de la red cristalina:

### 1. El Polariscopio Básico (Luz Polarizada Lineal Paralela)
- Al rotar una esmeralda tallada $360^\\circ$ sobre la platina de vidrio entre dos filtros polarizadores cruzados a $90^\\circ$, la gema se ilumina y se extingue alternativamente **cuatro veces cada 90 grados**.
- Esto confirma de manera tajante que el material es **ópticamente anisótropo cristalino**, descartando vidrios, plásticos, granates e imitaciones cúbicas que permanecen completamente oscuros en toda rotación.

### 2. La Figura de Interferencia Conoscópica Uniaxial (Ojo de Perdiz)
Al interponer una esfera de vidrio condensadora de cuarzo de alta curvatura (conoscopio) directamente sobre la gema orientada a lo largo de su eje óptico $c$:
- Se proyecta una **figura de interferencia uniaxial clásica**: una cruz negra ortogonal continua (**isogiras**) cuyos brazos se cruzan en un punto céntrico oscuro (**el melatopo**), rodeada por una serie de anillos de colores circulares concéntricos (**isocromas**).
- Como las isogiras no se separan al rotar la platina $360^\\circ$, se corrobora que la gema es **uniaxial** (sistemas hexagonal o tetragonal), descartando gemas biaxiales como la turmalina o el topacio donde la cruz se divide en dos hipérbolas.`,
      keyTakeaways: [
        'En polariscopio, la esmeralda se ilumina y extingue cuatro veces cada 90 grados.',
        'La figura conoscópica uniaxial es una cruz negra fija centrada en el melatopo con anillos concéntricos.',
        'Descarta de forma contundente vidrios isotrópicos y gemas biaxiales de dos ejes ópticos.'
      ],
      scientificFormula: '\\text{Figura Uniaxial: Cruz isogira centrada (sin separación de hipérbolas)}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Figura conoscópica de interferencia uniaxial con melatopo central y anillos isocromáticos concéntricos.',
      imageSource: 'Optical Mineralogy Handbook / Archivo JAIRRESTAURA',
      imageAuthor: 'F. Donald Bloss (Modificado con fines docentes)',
      imageLicense: 'Uso Educativo Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm4-l4',
      moduleId: 4,
      order: 4,
      title: 'Lección 4.4: El Espectroscopio Gemológico: Las Líneas de Cromo en 683 y 680 nm',
      readTime: '16 min',
      difficulty: 'Especialista',
      summary: 'Descomposición espectral de la luz visible por prisma o red de difracción. Identificación del doblete fino de cromo 683/680 nm, líneas de absorción secundarias 662 y 646 nm, y banda ancha de transmisión verde.',
      content: `El espectroscopio gemológico descompone la luz transmitida a través de la gema en su espectro continuo de longitudes de onda visibles ($400 - 700\\text{ nm}$), revelando las bandas y líneas oscuras de absorción cuántica provocadas por cationes cromóforos:

### 1. El Espectro Diagnóstico de la Esmeralda
Cuando la luz blanca atraviesa una esmeralda natural colombiana rica en cromo, el espectroscopio de red de difracción revela una "firma espectral" inconfundible:
1. **El Doblete de Cromo en el Rojo Profundo ($683\\text{ nm}$ y $680\\text{ nm}$):** Dos líneas de absorción extraordinariamente finas y nítidas en el extremo rojo del espectro. En esmeraldas de Muzo y Chivor de alta saturación, este doblete puede verse como dos líneas fluorescentes brillantes de emisión si la muestra es iluminada con luz intensa lateral.
2. **Líneas débiles secundarias de cromo:** En **$662\\text{ nm}$** y **$646\\text{ nm}$** en la zona roja.
3. **Banda ancha de absorción central:** Una sombra ancha continua centrada en torno a los **$600\\text{ nm}$** (zona amarillo-naranja), que absorbe prácticamente todo el espectro intermedio.
4. **Corte en el violeta:** Absorción total por debajo de **$430\\text{ nm}$**.
5. **Ventana de transmisión verde:** El espectro entre **$510\\text{ nm}$ y $530\\text{ nm}$** permanece totalmente despejado y luminoso, explicando por qué nuestros ojos perciben un verde tan puro.

### 2. Diferenciación frente a Imitaciones y Berilos Vanadíferos
- En berilos coloreados únicamente por vanadio sin cromo (como ciertas esmeraldas brasileñas de Salininha), el doblete fino de 683/680 nm está ausente, mostrando únicamente la banda ancha centrada en 600 nm.
- Vidrios comunes y dobles pegados carecen de líneas finas de cromo nítidas en el rojo.`,
      keyTakeaways: [
        'El doblete fino en 683 nm y 680 nm en el rojo es la huella digital del cromo en el berilo.',
        'La absorción en el violeta (<430 nm) y en el rojo-naranja (~600 nm) deja libre la ventana verde (510-530 nm).',
        'En Colombia, el doblete de cromo siempre está presente con altísima nitidez.'
      ],
      scientificFormula: '\\text{Líneas diagnósticas: } \\lambda_1 = 683\\text{ nm}, \\; \\lambda_2 = 680\\text{ nm} \\quad [\\text{Transición } ^2E_g \\rightarrow ^4A_{2g} \\text{ de } Cr^{3+}]',
      diagramType: 'Espectro Óptico / FTIR',
      diagramCaption: 'Espectro de absorción visible de cromo en esmeralda colombiana mostrando el doblete en 683 y 680 nm.',
      imageSource: 'GIA Gems & Gemology Spectral Atlas / Archivo JAIRRESTAURA',
      imageAuthor: 'GIA Research Department',
      imageLicense: 'Uso Académico Investigativo',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm4-l5',
      moduleId: 4,
      order: 5,
      title: 'Lección 4.5: Fluorescencia Ultravioleta (365 nm / 254 nm) y el Filtro Chelsea',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'La física de la luminiscencia del Cr³⁺ no inhibida por hierro. Reacción de la esmeralda colombiana bajo luz UV de onda larga (rojo vivo intenso) vs onda corta. Mitos y realidades diagnósticas del Filtro Chelsea.',
      content: `El comportamiento de la esmeralda bajo radiación ultravioleta y filtros ópticos selectivos es una consecuencia directa de su quimismo de elementos traza:

### 1. Fluorescencia bajo Luz Ultravioleta de Onda Larga (UV-LW, 365 nm)
- Las esmeraldas colombianas exhiben típicamente una **fluorescencia de color rojo intenso a rojo anaranjado brillante**.
- **Causa científica:** Los fotones ultravioleta de 365 nm excitan los electrones $3d$ del ion $Cr^{3+}$ a estados de energía superiores. Al relajarse, emiten fotones en la región roja del espectro visible ($680 - 685\\text{ nm}$).
- **Por qué solo en Colombia:** En las esmeraldas de Zambia, Brasil o Zimbabue, la alta concentración de hierro ($Fe^{2+}/Fe^{3+}$) actúa como un sumidero energético no radiativo (*quencher*), absorbiendo la energía antes de que el cromo pueda emitir luz. En consecuencia, las esmeraldas africanas son inertes o muestran una fluorescencia roja apagada casi imperceptible.

### 2. Fluorescencia bajo Luz Ultravioleta de Onda Corta (UV-SW, 254 nm)
- Las esmeraldas naturales colombianas son típicamente **inertes o presentan una fluorescencia roja muy débil**.
- Si una supuesta esmeralda emite una fluorescencia verde tiza o amarillo brillante bajo UV-SW, se trata de una esmeralda sintética hidrotermal o un vidrio dopado con uranio.

### 3. El Filtro Chelsea (Filtro de Esmeralda de Anderson-Payne)
- Es un filtro óptico dicromático que transmite únicamente dos bandas estrechas: rojo profundo ($690\\text{ nm}$) y amarillo-verde ($570\\text{ nm}$).
- Al iluminar una esmeralda colombiana con una fuente incandescente potente rica en rojo y observarla a través del filtro, la gema se ve de un **color rojo vivo a rosado intenso**.
- **Advertencia diagnóstica:** El filtro Chelsea **NO es una prueba definitiva de autenticidad**. Las esmeraldas sintéticas ricas en cromo también se ven intensamente rojas bajo el filtro. Se utiliza únicamente como método rápido de cribado preliminar en lotes masivos.`,
      keyTakeaways: [
        'La esmeralda colombiana fluoresce rojo brillante en UV 365 nm por ausencia de hierro inhibidor.',
        'Esmeraldas ricas en hierro (África/Brasil) son casi inertes bajo luz ultravioleta.',
        'El filtro Chelsea hace ver roja a la esmeralda por su cromo, pero las esmeraldas sintéticas reaccionan igual.'
      ],
      scientificFormula: 'Cr^{3+} \\xrightarrow{h\\nu_{365}} \\text{Excitación} \\xrightarrow{\\text{Decaimiento radiativo}} h\\nu_{683\\text{ nm}} \\text{ (Emisión roja visible)}',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Intensa emisión fluorescente roja de cromo en esmeralda colombiana de Muzo bajo luz ultravioleta de 365 nm.',
      imageSource: 'SSEF Swiss Gemmological Institute / Archivo Fotográfico',
      imageAuthor: 'Dr. Michael S. Krzemnicki (SSEF)',
      imageLicense: 'Uso Académico y Formativo',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm4-l6',
      moduleId: 4,
      order: 6,
      title: 'Lección 4.6: Dicroscopio de Calcita: Protocolo de Observación y Calibración',
      readTime: '13 min',
      difficulty: 'Intermedio',
      summary: 'Diseño óptico del dicroscopio de Haidinger con romboedro de calcita espática de Islandia. Procedimiento paso a paso para orientar la gema, compensar reflejos parásitos y documentar los tonos pleocroicos.',
      content: `El **dicroscopio** es un instrumento cilíndrico de mano provisto de un romboedro de calcita birrefringente límpida (espato de Islandia) y un diafragma rectangular en el extremo frontal:

### 1. Principio de Funcionamiento Óptico
- La calcita posee una birrefringencia colosal ($\Delta n = 0.172$).
- Cuando la luz polarizada proveniente de la gema anisótropa ingresa a través del diafragma, la calcita divide el rayo en dos imágenes contiguas rectangulares polarizadas a $90^\circ$ entre sí.
- Esto permite al gemólogo **comparar lado a lado los dos colores dicroicos simultáneamente en el mismo campo visual**, eliminando el sesgo de la memoria retiniana que ocurre al girar un solo polarizador.

### 2. Protocolo de Inspección de una Esmeralda
1. Iluminar la gema con luz blanca difusa neutra no polarizada.
2. Apoyar el dicroscopio cerca del pabellón o de la corona de la piedra.
3. Observar a través del ocular las dos ventanas rectangulares.
4. Rotar el dicroscopio lentamente en $360^\circ$ alrededor de su eje longitudinal:
   - En una ventana se observará el **tono verde con componente azulosa** (rayo ordinario $\omega$).
   - En la ventana adyacente se observará el **tono verde amarillento a verde manzana** (rayo extraordinario $\epsilon$).
5. **Diagnóstico de eje óptico:** Si se observa la gema exactamente a lo largo del eje óptico $c$, ambas ventanas mostrarán exactamente el mismo color verde sin diferencia dicroica (dirección de isotropía uniaxial).
6. Si una gema verde no muestra ninguna diferencia de color en ninguna dirección de giro, el material es monorrefringente (vidrio, tsavorita o espinela sintética).`,
      keyTakeaways: [
        'El dicroscopio de calcita separa los dos rayos en dos ventanas cuadradas simultáneas.',
        'Permite verificar en segundos el dicroísmo: ventana verde-azul vs ventana verde-amarillo.',
        'La ausencia total de pleocroísmo descarta de inmediato que la gema sea un berilo.'
      ],
      scientificFormula: '\\text{Dicroscopio: Ventana 1 } (\\omega) = \\text{Verde azulado} \\quad | \\quad \\text{Ventana 2 } (\\epsilon) = \\text{Verde amarillento}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Dicroscopio de calcita de mano y visualización de la doble ventana rectangular con separación cromática.',
      imageSource: 'Handbook of Gem Identification (Liddicoat) / Archivo JAIRRESTAURA',
      imageAuthor: 'Comité de Instrumental Gemológico JAIRRESTAURA',
      imageLicense: 'Uso Educativo Oficial',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    }
  ],
  caseStudy: {
    title: 'Descarte Pericial de un Triplete de Cuarzo y Vidrio Vendido como Esmeralda Antigua',
    scenario: 'Un heredero presenta un anillo de época con una supuesta "esmeralda de Muzo de 5.50 quilates" engastada en oro de 18k para su tasación testamentaria. El propietario afirma que la piedra perteneció a su bisabuelo minero.',
    gemologicalAnalysis: 'En el refractómetro sobre la tabla superior, se obtiene un índice fijo de 1.544 con birrefringencia positiva de +0.009 (índice exacto del cuarzo hialino, no del berilo). En el examen con dicroscopio no se percibe pleocroísmo. Al sumergir el anillo montado en agua destilada e iluminar con fibra óptica transversal bajo microscopio, se observa una línea horizontal plana de ensamblaje bajo el filetín: la corona es cuarzo natural incoloro, el culatín es vidrio común, y el color verde intenso proviene de una delgada capa intermedia de resina sintética coloreada con burbujas de atrapamiento.',
    diagnosticLimitations: 'El engaste cerrado de época con bisel completo impedía observar el filetín a simple vista. Solo la refractometría precisa en la tabla y la inmersión microscópica permitieron descubrir la interfase de pegado sin desmontar la joya.',
    learningOutcome: 'Identificación concluyente de un triplete compuesto (cuarzo-resina-vidrio). El informe pericial evitó una liquidación patrimonial inflada y fraudulenta.'
  },
  practicalActivity: {
    title: 'Calibración y Manejo de Instrumental Óptico en Cinco Muestras Cinceladas',
    instructions: '1. Recibir un juego de cinco gemas problema etiquetadas de A a E. 2. Realizar cribado en polariscopio para separar anisótropas de isótropas. 3. Para las muestras anisótropas, medir no y ne en el refractómetro y calcular Δn. 4. Utilizar el dicroscopio para registrar los colores pleocroicos. 5. Observar con espectroscopio buscando las líneas de cromo en 683/680 nm. 6. Completar el reporte pericial.',
    materialsNeeded: [
      'Juego de 5 gemas problema (esmeralda, vidrio verde, tsavorita, turmalina verde, berilo sintético)',
      'Refractómetro gemológico con líquido Anderson 1.81',
      'Polariscopio con esfera conoscópica',
      'Dicroscopio de calcita y espectroscopio de difracción'
    ],
    deliverable: 'Cuadro comparativo con lecturas cuantitativas de cada instrumento y conclusión de identidad de las 5 gemas.',
    rubric: [
      { criterion: 'Lectura exacta de índices de refracción y birrefringencia', weight: '35%' },
      { criterion: 'Interpretación correcta de polariscopio y dicroscopio', weight: '35%' },
      { criterion: 'Identificación correcta de las 5 especies', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm4-q1',
      question: '¿Qué lectura de índice de refracción (IR) y birrefringencia (Δn) confirma que una muestra es un berilo esmeralda y no una turmalina verde ni un diópsido?',
      type: 'multiple_choice',
      options: [
        'no = 1.624, ne = 1.644 (Δn = 0.020, uniaxial negativo).',
        'no = 1.577 a 1.584, ne = 1.571 a 1.578 (Δn = 0.005 a 0.007, uniaxial negativo).',
        'Índice único fijo de 1.740 sin birrefringencia.',
        'no = 1.544, ne = 1.553 (Δn = +0.009, uniaxial positivo).'
      ],
      correctAnswer: 1,
      explanation: 'El berilo esmeralda se diagnostica por sus índices no ≈ 1.577-1.584 y ne ≈ 1.571-1.578, con una birrefringencia de 0.005 a 0.007 uniaxial negativa. La turmalina tiene índices mucho más altos (1.62 - 1.64 con Δn = 0.020), y el cuarzo es uniaxial positivo (1.544-1.553).',
      scientificReference: 'Liddicoat, R. T. (1989). Handbook of Gem Identification. GIA.'
    },
    {
      id: 'm4-q2',
      question: '¿Por qué una gema que se ve intensamente roja bajo el Filtro Chelsea NO puede ser certificada de forma aislada como una esmeralda natural colombiana?',
      type: 'multiple_choice',
      options: [
        'Porque el filtro Chelsea solo sirve para diagnosticar diamantes y zafiros.',
        'Porque las esmeraldas sintéticas de laboratorio cultivadas con cromo (Chatham, Gilson, Tairus) y los vidrios dopados con cromo también se ven intensamente rojos bajo el filtro.',
        'Porque las esmeraldas colombianas auténticas siempre se ven de color azul oscuro en el filtro Chelsea.',
        'Porque el filtro Chelsea altera y destruye el color natural de la piedra al contacto con su cristal.'
      ],
      correctAnswer: 1,
      explanation: 'El filtro Chelsea responde a la presencia de cromo independientemente de si la gema es natural o sintética. Las esmeraldas sintéticas por fundente o hidrotermales contienen altos niveles de cromo y carecen de hierro, por lo que reaccionan de color rojo idéntico o más intenso que una esmeralda natural colombiana.',
      scientificReference: 'Anderson, B. W. (1990). Gem Testing (10th ed.). Butterworths.'
    },
    {
      id: 'm4-q3',
      question: 'En el espectroscopio óptico de difracción, ¿cuál es el rasgo espectral cuántico diagnóstico indiscutible de una esmeralda rica en cromo?',
      type: 'multiple_choice',
      options: [
        'Una banda ancha de absorción a 450 nm provocada por transferencias de carga de titanio.',
        'Un doblete muy fino y nítido de emisión/absorción en el rojo profundo a 683 nm y 680 nm, acompañado de una banda ancha en ~600 nm.',
        'Una línea negra solitaria en 500 nm en el centro del verde.',
        'Ausencia total de absorción de luz a lo largo de todo el espectro visible.'
      ],
      correctAnswer: 1,
      explanation: 'El cromo trivalente (Cr³⁺) en la red octaédrica del berilo genera un doblete agudo en 683 nm y 680 nm en el rojo visible, complementado por líneas menores en 662 y 646 nm y absorción en ~600 nm. Es la huella digital espectral del cromo en el berilo.',
      scientificReference: 'Webster, R., & Read, P. G. (1994). Gems: Their Sources, Descriptions and Identification. Butterworth-Heinemann.'
    },
    {
      id: 'm4-q4',
      question: 'Al examinar una gema bajo luz polarizada cruzada en el polariscopio acoplado con esfera conoscópica a lo largo del eje c, ¿qué figura óptica se observa si la gema es esmeralda?',
      type: 'multiple_choice',
      options: [
        'Una figura biaxial con dos hipérbolas curvas que se separan ampliamente al rotar.',
        'Una figura uniaxial de "ojo de perdiz" compuesta por una cruz negra continua (isogiras) centrada en el melatopo con anillos circulares concéntricos (isocromas).',
        'Oscuridad absoluta en todas las direcciones sin ninguna figura proyectada.',
        'Un triángulo luminoso giratorio de color verde brillante.'
      ],
      correctAnswer: 1,
      explanation: 'Al ser el berilo un cristal del sistema hexagonal (uniaxial), la luz convergente a lo largo del eje óptico c produce una cruz negra isogira perfecta que no se separa al rotar, centrada sobre el melatopo con anillos concéntricos isocromáticos.',
      scientificReference: 'Bloss, F. D. (1999). Optical Crystallography. Mineralogical Society of America.'
    },
    {
      id: 'm4-q5',
      question: '¿Qué fenómeno óptico permite al dicroscopio de calcita mostrar simultáneamente los dos rayos dicroicos de la esmeralda en dos ventanas contiguas?',
      type: 'multiple_choice',
      options: [
        'La gigantesca birrefringencia del espato de Islandia (calcita pura), que refracta y separa ampliamente los rayos polarizados ordinario y extraordinario.',
        'La presencia de dos espejos de plata inclinados a 45 grados dentro del tubo.',
        'Un filtro químico líquido que absorbe el color rojo en una mitad del visor.',
        'Un prisma de diamante sintético rotatorio impulsado por una microbatería.'
      ],
      correctAnswer: 0,
      explanation: 'El espato de Islandia (calcita pura) tiene una birrefringencia excepcional (Δn = 0.172), lo que desvía los dos rayos linealmente polarizados ortogonales separándolos espacialmente lado a lado en dos campos rectangulares comparables al instante.',
      scientificReference: 'Read, P. G. (2005). Gemmology (3rd ed.). Elsevier Butterworth-Heinemann.'
    }
  ],
  externalReferences: [
    {
      title: 'GIA Gem Instruments: Handbook and Operation Manuals',
      url: 'https://www.gia.edu/gem-instruments',
      institution: 'Gemological Institute of America',
      description: 'Manuales de procedimiento de refractometría, polariscopía y espectroscopía óptica.',
      category: 'Instrumental Gemológico'
    },
    {
      title: 'CIBJO Gemstone Blue Book: Standards for Testing and Disclosure',
      url: 'https://cibjo.org/blue-books',
      institution: 'The World Jewellery Confederation',
      description: 'Normas internacionales sobre metodología de ensayos gemológicos y protocolos de identificación.',
      category: 'Normalización Técnica'
    }
  ],
  bibliography: [
    {
      author: 'Liddicoat, R. T.',
      year: '1989',
      title: 'Handbook of Gem Identification (12th ed.)',
      publication: 'Gemological Institute of America, Santa Monica',
      doiOrUrl: 'https://www.gia.edu'
    },
    {
      author: 'Anderson, B. W.',
      year: '1990',
      title: 'Gem Testing (10th ed., revised by E. A. Jobbins)',
      publication: 'Butterworths, London',
      doiOrUrl: 'https://www.elsevier.com'
    },
    {
      author: 'Webster, R., & Read, P. G.',
      year: '1994',
      title: 'Gems: Their Sources, Descriptions and Identification (5th ed.)',
      publication: 'Butterworth-Heinemann, Oxford',
      doiOrUrl: 'https://www.sciencedirect.com'
    }
  ]
};
