import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-64 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-green-500 dark:text-green-400 text-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp Powered Payments 💸</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 leading-tight">
              Send & Receive Money On WhatsApp
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              Empowering businesses and individuals to transact effortlessly with the world's most popular messaging app ✨
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all text-sm">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all text-gray-800 dark:text-white text-sm">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}