import React, { useState, useEffect } from 'react';
import { EmeraldStone, StoneStatus, CommercialStatus, ColombianOrigin, TreatmentType, CutShape } from '../../types';
import { X, Gem, Camera, ShieldCheck, AlertCircle } from 'lucide-react';

interface EmeraldFormModalProps {
  isOpen: boolean;
  stoneToEdit?: EmeraldStone | null;
  onClose: () => void;
  onSave: (stone: EmeraldStone) => { success: boolean; message?: string };
}

export const EmeraldFormModal: React.FC<EmeraldFormModalProps> = ({
  isOpen,
  stoneToEdit,
  onClose,
  onSave
}) => {
  const [formData, setFormData] = useState<Partial<EmeraldStone>>({
    id: '',
    reference: '',
    status: 'tallado',
    commercialStatus: 'disponible',
    origin: 'Muzo (Boyacá)',
    weightCarats: 1.0,
    weightGrams: 0.2,
    dimensions: { lengthMm: 7.0, widthMm: 5.5, depthMm: 3.8 },
    colorTone: 'Verde Muzo profundo',
    saturation: 'Muy Intensa',
    transparency: 'Fina Transparente',
    inclusions: 'Inclusiones trifásicas diagnósticas colombianas visibles bajo lupa 10x.',
    treatment: 'aceite_menor',
    cutShape: 'Octagonal (Talla Esmeralda)',
    cutQuality: 'Muy Buena',
    certificateNumber: '',
    certificateLab: 'CDTEC (Bogotá)',
    acquisitionDate: new Date().toISOString().split('T')[0],
    acquisitionCostCop: 0,
    acquisitionCostUsd: 0,
    estimatedPriceCop: 0,
    estimatedPriceUsd: 0,
    location: 'Bóveda Principal Bogotá',
    ownerName: '',
    photos: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'],
    notes: ''
  });

  const [photoInput, setPhotoInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (stoneToEdit) {
      setFormData(stoneToEdit);
    } else {
      // Auto-generate fresh ID
      const randomSuffix = Math.floor(100 + Math.random() * 900);
      setFormData({
        id: `EMR-${new Date().getFullYear()}-${randomSuffix}`,
        reference: '',
        status: 'tallado',
        commercialStatus: 'disponible',
        origin: 'Muzo (Boyacá)',
        weightCarats: 1.5,
        weightGrams: 0.3,
        dimensions: { lengthMm: 7.5, widthMm: 6.0, depthMm: 4.2 },
        colorTone: 'Verde Muzo profundo aterciopelado',
        saturation: 'Muy Intensa',
        transparency: 'Fina Transparente',
        inclusions: 'Inclusiones trifásicas típicas colombianas con cristales de calcita.',
        treatment: 'aceite_menor',
        cutShape: 'Octagonal (Talla Esmeralda)',
        cutQuality: 'Muy Buena',
        certificateNumber: '',
        certificateLab: 'CDTEC (Bogotá)',
        acquisitionDate: new Date().toISOString().split('T')[0],
        acquisitionCostCop: 0,
        acquisitionCostUsd: 0,
        estimatedPriceCop: 0,
        estimatedPriceUsd: 0,
        location: 'Bóveda Principal Bogotá',
        ownerName: 'Comercializadora / Minero',
        photos: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'],
        notes: ''
      });
    }
    setErrorMessage(null);
  }, [stoneToEdit, isOpen]);

  if (!isOpen) return null;

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const carats = parseFloat(e.target.value) || 0;
    setFormData(prev => ({
      ...prev,
      weightCarats: carats,
      weightGrams: parseFloat((carats * 0.2).toFixed(4))
    }));
  };

  const handleAddPhoto = () => {
    if (!photoInput.trim()) return;
    setFormData(prev => ({
      ...prev,
      photos: [...(prev.photos || []), photoInput.trim()]
    }));
    setPhotoInput('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setFormData(prev => ({
        ...prev,
        photos: [base64, ...(prev.photos || [])]
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.id?.trim()) {
      setErrorMessage('El código de identificación es obligatorio.');
      return;
    }
    if (!formData.reference?.trim()) {
      setErrorMessage('El nombre o referencia de la piedra es obligatorio.');
      return;
    }
    if (!formData.weightCarats || formData.weightCarats <= 0) {
      setErrorMessage('El peso en quilates debe ser mayor a 0.');
      return;
    }

    const finalStone: EmeraldStone = {
      ...(formData as EmeraldStone),
      id: formData.id.trim(),
      reference: formData.reference.trim(),
      photos: formData.photos && formData.photos.length > 0 
        ? formData.photos 
        : ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'],
      createdAt: formData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const res = onSave(finalStone);
    if (!res.success) {
      setErrorMessage(res.message || 'Error al guardar la esmeralda');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-emerald-800/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-emerald-900/60">
          <div className="flex items-center gap-2">
            <Gem className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white font-emerald-heading">
              {stoneToEdit ? 'Editar Esmeralda' : 'Registrar Nueva Esmeralda'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
          
          {errorMessage && (
            <div className="p-3 bg-rose-950/60 border border-rose-500/50 rounded-xl text-xs text-rose-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Section 1: Identification & General Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              1. Identificación y Estado
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Código Único *
                </label>
                <input
                  type="text"
                  required
                  value={formData.id || ''}
                  onChange={e => setFormData({ ...formData, id: e.target.value.toUpperCase() })}
                  placeholder="ej. EMR-2025-001"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm font-mono text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nombre o Referencia Comercial *
                </label>
                <input
                  type="text"
                  required
                  value={formData.reference || ''}
                  onChange={e => setFormData({ ...formData, reference: e.target.value })}
                  placeholder="ej. Verde Fino Muzo Imperial"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Estado Físico
                </label>
                <select
                  value={formData.status}
                  onChange={e => setFormData({ ...formData, status: e.target.value as StoneStatus })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="tallado">Tallado (Faceteada/Cabuchón)</option>
                  <option value="en_bruto">En Bruto (Cristal Natural)</option>
                  <option value="engastado">Engastado en Joya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Estado Comercial
                </label>
                <select
                  value={formData.commercialStatus}
                  onChange={e => setFormData({ ...formData, commercialStatus: e.target.value as CommercialStatus })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="disponible">Disponible</option>
                  <option value="reservado">Reservado</option>
                  <option value="en_talla">En Talla / Taller</option>
                  <option value="vendido">Vendido</option>
                  <option value="coleccion">Colección Privada</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Yacimiento / Procedencia
                </label>
                <select
                  value={formData.origin}
                  onChange={e => setFormData({ ...formData, origin: e.target.value as ColombianOrigin })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Muzo (Boyacá)">Muzo (Boyacá)</option>
                  <option value="Chivor (Boyacá)">Chivor (Boyacá)</option>
                  <option value="Coscuez (Boyacá)">Coscuez (Boyacá)</option>
                  <option value="Gachalá (Cundinamarca)">Gachalá (Cundinamarca)</option>
                  <option value="Peñas Blancas (Boyacá)">Peñas Blancas (Boyacá)</option>
                  <option value="Maripí (Boyacá)">Maripí (Boyacá)</option>
                  <option value="San Pablo de Borbur">San Pablo de Borbur</option>
                  <option value="Otanche">Otanche</option>
                  <option value="Colombia (Sin especificar yacimiento)">Colombia (Sin especificar)</option>
                  <option value="Otro origen documentado">Otro origen</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Weight & Dimensions */}
          <div className="space-y-4 pt-3 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              2. Peso y Dimensiones
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Peso Quilates (ct) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.weightCarats || ''}
                  onChange={handleWeightChange}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm font-bold text-emerald-300 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Peso Gramos (g)
                </label>
                <input
                  type="number"
                  disabled
                  value={formData.weightGrams || ''}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-400"
                />
              </div>

              <div className="col-span-2 grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-400 mb-1">Largo (mm)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.dimensions?.lengthMm || ''}
                    onChange={e => setFormData({
                      ...formData,
                      dimensions: { ...(formData.dimensions || { lengthMm: 0, widthMm: 0, depthMm: 0 }), lengthMm: parseFloat(e.target.value) || 0 }
                    })}
                    className="w-full px-2 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-1">Ancho (mm)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.dimensions?.widthMm || ''}
                    onChange={e => setFormData({
                      ...formData,
                      dimensions: { ...(formData.dimensions || { lengthMm: 0, widthMm: 0, depthMm: 0 }), widthMm: parseFloat(e.target.value) || 0 }
                    })}
                    className="w-full px-2 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-1">Profundidad</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.dimensions?.depthMm || ''}
                    onChange={e => setFormData({
                      ...formData,
                      dimensions: { ...(formData.dimensions || { lengthMm: 0, widthMm: 0, depthMm: 0 }), depthMm: parseFloat(e.target.value) || 0 }
                    })}
                    className="w-full px-2 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Gemological Quality */}
          <div className="space-y-4 pt-3 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              3. Características Gemológicas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Talla / Forma
                </label>
                <select
                  value={formData.cutShape}
                  onChange={e => setFormData({ ...formData, cutShape: e.target.value as CutShape })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Octagonal (Talla Esmeralda)">Octagonal (Talla Esmeralda)</option>
                  <option value="Gota / Pera">Gota / Pera</option>
                  <option value="Cojín (Cushion)">Cojín (Cushion)</option>
                  <option value="Oval">Oval</option>
                  <option value="Redonda / Brillante">Redonda / Brillante</option>
                  <option value="Marquesa">Marquesa</option>
                  <option value="Trillón">Trillón</option>
                  <option value="Cabuchón">Cabuchón</option>
                  <option value="Trapiche">Trapiche</option>
                  <option value="Bruto natural / Cristal">Bruto natural / Cristal</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Transparencia
                </label>
                <select
                  value={formData.transparency}
                  onChange={e => setFormData({ ...formData, transparency: e.target.value as any })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Extra Fina Cristalina">Extra Fina Cristalina</option>
                  <option value="Fina Transparente">Fina Transparente</option>
                  <option value="Semitransparente">Semitransparente</option>
                  <option value="Translúcida">Translúcida</option>
                  <option value="Opaca">Opaca</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Tratamiento Declarado
                </label>
                <select
                  value={formData.treatment}
                  onChange={e => setFormData({ ...formData, treatment: e.target.value as TreatmentType })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="sin_tratar">Sin Tratamiento (No Oil)</option>
                  <option value="aceite_menor">Aceite de Cedro Menor (Minor)</option>
                  <option value="aceite_moderado">Aceite de Cedro Moderado (Moderate)</option>
                  <option value="aceite_significativo">Aceite Significativo</option>
                  <option value="resina_polimero">Resina / Polímero Artificial</option>
                  <option value="no_determinado">No Determinado</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Color y Tonalidad
                </label>
                <input
                  type="text"
                  value={formData.colorTone || ''}
                  onChange={e => setFormData({ ...formData, colorTone: e.target.value })}
                  placeholder="ej. Verde Muzo profundo con destellos azulados"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Inclusiones ("Jardín")
                </label>
                <input
                  type="text"
                  value={formData.inclusions || ''}
                  onChange={e => setFormData({ ...formData, inclusions: e.target.value })}
                  placeholder="ej. Inclusiones trifásicas diagnósticas, calcita..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Certification & Commerce */}
          <div className="space-y-4 pt-3 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              4. Certificación y Valores
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Laboratorio Certificador
                </label>
                <input
                  type="text"
                  value={formData.certificateLab || ''}
                  onChange={e => setFormData({ ...formData, certificateLab: e.target.value })}
                  placeholder="ej. CDTEC (Bogotá), GIA, Ninguno"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Número de Certificado
                </label>
                <input
                  type="text"
                  value={formData.certificateNumber || ''}
                  onChange={e => setFormData({ ...formData, certificateNumber: e.target.value })}
                  placeholder="ej. CDTEC-78241"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Ubicación Física
                </label>
                <input
                  type="text"
                  value={formData.location || ''}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                  placeholder="ej. Bóveda Central Bogotá"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Costo Compra (COP)
                </label>
                <input
                  type="number"
                  value={formData.acquisitionCostCop || ''}
                  onChange={e => setFormData({ ...formData, acquisitionCostCop: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Costo Compra (USD)
                </label>
                <input
                  type="number"
                  value={formData.acquisitionCostUsd || ''}
                  onChange={e => setFormData({ ...formData, acquisitionCostUsd: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Precio Estimado (COP)
                </label>
                <input
                  type="number"
                  value={formData.estimatedPriceCop || ''}
                  onChange={e => setFormData({ ...formData, estimatedPriceCop: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-emerald-300 font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Precio Estimado (USD)
                </label>
                <input
                  type="number"
                  value={formData.estimatedPriceUsd || ''}
                  onChange={e => setFormData({ ...formData, estimatedPriceUsd: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-emerald-300 font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Photos & Notes */}
          <div className="space-y-4 pt-3 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              5. Fotografías y Notas
            </h3>

            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="url"
                  value={photoInput}
                  onChange={e => setPhotoInput(e.target.value)}
                  placeholder="URL de foto o usa el botón para subir desde tu dispositivo..."
                  className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddPhoto}
                  className="px-3 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-xl"
                >
                  Agregar URL
                </button>
                <label className="px-3 py-2 text-xs font-semibold bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 rounded-xl cursor-pointer flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Subir</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {formData.photos && formData.photos.length > 0 && (
                <div className="flex gap-2 overflow-x-auto p-2 bg-slate-950 rounded-xl border border-slate-800">
                  {formData.photos.map((p, index) => (
                    <div key={index} className="relative group shrink-0">
                      <img src={p} alt={`Foto ${index}`} className="w-16 h-16 object-cover rounded-lg border border-slate-700" />
                      <button
                        type="button"
                        onClick={() => setFormData({
                          ...formData,
                          photos: formData.photos?.filter((_, idx) => idx !== index)
                        })}
                        className="absolute -top-1 -right-1 bg-rose-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Notas Privadas y Observaciones
                </label>
                <textarea
                  rows={2}
                  value={formData.notes || ''}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Notas de adquisición, detalles del tallado o historial de propietarios..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-xl"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40"
            >
              {stoneToEdit ? 'Guardar Cambios' : 'Registrar en Inventario'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
