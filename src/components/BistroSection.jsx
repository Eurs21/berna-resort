import React from 'react';
import { Utensils, Clock, MapPin, ChevronRight } from 'lucide-react';

const menuHighlights = [
  {
    name: "Fresh Nasugbu Seafood Platter",
    description: "Catch of the day served with local sides.",
    price: "₱850",
    image: "https://images.unsplash.com/photo-1599863375836-8c081e19d7d4?auto=format&fit=crop&q=80"
  },
  {
    name: "Batangas Lomi Special",
    description: "Thick noodles in rich broth, topped with chicharon.",
    price: "₱250",
    image: "https://images.unsplash.com/photo-1591142512140-5e68841a50c8?auto=format&fit=crop&q=80"
  },
  {
    name: "Berna's Signature Adobo",
    description: "Slow-cooked heirloom recipe.",
    price: "₱380",
    image: "https://images.unsplash.com/photo-1579753177696-61842e475dfd?auto=format&fit=crop&q=80"
  }
];

const BistroSection = () => {
  // --- ADDED RETURN HERE ---
  return (
    <section id="bistro" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side: Visual Appeal */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" 
                alt="Berna Bistro Dining" 
                className="rounded-2xl h-64 w-full object-cover shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80" 
                alt="Local Batangas Cuisine" 
                className="rounded-2xl h-64 w-full object-cover mt-8 shadow-md"
              />
            </div>
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#2D6A4F] text-white p-6 rounded-xl hidden md:block shadow-xl">
              <p className="text-3xl font-bold italic">4.8/5</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Guest Dining Rating</p>
            </div>
          </div>

          {/* Content Side: Information & Conversion */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0077B6] text-sm font-bold uppercase tracking-wider">
              <Utensils className="w-4 h-4" /> Dining Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Berna Bistro: <span className="text-[#0077B6]">Authentic Flavors</span> by the Sea
            </h2>
            <p className="text-slate-600 text-lg">
              No beach trip is complete without great food. Our in-house bistro serves 
              freshly caught seafood and Batangas classics that bring the taste of home to the shore.
            </p>
          </div>
        </div>

        {/* Menu Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {menuHighlights.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                  <span className="text-lg font-bold text-[#0077B6] whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Menu Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition">
            View Full Menu <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BistroSection;