import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, Zap, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyData';
import { useLanguage } from '../i18n/LanguageContext';
import phoneScreenImg from '../assets/images/celular.png';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative w-full min-h-screen pt-24 sm:pt-36 pb-12 sm:pb-20 flex items-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,200,150,0.15),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">

          {/* Left Column - FULL WIDTH em mobile, 7 colunas em desktop */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 w-full">

            {/* Tag — mt-2 para descer ~1mm */}
            <div className="mt-2 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D1B3E]/60 border border-[#00C896]/40 text-[#00C896] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C896] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C896]"></span>
              </span>
              <span>{t.heroSlogan}</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 text-white/70 normal-case font-medium">
                <img src="/Logo/icones/localiza,icon.png" alt="Localização" className="w-3.5 h-3.5 object-contain" /> Inhambane
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] font-['Outfit']">
                {t.heroSlogan}
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
                {t.heroTagline}
              </p>
            </div>

            {/* CTAs — apenas "Explorar Serviços" centrado */}
            <div className="flex justify-center pt-1 sm:pt-2">
              <a
                href="#servicos"
                id="hero-cta-explorar-servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0D1B3E]/60 hover:bg-[#0D1B3E]/90 text-white font-black text-sm uppercase tracking-wider border border-[#2563EB]/50 hover:border-[#2563EB] transition-all duration-200 backdrop-blur-sm"
              >
                <span>{t.heroCtaLearn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#00C896] shrink-0" />
                <span className="text-xs sm:text-sm text-white font-semibold">{t.heroWebsitesAndSystems}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span className="text-xs sm:text-sm text-white font-semibold">{t.heroSecureData}</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Zap className="w-5 h-5 text-[#00C896] shrink-0" />
                <span className="text-xs sm:text-sm text-white font-semibold">{t.heroLocalSupport}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone mockup - ESCONDIDO EM MOBILE */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Glow ambiente */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00C896]/25 via-[#2563EB]/20 to-[#00C896]/30 rounded-[3rem] blur-2xl opacity-80 pointer-events-none" />
              
              {/* Container do celular */}
              <div className="relative">
                {/* Imagem do celular (frame) */}
                <img
                  src={phoneScreenImg}
                  alt="LetUs.Dev - Soluções Digitais"
                  referrerPolicy="no-referrer"
                  className="relative w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
