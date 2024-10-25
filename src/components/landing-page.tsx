'use client';

import HomeSection from './HomeSection';
import ServicesSection from './ServiceSection';
import AboutSection from './AboutSection';
import SolutionsSection from './SolutionsSection';
import ProcessSection from './ProcessSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Header from './Header';
// Aquí puedes agregar otras secciones

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Header/>
      <main>
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <SolutionsSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
        {/* Otras secciones aquí */}
      </main>
    </div>
  );
}
