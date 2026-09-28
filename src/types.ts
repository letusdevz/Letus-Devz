export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Engenharia' | 'Dados' | 'Design' | 'DevOps' | 'Mobile' | 'Qualidade' | 'Gestão' | 'Marketing';
  bio: string;
  skills: string[];
  photoUrl: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ServiceTrack {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  technologies: string[];
  deliverables: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  priceMzn: string;
  deliveryTime: string;
  description: string;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  packageId?: string;
  budgetRange: string;
  message: string;
}
