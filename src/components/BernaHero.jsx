import React, { useState } from 'react';
import { Calendar, Users, Home } from 'lucide-react';

const BernaHero = () => {
  // 1. Updated state for direct booking
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    guests: '2',
    wing: 'Mahogany'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-150 flex items-center justify-center bg-slate-900 text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80" 
          alt="Bernabeach Resort Coastline" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Escape to Nasugbu</h1>
        <p className="text-lg md:text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
          Experience affordable beachfront relaxation at Bernabeach Resort.
        </p>

        {/* 2. --- DIRECT BOOKING FORM --- */}
        <form 
          action="https://formspree.io/f/xaqdzobb" 
          method="POST"
          className="bg-white text-slate-800 p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto border-t-4 border-[#0077B6]"
        >
          <input type="hidden" name="_subject" value="New Booking Inquiry - Bernabeach" />
          <h3 className="text-xl font-bold mb-6 text-left text-slate-900">Check Availability</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            {/* Name */}
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Name</label>
                <input type="text" name="name" placeholder="John Doe" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0077B6]" onChange={handleChange}/>
            </div>
            
            {/* Dates */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Dates</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <input type="text" name="dates" placeholder="Dec 24-26" required className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0077B6]" onChange={handleChange}/>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <select name="guests" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0077B6] bg-white" onChange={handleChange}>
                  <option>1-2 Pax</option>
                  <option>3-4 Pax</option>
                  <option>5+ Pax</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button type="submit" className="w-full bg-[#0077B6] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Inquire Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BernaHero;