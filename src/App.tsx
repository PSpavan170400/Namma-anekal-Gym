import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { TrainersPage } from './pages/TrainersPage';
import { MembershipPage } from './pages/MembershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { TrialModal } from './components/common/TrialModal';
import { Lightbox } from './components/common/Lightbox';
import { galleryItemsData, gymInfo } from './data/gymData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [trialModalOpen, setTrialModalOpen] = useState<boolean>(false);
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>(undefined);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState<number>(0);

  // Sync with URL hash for browser history & bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = ['home', 'about', 'programs', 'trainers', 'membership', 'gallery', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page Title and Meta for SEO
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: `${gymInfo.name} | Independent Strength & Performance Gym`,
      about: `About Our Gym & Ethos | ${gymInfo.name}`,
      programs: `Training Programs & Disciplines | ${gymInfo.name}`,
      trainers: `Master Coaching Staff & Trainers | ${gymInfo.name}`,
      membership: `Membership Plans & Transparent Rates | ${gymInfo.name}`,
      gallery: `Facility Gallery & Equipment Tour | ${gymInfo.name}`,
      contact: `Location, Hours & Free Trial | ${gymInfo.name}`,
    };

    const pageDescriptions: Record<PageId, string> = {
      home: "Austin's premier independent athletic club featuring competition barbell platforms, 40-yard turf track, certified CSCS coaches, and infrared recovery.",
      about: `Learn about the founding story, equipment standards, and community culture of ${gymInfo.name}. Built by lifters for serious trainees.`,
      programs: "Explore 6 dedicated training pathways: Strength, Weight Training, Hypertrophy, Cardio, Functional Turf, and 1-on-1 Personal Coaching.",
      trainers: "Meet our collegiate and Olympic-certified master coaches specializing in barbell mechanics, movement analysis, and sports nutrition.",
      membership: "Transparent month-to-month gym memberships with zero cancellation fees, no hidden maintenance charges, and free guest passes.",
      gallery: "Take a visual tour inside our 18,000 sq. ft. athletic facility, powerlifting racks, sprint track, and contrast cold plunges.",
      contact: `Get directions, operating hours, direct WhatsApp support, and book your 1-day free trial pass to ${gymInfo.name}.`,
    };

    document.title = pageTitles[currentPage] || `${gymInfo.name}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescriptions[currentPage] || gymInfo.heroSubheadline);
    }
  }, [currentPage]);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTrialModal = (programTitle?: string) => {
    setPreselectedProgram(programTitle);
    setTrialModalOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxPrev = () => {
    setCurrentLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryItemsData.length - 1));
  };

  const handleLightboxNext = () => {
    setCurrentLightboxIndex((prev) => (prev < galleryItemsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0d10] text-[#eaecef]">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onOpenTrialModal={() => handleOpenTrialModal()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateToPage}
            onOpenTrialModal={handleOpenTrialModal}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateToPage}
            onOpenTrialModal={() => handleOpenTrialModal('General Tour & Trial')}
          />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage
            onNavigate={navigateToPage}
            onOpenTrialModal={handleOpenTrialModal}
          />
        )}
        {currentPage === 'trainers' && (
          <TrainersPage
            onNavigate={navigateToPage}
            onOpenTrialModal={handleOpenTrialModal}
          />
        )}
        {currentPage === 'membership' && (
          <MembershipPage
            onNavigate={navigateToPage}
            onOpenTrialModal={handleOpenTrialModal}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={navigateToPage}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateToPage}
            onOpenTrialModal={() => handleOpenTrialModal()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateToPage}
        onOpenTrialModal={() => handleOpenTrialModal()}
      />

      {/* Free Trial Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        preselectedProgram={preselectedProgram}
      />

      {/* Full-Screen Gallery Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        items={galleryItemsData}
        currentIndex={currentLightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
      />
    </div>
  );
}
