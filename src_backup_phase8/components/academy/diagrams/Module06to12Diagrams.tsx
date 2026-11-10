import React from 'react';

interface DiagramProps {
  className?: string;
}

// LECCIÓN 6.2: Escala de Claridad y el Jardín de la Esmeralda
export const DiagramM6L2: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#021c14" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#34d399" fontSize="12" fontWeight="bold">ESCALA DE CLARIDAD Y EL «JARDÍN» DE LA ESMERALDA: LECCIÓN 6.2</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Los 5 grados de pureza estándar en gemas de color (GIA / CIBJO) y tolerancia al jardín interno</text>
      </g>

      <g transform="translate(20, 56)">
        {[
          { grade: 'Eye-Clean', desc: 'Sin inclusiones a simple vista', color: '#10b981', inc: 0 },
          { grade: 'Slightly Incl.', desc: 'Jardín muy leve periférico', color: '#34d399', inc: 1 },
          { grade: 'Moderately Incl.', desc: 'Jardín visible estándar', color: '#fbbf24', inc: 2 },
          { grade: 'Heavily Incl.', desc: 'Fisuras densas cruzadas', color: '#f97316', inc: 3 },
          { grade: 'Severely Incl.', desc: 'Opacidad por fracturas', color: '#ef4444', inc: 4 }
        ].map((item, idx) => {
          const x = idx * 96;
          return (
            <g key={idx} transform={`translate(${x}, 0)`}>
              <rect width="90" height="130" fill="#06241a" stroke={item.color} strokeWidth="1.5" rx="6" />
              {/* Emerald outline */}
              <polygon points="25,20 65,20 75,30 75,65 65,75 25,75 15,65 15,30" fill="#044e39" stroke="#34d399" strokeWidth="1.2" />
              
              {/* Internal inclusions representation according to grade */}
              {item.inc >= 1 && <circle cx="35" cy="40" r="1.5" fill="#ffffff" />}
              {item.inc >= 2 && (
                <>
                  <line x1="28" y1="35" x2="45" y2="55" stroke="#a7f3d0" strokeWidth="1" strokeDasharray="3 1" />
                  <rect x="50" y="48" width="4" height="4" fill="#fbbf24" />
                </>
              )}
              {item.inc >= 3 && (
                <>
                  <line x1="20" y1="60" x2="70" y2="35" stroke="#fca5a5" strokeWidth="1.2" />
                  <circle cx="58" cy="58" r="3" fill="#1e293b" />
                </>
              )}
              {item.inc >= 4 && (
                <>
                  <line x1="18" y1="28" x2="68" y2="68" stroke="#ef4444" strokeWidth="1.5" />
                  <line x1="20" y1="65" x2="72" y2="25" stroke="#ef4444" strokeWidth="1.5" />
                </>
              )}

              <text x="45" y="96" fill={item.color} fontSize="9" fontWeight="bold" textAnchor="middle">{item.grade}</text>
              <text x="45" y="112" fill="#cbd5e1" fontSize="7" textAnchor="middle">{item.desc}</text>
            </g>
          );
        })}
      </g>

      <g transform="translate(20, 202)">
        <rect width="480" height="60" fill="#06241c" stroke="#059669" strokeWidth="1" rx="6" />
        <text x="14" y="20" fill="#fbbf24" fontSize="10" fontWeight="bold">CONCEPTO CIENTÍFICO:</text>
        <text x="14" y="36" fill="#e2e8f0" fontSize="9">
          A diferencia del diamante donde la pureza "Flawless" es la meta, en la esmeralda el <strong className="text-emerald-300">«jardín» (jardin)</strong> es una huella dactilar genética que certifica su origen natural y descarta síntesis hidrotermales limpias.
        </text>
        <text x="14" y="50" fill="#94a3b8" fontSize="8">
          La máxima cotización mundial se da en gemas Slightly Included con transparencia vítrea intacta y color Muzo vívido.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 7.1: Principio Óptico del Relleno de Fisuras (Índice de Refracción)
