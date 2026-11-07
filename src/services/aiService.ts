import { AIAssistantId, EmeraldStone } from '../types';

export interface AIChatResponse {
  reply: string;
  source: string;
  assistant: AIAssistantId;
  note?: string;
  timestamp: string;
}

export class AIService {
  static async sendQuery(
    message: string, 
    assistant: AIAssistantId = 'gemologo', 
    stoneData?: Partial<EmeraldStone>,
    history: { sender: string; text: string }[] = []
  ): Promise<AIChatResponse> {
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          assistant,
          stoneData,
          history
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      return await res.json();
    } catch (error: any) {
      console.warn('Fallo petición API AI, usando respuesta de contingencia local:', error);
      return {
        reply: `### Orientación Gemológica Especializada
La consulta fue procesada mediante la base de conocimiento local de ESMERALDA INTELIGENTE JAIRRESTAURA.

Para esmeraldas colombianas (Muzo, Chivor, Coscuez), es vital verificar:
1. Inclusiones trifásicas (halita cúbica + salmuera líquida + burbuja CO2).
2. Tono y pureza de color (verde cromo/vanadio sin hierro).
3. Nivel de tratamiento con aceite de cedro natural vs resinas artificiales.

*Recordatorio ético:* Las orientaciones digitales son un soporte técnico orientativo y no reemplazan un certificado de laboratorio gemológico como CDTEC o GIA.`,
        source: 'motor-local-offline',
        assistant,
        note: 'Operando en modo sin conexión directa con servidor AI externo',
        timestamp: new Date().toISOString()
      };
    }
  }
}
