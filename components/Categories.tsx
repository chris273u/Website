import React from 'react';
import { categoriesData } from '../data/siteData'; // Updated import
import SectionTitle from './SectionTitle';

const Categories: React.FC = () => {
  return (
    <section id="kategorier" className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle title="KATEGORIER" titleClassName="text-white" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {categoriesData.map((category) => (
            <a // Changed div to a for navigation
              key={category.id}
              href={`#/kategori/${encodeURIComponent(category.name)}`} // Link to category page
              className="group relative aspect-video overflow-hidden border-2 border-neutral-700 hover:border-amber-500 transition-colors duration-300 cursor-pointer block" // Added block for <a> styling
              role="group"
              aria-label={`Kategori: ${category.name}`}
            >
              <img 
                src={`${category.imageUrl}&grayscale`} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 font-display-sans tracking-wide text-center">
                  {category.name.toUpperCase()}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;