import React from 'react';
import { Star, MapPin, Navigation, Phone, Globe } from 'lucide-react';

const TrustSection = () => {
  const reviews = [
    { name: "EmpressMalu", platform: "Tripadvisor", rating: 5, text: "Bernabeach Resort in Nasugbu is a medium-sized property featuring beachfront access and great amenities." },
    { name: "Local Guide", platform: "Google", rating: 4, text: "Set on a golden sand beach along Nasugbu Bay. Laid-back resort surrounded by trees." },
    { name: "Family Traveler", platform: "Google", rating: 5, text: "Great for kids! The two pools are clean and the staff is very accommodating." }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Reviews & Trust */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Guest Experiences</h2>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-bold text-slate-700">3.7/5 Average (725+ Reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((rev, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-slate-800">{rev.name}</span>
                    <span className="text-xs text-slate-400 font-mono uppercase">{rev.platform}</span>
                  </div>
                  <p className="text-slate-600 text-sm italic">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Map & Direct Info */}
          <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Find Us in Nasugbu</h3>
            
            {/* Google Maps Placeholder/Embed */}
            <div className="w-full h-64 bg-slate-200 rounded-lg mb-6 overflow-hidden relative">
              <iframe 
                title="Bernabeach Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.585542457814!2d120.6224151758913!3d14.07269418933568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd96f7c8f8f8f7%3A0x88e73434680e908!2sBernabeach%20Resort!5e0!3m2!1sen!2sph!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#0077B6] shrink-0" />
                <p>3J9G+C68, Apacible Blvd, Nasugbu, Batangas (13-min walk from Alps Bus Station)</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#0077B6]" />
                <p className="font-bold text-[#0077B6]">0923 442 6802</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#0077B6]" />
                <p>bernabeachresort.com.ph</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="mt-8 w-full bg-[#2D6A4F] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-800 transition shadow-md"
            >
              <Navigation className="w-5 h-5" /> Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;