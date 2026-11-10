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

  // Validar archivo de respaldo antes de tocar datos
  static validateBackupFile(jsonString: string): {
    valid: boolean;
    error?: string;
    metadata?: { platform?: string; version?: string; exportedAt?: string };
    summary: {
      emeraldsCount: number;
      workOrdersCount: number;
      quotesCount: number;
      operationsCount: number;
      directoryCount: number;
      corruptRecordsCount: number;
    };
    duplicates: {
      existingEmeraldIds: string[];
      newEmeraldIds: string[];
    };
    cleanData?: {
      emeralds: EmeraldStone[];
      workOrders: CuttingWorkOrder[];
      quotes: CommercialQuote[];
      operations: TradeOperation[];
      directory: DirectoryProfile[];
    };
  } {
    try {
      const data = JSON.parse(jsonString);
      if (!data || typeof data !== 'object') {
        return {
          valid: false,
          error: 'El archivo no contiene una estructura JSON válida.',
          summary: { emeraldsCount: 0, workOrdersCount: 0, quotesCount: 0, operationsCount: 0, directoryCount: 0, corruptRecordsCount: 0 },
          duplicates: { existingEmeraldIds: [], newEmeraldIds: [] }
        };
      }

      const currentEmeralds = this.getEmeralds();
      const currentIds = new Set(currentEmeralds.map(e => e.id.trim().toLowerCase()));

      const rawEmeralds = Array.isArray(data.emeralds) ? data.emeralds : [];
      const validEmeralds: EmeraldStone[] = [];
      let corruptCount = 0;

      for (const item of rawEmeralds) {
        if (item && typeof item === 'object' && item.id && item.reference && typeof item.weightCarats === 'number' && !isNaN(item.weightCarats)) {
          validEmeralds.push(item);
        } else {
          corruptCount++;
        }
      }

      const duplicateEmeraldIds: string[] = [];
      const newEmeraldIds: string[] = [];

      for (const e of validEmeralds) {
        if (currentIds.has(e.id.trim().toLowerCase())) {
          duplicateEmeraldIds.push(e.id);
        } else {
          newEmeraldIds.push(e.id);
        }
      }

      const validWorkOrders = Array.isArray(data.workOrders) ? data.workOrders.filter((w: any) => w && w.id) : [];
      const validQuotes = Array.isArray(data.quotes) ? data.quotes.filter((q: any) => q && q.id) : [];
      const validOperations = Array.isArray(data.operations) ? data.operations.filter((o: any) => o && o.id) : [];
      const validDirectory = Array.isArray(data.directory) ? data.directory.filter((d: any) => d && d.id) : [];

      return {
        valid: true,
        metadata: {
          platform: data.platform || 'Desconocida',
          version: data.version || '1.0',
          exportedAt: data.exportedAt || 'Fecha no registrada'
        },
        summary: {
          emeraldsCount: validEmeralds.length,
          workOrdersCount: validWorkOrders.length,
          quotesCount: validQuotes.length,
          operationsCount: validOperations.length,
          directoryCount: validDirectory.length,
          corruptRecordsCount: corruptCount
        },
        duplicates: {
          existingEmeraldIds: duplicateEmeraldIds,
          newEmeraldIds
        },
        cleanData: {
          emeralds: validEmeralds,
          workOrders: validWorkOrders,
          quotes: validQuotes,
          operations: validOperations,
          directory: validDirectory
        }
      };
    } catch (err: any) {
      return {
        valid: false,
        error: `Error de sintaxis o archivo JSON corrupto: ${err.message}`,
        summary: { emeraldsCount: 0, workOrdersCount: 0, quotesCount: 0, operationsCount: 0, directoryCount: 0, corruptRecordsCount: 0 },
        duplicates: { existingEmeraldIds: [], newEmeraldIds: [] }
      };
    }
  }

  // Restaurar respaldo con estrategia controlada (Fusión vs Reemplazo)
  static restoreBackupWithStrategy(
    cleanData: {
      emeralds: EmeraldStone[];
      workOrders: CuttingWorkOrder[];
      quotes: CommercialQuote[];
      operations: TradeOperation[];
      directory: DirectoryProfile[];
    },
    strategy: 'merge' | 'replace'
  ): { success: boolean; message: string; details: { addedCount: number; preservedCount: number } } {
    if (strategy === 'replace') {
      this.saveEmeralds(cleanData.emeralds);
      this.saveWorkOrders(cleanData.workOrders);
      this.saveQuotes(cleanData.quotes);
      this.saveOperations(cleanData.operations);
      this.saveDirectory(cleanData.directory);
      return {
        success: true,
        message: `Restauración completa: se reemplazaron los registros con ${cleanData.emeralds.length} esmeraldas del archivo.`,
        details: { addedCount: cleanData.emeralds.length, preservedCount: 0 }
      };
    }

    // Estrategia de fusión segura (Merge sin sobrescritura)
    const currentEmeralds = this.getEmeralds();
    const existingMap = new Map(currentEmeralds.map(e => [e.id.trim().toLowerCase(), e]));
    let addedCount = 0;
    let preservedCount = 0;

    for (const stone of cleanData.emeralds) {
      const key = stone.id.trim().toLowerCase();
      if (!existingMap.has(key)) {
        currentEmeralds.push(stone);
        existingMap.set(key, stone);
        addedCount++;
      } else {
        preservedCount++;
      }
    }
    this.saveEmeralds(currentEmeralds);

    // Fusionar órdenes de trabajo
    const currentOrders = this.getWorkOrders();
    const orderIds = new Set(currentOrders.map(o => o.id));
    for (const o of cleanData.workOrders) {
      if (!orderIds.has(o.id)) {
        currentOrders.push(o);
        orderIds.add(o.id);
      }
    }
    this.saveWorkOrders(currentOrders);

    // Fusionar cotizaciones
    const currentQuotes = this.getQuotes();
    const quoteIds = new Set(currentQuotes.map(q => q.id));
    for (const q of cleanData.quotes) {
      if (!quoteIds.has(q.id)) {
        currentQuotes.push(q);
        quoteIds.add(q.id);
      }
    }
    this.saveQuotes(currentQuotes);

    // Fusionar operaciones
    const currentOps = this.getOperations();
    const opIds = new Set(currentOps.map(o => o.id));
    for (const o of cleanData.operations) {
      if (!opIds.has(o.id)) {
        currentOps.push(o);
        opIds.add(o.id);
      }
    }
    this.saveOperations(currentOps);

    // Fusionar directorio
    const currentDir = this.getDirectory();
    const dirIds = new Set(currentDir.map(d => d.id));
    for (const d of cleanData.directory) {
      if (!dirIds.has(d.id)) {
        currentDir.push(d);
        dirIds.add(d.id);
      }
    }
    this.saveDirectory(currentDir);

    return {
      success: true,
      message: `Fusión exitosa: se agregaron ${addedCount} esmeraldas nuevas y se conservaron intactas ${preservedCount} esmeraldas ya existentes.`,
      details: { addedCount, preservedCount }
    };
  }

  // Backup Import backward compatibility
  static importBackup(jsonString: string): { success: boolean; message: string } {
    const val = this.validateBackupFile(jsonString);
    if (!val.valid || !val.cleanData) {
      return { success: false, message: val.error || 'Archivo inválido.' };
    }
    const res = this.restoreBackupWithStrategy(val.cleanData, 'merge');
    return { success: res.success, message: res.message };
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
