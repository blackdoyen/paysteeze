import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { X } from 'lucide-react';

const FloatingEffects = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl animate-float" />
    <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl animate-float-delayed" />
  </div>
);

const GrainOverlay = () => (
  <div className="pointer-events-none absolute inset-0 z-30 opacity-5">
    <div className="absolute h-full w-full">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          filter: 'contrast(150%) brightness(120%)',
        }}
      />
    </div>
  </div>
);

export function Footer() {
  return (
    <footer className="relative bg-white/40 dark:bg-[#0c1317] backdrop-blur-lg py-12 mt-20">
      <FloatingEffects />
      <GrainOverlay />
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              PaySteeze
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Send & Receive Money With WhatsApp.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Features', 'FAQ', 'Support'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: X, label: 'X' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-xs text-gray-600 dark:text-gray-400">
            © 2024 PaySteeze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
