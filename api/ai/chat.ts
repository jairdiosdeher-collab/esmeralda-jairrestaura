import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

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

function getLocalGemologyResponse(assistantType: string, query: string): string {
  const q = query.toLowerCase();
  
  if (assistantType === 'gemologo') {
    if (q.includes('muzo') || q.includes('chivor') || q.includes('origen') || q.includes('coscuez')) {
      return `### Análisis Gemológico de Origen y Yacimiento (Colombia)

1. **Yacimiento de Muzo (Cinturón Occidental - Boyacá):**
   - **Color característico:** Verde profundo, aterciopelado, con ligera tonalidad cálida o neutra (*Verde Muzo*). En ejemplares excepcionales se aprecia el fenómeno óptico *Gota de Aceite*.
   - **Inclusiones diagnósticas:** Inclusiones trifásicas alargadas y dentadas (cristal cúbico de halita, salmuera líquida y burbuja de gas carbónico). Frecuente presencia de calcita, pirita y agujas de parisita.

2. **Yacimiento de Chivor (Cinturón Oriental):**
   - **Color característico:** Verde más cristalino y abierto, frecuentemente con matiz azulado.
   - **Inclusiones:** Inclusiones trifásicas regulares y cristales de pirita dorada.

3. **Yacimiento de Coscuez:**
   - **Color:** Verde intenso muy vivo y brillante ("fuego de Coscuez"), con calcita/dolomita.

*Nota técnica:* Para una determinación concluyente, se recomienda análisis espectroscópico FTIR y UV-Vis en laboratorios especializados (CDTEC, GIA, Gubelin).`;
    }

    if (q.includes('aceite') || q.includes('tratamiento') || q.includes('resina') || q.includes('cedro')) {
      return `### Protocolo Gemológico sobre Tratamientos de Claridad

1. **Aceite de Cedro Natural (*Cedrus deodara* o *Cedrus libani*):**
   - Es el tratamiento tradicional aceptado universalmente (CIBJO, ICA, GIA, CDTEC).
   - Su índice de refracción (~1.512 - 1.518) es muy cercano al de la esmeralda (~1.577 - 1.583).
   - Es reversible y catalogado por grados: *Insignificante*, *Menor*, *Moderado* o *Significativo*.

2. **Resinas Sintéticas o Polímeros (Opticon, Palma, Permasafe):**
   - Deben ser declaradas explícitamente en cualquier operación comercial.
   - Con los años pueden degradarse o amarillear.

*Buenas prácticas:* Declaración transparente del nivel y tipo de relleno para preservar la confianza en el mercado global.`;
    }

    return `### Orientación Gemológica Especializada
La esmeralda colombiana es berilo coloreado principalmente por cromo (Cr³⁺) y vanadio (V³⁺). 

**Factores gemológicos clave evaluados:**
- **Sistema de Inclusiones ("El Jardín"):** Da fe de su génesis hidrotermal en lutitas negras y calizas.
- **Transparencia y Pureza:** La combinación de transparencia cristalina con tono de saturación media-alta determina el grado de excelencia.
- **Fluorescencia:** Bajo radiación UV de onda larga exhibe fluorescencia rojiza característica por ausencia de hierro.`;
  }

  if (assistantType === 'valorador') {
    return `### Guía Técnica de Orientación de Valor

Factores principales:
1. **Color (50-60% del valor):** Tono, saturación y matiz verde puro o ligeramente azulado.
2. **Claridad y Jardín (20-25%):** Fisuras internas y su interferencia con la luz.
3. **Corte y Talla (10-15%):** Proporciones y ausencia de ventana.
4. **Tratamiento:** *Sin tratar (No Oil)* alcanza cotizaciones de alta gama.
5. **Peso en Quilates:** Precios por quilate ascienden en barreras clave (1ct, 2ct, 3ct, 5ct).`;
  }

  return `### Orientación Especializada — ESMERALDA INTELIGENTE JAIRRESTAURA
Has consultado al asistente técnico de la plataforma. La información se fundamenta en los estándares gemológicos colombianos y las prácticas de comercio ético.

¿En qué otra consulta técnica o comercial del sector esmeraldero puedo orientarte?`;
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido. Utilizar POST.' });
    return;
  }

  try {
    const { message, assistant = 'gemologo', stoneData, history = [] } = req.body || {};

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
        res.status(200).json({
          reply: replyText,
          source: 'gemini-live',
          assistant,
          timestamp: new Date().toISOString()
        });
        return;
      } catch (geminiError: any) {
        console.warn('Vercel serverless: Fallo llamada Gemini, recurriendo al motor local:', geminiError?.message || geminiError);
      }
    }

    // Local Colombian Gemological Knowledge response
    const localReply = getLocalGemologyResponse(assistant, message);
    res.status(200).json({
      reply: localReply,
      source: 'motor-gemologico-local',
      assistant,
      note: apiKey ? 'Modo de contingencia activo' : 'Operando con base de conocimiento gemológico colombiano integrada en Vercel',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error in Vercel /api/ai/chat:', error);
    res.status(500).json({
      error: 'Error procesando la consulta gemológica',
      details: error.message
    });
  }
}
