import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Countries } from './components/Countries';
import { Pricing } from './components/Pricing';
import { Community } from './components/Community';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300">      
      <Navbar />
      <Hero />
      <Features />
      <Countries />
      <Pricing />
      <Community />
      <FAQSection />
      <Footer />
    </div>
  );
}