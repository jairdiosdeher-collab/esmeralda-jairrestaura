import React, { useState } from 'react';
import { EmeraldStone, CuttingWorkOrder, CommercialQuote, TradeOperation } from '../../types';
import { 
  Gem, 
  QrCode, 
  Scale, 
  Briefcase, 
  Hammer, 
  Bot, 
  GraduationCap, 
  BookOpen, 
  Search, 
  PlusCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Clock, 
  ChevronRight,
  TrendingUp,
  MapPin,
  FileCheck
} from 'lucide-react';

interface HomeDashboardProps {
  emeralds: EmeraldStone[];
  workOrders: CuttingWorkOrder[];
  quotes: CommercialQuote[];
  operations: TradeOperation[];
  onSelectTab: (tab: string) => void;
  onOpenPassport: (stone: EmeraldStone) => void;
  onOpenValuation: (stone: EmeraldStone) => void;
  onNewEmerald: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  emeralds,
  workOrders,
  quotes,
  operations,
  onSelectTab,
  onOpenPassport,
  onOpenValuation,
  onNewEmerald
}) => {
  const [globalSearch, setGlobalSearch] = useState('');

  // Real Metric Indicators
  const totalStones = emeralds.length;
  const cutStones = emeralds.filter(s => s.status === 'tallado').length;
  const roughStones = emeralds.filter(s => s.status === 'en_bruto').length;
  const availableStones = emeralds.filter(s => s.commercialStatus === 'disponible').length;
  const reservedStones = emeralds.filter(s => s.commercialStatus === 'reservado').length;
  const totalCarats = emeralds.reduce((acc, s) => acc + s.weightCarats, 0);

  // Filtered stones from global search
  const searchResults = globalSearch.trim()
    ? emeralds.filter(s => 
        s.reference.toLowerCase().includes(globalSearch.toLowerCase()) ||
        s.id.toLowerCase().includes(globalSearch.toLowerCase()) ||
        s.origin.toLowerCase().includes(globalSearch.toLowerCase()) ||
        s.colorTone.toLowerCase().includes(globalSearch.toLowerCase())
      )
    : [];

  const modules = [
    {
      id: 'academia',
      title: 'Academia Esmeraldera & Diploma PDF',
      description: 'Lecciones científicas, atlas de inclusiones, fuentes oficiales (CDTEC, GIA) y Certificado oficial editable para estudiantes.',
      icon: GraduationCap,
      stat: '7 lecciones + Diploma PDF',
      color: 'from-amber-950/60 via-emerald-950/70 to-slate-950',
      border: 'border-amber-500/70',
      badge: 'Destacado #1 • Diploma PDF'
    },
    {
      id: 'inventario',
      title: 'Inventario Inteligente',
      description: 'Registro de gemas, dimensiones, colores, certificados y archivo digital seguro.',
      icon: Gem,
      stat: `${totalStones} gemas registradas`,
      color: 'from-emerald-900/60 to-emerald-950/80',
      border: 'border-emerald-800/60',
      badge: `${totalCarats.toFixed(1)} ct total`
    },
    {
      id: 'pasaporte',
      title: 'Pasaporte Digital & QR',
      description: 'Ficha gemológica única para cada piedra con código QR dinámico y vista pública protegida.',
      icon: QrCode,
      stat: 'Generación instantánea',
      color: 'from-emerald-950/80 to-slate-950',
      border: 'border-emerald-900/60',
      badge: 'QR Verificable'
    },
    {
      id: 'valoracion',
      title: 'Valoración Gemológica con IA',
      description: 'Análisis multidimensional de 5 variables: peso, color, claridad, talla y tratamientos.',
      icon: Scale,
      stat: 'Orientación de mercado',
      color: 'from-amber-950/40 to-slate-950',
      border: 'border-amber-900/50',
      badge: 'Algoritmo 4C+'
    },
    {
      id: 'comercio',
      title: 'Comercio & Cotizaciones',
      description: 'Generación formal de ofertas con membrete, compras, ventas y gestión ética de reservas.',
      icon: Briefcase,
      stat: `${quotes.length} cotizaciones`,
      color: 'from-blue-950/40 to-slate-950',
      border: 'border-blue-900/50',
      badge: '0% Comisiones'
    },
    {
      id: 'taller',
      title: 'Taller & Control de Talla',
      description: 'Órdenes de lapidario, peso inicial vs final y cálculo de rendimiento lapidario %.',
      icon: Hammer,
      stat: `${workOrders.length} órdenes activas`,
      color: 'from-cyan-950/40 to-slate-950',
      border: 'border-cyan-900/50',
      badge: 'Rendimiento %'
    },
    {
      id: 'ai',
      title: 'Centro de Asistentes IA',
      description: '10 agentes especializados: Gemólogo, Valorador, Tallador, Exportación y Documental.',
      icon: Bot,
      stat: '10 agentes activos',
      color: 'from-emerald-900/50 to-slate-950',
      border: 'border-emerald-700/50',
      badge: 'IA Gemológica'
    },
    {
      id: 'directorio',
      title: 'Directorio del Sector',
      description: 'Red nacional de comerciantes, talleres, gemólogos, joyeros y mineros formalizados.',
      icon: BookOpen,
      stat: 'Contactos verificados',
      color: 'from-teal-950/40 to-slate-950',
      border: 'border-teal-900/50',
      badge: 'Red Colombia'
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Hero Banner with Colombian Emerald Luxury Image */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-900/80 bg-slate-950 shadow-2xl">
        {/* Background Image with Dark Emerald Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80" 
            alt="Esmeraldas Colombianas" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>
          <div className="absolute inset-0 bg-radial-at-c from-emerald-500/10 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-700/60 text-xs font-bold text-amber-300 tracking-wide uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>PLATAFORMA GRATUITA — SIN REGISTRO — TODAS LAS FUNCIONES DISPONIBLES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-emerald-heading leading-tight tracking-tight">
            ESMERALDA INTELIGENTE <span className="text-emerald-400">JAIRRESTAURA</span>
          </h1>

          <p className="text-base sm:text-lg font-medium text-emerald-200/90 italic font-emerald-heading">
            "El conocimiento y las herramientas del mundo esmeraldero al alcance de todos."
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            La plataforma universal de la esmeralda colombiana: inventario inteligente, pasaporte digital con código QR dinámico, valoración gemológica asistida por IA, control de tallado y órdenes de lapidación, cotizaciones formales y academia especializada.
          </p>

          {/* Quick Hero Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectTab('academia')}
              className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-black bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl shadow-xl shadow-amber-950/60 transition-all active:scale-95 border border-amber-300"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Academia & Diploma PDF</span>
              <span className="w-2 h-2 rounded-full bg-slate-950 inline-block animate-ping"></span>
            </button>

            <button
              onClick={onNewEmerald}
              className="flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/60 transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Registrar Esmeralda</span>
            </button>

            <button
              onClick={() => onSelectTab('inventario')}
              className="flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-700 hover:border-emerald-600 rounded-xl transition-all"
            >
              <span>Ver Inventario</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Global Quick Search Bar */}
      <div className="relative bg-slate-900/90 border border-emerald-900/80 p-4 rounded-2xl shadow-xl space-y-3">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={globalSearch}
            onChange={e => setGlobalSearch(e.target.value)}
            placeholder="Buscador global: busca cualquier esmeralda por código (EMR-2025-001), yacimiento (Muzo, Chivor...), color o certificado..."
            className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 shadow-inner"
          />
        </div>

        {/* Live Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 animate-fade-in">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Resultados coincidentes ({searchResults.length}):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {searchResults.map(stone => (
                <div 
                  key={stone.id}
                  className="flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800/80 rounded-xl border border-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img 
                      src={stone.photos[0]} 
                      alt={stone.reference} 
                      className="w-10 h-10 rounded-lg object-cover border border-slate-700 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate font-emerald-heading">{stone.reference}</h4>
                      <p className="text-[10px] text-slate-400 truncate">{stone.id} • {stone.weightCarats} ct • {stone.origin}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <button
                      onClick={() => onOpenPassport(stone)}
                      className="p-1.5 bg-emerald-950 text-emerald-300 hover:bg-emerald-900 rounded-lg border border-emerald-800 text-[10px] font-semibold flex items-center gap-1"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span>QR</span>
                    </button>
                    <button
                      onClick={() => onOpenValuation(stone)}
                      className="p-1.5 bg-slate-800 text-amber-300 hover:bg-slate-700 rounded-lg text-[10px] font-semibold flex items-center gap-1"
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>Valorar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Real-time Dashboard Indicators */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-white font-emerald-heading flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Indicadores Reales de la Plataforma
          </h2>
          <span className="text-[11px] text-slate-400">Datos sincronizados con tu inventario</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-4 bg-slate-900/90 border border-emerald-950 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Piedras</span>
            <span className="text-2xl font-black text-white font-emerald-heading mt-1 block">{totalStones}</span>
            <span className="text-[10px] text-emerald-400">{totalCarats.toFixed(1)} ct registrados</span>
          </div>

          <div className="p-4 bg-slate-900/90 border border-emerald-950 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Talladas</span>
            <span className="text-2xl font-black text-emerald-300 font-emerald-heading mt-1 block">{cutStones}</span>
            <span className="text-[10px] text-slate-400">Facetadas/Cabuchón</span>
          </div>

          <div className="p-4 bg-slate-900/90 border border-emerald-950 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">En Bruto</span>
            <span className="text-2xl font-black text-amber-300 font-emerald-heading mt-1 block">{roughStones}</span>
            <span className="text-[10px] text-slate-400">Cristal natural</span>
          </div>

          <div className="p-4 bg-slate-900/90 border border-emerald-950 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Disponibles</span>
            <span className="text-2xl font-black text-emerald-400 font-emerald-heading mt-1 block">{availableStones}</span>
            <span className="text-[10px] text-slate-400">Listas para comercio</span>
          </div>

          <div className="p-4 bg-slate-900/90 border border-emerald-950 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Reservadas</span>
            <span className="text-2xl font-black text-cyan-300 font-emerald-heading mt-1 block">{reservedStones}</span>
            <span className="text-[10px] text-slate-400">En negociación</span>
          </div>

          <div className="p-4 bg-slate-900/90 border border-emerald-950 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Órdenes Talla</span>
            <span className="text-2xl font-black text-purple-300 font-emerald-heading mt-1 block">{workOrders.length}</span>
            <span className="text-[10px] text-slate-400">Control de taller</span>
          </div>
        </div>
      </div>

      {/* Direct Module Access Cards (8 Modules) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg font-bold text-white font-emerald-heading">
            Acceso Directo a los Módulos de la Plataforma
          </h2>
          <span className="text-xs text-amber-400 font-semibold">100% Funcionales y Gratuitos</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                onClick={() => onSelectTab(mod.id)}
                className={`p-5 rounded-2xl bg-gradient-to-br ${mod.color} border ${mod.border} hover:scale-[1.02] transition-all cursor-pointer shadow-lg hover:shadow-emerald-950/50 flex flex-col justify-between space-y-4 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-600/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-bold text-slate-300">
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-emerald-heading group-hover:text-emerald-200 transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-emerald-300">
                  <span>{mod.stat}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Authorized Catalog Showcase */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white font-emerald-heading flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Catálogo de Esmeraldas Autorizadas Destacadas
            </h2>
            <p className="text-xs text-slate-400">
              Especímenes con pasaporte digital activo y especificaciones gemológicas documentadas
            </p>
          </div>

          <button
            onClick={() => onSelectTab('inventario')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <span>Ver todas</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {emeralds.slice(0, 3).map(stone => (
            <div 
              key={stone.id}
              className="bg-slate-900 border border-emerald-950 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-slate-950">
                <img 
                  src={stone.photos[0]} 
                  alt={stone.reference} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-emerald-300">
                  {stone.id}
                </div>
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-xs font-bold text-amber-300">
                  {stone.weightCarats} ct
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-emerald-800 text-[10px] font-bold text-emerald-300">
                  {stone.origin}
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-white font-emerald-heading line-clamp-1">{stone.reference}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{stone.cutShape} • {stone.transparency}</p>
                </div>

                <div className="flex gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onOpenPassport(stone)}
                    className="flex-1 py-2 px-3 text-xs font-semibold bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Pasaporte QR</span>
                  </button>

                  <button
                    onClick={() => onOpenValuation(stone)}
                    className="flex-1 py-2 px-3 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span>Valorar IA</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
