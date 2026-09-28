import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  HeartHandshake, 
  CheckCircle2, 
  Target, 
  Compass, 
  ArrowRight,
  Award
} from 'lucide-react';
import { 
  COMPANY_STORY, 
  MISSION_VISION, 
  COMPANY_VALUES, 
  TEAM_MEMBERS 
} from '../data/companyData';
import { TeamMember } from '../types';

interface AboutSectionProps {
  onOpenContact: () => void;
  onSelectMemberForContact?: (member: TeamMember) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact, onSelectMemberForContact }) => {
  const [activeSubTab, setActiveSubTab] = useState<'todos' | 'quem-somos' | 'missao-visao' | 'valores' | 'equipa'>('todos');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Map icon name to lucide component
  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-[#00C896]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#00C896]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#00C896]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#00C896]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#00C896]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#00C896]" />;
      default: return <Award className="w-6 h-6 text-[#00C896]" />;
    }
  };

  const scrollToSubSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-24 relative border-t border-white/10">
      
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00C896]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2563EB]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1B3E]/60 border border-[#00C896]/40 text-[#00C896] text-xs font-bold uppercase tracking-widest shadow-md backdrop-blur-sm">
            Conheça a LETUS DEV
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight font-['Outfit']">
            Sobre a Nossa Empresa
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/80">
            Conheça a nossa história, os pilares que guiam a nossa engenharia, os valores que defendemos e as pessoas que tornam cada linha de código realidade.
          </p>

          {/* Quick Sub-Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => {
                setActiveSubTab('todos');
                scrollToSubSection('sobre-quem-somos');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeSubTab === 'todos'
                  ? 'bg-[#00C896] text-[#0D1B3E] shadow-lg shadow-[#00C896]/20'
                  : 'bg-[#0D1B3E]/60 border border-white/20 text-white hover:text-[#00C896] hover:border-[#00C896]/40'
              }`}
            >
              Visão Geral
            </button>
            <button
              onClick={() => {
                setActiveSubTab('quem-somos');
                scrollToSubSection('sobre-quem-somos');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeSubTab === 'quem-somos'
                  ? 'bg-[#00C896] text-[#0D1B3E] shadow-lg shadow-[#00C896]/20'
                  : 'bg-[#0D1B3E]/60 border border-white/20 text-white hover:text-[#00C896] hover:border-[#00C896]/40'
              }`}
            >
              1. Quem Somos
            </button>
            <button
              onClick={() => {
                setActiveSubTab('missao-visao');
                scrollToSubSection('sobre-missao-visao');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeSubTab === 'missao-visao'
                  ? 'bg-[#00C896] text-[#0D1B3E] shadow-lg shadow-[#00C896]/20'
                  : 'bg-[#0D1B3E]/60 border border-white/20 text-white hover:text-[#00C896] hover:border-[#00C896]/40'
              }`}
            >
              2. Missão, Visão & Valores
            </button>
            <button
              onClick={() => {
                setActiveSubTab('equipa');
                scrollToSubSection('sobre-equipa');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeSubTab === 'equipa'
                  ? 'bg-[#00C896] text-[#0D1B3E] shadow-lg shadow-[#00C896]/20'
                  : 'bg-[#0D1B3E]/60 border border-white/20 text-white hover:text-[#00C896] hover:border-[#00C896]/40'
              }`}
            >
              3. Nossa Equipa
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 1. QUEM SOMOS */}
        {/* ------------------------------------------------------------- */}
        <div id="sobre-quem-somos" className="scroll-mt-28 mb-12 sm:mb-16 lg:mb-24">
          <div className="bg-[#0D1B3E]/70 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B3E]/80 border border-[#00C896]/30 text-[#00C896] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#00b386]" />
                  1. Quem Somos
                </div>

                <h3 className="text-xl sm:text-3xl lg:text-5xl font-black text-white leading-[1.1] font-['Outfit'] tracking-tight">
                  Uma equipa jovem, determinada e focada.
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-[#00C896] font-bold leading-relaxed">
                  {COMPANY_STORY.intro}
                </p>

                <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
                  {COMPANY_STORY.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#sobre-equipa"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00C896] hover:bg-[#00b386] text-[#0D1B3E] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#00C896]/20 transition-colors"
                  >
                    <Users className="w-4 h-4" />
                    <span>Ver Membros da Equipa</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 2. NOSSA MISSÃO / VISÃO / VALORES */}
        {/* ------------------------------------------------------------- */}
        <div id="sobre-missao-visao" className="scroll-mt-28 mb-12 sm:mb-16 lg:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B3E]/80 border border-[#00C896]/30 text-[#00C896] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00b386]" />
              2. Missão, Visão & Valores
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white font-['Outfit'] tracking-tight">
              O Que Nos Move
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-white/80">
              Como trabalhamos e no que acreditamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Missão Card */}
            <div className="bg-[#0D1B3E]/70 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-[#00C896]/50 transition-all duration-300 relative overflow-hidden group shadow-xl">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-12 h-12 sm:w-14 sm:h-14 text-[#00C896] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-4 font-['Outfit']">
                {MISSION_VISION.mission.title}
              </h4>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {MISSION_VISION.mission.description}
              </p>
            </div>

            {/* Visão Card */}
            <div className="bg-[#0D1B3E]/70 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-[#2563EB]/50 transition-all duration-300 relative overflow-hidden group shadow-xl">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Compass className="w-12 h-12 sm:w-14 sm:h-14 text-[#2563EB] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-4 font-['Outfit']">
                {MISSION_VISION.vision.title}
              </h4>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {MISSION_VISION.vision.description}
              </p>
            </div>

            {/* Valores Card - UM ÚNICO BANNER */}
            <div id="sobre-valores" className="bg-[#0D1B3E]/70 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-[#00C896]/50 transition-all duration-300 relative overflow-hidden group shadow-xl">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Award className="w-12 h-12 sm:w-14 sm:h-14 text-[#00C896] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-4 font-['Outfit']">
                Nossos Valores
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C896] mt-1.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    <span className="font-bold text-white">Proximidade:</span> Diálogo, escuta, empatia.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C896] mt-1.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    <span className="font-bold text-white">Simplicidade:</span> Intuitivo, elegante, descomplicado.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C896] mt-1.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    <span className="font-bold text-white">Honra:</span> Verdade, integridade, confidencialidade.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C896] mt-1.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    <span className="font-bold text-white">Trabalho:</span> Paixão, disciplina, esforço.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C896] mt-1.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    <span className="font-bold text-white">Respeito:</span> Mútuo, consideração, empatia.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C896] mt-1.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    <span className="font-bold text-white">Compromisso:</span> Responsabilidade, foco, resultado.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. NOSSA EQUIPA 👥 */}
        {/* ------------------------------------------------------------- */}
        <div id="sobre-equipa" className="scroll-mt-28">
          <div className="bg-[#0D1B3E]/70 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 lg:mb-12 space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B3E]/80 border border-[#00C896]/30 text-[#00C896] text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#00C896]" />
                4. Nossa Equipa
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-5xl font-black text-white font-['Outfit'] tracking-tight">
                Engenheiros & Criadores por Trás da LETUS DEV
              </h3>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  id={`team-card-${member.id}`}
                  className="bg-[#071525]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00C896]/50 transition-all duration-300 flex flex-col group shadow-xl"
                >
                  {/* Photo com cargo no canto inferior esquerdo */}
                  <div className="relative aspect-square overflow-hidden bg-[#0D1B3E]/60">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent" />
                    
                    {/* Cargo no canto inferior esquerdo */}
                    {member.role && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-xs font-bold text-[#00C896] bg-[#0D1B3E]/90 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-[#00C896]/30 shadow-lg">
                          {member.role}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Box */}
                  <div className="p-6 flex flex-col items-center text-center space-y-4">
                    <h4 className="text-lg font-black text-white group-hover:text-[#00C896] transition-colors font-['Outfit']">
                      {member.name}
                    </h4>

                    {/* Redes Sociais */}
                    <div className="flex items-center justify-center gap-3">
                      {member.whatsapp && (
                        <a
                          href={`https://wa.me/${member.whatsapp}`}
                          target="_blank"
                          rel="noreferrer"
                          title="WhatsApp"
                          className="hover:scale-110 transition-transform"
                        >
                          <img src="/Logo/icones/Sappicon.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                        </a>
                      )}
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noreferrer"
                          title="Facebook"
                          className="hover:scale-110 transition-transform"
                        >
                          <img src="/Logo/icones/FBicon.png" alt="Facebook" className="w-6 h-6 object-contain" />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noreferrer"
                          title="Instagram"
                          className="hover:scale-110 transition-transform"
                        >
                          <img src="/Logo/icones/IGicon.png" alt="Instagram" className="w-6 h-6 object-contain" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Callout Banner */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-[#18181B] to-[#121214] border border-[#00C896]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#00C896]" />
                  Deseja contactar a LETUS DEV para os seus serviços?
                </div>
              </div>
              <button
                onClick={onOpenContact}
                className="shrink-0 px-6 py-3 rounded-xl bg-[#00C896] hover:bg-[#00b386] text-[#0D1B3E] font-black text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                Entrar em Contacto
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0D1B3E]/95 border border-[#00C896]/30 rounded-3xl max-w-lg w-full p-6 sm:p-7 space-y-6 animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
            <div className="flex items-start gap-4">
              <img
                src={selectedMember.photoUrl}
                alt={selectedMember.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-2xl object-cover border border-[#00C896]/30 shadow-md"
              />
              <div className="flex-1">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#00C896] bg-[#0D1B3E]/80 px-2 py-0.5 rounded border border-[#00C896]/30">
                  {selectedMember.category}
                </span>
                <h4 className="text-xl font-black text-white mt-1 font-['Outfit']">{selectedMember.name}</h4>
                <div className="text-xs font-bold text-[#00C896] uppercase tracking-wider">{selectedMember.role}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-white/60">Biografia & Atuação</div>
              <p className="text-sm text-white/80 leading-relaxed bg-[#071525]/80 p-4 rounded-xl border border-white/10">
                {selectedMember.bio}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-white/60">Competências Técnicas</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedMember.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-[#071525]/80 text-[#00C896] px-2.5 py-1 rounded-lg border border-white/10 font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2.5 rounded-xl bg-[#0D1B3E]/60 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider border border-white/10"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setSelectedMember(null);
                  onOpenContact();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#00C896] text-[#0D1B3E] font-black text-xs uppercase tracking-wider hover:bg-[#00b386] shadow-md"
              >
                Falar com {selectedMember.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
