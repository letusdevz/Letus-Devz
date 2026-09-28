import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { PricingPackage, TeamMember } from './types';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';
import { LanguageProvider } from './i18n/LanguageContext';
import fundoImageDesktop from './assets/images/Fundoo.png';
import fundoImageMobile from './assets/images/fundo2.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('');
  const [selectedPackageForModal, setSelectedPackageForModal] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px é o breakpoint md do Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer or scroll listener for active section highlighting in Navbar
  useEffect(() => {
    const sections = ['inicio', 'sobre', 'servicos', 'pacotes', 'contactos'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContactModal = (service: string = '', pkg: string = '') => {
    setSelectedServiceForModal(service);
    setSelectedPackageForModal(pkg);
    setIsContactModalOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedServiceForModal(pkg.name);
    setSelectedPackageForModal(pkg.name);
    setIsContactModalOpen(true);
  };

  const handleSelectMemberForContact = (member: TeamMember) => {
    setSelectedServiceForModal(`Conversa Técnica com ${member.name}`);
    setIsContactModalOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen text-white flex flex-col selection:bg-[#00C896] selection:text-[#0D1B3E]" style={{background: 'linear-gradient(135deg, #0a2a4a 0%, #0d3b2e 50%, #0a2a4a 100%)', backgroundAttachment: 'fixed'}}>
        
        {/* Top Navbar */}
        <Navbar
          activeSection={activeSection}
          onOpenContact={() => handleOpenContactModal()}
        />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* INÍCIO (Hero, Breve apresentação, Chamada para acção) - SEM FUNDO */}
        <HeroSection
          onOpenContact={() => handleOpenContactModal()}
        />

        {/* Seções com imagem de fundo */}
        <div 
          className="relative"
          style={{
            backgroundImage: `url(${isMobile ? fundoImageMobile : fundoImageDesktop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay escuro para melhorar legibilidade */}
          <div className="absolute inset-0 bg-[#0A0A0B]/45" />
          
          {/* Conteúdo sobre o fundo */}
          <div className="relative z-10">
            {/* SOBRE (Quem Somos, Missão/Visão, Nossos Valores, Nossa Equipa 👥) */}
            <AboutSection
              onOpenContact={() => handleOpenContactModal()}
              onSelectMemberForContact={handleSelectMemberForContact}
            />

            {/* SERVIÇOS (Software & Web, Gestão de Dados, Design, Suporte Técnico) */}
            <ServicesSection
              onOpenContactWithService={(serviceName) => handleOpenContactModal(serviceName)}
            />

            {/* PACOTES (Pacote 1, Pacote 2, Pacote 3) */}
            <PackagesSection />

            {/* CONTACTOS (WhatsApp, Telefone, E-mail, Formulário) */}
            <ContactSection
              initialService={selectedServiceForModal}
              initialPackage={selectedPackageForModal}
            />
          </div>
        </div>

      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenContact={() => handleOpenContactModal()}
      />

      {/* [Fale Connosco] Global Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={selectedServiceForModal}
        defaultPackage={selectedPackageForModal}
      />

    </div>
    </LanguageProvider>
  );
}
