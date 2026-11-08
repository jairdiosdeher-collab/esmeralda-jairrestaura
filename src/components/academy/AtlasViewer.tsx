import React, { useState } from 'react';
import { 
  Eye, 
  Search, 
  Filter, 
  AlertTriangle, 
  Sparkles, 
  ExternalLink, 
  Layers, 
  X, 
  Check, 
  ZoomIn,
  Compass,
  FileCheck
} from 'lucide-react';
import { SCIENTIFIC_ATLAS_ITEMS } from '../../data/academy/atlas';
import { ScientificAtlasItem } from '../../types/academy';

export const AtlasViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<ScientificAtlasItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todo el Atlas' },
    { id: 'inclusiones_fluidas', label: 'Inclusiones Fluidas' },
    { id: 'inclusiones_solidas', label: 'Inclusiones Sólidas' },
    { id: 'estructuras_crecimiento', label: 'Estructuras de Crecimiento' },
    { id: 'yacimientos', label: 'Yacimientos y Entornos' },
    { id: 'instrumentos', label: 'Instrumental Óptico' },
    { id: 'tallas', label: 'Tallas Lapidarias' }
  ];

  const filteredItems = SCIENTIFIC_ATLAS_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = 
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.scientificName.toLowerCase().includes(query) ||
      item.depositOrOrigin.toLowerCase().includes(query) ||
      (item.chemicalFormula && item.chemicalFormula.toLowerCase().includes(query)) ||
      item.description.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="bg-slate-900/90 border border-emerald-900/60 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                <Eye className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                Microscopía & Diagnóstico de Origen
              </span>
            </div>
            <h2 className="text-2xl font-black text-white font-emerald-heading">
              Atlas Científico de Inclusiones y Geología
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              Catálogo de alta resolución con microfotografía gemológica, hábitos cristalinos, fases fluidas trifásicas, sulfuros de Chivor, parisita de Muzo y salvedades analíticas de laboratorio.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar por mineral, fórmula o yacimiento..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Atlas Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group bg-slate-900/90 border border-slate-800 hover:border-emerald-500/80 rounded-3xl overflow-hidden shadow-xl transition-all cursor-pointer flex flex-col hover:-translate-y-1"
          >
            {/* Image Preview with Magnification Badge */}
            <div className="relative aspect-video overflow-hidden bg-slate-950">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-extrabold text-emerald-300">
                  {item.depositOrOrigin}
                </span>
                {item.magnification && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-950/90 backdrop-blur-md border border-emerald-600/70 text-[10px] font-extrabold text-white">
                    {item.magnification}
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  {item.scientificName}
                </span>
                <h3 className="text-base font-extrabold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                  {item.title}
                </h3>
                {item.chemicalFormula && (
                  <p className="text-[11px] font-mono text-emerald-200/90 font-semibold">
                    {item.chemicalFormula}
                  </p>
                )}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* Caveat warning snippet */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-[10px] text-amber-400/90 font-bold line-clamp-1">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Salvedad Diagnóstica: Clic para ver limitaciones</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <Eye className="w-10 h-10 text-slate-500 mx-auto" />
          <h4 className="text-base font-bold text-white">No se encontraron especímenes en el atlas</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Prueba ajustando el término de búsqueda o cambiando la categoría seleccionada.
          </p>
        </div>
      )}

      {/* Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-emerald-800/80 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-xl border border-slate-700 text-xs">
                <span className="text-emerald-300 font-bold">{activeItem.depositOrOrigin}</span>
                <span className="text-slate-300">Aumento: {activeItem.magnification || 'Macro'}</span>
                {activeItem.illuminationType && (
                  <span className="text-slate-400 hidden sm:inline">Luz: {activeItem.illuminationType}</span>
                )}
              </div>
            </div>

            {/* Modal Information */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                  {activeItem.scientificName}
                </span>
                <h3 className="text-2xl font-black text-white font-emerald-heading">
                  {activeItem.title}
                </h3>
                {activeItem.chemicalFormula && (
                  <div className="text-xs font-mono text-emerald-200 mt-1 font-bold">
                    Fórmula / Parámetro: {activeItem.chemicalFormula}
                  </div>
                )}
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <h4 className="text-xs font-extrabold uppercase text-slate-400">Descripción Petrográfica y Óptica:</h4>
                <p>{activeItem.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-emerald-400">Ambiente Geológico:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{activeItem.geologicalEnvironment}</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-emerald-400">Relevancia Gemológica:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{activeItem.gemologicalSignificance}</p>
                </div>
              </div>

              {/* CRITICAL DIAGNOSTIC CAVEAT CALLOUT */}
              <div className="bg-rose-950/30 border border-rose-800/80 rounded-2xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-rose-300 font-extrabold text-xs uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>Advertencia Científica y Limitaciones Diagnósticas</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-medium">
                  {activeItem.diagnosticCaveat}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span>Crédito: {activeItem.sourceCredit}</span>
                {activeItem.referenceUrl && (
                  <a
                    href={activeItem.referenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:underline"
                  >
                    <span>Ver literatura científica</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