export const DiagramM7L1: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#0d1117" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">ÓPTICA DEL RELLENO DE FRACTURAS (LEY DE SNELL): LECCIÓN 7.1</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Diferencia de Índice de Refracción (Δn): Aire (1.00) vs Aceite de Cedro (1.516) vs Berilo (1.577)</text>
      </g>

      {/* Side-by-side comparison */}
      {/* State 1: Fisura con aire (Sin tratar) */}
      <g transform="translate(30, 56)">
        <rect width="220" height="150" fill="#1e293b" stroke="#475569" strokeWidth="1.5" rx="6" />
        <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">1. Fisura con Aire (Sin Tratamiento)</text>
        
        {/* Host Beryl Emerald */}
        <rect x="15" y="40" width="190" height="85" fill="#044e39" stroke="#10b981" strokeWidth="1" />
        <text x="25" y="56" fill="#a7f3d0" fontSize="9" fontWeight="bold">Berilo (n = 1.577)</text>

        {/* Air Fracture in middle */}
        <polygon points="35,70 185,75 185,82 35,77" fill="#020617" stroke="#ffffff" strokeWidth="1.2" />
        <text x="110" y="77" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Aire (n = 1.000)</text>

        {/* Reflection light bounce */}
        <line x1="50" y1="42" x2="70" y2="70" stroke="#fde047" strokeWidth="2" />
        <line x1="70" y1="70" x2="90" y2="42" stroke="#fde047" strokeWidth="2" strokeDasharray="3 2" />
        <text x="110" y="105" fill="#fca5a5" fontSize="8" fontWeight="bold">Δn = 0.577 (Fuerte reflexión blanca)</text>
        <text x="110" y="118" fill="#cbd5e1" fontSize="7">La fisura brilla y opaca la gema</text>
      </g>

      {/* State 2: Fisura con Aceite de Cedro */}
      <g transform="translate(270, 56)">
        <rect width="220" height="150" fill="#022c22" stroke="#059669" strokeWidth="1.5" rx="6" />
        <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">2. Fisura con Aceite de Cedro</text>

        {/* Host Beryl Emerald */}
        <rect x="15" y="40" width="190" height="85" fill="#044e39" stroke="#10b981" strokeWidth="1" />
        <text x="25" y="56" fill="#a7f3d0" fontSize="9" fontWeight="bold">Berilo (n = 1.577)</text>

        {/* Oil-filled Fracture */}
        <polygon points="35,70 185,75 185,82 35,77" fill="#15803d" stroke="#86efac" strokeWidth="0.8" opacity="0.9" />
        <text x="110" y="77" fill="#dcfce7" fontSize="7" fontWeight="bold" textAnchor="middle">Aceite Cedro (n = 1.516)</text>

        {/* Light passes straight through with negligible reflection */}
        <line x1="50" y1="42" x2="80" y2="120" stroke="#fde047" strokeWidth="2" />
        <text x="110" y="105" fill="#34d399" fontSize="8" fontWeight="bold">Δn = 0.061 (Transmisión continua)</text>
        <text x="110" y="118" fill="#a7f3d0" fontSize="7">La fisura se vuelve invisible</text>
      </g>

      <g transform="translate(30, 218)">
        <rect width="460" height="48" fill="#0f172a" stroke="#334155" rx="6" />
        <text x="14" y="20" fill="#fbbf24" fontSize="9" fontWeight="bold">REGLA FÍSICA:</text>
        <text x="14" y="34" fill="#cbd5e1" fontSize="8">
          Al igualar el índice de refracción del relleno con el de la gema huésped (n ≈ 1.516 vs 1.577), la luz no experimenta reflexión interna en la interfase y la fractura desaparece a la vista.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 10.4: Clasificación y Comercialización de Lotes (Parcelas)
