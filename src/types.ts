export interface ProjectItem {
  id: string;
  year: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Metal' | 'Restoration';
  image: string;
  location: string;
  duration: string;
  material: string;
  description: string;
  beforeImage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconType: 'installation' | 'replacement' | 'repair' | 'inspection';
  image: string;
  features: string[];
  startingPrice: string;
  turnaroundTime: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  avatar: string;
  projectType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  serviceType: string;
  propertyType: 'residential' | 'commercial';
  estimatedSqFt: number;
  materialPreference: string;
  timeline: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  notes?: string;
}
