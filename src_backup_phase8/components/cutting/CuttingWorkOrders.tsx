import React, { useState } from 'react';
import { CuttingWorkOrder, EmeraldStone, CutShape } from '../../types';
import { 
  Hammer, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Scale, 
  Percent, 
  X, 
  UserCheck, 
  Calendar, 
  Scissors,
  ArrowRight,
  FileSpreadsheet,
  Image as ImageIcon,
  Check,
  PackagePlus,
  AlertCircle
} from 'lucide-react';
import { StorageService } from '../../services/storage';

interface CuttingWorkOrdersProps {
  orders: CuttingWorkOrder[];
  emeralds: EmeraldStone[];
  onRegisterFacetedInInventory?: (facetedStone: Partial<EmeraldStone>) => void;
}

export const CuttingWorkOrders: React.FC<CuttingWorkOrdersProps> = ({
  orders,
  emeralds,
  onRegisterFacetedInInventory
}) => {
  const [showNewOrderModal, setShowNewOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<CuttingWorkOrder | null>(null);
  const [registeredInInventoryIds, setRegisteredInInventoryIds] = useState<string[]>([]);

  // New Order Form state
  const [code, setCode] = useState(`OT-2025-${Math.floor(10 + Math.random() * 90)}`);
  const [stoneId, setStoneId] = useState('');
  const [roughDescription, setRoughDescription] = useState('');
  const [initialWeight, setInitialWeight] = useState(10.0);
  const [initialDims, setInitialDims] = useState('15.0 x 10.0 x 8.0 mm');
  const [targetShape, setTargetShape] = useState<CutShape>('Octagonal (Talla Esmeralda)');
  const [masterCutter, setMasterCutter] = useState('Maestro Lapidario Efraín Valenzuela');
  const [workshopName, setWorkshopName] = useState('Taller El Chaflán de Oro');
  const [deliveryDate, setDeliveryDate] = useState(new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0]);
  const [laborCost, setLaborCost] = useState(900000);
  const [notes, setNotes] = useState('Orientar la tabla perpendicular al eje C cristalográfico para concentrar el verde profundo.');
  const [photoBeforeUrl, setPhotoBeforeUrl] = useState('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80');

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const initialGrams = parseFloat((initialWeight * 0.2).toFixed(3));
    const newOrder: CuttingWorkOrder = {
      id: `WO-${Date.now()}`,
      code,
      stoneId: stoneId || undefined,
      roughDescription: roughDescription || 'Cristal en bruto de Muzo',
      initialWeightCarats: initialWeight,
      roughGrams: initialGrams,
      initialDimensions: initialDims,
      targetCutShape: targetShape,
      masterCutter,
      workshopName,
      startDate: new Date().toISOString().split('T')[0],
      estimatedDeliveryDate: deliveryDate,
      status: 'recibida',
      finalWeightCarats: 0,
      yieldPercentage: 0,
      caratLoss: 0,
      lossPercentage: 0,
      processStages: [
        { stage: 'Recepción y Pesaje', completedDate: new Date().toISOString().split('T')[0], operator: masterCutter, notes: 'Ingreso inicial a taller' },
        { stage: 'Marcado Cristalográfico' },
        { stage: 'Desbaste de Vástago y Preforma' },
        { stage: 'Facetado de Corona y Culata' },
        { stage: 'Pulido y Chaflanes' },
        { stage: 'Control Final de Rendimiento' }
      ],
      laborCostCop: laborCost,
      notes,
      photosBefore: photoBeforeUrl ? [photoBeforeUrl] : [],
      photosAfter: []
    };

    StorageService.saveWorkOrder(newOrder);
    setShowNewOrderModal(false);
  };

  const handleAdvanceStage = (order: CuttingWorkOrder, nextStatus: CuttingWorkOrder['status']) => {
    let finalWeight = order.finalWeightCarats;
    let yieldPct = order.yieldPercentage;
    let caratLoss = order.caratLoss;
    let lossPct = order.lossPercentage;
    let completedDate = order.completedDate;

    if (nextStatus === 'finalizada') {
      const finalWeightStr = prompt(`Ingresa el peso final obtenido en quilates (ct) para ${order.code}:`, order.finalWeightCarats ? String(order.finalWeightCarats) : '3.60');
      if (finalWeightStr) {
        const fw = parseFloat(finalWeightStr);
        if (!isNaN(fw) && fw > 0) {
          finalWeight = fw;
          yieldPct = parseFloat(((fw / order.initialWeightCarats) * 100).toFixed(2));
          caratLoss = parseFloat((order.initialWeightCarats - fw).toFixed(2));
          lossPct = parseFloat((100 - yieldPct).toFixed(2));
          completedDate = new Date().toISOString().split('T')[0];
        } else {
          return;
        }
      } else {
        return;
      }
    }

    const updatedStages = (order.processStages || []).map(st => {
      if (nextStatus === 'finalizada' && !st.completedDate) {
        return { ...st, completedDate: new Date().toISOString().split('T')[0] };
      }
      return st;
    });

    const updated: CuttingWorkOrder = {
      ...order,
      status: nextStatus,
      finalWeightCarats: finalWeight,
      finalGrams: finalWeight ? parseFloat((finalWeight * 0.2).toFixed(3)) : undefined,
      yieldPercentage: yieldPct,
      caratLoss,
      lossPercentage: lossPct,
      completedDate,
      processStages: updatedStages,
      photosAfter: nextStatus === 'finalizada' && (!order.photosAfter || order.photosAfter.length === 0)
        ? ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80']
        : order.photosAfter
    };

    StorageService.saveWorkOrder(updated);
    if (selectedOrder?.id === order.id) {
      setSelectedOrder(updated);
    }
  };

  const handleRegisterInInventory = (order: CuttingWorkOrder) => {
    if (!order.finalWeightCarats || order.finalWeightCarats <= 0) {
      alert('La orden de talla debe tener un peso final registrado antes de pasarla al inventario.');
      return;
    }

    const newId = `EMR-TALLA-${Math.floor(100 + Math.random() * 900)}`;
    const newStone: EmeraldStone = {
      id: newId,
      reference: `Esmeralda Facetada ex-${order.code}`,
      status: 'tallado',
      commercialStatus: 'disponible',
      origin: 'Muzo (Boyacá)',
      weightCarats: order.finalWeightCarats,
      weightGrams: order.finalGrams || parseFloat((order.finalWeightCarats * 0.2).toFixed(3)),
      dimensions: {
        lengthMm: 9.5,
        widthMm: 7.8,
        depthMm: 5.2
      },
      cutShape: order.targetCutShape,
      colorTone: 'Verde Intenso Colombiano',
      saturation: 'Muy Intensa',
      transparency: 'Fina Transparente',
      treatment: 'aceite_menor',
      cutQuality: 'Muy Buena',
      lotClassification: 'Piedra Suelta',
      declaredProvenance: 'Cuenta de Cobro Formal',
      documentNumber: order.code,
      supplierName: order.workshopName,
      location: 'Bóveda Principal Bogotá',
      ownerName: 'JAIRRESTAURA',
      acquisitionDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      estimatedPriceUsd: Math.round(order.finalWeightCarats * 1600),
      photos: order.photosAfter && order.photosAfter.length > 0 
        ? order.photosAfter 
        : ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'],
      inclusions: 'Jardín fino interno, inclusiones trifásicas diagnósticas intactas',
      notes: `Piedra resultante de orden de trabajo ${order.code} tallada por ${order.masterCutter} en ${order.workshopName}. Rendimiento obtenido: ${order.yieldPercentage}%. Merma: ${order.caratLoss} ct.`,
      modificationHistory: [
        {
          id: `MOD-${Date.now()}`,
          date: new Date().toISOString(),
          action: 'Alta en inventario desde Taller Lapidario',
          details: `Ingresada con peso final de ${order.finalWeightCarats} ct (Rendimiento: ${order.yieldPercentage}%) tras proceso de talla ${order.code}.`
        }
      ]
    };

    StorageService.saveEmerald(newStone, `Alta directa desde Orden de Talla ${order.code}`);
    setRegisteredInInventoryIds([...registeredInInventoryIds, order.id]);
    alert(`¡Esmeralda ${newId} registrada exitosamente en tu inventario con ${order.finalWeightCarats} quilates!`);
  };

  const getStageOrder = (status: CuttingWorkOrder['status']) => {
    switch (status) {
      case 'recibida': return 1;
      case 'desbaste': return 2;
      case 'facetado': return 3;
      case 'pulido': return 4;
      case 'finalizada': return 5;
      default: return 0;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            <Hammer className="w-6 h-6 text-emerald-400" />
            Taller de Talla y Lapidación
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Gestión integral de cristales en bruto, fases de corte, cálculo de merma/rendimiento y pase a inventario
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => StorageService.exportWorkOrdersCsv()}
            className="p-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-emerald-800 rounded-xl flex items-center gap-1.5 transition-colors"
            title="Exportar órdenes de trabajo a CSV"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Exportar CSV</span>
          </button>

          <button
            onClick={() => setShowNewOrderModal(true)}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Nueva Orden de Talla</span>
          </button>
        </div>
      </div>

      {/* Workshop Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {orders.map(order => {
          const isDone = order.status === 'finalizada';
          const yieldPct = order.yieldPercentage || 0;
          const lossCarats = order.caratLoss || (
            order.finalWeightCarats && order.finalWeightCarats > 0 
              ? parseFloat((order.initialWeightCarats - order.finalWeightCarats).toFixed(2))
              : null
          );
          const lossPct = order.lossPercentage || (
            order.finalWeightCarats && order.finalWeightCarats > 0
              ? parseFloat((100 - yieldPct).toFixed(2))
              : null
          );
          const currentStageIdx = getStageOrder(order.status);
          const alreadyInInventory = registeredInInventoryIds.includes(order.id);

          return (
            <div 
              key={order.id}
              className="bg-slate-900 border border-emerald-950 hover:border-emerald-800/80 p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-emerald-400">{order.code}</span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                    isDone 
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-700' 
                      : 'bg-amber-950 text-amber-300 border-amber-800'
                  }`}>
                    {order.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-emerald-heading line-clamp-1">
                  {order.roughDescription}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>{order.masterCutter}</span> • <span className="italic">{order.workshopName}</span>
                </p>

                {/* Photos Before / After Thumbnail Preview */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img 
                      src={order.photosBefore[0] || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80'} 
                      alt="Cristal en Bruto" 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-slate-950/80 rounded text-[9px] font-bold text-amber-300">
                      Bruto ({order.initialWeightCarats} ct)
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {order.photosAfter && order.photosAfter.length > 0 ? (
                      <>
                        <img 
                          src={order.photosAfter[0]} 
                          alt="Gema Tallada" 
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-slate-950/80 rounded text-[9px] font-bold text-emerald-300">
                          Tallada ({order.finalWeightCarats} ct)
                        </span>
                      </>
                    ) : (
                      <div className="text-center p-2 text-slate-500">
                        <Scissors className="w-5 h-5 mx-auto mb-1 opacity-50" />
                        <span className="text-[10px] block">En proceso</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Weight & Yield Calculation Card */}
                <div className="mt-4 p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2 text-center pb-2 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">Peso Bruto Inicial</span>
                      <span className="text-sm font-bold text-white">{order.initialWeightCarats} ct</span>
                      <span className="text-[10px] text-slate-500 block">{(order.initialWeightCarats * 0.2).toFixed(2)} g</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">Peso Final Tallado</span>
                      <span className="text-sm font-bold text-emerald-300">
                        {order.finalWeightCarats && order.finalWeightCarats > 0 ? `${order.finalWeightCarats} ct` : 'En proceso'}
                      </span>
                      {order.finalWeightCarats ? (
                        <span className="text-[10px] text-slate-500 block">{(order.finalWeightCarats * 0.2).toFixed(2)} g</span>
                      ) : null}
                    </div>
                  </div>

                  {/* Yield & Loss Metrics */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5 text-amber-400" /> Rendimiento Lapidario:
                    </span>
                    <span className="font-bold text-amber-300 font-mono text-sm">
                      {isDone ? `${yieldPct}%` : 'Calculando...'}
                    </span>
                  </div>

                  {lossCarats !== null && (
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Merma total en talla:</span>
                      <span className="text-rose-400 font-mono">-{lossCarats} ct ({lossPct}%)</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Talla Proyectada:</span>
                    <span className="text-white font-medium">{order.targetCutShape}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Costo Mano de Obra:</span>
                    <span className="font-mono text-slate-300">${order.laborCostCop.toLocaleString()} COP</span>
                  </div>
                </div>

                {/* Progress Stages Bar (5 stages) */}
                <div className="mt-3 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase">Fase Lapidaria Actual:</span>
                  <div className="grid grid-cols-5 gap-1 text-[8px] text-center font-bold">
                    <div className={`py-1 rounded ${currentStageIdx >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Recepción
                    </div>
                    <div className={`py-1 rounded ${currentStageIdx >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Desbaste
                    </div>
                    <div className={`py-1 rounded ${currentStageIdx >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Facetado
                    </div>
                    <div className={`py-1 rounded ${currentStageIdx >= 4 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Pulido
                    </div>
                    <div className={`py-1 rounded ${currentStageIdx >= 5 ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Entrega
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  {order.status === 'recibida' && (
                    <button
                      onClick={() => handleAdvanceStage(order, 'desbaste')}
                      className="py-1 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg flex items-center gap-1"
                    >
                      <span>Iniciar Desbaste</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                  {order.status === 'desbaste' && (
                    <button
                      onClick={() => handleAdvanceStage(order, 'facetado')}
                      className="py-1 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg flex items-center gap-1"
                    >
                      <span>Pasar a Facetado</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                  {order.status === 'facetado' && (
                    <button
                      onClick={() => handleAdvanceStage(order, 'pulido')}
                      className="py-1 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg flex items-center gap-1"
                    >
                      <span>Pasar a Pulido</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                  {order.status === 'pulido' && (
                    <button
                      onClick={() => handleAdvanceStage(order, 'finalizada')}
                      className="py-1 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center gap-1 shadow-md shadow-emerald-950"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Finalizar y Registrar Peso</span>
                    </button>
                  )}

                  {isDone && (
                    <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Talla Finalizada ({order.finalWeightCarats} ct)
                    </span>
                  )}

                  <button
                    onClick={() => {
                      if (confirm(`¿Eliminar orden de talla ${order.code}?`)) {
                        StorageService.deleteWorkOrder(order.id);
                      }
                    }}
                    className="text-slate-500 hover:text-rose-400 text-xs"
                  >
                    Eliminar
                  </button>
                </div>

                {/* Pase a Inventario Button when done */}
                {isDone && (
                  <button
                    onClick={() => handleRegisterInInventory(order)}
                    disabled={alreadyInInventory}
                    className={`w-full py-1.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      alreadyInInventory
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-emerald-950 hover:bg-emerald-900 border border-emerald-700 text-emerald-300'
                    }`}
                  >
                    <PackagePlus className="w-3.5 h-3.5" />
                    <span>{alreadyInInventory ? 'Ya ingresada en Inventario' : 'Registrar Esmeralda Tallada en Inventario'}</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* New Work Order Modal */}
      {showNewOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-900 rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-emerald-heading">Nueva Orden de Trabajo de Talla</h3>
              <button onClick={() => setShowNewOrderModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateOrder} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Código de Orden</label>
                  <input
                    type="text"
                    required
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Piedra de Inventario (Opcional)</label>
                  <select
                    value={stoneId}
                    onChange={e => {
                      setStoneId(e.target.value);
                      const s = emeralds.find(x => x.id === e.target.value);
                      if (s) {
                        setRoughDescription(`${s.reference} (${s.origin})`);
                        setInitialWeight(s.weightCarats);
                      }
                    }}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="">-- Cristal nuevo externo --</option>
                    {emeralds.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.id} — {s.reference} ({s.weightCarats} ct)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Descripción del Cristal en Bruto *</label>
                <input
                  type="text"
                  required
                  value={roughDescription}
                  onChange={e => setRoughDescription(e.target.value)}
                  placeholder="ej. Prisma hexagonal Muzo veta Tequendama 10 ct"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Peso Inicial Bruto (ct) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={initialWeight}
                    onChange={e => setInitialWeight(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs font-bold text-emerald-300"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Equivale a {(initialWeight * 0.2).toFixed(2)} g</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Talla Proyectada</label>
                  <select
                    value={targetShape}
                    onChange={e => setTargetShape(e.target.value as CutShape)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="Octagonal (Talla Esmeralda)">Octagonal (Talla Esmeralda)</option>
                    <option value="Gota / Pera">Gota / Pera</option>
                    <option value="Cojín (Cushion)">Cojín (Cushion)</option>
                    <option value="Oval">Oval</option>
                    <option value="Cabuchón">Cabuchón</option>
                    <option value="Trapiche">Trapiche</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Maestro Lapidario</label>
                  <input
                    type="text"
                    value={masterCutter}
                    onChange={e => setMasterCutter(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Taller de Lapidación</label>
                  <input
                    type="text"
                    value={workshopName}
                    onChange={e => setWorkshopName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Costo Mano de Obra (COP)</label>
                  <input
                    type="number"
                    value={laborCost}
                    onChange={e => setLaborCost(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Fecha Estimada de Entrega</label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={e => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">URL Fotografía del Bruto</label>
                <input
                  type="url"
                  value={photoBeforeUrl}
                  onChange={e => setPhotoBeforeUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Instrucciones Lapidarias y Orientación</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewOrderModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg"
                >
                  Crear Orden de Talla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
