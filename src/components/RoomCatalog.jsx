import React from 'react';
import { Users, Bed, CheckCircle2, Phone } from 'lucide-react';

const rooms = [
  {
    id: 'mahogany',
    name: 'Mahogany Wing (Premium)',
    price: '4,500',
    pax: '2-4 Pax',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    features: ['Pool View', 'En-suite Bathroom', 'Smart TV', 'Premium Linens']
  },
  {
    id: 'kamagong',
    name: 'Kamagong Wing (Standard)',
    price: '3,200',
    pax: '4-6 Pax',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
    features: ['Air-conditioned', 'Near Bistro', 'Veranda Access', 'Daily Housekeeping']
  },
  {
    id: 'mulawin',
    name: 'Mulawin Wing (Group/Dorm)',
    price: '6,000',
    pax: '8-12 Pax',
    image: 'https://images.unsplash.com/photo-1555854816-809728a67301?auto=format&fit=crop&q=80',
    features: ['Multiple Bunk Beds', 'Large Shared Space', 'Lockers', 'Direct Pool Access']
  }
];

const RoomCatalog = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Accommodations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the perfect wing for your stay. From cozy couple retreats to large group celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent">
                  <span className="text-white font-bold text-lg">Starts at ₱{room.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{room.name}</h3>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {room.pax}
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" /> Multiple Layouts
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a href="#booking-form" className="block text-center bg-[#0077B6] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition active:scale-95">
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Footer */}
        <div className="mt-16 text-center p-8 bg-blue-50 rounded-3xl border-2 border-dashed border-blue-200">
          <p className="text-slate-600 mb-2 font-medium">Prefer to talk to a person?</p>
          <a href="tel:+639234426802" className="text-2xl font-bold text-[#0077B6] flex items-center justify-center gap-2">
            <Phone className="w-6 h-6" /> 0923 442 6802
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoomCatalog;