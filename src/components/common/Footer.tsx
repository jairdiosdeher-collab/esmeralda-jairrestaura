import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Heart, MapPin, Sparkles, Scale, Info } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-slate-950 border-t border-emerald-950 text-slate-400 text-xs no-print mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" showSubtitle={false} />
            <p className="text-slate-300 text-sm italic font-emerald-heading">
              "El conocimiento y las herramientas del mundo esmeraldero al alcance de todos."
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Plataforma universal creada para dignificar y potenciar la cadena de valor de la esmeralda colombiana: mineros artesanales, cooperativas, talladores de La Candelaria y Boyacá, comerciantes, gemólogos, joyeros y coleccionistas.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-[11px] font-semibold text-emerald-300">
                <ShieldCheck className="w-3 h-3" /> 100% Gratuita para Siempre
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-[11px] font-semibold text-amber-300">
                <Sparkles className="w-3 h-3" /> Sin Registro Obligatorio
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
                <MapPin className="w-3 h-3 text-emerald-400" /> Muzo • Chivor • Coscuez • Bogotá
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider text-xs uppercase font-emerald-heading">
              Módulos Principales
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectTab('inventario')} className="hover:text-emerald-300 transition-colors">
                  Inventario Inteligente de Gemas
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('pasaporte')} className="hover:text-emerald-300 transition-colors">
                  Pasaporte Digital & QR
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('valoracion')} className="hover:text-emerald-300 transition-colors">
                  Valoración Gemológica con IA
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('comercio')} className="hover:text-emerald-300 transition-colors">
                  Cotizaciones y Comercio Ético
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('taller')} className="hover:text-emerald-300 transition-colors">
                  Control de Talla y Rendimiento
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Education & Community */}
          <div className="space-y-3">
            <h4 className="text-white font-bold tracking-wider text-xs uppercase font-emerald-heading">
              Conocimiento & Red
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectTab('ai')} className="hover:text-emerald-300 transition-colors">
                  Centro de Asistentes IA (10 Perfiles)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('academia')} className="hover:text-emerald-300 transition-colors">
                  Academia Esmeraldera Colombiana
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('directorio')} className="hover:text-emerald-300 transition-colors">
                  Directorio Nacional del Sector
                </button>
              </li>
              <li>
                <span className="text-slate-500 text-[11px]">
                  Fomento de buenas prácticas y trazabilidad RUCOM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Ethical and Legal Gemological Disclaimer Banner */}
        <div className="pt-6 border-t border-slate-900 bg-slate-950/50 p-4 rounded-xl border border-emerald-950/40 text-[11px] leading-relaxed text-slate-400 space-y-2">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-300">
                Aviso Gemológico y Legal de Transparencia:
              </p>
              <p>
                Los pasaportes digitales, estimaciones comparativas de valoración y respuestas de los asistentes de inteligencia artificial generados en esta plataforma constituyen herramientas de orientación preliminar, organización documental y cálculo técnico. No sustituyen un certificado físico o dictamen pericial emitido por laboratorios gemológicos acreditados (como CDTEC, GIA, Gubelin o SSEF) ni constituyen avalúo mercantil vinculante. Una fotografía digital o un registro de usuario no certifica autenticidad, origen ni tratamientos.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 mt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} ESMERALDA INTELIGENTE JAIRRESTAURA. Hecho con orgullo para Colombia y el mundo esmeraldero.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Al servicio del gremio esmeraldero</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
