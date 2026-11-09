import React from 'react';

interface DiagramProps {
  className?: string;
}

// LECCIÓN 1.1: Mineral, Gema, Cristal y Roca
export const DiagramM1L1: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#02120e" rx="12" />
      
      {/* Title Header */}
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#34d399" fontSize="12" fontWeight="bold">CUADRANTE COMPARATIVO ONTOLÓGICO: LECCIÓN 1.1</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Diferenciación conceptual y termodinámica en gemología científica</text>
      </g>

      {/* Grid: 4 Quadrants */}
      {/* Quadrant 1: Mineral */}
      <g transform="translate(20, 52)">
        <rect width="230" height="98" fill="#06241a" stroke="#059669" strokeWidth="1.2" rx="6" />
        <rect x="8" y="8" width="60" height="82" fill="#02160f" stroke="#10b981" strokeWidth="1" rx="4" />
        {/* Atomic Lattice Representation */}
        <circle cx="23" cy="25" r="4" fill="#34d399" />
        <circle cx="53" cy="25" r="3" fill="#60a5fa" />
        <circle cx="38" cy="50" r="5" fill="#10b981" />
        <circle cx="23" cy="72" r="3" fill="#60a5fa" />
        <circle cx="53" cy="72" r="4" fill="#34d399" />
        <line x1="23" y1="25" x2="53" y2="25" stroke="#334155" strokeWidth="1" />
        <line x1="23" y1="25" x2="38" y2="50" stroke="#334155" strokeWidth="1" />
        <line x1="53" y1="25" x2="38" y2="50" stroke="#334155" strokeWidth="1" />
        <line x1="23" y1="72" x2="38" y2="50" stroke="#334155" strokeWidth="1" />
        <line x1="53" y1="72" x2="38" y2="50" stroke="#334155" strokeWidth="1" />

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#34d399" fontSize="11" fontWeight="bold">1. MINERAL</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Fase sólida homogénea inorgánica</text>
          <text x="0" y="39" fill="#93c5fd" fontSize="9" fontFamily="monospace">Be₃Al₂(SiO₃)₆ : (Cr, V)</text>
          <text x="0" y="52" fill="#cbd5e1" fontSize="8">• Red atómica tridimensional periódica</text>
          <text x="0" y="64" fill="#cbd5e1" fontSize="8">• Composición estequiométrica definida</text>
          <text x="0" y="76" fill="#6ee7b7" fontSize="8">→ Ciclosilicato del berilo</text>
        </g>
      </g>

      {/* Quadrant 2: Roca */}
      <g transform="translate(270, 52)">
        <rect width="230" height="98" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="6" />
        <rect x="8" y="8" width="60" height="82" fill="#020617" stroke="#475569" strokeWidth="1" rx="4" />
        {/* Sedimentary shale layers */}
        <line x1="12" y1="24" x2="64" y2="24" stroke="#64748b" strokeWidth="2" strokeDasharray="6 3" />
        <line x1="12" y1="36" x2="64" y2="36" stroke="#475569" strokeWidth="2.5" />
        <line x1="12" y1="48" x2="64" y2="48" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="12" y1="60" x2="64" y2="60" stroke="#475569" strokeWidth="2" />
        <line x1="12" y1="72" x2="64" y2="72" stroke="#334155" strokeWidth="2" strokeDasharray="5 3" />
        <text x="38" y="86" fill="#94a3b8" fontSize="7" textAnchor="middle">Lutita Fm. Paja</text>

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#94a3b8" fontSize="11" fontWeight="bold">2. ROCA</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Agregado polimineral heterogéneo</text>
          <text x="0" y="39" fill="#94a3b8" fontSize="8">• Unidad cartográfica sedimentaria</text>
          <text x="0" y="52" fill="#cbd5e1" fontSize="8">• Lutita bituminosa carbonosa</text>
          <text x="0" y="64" fill="#cbd5e1" fontSize="8">• Sin orden cristalino continuo</text>
          <text x="0" y="76" fill="#fca5a5" fontSize="8">→ Caja encajante (No es gema)</text>
        </g>
      </g>

      {/* Quadrant 3: Cristal */}
      <g transform="translate(20, 160)">
        <rect width="230" height="104" fill="#022119" stroke="#059669" strokeWidth="1.2" rx="6" />
        <rect x="8" y="8" width="60" height="88" fill="#011610" stroke="#10b981" strokeWidth="1" rx="4" />
        {/* Hexagonal Prism Crystal */}
        <polygon points="38,18 56,28 56,66 38,76 20,66 20,28" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
        <polygon points="38,18 56,28 38,38 20,28" fill="#065f46" stroke="#34d399" strokeWidth="1" />
        <line x1="38" y1="38" x2="38" y2="76" stroke="#34d399" strokeWidth="1.5" />
        <text x="38" y="84" fill="#a7f3d0" fontSize="7" textAnchor="middle" fontWeight="bold">Hábito {`{10-10}`}</text>

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#34d399" fontSize="11" fontWeight="bold">3. CRISTAL</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Expresión geométrica euhedral externa</text>
          <text x="0" y="39" fill="#cbd5e1" fontSize="8">• Caras planas prismáticas naturales</text>
          <text x="0" y="52" fill="#cbd5e1" fontSize="8">• Pinacoide basal plano (0001)</text>
          <text x="0" y="64" fill="#cbd5e1" fontSize="8">• Simetría hexagonal holoédrica 6/mmm</text>
          <text x="0" y="78" fill="#6ee7b7" fontSize="8">→ Esmeralda en bruto en matriz</text>
        </g>
      </g>

      {/* Quadrant 4: Gema Noble */}
      <g transform="translate(270, 160)">
        <rect width="230" height="104" fill="#02281d" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
        <rect x="8" y="8" width="60" height="88" fill="#021a13" stroke="#fbbf24" strokeWidth="1" rx="4" />
        {/* Faceted Octagonal Emerald */}
        <polygon points="25,26 51,26 59,34 59,60 51,68 25,68 17,60 17,34" fill="#059669" stroke="#fbbf24" strokeWidth="1.8" />
        <polygon points="28,34 48,34 52,38 52,56 48,60 28,60 24,56 24,38" fill="#022c22" stroke="#a7f3d0" strokeWidth="1" />
        <line x1="25" y1="26" x2="28" y2="34" stroke="#6ee7b7" strokeWidth="0.8" />
        <line x1="51" y1="26" x2="48" y2="34" stroke="#6ee7b7" strokeWidth="0.8" />
        <line x1="59" y1="60" x2="52" y2="56" stroke="#6ee7b7" strokeWidth="0.8" />
        <line x1="25" y1="68" x2="28" y2="60" stroke="#6ee7b7" strokeWidth="0.8" />
        <text x="38" y="84" fill="#fbbf24" fontSize="7" textAnchor="middle" fontWeight="bold">Talla Noble</text>

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#fbbf24" fontSize="11" fontWeight="bold">4. GEMA (PIEDRA PRECIOSA)</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Cumple simultáneamente la tríada:</text>
          <text x="8" y="38" fill="#a7f3d0" fontSize="8">1. Belleza (color espectral verde noble)</text>
          <text x="8" y="50" fill="#a7f3d0" fontSize="8">2. Rareza (coexistencia anómala Be-Cr)</text>
          <text x="8" y="62" fill="#a7f3d0" fontSize="8">3. Durabilidad (Dureza Mohs 7.5-8.0)</text>
          <text x="0" y="78" fill="#fde047" fontSize="8" fontWeight="bold">→ Valor gemológico, estético y económico</text>
        </g>
      </g>
    </svg>
  );
};

