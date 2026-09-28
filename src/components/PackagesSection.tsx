import React from 'react';
import { Check, Sparkles, ArrowRight, Zap, Globe, Rocket, Crown, Code } from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyData';

export const PackagesSection: React.FC = () => {
  const packages = [
    {
      id: 'essencial',
      name: 'Essencial',
      subtitle: 'Para marcas e pequenos negócios',
      price: '500 MT',
      priceNote: 'A partir de',
      perProject: 'Por projecto',
      color: 'purple',
      icon: Code,
      features: [
        'Logo simples/profissional',
        'Cartaz ou flyer',
        'Cartão digital',
        'Menu digital',
        'Até 3 revisões',
        'Ficheiros finais em alta resolução'
      ],
      idealFor: 'pequenos negócios, vendedores, profissionais independentes e eventos.',
      buttonText: 'Começar',
      buttonColor: 'bg-purple-600 hover:bg-purple-500'
    },
    {
      id: 'presenca-digital',
      name: 'Presença Digital',
      subtitle: 'Coloque o seu negócio online',
      price: '4.500 MT',
      priceNote: 'Pagamento único',
      color: 'blue',
      icon: Globe,
      features: [
        'Website profissional',
        'Até 4 páginas',
        'Design personalizado',
        'Responsivo para telemóvel',
        'WhatsApp',
        'Formulário de contacto',
        'Galeria',
        'Google Maps',
        'SEO básico',
        'Publicação do website'
      ],
      note: 'Domínio e hospedagem: pagos pelo cliente.',
      idealFor: 'Salões, Restaurantes, Hotéis, Pequenas empresas, Profissionais, Associações, Portfólios.',
      buttonText: 'Criar Website',
      buttonColor: 'bg-blue-600 hover:bg-blue-500'
    },
    {
      id: 'negocio-digital',
      name: 'Negócio Digital',
      subtitle: 'Mais do que um website digital',
      price: '8.500 MT',
      priceNote: 'Pagamento único',
      popular: true,
      color: 'teal',
      icon: Rocket,
      features: [
        'Até 8 páginas',
        'Catálogo de produtos/serviços',
        'Área administrativa',
        'Gestão de conteúdos',
        'Base de dados',
        'Formulários avançados',
        'WhatsApp integrado',
        'Estatísticas básicas',
        'SEO',
        'Optimização mobile',
        '30 dias de suporte após entrega'
      ],
      includes: 'Inclui tudo do Presença Digital +',
      idealFor: 'Empresas que querem começar a gerir parte do negócio digitalmente.',
      buttonText: 'Quero este plano',
      buttonColor: 'bg-teal-500 hover:bg-teal-400'
    },
    {
      id: 'gestao-continua',
      name: 'Gestão Contínua',
      subtitle: 'Nós tratamos da parte digital',
      price: '1.500 MT',
      priceNote: '/mês',
      subPrice: 'Mensal',
      activation: 'Activação: 4.500 MT',
      color: 'purple-dark',
      icon: Crown,
      features: [
        'Website profissional',
        'Hospedagem',
        'SSL',
        'Domínio*',
        'Manutenção',
        'Actualizações',
        'Backup',
        'Pequenas alterações',
        'Suporte prioritário',
        'Monitorização',
        'Email profissional',
        'Actualização de conteúdos'
      ],
      note: '* Dependendo da extensão e das condições do domínio.',
      idealFor: 'Você trata do seu negócio',
      buttonText: 'Falar Conosco',
      buttonColor: 'bg-purple-600 hover:bg-purple-500'
    }
  ];

  const getColorClasses = (color: string, isPopular: boolean = false) => {
    const colors = {
      purple: {
        bg: 'bg-purple-950/40',
        border: isPopular ? 'border-purple-500/50' : 'border-purple-500/30',
        iconBg: 'bg-purple-600/20',
        iconColor: 'text-purple-400',
        priceColor: 'text-purple-400'
      },
      blue: {
        bg: 'bg-blue-950/40',
        border: isPopular ? 'border-blue-500/50' : 'border-blue-500/30',
        iconBg: 'bg-blue-600/20',
        iconColor: 'text-blue-400',
        priceColor: 'text-blue-400'
      },
      teal: {
        bg: 'bg-teal-950/40',
        border: isPopular ? 'border-teal-500' : 'border-teal-500/30',
        iconBg: 'bg-teal-600/20',
        iconColor: 'text-teal-400',
        priceColor: 'text-teal-400'
      },
      'purple-dark': {
        bg: 'bg-purple-950/40',
        border: isPopular ? 'border-purple-500/50' : 'border-purple-500/30',
        iconBg: 'bg-purple-600/20',
        iconColor: 'text-purple-400',
        priceColor: 'text-purple-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="pacotes" className="py-12 sm:py-16 lg:py-24 relative border-t border-white/10">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Outfit']">
            Nossos <span className="text-[#00C896]">Planos</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            Soluções digitais para diferentes momentos do seu negócio.
          </p>
        </div>

        {/* 4 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            const colors = getColorClasses(pkg.color, pkg.popular);
            const Icon = pkg.icon;
            
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 flex flex-col border-2 ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${pkg.popular ? 'shadow-2xl shadow-teal-500/20' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <Icon className={`w-12 h-12 ${colors.iconColor}`} />
                </div>

                {/* Name & Subtitle */}
                <h3 className="text-xl font-black text-white mb-1 font-['Outfit']">
                  {pkg.name}
                </h3>
                <p className="text-xs text-white/60 mb-4">
                  {pkg.subtitle}
                </p>

                {/* Price */}
                <div className="mb-4">
                  {pkg.priceNote && (
                    <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                      {pkg.priceNote}
                    </div>
                  )}
                  <div className={`text-3xl font-black ${colors.priceColor} font-['Outfit']`}>
                    {pkg.price}
                  </div>
                  {pkg.perProject && (
                    <div className="text-xs text-white/50 mt-1">
                      {pkg.perProject}
                    </div>
                  )}
                  {pkg.subPrice && (
                    <div className="text-xs text-white/50 mt-1">
                      {pkg.subPrice}
                    </div>
                  )}
                </div>

                {/* Activation Fee */}
                {pkg.activation && (
                  <div className="mb-4 p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs text-white/70 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" />
                      {pkg.activation}
                    </div>
                  </div>
                )}

                {/* Includes Note */}
                {pkg.includes && (
                  <div className="mb-3 text-xs font-bold text-teal-400">
                    {pkg.includes}
                  </div>
                )}

                {/* Features */}
                <div className="flex-1 mb-6 space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/70">
                      <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                {pkg.note && (
                  <div className="mb-4 p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-[10px] text-white/50 leading-relaxed">
                      {pkg.note}
                    </p>
                  </div>
                )}

                {/* Ideal For */}
                {pkg.idealFor && (
                  <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                      Ideal para:
                    </div>
                    <p className="text-xs text-white/70">
                      {pkg.idealFor}
                    </p>
                  </div>
                )}

                {/* Button */}
                <a
                  href={getWhatsAppUrl(`Olá! Tenho interesse no plano ${pkg.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 px-4 rounded-xl ${pkg.buttonColor} text-white font-bold text-sm text-center transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  <span>{pkg.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
