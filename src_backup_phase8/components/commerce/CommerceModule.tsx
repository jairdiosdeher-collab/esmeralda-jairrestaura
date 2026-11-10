import React, { useState } from 'react';
import { CommercialQuote, TradeOperation, EmeraldStone } from '../../types';
import { 
  Briefcase, 
  FileText, 
  Plus, 
  Printer, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  X, 
  ArrowRight,
  ShieldCheck,
  Download,
  Layers,
  PieChart,
  Users,
  AlertCircle
} from 'lucide-react';
import { StorageService } from '../../services/storage';

interface CommerceModuleProps {
  quotes: CommercialQuote[];
  operations: TradeOperation[];
  emeralds: EmeraldStone[];
}

export const CommerceModule: React.FC<CommerceModuleProps> = ({
  quotes,
  operations,
  emeralds
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'cotizaciones' | 'compras' | 'ventas' | 'existencias' | 'reporte' | 'reservas'>('cotizaciones');
  const [selectedQuoteForPrint, setSelectedQuoteForPrint] = useState<CommercialQuote | null>(null);
  const [showNewQuoteModal, setShowNewQuoteModal] = useState(false);
  const [showNewOperationModal, setShowNewOperationModal] = useState(false);

  // New quote form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [sellerName, setSellerName] = useState('Comercializadora Jair Restaura');
  const [sellerContact, setSellerContact] = useState('+57 310 555 4321 • Bogotá D.C.');
  const [selectedStoneIds, setSelectedStoneIds] = useState<string[]>([]);
  const [terms, setTerms] = useState('Validez de la cotización: 15 días hábiles. Entrega en bóveda autorizada de Bogotá D.C. o envío asegurado nacional e internacional. Incluye reporte de verificación gemológica.');

  // New operation form state
  const [opType, setOpType] = useState<'compra' | 'venta'>('venta');
  const [opStoneId, setOpStoneId] = useState(emeralds[0]?.id || '');
  const [opCounterpart, setOpCounterpart] = useState('');
  const [opCounterpartType, setOpCounterpartType] = useState<'Proveedor / Minero' | 'Comprador / Joyero' | 'Taller Lapidario' | 'Coleccionista' | 'Intermediario'>('Comprador / Joyero');
  const [opRucom, setOpRucom] = useState('');
  const [opNitOrId, setOpNitOrId] = useState('');
  const [opAmountUsd, setOpAmountUsd] = useState(5000);
  const [opPaymentMethod, setOpPaymentMethod] = useState('Transferencia Bancaria');
  const [opLegalSupport, setOpLegalSupport] = useState<'Factura Electrónica' | 'Cuenta de Cobro con RUT' | 'Declaración de Origen' | 'Soporte Interno'>('Factura Electrónica');
  const [opInvoice, setOpInvoice] = useState('');
  const [opNotes, setOpNotes] = useState('');

  const handleCreateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || selectedStoneIds.length === 0) {
      alert('Por favor indica el nombre del cliente y selecciona al menos una esmeralda del inventario.');
      return;
    }

    const selectedStones = emeralds.filter(s => selectedStoneIds.includes(s.id));
    const items = selectedStones.map(s => ({
      stoneId: s.id,
      reference: s.reference,
      weightCarats: s.weightCarats,
      cutShape: s.cutShape,
      color: s.colorTone,
      unitPriceUsd: s.estimatedPriceUsd || 1500,
      unitPriceCop: s.estimatedPriceCop || 6000000,
      subtotalUsd: s.estimatedPriceUsd || 1500,
      subtotalCop: s.estimatedPriceCop || 6000000
    }));

    const totalUsd = items.reduce((acc, i) => acc + i.subtotalUsd, 0);
    const totalCop = items.reduce((acc, i) => acc + i.subtotalCop, 0);

    const newQuote: CommercialQuote = {
      id: `COT-${Date.now()}`,
      quoteNumber: `COT-2025-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      validUntil: new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0],
      sellerName,
      sellerContact,
      clientName,
      clientEmail,
      clientPhone,
      items,
      totalUsd,
      totalCop,
      terms,
      status: 'emitida'
    };

    StorageService.saveQuote(newQuote);
    setShowNewQuoteModal(false);
    setSelectedQuoteForPrint(newQuote);
  };

  const handleCreateOperation = (e: React.FormEvent) => {
    e.preventDefault();
    const stone = emeralds.find(s => s.id === opStoneId);
    const newOp: TradeOperation = {
      id: `TR-${Date.now()}`,
      type: opType,
      date: new Date().toISOString().split('T')[0],
      stoneId: opStoneId,
      stoneRef: stone ? stone.reference : 'Esmeralda seleccionada',
      counterpartName: opCounterpart || 'Cliente comercial',
      counterpartType: opCounterpartType,
      counterpartRucom: opRucom || undefined,
      counterpartNitOrId: opNitOrId || undefined,
      amountCop: opAmountUsd * 4150,
      amountUsd: opAmountUsd,
      paymentMethod: opPaymentMethod,
      legalSupportType: opLegalSupport,
      invoiceNumber: opInvoice || `RUCOM-OP-${Math.floor(1000 + Math.random() * 9000)}`,
      notes: opNotes
    };

    StorageService.addOperation(newOp);
    
    // Update commercial status of stone if sale
    if (opType === 'venta' && stone) {
      StorageService.saveEmerald({ ...stone, commercialStatus: 'vendido' }, `Venta comercial registrada a ${opCounterpart}`);
    }

    setShowNewOperationModal(false);
    setOpCounterpart('');
    setOpRucom('');
    setOpNitOrId('');
    setOpNotes('');
  };

  // Filtered operations
  const purchaseOps = operations.filter(o => o.type === 'compra');
  const saleOps = operations.filter(o => o.type === 'venta');
  const reservedStones = emeralds.filter(s => s.commercialStatus === 'reservado');

  // Commercial financial metrics
  const totalPurchasesUsd = purchaseOps.reduce((acc, o) => acc + o.amountUsd, 0);
  const totalPurchasesCop = purchaseOps.reduce((acc, o) => acc + o.amountCop, 0);
  const totalSalesUsd = saleOps.reduce((acc, o) => acc + o.amountUsd, 0);
  const totalSalesCop = saleOps.reduce((acc, o) => acc + o.amountCop, 0);
  const grossMarginUsd = totalSalesUsd - totalPurchasesUsd;

  // Stock inventory classification metrics
  const stockByStatus = {
    disponible: emeralds.filter(s => s.commercialStatus === 'disponible'),
    en_talla: emeralds.filter(s => s.commercialStatus === 'en_talla'),
    reservado: emeralds.filter(s => s.commercialStatus === 'reservado'),
    vendido: emeralds.filter(s => s.commercialStatus === 'vendido'),
    coleccion: emeralds.filter(s => s.commercialStatus === 'coleccion')
  };

  const stockByLot = {
    suelta: emeralds.filter(s => !s.lotClassification || s.lotClassification === 'Piedra Suelta'),
    paquete: emeralds.filter(s => s.lotClassification === 'Lote / Paquete'),
    canutillo: emeralds.filter(s => s.lotClassification === 'Canutillo en Bruto'),
    moralla: emeralds.filter(s => s.lotClassification === 'Moralla'),
    coleccion: emeralds.filter(s => s.lotClassification === 'Muestra de Colección')
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-emerald-400" />
            Centro Comercial, Cotizaciones & Existencias
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Gestión de compras, ventas, cotizaciones formales, control de lotes y reportes comerciales sin intermediarios
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => StorageService.exportOperationsCsv()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-xl transition-all"
            title="Exportar operaciones de compra y venta en CSV"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>CSV Operaciones</span>
          </button>

          <button
            onClick={() => setShowNewQuoteModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Nueva Cotización</span>
          </button>

          <button
            onClick={() => setShowNewOperationModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow transition-all"
          >
            <DollarSign className="w-4 h-4" />
            <span>Registrar Operación</span>
          </button>
        </div>
      </div>

      {/* Sub Tabs Selector */}
      <div className="flex border-b border-slate-800 overflow-x-auto gap-1">
        <button
          onClick={() => setActiveSubTab('cotizaciones')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeSubTab === 'cotizaciones'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Cotizaciones ({quotes.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('compras')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeSubTab === 'compras'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <TrendingDown className="w-4 h-4 text-rose-400" />
          <span>Registro de Compras ({purchaseOps.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ventas')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeSubTab === 'ventas'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>Registro de Ventas ({saleOps.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('existencias')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeSubTab === 'existencias'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4 text-teal-400" />
          <span>Control de Existencias & Lotes</span>
        </button>

        <button
          onClick={() => setActiveSubTab('reporte')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeSubTab === 'reporte'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <PieChart className="w-4 h-4 text-amber-400" />
          <span>Reporte Financiero</span>
        </button>

        <button
          onClick={() => setActiveSubTab('reservas')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeSubTab === 'reservas'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Reservas ({reservedStones.length})</span>
        </button>
      </div>

      {/* Sub Tab 1: Quotes */}
      {activeSubTab === 'cotizaciones' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quotes.map(quote => (
              <div 
                key={quote.id}
                className="bg-slate-900 border border-emerald-950 hover:border-emerald-800/80 p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">{quote.quoteNumber}</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {quote.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-emerald-heading line-clamp-1">
                    {quote.clientName}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fecha: {quote.date} • Válida hasta: {quote.validUntil}
                  </p>

                  <div className="mt-3 p-3 bg-slate-950 rounded-xl space-y-1 text-xs">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Gemas Cotizadas:</span>
                    {quote.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-slate-300">
                        <span className="line-clamp-1">{item.reference} ({item.weightCarats} ct)</span>
                        <span className="font-semibold text-emerald-300 shrink-0 ml-2">${item.subtotalUsd.toLocaleString()} USD</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Total Cotizado:</span>
                    <span className="text-lg font-bold text-amber-300 font-emerald-heading">
                      ${quote.totalUsd.toLocaleString()} USD
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedQuoteForPrint(quote)}
                    className="p-2 text-xs font-semibold bg-emerald-950 hover:bg-emerald-900 text-emerald-300 rounded-xl border border-emerald-800 flex items-center gap-1.5 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimir / PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub Tab 2: Compras */}
      {activeSubTab === 'compras' && (
        <div className="space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Libro de Adquisiciones y Compras</h3>
                <p className="text-xs text-slate-400">Total invertido: ${totalPurchasesUsd.toLocaleString()} USD (${totalPurchasesCop.toLocaleString()} COP)</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Fecha</th>
                    <th className="p-3">Gema / Ref</th>
                    <th className="p-3">Proveedor / Origen</th>
                    <th className="p-3">Soporte Legal</th>
                    <th className="p-3">Medio de Pago</th>
                    <th className="p-3 text-right">Monto (USD)</th>
                    <th className="p-3 text-right">Monto (COP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {purchaseOps.map(op => (
                    <tr key={op.id} className="hover:bg-slate-850/50">
                      <td className="p-3 font-mono text-slate-400">{op.date}</td>
                      <td className="p-3">
                        <div className="font-bold text-white">{op.stoneRef}</div>
                        <div className="text-[10px] text-emerald-400 font-mono">{op.stoneId}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-semibold text-slate-200">{op.counterpartName}</div>
                        <div className="text-[10px] text-slate-400">{op.counterpartType || 'Proveedor'} {op.counterpartRucom ? `• RUCOM: ${op.counterpartRucom}` : ''}</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-950 border border-slate-700 text-slate-300">
                          {op.legalSupportType || 'Factura'}
                        </span>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">{op.invoiceNumber}</div>
                      </td>
                      <td className="p-3 text-slate-300">{op.paymentMethod}</td>
                      <td className="p-3 text-right font-bold text-rose-300">${op.amountUsd.toLocaleString()}</td>
                      <td className="p-3 text-right font-mono text-slate-400">${op.amountCop.toLocaleString()}</td>
                    </tr>
                  ))}
                  {purchaseOps.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-slate-400">
                        No hay operaciones de compra registradas aún.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sub Tab 3: Ventas */}
      {activeSubTab === 'ventas' && (
        <div className="space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Libro de Ventas y Liquidaciones Comerciales</h3>
                <p className="text-xs text-slate-400">Total ingresos: ${totalSalesUsd.toLocaleString()} USD (${totalSalesCop.toLocaleString()} COP)</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Fecha</th>
                    <th className="p-3">Gema Vendida</th>
                    <th className="p-3">Comprador / Destino</th>
                    <th className="p-3">Factura / Recibo</th>
                    <th className="p-3">Medio de Pago</th>
                    <th className="p-3 text-right">Precio Venta (USD)</th>
                    <th className="p-3 text-right">Precio Venta (COP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {saleOps.map(op => (
                    <tr key={op.id} className="hover:bg-slate-850/50">
                      <td className="p-3 font-mono text-slate-400">{op.date}</td>
                      <td className="p-3">
                        <div className="font-bold text-white">{op.stoneRef}</div>
                        <div className="text-[10px] text-emerald-400 font-mono">{op.stoneId}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-semibold text-slate-200">{op.counterpartName}</div>
                        <div className="text-[10px] text-slate-400">{op.counterpartType || 'Cliente'}</div>
                      </td>
                      <td className="p-3 font-mono text-slate-300">
                        {op.invoiceNumber || 'Recibo Interno'}
                      </td>
                      <td className="p-3 text-slate-300">{op.paymentMethod}</td>
                      <td className="p-3 text-right font-bold text-emerald-300">${op.amountUsd.toLocaleString()}</td>
                      <td className="p-3 text-right font-mono text-slate-400">${op.amountCop.toLocaleString()}</td>
                    </tr>
                  ))}
                  {saleOps.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-slate-400">
                        No hay operaciones de venta registradas aún.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sub Tab 4: Existencias & Lotes */}
      {activeSubTab === 'existencias' && (
        <div className="space-y-6">
          {/* Status Breakdown Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Existencias por Estado de Disponibilidad
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-600/40 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">Disponibles</span>
                <span className="text-2xl font-black text-white">{stockByStatus.disponible.length}</span>
                <span className="text-xs text-emerald-300 block">{stockByStatus.disponible.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-600/40 space-y-1">
                <span className="text-[10px] uppercase font-bold text-cyan-400 block">En Taller / Talla</span>
                <span className="text-2xl font-black text-white">{stockByStatus.en_talla.length}</span>
                <span className="text-xs text-cyan-300 block">{stockByStatus.en_talla.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-600/40 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 block">Reservadas</span>
                <span className="text-2xl font-black text-white">{stockByStatus.reservado.length}</span>
                <span className="text-xs text-amber-300 block">{stockByStatus.reservado.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Vendidas</span>
                <span className="text-2xl font-black text-white">{stockByStatus.vendido.length}</span>
                <span className="text-xs text-slate-400 block">{stockByStatus.vendido.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-600/40 space-y-1">
                <span className="text-[10px] uppercase font-bold text-purple-400 block">Colección Privada</span>
                <span className="text-2xl font-black text-white">{stockByStatus.coleccion.length}</span>
                <span className="text-xs text-purple-300 block">{stockByStatus.coleccion.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>
            </div>
          </div>

          {/* Lot Classification Breakdown Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Clasificación y Formato de Lotes
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Piedras Sueltas</span>
                <span className="text-xl font-bold text-white">{stockByLot.suelta.length} piezas</span>
                <span className="text-xs text-slate-400 block">{stockByLot.suelta.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Lotes / Paquetes</span>
                <span className="text-xl font-bold text-white">{stockByLot.paquete.length} lotes</span>
                <span className="text-xs text-slate-400 block">{stockByLot.paquete.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Canutillos Brutos</span>
                <span className="text-xl font-bold text-white">{stockByLot.canutillo.length} cristales</span>
                <span className="text-xs text-slate-400 block">{stockByLot.canutillo.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Moralla / Rústico</span>
                <span className="text-xl font-bold text-white">{stockByLot.moralla.length} piedras</span>
                <span className="text-xs text-slate-400 block">{stockByLot.moralla.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Muestras Museo</span>
                <span className="text-xl font-bold text-white">{stockByLot.coleccion.length} muestras</span>
                <span className="text-xs text-slate-400 block">{stockByLot.coleccion.reduce((a, s) => a + s.weightCarats, 0).toFixed(2)} ct</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sub Tab 5: Reporte Financiero */}
      {activeSubTab === 'reporte' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-900/60 space-y-2">
              <span className="text-xs uppercase font-bold text-slate-400 block">Ingresos Totales (Ventas)</span>
              <div className="text-2xl font-black text-emerald-400 font-emerald-heading">${totalSalesUsd.toLocaleString()} USD</div>
              <div className="text-xs text-slate-400 font-mono">${totalSalesCop.toLocaleString()} COP</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-rose-950/60 space-y-2">
              <span className="text-xs uppercase font-bold text-slate-400 block">Inversión Total (Compras)</span>
              <div className="text-2xl font-black text-rose-400 font-emerald-heading">${totalPurchasesUsd.toLocaleString()} USD</div>
              <div className="text-xs text-slate-400 font-mono">${totalPurchasesCop.toLocaleString()} COP</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-amber-900/60 space-y-2">
              <span className="text-xs uppercase font-bold text-slate-400 block">Margen Bruto Estimado</span>
              <div className={`text-2xl font-black font-emerald-heading ${grossMarginUsd >= 0 ? 'text-amber-300' : 'text-rose-400'}`}>
                ${grossMarginUsd.toLocaleString()} USD
              </div>
              <div className="text-xs text-slate-400">
                {totalSalesUsd > 0 ? `${((grossMarginUsd / totalSalesUsd) * 100).toFixed(1)}% margen sobre ventas` : 'Sin ventas registradas'}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Exportación Oficial de Informes y Libros Comerciales</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Descarga los registros en formato abierto CSV estándar compatible con Excel y software de contabilidad para tu debida diligencia tributaria y de exportación.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => StorageService.exportOperationsCsv()}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow"
              >
                <Download className="w-4 h-4" />
                <span>Exportar Operaciones (Compras y Ventas CSV)</span>
              </button>

              <button
                onClick={() => StorageService.exportEmeraldsCsv()}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 transition-all border border-slate-700"
              >
                <Download className="w-4 h-4" />
                <span>Exportar Libro de Inventario (CSV)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sub Tab 6: Reservas */}
      {activeSubTab === 'reservas' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reservedStones.map(stone => (
              <div key={stone.id} className="p-4 bg-slate-900 border border-amber-900/50 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400">{stone.id}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
                    Reservada
                  </span>
                </div>
                <div className="font-bold text-white">{stone.reference}</div>
                <div className="text-xs text-slate-400">{stone.weightCarats} ct • {stone.origin} • {stone.cutShape}</div>
                <div className="p-2.5 bg-slate-950 rounded-xl text-xs text-slate-300">
                  <span className="text-[10px] text-slate-400 block font-semibold">Precio Reservado:</span>
                  <span className="font-bold text-amber-300">${stone.estimatedPriceUsd?.toLocaleString()} USD</span>
                </div>
                <div className="text-xs text-slate-400">
                  {stone.notes || 'En espera de confirmación de pago por el comprador.'}
                </div>
              </div>
            ))}
            {reservedStones.length === 0 && (
              <div className="col-span-full p-8 text-center text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
                No hay esmeraldas con estado de reserva activo en este momento.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Printable Quote Sheet Modal */}
      {selectedQuoteForPrint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-emerald-900 rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto print:p-0 print:bg-white print:text-black">
            <div className="no-print flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-xs font-bold uppercase text-emerald-400">Vista de Impresión / PDF</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 text-xs font-bold bg-emerald-600 text-white rounded-lg flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir / Guardar PDF</span>
                </button>
                <button onClick={() => setSelectedQuoteForPrint(null)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quote Document */}
            <div className="p-6 bg-slate-950 print:bg-white rounded-xl space-y-6">
              <div className="flex justify-between items-start pb-4 border-b border-slate-800 print:border-slate-300">
                <div>
                  <h2 className="text-xl font-bold text-white print:text-black font-emerald-heading">
                    COTIZACIÓN COMERCIAL DE ESMERALDAS
                  </h2>
                  <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                    Número: <strong className="font-mono text-emerald-400 print:text-emerald-800">{selectedQuoteForPrint.quoteNumber}</strong>
                  </p>
                  <p className="text-xs text-slate-400 print:text-slate-600">
                    Fecha de Emisión: {selectedQuoteForPrint.date} • Válida hasta: {selectedQuoteForPrint.validUntil}
                  </p>
                </div>
                <div className="text-right text-xs">
                  <div className="font-bold text-white print:text-black">{selectedQuoteForPrint.sellerName}</div>
                  <div className="text-slate-400 print:text-slate-600">{selectedQuoteForPrint.sellerContact}</div>
                </div>
              </div>

              <div className="p-3 bg-slate-900 print:bg-slate-50 rounded-xl text-xs space-y-1">
                <div className="font-bold text-white print:text-black">Cliente: {selectedQuoteForPrint.clientName}</div>
                {selectedQuoteForPrint.clientEmail && <div className="text-slate-400 print:text-slate-600">Email: {selectedQuoteForPrint.clientEmail}</div>}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-900 print:bg-slate-100 text-slate-400 print:text-slate-700">
                    <tr>
                      <th className="p-2">Referencia</th>
                      <th className="p-2">Peso</th>
                      <th className="p-2">Talla / Forma</th>
                      <th className="p-2">Color</th>
                      <th className="p-2 text-right">Subtotal USD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 print:divide-slate-200">
                    {selectedQuoteForPrint.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="p-2 font-medium text-white print:text-black">{item.reference}</td>
                        <td className="p-2 text-slate-300 print:text-slate-700">{item.weightCarats} ct</td>
                        <td className="p-2 text-slate-300 print:text-slate-700">{item.cutShape}</td>
                        <td className="p-2 text-slate-300 print:text-slate-700">{item.color}</td>
                        <td className="p-2 text-right font-bold text-emerald-400 print:text-emerald-800">${item.subtotalUsd.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-700 print:border-slate-300 font-bold text-sm">
                      <td colSpan={4} className="p-2 text-right text-white print:text-black">Total:</td>
                      <td className="p-2 text-right text-amber-300 print:text-amber-800">${selectedQuoteForPrint.totalUsd.toLocaleString()} USD</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="p-3 bg-slate-900/60 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 text-xs">
                <span className="font-bold text-slate-300 print:text-black block mb-1">Términos y Condiciones:</span>
                <p className="text-slate-400 print:text-slate-700 leading-relaxed">{selectedQuoteForPrint.terms}</p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* New Quote Form Modal */}
      {showNewQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-emerald-900 rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-emerald-heading">Nueva Cotización Comercial</h3>
              <button onClick={() => setShowNewQuoteModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateQuote} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre del Cliente *</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    placeholder="ej. Galería Gemológica de Ginebra"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={e => setClientEmail(e.target.value)}
                    placeholder="cliente@ejemplo.com"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Seleccionar Esmeraldas para la Cotización:
                </label>
                <div className="max-h-48 overflow-y-auto space-y-1.5 p-2 bg-slate-950 rounded-xl border border-slate-800">
                  {emeralds.map(s => {
                    const isSelected = selectedStoneIds.includes(s.id);
                    return (
                      <label 
                        key={s.id}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-xs transition-colors ${
                          isSelected ? 'bg-emerald-950 border border-emerald-600' : 'hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {
                              setSelectedStoneIds(prev => 
                                isSelected ? prev.filter(id => id !== s.id) : [...prev, s.id]
                              );
                            }}
                            className="rounded border-slate-700 text-emerald-500"
                          />
                          <span className="font-semibold text-white">{s.reference}</span>
                          <span className="text-slate-400">({s.weightCarats} ct, {s.origin})</span>
                        </div>
                        <span className="font-bold text-amber-300">${s.estimatedPriceUsd?.toLocaleString() || 0} USD</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Términos Comerciales y Entrega</label>
                <textarea
                  rows={2}
                  value={terms}
                  onChange={e => setTerms(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewQuoteModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg"
                >
                  Generar Cotización
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Operation Form Modal */}
      {showNewOperationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-900 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-emerald-heading">Registrar Operación Comercial</h3>
              <button onClick={() => setShowNewOperationModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateOperation} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Tipo de Operación</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOpType('venta')}
                    className={`py-2 text-xs font-bold rounded-xl border transition-colors ${
                      opType === 'venta' 
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500' 
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    Venta (Salida)
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpType('compra')}
                    className={`py-2 text-xs font-bold rounded-xl border transition-colors ${
                      opType === 'compra' 
                        ? 'bg-rose-950 text-rose-300 border-rose-500' 
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    Compra (Entrada)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Esmeralda Involucrada</label>
                <select
                  value={opStoneId}
                  onChange={e => setOpStoneId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                >
                  {emeralds.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.id} — {s.reference} ({s.weightCarats} ct, {s.origin})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Contraparte (Nombre) *</label>
                  <input
                    type="text"
                    required
                    value={opCounterpart}
                    onChange={e => setOpCounterpart(e.target.value)}
                    placeholder="ej. Cooperativa Minera San Pablo"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tipo de Contraparte</label>
                  <select
                    value={opCounterpartType}
                    onChange={e => setOpCounterpartType(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="Proveedor / Minero">Proveedor / Minero</option>
                    <option value="Comprador / Joyero">Comprador / Joyero</option>
                    <option value="Taller Lapidario">Taller Lapidario</option>
                    <option value="Coleccionista">Coleccionista</option>
                    <option value="Intermediario">Intermediario</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Registro RUCOM (si aplica)</label>
                  <input
                    type="text"
                    value={opRucom}
                    onChange={e => setOpRucom(e.target.value)}
                    placeholder="ej. RUCOM-BOY-1892"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">NIT / Cédula</label>
                  <input
                    type="text"
                    value={opNitOrId}
                    onChange={e => setOpNitOrId(e.target.value)}
                    placeholder="ej. 901.452.889-1"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Monto en USD *</label>
                  <input
                    type="number"
                    required
                    value={opAmountUsd}
                    onChange={e => setOpAmountUsd(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs font-bold text-emerald-300"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Aprox. ${(opAmountUsd * 4150).toLocaleString()} COP
                  </span>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Soporte Legal</label>
                  <select
                    value={opLegalSupport}
                    onChange={e => setOpLegalSupport(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="Factura Electrónica">Factura Electrónica</option>
                    <option value="Cuenta de Cobro con RUT">Cuenta de Cobro con RUT</option>
                    <option value="Declaración de Origen">Declaración de Origen</option>
                    <option value="Soporte Interno">Soporte Interno</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">N° Comprobante / Factura</label>
                <input
                  type="text"
                  value={opInvoice}
                  onChange={e => setOpInvoice(e.target.value)}
                  placeholder="ej. FE-2025-0012"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewOperationModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg"
                >
                  Guardar Operación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
