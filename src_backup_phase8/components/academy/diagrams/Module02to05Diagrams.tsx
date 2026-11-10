import React from 'react';

interface DiagramProps {
  className?: string;
}

// ==========================================
// MOD-02: GEOLOGÍA DE LAS ESMERALDAS
// ==========================================

// Lección 2.2: Termobarometría y Salinidad de Fluidos
export const DiagramM2L2: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#021c1a" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#34d399" fontSize="12" fontWeight="bold">TERMOBAROMETRÍA Y SALINIDAD: LECCIÓN 2.2</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Condiciones P-T de atrapamiento hidrotermal: 290°C a 360°C y 1.0 a 1.5 kbar (SGC / Giuliani et al.)</text>
      </g>

      {/* P-T Diagram Axes */}
      <g transform="translate(45, 56)">
        <line x1="0" y1="170" x2="270" y2="170" stroke="#64748b" strokeWidth="1.5" />
        <line x1="0" y1="20" x2="0" y2="170" stroke="#64748b" strokeWidth="1.5" />
        <text x="270" y="184" fill="#94a3b8" fontSize="8" textAnchor="end">Temperatura (°C)</text>
        <text x="-10" y="24" fill="#94a3b8" fontSize="8" textAnchor="end">P (kbar)</text>

        {/* Axis markers */}
        <text x="0" y="182" fill="#64748b" fontSize="8">100</text>
        <text x="70" y="182" fill="#64748b" fontSize="8">200</text>
        <text x="140" y="182" fill="#34d399" fontSize="8" fontWeight="bold">300</text>
        <text x="210" y="182" fill="#fbbf24" fontSize="8" fontWeight="bold">400</text>

        <text x="-6" y="140" fill="#64748b" fontSize="8" textAnchor="end">0.5</text>
        <text x="-6" y="95" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="end">1.0</text>
        <text x="-6" y="55" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="end">1.5</text>

        {/* P-T Trapping Window for Colombian Emeralds */}
        <rect x="135" y="55" width="55" height="40" fill="#047857" fillOpacity="0.4" stroke="#10b981" strokeWidth="2" rx="4" />
        <text x="162" y="74" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">CAMPO P-T</text>
        <text x="162" y="86" fill="#a7f3d0" fontSize="8" textAnchor="middle">COLOMBIA</text>

        {/* Hydrothermal Boiling Curve */}
        <path d="M 0 170 Q 100 160 260 110" stroke="#f43f5e" strokeWidth="1.8" strokeDasharray="4 2" fill="none" />
        <text x="240" y="102" fill="#fca5a5" fontSize="7">Curva de ebullición salmuera</text>
      </g>

      {/* Salinity & Geochemical callout column */}
      <g transform="translate(340, 56)">
        <rect width="160" height="194" fill="#06241c" stroke="#059669" strokeWidth="1.2" rx="6" />
        <g transform="translate(12, 14)">
          <text x="0" y="10" fill="#34d399" fontSize="10" fontWeight="bold">SALINIDAD DE FLUIDOS</text>
          
          <rect x="0" y="20" width="136" height="44" fill="#011b14" stroke="#10b981" strokeWidth="0.8" rx="4" />
          <text x="6" y="34" fill="#a7f3d0" fontSize="8">Salmueras hipersalinas:</text>
          <text x="6" y="48" fill="#fbbf24" fontSize="11" fontFamily="monospace" fontWeight="bold">30 - 40 wt% NaCl eq.</text>

          <rect x="0" y="72" width="136" height="44" fill="#011b14" stroke="#10b981" strokeWidth="0.8" rx="4" />
          <text x="6" y="86" fill="#7dd3fc" fontSize="8">Fase volátil atrapada:</text>
          <text x="6" y="100" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">CO₂ denso (líquido/gas)</text>

          <text x="0" y="132" fill="#cbd5e1" fontSize="8" fontWeight="bold">Profundidad estimada:</text>
          <text x="0" y="145" fill="#e2e8f0" fontSize="8">• 3.5 a 5.0 km de corteza</text>
          <text x="0" y="157" fill="#e2e8f0" fontSize="8">• Cuenca rift invertida</text>
          <text x="0" y="169" fill="#34d399" fontSize="8" fontWeight="bold">✓ Régimen mesotermal</text>
        </g>
      </g>
    </svg>
  );
};

