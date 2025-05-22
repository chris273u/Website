import React from 'react';
import { companyLogosData } from '../data/siteData';
import SectionTitle from './SectionTitle';

const Companies: React.FC = () => {
  return (
    <section id="samarbejdspartnere" className="bg-white py-16 px-4 sm:px-6 lg:px-8"> {/* Added ID */}
      <div className="container mx-auto">
        <SectionTitle title="SAMARBEJDSPARTNERE" titleClassName="text-black" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center" role="list" aria-label="Liste over samarbejdspartnere">
          {companyLogosData.map((company) => (
            <div key={company.id} className="flex justify-center items-center p-4" role="listitem">
              <img 
                src={company.logoUrl} 
                alt={`Logo for ${company.name}`}
                className="max-h-12 md:max-h-16 object-contain" 
                title={company.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;