import React, { useState } from 'react';
import { EmeraldStone, LotClassification } from '../../types';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Plus, 
  QrCode, 
  Sparkles, 
  Edit3, 
  Trash2, 
  Download, 
  FileSpreadsheet, 
  Layers, 
  Tag, 
  ShieldCheck, 
  Eye, 
  ArrowUpDown,
  AlertTriangle,
  History,
  FileCheck
} from 'lucide-react';
import { StorageService } from '../../services/storage';
import { ConfirmModal } from '../common/ConfirmModal';

interface InventoryListProps {
  emeralds: EmeraldStone[];
  onOpenPassport: (stone: EmeraldStone) => void;
  onOpenValuation: (stone: EmeraldStone) => void;
  onOpenEdit: (stone: EmeraldStone) => void;
  onNewEmerald: () => void;
}

export const InventoryList: React.FC<InventoryListProps> = ({
  emeralds,
  onOpenPassport,
  onOpenValuation,
  onOpenEdit,
  onNewEmerald
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [commercialFilter, setCommercialFilter] = useState<string>('todos');
  const [lotFilter, setLotFilter] = useState<string>('todos');
  const [docFilter, setDocFilter] = useState<string>('todos');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState<'reciente' | 'peso_desc' | 'peso_asc' | 'precio_desc'>('reciente');
  const [stoneToDelete, setStoneToDelete] = useState<EmeraldStone | null>(null);

  // Filter & Sort Logic
  const filtered = emeralds
    .filter(stone => {
      const matchSearch = 
        stone.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stone.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stone.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stone.colorTone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (stone.supplierName && stone.supplierName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (stone.supplierRucom && stone.supplierRucom.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (stone.certificateNumber && stone.certificateNumber.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchStatus = statusFilter === 'todos' || stone.status === statusFilter;
      const matchCommercial = commercialFilter === 'todos' || stone.commercialStatus === commercialFilter;
      const matchLot = lotFilter === 'todos' || stone.lotClassification === lotFilter;
      
      const isPendingDoc = !stone.documentNumber || stone.declaredProvenance === 'Declaración Verbal No Soportada';
      const matchDoc = docFilter === 'todos' 
        ? true 
        : docFilter === 'con_soporte' 
          ? !isPendingDoc 
          : isPendingDoc;

      return matchSearch && matchStatus && matchCommercial && matchLot && matchDoc;
    })
    .sort((a, b) => {
      if (sortBy === 'peso_desc') return b.weightCarats - a.weightCarats;
      if (sortBy === 'peso_asc') return a.weightCarats - b.weightCarats;
      if (sortBy === 'precio_desc') return (b.estimatedPriceUsd || 0) - (a.estimatedPriceUsd || 0);
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const totalCarats = filtered.reduce((acc, s) => acc + s.weightCarats, 0);
  const totalValueUsd = filtered.reduce((acc, s) => acc + (s.estimatedPriceUsd || 0), 0);
  const pendingDocsCount = emeralds.filter(s => !s.documentNumber || s.declaredProvenance === 'Declaración Verbal No Soportada').length;

  const handleDeleteConfirm = () => {
    if (stoneToDelete) {
      StorageService.deleteEmerald(stoneToDelete.id);
      setStoneToDelete(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'tallado':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">Tallado</span>;
      case 'en_bruto':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">En Bruto</span>;
      case 'engastado':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">Engastado</span>;
      default:
        return null;
    }
  };

  const getCommercialBadge = (status: string) => {
    switch (status) {
      case 'disponible':
        return <span className="text-[10px] font-semibold text-emerald-400">● Disponible</span>;
      case 'reservado':
        return <span className="text-[10px] font-semibold text-amber-400">● Reservado</span>;
      case 'vendido':
        return <span className="text-[10px] font-semibold text-slate-400">● Vendido</span>;
      case 'en_talla':
        return <span className="text-[10px] font-semibold text-cyan-400">● En Taller</span>;
      case 'coleccion':
        return <span className="text-[10px] font-semibold text-purple-400">● Colección</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner and Quick Stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            Inventario Inteligente de Esmeraldas
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Gestión integral de gemas individuales y lotes, trazabilidad documental RUCOM, pasaporte QR y auditoría
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => StorageService.exportEmeraldsCsv()}
            className="p-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-emerald-800 rounded-xl flex items-center gap-1.5 transition-colors"
            title="Exportar inventario a Excel/CSV con trazabilidad completa"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Exportar CSV</span>
          </button>

          <button
            onClick={onNewEmerald}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Registrar Esmeralda</span>
          </button>
        </div>
      </div>

      {/* Summary Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 bg-slate-900/80 border border-emerald-950 rounded-2xl">
          <span className="text-[11px] font-medium text-slate-400 block">Total en Inventario</span>
          <span className="text-xl font-bold text-white font-emerald-heading">{emeralds.length} <span className="text-xs font-normal text-slate-400">piezas</span></span>
        </div>

        <div className="p-3.5 bg-slate-900/80 border border-emerald-950 rounded-2xl">
          <span className="text-[11px] font-medium text-slate-400 block">Quilataje Registrado</span>
          <span className="text-xl font-bold text-emerald-300 font-emerald-heading">{totalCarats.toFixed(2)} <span className="text-xs font-normal text-slate-400">ct</span></span>
        </div>

        <div className="p-3.5 bg-slate-900/80 border border-emerald-950 rounded-2xl">
          <span className="text-[11px] font-medium text-slate-400 block">Disponibles Venta</span>
          <span className="text-xl font-bold text-amber-300 font-emerald-heading">
            {emeralds.filter(s => s.commercialStatus === 'disponible').length} <span className="text-xs font-normal text-slate-400">gemas</span>
          </span>
        </div>

        <div className="p-3.5 bg-slate-900/80 border border-emerald-950 rounded-2xl">
          <span className="text-[11px] font-medium text-slate-400 block">Alertas Documentales</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`text-xl font-bold font-emerald-heading ${pendingDocsCount > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {pendingDocsCount}
            </span>
            <span className="text-[10px] text-slate-400">sin soporte legal formal</span>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 bg-slate-900/90 border border-emerald-950 rounded-2xl space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Buscar por código (EMR-...), nombre, yacimiento Muzo/Chivor, RUCOM, proveedor..."
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Quick Select Filters */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Lot Classification Filter */}
            <select
              value={lotFilter}
              onChange={e => setLotFilter(e.target.value)}
              className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="todos">Todos los Formatos</option>
              <option value="Piedra Suelta">Piedra Suelta</option>
              <option value="Lote / Paquete">Lote / Paquete</option>
              <option value="Canutillo en Bruto">Canutillo en Bruto</option>
              <option value="Moralla">Moralla</option>
              <option value="Muestra de Colección">Muestra de Colección</option>
            </select>

            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="todos">Todos los Estados</option>
              <option value="tallado">Tallado</option>
              <option value="en_bruto">En Bruto</option>
              <option value="engastado">Engastado</option>
            </select>

            <select
              value={docFilter}
              onChange={e => setDocFilter(e.target.value)}
              className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="todos">Toda Documentación</option>
              <option value="con_soporte">Con Soporte Legal / RUCOM</option>
              <option value="sin_soporte">Doc. Pendiente / Sin Soporte</option>
            </select>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="reciente">Más recientes</option>
              <option value="peso_desc">Mayor Quilataje (ct)</option>
              <option value="peso_asc">Menor Quilataje (ct)</option>
              <option value="precio_desc">Mayor Precio (USD)</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs ${viewMode === 'grid' ? 'bg-emerald-950 text-emerald-300' : 'text-slate-400'}`}
                title="Vista en cuadrícula"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg text-xs ${viewMode === 'table' ? 'bg-emerald-950 text-emerald-300' : 'text-slate-400'}`}
                title="Vista en tabla"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Emerald Content: Grid View or Table View */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-slate-900/50 border border-dashed border-slate-800 rounded-2xl space-y-3">
          <Layers className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No se encontraron esmeraldas</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            No hay registros que coincidan con los filtros seleccionados o tu inventario aún no tiene piezas registradas.
          </p>
          <button
            onClick={onNewEmerald}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Registrar primera esmeralda</span>
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((stone) => {
            const hasPendingDoc = !stone.documentNumber || stone.declaredProvenance === 'Declaración Verbal No Soportada';
            const editCount = stone.modificationHistory?.length || 0;

            return (
              <div 
                key={stone.id}
                className="bg-slate-900/90 border border-emerald-950 hover:border-emerald-700/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-950/40 transition-all flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                  <img 
                    src={stone.photos[0] || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'} 
                    alt={stone.reference}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1.5">
                    {getStatusBadge(stone.status)}
                    {stone.lotClassification && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300">
                        {stone.lotClassification}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-emerald-300">
                    {stone.id}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-xs font-bold text-amber-300">
                    {stone.weightCarats} ct {stone.weightGrams ? `(${(stone.weightGrams).toFixed(2)}g)` : ''}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800">
                    {getCommercialBadge(stone.commercialStatus)}
                  </div>
                </div>

                {/* Info Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1 font-emerald-heading">
                      {stone.reference}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                      <span>{stone.origin}</span> • <span className="italic">{stone.cutShape}</span>
                    </p>
                  </div>

                  {/* Traceability & Compliance Status Badge */}
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    {hasPendingDoc ? (
                      <span className="px-2 py-0.5 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-300 text-[10px] font-semibold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-400" />
                        <span>Soporte legal pendiente</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-[10px] font-semibold flex items-center gap-1">
                        <FileCheck className="w-3 h-3 text-emerald-400" />
                        <span>{stone.declaredProvenance}</span>
                      </span>
                    )}

                    {editCount > 0 && (
                      <span className="text-[10px] text-slate-400 flex items-center gap-1" title={`${editCount} cambios auditados en historial`}>
                        <History className="w-3 h-3 text-slate-500" />
                        <span>{editCount} auditados</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-xs border-t border-slate-800/80 pt-2.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Color / Transparencia:</span>
                      <span className="font-medium text-emerald-200 line-clamp-1 text-right">{stone.colorTone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Proveedor / RUCOM:</span>
                      <span className="font-mono text-slate-300 text-right">
                        {stone.supplierRucom ? `RUCOM: ${stone.supplierRucom}` : (stone.supplierName || 'No declarado')}
                      </span>
                    </div>
                    {stone.estimatedPriceUsd && (
                      <div className="flex justify-between items-baseline pt-1">
                        <span className="text-slate-400">Precio Est.:</span>
                        <span className="text-sm font-bold text-amber-300">
                          ${stone.estimatedPriceUsd.toLocaleString()} USD
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => onOpenPassport(stone)}
                      className="p-2 text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 rounded-xl border border-emerald-800/50 flex flex-col items-center gap-0.5 transition-colors"
                      title="Ver Pasaporte Digital, Código QR y Custodia"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Pasaporte</span>
                    </button>

                    <button
                      onClick={() => onOpenValuation(stone)}
                      className="p-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl border border-slate-700 flex flex-col items-center gap-0.5 transition-colors"
                      title="Valoración Asistida y Ensayo Gemológico"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Laboratorio</span>
                    </button>

                    <button
                      onClick={() => onOpenEdit(stone)}
                      className="p-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 flex flex-col items-center gap-0.5 transition-colors"
                      title="Editar datos y registrar auditoría"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Editar</span>
                    </button>

                    <button
                      onClick={() => setStoneToDelete(stone)}
                      className="p-2 text-xs font-semibold bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 rounded-xl border border-rose-800/40 flex flex-col items-center gap-0.5 transition-colors"
                      title="Eliminar de inventario"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span className="text-[9px]">Borrar</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Table View */
        <div className="overflow-x-auto bg-slate-900 border border-emerald-950 rounded-2xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Código</th>
                <th className="py-3 px-4">Gema / Formato</th>
                <th className="py-3 px-4">Origen</th>
                <th className="py-3 px-4">Peso (ct / g)</th>
                <th className="py-3 px-4">Talla</th>
                <th className="py-3 px-4">Trazabilidad / RUCOM</th>
                <th className="py-3 px-4">Comercial</th>
                <th className="py-3 px-4">Precio (USD)</th>
                <th className="py-3 px-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((stone) => {
                const hasPendingDoc = !stone.documentNumber || stone.declaredProvenance === 'Declaración Verbal No Soportada';
                return (
                  <tr key={stone.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-emerald-400">{stone.id}</td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-white block">{stone.reference}</span>
                      <span className="text-[10px] text-slate-400">{stone.lotClassification || 'Piedra Suelta'}</span>
                    </td>
                    <td className="py-3 px-4">{stone.origin}</td>
                    <td className="py-3 px-4 font-bold text-white">
                      {stone.weightCarats} ct
                      {stone.weightGrams ? <span className="text-[10px] text-slate-400 block font-normal">{stone.weightGrams}g</span> : null}
                    </td>
                    <td className="py-3 px-4">{stone.cutShape}</td>
                    <td className="py-3 px-4">
                      {hasPendingDoc ? (
                        <span className="text-amber-400 text-[10px] font-semibold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Sin soporte legal
                        </span>
                      ) : (
                        <span className="text-emerald-300 text-[10px] font-medium flex items-center gap-1">
                          <FileCheck className="w-3 h-3" /> {stone.supplierRucom ? `RUCOM ${stone.supplierRucom}` : stone.declaredProvenance}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">{getCommercialBadge(stone.commercialStatus)}</td>
                    <td className="py-3 px-4 font-semibold text-amber-300">
                      {stone.estimatedPriceUsd ? `$${stone.estimatedPriceUsd.toLocaleString()}` : '-'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onOpenPassport(stone)}
                          className="p-1.5 bg-emerald-950 text-emerald-300 hover:bg-emerald-900 rounded-lg border border-emerald-800/60"
                          title="Ver Pasaporte QR"
                        >
                          <QrCode className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onOpenValuation(stone)}
                          className="p-1.5 bg-slate-800 text-amber-300 hover:bg-slate-700 rounded-lg"
                          title="Laboratorio & Valoración"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onOpenEdit(stone)}
                          className="p-1.5 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg"
                          title="Editar"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setStoneToDelete(stone)}
                          className="p-1.5 bg-rose-950 text-rose-300 hover:bg-rose-900 rounded-lg"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={Boolean(stoneToDelete)}
        title="¿Eliminar esmeralda del inventario?"
        message={`Esta acción eliminará permanentemente la piedra "${stoneToDelete?.reference}" (${stoneToDelete?.id}) de tu inventario local.`}
        confirmLabel="Sí, eliminar piedra"
        cancelLabel="Cancelar"
        isDestructive={true}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setStoneToDelete(null)}
      />

    </div>
  );
};
