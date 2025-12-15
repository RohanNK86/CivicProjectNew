import React from 'react';
import { ShieldCheck, Menu } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-civic-navy/95 backdrop-blur supports-[backdrop-filter]:bg-civic-navy/80 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-civic-teal p-1.5 rounded-lg group-hover:scale-105 transition-transform">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">CivicCare</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => onNavigate('home')} className={`text-sm font-medium transition-colors hover:text-civic-teal ${currentView === 'home' ? 'text-white' : 'text-slate-300'}`}>
              Home
            </button>
            <a href="#how-it-works" className="text-sm font-medium text-slate-300 transition-colors hover:text-civic-teal">
              How it Works
            </a>
            <a href="#features" className="text-sm font-medium text-slate-300 transition-colors hover:text-civic-teal">
              Features
            </a>
            <button 
              onClick={() => onNavigate('report')}
              className="px-4 py-2 text-sm font-medium bg-civic-teal text-white rounded-md hover:bg-civic-tealDark transition-colors"
            >
              Report Issue
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-civic-navy px-4 py-4">
          <div className="flex flex-col space-y-4">
             <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-left text-sm font-medium text-slate-300 hover:text-white">
              Home
            </button>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">
              How it Works
            </a>
             <button 
              onClick={() => { onNavigate('report'); setIsMenuOpen(false); }}
              className="text-left text-sm font-medium text-civic-teal hover:text-civic-tealDark"
            >
              Report Issue
            </button>
          </div>
        </div>
      )}
    </header>
  );
};