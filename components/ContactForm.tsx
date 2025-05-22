import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic client-side validation example
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      // alert("Udfyld venligst alle felter.");
      return;
    }
    
    // Simulate API call
    console.log('Form data submitted:', formData);
    // Fake delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: ''});
    setTimeout(() => setSubmitStatus(null), 5000); // Reset message after 5 seconds
  };

  return (
    <section id="kontakt" className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl">
        <SectionTitle title="KONTAKT OS" titleClassName="text-white" />
        
        {submitStatus === 'success' && (
          <p role="alert" className="text-center text-green-400 mb-6 p-3 bg-green-900 bg-opacity-50 rounded-md">Tak for din henvendelse! Vi vender tilbage snarest.</p>
        )}
        {submitStatus === 'error' && (
          <p role="alert" className="text-center text-red-400 mb-6 p-3 bg-red-900 bg-opacity-50 rounded-md">Udfyld venligst alle felter korrekt.</p>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 font-display-sans">
              Navn <span className="text-amber-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 font-display-sans">
              Email <span className="text-amber-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Basic email pattern
              className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 font-display-sans">
              Besked <span className="text-amber-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm text-white"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-amber-500 transition-colors duration-300 font-display-sans tracking-wider uppercase"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;