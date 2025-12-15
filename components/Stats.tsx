import React from 'react';
import { TrendingUp, Clock, Users, ThumbsUp } from 'lucide-react';

const stats = [
  { 
    icon: TrendingUp,
    value: "89%", 
    label: "Resolution Rate", 
    sub: "of reported issues are resolved within 7 days"
  },
  { 
    icon: Clock,
    value: "2.5x", 
    label: "Faster Response", 
    sub: "compared to traditional reporting methods"
  },
  { 
    icon: Users,
    value: "500K+", 
    label: "Active Citizens", 
    sub: "engaged community members making a difference"
  },
  { 
    icon: ThumbsUp,
    value: "92%", 
    label: "Satisfaction Rate", 
    sub: "of users recommend CivicCare to neighbors"
  }
];

export const Stats: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-civic-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-civic-teal font-bold tracking-widest text-xs uppercase mb-3 block">Impact</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Real Results, Real Communities
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            CivicCare is transforming how cities respond to citizen needs across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className="w-16 h-16 bg-civic-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-civic-teal/20">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-bold text-slate-200 mb-4">{stat.label}</div>
              <div className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};