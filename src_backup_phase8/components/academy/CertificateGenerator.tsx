import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { 
  Award, 
  Printer, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Edit3, 
  RefreshCw,
  Share2,
  Calendar,
  User,
  GraduationCap
} from 'lucide-react';
import { CERTIFICATE_TRACKS } from '../../data/sampleData';
import { Logo } from '../common/Logo';
import { AcademyStorageService } from '../../services/academyStorage';

interface CertificateGeneratorProps {
  defaultStudentName?: string;
}

export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({
  defaultStudentName = 'Nombre del Estudiante'
}) => {
  const savedProgress = AcademyStorageService.getProgress();
  const effectiveHours = savedProgress.effectiveHoursCompleted || 0;
  const [studentName, setStudentName] = useState(savedProgress.studentName || defaultStudentName);
  const [studentId, setStudentId] = useState(savedProgress.studentIdNumber || 'C.C. 1.020.340.560');
  const [selectedTrack, setSelectedTrack] = useState(CERTIFICATE_TRACKS[0]);
  const [issueDate, setIssueDate] = useState(savedProgress.diplomaIssueDate || new Date().toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }));
  const [serial, setSerial] = useState(savedProgress.diplomaSerial || `ACAD-DIP-${Math.floor(100000 + Math.random() * 900000)}`);
  const [hours, setHours] = useState(effectiveHours > 0 ? String(effectiveHours) : '120');
  const [honorGrade, setHonorGrade] = useState('Aprobado con Mención de Honor y Excelencia');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Generate QR with verification payload
    const verificationUrl = `${window.location.origin}/#certificado/${serial}?student=${encodeURIComponent(studentName)}`;
    QRCode.toDataURL(verificationUrl, {
      width: 200,
      margin: 1,
      color: {
        dark: '#022c22',
        light: '#ffffff'
      }
    }).then(url => setQrCodeDataUrl(url)).catch(err => console.error(err));

    // Save to storage
    AcademyStorageService.saveProgress({
      studentName,
      studentIdNumber: studentId,
      diplomaSerial: serial,
      diplomaIssueDate: issueDate
    });
  }, [serial, studentName, studentId, issueDate]);

  const handlePrint = () => {
    window.print();
  };

  const handleRegenerateSerial = () => {
    const newSerial = `ACAD-DIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setSerial(newSerial);
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#certificado/${serial}?student=${encodeURIComponent(studentName)}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadPNG = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1130;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Parchment
    ctx.fillStyle = '#fafaf9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dark Emerald Outer Border
    ctx.strokeStyle = '#022c22';
    ctx.lineWidth = 24;
    ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);

    // Inner Gold Border
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);

    // Thin Inner Accent Border
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(58, 58, canvas.width - 116, canvas.height - 116);

    // Corner Ornament Accents
    ctx.fillStyle = '#d97706';
    const corners = [
      [58, 58],
      [canvas.width - 58, 58],
      [58, canvas.height - 58],
      [canvas.width - 58, canvas.height - 58]
    ];
    corners.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();
    });

    // Header Text
    ctx.fillStyle = '#022c22';
    ctx.font = 'bold 36px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('ACADEMIA ESMERALDERA JAIRRESTAURA', canvas.width / 2, 140);

    ctx.fillStyle = '#b45309';
    ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('CENTRO NACIONAL DE FORMACIÓN GEMOLÓGICA & CULTURA DE LA ESMERALDA COLOMBIANA', canvas.width / 2, 175);

    ctx.fillStyle = '#475569';
    ctx.font = '14px "Cinzel", Georgia, serif';
    ctx.fillText('— CERTIFICADO OFICIAL DE ACREDITACIÓN ACADÉMICA —', canvas.width / 2, 220);

    ctx.font = 'italic 18px Georgia, serif';
    ctx.fillStyle = '#334155';
    ctx.fillText('Por cuanto ha completado satisfactoriamente los módulos teóricos y prácticos, se otorga a:', canvas.width / 2, 290);

    // Student Name
    ctx.fillStyle = '#022c22';
    ctx.font = 'bold 44px "Cinzel", Georgia, serif';
    ctx.fillText(studentName.toUpperCase() || 'NOMBRE DEL ESTUDIANTE', canvas.width / 2, 380);

    ctx.strokeStyle = '#047857';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 300, 405);
    ctx.lineTo(canvas.width / 2 + 300, 405);
    ctx.stroke();

    ctx.fillStyle = '#475569';
    ctx.font = '16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`Documento de Identificación: ${studentId || 'No registrado'}`, canvas.width / 2, 435);

    ctx.font = 'italic 18px Georgia, serif';
    ctx.fillStyle = '#334155';
    ctx.fillText('Por haber acreditado con honores y rigor gemológico el programa formativo de:', canvas.width / 2, 500);

    // Track Box
    ctx.fillStyle = '#022c22';
    ctx.beginPath();
    ctx.roundRect(canvas.width / 2 - 420, 530, 840, 75, 12);
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#fef3c7';
    ctx.font = 'bold 22px "Cinzel", Georgia, serif';
    ctx.fillText(selectedTrack, canvas.width / 2, 575);

    ctx.fillStyle = '#6ee7b7';
    ctx.font = '14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`Intensidad: ${hours} horas académicas acreditadas (Programa de 120H) • ${honorGrade}`, canvas.width / 2, 630);

    // Curricular summary
    ctx.fillStyle = '#475569';
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Acreditando competencias en génesis hidrotermal, inclusiones trifásicas diagnósticas (halita/salmuera/CO2),', canvas.width / 2, 680);
    ctx.fillText('espectroscopía de tratamientos con aceite de cedro natural vs resinas, talla esmeralda con chaflanes y RUCOM formal.', canvas.width / 2, 705);

    // Signatures and QR Code
    const renderFooter = () => {
      // Left Signature
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(200, 920);
      ctx.lineTo(440, 920);
      ctx.stroke();

      ctx.fillStyle = '#022c22';
      ctx.font = 'italic bold 22px Georgia, serif';
      ctx.fillText('Jair Restaura', 320, 905);
      ctx.font = 'bold 15px "Cinzel", serif';
      ctx.fillText('Jair Restaura', 320, 945);
      ctx.fillStyle = '#64748b';
      ctx.font = '12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Director General & Consultor Gemológico', 320, 968);
      ctx.fillText('Academia Esmeraldera Jairrestaura', 320, 988);

      // Right Signature
      ctx.beginPath();
      ctx.moveTo(1160, 920);
      ctx.lineTo(1400, 920);
      ctx.stroke();

      ctx.fillStyle = '#022c22';
      ctx.font = 'italic bold 22px Georgia, serif';
      ctx.fillText('Comité Académico', 1280, 905);
      ctx.font = 'bold 15px "Cinzel", serif';
      ctx.fillText('Comité Académico Gemológico', 1280, 945);
      ctx.fillStyle = '#64748b';
      ctx.font = '12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Área de Cristalografía & Tallas', 1280, 968);
      ctx.fillText(`Bogotá D.C. • ${issueDate}`, 1280, 988);

      // Center Serial and Verification
      ctx.fillStyle = '#022c22';
      ctx.font = 'bold 13px monospace';
      ctx.fillText(`REGISTRO: ${serial}`, canvas.width / 2, 970);
      ctx.fillStyle = '#64748b';
      ctx.font = '11px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Verificación Digital Inmediata', canvas.width / 2, 990);

      // Bottom Note with Non-university legal disclaimer
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Certificado de educación técnica libre y formación continua emitida por ESMERALDA INTELIGENTE JAIRRESTAURA (No conducente a título profesional universitario formal).', canvas.width / 2, 1060);

      // Trigger download
      const link = document.createElement('a');
      link.download = `Certificado_Jairrestaura_${serial}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    if (qrCodeDataUrl) {
      const qrImg = new Image();
      qrImg.onload = () => {
        ctx.drawImage(qrImg, canvas.width / 2 - 50, 830, 100, 100);
        renderFooter();
      };
      qrImg.src = qrCodeDataUrl;
    } else {
      renderFooter();
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Control Panel for Student Customization */}
      <div className="no-print bg-slate-900 border border-emerald-950 p-6 rounded-2xl space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white font-emerald-heading flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Editor del Certificado de Acreditación Estudiantil
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Personaliza tus datos personales y programa formativo. Compatible con Vercel, móviles y computadores.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl transition-all"
              title="Copiar enlace público de verificación"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? 'Enlace Copiado' : 'Compartir'}</span>
            </button>

            <button
              onClick={handleDownloadPNG}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl shadow-md transition-all active:scale-95"
              title="Descargar imagen digital en alta definición"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Imagen HD</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-900/50 transition-all active:scale-95"
              title="Descargar PDF o imprimir en tamaño apaisado"
            >
              <Printer className="w-4 h-4" />
              <span>Descargar PDF</span>
            </button>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Nombre Completo del Estudiante *</label>
            <input
              type="text"
              value={studentName}
              onChange={e => setStudentName(e.target.value)}
              placeholder="Ingresa tu nombre y apellidos"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-bold text-xs focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Documento de Identidad (C.C. / ID)</label>
            <input
              type="text"
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
              placeholder="C.C. o Pasaporte"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-slate-300 font-semibold mb-1">Especialización / Programa Acreditado</label>
            <select
              value={selectedTrack}
              onChange={e => setSelectedTrack(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-emerald-500 focus:outline-none"
            >
              {CERTIFICATE_TRACKS.map((t, idx) => (
                <option key={idx} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Fecha de Emisión</label>
            <input
              type="text"
              value={issueDate}
              onChange={e => setIssueDate(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Horas Académicas Certificadas</label>
            <input
              type="text"
              value={hours}
              onChange={e => setHours(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Mención de Calificación</label>
            <input
              type="text"
              value={honorGrade}
              onChange={e => setHonorGrade(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Código de Registro Oficial</label>
            <div className="flex gap-1.5">
              <input
                type="text"
                readOnly
                value={serial}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-emerald-400 font-mono text-xs"
              />
              <button
                onClick={handleRegenerateSerial}
                title="Generar nuevo serial"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Printable Certificate (Landscape Orientation) */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[850px] max-w-[1000px] mx-auto bg-stone-50 text-slate-900 rounded-xl shadow-2xl border-[12px] border-emerald-950 p-8 sm:p-12 relative overflow-hidden print:border-emerald-900 print:shadow-none print:w-full print:p-8">
          
          {/* Inner Gold Foil Frame */}
          <div className="border-[3px] border-amber-600/70 p-6 sm:p-10 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/40 via-stone-50 to-emerald-50/20">
            
            {/* Corner Decorative Medallions */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600"></div>

            {/* Certificate Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-900 p-1 flex items-center justify-center shadow-md">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black font-emerald-heading tracking-widest text-emerald-950 uppercase">
                    ACADEMIA ESMERALDERA JAIRRESTAURA
                  </h1>
                  <p className="text-[10px] tracking-widest font-bold uppercase text-amber-700">
                    CENTRO NACIONAL DE FORMACIÓN GEMOLÓGICA & CULTURA DE LA ESMERALDA COLOMBIANA
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs uppercase font-serif tracking-[0.3em] text-slate-600 border-b border-amber-600/40 pb-1 inline-block">
                  CERTIFICADO OFICIAL DE ACREDITACIÓN ACADÉMICA
                </span>
              </div>
            </div>

            {/* Main Statement */}
            <div className="text-center space-y-4 my-6">
              <p className="text-xs sm:text-sm font-serif italic text-slate-700">
                Por cuanto ha completado satisfactoriamente los módulos teóricos, microscópicos y prácticos correspondientes, se otorga la presente distinción a:
              </p>

              {/* Student Name */}
              <div className="py-2 border-b-2 border-emerald-900/40 inline-block min-w-[360px] max-w-full">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 font-emerald-heading tracking-wide">
                  {studentName || 'NOMBRE DEL ESTUDIANTE'}
                </h2>
                <p className="text-xs text-slate-600 font-mono mt-1">
                  Documento de Identificación: <span className="font-semibold text-slate-900">{studentId || 'No registrado'}</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm font-serif italic text-slate-700 max-w-xl mx-auto leading-relaxed">
                Por haber acreditado con honores y rigor gemológico el programa formativo de:
              </p>

              {/* Course Track Title */}
              <div className="p-3 bg-emerald-950 text-amber-300 rounded-lg shadow-inner max-w-2xl mx-auto border border-amber-500/50">
                <h3 className="text-base sm:text-lg font-bold font-emerald-heading tracking-wide">
                  {selectedTrack}
                </h3>
                <p className="text-[11px] text-emerald-200 mt-0.5">
                  Intensidad: {hours} horas académicas acreditadas (Programa Completo de 120H) • {honorGrade}
                </p>
              </div>

              <p className="text-[11px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Acreditando conocimientos en génesis hidrotermal sedimentaria, identificación de inclusiones trifásicas colombianas (halita, salmuera, CO2), espectroscopía de tratamientos con aceite de cedro natural vs resinas, anatomía de la talla esmeralda con chaflanes protectores y trazabilidad minera formal RUCOM.
              </p>
            </div>

            {/* Footer with Signatures, QR and Official Seal */}
            <div className="grid grid-cols-3 items-end pt-8 mt-6 border-t border-amber-600/30 text-center gap-4">
              
              {/* Signature 1 */}
              <div className="space-y-1">
                <div className="font-serif italic text-base sm:text-lg text-emerald-950 border-b border-slate-700 pb-1 max-w-[180px] mx-auto">
                  Jair Restaura
                </div>
                <p className="text-[11px] font-bold text-slate-900 font-emerald-heading">Jair Restaura</p>
                <p className="text-[9px] text-slate-600">Director General & Consultor Gemológico</p>
                <p className="text-[8px] text-slate-500">Academia Esmeraldera Jairrestaura</p>
              </div>

              {/* Center Wax / Gold Seal & QR */}
              <div className="flex flex-col items-center justify-center space-y-1">
                {qrCodeDataUrl ? (
                  <img 
                    src={qrCodeDataUrl} 
                    alt="Código QR de Verificación" 
                    className="w-16 h-16 rounded border border-amber-600/40 p-0.5 bg-white"
                  />
                ) : (
                  <div className="w-16 h-16 rounded bg-slate-200 animate-pulse"></div>
                )}
                <span className="text-[8px] font-mono font-bold text-emerald-950 tracking-wider">
                  REGISTRO: {serial}
                </span>
                <span className="text-[8px] text-slate-500">
                  Verificación Digital Inmediata
                </span>
              </div>

              {/* Signature 2 */}
              <div className="space-y-1">
                <div className="font-serif italic text-base sm:text-lg text-emerald-950 border-b border-slate-700 pb-1 max-w-[180px] mx-auto">
                  Comité Científico
                </div>
                <p className="text-[11px] font-bold text-slate-900 font-emerald-heading">Comité Académico Gemológico</p>
                <p className="text-[9px] text-slate-600">Área de Cristalografía & Tallas</p>
                <p className="text-[8px] text-slate-500">Bogotá D.C. • {issueDate}</p>
              </div>

            </div>

            {/* Bottom Disclaimer */}
            <div className="text-center mt-6 pt-3 border-t border-slate-200 text-[8px] text-slate-500">
              Certificado emitido por ESMERALDA INTELIGENTE JAIRRESTAURA con fines de educación técnica libre, fomento formativo y excelencia gemológica (No constituye título profesional universitario formal con tarjeta profesional de educación superior).
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
