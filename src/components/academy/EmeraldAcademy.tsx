import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Award, 
  Layers, 
  Info,
  ExternalLink,
  Download,
  Printer,
  ChevronRight,
  Filter,
  Eye,
  ShieldCheck,
  MapPin,
  Clock,
  Compass
} from 'lucide-react';
import { 
  ACADEMY_LESSONS, 
  GLOSSARY_TERMS, 
  ACADEMY_QUIZ, 
  VISUAL_CATALOG_ITEMS 
} from '../../data/sampleData';
import { CertificateGenerator } from './CertificateGenerator';

export const EmeraldAcademy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lecciones' | 'catalogo' | 'certificado' | 'glosario' | 'quiz'>('lecciones');
  const [selectedLessonId, setSelectedLessonId] = useState<string>(ACADEMY_LESSONS[0].id);
  const [catalogCategory, setCatalogCategory] = useState<string>('todos');
  const [glossarySearch, setGlossarySearch] = useState('');
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const activeLesson = ACADEMY_LESSONS.find(l => l.id === selectedLessonId) || ACADEMY_LESSONS[0];

  const filteredCatalog = VISUAL_CATALOG_ITEMS.filter(item => {
    return catalogCategory === 'todos' || item.category === catalogCategory;
  });

  const filteredGlossary = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const calculateScore = () => {
    let score = 0;
    ACADEMY_QUIZ.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="space-y-6">
      
      {/* Top Prominent Academy Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-800/80 bg-gradient-to-r from-emerald-950 via-slate-950 to-emerald-950 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-600/50 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>NÚCLEO EDUCATIVO PRINCIPAL — 100% GRATUITO — ACREDITACIÓN OFICIAL</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white font-emerald-heading tracking-tight">
              ACADEMIA ESMERALDERA <span className="text-emerald-400">JAIRRESTAURA</span>
            </h1>

            <p className="text-sm sm:text-base text-emerald-200/90 italic font-emerald-heading">
              "El epicentro del saber gemológico, científico, lapidario y comercial de la esmeralda colombiana."
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Cursos exhaustivos, atlas visual de yacimientos e inclusiones microscópicas, enlaces a instituciones oficiales (CDTEC, GIA, Fedesmeraldas, ANM, CIBJO) y <strong>Certificado Oficial Descargable en PDF</strong> editable para cada estudiante.
            </p>
          </div>

          {/* Quick Certificate CTA Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('certificado')}
              className="flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-extrabold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl shadow-lg shadow-amber-950/60 transition-all active:scale-95 border border-amber-300"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Obtener mi Certificado PDF</span>
            </button>

            <button
              onClick={() => setActiveTab('catalogo')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/60 rounded-xl transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Atlas de Yacimientos & Fotos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs Bar */}
      <div className="flex border-b border-slate-800 overflow-x-auto no-print">
        <button
          onClick={() => setActiveTab('lecciones')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'lecciones'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Lecciones Científicas ({ACADEMY_LESSONS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('catalogo')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'catalogo'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Catálogo Visual & Atlas ({VISUAL_CATALOG_ITEMS.length})</span>
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
          <span className="flex items-center gap-1">
            Certificado Oficial PDF
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping"></span>
          </span>
        </button>

        <button
          onClick={() => setActiveTab('glosario')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'glosario'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Glosario Gemológico ({GLOSSARY_TERMS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'quiz'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/30 font-extrabold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Evaluación de Conocimiento</span>
        </button>
      </div>

      {/* Tab 1: Comprehensive Scientific Lessons */}
      {activeTab === 'lecciones' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Lessons List Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 block mb-1">
              Programa de Formación Gemológica:
            </span>

            {ACADEMY_LESSONS.map((lesson, idx) => {
              const isSelected = selectedLessonId === lesson.id;
              return (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-emerald-950/90 border-emerald-500 text-white shadow-xl shadow-emerald-950/60'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold text-emerald-400 mb-1">
                    <span>Módulo {idx + 1} • {lesson.difficulty}</span>
                    <span className="text-slate-500">{lesson.readTime}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-emerald-heading mb-1 leading-snug">
                    {lesson.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {lesson.summary}
                  </p>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-emerald-400 font-semibold pt-1 border-t border-slate-800/60">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> Ver contenido completo
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'rotate-90' : ''} transition-transform`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Lesson Reader (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900/95 border border-emerald-950 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl">
            
            {/* Lesson Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-900/60 aspect-[21/9] bg-slate-950">
              <img 
                src={activeLesson.heroImage} 
                alt={activeLesson.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-900/90 border border-emerald-600/50 text-[10px] font-bold text-emerald-300 uppercase">
                    {activeLesson.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-600/50 text-[10px] font-bold text-amber-300 uppercase">
                    Nivel: {activeLesson.difficulty}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 text-[10px] text-slate-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {activeLesson.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white font-emerald-heading">
                  {activeLesson.title}
                </h2>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 font-emerald-heading">
                <Sparkles className="w-4 h-4 text-amber-400" /> Puntos Clave del Módulo
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeLesson.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Lesson Content with Markdown Styling */}
            <div className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-4 border-t border-slate-800 pt-4">
              {activeLesson.content}
            </div>

            {/* Lesson Gallery */}
            {activeLesson.gallery && activeLesson.gallery.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Fotografía & Micrografía de Estudio:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeLesson.gallery.map((img, i) => (
                    <div key={i} className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                      <img src={img.url} alt={img.caption} className="w-full aspect-[4/3] object-cover" />
                      <p className="p-2 text-[11px] text-slate-400 italic text-center">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Institutional External Links for Further Study */}
            {activeLesson.externalLinks && activeLesson.externalLinks.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-emerald-950">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-emerald-heading">
                    <ExternalLink className="w-4 h-4" /> Fuentes & Referencias Oficiales Recomendadas
                  </h4>
                  <span className="text-[10px] text-slate-500">Documentación Externa Acreditada</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {activeLesson.externalLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-emerald-600 rounded-xl transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {link.title}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[9px] font-bold uppercase">
                            {link.institution}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0 transition-colors mt-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Next/Cert Navigation */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                ¿Has asimilado este tema? Continúa tu formación o genera tu diploma.
              </span>
              <button
                onClick={() => setActiveTab('certificado')}
                className="px-4 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl flex items-center gap-1.5 shadow-md transition-all"
              >
                <Award className="w-4 h-4" />
                <span>Generar Certificado de Acreditación</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* Tab 2: Visual Catalog & Field Guide */}
      {activeTab === 'catalogo' && (
        <div className="space-y-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-900 border border-emerald-950 rounded-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filtrar Atlas:
              </span>
              {[
                { id: 'todos', label: 'Todos los Catálogos' },
                { id: 'yacimientos', label: 'Yacimientos y Minas' },
                { id: 'inclusiones', label: 'Atlas de Inclusiones' },
                { id: 'tallas', label: 'Tallas & Cortes' },
                { id: 'tratamientos', label: 'Tratamientos & Claridad' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCatalogCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                    catalogCategory === cat.id
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-400">
              {filteredCatalog.length} fichas de campo catalogadas
            </span>
          </div>

          {/* Catalog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCatalog.map(item => (
              <div
                key={item.id}
                className="bg-slate-900 border border-emerald-950 hover:border-emerald-700/60 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group transition-all"
              >
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-600/50 text-[10px] font-bold text-emerald-300 uppercase">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/50 text-[10px] font-bold text-amber-300">
                    {item.originOrType}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-white font-emerald-heading group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Technical Specs List */}
                  <div className="space-y-1.5 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-baseline text-[11px]">
                        <span className="text-slate-400">{spec.label}:</span>
                        <span className="font-semibold text-slate-200 text-right ml-2">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* External Reference if exists */}
                  {item.externalReference && (
                    <a
                      href={item.externalReference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 hover:text-emerald-300 flex items-center justify-between font-semibold"
                    >
                      <span>Más información en {item.externalReference.institution}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Tab 3: Official Student Certificate Generator */}
      {activeTab === 'certificado' && (
        <div className="space-y-6">
          <CertificateGenerator />
        </div>
      )}

      {/* Tab 4: Technical Glossary with Search */}
      {activeTab === 'glosario' && (
        <div className="space-y-5">
          <div className="p-4 bg-slate-900 border border-emerald-950 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={glossarySearch}
                onChange={e => setGlossarySearch(e.target.value)}
                placeholder="Buscar término (Berilo, Jardín, CDTEC, Chaflán, FTIR...)"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <span className="text-xs text-slate-400">
              Mostrando {filteredGlossary.length} de {GLOSSARY_TERMS.length} términos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGlossary.map((g, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-slate-900 border border-emerald-950 hover:border-emerald-800/80 rounded-2xl space-y-2 shadow-lg transition-all"
              >
                <h4 className="text-sm font-bold text-emerald-300 font-emerald-heading flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  {g.term}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{g.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Academic Knowledge Quiz */}
      {activeTab === 'quiz' && (
        <div className="max-w-3xl mx-auto space-y-6 bg-slate-900 border border-emerald-950 p-6 sm:p-8 rounded-2xl shadow-2xl">
          <div className="text-center space-y-2 pb-4 border-b border-slate-800">
            <Award className="w-10 h-10 text-amber-400 mx-auto" />
            <h2 className="text-xl font-bold text-white font-emerald-heading">
              Evaluación Oficial de Conocimiento Gemológico
            </h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Responde las preguntas de rigor técnico sobre génesis sedimentaria, inclusiones trifásicas, pleocroísmo y tratamientos para validar tu acreditación.
            </p>
          </div>

          <div className="space-y-6">
            {ACADEMY_QUIZ.map((q, idx) => {
              const selectedOpt = quizAnswers[q.id];
              const isCorrect = selectedOpt === q.correctAnswer;

              return (
                <div key={q.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-white font-emerald-heading">
                    {idx + 1}. {q.question}
                  </h3>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const isOptionSelected = selectedOpt === oIdx;
                      let optionStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

                      if (quizSubmitted) {
                        if (oIdx === q.correctAnswer) {
                          optionStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                        }
                      } else if (isOptionSelected) {
                        optionStyle = 'bg-emerald-950 border-emerald-500 text-white font-semibold';
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: oIdx })}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-colors flex items-center justify-between ${optionStyle}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && oIdx === q.correctAnswer && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                          {quizSubmitted && isOptionSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="p-3 bg-slate-900/90 rounded-lg text-xs text-slate-300 border border-slate-800 leading-relaxed">
                      <strong className="text-emerald-400">Explicación técnica:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            {quizSubmitted ? (
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Calificación obtenida:</span>
                <span className="text-amber-400 font-mono text-base font-black">
                  {calculateScore()} / {ACADEMY_QUIZ.length}
                </span>
                <span className="text-xs text-slate-400">
                  ({Math.round((calculateScore() / ACADEMY_QUIZ.length) * 100)}%)
                </span>
              </div>
            ) : (
              <span className="text-xs text-slate-400">
                Responde las {ACADEMY_QUIZ.length} preguntas para calificar
              </span>
            )}

            <div className="flex gap-2">
              {quizSubmitted ? (
                <>
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-xl"
                  >
                    Reiniciar Evaluación
                  </button>
                  <button
                    onClick={() => setActiveTab('certificado')}
                    className="px-4 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl flex items-center gap-1.5 shadow-md"
                  >
                    <Award className="w-4 h-4" />
                    <span>Emitir mi Diploma PDF</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < ACADEMY_QUIZ.length}
                  className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl shadow-lg"
                >
                  Calificar Respuestas
                </button>
              )}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
