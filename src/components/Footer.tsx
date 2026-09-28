import React from 'react';
import { Terminal, Phone, Mail, MapPin, MessageSquare, ArrowUp, Heart, Github, Linkedin } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 text-white/60 text-sm">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-2">
            <a href="#inicio" className="flex items-center group">
              <img 
                src="/Logo/logo.png" 
                alt="LetUs DEV" 
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </a>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Equipa jovem de engenharia de software focada em soluções digitais inovadoras, ágeis e seguras para modernizar processos em Moçambique.
            </p>

            <div className="pt-1 text-xs text-white/60 space-y-1 font-medium">
              <div className="flex items-center gap-2">
                <img src="/Logo/icones/localiza,icon.png" alt="Localização" className="w-3.5 h-3.5 object-contain" />
                <span>Inhambane, Moçambique</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/Logo/icones/emailicon.png" alt="Email" className="w-3.5 h-3.5 object-contain" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Sobre Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Outfit']">Sobre a Empresa</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li>
                <a href="#sobre-quem-somos" className="text-white/60 hover:text-[#00C896] transition-colors">
                  1. Quem Somos
                </a>
              </li>
              <li>
                <a href="#sobre-missao-visao" className="text-white/60 hover:text-[#00C896] transition-colors">
                  2. Missão, Visão & Valores
                </a>
              </li>
              <li>
                <a href="#sobre-equipa" className="text-[#00C896] font-bold hover:text-teal-300 transition-colors flex items-center gap-1">
                  <span>3. Nossa Equipa</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto & Redes Sociais */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Outfit']">Contacto</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li>
                <a
                  href={getWhatsAppUrl('Olá LetUs DEV! Vi o vosso website.')}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-[#00C896] transition-colors flex items-center gap-2"
                >
                  <img src="/Logo/icones/Sappicon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="pt-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Outfit'] mb-1.5">Siga-nos</h4>
              <div className="flex items-center gap-1.5">
                <a
                  href="https://facebook.com/letusdev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                  title="Facebook"
                >
                  <img src="/Logo/icones/FBicon.png" alt="Facebook" className="w-5 h-5 object-contain" />
                </a>
                <a
                  href="https://instagram.com/letusdev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                  title="Instagram"
                >
                  <img src="/Logo/icones/IGicon.png" alt="Instagram" className="w-5 h-5 object-contain" />
                </a>
                <a
                  href="https://tiktok.com/@letusdev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                  title="TikTok"
                >
                  <img src="/Logo/icones/tiktok icon.png" alt="TikTok" className="w-5 h-5 object-contain" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-white/5 bg-[#040e1a] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-white/60">
            <span>© {new Date().getFullYear()} LetUs DEV.</span>
            <span className="text-white/30">•</span>
            <span className="text-[#00C896] font-medium">Inhambane, MZ 🇲🇿</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <a 
              href="#termos-condicoes" 
              className="text-white/60 hover:text-[#00C896] transition-colors font-medium hover:underline"
            >
              Termos
            </a>
            <span className="text-white/30">•</span>
            <a 
              href="#politica-privacidade" 
              className="text-white/60 hover:text-[#00C896] transition-colors font-medium hover:underline"
            >
              Privacidade
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white/60 hover:text-[#00C896] transition-colors font-bold uppercase tracking-wider text-[10px]"
            >
              <span>Topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
