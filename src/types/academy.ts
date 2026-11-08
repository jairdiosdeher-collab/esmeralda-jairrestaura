/**
 * ESMERALDA INTELIGENTE JAIRRESTAURA
 * Tipos de datos para la Academia Esmeraldera y el Diplomado de 120 Horas
 * Auditoría Científica & Consolidación Curricular
 */

import { ExternalReferenceLink } from './index';

export type AcademicDifficulty = 'Iniciación' | 'Intermedio' | 'Avanzado' | 'Especialista';

export type GemologicalImageType = 
  | 'Microfotografía Gemológica'
  | 'Diagrama Petrográfico'
  | 'Fotografía de Cristal en Matriz'
  | 'Instrumental Óptico'
  | 'Corte Lapidario'
  | 'Espectro Óptico / FTIR'
  | 'Ilustración Técnica Vectorial'
  | 'Mapa de Yacimiento';

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'true_false' | 'image_interpretation';
  imageUrl?: string;
  imageType?: GemologicalImageType;
  options: string[];
  correctAnswer: number; // Index in options (0-based)
  explanation: string;
  scientificContext?: string;
  scientificReference?: string;
}

export interface ModuleLesson {
  id: string;
  moduleId: number;
  order: number;
  title: string;
  readTime: string;
  difficulty: AcademicDifficulty;
  summary: string;
  content: string; // Markdown / formatted deep educational text
  keyTakeaways: string[];
  scientificFormula?: string;
  diagramUrl?: string;
  diagramType?: GemologicalImageType;
  diagramCaption?: string;
  svgTechnicalDiagram?: string; // Key or SVG code for interactive/crisp vector diagram
  gallery?: { 
    url: string; 
    caption: string; 
    credit?: string; 
    imageType?: GemologicalImageType;
  }[];
  references?: {
    author: string;
    year: string;
    title: string;
    publication: string;
    url?: string;
  }[];
}

export interface CaseStudy {
  title: string;
  scenario: string;
  gemologicalAnalysis: string;
  diagnosticLimitations: string;
  learningOutcome: string;
}

export interface PracticalActivity {
  title: string;
  instructions: string;
  materialsNeeded: string[];
  deliverable: string;
  rubric: { criterion: string; weight: string }[];
}

export interface DiplomaModule {
  id: number;
  code: string; // MOD-01 to MOD-12
  title: string;
  shortTitle: string;
  academicHours: number; // 10 hours per module
  overview: string;
  competencies: string[];
  learningObjectives: string[];
  prerequisites: string[];
  heroImage: string;
  heroImageType?: GemologicalImageType;
  lessons: ModuleLesson[];
  caseStudy: CaseStudy;
  practicalActivity: PracticalActivity;
  quiz: QuizQuestion[];
  externalReferences: ExternalReferenceLink[];
  bibliography: { author: string; year: string; title: string; publication: string; doiOrUrl?: string }[];
}

export interface FinalExamQuestion {
  id: string;
  moduleCode: string; // MOD-01 to MOD-12
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  scientificReference: string;
}

export interface GlossaryTerm {
  term: string;
  etymology?: string;
  category: 
    | 'Mineralogía & Cristalografía' 
    | 'Geología & Depósitos' 
    | 'Óptica & Propiedades Físicas' 
    | 'Inclusiones & Microscopía' 
    | 'Talla & Lapidación' 
    | 'Tratamientos & Laboratorio' 
    | 'Comercio & Economía' 
    | 'Normativa & Legal';
  rigorousDefinition: string;
  simpleExplanation: string;
  emeraldApplication: string;
  example?: string;
}

export interface ScientificAtlasItem {
  id: string;
  category: 'inclusiones_fluidas' | 'inclusiones_solidas' | 'estructuras_crecimiento' | 'yacimientos' | 'instrumentos' | 'tallas';
  title: string;
  scientificName: string;
  chemicalFormula?: string;
  depositOrOrigin: string;
  description: string;
  geologicalEnvironment: string;
  gemologicalSignificance: string;
  diagnosticCaveat: string; // Crucial: explicitly indicates diagnostic limitations
  imageUrl: string;
  imageType?: GemologicalImageType;
  magnification?: string;
  illuminationType?: string;
  sourceCredit: string;
  referenceUrl?: string;
}

export interface StudentProgress {
  studentName: string;
  studentIdNumber: string;
  completedLessonIds: string[];
  moduleScores: Record<number, number>; // moduleId -> score (0 to 100)
  favoriteLessonIds: string[];
  finalExamScore?: number;
  finalExamPassed?: boolean;
  finalExamDate?: string;
  finalExamAnswers?: Record<string, number>;
  effectiveHoursCompleted: number; // Real tracked hours (10h per approved module >= 80)
  diplomaSerial?: string;
  diplomaIssueDate?: string;
  lastUpdated: string;
}
