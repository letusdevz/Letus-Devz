export type Language = 'pt' | 'en' | 'fr';

export interface Translations {
  // Navbar
  navHome: string;
  navServices: string;
  navAbout: string;
  navPackages: string;
  navContact: string;
  navTalkToUs: string;

  // Hero Section
  heroSlogan: string;
  heroTagline: string;
  heroCtaStart: string;
  heroCtaLearn: string;
  heroSoftwareEngineering: string;
  heroWebsitesAndSystems: string;
  heroSecureData: string;
  heroLocalSupport: string;

  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  servicesLearnMore: string;

  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutHeadline: string;
  aboutIntro: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutMissionTitle: string;
  aboutMissionDesc: string;
  aboutVisionTitle: string;
  aboutVisionDesc: string;
  aboutTeamTitle: string;
  aboutValuesTitle: string;
  
  // Values
  valueProximity: string;
  valueProximityDesc: string;
  valueSimplicity: string;
  valueSiplicityDesc: string;
  valueHonor: string;
  valueHonorDesc: string;
  valueWork: string;
  valueWorkDesc: string;
  valueRespect: string;
  valueRespectDesc: string;
  valueCommitment: string;
  valueCommitmentDesc: string;

  // Stats
  statFocusLocal: string;
  statFocusLocalDetail: string;
  statAreas: string;
  statAreasDetail: string;
  statResponse: string;
  statResponseDetail: string;
  statQuality: string;
  statQualityDetail: string;

  // Packages Section
  packagesTitle: string;
  packagesSubtitle: string;
  packagesDelivery: string;
  packagesIdealFor: string;
  packagesPopular: string;

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactMessage: string;
  contactSend: string;
  contactLocation: string;
  contactWorkingHours: string;
  contactFollowUs: string;
  contactInfo: string;

  // Footer
  footerAbout: string;
  footerAboutText: string;
  footerQuickLinks: string;
  footerContact: string;
  footerRights: string;
  footerDevelopedBy: string;

  // Common
  close: string;
  readMore: string;
  benefits: string;
}

