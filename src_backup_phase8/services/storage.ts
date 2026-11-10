import { 
  EmeraldStone, 
  CuttingWorkOrder, 
  CommercialQuote, 
  TradeOperation, 
  DirectoryProfile 
} from '../types';
import { 
  SAMPLE_EMERALDS, 
  SAMPLE_WORK_ORDERS, 
  SAMPLE_QUOTES, 
  SAMPLE_TRADE_OPERATIONS, 
  SAMPLE_DIRECTORY 
} from '../data/sampleData';

const STORAGE_KEYS = {
  EMERALDS: 'jairrestaura_emeralds_v1',
  WORK_ORDERS: 'jairrestaura_work_orders_v1',
  QUOTES: 'jairrestaura_quotes_v1',
  OPERATIONS: 'jairrestaura_operations_v1',
  DIRECTORY: 'jairrestaura_directory_v1',
  USER_PREFERENCES: 'jairrestaura_prefs_v1'
};

export class StorageService {
  // Emeralds Inventory
  static getEmeralds(): EmeraldStone[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.EMERALDS);
      if (!data) {
        this.saveEmeralds(SAMPLE_EMERALDS);
        return SAMPLE_EMERALDS;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error reading emeralds from storage', e);
      return SAMPLE_EMERALDS;
    }
  }

  static saveEmeralds(emeralds: EmeraldStone[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.EMERALDS, JSON.stringify(emeralds));
      window.dispatchEvent(new CustomEvent('jairrestaura:emeralds-updated'));
    } catch (e) {
      console.error('Error saving emeralds', e);
    }
  }

  static getEmeraldById(id: string): EmeraldStone | undefined {
    const list = this.getEmeralds();
    return list.find(s => s.id.toLowerCase() === id.toLowerCase());
  }

  static saveEmerald(stone: EmeraldStone, changeReason?: string): { success: boolean; message?: string } {
    const list = this.getEmeralds();
    const index = list.findIndex(s => s.id.toLowerCase() === stone.id.toLowerCase());
    const now = new Date().toISOString();
    
    if (index >= 0) {
      // Update with audit trail entry
      const existingHistory = list[index].modificationHistory || [];
      const newEntry = {
        id: `LOG-${Date.now()}`,
        date: now,
        action: 'Actualización de datos',
        details: changeReason || 'Modificación de parámetros gemológicos, comerciales o de custodia.'
      };
      
      list[index] = { 
        ...stone, 
        modificationHistory: [newEntry, ...existingHistory],
        updatedAt: now 
      };
    } else {
      // Check duplicate ID
      const exists = list.some(s => s.id.trim().toLowerCase() === stone.id.trim().toLowerCase());
      if (exists) {
        return { success: false, message: `Ya existe una esmeralda con el código ${stone.id}` };
      }
      const initialEntry = {
        id: `LOG-${Date.now()}`,
        date: now,
        action: 'Creación de registro',
        details: 'Ingreso inicial de la pieza al inventario inteligente.'
      };
      list.unshift({ 
        ...stone, 
        modificationHistory: stone.modificationHistory && stone.modificationHistory.length > 0 
          ? stone.modificationHistory 
          : [initialEntry],
        createdAt: now, 
        updatedAt: now 
      });
    }

    this.saveEmeralds(list);
    return { success: true };
  }

  static addCustodyTransfer(stoneId: string, entry: any): boolean {
    const list = this.getEmeralds();
    const index = list.findIndex(s => s.id.toLowerCase() === stoneId.toLowerCase());
    if (index >= 0) {
      const stone = list[index];
      const custody = stone.custodyHistory || [];
      const log = stone.modificationHistory || [];
      
      const newTransfer = {
        ...entry,
        id: entry.id || `CUS-${Date.now()}`,
        date: entry.date || new Date().toISOString()
      };
      
      const newLog = {
        id: `LOG-${Date.now()}`,
        date: new Date().toISOString(),
        action: 'Traslado de custodia',
        details: `Traslado desde ${entry.fromParty} hacia ${entry.toParty} (${entry.purpose}). Ubicación: ${entry.location}.`
      };

      list[index] = {
        ...stone,
        location: entry.location || stone.location,
        custodyHistory: [newTransfer, ...custody],
        modificationHistory: [newLog, ...log],
        updatedAt: new Date().toISOString()
      };

      this.saveEmeralds(list);
      return true;
    }
    return false;
  }

  static addDocumentRecord(stoneId: string, doc: any): boolean {
    const list = this.getEmeralds();
    const index = list.findIndex(s => s.id.toLowerCase() === stoneId.toLowerCase());
    if (index >= 0) {
      const stone = list[index];
      const docs = stone.associatedDocuments || [];
      const log = stone.modificationHistory || [];
      
      const newDoc = {
        ...doc,
        id: doc.id || `DOC-${Date.now()}`,
        issueDate: doc.issueDate || new Date().toISOString().split('T')[0]
      };

      const newLog = {
        id: `LOG-${Date.now()}`,
        date: new Date().toISOString(),
        action: 'Anexo de documento legal/comercial',
        details: `Asociado ${doc.type.toUpperCase()}: ${doc.documentNumber} (${doc.entityName}).`
      };

      list[index] = {
        ...stone,
        associatedDocuments: [newDoc, ...docs],
        modificationHistory: [newLog, ...log],
        updatedAt: new Date().toISOString()
      };

      this.saveEmeralds(list);
      return true;
    }
    return false;
  }

  static addGemologicalObservation(stoneId: string, obs: any): boolean {
    const list = this.getEmeralds();
    const index = list.findIndex(s => s.id.toLowerCase() === stoneId.toLowerCase());
    if (index >= 0) {
      const stone = list[index];
      const observations = stone.gemologicalObservations || [];
      const log = stone.modificationHistory || [];

      const newObs = {
        ...obs,
        id: obs.id || `OBS-${Date.now()}`,
        date: obs.date || new Date().toISOString()
      };

      const newLog = {
        id: `LOG-${Date.now()}`,
        date: new Date().toISOString(),
        action: 'Registro de observación gemológica',
        details: `Evaluación instrumental por ${obs.observerName || 'Gemólogo'}. Dictamen: ${obs.conclusion || 'Registrado'}`
      };

      list[index] = {
        ...stone,
        gemologicalObservations: [newObs, ...observations],
        modificationHistory: [newLog, ...log],
        updatedAt: new Date().toISOString()
      };

      this.saveEmeralds(list);
      return true;
    }
    return false;
  }

  static deleteEmerald(id: string): boolean {
    const list = this.getEmeralds();
    const filtered = list.filter(s => s.id.toLowerCase() !== id.toLowerCase());
    if (filtered.length !== list.length) {
      this.saveEmeralds(filtered);
      return true;
    }
    return false;
  }

  // Work Orders (Talladores)
  static getWorkOrders(): CuttingWorkOrder[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WORK_ORDERS);
      if (!data) {
        this.saveWorkOrders(SAMPLE_WORK_ORDERS);
        return SAMPLE_WORK_ORDERS;
      }
      return JSON.parse(data);
    } catch (e) {
      return SAMPLE_WORK_ORDERS;
    }
  }

  static saveWorkOrders(orders: CuttingWorkOrder[]): void {
    localStorage.setItem(STORAGE_KEYS.WORK_ORDERS, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent('jairrestaura:orders-updated'));
  }

  static saveWorkOrder(order: CuttingWorkOrder): void {
    const list = this.getWorkOrders();
    const index = list.findIndex(o => o.id === order.id);
    if (index >= 0) {
      list[index] = order;
    } else {
      list.unshift(order);
    }
    this.saveWorkOrders(list);
  }

  static deleteWorkOrder(id: string): void {
    const list = this.getWorkOrders().filter(o => o.id !== id);
    this.saveWorkOrders(list);
  }

  // Quotes (Cotizaciones)
  static getQuotes(): CommercialQuote[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUOTES);
      if (!data) {
        this.saveQuotes(SAMPLE_QUOTES);
        return SAMPLE_QUOTES;
      }
      return JSON.parse(data);
    } catch (e) {
      return SAMPLE_QUOTES;
    }
  }

  static saveQuotes(quotes: CommercialQuote[]): void {
    localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(quotes));
    window.dispatchEvent(new CustomEvent('jairrestaura:quotes-updated'));
  }

  static saveQuote(quote: CommercialQuote): void {
    const list = this.getQuotes();
    const index = list.findIndex(q => q.id === quote.id);
    if (index >= 0) {
      list[index] = quote;
    } else {
      list.unshift(quote);
    }
    this.saveQuotes(list);
  }

  // Operations (Compras y Ventas)
  static getOperations(): TradeOperation[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.OPERATIONS);
      if (!data) {
        this.saveOperations(SAMPLE_TRADE_OPERATIONS);
        return SAMPLE_TRADE_OPERATIONS;
      }
      return JSON.parse(data);
    } catch (e) {
      return SAMPLE_TRADE_OPERATIONS;
    }
  }

  static saveOperations(ops: TradeOperation[]): void {
    localStorage.setItem(STORAGE_KEYS.OPERATIONS, JSON.stringify(ops));
    window.dispatchEvent(new CustomEvent('jairrestaura:operations-updated'));
  }

  static addOperation(op: TradeOperation): void {
    const list = this.getOperations();
    list.unshift(op);
    this.saveOperations(list);
  }

  // Directory (Directorio Sector)
  static getDirectory(): DirectoryProfile[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DIRECTORY);
      if (!data) {
        this.saveDirectory(SAMPLE_DIRECTORY);
        return SAMPLE_DIRECTORY;
      }
      return JSON.parse(data);
    } catch (e) {
      return SAMPLE_DIRECTORY;
    }
  }

  static saveDirectory(dir: DirectoryProfile[]): void {
    localStorage.setItem(STORAGE_KEYS.DIRECTORY, JSON.stringify(dir));
    window.dispatchEvent(new CustomEvent('jairrestaura:directory-updated'));
  }

  static addDirectoryProfile(profile: DirectoryProfile): void {
    const list = this.getDirectory();
    list.unshift(profile);
    this.saveDirectory(list);
  }

  // Backup Export
  static exportFullBackup(): void {
    const backup = {
      platform: 'ESMERALDA INTELIGENTE JAIRRESTAURA',
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      emeralds: this.getEmeralds(),
      workOrders: this.getWorkOrders(),
      quotes: this.getQuotes(),
      operations: this.getOperations(),
      directory: this.getDirectory(),
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jairrestaura_respaldo_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Export CSV for Inventory
  static exportEmeraldsCsv(): void {
    const emeralds = this.getEmeralds();
    const headers = [
      'ID',
      'Referencia',
      'Clasificacion_Lote',
      'Estado',
      'Comercial',
      'Origen',
      'Quilates',
      'Gramos',
      'Talla',
      'Color',
      'Tratamiento',
      'Procedencia_Declarada',
      'Documento_Soporte',
      'Proveedor',
      'Certificado',
      'Laboratorio',
      'Precio_USD',
      'Precio_COP',
      'Ubicacion'
    ];

    const rows = emeralds.map(e => [
      `"${e.id}"`,
      `"${e.reference}"`,
      `"${e.lotClassification || 'Piedra Suelta'}"`,
      `"${e.status}"`,
      `"${e.commercialStatus}"`,
      `"${e.origin}"`,
      e.weightCarats,
      (e.weightCarats * 0.2).toFixed(3),
      `"${e.cutShape}"`,
      `"${e.colorTone}"`,
      `"${e.treatment}"`,
      `"${e.declaredProvenance || 'No declarada'}"`,
      `"${e.documentNumber || ''}"`,
      `"${e.supplierName || ''}"`,
      `"${e.certificateNumber || ''}"`,
      `"${e.certificateLab || ''}"`,
      e.estimatedPriceUsd || '',
      e.estimatedPriceCop || '',
      `"${e.location}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inventario_esmeraldas_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Export CSV for Commercial Operations
  static exportOperationsCsv(): void {
    const ops = this.getOperations();
    const headers = [
      'ID',
      'Tipo',
      'Fecha',
      'Gema_ID',
      'Referencia',
      'Contraparte',
      'Tipo_Contraparte',
      'RUCOM',
      'NIT_Cedula',
      'Monto_USD',
      'Monto_COP',
      'Medio_Pago',
      'Soporte_Legal',
      'Factura_Recibo'
    ];

    const rows = ops.map(o => [
      `"${o.id}"`,
      `"${o.type.toUpperCase()}"`,
      `"${o.date}"`,
      `"${o.stoneId}"`,
      `"${o.stoneRef}"`,
      `"${o.counterpartName}"`,
      `"${o.counterpartType || 'Comercial'}"`,
      `"${o.counterpartRucom || ''}"`,
      `"${o.counterpartNitOrId || ''}"`,
      o.amountUsd,
      o.amountCop,
      `"${o.paymentMethod}"`,
      `"${o.legalSupportType || 'Soporte Interno'}"`,
      `"${o.invoiceNumber || ''}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `operaciones_comerciales_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Export CSV for Cutting Work Orders
  static exportWorkOrdersCsv(): void {
    const orders = this.getWorkOrders();
    const headers = [
      'Codigo_OT',
      'Gema_ID',
      'Descripcion_Bruto',
      'Peso_Inicial_Ct',
      'Peso_Final_Ct',
      'Rendimiento_Porcentaje',
      'Merma_Quilates',
      'Talla_Objetivo',
      'Maestro_Tallador',
      'Taller',
      'Estado',
      'Fecha_Inicio',
      'Fecha_Entrega',
      'Costo_Mano_Obra_COP'
    ];

    const rows = orders.map(o => {
      const finalWeight = o.finalWeightCarats || 0;
      const yieldPct = o.yieldPercentage || (finalWeight > 0 ? (finalWeight / o.initialWeightCarats) * 100 : 0);
      const lossCarats = o.initialWeightCarats - finalWeight;

      return [
        `"${o.code}"`,
        `"${o.stoneId || ''}"`,
        `"${o.roughDescription}"`,
        o.initialWeightCarats,
        finalWeight,
        yieldPct.toFixed(2),
        lossCarats > 0 ? lossCarats.toFixed(2) : 0,
        `"${o.targetCutShape}"`,
        `"${o.masterCutter}"`,
        `"${o.workshopName}"`,
        `"${o.status}"`,
        `"${o.startDate}"`,
        `"${o.estimatedDeliveryDate}"`,
        o.laborCostCop
      ];
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ordenes_talla_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Backup Import
  static importBackup(jsonString: string): { success: boolean; message: string } {
    try {
      const data = JSON.parse(jsonString);
      if (!data || typeof data !== 'object') {
        return { success: false, message: 'El archivo no contiene un formato JSON válido.' };
      }

      if (Array.isArray(data.emeralds)) {
        this.saveEmeralds(data.emeralds);
      }
      if (Array.isArray(data.workOrders)) {
        this.saveWorkOrders(data.workOrders);
      }
      if (Array.isArray(data.quotes)) {
        this.saveQuotes(data.quotes);
      }
      if (Array.isArray(data.operations)) {
        this.saveOperations(data.operations);
      }
      if (Array.isArray(data.directory)) {
        this.saveDirectory(data.directory);
      }

      return { 
        success: true, 
        message: `Respaldo restaurado con éxito (${data.emeralds?.length || 0} esmeraldas cargadas).` 
      };
    } catch (e: any) {
      return { success: false, message: `Error al procesar el archivo de respaldo: ${e.message}` };
    }
  }

  // Reset to clean sample
  static resetToDefault(): void {
    this.saveEmeralds(SAMPLE_EMERALDS);
    this.saveWorkOrders(SAMPLE_WORK_ORDERS);
    this.saveQuotes(SAMPLE_QUOTES);
    this.saveOperations(SAMPLE_TRADE_OPERATIONS);
    this.saveDirectory(SAMPLE_DIRECTORY);
  }
}
