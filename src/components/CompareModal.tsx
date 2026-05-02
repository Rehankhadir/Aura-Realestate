import React from 'react';
import { X, Check, Minus } from 'lucide-react';
import { Property } from '../data/properties';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  properties: Property[];
  removeFromCompare: (id: string) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  properties,
  removeFromCompare
}) => {
  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-stone-950/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white border border-stone-200 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-serif text-xl md:text-2xl font-bold text-stone-900 mb-6">Compare Properties</h2>

        {properties.length === 0 ? (
          <div className="text-center py-12 text-stone-500 bg-stone-50 rounded-lg border border-stone-100">
            <p className="mb-4 text-sm font-medium">No properties selected for comparison.</p>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-stone-900 text-white rounded text-xs tracking-widest font-bold hover:bg-amber-600 transition-colors uppercase"
            >
              Browse Listings
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto border border-stone-100 rounded-lg">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <th className="py-3 px-4 text-stone-500 font-bold text-[10px] uppercase tracking-wider w-1/4">Features</th>
                  {properties.map((prop) => (
                    <th key={prop.id} className="py-3 px-4 min-w-[200px]">
                      <div className="relative pt-2">
                        <img
                          src={prop.images[0]}
                          alt={prop.title}
                          className="w-full h-24 object-cover rounded mb-2 border border-stone-200/60"
                        />
                        <button
                          onClick={() => removeFromCompare(prop.id)}
                          className="absolute top-0 right-0 p-1 bg-stone-100 border border-stone-200 text-stone-500 hover:text-red-600 rounded-full shadow-sm transition-all"
                          title="Remove"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <h4 className="font-serif text-sm font-bold text-stone-900 line-clamp-1">{prop.title}</h4>
                        <p className="text-amber-600 font-bold text-sm">{formatPrice(prop.price)}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs font-medium text-stone-700">
                <tr>
                  <td className="py-3 px-4 text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50/50">Location</td>
                  {properties.map((prop) => (
                    <td key={prop.id} className="py-3 px-4 text-stone-800 font-semibold">{prop.location}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50/50">Type</td>
                  {properties.map((prop) => (
                    <td key={prop.id} className="py-3 px-4 text-stone-800">{prop.type}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50/50">Bedrooms</td>
                  {properties.map((prop) => (
                    <td key={prop.id} className="py-3 px-4 text-stone-800 font-bold">{prop.beds || <Minus className="w-3 h-3 text-stone-300" />}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50/50">Bathrooms</td>
                  {properties.map((prop) => (
                    <td key={prop.id} className="py-3 px-4 text-stone-800 font-bold">{prop.baths}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50/50">Square Feet</td>
                  {properties.map((prop) => (
                    <td key={prop.id} className="py-3 px-4 text-stone-800">{prop.sqft.toLocaleString()}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50/50">Status</td>
                  {properties.map((prop) => (
                    <td key={prop.id} className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                        prop.status === 'For Sale' ? 'bg-amber-100 text-amber-700' :
                        prop.status === 'Under Construction' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {prop.status}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-stone-400 font-bold uppercase tracking-wider text-[10px] bg-stone-50/50">Amenities</td>
                  {properties.map((prop) => (
                    <td key={prop.id} className="py-3 px-4 text-stone-600">
                      <ul className="space-y-1">
                        {prop.amenities.slice(0, 5).map((amenity, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="w-3 h-3 text-amber-600 mr-1 flex-shrink-0" />
                            <span className="truncate">{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
