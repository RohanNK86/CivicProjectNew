import React from 'react';

const stats = [
  { value: "12,405", label: "Issues Resolved" },
  { value: "48h", label: "Avg. Response Time" },
  { value: "94%", label: "Citizen Satisfaction" },
  { value: "3", label: "Cities Supported" }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-civic-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-civic-teal mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};