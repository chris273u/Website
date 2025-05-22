import React from 'react';
import { testimonialsData } from '../data/siteData';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  return (
    <section id="udtalelser" className="bg-neutral-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle title="UDTALELSER" titleClassName="text-black" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonialsData.map((testimonial) => (
            <article key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg text-center" aria-label={`Udtalelse fra ${testimonial.author}`}>
              <img 
                src={`${testimonial.imageUrl}&grayscale`} 
                alt={`Portræt af ${testimonial.author}`} 
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-amber-400 object-cover" 
              />
              <blockquote className="text-neutral-700 italic mb-4 text-sm md:text-base">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <h4 className="font-semibold text-neutral-800 font-display-sans">{testimonial.author}</h4>
              {testimonial.company && <p className="text-sm text-amber-600">{testimonial.company}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;