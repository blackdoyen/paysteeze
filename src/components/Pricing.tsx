import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Send up to $100/day',
      'Basic support',
      'Standard processing time',
      'Basic analytics'
    ]
  },
  {
    name: 'Pro',
    price: '$9.99/mo',
    features: [
      'Send up to $1,000/day',
      'Priority support',
      'Faster processing',
      'Advanced analytics',
      'Custom branding'
    ]
  },
  {
    name: 'Business',
    price: '$29.99/mo',
    features: [
      'Unlimited transfers',
      '24/7 support',
      'Instant processing',
      'Full analytics suite',
      'API access',
      'Multiple team members'
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-16 px-4" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{plan.name}</h3>
              <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
                {plan.price}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}