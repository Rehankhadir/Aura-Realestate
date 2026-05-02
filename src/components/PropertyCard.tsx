import React from 'react';
import { Heart, Layers, MapPin, BedDouble, Bath, Square, ArrowRight } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onSelect: (id: string) => void;
  isWishlisted: boolean;
  toggleWishlist: (id: string) => void;
  isCompared: boolean;
  toggleCompare: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  isWishlisted,
  toggleWishlist,
  isCompared,
  toggleCompare
}) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white border border-stone-200/80 rounded-lg overflow-hidden group hover:shadow-[0_12px_24px_rgba(28,25,23,0.06)] hover:border-amber-600/40 transition-all duration-500 flex flex-col h-full shadow-sm">
      {/* Image Banner */}
      <div className="relative overflow-hidden aspect-[4/3] cursor-pointer" onClick={() => onSelect(property.id)}>
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-60" />

        {/* Status Badge */}
        <span className={`absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded shadow-sm ${
          property.status === 'For Sale' ? 'bg-amber-600 text-white' :
          property.status === 'Under Construction' ? 'bg-blue-600 text-white' :
          property.status === 'For Rent' ? 'bg-emerald-600 text-white' : 'bg-stone-500 text-white'
        }`}>
          {property.status}
        </span>

        {/* Floating Actions */}
        <div className="absolute top-4 right-4 flex flex-col space-y-1.5">
          <button
            onClick={(e) => { e.stopPropagation(); toggleWishlist(property.id); }}
            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
              isWishlisted
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white/80 text-stone-700 border-stone-200/50 hover:text-amber-600 hover:bg-white'
            }`}
            title="Add to Wishlist"
          >
            <Heart className="w-3.5 h-3.5" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); toggleCompare(property.id); }}
            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
              isCompared
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white/80 text-stone-700 border-stone-200/50 hover:text-amber-600 hover:bg-white'
            }`}
            title="Compare Property"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Price Display */}
        <div className="absolute bottom-4 left-4 text-xl font-serif font-bold text-white drop-shadow-md">
          {formatPrice(property.price)}
          {property.status === 'For Rent' && <span className="text-xs font-sans font-normal text-stone-100"> / mo</span>}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] tracking-widest text-amber-600 uppercase font-bold">{property.type}</span>
          <h3
            className="font-serif text-lg font-bold text-stone-900 mt-1 cursor-pointer hover:text-amber-600 transition-colors duration-200 line-clamp-1"
            onClick={() => onSelect(property.id)}
          >
            {property.title}
          </h3>
          <div className="flex items-center text-stone-500 text-xs mt-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-stone-400 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center text-stone-600 font-medium">
          {property.beds > 0 && (
            <div className="flex items-center space-x-1" title="Bedrooms">
              <BedDouble className="w-4 h-4 text-amber-600" />
              <span className="text-xs">{property.beds} <span className="text-stone-400 font-normal">Beds</span></span>
            </div>
          )}
          <div className="flex items-center space-x-1" title="Bathrooms">
            <Bath className="w-4 h-4 text-amber-600" />
            <span className="text-xs">{property.baths} <span className="text-stone-400 font-normal">Baths</span></span>
          </div>
          <div className="flex items-center space-x-1" title="Square Feet">
            <Square className="w-4 h-4 text-amber-600" />
            <span className="text-xs">{property.sqft.toLocaleString()} <span className="text-stone-400 font-normal">Sqft</span></span>
          </div>
        </div>

        <button
          onClick={() => onSelect(property.id)}
          className="mt-5 w-full flex items-center justify-center space-x-1 py-2.5 rounded bg-stone-50 group-hover:bg-amber-600 text-stone-700 group-hover:text-white border border-stone-200/60 group-hover:border-amber-600 font-bold text-xs tracking-widest uppercase transition-all duration-300 group"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
