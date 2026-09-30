import React from 'react';
import { PageId } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProgramsPreview } from '../components/home/ProgramsPreview';
import { FacilitiesSection } from '../components/home/FacilitiesSection';
import { MembershipPreview } from '../components/home/MembershipPreview';
import { TrainersPreview } from '../components/home/TrainersPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: (preselectedProgram?: string) => void;
  onOpenLightbox: (index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenTrialModal,
  onOpenLightbox,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onNavigate={onNavigate} onOpenTrialModal={() => onOpenTrialModal()} />
      <StatsSection />
      <AboutPreview onNavigate={onNavigate} onOpenTrialModal={() => onOpenTrialModal()} />
      <WhyChooseUs />
      <ProgramsPreview onNavigate={onNavigate} onOpenTrialModal={onOpenTrialModal} />
      <FacilitiesSection />
      <MembershipPreview onNavigate={onNavigate} onOpenTrialModal={onOpenTrialModal} />
      <TrainersPreview onNavigate={onNavigate} onOpenTrialModal={onOpenTrialModal} />
      <TestimonialsSection />
      <GalleryPreview onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />
      <FAQSection onNavigate={onNavigate} />
      <FinalCTASection onNavigate={onNavigate} onOpenTrialModal={() => onOpenTrialModal()} />
    </div>
  );
};
