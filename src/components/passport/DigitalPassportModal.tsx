import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { EmeraldStone } from '../../types';
import { Logo } from '../common/Logo';
import { 
  X, 
  Printer, 
  Share2, 
  Check, 
  ShieldCheck, 
  Lock, 
  Eye, 
  EyeOff, 
  Calendar, 
  Award, 
  MapPin, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

interface DigitalPassportModalProps {
  stone: EmeraldStone | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenValuation?: (stone: EmeraldStone) => void;
}

export const DigitalPassportModal: React.FC<DigitalPassportModalProps> = ({
  stone,
  isOpen,
  onClose,
  onOpenValuation
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isPublicMode, setIsPublicMode] = useState(false);

  useEffect(() => {
    if (!stone) return;

    // Generate Verification Link (using current URL hash or location)
    const verificationUrl = `${window.location.origin}/#pasaporte/${encodeURIComponent(stone.id)}`;
    
    QRCode.toDataURL(verificationUrl, {
      width: 250,
      margin: 1.5,
      color: {
        dark: '#022c22',
        light: '#ffffff'
      }
    })
      .then(url => setQrDataUrl(url))
      .catch(err => console.error('Error generating QR', err));
  }, [stone]);

  if (!isOpen || !stone) return null;

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#pasaporte/${encodeURIComponent(stone.id)}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const treatmentLabels: Record<string, string> = {
    sin_tratar: 'Sin Tratamiento de Claridad (No Oil / No Clarity Enhancement)',
    aceite_menor: 'Aceite de Cedro Natural — Grado Menor (Minor)',
    aceite_moderado: 'Aceite de Cedro Natural — Grado Moderado (Moderate)',
    aceite_significativo: 'Tratamiento de Claridad Significativo',
    resina_polimero: 'Relleno de Resina / Polímero Artificial',
    no_determinado: 'No Determinado / Pendiente Laboratorio'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-emerald-800/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-emerald-900/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Pasaporte Digital Oficial
            </span>
            <span className="text-slate-500">•</span>
            <button
              onClick={() => setIsPublicMode(!isPublicMode)}
              className={`text-xs px-2.5 py-1 rounded-lg border flex items-center gap-1.5 transition-colors ${
                isPublicMode 
                  ? 'bg-amber-950/40 text-amber-300 border-amber-700/50' 
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              {isPublicMode ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{isPublicMode ? 'Vista Pública (Datos Protegidos)' : 'Vista Completa de Propietario'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {onOpenValuation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenValuation(stone);
                }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-600/40 rounded-lg transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Valorar con IA</span>
              </button>
            )}

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Enlace Copiado' : 'Compartir QR'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Ficha</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Passport Body */}
        <div className="p-6 sm:p-8 overflow-y-auto print:p-8 print:bg-white print:text-black space-y-6">
          
          {/* Passport Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-emerald-900/40 print:border-slate-300 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Logo size="sm" showSubtitle={false} />
                <span className="text-[11px] font-bold tracking-widest text-emerald-400 uppercase print:text-emerald-800">
                  DOCUMENTO DE IDENTIDAD GEMOLÓGICA
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white print:text-black font-emerald-heading">
                {stone.reference}
              </h2>
              <p className="text-xs text-slate-400 print:text-slate-600">
                Código de Registro Único: <span className="font-mono font-bold text-emerald-300 print:text-emerald-800">{stone.id}</span>
              </p>
            </div>

            {/* QR Card */}
            <div className="flex items-center gap-3 bg-slate-950 p-2.5 rounded-xl border border-emerald-900/60 print:border-slate-300 print:bg-white shrink-0 self-center sm:self-auto">
              {qrDataUrl && (
                <img 
                  src={qrDataUrl} 
                  alt={`QR de verificación para ${stone.id}`} 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white p-1"
                />
              )}
              <div className="text-[11px] max-w-[120px] text-slate-400 print:text-slate-600 leading-tight">
                <span className="font-bold text-white print:text-black block mb-1">Verificación Inmediata</span>
                Escanea para consultar la ficha autorizada en la plataforma.
              </div>
            </div>
          </div>

          {/* Main Content Grid: Image + Core Data */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left: Gem Photos */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-emerald-900/60 print:border-slate-300">
                <img 
                  src={stone.photos[0] || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'} 
                  alt={stone.reference}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-bold text-emerald-300 uppercase">
                  {stone.status.replace('_', ' ')}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-bold text-amber-300">
                  {stone.weightCarats} ct
                </div>
              </div>

              {stone.photos.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {stone.photos.map((photo, i) => (
                    <img 
                      key={i} 
                      src={photo} 
                      alt={`Foto adicional ${i+1}`} 
                      className="w-16 h-16 rounded-xl object-cover border border-emerald-900/60 shrink-0"
                    />
                  ))}
                </div>
              )}

              {/* Status Badge */}
              <div className="p-3 bg-slate-950/70 border border-emerald-950 rounded-xl text-xs space-y-1 print:border-slate-300 print:bg-white">
                <div className="flex justify-between">
                  <span className="text-slate-400 print:text-slate-600">Estado Comercial:</span>
                  <span className="font-bold capitalize text-emerald-300 print:text-emerald-900">{stone.commercialStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 print:text-slate-600">Yacimiento Declarado:</span>
                  <span className="font-bold text-white print:text-black">{stone.origin}</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Gemological Passport Table */}
            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950/60 rounded-2xl p-5 border border-emerald-900/40 print:border-slate-300 print:bg-white space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 print:text-amber-800 font-emerald-heading flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Especificaciones Técnicas Certificables
                </h3>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Peso en Quilates</span>
                    <span className="text-base font-bold text-white print:text-black">{stone.weightCarats} ct</span>
                    <span className="text-[11px] text-slate-400 print:text-slate-600 block">({(stone.weightCarats * 0.2).toFixed(3)} gramos)</span>
                  </div>

                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Dimensiones (L x A x P)</span>
                    <span className="text-base font-bold text-white print:text-black">
                      {stone.dimensions.lengthMm} × {stone.dimensions.widthMm} × {stone.dimensions.depthMm} mm
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Talla / Forma</span>
                    <span className="text-sm font-semibold text-white print:text-black">{stone.cutShape}</span>
                    <span className="text-[10px] text-slate-400 print:text-slate-500 block">Calidad: {stone.cutQuality}</span>
                  </div>

                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Transparencia Óptica</span>
                    <span className="text-sm font-semibold text-white print:text-black">{stone.transparency}</span>
                    <span className="text-[10px] text-slate-400 print:text-slate-500 block">Saturación: {stone.saturation}</span>
                  </div>
                </div>

                {/* Color & Tone */}
                <div className="p-3 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200 text-xs">
                  <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold mb-1">Color y Matiz</span>
                  <p className="font-semibold text-emerald-300 print:text-emerald-900">{stone.colorTone}</p>
                </div>

                {/* Inclusions / Jardin */}
                <div className="p-3 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200 text-xs">
                  <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold mb-1">Inclusiones Observadas ("El Jardín")</span>
                  <p className="text-slate-300 print:text-slate-700 leading-relaxed">{stone.inclusions}</p>
                </div>

                {/* Treatment */}
                <div className="p-3 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200 text-xs">
                  <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold mb-1">Tratamiento de Claridad Declarado</span>
                  <p className="font-medium text-white print:text-black">{treatmentLabels[stone.treatment] || stone.treatment}</p>
                </div>

                {/* Certificate */}
                <div className="flex items-center justify-between p-3 bg-emerald-950/40 print:bg-slate-50 rounded-xl border border-emerald-800/40 print:border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] text-emerald-400 print:text-emerald-800 uppercase font-bold block">Certificado de Laboratorio</span>
                    <span className="font-bold text-white print:text-black">
                      {stone.certificateNumber ? `${stone.certificateLab || 'Lab'} — ${stone.certificateNumber}` : 'Sin certificado adjunto'}
                    </span>
                  </div>
                  {stone.certificateNumber && (
                    <span className="px-2.5 py-1 bg-emerald-600/30 text-emerald-300 rounded text-[11px] font-semibold border border-emerald-500/30">
                      Verificado
                    </span>
                  )}
                </div>
              </div>

              {/* Private Information Section (Only visible when NOT in public mode) */}
              {!isPublicMode ? (
                <div className="p-4 bg-slate-950/80 rounded-xl border border-amber-900/40 space-y-3 no-print">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      Datos Privados del Propietario (Confidencial)
                    </span>
                    <span className="text-[10px] text-amber-500/80">Oculto en escaneo QR público</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Costo de Adquisición:</span>
                      <span className="font-bold text-white">
                        {stone.acquisitionCostUsd ? `$${stone.acquisitionCostUsd.toLocaleString()} USD` : 'No registrado'}
                      </span>
                      {stone.acquisitionCostCop && (
                        <span className="text-[10px] text-slate-400 block">${stone.acquisitionCostCop.toLocaleString()} COP</span>
                      )}
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Ubicación Física:</span>
                      <span className="font-bold text-white">{stone.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Responsable:</span>
                      <span className="font-bold text-white">{stone.ownerName}</span>
                    </div>
                  </div>

                  {stone.notes && (
                    <div className="pt-2 text-xs text-slate-300 border-t border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-semibold">Notas Internas:</span>
                      {stone.notes}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl text-xs text-amber-300 flex items-center gap-2">
                  <Eye className="w-4 h-4 shrink-0" />
                  <span>Modo Vista Pública: los costos de compra, ubicación de bóveda y notas privadas están protegidos y ocultos.</span>
                </div>
              )}
            </div>

          </div>

          {/* Legal Notice at bottom of printable page */}
          <div className="pt-4 border-t border-emerald-950 print:border-slate-300 text-[10px] text-slate-400 print:text-slate-600 leading-tight">
            <p>
              <strong>Aviso de Identidad Digital:</strong> Este pasaporte digital recopila las características documentadas y declaraciones del registrante en la plataforma ESMERALDA INTELIGENTE JAIRRESTAURA. No constituye título de propiedad legal automático ni reemplaza el dictamen gemológico pericial físico emitido por laboratorios autorizados.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
