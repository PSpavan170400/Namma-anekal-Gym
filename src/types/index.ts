export type PageId = 'home' | 'about' | 'programs' | 'trainers' | 'membership' | 'gallery' | 'contact';

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  intensity: 'High' | 'Moderate to High' | 'Custom / All Levels' | 'Very High';
  duration: string;
  targetAudience: string;
  ctaText: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  certifications: string[];
  biography: string;
  photo: string;
  quote?: string;
  specialties: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  duration: string;
  description: string;
  features: string[];
  excludedFeatures?: string[];
  isRecommended: boolean;
  badge?: string;
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'functional' | 'group' | 'recovery' | 'facility';
  categoryLabel: string;
  image: string;
  aspect?: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  achievement: string;
  rating: number;
  memberSince: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FacilityHighlight {
  id: string;
  title: string;
  description: string;
  specs: string[];
  image: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface TrialFormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  fitnessGoal: string;
  experienceLevel: string;
  notes?: string;
}
