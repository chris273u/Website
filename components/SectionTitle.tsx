
import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
  titleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '', titleClassName = '' }) => {
  return (
    <div className={`py-8 text-center ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-display-sans font-semibold tracking-tight ${titleClassName}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
