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
  ArrowRight
} from 'lucide-react';
import { StorageService } from '../../services/storage';

interface CuttingWorkOrdersProps {
  orders: CuttingWorkOrder[];
  emeralds: EmeraldStone[];
}

export const CuttingWorkOrders: React.FC<CuttingWorkOrdersProps> = ({
  orders,
  emeralds
}) => {
  const [showNewOrderModal, setShowNewOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<CuttingWorkOrder | null>(null);

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
  const [notes, setNotes] = useState('Orientar la tabla perpendicular al eje C para maximizar el verde profundo.');

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: CuttingWorkOrder = {
      id: `WO-${Date.now()}`,
      code,
      stoneId: stoneId || undefined,
      roughDescription: roughDescription || 'Cristal en bruto de Muzo',
      initialWeightCarats: initialWeight,
      initialDimensions: initialDims,
      targetCutShape: targetShape,
      masterCutter,
      workshopName,
      startDate: new Date().toISOString().split('T')[0],
      estimatedDeliveryDate: deliveryDate,
      status: 'desbaste',
      finalWeightCarats: 0,
      yieldPercentage: 0,
      laborCostCop: laborCost,
      notes,
      photosBefore: ['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'],
      photosAfter: []
    };

    StorageService.saveWorkOrder(newOrder);
    setShowNewOrderModal(false);
  };

  const handleUpdateOrderStatus = (order: CuttingWorkOrder, newStatus: any, finalWeight?: number) => {
    const updated: CuttingWorkOrder = {
      ...order,
      status: newStatus,
      ...(finalWeight !== undefined ? {
        finalWeightCarats: finalWeight,
        yieldPercentage: parseFloat(((finalWeight / order.initialWeightCarats) * 100).toFixed(2)),
        completedDate: newStatus === 'finalizada' ? new Date().toISOString().split('T')[0] : undefined
      } : {})
    };
    StorageService.saveWorkOrder(updated);
    if (selectedOrder?.id === order.id) {
      setSelectedOrder(updated);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            <Hammer className="w-6 h-6 text-emerald-400" />
            Control de Taller y Lapidación
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Órdenes de trabajo, seguimiento de desbaste, cálculo automático de rendimiento y merma
          </p>
        </div>

        <button
          onClick={() => setShowNewOrderModal(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Nueva Orden de Talla</span>
        </button>
      </div>

      {/* Workshop Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {orders.map(order => {
          const isDone = order.status === 'finalizada';
          const yieldPct = order.yieldPercentage || 0;
          const lossCarats = order.finalWeightCarats && order.finalWeightCarats > 0 
            ? (order.initialWeightCarats - order.finalWeightCarats).toFixed(2)
            : null;

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

                {/* Weight & Yield Calculation Card */}
                <div className="mt-4 p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2 text-center pb-2 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">Peso Bruto Inicial</span>
                      <span className="text-sm font-bold text-white">{order.initialWeightCarats} ct</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">Peso Final Tallado</span>
                      <span className="text-sm font-bold text-emerald-300">
                        {order.finalWeightCarats && order.finalWeightCarats > 0 ? `${order.finalWeightCarats} ct` : 'En proceso'}
                      </span>
                    </div>
                  </div>

                  {/* Yield & Loss Metrics */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5 text-amber-400" /> Rendimiento Lapidario:
                    </span>
                    <span className="font-bold text-amber-300 font-mono text-sm">
                      {isDone ? `${yieldPct}%` : 'Pendiente'}
                    </span>
                  </div>

                  {lossCarats && (
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Merma en talla:</span>
                      <span className="text-rose-400 font-mono">-{lossCarats} ct</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Mano de Obra:</span>
                    <span className="font-mono text-slate-300">${order.laborCostCop.toLocaleString()} COP</span>
                  </div>
                </div>

                {/* Progress Stages Bar */}
                <div className="mt-3 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 block uppercase">Etapa del Trabajo:</span>
                  <div className="grid grid-cols-4 gap-1 text-[9px] text-center font-bold">
                    <div className={`py-1 rounded ${order.status === 'desbaste' || order.status === 'facetado' || order.status === 'pulido' || isDone ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Desbaste
                    </div>
                    <div className={`py-1 rounded ${order.status === 'facetado' || order.status === 'pulido' || isDone ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Facetado
                    </div>
                    <div className={`py-1 rounded ${order.status === 'pulido' || isDone ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Pulido
                    </div>
                    <div className={`py-1 rounded ${isDone ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      Final
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                {!isDone ? (
                  <button
                    onClick={() => {
                      const finalWeightStr = prompt(`Ingresa el peso final obtenido en quilates (ct) para ${order.code}:`, '3.50');
                      if (finalWeightStr) {
                        const fw = parseFloat(finalWeightStr);
                        if (!isNaN(fw) && fw > 0) {
                          handleUpdateOrderStatus(order, 'finalizada', fw);
                        }
                      }
                    }}
                    className="py-1.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Finalizar Talla</span>
                  </button>
                ) : (
                  <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Entrega Completada
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
                    <option value="">-- Piedra nueva externa --</option>
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
                  placeholder="ej. Prisma Muzo veta Tequendama 10 ct"
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