export const DiagramM10L4: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#09141f" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">EVALUACIÓN Y CLASIFICACIÓN DE LOTES (PARCELAS): LECCIÓN 10.4</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Técnica de inspección en papel de seda plegado bajo luz difusa del norte (5500 K - 6500 K)</text>
      </g>

      {/* Gem Paper Sheet (Papel de seda blanco/azul) */}
      <g transform="translate(40, 56)">
        <rect width="280" height="150" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" rx="4" />
        <rect x="15" y="15" width="250" height="120" fill="#f1f5f9" stroke="#94a3b8" strokeDasharray="3 2" />
        <text x="140" y="32" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">PAPEL DIAMANTE / PAPEL DE SEDA BLANCO PURO</text>

        {/* Emerald Parcel array sorted by size and color */}
        <polygon points="40,55 52,55 58,61 58,73 52,79 40,79 34,73 34,61" fill="#047857" stroke="#10b981" />
        <polygon points="70,52 86,52 94,60 94,76 86,84 70,84 62,76 62,60" fill="#047857" stroke="#34d399" />
        <polygon points="110,48 132,48 142,58 142,80 132,90 110,90 100,80 100,58" fill="#065f46" stroke="#fbbf24" strokeWidth="1.5" />
        <polygon points="160,52 176,52 184,60 184,76 176,84 160,84 152,76 152,60" fill="#059669" stroke="#34d399" />
        <polygon points="205,55 217,55 223,61 223,73 217,79 205,79 199,73 199,61" fill="#047857" stroke="#10b981" />

        <text x="140" y="115" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">Lote Homogéneo Calibrado (Parejas y Ternas)</text>
        <text x="140" y="126" fill="#475569" fontSize="7" textAnchor="middle">Evaluado en fondo blanco para no adulterar el matiz</text>
      </g>

      {/* Commercial Criteria List */}
      <g transform="translate(340, 56)">
        <rect width="150" height="150" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="6" />
        <g transform="translate(10, 14)">
          <text x="0" y="10" fill="#38bdf8" fontSize="10" fontWeight="bold">CRITERIOS DE LOTE</text>
          <text x="0" y="28" fill="#e2e8f0" fontSize="8">• 1. Color uniforme</text>
          <text x="0" y="42" fill="#e2e8f0" fontSize="8">• 2. Corte idéntico</text>
          <text x="0" y="56" fill="#e2e8f0" fontSize="8">• 3. Milimetrado parejo</text>
          <text x="0" y="70" fill="#e2e8f0" fontSize="8">• 4. Claridad concordante</text>

          <text x="0" y="96" fill="#fbbf24" fontSize="9" fontWeight="bold">PRECIO POR LOTE:</text>
          <text x="0" y="110" fill="#cbd5e1" fontSize="8">Precio promedio global</text>
          <text x="0" y="122" fill="#34d399" fontSize="8">«Al bulto / Corriente»</text>
          <text x="0" y="136" fill="#fca5a5" fontSize="7">vs «Piedra escogida» (+35%)</text>
        </g>
      </g>

      <g transform="translate(40, 218)">
        <rect width="450" height="48" fill="#021c14" stroke="#059669" rx="6" />
        <text x="14" y="20" fill="#34d399" fontSize="9" fontWeight="bold">PRÁCTICA COMERCIAL DE LA PLAZOLETA DEL ROSARIO:</text>
        <text x="14" y="34" fill="#cbd5e1" fontSize="8">
          El papel diamante blanco neutro previene engaños de saturación causados por fondos verdes o amarillos. La inspección se hace sin luz solar directa.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 11.2: Plataforma RUCOM y Trazabilidad Minera Legal
