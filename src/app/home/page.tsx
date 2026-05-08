import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import GuaranteeSection from './components/GuaranteeSection';
import MaterialsSection from './components/MaterialsSection';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import MaintenanceSection from './components/MaintenanceSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-charcoal overflow-x-hidden">
      <Header />
      <HeroSection />
      <GuaranteeSection />
      <MaterialsSection />
      <ProcessSection />
      <ProjectsSection />
      <MaintenanceSection />
      <Footer />
    </main>
  );
}