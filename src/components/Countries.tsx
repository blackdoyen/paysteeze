import React from 'react';

const countries = [
  {
    name: 'Nigeria',
    flag: '🇳🇬',
    code: 'NG'
  },
  {
    name: 'Ghana',
    flag: '🇬🇭',
    code: 'GH'
  },
  {
    name: 'South Africa',
    flag: '🇿🇦',
    code: 'ZA'
  },
  {
    name: 'Kenya',
    flag: '🇰🇪',
    code: 'KE'
  }
];

export function Countries() {
  return (
    <section className="py-16 px-4" id="countries">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
          Supported Countries
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {countries.map((country) => (
            <div key={country.code} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-center">
              <div className="text-4xl mb-2">{country.flag}</div>
              <div className="text-sm font-medium dark:text-white">{country.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}