import React, { useState, useMemo } from 'react';
import { 
  BookA, 
  Search, 
  Filter, 
  Sparkles, 
  Layers, 
  X, 
  Info, 
  ArrowUpDown,
  BookOpen
} from 'lucide-react';
import { COMPREHENSIVE_GLOSSARY } from '../../data/academy/glossary';
import { GlossaryTerm } from '../../types/academy';

export const GlossaryViewer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedLetter, setSelectedLetter] = useState<string>('todos');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const categories = [
    'todos',
    'Mineralogía & Cristalografía',
    'Óptica & Propiedades Físicas',
    'Inclusiones & Microscopía',
    'Geología & Depósitos',
    'Talla & Lapidación',
    'Tratamientos & Laboratorio',
    'Comercio & Economía',
    'Normativa & Legal'
  ];

  // Alphabet list for A-Z bar
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const filteredTerms = useMemo(() => {
    return COMPREHENSIVE_GLOSSARY.filter(item => {
      const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      
      const firstChar = item.term.charAt(0).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const matchesLetter = selectedLetter === 'todos' || firstChar === selectedLetter;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.simpleExplanation.toLowerCase().includes(q) ||
        item.rigorousDefinition.toLowerCase().includes(q) ||
        item.emeraldApplication.toLowerCase().includes(q);

      return matchesCategory && matchesLetter && matchesQuery;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  return (
    <div className="space-y-6">
      {/* Search and Filters Header */}
      <div className="bg-slate-900/90 border border-emerald-900/60 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                <BookA className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                Enciclopedia Gemológica y Minera
              </span>
            </div>
            <h2 className="text-2xl font-black text-white font-emerald-heading">
              Glosario Exhaustivo del Sector Esmeraldero
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              Más de 150 términos técnicos, científicos, lapidarios y jurídicos. Cada entrada incluye definición rigurosa, explicación sencilla y aplicación específica a la esmeralda colombiana.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar término, concepto o aplicación..."
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

        {/* A-Z Alphabet Filter Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px] font-bold text-slate-400 border-t border-slate-800/80 pt-3">
          <button
            onClick={() => setSelectedLetter('todos')}
            className={`px-2.5 py-1 rounded-lg shrink-0 transition-all ${
              selectedLetter === 'todos'
                ? 'bg-emerald-500 text-slate-950 font-black'
                : 'hover:bg-slate-800 text-slate-300'
            }`}
          >
            TODOS (A-Z)
          </button>
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 flex items-center justify-center rounded-lg shrink-0 transition-all ${
                selectedLetter === letter
                  ? 'bg-emerald-500 text-slate-950 font-black'
                  : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md font-extrabold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750'
              }`}
            >
              {cat === 'todos' ? 'Todas las Categorías' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2">
        <span>Mostrando <strong>{filteredTerms.length}</strong> términos documentados</span>
        {filteredTerms.length > 0 && (
          <span className="text-[11px] text-emerald-400 font-semibold">
            Haz clic en cualquier tarjeta para expandir la formulación y ejemplos
          </span>
        )}
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTerms.map(item => {
          const isExpanded = expandedTerm === item.term;

          return (
            <div
              key={item.term}
              onClick={() => setExpandedTerm(isExpanded ? null : item.term)}
              className={`bg-slate-900/90 border rounded-3xl p-5 shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isExpanded
                  ? 'border-emerald-500 ring-1 ring-emerald-500 bg-slate-850'
                  : 'border-slate-800 hover:border-slate-700 hover:bg-slate-850/80'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-850 border border-slate-700 text-emerald-300 uppercase">
                    {item.category}
                  </span>
                  {item.etymology && (
                    <span className="text-[10px] text-slate-500 italic">
                      {item.etymology}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors font-emerald-heading">
                  {item.term}
                </h3>

                {/* Plain language explanation */}
                <div className="bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
                  <span className="text-[10px] font-extrabold uppercase text-amber-400 block mb-0.5">
                    En palabras sencillas:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {item.simpleExplanation}
                  </p>
                </div>

                {/* Rigorous Scientific Definition */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block">
                    Definición Técnico-Científica:
                  </span>
                  <p className={`text-xs text-slate-300 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {item.rigorousDefinition}
                  </p>
                </div>
              </div>

              {/* Application to Emerald */}
              <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                <div className="text-[10px] font-extrabold uppercase text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Aplicación en la Esmeralda Colombiana:</span>
                </div>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  {item.emeraldApplication}
                </p>

                {item.example && (
                  <div className="text-[11px] text-slate-400 bg-slate-950/40 p-2 rounded-xl border border-slate-800/50 mt-1 font-mono">
                    Ej: {item.example}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredTerms.length === 0 && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <BookA className="w-10 h-10 text-slate-500 mx-auto" />
          <h4 className="text-base font-bold text-white">No se encontraron términos para esta búsqueda</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Prueba utilizando un término más amplio o seleccionando otra letra en la barra alfabética.
          </p>
        </div>
      )}
    </div>
  );
};
