/**
 * ESMERALDA INTELIGENTE JAIRRESTAURA
 * Tipos de datos del ecosistema esmeraldero colombiano
 */

export type StoneStatus = 'en_bruto' | 'tallado' | 'engastado';

export type CommercialStatus = 
  | 'disponible' 
  | 'reservado' 
  | 'vendido' 
  | 'en_talla' 
  | 'coleccion';

export type ColombianOrigin = 
  | 'Muzo (Boyacá)'
  | 'Chivor (Boyacá)'
  | 'Coscuez (Boyacá)'
  | 'Gachalá (Cundinamarca)'
  | 'Peñas Blancas (Boyacá)'
  | 'Maripí (Boyacá)'
  | 'San Pablo de Borbur'
  | 'Otanche'
  | 'Colombia (Sin especificar yacimiento)'
  | 'Otro origen documentado';

export type TreatmentType = 
  | 'sin_tratar' // No oil
  | 'aceite_menor' // Minor cedarwood oil
  | 'aceite_moderado' // Moderate
  | 'aceite_significativo' // Significant
  | 'resina_polimero' // Resin / Polymer
  | 'no_determinado';

export type CutShape = 
  | 'Octagonal (Talla Esmeralda)'
  | 'Gota / Pera'
  | 'Cojín (Cushion)'
  | 'Oval'
  | 'Redonda / Brillante'
  | 'Marquesa'
  | 'Trillón'
  | 'Cabuchón'
  | 'Trapiche'
  | 'Bruto natural / Cristal';

export type DeclaredProvenanceType = 
  | 'Factura Legal (DIAN)'
  | 'Cuenta de Cobro Formal'
  | 'Registro Minero RUCOM'
  | 'Guía Minera de Transporte'
  | 'Herencia / Posesión Tradicional'
  | 'Declaración Verbal No Soportada';

export type LotClassification = 
  | 'Piedra Suelta'
  | 'Lote / Paquete'
  | 'Canutillo en Bruto'
  | 'Moralla'
  | 'Muestra de Colección';

export interface ModificationLogEntry {
  id: string;
  date: string;
  action: string;
  user?: string;
  details?: string;
}

export interface DocumentRecord {
  id: string;
  type: 'factura' | 'rucom' | 'guia_transporte' | 'certificado_lab' | 'cuenta_cobro' | 'otro';
  documentNumber: string;
  entityName: string;
  issueDate: string;
  fileUrl?: string;
  notes?: string;
  status: 'vigente' | 'vencido' | 'en_tramite';
}

export interface CustodyTransferEntry {
  id: string;
  date: string;
  fromParty: string;
  toParty: string;
  purpose: 'Custodia en Bóveda' | 'Envío a Taller de Talla' | 'Consignación Comercial' | 'Inspección de Laboratorio' | 'Venta Definitiva';
  location: string;
  notes?: string;
  documentReference?: string;
}

export interface GemologicalObservation {
  id: string;
  stoneId: string;
  date: string;
  instrumentsUsed: string[]; // e.g. ["Lupa 10x", "Microscopio Campo Oscuro", "Refractómetro 589nm"]
  refractiveIndex?: string; // e.g. "1.577 - 1.571"
  birefringence?: string; // e.g. "0.006 uniaxial negativo"
  specificGravity?: number; // e.g. 2.71
  pleochroism?: string; // e.g. "Dicroísmo marcado verde azulado / verde amarillento"
  inclusionsObserved: string[]; // e.g. ["Trifásica salina con halita", "Calcita romboédrica"]
  fluorescenceLW?: string;
  fluorescenceSW?: string;
  opticalCharacter?: string;
  conclusion: string;
  observerName: string;
}

export interface EmeraldStone {
  id: string; // Código único ej: EMR-2025-001
  reference: string; // Nombre o ref comercial
  status: StoneStatus;
  commercialStatus: CommercialStatus;
  origin: ColombianOrigin;
  weightCarats: number;
  weightGrams?: number;
  dimensions: {
    lengthMm: number;
    widthMm: number;
    depthMm: number;
  };
  colorTone: string; // ej: "Verde Muzo profundo", "Verde azuloso cristalino"
  saturation: 'Excepcional' | 'Muy Intensa' | 'Media' | 'Suave';
  transparency: 'Extra Fina Cristalina' | 'Fina Transparente' | 'Semitransparente' | 'Translúcida' | 'Opaca';
  inclusions: string; // Descripción del jardín: "Inclusiones trifásicas típicas, cristales de calcita..."
  treatment: TreatmentType;
  cutShape: CutShape;
  cutQuality: 'Excelente' | 'Muy Buena' | 'Buena' | 'Regular' | 'En bruto';
  certificateNumber?: string;
  certificateLab?: string; // ej: "CDTEC", "GIA", "Gubelin", "SSEF", "Ninguno"
  certificateUrl?: string;
  acquisitionDate: string;
  acquisitionCostCop?: number;
  acquisitionCostUsd?: number;
  estimatedPriceCop?: number;
  estimatedPriceUsd?: number;
  location: string; // ej: "Caja Fuerte Bogotá", "Taller de Lapidación"
  ownerName: string;
  photos: string[]; // URLs o Data URIs
  notes?: string;
  