export const DiagramM11L2: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#021c18" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#34d399" fontSize="12" fontWeight="bold">SISTEMA RUCOM Y GUÍA DE TRANSPORTE MINERO: LECCIÓN 11.2</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Flujo obligatorio de legalidad y trazabilidad de minerales (Agencia Nacional de Minería ANM)</text>
      </g>

      <g transform="translate(20, 56)">
        {/* Step 1: Titular Minero */}
        <g transform="translate(0, 0)">
          <rect width="105" height="110" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" rx="6" />
          <text x="52" y="28" fill="#fbbf24" fontSize="18" textAnchor="middle">⛏️</text>
          <text x="52" y="52" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">1. TÍTULO MINERO</text>
          <text x="52" y="68" fill="#a7f3d0" fontSize="8" textAnchor="middle">Contrato ANM</text>
          <text x="52" y="80" fill="#a7f3d0" fontSize="8" textAnchor="middle">Licencia Ambiental</text>
          <text x="52" y="94" fill="#fde047" fontSize="8" fontWeight="bold" textAnchor="middle">Origen Legal</text>
        </g>

        {/* Arrow 1 */}
        <line x1="110" y1="55" x2="125" y2="55" stroke="#fbbf24" strokeWidth="2.5" />
        <polygon points="127,55 120,51 120,59" fill="#fbbf24" />

        {/* Step 2: Registro RUCOM */}
        <g transform="translate(130, 0)">
          <rect width="105" height="110" fill="#065f46" stroke="#34d399" strokeWidth="1.5" rx="6" />
          <text x="52" y="28" fill="#38bdf8" fontSize="18" textAnchor="middle">📋</text>
          <text x="52" y="52" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">2. REGISTRO RUCOM</text>
          <text x="52" y="68" fill="#a7f3d0" fontSize="8" textAnchor="middle">Comercializador</text>
          <text x="52" y="80" fill="#a7f3d0" fontSize="8" textAnchor="middle">Autorizado ANM</text>
          <text x="52" y="94" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Vigencia Activa</text>
        </g>

        {/* Arrow 2 */}
        <line x1="240" y1="55" x2="255" y2="55" stroke="#fbbf24" strokeWidth="2.5" />
        <polygon points="257,55 250,51 250,59" fill="#fbbf24" />

        {/* Step 3: Guía de Tránsito QR */}
        <g transform="translate(260, 0)">
          <rect width="105" height="110" fill="#047857" stroke="#10b981" strokeWidth="1.5" rx="6" />
          <text x="52" y="28" fill="#fca5a5" fontSize="18" textAnchor="middle">📑</text>
          <text x="52" y="52" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">3. GUÍA TRÁNSITO</text>
          <text x="52" y="68" fill="#a7f3d0" fontSize="8" textAnchor="middle">Código QR Único</text>
          <text x="52" y="80" fill="#a7f3d0" fontSize="8" textAnchor="middle">Peso declarado (g/ct)</text>
          <text x="52" y="94" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">Control Policía</text>
        </g>

        {/* Arrow 3 */}
        <line x1="370" y1="55" x2="385" y2="55" stroke="#fbbf24" strokeWidth="2.5" />
        <polygon points="387,55 380,51 380,59" fill="#fbbf24" />

        {/* Step 4: Exportación DIAN */}
        <g transform="translate(390, 0)">
          <rect width="100" height="110" fill="#022c22" stroke="#fbbf24" strokeWidth="2" rx="6" />
          <text x="50" y="28" fill="#fbbf24" fontSize="18" textAnchor="middle">✈️</text>
          <text x="50" y="52" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">4. EXPORTACIÓN</text>
          <text x="50" y="68" fill="#fde047" fontSize="8" textAnchor="middle">Ventanilla DIAN</text>
          <text x="50" y="80" fill="#fde047" fontSize="8" textAnchor="middle">Regalías pagadas</text>
          <text x="50" y="94" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Mercado Global</text>
        </g>
      </g>

      <g transform="translate(20, 185)">
        <rect width="480" height="75" fill="#06241a" stroke="#059669" rx="6" />
        <text x="14" y="20" fill="#fbbf24" fontSize="10" fontWeight="bold">SANCIONES POR FALTA DE GUÍA RUCOM:</text>
        <text x="14" y="36" fill="#e2e8f0" fontSize="9">
          El transporte de esmeraldas sin la debida Guía de Transporte Minero expedida por la plataforma ANM conlleva el decomiso preventivo inmediato de la mercancía por parte de la Policía Nacional y la apertura de investigación por minería ilegal (Artículo 160 del Código de Minas).
        </text>
        <text x="14" y="54" fill="#94a3b8" fontSize="8">
          La compraventa ética exige exigir siempre el número de RUCOM del comercializador antes de pactar cualquier transacción.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 12.3: Alta Joyería y Técnicas de Engaste Seguro
export const DiagramM12L3: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#150a1f" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#e879f9" fontSize="12" fontWeight="bold">TÉCNICAS DE ENGASTE SEGURO PARA ESMERALDAS: LECCIÓN 12.3</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Protección de chaflanes y prevención de desportillado por compresión mecánica en joyería</text>
      </g>

      {/* Cross section 1: Engaste en Bisel (Bezel) */}
      <g transform="translate(30, 56)">
        <rect width="215" height="145" fill="#2e1065" stroke="#a855f7" strokeWidth="1.5" rx="6" />
        <text x="15" y="22" fill="#c084fc" fontSize="10" fontWeight="bold">1. ENGASTE EN BISEL COMPLETO (RECOMENDADO)</text>
        
        {/* Metal Bezel Rim in Gold */}
        <path d="M 30 115 L 30 75 L 45 60 L 55 60 L 55 115 Z" fill="#d97706" stroke="#fbbf24" strokeWidth="1.2" />
        <path d="M 175 115 L 175 75 L 160 60 L 150 60 L 150 115 Z" fill="#d97706" stroke="#fbbf24" strokeWidth="1.2" />
        
        {/* Emerald Gem Seated */}
        <polygon points="45,60 160,60 145,105 60,105" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
        <text x="102" y="86" fill="#a7f3d0" fontSize="9" fontWeight="bold" textAnchor="middle">Esmeralda</text>

        <text x="15" y="132" fill="#a7f3d0" fontSize="8">✓ Banda de metal envolvente a 360°</text>
      </g>

      {/* Cross section 2: Engaste en Garras en Chaflán */}
      <g transform="translate(265, 56)">
        <rect width="225" height="145" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" rx="6" />
        <text x="15" y="22" fill="#818cf8" fontSize="10" fontWeight="bold">2. GARRAS DOBLES EN CHAFLÁN 45°</text>

        {/* Octagonal Emerald Top View */}
        <polygon points="65,45 135,45 155,65 155,105 135,125 65,125 45,105 45,65" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
        
        {/* Protective Prongs on 45° Beveled Corners */}
        <circle cx="55" cy="55" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <circle cx="145" cy="55" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <circle cx="145" cy="115" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <circle cx="55" cy="115" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />

        <text x="100" y="88" fill="#fde047" fontSize="8" fontWeight="bold" textAnchor="middle">Chaflán protegido</text>
        <text x="15" y="132" fill="#cbd5e1" fontSize="8">✓ Garras situadas en esquinas truncadas</text>
      </g>

      <g transform="translate(30, 215)">
        <rect width="460" height="50" fill="#0f172a" stroke="#334155" rx="6" />
        <text x="14" y="18" fill="#fca5a5" fontSize="9" fontWeight="bold">ADVERTENCIA JOYERA CRÍTICA:</text>
        <text x="14" y="32" fill="#cbd5e1" fontSize="8">
          Jamás se deben apretar las garras sobre las aristas rectas del filetín delgado. La presión debe concentrarse suavemente sobre los chaflanes a 45° con apoyo plano en el pabellón.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 5.3: Textura Gota de Aceite y Crecimiento Turbulento