// Lección 2.3: Cinturón Occidental (Muzo, Coscuez, Peñas Blancas)
export const DiagramM2L3: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#0f172a" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">CINTURÓN ESMERALDÍFERO OCCIDENTAL (MUZO - COSCUEZ): LECCIÓN 2.3</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Estratigrafía cretácica (Fm. Rosablanca / Paja) y sistemas de cabalgamiento de la Falla de Itoco</text>
      </g>

      <g transform="translate(30, 56)">
        {/* Stratigraphic Columns and Fault */}
        <rect x="0" y="0" width="300" height="180" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        {/* Layer 1: Fm Rosablanca calizas */}
        <rect x="0" y="120" width="300" height="60" fill="#334155" opacity="0.8" />
        <text x="12" y="145" fill="#94a3b8" fontSize="9" fontWeight="bold">Fm. Rosablanca: Calizas y dolomitas brechadas</text>

        {/* Layer 2: Fm Paja black shales */}
        <rect x="0" y="0" width="300" height="120" fill="#0f172a" opacity="0.9" />
        <line x1="0" y1="40" x2="300" y2="40" stroke="#475569" strokeDasharray="4 2" />
        <line x1="0" y1="80" x2="300" y2="80" stroke="#475569" strokeDasharray="4 2" />
        <text x="12" y="25" fill="#cbd5e1" fontSize="9" fontWeight="bold">Fm. Paja: Lutitas negras ricas en C-orgánico y vanadio</text>

        {/* Thrust Fault Itoco (Incline 45°) */}
        <line x1="40" y1="180" x2="260" y2="10" stroke="#ef4444" strokeWidth="3.5" />
        <polygon points="263,7 253,16 261,22" fill="#ef4444" />
        <text x="180" y="35" fill="#f87171" fontSize="9" fontWeight="bold">Falla de Itoco / Cabalgamiento</text>

        {/* Emerald Hydrothermal Vein */}
        <path d="M 110 180 Q 140 120 170 80 Q 200 40 220 10" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round" opacity="0.85" />
        <path d="M 110 180 Q 140 120 170 80 Q 200 40 220 10" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        <text x="120" y="105" fill="#064e3b" fontSize="8" fontWeight="bold">VETA HIDROTERMAL CON ESMERALDAS</text>
      </g>

      <g transform="translate(350, 56)">
        <rect width="150" height="180" fill="#021c14" stroke="#059669" strokeWidth="1.2" rx="6" />
        <g transform="translate(10, 14)">
          <text x="0" y="10" fill="#34d399" fontSize="10" fontWeight="bold">YACIMIENTOS CLAVE</text>
          <text x="0" y="28" fill="#e2e8f0" fontSize="8">• Mina Puerto Arturo (Muzo)</text>
          <text x="0" y="42" fill="#e2e8f0" fontSize="8">• Coscuez (Túneles La Paz)</text>
          <text x="0" y="56" fill="#e2e8f0" fontSize="8">• La Pita / Las Pavas</text>
          <text x="0" y="70" fill="#e2e8f0" fontSize="8">• Peñas Blancas</text>
          
          <text x="0" y="96" fill="#fbbf24" fontSize="9" fontWeight="bold">CROMÓFORO DOMINANTE:</text>
          <text x="0" y="110" fill="#a7f3d0" fontSize="8">Cr³⁺ predominante (V³⁺ traza)</text>
          <text x="0" y="124" fill="#a7f3d0" fontSize="8">Tono Verde Intenso Cálido</text>

          <text x="0" y="148" fill="#38bdf8" fontSize="8" fontWeight="bold">Edad de mineralización:</text>
          <text x="0" y="160" fill="#cbd5e1" fontSize="8">65 - 62 Ma (Paleoceno)</text>
        </g>
      </g>
    </svg>
  );
};

