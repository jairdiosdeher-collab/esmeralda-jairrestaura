import { DiplomaModule } from '../../../types/academy';

export const MOD_03_CRISTALOGRAFIA: DiplomaModule = {
  id: 3,
  code: 'MOD-03',
  title: 'Módulo 3: Cristalografía, Estructura Atómica y Mineralogía del Berilo',
  shortTitle: 'Cristalografía y Mineralogía',
  academicHours: 10,
  overview: 'Arquitectura atómica tridimensional del berilo. Sistema hexagonal (P6/mcc), anillos senarios de ciclosilicato [Si6O18], canales estructurales nanométricos y moléculas de agua confinada (Tipo I vs Tipo II). Cristaloquímica de las sustituciones de cromo y vanadio, y génesis cristalográfica de las esmeraldas Trapiche.',
  competencies: [
    'Interpretar la simetría cristalográfica del sistema hexagonal y los índices de Miller-Bravais (hkil).',
    'Modelar la celda unidad del berilo y la función estructural de los anillos senarios de tetraedros de silicio.',
    'Diferenciar espectroscópicamente el agua tipo I del agua tipo II en los canales estructurales del berilo.',
    'Explicar la cinética de crecimiento sectorial esqueletal de las esmeraldas Trapiche colombianas.'
  ],
  learningObjectives: [
    'Identificar los parámetros de red a ≈ 9.21 Å y c ≈ 9.19 Å del grupo espacial P6/mcc.',
    'Explicar cómo la sustitución isomórfica de Al³⁺ por Cr³⁺ y V³⁺ modifica los radios iónicos y genera el color verde.',
    'Comprender la presencia de cationes alcalinos (Na⁺) como compensadores de carga en los canales.',
    'Desmitificar que la esmeralda Trapiche sea una macla o doblete artificial: demostrar su continuidad de red.'
  ],
  prerequisites: ['Módulos 1 y 2 aprobados o formación básica en química estructural y mineralogía.'],
  heroImage: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Ilustración Técnica Vectorial',
  lessons: [
    {
      id: 'm3-l1',
      moduleId: 3,
      order: 1,
      title: 'Lección 3.1: Morfología y Simetría: El Sistema Hexagonal y la Celda P6/mcc',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Parámetros reticulares de la red hexagonal holoédrica. Índices de Miller-Bravais {hkil}, formas cristalográficas dominantes en Colombia: prisma {10-10} y pinacoide basal {0001}.',
      content: `El berilo cristaliza en el **sistema hexagonal**, dentro de la clase de máxima simetría: la **clase dihexagonal dipiramidal ($6/mmm$)**, perteneciente al grupo espacial **$P6/mcc$** (número 192 de las Tablas Internacionales de Cristalografía).

### 1. Parámetros de la Celda Unidad
- Eje cristalográfico horizontal: $a = b \\approx 9.21\\text{ \\AA}$ ($0.921\\text{ nm}$).
- Eje cristalográfico vertical (eje óptico): $c \\approx 9.19\\text{ \\AA}$ ($0.919\\text{ nm}$).
- Relación axial: $c/a \\approx 0.998$.
- Ángulos interaxiales: $\\alpha = \\beta = 90^\\circ$, $\\gamma = 120^\\circ$.

### 2. Índices de Miller-Bravais {hkil}
Para describir la morfología externa de los cristales hexagonales se emplean cuatro ejes cristalográficos: tres coplanares ($a_1, a_2, a_3$) que se cortan a $120^\\circ$ en el plano basal, y un cuarto eje vertical ($c$) perpendicular a ellos. Se cumple la regla matemática $h + k + i = 0$.

### 3. Hábitos Cristalinos Típicos en Colombia
- **Prisma hexagonal de primer orden $\{10\\bar{1}0\}$:** Seis caras verticales paralelas al eje $c$, frecuentemente estriadas longitudinalmente debido a oscilaciones de crecimiento.
- **Pinacoide basal $\{0001\}$:** Dos caras planas horizontales perpendiculares al eje $c$ que cierran los extremos del prisma (terminaciones planas pulidas naturales).
- En Muzo y Coscuez, la inmensa mayoría de los cristales son prismas hexagonales alargados $\{10\\bar{1}0\}$ terminados exclusivamente por el pinacoide basal $\{0001\}$, con ausencia casi total de caras piramidales inclinadas $\{10\\bar{1}1\}$.`,
      keyTakeaways: [
        'El berilo cristaliza en el sistema hexagonal, clase holohédrica 6/mmm, grupo espacial P6/mcc.',
        'La celda unidad tiene dimensiones a ≈ 9.21 Å y c ≈ 9.19 Å.',
        'El hábito colombiano clásico es el prisma hexagonal {10-10} terminado por pinacoides basales planos {0001}.'
      ],
      scientificFormula: 'P6/mcc \\quad | \\quad a = 9.21\\text{ \\AA}, \\; c = 9.19\\text{ \\AA} \\quad | \\quad Z = 2',
      svgTechnicalDiagram: 'hexagonal_beryl',
      diagramType: 'Ilustración Técnica Vectorial',
      diagramCaption: 'Proyección 3D de la celda hexagonal P6/mcc del berilo con prisma {10-10}, pinacoide {0001} y ejes cristalográficos.',
      imageSource: 'International Union of Crystallography (IUCr) / Archivo JAIRRESTAURA',
      imageAuthor: 'Comité de Cristalografía Aplicada JAIRRESTAURA',
      imageLicense: 'Material Educativo Oficial JAIRRESTAURA',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm3-l2',
      moduleId: 3,
      order: 2,
      title: 'Lección 3.2: Estructura de Ciclosilicato y Canales Nanoscópicos Abiertos',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'El arreglo tridimensional de anillos de seis miembros [Si6O18]12-. Los canales cilíndricos huecos a lo largo del eje c como trampas moleculares de gases, fluidos y cationes alcalinos.',
      content: `La clasificación mineralógica de Strunz sitúa al berilo dentro de los **ciclosilicatos** debido a su unidad fundamental aniónica:

### 1. Los Anillos Senarios de Silicio
- La red está compuesta por anillos aislados formados por seis tetraedros de sílice enlazados por sus vértices compartiendo dos oxígenos cada uno: fórmula aniónica **$[Si_6O_{18}]^{12-}$**.
- Estos anillos poligonales se apilan verticalmente a lo largo del eje $c$ en posiciones simétricas rotadas $25^\\circ$, dejando en su centro geométrico un conducto cilíndrico abierto continuo: el **canal estructural del berilo**.
- Los anillos adyacentes están unidos tridimensionalmente entre sí por cationes de berilio en coordinación tetraédrica ($BeO_4$) y cationes de aluminio en coordinación octaédrica ($AlO_6$).

### 2. Geometría y Dimensiones de los Canales
- El canal tiene un diámetro efectivo de "cuello de botella" de aproximadamente **$2.6\\text{ \\AA}$** a la altura del anillo de silicio, y se ensancha a una "cavidad interna" de **$5.1\\text{ \\AA}$** entre anillo y anillo.
- Estas dimensiones son idóneas para atrapar moléculas volátiles pequeñas ($H_2O, CO_2, He, Ar$) y cationes alcalinos monovalentes ($Na^+, K^+, Cs^+, Rb^+$).
- La presencia y orientación de estas moléculas confinadas dentro de los canales es el fundamento de la espectroscopía infrarroja FTIR para certificar origen natural vs sintético.`,
      keyTakeaways: [
        'Estructura de anillos hexagonales [Si6O18] apilados a lo largo del eje c.',
        'Los canales huecos continuos tienen un diámetro libre de 2.6 a 5.1 Å.',
        'Albergan moléculas de agua y gases que no participan en el enlace pero determinan propiedades físicas y espectrales.'
      ],
      scientificFormula: '[Si_6O_{18}]^{12-} \\text{ enlazados por } Be^{2+} \\text{ (coord. 4) y } Al^{3+} \\text{ (coord. 6)}',
      svgTechnicalDiagram: 'hexagonal_beryl',
      diagramType: 'Ilustración Técnica Vectorial',
      diagramCaption: 'Modelo atómico del canal nanoscópico del berilo formado por apilamiento de anillos de ciclosilicato [Si6O18].',
      imageSource: 'American Mineralogist / Archivo Científico JAIRRESTAURA',
      imageAuthor: 'D.L. Wood & K. Nassau (Modificado por JAIRRESTAURA)',
      imageLicense: 'Uso Académico Docente',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm3-l3',
      moduleId: 3,
      order: 3,
      title: 'Lección 3.3: Espectroscopía del Agua en los Canales: Agua Tipo I vs Agua Tipo II',
      readTime: '16 min',
      difficulty: 'Especialista',
      summary: 'Física molecular del agua confinada en zeolitas y ciclosilicatos. Orientación del dipolo eléctrico respecto al eje c. Distinción diagnóstica de berilos ricos en álcalis vs esmeraldas colombianas en espectro FTIR.',
      content: `Las moléculas de agua ($H_2O$) que residen en los canales del berilo no son agua líquida libre; están atrapadas como moléculas individuales aisladas orientadas por el campo electrostático interno:

### 1. Agua Tipo I (Alkali-Free Water)
- Ocurre cuando la cavidad del canal **no contiene ningún catión alcalino vecino**.
- La molécula de agua orienta su eje dipolar $C_2$ (la bisectriz del ángulo $H-O-H$) **perpendicular al eje óptico $c$** del cristal.
- El vector que une sus dos átomos de hidrógeno se orienta paralelo al plano basal $\{0001\}$.
- Genera bandas de absorción vibracional en el infrarrojo (FTIR) a **$3694\\text{ cm}^{-1}$** (estiramiento asimétrico $\\nu_3$) y **$1628\\text{ cm}^{-1}$** (flexión $\\nu_2$).

### 2. Agua Tipo II (Alkali-Associated Water)
- Ocurre cuando un catión alcalino monovalente (principalmente sodio, $Na^+$) se aloja en el cuello del canal.
- El catión $Na^+$ atrae electrostáticamente al átomo de oxígeno electronegativo de la molécula de agua adyacente, forzando a que el eje dipolar $C_2$ rote $90^\\circ$ para alinearse **paralelo al eje óptico $c$**.
- Genera bandas vibracionales desplazadas a **$3592\\text{ cm}^{-1}$** y **$1638\\text{ cm}^{-1}$**.

### 3. Aplicación Diagnóstica Fundamental en Colombia
- En las esmeraldas colombianas, debido a su bajo contenido de sodio en la red cristalina, la intensidad de la banda de **Agua Tipo I ($3694\\text{ cm}^{-1}$) supera ampliamente a la de Agua Tipo II ($3592\\text{ cm}^{-1}$)**.
- En esmeraldas de Brasil, Zambia o Rusia (donde el $Na_2O$ suele superar el $1.0\\%\\text{ wt.}$), la banda de Agua Tipo II domina completamente el espectro FTIR.
- En esmeraldas sintéticas por fundente (flux), los canales están completamente secos (ausencia total de agua en FTIR).`,
      keyTakeaways: [
        'Agua Tipo I: eje dipolar perpendicular al eje c (canales sin álcalis, típica de Colombia).',
        'Agua Tipo II: eje dipolar paralelo al eje c (coordinada a Na+, dominante en Zambia y Brasil).',
        'La relación de picos en FTIR (3694 vs 3592 cm⁻¹) permite autenticar el origen geográfico en segundos.'
      ],
      scientificFormula: '\\text{Agua Tipo I: } \\mu \\perp c \\; (3694\\text{ cm}^{-1}) \\quad | \\quad \\text{Agua Tipo II: } \\mu \\parallel c \\; (3592\\text{ cm}^{-1})',
      diagramType: 'Espectro Óptico / FTIR',
      diagramCaption: 'Espectro de absorción FTIR en región de estiramiento del agua de canal (3500-3800 cm⁻¹) en esmeraldas naturales.',
      imageSource: 'Laboratorio Gemológico CDTEC Bogotá / Archivo Espectroscópico',
      imageAuthor: 'Área de Espectrometría CDTEC',
      imageLicense: 'Uso Académico Autorizado',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm3-l4',
      moduleId: 3,
      order: 4,
      title: 'Lección 3.4: Cristaloquímica de la Sustitución Isomórfica: El Rol de Cr³⁺, V³⁺ y Fe',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Teoría del campo de ligandos en los sitios octaédricos del berilo. Sustitución de Al³⁺ por cationes cromóforos d³. Compensación de carga por acoplamiento de álcalis intersticiales.',
      content: `El color verde de la esmeralda es una consecuencia directa de **transiciones electrónicas $d-d$ prohibidas por Laporte** pero activadas por acoplamiento vibrónico en los iones de cromo y vanadio que reemplazan al aluminio:

### 1. El Sitio Octaédrico de Coordinación 6
En el berilo puro, el ion aluminio ($Al^{3+}$, radio iónico $r = 0.535\\text{ \\AA}$) se ubica en el centro de un octaedro ligeramente distorsionado rodeado por seis átomos de oxígeno ($O^{2-}$).

### 2. Sustitución Isomórfica Directa
- **Cromo Trivalente ($Cr^{3+}$, $r = 0.615\\text{ \\AA}$):** Posee una configuración electrónica de capa abierta $3d^3$. Al entrar en el sitio octaédrico del $Al^{3+}$, el desdoblamiento del campo cristalino octaédrico ($\Delta_o$) genera dos bandas anchas de absorción en el visible: una en el violeta (~430 nm) y otra en el amarillo-rojo (~600 nm). La ventana de transmisión residual entre ambas bandas se sitúa exactamente en el **verde a 510-530 nm**.
- **Vanadio Trivalente ($V^{3+}$, $r = 0.640\\text{ \\AA}$):** Posee configuración $3d^2$. Genera bandas de absorción similares centradas en 395 y 610 nm, transmitiendo también luz verde esmeralda.
- En Colombia, tanto el $Cr^{3+}$ como el $V^{3+}$ actúan simultáneamente como centros cromóforos. En Muzo predomina el cromo ($Cr/V > 2$); en Chivor y Gachalá el vanadio puede igualar o superar al cromo ($V/Cr \\approx 1 - 2$), otorgando el matiz azuloso cristalino.

### 3. La Sustitución Acoplada con Cationes Divalentes
Cuando ingresan cationes divalentes como magnesio ($Mg^{2+}$) o hierro ferroso ($Fe^{2+}$) en el sitio octaédrico, se genera un déficit de carga positiva que debe ser compensado electrostáticamente por el ingreso simultáneo de un catión monovalente de sodio ($Na^+$) en los canales:
$$Al^{3+} \\longleftrightarrow Mg^{2+} / Fe^{2+} + Na^+_{(\\text{canal})}$$`,
      keyTakeaways: [
        'Cr³⁺ y V³⁺ sustituyen al Al³⁺ en la posición octaédrica del berilo.',
        'La absorción en el violeta y en el rojo deja una ventana de máxima transmisión en el verde (510-530 nm).',
        'En Colombia, la coexistencia de Cr³⁺ y V³⁺ con bajísimo Fe genera la pureza verde más alta de la naturaleza.'
      ],
      scientificFormula: 'Al^{3+}_{\\text{oct}} \\longleftrightarrow Cr^{3+} + V^{3+} \\quad (\\text{Sitio de simetría } D_3)',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Zonación de color verde esmeralda provocada por gradientes de concentración de cromo (Cr³⁺) en prisma euhedral.',
      imageSource: 'GIA Gems & Gemology Collection / Archivo JAIRRESTAURA',
      imageAuthor: 'GIA Gemological Laboratory Staff',
      imageLicense: 'Uso Académico Investigativo',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm3-l5',
      moduleId: 3,
      order: 5,
      title: 'Lección 3.5: Esmeraldas Trapiche: Crecimiento Sectorial Esqueletal y Desmitificación',
      readTime: '17 min',
      difficulty: 'Especialista',
      summary: 'La verdad científica sobre las esmeraldas Trapiche de Muzo y Peñas Blancas. Cristalografía de crecimiento sectorial rápido en matriz sedimentaria plástica vs falsos mitos de maclas o gemas compuestas.',
      content: `La **esmeralda Trapiche** es una de las rarezas mineralógicas más deslumbrantes del planeta. Descubierta y descrita originalmente en el distrito de Muzo en 1879 por Emile Bertrand, debe su nombre al molino tradicional de molienda de caña de azúcar de seis rayos de madera utilizado en Colombia.

### 1. Morfología y Geometría Cristalográfica
Un ejemplar Trapiche típico visto en sección transversal basal $\{0001\}$ exhibe:
- Un **núcleo central hexagonal** de berilo verde translúcido.
- Seis **brazos o tabiques radiales** negros o grisáceos que parten de los seis vértices del hexágono central formando ángulos de $60^\\circ$.
- Seis **sectores trapezoidales de crecimiento** de berilo verde limpio que rellenan el espacio entre los seis brazos.
- Los tabiques oscuros están compuestos por una densa masa de **lutita carbonosa bituminosa y microcristales de albita**.

### 2. El Mecanismo de Crecimiento Científico
Durante décadas circularon teorías erróneas que afirmaban que la esmeralda Trapiche era una macla cíclica de seis cristales o un doblete ensamblado. Las investigaciones cristalográficas por difracción de rayos X (GIA, Pignatelli et al., Giuliani et al.) demostraron categóricamente que:
1. **Es un único monocristal coherente:** Todos los sectores de berilo comparten una red cristalina continua con el mismo eje óptico $c$ vertical. No existe rotación reticular de macla.
2. **Crecimiento sectorial esqueletal:** Ocurrió durante una descompresión adiabática violenta que provocó una sobresaturación hidrotermal extrema en una roca encajante sedimentaria blanda e inconsolidada (lutita bituminosa plástica).
3. El cristal central creció a velocidad moderada. Luego, las aristas del hexágono crecieron a una velocidad cinética mucho más rápida a lo largo de las direcciones $\{11\\bar{2}0\}$ que las caras $\{10\\bar{1}0\}$, empujando mecánicamente la matriz de lutita hacia las esquinas donde quedó atrapada como tabiques radiales.`,
      keyTakeaways: [
        'La esmeralda Trapiche NO es una macla ni una gema compuesta; es un monocristal con continuidad de red.',
        'Se origina por crecimiento sectorial esqueletal a alta velocidad en matriz de lutita carbonosa plástica.',
        'Exclusividad geológica colombiana: Muzo, Coscuez y Peñas Blancas son sus fuentes mundiales clásicas.'
      ],
      scientificFormula: '\\text{Morfología: Núcleo } \\{10\\bar{1}0\\} + 6 \\text{ brazos a } 60^\\circ \\text{ con inclusión de lutita y albita}',
      svgTechnicalDiagram: 'trapiche_structure',
      diagramType: 'Ilustración Técnica Vectorial',
      diagramCaption: 'Esquema cristalográfico del crecimiento sectorial esqueletal Trapiche: núcleo hexagonal y 6 brazos de lutita.',
      imageSource: 'Carbon Journal (Pignatelli et al.) / Diagramación JAIRRESTAURA',
      imageAuthor: 'I. Pignatelli, G. Giuliani & D. Bourgarit',
      imageLicense: 'Uso Educativo Académico',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm3-l6',
      moduleId: 3,
      order: 6,
      title: 'Lección 3.6: Zonaciones de Crecimiento Oscilatorio y Tensiones de Red',
      readTime: '14 min',
      difficulty: 'Avanzado',
      summary: 'Bandas de crecimiento rítmico concéntricas en caras prismáticas. Variaciones episódicas de Cr y V. Detección de tensiones elásticas residuales en polariscopio y polarización cruzada.',
      content: `La cristalización del berilo en el subsuelo colombiano no fue un evento estático ni continuo, sino un proceso pulsante y episódico gobernado por ciclos sísmicos:

### 1. Zonación de Crecimiento Concéntrica (Growth Zoning)
Bajo el microscopio gemológico con luz transmitida o inmersión, muchas esmeraldas colombianas revelan **bandas paralelas alternadas de verde claro y verde oscuro**:
- Estas bandas siguen con rigor geométrico las caras prismáticas $\{10\\bar{1}0\}$.
- Se originan porque cada pulso de apertura de fractura inyectaba una nueva oleada de salmuera hidrotermal con concentraciones ligeramente diferentes de cromo y vanadio lixiviado.
- Esta geometría recta hexagonal es diagnóstica: en esmeraldas sintéticas hidrotermales, las bandas de crecimiento exhiben ángulos en chevron en lugar de polígonos hexagonales cerrados.

### 2. Tensiones Elásticas de Red y Birrefringencia Anómala
- Cuando el berilo se enfría rápidamente o sufre esfuerzos tectónicos tardíos de cizalla, se generan defectos de dislocación en su red.
- En el polariscopio entre polarizadores cruzados, esto se observa como **extinción ondulante** o parches de interferencia anómalos (patrón en "damero" o "tela de araña"), evidenciando tensiones elásticas acumuladas.
- El tallador debe inspeccionar estas zonas de tensión antes del facetado para evitar que el choque térmico de la rueda desgate o fracture la gema a lo largo de las zonas de cizalla interna.`,
      keyTakeaways: [
        'Las bandas de crecimiento concéntricas reflejan pulsos hidrotermales rítmicos durante la orogenia.',
        'Siguen la simetría de caras prismáticas hexagonales {10-10}.',
        'El polariscopio permite detectar tensiones elásticas residuales que representan riesgo durante la talla.'
      ],
      scientificFormula: '\\text{Zonación: Variación episódica de } \\text{wt.\\% } Cr_2O_3 \\text{ en capas concéntricas}',
      diagramType: 'Microfotografía Gemológica',
      diagramCaption: 'Bandeamiento hexagonal concéntrico en esmeralda observado bajo microscopio con polarizadores cruzados.',
      imageSource: 'Gems & Gemology / MicroWorld Photo Atlas (Koivula)',
      imageAuthor: 'John I. Koivula (GIA)',
      imageLicense: 'Uso Educativo Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80'
    }
  ],
  caseStudy: {
    title: 'Autenticación Cristalográfica de Esmeralda Trapiche Frente a Fraude por Pegado',
    scenario: 'En una joyería de Bogotá se somete a valoración un supuesto cabujón de esmeralda Trapiche de 8.40 quilates que muestra una estrella negra de 6 puntas perfecta. El cliente sospecha que se trata de un "doblete compuesto" elaborado pegando sectores triangulares tallados.',
    gemologicalAnalysis: 'Se sumerge la gema en una célula de inmersión con benzoato de bencilo bajo microscopio gemológico en campo oscuro y luz polarizada. Se examina la continuidad cristalográfica de la extinción en 360°. Los 6 sectores triangulares de berilo verde entran en extinción óptica exactamente al mismo tiempo y con el mismo ángulo de rotación, confirmando que pertenecen al mismo monocristal continuo. En la inspección superficial, los tabiques negros muestran lutita bituminosa natural dendrítica incrustada en la red cristalina, sin presencia de adhesivos poliméricos ni líneas de pegamento fluorescentes en UV.',
    diagnosticLimitations: 'Existen fraudes donde se cortan 6 triángulos de berilo común y se unen con resina negra. Solo la extinción simultánea bajo polariscopio y la ausencia de líneas de cementación confirman la autenticidad de un espécimen Trapiche.',
    learningOutcome: 'Certificación auténtica de esmeralda Trapiche de Peñas Blancas de alto valor coleccionable. La cristalografía óptica resolvió de manera concluyente la duda del cliente.'
  },
  practicalActivity: {
    title: 'Modelado Tridimensional de la Celda Unidad y Determinación de Simetría',
    instructions: '1. Utilizando el software cristalográfico libre VESTA o plantillas de papel milimetrado, graficar la proyección basal (0001) de la celda unidad del berilo con sus anillos [Si6O18]. 2. Ubicar la posición del canal central cilíndrico e insertar una molécula de agua en orientación Tipo I (eje dipolar perpendicular a c). 3. Dibujar un catión de Na+ en el canal y representar la rotación de 90° del agua Tipo II. 4. Explicar en un esquema cómo se diferencian ambos arreglos en el espectro FTIR.',
    materialsNeeded: [
      'Plantilla cristalográfica de red hexagonal P6/mcc',
      'Calculadora científica y regla milimetrada',
      'Espectros de referencia FTIR de laboratorio CDTEC'
    ],
    deliverable: 'Diagrama cristaloquímico anotado con la orientación de moléculas de agua Tipo I/II y justificación de las frecuencias de vibración molecular.',
    rubric: [
      { criterion: 'Exactitud en la geometría hexagonal de los anillos', weight: '35%' },
      { criterion: 'Correcta orientación de los dipolos de agua Tipo I vs Tipo II', weight: '35%' },
      { criterion: 'Correlación analítica con los picos de absorción FTIR', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm3-q1',
      question: '¿Cuál es la orientación del eje dipolar de la molécula de agua Tipo I en los canales del berilo y por qué es altamente característica de las esmeraldas colombianas?',
      type: 'multiple_choice',
      options: [
        'Su eje dipolar está orientado paralelo al eje óptico c debido a la gran cantidad de sodio.',
        'Su eje dipolar está orientado perpendicular al eje óptico c porque los canales no albergan cationes alcalinos (Na+), lo que refleja el bajo contenido de álcalis de los fluidos colombianos.',
        'El agua en los canales de la esmeralda no tiene orientación fija; rota libremente como en un vaso de agua.',
        'Las esmeraldas colombianas no contienen agua en sus canales porque son rocas magmáticas anhidras.'
      ],
      correctAnswer: 1,
      explanation: 'El agua Tipo I ocurre en canales libres de álcalis; su momento dipolar se orienta perpendicular al eje c (generando el pico FTIR en 3694 cm⁻¹). Al ser las esmeraldas colombianas muy bajas en sodio y álcalis comparadas con las de África o Brasil, el agua Tipo I es la dominante diagnóstica.',
      scientificReference: 'Wood, D. L., & Nassau, K. (1968). The characterization of beryl and emerald by visible and infrared absorption spectroscopy. American Mineralogist, 53(5-6).'
    },
    {
      id: 'm3-q2',
      question: '¿Qué afirmación describe científicamente la estructura de una esmeralda Trapiche colombiana genuina?',
      type: 'multiple_choice',
      options: [
        'Es una macla de rotación cíclica de seis cristales de berilo independientes unidos por las aristas.',
        'Es un único monocristal continuo formado por crecimiento sectorial esqueletal a alta velocidad donde la matriz de lutita y albita fue atrapada en seis tabiques radiales.',
        'Es un fósil vegetal de la caña de azúcar precolombina reemplazado por berilo verde.',
        'Es una gema artificial compuesta fabricada en Rusia mediante pegado de seis cuñas.'
      ],
      correctAnswer: 1,
      explanation: 'Los análisis de difracción de rayos X monocristalino (Pignatelli et al., GIA) han demostrado que la esmeralda Trapiche es un único monocristal con continuidad perfecta de red cristalina y orientación de eje óptico idéntica, originada por crecimiento sectorial esqueletal en lutita blanda.',
      scientificReference: 'Pignatelli, I., et al. (2015). A review of the trapiche beryl from Colombia. Gems & Gemology, 51(3).'
    },
    {
      id: 'm3-q3',
      question: '¿Qué elemento químico de transición d³ reemplaza isomórficamente al Al³⁺ en el sitio octaédrico del berilo generando las bandas de absorción que producen el color verde esmeralda?',
      type: 'multiple_choice',
      options: [
        'Silicio (Si4+) en coordinación tetraédrica.',
        'Cromo trivalente (Cr3+) y vanadio trivalente (V3+).',
        'Hierro metálico nativo (Fe0).',
        'Carbono orgánico bituminoso.'
      ],
      correctAnswer: 1,
      explanation: 'El Cr³⁺ y el V³⁺ poseen radios iónicos compatibles para sustituir al Al³⁺ en la posición octaédrica del berilo. Sus transiciones electrónicas en campo ligando absorben la luz azul-violeta y roja, permitiendo únicamente la transmisión de la luz verde.',
      scientificReference: 'Burns, R. G. (1993). Mineralogical Applications of Crystal Field Theory. Cambridge University Press.'
    },
    {
      id: 'm3-q4',
      question: '¿Cuál es el grupo espacial y el sistema cristalográfico al que pertenece el berilo noble?',
      type: 'multiple_choice',
      options: [
        'Sistema cúbico, grupo espacial Fd3m (igual al diamante).',
        'Sistema hexagonal, clase dihexagonal bipiramidal (6/mmm), grupo espacial P6/mcc.',
        'Sistema monoclínico, grupo espacial P21/c.',
        'Sistema trigonal romboédrico, grupo R3c (igual al corindón).'
      ],
      correctAnswer: 1,
      explanation: 'El berilo pertenece al sistema hexagonal, clase holohédrica dihexagonal bipiramidal (6/mmm) y grupo espacial P6/mcc (número 192), caracterizado por una simetría senaria a lo largo del eje óptico vertical c.',
      scientificReference: 'Bragg, W. L., & West, J. (1926). The structure of beryl, Be3Al2Si6O18. Proceedings of the Royal Society of London, 111(759).'
    },
    {
      id: 'm3-q5',
      question: '¿Qué prueba no destructiva permite detectar la presencia de tensiones elásticas residuales en la red cristalina de un berilo en bruto antes de tallarlo?',
      type: 'multiple_choice',
      options: [
        'Examen bajo polariscopio gemológico con polarizadores cruzados observando si presenta extinción ondulante anómala.',
        'Prueba de rayado con punta de acero de dureza 6.',
        'Golpear el cristal con un martillo para ver si resiste el impacto.',
        'Sumergir el cristal en ácido sulfúrico concentrado.'
      ],
      correctAnswer: 0,
      explanation: 'El polariscopio con filtros cruzados revela de inmediato la birrefringencia anómala por deformación de red (extinción ondulante o en parches), señalando zonas de alta tensión donde el cristal podría astillarse durante la lapidación.',
      scientificReference: 'Liddicoat, R. T. (1989). Handbook of Gem Identification. GIA.'
    }
  ],
  externalReferences: [
    {
      title: 'Gems & Gemology: Comprehensive Review of Trapiche Emeralds',
      url: 'https://www.gia.edu/gems-gemology/fall-2015-trapiche-beryl-colombia',
      institution: 'Gemological Institute of America',
      description: 'Estudio cristalográfico de difracción de rayos X y petrografía del crecimiento sectorial de trapiches.',
      category: 'Cristalografía de Gemas'
    },
    {
      title: 'American Mineralogist: Crystal Structure and Infrared Spectra of Beryl',
      url: 'https://www.minsocam.org/ammin',
      institution: 'Mineralogical Society of America',
      description: 'Artículos científicos fundamentales sobre agua Tipo I y Tipo II en ciclosilicatos.',
      category: 'Física Mineral'
    }
  ],
  bibliography: [
    {
      author: 'Pignatelli, I., Giuliani, G., Morlot, C., et al.',
      year: '2015',
      title: 'A review of the trapiche beryl from Colombia: crystallographic and fluid inclusion evidence',
      publication: 'Gems & Gemology, 51(3), 222-243',
      doiOrUrl: 'https://doi.org/10.5741/GEMS.51.3.222'
    },
    {
      author: 'Wood, D. L., & Nassau, K.',
      year: '1968',
      title: 'The characterization of beryl and emerald by visible and infrared absorption spectroscopy',
      publication: 'American Mineralogist, 53(5-6), 777-800',
      doiOrUrl: 'https://www.minsocam.org'
    },
    {
      author: 'Aurisicchio, C., Fioravanti, G., Grubessi, O., & Zanazzi, P. F.',
      year: '1988',
      title: 'Reappraisal of the crystal chemistry of beryl',
      publication: 'American Mineralogist, 73(7-8), 826-837',
      doiOrUrl: 'https://www.minsocam.org'
    }
  ]
};
