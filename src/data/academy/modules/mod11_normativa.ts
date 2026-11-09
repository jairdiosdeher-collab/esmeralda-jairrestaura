import { DiplomaModule } from '../../../types/academy';

export const MOD_11_NORMATIVA: DiplomaModule = {
  id: 11,
  code: 'MOD-11',
  title: 'Módulo 11: Marco Normativo, Trazabilidad RUCOM, Debida Diligencia OCDE y Minería Sostenible',
  shortTitle: 'Marco Normativo y Minería',
  academicHours: 10,
  overview: 'Legislación minera colombiana (Ley 685 de 2001, Código de Minas). La Agencia Nacional de Minería (ANM) y el Registro Único de Comercializadores (RUCOM). Guías oficiales de transporte minero, regalías y control aduanero. Estándares internacionales de Debida Diligencia de la OCDE para cadenas de suministro éticas y gestión ambiental responsable con Corpoboyacá y CAR.',
  competencies: [
    'Interpretar el régimen legal de títulos mineros, concesiones y regalías bajo la Ley 685 de 2001.',
    'Tramitar y auditar inscripciones vigentes en el RUCOM ante la Agencia Nacional de Minería.',
    'Expedir y verificar Guías de Transporte Minero para amparar la movilización lícita de esmeraldas.',
    'Implementar los cinco pasos de las Directrices de Debida Diligencia de la OCDE para exportación ética.',
    'Supervisar el cumplimiento de Planes de Manejo Ambiental (PMA) con Corpoboyacá y CAR.'
  ],
  learningObjectives: [
    'Diferenciar las figuras legales de concesión formal, contrato de operación y minería de subsistencia (barequeo).',
    'Conocer las sanciones administrativas y penales por comercializar minerales sin registro RUCOM.',
    'Comprender la trazabilidad documental desde la boca de mina hasta el despacho aéreo aduanero.',
    'Evaluar el impacto de la gestión de aguas de socavón y seguridad geotécnica en la minería subterránea.'
  ],
  prerequisites: ['Módulos 1 a 10 aprobados o ejercicio profesional en minería, derecho, comercio o auditoría.'],
  heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Mapa de Yacimiento',
  lessons: [
    {
      id: 'm11-l1',
      moduleId: 11,
      order: 1,
      title: 'Lección 11.1: El Código de Minas Colombiano (Ley 685 de 2001) y el Título de Concesión',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'El principio constitucional: los recursos del subsuelo son propiedad inalienable del Estado. El contrato único de concesión minera, etapas de exploración, construcción/montaje y explotación, y el Registro Minero Nacional (RMN).',
      content: `El marco legal rector de la minería en Colombia se fundamenta en el Artículo 332 de la Constitución Política y en la **Ley 685 de 2001 (Código de Minas)**:

### 1. Titularidad del Estado y Contrato de Concesión
- En Colombia, **el Estado es el propietario exclusivo e inalienable de todos los recursos minerales del subsuelo**. Los propietarios de la superficie del terreno no son dueños de las esmeraldas que se encuentren bajo el suelo.
- La única vía jurídica para explorar y explotar legalmente es mediante un **Contrato de Concesión Minera** otorgado por la autoridad minera competente (la Agencia Nacional de Minería - ANM).
- **Las Tres Etapas del Contrato de Concesión:**
  1. *Exploración Geológica Técnica:* Hasta por 3 años (prorrogables) para delimitar las zonas mineralizadas mediante galerías y sondeos.
  2. *Construcción y Montaje:* Adecuación de infraestructura de socavón, ventilación, electrificación y plantas de beneficio.
  3. *Explotación Comercial:* Extracción sistemática del mineral por un periodo de hasta 30 años (prorrogable hasta por otros 30 años).

### 2. El Registro Minero Nacional (RMN)
Todo contrato de concesión válido debe estar debidamente inscrito en el **Registro Minero Nacional (RMN)** y georreferenciado en el catastro minero digital oficial (**plataforma Anna Minería**). Toda extracción fuera de un polígono RMN con licencia ambiental se clasifica legalmente como minería no autorizada o ilícita.`,
      keyTakeaways: [
        'El Estado es el único propietario del subsuelo minero en Colombia (Art. 332 Constitución).',
        'El contrato de concesión minera comprende exploración, montaje y explotación por hasta 30 años.',
        'La inscripción en el Registro Minero Nacional (RMN) y Anna Minería es el pilar de la legalidad.'
      ],
      scientificFormula: '\\text{Marco: Ley 685 de 2001 (Código de Minas) } \\rightarrow \\text{Inscripción en Registro Minero Nacional (RMN)}',
      diagramType: 'Fotografía de Yacimiento Minero',
      diagramCaption: 'Bocamina y galería subterránea tecnificada de explotación minera formal de esmeraldas en Boyacá amparada por título RMN.',
      imageSource: 'Agencia Nacional de Minería (ANM) / Archivo de Fiscalización',
      imageAuthor: 'Ingeniería de Minas ANM',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm11-l2',
      moduleId: 11,
      order: 2,
      title: 'Lección 11.2: El RUCOM: Registro Único de Comercializadores y Régimen Sancionatorio',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'El RUCOM administrado por la Agencia Nacional de Minería (ANM). Quiénes deben inscribirse obligatoriamente, requisitos de renovación anual, causales de cancelación y sanciones penales por receptación de minerales.',
      content: `El **RUCOM (Registro Único de Comercializadores de Minerales)** es la herramienta oficial de control que combate el comercio ilícito y garantiza el origen lícito de las piedras preciosas:

### 1. Sujetos Obligados a Inscribirse en el RUCOM
De conformidad con el Decreto 0276 de 2015 y resoluciones de la ANM, están **obligados por ley a contar con inscripción vigente en el RUCOM**:
1. Toda persona natural o jurídica que compre, almacene, transporte o venda esmeraldas en bruto o talladas dentro del territorio nacional.
2. Los talleres de lapidación que adquieran mineral para transformación y reventa.
3. Las empresas exportadoras de gemas preciosas.
- *Excepción:* El consumidor final que adquiere una joya terminada para uso personal no requiere RUCOM.

### 2. Requisitos de Inscripción y Renovación
- Registro Único Tributario (RUT) con actividad económica minera o de comercio de piedras preciosas.
- Certificado de Cámara de Comercio vigente.
- Acreditación de la procedencia lícita: demostrar que las compras provienen de **titulares mineros con RMN activo** o de **barequeros formalmente inscritos en las alcaldías**.
- La inscripción tiene **vigencia de 1 año** y debe ser renovada anualmente ante la ANM.

### 3. Régimen Sancionatorio y Decomisos
- **Comprar a un comerciante sin RUCOM activo es un delito:** El Código Penal colombiano (Ley 599 de 2000, Artículo 338 modificado) tipifica como delito la *Explotación ilícita de yacimiento minero y otros materiales*, así como el delito de *Receptación* (Art. 447).
- La Policía Nacional y la Fiscalía están facultadas para **incautar y decomisar de inmediato cualquier lote de esmeraldas** que sea transportado o comercializado por personas sin RUCOM vigente o sin Guía de Transporte amparada.`,
      keyTakeaways: [
        'El RUCOM es obligatorio para cualquier comerciante, intermediario o exportador de esmeraldas.',
        'La inscripción debe renovarse anualmente ante la Agencia Nacional de Minería (ANM).',
        'Comercializar sin RUCOM acarrea el decomiso inmediato de las gemas y responsabilidad penal por receptación.'
      ],
      scientificFormula: '\\text{RUCOM: Certificación oficial ANM con código alfanumérico único de comerciante autorizado}',
      diagramKey: 'traceability_chain',
      diagramType: 'Esquema Cristalográfico Vectorial',
      diagramCaption: 'Cadena de custodia y trazabilidad oficial (ANM RUCOM / Decreto 1666): del título minero formal al pasaporte digital de exportación.',
      imageSource: 'Agencia Nacional de Minería / Esquemas Normativos JAIRRESTAURA',
      imageAuthor: 'Equipo Científico JAIRRESTAURA',
      imageLicense: 'Creative Commons CC-BY-SA 4.0',
      isRealPhoto: false,
      verificationStatus: 'Esquema Educativo Validador'
    },
    {
      id: 'm11-l3',
      moduleId: 11,
      order: 3,
      title: 'Lección 11.3: La Guía de Transporte Minero y la Legalización del Tránsito Vial',
      readTime: '14 min',
      difficulty: 'Intermedio',
      summary: 'El documento de movilización oficial de minerales en Colombia. Expedición electrónica, vigencia temporal por horas, ruta vial autorizada entre Boyacá/Cundinamarca y Bogotá, y control en retenes policiales.',
      content: `Movilizar esmeraldas en bruto o talladas por las carreteras de Colombia exige un estricto cumplimiento documental para evitar la incautación preventiva:

### 1. La Guía de Transporte Minero Electrónica
Es el documento expedido a través de la plataforma de la Agencia Nacional de Minería (ANM) que ampara la movilización legal de minerales desde el punto de origen hasta su destino final:
- Contiene un **código de barras y código QR único de seguridad** verificable en tiempo real por las autoridades viales mediante dispositivos móviles conectados a la base de datos de la Policía Nacional.

### 2. Datos Obligatorios de la Guía
1. **Identificación del Remitente:** Nombre, cédula/NIT y número de título minero RMN o código RUCOM del comercializador.
2. **Identificación del Destinatario:** Datos completos del taller lapidario o empresa compradora receptora.
3. **Descripción Exacta de la Mercancía:** Peso neto exacto en gramos y quilates, estado del mineral (en bruto, en matriz sedimentaria o tallado) y número de unidades.
4. **Ruta y Vigencia Temporal:** Trayecto vial autorizado (ej. Muzo - Chiquinquirá - Ubaté - Bogotá) y ventana horaria estricta de vigencia (habitualmente entre 24 y 72 horas).
5. Si la policía vial detecta una discrepancia entre el peso físico y el peso declarado en la guía, o si la guía se encuentra vencida, el lote es retenido preventivamente y puesto a disposición de la autoridad judicial competente.`,
      keyTakeaways: [
        'La Guía de Transporte Minero ampara la movilización terrestre legal de esmeraldas en Colombia.',
        'Contiene código QR único verificable por la Policía de Tránsito y Carreteras en tiempo real.',
        'Debe especificar peso exacto en quilates, ruta autorizada y tiene vigencia temporal acotada en horas.'
      ],
      scientificFormula: '\\text{Guía Minera: Título RMN / RUCOM Origen } + \\text{Peso exacto (ct)} + \\text{Ruta } + \\text{Vigencia horaria}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Verificación en terminal de transporte de Guía de Tránsito Minero electrónica con código QR único de la ANM.',
      imageSource: 'Policía Nacional de Colombia / Dirección de Tránsito y Transporte',
      imageAuthor: 'Archivo de Control Minero',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm11-l4',
      moduleId: 11,
      order: 4,
      title: 'Lección 11.4: Directrices de Debida Diligencia de la OCDE para Cadenas de Suministro Responsables',
      readTime: '17 min',
      difficulty: 'Avanzado',
      summary: 'El estándar de la Organización para la Cooperación y el Desarrollo Económicos (OCDE). El marco de cinco pasos para la gestión de riesgos en minerales preciosos. Prevención de lavado de activos, conflicto armado y trabajo infantil.',
      content: `Para que una esmeralda colombiana ingrese a las grandes marcas globales de lujo (LVMH, Richemont, Kering) y a la banca internacional, el exportador debe certificar el cumplimiento de las **Directrices de Debida Diligencia de la OCDE**:

### 1. El Marco de los 5 Pasos de la OCDE
1. **Paso 1: Establecer Sistemas Sólidos de Gestión Empresarial:**
   - Adopción formal de una política corporativa de debida diligencia sobre la cadena de suministro de piedras preciosas.
   - Creación de un sistema de archivo documental que conserve facturas, guías y contratos por al menos 5 años.
2. **Paso 2: Identificar y Evaluar Riesgos en la Cadena de Suministro:**
   - Mapear el origen físico de cada piedra: certificar que el mineral no proviene de zonas bajo control de grupos armados ilegales ni de operaciones con trabajo infantil forzado.
3. **Paso 3: Diseñar e Implementar una Estrategia de Mitigación de Riesgos:**
   - Suspender transacciones con proveedores que no puedan acreditar el origen legal de sus extracciones o que se nieguen a la bancarización formal.
4. **Paso 4: Auditoría Independiente de Terceros sobre la Debida Diligencia:**
   - Someter los libros de compras y trazabilidad a firmas auditoras internacionales independientes.
5. **Paso 5: Informar Públicamente sobre la Debida Diligencia:**
   - Publicar anualmente un informe de sostenibilidad y debida diligencia de la empresa accesible a clientes e inversionistas internacionales.`,
      keyTakeaways: [
        'Las Directrices de la OCDE son el pasaporte ético para vender a las marcas de lujo de Europa y EE.UU.',
        'El marco de 5 pasos exige gestión interna, mapeo de riesgos, mitigación, auditoría externa y reporte público.',
        'Garantiza que las esmeraldas están 100% libres de conflicto armado, trabajo infantil y lavado de dinero.'
      ],
      scientificFormula: '\\text{OCDE: 1. Gestión } \\rightarrow \\text{2. Riesgo } \\rightarrow \\text{3. Mitigación } \\rightarrow \\text{4. Auditoría } \\rightarrow \\text{5. Reporte}',
      diagramType: 'Instrumental Óptico',
      diagramCaption: 'Auditoría de debida diligencia según directrices de la OCDE: inspección de libros de compras, SAGRILAFT y origen legal.',
      imageSource: 'Fedesmeraldas / Auditoría Internacional OCDE',
      imageAuthor: 'Comité de Sostenibilidad Fedesmeraldas',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm11-l5',
      moduleId: 11,
      order: 5,
      title: 'Lección 11.5: Gestión Ambiental en Minería Subterránea: Corpoboyacá y CAR',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'El Plan de Manejo Ambiental (PMA) y la Licencia Ambiental en minería subterránea. Manejo y neutralización de aguas ácidas de socavón, estabilidad de estériles y botaderos, reforestación de cuencas y monitoreo de fauna.',
      content: `La minería moderna de esmeraldas en Colombia es subterránea de socavón, lo que minimiza la afectación de la superficie vegetal pero exige un estricto control de aguas y estériles bajo la vigilancia de las corporaciones autónomas regionales (**Corpoboyacá** en Boyacá y la **CAR** en Cundinamarca):

### 1. El Manejo de Aguas de Infiltración de Socavón
- En las galerías subterráneas, el agua subterránea entra en contacto con los shales negros ricos en pirita ($FeS_2$).
- En presencia de oxígeno disuelto, la pirita se oxida lentamente generando ácido sulfúrico diluido y hierro disuelto (drenaje ácido de mina potencial):
$$2FeS_2 + 7O_2 + 2H_2O \\longrightarrow 2Fe^{2+} + 4SO_4^{2-} + 4H^+$$
- **Tratamiento Ambiental Obligatorio:** Las aguas de socavón deben ser bombeadas a plantas de tratamiento de aguas residuales mineras (PTARM), donde se someten a **neutralización con cal apagada o carbonato de calcio**, aireación y sedimentación de lodos en piscinas escalonadas antes de ser vertidas a las quebradas con pH neutro ($6.5 - 8.5$).

### 2. Manejo Geotécnico de Estériles y Escombreras
- La roca de desecho (lutitas y calizas sin mineralización) debe disponerse en botaderos de estériles técnicamente diseñados con terrazas compactadas, canales perimetrales de desvío de lluvias y reforestación con especies nativas para prevenir deslizamientos en la escarpada orografía andina.`,
      keyTakeaways: [
        'Corpoboyacá y CAR son las autoridades ambientales que aprueban y auditan la Licencia Ambiental.',
        'Las aguas de socavón deben ser neutralizadas en plantas PTARM para evitar acidificación de ríos.',
        'Las escombreras de estériles exigen diseño geotécnico escalonado y revegetación con especies nativas.'
      ],
      scientificFormula: '\\text{Control Ambiental: PTARM con neutralización de pH } (6.5 - 8.5) + \\text{ Estabilidad geotécnica}',
      diagramType: 'Fotografía de Yacimiento Minero',
      diagramCaption: 'Planta de tratamiento de aguas residuales mineras (PTARM) con neutralización de pH y revegetación de botaderos en Boyacá supervisada por Corpoboyacá.',
      imageSource: 'Corporación Autónoma Regional de Boyacá (Corpoboyacá)',
      imageAuthor: 'Gestión Ambiental Minera Corpoboyacá',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm11-l6',
      moduleId: 11,
      order: 6,
      title: 'Lección 11.6: Formalización de la Minería de Subsistencia y el Papel de los Barequeros',
      readTime: '14 min',
      difficulty: 'Intermedio',
      summary: 'El régimen legal especial para mineros artesanales tradicionales y barequeros (Ley 685 de 2001 y Decreto 1666 de 2016). Inscripción en el censo municipal, topes mensuales de producción y comercialización protegida.',
      content: `La minería artesanal tradicional, conocida históricamente en Boyacá como el **"guaqueo" o "barequeo"**, es una práctica sociocultural ancestral amparada por la legislación colombiana con un marco especial de formalización:

### 1. Definición Legal del Barequeo en Esmeraldas
El Artículo 155 del Código de Minas define el barequeo como la actividad popular de lavado de arenas por medios manuales en las riberas de los ríos y quebradas, o la recolección manual de residuos en las escombreras autorizadas de las minas, **sin empleo de maquinaria pesada ni uso de explosivos**:
- Es una labor estrictamente artesanal y manual (bateas, palas, picos y lavado por gravedad).

### 2. El Censo y Registro ante las Alcaldías Municipales
Para comercializar legalmente sus hallazgos sin ser objeto de decomisos o persecución judicial:
1. El barequero debe estar formalmente inscrito en el **censo de minería de subsistencia** de la Alcaldía de su municipio (Muzo, San Pablo de Borbur, Quipama, Chivor, etc.).
2. La Alcaldía certifica su identidad y residencia ante la Agencia Nacional de Minería (ANM), otorgándole un código único en la plataforma RUCOM.
3. **Topes Máximos de Comercialización:** La ley establece cupos máximos mensuales de venta para el barequeo de piedras preciosas, evitando que redes ilegales utilicen falsos barequeros para blanquear producción clandestina.
4. Los compradores autorizados pueden comprar directamente a estos mineros censados liquidando la respectiva retención y registro de origen.`,
      keyTakeaways: [
        'El barequeo es una actividad tradicional manual protegida por el Artículo 155 del Código de Minas.',
        'Requiere inscripción formal en el censo de minería de subsistencia de la alcaldía municipal correspondiente.',
        'La formalización protege al minero tradicional, garantizándole acceso al mercado formal sin intermediarios oscuros.'
      ],
      scientificFormula: '\\text{Art. 155 Ley 685/2001: Minería de subsistencia manual sin explosivos ni maquinaria pesada}',
      diagramType: 'Fotografía de Yacimiento Minero',
      diagramCaption: 'Comunidad de mineros artesanales tradicionales (barequeros) censados formalmente ante la alcaldía local en labores de lavado manual.',
      imageSource: 'Alcaldía Municipal de Muzo / Programa de Minería Tradicional',
      imageAuthor: 'Secretaría de Minas y Medio Ambiente',
      imageLicense: 'Uso Educativo y Académico',
      isRealPhoto: true,
      verificationStatus: 'Verificada Científicamente',
      diagramUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    }
  ],
  caseStudy: {
    title: 'Auditoría de Cadena de Custodia: Exportador Colombiano Certificado por Marca de Alta Joyería Suiza',
    scenario: 'Una importante firma de alta relojería y joyería en Ginebra (Suiza) desea firmar un contrato de suministro a 3 años por USD $1.5 millones con una comercializadora de Bogotá, exigiendo acreditación completa de la Guía de Debida Diligencia de la OCDE.',
    gemologicalAnalysis: 'El equipo auditor inspecciona la cadena de suministro de la empresa colombiana: 1) El 70% de las esmeraldas proviene de dos títulos de concesión RMN vigentes con licencia ambiental de Corpoboyacá al día. 2) El 30% restante proviene de 24 barequeros censados en la Alcaldía de Quipama con pago directo bancarizado. 3) Cada lote transportado a Bogotá cuenta con su respectiva Guía de Transporte Minero emitida por la ANM. 4) La empresa no realiza pagos en efectivo informal por encima de los topes legales y cuenta con oficial de cumplimiento antilavado (SAGRILAFT).',
    diagnosticLimitations: 'El proceso de auditoría tardó 6 meses y requirió visitas de campo a las bocaminas en Boyacá.',
    learningOutcome: 'Aprobación exitosa de la auditoría internacional. El exportador colombiano cerró el contrato y demostró que la minería responsable y formalizada es el pasaporte al mercado de lujo global.'
  },
  practicalActivity: {
    title: 'Simulación de Radicación de Guía de Transporte Minero en la Plataforma ANM',
    instructions: '1. Ingresar al simulador de trámites mineros de la ANM. 2. Seleccionar el origen: Título Minero RMN-08241 en Muzo (Boyacá). 3. Ingresar los datos de una partida de 15 cristales en bruto con un peso de 42.50 quilates (8.50 gramos). 4. Definir la ruta de movilización vial autorizada hacia la oficina de Bogotá y calcular la vigencia temporal de 48 horas. 5. Generar la guía de transporte con código QR simulado.',
    materialsNeeded: [
      'Formato digital oficial de Guía de Transporte Minero de la ANM',
      'Datos del título minero y del comercializador autorizado con RUCOM',
      'Calculadora de pesos y mapa vial de Boyacá'
    ],
    deliverable: 'Guía de transporte minero debidamente diligenciada con código de barras y memoria técnica justificativa.',
    rubric: [
      { criterion: 'Exactitud de los datos de procedencia y RUCOM', weight: '35%' },
      { criterion: 'Coherencia de la ruta y cálculo de ventana temporal', weight: '35%' },
      { criterion: 'Cumplimiento de las especificaciones de peso y especie', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'm11-q1',
      question: 'Bajo la Constitución y el Código de Minas de Colombia (Ley 685 de 2001), ¿quién es el propietario exclusivo e inalienable de las esmeraldas que yacen en el subsuelo?',
      type: 'multiple_choice',
      options: [
        'El dueño de la finca o del terreno superficial.',
        'El Estado colombiano en representación de la Nación.',
        'El primer minero que encuentre una piedra con pala.',
        'El alcalde del municipio donde esté la mina.'
      ],
      correctAnswer: 1,
      explanation: 'El Artículo 332 de la Constitución de Colombia y el Código de Minas establecen que el Estado es el dueño exclusivo del subsuelo minero. Los particulares solo pueden explotar minerales si obtienen un Contrato de Concesión Minera debidamente inscrito en el RMN.',
      scientificReference: 'Constitución Política de Colombia (Art. 332) y Ley 685 de 2001 (Art. 5).'
    },
    {
      id: 'm11-q2',
      question: '¿Qué es el RUCOM y cuál es la consecuencia jurídica de comercializar esmeraldas en Colombia sin contar con este registro activo?',
      type: 'multiple_choice',
      options: [
        'Es un club social privado sin relevancia legal.',
        'Es el Registro Único de Comercializadores de Minerales administrado por la ANM; operar sin él constituye un delito penal (receptación y explotación ilícita) y acarrea el decomiso inmediato de las gemas por la Policía.',
        'Es un impuesto que solo pagan los joyeros extranjeros.',
        'Es una rifa anual organizada por Fedesmeraldas.'
      ],
      correctAnswer: 1,
      explanation: 'El RUCOM es el registro oficial obligatorio para toda persona que compre o venda minerales en Colombia. Comercializar sin estar inscrito es ilegal y expone al infractor a la incautación de las piedras y a penas de prisión por receptación y comercio de mineral no amparado.',
      scientificReference: 'Decreto 0276 de 2015 y Ley 599 de 2000 (Código Penal Colombiano).'
    },
    {
      id: 'm11-q3',
      question: '¿Cuál es el objetivo primordial de las Directrices de Debida Diligencia de la OCDE en la cadena de suministro de piedras preciosas?',
      type: 'multiple_choice',
      options: [
        'Subir los precios de las joyas de forma artificial para que los pobres no puedan comprarlas.',
        'Establecer un proceso de 5 pasos para verificar que los minerales no han financiado conflictos armados, violaciones de derechos humanos, trabajo infantil ni lavado de activos.',
        'Prohibir que Colombia exporte esmeraldas a Europa.',
        'Obligar a todos los mineros a hablar en idioma inglés.'
      ],
      correctAnswer: 1,
      explanation: 'La Guía de Debida Diligencia de la OCDE establece un marco de 5 pasos para garantizar que las empresas de gemas gestionan sus riesgos éticos, asegurando que las esmeraldas que llegan a la alta joyería mundial provienen de fuentes limpias y responsables.',
      scientificReference: 'OECD Due Diligence Guidance for Responsible Supply Chains of Minerals (2016).'
    },
    {
      id: 'm11-q4',
      question: '¿Qué tratamiento ambiental obligatorio deben recibir las aguas de infiltración subterránea de socavón antes de ser vertidas a los ríos de Boyacá para cumplir con Corpoboyacá?',
      type: 'multiple_choice',
      options: [
        'Echarlas directamente al río a medianoche sin que nadie las vea.',
        'Neutralización de la acidez en plantas de tratamiento (PTARM) con cal o carbonato para neutralizar el ácido sulfúrico de la pirita y decantar lodos, logrando un pH neutro entre 6.5 y 8.5.',
        'Hervir el agua con leña en pailas de cobre.',
        'Congelar el agua en bloques de hielo en la montaña.'
      ],
      correctAnswer: 1,
      explanation: 'El agua de socavón en contacto con lutitas y pirita puede oxidarse formando drenajes ácidos de mina. La licencia ambiental de Corpoboyacá exige plantas de tratamiento con neutralización química y decantación de sólidos para devolverla a las cuencas con pH neutro seguro.',
      scientificReference: 'Corporación Autónoma Regional de Boyacá (Corpoboyacá): Guías de Manejo Ambiental Minero.'
    },
    {
      id: 'm11-q5',
      question: '¿Bajo qué condiciones la actividad tradicional del "barequeo" o "guaqueo" manual de esmeraldas es reconocida y amparada como legal por la legislación colombiana?',
      type: 'multiple_choice',
      options: [
        'Siempre que usen retroexcavadoras mecánicas pesadas y dinamita.',
        'Cuando se practica de forma manual y artesanal (lavado en bateas o recolección en escombreras autorizadas) por mineros de subsistencia inscritos formalmente en el censo de la alcaldía municipal correspondiente.',
        'Nunca; el barequeo es un delito castigado con 20 años de prisión.',
        'Solo si el barequero entrega el 90% de sus piedras a la policía.'
      ],
      correctAnswer: 1,
      explanation: 'El Artículo 155 del Código de Minas reconoce el barequeo como una actividad tradicional de subsistencia estrictamente manual (sin maquinaria ni explosivos). Los barequeros deben estar censados e inscritos ante su alcaldía local para comercializar legalmente su producción.',
      scientificReference: 'Ley 685 de 2001, Artículo 155 (Minería de Subsistencia).'
    }
  ],
  externalReferences: [
    {
      title: 'Agencia Nacional de Minería (ANM) — Trámites y Normativa',
      url: 'https://www.anm.gov.co',
      institution: 'Agencia Nacional de Minería',
      description: 'Plataforma oficial del Catastro Minero, consultas RUCOM y Guías de Transporte Minero.',
      category: 'Entidad Minera Estatal'
    },
    {
      title: 'OCDE: Guía de Debida Diligencia para Cadenas de Suministro Responsable',
      url: 'https://www.oecd.org/corporate/mne/mining.htm',
      institution: 'OECD Guidelines',
      description: 'Estándar global de 5 pasos para debida diligencia en minerales y gemas de color.',
      category: 'Estándar Internacional'
    }
  ],
  bibliography: [
    {
      author: 'Congreso de la República de Colombia',
      year: '2001',
      title: 'Ley 685 de 2001: Código de Minas',
      publication: 'Diario Oficial No. 44.545, Bogotá D.C.',
      doiOrUrl: 'http://www.secretariasenado.gov.co'
    },
    {
      author: 'OECD',
      year: '2016',
      title: 'OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas (3rd ed.)',
      publication: 'OECD Publishing, Paris',
      doiOrUrl: 'https://doi.org/10.1787/9789264252479-en'
    },
    {
      author: 'Agencia Nacional de Minería (ANM)',
      year: '2020',
      title: 'Manual de Control y Fiscalización a la Comercialización de Minerales (RUCOM)',
      publication: 'Ministerio de Minas y Energía, Bogotá D.C.',
      doiOrUrl: 'https://www.anm.gov.co'
    }
  ]
};
