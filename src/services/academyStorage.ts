import { StudentProgress } from '../types/academy';

const STORAGE_KEY = 'jairrestaura_student_progress_v2';

const DEFAULT_PROGRESS: StudentProgress = {
  studentName: '',
  studentIdNumber: '',
  completedLessonIds: [],
  moduleScores: {},
  favoriteLessonIds: [],
  finalExamScore: undefined,
  finalExamPassed: false,
  finalExamDate: undefined,
  finalExamAnswers: {},
  effectiveHoursCompleted: 0,
  diplomaSerial: undefined,
  diplomaIssueDate: undefined,
  lastUpdated: new Date().toISOString()
};

export class AcademyStorageService {
  static getProgress(): StudentProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        return DEFAULT_PROGRESS;
      }
      const parsed = JSON.parse(data);
      const passedModulesCount = Object.values(parsed.moduleScores || {}).filter((s: any) => Number(s) >= 80).length;
      const effectiveHours = Math.min(120, passedModulesCount * 10);

      return { 
        ...DEFAULT_PROGRESS, 
        ...parsed,
        effectiveHoursCompleted: effectiveHours 
      };
    } catch (e) {
      console.error('Error reading student progress', e);
      return DEFAULT_PROGRESS;
    }
  }

  static saveProgress(progress: Partial<StudentProgress>): StudentProgress {
    try {
      const current = this.getProgress();
      const newModuleScores = progress.moduleScores !== undefined ? progress.moduleScores : current.moduleScores;
      const passedModulesCount = Object.values(newModuleScores || {}).filter((s: any) => Number(s) >= 80).length;
      const effectiveHours = Math.min(120, passedModulesCount * 10);

      const updated: StudentProgress = {
        ...current,
        ...progress,
        effectiveHoursCompleted: effectiveHours,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('jairrestaura:progress-updated', { detail: updated }));
      return updated;
    } catch (e) {
      console.error('Error saving student progress', e);
      return this.getProgress();
    }
  }

  static markLessonCompleted(lessonId: string, completed = true): StudentProgress {
    const current = this.getProgress();
    const set = new Set(current.completedLessonIds);
    if (completed) {
      set.add(lessonId);
    } else {
      set.delete(lessonId);
    }
    return this.saveProgress({ completedLessonIds: Array.from(set) });
  }

  static isLessonCompleted(lessonId: string): boolean {
    const current = this.getProgress();
    return current.completedLessonIds.includes(lessonId);
  }

  static toggleFavorite(lessonId: string): boolean {
    const current = this.getProgress();
    const set = new Set(current.favoriteLessonIds);
    const isFav = set.has(lessonId);
    if (isFav) {
      set.delete(lessonId);
    } else {
      set.add(lessonId);
    }
    this.saveProgress({ favoriteLessonIds: Array.from(set) });
    return !isFav;
  }

  static recordQuizScore(moduleId: number, score: number): StudentProgress {
    const current = this.getProgress();
    const prevScore = current.moduleScores[moduleId] || 0;
    // Keep best score
    const newScores = {
      ...current.moduleScores,
      [moduleId]: Math.max(prevScore, score)
    };
    return this.saveProgress({ moduleScores: newScores });
  }

  static recordFinalExamScore(score: number, passed: boolean, answers?: Record<string, number>, serial?: string): StudentProgress {
    const current = this.getProgress();
    const generatedSerial = serial || current.diplomaSerial || `ACAD-DIP-${Math.floor(100000 + Math.random() * 900000)}`;
    const issueDate = new Date().toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return this.saveProgress({
      finalExamScore: Math.max(current.finalExamScore || 0, score),
      finalExamPassed: current.finalExamPassed || passed,
      finalExamDate: issueDate,
      finalExamAnswers: answers || current.finalExamAnswers,
      diplomaSerial: passed ? generatedSerial : current.diplomaSerial,
      diplomaIssueDate: passed ? issueDate : current.diplomaIssueDate
    });
  }

  static calculateOverallProgress(totalLessonsCount = 72): {
    percentage: number;
    completedLessons: number;
    passedModules: number;
    effectiveHours: number;
    averageScore: number;
    isEligibleForDiploma: boolean;
    finalExamPassed: boolean;
  } {
    const current = this.getProgress();
    const completedLessons = current.completedLessonIds.length;
    const percentage = Math.min(100, Math.round((completedLessons / Math.max(1, totalLessonsCount)) * 100));
    
    const passedModules = Object.values(current.moduleScores).filter(s => s >= 80).length;
    const effectiveHours = Math.min(120, passedModules * 10);
    const scores = Object.values(current.moduleScores);
    const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    
    // Eligible for full diploma if 12 modules passed with >= 80 and/or final exam passed with >= 80
    const isEligibleForDiploma = (passedModules >= 10 || current.finalExamPassed === true);

    return {
      percentage,
      completedLessons,
      passedModules,
      effectiveHours,
      averageScore,
      isEligibleForDiploma,
      finalExamPassed: !!current.finalExamPassed
    };
  }

  static exportProgressBackup(): void {
    const current = this.getProgress();
    const payload = {
      platform: 'ESMERALDA INTELIGENTE JAIRRESTAURA — ACADEMIA',
      program: 'DIPLOMADO EN GEMOLOGÍA, GEOLOGÍA, IDENTIFICACIÓN, TALLA Y COMERCIALIZACIÓN DE LA ESMERALDA COLOMBIANA',
      academicHoursProgrammed: 120,
      effectiveHoursCompleted: current.effectiveHoursCompleted,
      exportedAt: new Date().toISOString(),
      studentProgress: current
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `progreso_academia_jairrestaura_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  static importProgressBackup(jsonString: string): { success: boolean; message: string } {
    try {
      const data = JSON.parse(jsonString);
      if (!data || typeof data !== 'object') {
        return { success: false, message: 'El archivo no contiene un formato JSON válido.' };
      }

      const progress = data.studentProgress || data;
      if (Array.isArray(progress.completedLessonIds) || typeof progress.moduleScores === 'object') {
        this.saveProgress({
          studentName: progress.studentName || '',
          studentIdNumber: progress.studentIdNumber || '',
          completedLessonIds: Array.isArray(progress.completedLessonIds) ? progress.completedLessonIds : [],
          moduleScores: typeof progress.moduleScores === 'object' ? progress.moduleScores : {},
          favoriteLessonIds: Array.isArray(progress.favoriteLessonIds) ? progress.favoriteLessonIds : [],
          finalExamScore: progress.finalExamScore,
          finalExamPassed: progress.finalExamPassed,
          finalExamDate: progress.finalExamDate,
          finalExamAnswers: progress.finalExamAnswers || {},
          diplomaSerial: progress.diplomaSerial,
          diplomaIssueDate: progress.diplomaIssueDate
        });
        return { success: true, message: '¡Progreso académico restaurado exitosamente!' };
      }

      return { success: false, message: 'La estructura de datos de progreso no coincide con la esperada.' };
    } catch (e: any) {
      return { success: false, message: `Error al leer archivo: ${e.message}` };
    }
  }

  static resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('jairrestaura:progress-updated', { detail: DEFAULT_PROGRESS }));
  }
}
