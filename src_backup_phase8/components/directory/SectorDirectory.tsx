import React, { useState } from 'react';
import { DirectoryProfile } from '../../types';
import { 
  BookOpen, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  Plus, 
  CheckCircle2, 
  Filter, 
  Building2, 
  User, 
  X,
  ShieldCheck
} from 'lucide-react';
import { StorageService } from '../../services/storage';

interface SectorDirectoryProps {
  directory: DirectoryProfile[];
}

export const SectorDirectory: React.FC<SectorDirectoryProps> = ({ directory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('todos');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Profile Form State
  const [commercialName, setCommercialName] = useState('');
  const [category, setCategory] = useState<DirectoryProfile['category']>('Comerciante');
  const [city, setCity] = useState('Bogotá D.C.');
  const [department, setDepartment] = useState('Cundinamarca');
  const [description, setDescription] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [servicesInput, setServicesInput] = useState('Comercialización, Asesoría');

  const filtered = directory.filter(profile => {
    const matchSearch = 
      profile.commercialName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchCategory = categoryFilter === 'todos' || profile.category === categoryFilter;

    return matchSearch && matchCategory;
  });

  const handleRegisterProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commercialName.trim() || !contactPerson.trim()) {
      alert('Por favor completa el nombre comercial y la persona de contacto.');
      return;
    }

    const newProfile: DirectoryProfile = {
      id: `DIR-${Date.now()}`,
      commercialName: commercialName.trim(),
      category,
      city: city.trim(),
      department: department.trim(),
      description: description.trim() || 'Servicios especializados en el sector esmeraldero.',
      contactPerson: contactPerson.trim(),
      phone: phone.trim() || undefined,
      email: email.trim() || undefined,
      address: address.trim() || undefined,
      services: servicesInput.split(',').map(s => s.trim()).filter(Boolean),
      verified: true
    };

    StorageService.addDirectoryProfile(newProfile);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            Directorio del Sector Esmeraldero
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Red abierta de comerciantes, talladores, gemólogos, talleres y productores formalizados de Colombia
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Publicar mi Perfil (100% Gratis)</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="p-4 bg-slate-900 border border-emerald-950 rounded-2xl flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre comercial, ciudad (Bogotá, Muzo...), servicio..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
        >
          <option value="todos">Todas las Categorías</option>
          <option value="Comerciante">Comerciantes</option>
          <option value="Taller de Lapidación">Talleres de Lapidación</option>
          <option value="Tallador">Talladores</option>
          <option value="Gemólogo">Gemólogos / Laboratorios</option>
          <option value="Joyería">Joyerías</option>
          <option value="Productor / Minero">Productores / Mineros</option>
        </select>
      </div>

      {/* Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(profile => (
          <div
            key={profile.id}
            className="bg-slate-900 border border-emerald-950 hover:border-emerald-800/80 p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-lg transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold uppercase">
                  {profile.category}
                </span>
                {profile.verified && (
                  <span className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verificado
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white font-emerald-heading line-clamp-1">
                {profile.commercialName}
              </h3>
              
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{profile.city}, {profile.department}</span>
              </p>

              <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                {profile.description}
              </p>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {profile.services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-medium"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Details Footer */}
            <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="text-slate-300">{profile.contactPerson}</span>
              </div>
              {profile.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href={`tel:${profile.phone}`} className="text-emerald-300 hover:underline">{profile.phone}</a>
                </div>
              )}
              {profile.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-white truncate">{profile.email}</a>
                </div>
              )}
              {profile.address && (
                <p className="text-[11px] text-slate-500 truncate pt-1">{profile.address}</p>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Add Profile Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-900 rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-emerald-heading">Publicar Perfil en el Directorio</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400">
              La publicación es 100% gratuita y sin cobro de comisiones. Fomentamos la visibilidad del gremio esmeraldero formal.
            </p>

            <form onSubmit={handleRegisterProfile} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Comercial o de Taller *</label>
                <input
                  type="text"
                  required
                  value={commercialName}
                  onChange={e => setCommercialName(e.target.value)}
                  placeholder="ej. Taller Lapidario Los Chaflanes"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Categoría</label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="Comerciante">Comerciante</option>
                    <option value="Taller de Lapidación">Taller de Lapidación</option>
                    <option value="Tallador">Tallador</option>
                    <option value="Gemólogo">Gemólogo / Lab</option>
                    <option value="Joyería">Joyería</option>
                    <option value="Productor / Minero">Productor / Minero</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Ciudad *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Bogotá D.C., Muzo, Chivor..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Persona de Contacto *</label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={e => setContactPerson(e.target.value)}
                    placeholder="Nombre y Apellidos"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+57 310 123 4567"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Correo Electrónico Comercial</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="contacto@mitaller.com"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Descripción y Especialidad</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Experiencia, tipos de tallas, certificados con los que trabajan..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Servicios (separados por coma)</label>
                <input
                  type="text"
                  value={servicesInput}
                  onChange={e => setServicesInput(e.target.value)}
                  placeholder="Talla esmeralda, Retalla, Venta mayorista, Certificación"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg"
                >
                  Publicar en Directorio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
