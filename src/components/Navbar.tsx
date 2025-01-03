import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Send className="w-6 h-6 text-green-500" />
            <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
              PaySteeze
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" onClick={handleNavClick} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500">Home</a>
            <a href="#features" onClick={handleNavClick} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500">Features</a>
            <a href="#pricing" onClick={handleNavClick} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500">Pricing</a>
            <a href="#faq" onClick={handleNavClick} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500">FAQs</a>
            <a href="#about" onClick={handleNavClick} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500">About Us</a>
            <a href="#contact" onClick={handleNavClick} className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-500">Contact</a>
            <ThemeToggle />
            <button className="px-4 py-1.5 text-sm bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="p-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/10 rounded-lg">Home</a>
            <a href="#features" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/10 rounded-lg">Features</a>
            <a href="#pricing" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/10 rounded-lg">Pricing</a>
            <a href="#faq" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/10 rounded-lg">FAQs</a>
            <a href="#about" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/10 rounded-lg">About Us</a>
            <a href="#contact" onClick={handleNavClick} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/10 rounded-lg">Contact</a>
            <div className="px-4">
              <button className="w-full px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}