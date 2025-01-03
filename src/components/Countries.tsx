import React from 'react';

const countries = [
  {
    name: 'Nigeria',
    flagUrl: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/ng.svg",
    code: 'NG'
  },
  {
    name: 'Ghana',
    flagUrl: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/gh.svg",
    code: 'GH'
  },
  {
    name: 'South Africa',
    flagUrl: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/za.svg",
    code: 'ZA'
  },
  {
    name: 'Kenya',
    flagUrl: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/ke.svg",
    code: 'KE'
  }
];

export function Countries() {
  return (
    <section className="py-12 px-4" id="countries">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
          Available In
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {countries.map((country) => (
            <div 
              key={country.code} 
              className="group relative p-4 rounded-lg bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300 dark:bg-white/5"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 overflow-hidden rounded-md">
                  <img 
                    src={country.flagUrl} 
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {country.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;