import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  FileCheck,
  ChevronRight,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { FINAL_EXAM_BANK, TOTAL_EXAM_QUESTIONS, PASSING_SCORE_PERCENTAGE, EXAM_DURATION_MINUTES } from '../../data/academy/finalExam';
import { FinalExamQuestion } from '../../types/academy';
import { AcademyStorageService } from '../../services/academyStorage';

interface FinalExamSimulatorProps {
  onExamPassed?: () => void;
  onNavigateToCertificate?: () => void;
}

export const FinalExamSimulator: React.FC<FinalExamSimulatorProps> = ({
  onExamPassed,
  onNavigateToCertificate
}) => {
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examFinished, setExamFinished] = useState<boolean>(false);
  const [selectedQuestions, setSelectedQuestions] = useState<FinalExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(EXAM_DURATION_MINUTES * 60);
  const [timerActive, setTimerActive] = useState<boolean>(true);
  const [showExplanations, setShowExplanations] = useState<boolean>(false);
  const [filterReview, setFilterReview] = useState<'all' | 'incorrect' | 'correct'>('all');

  const progress = AcademyStorageService.getProgress();
  const previousScore = progress.finalExamScore;
  const previousPassed = progress.finalExamPassed;

  // Initialize randomized exam of 50 questions
  const startNewExam = () => {
    // Shuffle and pick 50
    const shuffled = [...FINAL_EXAM_BANK].sort(() => 0.5 - Math.random());
    const subset = shuffled.slice(0, TOTAL_EXAM_QUESTIONS);
    setSelectedQuestions(subset);
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeLeftSeconds(EXAM_DURATION_MINUTES * 60);
    setTimerActive(true);
    setExamStarted(true);
    setExamFinished(false);
    setShowExplanations(false);
  };

  // Timer countdown
  useEffect(() => {
    if (!examStarted || examFinished || !timerActive) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examFinished, timerActive]);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (examFinished) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const finishExam = () => {
    setExamFinished(true);
    setTimerActive(false);

    // Compute score
    let correct = 0;
    selectedQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    const percentage = Math.round((correct / selectedQuestions.length) * 100);
    const passed = percentage >= PASSING_SCORE_PERCENTAGE;

    // Record in storage
    AcademyStorageService.recordFinalExamScore(percentage, passed, userAnswers);

    if (passed && onExamPassed) {
      onExamPassed();
    }
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateCurrentScore = () => {
    let correct = 0;
    selectedQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: selectedQuestions.length,
      percentage: Math.round((correct / selectedQuestions.length) * 100)
    };
  };

  // Screen 1: Exam Intro / Readiness Check
  if (!examStarted) {
    return (
      <div className="space-y-6">
        <div className="bg-slate-900/90 border border-emerald-900/60 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300">
                  <Award className="w-5 h-5 text-amber-400" />
                </span>
                <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">
                  Evaluación de Grado & Certificación Integral
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-emerald-heading">
                Examen Final Integrador del Diplomado
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Prueba estandarizada de <strong>50 preguntas de selección múltiple</strong> que evalúa las competencias científicas, mineralógicas, geológicas, lapidarias, comerciales y normativas de los <strong>12 módulos</strong> del Diplomado Esmeraldero.
              </p>
            </div>

            {previousPassed && (
              <div className="px-4 py-3 rounded-2xl bg-emerald-950/70 border border-emerald-600/50 flex items-center gap-3 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-emerald-300 block">Examen Aprobado</span>
                  <span className="text-sm font-black text-white">Calificación: {previousScore}%</span>
                </div>
              </div>
            )}
          </div>

          {/* Key Parameters Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-400" /> Total Preguntas
              </span>
              <p className="text-xl font-black text-white">50 Reactivos</p>
              <p className="text-[10px] text-slate-400">Banco aleatorio de 12 módulos</p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> Tiempo Límite
              </span>
              <p className="text-xl font-black text-amber-300">90 Minutos</p>
              <p className="text-[10px] text-slate-400">Cronómetro con alerta visual</p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Umbral de Aprobación
              </span>
              <p className="text-xl font-black text-emerald-300">80% Mínimo</p>
              <p className="text-[10px] text-slate-400">40 aciertos sobre 50 preguntas</p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" /> Reintentos
              </span>
              <p className="text-xl font-black text-white">Ilimitados</p>
              <p className="text-[10px] text-slate-400">100% Gratuito y formativo</p>
            </div>
          </div>

          {/* Academic Guidelines List */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Instrucciones y Rigor Científico del Examen</span>
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Las preguntas se seleccionan aleatoriamente de los 12 módulos para garantizar una evaluación equilibrada.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Cada pregunta posee una única respuesta correcta respaldada por publicaciones indexadas (GIA, SGC, CIBJO, LMHC).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Al terminar la prueba recibirás una retroalimentación científica pormenorizada con las citas bibliográficas de cada ítem.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span>Aprobar el examen con 80% o más acredita tu diplomado y te habilita para generar tu Certificado Oficial con QR.</span>
              </li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button
              onClick={startNewExam}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-black shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Award className="w-5 h-5 text-amber-300" />
              <span>{previousPassed ? 'Volver a Presentar el Examen (Práctica)' : 'Comenzar Examen Final (50 Preguntas)'}</span>
            </button>

            {previousPassed && onNavigateToCertificate && (
              <button
                onClick={onNavigateToCertificate}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-extrabold flex items-center justify-center gap-2 border border-amber-500/30 transition-all"
              >
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span>Ver y Descargar Mi Diploma Certificado</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Screen 2: Active Exam Test Runner
  if (!examFinished) {
    const currentQ = selectedQuestions[currentIndex];
    const answeredCount = Object.keys(userAnswers).length;
    const progressPercent = Math.round((answeredCount / selectedQuestions.length) * 100);

    return (
      <div className="space-y-6">
        {/* Exam Navigation & Timer Top Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono">
                Pregunta {currentIndex + 1} de {selectedQuestions.length}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[10px] text-slate-300 font-semibold">
                {currentQ.category} • {currentQ.moduleCode}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-sm font-black transition-colors ${
                timeLeftSeconds < 600
                  ? 'bg-rose-950/70 border-rose-500/70 text-rose-300 animate-pulse'
                  : 'bg-slate-950 border-slate-700 text-amber-300'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeLeftSeconds)}</span>
              </div>

              <button
                onClick={finishExam}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black shadow-md transition-all"
              >
                Finalizar y Calificar
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Respondidas: {answeredCount} de {selectedQuestions.length}</span>
              <span>Progreso: {progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed font-emerald-heading">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = userAnswers[currentQ.id] === optIdx;

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(currentQ.id, optIdx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Question Carousel Controls */}
          <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-950 text-slate-600'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            {/* Quick question jumping badges */}
            <div className="hidden md:flex items-center gap-1 overflow-x-auto max-w-md py-1">
              {selectedQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = userAnswers[q.id] !== undefined;

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold shrink-0 transition-all ${
                      isCurrent
                        ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-400'
                        : isAnswered
                        ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-800/80'
                        : 'bg-slate-950 text-slate-500 border border-slate-800'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {currentIndex < selectedQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(selectedQuestions.length - 1, prev + 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black shadow-md transition-all"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black shadow-md transition-all"
              >
                <span>Finalizar Examen</span>
                <Check className="w-4 h-4 text-slate-950" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Screen 3: Exam Results & Detailed Scientific Review
  const result = calculateCurrentScore();
  const passed = result.percentage >= PASSING_SCORE_PERCENTAGE;

  const filteredQuestions = selectedQuestions.filter(q => {
    const isCorrect = userAnswers[q.id] === q.correctAnswer;
    if (filterReview === 'correct') return isCorrect;
    if (filterReview === 'incorrect') return !isCorrect;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Result Hero Banner */}
      <div className={`border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 transition-all ${
        passed
          ? 'bg-gradient-to-br from-emerald-950/90 via-slate-900 to-teal-950/80 border-emerald-600/60'
          : 'bg-gradient-to-br from-rose-950/80 via-slate-900 to-slate-950 border-rose-800/60'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`p-1.5 rounded-lg ${passed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>
                {passed ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <XCircle className="w-6 h-6 text-rose-400" />}
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                Resultado Oficial del Examen Integrador
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-emerald-heading">
              {passed ? '¡Felicitaciones! Has Aprobado el Examen Final' : 'Examen No Aprobado (Requiere Repaso)'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {passed
                ? 'Has demostrado dominio riguroso y competencias avanzadas en los 12 módulos del diplomado. Tu acreditación académica ya está registrada en la plataforma.'
                : 'El umbral mínimo de aprobación es del 80% (40 aciertos). Revisa las retroalimentaciones científicas a continuación y presenta el examen nuevamente cuando desees sin costo alguno.'}
            </p>
          </div>

          {/* Score Badge */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 text-center shrink-0 min-w-[200px] space-y-1">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Puntaje Obtenido</span>
            <div className={`text-4xl font-black font-mono ${passed ? 'text-emerald-400' : 'text-rose-400'}`}>
              {result.percentage}%
            </div>
            <p className="text-xs text-slate-300 font-semibold">
              {result.correct} de {result.total} correctas
            </p>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              passed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
            }`}>
              {passed ? 'Acreditado con Excelencia' : 'No Superó el 80%'}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={startNewExam}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 border border-slate-700 transition-all"
          >
            <RotateCcw className="w-4 h-4 text-emerald-400" />
            <span>Presentar Nuevo Intento</span>
          </button>

          {passed && onNavigateToCertificate && (
            <button
              onClick={onNavigateToCertificate}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-black shadow-lg shadow-emerald-950/50 flex items-center gap-2 transition-all"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Ver y Descargar Mi Diploma Oficial</span>
            </button>
          )}

          <button
            onClick={() => setShowExplanations(!showExplanations)}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold border border-amber-500/30 flex items-center gap-2 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>{showExplanations ? 'Ocultar Justificaciones Científicas' : 'Ver Justificaciones Científicas y Citas'}</span>
          </button>
        </div>
      </div>

      {/* Filter and Detailed Question by Question Review */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-emerald-heading">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            <span>Revisión Detallada de Respuestas ({selectedQuestions.length} reactivos)</span>
          </h3>

          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setFilterReview('all')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                filterReview === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todas ({selectedQuestions.length})
            </button>
            <button
              onClick={() => setFilterReview('correct')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                filterReview === 'correct' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-slate-400 hover:text-emerald-300'
              }`}
            >
              Correctas ({result.correct})
            </button>
            <button
              onClick={() => setFilterReview('incorrect')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                filterReview === 'incorrect' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'text-slate-400 hover:text-rose-300'
              }`}
            >
              Incorrectas ({result.total - result.correct})
            </button>
          </div>
        </div>

        {/* Question cards list */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className={`bg-slate-900 border rounded-2xl p-5 sm:p-6 shadow-md space-y-4 transition-all ${
                  isCorrect ? 'border-slate-800' : 'border-rose-900/60 bg-rose-950/20'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {isCorrect ? 'CORRECTA ✓' : 'INCORRECTA ✗'}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">
                        {q.category} • {q.moduleCode}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white pt-1">
                      {q.question}
                    </h4>
                  </div>
                </div>

                {/* Options display */}
                <div className="space-y-2">
                  {q.options.map((option, optIdx) => {
                    const isUserChoice = userAnswer === optIdx;
                    const isCorrectAnswer = q.correctAnswer === optIdx;

                    let optionStyle = 'bg-slate-950/60 border-slate-800 text-slate-400';
                    if (isCorrectAnswer) {
                      optionStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-100 font-medium';
                    } else if (isUserChoice && !isCorrectAnswer) {
                      optionStyle = 'bg-rose-950/70 border-rose-500 text-rose-200';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${optionStyle}`}
                      >
                        <span className="font-mono font-black shrink-0">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span className="leading-relaxed flex-1">{option}</span>
                        {isCorrectAnswer && (
                          <span className="text-[10px] font-bold text-emerald-400 shrink-0">
                            Respuesta Correcta
                          </span>
                        )}
                        {isUserChoice && !isCorrectAnswer && (
                          <span className="text-[10px] font-bold text-rose-400 shrink-0">
                            Tu Elección
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Scientific Explanation & Citation */}
                {(showExplanations || !isCorrect) && (
                  <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[10px]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Justificación Científica</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {q.explanation}
                    </p>
                    <div className="pt-1 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold">Fuente:</span>
                      <span>{q.scientificReference}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