// Lección 2.4: Cinturón Oriental (Chivor, Gachalá, Ubalá)
export const DiagramM2L4: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#021a1d" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">CINTURÓN ESMERALDÍFERO ORIENTAL (CHIVOR - GACHALÁ): LECCIÓN 2.4</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Formaciones Macanal y Las Juntas, albitización sódica pervasiva y pirita masiva</text>
      </g>

      <g transform="translate(30, 56)">
        {/* Host Rock: Fm Macanal */}
        <rect x="0" y="0" width="300" height="180" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <line x1="0" y1="50" x2="300" y2="50" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 2" />
        <line x1="0" y1="110" x2="300" y2="110" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 2" />
        <text x="14" y="30" fill="#94a3b8" fontSize="9" fontWeight="bold">Fm. Macanal: Lutitas calcáreas y limolitas silíceas</text>

        {/* Sodium Albitization Zone (Halo blanquecino de albita) */}
        <polygon points="60,180 120,40 220,40 280,180" fill="#f8fafc" fillOpacity="0.25" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="170" y="85" fill="#f8fafc" fontSize="9" fontWeight="bold" textAnchor="middle">HALO DE ALBITIZACIÓN SÓDICA</text>
        <text x="170" y="98" fill="#a7f3d0" fontSize="8" textAnchor="middle">(Lixiviación masiva de K / Enriquecimiento de Na)</text>

        {/* Pyrite cubes and quartz veins */}
        <rect x="135" y="120" width="16" height="16" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        <text x="143" y="132" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">FeS₂</text>
        <rect x="195" y="135" width="14" height="14" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        
        {/* Chivor Emerald Crystals */}
        <polygon points="175,120 182,125 182,150 175,155 168,150 168,125" fill="#059669" stroke="#34d399" strokeWidth="1.5" />
        <text x="175" y="165" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Esmeralda Chivor</text>
      </g>

      <g transform="translate(350, 56)">
        <rect width="150" height="180" fill="#042f2e" stroke="#14b8a6" strokeWidth="1.2" rx="6" />
        <g transform="translate(10, 14)">
          <text x="0" y="10" fill="#2dd4bf" fontSize="10" fontWeight="bold">CARACTERÍSTICAS CHIVOR</text>
          <text x="0" y="28" fill="#e2e8f0" fontSize="8">• Transparencia excepcional</text>
          <text x="0" y="42" fill="#e2e8f0" fontSize="8">• Matiz verde azulado vivaz</text>
          <text x="0" y="56" fill="#e2e8f0" fontSize="8">• Inclusiones de pirita dorada</text>
          <text x="0" y="70" fill="#e2e8f0" fontSize="8">• Tubos paralelos trifásicos</text>

          <text x="0" y="96" fill="#fbbf24" fontSize="9" fontWeight="bold">EDAD TECTÓNICA:</text>
          <text x="0" y="110" fill="#cbd5e1" fontSize="8">32 - 38 Ma (Eoceno/Oligoceno)</text>
          <text x="0" y="122" fill="#cbd5e1" fontSize="8">Más joven que Muzo</text>

          <text x="0" y="148" fill="#38bdf8" fontSize="8" fontWeight="bold">Yacimientos:</text>
          <text x="0" y="160" fill="#cbd5e1" fontSize="8">Chivor, Gachalá, Ubalá</text>
        </g>
      </g>
    </svg>
  );
};

// ==========================================
// MOD-03: CRISTALOGRAFÍA Y MINERALOGÍA
// ==========================================

// Lección 3.2: Canales Atómicos y Moléculas de Agua
export const DiagramM3L2: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#08101e" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">ESTRUCTURA DE ANILLOS Si₆O₁₈ Y CANALES HEXAGONALES: LECCIÓN 3.2</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Diámetro del canal ~5.1 Å con moléculas de agua orientadas Tipo I (sin álcalis) y Tipo II (asociadas a Na+/Cs+)</text>
      </g>

      {/* Hexagonal Ring Lattice View */}
      <g transform="translate(130, 60)">
        {/* Outer 6 Si-O tetrahedra ring */}
        <polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="none" stroke="#38bdf8" strokeWidth="3" />
        
        {/* Silicon and Oxygen atoms */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 70 * Math.sin(rad);
          const y = -70 * Math.cos(rad);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="8" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
              <text x={x} y={y + 3} fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Si</text>
            </g>
          );
        })}

        {/* Central Hollow Channel (5.1 Angstroms) */}
        <circle cx="0" cy="0" r="32" fill="#022c22" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
        <text x="0" y="-36" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Canal c (Ø 5.1 Å)</text>

        {/* H2O Molecule in Center */}
        <circle cx="0" cy="0" r="10" fill="#ef4444" stroke="#f87171" strokeWidth="1.5" />
        <text x="0" y="3" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">O</text>
        <circle cx="-11" cy="-7" r="5" fill="#f8fafc" />
        <circle cx="11" cy="-7" r="5" fill="#f8fafc" />
        <text x="0" y="22" fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle">H₂O Tipo I</text>
      </g>

      {/* Side Callout */}
      <g transform="translate(320, 60)">
        <rect width="180" height="190" fill="#0f172a" stroke="#334155" strokeWidth="1.5" rx="6" />
        <g transform="translate(12, 14)">
          <text x="0" y="10" fill="#38bdf8" fontSize="10" fontWeight="bold">AGUA EN EL BERILO</text>
          
          <rect x="0" y="20" width="156" height="60" fill="#022c22" stroke="#059669" strokeWidth="1" rx="4" />
          <text x="8" y="14" fill="#34d399" fontSize="9" fontWeight="bold">Agua Tipo I (Dominante Colombia):</text>
          <text x="8" y="28" fill="#e2e8f0" fontSize="8">• Vector H-H paralelo al eje c</text>
          <text x="8" y="40" fill="#a7f3d0" fontSize="8">• Canales libres de álcalis pesados</text>
          <text x="8" y="52" fill="#a7f3d0" fontSize="8">• Explica baja densidad (2.69 g/cm³)</text>

          <rect x="0" y="90" width="156" height="60" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" rx="4" />
          <text x="8" y="14" fill="#a5b4fc" fontSize="9" fontWeight="bold">Agua Tipo II (África / Brasil):</text>
          <text x="8" y="28" fill="#cbd5e1" fontSize="8">• Vector H-H perpendicular a c</text>
          <text x="8" y="40" fill="#cbd5e1" fontSize="8">• Bloqueada por iones Na⁺ y Cs⁺</text>
          <text x="8" y="52" fill="#fca5a5" fontSize="8">• Densidad alta (&gt; 2.74 g/cm³)</text>

          <text x="0" y="170" fill="#fbbf24" fontSize="8">→ Diagnóstico clave por espectroscopía FTIR</text>
        </g>
      </g>
    </svg>
  );
};

