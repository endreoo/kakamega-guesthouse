import React from 'react';
import { Bed, Users, TreePine, Wifi, Car, Coffee } from 'lucide-react';

const features = [
  {
    icon: Bed,
    title: '3 Comfortable Bedrooms',
    description: 'Spacious rooms with premium bedding and modern amenities'
  },
  {
    icon: TreePine,
    title: 'Beautiful Garden',
    description: 'Lush green spaces perfect for outdoor relaxation and events'
  },
  {
    icon: Users,
    title: 'Event Hosting',
    description: 'Ideal venue for weddings, parties, and corporate events'
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet'
  },
  {
    icon: Car,
    title: 'Secure Parking',
    description: 'Ample parking space with 24/7 security'
  },
  {
    icon: Coffee,
    title: 'Modern Kitchen',
    description: 'Fully equipped kitchen with modern appliances'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need for a Perfect Stay
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our holiday home combines comfort, luxury, and convenience to ensure your stay is memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <feature.icon className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}