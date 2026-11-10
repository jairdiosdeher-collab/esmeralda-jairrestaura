import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  Gem, 
  QrCode, 
  Scale, 
  Briefcase, 
  Hammer, 
  Bot, 
  GraduationCap, 
  BookOpen, 
  Download, 
  Upload, 
  Menu, 
  X, 
  PlusCircle,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { StorageService } from '../../services/storage';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onNewEmerald: () => void;
  onOpenPassportLookup: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onNewEmerald,
  onOpenPassportLookup
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then(() => {
        setInstallPrompt(null);
      });
    } else {
      alert('Para instalar ESMERALDA INTELIGENTE JAIRRESTAURA en tu teléfono o PC, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a pantalla de inicio".');
    }
  };

  const navItems = [
    { id: 'academia', label: 'Academia & Diploma PDF', icon: GraduationCap, highlight: true },
    { id: 'inicio', label: 'Inicio', icon: Gem },
    { id: 'inventario', label: 'Inventario', icon: Gem },
    { id: 'pasaporte', label: 'Pasaporte QR', icon: QrCode },
    { id: 'valoracion', label: 'Valoración IA', icon: Scale },
    { id: 'comercio', label: 'Comercio', icon: Briefcase },
    { id: 'taller', label: 'Taller & Talla', icon: Hammer },
    { id: 'ai', label: 'Asistentes IA', icon: Bot },
    { id: 'directorio', label: 'Directorio', icon: BookOpen },
  ];

  const handleBackupExport = () => {
    StorageService.exportFullBackup();
    setImportStatus('Respaldo descargado exitosamente');
    setTimeout(() => setImportStatus(null), 3000);
  };

  const handleCsvExport = () => {
    StorageService.exportEmeraldsCsv();
    setImportStatus('Inventario CSV exportado');
    setTimeout(() => setImportStatus(null), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = StorageService.importBackup(content);
      setImportStatus(res.message);
      if (res.success) {
        setTimeout(() => {
          setShowBackupModal(false);
          setImportStatus(null);
        }, 1500);
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      {/* Top Banner of Free Guarantee */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 border-b border-emerald-800/40 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium text-emerald-200 flex items-center justify-center gap-2 tracking-wide no-print">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span className="font-bold text-amber-300">PLATAFORMA 100% GRATUITA</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">SIN REGISTRO OBLIGATORIO</span>
        <span>•</span>
        <span>TODAS LAS HERRAMIENTAS GEMOLÓGICAS DISPONIBLES</span>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-emerald-950/80 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo */}
            <div 
              onClick={() => onSelectTab('inicio')} 
              className="cursor-pointer hover:opacity-95 transition-opacity"
            >
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = currentTab === item.id;
                const isHighlight = (item as any).highlight;

                if (isHighlight) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectTab(item.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                        active
                          ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 border border-amber-300 ring-2 ring-amber-400/40'
                          : 'bg-amber-950/40 text-amber-300 border border-amber-500/60 hover:bg-amber-900/50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${active ? 'text-slate-950' : 'text-amber-400'}`} />
                      <span>{item.label}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectTab(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      active
                        ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${active ? 'text-emerald-400' : 'text-slate-400'}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onNewEmerald}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/40 transition-all active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Nueva Esmeralda</span>
              </button>

              <button
                onClick={() => setShowBackupModal(true)}
                title="Respaldo y descarga de datos"
                className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-emerald-800/60 rounded-xl transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span className="hidden md:inline">Respaldo</span>
              </button>

              <button
                onClick={handleInstallClick}
                title="Instalar como aplicación PWA"
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-amber-300 bg-amber-950/30 border border-amber-800/40 hover:bg-amber-900/40 rounded-xl transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>PWA</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-emerald-950 bg-slate-950/98 px-4 py-4 space-y-1 shadow-2xl">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      active
                        ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-500/50'
                        : 'text-slate-300 bg-slate-900/50 border border-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Datos en tu dispositivo
              </span>
              <button
                onClick={() => {
                  setShowBackupModal(true);
                  setMobileMenuOpen(false);
                }}
                className="text-amber-300 font-semibold underline"
              >
                Descargar copia
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Backup and Data Management Modal */}
      {showBackupModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in no-print">
          <div className="relative w-full max-w-lg p-6 bg-slate-900 border border-emerald-900/80 rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowBackupModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-emerald-heading">Gestión de Copias y Respaldo</h3>
                <p className="text-xs text-slate-400">Tus datos se guardan de forma privada en tu navegador</p>
              </div>
            </div>

            {importStatus && (
              <div className="mb-4 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-200">
                {importStatus}
              </div>
            )}

            <div className="space-y-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Download className="w-4 h-4 text-emerald-400" /> Exportar Respaldo Completo (JSON)
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  Descarga un archivo con todo tu inventario, órdenes de trabajo, cotizaciones y directorio para guardarlo de forma segura o transferirlo a otro equipo.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleBackupExport}
                    className="flex-1 py-2 px-3 text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Descargar JSON
                  </button>
                  <button
                    onClick={handleCsvExport}
                    className="py-2 px-3 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    CSV Inventario
                  </button>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Upload className="w-4 h-4 text-amber-400" /> Restaurar Copia de Seguridad
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  Carga un archivo de respaldo previo para restaurar todos tus registros.
                </p>
                <label className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold bg-amber-900/40 hover:bg-amber-900/60 text-amber-200 border border-amber-700/50 rounded-lg cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Seleccionar archivo .JSON</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="pt-2 flex justify-between items-center text-[11px] text-slate-500">
                <span>Almacenamiento Local Seguro</span>
                <button
                  onClick={() => {
                    if (confirm('¿Deseas recargar los datos de muestra iniciales del sector esmeraldero?')) {
                      StorageService.resetToDefault();
                      setShowBackupModal(false);
                      window.location.reload();
                    }
                  }}
                  className="text-slate-400 hover:text-amber-400 underline"
                >
                  Restablecer datos de muestra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
