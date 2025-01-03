import React from 'react';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-lg py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">PaySteeze</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Revolutionizing money transfers through WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="#" className="hover:text-green-500">About Us</a></li>
              <li><a href="#" className="hover:text-green-500">Features</a></li>
              <li><a href="#" className="hover:text-green-500">FAQ</a></li>
              <li><a href="#" className="hover:text-green-500">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 dark:text-white">Legal</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-500">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 dark:text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-500 dark:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500 dark:text-gray-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500 dark:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 PaySteeze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}