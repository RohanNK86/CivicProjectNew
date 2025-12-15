import React, { useState, useRef } from 'react';
import { Camera, MapPin, Upload, X, CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { Button } from './Button';
import { analyzeIssue } from '../services/geminiService';
import { AIAnalysisResult } from '../types';

interface ReportFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const ReportForm: React.FC<ReportFormProps> = ({ onSuccess, onCancel }) => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AIAnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      // Reset analysis if image changes
      setAnalysis(null);
    }
  };

  const handleAnalyze = async () => {
    if (!description && !image) return;
    
    setIsAnalyzing(true);
    try {
      const result = await analyzeIssue(description || "Issue report with image", image);
      setAnalysis(result);
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend here
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  const getSeverityColor = (severity: string) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 my-8">
      <div className="bg-civic-navy px-8 py-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Report an Issue</h2>
          <p className="text-slate-300 text-sm">Tell us what needs fixing.</p>
        </div>
        <button onClick={onCancel} className="text-slate-400 hover:text-white transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Step 1: Evidence */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-civic-navy uppercase tracking-wide">
              1. Photo & Description
            </label>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`aspect-square rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${imagePreview ? 'border-civic-teal bg-teal-50' : 'border-slate-300 hover:border-civic-teal hover:bg-slate-50'}`}
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <>
                      <Camera className="h-8 w-8 text-slate-400 mb-2" />
                      <span className="text-sm text-slate-500 font-medium">Add Photo</span>
                    </>
                  )}
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <textarea
                  value={description}
                  onChange={(e) => { setDescription(e.target.value); setAnalysis(null); }}
                  placeholder="Describe the issue (e.g., 'Large pothole in the bike lane')..."
                  className="w-full h-full min-h-[140px] p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-civic-teal focus:border-transparent resize-none text-slate-700 bg-slate-50"
                ></textarea>
              </div>
            </div>
            
            {/* AI Analysis Trigger */}
            {(!analysis && (description.length > 5 || image)) && (
               <div className="flex justify-end">
                 <Button 
                   type="button" 
                   onClick={handleAnalyze} 
                   isLoading={isAnalyzing}
                   className="bg-civic-navy hover:bg-slate-800"
                   size="sm"
                 >
                   <Brain className="w-4 h-4 mr-2" />
                   Analyze Issue with AI
                 </Button>
               </div>
            )}
          </div>

          {/* AI Results Display */}
          {analysis && (
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 animate-in fade-in slide-in-from-top-4 duration-500">
               <div className="flex items-center gap-2 mb-4">
                 <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                   AI ANALYSIS
                 </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                 <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                   <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Category</div>
                   <div className="text-civic-navy font-bold">{analysis.category}</div>
                 </div>
                 <div className={`p-3 rounded-lg border shadow-sm ${getSeverityColor(analysis.severity)}`}>
                   <div className="text-xs uppercase font-semibold mb-1 opacity-80">Severity</div>
                   <div className="font-bold flex items-center gap-2">
                     {analysis.severity === 'Critical' ? <AlertCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                     {analysis.severity} Priority
                   </div>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                   <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Assigned Dept</div>
                   <div className="text-civic-navy font-bold">{analysis.department}</div>
                 </div>
                 <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                   <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Est. Action</div>
                   <div className="text-civic-navy font-bold">{analysis.estimatedActionTime}</div>
                 </div>
               </div>
               
               <p className="text-sm text-slate-600 italic bg-white p-3 rounded-lg border border-slate-100">
                 "{analysis.summary}"
               </p>
            </div>
          )}

          {/* Step 2: Location */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-civic-navy uppercase tracking-wide">
              2. Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="123 Main St (or use GPS)"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-civic-teal focus:border-transparent text-slate-700 bg-white"
              />
              <button 
                type="button" 
                className="absolute right-3 top-2.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-md transition-colors"
                onClick={() => setLocation("Current Location (Lat: 40.7128, Lng: -74.0060)")}
              >
                Use GPS
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end gap-4">
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" size="lg" disabled={!analysis || !location}>
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Simple visual components for the file
const Brain = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);