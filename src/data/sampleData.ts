import { EmeraldStone, CuttingWorkOrder, CommercialQuote, DirectoryProfile, TradeOperation } from '../types';

export const SAMPLE_EMERALDS: EmeraldStone[] = [
  {
    id: 'EMR-2025-001',
    reference: 'Verde Fino Muzo Imperial',
    status: 'tallado',
    commercialStatus: 'disponible',
    origin: 'Muzo (Boyacá)',
    weightCarats: 3.42,
    weightGrams: 0.684,
    dimensions: {
      lengthMm: 9.8,
      widthMm: 8.2,
      depthMm: 5.6
    },
    colorTone: 'Verde Muzo profundo aterciopelado',
    saturation: 'Excepcional',
    transparency: 'Extra Fina Cristalina',
    inclusions: 'Jardín fino con inclusiones trifásicas diagnósticas colombianas (halita cúbica, salmuera y burbuja de gas CO2). Cristales de calcita espática diminutos.',
    treatment: 'aceite_menor',
    cutShape: 'Octagonal (Talla Esmeralda)',
    cutQuality: 'Excelente',
    certificateNumber: 'CDTEC-78241',
    certificateLab: 'CDTEC (Bogotá)',
    acquisitionDate: '2025-01-15',
    acquisitionCostCop: 28500000,
    acquisitionCostUsd: 6800,
    estimatedPriceCop: 42000000,
    estimatedPriceUsd: 10200,
    location: 'Bóveda Principal - Bogotá D.C.',
    ownerName: 'Jair Restaura & Asociados',
    photos: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    notes: 'Ejemplar de colección extraído de la veta Tequendama. Excelente retorno de luz, sin ventana.',
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-02-01T15:30:00Z'
  },
  {
    id: 'EMR-2025-002',
    reference: 'Lágrima Cristalina de Chivor',
    status: 'tallado',
    commercialStatus: 'disponible',
    origin: 'Chivor (Boyacá)',
    weightCarats: 2.15,
    weightGrams: 0.43,
    dimensions: {
      lengthMm: 10.4,
      widthMm: 6.8,
      depthMm: 4.5
    },
    colorTone: 'Verde azuloso cristalino brillante',
    saturation: 'Muy Intensa',
    transparency: 'Extra Fina Cristalina',
    inclusions: 'Inclusiones trifásicas en bandas paralelas, microcristal de pirita dorada característico del cinturón oriental.',
    treatment: 'sin_tratar',
    cutShape: 'Gota / Pera',
    cutQuality: 'Muy Buena',
    certificateNumber: 'GIA-221089452',
    certificateLab: 'GIA',
    acquisitionDate: '2025-01-22',
    acquisitionCostCop: 19000000,
    acquisitionCostUsd: 4500,
    estimatedPriceCop: 29500000,
    estimatedPriceUsd: 7100,
    location: 'Caja Fuerte La Candelaria',
    ownerName: 'Jair Restaura & Asociados',
    photos: [
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80'
    ],
    notes: 'Certificada sin tratamiento de claridad (No Clarity Enhancement). Muy cotizada para alta joyería.',
    createdAt: '2025-01-22T14:15:00Z',
    updatedAt: '2025-01-22T14:15:00Z'
  },
  {
    id: 'EMR-2025-003',
    reference: 'Fuego Vivo de Coscuez',
    status: 'tallado',
    commercialStatus: 'reservado',
    origin: 'Coscuez (Boyacá)',
    weightCarats: 4.80,
    weightGrams: 0.96,
    dimensions: {
      lengthMm: 11.2,
      widthMm: 10.1,
      depthMm: 6.2
    },
    colorTone: 'Verde vivo intenso con destellos dorados',
    saturation: 'Muy Intensa',
    transparency: 'Fina Transparente',
    inclusions: 'Jardín moderado estético. Microfracturas curadas con aceite de cedro menor.',
    treatment: 'aceite_menor',
    cutShape: 'Cojín (Cushion)',
    cutQuality: 'Muy Buena',
    certificateNumber: 'CDTEC-79910',
    certificateLab: 'CDTEC (Bogotá)',
    acquisitionDate: '2025-02-05',
    acquisitionCostCop: 34000000,
    acquisitionCostUsd: 8100,
    estimatedPriceCop: 51000000,
    estimatedPriceUsd: 12200,
    location: 'Bóveda Principal - Bogotá D.C.',
    ownerName: 'Jair Restaura & Asociados',
    photos: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    notes: 'Reservada para cliente internacional de Ginebra hasta fin de mes.',
    createdAt: '2025-02-05T09:20:00Z',
    updatedAt: '2025-02-10T11:00:00Z'
  },
  {
    id: 'EMR-2025-004',
    reference: 'Prisma Hexagonal en Bruto Muzo',
    status: 'en_bruto',
    commercialStatus: 'en_talla',
    origin: 'Muzo (Boyacá)',
    weightCarats: 12.60,
    weightGrams: 2.52,
    dimensions: {
      lengthMm: 18.5,
      widthMm: 12.0,
      depthMm: 9.4
    },
    colorTone: 'Verde profundo saturado sobre roca madre calcárea',
    saturation: 'Excepcional',
    transparency: 'Fina Transparente',
    inclusions: 'Cristal prismático natural con caras estriadas. Núcleo limpio y zonas periféricas con calcita.',
    treatment: 'sin_tratar',
    cutShape: 'Bruto natural / Cristal',
    cutQuality: 'En bruto',
    certificateNumber: 'RUCOM-748921',
    certificateLab: 'RUCOM / Minería Formal',
    acquisitionDate: '2025-02-12',
    acquisitionCostCop: 22000000,
    acquisitionCostUsd: 5300,
    estimatedPriceCop: 38000000,
    estimatedPriceUsd: 9100,
    location: 'Taller de Lapidación - Carrera 6ta',
    ownerName: 'Jair Restaura & Asociados',
    photos: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    notes: 'En proceso de orientación de mesa para talla octagonal gemela de ~4.2 ct proyectada.',
    createdAt: '2025-02-12T16:00:00Z',
    updatedAt: '2025-02-15T08:45:00Z'
  },
  {
    id: 'EMR-2025-005',
    reference: 'Esmeralda Trapiche Rueda de Muzo',
    status: 'tallado',
    commercialStatus: 'coleccion',
    origin: 'Muzo (Boyacá)',
    weightCarats: 5.10,
    weightGrams: 1.02,
    dimensions: {
      lengthMm: 11.8,
      widthMm: 11.5,
      depthMm: 3.8
    },
    colorTone: 'Verde esmeralda con seis brazos radiales de carbón',
    saturation: 'Muy Intensa',
    transparency: 'Semitransparente',
    inclusions: 'Estructura dendrítica simétrica perfecta de 6 rayos de lutita carbonosa que convergen en el núcleo hexagonal.',
    treatment: 'sin_tratar',
    cutShape: 'Cabuchón',
    cutQuality: 'Excelente',
    certificateNumber: 'CDTEC-81203',
    certificateLab: 'CDTEC (Bogotá)',
    acquisitionDate: '2024-11-10',
    acquisitionCostCop: 16000000,
    acquisitionCostUsd: 3800,
    estimatedPriceCop: 32000000,
    estimatedPriceUsd: 7700,
    location: 'Bóveda Principal - Bogotá D.C.',
    ownerName: 'Jair Restaura & Asociados',
    photos: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    notes: 'Espécimen geológico singular exclusivo de Boyacá. Pieza de museo y colección privada.',
    createdAt: '2024-11-10T10:00:00Z',
    updatedAt: '2025-01-05T09:00:00Z'
  }
];

