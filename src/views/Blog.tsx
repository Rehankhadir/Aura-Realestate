import React, { useState } from 'react';
import { BLOGS } from '../data/properties';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Architecture', 'Investment', 'Financing', 'Design'];

  const filteredBlogs = BLOGS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 pt-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">AURA Insights</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 mb-2">
            Market Trends & Architecture
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-medium">
            Read critical updates on asset price movements, investment methodologies, and high-end construction.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white border border-stone-200/80 rounded-lg p-4 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded border transition-all ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-stone-50 text-stone-500 border-stone-200 hover:text-amber-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-1/3 flex items-center bg-stone-50 border border-stone-200 px-3 py-2 rounded">
            <Search className="w-4 h-4 text-stone-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-stone-800 text-xs font-medium focus:outline-none placeholder-stone-400"
            />
          </div>
        </div>

        {/* Blogs list */}
        {filteredBlogs.length === 0 ? (
          <p className="text-center py-12 text-stone-400 font-bold text-xs bg-white rounded-lg border border-stone-100">No insights match your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBlogs.map((post) => (
              <div key={post.id} className="bg-white border border-stone-200 rounded-lg overflow-hidden group hover:border-amber-600/30 transition-all duration-300 flex flex-col h-full shadow-sm">
                <div className="relative aspect-[16/9] overflow-hidden cursor-pointer" onClick={() => alert(`Full article loading...`)}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-stone-900/90 border border-white/10 text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 text-amber-600 mr-1 flex-shrink-0" /> {post.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-3.5 h-3.5 text-amber-600 mr-1 flex-shrink-0" /> {post.author}
                      </span>
                    </div>

                    <h3
                      className="font-serif text-xl font-bold text-stone-900 mt-0.5 mb-2 group-hover:text-amber-600 cursor-pointer transition-colors line-clamp-2"
                      onClick={() => alert(`Full article loading...`)}
                    >
                      {post.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4 font-medium line-clamp-3">{post.excerpt}</p>
                  </div>

                  <button
                    onClick={() => alert(`Openingcomplete article: "${post.title}"`)}
                    className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 mt-2 self-start transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
