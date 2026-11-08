import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  Award, 
  ChevronRight, 
  Clock, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  AlertTriangle, 
  FileText, 
  ExternalLink, 
  Star,
  Compass,
  ArrowRight,
  ArrowLeft,
  Check,
  RotateCcw
} from 'lucide-react';
import { DIPLOMA_MODULES } from '../../data/academy/modules';
import { DiplomaModule, ModuleLesson, QuizQuestion } from '../../types/academy';
import { AcademyStorageService } from '../../services/academyStorage';

interface DiplomaCourseViewerProps {
  onModuleCompleted?: (moduleId: number) => void;
  onRequestCertificate?: () => void;
}

export const DiplomaCourseViewer: React.FC<DiplomaCourseViewerProps> = ({
  onRequestCertificate
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<string>('les-01-01');
  const [activeTab, setActiveTab] = useState<'leccion' | 'estudio_caso' | 'practica' | 'evaluacion' | 'bibliografia'>('leccion');

  // Quiz state for the active module
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScorePercentage, setQuizScorePercentage] = useState<number | null>(null);

  // Active module
  const activeModule: DiplomaModule = DIPLOMA_MODULES.find(m => m.id === selectedModuleId) || DIPLOMA_MODULES[0];
  const activeLesson: ModuleLesson = activeModule.lessons.find(l => l.id === selectedLessonId) || activeModule.lessons[0];

  const progress = AcademyStorageService.getProgress();
  const isLessonCompleted = AcademyStorageService.isLessonCompleted(activeLesson.id);
  const isLessonFavorite = progress.favoriteLessonIds.includes(activeLesson.id);
  const moduleScore = progress.moduleScores[activeModule.id];

  const handleSelectModule = (modId: number) => {
    setSelectedModuleId(modId);
    const mod = DIPLOMA_MODULES.find(m => m.id === modId) || DIPLOMA_MODULES[0];
    if (mod.lessons.length > 0) {
      setSelectedLessonId(mod.lessons[0].id);
    }
    setActiveTab('leccion');
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScorePercentage(null);
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveTab('leccion');
  };

  const handleToggleLessonCompleted = () => {
    const nextState = !isLessonCompleted;
    AcademyStorageService.markLessonCompleted(activeLesson.id, nextState);
  };

  const handleToggleFavorite = () => {
    AcademyStorageService.toggleFavorite(activeLesson.id);
  };

  const handleQuizAnswer = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    activeModule.quiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scorePct = Math.round((correctCount / activeModule.quiz.length) * 100);
    setQuizScorePercentage(scorePct);
    setQuizSubmitted(true);

    // Save to storage
    AcademyStorageService.recordQuizScore(activeModule.id, scorePct);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScorePercentage(null);
  };

  // Find next lesson
  const currentLessonIndex = activeModule.lessons.findIndex(l => l.id === activeLesson.id);
  const nextLesson = activeModule.lessons[currentLessonIndex + 1];
  const prevLesson = activeModule.lessons[currentLessonIndex - 1];

  return (
    <div className="space-y-6">
      {/* 12-Module Track Navigation Bar */}
      <div className="bg-slate-900/90 border border-emerald-900/60 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">
              Plan Curricular — 12 Módulos Especializados (120 Horas Académicas)
            </h3>
            <p className="text-[11px] text-slate-400">
              Selecciona un módulo para explorar sus competencias, lecciones detalladas, caso clínico-gemológico y evaluación.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Módulo actual: <strong>{activeModule.code}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-1.5">
          {DIPLOMA_MODULES.map(m => {
            const isSelected = m.id === selectedModuleId;
            const score = progress.moduleScores[m.id];
            const isPassed = score !== undefined && score >= 80;
            const completedCountInMod = m.lessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
            const isAllLessonsDone = completedCountInMod === m.lessons.length && m.lessons.length > 0;

            return (
              <button
                key={m.id}
                onClick={() => handleSelectModule(m.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl text-center transition-all relative ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-400'
                    : 'bg-slate-800/80 hover:bg-slate-850 text-slate-300 border border-slate-700/60'
                }`}
              >
                {isPassed && (
                  <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-950 p-0.5 rounded-full shadow">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}
                <span className="text-[10px] font-black tracking-tighter opacity-80">{m.code}</span>
                <span className="text-[11px] font-bold line-clamp-1 leading-tight">{m.shortTitle}</span>
                <span className="text-[9px] text-slate-400 mt-0.5">
                  {completedCountInMod}/{m.lessons.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Module Header Overview Card */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-800/60 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-extrabold text-emerald-300 uppercase tracking-wider">
                {activeModule.code} • 10 Horas Académicas
              </span>
              {moduleScore !== undefined && (
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                  moduleScore >= 80 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}>
                  Evaluación: {moduleScore}% {moduleScore >= 80 ? '✓ Aprobado' : 'Por Mejorar'}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-emerald-heading">
              {activeModule.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeModule.overview}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <div className="bg-slate-900/90 border border-emerald-700/50 rounded-2xl p-3.5 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Progreso en este módulo</span>
              <div className="text-xl font-black text-emerald-400 mt-0.5">
                {activeModule.lessons.filter(l => progress.completedLessonIds.includes(l.id)).length} / {activeModule.lessons.length}
                <span className="text-xs text-slate-400 ml-1 font-medium">lecciones</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtabs Navigation within Module */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('leccion')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'leccion'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lecciones Teóricas ({activeModule.lessons.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('estudio_caso')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'estudio_caso'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Caso Clínico-Gemológico</span>
          </button>

          <button
            onClick={() => setActiveTab('practica')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'practica'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Taller Práctico</span>
          </button>

          <button
            onClick={() => setActiveTab('evaluacion')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'evaluacion'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Examen del Módulo ({activeModule.quiz.length} preguntas)</span>
          </button>

          <button
            onClick={() => setActiveTab('bibliografia')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'bibliografia'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Bibliografía Científica</span>
          </button>
        </div>
      </div>

      {/* Main Content Area based on SubTab */}
      {activeTab === 'leccion' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Lesson Navigation List */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-1">
              Contenido del Módulo {activeModule.code}
            </h4>
            <div className="space-y-2">
              {activeModule.lessons.map(lesson => {
                const isSelected = lesson.id === selectedLessonId;
                const isDone = progress.completedLessonIds.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleSelectLesson(lesson.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-emerald-950/70 border-emerald-500 text-white shadow-lg'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-850'
                    }`}
                  >
                    <span className="mt-0.5 shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-500" />
                      )}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 text-[10px] text-slate-400 mb-0.5">
                        <span className="font-bold text-emerald-400">Lección {lesson.order}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {lesson.readTime}
                        </span>
                      </div>
                      <h5 className="text-xs font-extrabold line-clamp-2 leading-tight">
                        {lesson.title}
                      </h5>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-1">
                        {lesson.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Competencies Checklist Box */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-2">
              <h5 className="text-[11px] font-extrabold uppercase text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Competencias a Desarrollar</span>
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeModule.competencies.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span className="text-[11px] leading-relaxed">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Full Lesson Reader */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              {/* Lesson Reader Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <span>{activeModule.code} • Lección {activeLesson.order} de {activeModule.lessons.length}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300">
                      Nivel: {activeLesson.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-emerald-heading">
                    {activeLesson.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleToggleFavorite}
                    className={`p-2.5 rounded-xl border transition-all ${
                      isLessonFavorite
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                    title={isLessonFavorite ? 'En favoritos' : 'Guardar en favoritos'}
                  >
                    <Star className={`w-4 h-4 ${isLessonFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>

                  <button
                    onClick={handleToggleLessonCompleted}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isLessonCompleted
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isLessonCompleted ? 'Lección Completada ✓' : 'Marcar como Completada'}</span>
                  </button>
                </div>
              </div>

              {/* Scientific Formula / Highlight callout if present */}
              {activeLesson.scientificFormula && (
                <div className="bg-emerald-950/40 border border-emerald-700/50 rounded-2xl p-4 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider block">
                      Formulación Cristaloquímica / Parámetro Clave
                    </span>
                    <p className="text-xs sm:text-sm font-mono text-emerald-200 mt-0.5 font-bold">
                      {activeLesson.scientificFormula}
                    </p>
                  </div>
                </div>
              )}

              {/* Lesson Text Body */}
              <div className="prose prose-invert max-w-none text-slate-200 space-y-4 text-xs sm:text-sm leading-relaxed">
                {activeLesson.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4 key={idx} className="text-base sm:text-lg font-black text-emerald-300 pt-3 font-emerald-heading">
                        {paragraph.replace('### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h3 key={idx} className="text-lg sm:text-xl font-black text-amber-300 pt-4 font-emerald-heading">
                        {paragraph.replace('## ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n- ');
                    return (
                      <ul key={idx} className="space-y-1.5 list-disc pl-5 text-slate-300">
                        {items.map((item, i) => (
                          <li key={i} className="leading-relaxed">
                            {item.replace(/^- /, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Key Takeaways Section */}
              {activeLesson.keyTakeaways && activeLesson.keyTakeaways.length > 0 && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase text-amber-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Puntos Científicos y Prácticos Fundamentales</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeLesson.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Lesson Navigation Buttons */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-800">
                {prevLesson ? (
                  <button
                    onClick={() => handleSelectLesson(prevLesson.id)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Lección anterior</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {nextLesson ? (
                  <button
                    onClick={() => handleSelectLesson(nextLesson.id)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-md transition-all"
                  >
                    <span>Siguiente lección</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('evaluacion')}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black shadow-md transition-all"
                  >
                    <span>Tomar Examen del Módulo</span>
                    <Award className="w-4 h-4 text-slate-950" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Tab */}
      {activeTab === 'estudio_caso' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">
                Caso Práctico de Peritaje Gemológico • {activeModule.code}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-emerald-heading">
                {activeModule.caseStudy.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-2">
                <h4 className="text-xs font-black uppercase text-emerald-400">1. Escenario Comercial y Pericial</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModule.caseStudy.scenario}
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-2">
                <h4 className="text-xs font-black uppercase text-emerald-400">2. Análisis Instrumental y Metodología</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModule.caseStudy.gemologicalAnalysis}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Crucial: Diagnostic limitations callout */}
              <div className="bg-rose-950/30 border border-rose-800/60 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-rose-300 text-xs font-extrabold uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>3. Limitaciones Diagnósticas y Salvedades Científicas</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed font-medium">
                  {activeModule.caseStudy.diagnosticLimitations}
                </p>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-800/60 rounded-2xl p-5 space-y-2">
                <h4 className="text-xs font-black uppercase text-emerald-300">4. Conclusión Profesional y Aprendizaje</h4>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  {activeModule.caseStudy.learningOutcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Practical Activity Tab */}
      {activeTab === 'practica' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                Taller Práctico de Formación Técnica • {activeModule.code}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-emerald-heading">
                {activeModule.practicalActivity.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-black uppercase text-amber-400">Instrucciones Paso a Paso</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModule.practicalActivity.instructions}
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-black uppercase text-emerald-400">Entregable o Evidencia de Aprendizaje</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  {activeModule.practicalActivity.deliverable}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-black uppercase text-slate-300">Materiales Requeridos</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeModule.practicalActivity.materialsNeeded.map((mat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-black uppercase text-slate-300">Rúbrica de Autoevaluación</h4>
                <div className="space-y-2">
                  {activeModule.practicalActivity.rubric.map((r, i) => (
                    <div key={i} className="flex items-center justify-between text-xs border-b border-slate-850 pb-1.5">
                      <span className="text-slate-300">{r.criterion}</span>
                      <span className="font-extrabold text-amber-400">{r.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module Quiz Evaluation Tab */}
      {activeTab === 'evaluacion' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                Evaluación Académica de Certificación • {activeModule.code}
              </span>
              <h3 className="text-2xl font-black text-white font-emerald-heading">
                Examen de Conocimientos ({activeModule.quiz.length} Preguntas)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Para aprobar el módulo y acreditar las 10 horas académicas debes obtener al menos el <strong>80% de respuestas correctas</strong>.
              </p>
            </div>

            {quizSubmitted && quizScorePercentage !== null && (
              <div className={`px-5 py-3 rounded-2xl border flex items-center gap-3 ${
                quizScorePercentage >= 80
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                  : 'bg-rose-950/80 border-rose-500 text-rose-200'
              }`}>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold block">Calificación</span>
                  <span className="text-2xl font-black">{quizScorePercentage}%</span>
                </div>
                <div>
                  <span className="text-xs font-bold block">
                    {quizScorePercentage >= 80 ? '¡MÓDULO APROBADO!' : 'NO SUPERADO'}
                  </span>
                  <span className="text-[10px] opacity-80">
                    {quizScorePercentage >= 80 ? '10 Horas Acreditadas' : 'Puedes reintentar el examen'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quiz Questions List */}
          <div className="space-y-6">
            {activeModule.quiz.map((q: QuizQuestion, qIndex: number) => {
              const selectedOpt = quizAnswers[q.id];
              const isCorrect = quizSubmitted && selectedOpt === q.correctAnswer;
              const isWrong = quizSubmitted && selectedOpt !== undefined && selectedOpt !== q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    quizSubmitted
                      ? isCorrect
                        ? 'bg-emerald-950/20 border-emerald-600/70'
                        : isWrong
                        ? 'bg-rose-950/20 border-rose-600/70'
                        : 'bg-slate-950 border-slate-800'
                      : 'bg-slate-950 border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h5 className="text-sm font-extrabold text-white flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">#{qIndex + 1}.</span>
                      <span>{q.question}</span>
                    </h5>
                    {quizSubmitted && (
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                      }`}>
                        {isCorrect ? 'Correcta (+1)' : 'Incorrecta'}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 mt-3">
                    {q.options.map((opt, optIndex) => {
                      const isOptionChosen = selectedOpt === optIndex;
                      const isOptionTheCorrectAnswer = quizSubmitted && optIndex === q.correctAnswer;

                      return (
                        <button
                          key={optIndex}
                          disabled={quizSubmitted}
                          onClick={() => handleQuizAnswer(q.id, optIndex)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 ${
                            isOptionTheCorrectAnswer
                              ? 'bg-emerald-900/40 border-emerald-500 text-white font-bold'
                              : isOptionChosen && !isOptionTheCorrectAnswer && quizSubmitted
                              ? 'bg-rose-950/40 border-rose-500 text-rose-200'
                              : isOptionChosen
                              ? 'bg-emerald-600 text-white font-bold border-emerald-400'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-400">
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span>{opt}</span>
                          </div>
                          {isOptionTheCorrectAnswer && (
                            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Scientific Explanation after submission */}
                  {quizSubmitted && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1">
                      <span className="text-[10px] font-extrabold uppercase text-amber-400 block">
                        Justificación Científica:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {q.explanation}
                      </p>
                      {q.scientificContext && (
                        <p className="text-[11px] text-emerald-300/80 italic mt-1">
                          Nota complementaria: {q.scientificContext}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action buttons for Quiz */}
          <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-800">
            {quizSubmitted ? (
              <div className="flex flex-wrap items-center gap-3 w-full justify-between">
                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reintentar Examen</span>
                </button>

                {quizScorePercentage !== null && quizScorePercentage >= 80 && (
                  <div className="flex items-center gap-2">
                    {selectedModuleId < 12 ? (
                      <button
                        onClick={() => handleSelectModule(selectedModuleId + 1)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-md transition-all"
                      >
                        <span>Avanzar al Módulo {selectedModuleId + 1}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={onRequestCertificate}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black shadow-md transition-all"
                      >
                        <Award className="w-4 h-4 text-slate-950" />
                        <span>Generar Diploma de 120 Horas</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(quizAnswers).length < activeModule.quiz.length}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-black shadow-lg shadow-emerald-950/60 transition-all"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Calificar Respuestas del Módulo</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Bibliography Tab */}
      {activeTab === 'bibliografia' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                Fuentes Bibliográficas y Literatura Indexada • {activeModule.code}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-emerald-heading">
                Referencias Académicas Verificables
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            {activeModule.bibliography.map((bib, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-white">
                    {bib.author} ({bib.year}). <span className="text-emerald-300 italic">"{bib.title}"</span>.
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {bib.publication}
                  </div>
                </div>
                {bib.doiOrUrl && (
                  <a
                    href={bib.doiOrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-300 transition-all shrink-0"
                    title="Consultar fuente"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
