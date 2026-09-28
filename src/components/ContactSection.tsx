import React from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, FREQUENT_QUESTIONS, getWhatsAppUrl } from '../data/companyData';

interface ContactSectionProps {
  initialService?: string;
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section id="contactos" className="py-12 sm:py-16 lg:py-24 relative border-t border-white/10">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1B3E]/70 border border-[#00C896]/30 text-[#00C896] text-xs font-bold uppercase tracking-widest shadow-md">
            Canais de Comunicação
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight font-['Outfit']">
            Entre em Contacto com a LetUs DEV
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/80">
            Estamos prontos para analisar os requisitos da sua empresa, desenhar a melhor solução técnica e acelerar os seus resultados.
          </p>
        </div>

      </div>
    </section>
  );
};
