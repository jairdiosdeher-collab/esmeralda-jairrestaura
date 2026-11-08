import { DiplomaModule } from '../../../types/academy';

export const MOD_06_COLOR_CALIDAD: DiplomaModule = {
  id: 6,
  code: 'MOD-06',
  title: 'Módulo 6: Color, Calidad, Diafanidad y Metodología de Valoración Gemológica',
  shortTitle: 'Color, Calidad y Valoración',
  academicHours: 10,
  overview: 'Física y colorimetría del berilo verde. El sistema tridimensional de color (Matiz, Tono y Saturación) y su estandarización según GIA y Munsell. Clasificación de claridad para gemas Tipo III (naturalmente incluidas). Grados de diafanidad, proporciones ópticas de corte y modelos cuantitativos de valoración comercial por quilate.',
  competencies: [
    'Evaluar el color según las tres coordenadas psicofísicas: Matiz (Hue), Tono (Tone) y Saturación (Saturation).',
    'Clasificar la claridad en gemas Tipo III (GIA) diferenciando inclusiones tolerables de fisuras críticas.',
    'Analizar el impacto de la ventana óptica (windowing) y la extinción en la retención de valor.',
    'Aplicar tablas no lineales de cotización de precio por quilate en función del peso y procedencia certificada.'
  ],
  learningObjectives: [
    'Diferenciar las coordenadas colorimétricas del "Verde Muzo" frente al "Verde Chivor".',
    'Comprender por qué el color representa más del 60% del valor total de una esmeralda noble.',
    'Identificar los cinco grados de diafanidad: Transparente, Semitransparente, Translúcido, Semiopaco y Opaco.',
    'Calcular cotizaciones de mercado aplicando coeficientes correctores de tratamiento de claridad.'
  ],
  prerequisites: ['Módulos 1 a 5 aprobados o conocimientos intermedios de valoración de gemas de color.'],
  heroImage: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Corte Lapidario',
  lessons: [
    {
      id: 'm6-l1',
      moduleId: 6,
      order: 1,
      title: 'Lección 6.1: Física del Color: Matiz (Hue), Tono (Tone) y Saturación (Saturation)',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'El espacio tridimensional del color en gemas de color. Definición estandarizada del matiz dominante y modificadores, escala de tono del 0% al 100% y grados de saturación del 1 (grisáceo/apagado) al 6 (vívido excepcional).',
      content: `A diferencia del diamante incoloro (donde se busca la ausencia absoluta de color), en la esmeralda **el color es el atributo supremo que determina entre el 60% y el 70% de su valor comercial**:

### 1. Las Tres Dimensiones Físicas del Color
1. **Matiz (Hue):** Es la longitud de onda dominante del espectro visible percibida por el ojo humano. En la esmeralda, el matiz ideal es un **verde puro (*very slightly bluish green* - vslbG)**. Si el matiz se desplaza en exceso hacia el azul (*strongly bluish green*) o hacia el amarillo (*strongly yellowish green*), el valor disminuye notablemente.
2. **Tono (Tone):** Es el grado relativo de claridad u oscuridad del color, medido en una escala estándar del **0% (blanco incoloro) al 100% (negro opaco)**:
   - Tono comercial óptimo para esmeraldas: **entre el 60% y el 75%** (Medio a Medio-Oscuro).
   - Un tono menor al 40% se percibe como una piedra pálida o "lavada" (berilo verde común).
   - Un tono mayor al 85% se percibe como una piedra negra, oscura y sin vida ("extinción").
3. **Saturación (Saturation):** Es la pureza, fuerza e intensidad del matiz, medida en una escala del **1 (apagado/grisáceo) al 6 (vívido/excepcional)**:
   - Nivel 1-2: Pobre / Grisáceo.
   - Nivel 3-4: Bueno / Moderado.
   - Nivel 5: Fuerte (*Strong*).
   - Nivel 6: Vívido (*Vivid*) — Máxima pureza espectral sin mezcla de tonos pardos o grises.

### 2. Iluminación Estandarizada para Evaluación
El color de una esmeralda jamás debe evaluarse bajo luz solar directa del mediodía ni bajo tubos fluorescentes cálidos de oficina. La norma internacional exige:
- Fuente de luz diurna estandarizada **CIE D55 o D65 (temperatura de color de $5500\\text{ K}$ a $6500\\text{ K}$)**.
- Índice de reproducción cromática **$CRI > 95$**.
- Fondo de evaluación blanco mate o papel gemológico celofán blanco neutro sin blanqueadores ópticos fluorescentes.`,
      keyTakeaways: [
        'El color se compone de Matiz (verde puro con ligero azul), Tono (60-75%) y Saturación (nivel 5-6 vívido).',
        'Representa más del 60% del valor comercial total de la pieza.',
        'La evaluación debe realizarse bajo luz estándar D65 (5500-6500 K) con fondo blanco neutro.'
      ],
      scientificFormula: '\\text{Color Óptimo GIA: Matiz: vslbG (Verde muy ligeramente azulado) } | \\text{ Tono: 65-75\\% } | \\text{ Saturación: 5-6}',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Esmeralda facetada de saturación vívida evaluada en cabina de luz estandarizada D65.'
    },
    {
      id: 'm6-l2',
      moduleId: 6,
      order: 2,
      title: 'Lección 6.2: Colorimetría Comparada: El "Verde Muzo" vs el "Verde Chivor"',
      readTime: '14 min',
      difficulty: 'Intermedio',
      summary: 'Diferencias espectrales y ópticas entre las dos tipologías cromáticas históricas de Colombia. El verde aterciopelado profundo de Muzo/Coscuez frente a la vivacidad cristalina verde azulada de Chivor/Gachalá.',
      content: `En la tradición esmeraldera colombiana y en el comercio internacional de alta joyería existen dos arquetipos cromáticos legendarios:

### 1. El Arquetipo "Verde Muzo" (Occidente de Boyacá)
- **Tono y Saturación:** Verde intenso, profundo, con un tono medio-oscuro ($70 - 75\\%$) y saturación vívida (nivel 6).
- **Subtono:** Presenta un matiz verde puro con un finísimo componente cálido aterciopelado generado por una relación de cromo muy superior a la de vanadio ($Cr/V > 2$) y ausencia total de absorción ferrosa a 830 nm.
- **Aspecto Óptico:** Sensación visual untuosa, aterciopelada y profunda que "retiene" la luz en el interior de la gema sin centelleos secos. Es el verde de mayor cotización histórica en Europa y el Medio Oriente.

### 2. El Arquetipo "Verde Chivor" (Oriente de Boyacá y Cundinamarca)
- **Tono y Saturación:** Verde cristalino, brillante, de tono ligeramente más abierto ($60 - 68\\%$) y saturación eléctrica.
- **Subtono:** Marcado matiz secundario **azul celeste o verde menta azulado**, enriquecido por una proporción mayor de vanadio trivalente ($V^{3+}$) y una diafanidad cristalina excepcional.
- **Aspecto Óptico:** Alto centelleo y fuego interno, con gran vivacidad óptica bajo luz solar o luz de velas. Históricamente muy cotizado en los mercados de Estados Unidos y Japón.

### 3. Salvedad Pericial Innegociable
Tanto Muzo como Chivor producen una amplia gama de calidades y tonalidades. **Es una mala práctica atribuir el origen geográfico de una gema basándose únicamente en si parece "tipo Muzo" o "tipo Chivor"**. El peritaje formal exige análisis de inclusiones y espectrometría.`,
      keyTakeaways: [
        'Verde Muzo: verde puro aterciopelado, profundo, tono 70-75%, alta dominancia de cromo.',
        'Verde Chivor: verde azulado vivaz, cristalino, tono 60-68%, enriquecido por vanadio.',
        'Advertencia: la apariencia de color jamás sustituye a las pruebas analíticas de origen geográfico.'
      ],
      scientificFormula: '\\text{Muzo: } Cr \\gg V \\; (\\text{Verde cálido profundo}) \\quad | \\quad \\text{Chivor: } V \\ge Cr \\; (\\text{Verde azulado vívido})',
      diagramUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Comparativa de color: verde profundo aterciopelado de Muzo (izquierda) vs verde azuloso cristalino de Chivor (derecha).'
    },
    {
      id: 'm6-l3',
      moduleId: 6,
      order: 3,
      title: 'Lección 6.3: Claridad en Gemas Tipo III (GIA) y el Concepto del "Jardín"',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'El estándar GIA de pureza para gemas Tipo III (naturalmente incluidas). Por qué una esmeralda sin inclusiones es una rareza geológica extrema. Clasificación de inclusiones: tolerables, embellecedoras y de riesgo estructural.',
      content: `El Gemological Institute of America (GIA) clasifica a las gemas preciosas coloreadas en tres tipos según su abundancia natural de inclusiones:
- *Tipo I:* Generalmente libres de inclusiones a simple vista (ej. aguamarina, tanzanita).
- *Tipo II:* Habitualmente con algunas inclusiones (ej. rubí, zafiro).
- **Tipo III:** Gemas que **casi invariablemente presentan inclusiones visibles a simple vista** en la naturaleza debido a su génesis violenta y tectónica. La **esmeralda** es el espécimen por excelencia del Tipo III.

### 1. El Concepto del "Jardín" (*Le Jardin*)
En el comercio gemológico, el conjunto armonioso de inclusiones fluidas trifásicas, fisuras cicatrizadas y microcristales que asemejan ramas o follaje vegetal recibe el poético nombre de **"Jardín"**. Lejos de ser un defecto desdeñable, el jardín es el testimonio natural de autenticidad geológica que distingue a una esmeralda de imitaciones de vidrio sin alma.

### 2. Criterios de Evaluación de la Claridad
1. **Inclusiones Tolerables / Neutras:** Microinclusiones trifásicas y velos finos transparentes dispersos que no interfieren con la transmisión de la luz ni alcanzan las esquinas de la tabla.
2. **Inclusiones de Riesgo Estructural (Críticas):** Fisuras abiertas profundas que cruzan la tabla en diagonal, fracturas basales que llegan al filetín o fracturas en esquinas vivas que amenazan con desportillarse durante el engaste o limpieza ultrasónica.
3. **Escala de Claridad Práctica:**
   - *Eye-Clean (Limpia a simple vista):* Rareza extrema en esmeraldas (menos del 1% de la producción mundial).
   - *Slightly Included:* Inclusiones menores que requieren atención para verse a simple vista; excelente brillo.
   - *Moderately Included:* Inclusiones visibles a simple vista pero con buena diafanidad residual (calidad comercial fina).
   - *Heavily Included:* Jardín muy denso que nubla el color corporal (calidad para cabujones o tallas de adorno).`,
      keyTakeaways: [
        'La esmeralda es una gema Tipo III de GIA: las inclusiones son connaturales a su formación geológica.',
        'El "jardín" natural es el sello de autenticidad frente al vidrio o sintéticos homogéneos.',
        'Las fisuras que alcanzan esquinas o cruzan la tabla son críticas por riesgo de fractura mecánica.'
      ],
      scientificFormula: '\\text{GIA Type III: Inclusiones presentes de forma estándar en el 99\\% de los ejemplares naturales}',
      diagramUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Jardín natural equilibrado en esmeralda facetada compuesto por velos fluidos que no comprometen la solidez estructural.'
    },
    {
      id: 'm6-l4',
      moduleId: 6,
      order: 4,
      title: 'Lección 6.4: Diafanidad y Transparencia: Los Cinco Grados Ópticos',
      readTime: '13 min',
      difficulty: 'Intermedio',
      summary: 'La diafanidad como capacidad del medio para transmitir la radiación electromagnética sin dispersión parásita. Escala técnica de cinco niveles: transparente, semitransparente, translúcido, semiopaco y opaco.',
      content: `La **diafanidad** (comúnmente llamada transparencia) mide el grado en que la luz puede atravesar el volumen interno de una gema sin ser absorbida, reflejada o dispersada por fases heterogéneas:

### 1. Los Cinco Grados Internacionales de Diafanidad
1. **Transparente (*Transparent - Cristal Fino*):** La luz atraviesa el mineral sin obstáculos perceptibles. Al mirar a través de la gema, los objetos o textos situados detrás se observan nítidos, claros y legibles. Es la condición indispensable para las gemas facetadas de alta inversión.
2. **Semitransparente (*Semi-Transparent*):** La luz pasa con facilidad a través de la piedra, pero los objetos situados detrás se aprecian ligeramente desenfocados o difusos debido a microinclusiones dispersas.
3. **Translúcido (*Translucent*):** La luz atraviesa la gema, iluminándola internamente, pero es imposible distinguir contornos o formas a través de ella. Es el grado ideal para el pulido en **cabujones lisos**.
4. **Semiopaco (*Semi-Opaque*):** Únicamente una pequeña fracción de luz penetra a través de los bordes o filetines más delgados de la piedra; el centro permanece oscuro.
5. **Opaco (*Opaque*):** La luz no atraviesa en absoluto el espesor del material, siendo absorbida o reflejada en la superficie exterior (berilos masivos de baja calidad o rocas esmeraldíferas).

### 2. Relación Crítica entre Tono y Diafanidad
Una piedra puede tener un color verde saturado maravilloso, pero si su diafanidad es meramente translúcida u opaca, su valor comercial por quilate será una fracción ínfima comparada con una gema cristalina transparente. La transparencia es la que permite que el color "respire" y brille.`,
      keyTakeaways: [
        'Transparente: objetos detrás se ven nítidos (exigido para facetado de inversión).',
        'Translúcido: la luz pasa pero no define formas (apropiado para cabujones).',
        'Opaco: no transmite luz (calidad industrial o decorativa de bajo costo).'
      ],
      scientificFormula: 'T = \\frac{I_{\\text{transmitida}}}{I_{\\text{incidente}}} \\quad [\\text{Transparente: } T > 0.85]',
      diagramUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Fotografía de Cristal en Matriz',
      diagramCaption: 'Ejemplar de alta diafanidad ("cristal") permitiendo la lectura nítida de líneas a su través.'
    },
    {
      id: 'm6-l5',
      moduleId: 6,
      order: 5,
      title: 'Lección 6.5: Proporciones de Talla, Retorno de Luz, Ventana Óptica y Extinción',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Geometría del retorno de luz en gemas facetadas. Ángulo crítico del berilo (39.3°). Defectos de corte: ventana óptica (windowing) por pabellón poco profundo vs extinción por culatín excesivamente profundo.',
      content: `La calidad del corte o lapidación no es solo un factor estético; es el motor óptico que determina si la luz que ingresa a la esmeralda regresa a los ojos del observador o se pierde en el fondo:

### 1. El Ángulo Crítico del Berilo
Con un índice de refracción promedio de $n \\approx 1.58$, el ángulo crítico de la esmeralda en el aire se calcula mediante:
$$\\theta_c = \\arcsin\\left(\\frac{1}{1.58}\\right) \\approx 39.3^\\circ$$
Para que se produzca la **reflexión interna total** y la luz no se escape por la base de la gema, las facetas del pabellón (culata) deben tallarse a ángulos mayores a $39.3^\\circ$ (el rango geométrico óptimo es **entre $42^\\circ$ y $45^\\circ$**).

### 2. Dos Errores Fatales de Lapidación
1. **La Ventana Óptica (*Windowing*):**
   - Ocurre cuando el tallador corta el pabellón con ángulos demasiado planos ($<38^\\circ$) con el único propósito de conservar peso en quilates de un cristal plano en bruto.
   - **Efecto visual:** Al mirar la gema de frente a través de la tabla, la luz incide por debajo del ángulo crítico y se escapa hacia abajo sin rebotar. El centro de la piedra se ve "hueco", descolorido y transparente como un cristal de ventana ordinario. Si se coloca sobre un texto, las letras se pueden leer claramente a través del centro.
   - **Castigo comercial:** Una gema con ventana severa sufre una depreciación de entre el 25% y el 50% de su valor por quilate.
2. **La Extinción (*Extinction*):**
   - Ocurre cuando el pabellón se corta excesivamente profundo ($>52^\\circ$) o con asimetría pronunciada.
   - **Efecto visual:** La luz sufre múltiples reflexiones internas en bucle cerrado y es absorbida por el medio denso, provocando que zonas enteras de la gema se vean completamente negras y sin vida óptica.`,
      keyTakeaways: [
        'Ángulo crítico del berilo es 39.3°; el ángulo de pabellón óptimo es de 42° a 45°.',
        'Ventana óptica: pabellón plano que deja escapar la luz, haciendo ver el centro descolorido y transparente.',
        'Extinción: pabellón demasiado profundo que oscurece y apaga el retorno de luz en negro.'
      ],
      scientificFormula: '\\theta_c = \\arcsin(1/n) = 39.3^\\circ \\quad | \\quad \\text{Ángulo de pabellón ideal: } 43^\\circ \\pm 2^\\circ',
      diagramUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Trazado de rayos ópticos: retorno de luz ideal (izquierda) vs escape de luz por ventana plana (derecha).'
    },
    {
      id: 'm6-l6',
      moduleId: 6,
      order: 6,
      title: 'Lección 6.6: Valoración Comercial: El Principio del Escalón de Quilates y Factores de Corrección',
      readTime: '17 min',
      difficulty: 'Avanzado',
      summary: 'La progresión exponencial del precio por quilate. Los umbrales de peso mágico (1.00, 2.00, 3.00, 5.00 y 10.00 ct). Matriz de coeficientes de valoración según color, claridad, corte y certificación No Oil.',
      content: `A diferencia de los metales preciosos (donde 10 gramos de oro de 18k valen exactamente el doble que 5 gramos), **en las esmeraldas preciosas el valor por quilate escala de manera exponencial no lineal**:

### 1. El Principio del Escalón de Quilates (*Carat Jump*)
La naturaleza produce millones de cristales milimétricos por cada cristal grande de calidad gema. Por ello, el precio unitario por quilate experimenta saltos bruscos al cruzar ciertos "umbrales mágicos" de peso:
- Una esmeralda fina de **0.95 quilates** puede cotizarse a USD $2.500/ct (Total: $2.375).
- La misma piedra pesando **1.05 quilates** salta al siguiente escalón comercial, cotizándose a USD $4.200/ct (Total: $4.410).
- Los escalones críticos del mercado internacional son: **1.00 ct, 2.00 ct, 3.00 ct, 5.00 ct y 10.00 ct**.

### 2. Matriz de Factores de Ponderación (Algoritmo de Valoración)
El valor estimado de una esmeralda noble se calcula ponderando:

$$\\text{Precio Base} \\times C_{\\text{Color}} \\times C_{\\text{Claridad}} \\times C_{\\text{Corte}} \\times C_{\\text{Tratamiento}} \\times C_{\\text{Quilataje}}$$

1. **Impacto del Tratamiento de Claridad:**
   - **No Oil (Sin Tratamiento Certificado por Laboratorio de Primera Línea):** Coeficiente multiplicador de **2.5x a 4.0x** sobre el precio base.
   - **Minor (Menor con Aceite de Cedro F1):** Coeficiente estándar del mercado (1.0x).
   - **Moderate (Moderado F2):** Coeficiente corrector de **0.65x a 0.75x**.
   - **Significant (Significativo F3):** Coeficiente de **0.30x a 0.45x**.
   - **Resinas Epóxicas Poliméricas:** Descuento adicional de mercado de entre el 30% y el 60% frente al aceite de cedro tradicional.`,
      keyTakeaways: [
        'El precio por quilate escala exponencialmente con los saltos de peso mágico (1, 2, 3, 5 y 10 ct).',
        'El color pondera el 60-70% del valor inicial de la pieza.',
        'La condición certificada "No Oil" multiplica el valor entre 2.5 y 4 veces respecto a una gema equivalente aceitada.'
      ],
      scientificFormula: '\\text{Valor Total} = \\text{Peso (ct)} \\times \\text{Precio/ct} \\times \\prod \\text{Coeficientes Correctores}',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Ejemplar excepcional de colección de 5.20 quilates superando el umbral de los 5 quilates sin ventana.'
    }
  ],
  caseStudy: {
    title: 'Tasación Comercial: Re-tallado de Esmeralda con Ventana Óptica y Reducción de Peso',
    scenario: 'Un joyero posee una esmeralda tallada octagonal de 3.25 quilates que presenta una ventana severa en el centro (pabellón plano cortado a 32°), lo que hace que la gema se vea pálida en la tabla. Su precio actual en el mercado es de USD $1.200/ct (Total: $3.900). Se evalúa si conviene retallarla.',
    gemologicalAnalysis: 'El maestro lapidario calcula que para corregir el ángulo de pabellón a los 43° ideales y eliminar la ventana óptica, se perderá un 22% del peso en polvo de diamante, dejando la piedra final en 2.53 quilates. Sin embargo, al eliminar la fuga de luz, la saturación aumentará de nivel 3 a nivel 5 (vívido), y la diafanidad visual pasará de semitransparente a transparente brillante.',
    diagnosticLimitations: 'Al reducir el peso de 3.25 ct a 2.53 ct, la piedra se mantiene dentro del mismo escalón comercial de 2 a 3 quilates. En la nueva condición óptica vívida sin ventana, su cotización de mercado sube a USD $3.400/ct.',
    learningOutcome: 'Resultado financiero: 2.53 ct × USD $3.400 = USD $8.602. La decisión de retallar incrementó el valor real de la joya en más de USD $4.700 (un 120% de ganancia neta) a pesar de haber perdido quilataje en masa.'
  },
  practicalActivity: {
    title: 'Gradación Colorimétrica y Cálculo de Proporciones en Lote de Muestras',
    instructions: '1. Colocar tres esmeraldas en cabina de luz calibrada D65 sobre fondo blanco neutro. 2. Determinar para cada una: Matiz (Hue), Tono (Tone en %) y Saturación (1-6) utilizando la escala de referencia GIA. 3. Medir con calibrador digital Leveridge la longitud, anchura y profundidad total. Calcular el porcentaje de profundidad (% Profundidad = Profundidad / Ancho * 100). 4. Evaluar si existe presencia de ventana óptica proyectando la gema sobre un texto impreso.',
    materialsNeeded: [
      'Cabina de luz normalizada D65 con lámpara de 6500 K',
      'Calibrador digital micrométrico tipo Leveridge',
      'Carta de colores de referencia GIA Colored Stone Grading',
      'Tres esmeraldas facetadas de diferentes proporciones'
    ],
    deliverable: 'Reporte de tasación con ficha técnica de colorimetría 3D, porcentaje de profundidad y cálculo de retención de valor.',
    rubric: [
      { criterion: 'Precisión en la asignación de matiz, tono y saturación', weight: '40%' },
      { criterion: 'Cálculo milimétrico de proporciones de pabellón y tabla', weight: '30%' },
      { criterion: 'Diagnóstico acertado de ventana óptica o extinción', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm6-q1',
      question: 'En el sistema colorimétrico tridimensional de GIA, ¿cuáles son los parámetros de tono (Tone) y saturación (Saturation) considerados ideales para una esmeralda colombiana de máxima cotización?',
      type: 'multiple_choice',
      options: [
        'Tono 15% (muy claro/lavado) y saturación nivel 1 (grisácea).',
        'Tono entre 65% y 75% (medio a medio-oscuro) y saturación nivel 5 o 6 (fuerte a vívida).',
        'Tono 95% (completamente negro/opaco) y saturación nivel 2.',
        'El tono y la saturación no influyen en el precio de una gema preciosa.'
      ],
      correctAnswer: 1,
      explanation: 'El color ideal en esmeraldas exige un tono medio a medio-oscuro (65-75%), que no sea ni pálido ni negro por extinción, y una saturación vívida de nivel 5 o 6, libre de tonos grises o pardos secundarios.',
      scientificReference: 'GIA Colored Stone Grading Manual (2018). Gemological Institute of America.'
    },
    {
      id: 'm6-q2',
      question: '¿Por qué el defecto de talla conocido como "ventana óptica" (windowing) deprecia gravemente el valor comercial de una esmeralda?',
      type: 'multiple_choice',
      options: [
        'Porque la gema se vuelve radiactiva.',
        'Porque el pabellón se talló con ángulos inferiores al ángulo crítico (39.3°), permitiendo que la luz se escape por el fondo y haciendo ver el centro descolorido y transparente como un vidrio.',
        'Porque la piedra se rompe automáticamente en contacto con el agua.',
        'Porque las esquinas biseladas se desgastan al instante.'
      ],
      correctAnswer: 1,
      explanation: 'La ventana óptica ocurre cuando el pabellón es demasiado bajo o plano (<39°). La luz incidente no experimenta reflexión interna total y se fuga directamente por la base; al mirar la gema de frente, el centro carece de retorno de luz, viéndose lavado y depreciando la pieza hasta en un 50%.',
      scientificReference: 'Ward, F. (2001). Emeralds (Gem Book Series). Gem Book Publishers.'
    },
    {
      id: 'm6-q3',
      question: 'Según la clasificación GIA para gemas de color, ¿por qué la esmeralda se ubica en el Tipo III (Type III)?',
      type: 'multiple_choice',
      options: [
        'Porque es el mineral más blando del planeta.',
        'Porque en la naturaleza casi invariablemente presenta inclusiones visibles a simple vista ("jardín") debido a su génesis tectónica e hidrotermal.',
        'Porque solo se puede tallar en forma triangular.',
        'Porque es una gema de origen orgánico derivada de fósiles marinos.'
      ],
      correctAnswer: 1,
      explanation: 'Las gemas Tipo III de GIA son aquellas que por su ambiente geológico de formación crecen intrínsecamente con abundantes inclusiones. Encontrar una esmeralda totalmente limpia a la vista (eye-clean) representa menos del 1% de la extracción mundial.',
      scientificReference: 'GIA Gemology Course: Gemstone Inclusions & Clarity Grading.'
    },
    {
      id: 'm6-q4',
      question: 'Si una esmeralda de 2.00 quilates con color fino y tratamiento de aceite moderado (F2) vale USD $3.000 por quilate, ¿qué orden de magnitud de precio alcanzaría la misma gema si fuera certificada formalmente como "No Oil" (sin tratamiento detectable)?',
      type: 'multiple_choice',
      options: [
        'Valdría exactamente lo mismo (USD $3.000/ct).',
        'Valdría entre 2.5 y 4 veces más (USD $7.500 a $12.000 por quilate) debido a la extrema escasez de piedras puras en estado virgen.',
        'Valdría menos dinero porque el aceite la protege del polvo.',
        'Valdría la mitad porque no tiene brillo artificial.'
      ],
      correctAnswer: 1,
      explanation: 'En el mercado internacional de alta joyería, la condición de pureza natural certificada como "No Oil" multiplica el valor entre 2.5 y 4.0 veces frente a un espécimen idéntico con aceite de cedro moderado, debido a su extrema rareza coleccionable.',
      scientificReference: 'Ringsrud, R. (2009). Emeralds, A Passionate Guide. Green View Publishing.'
    },
    {
      id: 'm6-q5',
      question: '¿Qué relación de elementos traza cromóforos explica la diferencia entre el "Verde Muzo" aterciopelado profundo y el "Verde Chivor" cristalino azulado?',
      type: 'multiple_choice',
      options: [
        'Muzo tiene titanio y Chivor tiene cobre.',
        'Muzo está dominado ampliamente por cromo (Cr3+ >> V3+) con textura aterciopelada por micro-crecimiento, mientras Chivor presenta relaciones de vanadio mayores (V3+ >= Cr3+) con altísima diafanidad.',
        'Chivor tiene 10% de níquel y Muzo tiene cobalto.',
        'No existe ninguna diferencia química; es solo un truco publicitario.'
      ],
      correctAnswer: 1,
      explanation: 'En Muzo predomina fuertemente el cromo sobre el vanadio, otorgando un verde puro profundo; en Chivor el vanadio (V³⁺) iguala o supera al cromo, modulando un matiz verde azulado vivaz característico.',
      scientificReference: 'Schwarz, D. (2002). Geographic origin determination of emeralds. In Proceedings of the 3rd International Gemological Symposium.'
    }
  ],
  externalReferences: [
    {
      title: 'GIA: Emerald Quality Factors and the 4 Cs of Color',
      url: 'https://www.gia.edu/emerald-quality-factor',
      institution: 'Gemological Institute of America',
      description: 'Guía oficial de factores de calidad: colorimetría, claridad Tipo III y proporciones de corte.',
      category: 'Evaluación y Calidad'
    },
    {
      title: 'CDTEC: Criterios de Calificación de Esmeraldas Colombianas',
      url: 'https://cdtec.com.co',
      institution: 'Centro de Desarrollo Tecnológico de la Esmeralda',
      description: 'Normas técnicas colombianas para la clasificación del color y diafanidad en origen.',
      category: 'Laboratorio Colombiano'
    }
  ],
  bibliography: [
    {
      author: 'Wise, R. W.',
      year: '2016',
      title: 'Secrets of the Gem Trade: The Connoisseur\'s Guide to Precious Gemstones (2nd ed.)',
      publication: 'Brunswick House Press, Lenox, MA',
      doiOrUrl: 'https://www.secretsofthegemtrade.com'
    },
    {
      author: 'Matlins, A. L., & Bonanno, A. C.',
      year: '2009',
      title: 'Jewelry & Gems: The Buying Guide (7th ed.)',
      publication: 'GemStone Press, Woodstock, VT',
      doiOrUrl: 'https://www.gemstonepress.com'
    },
    {
      author: 'Ringsrud, R.',
      year: '2009',
      title: 'Emeralds, A Passionate Guide',
      publication: 'Green View Publishing, Saratoga, CA',
      doiOrUrl: 'https://www.emeraldpassion.com'
    }
  ]
};
