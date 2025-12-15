import React from 'react';
import { Camera, Cpu, Building2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Spot & Report",
    desc: "See a pothole, broken streetlight, or graffiti? Take a photo and submit it in seconds."
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI Processing",
    desc: "Our AI analyzes your report, categorizes the issue, and determines the priority level."
  },
  {
    num: "03",
    icon: Building2,
    title: "City Response",
    desc: "The appropriate city department receives your report and dispatches a team."
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Resolution",
    desc: "Track progress in real-time and get notified when the issue is fixed."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <span className="text-civic-teal font-bold tracking-widest text-xs uppercase mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold text-civic-navy mb-6">
            From Problem to Solution in Four Steps
          </h2>
          <p className="text-slate-600 text-lg">
            Reporting civic issues has never been easier. Here's how CivicCare works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative mt-4 hover:border-civic-teal/50 transition-colors">
              <div className="absolute -top-5 left-8 w-10 h-10 bg-civic-teal rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white">
                {step.num}
              </div>
              
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 mt-2">
                <step.icon className="h-6 w-6 text-civic-teal" />
              </div>
              
              <h3 className="text-xl font-bold text-civic-navy mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};