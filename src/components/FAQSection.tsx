import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does PaySteeze work?",
    answer: "PaySteeze integrates directly with WhatsApp. Simply send a message to our verified business account, follow the prompts, and complete your transaction securely. It's as easy as sending a message! 💬"
  },
  {
    question: "Is it secure?",
    answer: "Absolutely! We use bank-grade encryption and comply with international security standards. Your transactions are protected by multiple layers of security, including biometric verification and real-time fraud detection. 🔒"
  },
  {
    question: "What are the transaction fees?",
    answer: "We offer transparent pricing with minimal fees. Standard transfers have a 1% fee, while business accounts enjoy special rates. No hidden charges - what you see is what you pay! 💰"
  },
  {
    question: "Which countries do you support?",
    answer: "PaySteeze is available in over 100 countries worldwide. We're constantly expanding our reach to serve more communities globally! 🌍"
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4" id="faq">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full p-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm font-medium dark:text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-4 transition-all duration-300 ${
                  openIndex === index ? 'pb-4 opacity-100' : 'h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}