import { DiplomaModule } from '../../../types/academy';

export const MOD_12_EMPRENDIMIENTO: DiplomaModule = {
  id: 12,
  code: 'MOD-12',
  title: 'Módulo 12: Emprendimiento, Innovación y Futuro del Sector Esmeraldero',
  shortTitle: 'Emprendimiento e Innovación',
  academicHours: 10,
  overview: 'Desarrollo de capacidades estratégicas y tecnológicas para liderar emprendimientos sostenibles de alto valor en el ecosistema esmeraldero moderno: modelos Direct-to-Consumer (D2C), pasaportes gemológicos digitales (Blockchain / QR / nanotecnología de ADN), inteligencia artificial en triaje y espectrometría, georutas ecoturísticas en Boyacá y modelos cooperativos con enfoque de género.',
  competencies: [
    'Estructurar modelos de negocio de joyería de autor y comercialización de gemas alineados con los estándares de comercio justo y transparencia de la OCDE.',
    'Implementar arquitecturas de trazabilidad digital mediante pasaportes gemológicos, chips criptográficos y registros inmutables de cadena de custodia.',
    'Diseñar estrategias de branding y narrativas de origen auténtico sustentadas en datos científicos de laboratorio y georreferenciación satelital.',
    'Formular proyectos de ecoturismo gemológico y georutas mineras sostenibles que beneficien a las comunidades locales de Muzo, Chivor y Maripí.',
    'Analizar las aplicaciones emergentes de la inteligencia artificial y el aprendizaje automático en la clasificación espectroscópica y el triaje de gemas.',
    'Integrar esquemas de financiación verde, fondos de inversión de impacto y cooperativismo liderado por mujeres seleccionadoras (guaqueras/barequeras).'
  ],
  learningObjectives: [
    'Comparar la cadena de suministro tradicional de 8 niveles de intermediación frente a los modelos D2C de integración vertical.',
    'Explicar el funcionamiento de las tecnologías de anclaje físico (nanopartículas de ADN y microinscripción láser) vinculadas a contratos inteligentes en blockchain.',
    'Aplicar principios de storytelling científico honesto para valorizar el jardín natural de la esmeralda sin ocultar los tratamientos de claridad.',
    'Diseñar una georuta turística en el Cinturón Occidental u Oriental con protocolos de seguridad minera subterránea y geoconservación.',
    'Evaluar el impacto de algoritmos de Machine Learning en la detección automatizada de resinas epóxicas en espectroscopia FTIR.',
    'Estructurar un proyecto cooperativo minero con indicadores ESG medibles y participación de mujeres talladoras y barequeras.'
  ],
  prerequisites: [
    'Aprobación de los Módulos 1 al 11 del Diplomado en Gemología y Minería de la Esmeralda Colombiana.'
  ],
  heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
  heroImageType: 'Fotografía de Cristal en Matriz',
  lessons: [
    {
      id: 'm12-l1',
      moduleId: 12,
      order: 1,
      title: 'Lección 12.1: Modelos de Negocio en la Cadena de Valor: De la Mina al Consumidor Final (D2C)',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Desintermediación selectiva y captura de valor agregado en el sector esmeraldero. Análisis comparativo entre la comercialización atomizada tradicional y los modelos Direct-to-Consumer de joyería de autor con trazabilidad verificable.',
      content: `### 1. La Transformación del Modelo Tradicional al Direct-to-Consumer (D2C)

Históricamente, la cadena de comercialización de la esmeralda colombiana ha operado bajo un esquema de intermediación multinivel: el minero o productor vende al comisionista local en la boca de mina, este negocia con intermediarios en Bogotá (Plazoleta del Rosario), quienes transfieren a mayoristas exportadores, quienes a su vez abastecen a distribuidores en Ginebra, Nueva York o Hong Kong, para finalmente llegar a las casas de alta joyería y al consumidor final. Este modelo fragmentado provoca que el productor primario capture con frecuencia menos del 10% del valor final de la gema, al tiempo que diluye la trazabilidad y fomenta la asimetría de información.

El advenimiento del comercio digital, la conectividad global y la exigencia de transparencia por parte de las nuevas generaciones de consumidores han habilitado el modelo **Direct-to-Consumer (D2C)** y la integración vertical:
1. **Desintermediación selectiva:** Alianzas estratégicas entre talleres de corte colombianos, cooperativas mineras formales y diseñadores de joyas que presentan piezas terminadas con historia de origen verificada directamente al coleccionista o cliente de alta gama.
2. **Joyería de autor vs. Joyería genérica en masa:** El mercado contemporáneo castiga la comoditización. Una esmeralda colombiana montada en una pieza única de autor, donde se rinde homenaje a la matriz geológica original, a las características de la mina de extracción y al tallador que ejecutó la pieza, alcanza un sobreprecio (*green premium*) de hasta el 40-70% respecto a una gema genérica de catálogo montada en microfundición estandarizada.
3. **Comercio digital especializado:** Plataformas web seguras que ofrecen visualización 3D interactiva en 360°, espectrometría digital descargable, reporte gemológico de laboratorio independiente incrustado y pólizas de envío internacional asegurado puerta a puerta (Brinks, Ferrari Group, Malca-Amit).

\`\`\`
CADENA TRADICIONAL MULTINIVEL (Valor atomizado y opaco):
Minero -> Rescatador -> Comisionista -> Mayorista Bogotá -> Exportador -> Importador -> Minorista -> Cliente

NUEVO MODELO DE INTEGRACIÓN VERTICAL / D2C (Valor retenido y trazable):
Productor Formalizado + Taller de Talla + Certificación Lab -> Plataforma Digital / Joyero de Autor -> Consumidor Global
\`\`\`

---

### 2. Estructuración del Business Model Canvas para Emprendimientos Esmeralderos

Para que una iniciativa comercial sea viable y financieramente escalable, debe resolver simultáneamente la fricción técnica, la reputacional y la regulatoria:

* **Propuesta de valor diferenciada:** "Gemas colombianas con origen ético certificado desde la cuenca del Río Minero, tratadas exclusivamente con aceite de cedro orgánico grado medicinal o sin tratamiento (Minor/None), acompañadas de huella digital espectral y reporte gemológico de tercera parte".
* **Segmento de clientes objetivo:** 
  - Coleccionistas de gemas de inversión (*connoisseurs* en Norteamérica, Suiza, Singapur y Japón).
  - Parejas buscando anillos de compromiso sostenibles (*ethical bridal jewelry*), que rechazan activamente gemas vinculadas a conflictos o explotación infantil.
  - Diseñadores independientes de joyería contemporánea en Europa y América Latina.
* **Canales de adquisición y entrega:** Venta consultiva privada (*private trunk shows*), e-commerce especializado con autenticación en dos pasos, galerías boutique de arte y gemas en Bogotá, Cartagena y Medellín, y logística de valores con declaración aduanera formal (DEX).
* **Fuentes de ingresos complementarias:** Venta de gemas facetadas, venta de cristales minerales de museo en matriz carbonosa, diseño y manufactura a medida (*bespoke*), servicios de re-tallado y restauración gemológica bajo estándares científicos.`,
      keyTakeaways: [
        'El modelo D2C permite a mineros y artesanos capturar un margen significativamente mayor del precio final de la gema.',
        'La joyería de autor con identidad de origen y diseño único supera ampliamente el valor comercial de piezas estandarizadas en masa.',
        'La trazabilidad documental y la transparencia radical son los motores indispensables del sobreprecio ético.'
      ],
      diagramUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Sortija contemporánea con esmeralda colombiana talla esmeralda y oro certificado Fairmined de origen ético.'
    },
    {
      id: 'm12-l2',
      moduleId: 12,
      order: 2,
      title: 'Lección 12.2: Trazabilidad Digital, Pasaportes Gemológicos y Tecnología Blockchain',
      readTime: '16 min',
      difficulty: 'Avanzado',
      summary: 'Arquitectura de trazabilidad digital mediante registros inmutables distribuidos, smart contracts de eventos de custodia y anclaje físico mediante microinscripción láser y nanotecnología de ADN.',
      content: `### 1. La Crisis de Confianza y la Necesidad de Inmutabilidad

El comercio internacional de gemas preciosas de color enfrenta una creciente presión por parte de organismos multilaterales (OCDE, Responsible Jewellery Council - RJC) y legislaciones de importación (Dodd-Frank Act en EE.UU., Directiva de Diligencia Debida de la UE). Los certificados en papel son susceptibles de falsificación física, clonación (*matching* fraudulento de una piedra falsa con un certificado genuino) o adulteración tras intervenciones posteriores (como la recarga de polímeros sintéticos en una piedra certificada como tratada con aceite leve).

La solución tecnológica integral reside en el **Pasaporte Digital Gemológico (DPP - Digital Product Passport)** respaldado por registros distribuidos (*Distributed Ledger Technology* o Blockchain) y anclaje físico (*physical-digital binding*).

---

### 2. Arquitectura de un Pasaporte Digital Gemológico para Esmeraldas

Un sistema robusto de trazabilidad digital no se limita a un simple código QR en una tarjeta de papel. Requiere una arquitectura de tres capas:

\`\`\`
CAPA 1: ANCLAJE FÍSICO (Physical Anchor)
- Microinscripción láser femtosegundo en el filetín (profundidad < 5 µm sin inducir fracturas).
- Nanopartículas sintéticas de ADN / marcadores isotópicos (tecnología Provenance Proof / Gübelin).
- Huella digital biométrica de la gema: tomografía óptica de inclusiones 3D y espectro micro-Raman.

CAPA 2: REGISTRO DISTRIBUIDO INMUTABLE (Blockchain Layer)
- Smart Contract de evento de custodia (Mina -> Taller -> Laboratorio -> Bóveda -> Joyero).
- Hashing criptográfico (SHA-256) del reporte de laboratorio y los espectros FTIR/Raman.
- Firma digital criptográfica de los actores autorizados (RUCOM verificado).

CAPA 3: INTERFAZ DE USUARIO Y EXPERIENCIA (Consumer Layer)
- Chip NFC integrado en el estuche de joyería o lectura de código QR criptográfico.
- Aplicación móvil que reconstruye la línea temporal completa con georreferenciación satelital.
- Acceso a archivos brutos de espectrometría y fotografías macro/microscópicas de la gema.
\`\`\`

---

### 3. Casos Reales en la Industria: Provenance Proof y Gemini Ledger

1. **Gemas con ADN físico (Emerald Paternity Test - Gübelin Gem Lab):**
   Desarrollado en 2017, este método introduce nanopartículas sintéticas de ADN a base de sílice directamente en las fisuras de la esmeralda en bruto mientras está aún en la mina. Cada nanopartícula contiene un código genético sintético que codifica de forma indeleble el yacimiento exacto, la fecha de extracción y la compañía minera. Las nanopartículas resisten los procesos mecánicos de preformado, tallado y limpieza química ácida, permitiendo verificar la procedencia original en cualquier etapa futura de la vida de la gema mediante análisis por PCR (Polymerase Chain Reaction).

2. **Blockchain Provenance Proof:**
   Iniciativa de código abierto para gemas de color que registra cada transacción desde el minero artesanal hasta la casa de subastas sin revelar precios comerciales sensibles (usando pruebas de conocimiento cero o *Zero-Knowledge Proofs*), garantizando la inmutabilidad del historial de propiedad y mejoramiento de claridad.`,
      keyTakeaways: [
        'Los pasaportes gemológicos digitales vinculan la piedra física a un token criptográfico inmutable en la red blockchain.',
        'El anclaje físico mediante microinscripciones o nanopartículas de ADN evita la suplantación de gemas tras la certificación.',
        'La inmutabilidad de la cadena de custodia satisface plenamente las exigencias de debida diligencia de la OCDE.'
      ],
      diagramUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Ilustración Técnica Vectorial',
      diagramCaption: 'Diagrama de bloques criptográficos distribuidos para la trazabilidad inmutable de gemas preciosas.'
    },
    {
      id: 'm12-l3',
      moduleId: 12,
      order: 3,
      title: 'Lección 12.3: Marketing Digital, Marcas de Autor y Storytelling Científico',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Superación del marketing folclórico tradicional mediante la educación gemológica del comprador. El jardín interno de la esmeralda como huella dactilar estética irrepetible y divulgación ética de tratamientos.',
      content: `### 1. El Fin del Marketing Especulativo y el Surgimiento del "Storytelling Científico"

Durante décadas, la comercialización de esmeraldas recurrió a mitologías folclóricas para justificar los precios. Si bien el componente cultural e histórico posee valor patrimonial, el comprador contemporáneo de bienes de lujo de alto rango (Generación Millennial y Gen Z) exige **autenticidad verificable y coherencia ética**:

* **Storytelling científico vs. Mitología ficticia:** Explicar al cliente cómo fluidos salinos hidrotermales a más de 300°C interactuaron con lutitas marinas del Cretácico hace 65 millones de años, y cómo el cromo y vanadio sustituyeron al aluminio en una estructura de ciclosilicato hexagonal para engendrar ese verde inigualable, genera un asombro intelectual muy superior a cualquier fábula inventada.
* **Transparencia radical sobre tratamientos:** La ocultación o eufemización del tratamiento de fisuras destruye el valor de marca. Las marcas de autor líderes declaran abiertamente: *"Esta esmeralda ha sido optimizada ópticamente con aceite puro de cedro orgánico, un método 100% reversible y seguro, respetando la estructura original de la tierra"*. Esto no disminuye el deseo; al contrario, genera lealtad incondicional.

---

### 2. Estrategias de Contenido y Posicionamiento Digital para Joyería Esmeraldera

Para posicionar una marca de esmeraldas colombianas en el mercado internacional, se deben dominar cuatro pilares de contenido digital:

1. **Macrofotografía y microfotografía de alta resolución:**
   Las inclusiones ya no se ocultan; se celebran como el "jardín" (*jardin*) y la huella dactilar de la piedra. Publicar microfotografías con campo oscuro donde se aprecian cristales de parisita con forma de barril o inclusiones fluidas bifásicas/trifásicas educa al consumidor y convierte la singularidad interna en un argumento de exclusividad.
2. **Video documental del proceso de manufactura (*Behind the Scenes*):**
   Mostrar el bloque de berilo en bruto en la mano del tallador, la orientación cuidadosa del eje óptico c para privilegiar el tono verde azulado frente al verde amarillento, el desbaste con disco de diamante y el pulido final en estaño con polvo de diamante de 0.25 µm. La artesanía humana y la precisión óptica justifican el precio de la obra.
3. **Certificación de impacto social directo:**
   Narrar la historia de las familias mineras, el financiamiento de escuelas rurales en Maripí o San Pablo de Borbur y la formalización de artesanos locales.`,
      keyTakeaways: [
        'El storytelling científico fundamentado en geología real genera mayor valor de marca que los mitos no verificables.',
        'Las inclusiones internas deben presentarse como firmas de identidad irrepetibles y obras de arte de la naturaleza.',
        'La transparencia total sobre la presencia o ausencia de aceites y resinas es el mayor activo reputacional de un joyero.'
      ],
      diagramUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Corte Lapidario',
      diagramCaption: 'Taller de orfebrería de alta gama donde se ensambla una esmeralda colombiana en bisel protector.'
    },
    {
      id: 'm12-l4',
      moduleId: 12,
      order: 4,
      title: 'Lección 12.4: Ecoturismo Geológico: La Ruta de la Esmeralda en Boyacá y Cundinamarca',
      readTime: '15 min',
      difficulty: 'Intermedio',
      summary: 'Potencial geopatrimonial y ecoturístico de los cinturones oriental y occidental. Circuitos de Fura y Tena y el Embalse La Esmeralda con estrictos protocolos de seguridad minera y geoconservación comunitaria.',
      content: `### 1. El Potencial del Geoturismo en los Cinturones Esmeralderos

Durante la segunda mitad del siglo XX, las zonas mineras del Occidente de Boyacá (Muzo, Coscuez, Peñas Blancas) y del Oriente (Chivor, Macanal, Gachalá) sufrieron estigmas de violencia y aislamiento vial debido a las guerras verdes. Con la consolidación de la paz territorial a partir de 1990 y el advenimiento de empresas formalizadas y cooperativas comunitarias, estas regiones han emergido como uno de los destinos de **geoturismo y ecoturismo** más espectaculares y vírgenes del planeta.

El geoturismo no es simplemente turismo convencional; es una modalidad que sostiene y realza la identidad geográfica del lugar: su geología, medio ambiente, cultura, estética y el bienestar económico de sus habitantes.

---

### 2. Georutas y Circuitos Turísticos Principales

#### Circuito del Cinturón Esmeraldero Oriental (Cundinamarca - Boyacá)
* **Puntos clave:** Guateque, Somondoco, Chivor, San Luis de Gaceno y el Embalse La Esmeralda.
* **Atributos geológicos y paisajísticos:** Topografía escarpada de la Formación Macanal; observación directa de brechas hidrotermales con cuarzo hialino gigante y pirita en matrices sedimentarias oscuras; senderismo de alta montaña y deportes acuáticos en el embalse.
* **Experiencia cultural:** Talleres de talla tradicional en Guateque y visitas guiadas a bocaminas históricas donde los pioneros de finales del siglo XIX redescubrieron las minas prehispánicas de Chivor.

#### Circuito del Cinturón Esmeraldero Occidental (Provincia de Occidente de Boyacá)
* **Puntos clave:** Chiquinquirá (portal cultural), Pauna, San Pablo de Borbur, Otanche, Maripí y Muzo.
* **Atributos geológicos:** El cañón del Río Minero, los míticos picachos de Fura y Tena (farallones verticales de más de 500 metros de roca sedimentaria del Cretácico atravesados por vetas de calcita y dolomita), y las aguas termales y cascadas de Maripí.
* **Experiencia de inmersión minera:** Visita a túneles escuela donde los geólogos explican la falla de Itoco y la alteración albitítica; participación en el lavado tradicional de arenas de aluvión en el lecho del río con bateas de madera bajo acompañamiento de guaqueros ancestrales.

---

### 3. Requisitos para la Sostenibilidad y Mitigación de Impactos

Un proyecto ecoturístico en zonas mineras debe cumplir estrictos protocolos para no desvirtuarse:
* **No comercialización de gemas ilícitas:** Educar al turista para que adquiera piezas únicamente en establecimientos formales dotados de RUCOM y factura electrónica.
* **Seguridad en bocaminas:** Acceso restringido exclusivamente a labores mineras con ventilación forzada, sostenimiento certificado y EPP completo.
* **Conservación de la biodiversidad:** El cañón del Río Minero alberga especies endémicas neotropicales que deben ser salvaguardadas frente al turismo desordenado.`,
      keyTakeaways: [
        'El geoturismo esmeraldero diversifica la matriz económica local y genera ingresos alternativos para las comunidades.',
        'Los farallones de Fura y Tena y el Valle de Chivor constituyen monumentos geológicos de valor escénico universal.',
        'La seguridad industrial en interior de mina y la lucha contra el comercio clandestino son pilares de una georuta sostenible.'
      ],
      diagramUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Mapa de Yacimiento',
      diagramCaption: 'Paisaje montañoso escarpado de los Andes orientales en la cuenca del Río Minero en Boyacá.'
    },
    {
      id: 'm12-l5',
      moduleId: 12,
      order: 5,
      title: 'Lección 12.5: Inteligencia Artificial y Gemología Computacional',
      readTime: '16 min',
      difficulty: 'Especialista',
      summary: 'Integración del aprendizaje automático (Machine Learning) en la espectroscopia FTIR y Raman, colorimetría tridimensional en espacios CIE y optimización de talla mediante trazado de rayos (Ray Tracing) computarizado.',
      content: `### 1. La Revolución del Aprendizaje Automático en la Gemología

La gemología tradicional depende en gran medida de la agudeza visual, la experiencia acumulada y la subjetividad humana. Si bien el ojo del gemólogo experimentado es insustituible para apreciar la belleza global y la vida de una gema, la industria moderna demanda velocidad, reproducibilidad y análisis masivo de datos espectrales.

La **Gemología Computacional** fusiona la física del estado sólido, la espectroscopia óptica y la inteligencia artificial (IA) mediante modelos de visión por computador (*Computer Vision*) y redes neuronales profundas (*Deep Learning*).

---

### 2. Aplicaciones Prácticas de la IA en la Cadena Esmeraldera

#### A. Clasificación Espectral Automatizada (FTIR y Raman)
Los espectrómetros modernos generan miles de puntos de datos de absorción infrarroja y dispersión Raman por muestra. El ojo humano puede tardar minutos en identificar sutiles solapamientos de bandas.
* **Modelos de clasificación:** Algoritmos supervisados (Random Forest, Support Vector Machines - SVM, Redes Neuronales Convolucionales 1D) entrenados con bibliotecas de más de 50,000 espectros de esmeraldas naturales, sintéticas hidrotermales (Biron, Tairus) y sintéticas por fundente (flux).
* **Diagnóstico de tratamientos:** La IA detecta picos minúsculos de resinas epóxicas en la región de estiramiento C-H alifático (2800-3000 $\\text{cm}^{-1}$) incluso en concentraciones ultrabajas donde el ojo del analista podría confundirlo con ruido instrumental de fondo.

#### B. Grading de Color Tridimensional Estandarizado
Las condiciones de iluminación y la fatiga ocular del gemólogo introducen variaciones estadísticas en la asignación del tono (*hue*), tono de oscuridad (*tone*) y saturación (*saturation*):
* **Cajas de luz computarizadas con sensores multiespectrales:** Capturan la gema bajo iluminante estándar D65 a 6500 K en múltiples ángulos controlados por goniómetros.
* **Procesamiento de imagen en espacio de color CIE $L^*a^*b^*$:** Un algoritmo segmenta la piedra, elimina los reflejos especulares de las facetas y computa un mapa térmico de distribución de color, determinando el porcentaje exacto de "verde Muzo" frente a zonas de ventana o extinción.

#### C. Optimización de Rendimiento en Preformado y Talla (3D Ray Tracing)
* **Escaneo tomográfico de rayos X o luz estructurada:** Antes de aplicar el disco de desbaste al berilo en bruto, un escáner 3D mapea la geometría externa y la posición espacial exacta de las fracturas e inclusiones internas.
* **Algoritmos de optimización combinatoria:** El software simula decenas de cortes posibles calculando automáticamente el ángulo crítico de 39.5° para minimizar la fuga de luz, maximizar el retorno de brillo y garantizar el mayor peso retenido en quilates.`,
      keyTakeaways: [
        'El Machine Learning permite detectar microtrazas de resinas sintéticas en espectros FTIR con precisión superior al 99%.',
        'La colorimetría CIE multiespectral estandariza el grading de color eliminando la fatiga y subjetividad visual humana.',
        'La simulación de trazado de rayos en modelos 3D optimiza el rendimiento en peso y brillo antes del corte en bruto.'
      ],
      diagramUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Espectro Óptico / FTIR',
      diagramCaption: 'Espectro de reflectancia e interferometría óptica asistida por algoritmos computacionales de inferencia.'
    },
    {
      id: 'm12-l6',
      moduleId: 12,
      order: 6,
      title: 'Lección 12.6: Financiación Verde, Inversión de Impacto y Cooperativismo con Enfoque de Género',
      readTime: '15 min',
      difficulty: 'Avanzado',
      summary: 'Adopción de estándares ESG en la minería de esmeraldas. Acceso a bonos verdes, descarbonización energética y agremiación cooperativa de mujeres seleccionadoras y maestras lapidarias.',
      content: `### 1. Inversión de Impacto y Criterios ESG en la Minería de Gemas

Los mercados de capitales globales han virado decididamente hacia los criterios **ESG (Environmental, Social, and Governance)**. Tradicionalmente, la minería de esmeraldas operaba mediante capitales privados informales, préstamos de prestamistas locales o reinversión de utilidades familiares. 

Hoy en día, las cooperativas formalizadas y las empresas de mediana escala pueden acceder a:
* **Bonos verdes y créditos con tasas compensadas:** Líneas de crédito de la banca de desarrollo (Bancóldex, Finagro) destinadas a la reconversión tecnológica: instalación de plantas de energía solar fotovoltaica para alimentar la ventilación y bombeo en bocaminas, sustituyendo motobombas diésel altamente contaminantes.
* **Fondos de inversión de impacto (Impact Investing Funds):** Fondos internacionales que colocan capital en proyectos que generan un retorno financiero medible junto con un impacto social y ambiental positivo, como la reforestación de cuencas hidrográficas con especies nativas en Boyacá (robles, quinas y alisos).

---

### 2. El Rol Protagónico de las Mujeres en la Minería: Guaqueras y Seleccionadoras

Históricamente, la mujer en las zonas esmeralderas estuvo relegada a labores marginales de supervivencia en los ríos (*guaquería* o *barequeo* informal), a menudo en condiciones de extrema vulnerabilidad social y exclusión de los órganos de toma de decisiones.

La nueva era de innovación social del sector esmeraldero colombiano se apoya en tres transformaciones fundamentales:

1. **Constitución de Asociaciones y Cooperativas de Mujeres Mineras:**
   Organizaciones como la *Asociación de Mujeres Mineras del Occidente de Boyacá* han logrado títulos mineros compartidos, acceso a capacitaciones técnicas en el SENA y representación gremial ante Fedesmeraldas.
2. **Capacitación en Talleres de Corte y Joyería Local:**
   En lugar de limitarse al lavado de escombros en los ríos, los programas de formación técnica han capacitado a mujeres como maestras talladoras y diseñadoras de joyas en Muzo y Guateque. Agregar valor localmente a través de la talla y el engaste permite que el margen de transformación quede en las manos de las familias de la región.
3. **Comercio Justo y Certificación Fairmined / Fairtrade:**
   Esquemas donde las joyas producidas por cooperativas reciben una prima social garantizada (*fair trade premium*) que se reinvierte en fondos de salud materno-infantil, guarderías comunitarias y becas universitarias para los hijos de los mineros.`,
      keyTakeaways: [
        'Los criterios ESG facilitan la obtención de créditos verdes preferenciales para sustituir diésel por energía solar en minería.',
        'La formalización de mujeres mineras en cooperativas y talleres de talla retiene el valor agregado dentro de la comunidad.',
        'La joyería con certificación de comercio justo y prima social satisface la demanda del consumidor ético global.'
      ],
      diagramUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      diagramType: 'Fotografía de Cristal en Matriz',
      diagramCaption: 'Liderazgo técnico en gobernanza comunitaria y estructuración de proyectos productivos sostenibles.'
    }
  ],
  caseStudy: {
    title: 'Transformación de una Empresa Tradicional de Muzo en Marca Global Sostenible',
    scenario: 'Una empresa minera familiar en Muzo con título vigente operaba bajo el modelo tradicional: vendía el 100% de la producción en bruto a comisionistas en Bogotá con un margen neto del 12%. El relevo generacional asumió la gerencia y detectó que sus gemas terminaban en joyerías de la Quinta Avenida de Nueva York a un precio 15 veces superior, tratadas con resinas epóxicas no declaradas.',
    gemologicalAnalysis: 'El laboratorio gemológico contratado identificó que el 70% del material en bruto poseía una pureza cristalina excepcional que solo requería aceite de cedro orgánico leve (F1) o ningún tratamiento. Se montó un laboratorio de control de calidad in-situ con espectrómetro FTIR y microscopio de inmersión para garantizar que ninguna gema saliera de la mina con polímeros artificiales.',
    diagnosticLimitations: 'El mercado internacional exigía pruebas inmutables de origen para pagar el sobreprecio ético. El papel notariado tradicional fue rechazado por clientes corporativos en Alemania y Suiza.',
    learningOutcome: 'La empresa implementó tres innovaciones: 1) Pasaportes digitales con chips NFC y registro blockchain con huella espectral; 2) Alianza con una cooperativa local de 20 mujeres talladoras para facetar el material en Muzo; 3) Venta directa mediante e-commerce B2B a joyeros éticos en Europa. El margen neto pasó del 12% al 48% y la empresa obtuvo la certificación de cumplimiento OCDE de 5 pasos.'
  },
  practicalActivity: {
    title: 'Estructuración de un Pasaporte Gemológico Digital con Ficha Criptográfica',
    instructions: 'Diseña la estructura de datos en formato JSON para el pasaporte digital de una esmeralda de 2.50 quilates extraída en Coscuez. Incluye los campos de trazabilidad física (coordenadas GPS de bocamina, RUCOM, fecha), características gemológicas (dimensiones, peso, color GIA vslbG 5/5, espectro FTIR de aceite de cedro leve F1) y el hash SHA-256 generado para garantizar la inmutabilidad.',
    materialsNeeded: ['Computadora o dispositivo móvil', 'Generador de funciones hash SHA-256 en línea', 'Plantilla JSON de gemología'],
    deliverable: 'Ficha técnica en formato JSON con firma digital simulada y protocolo de lectura para código QR o chip NFC.',
    rubric: [
      { criterion: 'Integridad y completitud de campos gemológicos y normativos', weight: '40%' },
      { criterion: 'Rigor en la declaración explícita del tratamiento de claridad', weight: '30%' },
      { criterion: 'Estructura válida del JSON y cálculo correcto del hash SHA-256', weight: '30%' }
    ]
  },
  quiz: [
    {
      id: 'q12-1',
      question: '¿Qué tecnología permite vincular físicamente una esmeralda en bruto a un registro digital inmutable desde el interior de la mina?',
      type: 'multiple_choice',
      options: [
        'Pegar una cinta adhesiva convencional en la cara del cristal',
        'Nanopartículas sintéticas de ADN a base de sílice (Emerald Paternity Test) resistentes al corte y ácido',
        'Pintar la piedra con un aerosol verde fluorescente',
        'Registrar una firma en un cuaderno de minería manual'
      ],
      correctAnswer: 1,
      explanation: 'Las nanopartículas sintéticas de ADN a base de sílice penetran las fisuras del cristal en mina y resisten el tallado, pulido y decapado ácido, permitiendo su lectura mediante PCR para verificar el yacimiento de origen exacto.',
      scientificReference: 'Gübelin & Cartier (2018). The Provenance Proof Initiative.'
    },
    {
      id: 'q12-2',
      question: '¿Por qué la desintermediación hacia modelos Direct-to-Consumer (D2C) beneficia la sostenibilidad del sector esmeraldero?',
      type: 'multiple_choice',
      options: [
        'Permite omitir el pago de regalías e impuestos a la ANM',
        'Permite al productor y artesano capturar mayor valor agregado, promoviendo la formalidad y la transparencia de origen ante el comprador',
        'Garantiza que no se requieran reportes gemológicos de laboratorio',
        'Obliga a vender las esmeraldas únicamente en subastas informales en la calle'
      ],
      correctAnswer: 1,
      explanation: 'El modelo D2C acorta la cadena de suministro, permitiendo que el margen económico se retenga en la mina y en los talleres de talla locales, al tiempo que ofrece al cliente final trazabilidad total y certeza sobre la procedencia ética.',
      scientificReference: 'Cartier & Ali (2012). Resources Policy, 37(4).'
    },
    {
      id: 'q12-3',
      question: '¿Cómo asiste la inteligencia artificial (Machine Learning) en el control de calidad en laboratorios gemológicos?',
      type: 'multiple_choice',
      options: [
        'Generando hologramas que reemplazan la gema física en joyerías',
        'Clasificando automáticamente espectros FTIR/Raman para detectar concentraciones ultra-bajas de resinas epóxicas sintéticas',
        'Fabricando esmeraldas naturales en hornos microondas',
        'Eliminando la necesidad de utilizar microscopios ópticos'
      ],
      correctAnswer: 1,
      explanation: 'Los algoritmos de aprendizaje automático analizan patrones complejos de absorción infrarroja (bandas C-H en 2800-3000 cm⁻¹), detectando de forma instantánea y reproducible polímeros artificiales que podrían pasar desapercibidos en análisis manuales.',
      scientificReference: 'Krzemnicki & Wang (2021). The Journal of Gemmology, 37(5).'
    },
    {
      id: 'q12-4',
      question: '¿Cuál es el valor estratégico del geoturismo en los cañones y valles esmeralderos de Boyacá?',
      type: 'multiple_choice',
      options: [
        'Reemplazar totalmente la actividad minera para convertir toda la región en parque temático cerrado',
        'Diversificar la economía rural, valorizar los monumentos geológicos naturales (como Fura y Tena) y promover la paz y la formalidad',
        'Permitir que los turistas extraigan gemas de cualquier mina sin supervisión técnica',
        'Impedir la investigación geológica del Servicio Geológico Colombiano'
      ],
      correctAnswer: 1,
      explanation: 'El geoturismo promueve el desarrollo económico de las comunidades, resalta el patrimonio geológico y científico de las cuencas sedimentarias y genera una cultura de orgullo y conservación territorial.',
      scientificReference: 'Gómez & Montes (2020). Servicio Geológico Colombiano.'
    },
    {
      id: 'q12-5',
      question: '¿Qué impacto genera la inclusión de mujeres seleccionadoras y barequeras en cooperativas y talleres de talla?',
      type: 'multiple_choice',
      options: [
        'Aumenta el índice de intermediación y fomenta el contrabando',
        'Transforma una labor de subsistencia marginal en empleo técnico calificado de alto valor, mejorando la equidad y los ingresos familiares',
        'Reduce la calidad del corte de las gemas al no usar maquinaria',
        'Obliga a exportar todas las gemas sin pulir'
      ],
      correctAnswer: 1,
      explanation: 'La capacitación y agremiación de mujeres en lapidación, diseño de joyería y gestión minera formal democratiza la cadena de valor, retiene la riqueza en los municipios mineros y cumple con los Objetivos de Desarrollo Sostenible (ODS).',
      scientificReference: 'Hilson & Eftimie (2019). The Extractive Industries and Society.'
    }
  ],
  externalReferences: [
    {
      title: 'Provenance Proof: Blockchain and DNA Technology for Gemstones',
      institution: 'Gübelin Gem Lab & Provenance Proof Ltd.',
      url: 'https://www.provenanceproof.com',
      description: 'Plataforma líder mundial en trazabilidad digital y marcado físico de gemas preciosas.',
      category: 'Trazabilidad & Tecnología'
    },
    {
      title: 'Responsible Jewellery Council (RJC)',
      institution: 'Responsible Jewellery Council International',
      url: 'https://www.responsiblejewellery.com',
      description: 'Estándares internacionales de certificación de cadena de custodia ética para metales y gemas.',
      category: 'Estándares & Comercio Ético'
    },
    {
      title: 'Servicio Geológico Colombiano - Patrimonio Geológico',
      institution: 'Servicio Geológico Colombiano (SGC)',
      url: 'https://www.sgc.gov.co',
      description: 'Inventario nacional de geositios y georutas patrimoniales en los Andes colombianos.',
      category: 'Geopatrimonio & Conservación'
    }
  ],
  bibliography: [
    {
      author: 'Cartier, L. E., Ali, S. H., & Krzemnicki, M. S.',
      year: '2020',
      title: 'Blockchain and Provenance in the Colored Gemstone Industry: Opportunities and Challenges',
      publication: 'Journal of Gemmology, 37(3), 262-274',
      doiOrUrl: 'https://doi.org/10.15506/JoG.2020.37.3.262'
    },
    {
      author: 'Gübelin, R., & Cartier, L. E.',
      year: '2018',
      title: 'Traceability and Technology in the Coloured Gemstone Sector: The Provenance Proof Initiative',
      publication: 'InColor Magazine (ICA), 39, 44-48',
      doiOrUrl: 'https://www.gemstone.org/'
    },
    {
      author: 'OECD',
      year: '2016',
      title: 'OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas (Third Edition)',
      publication: 'OECD Publishing, Paris',
      doiOrUrl: 'https://doi.org/10.1787/9789264252479-en'
    }
  ]
};
