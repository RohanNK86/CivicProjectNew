import React from 'react';
import { Camera, Brain, Map, Bell, Shield, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "Photo & Location Capture",
    description: "Snap a photo and let GPS automatically tag the exact location. No forms, no hassle."
  },
  {
    icon: Brain,
    title: "AI-Powered Categorization",
    description: "Our smart system automatically categorizes your report and routes it to the right department."
  },
  {
    icon: Map,
    title: "Real-Time Issue Map",
    description: "See active issues in your neighborhood and track community progress on a live map."
  },
  {
    icon: Bell,
    title: "Status Notifications",
    description: "Get instant updates when your issue is acknowledged, in progress, or resolved."
  },
  {
    icon: Shield,
    title: "Secure & Anonymous",
    description: "Report sensitive issues anonymously while keeping your personal data protected."
  },
  {
    icon: BarChart2,
    title: "Government Analytics",
    description: "City officials get powerful dashboards to prioritize resources and improve response times."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-civic-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-civic-teal font-bold tracking-widest text-xs uppercase mb-3 block">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-civic-navy mb-6">
            Everything You Need to Make a Difference
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From reporting to resolution, CivicCare streamlines the entire civic engagement process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-14 h-14 bg-civic-teal rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-civic-navy mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};