
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, TrendingDown, AlertCircle, Info, ChevronDown, CheckCircle2 } from 'lucide-react';

const RiskDisclosure = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const disclosureSections = [
    {
      icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
      title: "Market Risks",
      content: "All investments are subject to market risks, including the possibility of fluctuations in interest rates and credit risks. Past performance does not guarantee future returns."
    },
    {
      icon: <TrendingDown className="h-5 w-5 text-red-500" />,
      title: "Default Risks",
      content: "In the event of a default, recovery of assets depends on multiple factors including the legal structure of the instrument and underlying collateral."
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-grip-blue" />,
      title: "Liquidity Constraints",
      content: "Investments are typically locked for the tenure with limited options for early redemption. Consider your liquidity needs before investing."
    },
    {
      icon: <Info className="h-5 w-5 text-slate-500" />,
      title: "Regulatory Compliance",
      content: "All investments are governed by SEBI regulations and other applicable laws. Changes in regulatory frameworks may impact investment outcomes."
    }
  ];

  return (
    <section className="py-16 bg-grip-lightest">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-grip-blue bg-grip-blue/10 rounded-full mb-4">
              TRANSPARENCY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grip-dark">
              Understanding Investment <span className="text-gradient">Risks</span>
            </h2>
            <p className="text-grip-neutral max-w-2xl mx-auto">
              At Grip, we believe in complete transparency. Before you invest, it's important to understand 
              the potential risks associated with your investment decisions.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {disclosureSections.map((section, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white rounded-xl overflow-hidden transition-all duration-300 border",
                  expandedSection === index 
                    ? "border-grip-blue/20 shadow-md" 
                    : "border-grip-light hover:border-grip-blue/10 hover:shadow-sm"
                )}
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg shadow-sm mr-3">
                      {section.icon}
                    </div>
                    <h3 className="font-medium text-grip-dark">{section.title}</h3>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-grip-neutral transition-transform",
                      expandedSection === index && "transform rotate-180"
                    )} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    expandedSection === index ? "max-h-40" : "max-h-0"
                  )}
                >
                  <div className="p-4 pt-0 text-grip-neutral text-sm border-t border-grip-light">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 rounded-xl border border-grip-blue/10">
            <div className="flex items-start">
              <div className="bg-grip-blue/10 p-2 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-grip-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-grip-dark mb-2">Our Commitment to You</h3>
                <p className="text-grip-neutral text-sm mb-4">
                  While we can't eliminate investment risks, we take every measure to secure your investments through:
                </p>
                
                <ul className="space-y-2 mb-4">
                  {[
                    "Thorough due diligence on all investment opportunities",
                    "Transparent disclosure of all associated risks",
                    "SEBI-regulated investment process",
                    "Robust security measures to protect your information"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-grip-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-grip-neutral">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="bg-grip-blue hover:bg-grip-blue/90 text-white">
                  Learn More About Our Security
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskDisclosure;
