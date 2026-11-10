import React, { useState } from 'react';
import { 
  Eye, 
  Sparkles, 
  RotateCw, 
  Sun, 
  Moon, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Compass, 
  Layers, 
  Maximize2, 
  Search, 
  Sliders, 
  ShieldAlert, 
  Activity, 
  Info,
  ChevronRight,
  BookOpen
} from 'lucide-react';

type LabInstrument = 'lupa' | 'microscopio' | 'refractometro' | 'polariscopio' | 'desafios';

interface Specimen {
  id: string;
  name: string;
  category: 'natural' | 'sintetica' | 'imitacion' | 'otra_gema';
  ri_o: number; // Ordinary ray RI
  ri_e: number; // Extraordinary ray RI
  opticCharacter: 'Uniaxial Negativo (-)' | 'Biaxial Positivo (+)' | 'Isótropo' | 'Anómalo (ADR)';
  pleochroism: string;
  specificGravity: number;
  inclusionsSummary: string;
  details: string;
}

const SPECIMENS: Specimen[] = [
  {
    id: 'muz-nat',
    name: 'Esmeralda Natural Colombiana (Muzo)',
    category: 'natural',
    ri_o: 1.577,
    ri_e: 1.571,
    opticCharacter: 'Uniaxial Negativo (-)',
    pleochroism: 'Dicroísmo fuerte: Verde azulado / Verde amarillento',
    specificGravity: 2.71,
    inclusionsSummary: 'Inclusiones trifásicas en diente de sierra (líquido salino + CO2 + cubo de halita), calcita romboédrica y pirita euhedral.',
    details: 'Berilo natural Be3Al2Si6O18 cromífero de origen hidrotermal sedimentario. Birrefringencia Δn = 0.006. Signo uniaxial negativo.'
  },
  {
    id: 'chiv-nat',
    name: 'Esmeralda Natural Colombiana (Chivor)',
    category: 'natural',
    ri_o: 1.578,
    ri_e: 1.572,
    opticCharacter: 'Uniaxial Negativo (-)',
    pleochroism: 'Dicroísmo fuerte: Verde azulado vivaz / Verde amarillento',
    specificGravity: 2.70,
    inclusionsSummary: 'Microcristales dorados de pirita isométrica, albita tabular y planos curativos bifásicos en velo.',
    details: 'Berilo hidrotermal sedimentario de la cuenca oriental. Alta transparencia, dicroísmo azulado marcado.'
  },
  {
    id: 'syn-hydro',
    name: 'Esmeralda Sintética Hidrotermal (Tipo Tairus / Biron)',
    category: 'sintetica',
    ri_o: 1.579,
    ri_e: 1.573,
    opticCharacter: 'Uniaxial Negativo (-)',
    pleochroism: 'Dicroísmo marcado',
    specificGravity: 2.72,
    inclusionsSummary: 'Estructuras de crecimiento en espiga / chevrón, velos con gotas en forma de clavo de cabeza de hierro (nail-head spicules).',
    details: 'Berilo cristalizado artificialmente en autoclave de alta presión y temperatura. Sin inclusiones trifásicas con cubo de halita.'
  },
  {
    id: 'syn-flux',
    name: 'Esmeralda Sintética por Flujo (Tipo Chatham)',
    category: 'sintetica',
    ri_o: 1.565,
    ri_e: 1.560,
    opticCharacter: 'Uniaxial Negativo (-)',
    pleochroism: 'Dicroísmo marcado',
    specificGravity: 2.66,
    inclusionsSummary: 'Restos de fundente opacos en velo de encaje (flux remnants), fenacita secundaria y ausencia total de agua.',
    details: 'Sintetizada disolviendo óxidos en fundente de molibdato o vanadato de litio a presión atmosférica. RI y densidad sensiblemente menores que la esmeralda natural.'
  },
  {
    id: 'glass-sim',
    name: 'Imitación en Vidrio Verde (Pasta Vítrea)',
    category: 'imitacion',
    ri_o: 1.520,
    ri_e: 1.520,
    opticCharacter: 'Isótropo',
    pleochroism: 'Nulo (Isótropo)',
    specificGravity: 2.45,
    inclusionsSummary: 'Burbujas de gas perfectamente esféricas aisladas o en cadenas, líneas de flujo en remolino (swirl marks) y fractura concoidea vítrea.',
    details: 'Material artificial amorfo de sílice. Sin birrefringencia (isótropo con extinción constante u oscurecimiento anómalo ADR). Rango RI muy por debajo del berilo.'
  },
  {
    id: 'tourmaline',
    name: 'Turmalina Verde (Verdelita)',
    category: 'otra_gema',
    ri_o: 1.644,
    ri_e: 1.624,
    opticCharacter: 'Uniaxial Negativo (-)',
    pleochroism: 'Dicroísmo muy fuerte (absorción casi total en un eje)',
    specificGravity: 3.06,
    inclusionsSummary: 'Tubos capilares de crecimiento finos y densos (tricomas), cristales de mica y fracturas irregulares.',
    details: 'Ciclosilicato complejo de boro y aluminio. Birrefringencia mucho mayor (Δn = 0.020) que desdobla netamente las aristas en microscopio. RI superior a 1.62.'
  }
];

interface DiagnosticCase {
  id: string;
  title: string;
  initialReport: string;
  mysteryStone: {
    magnification10x: string;
    microscopeReport: string;
    refractometerRI: { o: number; e: number; birref: number };
    polariscopeBehavior: string;
    conoscopeFigure: string;
    specificGravity: number;
  };
  options: {
    id: string;
    label: string;
    isCorrect: boolean;
    scientificFeedback: string;
  }[];
  scientificCitation: string;
}

const DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: 'caso-01',
    title: 'Caso Clínico #1: Gema Verde Comprada en la Plaza de la Candelaria',
    initialReport: 'Un comerciante ofrece un lote de gemas verdes facetadas en talla octagonal de 1.85 ct. El vendedor afirma que son esmeraldas de Muzo de «primerísimo fuego».',
    mysteryStone: {
      magnification10x: 'Aspecto muy limpio a 10x, pero se aprecian diminutas esferas transparentes individuales en el interior y brillo superficial suave.',
      microscopeReport: 'Microscopía a 40x revela burbujas de gas circulares perfectas y estrías onduladas de mezcla en remolino (swirl marks). No hay cristales de calcita ni pirita.',
      refractometerRI: { o: 1.515, e: 1.515, birref: 0.000 },
      polariscopeBehavior: 'Permanece oscuro en rotación completa de 360° con ligeras bandas onduladas anómalas por tensión interna (ADR).',
      conoscopeFigure: 'Sin figura óptica uniaxial (no se forman isógiras ni melatopo).',
      specificGravity: 2.42
    },
    options: [
      {
        id: 'opt-1a',
        label: 'Esmeralda natural colombiana de pureza excepcional',
        isCorrect: false,
        scientificFeedback: 'INCORRECTO: El índice de refracción (1.515) está muy por debajo del límite mínimo del berilo (1.570), la densidad (2.42) es incompatible con el berilo (2.70) y las burbujas esféricas confirman origen artificial amorfo.'
      },
      {
        id: 'opt-1b',
        label: 'Imitación en Vidrio / Pasta Vítrea coloreada con óxidos',
        isCorrect: true,
        scientificFeedback: '¡CORRECTO! Diagnóstico certero: Material ópticamente isótropo (RI único = 1.515), densidad baja (2.42 g/cm³), burbujas de gas esféricas y remolinos de fluidez. Diagnóstico irrefutable de vidrio artificial.'
      },
      {
        id: 'opt-1c',
        label: 'Esmeralda sintética hidrotermal rusa',
        isCorrect: false,
        scientificFeedback: 'INCORRECTO: Las esmeraldas sintéticas hidrotermales son cristales anisótropos de berilo con RI de 1.573 a 1.579 y birrefringencia uniaxial negativa, no vidrio isótropo con RI 1.515.'
      }
    ],
    scientificCitation: 'Webster, R. (1994). Gems: Their Sources, Descriptions and Identification. Butterworth-Heinemann.'
  },
  {
    id: 'caso-02',
    title: 'Caso Clínico #2: Espécimen Verde Azulado con Inclusiones Tubulares',
    initialReport: 'Gema verde azulada facetada de 2.40 ct con dicroísmo muy marcado. El cliente sospecha que es una esmeralda fina de Chivor.',
    mysteryStone: {
      magnification10x: 'Se observan aristas del pabellón notoriamente duplicadas al mirar a través de la tabla. Tubos densos paralelos.',
      microscopeReport: 'Fuerte duplicación óptica de aristas internas por alta birrefringencia. Tubos capilares delgados rellenos de gas (tricomas). Sin inclusiones trifásicas.',
      refractometerRI: { o: 1.644, e: 1.624, birref: 0.020 },
      polariscopeBehavior: 'Cuatro posiciones claras de iluminación y cuatro de extinción rigurosa cada 90° (Anisótropo).',
      conoscopeFigure: 'Figura uniaxial negativa neta con cruz isógira y anillos cromáticos visibles con la esfera condensadora.',
      specificGravity: 3.08
    },
    options: [
      {
        id: 'opt-2a',
        label: 'Esmeralda natural de Chivor con alto contenido de pirita',
        isCorrect: false,
        scientificFeedback: 'INCORRECTO: El índice de refracción (1.624 - 1.644) y la densidad (3.08 g/cm³) superan ampliamente los valores del berilo (RI 1.57 - 1.58, densidad 2.70). La birrefringencia de 0.020 duplica las aristas visibles, lo cual nunca ocurre con la baja birrefringencia de la esmeralda (0.006).'
      },
      {
        id: 'opt-2b',
        label: 'Turmalina Verde (Verdelita)',
        isCorrect: true,
        scientificFeedback: '¡CORRECTO! Parámetros diagnósticos exactos: RI 1.624 - 1.644, birrefringencia pronunciada Δn = 0.020 que causa duplicación observable de facetas, densidad de 3.08 g/cm³ y dicroísmo extremo.'
      },
      {
        id: 'opt-2c',
        label: 'Peridoto (Olivino) de alta pureza',
        isCorrect: false,
        scientificFeedback: 'INCORRECTO: El peridoto es biaxial positivo con índices de 1.654 a 1.690 y densidad de 3.34 g/cm³, no uniaxial negativo.'
      }
    ],
    scientificCitation: 'Liddicoat, R. T. (1989). Handbook of Gem Identification. Gemological Institute of America.'
  },
  {
    id: 'caso-03',
    title: 'Caso Clínico #3: Esmeralda con Cavidades Jagged y Cubo de Halita',
    initialReport: 'Gema facetada de 1.35 ct con tono verde hierba profundo y ligero jardín interno. Se requiere dictamen para exportación con certificación gemológica.',
    mysteryStone: {
      magnification10x: 'Presencia de fisuras sanadas con cavidades alargadas de bordes dentados y microcristales translúcidos.',
      microscopeReport: 'Microscopía a 50x confirma cavidades trifásicas típicas: salmuera acuosa, burbuja de gas móvil (CO2) y microcubo isométrico transparente de halita (NaCl). Además, velos de calcita espática.',
      refractometerRI: { o: 1.578, e: 1.572, birref: 0.006 },
      polariscopeBehavior: 'Anisótropo: Cuatro extinciones nítidas a 90°. Sin tensiones anómalas.',
      conoscopeFigure: 'Figura uniaxial negativa centrada en el eje c.',
      specificGravity: 2.71
    },
    options: [
      {
        id: 'opt-3a',
        label: 'Esmeralda natural colombiana (Cinturón Esmeraldero Occidental)',
        isCorrect: true,
        scientificFeedback: '¡CORRECTO! El conjunto probatorio es impecable: RI 1.572 - 1.578, birrefringencia Δn = 0.006, densidad 2.71 g/cm³, presencia de inclusiones trifásicas con cubo de halita y calcita romboédrica. Corresponde plenamente a berilo hidrotermal sedimentario colombiano (Muzo/Coscuez).'
      },
      {
        id: 'opt-3b',
        label: 'Esmeralda sintética por flujo Chatham',
        isCorrect: false,
        scientificFeedback: 'INCORRECTO: Los sintéticos por flujo presentan RI mucho más bajo (1.560 - 1.565), carecen de agua estructural y jamás tienen inclusiones trifásicas de salmuera con cubo de halita.'
      },
      {
        id: 'opt-3c',
        label: 'Zafiro verde de Australia',
        isCorrect: false,
        scientificFeedback: 'INCORRECTO: El zafiro es corindón (Al2O3) con RI 1.762 - 1.770, densidad de 4.00 g/cm³ y dureza 9 Mohs.'
      }
    ],
    scientificCitation: 'Gübelin, E. J., & Koivula, J. I. (2005). Photoatlas of Inclusions in Gemstones, Vol. 2. Opinio Publishers.'
  }
];

