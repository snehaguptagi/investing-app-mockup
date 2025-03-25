
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => {
        observer.observe(child);
        child.classList.add('opacity-0');
      });
    }

    return () => {
      if (children) {
        Array.from(children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white to-grip-light/50 -z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-grip-accent/5 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-grip-blue/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-grip-lightblue/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div ref={containerRef} className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-grip-blue bg-grip-blue/10 rounded-full">
              SEBI REGULATED • SECURE • TRANSPARENT
            </span>
          </div>

          <h1 
            ref={headingRef} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight text-balance"
          >
            <span className="text-gradient">Simplify</span> Your Investment Journey with Grip Invest
          </h1>

          <p className="text-lg md:text-xl text-grip-neutral max-w-2xl mx-auto text-balance">
            Seamlessly invest in regulated debt instruments with fixed returns up to 14%. 
            Start with just ₹1,000 and build your wealth with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              className="bg-grip-blue hover:bg-grip-blue/90 text-white px-6 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              Start Building Your Wealth
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="bg-white border-grip-light hover:bg-grip-light/20 text-grip-dark px-6 py-6 text-base rounded-lg transition-colors"
            >
              Explore Investments
            </Button>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <Stat value="100M+" label="Annualized Investments" />
            <Stat value="50,000+" label="Satisfied Investors" />
            <Stat value="12%+" label="Average Returns" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-grip-blue mb-1">{value}</div>
    <div className="text-sm text-grip-neutral">{label}</div>
  </div>
);

export default Hero;
