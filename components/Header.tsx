import React from 'react';
import { MapPin, Menu, User } from 'lucide-react';
import { ViewState } from '../types';
import { Button } from './Button';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
  onLoginClick: () => void;
  user: string | null;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView, onLoginClick, user }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-civic-teal p-2 rounded-full group-hover:scale-105 transition-transform">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-civic-navy tracking-tight">CivicCare</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" onClick={() => onNavigate('home')} className="text-sm font-medium text-slate-600 hover:text-civic-teal transition-colors">
              Features
            </a>
            <a href="#how-it-works" onClick={() => onNavigate('home')} className="text-sm font-medium text-slate-600 hover:text-civic-teal transition-colors">
              How it Works
            </a>
            <a href="#impact" onClick={() => onNavigate('home')} className="text-sm font-medium text-slate-600 hover:text-civic-teal transition-colors">
              Impact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            {user ? (
               <div className="flex items-center space-x-2 text-civic-navy font-medium">
                 <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                   <User className="w-4 h-4 text-slate-600" />
                 </div>
                 <span className="text-sm">Citizen</span>
               </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="text-sm font-bold text-civic-navy hover:text-civic-teal transition-colors"
              >
                Log In
              </button>
            )}
            
            <Button 
              onClick={() => onNavigate('report')}
              className="bg-civic-navy hover:bg-slate-800 text-white font-semibold px-6"
            >
              Report an Issue
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-lg">
          <div className="flex flex-col space-y-4">
             <a href="#features" onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-left text-base font-medium text-slate-600">
              Features
            </a>
            <a href="#how-it-works" onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-base font-medium text-slate-600">
              How it Works
            </a>
            <a href="#impact" onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-base font-medium text-slate-600">
              Impact
            </a>
            <hr className="border-slate-100 my-2" />
            <button 
              onClick={() => { onLoginClick(); setIsMenuOpen(false); }}
              className="text-left text-base font-medium text-civic-navy"
            >
              Log In
            </button>
             <Button 
              onClick={() => { onNavigate('report'); setIsMenuOpen(false); }}
              className="w-full bg-civic-teal hover:bg-civic-tealDark"
            >
              Report an Issue
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};