// LECCIÓN 1.2: Dureza, Tenacidad y Clivaje
export const DiagramM1L2: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#04121a" rx="12" />
      
      {/* Title */}
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">ESCALA DE MOHS Y PROPIEDADES MECÁNICAS TENSORIALES: LECCIÓN 1.2</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Diferenciación entre Dureza (rayado superficial), Tenacidad (impacto) y Clivaje (planos débiles)</text>
      </g>

      {/* Mohs Scale Horizontal Gradient Bar */}
      <g transform="translate(20, 52)">
        <rect width="480" height="42" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="6" />
        
        {/* Scale subdivisions 1 to 10 */}
        {[
          { n: '1', m: 'Talco' },
          { n: '2', m: 'Yeso' },
          { n: '3', m: 'Calcita' },
          { n: '4', m: 'Fluorita' },
          { n: '5', m: 'Apatito' },
          { n: '6', m: 'Ortoclasa' },
          { n: '7', m: 'Cuarzo' },
          { n: '7.5-8', m: 'ESMERALDA', hl: true },
          { n: '8', m: 'Topacio' },
          { n: '9', m: 'Corindón' },
          { n: '10', m: 'Diamante' }
        ].map((item, idx) => {
          const x = 12 + idx * 42;
          return (
            <g key={idx} transform={`translate(${x}, 0)`}>
              {item.hl ? (
                <rect x="-4" y="2" width="46" height="38" fill="#064e3b" stroke="#fbbf24" strokeWidth="1.8" rx="4" />
              ) : null}
              <text x="18" y="16" fill={item.hl ? '#fbbf24' : '#e2e8f0'} fontSize="9" fontWeight={item.hl ? 'bold' : 'normal'} textAnchor="middle">{item.n}</text>
              <text x="18" y="32" fill={item.hl ? '#34d399' : '#94a3b8'} fontSize="7" fontWeight={item.hl ? 'bold' : 'normal'} textAnchor="middle">{item.m}</text>
            </g>
          );
        })}
      </g>

      {/* 3 Mechanical Comparison Panels */}
      {/* Panel 1: Dureza */}
      <g transform="translate(20, 108)">
        <rect width="150" height="152" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.2" rx="6" />
        <text x="12" y="18" fill="#38bdf8" fontSize="10" fontWeight="bold">DUREZA (MOHS 7.5 - 8)</text>
        <text x="12" y="32" fill="#cbd5e1" fontSize="8">• Resistencia al RAYADO</text>
        
        {/* Scratch illustration */}
        <g transform="translate(20, 42)">
          <rect width="110" height="30" fill="#0f172a" stroke="#334155" rx="3" />
          <path d="M 15 15 L 95 15" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
          <polygon points="98,15 90,11 90,19" fill="#ef4444" />
          <text x="55" y="25" fill="#f87171" fontSize="7" textAnchor="middle">Raya superficial</text>
        </g>

        <text x="12" y="92" fill="#94a3b8" fontSize="8">• Raya al cuarzo (Mohs 7)</text>
        <text x="12" y="106" fill="#94a3b8" fontSize="8">• Conserva pulido de facetas</text>
        <text x="12" y="120" fill="#94a3b8" fontSize="8">• No se desgasta por polvo ambiental</text>
        <text x="12" y="140" fill="#34d399" fontSize="8" fontWeight="bold">✓ Alta durabilidad abrasiva</text>
      </g>

      {/* Panel 2: Tenacidad */}
      <g transform="translate(185, 108)">
        <rect width="150" height="152" fill="#2e1022" stroke="#f43f5e" strokeWidth="1.2" rx="6" />
        <text x="12" y="18" fill="#fb7185" fontSize="10" fontWeight="bold">TENACIDAD (FRÁGIL)</text>
        <text x="12" y="32" fill="#cbd5e1" fontSize="8">• Resistencia al IMPACTO</text>

        {/* Hammer Impact illustration */}
        <g transform="translate(20, 42)">
          <rect width="110" height="30" fill="#020617" stroke="#475569" rx="3" />
          {/* Shockwave / fracture lines */}
          <line x1="55" y1="5" x2="35" y2="25" stroke="#f43f5e" strokeWidth="1.8" />
          <line x1="55" y1="5" x2="75" y2="25" stroke="#f43f5e" strokeWidth="1.8" />
          <line x1="55" y1="5" x2="55" y2="25" stroke="#fbbf24" strokeWidth="2" />
          <text x="55" y="28" fill="#fda4af" fontSize="7" textAnchor="middle">Choque mecánico</text>
        </g>

        <text x="12" y="92" fill="#fca5a5" fontSize="8">• Tenacidad fractura baja:</text>
        <text x="16" y="104" fill="#fecdd3" fontSize="8" fontFamily="monospace">K_IC ≈ 0.8 - 1.2 MPa·m½</text>
        <text x="12" y="118" fill="#fca5a5" fontSize="8">• Microfisuras sinsedimentarias</text>
        <text x="12" y="140" fill="#f87171" fontSize="8" fontWeight="bold">⚠️ Vulnerable a caídas y golpes</text>
      </g>

      {/* Panel 3: Clivaje y Chaflanes */}
      <g transform="translate(350, 108)">
        <rect width="150" height="152" fill="#022c22" stroke="#10b981" strokeWidth="1.2" rx="6" />
        <text x="12" y="18" fill="#34d399" fontSize="10" fontWeight="bold">CLIVAJE Y CORTE</text>
        <text x="12" y="32" fill="#cbd5e1" fontSize="8">• Partición basal y talla</text>

        {/* Octagonal corner bevels */}
        <g transform="translate(30, 42)">
          <polygon points="15,5 65,5 85,25 85,35 65,35 15,35 5,25 5,5" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
          <circle cx="85" cy="25" r="9" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 1" />
          <text x="45" y="23" fill="#a7f3d0" fontSize="7" textAnchor="middle">Chaflán 45°</text>
        </g>

        <text x="12" y="92" fill="#94a3b8" fontSize="8">• Clivaje basal (0001) imperfecto</text>
        <text x="12" y="106" fill="#94a3b8" fontSize="8">• Fractura concoidea vítrea</text>
        <text x="12" y="120" fill="#94a3b8" fontSize="8">• Chaflán a 45° disipa tensiones</text>
        <text x="12" y="140" fill="#fbbf24" fontSize="8" fontWeight="bold">✓ Solución ingenieril de talla</text>
      </g>
    </svg>
  );
};

