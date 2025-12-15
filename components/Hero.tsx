import React from 'react';
import { Button } from './Button';
import { ArrowRight, Star, MapPin } from 'lucide-react';

interface HeroProps {
  onReportClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReportClick }) => {
  return (
    <section className="relative min-h-[650px] flex flex-col justify-center overflow-hidden bg-civic-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-civic-navy/90 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-civic-navy via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-civic-teal text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-2 h-2 rounded-full bg-civic-teal animate-pulse"></div>
            <span>AI-Powered Civic Engagement Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Report Issues. <span className="text-civic-teal">Build Community.</span><br />
            Shape Your City.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            CivicCare connects citizens directly with local government. Report potholes, broken streetlights, or any civic issue—and watch your community improve together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onReportClick} 
              className="bg-civic-teal hover:bg-civic-tealDark text-white h-14 px-8 text-lg shadow-lg shadow-civic-teal/20 w-full sm:w-auto"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Report an Issue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a href="#how-it-works">
                <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 h-14 px-8 text-lg w-full sm:w-auto"
                >
                <div className="mr-2 border border-current rounded p-0.5">
                    <div className="border border-current rounded-sm w-3 h-2"></div>
                </div>
                Learn How It Works
                </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-civic-darkNavy/50 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-white">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">50K+</span>
              <span className="text-slate-400 text-sm leading-tight">Issues<br/>Resolved</span>
            </div>
             <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">200+</span>
              <span className="text-slate-400 text-sm leading-tight">Cities<br/>Connected</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold flex items-center">4.9 <Star className="w-5 h-5 ml-1 fill-civic-teal text-civic-teal" /></span>
              <span className="text-slate-400 text-sm leading-tight">Citizen<br/>Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};