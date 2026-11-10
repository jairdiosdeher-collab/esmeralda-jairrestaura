import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { EmeraldStone, DocumentRecord, CustodyTransferEntry } from '../../types';
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
  Award, 
  Info,
  Layers,
  Sparkles,
  FileText,
  Clock,
  ArrowRight,
  Plus,
  Building2,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { StorageService } from '../../services/storage';

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
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  // Quick Action: Add Custody Transfer Form Modal
  const [showAddCustody, setShowAddCustody] = useState(false);
  const [transferFrom, setTransferFrom] = useState('');
  const [transferTo, setTransferTo] = useState('');
  const [transferPurpose, setTransferPurpose] = useState<'Custodia en Bóveda' | 'Envío a Taller de Talla' | 'Consignación Comercial' | 'Inspección de Laboratorio' | 'Venta Definitiva'>('Custodia en Bóveda');
  const [transferLocation, setTransferLocation] = useState('');
  const [transferNotes, setTransferNotes] = useState('');

  // Quick Action: Add Document Modal
  const [showAddDoc, setShowAddDoc] = useState(false);
  const [docType, setDocType] = useState<'factura' | 'rucom' | 'guia_transporte' | 'certificado_lab' | 'cuenta_cobro' | 'otro'>('factura');
  const [docNumber, setDocNumber] = useState('');
  const [docEntity, setDocEntity] = useState('');
  const [docDate, setDocDate] = useState(new Date().toISOString().split('T')[0]);

  // Local stone state to reflect instant additions
  const [currentStone, setCurrentStone] = useState<EmeraldStone | null>(stone);

  useEffect(() => {
    setCurrentStone(stone);
    setSelectedPhotoIndex(0);
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

  if (!isOpen || !currentStone) return null;

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#pasaporte/${encodeURIComponent(currentStone.id)}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveCustody = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transferFrom.trim() || !transferTo.trim() || !transferLocation.trim()) {
      alert('Por favor completa los campos de emisor, receptor y ubicación.');
      return;
    }

    const newTransfer: CustodyTransferEntry = {
      id: `CUS-${Date.now()}`,
      date: new Date().toISOString(),
      fromParty: transferFrom.trim(),
      toParty: transferTo.trim(),
      purpose: transferPurpose,
      location: transferLocation.trim(),
      notes: transferNotes.trim() || undefined
    };

    StorageService.addCustodyTransfer(currentStone.id, newTransfer);
    const updated = StorageService.getEmeraldById(currentStone.id);
    if (updated) setCurrentStone(updated);

    setShowAddCustody(false);
    setTransferFrom('');
    setTransferTo('');
    setTransferLocation('');
    setTransferNotes('');
  };

  const handleSaveDoc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docNumber.trim() || !docEntity.trim()) {
      alert('Por favor indica el número y la entidad emisora del documento.');
      return;
    }

    const newDoc: DocumentRecord = {
      id: `DOC-${Date.now()}`,
      type: docType,
      documentNumber: docNumber.trim(),
      entityName: docEntity.trim(),
      issueDate: docDate,
      status: 'vigente'
    };

    StorageService.addDocumentRecord(currentStone.id, newDoc);
    const updated = StorageService.getEmeraldById(currentStone.id);
    if (updated) setCurrentStone(updated);

    setShowAddDoc(false);
    setDocNumber('');
    setDocEntity('');
  };

  const treatmentLabels: Record<string, string> = {
    sin_tratar: 'Sin Tratamiento de Claridad (No Oil / No Clarity Enhancement)',
    aceite_menor: 'Aceite de Cedro Natural — Grado Menor (Minor)',
    aceite_moderado: 'Aceite de Cedro Natural — Grado Moderado (Moderate)',
    aceite_significativo: 'Tratamiento de Claridad Significativo',
    resina_polimero: 'Relleno de Resina / Polímero Artificial',
    no_determinado: 'No Determinado / Pendiente Laboratorio'
  };

  const activePhoto = currentStone.photos[selectedPhotoIndex] || currentStone.photos[0] || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80';

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
                  onOpenValuation(currentStone);
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
              <span>Imprimir Ficha (PDF)</span>
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
          
          {/* Explicit Scientific & Legal Caveat Banner */}
          <div className="p-3.5 bg-amber-950/40 border border-amber-600/60 rounded-xl text-xs text-amber-200 flex items-start gap-2.5 print:border-slate-400 print:bg-slate-100 print:text-slate-800">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 print:text-amber-800" />
            <div className="leading-relaxed">
              <strong>AVISO OBLIGATORIO DE RESPONSABILIDAD:</strong> Este Pasaporte Digital constituye una ficha técnica y registro de trazabilidad interna de custodia. <strong>No debe presentarse ni interpretarse como certificado de autenticidad ni de origen geográfico</strong>, dictámenes que corresponden de manera exclusiva y vinculante a reportes físicos emitidos por laboratorios gemológicos acreditados (CDTEC, GIA, Gübelin, SSEF).
            </div>
          </div>

          {/* Passport Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-emerald-900/40 print:border-slate-300 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Logo size="sm" showSubtitle={false} />
                <span className="text-[11px] font-bold tracking-widest text-emerald-400 uppercase print:text-emerald-800">
                  PASAPORTE DIGITAL Y FICHA DE CUSTODIA
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white print:text-black font-emerald-heading">
                {currentStone.reference}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 print:text-slate-600">
                <span>Código Único: <strong className="font-mono text-emerald-300 print:text-emerald-800">{currentStone.id}</strong></span>
                <span>•</span>
                <span>Clasificación: <strong className="text-white print:text-black">{currentStone.lotClassification || 'Piedra Suelta'}</strong></span>
                <span>•</span>
                <span>Fecha Ingreso: <strong className="text-slate-300 print:text-black">{currentStone.acquisitionDate}</strong></span>
              </div>
            </div>

            {/* QR Card */}
            <div className="flex items-center gap-3 bg-slate-950 p-2.5 rounded-xl border border-emerald-900/60 print:border-slate-300 print:bg-white shrink-0 self-center sm:self-auto">
              {qrDataUrl && (
                <img 
                  src={qrDataUrl} 
                  alt={`QR de verificación para ${currentStone.id}`} 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white p-1"
                />
              )}
              <div className="text-[11px] max-w-[120px] text-slate-400 print:text-slate-600 leading-tight">
                <span className="font-bold text-white print:text-black block mb-1">Verificación Inmediata</span>
                Escanea con celular para consultar la ficha autorizada en línea.
              </div>
            </div>
          </div>

          {/* Main Content Grid: Image Gallery + Core Data */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left: Gem Photos Gallery with Switcher */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-emerald-900/60 print:border-slate-300">
                <img 
                  src={activePhoto} 
                  alt={currentStone.reference}
                  className="w-full h-full object-cover transition-all"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-bold text-emerald-300 uppercase">
                  {currentStone.status.replace('_', ' ')}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-bold text-amber-300">
                  {currentStone.weightCarats} ct
                </div>
              </div>

              {/* Clickable Thumbnail Gallery */}
              {currentStone.photos.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 no-print">
                  {currentStone.photos.map((photo, i) => (
                    <button 
                      key={i} 
                      type="button"
                      onClick={() => setSelectedPhotoIndex(i)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedPhotoIndex === i ? 'border-emerald-400 shadow-md scale-105' : 'border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={photo} 
                        alt={`Miniatura ${i+1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Status & Provenance Card */}
              <div className="p-3 bg-slate-950/70 border border-emerald-950 rounded-xl text-xs space-y-1.5 print:border-slate-300 print:bg-white">
                <div className="flex justify-between">
                  <span className="text-slate-400 print:text-slate-600">Estado Comercial:</span>
                  <span className="font-bold capitalize text-emerald-300 print:text-emerald-900">{currentStone.commercialStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 print:text-slate-600">Yacimiento Declarado:</span>
                  <span className="font-bold text-white print:text-black">{currentStone.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 print:text-slate-600">Soporte Declarado:</span>
                  <span className="font-medium text-amber-300 print:text-amber-800">{currentStone.declaredProvenance || 'Factura Legal'}</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Gemological Table */}
            <div className="md:col-span-7 space-y-4">
              <div className="bg-slate-950/60 rounded-2xl p-5 border border-emerald-900/40 print:border-slate-300 print:bg-white space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 print:text-amber-800 font-emerald-heading flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Especificaciones Técnicas Registradas
                </h3>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Peso en Quilates</span>
                    <span className="text-base font-bold text-white print:text-black">{currentStone.weightCarats} ct</span>
                    <span className="text-[11px] text-slate-400 print:text-slate-600 block">({(currentStone.weightCarats * 0.2).toFixed(3)} gramos)</span>
                  </div>

                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Dimensiones (L x A x P)</span>
                    <span className="text-base font-bold text-white print:text-black">
                      {currentStone.dimensions.lengthMm} × {currentStone.dimensions.widthMm} × {currentStone.dimensions.depthMm} mm
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Talla / Forma</span>
                    <span className="text-sm font-semibold text-white print:text-black">{currentStone.cutShape}</span>
                    <span className="text-[10px] text-slate-400 print:text-slate-500 block">Calidad: {currentStone.cutQuality}</span>
                  </div>

                  <div className="p-2.5 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200">
                    <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold">Transparencia Óptica</span>
                    <span className="text-sm font-semibold text-white print:text-black">{currentStone.transparency}</span>
                    <span className="text-[10px] text-slate-400 print:text-slate-500 block">Saturación: {currentStone.saturation}</span>
                  </div>
                </div>

                {/* Color & Tone */}
                <div className="p-3 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200 text-xs">
                  <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold mb-1">Color y Matiz</span>
                  <p className="font-semibold text-emerald-300 print:text-emerald-900">{currentStone.colorTone}</p>
                </div>

                {/* Inclusions / Jardin */}
                <div className="p-3 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200 text-xs">
                  <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold mb-1">Inclusiones Observadas ("El Jardín")</span>
                  <p className="text-slate-300 print:text-slate-700 leading-relaxed">{currentStone.inclusions}</p>
                </div>

                {/* Treatment */}
                <div className="p-3 bg-slate-900/80 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-200 text-xs">
                  <span className="text-slate-400 print:text-slate-500 block text-[10px] uppercase font-semibold mb-1">Tratamiento de Claridad Declarado</span>
                  <p className="font-medium text-white print:text-black">{treatmentLabels[currentStone.treatment] || currentStone.treatment}</p>
                </div>

                {/* Certificate */}
                <div className="flex items-center justify-between p-3 bg-emerald-950/40 print:bg-slate-50 rounded-xl border border-emerald-800/40 print:border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] text-emerald-400 print:text-emerald-800 uppercase font-bold block">Certificado de Laboratorio Físico</span>
                    <span className="font-bold text-white print:text-black">
                      {currentStone.certificateNumber ? `${currentStone.certificateLab || 'Lab'} — ${currentStone.certificateNumber}` : 'Sin certificado físico adjunto'}
                    </span>
                  </div>
                  {currentStone.certificateNumber && (
                    <span className="px-2.5 py-1 bg-emerald-600/30 text-emerald-300 rounded text-[11px] font-semibold border border-emerald-500/30">
                      Reporte Adjunto
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
                        {currentStone.acquisitionCostUsd ? `$${currentStone.acquisitionCostUsd.toLocaleString()} USD` : 'No registrado'}
                      </span>
                      {currentStone.acquisitionCostCop && (
                        <span className="text-[10px] text-slate-400 block">${currentStone.acquisitionCostCop.toLocaleString()} COP</span>
                      )}
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Ubicación Física:</span>
                      <span className="font-bold text-white">{currentStone.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Responsable / Dueño:</span>
                      <span className="font-bold text-white">{currentStone.ownerName}</span>
                    </div>
                  </div>

                  {currentStone.notes && (
                    <div className="pt-2 text-xs text-slate-300 border-t border-slate-800">
                      <span className="text-slate-400 text-[10px] block font-semibold">Notas Internas:</span>
                      {currentStone.notes}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl text-xs text-amber-300 flex items-center gap-2 no-print">
                  <Eye className="w-4 h-4 shrink-0" />
                  <span>Modo Vista Pública: los costos de compra, ubicación de bóveda y notas privadas están protegidos y ocultos.</span>
                </div>
              )}
            </div>

          </div>

          {/* Section: Associated Legal Documents */}
          <div className="p-5 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Documentos Comerciales y Legales Asociados ({currentStone.associatedDocuments?.length || 0})</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddDoc(!showAddDoc)}
                className="no-print px-2.5 py-1 text-xs font-semibold bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-600/40 text-emerald-200 rounded-lg flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Anexar Documento</span>
              </button>
            </div>

            {/* Inline Add Document Form */}
            {showAddDoc && (
              <form onSubmit={handleSaveDoc} className="no-print p-4 bg-slate-900 rounded-xl border border-emerald-600/50 space-y-3">
                <div className="text-xs font-bold text-white">Anexar Documento de Soporte</div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Tipo Documento</label>
                    <select
                      value={docType}
                      onChange={e => setDocType(e.target.value as any)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    >
                      <option value="factura">Factura Legal</option>
                      <option value="rucom">Certificado RUCOM</option>
                      <option value="guia_transporte">Guía de Transporte</option>
                      <option value="certificado_lab">Reporte Laboratorio</option>
                      <option value="cuenta_cobro">Cuenta de Cobro</option>
                      <option value="otro">Otro Soporte</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Número de Radicado</label>
                    <input
                      type="text"
                      required
                      value={docNumber}
                      onChange={e => setDocNumber(e.target.value)}
                      placeholder="ej. FE-2025-098"
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Entidad Emisora</label>
                    <input
                      type="text"
                      required
                      value={docEntity}
                      onChange={e => setDocEntity(e.target.value)}
                      placeholder="ej. DIAN / Minería Boyacá"
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Fecha Emisión</label>
                    <input
                      type="date"
                      value={docDate}
                      onChange={e => setDocDate(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowAddDoc(false)} className="px-3 py-1.5 text-xs text-slate-300 bg-slate-800 rounded-lg">Cancelar</button>
                  <button type="submit" className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg">Guardar Anexo</button>
                </div>
              </form>
            )}

            {currentStone.associatedDocuments && currentStone.associatedDocuments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {currentStone.associatedDocuments.map((doc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold uppercase text-[10px] text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
                        {doc.type}
                      </span>
                      <span className="text-[10px] text-slate-400">{doc.issueDate}</span>
                    </div>
                    <div className="font-semibold text-white">{doc.documentNumber}</div>
                    <div className="text-slate-400 text-[11px]">{doc.entityName}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">No hay documentos formales anexados aún para esta pieza.</p>
            )}
          </div>

          {/* Section: Chain of Custody & Movements History */}
          <div className="p-5 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Historial de Custodia y Movimientos ({currentStone.custodyHistory?.length || 0})</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddCustody(!showAddCustody)}
                className="no-print px-2.5 py-1 text-xs font-semibold bg-amber-950/60 hover:bg-amber-900 border border-amber-600/40 text-amber-200 rounded-lg flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Registrar Traslado</span>
              </button>
            </div>

            {/* Inline Add Custody Form */}
            {showAddCustody && (
              <form onSubmit={handleSaveCustody} className="no-print p-4 bg-slate-900 rounded-xl border border-amber-600/50 space-y-3">
                <div className="text-xs font-bold text-white">Registrar Traslado de Custodia</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Entrega (Custodio anterior)</label>
                    <input
                      type="text"
                      required
                      value={transferFrom}
                      onChange={e => setTransferFrom(e.target.value)}
                      placeholder="ej. Bóveda Central"
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Recibe (Nuevo custodio)</label>
                    <input
                      type="text"
                      required
                      value={transferTo}
                      onChange={e => setTransferTo(e.target.value)}
                      placeholder="ej. Maestro Lapidario"
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Motivo / Propósito</label>
                    <select
                      value={transferPurpose}
                      onChange={e => setTransferPurpose(e.target.value as any)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    >
                      <option value="Custodia en Bóveda">Custodia en Bóveda</option>
                      <option value="Envío a Taller de Talla">Envío a Taller de Talla</option>
                      <option value="Consignación Comercial">Consignación Comercial</option>
                      <option value="Inspección de Laboratorio">Inspección de Laboratorio</option>
                      <option value="Venta Definitiva">Venta Definitiva</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Ubicación Física</label>
                    <input
                      type="text"
                      required
                      value={transferLocation}
                      onChange={e => setTransferLocation(e.target.value)}
                      placeholder="ej. Taller La Candelaria Bogotá"
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 text-xs">Observaciones del Traslado</label>
                  <input
                    type="text"
                    value={transferNotes}
                    onChange={e => setTransferNotes(e.target.value)}
                    placeholder="ej. Entrega en sobre sellado para desbaste de culata."
                    className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowAddCustody(false)} className="px-3 py-1.5 text-xs text-slate-300 bg-slate-800 rounded-lg">Cancelar</button>
                  <button type="submit" className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg">Registrar Traslado</button>
                </div>
              </form>
            )}

            {currentStone.custodyHistory && currentStone.custodyHistory.length > 0 ? (
              <div className="space-y-2">
                {currentStone.custodyHistory.map((entry, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{entry.fromParty}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-bold text-emerald-300">{entry.toParty}</span>
                        <span className="text-[10px] text-amber-400 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                          {entry.purpose}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Ubicación: {entry.location} {entry.notes ? `• ${entry.notes}` : ''}
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">No se han registrado traslados de custodia para esta pieza.</p>
            )}
          </div>

          {/* Section: Modification Audit Trail */}
          {currentStone.modificationHistory && currentStone.modificationHistory.length > 0 && (
            <div className="p-5 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-2 no-print">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>Historial de Modificaciones y Auditoría ({currentStone.modificationHistory.length})</span>
              </h3>
              <div className="space-y-1.5 max-h-40 overflow-y-auto">
                {currentStone.modificationHistory.map((log, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-slate-900/60 text-[11px] flex justify-between items-center text-slate-300">
                    <div>
                      <strong className="text-white">{log.action}:</strong> {log.details}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">
                      {new Date(log.date).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Legal Notice at bottom of printable page */}
          <div className="pt-4 border-t border-emerald-950 print:border-slate-300 text-[10px] text-slate-400 print:text-slate-600 leading-tight">
            <p>
              <strong>Aviso Legal y de Identidad Digital:</strong> Este pasaporte digital recopila las características documentadas y declaraciones del registrante en la plataforma ESMERALDA INTELIGENTE JAIRRESTAURA. No constituye título de propiedad legal automático, garantía comercial obligatoria ni reemplaza el dictamen gemológico pericial físico emitido por laboratorios autorizados.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