// LECCIÓN 1.4: Refracción, Anisotropía y Birrefringencia
export const DiagramM1L4: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#031520" rx="12" />
      
      {/* Title */}
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">PROPAGACIÓN ÓPTICA ANISÓTROPA UNIAXIAL NEGATIVA: LECCIÓN 1.4</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Desdoblamiento del haz incidente en Rayo Ordinario (ω) y Rayo Extraordinario (ε) en berilo</text>
      </g>

      {/* Optical Ray Splitting Diagram */}
      <g transform="translate(30, 54)">
        {/* Incident Ray */}
        <line x1="0" y1="100" x2="100" y2="100" stroke="#f8fafc" strokeWidth="3" />
        <polygon points="102,100 92,95 92,105" fill="#f8fafc" />
        <text x="45" y="85" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="middle">Haz no polarizado</text>

        {/* Beryl Crystal Boundary Box */}
        <rect x="100" y="20" width="180" height="160" fill="#04291e" stroke="#10b981" strokeWidth="2" rx="4" />
        <text x="190" y="38" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">Cristal de Berilo (Esmeralda)</text>

        {/* Optical Axis c Vector */}
        <line x1="190" y1="48" x2="190" y2="170" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="5 3" />
        <polygon points="190,172 186,162 194,162" fill="#fbbf24" />
        <text x="195" y="165" fill="#fbbf24" fontSize="9" fontWeight="bold">Eje óptico [c]</text>

        {/* Ordinary Ray (no = 1.577) - Straight path */}
        <line x1="100" y1="100" x2="280" y2="115" stroke="#34d399" strokeWidth="2.5" />
        <polygon points="282,115 272,111 272,119" fill="#34d399" />
        <text x="210" y="110" fill="#34d399" fontSize="9" fontWeight="bold">Rayo Ordinario (no = 1.577)</text>
        <text x="210" y="122" fill="#6ee7b7" fontSize="8">Vibración ⊥ al eje [c]</text>

        {/* Extraordinary Ray (ne = 1.571) - Refracted angle */}
        <line x1="100" y1="100" x2="280" y2="75" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
        <polygon points="282,75 272,71 272,79" fill="#38bdf8" />
        <text x="210" y="70" fill="#38bdf8" fontSize="9" fontWeight="bold">Rayo Extraordinario (ne = 1.571)</text>
        <text x="210" y="82" fill="#7dd3fc" fontSize="8">Vibración || al plano de [c]</text>
      </g>

      {/* Right Column: Mathematical and Diagnostic Data */}
      <g transform="translate(330, 54)">
        <rect width="170" height="196" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="6" />
        <g transform="translate(14, 16)">
          <text x="0" y="10" fill="#38bdf8" fontSize="11" fontWeight="bold">PARÁMETROS ÓPTICOS</text>
          
          <rect x="0" y="20" width="142" height="40" fill="#021c14" stroke="#059669" strokeWidth="1" rx="4" />
          <text x="8" y="34" fill="#a7f3d0" fontSize="9">Índice ordinario (no):</text>
          <text x="8" y="48" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="bold">1.577 - 1.584</text>

          <rect x="0" y="68" width="142" height="40" fill="#082f49" stroke="#0284c7" strokeWidth="1" rx="4" />
          <text x="8" y="82" fill="#7dd3fc" fontSize="9">Índice extraordinario (ne):</text>
          <text x="8" y="96" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">1.571 - 1.578</text>

          <rect x="0" y="116" width="142" height="52" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" rx="4" />
          <text x="8" y="130" fill="#c7d2fe" fontSize="9">Birrefringencia (Δn):</text>
          <text x="8" y="144" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold">Δn = 0.006</text>
          <text x="8" y="158" fill="#a5b4fc" fontSize="8">Signo: Uniaxial Negativo (U-)</text>
        </g>
      </g>
    </svg>
  );
};

