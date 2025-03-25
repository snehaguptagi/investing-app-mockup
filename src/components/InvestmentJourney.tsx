
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Search, Filter, CreditCard, BarChart3, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProgressIndicator from './ProgressIndicator';

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const InvestmentJourney = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const steps: JourneyStep[] = [
    {
      id: 1,
      title: "Discover Investments",
      description: "Browse through curated investment options and filter based on your preferences.",
      icon: <Search className="h-6 w-6" />,
      color: "bg-grip-blue",
    },
    {
      id: 2,
      title: "Compare Options",
      description: "Analyze and compare risk, returns, and tenure to find the perfect match.",
      icon: <Filter className="h-6 w-6" />,
      color: "bg-grip-lightblue",
    },
    {
      id: 3,
      title: "Invest Seamlessly",
      description: "Complete your investment with a streamlined, secure payment process.",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-grip-accent",
    },
    {
      id: 4,
      title: "Track Performance",
      description: "Monitor your investment growth and receive timely updates.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-purple-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animation when section is visible
          const interval = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
          }, 3000);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [steps.length]);

  return (
    <section id="invest" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-grip-blue bg-grip-blue/10 rounded-full mb-4">
            STREAMLINED PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grip-dark text-balance">
            Your Investment Journey <span className="text-gradient">Simplified</span>
          </h2>
          <p className="text-grip-neutral max-w-2xl mx-auto">
            We've redesigned the investment experience to be intuitive and efficient,
            focusing on what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Journey visualization */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <ProgressIndicator 
                steps={steps} 
                currentStep={currentStep} 
                onStepClick={setCurrentStep} 
              />
              
              <div className="mt-12 p-6 glass-card rounded-xl">
                <div className="flex items-center mb-4">
                  <div className={cn("p-3 rounded-lg mr-4", steps[currentStep].color)}>
                    {steps[currentStep].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-grip-dark">
                    {steps[currentStep].title}
                  </h3>
                </div>
                <p className="text-grip-neutral mb-4">
                  {steps[currentStep].description}
                </p>
                
                {currentStep === 0 && (
                  <div className="bg-grip-lightest p-4 rounded-lg border border-grip-light">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 text-xs bg-white border border-grip-light rounded-md">Returns: 12-14%</span>
                      <span className="px-2 py-1 text-xs bg-white border border-grip-light rounded-md">Tenure: 12-36 months</span>
                      <span className="px-2 py-1 text-xs bg-white border border-grip-light rounded-md">Min: ₹1,000</span>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search investments..." 
                        className="w-full p-2 pl-8 border border-grip-light rounded-md"
                      />
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-grip-neutral" />
                    </div>
                  </div>
                )}
                
                {currentStep === 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-grip-lightest rounded-lg border border-grip-light">
                      <div className="text-sm font-medium mb-1">Corporate Bond</div>
                      <div className="text-xs text-grip-neutral">Returns: 12%</div>
                      <div className="text-xs text-grip-neutral">Tenure: 24 months</div>
                    </div>
                    <div className="p-3 bg-grip-lightest rounded-lg border border-grip-light relative">
                      <div className="absolute -top-2 -right-2 bg-grip-accent text-white text-xs px-2 py-0.5 rounded-full">Best Pick</div>
                      <div className="text-sm font-medium mb-1">Securitized Debt</div>
                      <div className="text-xs text-grip-neutral">Returns: 14%</div>
                      <div className="text-xs text-grip-neutral">Tenure: 36 months</div>
                    </div>
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="bg-grip-lightest p-4 rounded-lg border border-grip-light">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium">Investment Amount</span>
                      <span className="text-sm font-bold">₹10,000</span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium">Expected Returns</span>
                      <span className="text-sm font-bold text-grip-accent">₹2,800 (14%)</span>
                    </div>
                    <Button className="w-full bg-grip-blue hover:bg-grip-blue/90 text-white mt-2">
                      Complete Investment
                    </Button>
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="bg-grip-lightest p-4 rounded-lg border border-grip-light">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Current Value</span>
                      <span className="text-sm font-bold">₹11,400</span>
                    </div>
                    <div className="w-full bg-grip-light rounded-full h-2 mb-3">
                      <div className="bg-grip-accent h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-grip-neutral">
                      <span>Investment Date: 01 Jan 2023</span>
                      <span>Maturity: 01 Jan 2026</span>
                    </div>
                  </div>
                )}
                
                <Button 
                  variant="ghost" 
                  className="mt-4 text-grip-blue hover:text-grip-blue hover:bg-grip-blue/5 p-0 h-auto flex items-center group"
                  onClick={() => setCurrentStep((currentStep + 1) % steps.length)}
                >
                  Next step
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Key features */}
          <div className="order-1 lg:order-2 space-y-6">
            <FeatureCard 
              icon={<ShieldCheck className="h-5 w-5 text-grip-blue" />}
              title="SEBI Regulated"
              description="Invest with confidence knowing that all investments on Grip are regulated by SEBI."
            />
            <FeatureCard 
              icon={<AlertTriangle className="h-5 w-5 text-amber-500" />}
              title="Transparent Risk Disclosure"
              description="Clear information about the risks associated with each investment option."
            />
            <FeatureCard 
              icon={<CreditCard className="h-5 w-5 text-grip-accent" />}
              title="Low Minimum Investment"
              description="Start your investment journey with as little as ₹1,000 and diversify your portfolio."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-5 w-5 text-purple-500" />}
              title="Real-time Tracking"
              description="Monitor your investment performance with intuitive dashboards and timely updates."
            />
            
            <div className="pt-4">
              <Button className="bg-grip-blue hover:bg-grip-blue/90 text-white px-6 py-6">
                Explore Investment Options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="p-6 glass-card rounded-xl hover-lift">
    <div className="flex items-start">
      <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-grip-blue mb-1">{title}</h3>
        <p className="text-grip-neutral text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export default InvestmentJourney;
