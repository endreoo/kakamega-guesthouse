import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80"
          alt="Kakamega Haven"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Perfect Getaway in Kakamega
          </h1>
          <p className="text-xl mb-8">
            Experience the beauty of Western Kenya in our luxurious 3-bedroom haven. 
            Perfect for family holidays and memorable events.
          </p>
          <div className="space-x-4">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition">
              Book Now
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}