  // Advanced Sector Traceability & Management
  lotClassification?: LotClassification;
  declaredProvenance?: DeclaredProvenanceType;
  documentNumber?: string; // NIT/Cédula/N° Factura o Declaración
  supplierName?: string;
  supplierRucom?: string;
  modificationHistory?: ModificationLogEntry[];
  associatedDocuments?: DocumentRecord[];
  custodyHistory?: CustodyTransferEntry[];
  gemologicalObservations?: GemologicalObservation[];

  createdAt: string;
  updatedAt: string;
}

export interface ValuationReport {
  id: string;
  stoneId: string;
  date: string;
  level: 'insuficiente' | 'orientacion_preliminar' | 'estimacion_comparativa';
  currency: 'USD' | 'COP';
  estimatedRangeUsd: { min: number; max: number };
  estimatedRangeCop: { min: number; max: number };
  confidenceScore: number; // 0 - 100%
  breakdown: {
    colorScore: number;
    clarityScore: number;
    cutScore: number;
    caratWeightImpact: number;
    treatmentImpact: number;
    originPremium: number;
  };
  assumptions: string[];
  limitations: string[];
  comparablesDescription: string;
}

export interface CuttingWorkOrder {
  id: string;
  code: string; // ej: OT-2025-01
  stoneId?: string; // ID de piedra si viene de inventario
  roughDescription: string;
  initialWeightCarats: number;
  roughGrams?: number;
  initialDimensions?: string;
  targetCutShape: CutShape;
  masterCutter: string;
  workshopName: string;
  startDate: string;
  estimatedDeliveryDate: string;
  completedDate?: string;
  status: 'recibida' | 'desbaste' | 'facetado' | 'pulido' | 'finalizada' | 'cancelada';
  finalWeightCarats?: number;
  finalGrams?: number;
  yieldPercentage?: number; // Calculado (final / inicial) * 100
  caratLoss?: number; // Merma en quilates = inicial - final
  lossPercentage?: number; // % de merma = 100 - yieldPercentage
  processStages?: { stage: string; completedDate?: string; notes?: string; operator?: string }[];
  laborCostCop: number;
  notes?: string;
  photosBefore: string[];
  photosAfter: string[];
}

export interface CommercialQuote {
  id: string;
  quoteNumber: string; // ej: COT-2025-001
  date: string;
  validUntil: string;
  sellerName: string;
  sellerContact: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  items: {
    stoneId: string;
    reference: string;
    weightCarats: number;
    cutShape: string;
    color: string;
    unitPriceUsd: number;
    unitPriceCop: number;
    subtotalUsd: number;
    subtotalCop: number;
  }[];
  totalUsd: number;
  totalCop: number;
  terms: string;
  status: 'emitida' | 'aceptada' | 'rechazada' | 'vencida';
}

export interface TradeOperation {
  id: string;
  type: 'compra' | 'venta';
  date: string;
  stoneId: string;
  stoneRef: string;
  counterpartName: string;
  counterpartType?: 'Proveedor / Minero' | 'Comprador / Joyero' | 'Taller Lapidario' | 'Coleccionista' | 'Intermediario';
  counterpartRucom?: string;
  counterpartNitOrId?: string;
  associatedStoneIds?: string[];
  amountCop: number;
  amountUsd: number;
  paymentMethod: string;
  legalSupportType?: 'Factura Electrónica' | 'Cuenta de Cobro con RUT' | 'Declaración de Origen' | 'Soporte Interno';
  invoiceNumber?: string;
  notes?: string;
}

export interface DirectoryProfile {
  id: string;
  commercialName: string;
  category: 'Comerciante' | 'Tallador' | 'Taller de Lapidación' | 'Gemólogo' | 'Joyería' | 'Productor / Minero' | 'Proveedor de Insumos';
  city: string;
  department: string;
  description: string;
  contactPerson: string;
  phone?: string;
  email?: string;
  address?: string;
  services: string[];
  verified: boolean;
  avatarUrl?: string;
}

export type AIAssistantId = 
  | 'gemologo'
  | 'valorador'
  | 'comerciante'
  | 'tallador'
  | 'inventario'
  | 'documental'
  | 'exportacion'
  | 'profesor'
  | 'negocios'
  | 'general';

export interface AssistantMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: string;
}

export interface ExternalReferenceLink {
  title: string;
  url: string;
  institution: string;
  description: string;
  category: string;
}

export interface AcademyLesson {
  id: string;
  category: string;
  title: string;
  readTime: string;
  difficulty: 'Iniciación' | 'Intermedio' | 'Avanzado' | 'Especialista';
  summary: string;
  heroImage: string;
  content: string;
  gallery: { url: string; caption: string }[];
  keyTakeaways: string[];
  externalLinks: ExternalReferenceLink[];
}

export interface VisualCatalogItem {
  id: string;
  category: 'yacimientos' | 'inclusiones' | 'tallas' | 'tratamientos' | 'certificados';
  title: string;
  subtitle: string;
  originOrType: string;
  description: string;
  imageUrl: string;
  specs: { label: string; value: string }[];
  externalReference?: ExternalReferenceLink;
}

export interface StudentCertificate {
  studentName: string;
  studentIdNumber: string;
  trackName: string;
  issueDate: string;
  certificateSerial: string;
  instructorName: string;
  instructorTitle: string;
  hoursCompleted: number;
  grade: string;
  verificationUrl?: string;
}
