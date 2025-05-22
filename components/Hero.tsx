
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      // Changed height to h-screen. Header is 5rem (h-20) and fixed.
      // flex items-center will vertically center content within the full screen.
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1&grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        {/* Content is vertically centered by parent's flex items-center. 
            Header will float over the top 5rem of this section. */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
          <span className="font-display-serif block mb-2 md:mb-4">VISUEL</span>
          <span className="font-display-sans tracking-wider">FORTÆLLING</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-amber-400 font-display-sans">Professionel videoproduktion der fanger øjeblikket.</p>
      </div>
    </section>
  );
};

export default Hero;