export const SAMPLE_WORK_ORDERS: CuttingWorkOrder[] = [
  {
    id: 'WO-2025-001',
    code: 'OT-2025-01',
    stoneId: 'EMR-2025-004',
    roughDescription: 'Prisma Muzo 12.60 ct con terminación basal limpia',
    initialWeightCarats: 12.60,
    initialDimensions: '18.5 x 12.0 x 9.4 mm',
    targetCutShape: 'Octagonal (Talla Esmeralda)',
    masterCutter: 'Don Efraín Valenzuela (Maestro Lapidario)',
    workshopName: 'Taller El Chaflán de Oro (Av. Jiménez)',
    startDate: '2025-02-15',
    estimatedDeliveryDate: '2025-02-28',
    status: 'desbaste',
    finalWeightCarats: 0,
    yieldPercentage: 0,
    laborCostCop: 1200000,
    notes: 'Orientando la tabla perpendicular al eje óptico C para exaltar el verde profundo.',
    photosBefore: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    photosAfter: []
  },
  {
    id: 'WO-2025-002',
    code: 'OT-2025-02',
    stoneId: 'EMR-2025-001',
    roughDescription: 'Cristal en bruto de Muzo veta Tequendama',
    initialWeightCarats: 9.85,
    initialDimensions: '14.2 x 11.0 x 7.8 mm',
    targetCutShape: 'Octagonal (Talla Esmeralda)',
    masterCutter: 'Carlos Humberto Ortiz',
    workshopName: 'Lapidación Alta Precisión Candelaria',
    startDate: '2025-01-08',
    estimatedDeliveryDate: '2025-01-14',
    completedDate: '2025-01-14',
    status: 'finalizada',
    finalWeightCarats: 3.42,
    yieldPercentage: 34.72,
    laborCostCop: 950000,
    notes: 'Rendimiento sobresaliente del 34.72% conchaflanes limpios y tabla de 62%.',
    photosBefore: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    photosAfter: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const SAMPLE_QUOTES: CommercialQuote[] = [
  {
    id: 'COT-2025-001',
    quoteNumber: 'COT-2025-01',
    date: '2025-02-18',
    validUntil: '2025-03-05',
    sellerName: 'Jair Restaura — Comercializadora Esmeraldera',
    sellerContact: '+57 310 555 4321 • Bogotá D.C.',
    clientName: 'Atelier de Haute Joaillerie (París / Bogotá)',
    clientEmail: 'contact@haute-joaillerie-atelier.com',
    clientPhone: '+33 1 42 68 00 00',
    items: [
      {
        stoneId: 'EMR-2025-001',
        reference: 'Verde Fino Muzo Imperial',
        weightCarats: 3.42,
        cutShape: 'Octagonal (Talla Esmeralda)',
        color: 'Verde Muzo profundo aterciopelado',
        unitPriceUsd: 10200,
        unitPriceCop: 42000000,
        subtotalUsd: 10200,
        subtotalCop: 42000000
      }
    ],
    totalUsd: 10200,
    totalCop: 42000000,
    terms: 'Validez 15 días. Entrega en bóveda autorizada de Bogotá o exportación vía Brinks con seguro 100%. Certificado CDTEC original incluido.',
    status: 'emitida'
  }
];

export const SAMPLE_TRADE_OPERATIONS: TradeOperation[] = [
  {
    id: 'TR-001',
    type: 'compra',
    date: '2025-01-15',
    stoneId: 'EMR-2025-001',
    stoneRef: 'Verde Fino Muzo Imperial',
    counterpartName: 'Cooperativa Minera San Pablo de Borbur',
    amountCop: 28500000,
    amountUsd: 6800,
    paymentMethod: 'Transferencia Bancaria Bancolombia',
    invoiceNumber: 'FAC-MIN-9812',
    notes: 'Adquisición con salvoconducto RUCOM oficial y pago de regalías.'
  },
  {
    id: 'TR-002',
    type: 'compra',
    date: '2025-01-22',
    stoneId: 'EMR-2025-002',
    stoneRef: 'Lágrima Cristalina de Chivor',
    counterpartName: 'Asociación de Productores de Chivor',
    amountCop: 19000000,
    amountUsd: 4500,
    paymentMethod: 'Transferencia Bancaria',
    invoiceNumber: 'FAC-CHV-442',
    notes: 'Cristal en bruto de Chivor adquirido directamente en boca de mina.'
  }
];

export const SAMPLE_DIRECTORY: DirectoryProfile[] = [
  {
    id: 'DIR-001',
    commercialName: 'Centro de Desarrollo Tecnológico de la Esmeralda (CDTEC)',
    category: 'Gemólogo',
    city: 'Bogotá D.C.',
    department: 'Cundinamarca',
    description: 'Laboratorio gemológico de referencia científica para la certificación, origen y análisis de tratamientos de esmeraldas colombianas.',
    contactPerson: 'Equipo Gemológico Científico',
    phone: '+57 (601) 283-7060',
    email: 'contacto@cdtec.com.co',
    address: 'Calle 16 # 6-66, Edificio Avianca, Piso 15, Bogotá',
    services: ['Reporte Gemológico Oficial', 'Espectroscopía FTIR', 'Determinación de Origen', 'Detección de Resinas'],
    verified: true
  },
  {
    id: 'DIR-002',
    commercialName: 'Taller y Lapidación El Chaflán de Oro',
    category: 'Taller de Lapidación',
    city: 'Bogotá D.C.',
    department: 'Cundinamarca',
    description: 'Más de 35 años de tradición en talla clásica esmeralda octagonal, gotas, cojines y cabuchones para piedras de alto valor.',
    contactPerson: 'Maestro Efraín Valenzuela',
    phone: '+57 311 890 2314',
    email: 'taller.chaflan@esmeraldascolombia.com',
    address: 'Avenida Jiménez # 5-43, Oficina 402, La Candelaria',
    services: ['Talla de Cristales en Bruto', 'Retalla y Pulido de Superficie', 'Cálculo de Rendimiento Óptico'],
    verified: true
  },
  {
    id: 'DIR-003',
    commercialName: 'Muzo Emerald Heritage & Mining Co.',
    category: 'Productor / Minero',
    city: 'Muzo',
    department: 'Boyacá',
    description: 'Explotación minera formal y trazable en el corazón del occidente boyacense, comprometidos con minería verde y responsabilidad social.',
    contactPerson: 'Ing. Hernán Fonseca',
    phone: '+57 315 440 9182',
    email: 'operaciones@muzoheritage.co',
    address: 'Sector Minero Quebrada Las Ánimas, Muzo, Boyacá',
    services: ['Extracción Formal', 'Salvoconductos RUCOM', 'Lotes en Bruto Certificados'],
    verified: true
  },
  {
    id: 'DIR-004',
    commercialName: 'Esmeraldas & Gemas La Candelaria',
    category: 'Comerciante',
    city: 'Bogotá D.C.',
    department: 'Cundinamarca',
    description: 'Comercializadora y exportadora autorizada. Atención especializada a compradores internacionales de Asia, Europa y Norteamérica.',
    contactPerson: 'Alejandro Restrepo',
    phone: '+57 320 671 9054',
    email: 'ventas@lacandelaria-emeralds.com',
    address: 'Carrera 7 # 12C-23, Esmeralda Trade Center, Local 108',
    services: ['Venta Mayorista', 'Exportación con Visto Bueno Fedesmeraldas', 'Asesoría en Joyería Fina'],
    verified: true
  },
  {
    id: 'DIR-005',
    commercialName: 'Orfebrería y Taller Filigrana Verde',
    category: 'Joyería',
    city: 'Medellín',
    department: 'Antioquia',
    description: 'Diseño y engaste especializado de esmeraldas colombianas en oro de 18k y platino, con técnicas que protegen la integridad de la gema.',
    contactPerson: 'Valeria Gómez Londoño',
    phone: '+57 300 234 5678',
    email: 'contacto@filigranaverde.com',
    address: 'El Poblado, Cra 43A # 1-50',
    services: ['Engaste Seguro de Esmeraldas', 'Joyería de Autor', 'Restauración de Monturas Antiguas'],
    verified: true
  }
];

export const ACADEMY_LESSONS = [
  {
    id: 'geo-colombia',
    category: 'Geología y Origen',
    title: 'Génesis Geológica de las Esmeraldas Colombianas',
    readTime: '6 min',
    summary: 'Por qué las esmeraldas de Colombia son únicas en el mundo: formación hidrotermal en lutitas sedimentarias sin pegmatitas.',
    content: `A diferencia de las esmeraldas de Brasil, Zambia o Zimbabue (que se formaron por intrusiones ígneas y metamorfismo de contacto rico en hierro), las esmeraldas colombianas se originaron por un fenómeno hidrotermal sedimentario único en el planeta.

Hace aproximadamente 65 a 32 millones de años, durante el levantamiento tectónico de la Cordillera Oriental de Colombia, fluidos salinos a temperaturas entre 290°C y 360°C migraron a través de fracturas en lutitas negras ricas en materia orgánica.

Estos fluidos disolvieron el berilio, el cromo (Cr³⁺) y el vanadio (V³⁺) presentes en las rocas sedimentarias y los precipitaron en venas de calcita y dolomita. Al carecer de hierro en la solución (el hierro opaca la fluorescencia y le da un tono grisáceo al berilo), las esmeraldas colombianas adquirieron su inigualable verde puro y brillante con viva fluorescencia roja bajo luz ultravioleta.`
  },
  {
    id: 'tres-fases',
    category: 'Gemología Avanzada',
    title: 'La Inclusión Trifásica: Huella Digital Colombiana',
    readTime: '5 min',
    summary: 'Cómo identificar la inclusión trifásica que autentica el origen colombiano bajo el microscopio gemológico.',
    content: `La inclusión trifásica colombiana es la prueba reina microscópica de autenticidad y origen geográfico. Se compone de tres estados de la materia atrapados simultáneamente en cavidades del cristal:

1. **Fase Sólida:** Un microcristal cúbico perfecto de halita (sal común, NaCl), a veces acompañado de pequeños cristales de calcita o dolomita.
2. **Fase Líquida:** Salmuera acuosa residual del fluido hidrotermal original.
3. **Fase Gaseosa:** Una burbuja redondeada de dióxido de carbono (CO2) que se desplaza libremente dentro del líquido si se calienta ligeramente la platina del microscopio.

En las esmeraldas de Muzo y Coscuez, estas cavidades suelen tener terminaciones dentadas o escalonadas características, mientras que en Chivor suelen ser más estilizadas.`
  },
  {
    id: 'tratamientos',
    category: 'Tratamientos y Ética',
    title: 'Aceite de Cedro vs Resinas Poliméricas: Declaración Transparente',
    readTime: '7 min',
    summary: 'Diferencias técnicas entre el aceitado tradicional y los rellenos sintéticos permanentes, y su impacto en el valor de mercado.',
    content: `El berilo esmeralda es una gema naturalmente fisurada por las violentas tensiones tectónicas de su génesis. El tratamiento de claridad busca atenuar las fracturas que alcanzan la superficie:

- **Aceite de Cedro (*Cedarwood Oil*):** Práctica centenaria natural. Posee un índice de refracción (~1.515) muy cercano al de la esmeralda (~1.577). Es un proceso completamente reversible que se puede limpiar y re-aceitar en cualquier momento sin dañar la piedra.
- **Resinas Artificiales (Opticon, Permasafe, Palma):** Son polímeros termoestables con catalizador. Aunque ofrecen un resultado cosmético más duradero, con los años pueden amarillear, cuartearse y son muy difíciles de retirar.

**Impacto en la valoración:**
Un ejemplar *No Oil* (sin tratamiento de claridad) puede valorarse entre un 50% y un 300% más que la misma gema con tratamiento moderado. En ESMERALDA INTELIGENTE JAIRRESTAURA promovemos el cumplimiento estricto de las directrices de CIBJO y Fedesmeraldas: la declaración del tratamiento es una obligación ética y legal.`
  },
  {
    id: 'exportacion-legal',
    category: 'Comercio y Ley',
    title: 'Ruta Legal de Exportación de Esmeraldas en Colombia',
    readTime: '8 min',
    summary: 'Paso a paso ante la DIAN, ANM, RUCOM y Fondo Nacional de la Esmeralda para comerciar legalmente.',
    content: `Colombia cuenta con un marco legal riguroso para garantizar la trazabilidad de sus gemas:

1. **Inscripción en RUCOM:** Todo comercializador debe estar registrado en el Registro Único de Comercializadores de Minerales de la Agencia Nacional de Minería (ANM).
2. **Salvoconducto de Transporte:** Documento oficial que certifica que el lote proviene de un título minero formal o de mineros tradicionales autorizados.
3. **Pago de Regalías:** Liquidación de la regalía minera oficial ante la ANM.
4. **Visto Bueno de Fedesmeraldas:** Inspección física del lote y verificación arancelaria.
5. **Declaración de Exportación (DEX) ante la DIAN:** Registro oficial de salida del territorio aduanero nacional.
6. **Transporte de Valores:** Traslado custodiado mediante empresas internacionales de seguridad blindada (Brinks, Malca-Amit, Ferrari).`
  }
];

export const GLOSSARY_TERMS = [
  { term: 'Berilo', definition: 'Ciclosilicato de berilio y aluminio (Be3Al2Si6O18). Cuando contiene cromo y vanadio se convierte en la variedad esmeralda.' },
  { term: 'Jardín (Jardin)', definition: 'Conjunto poético de inclusiones naturales líquidas, gaseosas y sólidas en el interior de una esmeralda que atestiguan su génesis natural.' },
  { term: 'Inclusión Trifásica', definition: 'Cavidad interna que contiene simultáneamente un cristal de halita (sólido), salmuera (líquido) y una burbuja de gas CO2, diagnóstica de Colombia.' },
  { term: 'Gota de Aceite', definition: 'Fenómeno óptico muy raro en esmeraldas de Muzo de altísima gama, producido por irregularidades en el crecimiento cristalino que suavizan la luz como el terciopelo.' },
  { term: 'Trapiche', definition: 'Variedad extraordinaria de esmeralda colombiana caracterizada por seis brazos radiales de lutita carbonosa que forman una estrella fija similar a una rueda de molino de caña.' },
  { term: 'Aceite de Cedro', definition: 'Sustancia vegetal natural utilizada tradicionalmente para atenuar la visibilidad de fracturas en esmeraldas por su compatibilidad de índice de refracción.' },
  { term: 'CDTEC', definition: 'Centro de Desarrollo Tecnológico de la Esmeralda Colombiana, laboratorio científico de referencia nacional e internacional con sede en Bogotá.' },
  { term: 'RUCOM', definition: 'Registro Único de Comercializadores de Minerales administrado por la Agencia Nacional de Minería de Colombia para asegurar la legalidad minera.' },
  { term: 'Chaflán', definition: 'Las cuatro esquinas cortadas en bisel características de la talla esmeralda octagonal, diseñadas para proteger la gema de golpes y fracturas por clivaje.' },
  { term: 'Eje Óptico C', definition: 'Dirección cristalográfica a lo largo de la cual la esmeralda exhibe su color verde más puro. El tallador debe alinear la tabla perpendicularmente a este eje.' }
];

export const ACADEMY_QUIZ = [
  {
    id: 1,
    question: '¿Cuáles son los dos elementos cromóforos principales que confieren el color verde característico a las esmeraldas colombianas?',
    options: [
      'Hierro y Titanio',
      'Cromo y Vanadio',
      'Manganeso y Cobre',
      'Níquel y Cobalto'
    ],
    correctAnswer: 1,
    explanation: 'El cromo (Cr³⁺) y el vanadio (V³⁺) en ausencia casi total de hierro son los responsables del verde puro, saturado y fluorescente de las esmeraldas colombianas.'
  },
  {
    id: 2,
    question: '¿Qué tres componentes forman la inclusión trifásica diagnóstica de las esmeraldas colombianas?',
    options: [
      'Pirita, cuarzo y aire',
      'Halita cúbica, salmuera líquida y burbuja de gas CO2',
      'Calcita, dolomita y agua dulce',
      'Aceite, resina y carbón'
    ],
    correctAnswer: 1,
    explanation: 'La inclusión trifásica colombiana se compone de un cristal sólido de halita (sal cúbica), líquido salino residual y una burbuja de gas de dióxido de carbono.'
  },
  {
    id: 3,
    question: '¿Por qué la talla octagonal (Talla Esmeralda) tiene cuatro esquinas biseladas (chaflanes)?',
    options: [
      'Para gastar menos disco de diamante',
      'Para proteger la gema de golpes mecánicos y fracturas por clivaje basal',
      'Para que pese exactamente el doble',
      'Porque es obligatorio por la DIAN'
    ],
    correctAnswer: 1,
    explanation: 'Los chaflanes eliminan las puntas agudas débiles del cristal, protegiendo a la esmeralda de fracturarse durante el engaste o el uso cotidiano.'
  },
  {
    id: 4,
    question: '¿Cuál es el tratamiento de claridad tradicional aceptado y reversible por la gemología internacional?',
    options: [
      'Resina polimérica con catalizador (Permasafe)',
      'Vidrio al plomo coloreado',
      'Aceite natural de cedro puro',
      'Tinción con tintura verde de anilina'
    ],
    correctAnswer: 2,
    explanation: 'El aceite de cedro natural es la práctica centenaria estándar internacional porque no altera la estructura de la piedra y es completamente reversible.'
  }
];
