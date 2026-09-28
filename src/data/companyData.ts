import { CompanyValue, PricingPackage, ServiceTrack, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'LETUS DEV',
  slogan: 'Engenharia de Software & Soluções Digitais para Moçambique',
  heroTagline: 'Transformamos ideias e processos em soluções de software de alto impacto.',
  location: 'Inhambane, Moçambique (Atendimento Presencial e Remoto em todo o País)',
  whatsapp: '+258879079814',
  whatsappDisplay: '+258 87 907 9814',
  phone: '+258 87 907 9814',
  email: '@letusdev.mz',
  commercialEmail: 'comercial@letusdev.mz',
  workingHours: 'Segunda a Sexta: 08h00 - 18h00 | Suporte de Emergência 24/7',
};

export const getWhatsAppUrl = (message: string = 'Olá LETUS DEV! Gostaria de falar sobre soluções de software e tecnologia para a minha empresa.') => {
  const cleanPhone = COMPANY_INFO.whatsapp.replace(/\+/g, '').replace(/\s+/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

export const COMPANY_STORY = {
  headline: 'Uma equipa jovem, determinada e focada.',
  intro: 'Nascemos para transformar a tecnologia em Moçambique. Somos jovens, mas sérios com o que fazemos.',
  paragraphs: [
    'Acreditamos que toda empresa merece ter ferramentas digitais que funcionem de verdade, sem complicação.',
    'Não fazemos só sites e sistemas. Construímos soluções que resolvem problemas reais do dia a dia.'
  ],
  stats: [
    { value: '100%', label: 'Foco Local', detail: 'Conhecemos o mercado moçambicano' },
    { value: '4+', label: 'Áreas', detail: 'Software, Dados, Design e Suporte' },
    { value: '< 2h', label: 'Resposta Rápida', detail: 'Estamos sempre disponíveis' },
    { value: '100%', label: 'Qualidade', detail: 'Código limpo e bem feito' },
  ]
};

export const MISSION_VISION = {
  mission: {
    title: 'Nossa Missão',
    description: 'Ajudar empresas moçambicanas a crescer através da tecnologia. Criar soluções digitais que realmente fazem diferença no dia a dia dos negócios.',
    points: []
  },
  vision: {
    title: 'Nossa Visão',
    description: 'Ser reconhecidos pela qualidade do nosso trabalho e pela forma como tratamos os nossos clientes. Queremos crescer junto com as empresas que confiam em nós.',
    points: []
  }
};

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: 'proximidade',
    title: 'Proximidade',
    subtitle: 'Lado a lado com cada parceiro',
    description: 'Ouvimos ativamente, compreendemos a fundo a realidade de cada negócio e mantemos canais de diálogo direto e constante com os nossos clientes.',
    iconName: 'Users',
    tag: ''
  },
  {
    id: 'simplicidade',
    title: 'Simplicidade',
    subtitle: 'Menos complexidade, mais eficácia',
    description: 'Transformamos problemas operacionais intrincados em interfaces intuitivas, código elegante e fluxos de trabalho descomplicados.',
    iconName: 'Sparkles',
    tag: ''
  },
  {
    id: 'honra',
    title: 'Honra',
    subtitle: 'Ética e transparência inegociáveis',
    description: 'Agimos com total verdade em orçamentos, prazos e integridade técnica. A nossa palavra e o respeito à confidencialidade são sagrados.',
    iconName: 'ShieldCheck',
    tag: ''
  },
  {
    id: 'trabalho',
    title: 'Trabalho',
    subtitle: 'Dedicação e rigor de engenharia',
    description: 'Colocamos paixão, esforço contínuo e disciplina em cada linha de código, teste e implementação que realizamos.',
    iconName: 'Cpu',
    tag: ''
  },
  {
    id: 'respeito',
    title: 'Respeito',
    subtitle: 'Valorização de pessoas e ideias',
    description: 'Cultivamos uma cultura de respeito mútuo com clientes, utilizadores finais, colegas e toda a comunidade tecnológica.',
    iconName: 'HeartHandshake',
    tag: ''
  },
  {
    id: 'compromisso',
    title: 'Compromisso',
    subtitle: 'Responsabilidade com o resultado',
    description: 'Assumimos a responsabilidade do início ao fim. O sucesso do projeto do nosso cliente é a medida máxima do nosso sucesso.',
    iconName: 'CheckCircle2',
    tag: ''
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'edilson-chipanela',
    name: 'Edilson João Chipanela',
    role: 'Presidente',
    category: 'Gestão',
    bio: 'Lidera a visão estratégica e o crescimento da LETUS DEV.',
    skills: ['Gestão Estratégica', 'Liderança', 'Desenvolvimento de Negócios'],
    photoUrl: '/Logo/Perfil/perfil.jpg',
    whatsapp: '258843900000',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'hermenio-vilanculos',
    name: 'Herménio Rodrigues Vilanculos',
    role: 'Diretor das Finanças',
    category: 'Engenharia',
    bio: 'Engenheiro apaixonado por arquiteturas escaláveis e desenvolvimento web.',
    skills: ['TypeScript', 'React / Next.js', 'Node.js', 'PostgreSQL'],
    photoUrl: '/Logo/Perfil/perfil.jpg',
    whatsapp: '258843900001',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'vice-presidente',
    name: 'Silêndia Egídio Bráz Vilanculo',
    role: 'Vice-Presidente',
    category: 'Gestão',
    bio: 'Suporta a liderança estratégica e coordenação operacional.',
    skills: ['Gestão', 'Coordenação', 'Estratégia'],
    photoUrl: '/Logo/Perfil/perfil.jpg',
    whatsapp: '258843900002',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'director-marketing',
    name: 'Alladim Dinis de Jesus António Paiva',
    role: 'Diretor de Marketing',
    category: 'Marketing',
    bio: 'Responsável pela estratégia de marketing e comunicação.',
    skills: ['Marketing Digital', 'Branding', 'Comunicação'],
    photoUrl: '/Logo/Perfil/perfil.jpg',
    whatsapp: '258843900003',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'director-projecto',
    name: 'Pedro Monteiro Junior',
    role: 'Director de Projecto e Gestor Operativo',
    category: 'Gestão',
    bio: 'Gere projectos e operações do dia-a-dia.',
    skills: ['Gestão de Projectos', 'Operações', 'Liderança'],
    photoUrl: '/Logo/Perfil/perfil.jpg',
    whatsapp: '258843900004',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'designer-media',
    name: 'Sucessão de Fortunato Maque Zunguze',
    role: 'Designer e Media',
    category: 'Design',
    bio: 'Cria conteúdo visual e gere a presença digital.',
    skills: ['Design Gráfico', 'Social Media', 'Conteúdo Visual'],
    photoUrl: '/Logo/Perfil/perfil.jpg',
    whatsapp: '258843900005',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  }
];

