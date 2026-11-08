import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Layers, 
  ExternalLink, 
  Download, 
  Upload, 
  RotateCcw, 
  ShieldCheck, 
  Clock, 
  Compass, 
  BookA, 
  FileCheck,
  Building2,
  Check,
  AlertCircle
} from 'lucide-react';
import { DiplomaCourseViewer } from './DiplomaCourseViewer';
import { AtlasViewer } from './AtlasViewer';
import { GlossaryViewer } from './GlossaryViewer';
import { CertificateGenerator } from './CertificateGenerator';
import { CertificateValidator } from './CertificateValidator';
import { FinalExamSimulator } from './FinalExamSimulator';
import { AcademyStorageService } from '../../services/academyStorage';
import { StudentProgress } from '../../types/academy';

export const EmeraldAcademy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diplomado' | 'examen_final' | 'atlas' | 'glosario' | 'certificado' | 'verificar' | 'biblioteca'>('diplomado');
  const [progress, setProgress] = useState<StudentProgress>(AcademyStorageService.getProgress());
  const [importNotification, setImportNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleProgressUpdate = (e: any) => {
      setProgress(e.detail || AcademyStorageService.getProgress());
    };

    window.addEventListener('jairrestaura:progress-updated', handleProgressUpdate);
    return () => {
      window.removeEventListener('jairrestaura:progress-updated', handleProgressUpdate);
    };
  }, []);

  const overallStats = AcademyStorageService.calculateOverallProgress(48);

  const handleExportBackup = () => {
    AcademyStorageService.exportProgressBackup();
  };

  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text) {
        const result = AcademyStorageService.importProgressBackup(text);
        if (result.success) {
          setProgress(AcademyStorageService.getProgress());
          setImportNotification({ type: 'success', message: result.message });
        } else {
          setImportNotification({ type: 'error', message: result.message });
        }
        setTimeout(() => setImportNotification(null), 5000);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleResetProgress = () => {
    if (window.confirm('¿Deseas reiniciar tu progreso académico? Se borrarán las lecciones marcadas y calificaciones locales.')) {
      AcademyStorageService.resetProgress();
      setProgress(AcademyStorageService.getProgress());
    }
  };

  // Institutional resources
  const institutionalResources = [
    {
      institution: 'CDTEC — Centro de Desarrollo Tecnológico de la Esmeralda',
      description: 'El laboratorio gemológico de referencia en Colombia. Certificación científica de origen geográfico, tratamientos de claridad y espectroscopía FTIR.',
      url: 'https://cdtec.com.co',
      category: 'Laboratorio & Certificación Nacional'
    },
    {
      institution: 'GIA — Gemological Institute of America',
      description: 'Publicaciones y artículos de investigación indexados en Gems & Gemology sobre génesis y microscopía de esmeraldas colombianas.',
      url: 'https://www.gia.edu/gems-gemology',
      category: 'Investigación Gemológica Mundial'
    },
    {
      institution: 'Fedesmeraldas — Federación Nacional de Esmeraldas',
      description: 'Entidad gremial colombiana que agrupa a productores, comercializadores y exportadores. Promotora de formalización y sostenibilidad.',
      url: 'https://fedesmeraldas.org',
      category: 'Gremio & Desarrollo Sostenible'
    },
    {
      institution: 'ANM — Agencia Nacional de Minería',
      description: 'Autoridad minera estatal que gestiona los títulos de concesión, el catastro Anna Minería y el registro RUCOM en Colombia.',
      url: 'https://www.anm.gov.co',
      category: 'Normatividad & Legalidad Minera'
    },
    {
      institution: 'CIBJO — The World Jewellery Confederation',
      description: 'El "Libro Azul de Gemas" (Gemstone Blue Book) con las normas internacionales de divulgación obligatoria de tratamientos.',
      url: 'https://cibjo.org',
      category: 'Estándares Internacionales'
    },
    {
      institution: 'SGC — Servicio Geológico Colombiano',
      description: 'Cartografía geológica, memorias explicativas de la Cordillera Oriental y modelos estructurales de los cinturones esmeraldíferos.',
      url: 'https://www.sgc.gov.co',
      category: 'Ciencias de la Tierra & Geología'
    },
    {
      institution: 'Mindat.org — Base de Datos Mineralógica Mundial',
      description: 'Fichas cristaloquímicas de berilo, especies tipo descubiertas en Colombia (como parisita-(Ce) de Muzo) y localidades mineras.',
      url: 'https://www.mindat.org/min-1375.html',
      category: 'Mineralogía & Cristalografía'
    },
    {
      institution: 'Smithsonian National Gem Collection',
      description: 'Archivo fotográfico y documentación de especímenes históricos colombianos, como la esmeralda Gachalá de 858 quilates.',
      url: 'https://naturalhistory.si.edu/research/mineral-sciences/collections-overview/gem-collection',
      category: 'Museos & Historia Mineral'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hidden file input for progress import */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />

      {/* Import feedback banner */}
      {importNotification && (
        <div className={`p-4 rounded-2xl flex items-center justify-between gap-3 text-xs font-bold transition-all ${
          importNotification.type === 'success'
            ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-200'
            : 'bg-rose-950/80 border border-rose-500 text-rose-200'
        }`}>
          <div className="flex items-center gap-2">
            {importNotification.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400" />
            )}
            <span>{importNotification.message}</span>
          </div>
          <button onClick={() => setImportNotification(null)} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>
      )}

      {/* Top Banner: Master Academy Header */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-800/80 bg-gradient-to-r from-emerald-950 via-slate-950 to-emerald-950 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-600/50 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CENTRO COLOMBIANO DE FORMACIÓN GEMOLÓGICA • 100% GRATUITO • SIN REGISTRO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white font-emerald-heading tracking-tight">
              ACADEMIA ESMERALDERA <span className="text-emerald-400">JAIRRESTAURA</span>
            </h1>

            <p className="text-sm sm:text-base text-emerald-200/90 italic font-emerald-heading">
              "DIPLOMADO EN GEMOLOGÍA, GEOLOGÍA, IDENTIFICACIÓN, TALLA Y COMERCIALIZACIÓN DE LA ESMERALDA COLOMBIANA"
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              120 horas académicas distribuidas en 12 módulos de excelencia científica, atlas visual de inclusiones microscópicas, glosario con más de 150 términos, literatura indexada y <strong>Certificado Oficial Descargable en PDF y HD PNG</strong> editable para cada estudiante.
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('certificado')}
              className="flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-extrabold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl shadow-lg shadow-amber-950/60 transition-all active:scale-95 border border-amber-300"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Emitir Diploma 120H (PDF/PNG)</span>
            </button>

            <button
              onClick={() => setActiveTab('verificar')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/60 rounded-xl transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Validador Público de Serial</span>
            </button>
          </div>
        </div>

        {/* Real-time Student Progress Bar */}
        <div className="mt-6 pt-5 border-t border-emerald-900/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Progreso Académico: {overallStats.percentage}% completado</span>
              </span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-emerald-300 font-semibold">
                {overallStats.passedModules} de 12 módulos aprobados (≥80%)
              </span>
            </div>

            {/* Backup export/import buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportBackup}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] font-semibold text-slate-300 border border-slate-700 transition-all"
                title="Exportar copia de seguridad de tu progreso en JSON"
              >
                <Download className="w-3 h-3 text-emerald-400" />
                <span>Guardar Progreso</span>
              </button>

              <button
                onClick={handleImportClick}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] font-semibold text-slate-300 border border-slate-700 transition-all"
                title="Cargar copia de seguridad previa de progreso"
              >
                <Upload className="w-3 h-3 text-amber-400" />
                <span>Restaurar</span>
              </button>

              <button
                onClick={handleResetProgress}
                className="p-1 rounded-lg bg-slate-900 hover:bg-rose-950/50 text-slate-400 hover:text-rose-400 border border-slate-700 transition-all"
                title="Reiniciar progreso académico"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Graphical Progress Bar */}
          <div className="w-full h-3 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 transition-all duration-500"
              style={{ width: `${Math.max(5, overallStats.percentage)}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Navigation Sub-Tabs */}
      <div className="flex border-b border-slate-800 overflow-x-auto no-print gap-1">
        <button
          onClick={() => setActiveTab('diplomado')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'diplomado'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Diplomado 12 Módulos (120H)</span>
        </button>

        <button
          onClick={() => setActiveTab('examen_final')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'examen_final'
              ? 'border-amber-400 text-amber-300 bg-amber-950/30 font-extrabold'
              : 'border-transparent text-amber-400/80 hover:text-amber-300'
          }`}
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>Examen Final (50 Preguntas)</span>
        </button>

        <button
          onClick={() => setActiveTab('atlas')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'atlas'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Atlas Científico & Inclusiones</span>
        </button>

        <button
          onClick={() => setActiveTab('glosario')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'glosario'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookA className="w-4 h-4" />
          <span>Glosario Exhaustivo (150+ Términos)</span>
        </button>

        <button
          onClick={() => setActiveTab('certificado')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'certificado'
              ? 'border-amber-400 text-amber-300 bg-amber-950/30 font-extrabold'
              : 'border-transparent text-amber-400/80 hover:text-amber-300'
          }`}
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>Certificado Editable PDF / PNG</span>
        </button>

        <button
          onClick={() => setActiveTab('verificar')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'verificar'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Validador de Serial</span>
        </button>

        <button
          onClick={() => setActiveTab('biblioteca')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'biblioteca'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Enlaces & Entidades Oficiales</span>
        </button>
      </div>

      {/* Tab 1: 12-Module Diploma Viewer */}
      {activeTab === 'diplomado' && (
        <DiplomaCourseViewer
          onRequestCertificate={() => setActiveTab('certificado')}
        />
      )}

      {/* Tab: Final Exam Simulator (50 Questions) */}
      {activeTab === 'examen_final' && (
        <FinalExamSimulator
          onExamPassed={() => setProgress(AcademyStorageService.getProgress())}
          onNavigateToCertificate={() => setActiveTab('certificado')}
        />
      )}

      {/* Tab 2: Scientific Atlas Viewer */}
      {activeTab === 'atlas' && (
        <AtlasViewer />
      )}

      {/* Tab 3: 150+ Terms Comprehensive Glossary */}
      {activeTab === 'glosario' && (
        <GlossaryViewer />
      )}

      {/* Tab 4: Downloadable and Editable Certificate Generator */}
      {activeTab === 'certificado' && (
        <CertificateGenerator defaultStudentName={progress.studentName || 'Estudiante Egresado'} />
      )}

      {/* Tab 5: Public Certificate Validator */}
      {activeTab === 'verificar' && (
        <CertificateValidator initialSerial={progress.diplomaSerial || ''} />
      )}

      {/* Tab 6: Curated Institutional Library */}
      {activeTab === 'biblioteca' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-emerald-900/60 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                <Building2 className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                Fuentes Primarias & Red Científica
              </span>
            </div>
            <h2 className="text-2xl font-black text-white font-emerald-heading">
              Directorio de Entidades, Laboratorios y Literatura Oficial
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Enlaces directos y verificables a las instituciones rectoras de la gemología, minería y normalización internacional. Sin inventar enlaces ni atribuciones falsas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {institutionalResources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/90 border border-slate-800 hover:border-emerald-500/80 rounded-3xl p-6 shadow-xl transition-all flex flex-col justify-between space-y-4 hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-850 border border-slate-700 text-emerald-300">
                      {res.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-emerald-300 transition-colors font-emerald-heading">
                    {res.institution}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400/90 flex items-center gap-1 group-hover:underline">
                  <span>{res.url}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
