import React from 'react';
import { Camera, Brain, MapPin, Bell, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "Instant Capture",
    description: "Snap a photo of the issue directly from your phone. Our system automatically geo-tags the location."
  },
  {
    icon: Brain,
    title: "AI Categorization",
    description: "Our advanced AI identifies the problem type and severity instantly, routing it to the right department."
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    description: "Watch your report's progress on a real-time map. Get estimated completion times."
  },
  {
    icon: Bell,
    title: "Status Updates",
    description: "Receive notifications via SMS or email when your report is received, processed, and resolved."
  },
  {
    icon: BarChart3,
    title: "Transparent Data",
    description: "Access public dashboards showing community improvements and city responsiveness stats."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "See what others are reporting nearby and upvote issues to increase priority."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-civic-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-civic-navy mb-4">
            Smart features for a better community
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We use cutting-edge technology to make civic engagement simple, transparent, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="h-12 w-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-civic-teal transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-civic-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-civic-navy mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};