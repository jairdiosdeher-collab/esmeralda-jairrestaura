import React, { useState, useEffect } from 'react';
import { EmeraldStone, TreatmentType, CutShape, ColombianOrigin, GemologicalObservation } from '../../types';
import { 
  Scale, 
  Sparkles, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Coins, 
  HelpCircle, 
  Layers, 
  Bot,
  Microscope,
  GitCompare,
  FileText,
  Save,
  Check,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { AIService } from '../../services/aiService';
import { StorageService } from '../../services/storage';

interface ValuationCalculatorProps {
  initialStone?: EmeraldStone | null;
  allStones: EmeraldStone[];
  onOpenAIWithContext?: (stone: EmeraldStone, query: string) => void;
}

export const ValuationCalculator: React.FC<ValuationCalculatorProps> = ({
  initialStone,
  allStones,
  onOpenAIWithContext
}) => {
  const [activeTab, setActiveTab] = useState<'evaluador' | 'laboratorio' | 'comparador'>('evaluador');
  const [selectedStoneId, setSelectedStoneId] = useState<string>(initialStone?.id || '');
  
  // Custom or selected stone inputs for Orientative Valuation
  const [carats, setCarats] = useState<number>(initialStone?.weightCarats || 2.0);
  const [colorGrade, setColorGrade] = useState<'excepcional' | 'intenso' | 'medio' | 'suave'>('intenso');
  const [clarityGrade, setClarityGrade] = useState<'extra_fina' | 'fina' | 'moderada' | 'densa'>('fina');
  const [cutQuality, setCutQuality] = useState<'excelente' | 'muy_buena' | 'buena' | 'regular'>('muy_buena');
  const [treatment, setTreatment] = useState<TreatmentType>(initialStone?.treatment || 'aceite_menor');
  const [origin, setOrigin] = useState<ColombianOrigin>(initialStone?.origin || 'Muzo (Boyacá)');
  const [hasCertificate, setHasCertificate] = useState<boolean>(Boolean(initialStone?.certificateNumber));
  
  // AI rationale state
  const [aiRationale, setAiRationale] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  // Gemological Observation Log State
  const [selectedObsStoneId, setSelectedObsStoneId] = useState<string>(initialStone?.id || (allStones[0]?.id || ''));
  const [instrumentsUsed, setInstrumentsUsed] = useState<string[]>([
    'Lupa acromática 10x',
    'Microscopio binocular de campo oscuro',
    'Refractómetro gemológico 589 nm'
  ]);
  const [refractiveIndex, setRefractiveIndex] = useState('1.577 - 1.571');
  const [birefringence, setBirefringence] = useState('0.006 uniaxial negativo');
  const [specificGravity, setSpecificGravity] = useState<number>(2.71);
  const [pleochroism, setPleochroism] = useState('Dicroísmo marcado: verde azulado / verde amarillento');
  const [inclusionsInput, setInclusionsInput] = useState('Inclusiones trifásicas irregulares (líquido, burbuja de gas, microcubo de halita), calcita romboédrica, pirita microscópica');
  const [fluorescenceLW, setFluorescenceLW] = useState('Inerte a débil roja');
  const [fluorescenceSW, setFluorescenceSW] = useState('Inerte');
  const [observationConclusion, setObservationConclusion] = useState('Berilo esmeralda natural colombiana con características diagnósticas hidrotermales sedimentarias.');
  const [observerName, setObserverName] = useState('Gemólogo Responsable JAIRRESTAURA');
  const [obsSavedMessage, setObsSavedMessage] = useState(false);

  // Side-by-side comparison state
  const [stoneAId, setStoneAId] = useState<string>(allStones[0]?.id || '');
  const [stoneBId, setStoneBId] = useState<string>(allStones[1]?.id || allStones[0]?.id || '');

  // Sync when initialStone changes
  useEffect(() => {
    if (initialStone) {
      setSelectedStoneId(initialStone.id);
      setSelectedObsStoneId(initialStone.id);
      setCarats(initialStone.weightCarats);
      setTreatment(initialStone.treatment);
      setOrigin(initialStone.origin);
      setHasCertificate(Boolean(initialStone.certificateNumber));
    }
  }, [initialStone]);

  const handleSelectStone = (id: string) => {
    setSelectedStoneId(id);
    const stone = allStones.find(s => s.id === id);
    if (stone) {
      setCarats(stone.weightCarats);
      setTreatment(stone.treatment);
      setOrigin(stone.origin);
      setHasCertificate(Boolean(stone.certificateNumber));
      setAiRationale(null);
    }
  };

  // Valuation Algorithm Calculation
  const calculateValuation = () => {
    if (!carats || carats <= 0) {
      return { level: 'insuficiente' as const, message: 'Indica un peso en quilates válido mayor a 0.' };
    }

    // Base price per carat bracket in USD (market wholesale benchmarks)
    let basePricePerCarat = 800;
    if (carats >= 5.0) basePricePerCarat = 2800;
    else if (carats >= 3.0) basePricePerCarat = 1900;
    else if (carats >= 2.0) basePricePerCarat = 1400;
    else if (carats >= 1.0) basePricePerCarat = 1000;
    else basePricePerCarat = 600;

    // Color multiplier
    let colorMult = 1.0;
    if (colorGrade === 'excepcional') colorMult = 2.4;
    else if (colorGrade === 'intenso') colorMult = 1.7;
    else if (colorGrade === 'medio') colorMult = 1.1;
    else colorMult = 0.65;

    // Clarity multiplier
    let clarityMult = 1.0;
    if (clarityGrade === 'extra_fina') clarityMult = 1.8;
    else if (clarityGrade === 'fina') clarityMult = 1.3;
    else if (clarityGrade === 'moderada') clarityMult = 0.9;
    else clarityMult = 0.55;

    // Treatment multiplier
    let treatmentMult = 1.0;
    if (treatment === 'sin_tratar') treatmentMult = 2.5;
    else if (treatment === 'aceite_menor') treatmentMult = 1.1;
    else if (treatment === 'aceite_moderado') treatmentMult = 0.75;
    else if (treatment === 'aceite_significativo') treatmentMult = 0.45;
    else if (treatment === 'resina_polimero') treatmentMult = 0.35;
    else treatmentMult = 0.7;

    // Cut multiplier
    let cutMult = 1.0;
    if (cutQuality === 'excelente') cutMult = 1.25;
    else if (cutQuality === 'muy_buena') cutMult = 1.1;
    else if (cutQuality === 'buena') cutMult = 0.95;
    else cutMult = 0.8;

    // Origin premium
    let originMult = 1.0;
    if (origin.includes('Muzo')) originMult = 1.25;
    else if (origin.includes('Chivor')) originMult = 1.2;
    else if (origin.includes('Coscuez')) originMult = 1.15;

    // Certificate trust factor
    const certFactor = hasCertificate ? 1.1 : 0.95;

    const estimatedPerCarat = basePricePerCarat * colorMult * clarityMult * treatmentMult * cutMult * originMult * certFactor;
    const totalEstimatedUsd = Math.round(estimatedPerCarat * carats);
    
    // Spread range (-15% to +20%)
    const minUsd = Math.round(totalEstimatedUsd * 0.85);
    const maxUsd = Math.round(totalEstimatedUsd * 1.20);

    const copExchangeRate = 4150;
    const minCop = minUsd * copExchangeRate;
    const maxCop = maxUsd * copExchangeRate;

    // Confidence Score
    let confidence = 75;
    if (hasCertificate) confidence += 15;
    if (treatment === 'no_determinado') confidence -= 20;

    // Positive & Negative Value Factors List
    const positiveFactors: string[] = [];
    const negativeFactors: string[] = [];

    if (carats >= 2.0) positiveFactors.push(`Peso relevante (${carats} ct) con prima de rareza de volumen.`);
    else negativeFactors.push(`Quilataje comercial menor a 2 ct (menor escasez de tamaño).`);

    if (colorGrade === 'excepcional' || colorGrade === 'intenso') {
      positiveFactors.push(`Saturación y pureza espectral sobresaliente (${colorGrade}).`);
    } else {
      negativeFactors.push(`Tono/saturación comercial (${colorGrade}), reduce interés en alta joyería.`);
    }

    if (clarityGrade === 'extra_fina' || clarityGrade === 'fina') {
      positiveFactors.push(`Claridad destacada con jardín límpido que favorece el brillo vítreo.`);
    } else {
      negativeFactors.push(`Jardín o velos densos visibles que dispersan la luz interior.`);
    }

    if (treatment === 'sin_tratar') {
      positiveFactors.push(`Gema natural sin tratamiento ('No Oil'), máxima categoría de colección internacional.`);
    } else if (treatment === 'aceite_menor') {
      positiveFactors.push(`Tratamiento tradicional menor con aceite natural de cedro (aceptado globalmente).`);
    } else if (treatment === 'resina_polimero') {
      negativeFactors.push(`Presencia de resina polimérica artificial (penalización severa en casas de subasta).`);
    } else if (treatment === 'aceite_significativo') {
      negativeFactors.push(`Grado de mejora significativo: fisuras profundas impregnadas.`);
    }

    if (cutQuality === 'excelente') {
      positiveFactors.push(`Talla con proporciones óptimas y sin efecto ventana (retorno de luz balanceado).`);
    } else if (cutQuality === 'regular') {
      negativeFactors.push(`Talla con asimetría o ventana de escape de luz (requiere re-facetado).`);
    }

    if (hasCertificate) {
      positiveFactors.push(`Respaldo pericial con número de certificado gemológico registrado.`);
    } else {
      negativeFactors.push(`Sin certificación gemológica oficial acreditada.`);
    }

    return {
      level: 'estimacion_comparativa' as const,
      minUsd,
      maxUsd,
      minCop,
      maxCop,
      confidence,
      estimatedPerCarat: Math.round(estimatedPerCarat),
      positiveFactors,
      negativeFactors,
      breakdown: {
        colorMult,
        clarityMult,
        treatmentMult,
        cutMult,
        originMult
      }
    };
  };

  const result = calculateValuation();

  const handleAskAI = async () => {
    setLoadingAi(true);
    try {
      const prompt = `Por favor analiza la valoración estimada para una esmeralda colombiana de ${carats} quilates, origen ${origin}, color ${colorGrade}, claridad ${clarityGrade}, tratamiento ${treatment} y calidad de corte ${cutQuality}. Explica con criterio técnico por qué estos factores definen su rango de mercado.`;
      const res = await AIService.sendQuery(prompt, 'valorador', {
        weightCarats: carats,
        origin,
        treatment
      });
      setAiRationale(res.reply);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingAi(false);
    }
  };

  const handleSaveObservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedObsStoneId) {
      alert('Por favor selecciona una esmeralda del inventario para asociar la observación.');
      return;
    }

    const obs: Omit<GemologicalObservation, 'id' | 'date'> = {
      stoneId: selectedObsStoneId,
      instrumentsUsed,
      refractiveIndex,
      birefringence,
      specificGravity,
      pleochroism,
      inclusionsObserved: inclusionsInput.split(',').map(s => s.trim()).filter(Boolean),
      fluorescenceLW,
      fluorescenceSW,
      conclusion: observationConclusion,
      observerName
    };

    StorageService.addGemologicalObservation(selectedObsStoneId, obs);
    setObsSavedMessage(true);
    setTimeout(() => setObsSavedMessage(false), 4000);
  };

  const toggleInstrument = (inst: string) => {
    if (instrumentsUsed.includes(inst)) {
      setInstrumentsUsed(instrumentsUsed.filter(i => i !== inst));
    } else {
      setInstrumentsUsed([...instrumentsUsed, inst]);
    }
  };

  const stoneA = allStones.find(s => s.id === stoneAId);
  const stoneB = allStones.find(s => s.id === stoneBId);

  const availableInstruments = [
    'Lupa acromática 10x',
    'Microscopio binocular de campo oscuro',
    'Refractómetro gemológico 589 nm (línea D sodio)',
    'Polariscopio con conoscopio',
    'Balanza hidrostática de precisión',
    'Filtro Chelsea / Hanneman',
    'Espectroscopio de absorción (prisma/red)',
    'Espectrofotómetro FTIR / Raman'
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            <Scale className="w-6 h-6 text-emerald-400" />
            Laboratorio & Valoración Orientativa
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Algoritmos orientativos de mercado, registro instrumental gemológico y comparador cara a cara
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 border border-emerald-950 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('evaluador')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeTab === 'evaluador' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Valoración & Factores</span>
          </button>

          <button
            onClick={() => setActiveTab('laboratorio')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeTab === 'laboratorio' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Microscope className="w-3.5 h-3.5 text-emerald-300" />
            <span>Registro Instrumental</span>
          </button>

          <button
            onClick={() => setActiveTab('comparador')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              activeTab === 'comparador' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5 text-cyan-300" />
            <span>Comparador Gemológico</span>
          </button>
        </div>
      </div>

      {/* Mandatory Scientific & Legal Caveat */}
      <div className="p-4 bg-amber-950/25 border border-amber-900/60 rounded-2xl flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-200/90 leading-relaxed">
          <strong className="text-amber-300 font-bold block mb-0.5">
            AVISO CIENTÍFICO Y LEGAL OBLIGATORIO — EVALUACIÓN ORIENTATIVA
          </strong>
          Esta herramienta provee una estimación teórica y orientativa de calidad y parámetros físicos. <strong>No inventa precios fijos ni certifica autenticidad por fotografía</strong>. Toda transacción comercial debe sustentarse en análisis presencial físico y certificación pericial de laboratorios gemológicos acreditados (CDTEC, GIA, Gübelin, SSEF).
        </div>
      </div>

      {/* TAB 1: VALUACIÓN ORIENTATIVA & FACTORES */}
      {activeTab === 'evaluador' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 bg-slate-900/90 border border-emerald-950 p-6 rounded-2xl">
            
            {/* Select Existing Stone */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                <span>Seleccionar Esmeralda de tu Inventario (Opcional)</span>
                <span className="text-[10px] text-emerald-400 font-normal">Carga automática de datos</span>
              </label>
              <select
                value={selectedStoneId}
                onChange={e => handleSelectStone(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="">-- Ingresar características personalizadas libremente --</option>
                {allStones.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.id} — {s.reference} ({s.weightCarats} ct, {s.origin})
                  </option>
                ))}
              </select>
            </div>

            {/* Grid of Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Peso en Quilates (Carat) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={carats}
                  onChange={e => setCarats(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm font-bold text-emerald-300 focus:outline-none focus:border-emerald-500"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">Equivale a {(carats * 0.2).toFixed(3)} gramos</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Yacimiento Geográfico Declarado
                </label>
                <select
                  value={origin}
                  onChange={e => setOrigin(e.target.value as ColombianOrigin)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="Muzo (Boyacá)">Muzo (Boyacá) — Verde Profundo</option>
                  <option value="Chivor (Boyacá)">Chivor (Boyacá) — Verde Azuloso</option>
                  <option value="Coscuez (Boyacá)">Coscuez (Boyacá) — Fuego Vivo</option>
                  <option value="Gachalá (Cundinamarca)">Gachalá (Cundinamarca)</option>
                  <option value="Peñas Blancas (Boyacá)">Peñas Blancas</option>
                  <option value="San Pablo de Borbur">San Pablo de Borbur</option>
                  <option value="Colombia (Sin especificar yacimiento)">Colombia (General)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Intensidad y Pureza de Color
                </label>
                <select
                  value={colorGrade}
                  onChange={e => setColorGrade(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="excepcional">Excepcional (Gota de Aceite / Verde Real)</option>
                  <option value="intenso">Intenso (Saturación óptima balanceada)</option>
                  <option value="medio">Medio (Comercial estándar)</option>
                  <option value="suave">Suave (Tono pálido / claro)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Claridad y Pureza ("Jardín")
                </label>
                <select
                  value={clarityGrade}
                  onChange={e => setClarityGrade(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="extra_fina">Extra Fina (Transparencia vítrea sin velos)</option>
                  <option value="fina">Fina (Jardín ligero que no opaca la luz)</option>
                  <option value="moderada">Moderada (Jardín visible a simple vista)</option>
                  <option value="densa">Densa / Opaca (Múltiples fisuras internas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Tratamiento de Claridad *
                </label>
                <select
                  value={treatment}
                  onChange={e => setTreatment(e.target.value as TreatmentType)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="sin_tratar">Sin Tratamiento (No Oil) — Máximo Valor</option>
                  <option value="aceite_menor">Aceite de Cedro Menor (Minor)</option>
                  <option value="aceite_moderado">Aceite de Cedro Moderado (Moderate)</option>
                  <option value="aceite_significativo">Tratamiento Significativo</option>
                  <option value="resina_polimero">Resina Artificial (Fuerte castigo)</option>
                  <option value="no_determinado">No Determinado</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Calidad de la Talla / Proporciones
                </label>
                <select
                  value={cutQuality}
                  onChange={e => setCutQuality(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="excelente">Excelente (Retorno óptico total sin ventana)</option>
                  <option value="muy_buena">Muy Buena (Facetas simétricas y chaflanes limpios)</option>
                  <option value="buena">Buena (Leve ventana o asimetría menor)</option>
                  <option value="regular">Regular (Desbaste rústico o asimétrico)</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={hasCertificate}
                  onChange={e => setHasCertificate(e.target.checked)}
                  className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500"
                />
                <span>Cuenta con Certificado Gemológico Oficial (CDTEC, GIA, Gübelin)</span>
              </label>
            </div>

            {/* Positive and Negative Value Factors Breakdown */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-emerald-400" />
                Matriz de Factores Determinantes de Valor
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Positive factors */}
                <div className="p-3 bg-emerald-950/20 border border-emerald-900/40 rounded-xl space-y-1.5">
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Factores de Mérito (Premio):
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {result.positiveFactors?.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Negative factors */}
                <div className="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-1.5">
                  <span className="text-[11px] font-bold text-rose-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Factores de Demérito (Castigo):
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {result.negativeFactors?.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Estimation Results (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-900 border border-emerald-800/80 p-6 rounded-2xl shadow-xl shadow-emerald-950/40 relative overflow-hidden space-y-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Rango Orientativo de Mercado
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-700 text-[10px] text-emerald-300 font-semibold">
                  Confianza: {result.confidence}%
                </span>
              </div>

              {/* Price Ranges in USD & COP */}
              {result.level === 'estimacion_comparativa' && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-emerald-900/60 text-center">
                    <span className="text-xs text-slate-400 block mb-1">Rango Teórico Estimado en Dólares (USD)</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-emerald-heading">
                      ${result.minUsd?.toLocaleString()} – ${result.maxUsd?.toLocaleString()} <span className="text-xs font-normal text-slate-400">USD</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 block mt-1">
                      Promedio orientativo: ~${result.estimatedPerCarat?.toLocaleString()} USD / ct
                    </span>
                  </div>

                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-center">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Equivalencia en Pesos Colombianos (COP)</span>
                    <div className="text-base sm:text-lg font-bold text-white font-mono">
                      ${result.minCop?.toLocaleString()} – ${result.maxCop?.toLocaleString()} COP
                    </div>
                    <span className="text-[10px] text-slate-500">Tasa de cambio referencial mercado formal (1 USD = $4,150 COP)</span>
                  </div>

                  {/* Ask AI Rationale Button */}
                  <button
                    onClick={handleAskAI}
                    disabled={loadingAi}
                    className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Bot className="w-4 h-4 text-amber-300" />
                    <span>{loadingAi ? 'Consultando al Valorador IA...' : 'Explicar Criterio con Valorador IA'}</span>
                  </button>
                </div>
              )}

            </div>

            {/* AI Rationale Output */}
            {aiRationale && (
              <div className="bg-slate-900 border border-emerald-900/80 p-5 rounded-2xl text-xs space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-emerald-400 font-bold font-emerald-heading text-sm">
                  <Bot className="w-4 h-4 text-amber-400" />
                  <span>Dictamen Orientativo del Valorador IA:</span>
                </div>
                <div className="text-slate-300 whitespace-pre-line leading-relaxed text-xs">
                  {aiRationale}
                </div>
              </div>
            )}

          </div>

        </div>
      )}

      {/* TAB 2: REGISTRO INSTRUMENTAL DE LABORATORIO */}
      {activeTab === 'laboratorio' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-emerald-950 p-6 rounded-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white font-emerald-heading flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-emerald-400" />
                  Ficha de Ensayo e Instrumental Gemológico
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Registra observaciones ópticas, espectrales y de microscopía directamente vinculadas a la esmeralda
                </p>
              </div>

              {obsSavedMessage && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-bold rounded-lg animate-fade-in">
                  <Check className="w-4 h-4" />
                  <span>¡Observación registrada con éxito!</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSaveObservation} className="space-y-5">
              
              {/* Select Target Emerald */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Esmeralda Sujeta a Análisis *
                  </label>
                  <select
                    value={selectedObsStoneId}
                    onChange={e => setSelectedObsStoneId(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="">-- Selecciona una esmeralda del inventario --</option>
                    {allStones.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.id} — {s.reference} ({s.weightCarats} ct, {s.origin})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Gemólogo o Perito Responsable
                  </label>
                  <input
                    type="text"
                    value={observerName}
                    onChange={e => setObserverName(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              {/* Instruments Checklist */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Checklist de Instrumental Científico Utilizado:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {availableInstruments.map(inst => {
                    const isChecked = instrumentsUsed.includes(inst);
                    return (
                      <button
                        type="button"
                        key={inst}
                        onClick={() => toggleInstrument(inst)}
                        className={`p-2.5 rounded-xl border text-left text-xs font-medium flex items-start gap-2 transition-all ${
                          isChecked 
                            ? 'bg-emerald-950/80 border-emerald-600 text-emerald-200' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-emerald-500 text-slate-950' : 'border border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="line-clamp-2">{inst}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Physical & Optical Parameters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Índice de Refracción (RI)
                  </label>
                  <input
                    type="text"
                    value={refractiveIndex}
                    onChange={e => setRefractiveIndex(e.target.value)}
                    placeholder="1.577 - 1.571"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-mono"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Estándar colombiano: 1.570 - 1.580</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Birrefringencia y Carácter Óptico
                  </label>
                  <input
                    type="text"
                    value={birefringence}
                    onChange={e => setBirefringence(e.target.value)}
                    placeholder="0.006 uniaxial negativo"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white font-mono"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Uniaxial negativo (Beryllus)</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Densidad Hidrostática / Peso Específico (SG)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={specificGravity}
                    onChange={e => setSpecificGravity(parseFloat(e.target.value) || 2.70)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs font-bold text-emerald-300 font-mono"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Referencia: 2.69 - 2.72 g/cm³</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Pleocroísmo / Dicroísmo
                  </label>
                  <input
                    type="text"
                    value={pleochroism}
                    onChange={e => setPleochroism(e.target.value)}
                    placeholder="Verde azulado / verde amarillento"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Fluorescencia UV Onda Larga (365 nm)
                  </label>
                  <input
                    type="text"
                    value={fluorescenceLW}
                    onChange={e => setFluorescenceLW(e.target.value)}
                    placeholder="Inerte a débil roja"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Fluorescencia UV Onda Corta (254 nm)
                  </label>
                  <input
                    type="text"
                    value={fluorescenceSW}
                    onChange={e => setFluorescenceSW(e.target.value)}
                    placeholder="Inerte"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              {/* Inclusions & Microscopic features */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Inclusiones Microscópicas Observadas (Separadas por comas)
                </label>
                <textarea
                  rows={2}
                  value={inclusionsInput}
                  onChange={e => setInclusionsInput(e.target.value)}
                  placeholder="ej. Inclusiones trifásicas irregulares con halita cúbica, calcita rhomboédrica, pirita en microcristales"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Conclusión Diagnóstica del Gemólogo
                </label>
                <textarea
                  rows={2}
                  value={observationConclusion}
                  onChange={e => setObservationConclusion(e.target.value)}
                  placeholder="Conclusión pericial..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar Ensayo en Ficha de la Esmeralda</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* TAB 3: COMPARADOR GEMOLÓGICO CARA A CARA */}
      {activeTab === 'comparador' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-emerald-950 p-6 rounded-2xl space-y-5">
            <div>
              <h3 className="text-lg font-bold text-white font-emerald-heading flex items-center gap-2">
                <GitCompare className="w-5 h-5 text-cyan-400" />
                Comparador Gemológico y Comercial Cara a Cara
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Compara dos esmeraldas del inventario para contrastar quilataje, proporciones, tratamientos, procedencia y valor por quilate
              </p>
            </div>

            {/* Selectors for Stone A and Stone B */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-800">
              <div>
                <label className="block text-xs font-bold text-emerald-400 mb-1.5 uppercase">
                  Esmeralda A:
                </label>
                <select
                  value={stoneAId}
                  onChange={e => setStoneAId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-emerald-700/60 rounded-xl text-xs text-white font-medium"
                >
                  {allStones.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.id} — {s.reference} ({s.weightCarats} ct, {s.origin})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-cyan-400 mb-1.5 uppercase">
                  Esmeralda B:
                </label>
                <select
                  value={stoneBId}
                  onChange={e => setStoneBId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-cyan-700/60 rounded-xl text-xs text-white font-medium"
                >
                  {allStones.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.id} — {s.reference} ({s.weightCarats} ct, {s.origin})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comparison Side-by-Side Table / Cards */}
            {stoneA && stoneB ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Column Stone A */}
                <div className="bg-slate-950 border border-emerald-900/60 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 font-mono">{stoneA.id}</span>
                      <h4 className="text-base font-bold text-white font-emerald-heading">{stoneA.reference}</h4>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-700 text-xs font-bold text-emerald-300 rounded-lg">
                      {stoneA.weightCarats} ct
                    </span>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-900">
                    <img 
                      src={stoneA.photos[0] || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'} 
                      alt={stoneA.reference}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Yacimiento:</span>
                      <span className="text-white font-semibold">{stoneA.origin}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Talla / Forma:</span>
                      <span className="text-white">{stoneA.cutShape}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Dimensiones:</span>
                      <span className="text-white font-mono">{stoneA.dimensions.lengthMm} x {stoneA.dimensions.widthMm} x {stoneA.dimensions.depthMm} mm</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Tratamiento de Claridad:</span>
                      <span className="text-amber-300 capitalize">{stoneA.treatment.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Procedencia Documental:</span>
                      <span className="text-slate-300">{stoneA.declaredProvenance || 'Declaración ordinaria'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Precio Estimado (USD):</span>
                      <span className="text-base font-bold text-amber-300">
                        {stoneA.estimatedPriceUsd ? `$${stoneA.estimatedPriceUsd.toLocaleString()}` : 'N/D'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Precio / Quilate:</span>
                      <span className="font-mono text-emerald-400 font-bold">
                        {stoneA.estimatedPriceUsd ? `$${Math.round(stoneA.estimatedPriceUsd / stoneA.weightCarats).toLocaleString()} USD/ct` : '-'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column Stone B */}
                <div className="bg-slate-950 border border-cyan-900/60 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-cyan-400 font-mono">{stoneB.id}</span>
                      <h4 className="text-base font-bold text-white font-emerald-heading">{stoneB.reference}</h4>
                    </div>
                    <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-700 text-xs font-bold text-cyan-300 rounded-lg">
                      {stoneB.weightCarats} ct
                    </span>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-900">
                    <img 
                      src={stoneB.photos[0] || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'} 
                      alt={stoneB.reference}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Yacimiento:</span>
                      <span className="text-white font-semibold">{stoneB.origin}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Talla / Forma:</span>
                      <span className="text-white">{stoneB.cutShape}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Dimensiones:</span>
                      <span className="text-white font-mono">{stoneB.dimensions.lengthMm} x {stoneB.dimensions.widthMm} x {stoneB.dimensions.depthMm} mm</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Tratamiento de Claridad:</span>
                      <span className="text-amber-300 capitalize">{stoneB.treatment.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Procedencia Documental:</span>
                      <span className="text-slate-300">{stoneB.declaredProvenance || 'Declaración ordinaria'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Precio Estimado (USD):</span>
                      <span className="text-base font-bold text-amber-300">
                        {stoneB.estimatedPriceUsd ? `$${stoneB.estimatedPriceUsd.toLocaleString()}` : 'N/D'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Precio / Quilate:</span>
                      <span className="font-mono text-cyan-400 font-bold">
                        {stoneB.estimatedPriceUsd ? `$${Math.round(stoneB.estimatedPriceUsd / stoneB.weightCarats).toLocaleString()} USD/ct` : '-'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <p className="text-xs text-slate-400 text-center py-6">
                Selecciona al menos dos esmeraldas para contrastar parámetros
              </p>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
