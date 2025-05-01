
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import FacultySection from '@/components/FacultySection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <FacultySection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Admin Link */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link 
          to="/admin/login" 
          className="bg-gray-800 text-white text-xs px-3 py-2 rounded-md opacity-50 hover:opacity-100 transition-opacity"
        >
          Admin Access
        </Link>
      </div>
    </div>
  );
};

export default Index;
