import { 
  EmeraldStone, 
  CuttingWorkOrder, 
  CommercialQuote, 
  DirectoryProfile, 
  TradeOperation,
  AcademyLesson,
  VisualCatalogItem
} from '../types';

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
    lotClassification: 'Piedra Suelta',
    declaredProvenance: 'Factura Legal (DIAN)',
    documentNumber: 'FE-2025-8741',
    supplierName: 'Sociedad Minera de Muzo S.A.S.',
    supplierRucom: 'RUCOM-BOY-11024',
    modificationHistory: [
      { id: 'LOG-003', date: '2025-02-01T15:30:00Z', action: 'Actualización de avalúo', details: 'Ajuste de precio estimado a $10,200 USD tras certificación CDTEC.' },
      { id: 'LOG-002', date: '2025-01-20T11:00:00Z', action: 'Emisión de Certificado', details: 'Emisión de certificado CDTEC-78241 con dictamen de aceite menor.' },
      { id: 'LOG-001', date: '2025-01-15T10:00:00Z', action: 'Ingreso al Inventario', details: 'Registro inicial de la gema con factura FE-2025-8741.' }
    ],
    associatedDocuments: [
      { id: 'DOC-01', type: 'factura', documentNumber: 'FE-2025-8741', entityName: 'DIAN / Factura Electrónica', issueDate: '2025-01-15', status: 'vigente' },
      { id: 'DOC-02', type: 'rucom', documentNumber: 'RUCOM-BOY-11024', entityName: 'Agencia Nacional de Minería', issueDate: '2024-11-20', status: 'vigente' },
      { id: 'DOC-03', type: 'certificado_lab', documentNumber: 'CDTEC-78241', entityName: 'CDTEC Colombia', issueDate: '2025-01-20', status: 'vigente' }
    ],
    custodyHistory: [
      { id: 'CUS-02', date: '2025-01-25T09:00:00Z', fromParty: 'Taller de Lapidación Bogotá', toParty: 'Bóveda Principal Bogotá D.C.', purpose: 'Custodia en Bóveda', location: 'Bóveda Principal - Bogotá D.C.', notes: 'Recepción tras peritaje y pesaje final.' },
      { id: 'CUS-01', date: '2025-01-15T14:00:00Z', fromParty: 'Sociedad Minera de Muzo', toParty: 'Jair Restaura & Asociados', purpose: 'Consignación Comercial', location: 'Oficina Comercial Candelaria', notes: 'Entrega física con guía de transporte.' }
    ],
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
    notes: 'Rendimiento sobresaliente del 34.72% con chaflanes limpios y tabla de 62%.',
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

