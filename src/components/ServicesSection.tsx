import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Laptop
} from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { ServiceTrack } from '../types';
import softwareIcon from '../assets/Software.png';
import designIcon from '../assets/design.png';
import suporteIcon from '../assets/Suporte.png';

interface ServicesSectionProps {
  onOpenContactWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceTrack | null>(null);

  // Esconder/mostrar navbar quando modal abre/fecha
  React.useEffect(() => {
    const navbar = document.getElementById('main-navbar');
    if (selectedService && navbar) {
      navbar.style.display = 'none';
    } else if (navbar) {
      navbar.style.display = 'block';
    }
  }, [selectedService]);

  const renderServiceIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const iconMap: { [key: string]: string } = {
      'Code2': softwareIcon,
      'Palette': designIcon,
      'ShieldAlert': suporteIcon,
      'Database': softwareIcon,
      'Laptop': softwareIcon
    };
    
    const iconSrc = iconMap[iconName] || softwareIcon;
    return <img src={iconSrc} alt={iconName} className={className + ' object-contain'} />;
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-24 relative border-t border-white/10">
      
      {/* Subtle Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1B3E]/70 border border-[#00C896]/30 text-[#00C896] text-xs font-bold uppercase tracking-widest shadow-md">
            Nossos Serviços de Engenharia
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight font-['Outfit']">
            Nossos Serviços
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              onClick={() => setSelectedService(srv)}
              className="cursor-pointer rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 flex flex-col justify-between border bg-[#0D1B3E]/70 border-white/10 hover:border-[#00C896]/50 hover:bg-[#0D1B3E]/60 hover:scale-[1.02] shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center text-[#00C896]">
                    {renderServiceIcon(srv.iconName, 'w-16 h-16')}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 text-center font-['Outfit'] group-hover:text-[#00C896] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed text-center mb-6">
                  {srv.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#00C896] group-hover:text-sky-300 transition-colors">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal/Pop-up de Detalhes do Serviço */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-[#0D1B3E]/95 border border-[#00C896]/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center text-[#00C896]">
                  {renderServiceIcon(selectedService.iconName, 'w-12 h-12')}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C896]">
                    Área de Especialização
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Benefícios */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Benefícios Chave para o seu Negócio
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#071525]/80 border border-white/10 text-xs sm:text-sm text-white/80 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00C896] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenContactWithService(selectedService.title);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#00C896] hover:bg-sky-400 text-[#0D1B3E] font-black text-sm uppercase tracking-wider shadow-lg shadow-[#00C896]/20 transition-all"
                >
                  <Sparkles className="w-4 h-4 stroke-[2.5]" />
                  <span>Pedir Proposta</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-4 rounded-xl bg-[#071525]/80 hover:bg-[#071525] text-white/80 hover:text-white font-bold text-sm uppercase tracking-wider border border-white/10 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
