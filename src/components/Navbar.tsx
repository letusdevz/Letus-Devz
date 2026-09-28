import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyData';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: t.navHome, href: '#inicio' },
    { id: 'sobre', label: t.navAbout, href: '#sobre' },
    { id: 'servicos', label: t.navServices, href: '#servicos' },
    { id: 'pacotes', label: t.navPackages, href: '#pacotes' },
    { id: 'contactos', label: t.navContact, href: '#contactos' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a2a4a]/95 backdrop-blur-md border-b border-[#00C896]/30 shadow-xl shadow-black/40 py-2'
          : 'bg-transparent py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#inicio"
            id="brand-logo"
            className="flex items-center group focus:outline-none"
          >
            <img
              src="/Logo/logo.png"
              alt="LetUs DEV"
              className="h-40 md:h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-lg"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#0D1B3E]/80 p-1 rounded-full border border-[#00C896]/30 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#00C896] text-[#0D1B3E] shadow-md shadow-[#00C896]/25'
                      : 'text-white hover:text-[#00C896] hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <a
              id="header-cta-fale-connosco"
              href={getWhatsAppUrl('Olá LETUS DEV! Gostaria de falar sobre soluções de software e tecnologia para a minha empresa.')}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896] hover:bg-[#00b386] text-[#0D1B3E] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#00C896]/30 hover:shadow-[#00C896]/50 transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{t.navTalkToUs}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              id="mobile-fale-connosco-btn"
              href={getWhatsAppUrl('Olá LETUS DEV! Gostaria de falar sobre soluções de software e tecnologia para a minha empresa.')}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#00C896]/20 border border-[#00C896]/40 text-[#00C896] text-xs font-bold uppercase tracking-wider sm:hidden"
            >
              {t.navTalkToUs}
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-[#0D1B3E]/80 border border-[#00C896]/30 text-white hover:text-[#00C896]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a2a4a]/98 backdrop-blur-xl border-b border-[#00C896]/30 px-4 pt-2 pb-4 mt-2 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-3 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#00C896]/20 text-[#00C896] border border-[#00C896]/40'
                      : 'text-white hover:bg-white/10 hover:text-[#00C896]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#00C896]/20 space-y-2">
            <div className="flex justify-center mb-2">
              <LanguageSelector />
            </div>
            <a
              id="mobile-drawer-fale-connosco"
              href={getWhatsAppUrl('Olá LETUS DEV! Gostaria de falar sobre soluções de software e tecnologia para a minha empresa.')}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#00C896] text-[#0D1B3E] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#00C896]/20"
            >
              <MessageSquare className="w-4 h-4 stroke-[2.5]" />
              <span>{t.navTalkToUs}</span>
            </a>

            <div className="flex items-center justify-between px-2 pt-2 text-xs text-white/60">
              <span className="flex items-center gap-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#00C896]" />
                {COMPANY_INFO.whatsappDisplay}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                {COMPANY_INFO.email}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