export const DiagramM5L3: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#021c16" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#34d399" fontSize="12" fontWeight="bold">TEXTURA «GOTA DE ACEITE» (EFECTO CALICITA / MARIPOSA): LECCIÓN 5.3</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Dispersión Rayleigh por subestructuras de crecimiento hexagonal turbulento en esmeraldas de Muzo</text>
      </g>

      <g transform="translate(30, 56)">
        {/* Microscopic Field Simulation */}
        <rect width="250" height="150" fill="#011b13" stroke="#059669" strokeWidth="1.5" rx="6" />
        <circle cx="125" cy="75" r="65" fill="#044e39" stroke="#10b981" strokeWidth="2" />
        
        {/* Velvet-like hexagonal cellular turbulence patches */}
        <polygon points="95,45 115,45 125,60 115,75 95,75 85,60" fill="#059669" opacity="0.6" stroke="#34d399" strokeWidth="0.8" />
        <polygon points="125,45 145,45 155,60 145,75 125,75 115,60" fill="#047857" opacity="0.7" stroke="#6ee7b7" strokeWidth="0.8" />
        <polygon points="110,72 130,72 140,87 130,102 110,102 100,87" fill="#065f46" opacity="0.8" stroke="#a7f3d0" strokeWidth="0.8" />
        <polygon points="80,72 100,72 110,87 100,102 80,102 70,87" fill="#059669" opacity="0.5" stroke="#34d399" strokeWidth="0.8" />
        <polygon points="140,72 160,72 170,87 160,102 140,102 130,87" fill="#047857" opacity="0.6" stroke="#34d399" strokeWidth="0.8" />

        {/* Soft light diffusion glow */}
        <circle cx="125" cy="75" r="30" fill="#a7f3d0" opacity="0.15" />
        <text x="125" y="132" fill="#ecfdf5" fontSize="8" fontWeight="bold" textAnchor="middle">Reflexión difusa aterciopelada interna</text>
      </g>

      <g transform="translate(300, 56)">
        <rect width="190" height="150" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="6" />
        <g transform="translate(12, 14)">
          <text x="0" y="10" fill="#fbbf24" fontSize="10" fontWeight="bold">CARACTERÍSTICAS FÍSICAS</text>
          <text x="0" y="28" fill="#e2e8f0" fontSize="8">• Variaciones de crecimiento celular</text>
          <text x="0" y="42" fill="#e2e8f0" fontSize="8">• Dispersión suave de la luz incidente</text>
          <text x="0" y="56" fill="#e2e8f0" fontSize="8">• Apariencia suave como seda o aceite</text>
          <text x="0" y="70" fill="#e2e8f0" fontSize="8">• Suprime reflejos duros especulares</text>

          <text x="0" y="96" fill="#34d399" fontSize="9" fontWeight="bold">VALOR EN EL MERCADO:</text>
          <text x="0" y="110" fill="#a7f3d0" fontSize="8">Prima de hasta +100% sobre</text>
          <text x="0" y="122" fill="#a7f3d0" fontSize="8">gemas de claridad idéntica.</text>
          <text x="0" y="136" fill="#fbbf24" fontSize="7">Origen casi exclusivo: Muzo / Coscuez</text>
        </g>
      </g>

      <g transform="translate(30, 218)">
        <rect width="460" height="48" fill="#04271d" stroke="#059669" rx="6" />
        <text x="14" y="20" fill="#34d399" fontSize="9" fontWeight="bold">EXPLICACIÓN GEMOLÓGICA CIENTÍFICA:</text>
        <text x="14" y="34" fill="#cbd5e1" fontSize="8">
          La textura «Gota de Aceite» (antiguamente llamada "efecto calicita") no se debe a inclusiones extrañas de calcita sino a una ligera perturbación en la tasa de cristalización del berilo que genera dominios ópticos micrométricos con ligera desorientación angular.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 8.4: Proceso Técnico de Lapidación de Esmeraldas
