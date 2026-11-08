import { DiplomaModule } from '../../../types/academy';

export const MOD_10_COMERCIO: DiplomaModule = {
  id: 10,
  code: 'MOD-10',
  title: 'Módulo 10: Comercio, Economía, Cadena de Valor y Mercados Internacionales',
  shortTitle: 'Comercio y Economía',
  academicHours: 10,
  overview: 'Estructura económica y comercial del sector esmeraldero colombiano y global. Cadena de valor desde la bocamina hasta la alta joyería en Ginebra y Hong Kong. Dinámica consuetudinaria de la Plazoleta del Rosario en Bogotá, negociación de lotes (parcels), precios FOB, subastas internacionales y el Fondo Nacional de la Esmeralda (FNE).',
  competencies: [
    'Mapear todos los eslabones de la cadena de valor: barequero, titular minero, comisionista, lapidario y exportador.',
    'Negociar lotes surtidos calculando el precio promedio ponderado por quilate y el margen de merma de talla.',
    'Analizar los flujos aduaneros de exportación hacia los principales centros de consumo (EE.UU., Suiza, Hong Kong).',
    'Comprender la función parafiscal de Fedesmeraldas y la contribución del 1% del valor FOB al FNE.'
  ],
  learningObjectives: [
    'Conocer los códigos tradicionales de honor y negociación en el comercio de la Avenida Jiménez de Bogotá.',
    'Interpretar los términos de comercio internacional (Incoterms 2020: FOB, CIF) aplicados a gemas preciosas.',
    'Diferenciar las dinámicas de ferias internacionales (Tucson, Hong Kong, GemGenève) frente a subastas de inversión.',
    'Calcular liquidaciones de lotes mixtos estimando el retorno neto en gemas talladas.'
  ],
  prerequisites: ['Módulos 1 a 9 aprobados o experiencia en comercialización, compras y comercio exterior.'],
  heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Corte Lapidario',
  lessons: [
    {
      id: 'm10-l1',
      moduleId: 10,
      order: 1,
      title: 'Lección 10.1: La Cadena de Valor Esmeraldera Colombiana: De la Bocamina a la Vitrina',
      readTime: '15 min',
      difficulty: 'Iniciación',
      summary: 'Estructura de actores económicos del sector. El minero de subsistencia (barequero/guaquero), las empresas mineras concesionarias, el comisionista tradicional, el taller de lapidación y el comercializador internacional.',
      content: `La cadena de valor de la esmeralda colombiana es un ecosistema socioeconómico único en el mundo, caracterizado por una alta densidad de mano de obra especializada e intermediación de confianza:

### 1. Los Eslabones Fundamentales
1. **Extracción en Bocamina:**
   - *Minería Formal de Concesión:* Empresas titulares de contratos de concesión que operan socavones subterráneos mecanizados con ventilación forzada y perforación neumática en Muzo, Chivor y Coscuez.
   - *Minería Tradicional y de Subsistencia (Barequeo):* Familias locales y mineros tradicionales que buscan esmeraldas en escombreras autorizadas (*voladeros*) y en aluviones de quebradas como Las Ánimas o La Cune.
2. **La Intermediación Local en Mina:**
   - Comerciantes de boca de mina que consolidan pequeñas producciones dispersas y trasladan el mineral en bruto hacia Bogotá.
3. **El Eje de Transformación Lapidaria (Bogotá D.C.):**
   - Centros de tallado concentrados históricamente en el centro de Bogotá (La Candelaria, Avenida Jiménez, Carrera 6ª y 7ª). Los maestros lapidarios aserran, preforman, facetizan y pulen el mineral en bruto.
4. **Comercio Mayorista y Exportación:**
   - Empresas comercializadoras autorizadas inscritas en el RUCOM que elaboran lotes clasificados, tramitan certificaciones gemológicas de laboratorio y formalizan la exportación ante la DIAN.
5. **Joyerías de Alta Gama y Consumidor Final:**
   - Casas de alta joyería en Nueva York, París, Ginebra, Tokio, Dubái y Hong Kong que engastan las esmeraldas en platino y oro con diamantes para el mercado de lujo.`,
      keyTakeaways: [
        'La cadena conecta la extracción artesanal e industrial en Boyacá con las vitrinas de lujo mundial.',
        'Bogotá es el centro neurálgico de lapidación, certificación y consolidación comercial de Colombia.',
        'Cada eslabón añade valor: el bruto multiplica su cotización al ser facetado y certificado formalmente.'
      ],
      scientificFormula: '\\text{Cadena: Extracción } \\rightarrow \\text{Intermediación } \\rightarrow \\text{Lapidación } \\rightarrow \\text{Certificación } \\rightarrow \\text{Exportación FOB}',
      diagramUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Fotografía de Cristal en Matriz',
      diagramCaption: 'Comercialización de cristales en bruto en las zonas mineras de Boyacá antes de su traslado a talleres de Bogotá.'
    },
    {
      id: 'm10-l2',
      moduleId: 10,
      order: 2,
      title: 'Lección 10.2: La Plazoleta del Rosario y los Códigos Tradicionales de Negociación',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Historia y sociología del mercado abierto de la Avenida Jiménez y la Plazoleta del Rosario en Bogotá. El papel celofán gemológico doblado, el apretón de manos ("la palabra") y la figura del comisionista independiente.',
      content: `Durante más de un siglo, el epicentro indiscutible del comercio abierto de esmeraldas de América Latina ha sido la **Plazoleta del Rosario y el eje de la Avenida Jiménez con Carrera 6ª y 7ª en Bogotá**:

### 1. La Sociología del Mercado Abierto
En esta zona convergen diariamente cientos de mineros llegados de Muzo y Chivor, comisionistas independientes, talladores, evaluadores y compradores extranjeros:
- **La Palabra como Contrato:** En la tradición esmeraldera colombiana, la palabra empeñada y el apretón de manos han sido históricamente más vinculantes que un contrato notarial. Romper la palabra acordada en una oferta aceptada conlleva el ostracismo y la expulsión social inmediata del gremio comercial.

### 2. El Papel Celofán Gemológico (El "Papel")
Las esmeraldas no se exhiben en vitrinas cerradas; se transportan en pequeños sobres plegados tradicionalmente:
- **Estructura del Papel:** Consta de una lámina exterior gruesa de papel blanco satinado y una lámina interior mate de color blanco neutro o azul oscuro.
- **Función Óptica:** El fondo blanco mate neutro permite observar el color puro de la esmeralda sin que los reflejos rojizos de la piel de la mano o los colores de la ropa falseen la saturación y el tono real de la gema.
- **El Ritual del Despliegue:** El comisionista abre el papel doblando las solapas con dedos entrenados, ofreciendo la piedra a la luz natural del día (luz norte neutra que baña los andenes del centro bogotano).

### 3. La Comisión Tradicional
El comisionista actúa como mediador de confianza entre el dueño del lote y el comprador final, pactando una comisión porcentual transparente (típicamente entre el 2% y el 5% sobre el valor final pactado).`,
      keyTakeaways: [
        'La Plazoleta del Rosario es el centro histórico y cultural del comercio abierto de esmeraldas en Colombia.',
        'El papel gemológico blanco neutro previene la distorsión del color causada por el tono de la piel.',
        'La palabra empeñada y la reputación personal son los pilares éticos tradicionales del gremio.'
      ],
      scientificFormula: '\\text{Código de honor consuetudinario: Oferta aceptada de palabra es jurídicamente vinculante en el gremio}',
      diagramUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Presentación tradicional de esmeraldas talladas sobre papel gemológico blanco neutro en Bogotá.'
    },
    {
      id: 'm10-l3',
      moduleId: 10,
      order: 3,
      title: 'Lección 10.3: Compraventa de Lotes (Parcels) y Cálculo del Precio Ponderado',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Metodología de compra de lotes surtidos en bruto y tallados. Evaluación por cribado de calidades (piedra cabeza, cuerpo de lote y cola), cálculo de merma de talla y precio de equilibrio por quilate.',
      content: `En el comercio profesional rara vez se adquieren piedras individuales aisladas; el negocio mayorista opera mediante la compra y venta de **lotes (*parcels*)**:

### 1. La Anatomía de un Lote Mixto
Casi todo lote surtido de esmeraldas se compone de tres estratos de calidad:
1. **La Cabeza del Lote (*Head of the Parcel*):** El 10% al 20% de las gemas del paquete. Son las piedras de mayor peso, mejor color y más alta transparencia. En ellas reside entre el 60% y el 70% del valor total que recuperará el comprador.
2. **El Cuerpo del Lote (*Body*):** El 50% al 60% del paquete. Gemas de calidad comercial media que se venden con rapidez para cubrir los costos operativos y el capital de trabajo.
3. **La Cola del Lote (*Tail*):** El 20% al 30% restante. Piedras de menor tamaño, color pálido o jardín muy denso (destinadas a cabujones económicos, joyería de plata o artesanías).

### 2. Algoritmo del Precio Ponderado por Quilate
Cuando un vendedor ofrece un lote de 100 quilates a un precio global de **USD $800 por quilate** (Total: USD $80.000), el comprador profesional no aplica $800 a cada piedra, sino que realiza un desglose proyectado:
- 15 ct de Cabeza estimados a USD $3.200/ct = USD $48.000.
- 55 ct de Cuerpo estimados a USD $550/ct = USD $30.250.
- 30 ct de Cola estimados a USD $150/ct = USD $4.500.
- **Recuperación Proyectada:** USD $82.750 frente a un costo de $80.000. Si el margen no cubre el costo financiero y el riesgo, la oferta se desestima.`,
      keyTakeaways: [
        'Los lotes se componen de cabeza (gemas estrella), cuerpo (calidad media) y cola (calidad económica).',
        'La cabeza del lote suele concentrar más del 60% del valor financiero del paquete.',
        'La compra exige evaluar el precio ponderado proyectado de venta individual frente al costo global.'
      ],
      scientificFormula: '\\text{Precio Medio Lote} = \\frac{\\sum (\\text{Peso}_i \\times \\text{Precio Unitario}_i)}{\\text{Peso Total del Lote (ct)}}',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Lote clasificado de esmeraldas talladas en parcel separando cabeza, cuerpo y cola por color y pureza.'
    },
    {
      id: 'm10-l4',
      moduleId: 10,
      order: 4,
      title: 'Lección 10.4: Destinos Mundiales de Exportación: EE.UU., Suiza, Hong Kong, EAU y Japón',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Geografía del consumo global de esmeraldas colombianas. Preferencias estéticas y normativas arancelarias en Estados Unidos, Suiza (hub de alta joyería y subastas), Hong Kong (puerta a Asia), Dubái y Japón.',
      content: `La esmeralda colombiana es un mineral de exportación que viaja a los centros financieros y de lujo más exigentes del planeta:

### 1. Estados Unidos (El Mayor Mercado en Volumen)
- Principal importador histórico en volumen y valor total.
- Centrado en el distrito joyero de la calle 47 en Manhattan (Nueva York), Miami y Los Ángeles.
- Demanda predominantemente tallas octagonales calibradas de 1 a 3 quilates con color verde vivo y transparencia limpia para anillos de compromiso y alta joyería comercial.

### 2. Suiza (Ginebra y Zúrich — La Cúspide de la Inversión)
- Suiza no consume para el público general; es el **centro mundial de intermediación de gemas de colección y alta relojería**.
- Hogar de las grandes casas de subastas (Christie's, Sotheby's) y de las marcas de alta joyería (Cartier, Van Cleef & Arpels, Chopard, Piaget).
- Exigen casi exclusivamente **esmeraldas colombianas de más de 5 quilates con certificación No Oil** emitida por SSEF o Gübelin.

### 3. Hong Kong y China Continental
- Puerta de entrada al gigantesco mercado asiático de nuevos inversionistas.
- Los coleccionistas chinos sienten una afinidad cultural milenaria por el verde noble (asociado al jade imperial), pagando sobreprecios por gemas de verde profundo aterciopelado tipo Muzo.

### 4. Emiratos Árabes Unidos (Dubái) e India (Jaipur)
- **Dubái:** Centro neurálgico de compras del Medio Oriente, con preferencia por piezas monumentales de gran quilataje engastadas en oro amarillo de 22 quilates.
- **Jaipur (India):** La capital histórica del comercio y tallado de gemas de la India; importan grandes volúmenes de esmeraldas colombianas en bruto y talladas para joyería nupcial tradicional de la realeza (*Polki* y *Kundan*).`,
      keyTakeaways: [
        'Estados Unidos lidera el volumen comercial en joyería de gama media-alta.',
        'Suiza concentra las gemas de inversión monumental de más de 5 quilates No Oil para subastas.',
        'Asia (Hong Kong/China) y Oriente Medio pagan primas elevadas por verde intenso y gemas de colección.'
      ],
      scientificFormula: '\\text{Principales Hubs: Nueva York (EE.UU.) } | \\text{ Ginebra (Suiza) } | \\text{ Hong Kong (Asia) } | \\text{ Dubái (EAU)}',
      diagramUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Collar de alta joyería en platino con esmeraldas colombianas de colección destinado a subasta en Ginebra.'
    },
    {
      id: 'm10-l5',
      moduleId: 10,
      order: 5,
      title: 'Lección 10.5: Ferias Internacionales y Subastas de Élite: Tucson, Hong Kong, GemGenève y Sotheby\'s',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Los escenarios mundiales donde se fijan las cotizaciones internacionales de la esmeralda. El Tucson Gem Show (febrero), GemGenève (mayo y noviembre), Hong Kong Gem Show y los récords históricos en subastas públicas.',
      content: `Las grandes ferias internacionales son los termómetros donde la oferta y la demanda global calibran el valor por quilate de la esmeralda cada año:

### 1. Las Grandes Ferias del Circuito Global
1. **Tucson Gem and Mineral Show (Arizona, EE.UU. - Febrero):** El evento mineralógico y de gemas más grande del planeta. Reúne desde minerales de museo en bruto hasta los más finos lotes de esmeraldas comercializados por firmas colombianas acreditadas.
2. **GemGenève (Ginebra, Suiza - Mayo y Noviembre):** La feria europea más exclusiva para comerciantes de piedras preciosas finas y joyerías históricas, enfocada en gemas de inversión sin tratamiento.
3. **Hong Kong International Diamond, Gem & Pearl Show (Marzo y Septiembre):** El mayor mercado mayorista de Asia, donde los exportadores colombianos colocan lotes calibrados y piedras de color superlativo.

### 2. Las Subastas de Élite y los Récords Históricos
En las casas de subasta Christie's y Sotheby's, las esmeraldas colombianas legendarias alcanzan precios récord mundiales:
- **La Esmeralda Rockefeller (Rockefeller Emerald):** Gema octagonal de **18.04 quilates** de origen colombiano, sin tratamiento de claridad (*No Oil*), subastada en Christie's Nueva York en 2017 por la cifra récord de **USD $5.511.500** (es decir, **USD $305.516 por quilate**), adquirida por la casa Harry Winston.
- **La Esmeralda Gran Muzo (Grand Muzo):** Gema de 38.00 quilates subastada en Ginebra por más de 4.5 millones de dólares.
- Estos eventos consolidan a la esmeralda colombiana virgen como un activo financiero de refugio de capital (*alternative investment asset*) superior en rentabilidad histórica al oro y al diamante incoloro.`,
      keyTakeaways: [
        'Tucson, Ginebra y Hong Kong son las ferias donde se fija el pulso de los precios mundiales.',
        'En subastas de élite, las esmeraldas colombianas No Oil superan los USD $300.000 por quilate.',
        'La esmeralda fina de colección actúa como activo financiero de refugio de valor internacional.'
      ],
      scientificFormula: '\\text{Récord Rockefeller (2017): 18.04 ct No Oil } = \\text{USD } \\$5.511.500 \\; [\\text{USD } \\$305.516/\\text{ct}]',
      diagramUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Esmeralda de colección de proporciones perfectas similar al ejemplar histórico Rockefeller subastado en Nueva York.'
    },
    {
      id: 'm10-l6',
      moduleId: 10,
      order: 6,
      title: 'Lección 10.6: El Fondo Nacional de la Esmeralda (FNE) y Fedesmeraldas',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'El marco gremial y parafiscal de Colombia. Creación del FNE mediante Ley 488 de 1998. La contribución parafiscal del 1% del valor FOB de exportación, proyectos de formalización social, apoyo tecnológico al CDTEC y sostenibilidad comunitaria.',
      content: `La gobernanza gremial del sector esmeraldero colombiano se sustenta en una alianza público-privada única establecida por mandato legal:

### 1. Fedesmeraldas (Federación Nacional de Esmeraldas de Colombia)
Fundada formalmente para unificar a los tres actores gremiales de primer grado del país:
1. **APRECOL:** Asociación de Productores de Esmeraldas de Colombia (titulares mineros de concesión).
2. **ASOCOESMERALDAS:** Asociación Colombiana de Comercializadores de Esmeraldas (comerciantes y mayoristas).
3. **ACODES:** Asociación Colombiana de Exportadores de Esmeraldas.

### 2. El Fondo Nacional de la Esmeralda (FNE)
Creado mediante el **Artículo 101 de la Ley 488 de 1998**, el FNE es una cuenta especial de carácter parafiscal:
- **Mecanismo de Recaudo:** Cada vez que una empresa exporta legalmente esmeraldas talladas o en bruto a través de la DIAN, paga obligatoriamente una **contribución parafiscal equivalente al 1% del valor FOB de la exportación**.
- **Destinación Específica por Ley:**
  1. *Investigación Científica y Transferencia Tecnológica:* Financiación y dotación instrumental de vanguardia para el laboratorio gemológico nacional **CDTEC**.
  2. *Programas de Sostenibilidad y Formalización Minera:* Proyectos de bancarización y formalización laboral de barequeros y pequeños mineros en los municipios de Muzo, Chivor, Quipama y Borbur.
  3. *Inversión Social Comunitaria:* Apoyo a escuelas rurales, infraestructura vial y proyectos productivos agrícolas alternativos (cacao y café) en el occidente y oriente de Boyacá.
  4. *Promoción y Posicionamiento Internacional:* Pabellones de Colombia en ferias internacionales bajo la marca colectiva *Colombian Emeralds*.`,
      keyTakeaways: [
        'Fedesmeraldas reúne a productores (Aprecol), comerciantes (Asocoesmeraldas) y exportadores (Acodes).',
        'El FNE se financia con la contribución obligatoria del 1% del valor FOB de exportación (Ley 488/1998).',
        'Los recursos financian la investigación del CDTEC, la formalización social y el desarrollo comunitario de Boyacá.'
      ],
      scientificFormula: '\\text{Contribución Parafiscal FNE} = 1\\% \\times \\text{Valor FOB de Exportación (DIAN)}',
      diagramUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Mapa de Yacimiento',
      diagramCaption: 'Comunidad minera y proyectos de desarrollo social sostenible financiados por el Fondo Nacional de la Esmeralda.'
    }
  ],
  caseStudy: {
    title: 'Estructuración Financiera de Exportación FOB a Suiza con Liquidación de Parafiscales',
    scenario: 'Una empresa exportadora formal con sede en Bogotá prepara el despacho aéreo asegurado de un lote de 48 esmeraldas finas talladas con un peso total de 62.40 quilates hacia un cliente de alta relojería en Ginebra, por un valor comercial FOB pactado de USD $240.000.',
    gemologicalAnalysis: 'Cada piedra cuenta con reporte gemológico individual emitido por CDTEC con número de RUCOM verificado. El departamento contable liquida la Declaración de Exportación (DEX) ante la DIAN y liquida la contribución parafiscal del 1% al Fondo Nacional de la Esmeralda (USD $2.400). Se coordina el transporte blindado hasta el aeropuerto El Dorado y despacho con póliza Brinks.',
    diagnosticLimitations: 'Intentar subfacturar el valor FOB para evadir el 1% parafiscal acarrea sanciones severas por contrabando técnico ante la DIAN y el decomiso definitivo de las gemas.',
    learningOutcome: 'Operación de comercio exterior ejecutada con total cumplimiento legal, garantizando trazabilidad, retorno de divisas al Banco de la República y aportes a la sostenibilidad de Boyacá.'
  },
  practicalActivity: {
    title: 'Simulación de Liquidación y Desglose de Lote Comercial (Parcel Buying)',
    instructions: '1. Recibir los datos de un lote mixto simulado de 80 quilates ofrecido a USD $650/ct global (USD $52.000). 2. Separar las 12 piedras cabeza (18 ct), 34 piedras cuerpo (42 ct) y 26 piedras cola (20 ct). 3. Asignar cotizaciones estimadas individuales por estrato de calidad. 4. Calcular el retorno bruto esperado, descontar comisiones del 3% y determinar el margen de utilidad neta de la operación.',
    materialsNeeded: [
      'Planilla de cálculo financiero gemológico',
      'Tabla de precios de referencia del mercado mayorista de Bogotá',
      'Calculadora financiera'
    ],
    deliverable: 'Ficha de decisión de compra con balance proyectado de ingresos, costos de intermediación y recomendación fundada de compra o rechazo.',
    rubric: [
      { criterion: 'Cálculo matemático exacto de pesos ponderados', weight: '35%' },
      { criterion: 'Realismo en las cotizaciones asignadas a cada estrato', weight: '35%' },
      { criterion: 'Rigor en el análisis de riesgo comercial', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm10-q1',
      question: 'En el marco legal colombiano (Ley 488 de 1998), ¿cuál es el porcentaje de contribución parafiscal obligatorio que debe pagar todo exportador sobre el valor FOB de esmeraldas despachadas al exterior con destino al Fondo Nacional de la Esmeralda (FNE)?',
      type: 'multiple_choice',
      options: [
        'El 1% del valor FOB de la exportación.',
        'El 35% como impuesto a las ganancias ocasionales.',
        'El 0% porque las esmeraldas están exentas de toda contribución.',
        'El 19% del IVA general.'
      ],
      correctAnswer: 0,
      explanation: 'El Artículo 101 de la Ley 488 de 1998 fijó la cuota de fomento esmeraldero en el 1% sobre el valor FOB de toda exportación de esmeraldas, recursos parafiscales administrados por Fedesmeraldas para investigación, capacitación y desarrollo social.',
      scientificReference: 'Ley 488 de 1998, Artículo 101. Congreso de la República de Colombia.'
    },
    {
      id: 'm10-q2',
      question: '¿Por qué en la compraventa mayorista de un lote (parcel) el comprador evalúa por separado la "cabeza", el "cuerpo" y la "cola" en lugar de pagar un precio plano?',
      type: 'multiple_choice',
      options: [
        'Porque las piedras de la cola se regalan a los turistas.',
        'Porque la cabeza del lote (10-20% de las mejores piedras) suele concentrar más del 60% del valor comercial recuperable, mientras que el cuerpo y la cola deben venderse a precios menores para recuperar el costo operativo.',
        'Porque las máquinas de tallado solo pueden cortar piedras de igual tamaño.',
        'Porque es una superstición de los comisionistas de la Avenida Jiménez.'
      ],
      correctAnswer: 1,
      explanation: 'En los lotes mixtos la distribución de valor es fuertemente asimétrica. La cabeza del lote contiene las gemas de mayor calidad que generan el margen real de beneficio, mientras que la cola a menudo se liquida al costo para acelerar la rotación del capital.',
      scientificReference: 'Matlins, A. L., & Bonanno, A. C. (2009). Jewelry & Gems: The Buying Guide. GemStone Press.'
    },
    {
      id: 'm10-q3',
      question: '¿Qué récord histórico alcanzó la famosa "Esmeralda Rockefeller" de 18.04 quilates en la subasta de Christie\'s Nueva York en 2017?',
      type: 'multiple_choice',
      options: [
        'Fue declarada falsa y destruida en público.',
        'Alcanzó un precio récord de USD $5.511.500 (más de USD $305.000 por quilate), consolidándose como la esmeralda más cara por quilate jamás vendida en subasta pública.',
        'Se subastó por USD $1.000 en una rifa benéfica.',
        'Fue intercambiada por 100 toneladas de carbón mineral.'
      ],
      correctAnswer: 1,
      explanation: 'La Esmeralda Rockefeller (18.04 ct, de origen colombiano virgen No Oil) marcó un hito histórico mundial en Christie’s al rematarse en USD $5.511.500 (USD $305.516/ct), demostrando el poder financiero de las esmeraldas colombianas puras de gran tamaño.',
      scientificReference: 'Christie\'s Auction Results: The Rockefeller Emerald (June 20, 2017).'
    },
    {
      id: 'm10-q4',
      question: '¿Por qué el papel gemológico de celofán utilizado tradicionalmente en la Plazoleta del Rosario de Bogotá tiene un fondo interior blanco mate neutro?',
      type: 'multiple_choice',
      options: [
        'Para que la piedra no se escape volando con el viento.',
        'Porque el fondo blanco mate neutro permite observar el color puro de la esmeralda sin interferencia de los tonos cálidos o rojizos de la piel de los dedos del comerciante.',
        'Porque el papel blanco absorbe el calor del sol y calienta la gema.',
        'Porque la ley prohíbe el uso de papeles de colores en Colombia.'
      ],
      correctAnswer: 1,
      explanation: 'La luz reflejada por la piel humana introduce tonalidades cálidas o rojizas que alteran la percepción del tono verde. El fondo blanco neutro actúa como estándar colorimétrico pasivo permitiendo evaluar el matiz puro y la saturación real de la gema.',
      scientificReference: 'Ringsrud, R. (2009). Emeralds, A Passionate Guide. Green View Publishing.'
    },
    {
      id: 'm10-q5',
      question: '¿Cuál es el destino de exportación que concentra históricamente la mayor demanda de esmeraldas colombianas de gran quilataje (>5 ct) en condición certificada "No Oil" para subastas y alta joyería?',
      type: 'multiple_choice',
      options: [
        'Suiza (Ginebra y Zúrich).',
        'El Polo Norte.',
        'Camerún.',
        'Islandia.'
      ],
      correctAnswer: 0,
      explanation: 'Suiza es el epicentro de la alta relojería, las subastas de élite (Sotheby\'s, Christie\'s) y los laboratorios gemológicos más influyentes (SSEF, Gübelin), demandando gemas excepcionales sin tratamiento para patrimonios de inversión.',
      scientificReference: 'Fedesmeraldas: Informe Estadístico de Comercio Exterior (2022).'
    }
  ],
  externalReferences: [
    {
      title: 'Fedesmeraldas — Federación Nacional de Esmeraldas de Colombia',
      url: 'https://fedesmeraldas.org',
      institution: 'Fedesmeraldas',
      description: 'Portal institucional de la federación gremial, Fondo Nacional de la Esmeralda y proyectos sociales.',
      category: 'Gremio Oficial'
    },
    {
      title: 'ANM: Sistema de Información Minera y Registro RUCOM',
      url: 'https://www.anm.gov.co',
      institution: 'Agencia Nacional de Minería',
      description: 'Consulta oficial del Registro Único de Comercializadores de Minerales y estadísticas de exportación.',
      category: 'Normatividad Colombiana'
    }
  ],
  bibliography: [
    {
      author: 'Fedesmeraldas',
      year: '2022',
      title: 'La Esmeralda Colombiana: Cadena de Valor, Competitividad y Sostenibilidad',
      publication: 'Fondo Nacional de la Esmeralda, Bogotá D.C.',
      doiOrUrl: 'https://fedesmeraldas.org'
    },
    {
      author: 'Ringsrud, R.',
      year: '2009',
      title: 'Emeralds, A Passionate Guide: The Emeralds, The People, Their Stories',
      publication: 'Green View Publishing, Saratoga, CA',
      doiOrUrl: 'https://www.emeraldpassion.com'
    },
    {
      author: 'Congreso de la República de Colombia',
      year: '1998',
      title: 'Ley 488 de 1998, Artículo 101: Creación de la Cuota de Fomento Esmeraldero y Fondo Nacional de la Esmeralda',
      publication: 'Diario Oficial No. 43.460, Bogotá D.C.',
      doiOrUrl: 'http://www.secretariasenado.gov.co'
    }
  ]
};
