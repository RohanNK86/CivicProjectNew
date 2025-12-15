import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { ReportForm } from './components/ReportForm';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { CheckCircle2 } from 'lucide-react';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-civic-cream font-sans text-civic-slate">
      <Header onNavigate={handleNavigate} currentView={currentView} />

      <main>
        {currentView === 'home' && (
          <>
            <Hero onReportClick={() => handleNavigate('report')} />
            <Stats />
            <Features />
            <HowItWorks />
            
            {/* CTA Section */}
            <section className="py-24 bg-civic-navy text-center px-4">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to improve your neighborhood?</h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Join thousands of citizens making a difference. It takes less than a minute.
                </p>
                <Button size="lg" onClick={() => handleNavigate('report')}>
                  Start a Report
                </Button>
              </div>
            </section>
          </>
        )}

        {currentView === 'report' && (
          <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
            <ReportForm 
              onSuccess={() => handleNavigate('success')} 
              onCancel={() => handleNavigate('home')} 
            />
          </div>
        )}

        {currentView === 'success' && (
          <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-civic-navy mb-4">Report Submitted!</h2>
            <p className="text-slate-600 max-w-md mb-8">
              Thank you for being an active citizen. We've sent your report to the relevant department. You'll receive updates via email.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => handleNavigate('home')} variant="secondary">
                Back to Home
              </Button>
              <Button onClick={() => handleNavigate('report')}>
                Submit Another
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;