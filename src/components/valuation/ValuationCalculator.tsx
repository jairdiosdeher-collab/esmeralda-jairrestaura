import React, { useState, useEffect } from 'react';
import { EmeraldStone, TreatmentType, CutShape, ColombianOrigin } from '../../types';
import { 
  Scale, 
  Sparkles, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Coins, 
  HelpCircle, 
  Layers, 
  Bot 
} from 'lucide-react';
import { AIService } from '../../services/aiService';

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
  const [selectedStoneId, setSelectedStoneId] = useState<string>(initialStone?.id || '');
  
  // Custom or selected stone inputs
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

  // Sync when initialStone changes
  useEffect(() => {
    if (initialStone) {
      setSelectedStoneId(initialStone.id);
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
      return { level: 'insuficiente', message: 'Indica un peso en quilates válido mayor a 0.' };
    }

    // Base price per carat bracket in USD (market wholesale benchmarks)
    let basePricePerCarat = 800; // baseline

    // Weight scale multiplier (exponential rarity for fine emeralds)
    if (carats >= 5.0) basePricePerCarat = 2800;
    else if (carats >= 3.0) basePricePerCarat = 1900;
    else if (carats >= 2.0) basePricePerCarat = 1400;
    else if (carats >= 1.0) basePricePerCarat = 1000;
    else basePricePerCarat = 600;

    // Color multiplier (up to 2.4x)
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

    // Treatment multiplier (CRITICAL in international gem trade)
    let treatmentMult = 1.0;
    if (treatment === 'sin_tratar') treatmentMult = 2.5; // Huge premium for No Oil
    else if (treatment === 'aceite_menor') treatmentMult = 1.1; // Standard high grade
    else if (treatment === 'aceite_moderado') treatmentMult = 0.75;
    else if (treatment === 'aceite_significativo') treatmentMult = 0.45;
    else if (treatment === 'resina_polimero') treatmentMult = 0.35; // Severe penalty for polymer resin
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

    const copExchangeRate = 4150; // COP per USD
    const minCop = minUsd * copExchangeRate;
    const maxCop = maxUsd * copExchangeRate;

    // Confidence Score
    let confidence = 75;
    if (hasCertificate) confidence += 15;
    if (treatment === 'no_determinado') confidence -= 20;

    return {
      level: 'estimacion_comparativa' as const,
      minUsd,
      maxUsd,
      minCop,
      maxCop,
      confidence,
      estimatedPerCarat: Math.round(estimatedPerCarat),
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

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="pb-4 border-b border-emerald-950">
        <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
          <Scale className="w-6 h-6 text-emerald-400" />
          Valoración Gemológica con Inteligencia Artificial
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Algoritmo multidimensional basado en los estándares del mercado de Bogotá, CDTEC y casas de subastas internacionales
        </p>
      </div>

      {/* Main Grid: Form Inputs vs Estimation Output */}
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
              <span>Cuenta con Certificado Gemológico Oficial (CDTEC, GIA, Gubelin)</span>
            </label>
          </div>

        </div>

        {/* Right Estimation Results (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-slate-900 border border-emerald-800/80 p-6 rounded-2xl shadow-xl shadow-emerald-950/40 relative overflow-hidden space-y-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Estimación Comparativa de Mercado
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-700 text-[10px] text-emerald-300 font-semibold">
                Nivel de Confianza: {result.confidence}%
              </span>
            </div>

            {/* Price Ranges in USD & COP */}
            {result.level === 'estimacion_comparativa' && (
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-emerald-900/60 text-center">
                  <span className="text-xs text-slate-400 block mb-1">Rango Estimado en Dólares (USD)</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-emerald-heading">
                    ${result.minUsd?.toLocaleString()} – ${result.maxUsd?.toLocaleString()} <span className="text-xs font-normal text-slate-400">USD</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 block mt-1">
                    Promedio: ~${result.estimatedPerCarat?.toLocaleString()} USD / quilate
                  </span>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Equivalencia Aproximada en Pesos Colombianos (COP)</span>
                  <div className="text-base sm:text-lg font-bold text-white font-mono">
                    ${result.minCop?.toLocaleString()} – ${result.maxCop?.toLocaleString()} COP
                  </div>
                  <span className="text-[10px] text-slate-500">Tasa de cambio referencial mercado formal</span>
                </div>

                {/* Factor Breakdown */}
                <div className="space-y-1.5 text-xs border-t border-slate-800 pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Impacto de Factores Gemológicos Evaluados:
                  </span>
                  
                  <div className="flex justify-between text-slate-300">
                    <span>Peso ({carats} ct):</span>
                    <span className="font-semibold text-emerald-400">Escala de rareza aplicada</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Color y Matiz:</span>
                    <span className="font-semibold text-emerald-400">{(result.breakdown?.colorMult || 1) >= 1.5 ? 'Excelente' : 'Comercial'}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tratamiento de Claridad:</span>
                    <span className={`font-semibold ${treatment === 'sin_tratar' ? 'text-amber-400' : 'text-slate-300'}`}>
                      {treatment === 'sin_tratar' ? 'Premio Premium (No Oil)' : 'Estándar Aceitado'}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Yacimiento {origin}:</span>
                    <span className="font-semibold text-emerald-400">Trazabilidad colombiana</span>
                  </div>
                </div>

                {/* Ask AI Rationale Button */}
                <button
                  onClick={handleAskAI}
                  disabled={loadingAi}
                  className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-colors"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>{loadingAi ? 'Consultando al Valorador IA...' : 'Explicar con Valorador IA'}</span>
                </button>
              </div>
            )}

            {/* Mandatory Caveats */}
            <div className="p-3 bg-amber-950/20 border border-amber-900/40 rounded-xl text-[11px] text-amber-200/90 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Limitaciones y Supuestos:</strong> Esta valoración orientativa asume autenticidad del berilo esmeralda y correspondencia con las características declaradas. Una estimación digital jamás sustituye el análisis pericial de laboratorio con espectroscopio FTIR, microscopía electrónica ni certificado físico oficial.
              </div>
            </div>

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

    </div>
  );
};