// ==========================================
// MOD-04: IDENTIFICACIÓN GEMOLÓGICA
// ==========================================

// Lección 4.4: Espectroscopía Óptica de Absorción
export const DiagramM4L4: React.FC<DiagramProps> = ({ className = 'w-full h-72' }) => {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="520" height="280" fill="#090d16" rx="12" />
      <g transform="translate(20, 16)">
        <text x="0" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">ESPECTRO DE ABSORCIÓN ÓPTICA DEL CROMO (Cr³⁺): LECCIÓN 4.4</text>
        <text x="0" y="28" fill="#94a3b8" fontSize="9">Líneas de absorción diagnósticas en nanómetros (nm) observadas con espectroscopio de difracción</text>
      </g>

      {/* Optical Spectrum Band 400 to 700 nm */}
      <g transform="translate(30, 60)">
        <defs>
          <linearGradient id="spectrumGradient" x1="0" y1="0" x2="460" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="20%" stopColor="#2563eb" />
            <stop offset="40%" stopColor="#059669" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="80%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        {/* Visible spectrum rectangle */}
        <rect width="460" height="60" fill="url(#spectrumGradient)" stroke="#475569" strokeWidth="2" rx="4" />

        {/* Absorption Lines for Emerald (Dark Vertical Bands) */}
        {/* Violet complete cutoff (400-430 nm) */}
        <rect x="0" y="0" width="45" height="60" fill="#000000" opacity="0.9" />
        
        {/* Yellow-Green broad absorption band (580-610 nm) */}
        <rect x="250" y="0" width="40" height="60" fill="#000000" opacity="0.85" />
        
        {/* Sharp Chromium Doublet in Deep Red (683 and 680 nm) */}
        <line x1="425" y1="0" x2="425" y2="60" stroke="#000000" strokeWidth="4" />
        <line x1="432" y1="0" x2="432" y2="60" stroke="#000000" strokeWidth="4" />
        <line x1="400" y1="0" x2="400" y2="60" stroke="#000000" strokeWidth="2" opacity="0.6" />

        {/* Wavelength scale numbers */}
        <text x="0" y="78" fill="#c084fc" fontSize="9">400 nm</text>
        <text x="100" y="78" fill="#60a5fa" fontSize="9">470 nm</text>
        <text x="200" y="78" fill="#34d399" fontSize="9">550 nm</text>
        <text x="270" y="78" fill="#fde047" fontSize="9">600 nm</text>
        <text x="420" y="78" fill="#f87171" fontSize="9" fontWeight="bold">683/680</text>
        <text x="460" y="78" fill="#ef4444" fontSize="9">700 nm</text>

        {/* Diagnostic Callouts */}
        <circle cx="428" cy="30" r="14" fill="none" stroke="#fbbf24" strokeWidth="2" />
        <text x="428" y="-10" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">Doblete Cr³⁺ (683 / 680 nm)</text>
        <line x1="428" y1="-2" x2="428" y2="16" stroke="#fbbf24" strokeWidth="1.5" />
      </g>

      {/* Explanatory footer */}
      <g transform="translate(30, 160)">
        <rect width="460" height="96" fill="#0f172a" stroke="#334155" strokeWidth="1.2" rx="6" />
        <g transform="translate(14, 14)">
          <text x="0" y="10" fill="#34d399" fontSize="10" fontWeight="bold">FIRMA ESPECTRAL DE LA ESMERALDA NATURAL COLOMBIANA:</text>
          <text x="0" y="26" fill="#e2e8f0" fontSize="9">• Doblete agudo y oscuro de fluorescencia en el rojo profundo a 683 nm y 680 nm.</text>
          <text x="0" y="40" fill="#e2e8f0" fontSize="9">• Banda ancha de absorción en el amarillo-verde (580 a 610 nm).</text>
          <text x="0" y="54" fill="#e2e8f0" fontSize="9">• Absorción completa del extremo violeta (&lt; 430 nm).</text>
          <text x="0" y="68" fill="#a7f3d0" fontSize="8">→ La ausencia de bandas de hierro (440 nm) es diagnóstica del origen hidrotermal colombiano.</text>
        </g>
      </g>
    </svg>
  );
};
