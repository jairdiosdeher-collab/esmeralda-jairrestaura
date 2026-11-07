import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '15mb' }));

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    platform: 'ESMERALDA INTELIGENTE JAIRRESTAURA',
    motto: 'El conocimiento y las herramientas del mundo esmeraldero al alcance de todos',
    free: true,
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Domain knowledge fallback for Colombian emeralds when API key is not configured or offline
const SYSTEM_PROMPTS: Record<string, string> = {
  gemologo: `Eres el Gemólogo IA de ESMERALDA INTELIGENTE JAIRRESTAURA. Eres una eminencia en gemología colombiana, experto en yacimientos de Muzo, Chivor, Coscuez, Gachalá, Maripí y Peñas Blancas.
Tu labor es brindar orientación técnica sobre características cristalográficas (sistema hexagonal, berilo Be3Al2Si6O18 con cromo y vanadio), inclusiones diagnósticas (inclusiones trifásicas colombianas compuestas por roca halita cúbica, salmuera líquida y burbuja de gas CO2), tipos de color (verde Muzo profundo, verde Chivor azuloso, verde Coscuez fuego vivo, Gota de Aceite), tratamientos tradicionales (aceite de cedro natural vs resinas epóxicas artificiales como Opticon o Permasafe) y lectura de reportes de laboratorios como CDTEC, GIA, Gubelin o SSEF.
Aclaración obligatoria: Siempre recuerda que una orientación digital no reemplaza un certificado físico de laboratorio gemológico oficial con análisis espectroscópico FTIR y microscopía.`,

  valorador: `Eres el Valorador IA de ESMERALDA INTELIGENTE JAIRRESTAURA. Orientas a mineros, comerciantes, joyeros y coleccionistas sobre la estructura de valoración de esmeraldas colombianas según las 4C adaptadas (Color, Claridad/Jardín, Corte/Talla y Quilates/Carat weight), más el quinto factor crítico: Tratamiento (Sin tratar / Insignificante / Menor / Moderado / Significativo).
Explica cómo influye cada factor en el valor comercial comparativo en el mercado de Bogotá (Avenida Jiménez, Esmeralda Trade Center, La Candelaria) y plazas internacionales (Nueva York, Ginebra, Hong Kong, Dubái).
Presenta siempre tres niveles: Datos insuficientes, Orientación preliminar o Estimación comparativa. No inventes precios absolutos; ofrece rangos de referencia y supuestos técnicos.`,

  comerciante: `Eres el Comerciante IA de ESMERALDA INTELIGENTE JAIRRESTAURA. Asistes en la estructuración de cotizaciones profesionales, redacción de términos de oferta, fijación de condiciones de entrega, cálculo de equivalencias COP/USD, manejo ético de reservas comerciales y buenas prácticas mercantiles en el sector esmeraldero colombiano. Recuerda que la plataforma es 100% gratuita y sin comisiones.`,

  tallador: `Eres el Tallador IA de ESMERALDA INTELIGENTE JAIRRESTAURA. Eres maestro lapidario y tallador experto en la gema verde. Asesoras sobre orientación del eje óptico 'c' para maximizar el color deseado, planos de clivaje y fracturas del berilo, técnicas de desbaste en disco de diamante, facetado (talla esmeralda clásica octagonal, gota/pera, cojín, oval, brillante, cabuchón para esmeraldas con jardín denso o trapiche con brazos de carbón), pulido y cálculo de rendimiento en peso (quilates brutos vs tallados).`,

  inventario: `Eres el Asistente de Inventario IA. Ayudas a categorizar lotes y gemas individuales, generar códigos de referencia alfanuméricos estandarizados, verificar consistencia de dimensiones y pesos, y formular descripciones comerciales impecables para los pasaportes digitales.`,

  documental: `Eres el Asistente Documental IA. Especialista en certificados gemológicos, facturación de origen, salvoconductos mineros colombianos (RUCOM - Registro Único de Comercializadores de Minerales, Agencia Nacional de Minería ANM) y documentación aduanera.`,

  exportacion: `Eres el Asistente de Exportación IA. Orientas sobre los pasos legales y aduaneros para exportar esmeraldas colombianas legalmente (declaración de exportación DIAN, visto bueno de Fedesmeraldas, Fondo Nacional de la Esmeralda, pago de regalías mineras, embalaje seguro y envío de valores mediante empresas de custodia blindada).`,

  profesor: `Eres el Profesor de la Academia Esmeraldera. Explicas de forma didáctica, apasionada y rigurosa la historia de las esmeraldas desde los pueblos originarios Muzos e Itocos hasta la actualidad, la geología de la cuenca sedimentaria de la Cordillera Oriental y la ciencia de los cristales.`,

  negocios: `Eres el Asesor de Negocios IA. Aconsejas sobre administración de talleres, rotación de inventarios de piedras preciosas, gestión de relaciones con clientes internacionales y profesionalización de negocios familiares del sector esmeraldero.`,

  general: `Eres el Asistente General de la plataforma ESMERALDA INTELIGENTE JAIRRESTAURA. Guías al usuario sobre el uso gratuito de todos los módulos: Inventario, Pasaporte Digital con QR, Cotizaciones, Órdenes de Tallado, Academia y Directorio.`
};

