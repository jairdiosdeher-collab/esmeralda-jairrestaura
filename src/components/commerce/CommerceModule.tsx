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
  ShieldCheck
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
  const [activeSubTab, setActiveSubTab] = useState<'cotizaciones' | 'operaciones' | 'reservas'>('cotizaciones');
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
  const [opAmountUsd, setOpAmountUsd] = useState(5000);
  const [opPaymentMethod, setOpPaymentMethod] = useState('Transferencia Bancaria');
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
      amountCop: opAmountUsd * 4150,
      amountUsd: opAmountUsd,
      paymentMethod: opPaymentMethod,
      invoiceNumber: opInvoice || `RUCOM-OP-${Math.floor(1000 + Math.random() * 9000)}`,
      notes: opNotes
    };

    StorageService.addOperation(newOp);
    
    // Update commercial status of stone if sale
    if (opType === 'venta' && stone) {
      StorageService.saveEmerald({ ...stone, commercialStatus: 'vendido' });
    }

    setShowNewOperationModal(false);
  };

  const reservedStones = emeralds.filter(s => s.commercialStatus === 'reservado');

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-emerald-400" />
            Módulo de Comercio y Cotizaciones
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Generador de ofertas comerciales formales, registro de compras y ventas sin comisiones
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNewQuoteModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Crear Cotización</span>
          </button>

          <button
            onClick={() => setShowNewOperationModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl transition-all"
          >
            <DollarSign className="w-4 h-4 text-amber-400" />
            <span>Registrar Operación</span>
          </button>
        </div>
      </div>

      {/* Sub Tabs Selector */}
      <div className="flex border-b border-slate-800">
        <button
          onClick={() => setActiveSubTab('cotizaciones')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
            activeSubTab === 'cotizaciones'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Cotizaciones Formales ({quotes.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('operaciones')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
            activeSubTab === 'operaciones'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Compras y Ventas ({operations.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('reservas')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
            activeSubTab === 'reservas'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Gestión de Reservas ({reservedStones.length})</span>
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

      {/* Sub Tab 2: Operations */}
      {activeSubTab === 'operaciones' && (
        <div className="overflow-x-auto bg-slate-900 border border-emerald-950 rounded-2xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-4">Fecha</th>
                <th className="py-3 px-4">Esmeralda</th>
                <th className="py-3 px-4">Contraparte</th>
                <th className="py-3 px-4">Monto USD</th>
                <th className="py-3 px-4">Monto COP</th>
                <th className="py-3 px-4">Método / Soporte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {operations.map(op => (
                <tr key={op.id} className="hover:bg-slate-800/40">
                  <td className="py-3 px-4">
                    {op.type === 'compra' ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <TrendingDown className="w-3.5 h-3.5" /> Compra
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                        <TrendingUp className="w-3.5 h-3.5" /> Venta
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-slate-400">{op.date}</td>
                  <td className="py-3 px-4 font-semibold text-white">
                    {op.stoneRef} <span className="font-mono text-[10px] text-slate-400">({op.stoneId})</span>
                  </td>
                  <td className="py-3 px-4">{op.counterpartName}</td>
                  <td className="py-3 px-4 font-bold text-white">${op.amountUsd.toLocaleString()} USD</td>
                  <td className="py-3 px-4 font-mono text-slate-400">${op.amountCop.toLocaleString()} COP</td>
                  <td className="py-3 px-4">
                    <span className="text-slate-300 block">{op.paymentMethod}</span>
                    {op.invoiceNumber && <span className="text-[10px] text-slate-500 font-mono">{op.invoiceNumber}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Sub Tab 3: Reserves */}
      {activeSubTab === 'reservas' && (
        <div className="space-y-4">
          {reservedStones.length === 0 ? (
            <div className="p-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl text-xs text-slate-400">
              No tienes esmeraldas en estado de reserva actualmente.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reservedStones.map(stone => (
                <div key={stone.id} className="p-4 bg-slate-900 border border-amber-900/60 rounded-2xl space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-xs font-bold text-amber-400">{stone.id}</span>
                      <h4 className="text-sm font-bold text-white font-emerald-heading">{stone.reference}</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold">
                      Apartada
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">
                    {stone.origin} • {stone.weightCarats} ct • {stone.cutShape}
                  </p>

                  <div className="p-2.5 bg-slate-950 rounded-xl text-xs space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Notas de Reserva:</span>
                    <p className="text-slate-300 italic">{stone.notes || 'Apartada por acuerdo comercial.'}</p>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-xs">
                    <button
                      onClick={() => {
                        StorageService.saveEmerald({ ...stone, commercialStatus: 'disponible' });
                      }}
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      Liberar a Disponible
                    </button>
                    <button
                      onClick={() => {
                        StorageService.saveEmerald({ ...stone, commercialStatus: 'vendido' });
                      }}
                      className="text-amber-300 hover:underline font-semibold"
                    >
                      Marcar como Vendida
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Printable Quote Modal */}
      {selectedQuoteForPrint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-emerald-800 rounded-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            
            <div className="no-print flex items-center justify-between px-6 py-3 bg-slate-950 border-b border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase">Cotización Comercial Imprimible</span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir / Guardar PDF</span>
                </button>
                <button
                  onClick={() => setSelectedQuoteForPrint(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-8 overflow-y-auto print:p-8 print:bg-white print:text-black space-y-6">
              <div className="flex justify-between items-start border-b border-emerald-900/60 print:border-slate-300 pb-4">
                <div>
                  <h2 className="text-xl font-black text-white print:text-black font-emerald-heading">
                    ESMERALDA INTELIGENTE JAIRRESTAURA
                  </h2>
                  <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                    Plataforma Oficial del Sector Esmeraldero Colombiano
                  </p>
                  <p className="text-xs text-slate-400 print:text-slate-600">{selectedQuoteForPrint.sellerName}</p>
                  <p className="text-xs text-slate-400 print:text-slate-600">{selectedQuoteForPrint.sellerContact}</p>
                </div>

                <div className="text-right">
                  <span className="font-mono text-base font-bold text-emerald-400 print:text-emerald-900 block">
                    {selectedQuoteForPrint.quoteNumber}
                  </span>
                  <span className="text-xs text-slate-400 print:text-slate-600 block mt-1">
                    Fecha: {selectedQuoteForPrint.date}
                  </span>
                  <span className="text-xs text-amber-300 print:text-amber-800 block">
                    Vigencia hasta: {selectedQuoteForPrint.validUntil}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 print:text-slate-600 block">Cliente / Destinatario:</span>
                <h3 className="text-lg font-bold text-white print:text-black">{selectedQuoteForPrint.clientName}</h3>
                {selectedQuoteForPrint.clientEmail && <p className="text-xs text-slate-400 print:text-slate-600">{selectedQuoteForPrint.clientEmail}</p>}
                {selectedQuoteForPrint.clientPhone && <p className="text-xs text-slate-400 print:text-slate-600">{selectedQuoteForPrint.clientPhone}</p>}
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-800 print:border-slate-300">
                  <thead className="bg-slate-950 print:bg-slate-100 text-slate-300 print:text-black uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Ref. Piedra</th>
                      <th className="p-3">Quilates</th>
                      <th className="p-3">Talla / Color</th>
                      <th className="p-3 text-right">Precio USD</th>
                      <th className="p-3 text-right">Total COP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 print:divide-slate-300">
                    {selectedQuoteForPrint.items.map((item, i) => (
                      <tr key={i}>
                        <td className="p-3 font-semibold text-white print:text-black">{item.reference}</td>
                        <td className="p-3 font-bold">{item.weightCarats} ct</td>
                        <td className="p-3">{item.cutShape} - {item.color}</td>
                        <td className="p-3 text-right font-bold">${item.subtotalUsd.toLocaleString()} USD</td>
                        <td className="p-3 text-right font-mono">${item.subtotalCop.toLocaleString()} COP</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-950/80 print:bg-slate-50 font-bold border-t border-slate-700 print:border-slate-400">
                      <td colSpan={3} className="p-3 text-right uppercase text-slate-400 print:text-black">Total de la Oferta:</td>
                      <td className="p-3 text-right text-amber-300 print:text-emerald-900 text-sm">
                        ${selectedQuoteForPrint.totalUsd.toLocaleString()} USD
                      </td>
                      <td className="p-3 text-right font-mono text-white print:text-black text-sm">
                        ${selectedQuoteForPrint.totalCop.toLocaleString()} COP
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="p-3 bg-slate-950/60 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 text-xs">
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
          <div className="relative w-full max-w-md bg-slate-900 border border-emerald-900 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-emerald-heading">Registrar Compra o Venta</h3>
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
                        ? 'bg-amber-950 text-amber-300 border-amber-600' 
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    Venta
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpType('compra')}
                    className={`py-2 text-xs font-bold rounded-xl border transition-colors ${
                      opType === 'compra' 
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-600' 
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    Compra
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
                      {s.id} — {s.reference} ({s.weightCarats} ct)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Comprador o Vendedor (Contraparte)</label>
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
                <label className="block text-xs font-semibold text-slate-300 mb-1">Monto en USD</label>
                <input
                  type="number"
                  required
                  value={opAmountUsd}
                  onChange={e => setOpAmountUsd(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs font-bold text-emerald-300"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">
                  Aproximadamente ${(opAmountUsd * 4150).toLocaleString()} COP
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Comprobante / Salvoconducto RUCOM</label>
                <input
                  type="text"
                  value={opInvoice}
                  onChange={e => setOpInvoice(e.target.value)}
                  placeholder="ej. RUCOM-MIN-84291"
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