// LECCIÓN 1.5: Pleocroísmo y Dicroísmo con Dicroscopio de Calcita
export const DiagramM1L5: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#021a14" rx="12" />
      
      {/* Title */}
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#34d399" fontSize="12" fontWeight="bold">DICROSCOPIO DE CALCITA Y DESDOBLAMIENTO CROMÁTICO: LECCIÓN 1.5</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Separación simultánea de las dos ondas polarizadas: Verde azuloso (rayo ω) vs Verde amarillento (rayo ε)</text>
      </g>

      {/* Dicroscope Instrument Diagram */}
      <g transform="translate(30, 56)">
        {/* Dicroscope Tube Barrel */}
        <rect x="0" y="30" width="170" height="90" fill="#0f172a" stroke="#475569" strokeWidth="2" rx="4" />
        <text x="85" y="22" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">Tubo del Dicroscopio de Calcita</text>
        
        {/* Calcite Rhombohedron Core */}
        <polygon points="40,45 130,45 115,105 25,105" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="75" y="78" fill="#cbd5e1" fontSize="9" fontWeight="bold" textAnchor="middle">Prisma de Calcita</text>

        {/* Light input aperture */}
        <rect x="0" y="60" width="15" height="30" fill="#020617" stroke="#64748b" />
        <line x1="-20" y1="75" x2="0" y2="75" stroke="#f8fafc" strokeWidth="2.5" />
        <text x="-22" y="78" fill="#f8fafc" fontSize="8" textAnchor="end">Luz</text>

        {/* Dual Eyepiece Output Windows */}
        <g transform="translate(170, 30)">
          {/* Window 1: Ordinary Ray (Verde azuloso noble) */}
          <rect x="15" y="10" width="65" height="65" fill="#047857" stroke="#34d399" strokeWidth="2.5" rx="4" />
          <text x="47" y="40" fill="#ecfdf5" fontSize="10" fontWeight="bold" textAnchor="middle">VERDE</text>
          <text x="47" y="52" fill="#a7f3d0" fontSize="9" fontWeight="bold" textAnchor="middle">AZULADO</text>
          <text x="47" y="86" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Rayo Ordinario (ω)</text>
          <text x="47" y="98" fill="#6ee7b7" fontSize="7" textAnchor="middle">Vibración ⊥ a [c]</text>
          <text x="47" y="110" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">✓ Máximo Valor</text>

          {/* Window 2: Extraordinary Ray (Verde amarillento) */}
          <rect x="90" y="10" width="65" height="65" fill="#4d7c0f" stroke="#84cc16" strokeWidth="2" rx="4" />
          <text x="122" y="40" fill="#f7fee7" fontSize="10" fontWeight="bold" textAnchor="middle">VERDE</text>
          <text x="122" y="52" fill="#d9f99d" fontSize="9" fontWeight="bold" textAnchor="middle">AMARILLENTO</text>
          <text x="122" y="86" fill="#a3e635" fontSize="8" fontWeight="bold" textAnchor="middle">Rayo Extraordinario (ε)</text>
          <text x="122" y="98" fill="#bef264" fontSize="7" textAnchor="middle">Vibración || a [c]</text>
          <text x="122" y="110" fill="#fca5a5" fontSize="7" textAnchor="middle">Tono subordinado</text>
        </g>
      </g>

      {/* Crystallographic Orientation Callout Box */}
      <g transform="translate(30, 200)">
        <rect width="460" height="60" fill="#06241a" stroke="#059669" strokeWidth="1.2" rx="6" />
        <text x="16" y="20" fill="#fbbf24" fontSize="10" fontWeight="bold">REGLA LAPIDARIA FUNDAMENTAL:</text>
        <text x="16" y="36" fill="#e2e8f0" fontSize="9">
          Para que la esmeralda tallada exhiba el cotizado <strong className="text-emerald-300">verde azuloso aterciopelado (Muzo Green)</strong>, la <strong className="text-amber-300">tabla debe cortarse perpendicular al eje óptico [c]</strong>.
        </text>
        <text x="16" y="50" fill="#94a3b8" fontSize="8">
          Si la tabla se orienta paralela al eje [c], el color dominante visible será el rayo verde amarillento, depreciando comercialmente la gema hasta en un 40%.
        </text>
      </g>
    </svg>
  );
};