// Fallback knowledge response generator when API key is not present or API call fails
function getLocalGemologyResponse(assistantType: string, query: string): string {
  const q = query.toLowerCase();
  
  if (assistantType === 'gemologo') {
    if (q.includes('muzo') || q.includes('chivor') || q.includes('origen') || q.includes('coscuez')) {
      return `### Análisis Gemológico de Origen y Yacimiento (Colombia)

1. **Yacimiento de Muzo (Cinturón Occidental - Boyacá):**
   - **Color característico:** Verde profundo, aterciopelado, con ligera tonalidad cálida o neutra (*Verde Muzo*). En ejemplares excepcionales se aprecia el fenómeno óptico *Gota de Aceite* (efecto de crecimiento celular en la calcita/berilo).
   - **Inclusiones diagnósticas:** Inclusiones trifásicas alargadas y dentadas (cristal cúbico de halita, salmuera líquida y burbuja de gas carbónico). Frecuente presencia de cristales de calcita, pirita y agujas de parisita (fluorocarbonato de cerio y lantano típico de Muzo).

2. **Yacimiento de Chivor (Cinturón Oriental):**
   - **Color característico:** Verde más cristalino y abierto, frecuentemente con un matiz ligeramente azulado de gran refulgencia lumínica.
   - **Inclusiones:** Inclusiones trifásicas más regulares, cristales de pirita dorada bien formados y albita.

3. **Yacimiento de Coscuez:**
   - **Color:** Verde intenso muy vivo y brillante con tendencia ligeramente amarillenta ("fuego de Coscuez"), cristales comúnmente con zonación de color marcada y presencia de calcita/dolomita.

*Nota técnica:* Para una determinación concluyente con respaldo jurídico y comercial internacional, se recomienda análisis espectroscópico FTIR y UV-Vis en laboratorios especializados (CDTEC en Bogotá, GIA o Gubelin).`;
    }

    if (q.includes('aceite') || q.includes('tratamiento') || q.includes('resina') || q.includes('cedro')) {
      return `### Protocolo Gemológico sobre Tratamientos de Claridad

1. **Aceite de Cedro Natural (*Cedrus deodara* o *Cedrus libani*):**
   - Es el tratamiento tradicional aceptado universalmente por la industria gemológica internacional (CIBJO, ICA, GIA, CDTEC).
   - Su índice de refracción (~1.512 - 1.518) es muy cercano al del berilo esmeralda (~1.577 - 1.583), atenuando la visibilidad de fisuras abiertas a la superficie sin alterar la estructura cristalina.
   - Es reversible y catalogado por grados: *Insignificante*, *Menor (Minor)*, *Moderado (Moderate)* o *Significativo (Significant)*.

2. **Resinas Sintéticas o Polímeros (Opticon, Palma, Permasafe):**
   - Deben ser declaradas explícitamente en cualquier operación comercial.
   - Con el paso de los años pueden degradarse, amarillear o perder transparencia si sufren exposición a solventes o calor.

*Buenas prácticas:* En ESMERALDA INTELIGENTE JAIRRESTAURA fomentamos la declaración transparente del nivel y tipo de relleno para preservar la confianza y el prestigio de la esmeralda colombiana en el mercado global.`;
    }

    return `### Orientación Gemológica Especializada
La esmeralda colombiana es una variedad noble del berilo cristalizado en el sistema hexagonal, coloreada principalmente por vestigios de cromo (Cr³⁺) y vanadio (V³⁺). 

**Factores gemológicos clave evaluados:**
- **Sistema de Inclusiones ("El Jardín"):** A diferencia de otras gemas, las inclusiones internas en la esmeralda colombiana dan fe de su génesis hidrotermal en lutitas negras y calizas.
- **Transparencia y Pureza:** La combinación de transparencia cristalina con tono de saturación media-alta determina el grado de excelencia.
- **Fluorescencia:** Bajo radiación UV de onda larga, las esmeraldas ricas en cromo con bajo contenido de hierro (típicas colombianas) exhiben una fluorescencia rojiza característica.

¿Deseas profundizar sobre un espécimen en particular (peso, color, inclusiones observadas o reporte de laboratorio)?`;
  }

  if (assistantType === 'valorador') {
    return `### Guía Técnica de Orientación de Valor (Factores y Criterios Comerciales)

Para calcular la estimación preliminar de una esmeralda se aplica la matriz gemológica de 5 variables:

1. **Color (Impacto ~50-60% del valor):**
   - **Tono:** Nivel de claridad u oscuridad del verde (el rango óptimo es medio a medio-oscuro).
   - **Saturación:** Pureza y viveza del color sin tonos grisáceos ni amarronados.
   - **Matiz:** Verde puro o verde con ligero destello azulado (preferido en alta joyería).

2. **Claridad y Jardín (Impacto ~20-25%):**
   - Estado de las fisuras internas y su interferencia con el paso de la luz. Un jardín fino y bien distribuido es un sello de autenticidad que no demerita como en el diamante.

3. **Corte y Talla (Impacto ~10-15%):**
   - Proporciones, paralelismo de facetas, ausencia de "ventana" (fuga de luz por el centro) y simetría.

4. **Tratamiento de Claridad:**
   - *Sin tratamiento declarado (No Oil):* Cotización premium (hasta 2x - 4x comparado con piedras aceitadas).
   - *Aceite menor (Minor):* Estándar comercial de alta gama.
   - *Moderado / Significativo:* Ajuste de valoración a la baja.

5. **Peso en Quilates (Carat):**
   - La escala de precios por quilate asciende exponencialmente al superar barreras clave: 1.00 ct, 2.00 ct, 3.00 ct, 5.00 ct y 10.00 ct.

*Aviso de transparencia:* Este cálculo es una orientación teórica basada en patrones del mercado mayorista de Bogotá y ferias internacionales; no constituye un avalúo pericial vinculante.`;
  }

  if (assistantType === 'tallador') {
    return `### Consejos Técnicos de Talla y Rendimiento Lapidario

1. **Estudio del Cristal en Bruto:**
   - Inspeccionar bajo luz transmitida polarizada o inmersión en agua destilada.
   - Localizar el eje óptico 'c'. El color más intenso se transmite perpendicularmente al eje; el tallador experimentado orienta la tabla para optimizar la cara de color.

2. **Rendimiento Promedio:**
   - En esmeraldas colombianas en bruto de buena formación prismática, el rendimiento promedio oscila entre el **25% y el 40%** del peso inicial.
   - Si el cristal presenta fisuras transversales o 'morralla', el rendimiento puede situarse en 15-20%.

3. **Selección de Talla:**
   - **Talla Esmeralda (Octagonal):** Ideal para cristales prismáticos; protege las esquinas de fracturas por clivaje basal con sus chaflanes.
   - **Gota / Pera:** Excelente para optimizar cristales asimétricos o cuñas.
   - **Cabuchón:** Recomendado para gemas con jardín muy poblado o esmeraldas tipo Trapiche con radios de lutita.`;
  }

  return `### Orientación Especializada — ESMERALDA INTELIGENTE JAIRRESTAURA
Has consultado al asistente técnico de la plataforma. La información proporcionada se fundamenta en los estándares gemológicos colombianos y las prácticas de comercio ético de Fedesmeraldas y la Asociación de Comerciantes de Esmeraldas (Acom esmeraldas).

**Aspectos destacados para tu consulta:**
- Todas las herramientas de la plataforma (Inventario, Pasaporte Digital QR, Cotizaciones y Control de Tallado) son 100% gratuitas y sin registro obligatorio.
- Puedes registrar las características completas de cada gema en el módulo de Inventario para generar fichas técnicas oficiales y pasaportes digitales verificables.

¿En qué otra consulta técnica o comercial del sector esmeraldero puedo orientarte?`;
}