export const SERVICES_LIST: ServiceTrack[] = [
  {
    id: 'websites-institucionais',
    title: 'Websites Institucionais',
    shortDesc: 'Apresente sua empresa com profissionalismo. Sites multipáginas que contam sua história e vendem sua marca.',
    fullDesc: 'Desenvolvemos websites institucionais completos que representam sua empresa com profissionalismo. Sites multipáginas modernos e responsivos, otimizados para contar sua história, apresentar seus serviços e fortalecer sua marca no mercado.',
    iconName: 'Code2',
    benefits: [
      'Design moderno e profissional que reflete sua marca',
      'Múltiplas páginas para apresentar toda sua empresa',
      'Responsivo para todos os dispositivos',
      'Otimizado para motores de busca (SEO)'
    ]
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    shortDesc: 'Páginas focadas em conversão. Ideais para lançamentos, promoções ou produtos específicos.',
    fullDesc: 'Criamos landing pages de alta conversão focadas em um único objetivo: transformar visitantes em clientes. Ideais para campanhas de marketing, lançamento de produtos, eventos especiais ou promoções.',
    iconName: 'Laptop',
    benefits: [
      'Design focado em conversão',
      'Ideal para campanhas de marketing',
      'Formulários otimizados',
      'Integração com ferramentas de análise'
    ]
  },
  {
    id: 'portfolios',
    title: 'Portfólios Profissionais',
    shortDesc: 'Mostre seu trabalho para o mundo. Galeria de projetos otimizada para freelancers e criativos.',
    fullDesc: 'Desenvolvemos portfólios profissionais que destacam seu trabalho e talentos. Perfeito para fotógrafos, designers, arquitetos, artistas e profissionais criativos que querem impressionar clientes com uma apresentação visual impactante.',
    iconName: 'Database',
    benefits: [
      'Galeria visual otimizada',
      'Apresentação profissional do seu trabalho',
      'Fácil atualização de projetos',
      'Design que destaca sua criatividade'
    ]
  },
  {
    id: 'manutencao-suporte',
    title: 'Manutenção e Suporte',
    shortDesc: 'Não se preocupe com problemas técnicos. Oferecemos suporte contínuo e atualizações.',
    fullDesc: 'Garantimos que seu site esteja sempre funcionando perfeitamente. Oferecemos manutenção preventiva, atualizações de segurança, backups automáticos e suporte técnico dedicado para resolver qualquer problema rapidamente.',
    iconName: 'ShieldAlert',
    benefits: [
      'Monitorização 24/7 do seu site',
      'Backups automáticos diários',
      'Atualizações de segurança',
      'Suporte técnico rápido via WhatsApp'
    ]
  },
  {
    id: 'design-grafico',
    title: 'Designer Gráfico',
    shortDesc: 'Destaque sua marca com designs profissionais. Logotipos, cardápios digitais, cartazes e convites que impressionam.',
    fullDesc: 'Criamos designs gráficos que destacam sua marca e comunicam sua mensagem com impacto. Desde logotipos memoráveis até materiais promocionais, cardápios digitais, cartazes para eventos e convites personalizados.',
    iconName: 'Palette',
    benefits: [
      'Logotipos profissionais e memoráveis',
      'Cardápios digitais modernos para restaurantes',
      'Cartazes e flyers para eventos',
      'Convites personalizados para ocasiões especiais'
    ]
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pacote-start',
    name: 'Pacote Start',
    tagline: 'Presença Digital & Essencial',
    badge: 'Mais Acessível',
    priceMzn: 'Sob Consulta / Acessível',
    deliveryTime: '1 a 2 semanas',
    description: 'Ideal para profissionais liberais, pequenos negócios e startups que necessitam de uma presença online profissional, rápida e com impacto imediato.',
    idealFor: 'Pequenos negócios, consultores, prestadores de serviços e novas startups.',
    features: [
      'Website Institucional responsivo (1 a 5 páginas)',
      'Otimizado para telemóveis, tablets e computadores',
      'Integração direta com botão WhatsApp e Formulário de Contacto',
      'Otimização básica para motores de busca (SEO Local)',
      'Configuração de E-mails profissionais (@suaempresa.mz)',
      '1 mês de suporte técnico e garantia incluídos'
    ],
    ctaText: 'Solicitar Pacote Start'
  },
  {
    id: 'pacote-pro',
    name: 'Pacote Profissional',
    tagline: 'Sistemas & Crescimento Empresarial',
    badge: 'Mais Recomendado',
    isPopular: true,
    priceMzn: 'Personalizado / Alto Valor',
    deliveryTime: '3 a 5 semanas',
    description: 'Perfeito para empresas estabelecidas que precisam de sistemas de gestão internos, portais interativos ou soluções com integração de pagamentos locais.',
    idealFor: 'Empresas em expansão, comércio, escolas, clínicas e prestadores de serviços.',
    features: [
      'Aplicação Web ou Portal Corporativo completo',
      'Painel Administrativo personalizado para gestão de conteúdos/pedidos',
      'Integração de pagamentos móveis (M-Pesa / E-Mola / Cartões)',
      'Base de dados estruturada e gestão de utilizadores com perfis',
      'Dashboard analítico básico com métricas essenciais',
      'Design UI/UX exclusivo e protótipo interativo prévio',
      '3 meses de suporte técnico e monitorização ativa'
    ],
    ctaText: 'Solicitar Pacote Profissional'
  },
  {
    id: 'pacote-enterprise',
    name: 'Pacote Enterprise',
    tagline: 'Engenharia Sob Medida & Escala',
    badge: 'Máximo Desempenho',
    priceMzn: 'Orçamento Sob Medida',
    deliveryTime: 'Conforme Escopo',
    description: 'Solução sob medida de engenharia de software complexa, gestão massiva de dados, integrações avançadas de sistemas e suporte técnico prioritário.',
    idealFor: 'Grandes organizações, instituições financeiras, operadoras e empresas com fluxos complexos.',
    features: [
      'Arquitetura de software sob medida para alta disponibilidade',
      'Módulos avançados de ERP/CRM e inteligência de dados (BI)',
      'Integração via APIs com múltiplos sistemas legados e terceiros',
      'Infraestrutura Cloud de alto desempenho com alta segurança',
      'Backups redundantes diários e plano de continuidade de negócio',
      'Treinamento presencial/remoto para a equipa interna',
      'Suporte técnico prioritário com SLA dedicado 24/7'
    ],
    ctaText: 'Solicitar Proposta Enterprise'
  }
];

