import React from 'react';
import { ShieldCheck, Twitter, Facebook, Instagram, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-civic-navy text-slate-300 py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-civic-teal p-1 rounded-md">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">CivicCare</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              Empowering communities through technology. Building trust, transparency, and faster resolutions for local issues.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-civic-teal transition-colors">Report an Issue</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Live Map</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Data Dashboard</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Government</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-civic-teal transition-colors">Partner with Us</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-civic-teal transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-civic-teal hover:text-white transition-all"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-civic-teal hover:text-white transition-all"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-civic-teal hover:text-white transition-all"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-civic-teal hover:text-white transition-all"><Github className="h-4 w-4" /></a>
            </div>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} CivicCare Technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};