// AI Assistant endpoint
app.post('/api/ai/chat', async (req: Request, res: Response) => {
  try {
    const { message, assistant = 'gemologo', stoneData, history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'El mensaje es requerido' });
      return;
    }

    const systemPrompt = SYSTEM_PROMPTS[assistant] || SYSTEM_PROMPTS.general;
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey.trim() !== '' && apiKey !== 'MY_GEMINI_API_KEY') {
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        let contextualPrompt = systemPrompt;
        if (stoneData) {
          contextualPrompt += `\n\nDATOS DE LA PIEDRA EN CONSULTA:\n${JSON.stringify(stoneData, null, 2)}`;
        }

        const contents = [
          { role: 'user' as const, parts: [{ text: contextualPrompt }] },
          ...history.slice(-4).map((h: { sender: string; text: string }) => ({
            role: (h.sender === 'user' ? 'user' : 'model') as 'user' | 'model',
            parts: [{ text: h.text }]
          })),
          { role: 'user' as const, parts: [{ text: message }] }
        ];

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: contents
        });

        const replyText = response.text || '';
        res.json({
          reply: replyText,
          source: 'gemini-live',
          assistant,
          timestamp: new Date().toISOString()
        });
        return;
      } catch (geminiError: any) {
        console.warn('Fallo llamada Gemini, recurriendo al motor gemológico local:', geminiError?.message || geminiError);
        // Fallback to local expert knowledge
      }
    }

    // Local Colombian Gemological Knowledge response
    const localReply = getLocalGemologyResponse(assistant, message);
    res.json({
      reply: localReply,
      source: 'motor-gemologico-local',
      assistant,
      note: apiKey ? 'Modo de contingencia activo' : 'Operando con base de conocimiento gemológico colombiano integrada (gratuita e instantánea)',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error in /api/ai/chat:', error);
    res.status(500).json({
      error: 'Error procesando la consulta gemológica',
      details: error.message
    });
  }
});

// Configure Vite middleware in development or serve built files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[ESMERALDA INTELIGENTE JAIRRESTAURA] Servidor activo en puerto ${PORT}`);
  });
}

startServer();