export const DiagramM8L4: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#08141e" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">SECUENCIA TÉCNICA DE LAPIDACIÓN PROFESIONAL: LECCIÓN 8.4</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Flujo metrológico desde el cristal en bruto hasta el pulido final con diamante de 0.25 micrones</text>
      </g>

      <g transform="translate(20, 56)">
        {[
          { step: '1. Planeación', desc: 'Control de eje [c] y tensiones', icon: '🔍', color: '#38bdf8', plate: 'Inmersión n=1.57' },
          { step: '2. Desbaste', desc: 'Preforma octagonal y chaflanes', icon: '⚙️', color: '#10b981', plate: 'Disco 600 mesh' },
          { step: '3. Facetado', desc: 'Ángulos corona 42° / pabellón 43°', icon: '📐', color: '#fbbf24', plate: 'Disco 1200 mesh' },
          { step: '4. Pulido Espejo', desc: 'Brillo vítreo sin sobrecalentamiento', icon: '💎', color: '#f43f5e', plate: 'Zinc + pasta 1 µm' }
        ].map((item, idx) => {
          const x = idx * 122;
          return (
            <g key={idx} transform={`translate(${x}, 0)`}>
              <rect width="116" height="135" fill="#0f172a" stroke={item.color} strokeWidth="1.5" rx="6" />
              <text x="58" y="28" fill="#ffffff" fontSize="18" textAnchor="middle">{item.icon}</text>
              <text x="58" y="52" fill={item.color} fontSize="10" fontWeight="bold" textAnchor="middle">{item.step}</text>
              <text x="58" y="72" fill="#e2e8f0" fontSize="8" textAnchor="middle">{item.desc}</text>
              
              <rect x="8" y="90" width="100" height="34" fill="#1e293b" stroke="#334155" rx="4" />
              <text x="58" y="104" fill="#94a3b8" fontSize="7" textAnchor="middle">Herramienta clave:</text>
              <text x="58" y="117" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">{item.plate}</text>
            </g>
          );
        })}
      </g>

      <g transform="translate(20, 206)">
        <rect width="480" height="60" fill="#06241c" stroke="#059669" rx="6" />
        <text x="14" y="20" fill="#fbbf24" fontSize="10" fontWeight="bold">REGLA LAPIDARIA FUNDAMENTAL:</text>
        <text x="14" y="36" fill="#e2e8f0" fontSize="9">
          Durante el desbaste y pulido, la refrigeración líquida constante es indispensable. El calor por fricción puede dilatar bruscamente los fluidos trifásicos internos y estallar el cristal por incremento de presión hidrostática intra-inclusión.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 9.3: Triángulo Ternario Cr - V - Fe y Microanálisis
