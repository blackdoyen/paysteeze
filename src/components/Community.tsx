import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Community() {
  return (
    <section className="py-16 px-4 relative overflow-hidden" id="community">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-green-500 dark:text-green-400 text-sm mb-6">
          <MessageCircle className="w-4 h-4 mr-2" />
          <span>Join Our Community 💫</span>
        </div>
        
        <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
          Join the PaySteeze WhatsApp Community
        </h2>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Being a member of the PaySteeze community is a rewarding experience. As a member of our community, you will be the first to know about the latest news, updates, and any other information. Additionally, you get to take part in our exclusive loyalty programs and giveaways.
        </p>
        
        <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-xl hover:scale-105 transition-all">
          Join our community
        </button>
      </div>
    </section>
  );
}