// LECCIÓN 1.6: Naturales, Sintéticos, Imitaciones y Dobletes
export const DiagramM1L6: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#0f172a" rx="12" />
      
      {/* Title */}
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">CUADRANTE TAXONÓMICO DE MATERIALES: LECCIÓN 1.6</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Diferenciación inequívoca bajo norma CIBJO: Natural vs Sintético vs Imitación vs Compuesto</text>
      </g>

      {/* Quadrant 1: Natural */}
      <g transform="translate(20, 52)">
        <rect width="230" height="98" fill="#022c22" stroke="#10b981" strokeWidth="1.5" rx="6" />
        <rect x="8" y="8" width="60" height="82" fill="#011c14" stroke="#059669" strokeWidth="1" rx="4" />
        {/* Three phase inclusion vector */}
        <polygon points="25,40 40,30 50,45 42,60 22,55" fill="#065f46" stroke="#34d399" strokeWidth="1" />
        <circle cx="33" cy="45" r="4" fill="#020617" stroke="#6ee7b7" strokeWidth="1" />
        <rect x="40" y="44" width="6" height="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.8" />
        <text x="38" y="82" fill="#a7f3d0" fontSize="7" textAnchor="middle">Trifásica</text>

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#34d399" fontSize="11" fontWeight="bold">A. ESMERALDA NATURAL</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Origen geológico hidrotermal</text>
          <text x="0" y="39" fill="#a7f3d0" fontSize="8">• Cavidades trifásicas dentadas (Muzo)</text>
          <text x="0" y="52" fill="#cbd5e1" fontSize="8">• Cubos de halita y burbujas CO₂</text>
          <text x="0" y="64" fill="#cbd5e1" fontSize="8">• Crecimiento natural sedimentario</text>
          <text x="0" y="78" fill="#34d399" fontSize="8" fontWeight="bold">✓ Auténtica 100% Gema Natural</text>
        </g>
      </g>

      {/* Quadrant 2: Sintética */}
      <g transform="translate(270, 52)">
        <rect width="230" height="98" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.2" rx="6" />
        <rect x="8" y="8" width="60" height="82" fill="#0b0f2a" stroke="#6366f1" strokeWidth="1" rx="4" />
        {/* Chevron zigzag growth lines */}
        <polyline points="15,30 38,18 61,30" fill="none" stroke="#818cf8" strokeWidth="1.5" />
        <polyline points="15,45 38,33 61,45" fill="none" stroke="#818cf8" strokeWidth="1.5" />
        <polyline points="15,60 38,48 61,60" fill="none" stroke="#818cf8" strokeWidth="1.5" />
        <text x="38" y="82" fill="#c7d2fe" fontSize="7" textAnchor="middle">Chevron</text>

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#a5b4fc" fontSize="11" fontWeight="bold">B. SINTÉTICA (LABORATORIO)</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Misma química Be₃Al₂(SiO₃)₆</text>
          <text x="0" y="39" fill="#c7d2fe" fontSize="8">• Misma dureza (7.5) y red hexagonal</text>
          <text x="0" y="52" fill="#cbd5e1" fontSize="8">• Diagnóstico: Crecimiento en chevron</text>
          <text x="0" y="64" fill="#cbd5e1" fontSize="8">• Ausencia de halita trifásica</text>
          <text x="0" y="78" fill="#818cf8" fontSize="8">→ Hidrotermal rusa (Tairus / Biron)</text>
        </g>
      </g>

      {/* Quadrant 3: Vidrio de Imitación */}
      <g transform="translate(20, 160)">
        <rect width="230" height="104" fill="#1c1917" stroke="#78716c" strokeWidth="1.2" rx="6" />
        <rect x="8" y="8" width="60" height="88" fill="#0c0a09" stroke="#44403c" strokeWidth="1" rx="4" />
        {/* Gas bubbles & swirl marks */}
        <circle cx="28" cy="30" r="6" fill="#292524" stroke="#a8a29e" strokeWidth="1" />
        <circle cx="48" cy="50" r="4" fill="#292524" stroke="#a8a29e" strokeWidth="1" />
        <path d="M 15 65 Q 38 50 60 70" stroke="#78716c" strokeWidth="1" strokeDasharray="3 2" />
        <text x="38" y="84" fill="#d6d3d1" fontSize="7" textAnchor="middle">Burbujas</text>

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#d6d3d1" fontSize="11" fontWeight="bold">C. VIDRIO / SIMULADOR</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Pasta amorfa sin red cristalina</text>
          <text x="0" y="39" fill="#a8a29e" fontSize="8">• Isótropo monorrefringente (n≈1.52)</text>
          <text x="0" y="52" fill="#a8a29e" fontSize="8">• Burbujas de gas esféricas</text>
          <text x="0" y="64" fill="#a8a29e" fontSize="8">• Aristas de facetas redondeadas</text>
          <text x="0" y="78" fill="#f87171" fontSize="8">→ Dureza baja (Mohs 5 - 5.5)</text>
        </g>
      </g>

      {/* Quadrant 4: Doblete / Triplete */}
      <g transform="translate(270, 160)">
        <rect width="230" height="104" fill="#2e1022" stroke="#f43f5e" strokeWidth="1.2" rx="6" />
        <rect x="8" y="8" width="60" height="88" fill="#170611" stroke="#fb7185" strokeWidth="1" rx="4" />
        {/* Composite layers with glue plane */}
        <polygon points="12,25 64,25 58,45 18,45" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
        <rect x="18" y="45" width="40" height="5" fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
        <polygon points="18,50 58,50 38,78" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
        <text x="38" y="86" fill="#f43f5e" fontSize="7" textAnchor="middle" fontWeight="bold">Pegamento</text>

        <g transform="translate(76, 12)">
          <text x="0" y="12" fill="#fb7185" fontSize="11" fontWeight="bold">D. DOBLETO / TRIPLETE</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Gema compuesta ensamblada</text>
          <text x="0" y="39" fill="#fca5a5" fontSize="8">• Corona incolora + pegamento verde</text>
          <text x="0" y="52" fill="#fca5a5" fontSize="8">• Culatín sintético o de espinela</text>
          <text x="0" y="64" fill="#cbd5e1" fontSize="8">• Diagnóstico: Inmersión microscópica</text>
          <text x="0" y="78" fill="#f43f5e" fontSize="8" fontWeight="bold">⚠️ Fraude comercial si no se divulga</text>
        </g>
      </g>
    </svg>
  );
};
