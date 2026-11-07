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
  initialDimensions?: string;
  targetCutShape: CutShape;
  masterCutter: string;
  workshopName: string;
  startDate: string;
  estimatedDeliveryDate: string;
  completedDate?: string;
  status: 'recibida' | 'desbaste' | 'facetado' | 'pulido' | 'finalizada' | 'cancelada';
  finalWeightCarats?: number;
  yieldPercentage?: number; // Calculado (final / inicial) * 100
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
  amountCop: number;
  amountUsd: number;
  paymentMethod: string;
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
