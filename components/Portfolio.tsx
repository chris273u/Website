import React from 'react';
import { portfolioData } from '../data/siteData'; // Updated import
import SectionTitle from './SectionTitle';
import PlayIcon from './PlayIcon';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle title="PORTFOLIO" titleClassName="text-black" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {portfolioData.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-video overflow-hidden shadow-xl cursor-pointer"
              role="group"
              aria-label={`Portfolio projekt: ${item.title}`}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <PlayIcon className="w-12 h-12 text-white mb-2" />
                  <h3 className="text-lg font-semibold text-white font-display-sans">{item.title}</h3>
                  {item.client && <p className="text-sm text-amber-300">{item.client}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;