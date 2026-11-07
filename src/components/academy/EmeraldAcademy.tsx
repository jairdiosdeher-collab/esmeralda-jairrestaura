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
  Info 
} from 'lucide-react';
import { ACADEMY_LESSONS, GLOSSARY_TERMS, ACADEMY_QUIZ } from '../../data/sampleData';

export const EmeraldAcademy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lecciones' | 'glosario' | 'quiz'>('lecciones');
  const [selectedLessonId, setSelectedLessonId] = useState<string>(ACADEMY_LESSONS[0].id);
  const [glossarySearch, setGlossarySearch] = useState('');
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const activeLesson = ACADEMY_LESSONS.find(l => l.id === selectedLessonId) || ACADEMY_LESSONS[0];

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
      
      {/* Top Banner */}
      <div className="pb-4 border-b border-emerald-950">
        <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-emerald-400" />
          Academia Esmeraldera Colombiana
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Biblioteca formativa gratuita sobre geología, inclusiones trifásicas, cortes, tratamientos y comercio ético
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800">
        <button
          onClick={() => setActiveTab('lecciones')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
            activeTab === 'lecciones'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Guías & Lecciones ({ACADEMY_LESSONS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('glosario')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
            activeTab === 'glosario'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Glosario Técnico ({GLOSSARY_TERMS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
            activeTab === 'quiz'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Evaluación de Conocimiento</span>
        </button>
      </div>

      {/* Tab 1: Lessons */}
      {activeTab === 'lecciones' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Lesson List (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {ACADEMY_LESSONS.map(lesson => {
              const isSelected = selectedLessonId === lesson.id;
              return (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-lg'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                    {lesson.category} • {lesson.readTime}
                  </span>
                  <h3 className="text-sm font-bold text-white font-emerald-heading mb-1">
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {lesson.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Lesson Content (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900 border border-emerald-950 p-6 sm:p-8 rounded-2xl space-y-5">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-[10px] font-bold text-emerald-300 uppercase">
                {activeLesson.category}
              </span>
              <h2 className="text-2xl font-bold text-white font-emerald-heading mt-3">
                {activeLesson.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1">Tiempo de lectura estimado: {activeLesson.readTime}</p>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line border-t border-slate-800 pt-5">
              {activeLesson.content}
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-emerald-950 text-xs text-slate-400 flex items-start gap-2">
              <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Los contenidos de la Academia Esmeraldera son de acceso universal y gratuito para fomentar la cultura y la excelencia del gremio esmeraldero colombiano.
              </span>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Glossary */}
      {activeTab === 'glosario' && (
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={glossarySearch}
              onChange={e => setGlossarySearch(e.target.value)}
              placeholder="Buscar término (Berilo, Jardín, CDTEC, Chaflán...)"
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((g, idx) => (
              <div key={idx} className="p-4 bg-slate-900 border border-emerald-950 rounded-xl space-y-1.5">
                <h4 className="text-sm font-bold text-emerald-300 font-emerald-heading flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {g.term}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{g.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Quiz */}
      {activeTab === 'quiz' && (
        <div className="max-w-3xl mx-auto space-y-6 bg-slate-900 border border-emerald-950 p-6 sm:p-8 rounded-2xl">
          <div className="text-center space-y-2">
            <Award className="w-10 h-10 text-amber-400 mx-auto" />
            <h2 className="text-xl font-bold text-white font-emerald-heading">
              Evaluación de Conocimiento Gemológico
            </h2>
            <p className="text-xs text-slate-400">
              Pon a prueba tus conocimientos sobre formación, inclusiones y tratamientos de la esmeralda colombiana
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-800">
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
                          optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                        }
                      } else if (isOptionSelected) {
                        optionStyle = 'bg-emerald-950 border-emerald-500 text-white';
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
                    <div className="p-3 bg-slate-900/80 rounded-lg text-xs text-slate-300 border border-slate-800">
                      <strong>Explicación:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            {quizSubmitted ? (
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Tu puntuación:</span>
                <span className="text-emerald-400 font-mono text-base font-black">
                  {calculateScore()} / {ACADEMY_QUIZ.length}
                </span>
                <span className="text-xs text-slate-400">
                  ({Math.round((calculateScore() / ACADEMY_QUIZ.length) * 100)}%)
                </span>
              </div>
            ) : (
              <span className="text-xs text-slate-400">Responde todas las preguntas para calificar</span>
            )}

            <div className="flex gap-2">
              {quizSubmitted ? (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-xl"
                >
                  Reiniciar Cuestionario
                </button>
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
