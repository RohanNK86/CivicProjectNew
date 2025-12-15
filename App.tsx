import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { ReportForm } from './components/ReportForm';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { LoginModal } from './components/LoginModal';
import { CheckCircle2, Smartphone, ArrowRight } from 'lucide-react';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (email: string) => {
    setUser(email);
  };

  return (
    <div className="min-h-screen bg-civic-cream font-sans text-civic-navy">
      <Header 
        onNavigate={handleNavigate} 
        currentView={currentView} 
        onLoginClick={() => setIsLoginOpen(true)}
        user={user}
      />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />

      <main>
        {currentView === 'home' && (
          <>
            <Hero onReportClick={() => handleNavigate('report')} />
            <Features />
            <HowItWorks />
            <Stats />
            
            {/* CTA Section - Floating Card Style */}
            <section className="py-24 bg-slate-50 px-4">
              <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-civic-teal/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -ml-32 -mb-32"></div>
                
                <div className="relative z-10 p-12 md:p-20 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-civic-teal text-sm font-medium mb-6">
                    <Smartphone className="w-4 h-4" />
                    <span>Available on iOS & Android</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-civic-navy mb-6">
                    Ready to Improve Your Community?
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
                    Join thousands of engaged citizens who are making their neighborhoods better, one report at a time.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => handleNavigate('report')} className="h-14 px-8 text-lg">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      onClick={() => {}} 
                      className="h-14 px-8 text-lg border-2 border-civic-navy text-civic-navy hover:bg-slate-50"
                    >
                      Schedule a Demo
                    </Button>
                  </div>
                  
                  <p className="mt-8 text-sm text-slate-400">
                    No credit card required • Free for individual citizens
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'report' && (
          <div className="min-h-[calc(100vh-80px)] bg-slate-50 py-12">
            <div className="container mx-auto px-4 animate-in fade-in duration-500">
              <ReportForm 
                onSuccess={() => handleNavigate('success')} 
                onCancel={() => handleNavigate('home')} 
              />
            </div>
          </div>
        )}

        {currentView === 'success' && (
          <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-50 py-20 px-4">
            <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full animate-in zoom-in-95 duration-500 border border-slate-100">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 mx-auto">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-civic-navy mb-4">Report Submitted!</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Thank you for being an active citizen. We've sent your report to the relevant department. You'll receive updates via email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => handleNavigate('home')} variant="outline" className="w-full">
                  Back to Home
                </Button>
                <Button onClick={() => handleNavigate('report')} className="w-full">
                  Submit Another
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;