/* EXHAUSTIVE ACADEMIC LESSONS WITH IMAGES, KEY TAKEAWAYS & INSTITUTIONAL LINKS */
export const ACADEMY_LESSONS: AcademyLesson[] = [
  {
    id: 'geo-colombia',
    category: 'Geología & Génesis Hidrotermal',
    title: 'Génesis Geológica y Cuencas Sedimentarias de la Cordillera Oriental',
    readTime: '8 min',
    difficulty: 'Intermedio',
    summary: 'Por qué las esmeraldas de Colombia son un milagro geológico único: formación hidrotermal sedimentaria sin contacto pegmatítico y ausencia de hierro.',
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    content: `A diferencia de casi todos los yacimientos del mundo (Brasil, Zambia, Zimbabue, Rusia, Madagascar o Afganistán), donde el berilo esmeralda se formó por intrusiones ígneas ácidas (pegmatitas) en rocas metamórficas ricas en hierro, las esmeraldas de Colombia se originaron por un fenómeno hidrotermal puramente sedimentario.

### 1. El Cinturón Occidental y el Cinturón Oriental
La Cordillera Oriental colombiana alberga dos cuencas de mineralización distintas:
- **Cinturón Occidental (Boyacá y Santander):** Incluye los legendarios yacimientos de Muzo, Coscuez, San Pablo de Borbur, Maripí y Peñas Blancas. Se emplaza en las formaciones cretácicas Paja y Rosablanca (lutitas negras ricas en materia orgánica carbonosa y evaporitas).
- **Cinturón Oriental (Boyacá y Cundinamarca):** Abarca Chivor, Gachalá, Macanal y Ubalá. Se hospeda en las formaciones Guavio y Macanal, caracterizándose por una tectónica de fallas de sobrecorrimiento que facilitó la circulación de salmueras calientes.

### 2. El Proceso Hidrotermal Extremo
Hace entre 65 y 32 millones de años, fluidos hipersalinos con concentraciones de NaCl de hasta el 40% en peso y temperaturas entre 290°C y 360°C migraron a través de fracturas abiertas por la orogenia andina.
Estos fluidos:
1. Lixiviaron el berilio (Be) de las lutitas sedimentarias.
2. Extrajeron el cromo (Cr³⁺) y vanadio (V³⁺) presentes en la materia orgánica fósil.
3. Precipitaron en venas de calcita, dolomita, pirita y albita formando cristales de berilo de excepcional transparencia.

### 3. La Falta de Hierro: El Secreto de la Fluorescencia y Pureza de Color
En la geoquímica de las esmeraldas, el ion hierro (Fe²⁺/Fe³⁺) actúa como un potente inhibidor (quencher) de la fluorescencia y añade un matiz grisáceo o parduzco. Debido al ambiente reductor de las lutitas colombianas, el hierro quedó atrapado en sulfuros (pirita FeS2) y no ingresó a la red cristalina del berilo.
Como resultado, el cromo (Cr³⁺) emite una intensa fluorescencia roja bajo luz ultravioleta de onda larga, otorgando a la esmeralda colombiana su brillo vivo aterciopelado inconfundible.`,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        caption: 'Cristal prismático hexagonal en matriz de calcita blanca y lutita negra carbonosa'
      },
      {
        url: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80',
        caption: 'Esmeralda cristalina con corte en gota evidenciando el verde azuloso de Chivor'
      }
    ],
    keyTakeaways: [
      'Génesis sedimentaria-hidrotermal única en el planeta (sin intrusiones ígneas).',
      'El cromo y vanadio provienen de lutitas negras cretácicas ricas en materia orgánica.',
      'Ausencia casi total de hierro, permitiendo saturación de verde puro y fluorescencia UV viva.',
      'División geotectónica fundamental entre Cinturón Occidental (Muzo/Coscuez) y Oriental (Chivor/Gachalá).'
    ],
    externalLinks: [
      {
        title: 'Estudios Geológicos de la Esmeralda en Colombia — SGC',
        url: 'https://www.sgc.gov.co',
        institution: 'Servicio Geológico Colombiano',
        description: 'Cartografía geológica oficial y boletines técnicos de la cuenca sedimentaria de Boyacá.',
        category: 'Geología Oficial'
      },
      {
        title: 'Research on Colombian Emerald Hydrothermal Genesis — GIA',
        url: 'https://www.gia.edu/gems-gemology',
        institution: 'Gemological Institute of America',
        description: 'Artículos científicos revisados por pares sobre inclusiones y geoquímica isotópica de oxígeno en esmeraldas colombianas.',
        category: 'Investigación Científica'
      },
      {
        title: 'CDTEC — Caracterización Científica de la Esmeralda',
        url: 'https://www.cdtec.com.co',
        institution: 'Centro de Desarrollo Tecnológico de la Esmeralda',
        description: 'Laboratorio de referencia en Bogotá con espectroscopía FTIR y Raman.',
        category: 'Laboratorio Gemológico'
      }
    ]
  },
  {
    id: 'tres-fases',
    category: 'Gemología Diagnóstica',
    title: 'La Inclusión Trifásica: Criterio Científico de Origen Colombiano',
    readTime: '7 min',
    difficulty: 'Avanzado',
    summary: 'Análisis microscópico y espectroscópico de las cavidades que albergan halita sólida, líquido salobre y burbuja de CO2 gaseoso.',
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    content: `Bajo el microscopio gemológico de inmersión o campo oscuro, la inclusión trifásica colombiana representa la prueba reina para autenticar el origen geográfico y diferenciar la gema natural de imitaciones sintéticas (Flux o hidrotermales Biron/Chatham).

### 1. Morfología de los Tres Estados de la Materia
Cada cavidad primaria o pseudosecundaria contiene simultáneamente:
1. **Fase Sólida:** Un microcristal cúbico euhedral de halita (cloruro de sodio, NaCl), a menudo acompañado de diminutos cristales hijos de calcita, dolomita o silvita.
2. **Fase Líquida:** Salmuera acuosa residual de los fluidos hidrotermales originales atrapados hace más de 30 millones de años.
3. **Fase Gaseosa:** Una burbuja esférica u ovalada de dióxido de carbono (CO2) y vapor de agua. Si se calienta suavemente la muestra a unos 31°C (temperatura crítica del CO2), la burbuja experimenta cambios de fase observables bajo luz polarizada.

### 2. Diferenciación por Yacimientos
- **Muzo y Coscuez:** Las cavidades trifásicas presentan terminaciones dentadas, en forma de peine o sierra ("jagged terminations"). En ejemplares de Muzo es muy común encontrar finas agujas amarillas o pardas de parisita-(Ce) [Ca(Ce,La)2(CO3)3F2].
- **Chivor:** Las cavidades trifásicas suelen ser más alargadas, tubulares y regulares. Se acompañan frecuentemente de cristales bien formados de pirita dorada, albita y cuarzo.

### 3. Diferenciación con Esmeraldas Internacionales
- **Zambia (Kagem):** Inclusiones bifásicas tubulares, cristales de turmalina negra (chorlo), mica biotita y magnetita.
- **Brasil (Santa Terezinha / Belmont):** Cristales de hematita, micas marrones y fases fluidas de baja salinidad.
- **Rusia (Urales):** Cristales de actinolita ("bambú") y flogopita.`,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        caption: 'Microfotografía óptica a 40x: cavidad trifásica con cubo de halita y burbuja móvil'
      },
      {
        url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        caption: 'Esmeralda tallada octagonal con jardín fino y pureza óptica de alta gama'
      }
    ],
    keyTakeaways: [
      'Tres fases: cubo de halita (sólido) + salmuera (líquido) + CO2 (gas).',
      'Terminaciones dentadas y espinosas típicas de Muzo y Coscuez.',
      'Presencia de pirita dorada como inclusión accesoria diagnóstica de Chivor.',
      'Ausencia de minerales de hierro como biotita o turmalina que delatan orígenes extranjeros.'
    ],
    externalLinks: [
      {
        title: 'Microscopic Inclusions in Gemstones — Gübelin Gem Lab',
        url: 'https://www.gubelingemlab.com',
        institution: 'Gübelin Academy (Lucerna, Suiza)',
        description: 'Atlas de inclusiones de referencia mundial fundado por el Dr. Eduard Gübelin.',
        category: 'Gemología Internacional'
      },
      {
        title: 'SSEF Swiss Gemmological Institute — Emerald Testing',
        url: 'https://www.ssef.ch',
        institution: 'SSEF (Basilea, Suiza)',
        description: 'Técnicas avanzadas de análisis de fluidos y radiación Raman en berilos preciosos.',
        category: 'Laboratorio de Alta Gama'
      }
    ]
  },
  {
    id: 'trapiche',
    category: 'Especímenes Extraordinarios',
    title: 'Esmeraldas Trapiche: El Milagro Simétrico de los Seis Radios',
    readTime: '6 min',
    difficulty: 'Especialista',
    summary: 'La formación única en el mundo de cristales hexagonales con sectores de crecimiento y brazos de lutita carbonosa.',
    heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    content: `La esmeralda Trapiche es uno de los fenómenos cristalográficos más raros y codiciados de la naturaleza. Debe su nombre a la semejanza de su sección transversal con los rodillos o engranajes dentados de los trapiches utilizados en las moliendas de caña de azúcar en Colombia.

### 1. Anatomía y Estructura Cristalina
Una esmeralda Trapiche consta de:
1. **Un núcleo central hexagonal:** Que puede ser transparente o relleno de inclusiones oscuras.
2. **Seis brazos o radios radiales:** Formados por lutita carbonosa y matriz de calcita que se proyectan desde los vértices o las aristas del prisma hexagonal.
3. **Seis sectores trapezoidales o prismáticos:** De berilo esmeralda verde transparente que crecieron entre los radios.

### 2. Mecanismo de Crecimiento Esquelético
Los estudios de difracción de rayos X y catodoluminiscencia demuestran que el cristal experimentó un crecimiento esqueletal rápido:
- El núcleo se formó primero.
- Posteriormente, las aristas del prisma crecieron a mayor velocidad que las caras planas, atrapando la matriz sedimentaria carbonosa rica en lutita a lo largo de las fronteras de contacto.
- Este fenómeno se da casi exclusivamente en los distritos mineros de Muzo, Peñas Blancas y Coscuez.

### 3. Criterios de Colección y Talla
- Generalmente se tallan en **cabuchón plano** o láminas pulidas por ambas caras para maximizar la visibilidad del patrón de seis rayos.
- Se valoran por la simetría de los radios, la pureza y verdor de los sectores transparentes y la centralidad del núcleo hexagonal.`,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        caption: 'Cabuchón de esmeralda Trapiche con seis brazos simétricos sobre núcleo hexagonal perfecto'
      }
    ],
    keyTakeaways: [
      'Fenómeno geológico endémico casi exclusivo de Boyacá (Muzo y Peñas Blancas).',
      'Patrón cristalográfico de 6 radios carbonosos orientados según la simetría hexagonal (P6/mcc).',
      'Muy apreciadas por museos, coleccionistas internacionales y piezas de alta joyería escultórica.'
    ],
    externalLinks: [
      {
        title: 'Trapiche Emeralds of Colombia — Gems & Gemology',
        url: 'https://www.gia.edu',
        institution: 'GIA Research Library',
        description: 'Monografía detallada sobre la cristalografía y zonación en esmeraldas Trapiche colombianas.',
        category: 'Cristalografía'
      },
      {
        title: 'Mindat Mineral Database — Emerald from Muzo',
        url: 'https://www.mindat.org/loc-791.html',
        institution: 'Hudson Institute of Mineralogy',
        description: 'Base de datos global con coordenadas, paragénesis mineral y fotografías de museos.',
        category: 'Mineralogía'
      }
    ]
  },
  {
    id: 'gota-de-aceite',
    category: 'Color & Óptica',
    title: 'El Color Verde Imperial y el Fenómeno de la "Gota de Aceite"',
    readTime: '7 min',
    difficulty: 'Avanzado',
    summary: 'Cómo los iones de cromo y las perturbaciones microscópicas de crecimiento crean el brillo aterciopelado más cotizado en subastas.',
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    content: `El color es el factor primordial que determina el 50% al 60% del valor comercial de una esmeralda. Las esmeraldas colombianas gozan de una reputación inigualable debido al balance perfecto entre saturación, tono y ausencia de modulación grisácea.

### 1. La Física del Color: Cr³⁺ y V³⁺
- El ion cromo trivalente (Cr³⁺) sustituye al aluminio (Al³⁺) en los sitios octaédricos de la red del berilo. Absorbe la luz en longitudes de onda del violeta (~400 nm) y del amarillo-naranja (~600 nm), transmitiendo una ventana nítida en el verde (~510 nm).
- El vanadio (V³⁺) complementa la absorción y refuerza los tonos verdes profundos cálidos característicos de Muzo.

### 2. El Efecto Óptico "Gota de Aceite" (*Butterfly Effect / Velouté*)
Descrito históricamente por los comerciantes del Imperio Español como *gota de aceite*, este fenómeno se manifiesta como una suavidad aterciopelada que dispersa la luz uniformemente a través de la gema, eliminando cualquier aspecto vidrioso o reflectancia cortante.
- **Causa científica:** No se debe a aceite líquido, sino a microestructuras geométricas de crecimiento celular y geminaciones submicroscópicas de calcita y berilo durante la cristalización.
- La luz que incide se refracta suavemente por múltiples facetas microscópicas internas, creando un aspecto radiante similar al aceite de oliva virgen o al terciopelo verde.
- Los reportes de casas de subastas como Sotheby's y Christie's reservan menciones especiales para esmeraldas con *Gota de Aceite* comprobada, alcanzando cotizaciones millonarias.`,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        caption: 'Esmeralda de Muzo con efecto Gota de Aceite: color aterciopelado homogéneo'
      }
    ],
    keyTakeaways: [
      'El cromo y el vanadio en sitios octaédricos generan la ventana espectral de verde puro.',
      'La Gota de Aceite es una textura óptica interna celular producida por la naturaleza, no por rellenos.',
      'Suaviza la luz y otorga un aspecto aterciopelado que maximiza el valor en subastas internacionales.'
    ],
    externalLinks: [
      {
        title: 'The "Gota de Aceite" Optical Effect in Colombian Emeralds — GIA',
        url: 'https://www.gia.edu/gems-gemology/winter-2008-gota-aceite-emerald-ringsrud',
        institution: 'Gems & Gemology (Ringsrud & GIA)',
        description: 'Estudio seminal sobre el origen cristalográfico del efecto óptico Gota de Aceite.',
        category: 'Investigación Óptica'
      }
    ]
  },
  {
    id: 'tratamientos-cedro',
    category: 'Tratamientos & Ética',
    title: 'Tratamientos de Claridad: Aceite de Cedro Natural vs Resinas Poliméricas',
    readTime: '9 min',
    difficulty: 'Intermedio',
    summary: 'Protocolos de laboratorio para detectar aceites y resinas sintéticas (Opticon, Permasafe), grados CIBJO y principios de declaración ética.',
    heroImage: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=1200&q=80',
    content: `El berilo esmeralda es una piedra naturalmente fisurada debido a la presión tectónica hidrotermal. Por más de cuatro siglos, la humanidad ha recurrido al tratamiento de claridad para atenuar las fracturas abiertas a la superficie.

### 1. Aceite de Cedro Natural (*Cedrus deodara / libani*)
- **Por qué funciona:** Su índice de refracción (~1.512 a 1.518) es extraordinariamente cercano al del berilo esmeralda (~1.577 a 1.583). Al llenar las microfracturas, la luz atraviesa sin refractarse en las paredes de aire de la fisura.
- **Ventaja ética fundamental:** Es un tratamiento tradicional, natural, incoloro y **completamente reversible**. Se puede extraer con alcohol o solventes suaves para limpieza o re-aceitado sin deteriorar la piedra.

### 2. Resinas Artificiales y Polímeros Sintéticos (Opticon, Palma, Permasafe)
- Se introducen mediante calor y vacío profundo, a menudo con endurecedores o catalizadores epóxicos.
- **Riesgos graves:** Aunque proporcionan una apariencia inicial duradera, con los años sufren fotodegradación por rayos UV, se oxidan, se cuartean en forma de telaraña blanca y toman tonos amarillentos desagradables. Su retiro es sumamente complejo y puede requerir solventes ácidos agresivos.

### 3. Escala Internacional de Tratamiento de Laboratorio (CDTEC, GIA, CIBJO)
1. **None / No Oil (Sin Tratamiento):** No se detectan sustancias extrañas en las fracturas. Cotización premium excepcional.
2. **Insignificant / Minor (Insignificante a Menor):** Cantidad mínima de aceite en fisuras capilares muy superficiales.
3. **Moderate (Moderado):** Aceitado estándar en fracturas intermedias.
4. **Significant (Significativo):** Fracturas profundas y extensas rellenas de sustancia.
5. **Resin Filled:** Presencia de resina polimérica artificial identificada mediante espectroscopía infrarroja FTIR (bandas diagnósticas de polímero a 2850-2960 cm⁻¹ y 1730 cm⁻¹).

*Norma de ESMERALDA INTELIGENTE JAIRRESTAURA:* La declaración transparente del tratamiento no demerita la gema: protege la reputación del comerciante y la confianza del comprador internacional.`,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80',
        caption: 'Inspección bajo microscopio con luz polarizada para detectar residuos de polímeros'
      }
    ],
    keyTakeaways: [
      'El aceite de cedro natural es la práctica estándar internacional aceptada y reversible.',
      'Las resinas epóxicas artificiales sufren envejecimiento y amarilleamiento con los años.',
      'Los reportes modernos clasifican tanto el tipo de relleno como la extensión (None, Minor, Moderate, Significant).',
      'La espectroscopía infrarroja FTIR es el método científico definitivo para distinguir aceite de cedro de resinas.'
    ],
    externalLinks: [
      {
        title: 'CIBJO Gemstone Book — Diamond, Coloured Gemstones and Pearl Standards',
        url: 'https://www.cibjo.org',
        institution: 'The World Jewellery Confederation (CIBJO)',
        description: 'Normas internacionales sobre divulgación obligatoria de tratamientos en gemas preciosas.',
        category: 'Normativa Global'
      },
      {
        title: 'CDTEC Guía de Tratamientos y Rellenos de Esmeraldas',
        url: 'https://www.cdtec.com.co',
        institution: 'CDTEC Colombia',
        description: 'Criterios de diagnóstico espectral aplicados en el laboratorio de Bogotá.',
        category: 'Laboratorio Nacional'
      }
    ]
  },
  {
    id: 'lapidacion-talla',
    category: 'Lapidación & Talla',
    title: 'El Arte Lapidario: Talla Octagonal, Eje Óptico C y Chaflanes Protectores',
    readTime: '8 min',
    difficulty: 'Intermedio',
    summary: 'Técnicas de los maestros talladores de la Avenida Jiménez y Boyacá para orientar el pleocroísmo y maximizar el rendimiento en peso.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    content: `La lapidación de una esmeralda colombiana es un equilibrio delicado entre física óptica, mineralogía y economía. A diferencia del diamante (donde se busca maximizar la dispersión y el fuego mediante ángulos matemáticos rígidos), en la esmeralda el tallador busca preservar y exaltar el **color puro** protegiendo la integridad física de un cristal con tensiones internas.

### 1. El Pleocroísmo y la Orientación del Eje Óptico C
El berilo esmeralda es un cristal uniaxial ópticamente negativo. Presenta pleocroísmo dicroico marcado:
- **Rayo ordinario (paralelo al plano basal / perpendicular al eje C):** Verde puro saturado a verde azuloso intenso.
- **Rayo extraordinario (paralelo al eje óptico C):** Verde amarillento más claro.

El maestro lapidario debe orientar la **tabla (mesa principal)** estrictamente perpendicular al eje óptico C. De esta forma, el observador mira a través de la dirección donde la absorción de luz entrega el verde más intenso y aterciopelado. Si la tabla se orienta paralela al eje C, la esmeralda lucirá pálida o amarillenta.

### 2. Anatomía de la Talla Esmeralda (Octagonal Escalonada)
- **Chaflanes (Cut Corners):** Las cuatro esquinas biseladas cortadas a 45 grados son indispensables. En los cristales hexagonales con clivaje basal imperfecto {0001}, las esquinas afiladas a 90 grados sufrirían roturas inmediatas ante el más leve golpe o durante el engaste en joyería.
- **Proporciones ideales:**
  - Tabla: 55% a 65% del ancho de la piedra.
  - Profundidad total: 60% a 70%.
  - Escalones de corona: Generalmente 2 o 3 escalones.
  - Escalones de pabellón: 3 o 4 escalones calculados para evitar la "ventana" (escape de luz central).

### 3. Rendimiento y Merma
En la lapidación de esmeraldas colombianas en bruto de buena calidad prismática, el rendimiento promedio es del **25% al 40%** del peso inicial. En cristales con fisuras transversales o "morralla", el rendimiento puede descender al 15%-20%.`,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        caption: 'Maestro lapidario orientando el cristal sobre disco de diamante con dop de cera'
      }
    ],
    keyTakeaways: [
      'La tabla debe tallarse perpendicular al eje óptico C para aprovechar el pleocroísmo verde azuloso.',
      'Los chaflanes octogonales eliminan las esquinas puntiagudas frágiles protegiendo la gema.',
      'El rendimiento promedio de un prisma en bruto oscila entre el 25% y 40% del peso original.'
    ],
    externalLinks: [
      {
        title: 'Facet Cutting Styles & Gemstone Proportions — Gemval',
        url: 'https://www.gemval.com',
        institution: 'International Lapidary Guild',
        description: 'Diagramas de facetado y ángulos de reflexión total interna en berilos.',
        category: 'Talla y Lapidación'
      }
    ]
  },
  {
    id: 'marco-legal-exportacion',
    category: 'Comercio & Ley',
    title: 'Ruta Legal, Minería Formal, RUCOM y Exportación Aduanera DIAN',
    readTime: '9 min',
    difficulty: 'Intermedio',
    summary: 'Procedimiento paso a paso para la trazabilidad minera, salvoconductos de transporte, regalías ANM y salida aduanera formal.',
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    content: `El sector esmeraldero colombiano ha vivido una profunda transformación hacia la formalización, la transparencia tributaria y las cadenas de suministro limpias y auditables.

### 1. El Registro Único de Comercializadores de Minerales (RUCOM)
Administrado por la Agencia Nacional de Minería (ANM):
- Toda persona natural o jurídica que compre, transporte, transforme o venda esmeraldas en Colombia debe contar con su certificado RUCOM vigente.
- Solo pueden vender mineral quienes provengan de:
  1. Títulos mineros legalmente otorgados (con contrato de concesión y licencia ambiental).
  2. Autorizaciones temporales de minería tradicional.

### 2. Salvoconducto de Transporte de Minerales
- Documento único expedido a través de la plataforma de la ANM que ampara la movilización de cada lote de esmeraldas desde la boca de mina en Boyacá o Cundinamarca hasta los centros de comercialización en Bogotá.
- Incluye peso en quilates, tipo de mineral, municipio de origen, titular del título minero y destino.

### 3. Pago de Regalías y Liquidación
- La esmeralda genera regalías a favor del Estado colombiano (reguladas por la Ley 141 de 1994 y modificaciones posteriores).
- Se liquidan con base en los precios base oficiales fijados por la Unidad de Planeación Minero Energética (UPME) y se cancelan ante la ANM antes de la exportación.

### 4. Visto Bueno de Fedesmeraldas y Exportación DIAN
- **Fedesmeraldas (Federación Nacional de Esmeraldas de Colombia):** Administra el Fondo Nacional de la Esmeralda (FNE). Un perito gemológico oficial inspecciona el lote para verificar que la descripción y el valor declarado correspondan con la gema física.
- **Declaración de Exportación (DEX) ante la DIAN:** Registro oficial aduanero para salida legal del país.
- **Custodia Blindada:** El embarque debe realizarse mediante operadores de transporte de valores blindados (Brinks, Ferrari, Malca-Amit) con póliza de seguro marítimo/aéreo al 100%.`,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        caption: 'Embalaje de seguridad con precintos inviolables para despacho internacional'
      }
    ],
    keyTakeaways: [
      'Inscripción obligatoria en el RUCOM de la Agencia Nacional de Minería.',
      'Salvoconducto de transporte requerido para cualquier movilización de gemas en bruto o talladas.',
      'Pago obligatorio de regalías mineras a favor de la nación.',
      'Visto bueno de Fedesmeraldas y Declaración de Exportación (DEX) ante la DIAN.'
    ],
    externalLinks: [
      {
        title: 'Agencia Nacional de Minería — Portal RUCOM',
        url: 'https://www.anm.gov.co/?q=rucom',
        institution: 'Agencia Nacional de Minería (ANM)',
        description: 'Consulta oficial de comercializadores autorizados y salvoconductos mineros.',
        category: 'Gobierno Colombiano'
      },
      {
        title: 'Fedesmeraldas — Federación Nacional de Esmeraldas',
        url: 'https://www.fedesmeraldas.org',
        institution: 'Fedesmeraldas Colombia',
        description: 'Gremio cúpula de la esmeralda colombiana, programas de minería verde y visto bueno de exportación.',
        category: 'Gremio Oficial'
      },
      {
        title: 'DIAN — Dirección de Impuestos y Aduanas Nacionales',
        url: 'https://www.dian.gov.co',
        institution: 'DIAN Colombia',
        description: 'Normativa aduanera, aranceles y radicación de Declaraciones de Exportación (DEX).',
        category: 'Aduanas'
      }
    ]
  }
];

/* VISUAL CATALOG ITEMS (FIELD GUIDE) */
export const VISUAL_CATALOG_ITEMS: VisualCatalogItem[] = [
  // Yacimientos
  {
    id: 'cat-muzo',
    category: 'yacimientos',
    title: 'Mina de Muzo (Boyacá)',
    subtitle: 'La Capital Mundial de la Esmeralda',
    originOrType: 'Cinturón Occidental • Boyacá',
    description: 'Yacimiento legendario situado a orillas del río Minero. Famoso por su verde cálido profundo aterciopelado ("Verde Muzo") y la presencia del fenómeno óptico Gota de Aceite.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Formación Geológica', value: 'Formación Paja (Lutitas calcáreas negras)' },
      { label: 'Tonalidad Típica', value: 'Verde profundo saturado cálido o neutro' },
      { label: 'Inclusiones Diagnósticas', value: 'Trifásicas dentadas, parisita, calcita espática' },
      { label: 'Minerales Asociados', value: 'Pirita, calcita, cuarzo, barita' }
    ],
    externalReference: {
      title: 'Muzo Emerald Mines — Mindat Location',
      url: 'https://www.mindat.org/loc-791.html',
      institution: 'Mindat.org',
      description: 'Registro histórico y geológico del yacimiento de Muzo.',
      category: 'Geología'
    }
  },
  {
    id: 'cat-chivor',
    category: 'yacimientos',
    title: 'Mina de Chivor (Boyacá)',
    subtitle: 'El Verde Cristalino del Oriente',
    originOrType: 'Cinturón Oriental • Boyacá',
    description: 'Emplazada en las escarpadas montañas del valle de Tenza. Famosa por sus cristales de transparencia excepcional, color verde azulado brillante y microcristales de pirita dorada.',
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Formación Geológica', value: 'Formación Guavio / Macanal' },
      { label: 'Tonalidad Típica', value: 'Verde azuloso cristalino muy abierto' },
      { label: 'Inclusiones Diagnósticas', value: 'Trifásicas tubulares, cristales de pirita euhedral' },
      { label: 'Minerales Asociados', value: 'Albita, pirita dorada, cuarzo hialino' }
    ],
    externalReference: {
      title: 'Chivor Mining District History — GIA',
      url: 'https://www.gia.edu',
      institution: 'GIA',
      description: 'Historia de la reapertura de Chivor por Don Francisco Restrepo a principios del siglo XX.',
      category: 'Historia'
    }
  },
  {
    id: 'cat-coscuez',
    category: 'yacimientos',
    title: 'Mina de Coscuez (Boyacá)',
    subtitle: 'El Fuego y la Luminosidad de San Pablo de Borbur',
    originOrType: 'Cinturón Occidental • Boyacá',
    description: 'Yacimiento prolífico reconocido por su inigualable rendimiento de extracción y cristales con un brillo vivo con reflejos ligeramente amarillentos ("Fuego de Coscuez").',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Formación Geológica', value: 'Formación Rosablanca / Paja' },
      { label: 'Tonalidad Típica', value: 'Verde vivo amarillento muy luminoso' },
      { label: 'Inclusiones Diagnósticas', value: 'Trifásicas complejas, zonación de color marcada' },
      { label: 'Minerales Asociados', value: 'Dolomita, calcita marrón, pirita' }
    ]
  },
  {
    id: 'cat-gachala',
    category: 'yacimientos',
    title: 'Mina de Gachalá (Cundinamarca)',
    subtitle: 'Cuna de Cristales Gigantes Históricos',
    originOrType: 'Cinturón Oriental • Cundinamarca',
    description: 'Yacimiento ubicado en Cundinamarca donde se extrajo en 1967 la legendaria Esmeralda Gachalá de 858 quilates (actualmente custodiada en el Instituto Smithsoniano en Washington D.C.).',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Hito Histórico', value: 'Esmeralda Gachalá (858 ct - Smithsonian)' },
      { label: 'Tonalidad Típica', value: 'Verde translúcido intenso' },
      { label: 'Inclusiones', value: 'Trifásicas orientadas, calcita microcristalina' }
    ]
  },

  // Atlas de Inclusiones
  {
    id: 'inc-trifasica',
    category: 'inclusiones',
    title: 'Inclusión Trifásica Colombiana Típica',
    subtitle: 'Huella Dactilar Microscópica Primaria',
    originOrType: 'Muzo • Chivor • Coscuez',
    description: 'Cavidad interna que retiene simultáneamente un cubo de halita (sólido), salmuera acuosa hidrotermal (líquido) y una burbuja de dióxido de carbono (gas).',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Aumento Recomendado', value: '20x a 60x (Microscopio gemológico)' },
      { label: 'Iluminación', value: 'Campo oscuro o fibra óptica oblicua' },
      { label: 'Significado', value: 'Prueba inequívoca de origen colombiano natural' }
    ]
  },
  {
    id: 'inc-pirita',
    category: 'inclusiones',
    title: 'Cristal de Pirita Dorada Euhedral',
    subtitle: 'Sello Clásico de las Minas de Chivor',
    originOrType: 'Chivor (Boyacá)',
    description: 'Microcristales de sulfuro de hierro (FeS2) de brillo metálico dorado brillante atrapados en la masa cristalina de la esmeralda sin alterar su transparencia.',
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Composición', value: 'Disulfuro de hierro (FeS2)' },
      { label: 'Brillo', value: 'Metálico reflectante' },
      { label: 'Diagnóstico', value: 'Muy frecuente en esmeraldas de Chivor' }
    ]
  },
  {
    id: 'inc-parisita',
    category: 'inclusiones',
    title: 'Agujas Prismáticas de Parisita-(Ce)',
    subtitle: 'Mineral Raro de Tierras Raras Exclusivo de Muzo',
    originOrType: 'Muzo (Boyacá)',
    description: 'La parisita es un fluorocarbonato de cerio y lantano descubierto originalmente en las minas de Muzo. Aparece como agujas pardo-amarillentas finísimas dentro de la esmeralda.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Composición', value: 'Ca(Ce,La)2(CO3)3F2' },
      { label: 'Color', value: 'Amarillo miel a pardo rojizo' },
      { label: 'Diagnóstico', value: 'Específico del Cinturón Occidental de Boyacá' }
    ]
  },

  // Tallas & Formas
  {
    id: 'cut-octagonal',
    category: 'tallas',
    title: 'Talla Octagonal (Talla Esmeralda Clásica)',
    subtitle: 'La Reina de las Formas Lapidarias',
    originOrType: 'Corte Escalonado con Chaflanes',
    description: 'Diseño geométrico creado específicamente para esta gema. Sus facetas rectangulares escalonadas y cuatro esquinas biseladas (chaflanes) protegen al cristal de fracturas.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Facetas Habituales', value: '49 a 57 facetas' },
      { label: 'Ángulo de Corona', value: '38° a 45°' },
      { label: 'Ventaja Principal', value: 'Máxima protección mecánica y retorno de color puro' }
    ]
  },
  {
    id: 'cut-pera',
    category: 'tallas',
    title: 'Talla Gota / Pera',
    subtitle: 'Elegancia Asimétrica para Alta Joyería',
    originOrType: 'Corte Mixto o Brillante',
    description: 'Combina el contorno redondeado del óvalo con la punta de una marquesa. Muy codiciada para colgantes y aretes de gala.',
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Uso Principal', value: 'Aretes y dijes colgantes' },
      { label: 'Rendimiento', value: 'Optimiza cristales cónicos o asimétricos' }
    ]
  },
  {
    id: 'cut-cabuchon',
    category: 'tallas',
    title: 'Talla Cabuchón Pulido',
    subtitle: 'Superficie Curva sin Facetas',
    originOrType: 'Corte Convexo',
    description: 'Ideal para esmeraldas con un jardín denso, inclusiones aterciopeladas abundantes o especímenes Trapiche. Resalta el brillo vítreo suave de la gema.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Acabado', value: 'Pulido liso abovedado' },
      { label: 'Ideal para', value: 'Esmeraldas Trapiche o gemas con jardín denso' }
    ]
  },

  // Tratamientos
  {
    id: 'trt-no-oil',
    category: 'tratamientos',
    title: 'Grado: Sin Tratamiento (No Clarity Enhancement / No Oil)',
    subtitle: 'El Santo Grial Gemológico de Colección',
    originOrType: 'Estado Natural Puro',
    description: 'Esmeralda que no presenta ninguna sustancia extraña en sus fisuras. Solo el 1% o 2% de las esmeraldas de alta gama alcanzan este estatus con certificación internacional.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Cotización', value: 'Hasta 3x - 4x sobre gemas tratadas' },
      { label: 'Diagnóstico FTIR', value: 'Línea de base limpia sin bandas CH a 2900 cm⁻¹' },
      { label: 'Laboratorios', value: 'CDTEC, GIA, Gubelin, SSEF' }
    ]
  },
  {
    id: 'trt-cedro-minor',
    category: 'tratamientos',
    title: 'Aceite de Cedro Natural — Grado Menor (Minor Clarity Enhancement)',
    subtitle: 'El Estándar Internacional de Alta Gama',
    originOrType: 'Sustancia Vegetal Natural Reversible',
    description: 'Tratamiento tradicional con aceite puro de cedro que llena únicamente microfisuras capilares superficiales. Totalmente aceptado en las principales casas de subastas del mundo.',
    imageUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Índice de Refracción', value: '1.515 (Cercano al 1.577 de la esmeralda)' },
      { label: 'Reversibilidad', value: '100% reversible con alcohol isopropílico' },
      { label: 'Norma CIBJO', value: 'Aceptado con declaración en factura' }
    ]
  }
];

export const GLOSSARY_TERMS = [
  { term: 'Berilo', definition: 'Ciclosilicato de berilio y aluminio (Be3Al2Si6O18) cristalizado en el sistema hexagonal. Cuando contiene cromo y vanadio se convierte en la variedad esmeralda.' },
  { term: 'Jardín (Jardin)', definition: 'Conjunto poético de inclusiones naturales líquidas, gaseosas y sólidas en el interior de una esmeralda que atestiguan su génesis natural hidrotermal.' },
  { term: 'Inclusión Trifásica', definition: 'Cavidad microscópica interna que contiene simultáneamente un cristal de halita (sólido), salmuera (líquido) y una burbuja de gas CO2, diagnóstica de Colombia.' },
  { term: 'Gota de Aceite', definition: 'Fenómeno óptico muy raro en esmeraldas de Muzo de altísima gama, producido por irregularidades en el crecimiento celular de la calcita que suavizan la luz como el terciopelo.' },
  { term: 'Trapiche', definition: 'Variedad extraordinaria de esmeralda colombiana caracterizada por seis brazos radiales de lutita carbonosa que forman una estrella fija similar a una rueda de molino de caña.' },
  { term: 'Aceite de Cedro', definition: 'Sustancia vegetal natural utilizada tradicionalmente para atenuar la visibilidad de fracturas en esmeraldas por su compatibilidad de índice de refracción.' },
  { term: 'CDTEC', definition: 'Centro de Desarrollo Tecnológico de la Esmeralda Colombiana, laboratorio científico de referencia nacional e internacional con sede en Bogotá.' },
  { term: 'RUCOM', definition: 'Registro Único de Comercializadores de Minerales administrado por la Agencia Nacional de Minería de Colombia para asegurar la legalidad minera.' },
  { term: 'Chaflán', definition: 'Las cuatro esquinas cortadas en bisel características de la talla esmeralda octagonal, diseñadas para proteger la gema de golpes y fracturas por clivaje.' },
  { term: 'Eje Óptico C', definition: 'Dirección cristalográfica a lo largo de la cual la esmeralda exhibe su color verde más puro. El tallador debe alinear la tabla perpendicularmente a este eje.' },
  { term: 'Parisita', definition: 'Fluorocarbonato de calcio y cerio descubierto en Muzo, muy apreciado como inclusión diagnóstica en forma de agujas pardo-amarillentas.' },
  { term: 'Dicroísmo', definition: 'Propiedad óptica por la cual la esmeralda transmite dos colores diferentes (verde azulado y verde amarillento) según la dirección de la luz polarizada.' },
  { term: 'FTIR', definition: 'Espectroscopía infrarroja por transformada de Fourier; técnica científica para identificar de forma no destructiva si una esmeralda tiene aceite de cedro o resinas sintéticas.' },
  { term: 'Fedesmeraldas', definition: 'Federación Nacional de Esmeraldas de Colombia, gremio representativo que agrupa a mineros, comercializadores y talleres lapidarios.' },
  { term: 'No Oil', definition: 'Calificación gemológica suprema que certifica que una esmeralda no contiene ningún aceite ni sustancia extraña en sus fisuras.' }
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
  },
  {
    id: 5,
    question: '¿Cómo debe orientar el maestro lapidario la tabla (mesa) respecto al eje óptico C para lograr el verde más intenso?',
    options: [
      'Paralela al eje C',
      'Perpendicular al eje C',
      'A 45 grados exactos',
      'No importa la orientación del cristal'
    ],
    correctAnswer: 1,
    explanation: 'El pleocroísmo del berilo muestra el verde puro a través del rayo ordinario, el cual se observa perpendicularmente al eje óptico C.'
  },
  {
    id: 6,
    question: '¿Qué entidad oficial administra el Registro Único de Comercializadores de Minerales (RUCOM) en Colombia?',
    options: [
      'La Agencia Nacional de Minería (ANM)',
      'La Cámara de Comercio de Bogotá',
      'El Banco de la República',
      'La Policía Nacional'
    ],
    correctAnswer: 0,
    explanation: 'La Agencia Nacional de Minería (ANM) administra el RUCOM para garantizar la legalidad y trazabilidad de los minerales explotados y comercializados en Colombia.'
  }
];

export const CERTIFICATE_TRACKS = [
  'DIPLOMADO EN GEMOLOGÍA, GEOLOGÍA, IDENTIFICACIÓN, TALLA Y COMERCIALIZACIÓN DE LA ESMERALDA COLOMBIANA (120 HORAS)',
  'Diplomado en Gemología y Clasificación de Esmeraldas Colombianas',
  'Especialista en Evaluación, Tallas y Rendimiento Lapidario',
  'Experto en Comercio Internacional, Trazabilidad RUCOM y Certificación',
  'Fundamentos de Identificación Microscópica e Inclusiones Trifásicas'
];
