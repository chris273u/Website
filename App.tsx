
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContent from './components/HomePageContent';
import CategoryPage from './components/CategoryPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial call to set route

    const isCategoryPage = route.startsWith('#/kategori/');
    const homepageSectionId = (!isCategoryPage && route.length > 2 && route.startsWith('#/')) ? route.substring(2) : null;

    if (isCategoryPage) {
      window.scrollTo(0, 0);
    } else if (homepageSectionId && homepageSectionId !== '/') { 
      setTimeout(() => {
        const element = document.getElementById(homepageSectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100); 
    } else { 
      window.scrollTo(0, 0);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [route]); 

  let pageContent;
  const categoryPageMatch = route.match(/^#\/kategori\/(.+)$/);

  if (categoryPageMatch) {
    const categoryName = decodeURIComponent(categoryPageMatch[1]);
    pageContent = <CategoryPage categoryName={categoryName} />;
  } else {
    pageContent = <HomePageContent />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Removed pt-20 from main. Header is h-20 (5rem). 
          Content like Hero or CategoryPage will need to account for this 
          if their own content shouldn't be overlapped by an opaque header. 
          For Hero, it's fine as it's full screen. 
          CategoryPage and other top-level content sections will need internal padding. */}
      <main className="flex-grow"> 
        {pageContent}
      </main>
      <Footer />
    </div>
  );
};

export default App;