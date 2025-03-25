
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Lightbulb, Play, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaAction?: () => void;
  className?: string;
}

const EducationSection = () => {
  return (
    <section id="learn" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-grip-blue bg-grip-blue/10 rounded-full mb-4">
            EDUCATION HUB
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grip-dark">
            Become a <span className="text-gradient">Confident</span> Investor
          </h2>
          <p className="text-grip-neutral max-w-2xl mx-auto">
            Access comprehensive resources to enhance your investment knowledge and make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard
            icon={<BookOpen className="h-5 w-5" />}
            label="LEARNING CENTER"
            title="Investment Guides"
            description="Access beginner-friendly guides that explain investment concepts, debt instruments, and strategies in simple terms."
            ctaText="Browse Guides"
            className="bg-grip-blue/5 hover:bg-grip-blue/10"
          />
          
          <ResourceCard
            icon={<Play className="h-5 w-5" />}
            label="VIDEO TUTORIALS"
            title="Expert Insights"
            description="Watch curated videos featuring industry experts sharing insights, tips, and analysis of investment trends."
            ctaText="Watch Videos"
            className="bg-grip-accent/5 hover:bg-grip-accent/10"
          />
          
          <ResourceCard
            icon={<Lightbulb className="h-5 w-5" />}
            label="KNOWLEDGE BASE"
            title="FAQ & Resources"
            description="Find answers to common questions, glossary of investment terms, and downloadable resources."
            ctaText="Explore Resources"
            className="bg-purple-500/5 hover:bg-purple-500/10"
          />
        </div>
        
        {/* Featured learning path */}
        <div className="mt-16 glass-card rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold text-grip-blue tracking-wider mb-2">FEATURED LEARNING PATH</span>
              <h3 className="text-2xl font-bold text-grip-dark mb-3">
                Mastering Fixed Income Investments
              </h3>
              <p className="text-grip-neutral mb-6">
                A comprehensive 5-part course designed to help you understand fixed income securities, 
                analyze risks, and build a resilient portfolio. Perfect for beginners and intermediate investors.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Difficulty", value: "Beginner to Intermediate" },
                  { label: "Duration", value: "5 Hours of Content" },
                  { label: "Format", value: "Videos & Interactive Quizzes" },
                  { label: "Certificate", value: "Yes, Upon Completion" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="text-xs text-grip-neutral mb-1">{item.label}</div>
                    <div className="text-sm font-medium text-grip-dark">{item.value}</div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-grip-blue hover:bg-grip-blue/90 text-white self-start group">
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-grip-blue to-grip-lightblue p-8 text-white flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-4">What You'll Learn:</h4>
              <ul className="space-y-3 mb-6">
                {[
                  "Fundamentals of fixed income securities",
                  "Risk assessment and management techniques",
                  "How to analyze investment opportunities",
                  "Portfolio construction strategies",
                  "Tax implications and optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-0.5">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/30 mr-3"></div>
                    <div>
                      <div className="text-sm font-medium">Taught by</div>
                      <div className="text-xs opacity-80">Financial Experts at Grip</div>
                    </div>
                  </div>
                  <button className="text-white/80 hover:text-white flex items-center text-sm">
                    <span>Preview</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ 
  icon, 
  label, 
  title, 
  description, 
  ctaText, 
  ctaAction, 
  className 
}: ResourceCardProps) => (
  <div className={cn(
    "p-6 rounded-xl transition-all duration-300 hover-lift",
    className
  )}>
    <div className="bg-white p-3 rounded-lg shadow-sm inline-flex mb-4">
      {icon}
    </div>
    <span className="text-xs font-semibold text-grip-neutral tracking-wider">{label}</span>
    <h3 className="text-xl font-semibold text-grip-dark mt-2 mb-3">{title}</h3>
    <p className="text-grip-neutral text-sm mb-4">{description}</p>
    <Button 
      variant="ghost" 
      className="p-0 h-auto text-grip-blue hover:text-grip-blue hover:bg-transparent group"
      onClick={ctaAction}
    >
      {ctaText}
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </div>
);

export default EducationSection;