export const VirtualGemLab: React.FC = () => {
  const [activeInstrument, setActiveInstrument] = useState<LabInstrument>('lupa');
  const [selectedSpecimenId, setSelectedSpecimenId] = useState<string>('muz-nat');

  // Lupa & Microscopio interactive states
  const [magnification, setMagnification] = useState<number>(10);
  const [focusLevel, setFocusLevel] = useState<number>(100); // 100 = perfect focus, lower = blurred
  const [lightingMode, setLightingMode] = useState<'overhead' | 'darkfield' | 'transmitted' | 'polarized' | 'immersion'>('darkfield');
  const [irisAperture, setIrisAperture] = useState<number>(80);
  const [showReticle, setShowReticle] = useState<boolean>(true);

  // Refractómetro interactive states
  const [polarizerAngle, setPolarizerAngle] = useState<number>(0); // 0 to 90 degrees
  const [contactLiquidApplied, setContactLiquidApplied] = useState<boolean>(true);

  // Polariscopio interactive states
  const [stageRotation, setStageRotation] = useState<number>(0); // 0 to 360 deg
  const [polarizerMode, setPolarizerMode] = useState<'crossed' | 'parallel'>('crossed');
  const [conoscopeSphereIn, setConoscopeSphereIn] = useState<boolean>(false);

  // Casos de Diagnóstico
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submittedAnswer, setSubmittedAnswer] = useState<boolean>(false);

  const currentSpecimen = SPECIMENS.find(s => s.id === selectedSpecimenId) || SPECIMENS[0];
  const activeCase = DIAGNOSTIC_CASES[activeCaseIndex];

  // Optical calculations for Refractometer view
  // Angle determines the split between ordinary (no) and extraordinary (ne)
  const angleRad = (polarizerAngle * Math.PI) / 180;
  // In uniaxial negative: no > ne
  const effectiveRI = currentSpecimen.opticCharacter === 'Isótropo'
    ? currentSpecimen.ri_o
    : currentSpecimen.ri_e + (currentSpecimen.ri_o - currentSpecimen.ri_e) * Math.cos(angleRad);
  
  // Calculate polariscope brightness based on 360 deg rotation:
  // Anisotropic crystals go extinct every 90 deg (sin(2 * theta)^2)
  const isAnisotropic = currentSpecimen.opticCharacter.includes('Uniaxial') || currentSpecimen.opticCharacter.includes('Biaxial');
  const isADR = currentSpecimen.opticCharacter.includes('ADR');
  
  let polariscopeOpacity = 0.05; // baseline dark
  if (polarizerMode === 'parallel') {
    polariscopeOpacity = 0.85; // bright throughout
  } else {
    // Crossed nicols
    if (isAnisotropic) {
      // 4 positions of light and 4 of extinction at 0, 90, 180, 270
      const theta = (stageRotation * Math.PI) / 180;
      polariscopeOpacity = 0.08 + 0.82 * Math.pow(Math.sin(2 * theta), 2);
    } else if (isADR) {
      // Anomalous double refraction: stays wavy-dark with light undulations
      polariscopeOpacity = 0.25 + 0.15 * Math.sin((stageRotation * Math.PI) / 90);
    } else {
      // Isotropic stays consistently dark
      polariscopeOpacity = 0.05;
    }
  }

  return (
    <div className="space-y-6">
      {/* Educational Rigor Caveat Banner */}
      <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-900/80 border border-emerald-600/50 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span>LABORATORIO GEMOLÓGICO VIRTUAL INTERACTIVO • MODELADO FÍSICO DE LABORATORIO</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-emerald-heading">
              Simulador Óptico e Instrumental de Diagnóstico Gemológico
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Experimenta con la instrumentación óptica canónica recomendada por CDTEC y GIA: Lupa triplete 10x, microscopía de campo oscuro/polarizado, refractometría con luz monocromática de sodio (589 nm) y polariscopio con conoscopia.
            </p>
          </div>

          <div className="shrink-0 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/60 text-[11px] text-slate-300 max-w-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-400">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Advertencia Pedagógica</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-tight">
              Este simulador modela las ecuaciones ópticas y comportamientos físicos conocidos. En laboratorio real, la certificación de origen requiere confirmación por FTIR, micro-Raman y LA-ICP-MS.
            </p>
          </div>
        </div>
      </div>

      {/* Laboratory Instrument Switcher Sub-Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-900/90 p-2 rounded-2xl border border-slate-800">
        <button
          onClick={() => setActiveInstrument('lupa')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeInstrument === 'lupa'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Lupa 10x Triplete</span>
        </button>

        <button
          onClick={() => setActiveInstrument('microscopio')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeInstrument === 'microscopio'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Microscopio Óptico</span>
        </button>

        <button
          onClick={() => setActiveInstrument('refractometro')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeInstrument === 'refractometro'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Refractómetro 589nm</span>
        </button>

        <button
          onClick={() => setActiveInstrument('polariscopio')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
            activeInstrument === 'polariscopio'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <RotateCw className="w-4 h-4" />
          <span>Polariscopio & Eje c</span>
        </button>

        <button
          onClick={() => setActiveInstrument('desafios')}
          className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all col-span-2 sm:col-span-1 ${
            activeInstrument === 'desafios'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-950/60 font-black'
              : 'text-amber-400 hover:text-amber-300 hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Casos Clínicos (3)</span>
        </button>
      </div>

      {/* Specimen Selector Bar (only active when not in diagnostic case challenge mode) */}
      {activeInstrument !== 'desafios' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Espécimen en Análisis:
            </span>
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {SPECIMENS.map((specimen) => (
              <button
                key={specimen.id}
                onClick={() => setSelectedSpecimenId(specimen.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  selectedSpecimenId === specimen.id
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow'
                    : 'bg-slate-850 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {specimen.name.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          INSTRUMENT 1: LUPA 10X HASTINGS TRIPLET SIMULATOR
          ========================================================================= */}
      {activeInstrument === 'lupa' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Optical Viewport */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl min-h-[460px]">
            {/* Lupa barrel bezel simulation */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border-[14px] border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.9)_inset] bg-slate-900 flex items-center justify-center overflow-hidden">
              {/* Specimen visual canvas representation based on lighting and focus */}
              <div 
                className="w-full h-full relative transition-all duration-300 flex items-center justify-center"
                style={{
                  filter: `blur(${Math.max(0, (100 - focusLevel) / 12)}px)`,
                  transform: `scale(${magnification === 10 ? 1 : magnification === 20 ? 1.4 : 1.8})`
                }}
              >
                {/* Visual SVG scene representing specimen under 10x */}
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Background illumination based on lighting mode */}
                  {lightingMode === 'darkfield' ? (
                    <rect width="300" height="300" fill="#040907" />
                  ) : lightingMode === 'overhead' ? (
                    <rect width="300" height="300" fill="#0e1713" />
                  ) : (
                    <rect width="300" height="300" fill="#14261d" />
                  )}

                  {/* Specimen Faceted Gem Outline */}
                  <g transform="translate(150, 150)">
                    {/* Emerald body */}
                    <polygon
                      points="-70,-40 -40,-70 40,-70 70,-40 70,40 40,70 -40,70 -70,40"
                      fill={currentSpecimen.id.includes('glass') ? '#10b981' : currentSpecimen.id.includes('tour') ? '#047857' : currentSpecimen.id.includes('syn') ? '#059669' : '#059669'}
                      fillOpacity={lightingMode === 'darkfield' ? 0.35 : 0.65}
                      stroke={lightingMode === 'darkfield' ? '#34d399' : '#10b981'}
                      strokeWidth="2.5"
                    />

                    {/* Table facet */}
                    <polygon
                      points="-45,-25 -25,-45 25,-45 45,-25 45,25 25,45 -25,45 -45,25"
                      fill="none"
                      stroke="#6ee7b7"
                      strokeWidth="1.2"
                      strokeDasharray="2,2"
                    />

                    {/* Facet junction lines */}
                    <line x1="-70" y1="-40" x2="-45" y2="-25" stroke="#6ee7b7" strokeWidth="1" />
                    <line x1="70" y1="-40" x2="45" y2="-25" stroke="#6ee7b7" strokeWidth="1" />
                    <line x1="70" y1="40" x2="45" y2="25" stroke="#6ee7b7" strokeWidth="1" />
                    <line x1="-70" y1="40" x2="-45" y2="25" stroke="#6ee7b7" strokeWidth="1" />

                    {/* Specific Inclusions by Specimen */}
                    {selectedSpecimenId === 'muz-nat' && (
                      <g>
                        {/* Three phase inclusion in jagged cavity */}
                        <path
                          d="M -20,-10 L -5,-5 L -10,15 L -25,12 Z"
                          fill="#064e3b"
                          stroke="#34d399"
                          strokeWidth="1"
                        />
                        <circle cx="-12" cy="0" r="2.5" fill="#10b981" />
                        <rect x="-18" y="5" width="4" height="4" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

                        {/* Pyrite inclusion */}
                        <rect x="25" y="-15" width="8" height="8" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
                        <rect x="28" y="-12" width="5" height="5" fill="#fef08a" opacity="0.8" />

                        {/* Calcite rhomb */}
                        <polygon points="10,20 20,20 25,30 15,30" fill="#e2e8f0" fillOpacity="0.4" stroke="#cbd5e1" strokeWidth="0.8" />
                      </g>
                    )}

                    {selectedSpecimenId === 'chiv-nat' && (
                      <g>
                        {/* Multiple pyrites */}
                        <rect x="-30" y="-10" width="7" height="7" fill="#fbbf24" stroke="#d97706" strokeWidth="0.8" />
                        <rect x="-20" y="25" width="5" height="5" fill="#f59e0b" stroke="#b45309" strokeWidth="0.8" />
                        <rect x="20" y="-20" width="9" height="9" fill="#fef08a" stroke="#d97706" strokeWidth="0.8" />
                        {/* Healing veil */}
                        <path d="M -10,-20 Q 15,0 30,20" stroke="#a7f3d0" strokeWidth="1" strokeDasharray="1,3" fill="none" />
                      </g>
                    )}

                    {selectedSpecimenId === 'syn-hydro' && (
                      <g>
                        {/* Chevron chevron growth lines */}
                        <path d="M -35,-25 L 0,-10 L 35,-25" fill="none" stroke="#6ee7b7" strokeWidth="1.2" opacity="0.7" />
                        <path d="M -35,-15 L 0,0 L 35,-15" fill="none" stroke="#6ee7b7" strokeWidth="1.2" opacity="0.7" />
                        <path d="M -35,-5 L 0,10 L 35,-5" fill="none" stroke="#6ee7b7" strokeWidth="1.2" opacity="0.7" />
                        {/* Nail-head spicule */}
                        <line x1="-15" y1="20" x2="-5" y2="10" stroke="#f1f5f9" strokeWidth="1.5" />
                        <circle cx="-15" cy="20" r="2" fill="#ef4444" />
                      </g>
                    )}

                    {selectedSpecimenId === 'syn-flux' && (
                      <g>
                        {/* Lace-like flux web */}
                        <path d="M -30,-20 Q -10,-10 -5,10 T 20,20" fill="none" stroke="#fdba74" strokeWidth="1.5" strokeDasharray="2,2" />
                        <circle cx="5" cy="-15" r="3" fill="#ea580c" opacity="0.8" />
                        <circle cx="-15" cy="5" r="2" fill="#ea580c" opacity="0.8" />
                      </g>
                    )}

                    {selectedSpecimenId === 'glass-sim' && (
                      <g>
                        {/* Spherical gas bubbles */}
                        <circle cx="-25" cy="-20" r="4.5" fill="#ecfdf5" fillOpacity="0.3" stroke="#99f6e4" strokeWidth="1" />
                        <circle cx="-26" cy="-21" r="1.5" fill="#ffffff" />

                        <circle cx="20" cy="15" r="6" fill="#ecfdf5" fillOpacity="0.3" stroke="#99f6e4" strokeWidth="1" />
                        <circle cx="18" cy="13" r="2" fill="#ffffff" />

                        <circle cx="5" cy="-5" r="2.5" fill="#ecfdf5" fillOpacity="0.3" stroke="#99f6e4" strokeWidth="0.8" />

                        {/* Swirl marks */}
                        <path d="M -30,10 Q 0,-5 25,30" fill="none" stroke="#a7f3d0" strokeWidth="0.8" opacity="0.4" />
                      </g>
                    )}

                    {selectedSpecimenId === 'tourmaline' && (
                      <g>
                        {/* Dense parallel trichomes */}
                        {[-20, -15, -10, -5, 0, 5, 10, 15, 20].map((offset, i) => (
                          <line key={i} x1={offset} y1="-50" x2={offset} y2="50" stroke="#34d399" strokeWidth="0.75" opacity="0.6" />
                        ))}
                      </g>
                    )}
                  </g>

                  {/* Reticle / Measurement Grid */}
                  {showReticle && (
                    <g opacity="0.35">
                      <line x1="150" y1="20" x2="150" y2="280" stroke="#ffffff" strokeWidth="0.8" />
                      <line x1="20" y1="150" x2="280" y2="150" stroke="#ffffff" strokeWidth="0.8" />
                      <circle cx="150" cy="150" r="50" fill="none" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3,3" />
                      <circle cx="150" cy="150" r="100" fill="none" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3,3" />
                      <text x="155" y="145" fill="#ffffff" fontSize="8" fontFamily="monospace">0.1 mm/div</text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Hastings Triplet Chromatic & Aplanatic Ring Indicator */}
              <div className="absolute inset-0 pointer-events-none rounded-full border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)_inset]"></div>
            </div>

            <div className="mt-4 flex items-center justify-between w-full max-w-sm text-[11px] text-slate-400 font-mono">
              <span>Lupa Gemológica Hastings 10x</span>
              <span className="text-emerald-400 font-bold">Zoom: {magnification}x</span>
              <span>Aplanática / Acromática</span>
            </div>
          </div>

          {/* Lupa Controls & Observations */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-5">
              <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Controles de Observación</span>
              </h3>

              {/* Magnification slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Aumento Óptico:</span>
                  <span className="text-emerald-400 font-mono">{magnification}x (Estándar 10x)</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[10, 20, 30].map(val => (
                    <button
                      key={val}
                      onClick={() => setMagnification(val)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        magnification === val
                          ? 'bg-emerald-600 border-emerald-400 text-white'
                          : 'bg-slate-850 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {val}x {val === 10 ? '(Canónico)' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Dial */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Enfoque Fino (Distancia Focal):</span>
                  <span className={`font-mono ${focusLevel > 90 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {focusLevel}% {focusLevel > 90 ? '(Nítido)' : '(Desenfocado)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={focusLevel}
                  onChange={(e) => setFocusLevel(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Lighting Mode Selector */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300">Modo de Iluminación:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setLightingMode('darkfield')}
                    className={`p-2 rounded-xl text-[11px] font-bold border text-center transition-all ${
                      lightingMode === 'darkfield'
                        ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    Campo Oscuro
                  </button>
                  <button
                    onClick={() => setLightingMode('overhead')}
                    className={`p-2 rounded-xl text-[11px] font-bold border text-center transition-all ${
                      lightingMode === 'overhead'
                        ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    Luz Cenital
                  </button>
                  <button
                    onClick={() => setLightingMode('transmitted')}
                    className={`p-2 rounded-xl text-[11px] font-bold border text-center transition-all ${
                      lightingMode === 'transmitted'
                        ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    Transmitida
                  </button>
                </div>
              </div>

              {/* Reticle toggle */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-semibold">Retícula Micrométrica:</span>
                <button
                  onClick={() => setShowReticle(!showReticle)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    showReticle ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/60' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {showReticle ? 'Visible (0.1 mm)' : 'Oculta'}
                </button>
              </div>
            </div>

            {/* Specimen Field Notes */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-3">
              <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Dictamen Visual a 10x</span>
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                {currentSpecimen.inclusionsSummary}
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>Clave Metodológica:</strong> La norma CIBJO establece que la claridad de la esmeralda se clasifica a ojo limpio y se confirma con lupa de 10 aumentos triplete corregida aplanática y acromáticamente.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INSTRUMENT 2: MICROSCOPIO GEMOLÓGICO DE INVESTIGACIÓN
          ========================================================================= */}
      {activeInstrument === 'microscopio' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl min-h-[480px]">
            {/* Ocular Viewport */}
            <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] rounded-full border-[18px] border-slate-900 shadow-[0_0_60px_rgba(0,0,0,0.95)_inset] bg-slate-950 flex items-center justify-center overflow-hidden">
              <div 
                className="w-full h-full relative flex items-center justify-center transition-all duration-300"
                style={{
                  filter: `blur(${Math.max(0, (100 - focusLevel) / 10)}px)`,
                  transform: `scale(${1 + (magnification - 10) * 0.025})`
                }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Illumination background */}
                  {lightingMode === 'darkfield' ? (
                    <rect width="400" height="400" fill="#030706" />
                  ) : lightingMode === 'polarized' ? (
                    <g>
                      <rect width="400" height="400" fill="#020408" />
                      {/* Polarization extinction and colored quartz wedge effect */}
                      <circle cx="200" cy="200" r="180" fill="#0f172a" opacity="0.4" />
                    </g>
                  ) : lightingMode === 'immersion' ? (
                    <rect width="400" height="400" fill="#064e3b" fillOpacity="0.15" />
                  ) : (
                    <rect width="400" height="400" fill="#0f2619" fillOpacity={irisAperture / 100} />
                  )}

                  {/* Detailed Inclusions under 50x-80x Microscope */}
                  {selectedSpecimenId === 'muz-nat' && (
                    <g transform="translate(200, 200)">
                      {/* Three-phase inclusion in jagged sawtooth cavity */}
                      <path
                        d="M -90,-40 L -60,-20 L -80,40 L -120,60 L -140,0 L -110,-10 Z"
                        fill="#022c22"
                        stroke="#34d399"
                        strokeWidth="2"
                      />
                      {/* Halite crystal cube */}
                      <rect x="-105" y="10" width="18" height="18" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
                      <line x1="-105" y1="10" x2="-87" y2="28" stroke="#cbd5e1" strokeWidth="0.8" />
                      {/* CO2 gas bubble */}
                      <circle cx="-85" cy="-15" r="12" fill="#064e3b" stroke="#6ee7b7" strokeWidth="1.8" />
                      <circle cx="-88" cy="-18" r="4" fill="#ffffff" opacity="0.8" />
                      {/* Saline brine fluid filling the rest */}
                      <text x="-135" y="55" fill="#a7f3d0" fontSize="9" fontFamily="sans-serif">H₂O + NaCl + CO₂</text>

                      {/* Calcite rhomboid */}
                      <polygon points="40,-60 80,-60 95,-30 55,-30" fill="#f1f5f9" fillOpacity="0.4" stroke="#e2e8f0" strokeWidth="1.5" />
                      <line x1="40" y1="-60" x2="55" y2="-30" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="50" y="-40" fill="#f8fafc" fontSize="8" fontFamily="sans-serif">Calcita (0001)</text>

                      {/* Golden pyrite cluster */}
                      <rect x="50" y="40" width="22" height="22" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />
                      <rect x="62" y="52" width="16" height="16" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
                      <text x="55" y="80" fill="#fde047" fontSize="8" fontFamily="sans-serif">Pirita FeS₂</text>
                    </g>
                  )}

                  {selectedSpecimenId === 'chiv-nat' && (
                    <g transform="translate(200, 200)">
                      {/* Rich pyrite crystals with striations */}
                      <rect x="-60" y="-50" width="35" height="35" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                      <line x1="-60" y1="-40" x2="-25" y2="-40" stroke="#fef08a" strokeWidth="1" />
                      <line x1="-60" y1="-30" x2="-25" y2="-30" stroke="#fef08a" strokeWidth="1" />

                      {/* Albite feldspar tablet */}
                      <polygon points="30,-20 80,-30 70,30 20,40" fill="#e2e8f0" fillOpacity="0.5" stroke="#94a3b8" strokeWidth="1.5" />
                      <text x="35" y="10" fill="#e2e8f0" fontSize="9" fontFamily="sans-serif">Albita NaAlSi₃O₈</text>

                      {/* Two-phase healing fissure */}
                      <path d="M -120,40 Q -40,80 60,110" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="2,4" />
                      <circle cx="-30" cy="75" r="4" fill="#a7f3d0" />
                      <circle cx="10" cy="95" r="3" fill="#a7f3d0" />
                    </g>
                  )}

                  {selectedSpecimenId === 'syn-hydro' && (
                    <g transform="translate(200, 200)">
                      {/* Chevron chevron growth pattern */}
                      {[-60, -30, 0, 30, 60].map((y, i) => (
                        <path key={i} d={`M -120,${y - 20} L 0,${y} L 120,${y - 20}`} fill="none" stroke="#34d399" strokeWidth="2.5" opacity="0.8" />
                      ))}
                      {/* Nail-head spicule */}
                      <line x1="-40" y1="-20" x2="20" y2="40" stroke="#f8fafc" strokeWidth="3" />
                      <circle cx="-40" cy="-20" r="7" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                      <text x="-30" y="-25" fill="#fca5a5" fontSize="8" fontFamily="sans-serif">Cabeza de clavo (Sílice)</text>
                    </g>
                  )}

                  {selectedSpecimenId === 'syn-flux' && (
                    <g transform="translate(200, 200)">
                      {/* Platinum crucible or flux feather */}
                      <path d="M -80,-60 Q -20,10 40,-40 T 100,50" fill="none" stroke="#ea580c" strokeWidth="3" strokeDasharray="4,3" />
                      <polygon points="-30,30 -10,10 10,30 -10,50" fill="#c2410c" stroke="#7c2d12" strokeWidth="1.5" />
                      <text x="-40" y="65" fill="#fdba74" fontSize="8" fontFamily="sans-serif">Fundente residual de litio</text>
                    </g>
                  )}

                  {selectedSpecimenId === 'glass-sim' && (
                    <g transform="translate(200, 200)">
                      {/* Spherical gas bubbles with concentric light rings */}
                      <circle cx="-60" cy="-40" r="22" fill="#042f2e" stroke="#5eead4" strokeWidth="2" />
                      <circle cx="-66" cy="-46" r="6" fill="#ffffff" />
                      <circle cx="50" cy="30" r="16" fill="#042f2e" stroke="#5eead4" strokeWidth="2" />
                      <circle cx="45" cy="25" r="4" fill="#ffffff" />

                      {/* Curved flow lines */}
                      <path d="M -120,20 C -40,60 40,-60 120,10" fill="none" stroke="#99f6e4" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
                      <text x="-100" y="80" fill="#5eead4" fontSize="9" fontFamily="sans-serif">Líneas de fluidez vítrea</text>
                    </g>
                  )}

                  {selectedSpecimenId === 'tourmaline' && (
                    <g transform="translate(200, 200)">
                      {/* Dense parallel trichomes */}
                      {Array.from({ length: 17 }).map((_, i) => (
                        <line key={i} x1={-120 + i * 15} y1="-140" x2={-120 + i * 15} y2="140" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
                      ))}
                      <text x="-80" y="0" fill="#a7f3d0" fontSize="9" fontFamily="sans-serif">Tricomas paralelos al eje c</text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Polarized crossbars when in polarized mode */}
              {lightingMode === 'polarized' && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-full h-0.5 bg-amber-400/40"></div>
                  <div className="h-full w-0.5 bg-amber-400/40 absolute"></div>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between w-full max-w-sm text-[11px] text-slate-400 font-mono">
              <span>Campo: {lightingMode.toUpperCase()}</span>
              <span className="text-emerald-400 font-bold">{magnification}x</span>
              <span>Iris: {irisAperture}%</span>
            </div>
          </div>

          {/* Microscope Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-5">
              <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Torre Óptica & Modos de Iluminación</span>
              </h3>

              {/* Magnification slider from 10x to 80x */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Aumento de Objetivos (Zoom):</span>
                  <span className="text-emerald-400 font-mono">{magnification}x</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={magnification}
                  onChange={(e) => setMagnification(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>10x (Visión General)</span>
                  <span>45x (Inclusiones)</span>
                  <span>80x (Micro-Halita)</span>
                </div>
              </div>

              {/* Lighting Mode Selector */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300">Técnica de Iluminación:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLightingMode('darkfield')}
                    className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                      lightingMode === 'darkfield'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Campo Oscuro</div>
                    <div className="text-[10px] font-normal text-slate-400">Resalta cristales y fases</div>
                  </button>

                  <button
                    onClick={() => setLightingMode('transmitted')}
                    className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                      lightingMode === 'transmitted'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Campo Claro</div>
                    <div className="text-[10px] font-normal text-slate-400">Siluetas y burbujas</div>
                  </button>

                  <button
                    onClick={() => setLightingMode('polarized')}
                    className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                      lightingMode === 'polarized'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Luz Polarizada</div>
                    <div className="text-[10px] font-normal text-slate-400">Birrefringencia y maclas</div>
                  </button>

                  <button
                    onClick={() => setLightingMode('immersion')}
                    className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all ${
                      lightingMode === 'immersion'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Inmersión (n=1.57)</div>
                    <div className="text-[10px] font-normal text-slate-400">Zonación y rellenos</div>
                  </button>
                </div>
              </div>

              {/* Iris diaphragm */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Diafragma Iris Sub-platina:</span>
                  <span className="text-emerald-400 font-mono">{irisAperture}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={irisAperture}
                  onChange={(e) => setIrisAperture(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Diagnostic significance */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-2">
              <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider">
                Microanálisis Científico del Espécimen
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                {currentSpecimen.details}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INSTRUMENT 3: REFRACTÓMETRO DE SODIO 589nm
          ========================================================================= */}
      {activeInstrument === 'refractometro' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Refractometer Reticle Scale Viewport */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl min-h-[500px]">
            {/* Reticle scale chamber */}
            <div className="relative w-72 sm:w-80 h-[420px] rounded-2xl border-4 border-slate-800 bg-gradient-to-b from-amber-500/10 via-slate-950 to-slate-950 shadow-2xl overflow-hidden flex flex-col justify-between p-4">
              {/* Monochromatic yellow sodium light glow */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-amber-400/20 blur-xl pointer-events-none"></div>

              {/* Sodium Light Scale Header */}
              <div className="text-center z-10 border-b border-amber-500/30 pb-2">
                <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider uppercase">
                  Luz de Sodio Monocromática (λ = 589 nm)
                </span>
                <div className="text-xs text-slate-300 font-semibold">
                  Índice de Refracción (n) • Escala 1.400 - 1.810
                </div>
              </div>

              {/* The Reticle Scale with dynamic shadow edge line */}
              <div className="relative flex-1 my-3 overflow-hidden border border-slate-800 rounded-xl bg-slate-950/80">
                {/* Visual graduation marks from 1.400 to 1.800 */}
                <svg viewBox="0 0 200 300" className="w-full h-full">
                  {/* Background shadow: light above the shadow edge, dark below */}
                  {contactLiquidApplied && (
                    <g>
                      {/* Calculate Y position for the shadow edge: 1.800 top, 1.400 bottom */}
                      {/* Y range: 20px (1.800) to 280px (1.400) -> 260px / 0.400 = 650px per unit */}
                      {(() => {
                        const yPos = 20 + (1.800 - effectiveRI) * 650;
                        return (
                          <g>
                            {/* Bright yellow field above critical angle */}
                            <rect x="0" y="0" width="200" height={yPos} fill="#f59e0b" fillOpacity="0.25" />
                            {/* Shadow field below critical angle */}
                            <rect x="0" y={yPos} width="200" height={300 - yPos} fill="#090d0b" fillOpacity="0.95" />
                            {/* Sharp shadow line border */}
                            <line x1="10" y1={yPos} x2="190" y2={yPos} stroke="#fbbf24" strokeWidth="2.5" />
                            <text x="110" y={yPos - 4} fill="#fef08a" fontSize="10" fontFamily="monospace" fontWeight="bold">
                              n = {effectiveRI.toFixed(3)}
                            </text>
                          </g>
                        );
                      })()}
                    </g>
                  )}

                  {/* Scale Graduations on Left */}
                  {[1.80, 1.75, 1.70, 1.65, 1.60, 1.55, 1.50, 1.45, 1.40].map((val, idx) => {
                    const y = 20 + idx * 32.5;
                    return (
                      <g key={val}>
                        <line x1="20" y1={y} x2="45" y2={y} stroke="#fde047" strokeWidth="1.5" />
                        <text x="50" y={y + 3} fill="#fef08a" fontSize="9" fontFamily="monospace">{val.toFixed(2)}</text>
                        {/* Subdivisions */}
                        {idx < 8 && [1, 2, 3, 4].map((sub) => (
                          <line key={sub} x1="20" y1={y + sub * 6.5} x2="32" y2={y + sub * 6.5} stroke="#ca8a04" strokeWidth="0.8" />
                        ))}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Bottom status */}
              <div className="text-center z-10 pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400">
                Líquido de Anderson (n = 1.81) {contactLiquidApplied ? '✓ Aplicado' : '✗ Falta líquido'}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between w-full max-w-sm text-[11px] text-slate-400 font-mono">
              <span>Ángulo Polarizador: {polarizerAngle}°</span>
              <span className="text-amber-400 font-bold">n = {effectiveRI.toFixed(3)}</span>
            </div>
          </div>

          {/* Controls & Calculations */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-5">
              <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Ocular Polarizador & Birrefringencia</span>
              </h3>

              {/* Rotating polarizer knob */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Rotación del Filtro Polarizador:</span>
                  <span className="text-amber-400 font-mono">{polarizerAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  step="5"
                  value={polarizerAngle}
                  onChange={(e) => setPolarizerAngle(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0° (Rayo Ordinario nₒ)</span>
                  <span>90° (Rayo Extraordinario nₑ)</span>
                </div>
              </div>

              {/* Metric Card */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2.5">
                <div className="text-xs font-bold text-slate-300">Lecturas Físicas Registradas:</div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Rayo Ordinario (nₒ):</span>
                    <span className="text-emerald-400 font-bold text-sm">{currentSpecimen.ri_o.toFixed(3)}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block">Rayo Extraordinario (nₑ):</span>
                    <span className="text-emerald-400 font-bold text-sm">{currentSpecimen.ri_e.toFixed(3)}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs">
                  <div className="flex justify-between items-center text-emerald-200">
                    <span>Birrefringencia (|nₒ - nₑ|):</span>
                    <span className="font-mono font-bold text-amber-300">
                      {(Math.abs(currentSpecimen.ri_o - currentSpecimen.ri_e)).toFixed(3)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-200 mt-1">
                    <span>Carácter Óptico:</span>
                    <span className="font-bold text-white text-[11px]">{currentSpecimen.opticCharacter}</span>
                  </div>
                </div>
              </div>

              {/* Contact Liquid Toggle */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-semibold">Líquido de Contacto de Anderson:</span>
                <button
                  onClick={() => setContactLiquidApplied(!contactLiquidApplied)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    contactLiquidApplied ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/60' : 'bg-rose-500/30 text-rose-300 border border-rose-500/60'
                  }`}
                >
                  {contactLiquidApplied ? 'Gotas Aplicadas (n=1.81)' : 'Sin Contacto (Sin lectura)'}
                </button>
              </div>
            </div>

            {/* Diagnostic Theory */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-2">
              <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider">
                Regla Canónica de Identificación
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                La esmeralda natural colombiana exhibe sistemáticamente:
                <strong> nₒ ≈ 1.577 a 1.583</strong> y <strong> nₑ ≈ 1.571 a 1.577</strong>, con una birrefringencia constante de <strong>Δn = 0.006</strong> y signo uniaxial negativo. Si el refractómetro marca un único índice que no se mueve al girar el polarizador, la piedra es isótropa (vidrio o granate).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INSTRUMENT 4: POLARISCOPIO & CONOSCOPIO
          ========================================================================= */}
      {activeInstrument === 'polariscopio' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Polariscope Viewport */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl min-h-[480px]">
            {/* Round analyzer chamber */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border-[16px] border-slate-900 shadow-[0_0_60px_rgba(0,0,0,0.95)_inset] bg-slate-950 flex items-center justify-center overflow-hidden">
              {/* If Conoscope Sphere is inserted */}
              {conoscopeSphereIn ? (
                <div className="w-full h-full relative flex items-center justify-center bg-slate-950">
                  {/* Uniaxial Interference Figure */}
                  {currentSpecimen.opticCharacter.includes('Uniaxial') ? (
                    <svg viewBox="0 0 300 300" className="w-full h-full">
                      {/* Concentric isochromatic colored rings */}
                      <circle cx="150" cy="150" r="120" fill="none" stroke="#ef4444" strokeWidth="5" opacity="0.5" />
                      <circle cx="150" cy="150" r="95" fill="none" stroke="#3b82f6" strokeWidth="5" opacity="0.6" />
                      <circle cx="150" cy="150" r="70" fill="none" stroke="#eab308" strokeWidth="6" opacity="0.7" />
                      <circle cx="150" cy="150" r="45" fill="none" stroke="#10b981" strokeWidth="6" opacity="0.8" />
                      <circle cx="150" cy="150" r="25" fill="none" stroke="#f43f5e" strokeWidth="6" opacity="0.9" />

                      {/* Black Isogyre Cross meeting at Melatope center */}
                      <path d="M 0,146 L 300,146 L 300,154 L 0,154 Z" fill="#000000" />
                      <path d="M 146,0 L 146,300 L 154,300 L 154,0 Z" fill="#000000" />

                      {/* Central Melatope (Optic Axis Exit) */}
                      <circle cx="150" cy="150" r="6" fill="#000000" />
                      <text x="160" y="145" fill="#ffffff" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Melatopo (Eje c)</text>
                    </svg>
                  ) : (
                    <div className="text-center p-6 text-slate-400 text-xs">
                      Sin figura conoscópica uniaxial neta (Material isótropo o biaxial desorientado).
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Polariscope Stage View with 360 deg rotation */
                <div 
                  className="w-full h-full relative flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: `rgba(16, 185, 129, ${polariscopeOpacity})`
                  }}
                >
                  {/* Rotating Stage Outline */}
                  <div 
                    className="w-48 h-48 rounded-full border-2 border-emerald-400/40 flex items-center justify-center transition-transform duration-200"
                    style={{ transform: `rotate(${stageRotation}deg)` }}
                  >
                    {/* Faceted emerald outline showing extinction rotation */}
                    <div className="w-24 h-24 border border-emerald-200/80 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-white shadow-lg bg-emerald-950/40">
                      {stageRotation}°
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between w-full max-w-sm text-[11px] text-slate-400 font-mono">
              <span>Mesa: {stageRotation}°</span>
              <span className="text-emerald-400 font-bold">
                {polarizerMode === 'crossed' ? 'Nicoles Cruzados (90°)' : 'Nicoles Paralelos (0°)'}
              </span>
              <span>{conoscopeSphereIn ? 'Conoscopio Activo' : 'Plano'}</span>
            </div>
          </div>

          {/* Polariscope Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-5">
              <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                <RotateCw className="w-4 h-4 text-emerald-400" />
                <span>Rotación de Mesa (360°)</span>
              </h3>

              {/* 360 degree rotation slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Ángulo de Giro de la Muestra:</span>
                  <span className="text-emerald-400 font-mono">{stageRotation}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="5"
                  value={stageRotation}
                  onChange={(e) => setStageRotation(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0° Ext.</span>
                  <span>45° Ilum.</span>
                  <span>90° Ext.</span>
                  <span>180° Ext.</span>
                  <span>270° Ext.</span>
                </div>
              </div>

              {/* Analyzer Mode */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300">Posición de Polarizadores:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPolarizerMode('crossed')}
                    className={`p-2.5 rounded-xl text-xs font-bold border text-center transition-all ${
                      polarizerMode === 'crossed'
                        ? 'bg-emerald-600 border-emerald-400 text-white'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    Nicoles Cruzados (Oscuro)
                  </button>
                  <button
                    onClick={() => setPolarizerMode('parallel')}
                    className={`p-2.5 rounded-xl text-xs font-bold border text-center transition-all ${
                      polarizerMode === 'parallel'
                        ? 'bg-emerald-600 border-emerald-400 text-white'
                        : 'bg-slate-850 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    Nicoles Paralelos (Claro)
                  </button>
                </div>
              </div>

              {/* Conoscope Sphere Toggle */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 font-semibold block">Lente Condensador Conoscópico:</span>
                  <span className="text-[10px] text-slate-400">Esfera de vidrio para ver figura de interferencia</span>
                </div>
                <button
                  onClick={() => setConoscopeSphereIn(!conoscopeSphereIn)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    conoscopeSphereIn ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {conoscopeSphereIn ? 'Retirar Esfera' : 'Insertar Esfera'}
                </button>
              </div>
            </div>

            {/* Diagnostic Theory */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-2">
              <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider">
                Diagnóstico de Anisotropía
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Al rotar 360° entre Nicoles cruzados:
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                <li><strong>Gema Anisótropa (Esmeralda):</strong> Presenta 4 momentos de máxima claridad y 4 momentos de extinción total cada 90°.</li>
                <li><strong>Gema Isótropa (Vidrio, Granate):</strong> Permanece completamente oscura durante toda la rotación.</li>
                <li><strong>Doble Refracción Anómala (ADR):</strong> Ondulaciones grises y sombras por tensiones estructurales.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INSTRUMENT 5: CASOS CLÍNICOS DE DIAGNÓSTICO DIFERENCIAL
          ========================================================================= */}
      {activeInstrument === 'desafios' && (
        <div className="space-y-6">
          {/* Case Navigation Tabs */}
          <div className="flex gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
            {DIAGNOSTIC_CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSelectedAnswer(null);
                  setSubmittedAnswer(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeCaseIndex === idx
                    ? 'bg-amber-400 text-slate-950 font-black shadow'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Caso Clínico #{idx + 1}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Case Presentation & Laboratory Findings */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Desafío de Laboratorio Real
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Caso {activeCaseIndex + 1} de 3</span>
                </div>

                <h3 className="text-xl font-black text-white font-emerald-heading">
                  {activeCase.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                  {activeCase.initialReport}
                </p>

                {/* Laboratory findings dossier table */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                    Resultados de Ensayos Físicos y Ópticos:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Inspección Lupa 10x:</div>
                      <div className="text-slate-200 mt-1">{activeCase.mysteryStone.magnification10x}</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Microscopía (40x - 65x):</div>
                      <div className="text-slate-200 mt-1">{activeCase.mysteryStone.microscopeReport}</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Refractómetro (Sodio 589nm):</div>
                      <div className="text-emerald-300 font-mono font-bold mt-1">
                        nₒ: {activeCase.mysteryStone.refractometerRI.o.toFixed(3)} | nₑ: {activeCase.mysteryStone.refractometerRI.e.toFixed(3)}
                        <span className="block text-[11px] text-amber-400 font-normal">
                          Δn: {activeCase.mysteryStone.refractometerRI.birref.toFixed(3)}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Polariscopio & Conoscopio:</div>
                      <div className="text-slate-200 mt-1">
                        {activeCase.mysteryStone.polariscopeBehavior}
                        <span className="block text-[10px] text-slate-400 italic mt-0.5">
                          {activeCase.mysteryStone.conoscopeFigure}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 sm:col-span-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Densidad Hidrostática:</div>
                      <div className="text-slate-200 font-mono font-bold mt-1">
                        {activeCase.mysteryStone.specificGravity.toFixed(2)} g/cm³
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic Decisions */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
                <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Emite tu Dictamen Pericial:</span>
                </h4>

                <div className="space-y-3">
                  {activeCase.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;
                    return (
                      <button
                        key={option.id}
                        disabled={submittedAnswer}
                        onClick={() => setSelectedAnswer(option.id)}
                        className={`w-full p-4 rounded-2xl text-left text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-emerald-400 bg-emerald-500' : 'border-slate-600'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                          </div>
                          <span>{option.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {!submittedAnswer ? (
                  <button
                    disabled={!selectedAnswer}
                    onClick={() => setSubmittedAnswer(true)}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-950/60"
                  >
                    Confirmar Dictamen Pericial
                  </button>
                ) : (
                  <div className="space-y-4 pt-3 border-t border-slate-800">
                    {(() => {
                      const chosen = activeCase.options.find(o => o.id === selectedAnswer);
                      const isCorrect = chosen?.isCorrect;
                      return (
                        <div className={`p-4 rounded-2xl border text-xs space-y-2 ${
                          isCorrect 
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                            : 'bg-rose-950/80 border-rose-500 text-rose-200'
                        }`}>
                          <div className="flex items-center gap-2 font-bold text-sm">
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span>¡DICTAMEN CIENTÍFICO CORRECTO!</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-5 h-5 text-rose-400" />
                                <span>DICTAMEN REFUTADO POR EVIDENCIA FÍSICA</span>
                              </>
                            )}
                          </div>
                          <p className="leading-relaxed text-slate-300">
                            {chosen?.scientificFeedback}
                          </p>
                          <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
                            Referencia: {activeCase.scientificCitation}
                          </div>
                        </div>
                      );
                    })()}

                    <button
                      onClick={() => {
                        setSelectedAnswer(null);
                        setSubmittedAnswer(false);
                      }}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-all"
                    >
                      Reintentar Análisis
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
