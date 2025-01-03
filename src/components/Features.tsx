import React from 'react';
import { Zap, Globe, Shield, Smartphone, MessageCircle, Clock } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Instant Transactions",
    description: "Send and receive money instantly through WhatsApp."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Transfer money to and from anyone in Africa with ease."
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Advanced encryption and WhatsApp's built-in security features keep your funds safe."
  },
  {
    icon: Smartphone,
    title: "No Bank Needed",
    description: "No need for bank accounts, credit cards, or apps. Just WhatsApp!"
  },
  {
    icon: MessageCircle,
    title: "Easy to Use",
    description: "Simply message to make payments – no technical expertise needed."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience seamless transactions with minimal waiting time."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
            Why PaySteeze?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Experience the future of money transfers with these amazing features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
            >
              <feature.icon className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}