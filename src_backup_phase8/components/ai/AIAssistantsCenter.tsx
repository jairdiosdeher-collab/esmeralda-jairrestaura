import React, { useState } from 'react';
import { AIAssistantId, EmeraldStone, AssistantMessage } from '../../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Scale, 
  Briefcase, 
  Hammer, 
  Layers, 
  FileText, 
  Plane, 
  GraduationCap, 
  Building2, 
  HelpCircle,
  ShieldCheck,
  RefreshCw,
  Gem
} from 'lucide-react';
import { AIService } from '../../services/aiService';

interface AIAssistantsCenterProps {
  emeralds: EmeraldStone[];
  initialAssistant?: AIAssistantId;
  initialStone?: EmeraldStone | null;
}

interface AssistantMeta {
  id: AIAssistantId;
  name: string;
  role: string;
  icon: any;
  color: string;
  sampleQuestions: string[];
}

export const AIAssistantsCenter: React.FC<AIAssistantsCenterProps> = ({
  emeralds,
  initialAssistant = 'gemologo',
  initialStone = null
}) => {
  const [selectedAssistant, setSelectedAssistant] = useState<AIAssistantId>(initialAssistant);
  const [selectedStoneId, setSelectedStoneId] = useState<string>(initialStone?.id || '');
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Record<AIAssistantId, AssistantMessage[]>>({
    gemologo: [
      {
        id: '1',
        sender: 'assistant',
        text: '¡Hola! Soy tu Gemólogo IA de ESMERALDA INTELIGENTE JAIRRESTAURA. Puedo orientarte sobre yacimientos colombianos (Muzo, Chivor, Coscuez), identificación de inclusiones trifásicas diagnósticas, análisis de color y tratamientos tradicionales con aceite de cedro. ¿En qué gema o espécimen te puedo orientar hoy?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    valorador: [
      {
        id: '2',
        sender: 'assistant',
        text: 'Saludos. Como Valorador IA, te ayudo a entender la estructura de precios mayoristas según peso en quilates, color (saturación y matiz), jardín/claridad, calidad de talla y tratamientos. Recuerda que nuestras orientaciones son preliminares y éticamente transparentes.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    comerciante: [
      {
        id: '3',
        sender: 'assistant',
        text: 'Bienvenido al despacho comercial. Te asesoro en la formulación de cotizaciones formales, términos de entrega en Bogotá o exportación, cálculo de paridades cambiarias COP/USD y manejo transparente de acuerdos comerciales.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    tallador: [
      {
        id: '4',
        sender: 'assistant',
        text: '¡Qué tal, colega lapidario! Soy tu Tallador IA. Te oriento sobre la orientación cristalográfica del eje óptico C para exaltar el tono verde, planos de clivaje del berilo, optimización de chaflanes y cálculo de rendimiento bruto/tallado.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    inventario: [
      {
        id: '5',
        sender: 'assistant',
        text: 'Asistente de Inventario a tu servicio. Te ayudo a redactar descripciones precisas para tus fichas técnicas, verificar consistencia dimensional y clasificar lotes comerciales.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    documental: [
      {
        id: '6',
        sender: 'assistant',
        text: 'Asistente Documental preparado. Te ayudo a interpretar reportes gemológicos de CDTEC, GIA, Gubelin y SSEF, así como salvoconductos mineros y normatividad RUCOM.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    exportacion: [
      {
        id: '7',
        sender: 'assistant',
        text: 'Asistente de Exportación listo. Te guío en la ruta legal colombiana: trámite DEX ante la DIAN, visto bueno de Fedesmeraldas, pago de regalías mineras a la ANM y transporte de valores blindado.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    profesor: [
      {
        id: '8',
        sender: 'assistant',
        text: '¡Bienvenidos a la clase! Como Profesor de la Academia Esmeraldera, te enseño la fascinante historia geológica de la Cordillera Oriental, el simbolismo de Fura y Tena y la física óptica del berilo.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    negocios: [
      {
        id: '9',
        sender: 'assistant',
        text: 'Asesor de Negocios disponible. Te acompaño en la profesionalización de joyerías, administración de costos de lapidación y estrategias para compradores internacionales en ferias gemológicas.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ],
    general: [
      {
        id: '10',
        sender: 'assistant',
        text: 'Soy el Asistente General de ESMERALDA INTELIGENTE JAIRRESTAURA. Puedo guiarte en el uso gratuito de cada módulo: Inventario, Pasaporte QR, Cotizaciones, Academia y Copias de Seguridad.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]
  });

  const ASSISTANTS: AssistantMeta[] = [
    {
      id: 'gemologo',
      name: 'Gemólogo IA',
      role: 'Inclusiones, origen y características',
      icon: Gem,
      color: 'text-emerald-400',
      sampleQuestions: [
        '¿Cómo distingo una esmeralda de Muzo de una de Chivor bajo el microscopio?',
        '¿Qué componentes tiene una inclusión trifásica colombiana?',
        '¿Qué diferencia hay entre aceite de cedro y resina epóxica (Opticon)?'
      ]
    },
    {
      id: 'valorador',
      name: 'Valorador IA',
      role: 'Factores de precio y comparables',
      icon: Scale,
      color: 'text-amber-400',
      sampleQuestions: [
        '¿Cuánto aumenta el valor de una esmeralda certificada No Oil vs Minor Oil?',
        '¿Cómo influye una leve ventana en el precio por quilate?',
        '¿Cuál es la escala de precios por quilate al superar los 3.00 ct?'
      ]
    },
    {
      id: 'comerciante',
      name: 'Comerciante IA',
      role: 'Cotizaciones, ofertas y comercio ético',
      icon: Briefcase,
      color: 'text-blue-400',
      sampleQuestions: [
        '¿Qué cláusulas debe tener una cotización formal para un comprador de Dubái?',
        '¿Cómo pactar una reserva comercial con seriedad y plazo fijo?',
        '¿Cuál es la práctica habitual de pago en la Avenida Jiménez de Bogotá?'
      ]
    },
    {
      id: 'tallador',
      name: 'Tallador IA',
      role: 'Técnicas lapidarias y rendimiento',
      icon: Hammer,
      color: 'text-cyan-400',
      sampleQuestions: [
        '¿Cómo oriento el cristal para no perder el color verde en el desbaste?',
        '¿Cuál es el ángulo ideal de corona y culata para una talla esmeralda?',
        '¿Qué rendimiento en peso es esperable de un prisma en bruto de buena calidad?'
      ]
    },
    {
      id: 'inventario',
      name: 'Inventario IA',
      role: 'Estandarización y descripciones',
      icon: Layers,
      color: 'text-emerald-300',
      sampleQuestions: [
        'Redáctame una descripción técnica elegante para una esmeralda de 3 ct de Muzo.',
        '¿Cómo estructurar un código de lote minero trazable?'
      ]
    },
    {
      id: 'documental',
      name: 'Documental IA',
      role: 'Certificados y salvoconductos',
      icon: FileText,
      color: 'text-indigo-400',
      sampleQuestions: [
        '¿Cómo leo las observaciones de claridad en un reporte CDTEC?',
        '¿Qué validez tiene un salvoconducto de transporte de mineral en Colombia?'
      ]
    },
    {
      id: 'exportacion',
      name: 'Exportación IA',
      role: 'DIAN, Fedesmeraldas y aduanas',
      icon: Plane,
      color: 'text-sky-400',
      sampleQuestions: [
        '¿Cuáles son los pasos ante la DIAN para exportar esmeraldas legalmente?',
        '¿Cómo se liquida la regalía minera de la esmeralda ante la ANM?'
      ]
    },
    {
      id: 'profesor',
      name: 'Profesor IA',
      role: 'Historia, formación y geología',
      icon: GraduationCap,
      color: 'text-purple-400',
      sampleQuestions: [
        'Explícame la formación hidrotermal de la cuenca sedimentaria de Boyacá.',
        '¿Qué es la leyenda de Fura y Tena en la cosmología esmeraldera?'
      ]
    },
    {
      id: 'negocios',
      name: 'Asesor de Negocios IA',
      role: 'Estrategia y gestión de taller',
      icon: Building2,
      color: 'text-teal-400',
      sampleQuestions: [
        '¿Cómo reducir la merma económica en un taller de lapidación?',
        '¿Cómo fidelizar clientes compradores de esmeraldas de alta gama?'
      ]
    },
    {
      id: 'general',
      name: 'Asistente General',
      role: 'Guía de la plataforma Jairrestaura',
      icon: HelpCircle,
      color: 'text-slate-300',
      sampleQuestions: [
        '¿Cómo genero el pasaporte digital con código QR para imprimirlo?',
        '¿Cómo descargo una copia de respaldo de todo mi inventario?'
      ]
    }
  ];

  const currentAssistantMeta = ASSISTANTS.find(a => a.id === selectedAssistant) || ASSISTANTS[0];
  const currentMessages = messages[selectedAssistant] || [];

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputMessage;
    if (!textToSend.trim() || loading) return;

    const userMsg: AssistantMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [selectedAssistant]: [...(prev[selectedAssistant] || []), userMsg]
    }));

    setInputMessage('');
    setLoading(true);

    try {
      const stoneContext = emeralds.find(s => s.id === selectedStoneId);
      const res = await AIService.sendQuery(
        textToSend,
        selectedAssistant,
        stoneContext,
        currentMessages.slice(-4).map(m => ({ sender: m.sender, text: m.text }))
      );

      const aiMsg: AssistantMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: res.reply,
        source: res.source,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => ({
        ...prev,
        [selectedAssistant]: [...(prev[selectedAssistant] || []), aiMsg]
      }));
    } catch (e: any) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-emerald-heading flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-400" />
            Centro de Asistentes IA Especializados
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            10 agentes con inteligencia gemológica colombiana, respaldo backend Gemini y contingencia local inmediata
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs text-emerald-300 font-semibold flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>100% Gratuito e Ilimitado</span>
        </div>
      </div>

      {/* Main Grid: Assistant Selector Column + Active Chat Window */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[640px]">
        
        {/* Left Column: 10 Assistants List (4 cols) */}
        <div className="lg:col-span-4 space-y-2 bg-slate-900/80 border border-emerald-950 p-3 rounded-2xl overflow-y-auto max-h-[700px]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-1">
            Selecciona un Agente Especializado:
          </span>

          {ASSISTANTS.map(ast => {
            const Icon = ast.icon;
            const isSelected = selectedAssistant === ast.id;
            return (
              <button
                key={ast.id}
                onClick={() => setSelectedAssistant(ast.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border ${
                  isSelected
                    ? 'bg-emerald-950/90 border-emerald-500/60 shadow-lg shadow-emerald-950 text-white'
                    : 'bg-slate-950/60 border-slate-800/60 hover:bg-slate-900 text-slate-300'
                }`}
              >
                <div className={`p-2 rounded-lg bg-slate-900/90 shrink-0 ${ast.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white font-emerald-heading truncate">{ast.name}</h3>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
                  </div>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{ast.role}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Chat Window (8 cols) */}
        <div className="lg:col-span-8 bg-slate-900/95 border border-emerald-950 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
          
          {/* Active Chat Header */}
          <div className="p-4 bg-slate-950 border-b border-emerald-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${currentAssistantMeta.color}`}>
                <currentAssistantMeta.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-emerald-heading">
                  {currentAssistantMeta.name}
                </h3>
                <p className="text-xs text-slate-400">{currentAssistantMeta.role}</p>
              </div>
            </div>

            {/* Optional Stone Context Selector */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-[10px] text-slate-400 shrink-0">Vincular Gema:</span>
              <select
                value={selectedStoneId}
                onChange={e => setSelectedStoneId(e.target.value)}
                className="w-full sm:w-auto px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-emerald-300 focus:outline-none"
              >
                <option value="">-- Sin gema vinculada --</option>
                {emeralds.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.id} ({s.weightCarats} ct, {s.origin})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 max-h-[460px]">
            {currentMessages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center shrink-0 text-emerald-400">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-950/90 text-slate-200 border border-slate-800/90 shadow-md whitespace-pre-line'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div className="mt-2 flex items-center justify-between text-[10px] opacity-70">
                    <span>{msg.timestamp}</span>
                    {msg.source && (
                      <span className="font-mono text-[9px]">
                        {msg.source === 'gemini-live' ? '⚡ Gemini AI' : '🔬 Motor Gemológico'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center text-xs text-slate-400">
                <div className="w-8 h-8 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                </div>
                <span>El {currentAssistantMeta.name} está analizando tu consulta...</span>
              </div>
            )}
          </div>

          {/* Quick Questions Pills */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/60 flex gap-2 overflow-x-auto">
            {currentAssistantMeta.sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-3 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-300 rounded-full text-[11px] whitespace-nowrap transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-slate-950 border-t border-emerald-950 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              placeholder={`Pregunta al ${currentAssistantMeta.name}...`}
              className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={loading || !inputMessage.trim()}
              className="p-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl shadow-md transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