export const translations: Record<Language, Translations> = {
  pt: {
    // Navbar
    navHome: 'Início',
    navServices: 'Serviços',
    navAbout: 'Sobre Nós',
    navPackages: 'Pacotes',
    navContact: 'Contacto',
    navTalkToUs: 'Fale Connosco',

    // Hero Section
    heroSlogan: 'Engenharia de Software & Soluções Digitais para Moçambique',
    heroTagline: 'Transformamos ideias e processos em soluções de software de alto impacto.',
    heroCtaStart: 'Comece Seu Projeto',
    heroCtaLearn: 'Explorar Serviços',
    heroSoftwareEngineering: 'Engenharia de Software em Moçambique',
    heroWebsitesAndSystems: 'Sites e Sistemas',
    heroSecureData: 'Dados Seguros',
    heroLocalSupport: 'Suporte Local',

    // Services Section
    servicesTitle: 'Nossos Serviços',
    servicesSubtitle: 'Soluções digitais que fazem a diferença',
    servicesLearnMore: 'Ver Detalhes',

    // About Section
    aboutTitle: 'Sobre a LETUS DEV',
    aboutSubtitle: 'Quem Somos e O Que Nos Move',
    aboutHeadline: 'Uma equipa jovem, determinada e focada.',
    aboutIntro: 'Nascemos para transformar a tecnologia em Moçambique. Somos jovens, mas sérios com o que fazemos.',
    aboutParagraph1: 'Acreditamos que toda empresa merece ter ferramentas digitais que funcionem de verdade, sem complicação.',
    aboutParagraph2: 'Não fazemos só sites e sistemas. Construímos soluções que resolvem problemas reais do dia a dia.',
    aboutMissionTitle: 'Nossa Missão',
    aboutMissionDesc: 'Ajudar empresas moçambicanas a crescer através da tecnologia. Criar soluções digitais que realmente fazem diferença no dia a dia dos negócios.',
    aboutVisionTitle: 'Nossa Visão',
    aboutVisionDesc: 'Ser reconhecidos pela qualidade do nosso trabalho e pela forma como tratamos os nossos clientes. Queremos crescer junto com as empresas que confiam em nós.',
    aboutTeamTitle: 'Nossa Equipa',
    aboutValuesTitle: 'Nossos Valores',

    // Values
    valueProximity: 'Proximidade',
    valueProximityDesc: 'Ouvimos ativamente, compreendemos a fundo a realidade de cada negócio e mantemos canais de diálogo direto e constante com os nossos clientes.',
    valueSimplicity: 'Simplicidade',
    valueSiplicityDesc: 'Transformamos problemas operacionais intrincados em interfaces intuitivas, código elegante e fluxos de trabalho descomplicados.',
    valueHonor: 'Honra',
    valueHonorDesc: 'Agimos com total verdade em orçamentos, prazos e integridade técnica. A nossa palavra e o respeito à confidencialidade são sagrados.',
    valueWork: 'Trabalho',
    valueWorkDesc: 'Colocamos paixão, esforço contínuo e disciplina em cada linha de código, teste e implementação que realizamos.',
    valueRespect: 'Respeito',
    valueRespectDesc: 'Cultivamos uma cultura de respeito mútuo com clientes, utilizadores finais, colegas e toda a comunidade tecnológica.',
    valueCommitment: 'Compromisso',
    valueCommitmentDesc: 'Assumimos a responsabilidade do início ao fim. O sucesso do projeto do nosso cliente é a medida máxima do nosso sucesso.',

    // Stats
    statFocusLocal: 'Foco Local',
    statFocusLocalDetail: 'Conhecemos o mercado moçambicano',
    statAreas: 'Áreas',
    statAreasDetail: 'Software, Dados, Design e Suporte',
    statResponse: 'Resposta Rápida',
    statResponseDetail: 'Estamos sempre disponíveis',
    statQuality: 'Qualidade',
    statQualityDetail: 'Código limpo e bem feito',

    // Packages Section
    packagesTitle: 'Pacotes e Planos',
    packagesSubtitle: 'Escolha o plano ideal para o seu negócio',
    packagesDelivery: 'Entrega',
    packagesIdealFor: 'Ideal Para',
    packagesPopular: 'Mais Recomendado',

    // Contact Section
    contactTitle: 'Entre em Contacto',
    contactSubtitle: 'Vamos conversar sobre o seu projeto',
    contactName: 'Nome Completo',
    contactEmail: 'E-mail',
    contactPhone: 'Telefone (Opcional)',
    contactMessage: 'Descreva brevemente o seu projeto ou necessidade',
    contactSend: 'Enviar Mensagem',
    contactLocation: 'Localização',
    contactWorkingHours: 'Horário',
    contactFollowUs: 'Siga-nos',
    contactInfo: 'Contacto',

    // Footer
    footerAbout: 'Sobre LETUS DEV',
    footerAboutText: 'Engenharia de software e soluções digitais para empresas moçambicanas que querem crescer com tecnologia de qualidade.',
    footerQuickLinks: 'Links Rápidos',
    footerContact: 'Contacto',
    footerRights: 'Todos os direitos reservados.',
    footerDevelopedBy: 'Desenvolvido com',

    // Common
    close: 'Fechar',
    readMore: 'Ler Mais',
    benefits: 'Benefícios',
  },

  en: {
    // Navbar
    navHome: 'Home',
    navServices: 'Services',
    navAbout: 'About Us',
    navPackages: 'Packages',
    navContact: 'Contact',
    navTalkToUs: 'Talk to Us',

    // Hero Section
    heroSlogan: 'Software Engineering & Digital Solutions for Mozambique',
    heroTagline: 'We transform ideas and processes into high-impact software solutions.',
    heroCtaStart: 'Start Your Project',
    heroCtaLearn: 'Explore Services',
    heroSoftwareEngineering: 'Software Engineering in Mozambique',
    heroWebsitesAndSystems: 'Websites & Systems',
    heroSecureData: 'Secure Data',
    heroLocalSupport: 'Local Support',

    // Services Section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Digital solutions that make a difference',
    servicesLearnMore: 'View Details',

    // About Section
    aboutTitle: 'About LETUS DEV',
    aboutSubtitle: 'Who We Are and What Drives Us',
    aboutHeadline: 'A young, determined and focused team.',
    aboutIntro: 'We were born to transform technology in Mozambique. We are young, but serious about what we do.',
    aboutParagraph1: 'We believe every company deserves digital tools that truly work, without complications.',
    aboutParagraph2: 'We don\'t just build websites and systems. We create solutions that solve real day-to-day problems.',
    aboutMissionTitle: 'Our Mission',
    aboutMissionDesc: 'To help Mozambican companies grow through technology. Create digital solutions that truly make a difference in business operations.',
    aboutVisionTitle: 'Our Vision',
    aboutVisionDesc: 'To be recognized for the quality of our work and how we treat our clients. We want to grow together with the companies that trust us.',
    aboutTeamTitle: 'Our Team',
    aboutValuesTitle: 'Our Values',

    // Values
    valueProximity: 'Proximity',
    valueProximityDesc: 'We listen actively, deeply understand each business reality, and maintain direct and constant dialogue channels with our clients.',
    valueSimplicity: 'Simplicity',
    valueSiplicityDesc: 'We transform intricate operational problems into intuitive interfaces, elegant code, and uncomplicated workflows.',
    valueHonor: 'Honor',
    valueHonorDesc: 'We act with total truth in budgets, deadlines, and technical integrity. Our word and respect for confidentiality are sacred.',
    valueWork: 'Work',
    valueWorkDesc: 'We put passion, continuous effort, and discipline into every line of code, test, and implementation we perform.',
    valueRespect: 'Respect',
    valueRespectDesc: 'We cultivate a culture of mutual respect with clients, end users, colleagues, and the entire technology community.',
    valueCommitment: 'Commitment',
    valueCommitmentDesc: 'We take responsibility from start to finish. Our client\'s project success is the ultimate measure of our success.',

    // Stats
    statFocusLocal: 'Local Focus',
    statFocusLocalDetail: 'We know the Mozambican market',
    statAreas: 'Areas',
    statAreasDetail: 'Software, Data, Design and Support',
    statResponse: 'Fast Response',
    statResponseDetail: 'We are always available',
    statQuality: 'Quality',
    statQualityDetail: 'Clean and well-written code',

    // Packages Section
    packagesTitle: 'Packages & Plans',
    packagesSubtitle: 'Choose the ideal plan for your business',
    packagesDelivery: 'Delivery',
    packagesIdealFor: 'Ideal For',
    packagesPopular: 'Most Recommended',

    // Contact Section
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s talk about your project',
    contactName: 'Full Name',
    contactEmail: 'Email',
    contactPhone: 'Phone (Optional)',
    contactMessage: 'Briefly describe your project or need',
    contactSend: 'Send Message',
    contactLocation: 'Location',
    contactWorkingHours: 'Working Hours',
    contactFollowUs: 'Follow Us',
    contactInfo: 'Contact',

    // Footer
    footerAbout: 'About LETUS DEV',
    footerAboutText: 'Software engineering and digital solutions for Mozambican companies that want to grow with quality technology.',
    footerQuickLinks: 'Quick Links',
    footerContact: 'Contact',
    footerRights: 'All rights reserved.',
    footerDevelopedBy: 'Developed with',

    // Common
    close: 'Close',
    readMore: 'Read More',
    benefits: 'Benefits',
  },

  fr: {
    // Navbar
    navHome: 'Accueil',
    navServices: 'Services',
    navAbout: 'À Propos',
    navPackages: 'Forfaits',
    navContact: 'Contact',
    navTalkToUs: 'Parlez-nous',

    // Hero Section
    heroSlogan: 'Ingénierie Logicielle & Solutions Numériques pour le Mozambique',
    heroTagline: 'Nous transformons les idées et les processus en solutions logicielles à fort impact.',
    heroCtaStart: 'Démarrez Votre Projet',
    heroCtaLearn: 'Explorer les Services',
    heroSoftwareEngineering: 'Ingénierie Logicielle au Mozambique',
    heroWebsitesAndSystems: 'Sites Web & Systèmes',
    heroSecureData: 'Données Sécurisées',
    heroLocalSupport: 'Support Local',

    // Services Section
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Solutions numériques qui font la différence',
    servicesLearnMore: 'Voir les Détails',

    // About Section
    aboutTitle: 'À Propos de LETUS DEV',
    aboutSubtitle: 'Qui Nous Sommes et Ce Qui Nous Motive',
    aboutHeadline: 'Une équipe jeune, déterminée et concentrée.',
    aboutIntro: 'Nous sommes nés pour transformer la technologie au Mozambique. Nous sommes jeunes, mais sérieux dans ce que nous faisons.',
    aboutParagraph1: 'Nous croyons que chaque entreprise mérite des outils numériques qui fonctionnent vraiment, sans complications.',
    aboutParagraph2: 'Nous ne créons pas seulement des sites web et des systèmes. Nous construisons des solutions qui résolvent de vrais problèmes quotidiens.',
    aboutMissionTitle: 'Notre Mission',
    aboutMissionDesc: 'Aider les entreprises mozambicaines à croître grâce à la technologie. Créer des solutions numériques qui font vraiment la différence dans les opérations commerciales.',
    aboutVisionTitle: 'Notre Vision',
    aboutVisionDesc: 'Être reconnus pour la qualité de notre travail et la façon dont nous traitons nos clients. Nous voulons grandir avec les entreprises qui nous font confiance.',
    aboutTeamTitle: 'Notre Équipe',
    aboutValuesTitle: 'Nos Valeurs',

    // Values
    valueProximity: 'Proximité',
    valueProximityDesc: 'Nous écoutons activement, comprenons profondément la réalité de chaque entreprise et maintenons des canaux de dialogue directs et constants avec nos clients.',
    valueSimplicity: 'Simplicité',
    valueSiplicityDesc: 'Nous transformons les problèmes opérationnels complexes en interfaces intuitives, code élégant et flux de travail simplifiés.',
    valueHonor: 'Honneur',
    valueHonorDesc: 'Nous agissons avec une totale vérité dans les budgets, les délais et l\'intégrité technique. Notre parole et le respect de la confidentialité sont sacrés.',
    valueWork: 'Travail',
    valueWorkDesc: 'Nous mettons passion, effort continu et discipline dans chaque ligne de code, test et implémentation que nous réalisons.',
    valueRespect: 'Respect',
    valueRespectDesc: 'Nous cultivons une culture de respect mutuel avec les clients, les utilisateurs finaux, les collègues et toute la communauté technologique.',
    valueCommitment: 'Engagement',
    valueCommitmentDesc: 'Nous prenons nos responsabilités du début à la fin. Le succès du projet de notre client est la mesure ultime de notre succès.',

    // Stats
    statFocusLocal: 'Focus Local',
    statFocusLocalDetail: 'Nous connaissons le marché mozambicain',
    statAreas: 'Domaines',
    statAreasDetail: 'Logiciels, Données, Design et Support',
    statResponse: 'Réponse Rapide',
    statResponseDetail: 'Nous sommes toujours disponibles',
    statQuality: 'Qualité',
    statQualityDetail: 'Code propre et bien écrit',

    // Packages Section
    packagesTitle: 'Forfaits & Plans',
    packagesSubtitle: 'Choisissez le plan idéal pour votre entreprise',
    packagesDelivery: 'Livraison',
    packagesIdealFor: 'Idéal Pour',
    packagesPopular: 'Plus Recommandé',

    // Contact Section
    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Parlons de votre projet',
    contactName: 'Nom Complet',
    contactEmail: 'E-mail',
    contactPhone: 'Téléphone (Optionnel)',
    contactMessage: 'Décrivez brièvement votre projet ou besoin',
    contactSend: 'Envoyer le Message',
    contactLocation: 'Localisation',
    contactWorkingHours: 'Horaires',
    contactFollowUs: 'Suivez-nous',
    contactInfo: 'Contact',

    // Footer
    footerAbout: 'À Propos de LETUS DEV',
    footerAboutText: 'Ingénierie logicielle et solutions numériques pour les entreprises mozambicaines qui veulent croître avec une technologie de qualité.',
    footerQuickLinks: 'Liens Rapides',
    footerContact: 'Contact',
    footerRights: 'Tous droits réservés.',
    footerDevelopedBy: 'Développé avec',

    // Common
    close: 'Fermer',
    readMore: 'Lire Plus',
    benefits: 'Avantages',
  },
};
