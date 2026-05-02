import React, { useState } from 'react';
import { PROPERTIES } from '../data/properties';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { ArrowLeft, MapPin, BedDouble, Bath, Square, Shield, Calendar, Mail, Phone, Download, CheckCircle, Video } from 'lucide-react';

interface PropertyDetailProps {
  propertyId: string | null;
  setCurrentPage: (page: string) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({
  propertyId,
  setCurrentPage,
  wishlist,
  toggleWishlist
}) => {
  const property = PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];
  const [activeImage, setActiveImage] = useState(property.images[0]);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryFormSent, setInquiryFormSent] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    return `$${price.toLocaleString()}`;
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName) {
      setInquiryFormSent(true);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <button
          onClick={() => setCurrentPage('properties')}
          className="flex items-center space-x-1.5 text-stone-500 hover:text-amber-600 transition-colors mb-5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Listings</span>
        </button>

        {/* Title + Price Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="px-2 py-0.5 bg-stone-900 text-white text-[9px] font-bold uppercase rounded tracking-widest shadow-sm">
                {property.status}
              </span>
              <span className="text-amber-600 text-[10px] font-bold uppercase tracking-wider">
                {property.type}
              </span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">{property.title}</h1>
            <p className="flex items-center text-stone-400 text-xs mt-1 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-stone-300" />
              {property.location}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Asking Price</span>
            <p className="text-2xl md:text-4xl font-serif font-bold text-amber-600">
              {formatPrice(property.price)}
              {property.status === 'For Rent' && <span className="text-base font-sans font-normal text-stone-500"> / mo</span>}
            </p>
          </div>
        </div>

        {/* Gallery Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
          <div className="lg:col-span-3 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded border border-stone-200 shadow-sm">
            <img src={activeImage} alt={property.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 h-full">
            {property.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-[16/10] lg:aspect-auto lg:h-full max-h-[140px] overflow-hidden rounded cursor-pointer border ${
                  activeImage === img ? 'border-amber-600 shadow-sm' : 'border-stone-200 hover:border-stone-400'
                } transition-all`}
              >
                <img src={img} alt="Property view" className="w-full h-full object-cover" />
                {activeImage !== img && <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-all" />}
              </div>
            ))}
          </div>
        </div>

        {/* Core details mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Card */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2.5">Description</h3>
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-medium">{property.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-stone-100 text-stone-700 font-semibold">
                {property.beds > 0 && (
                  <div className="flex flex-col">
                    <span className="flex items-center text-amber-600 text-[10px] font-bold uppercase mb-0.5">
                      <BedDouble className="w-3.5 h-3.5 mr-1" /> Beds
                    </span>
                    <span className="text-base font-bold text-stone-800">{property.beds} Bedrooms</span>
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="flex items-center text-amber-600 text-[10px] font-bold uppercase mb-0.5">
                    <Bath className="w-3.5 h-3.5 mr-1" /> Baths
                  </span>
                  <span className="text-base font-bold text-stone-800">{property.baths} Bathrooms</span>
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center text-amber-600 text-[10px] font-bold uppercase mb-0.5">
                    <Square className="w-3.5 h-3.5 mr-1" /> Area
                  </span>
                  <span className="text-base font-bold text-stone-800">{property.sqft.toLocaleString()} Sqft</span>
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center text-amber-600 text-[10px] font-bold uppercase mb-0.5">
                    <Shield className="w-3.5 h-3.5 mr-1" /> Built
                  </span>
                  <span className="text-base font-bold text-stone-800">{property.specs.yearBuilt}</span>
                </div>
              </div>
            </div>

            {/* Virtual 3D tour mockup */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-3 flex items-center space-x-2">
                <Video className="w-4 h-4 text-amber-600" />
                <span>3D Virtual Tour Walkthrough</span>
              </h3>
              <div className="relative aspect-video bg-stone-100 border border-stone-200 rounded flex items-center justify-center group overflow-hidden shadow-inner">
                <img
                  src={property.images[1] || property.images[0]}
                  alt="3D Walkthrough background"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
                />
                <button
                  onClick={() => alert('Starting high-definition secure stream...')}
                  className="relative z-10 flex flex-col items-center justify-center p-4 bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-900 rounded-full w-16 h-16 transition-all duration-300 shadow-lg"
                >
                  <Video className="w-5 h-5" />
                  <span className="text-[8px] uppercase font-bold tracking-widest mt-1">Play</span>
                </button>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">Premium Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5 text-stone-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span className="text-xs">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs Table */}
            <div className="bg-white border border-stone-200/80 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-400 font-medium">Lot Size</span>
                  <span className="text-stone-800">{property.specs.lotSize}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-400 font-medium">Parking</span>
                  <span className="text-stone-800">{property.specs.parking}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-400 font-medium">Floor Level</span>
                  <span className="text-stone-800">{property.specs.floor}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-400 font-medium">Listed Code</span>
                  <span className="text-stone-800">{property.id.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Mortgage calculator widget */}
            <MortgageCalculator initialPrice={property.price} />
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            {/* Wishlist CTA */}
            <button
              onClick={() => toggleWishlist(property.id)}
              className={`w-full py-2.5 rounded border font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-sm ${
                wishlist.includes(property.id)
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
              }`}
            >
              {wishlist.includes(property.id) ? 'Saved to Wishlist' : 'Add to Wishlist'}
            </button>

            {/* Schedule Visit/Agent Card */}
            <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <img src={property.agent.image} alt={property.agent.name} className="w-12 h-12 object-cover rounded-full border border-stone-200 shadow-sm" />
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900">{property.agent.name}</h4>
                  <p className="text-[9px] text-amber-600 font-bold uppercase tracking-wider">{property.agent.role}</p>
                </div>
              </div>

              {inquiryFormSent ? (
                <div className="text-center py-5 bg-stone-50 border border-stone-100 rounded-md">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-1.5" />
                  <p className="text-xs text-stone-800 font-bold">Request Logged</p>
                  <p className="text-[10px] text-stone-400 mt-0.5">Check your inbox/SMS shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-3">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 flex items-center mb-2">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-amber-600" /> Schedule Visit
                  </h5>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 text-stone-800 rounded p-2.5 text-xs outline-none font-medium"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 text-stone-800 rounded p-2.5 text-xs outline-none font-medium"
                  />
                  <textarea
                    rows={3}
                    placeholder="Message / Preferred Time"
                    className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 text-stone-800 rounded p-2.5 text-xs outline-none resize-none font-medium"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-900 py-2.5 rounded uppercase font-bold text-xs tracking-widest transition-all shadow-sm"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}

              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col space-y-2 text-xs text-stone-500 font-medium">
                <a href={`tel:${property.agent.phone}`} className="flex items-center hover:text-amber-600 transition-colors">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-600" /> {property.agent.phone}
                </a>
                <a href={`mailto:${property.agent.email}`} className="flex items-center hover:text-amber-600 transition-colors">
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-amber-600" /> {property.agent.email}
                </a>
              </div>
            </div>

            {/* Brochure CTA */}
            <button
              onClick={() => alert('Downloading official property brochure in PDF...')}
              className="w-full bg-stone-50 hover:bg-stone-100 text-stone-600 py-2.5 rounded uppercase font-bold text-[10px] tracking-widest flex items-center justify-center space-x-1.5 border border-stone-200 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5 text-amber-600" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
