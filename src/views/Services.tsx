import React from 'react';
import { Home, DollarSign, Scale, Paintbrush, ShieldAlert, Award } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceItems = [
    {
      icon: <Home className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />,
      title: 'Property Acquisition',
      desc: 'Exclusive offline search matching buyers with discrete trophy assets worldwide.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />,
      title: 'Disposition Strategy',
      desc: 'Maximizing returns through cinematic visual marketing and high-net network exposure.'
    },
    {
      icon: <Scale className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />,
      title: 'Wealth & Tax Advisory',
      desc: 'Leveraging real estate structures to protect and optimize generational family wealth.'
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />,
      title: 'Bespoke Interior Consulting',
      desc: 'Partnering with globally acclaimed decorators for luxurious finishes.'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 pt-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">What We Offer</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 mb-2">
            Bespoke Solutions for the Modern Investor
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-medium">
            Tailored real estate services spanning acquisitions, appraisals, tax frameworks, and luxury interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {serviceItems.map((item, index) => (
            <div key={index} className="bg-white border border-stone-200/80 rounded-lg p-6 hover:border-amber-600/30 transition-all duration-300 flex items-start space-x-4 shadow-sm">
              {item.icon}
              <div>
                <h3 className="font-serif text-base font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature section */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-xl">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-2 flex items-center space-x-1.5">
              <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>Institutional Grade Appraisals</span>
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
              Avoid overpaying or under-pricing. Our proprietary analytics track luxury market volatility, historical land yields, and building depreciation to extract real underlying asset values.
            </p>
            <ul className="space-y-1 text-stone-700 text-xs font-semibold">
              <li className="flex items-center space-x-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Certified Global Appraisers</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Hyper-Local Market Analytics</span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex items-center justify-center">
            <div className="text-center bg-stone-50 border border-stone-150 rounded-lg p-6 w-full max-w-xs shadow-inner">
              <p className="font-serif text-3xl font-bold text-stone-900">$500B+</p>
              <p className="text-stone-400 text-[9px] font-bold uppercase tracking-widest mt-1">Analyzed Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
