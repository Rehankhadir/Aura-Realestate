import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LeadPopup } from './components/LeadPopup';
import { CompareModal } from './components/CompareModal';

// Views
import { Home } from './views/Home';
import { Properties } from './views/Properties';
import { PropertyDetail } from './views/PropertyDetail';
import { About } from './views/About';
import { Services } from './views/Services';
import { Locations } from './views/Locations';
import { Blog } from './views/Blog';
import { Testimonials } from './views/Testimonials';
import { Contact } from './views/Contact';

import { PROPERTIES, Property } from './data/properties';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  
  // State for Wishlist & Compare
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState<boolean>(false);

  // Scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedPropertyId]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id: string) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 properties simultaneously.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareList((prev) => prev.filter((item) => item !== id));
  };

  // Get data for compare modal
  const comparedProperties: Property[] = PROPERTIES.filter((p) => compareList.includes(p.id));

  // Render view router
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedPropertyId={setSelectedPropertyId}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            compareList={compareList}
            toggleCompare={toggleCompare}
          />
        );
      case 'properties':
        return (
          <Properties
            setCurrentPage={setCurrentPage}
            setSelectedPropertyId={setSelectedPropertyId}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            compareList={compareList}
            toggleCompare={toggleCompare}
          />
        );
      case 'property-detail':
        return (
          <PropertyDetail
            propertyId={selectedPropertyId}
            setCurrentPage={setCurrentPage}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        );
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'locations':
        return <Locations />;
      case 'blog':
        return <Blog />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedPropertyId={setSelectedPropertyId}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            compareList={compareList}
            toggleCompare={toggleCompare}
          />
        );
    }
  };

  return (
    <div className="bg-stone-50 font-sans text-stone-800">
      {/* Universal Sticky Navbar */}
      <Navbar
        currentPage={currentPage === 'property-detail' ? 'properties' : currentPage}
        setCurrentPage={(page) => {
          setCurrentPage(page);
          setSelectedPropertyId(null);
        }}
        wishlistCount={wishlist.length}
        compareCount={compareList.length}
        openCompare={() => setCompareOpen(true)}
      />

      {/* Dynamic Viewport */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      {/* Universal Footer */}
      <Footer
        setCurrentPage={(page) => {
          setCurrentPage(page);
          setSelectedPropertyId(null);
        }}
      />

      {/* Sticky Quick Channels */}
      <WhatsAppButton />
      <LeadPopup />

      {/* Cross-Property Comparator */}
      <CompareModal
        isOpen={compareOpen}
        onClose={() => setCompareOpen(false)}
        properties={comparedProperties}
        removeFromCompare={removeFromCompare}
      />
    </div>
  );
}
