import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Spot & Snap",
    desc: "See a pothole, broken light, or graffiti? Take a quick photo or describe it."
  },
  {
    num: "02",
    title: "AI Analysis",
    desc: "Our AI instantly categorizes the issue and assesses its urgency."
  },
  {
    num: "03",
    title: "Automatic Routing",
    desc: "The report is sent directly to the correct city department work queue."
  },
  {
    num: "04",
    title: "Resolution",
    desc: "Workers fix the issue, and you get notified when it's done."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-civic-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-civic-teal font-semibold tracking-wider text-sm uppercase mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-civic-navy">
              From problem to fixed in four steps
            </h2>
          </div>
          <p className="text-slate-600 max-w-md pb-1">
            We've streamlined the bureaucracy to get things done faster. No more phone trees or paper forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-slate-100 -translate-x-1/2 z-0">
                  <div className="absolute right-0 -top-[5px]">
                    <ArrowRight className="h-4 w-4 text-slate-300" />
                  </div>
                </div>
              )}
              
              <div className="bg-white relative z-10 h-full">
                <span className="text-6xl font-bold text-slate-100 mb-4 block">{step.num}</span>
                <h3 className="text-xl font-bold text-civic-navy mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};