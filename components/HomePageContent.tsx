import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Companies from './Companies';
import ContactForm from './ContactForm';

const HomePageContent: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Portfolio />
      <Testimonials />
      <Companies />
      <ContactForm />
    </>
  );
};

export default HomePageContent;