export const DiagramM9L3: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#0f1422" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">DISCRIMINACIÓN GEOQUÍMICA TERNARIA (Cr - V - Fe): LECCIÓN 9.3</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Determinación de origen geográfico por espectrometría EDXRF y LA-ICP-MS (GIA / Gübelin / CDTEC)</text>
      </g>

      {/* Ternary Graph Scheme */}
      <g transform="translate(130, 56)">
        {/* Ternary Triangle */}
        <polygon points="90,15 15,145 165,145" fill="#090d16" stroke="#475569" strokeWidth="1.5" />
        
        {/* Triangle Vertices Labels */}
        <text x="90" y="8" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Cromo (Cr)</text>
        <text x="0" y="155" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Vanadio (V)</text>
        <text x="180" y="155" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">Hierro (Fe)</text>

        {/* Colombian Field: Close to Cr-V axis, minimal Fe */}
        <ellipse cx="60" cy="100" rx="20" ry="30" fill="#059669" fillOpacity="0.5" stroke="#34d399" strokeWidth="2" />
        <text x="60" y="102" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">COLOMBIA</text>
        <text x="60" y="114" fill="#a7f3d0" fontSize="7" textAnchor="middle">(Muzo / Chivor)</text>

        {/* Zambian Field: Shifted to Fe corner */}
        <ellipse cx="130" cy="120" rx="18" ry="16" fill="#dc2626" fillOpacity="0.4" stroke="#f87171" strokeWidth="1.5" />
        <text x="130" y="122" fill="#fecaca" fontSize="8" fontWeight="bold" textAnchor="middle">ZAMBIA</text>

        {/* Brazilian Field: Low V, High Fe */}
        <ellipse cx="120" cy="80" rx="16" ry="18" fill="#d97706" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="120" y="82" fill="#fef3c7" fontSize="8" fontWeight="bold" textAnchor="middle">BRASIL</text>
      </g>

      <g transform="translate(325, 56)">
        <rect width="175" height="150" fill="#091426" stroke="#1e293b" strokeWidth="1.5" rx="6" />
        <g transform="translate(12, 14)">
          <text x="0" y="10" fill="#38bdf8" fontSize="10" fontWeight="bold">HUELLA COLOMBIANA</text>
          <text x="0" y="28" fill="#a7f3d0" fontSize="8">• Razón Cr/V variable pero alta</text>
          <text x="0" y="42" fill="#34d399" fontSize="9" fontWeight="bold">• Fe &lt; 800 ppmw (Mínimo)</text>
          <text x="0" y="56" fill="#cbd5e1" fontSize="8">• Causa fluorescencia roja viva</text>
          <text x="0" y="70" fill="#cbd5e1" fontSize="8">• Sin apagamiento por hierro</text>

          <text x="0" y="96" fill="#f87171" fontSize="9" fontWeight="bold">ESMERALDAS AFRICANAS:</text>
          <text x="0" y="110" fill="#cbd5e1" fontSize="8">• Fe &gt; 5.000 a 15.000 ppmw</text>
          <text x="0" y="122" fill="#fca5a5" fontSize="8">• Nula fluorescencia UV</text>
          <text x="0" y="136" fill="#cbd5e1" fontSize="8">• Tono verde azuloso más frío</text>
        </g>
      </g>

      <g transform="translate(30, 218)">
        <rect width="460" height="48" fill="#031b14" stroke="#059669" rx="6" />
        <text x="14" y="20" fill="#34d399" fontSize="9" fontWeight="bold">METROLOGÍA DE LABORATORIO:</text>
        <text x="14" y="34" fill="#cbd5e1" fontSize="8">
          El microanálisis por ablación láser (LA-ICP-MS) permite determinar concentraciones isotópicas con precisión de partes por millón (ppm), eliminando cualquier incertidumbre respecto al país de extracción.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 11.4: Gestión Ambiental y Seguridad en Mina
export const DiagramM11L4: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#0f1715" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#34d399" fontSize="12" fontWeight="bold">GESTIÓN AMBIENTAL Y SEGURIDAD SUBTERRÁNEA: LECCIÓN 11.4</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Esquema de ventilación forzada forzada, sostenimiento con cerchas de acero y recirculación de aguas</text>
      </g>

      <g transform="translate(30, 56)">
        {/* Underground Gallery Tunnel Cross Section */}
        <rect width="260" height="150" fill="#1e293b" stroke="#334155" strokeWidth="1.5" rx="6" />
        
        {/* Steel Arch Support (Cerchas metálicas 3 arcos) */}
        <path d="M 30 140 L 30 60 Q 130 10 230 60 L 230 140" stroke="#f59e0b" strokeWidth="4" fill="none" />
        <text x="130" y="35" fill="#fde047" fontSize="8" fontWeight="bold" textAnchor="middle">Sostenimiento con Cerchas Metálicas</text>

        {/* Ventilation Duct (Manga de ventilación forzada) */}
        <rect x="40" y="45" width="180" height="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" rx="8" />
        <text x="130" y="56" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Ducto de Ventilación Forzada de Aire Fresco</text>

        {/* Miner Track & Water Drain Ditch */}
        <line x1="30" y1="130" x2="230" y2="130" stroke="#94a3b8" strokeWidth="2" />
        <rect x="40" y="132" width="180" height="10" fill="#0369a1" stroke="#0ea5e9" strokeWidth="0.8" />
        <text x="130" y="140" fill="#e0f2fe" fontSize="7" textAnchor="middle">Cuneta de desagüe hacia planta de tratamiento</text>
      </g>

      <g transform="translate(310, 56)">
        <rect width="180" height="150" fill="#06241a" stroke="#059669" strokeWidth="1.2" rx="6" />
        <g transform="translate(12, 14)">
          <text x="0" y="10" fill="#34d399" fontSize="10" fontWeight="bold">ESTÁNDARES AMBIENTALES</text>
          <text x="0" y="28" fill="#e2e8f0" fontSize="8">• 1. Recirculación de aguas 100%</text>
          <text x="0" y="42" fill="#e2e8f0" fontSize="8">• 2. Neutralización de drenaje ácido</text>
          <text x="0" y="56" fill="#e2e8f0" fontSize="8">• 3. Relleno con estériles en galerías</text>
          <text x="0" y="70" fill="#e2e8f0" fontSize="8">• 4. Prohibición de mercurio/cianuro</text>

          <text x="0" y="96" fill="#fbbf24" fontSize="9" fontWeight="bold">SEGURIDAD HUMANA:</text>
          <text x="0" y="110" fill="#cbd5e1" fontSize="8">• Monitoreo continuo de O₂ y CO</text>
          <text x="0" y="122" fill="#cbd5e1" fontSize="8">• Autorrescatadores obligatorios</text>
          <text x="0" y="136" fill="#34d399" fontSize="8">✓ Cero fatalidades como meta</text>
        </g>
      </g>

      <g transform="translate(30, 218)">
        <rect width="460" height="48" fill="#021c16" stroke="#059669" rx="6" />
        <text x="14" y="20" fill="#34d399" fontSize="9" fontWeight="bold">MINERÍA SUBTERRÁNEA MODERNA EN BOYACÁ:</text>
        <text x="14" y="34" fill="#cbd5e1" fontSize="8">
          La tecnificación del sector sustituyó los antiguos cortes a cielo abierto por túneles mecanizados con plantas de tratamiento de agua residual minera y revegetación de taludes con especies nativas.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 12.5: Inteligencia Artificial y Visión Espectral