export const FREQUENT_QUESTIONS = [
  {
    question: 'Onde está localizada a LETUS DEV?',
    answer: 'A nossa sede de engenharia fica em Inhambane, Moçambique. Atendemos clientes em todo o território moçambicano e regional através de métodos modernos de colaboração presencial e remota.'
  },
  {
    question: 'Como funciona o processo de desenvolvimento de um projeto?',
    answer: 'Trabalhamos de forma transparente e ágil: 1) Diagnóstico e levantamento das necessidades; 2) Proposta técnica e protótipo visual; 3) Desenvolvimento e testes rigorosos; 4) Lançamento e treinamento; 5) Acompanhamento e suporte contínuo.'
  },
  {
    question: 'É possível integrar pagamentos moçambicanos como M-Pesa e E-Mola?',
    answer: 'Sim! Desenvolvemos integrações completas e seguras com APIs de M-Pesa, E-Mola e sistemas bancários locais para cobranças automáticas e validação de pagamentos.'
  },
  {
    question: 'Como posso obter um orçamento para a minha empresa?',
    answer: 'Pode clicar no botão "Fale Connosco", preencher o formulário ou enviar-nos uma mensagem direta pelo WhatsApp. Analisamos os seus requisitos e respondemos prontamente em menos de 24 horas.'
  }
];
