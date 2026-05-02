import React, { useState } from 'react';
import { Search, Grid, List, SlidersHorizontal, MapPin } from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';

interface PropertiesProps {
  setCurrentPage: (page: string) => void;
  setSelectedPropertyId: (id: string | null) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  compareList: string[];
  toggleCompare: (id: string) => void;
}

export const Properties: React.FC<PropertiesProps> = ({
  setCurrentPage,
  setSelectedPropertyId,
  wishlist,
  toggleWishlist,
  compareList,
  toggleCompare
}) => {
  // Filters state
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [priceRange, setPriceRange] = useState<number>(20000000);
  const [sortBy, setSortBy] = useState('featured');

  // Filter logic
  const filteredProperties = PROPERTIES.filter((prop) => {
    const matchesSearch =
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === 'All' || prop.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || prop.status === selectedStatus;
    const matchesPrice = prop.price <= priceRange;

    return matchesSearch && matchesType && matchesStatus && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'sqft') return b.sqft - a.sqft;
    return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
  });

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 text-center sm:text-left pt-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Discover</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5">Exclusive Inventory</h1>
          <p className="text-stone-400 text-xs mt-1 font-medium">Filter and inspect standard-setting homes around the world.</p>
        </div>

        {/* Filter Toolbar (Clean white cards) */}
        <div className="bg-white border border-stone-200/80 rounded-lg p-5 mb-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {/* Search Input */}
            <div className="flex items-center bg-stone-50 border border-stone-200 rounded px-3 py-2">
              <Search className="w-4 h-4 text-stone-400 mr-2" />
              <input
                type="text"
                placeholder="Search location, title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-stone-800 text-xs font-medium focus:outline-none placeholder-stone-400"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center bg-stone-50 border border-stone-200 rounded px-3 py-2">
              <span className="text-[10px] text-stone-400 uppercase font-bold mr-2">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-transparent text-stone-700 text-xs font-bold focus:outline-none"
              >
                <option value="All">All Categories</option>
                <option value="Villa">Villas</option>
                <option value="Penthouse">Penthouses</option>
                <option value="Apartment">Apartments</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center bg-stone-50 border border-stone-200 rounded px-3 py-2">
              <span className="text-[10px] text-stone-400 uppercase font-bold mr-2">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-transparent text-stone-700 text-xs font-bold focus:outline-none"
              >
                <option value="All">Any Status</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
                <option value="Under Construction">Under Construction</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center bg-stone-50 border border-stone-200 rounded px-3 py-2">
              <span className="text-[10px] text-stone-400 uppercase font-bold mr-2">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent text-stone-700 text-xs font-bold focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="sqft">Square Footage</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
            {/* Price Slider */}
            <div className="w-full md:w-1/2 flex items-center space-x-3">
              <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider flex-shrink-0">
                Max Price: <span className="text-amber-600">{formatPrice(priceRange)}</span>
              </div>
              <input
                type="range"
                min={50000}
                max={20000000}
                step={250000}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1 bg-stone-200 rounded appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            {/* View Grid/List toggle */}
            <div className="flex items-center space-x-2 self-end md:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded border ${
                  viewMode === 'grid' ? 'bg-stone-900 border-stone-900 text-white' : 'border-stone-200 text-stone-400 hover:text-stone-600'
                } transition-all`}
                title="Grid"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded border ${
                  viewMode === 'list' ? 'bg-stone-900 border-stone-900 text-white' : 'border-stone-200 text-stone-400 hover:text-stone-600'
                } transition-all`}
                title="List"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-stone-500 text-xs font-medium mb-5">
          Showing <span className="text-stone-900 font-bold">{filteredProperties.length}</span> luxury properties
        </div>

        {/* Property Grid or List */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 text-stone-400 bg-white rounded-lg border border-stone-100">
            <SlidersHorizontal className="w-10 h-10 text-stone-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-stone-700">No matching properties found.</p>
            <p className="text-xs mt-0.5">Try relaxing your budget constraints or updating keywords.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onSelect={(id) => {
                  setSelectedPropertyId(id);
                  setCurrentPage('property-detail');
                }}
                isWishlisted={wishlist.includes(prop.id)}
                toggleWishlist={toggleWishlist}
                isCompared={compareList.includes(prop.id)}
                toggleCompare={toggleCompare}
              />
            ))}
          </div>
        ) : (
          /* List Mode (Clean White layouts) */
          <div className="space-y-4">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white border border-stone-200/80 rounded-lg overflow-hidden hover:border-amber-600/30 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row shadow-sm"
              >
                <div className="relative w-full sm:w-1/3 aspect-video sm:aspect-auto cursor-pointer" onClick={() => { setSelectedPropertyId(prop.id); setCurrentPage('property-detail'); }}>
                  <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-stone-900 text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-widest uppercase shadow-sm">
                    {prop.status}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-amber-600 uppercase font-bold">{prop.type}</span>
                      <span className="text-lg font-serif font-bold text-amber-600">{formatPrice(prop.price)}</span>
                    </div>
                    <h3
                      className="font-serif text-lg font-bold text-stone-900 mt-0.5 cursor-pointer hover:text-amber-600 transition-colors"
                      onClick={() => { setSelectedPropertyId(prop.id); setCurrentPage('property-detail'); }}
                    >
                      {prop.title}
                    </h3>
                    <p className="flex items-center text-stone-400 text-xs mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-stone-300 flex-shrink-0" />
                      {prop.location}
                    </p>
                    <p className="text-stone-500 text-xs mt-3 line-clamp-2 leading-relaxed font-medium">{prop.description}</p>
                  </div>

                  <div className="flex flex-row items-center justify-between gap-2 mt-4 pt-3 border-t border-stone-100">
                    <div className="flex space-x-4 text-stone-600 text-xs font-semibold">
                      {prop.beds > 0 && <span>{prop.beds} <span className="font-normal text-stone-400">Beds</span></span>}
                      <span>{prop.baths} <span className="font-normal text-stone-400">Baths</span></span>
                      <span>{prop.sqft.toLocaleString()} <span className="font-normal text-stone-400">Sqft</span></span>
                    </div>
                    <button
                      onClick={() => { setSelectedPropertyId(prop.id); setCurrentPage('property-detail'); }}
                      className="bg-stone-50 hover:bg-amber-600 text-stone-700 hover:text-white border border-stone-200/60 hover:border-amber-600 px-4 py-2 rounded text-[10px] uppercase tracking-widest font-bold transition-all"
                    >
                      View Suite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
