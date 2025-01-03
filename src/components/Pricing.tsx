import React from 'react';
import { ArrowRight, Wallet, Globe2, ShieldCheck, Zap } from 'lucide-react';

export function Pricing() {
  const benefits = [
    {
      icon: Wallet,
      title: "Local Transfers",
      description: "1% fee",
      detail: "Send money locally instantly"
    },
    {
      icon: Globe2,
      title: "International Transfers",
      description: "10% fee",
      detail: "Send money worldwide"
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "No Hidden Fees",
      description: "Pay only for what you transfer, no subscriptions"
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Start sending immediately, no minimum balance"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Simple Transaction Fees
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            No subscriptions or hidden charges
          </p>
        </div>

        {/* Main Fee Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg blur-lg group-hover:blur-xl transition-all" />
              <div className="relative p-6 rounded-lg border border-white/10 bg-black/50 backdrop-blur-xl hover:border-green-500/50 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <benefit.icon className="w-6 h-6 text-green-400" />
                  <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-lg font-bold text-green-400 mb-2">{benefit.description}</p>
                <p className="text-xs text-gray-400">{benefit.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center space-x-3">
              <feature.icon className="w-4 h-4 text-green-400" />
              <div>
                <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                <p className="text-xs text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="group px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-sm text-white font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
            Start Transceiving
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;