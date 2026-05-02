export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  city: string;
  type: 'Villa' | 'Penthouse' | 'Apartment' | 'Commercial' | 'Plot';
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  status: 'For Sale' | 'For Rent' | 'Under Construction' | 'Sold';
  featured: boolean;
  description: string;
  amenities: string[];
  specs: { yearBuilt: number; lotSize: string; parking: string; floor: string };
  agent: { name: string; role: string; phone: string; email: string; image: string };
  coordinates: { lat: number; lng: number };
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Obsidian Waterfront Villa',
    price: 12500000,
    location: 'Biscayne Bay, Miami',
    city: 'Miami',
    type: 'Villa',
    beds: 6,
    baths: 8,
    sqft: 12400,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'For Sale',
    featured: true,
    description: 'An architectural masterpiece boasting an infinity edge pool overlooking the bay, complete smart home integration, and ultra-premium Italian finishes.',
    amenities: ['Infinity Pool', 'Wine Cellar', 'Private Dock', 'Smart Home', 'Home Cinema', 'Gym'],
    specs: { yearBuilt: 2024, lotSize: '1.2 Acres', parking: '4 Cars', floor: '2 Stories' },
    agent: { name: 'Sarah Jenkins', role: 'Global Elite Partner', phone: '+1 (555) 012-3456', email: 'sarah@aura.luxury', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
    coordinates: { lat: 25.8576, lng: -80.1300 }
  },
  {
    id: 'prop-2',
    title: 'Lumina Sky Penthouse',
    price: 8400000,
    location: 'Upper East Side, New York',
    city: 'New York',
    type: 'Penthouse',
    beds: 4,
    baths: 4.5,
    sqft: 6500,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'For Sale',
    featured: true,
    description: 'Perched on the 82nd floor, this penthouse offers full 360-degree views of Manhattan, a private rooftop deck, and direct elevator access.',
    amenities: ['Concierge', 'Sky Deck', 'Private Lift', 'Sauna', 'Floor-to-Ceiling Windows'],
    specs: { yearBuilt: 2025, lotSize: 'N/A', parking: 'Valet', floor: 'Penthouse 82' },
    agent: { name: 'Marcus Sterling', role: 'Director of Sales', phone: '+1 (555) 987-6543', email: 'marcus@aura.luxury', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
    coordinates: { lat: 40.7736, lng: -73.9566 }
  },
  {
    id: 'prop-3',
    title: 'The Azure Estate',
    price: 15000000,
    location: 'Monaco Coastline',
    city: 'Monaco',
    type: 'Villa',
    beds: 7,
    baths: 9,
    sqft: 18000,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1602343168117-bb8fee3976eb?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Under Construction',
    featured: true,
    description: 'Ultra-modern hillside sanctuary capturing the dramatic Mediterranean landscape with sprawling glass facades and multiple wellness levels.',
    amenities: ['Wellness Spa', 'Helipad Access', 'Indoor & Outdoor Pool', 'Guard House', 'Library'],
    specs: { yearBuilt: 2026, lotSize: '2.5 Acres', parking: '6 Cars', floor: '3 Stories' },
    agent: { name: 'Elise Dupont', role: 'Luxury Advisor', phone: '+33 6 1234 5678', email: 'elise@aura.luxury', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' },
    coordinates: { lat: 43.7384, lng: 7.4246 }
  },
  {
    id: 'prop-4',
    title: 'Elysian Hillside Pavilion',
    price: 4500000,
    location: 'Hollywood Hills, LA',
    city: 'Los Angeles',
    type: 'Villa',
    beds: 3,
    baths: 4,
    sqft: 4800,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'For Sale',
    featured: false,
    description: 'A cozy but incredibly luxurious architectural gem with panoramic views of the Los Angeles skyline, perfect for creative elite.',
    amenities: ['Infinity Pool', 'Fire Pit Lounge', 'Chef Kitchen', 'Media Room'],
    specs: { yearBuilt: 2021, lotSize: '0.8 Acres', parking: '2 Cars', floor: '1 Story' },
    agent: { name: 'Sarah Jenkins', role: 'Global Elite Partner', phone: '+1 (555) 012-3456', email: 'sarah@aura.luxury', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
    coordinates: { lat: 34.1176, lng: -118.3520 }
  },
  {
    id: 'prop-5',
    title: 'Apex Financial Tower (Floor 24)',
    price: 32000,
    location: 'Downtown Dubai',
    city: 'Dubai',
    type: 'Commercial',
    beds: 0,
    baths: 4,
    sqft: 8500,
    images: [
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'For Rent',
    featured: false,
    description: 'High-visibility grade-A office space in Dubai, perfectly suited for multinational corporate headquarters.',
    amenities: ['Meeting Rooms', 'Boardroom', 'Fibre Internet', 'Executive Parking', 'Security'],
    specs: { yearBuilt: 2023, lotSize: 'N/A', parking: '10 Spots', floor: 'Floor 24' },
    agent: { name: 'Marcus Sterling', role: 'Director of Sales', phone: '+1 (555) 987-6543', email: 'marcus@aura.luxury', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
    coordinates: { lat: 25.1972, lng: 55.2744 }
  },
  {
    id: 'prop-6',
    title: 'The Golden Crest Estate',
    price: 19500000,
    location: 'Bel Air, Los Angeles',
    city: 'Los Angeles',
    type: 'Villa',
    beds: 8,
    baths: 11,
    sqft: 22000,
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    ],
    status: 'Sold',
    featured: false,
    description: 'The epitome of exclusivity. Ultra-modern gated estate equipped with standard bowling alley, fully soundproof cinema, and bespoke wellness center.',
    amenities: ['Bowling Alley', 'Guard House', 'Wine Vault', 'Private Lake', 'Outdoor Pavilion'],
    specs: { yearBuilt: 2022, lotSize: '4.5 Acres', parking: '10 Cars', floor: '2 Stories' },
    agent: { name: 'Sarah Jenkins', role: 'Global Elite Partner', phone: '+1 (555) 012-3456', email: 'sarah@aura.luxury', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
    coordinates: { lat: 34.0833, lng: -118.4478 }
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'blog-1',
    title: 'The Rise of Smart Luxury in Modern Architecture',
    excerpt: 'How automation, energy independence, and artificial intelligence are redefining premium properties.',
    content: 'Luxury is no longer defined just by sqft and rare stones. It is about how your space knows your schedule, optimizes climate control perfectly, and protects with advanced tech.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    category: 'Architecture',
    date: 'May 12, 2026',
    author: 'Eleanor Vance'
  },
  {
    id: 'blog-2',
    title: 'Real Estate Investment Trends: Where to Buy in 2026',
    excerpt: 'An ultimate analytical guide to international real estate capital appreciation hotspots.',
    content: 'With emerging tax structures and growing luxury buyer demographics, analyzing Miami, Dubai, and Monaco gives highly actionable insights.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80',
    category: 'Investment',
    date: 'April 28, 2026',
    author: 'Marcus Sterling'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexander Volkov',
    role: 'Tech Founder',
    company: 'Stellar Innovations',
    text: 'AURA Estates delivered exactly what my family needed—unrivaled luxury combined with absolute privacy. Their team understands the needs of top-tier investors.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Catherine Thorne',
    role: 'Managing Director',
    company: 'Thorne Capital',
    text: 'The portfolio access and discreet transaction handling provided by AURA are why I entrust them with my real estate investments globally.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80'
  }
];

export const LOCATIONS = [
  { name: 'Miami', properties: 12, image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=600&q=80', tag: 'Coastal Luxury' },
  { name: 'New York', properties: 18, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80', tag: 'Urban Elegance' },
  { name: 'Dubai', properties: 24, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', tag: 'Future Wealth' },
  { name: 'Monaco', properties: 8, image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80', tag: 'Elite Living' }
];
