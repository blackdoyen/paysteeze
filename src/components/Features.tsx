import React from 'react';
import { 
  Timer, 
  Globe2, 
  ShieldCheck, 
  Smartphone, 
  MessagesSquare, 
  Sparkles 
} from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: "Instant Transactions",
    description: "Send and receive money instantly through WhatsApp"
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Transfer money to and from anyone in Africa with ease"
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    description: "Advanced encryption keeps your funds safe"
  },
  {
    icon: Smartphone,
    title: "No Bank Needed",
    description: "No bank accounts or cards needed - just WhatsApp"
  },
  {
    icon: MessagesSquare,
    title: "Easy to Use",
    description: "Simply message to make payments instantly"
  },
  {
    icon: Sparkles,
    title: "Lightning Fast",
    description: "Seamless transactions with minimal waiting time"
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            Why PaySteeze?
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Experience the future of money transfers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-4 rounded-lg bg-white/5 border border-green-500/20 hover:border-green-500 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:border-green-500/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <feature.icon className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;