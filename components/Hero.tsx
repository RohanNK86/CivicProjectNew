import React from 'react';
import { Button } from './Button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onReportClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReportClick }) => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-civic-navy">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-civic-teal/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-civic-teal text-xs font-semibold uppercase tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-3 h-3" />
              <span>AI-Powered Civic Engagement</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your voice matters.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-civic-teal to-teal-200">
                We're listening.
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Report local issues in seconds. Our AI categorizes your request and routes it directly to the right department for faster resolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={onReportClick} className="shadow-lg shadow-civic-teal/20">
                Report an Issue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-white/5 hover:border-white">
                View Live Map
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                1,204 Issues Fixed This Week
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-civic-teal"></div>
                24/7 AI Monitoring
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
             {/* Mock App Interface */}
             <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl transform rotate-2 lg:translate-x-8">
               <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                 <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-auto text-xs font-mono text-slate-400">SYSTEM_ACTIVE</div>
                 </div>
                 <div className="p-6">
                    <div className="flex gap-4 mb-6">
                      <div className="w-16 h-16 bg-slate-200 rounded-lg shrink-0 overflow-hidden">
                        <img src="https://picsum.photos/100/100" alt="Issue" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 w-3/4 bg-slate-200 rounded mb-2"></div>
                        <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-teal-50 rounded-lg border border-teal-100 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-civic-teal mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-civic-teal uppercase mb-1">AI Analysis</div>
                          <p className="text-sm text-slate-700">Category: <span className="font-semibold">Infrastructure / Pothole</span></p>
                          <p className="text-sm text-slate-700">Severity: <span className="font-semibold text-orange-600">High Priority</span></p>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
             
             {/* Decorative Background Elements behind UI */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-civic-teal/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};