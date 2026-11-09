import React from 'react';
import { 
  DiagramM1L1, 
  DiagramM1L2, 
  DiagramM1L4, 
  DiagramM1L5, 
  DiagramM1L6 
} from './diagrams/Module01Diagrams';
import { 
  DiagramM2L2, 
  DiagramM2L3, 
  DiagramM2L4, 
  DiagramM3L2, 
  DiagramM4L4 
} from './diagrams/Module02to05Diagrams';
import { 
  DiagramM6L2, 
  DiagramM7L1, 
  DiagramM10L4, 
  DiagramM11L2, 
  DiagramM12L3,
  DiagramM5L3,
  DiagramM8L4,
  DiagramM9L3,
  DiagramM11L4,
  DiagramM12L5
} from './diagrams/Module06to12Diagrams';

interface GemDiagramProps {
  type: string;
  className?: string;
}

export const GemologicalTechnicalSVG: React.FC<GemDiagramProps> = ({ type, className = 'w-full h-64' }) => {
  switch (type) {
    // MOD-01 Cases
    case 'm1-l1':
    case 'm1_l1_mineral_rock_gem':
      return <DiagramM1L1 className={className} />;

    case 'm1-l2':
    case 'm1_l2_mohs_hardness_cleavage':
      return <DiagramM1L2 className={className} />;

    case 'm1-l3':
    case 'hydrostatic_balance':
      return (
        <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="440" height="260" fill="#04121a" rx="12" />
          
          {/* Analytical Balance Base and Housing */}
          <g transform="translate(25, 20)">
            {/* Balance Body */}
            <rect x="0" y="150" width="180" height="65" fill="#0f172a" stroke="#334155" strokeWidth="2" rx="6" />
            <rect x="15" y="165" width="80" height="32" fill="#020617" stroke="#0ea5e9" strokeWidth="1.5" rx="3" />
            
            {/* Digital Display showing Reading */}
            <text x="55" y="186" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              0.6594 g
            </text>
            <text x="105" y="176" fill="#64748b" fontSize="8" fontWeight="bold">W(agua)</text>
            <text x="105" y="190" fill="#a7f3d0" fontSize="8">Tara: 0.0000</text>

            {/* Weighing Pan Stem & Base Platform */}
            <line x1="90" y1="150" x2="90" y2="135" stroke="#94a3b8" strokeWidth="4" />
            <ellipse cx="90" cy="135" rx="35" ry="6" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Straddle Bridge (Puente independiente que no toca el plato) */}
            <path d="M 30 148 L 30 85 L 150 85 L 150 148" stroke="#f59e0b" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
            <text x="90" y="80" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Puente aislado (no pesa)</text>

            {/* Glass Beaker with Distilled Water */}
            <rect x="45" y="45" width="90" height="75" fill="#0369a1" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1.5" rx="4" />
            {/* Water Fill with Meniscus */}
            <rect x="47" y="60" width="86" height="58" fill="#0284c7" fillOpacity="0.3" />
            <path d="M 47 60 Q 90 64 133 60" stroke="#7dd3fc" strokeWidth="1.5" fill="none" />
            <text x="130" y="72" fill="#7dd3fc" fontSize="8" textAnchor="end">H₂O destilada (20°C)</text>

            {/* Dual Suspension Kit (Kit Hidrostático) */}
            {/* Upper Pan for Weight in Air */}
            <line x1="90" y1="135" x2="90" y2="20" stroke="#e2e8f0" strokeWidth="1.5" />
            <ellipse cx="90" cy="20" rx="22" ry="5" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
            <text x="90" y="14" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Cazoleta Aire (W_aire)</text>

            {/* Fine Wire plunging into beaker */}
            <line x1="90" y1="20" x2="90" y2="90" stroke="#cbd5e1" strokeWidth="1" />
            
            {/* Submerged Basket (Cazoleta de inmersión) holding Emerald */}
            <path d="M 80 90 L 90 98 L 100 90" stroke="#a7f3d0" strokeWidth="1.5" fill="none" />
            {/* Submerged Emerald Gem */}
            <polygon points="90,85 96,91 93,96 87,96 84,91" fill="#10b981" stroke="#34d399" strokeWidth="1.2" />
            <ellipse cx="90" cy="90" rx="3" ry="1.5" fill="#ecfdf5" opacity="0.6" />
            
            {/* Force vectors */}
            <line x1="106" y1="92" x2="106" y2="78" stroke="#38bdf8" strokeWidth="1.8" />
            <polygon points="106,75 103,81 109,81" fill="#38bdf8" />
            <text x="112" y="84" fill="#38bdf8" fontSize="8" fontWeight="bold">Empuje (E)</text>
          </g>

          {/* Educational Callouts & Calculation Column */}
          <g transform="translate(230, 20)">
            <text x="0" y="16" fill="#38bdf8" fontSize="13" fontWeight="bold">MÉTODO HIDROSTÁTICO (ARQUÍMEDES)</text>
            <text x="0" y="32" fill="#94a3b8" fontSize="10">Determinación rigurosa de Gravedad Específica (SG)</text>

            {/* Step 1 Box */}
            <g transform="translate(0, 44)">
              <rect x="0" y="0" width="195" height="34" fill="#022c22" stroke="#059669" strokeWidth="1.2" rx="4" />
              <text x="8" y="14" fill="#34d399" fontSize="9" fontWeight="bold">1. Peso de la muestra en seco (aire):</text>
              <text x="8" y="27" fill="#ecfdf5" fontSize="10" fontFamily="monospace">W_aire = 1.0484 g (5.242 ct)</text>
            </g>

            {/* Step 2 Box */}
            <g transform="translate(0, 84)">
              <rect x="0" y="0" width="195" height="34" fill="#082f49" stroke="#0284c7" strokeWidth="1.2" rx="4" />
              <text x="8" y="14" fill="#38bdf8" fontSize="9" fontWeight="bold">2. Peso aparente sumergida en agua:</text>
              <text x="8" y="27" fill="#f0f9ff" fontSize="10" fontFamily="monospace">W_agua = 0.6594 g</text>
            </g>

            {/* Formula & Calculation Box */}
            <g transform="translate(0, 124)">
              <rect x="0" y="0" width="195" height="60" fill="#0f172a" stroke="#eab308" strokeWidth="1.5" rx="4" />
              <text x="8" y="14" fill="#fde047" fontSize="9" fontWeight="bold">3. Ecuación de Densidad Relativa:</text>
              <text x="8" y="29" fill="#ffffff" fontSize="10" fontFamily="monospace">SG = W_aire / (W_aire - W_agua)</text>
              <text x="8" y="43" fill="#a7f3d0" fontSize="10" fontFamily="monospace">SG = 1.0484 / 0.3890 = 2.695 g/cm³</text>
              <text x="8" y="55" fill="#34d399" fontSize="8" fontWeight="bold">✓ Rango Colombia: 2.68 - 2.72 g/cm³</text>
            </g>

            {/* Diagnostic Note */}
            <text x="0" y="200" fill="#fca5a5" fontSize="8">
              • Cuarzo verde: 2.65 g/cm³ (Flotaría relativo al berilo)
            </text>
            <text x="0" y="212" fill="#93c5fd" fontSize="8">
              • Esmeralda Zambia: 2.74 - 2.78 g/cm³ (Más densa por Fe/Cs)
            </text>
            <text x="0" y="224" fill="#fde047" fontSize="8">
              • Vidrios / Plásticos: &lt; 2.50 o &gt; 3.00 g/cm³
            </text>
          </g>
        </svg>
      );

    case 'm1-l4':
    case 'm1_l4_refraction_anisotropy':
      return <DiagramM1L4 className={className} />;

    case 'm1-l5':
    case 'm1_l5_dicroscope_pleochroism':
      return <DiagramM1L5 className={className} />;

    case 'm1-l6':
    case 'm1_l6_natural_synthetic_imitation':
      return <DiagramM1L6 className={className} />;

    // MOD-02 Cases
    case 'm2-l2':
    case 'm2_l2_thermobarometry':
      return <DiagramM2L2 className={className} />;

    case 'm2-l3':
    case 'm2_l3_occidental_belt':
      return <DiagramM2L3 className={className} />;

    case 'm2-l4':
    case 'm2_l4_oriental_belt':
      return <DiagramM2L4 className={className} />;

    case 'm2-l5':
    case 'm2-l6':
      return <DiagramM2L2 className={className} />;

    // MOD-03 Cases
    case 'm3-l1':
    case 'hexagonal_beryl':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#021c14" rx="12" />
          {/* Hexagonal Prism 3D Wireframe */}
          <g transform="translate(140, 30)">
            {/* Top Pinacoid (0001) */}
            <polygon points="60,10 110,35 110,85 60,110 10,85 10,35" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
            <text x="60" y="65" fill="#a7f3d0" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Pinacoide (0001)</text>
            
            {/* Prism Faces (10-10) */}
            <polygon points="10,85 10,165 60,190 60,110" fill="#047857" stroke="#10b981" strokeWidth="2" opacity="0.9" />
            <polygon points="60,110 60,190 110,165 110,85" fill="#065f46" stroke="#10b981" strokeWidth="2" opacity="0.95" />
            
            {/* c-Axis Vector */}
            <line x1="60" y1="60" x2="60" y2="210" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5 3" />
            <polygon points="60,215 56,203 64,203" fill="#fbbf24" />
            <text x="75" y="212" fill="#fbbf24" fontSize="11" fontWeight="bold">Eje óptico [c]</text>
            
            {/* a-Axes */}
            <line x1="60" y1="60" x2="135" y2="60" stroke="#38bdf8" strokeWidth="2" />
            <text x="140" y="64" fill="#38bdf8" fontSize="10">a₁</text>
            <line x1="60" y1="60" x2="95" y2="120" stroke="#38bdf8" strokeWidth="2" />
            <text x="100" y="125" fill="#38bdf8" fontSize="10">a₂</text>
          </g>

          {/* Educational Callouts */}
          <g transform="translate(20, 40)">
            <text x="0" y="15" fill="#34d399" fontSize="12" fontWeight="bold">SISTEMA HEXAGONAL (P6/mcc)</text>
            <text x="0" y="35" fill="#e2e8f0" fontSize="10">• Prisma dihexagonal dipiramidal</text>
            <text x="0" y="52" fill="#e2e8f0" fontSize="10">• Parámetros de red:</text>
            <text x="10" y="68" fill="#93c5fd" fontSize="10" fontFamily="monospace">a = 9.21 Å  |  c = 9.19 Å</text>
            <text x="0" y="88" fill="#e2e8f0" fontSize="10">• Hábito: Columnar alargado</text>
            <text x="0" y="105" fill="#e2e8f0" fontSize="10">• Clivaje: Basal imperfecto (0001)</text>
          </g>
        </svg>
      );

    case 'm3-l2':
    case 'm3_l2_atomic_channels':
      return <DiagramM3L2 className={className} />;

    case 'm3-l3':
      return <DiagramM4L4 className={className} />;

    case 'm3-l5':
      return <DiagramM1L2 className={className} />;

    case 'm3-l6':
      return <DiagramM2L4 className={className} />;

    // MOD-04 Cases
    case 'm4-l3':
    case 'm4-l4':
    case 'm4_l4_optical_spectroscope':
      return <DiagramM4L4 className={className} />;

    case 'm4-l5':
      return <DiagramM1L5 className={className} />;

    case 'm4-l6':
      return <DiagramM1L4 className={className} />;

    // MOD-05 Cases
    case 'm5-l1':
    case 'm4-l2':
    case 'm5-l4':
    case 'm5-l6':
    case 'three_phase_inclusion':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#032015" rx="12" />
          
          {/* Microscopic Field Frame (Circle) */}
          <circle cx="160" cy="120" r="95" fill="#011b12" stroke="#059669" strokeWidth="3" />
          
          {/* Jagged / Sawtooth Cavity (Diente de sierra) */}
          <path 
            d="M 95 140 L 115 110 L 130 130 L 160 85 L 195 95 L 225 125 L 235 155 L 210 165 L 180 145 L 140 160 L 110 150 Z" 
            fill="#064e3b" 
            stroke="#10b981" 
            strokeWidth="2.5" 
          />

          {/* Phase 1: Liquid Brine (Salmuera líquida) */}
          <text x="110" y="135" fill="#a7f3d0" fontSize="9" opacity="0.6">Salmuera</text>

          {/* Phase 2: Gas Bubble (CO2) */}
          <circle cx="145" cy="125" r="18" fill="#022c22" stroke="#6ee7b7" strokeWidth="2.5" />
          <ellipse cx="140" cy="120" rx="5" ry="3" fill="#ffffff" opacity="0.7" />
          <text x="145" y="128" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">CO₂</text>

          {/* Phase 3: Halite Cube (Sal gema, NaCl) */}
          <rect x="175" y="112" width="22" height="22" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.8" rx="1" />
          <line x1="175" y1="112" x2="197" y2="134" stroke="#cbd5e1" strokeWidth="0.8" />
          <text x="186" y="126" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">NaCl</text>

          {/* Labels and Arrows */}
          <g transform="translate(265, 30)">
            <text x="0" y="20" fill="#34d399" fontSize="12" fontWeight="bold">INCLUSIÓN TRIFÁSICA</text>
            
            <circle cx="10" cy="50" r="5" fill="#f8fafc" stroke="#94a3b8" />
            <text x="22" y="54" fill="#e2e8f0" fontSize="10">1. Halita sólida (NaCl)</text>

            <circle cx="10" cy="80" r="5" fill="#022c22" stroke="#6ee7b7" />
            <text x="22" y="84" fill="#e2e8f0" fontSize="10">2. Burbuja de gas (CO₂)</text>

            <rect x="6" y="106" width="9" height="9" fill="#064e3b" stroke="#10b981" />
            <text x="22" y="114" fill="#e2e8f0" fontSize="10">3. Salmuera líquida</text>

            <text x="0" y="145" fill="#fbbf24" fontSize="9" fontWeight="bold">FORMA TÍPICA:</text>
            <text x="0" y="160" fill="#94a3b8" fontSize="9">Cavidad irregular en</text>
            <text x="0" y="172" fill="#94a3b8" fontSize="9">«dientes de sierra»</text>
            <text x="0" y="188" fill="#f87171" fontSize="8">Nota: No exclusiva (Panjshir)</text>
          </g>
        </svg>
      );

    case 'm5-l2':
      return <DiagramM2L4 className={className} />;

    case 'm5-l3':
      return <DiagramM5L3 className={className} />;

    case 'm5-l5':
      return <DiagramM1L6 className={className} />;

    case 'm3-l4':
    case 'trapiche_structure':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#021f15" rx="12" />
          
          {/* Trapiche Hexagonal Cross Section */}
          <g transform="translate(130, 120)">
            {/* Outer Hexagon */}
            <polygon points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40" fill="#047857" stroke="#10b981" strokeWidth="2.5" />
            
            {/* Carbonaceous Shale Arms (6 Brazos radiales de lutita carbonosa) */}
            <line x1="0" y1="0" x2="0" y2="-80" stroke="#0f172a" strokeWidth="7" />
            <line x1="0" y1="0" x2="69" y2="-40" stroke="#0f172a" strokeWidth="7" />
            <line x1="0" y1="0" x2="69" y2="40" stroke="#0f172a" strokeWidth="7" />
            <line x1="0" y1="0" x2="0" y2="80" stroke="#0f172a" strokeWidth="7" />
            <line x1="0" y1="0" x2="-69" y2="40" stroke="#0f172a" strokeWidth="7" />
            <line x1="0" y1="0" x2="-69" y2="-40" stroke="#0f172a" strokeWidth="7" />

            {/* Central Hexagonal Core (0001) */}
            <polygon points="0,-24 21,-12 21,12 0,24 -21,12 -21,-12" fill="#065f46" stroke="#fbbf24" strokeWidth="2" />
            <polygon points="0,-26 23,-13 23,13 0,26 -23,13 -23,-13" fill="none" stroke="#0f172a" strokeWidth="3" />
            
            {/* Sector Labels */}
            <text x="35" y="0" fill="#a7f3d0" fontSize="9" fontWeight="bold">Sector</text>
            <text x="35" y="12" fill="#a7f3d0" fontSize="8">Prismático</text>
          </g>

          {/* Educational Callouts */}
          <g transform="translate(250, 40)">
            <text x="0" y="18" fill="#fbbf24" fontSize="12" fontWeight="bold">ESMERALDA TRAPICHE</text>
            <text x="0" y="38" fill="#e2e8f0" fontSize="10">• Monocristal continuo</text>
            <text x="0" y="53" fill="#e2e8f0" fontSize="10">• Crecimiento sectorial</text>
            <text x="0" y="68" fill="#e2e8f0" fontSize="10">• Núcleo hexagonal (0001)</text>
            <text x="0" y="83" fill="#e2e8f0" fontSize="10">• 6 brazos radiales {'{10-10}'}</text>
            <text x="0" y="103" fill="#94a3b8" fontSize="10">• Relleno: Lutita carbonosa</text>
            <text x="10" y="118" fill="#94a3b8" fontSize="10">bituminosa + albita</text>
            <text x="0" y="142" fill="#34d399" fontSize="10" fontWeight="bold">Yacimientos:</text>
            <text x="0" y="157" fill="#6ee7b7" fontSize="10">Muzo, Coscuez, Peñas Blancas</text>
            <text x="0" y="175" fill="#f87171" fontSize="9">Desmitificado: NO es una macla</text>
          </g>
        </svg>
      );

    case 'm6-l3':
    case 'm8-l2':
    case 'm8-l5':
    case 'emerald_cut_geometry':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#021c14" rx="12" />
          
          {/* Octagonal Emerald Cut Geometry (57 facetas) */}
          <g transform="translate(130, 25)">
            {/* Girdle Outline (Filetín) */}
            <polygon points="35,10 115,10 145,40 145,130 115,160 35,160 5,130 5,40" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
            
            {/* Table Facet (Tabla) */}
            <polygon points="50,35 100,35 120,55 120,115 100,135 50,135 30,115 30,55" fill="#022c22" stroke="#a7f3d0" strokeWidth="1.8" />
            <text x="75" y="88" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">TABLA</text>

            {/* Step Facets Crown (Escalones de Corona) */}
            <line x1="35" y1="10" x2="50" y2="35" stroke="#6ee7b7" strokeWidth="1.2" />
            <line x1="115" y1="10" x2="100" y2="35" stroke="#6ee7b7" strokeWidth="1.2" />
            <line x1="145" y1="40" x2="120" y2="55" stroke="#6ee7b7" strokeWidth="1.2" />
            <line x1="145" y1="130" x2="120" y2="115" stroke="#6ee7b7" strokeWidth="1.2" />
            <line x1="115" y1="160" x2="100" y2="135" stroke="#6ee7b7" strokeWidth="1.2" />
            <line x1="35" y1="160" x2="50" y2="135" stroke="#6ee7b7" strokeWidth="1.2" />
            <line x1="5" y1="130" x2="30" y2="115" stroke="#6ee7b7" strokeWidth="1.2" />
            <line x1="5" y1="40" x2="30" y2="55" stroke="#6ee7b7" strokeWidth="1.2" />

            {/* Corner Bevels (Chaflanes protectores a 45°) */}
            <circle cx="145" cy="40" r="14" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2" />
            <text x="162" y="32" fill="#fbbf24" fontSize="9" fontWeight="bold">Chaflán 45°</text>
          </g>

          {/* Educational Callouts */}
          <g transform="translate(255, 60)">
            <text x="0" y="16" fill="#34d399" fontSize="12" fontWeight="bold">TALLA ESMERALDA</text>
            <text x="0" y="34" fill="#e2e8f0" fontSize="10">• Corte octagonal escalonado</text>
            <text x="0" y="50" fill="#e2e8f0" fontSize="10">• 57 facetas estándar</text>
            <text x="0" y="66" fill="#e2e8f0" fontSize="10">• Ángulo de corona: 37° - 42°</text>
            <text x="0" y="82" fill="#e2e8f0" fontSize="10">• Ángulo de pabellón: 43°</text>
            <text x="0" y="98" fill="#e2e8f0" fontSize="10">• Ángulo crítico: 39.5°</text>
            <text x="0" y="118" fill="#fbbf24" fontSize="9" fontWeight="bold">Función de los Chaflanes:</text>
            <text x="0" y="132" fill="#94a3b8" fontSize="9">Previenen el desportillado</text>
            <text x="0" y="144" fill="#94a3b8" fontSize="9">durante el engaste joyero.</text>
          </g>
        </svg>
      );

    case 'm4-l1':
    case 'refractometer_reading':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#051c24" rx="12" />
          
          {/* Refractometer Eyepiece Scale (Escala Reticular) */}
          <g transform="translate(130, 20)">
            <rect x="0" y="0" width="100" height="200" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" rx="4" />
            
            {/* Scale Markings */}
            <line x1="20" y1="20" x2="80" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="85" y="24" fill="#94a3b8" fontSize="9">1.600</text>
            
            <line x1="30" y1="45" x2="70" y2="45" stroke="#94a3b8" strokeWidth="1" />
            <line x1="20" y1="70" x2="80" y2="70" stroke="#38bdf8" strokeWidth="2" />
            <text x="85" y="74" fill="#38bdf8" fontSize="9" fontWeight="bold">1.580</text>

            {/* Ordinary Ray Shadow (no ≈ 1.577) */}
            <rect x="0" y="76" width="100" height="124" fill="#047857" opacity="0.4" />
            <line x1="10" y1="76" x2="90" y2="76" stroke="#34d399" strokeWidth="2.5" />
            <text x="5" y="72" fill="#34d399" fontSize="8" fontWeight="bold">no=1.577</text>

            {/* Extraordinary Ray Shadow (ne ≈ 1.571) */}
            <line x1="10" y1="92" x2="90" y2="92" stroke="#a7f3d0" strokeWidth="2" strokeDasharray="3 2" />
            <text x="5" y="103" fill="#a7f3d0" fontSize="8" fontWeight="bold">ne=1.571</text>

            <line x1="20" y1="120" x2="80" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="85" y="124" fill="#94a3b8" fontSize="9">1.560</text>
            <line x1="20" y1="170" x2="80" y2="170" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="85" y="174" fill="#94a3b8" fontSize="9">1.540</text>
          </g>

          {/* Educational Callouts */}
          <g transform="translate(255, 30)">
            <text x="0" y="20" fill="#38bdf8" fontSize="12" fontWeight="bold">LECTURA REFRACTÓMETRO</text>
            <text x="0" y="40" fill="#e2e8f0" fontSize="10">• Líquido contacto: n = 1.81</text>
            <text x="0" y="55" fill="#e2e8f0" fontSize="10">• Luz de Sodio (589 nm)</text>
            
            <text x="0" y="80" fill="#34d399" fontSize="10" fontWeight="bold">Esmeralda Colombiana:</text>
            <text x="0" y="96" fill="#a7f3d0" fontSize="10">no = 1.577 - 1.583</text>
            <text x="0" y="110" fill="#a7f3d0" fontSize="10">ne = 1.571 - 1.577</text>
            
            <text x="0" y="135" fill="#fbbf24" fontSize="10" fontWeight="bold">Birrefringencia:</text>
            <text x="0" y="149" fill="#fde68a" fontSize="10">Δn = 0.006</text>
            <text x="0" y="165" fill="#cbd5e1" fontSize="10">Carácter óptico:</text>
            <text x="0" y="179" fill="#67e8f9" fontSize="10">Uniaxial Negativo (-)</text>
          </g>
        </svg>
      );

    case 'm7-l3':
    case 'm7-l4':
    case 'ftir_resin_spectra':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#180b1e" rx="12" />
          
          {/* FTIR Cartesian Graph */}
          <g transform="translate(50, 25)">
            {/* Axes */}
            <line x1="0" y1="170" x2="310" y2="170" stroke="#71717a" strokeWidth="1.5" />
            <line x1="0" y1="10" x2="0" y2="170" stroke="#71717a" strokeWidth="1.5" />
            
            {/* Wavenumber Labels (cm⁻¹) */}
            <text x="310" y="185" fill="#a1a1aa" fontSize="9" textAnchor="end">Número de onda (cm⁻¹)</text>
            <text x="10" y="185" fill="#a1a1aa" fontSize="8">3200</text>
            <text x="80" y="185" fill="#a1a1aa" fontSize="8">3000</text>
            <text x="140" y="185" fill="#f43f5e" fontSize="8" fontWeight="bold">2928</text>
            <text x="200" y="185" fill="#a1a1aa" fontSize="8">2800</text>
            <text x="270" y="185" fill="#38bdf8" fontSize="8">1730</text>

            {/* Spectrum Curve: Natural Cedarwood (Green clean curve) */}
            <path 
              d="M 10 140 Q 50 142 80 140 T 140 135 T 200 145 T 270 150 T 300 152" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="2" 
            />
            <text x="10" y="125" fill="#10b981" fontSize="9" fontWeight="bold">Aceite de Cedro Natural (C-H muy leve)</text>

            {/* Spectrum Curve: Artificial Epoxy Resin (Opticon/Palma with sharp C-H peaks) */}
            <path 
              d="M 10 100 Q 60 95 90 98 L 105 50 L 115 105 L 125 40 L 138 110 L 150 45 L 165 102 Q 220 104 255 105 L 265 65 L 275 105 L 300 106" 
              fill="none" 
              stroke="#f43f5e" 
              strokeWidth="2.5" 
            />
            <text x="10" y="32" fill="#f43f5e" fontSize="9" fontWeight="bold">Resina Epóxica Artificial (Opticon / Araldite)</text>
            
            {/* Diagnostic Peak Callouts */}
            <circle cx="125" cy="40" r="4" fill="#fbbf24" />
            <text x="125" y="24" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">2928 cm⁻¹ (C-H)</text>

            <circle cx="265" cy="65" r="4" fill="#38bdf8" />
            <text x="265" y="52" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">1730 cm⁻¹ (C=O)</text>
          </g>

          <g transform="translate(50, 215)">
            <text x="0" y="0" fill="#cbd5e1" fontSize="8">Diagnóstico oficial LMHC: Detección de enlaces C-H sintéticos en resinas termoendurecibles.</text>
          </g>
        </svg>
      );

    case 'm2-l1':
    case 'm2-l5':
    case 'geological_cross_section':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#0f172a" rx="12" />
          
          {/* Tectonic Inversion & Hydrothermal Breccia Section */}
          <g transform="translate(30, 20)">
            {/* Black Shale Host Rock (Lutitas negras del Cretácico) */}
            <rect x="0" y="0" width="340" height="180" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
            <line x1="0" y1="40" x2="340" y2="40" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="0" y1="90" x2="340" y2="90" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="0" y1="140" x2="340" y2="140" stroke="#475569" strokeWidth="1" strokeDasharray="6 4" />
            <text x="15" y="30" fill="#94a3b8" fontSize="9" fontWeight="bold">Lutitas negras bituminosas (Fm. Rosablanca / Paja)</text>

            {/* Thrust Fault (Falla compresiva / cabalgamiento de Itoco) */}
            <line x1="40" y1="180" x2="280" y2="10" stroke="#ef4444" strokeWidth="3" />
            <text x="220" y="35" fill="#ef4444" fontSize="9" fontWeight="bold">Falla de Itoco / Cabalgamiento</text>

            {/* Hydrothermal Vein / Breccia (Veta de calcita-dolomita con esmeraldas) */}
            <path d="M 120 180 Q 140 120 160 100 Q 180 80 210 20" stroke="#f8fafc" strokeWidth="16" strokeLinecap="round" opacity="0.85" />
            <path d="M 120 180 Q 140 120 160 100 Q 180 80 210 20" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
            <text x="135" y="115" fill="#022c22" fontSize="9" fontWeight="black">VETA DE ESMERALDAS</text>

            {/* Mineralizing Fluid Flow (Salmueras calientes 300°C) */}
            <path d="M 70 170 Q 100 130 130 110" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />
            <text x="30" y="155" fill="#fbbf24" fontSize="8" fontWeight="bold">Salmueras hidrotermales (290-360°C)</text>
          </g>

          <g transform="translate(30, 218)">
            <text x="0" y="0" fill="#34d399" fontSize="9" fontWeight="bold">MODELO GENÉTICO COLOMBIANO: </text>
            <text x="160" y="0" fill="#e2e8f0" fontSize="9">Hidrotermal sedimentario sinsedimentario en cuenca invertida (Sin aporte magmático).</text>
          </g>
        </svg>
      );

    case 'm6-l1':
    case 'm6-l6':
    case 'gia_color_space':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#04161a" rx="12" />
          <g transform="translate(30, 25)">
            <text x="0" y="16" fill="#38bdf8" fontSize="12" fontWeight="bold">SISTEMA GIA DE COLOR: MATIZ, TONO Y SATURACIÓN</text>
            
            {/* Tone axis (Vertical) */}
            <line x1="40" y1="180" x2="40" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="40,35 36,45 44,45" fill="#94a3b8" />
            <text x="5" y="45" fill="#e2e8f0" fontSize="9" fontWeight="bold">Tono (2-8)</text>
            <text x="10" y="110" fill="#64748b" fontSize="8">Medio (5-6)</text>
            <text x="10" y="175" fill="#64748b" fontSize="8">Muy claro (2)</text>

            {/* Saturation axis (Horizontal) */}
            <line x1="40" y1="180" x2="220" y2="180" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="225,180 215,176 215,184" fill="#94a3b8" />
            <text x="130" y="196" fill="#e2e8f0" fontSize="9" fontWeight="bold">Saturación (1-6)</text>

            {/* Color Grid Blocks */}
            <rect x="55" y="145" width="25" height="25" fill="#6ee7b7" opacity="0.3" rx="2" />
            <rect x="90" y="145" width="25" height="25" fill="#34d399" opacity="0.4" rx="2" />
            <rect x="125" y="145" width="25" height="25" fill="#10b981" opacity="0.5" rx="2" />

            <rect x="55" y="110" width="25" height="25" fill="#10b981" opacity="0.5" rx="2" />
            <rect x="90" y="110" width="25" height="25" fill="#059669" opacity="0.75" rx="2" />
            <rect x="125" y="110" width="30" height="28" fill="#047857" stroke="#fbbf24" strokeWidth="2.5" rx="3" />
            
            <rect x="55" y="75" width="25" height="25" fill="#065f46" opacity="0.6" rx="2" />
            <rect x="90" y="75" width="25" height="25" fill="#064e3b" opacity="0.8" rx="2" />
            <rect x="125" y="75" width="25" height="25" fill="#022c22" rx="2" />

            {/* Ideal Colombian Green Callout */}
            <text x="165" y="118" fill="#fbbf24" fontSize="10" fontWeight="bold">Grado Top / Muzo Green</text>
            <text x="165" y="130" fill="#a7f3d0" fontSize="9">Matiz: vslbG (Very slightly bluish Green)</text>
            <text x="165" y="142" fill="#a7f3d0" fontSize="9">Tono: 5-6 (Medium / Medium-Dark)</text>
            <text x="165" y="154" fill="#a7f3d0" fontSize="9">Saturación: 6 (Vivid)</text>
          </g>
        </svg>
      );

    case 'm8-l1':
    case 'm8-l3':
    case 'lapidary_c_axis':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#031b14" rx="12" />
          <g transform="translate(25, 20)">
            <text x="0" y="16" fill="#34d399" fontSize="12" fontWeight="bold">ORIENTACIÓN CRISTALOGRÁFICA EN TALLA (EJE c)</text>
            
            {/* Rough Crystal outline */}
            <g transform="translate(20, 40)">
              <rect x="0" y="20" width="70" height="120" fill="#064e3b" stroke="#10b981" strokeWidth="2" rx="2" />
              {/* c-Axis Arrow */}
              <line x1="35" y1="5" x2="35" y2="155" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 2" />
              <polygon points="35,160 31,150 39,150" fill="#fbbf24" />
              <text x="42" y="15" fill="#fbbf24" fontSize="9" fontWeight="bold">Eje óptico [c]</text>
              <text x="8" y="85" fill="#a7f3d0" fontSize="9" fontWeight="bold">Cristal Bruto</text>
            </g>

            {/* Orientation A: Table perpendicular to c-axis */}
            <g transform="translate(130, 40)">
              <rect x="15" y="30" width="85" height="45" fill="#047857" stroke="#34d399" strokeWidth="2" rx="3" />
              <line x1="15" y1="30" x2="100" y2="30" stroke="#38bdf8" strokeWidth="4" />
              <text x="20" y="24" fill="#38bdf8" fontSize="9" fontWeight="bold">Tabla ⊥ al Eje [c]</text>
              <text x="20" y="55" fill="#ecfdf5" fontSize="8" fontWeight="bold">Rayo Extraordinario (ε)</text>
              <text x="20" y="66" fill="#a7f3d0" fontSize="8">Verde puro intenso</text>
              <text x="18" y="90" fill="#34d399" fontSize="9" fontWeight="bold">✓ Máximo Color Muzo</text>
            </g>

            {/* Orientation B: Table parallel to c-axis */}
            <g transform="translate(245, 40)">
              <rect x="15" y="30" width="85" height="45" fill="#0f766e" stroke="#14b8a6" strokeWidth="2" rx="3" />
              <line x1="15" y1="30" x2="15" y2="75" stroke="#f87171" strokeWidth="4" />
              <text x="15" y="24" fill="#f87171" fontSize="9" fontWeight="bold">Tabla || al Eje [c]</text>
              <text x="20" y="55" fill="#ccfbf1" fontSize="8" fontWeight="bold">Rayo Ordinario (ω)</text>
              <text x="20" y="66" fill="#99f6e4" fontSize="8">Verde azuloso pálido</text>
              <text x="18" y="90" fill="#fde047" fontSize="9" fontWeight="bold">Mejor rinde de peso</text>
            </g>

            <text x="10" y="195" fill="#cbd5e1" fontSize="9">
              Dilema del lapidario: Sacrificar hasta 65% de peso para orientar la tabla perpendicular a [c] y lograr el color más profundo.
            </text>
          </g>
        </svg>
      );

    case 'm9-l2':
    case 'raman_spectrometry':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#0a0f1d" rx="12" />
          <g transform="translate(30, 20)">
            <text x="0" y="16" fill="#38bdf8" fontSize="12" fontWeight="bold">MICRO-ESPECTROMETRÍA RAMAN (LÁSER 532 nm / 785 nm)</text>
            
            {/* Graph Axes */}
            <line x1="30" y1="160" x2="330" y2="160" stroke="#64748b" strokeWidth="1.5" />
            <line x1="30" y1="35" x2="30" y2="160" stroke="#64748b" strokeWidth="1.5" />
            
            <text x="330" y="174" fill="#94a3b8" fontSize="8" textAnchor="end">Desplazamiento Raman (cm⁻¹)</text>
            <text x="30" y="174" fill="#94a3b8" fontSize="8">200</text>
            <text x="120" y="174" fill="#34d399" fontSize="8" fontWeight="bold">685</text>
            <text x="200" y="174" fill="#34d399" fontSize="8" fontWeight="bold">1068</text>
            <text x="270" y="174" fill="#fbbf24" fontSize="8" fontWeight="bold">1285 / 1388</text>

            {/* Beryl host lattice spectral peaks */}
            <path 
              d="M 30 150 Q 80 152 110 148 L 120 40 L 130 150 Q 170 151 190 148 L 200 65 L 210 151 Q 250 152 265 150 L 270 85 L 275 149 L 285 95 L 290 151 L 330 150" 
              fill="none" 
              stroke="#38bdf8" 
              strokeWidth="2" 
            />

            {/* Highlighted peaks */}
            <circle cx="120" cy="40" r="4" fill="#34d399" />
            <text x="120" y="32" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Si-O Ring (685)</text>

            <circle cx="200" cy="65" r="4" fill="#34d399" />
            <text x="200" y="57" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Be-O (1068)</text>

            <circle cx="270" cy="85" r="4" fill="#fbbf24" />
            <text x="280" y="80" fill="#fbbf24" fontSize="8" fontWeight="bold">Dióxido de Carbono (CO₂ Fermi Dyad)</text>
            
            <text x="10" y="195" fill="#94a3b8" fontSize="9">
              Identificación no destructiva: Huella de enlace molecular de berilo natural y detección de fluidos en cavidades.
            </text>
          </g>
        </svg>
      );

    case 'm9-l1':
    case 'm9-l5':
    case 'm9-l6':
    case 'm10-l1':
    case 'm11-l3':
    case 'm12-l1':
    case 'm12-l2':
    case 'm12-l4':
    case 'traceability_chain':
      return (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="400" height="240" fill="#021c18" rx="12" />
          <g transform="translate(20, 20)">
            <text x="0" y="16" fill="#34d399" fontSize="12" fontWeight="bold">CADENA DE CUSTODIA Y TRAZABILIDAD (DECRETO 1666 / ANM)</text>
            
            {/* Step 1: Mina & RUCOM */}
            <g transform="translate(10, 45)">
              <rect x="0" y="0" width="70" height="75" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" rx="6" />
              <text x="35" y="24" fill="#fbbf24" fontSize="14" textAnchor="middle">⛏️</text>
              <text x="35" y="44" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Mina Legal</text>
              <text x="35" y="58" fill="#a7f3d0" fontSize="7" textAnchor="middle">Título ANM</text>
              <text x="35" y="68" fill="#a7f3d0" fontSize="7" textAnchor="middle">RUCOM Activo</text>
            </g>

            {/* Arrow 1 */}
            <line x1="85" y1="82" x2="105" y2="82" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="107,82 101,78 101,86" fill="#fbbf24" />

            {/* Step 2: Transporte Legal */}
            <g transform="translate(110, 45)">
              <rect x="0" y="0" width="70" height="75" fill="#065f46" stroke="#34d399" strokeWidth="1.5" rx="6" />
              <text x="35" y="24" fill="#38bdf8" fontSize="14" textAnchor="middle">📄</text>
              <text x="35" y="44" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Transporte</text>
              <text x="35" y="58" fill="#a7f3d0" fontSize="7" textAnchor="middle">Guía de Tránsito</text>
              <text x="35" y="68" fill="#a7f3d0" fontSize="7" textAnchor="middle">Código QR Único</text>
            </g>

            {/* Arrow 2 */}
            <line x1="185" y1="82" x2="205" y2="82" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="207,82 201,78 201,86" fill="#fbbf24" />

            {/* Step 3: Laboratorio CDTEC */}
            <g transform="translate(210, 45)">
              <rect x="0" y="0" width="70" height="75" fill="#047857" stroke="#10b981" strokeWidth="1.5" rx="6" />
              <text x="35" y="24" fill="#a7f3d0" fontSize="14" textAnchor="middle">🔬</text>
              <text x="35" y="44" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Laboratorio</text>
              <text x="35" y="58" fill="#a7f3d0" fontSize="7" textAnchor="middle">Informe Pericial</text>
              <text x="35" y="68" fill="#a7f3d0" fontSize="7" textAnchor="middle">Grado Claridad</text>
            </g>

            {/* Arrow 3 */}
            <line x1="285" y1="82" x2="305" y2="82" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="307,82 301,78 301,86" fill="#fbbf24" />

            {/* Step 4: Pasaporte Digital / Joya */}
            <g transform="translate(310, 45)">
              <rect x="0" y="0" width="65" height="75" fill="#022c22" stroke="#fbbf24" strokeWidth="2" rx="6" />
              <text x="32" y="24" fill="#fbbf24" fontSize="14" textAnchor="middle">💎</text>
              <text x="32" y="44" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Pasaporte</text>
              <text x="32" y="58" fill="#fde047" fontSize="7" textAnchor="middle">Blockchain DPP</text>
              <text x="32" y="68" fill="#fde047" fontSize="7" textAnchor="middle">Origen Verificado</text>
            </g>

            {/* Summary description */}
            <text x="10" y="150" fill="#a7f3d0" fontSize="9" fontWeight="bold">Diligencia Debida OCDE (5 Pasos):</text>
            <text x="10" y="165" fill="#cbd5e1" fontSize="8">• 1. Sistema de gestión integral  • 2. Evaluación de riesgos en la cadena  • 3. Plan de mitigación</text>
            <text x="10" y="178" fill="#cbd5e1" fontSize="8">• 4. Auditoría independiente de terceros  • 5. Divulgación pública anual de trazabilidad</text>
          </g>
        </svg>
      );

    // MOD-06 Cases
    case 'm6-l2':
      return <DiagramM6L2 className={className} />;

    case 'm6-l4':
      return <DiagramM10L4 className={className} />;

    case 'm6-l5':
      return <DiagramM2L3 className={className} />;

    // MOD-07 Cases
    case 'm7-l1':
    case 'm7-l2':
    case 'm7-l6':
      return <DiagramM7L1 className={className} />;

    case 'm7-l5':
      return <DiagramM6L2 className={className} />;

    // MOD-08 Cases
    case 'm8-l4':
      return <DiagramM8L4 className={className} />;

    case 'm8-l6':
      return <DiagramM12L3 className={className} />;

    // MOD-09 Cases
    case 'm9-l3':
    case 'm9-l4':
      return <DiagramM9L3 className={className} />;

    // MOD-10 Cases
    case 'm10-l2':
    case 'm10-l3':
    case 'm10-l4':
    case 'm10-l5':
    case 'm10-l6':
      return <DiagramM10L4 className={className} />;

    // MOD-11 Cases
    case 'm11-l1':
    case 'm11-l2':
    case 'm11-l6':
      return <DiagramM11L2 className={className} />;

    case 'm11-l4':
    case 'm11-l5':
      return <DiagramM11L4 className={className} />;

    // MOD-12 Cases
    case 'm12-l3':
      return <DiagramM12L3 className={className} />;

    case 'm12-l5':
      return <DiagramM12L5 className={className} />;

    case 'm12-l6':
      return <DiagramM11L2 className={className} />;

    default:
      return (
        <div className="w-full h-56 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center p-6 text-center">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-400">Diagrama Científico Estandarizado</span>
            <p className="text-[11px] text-slate-400">Esquema cristalográfico y óptico oficial de la Academia Esmeraldera JAIRRESTAURA</p>
          </div>
        </div>
      );
  }
};