export const DiagramM12L5: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#080d1a" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#a855f7" fontSize="12" fontWeight="bold">INTELIGENCIA ARTIFICIAL Y METROLOGÍA DIGITAL: LECCIÓN 12.5</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Visión espectral multiangular, escaneo volumétrico 3D y trazabilidad digital del color</text>
      </g>

      <g transform="translate(30, 56)">
        {/* Computer Vision Capture Frame */}
        <rect width="250" height="150" fill="#020617" stroke="#6366f1" strokeWidth="1.5" rx="6" />
        
        {/* AI Bounding Box and Mesh on Emerald */}
        <rect x="75" y="30" width="100" height="85" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" />
        <polygon points="100,45 150,45 165,60 165,95 150,110 100,110 85,95 85,60" fill="#047857" stroke="#34d399" strokeWidth="1.8" />
        
        {/* AI Detection Corners */}
        <circle cx="75" cy="30" r="3" fill="#38bdf8" />
        <circle cx="175" cy="30" r="3" fill="#38bdf8" />
        <circle cx="75" cy="115" r="3" fill="#38bdf8" />
        <circle cx="175" cy="115" r="3" fill="#38bdf8" />
        <text x="125" y="25" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Segmentación Neural 99.8%</text>

        <text x="125" y="132" fill="#a7f3d0" fontSize="8" textAnchor="middle">Mapeo de saturación y cálculo de simetría</text>
      </g>

      <g transform="translate(300, 56)">
        <rect width="190" height="150" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="6" />
        <g transform="translate(12, 14)">
          <text x="0" y="10" fill="#c084fc" fontSize="10" fontWeight="bold">CAPACIDADES DE LA IA</text>
          <text x="0" y="28" fill="#e2e8f0" fontSize="8">• Calibración CIE L*a*b* objetiva</text>
          <text x="0" y="42" fill="#e2e8f0" fontSize="8">• Medición volumétrica de inclusiones</text>
          <text x="0" y="56" fill="#e2e8f0" fontSize="8">• Predicción de rinde antes del corte</text>
          <text x="0" y="70" fill="#e2e8f0" fontSize="8">• Firma óptica digital anti-sustitución</text>

          <text x="0" y="96" fill="#34d399" fontSize="9" fontWeight="bold">EL FACTOR HUMANO:</text>
          <text x="0" y="110" fill="#cbd5e1" fontSize="8">La IA asiste la pericia técnica;</text>
          <text x="0" y="122" fill="#cbd5e1" fontSize="8">el gemólogo humano valida</text>
          <text x="0" y="134" fill="#38bdf8" fontSize="8">el informe definitivo.</text>
        </g>
      </g>

      <g transform="translate(30, 218)">
        <rect width="460" height="48" fill="#1e1035" stroke="#7e22ce" rx="6" />
        <text x="14" y="20" fill="#d8b4fe" fontSize="9" fontWeight="bold">INNOVACIÓN ESMERALDA INTELIGENTE JAIRRESTAURA:</text>
        <text x="14" y="34" fill="#cbd5e1" fontSize="8">
          La integración de visión artificial permite democratizar el conocimiento gemológico, ofreciendo a cualquier minero, tallador o comprador herramientas digitales precisas de diagnóstico y valoración justa.
        </text>
      </g>
    </svg>
  );
};

