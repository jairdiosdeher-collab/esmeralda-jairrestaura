import { DiplomaModule } from '../../types/academy';
import { MOD_01_FUNDAMENTOS } from './modules/mod01_fundamentos';
import { MOD_02_GEOLOGIA } from './modules/mod02_geologia';
import { MOD_03_CRISTALOGRAFIA } from './modules/mod03_cristalografia';
import { MOD_04_IDENTIFICACION } from './modules/mod04_identificacion';
import { MOD_05_INCLUSIONES } from './modules/mod05_inclusiones';
import { MOD_06_COLOR_CALIDAD } from './modules/mod06_color_calidad';
import { MOD_07_TRATAMIENTOS } from './modules/mod07_tratamientos';
import { MOD_08_TALLA } from './modules/mod08_talla';
import { MOD_09_CERTIFICACION } from './modules/mod09_certificacion';
import { MOD_10_COMERCIO } from './modules/mod10_comercio';
import { MOD_11_NORMATIVA } from './modules/mod11_normativa';
import { MOD_12_EMPRENDIMIENTO } from './modules/mod12_emprendimiento';

export const DIPLOMA_MODULES: DiplomaModule[] = [
  MOD_01_FUNDAMENTOS,
  MOD_02_GEOLOGIA,
  MOD_03_CRISTALOGRAFIA,
  MOD_04_IDENTIFICACION,
  MOD_05_INCLUSIONES,
  MOD_06_COLOR_CALIDAD,
  MOD_07_TRATAMIENTOS,
  MOD_08_TALLA,
  MOD_09_CERTIFICACION,
  MOD_10_COMERCIO,
  MOD_11_NORMATIVA,
  MOD_12_EMPRENDIMIENTO
];

export const TOTAL_PROGRAMMED_HOURS = 120;
export const HOURS_PER_MODULE = 10;
export const TOTAL_DIPLOMA_MODULES = 12;
export const PASSING_PERCENTAGE = 80;

/**
 * Obtiene un módulo por su ID o número
 */
export function getModuleById(id: number | string): DiplomaModule | undefined {
  if (typeof id === 'number') {
    return DIPLOMA_MODULES.find(m => m.id === id);
  }
  return DIPLOMA_MODULES.find(m => m.code === id || String(m.id) === id);
}

export function getModuleByNumber(num: number): DiplomaModule | undefined {
  return DIPLOMA_MODULES.find(m => m.id === num);
}

/**
 * Retorna todas las lecciones del diplomado ordenadas
 */
export function getAllDiplomaLessons() {
  return DIPLOMA_MODULES.flatMap(m => 
    m.lessons.map(l => ({
      ...l,
      moduleId: m.id,
      moduleCode: m.code,
      moduleTitle: m.title
    }))
  );
}
