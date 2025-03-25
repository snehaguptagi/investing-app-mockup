
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InvestmentJourney from '@/components/InvestmentJourney';
import RiskDisclosure from '@/components/RiskDisclosure';
import EducationSection from '@/components/EducationSection';
import AssetCard from '@/components/AssetCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUp, ShieldCheck, MessageSquare, Mail } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Account for navbar height
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <InvestmentJourney />
        
        {/* Featured Investments */}
        <section className="py-20 bg-grip-lightest">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-grip-blue bg-grip-blue/10 rounded-full mb-4">
                TOP INVESTMENTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grip-dark">
                Curated <span className="text-gradient">Investment</span> Opportunities
              </h2>
              <p className="text-grip-neutral max-w-2xl mx-auto">
                Discover hand-picked investment options with competitive returns and varying risk profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AssetCard 
                title="Corporate Bond" 
                description="Investment-grade debt instrument issued by a corporation to raise capital."
                returns="12% p.a."
                tenure="24 months"
                minInvestment="₹ 10,000"
                risk="Low"
              />
              
              <AssetCard 
                title="Securitized Debt" 
                description="Asset-backed securities offering higher returns with managed risk exposure."
                returns="14% p.a."
                tenure="36 months"
                minInvestment="₹ 25,000"
                risk="Medium"
                recommended={true}
              />
              
              <AssetCard 
                title="Higher Yield Bond" 
                description="High-yield corporate bond with increased returns and associated risk."
                returns="13.5% p.a."
                tenure="18 months"
                minInvestment="₹ 50,000"
                risk="High"
              />
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-grip-blue hover:bg-grip-blue/90 text-white px-8 group">
                View All Investments
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        <RiskDisclosure />
        <EducationSection />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-grip-blue bg-grip-blue/10 rounded-full mb-4">
                  ABOUT GRIP
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grip-dark">
                  Redefining <span className="text-gradient">Alternative</span> Investments
                </h2>
                <p className="text-grip-neutral mb-6">
                  Grip enables investment in regulated debt instruments like bonds and Securitized debt
                  instruments, offering a seamless and secure platform for alternative investments.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "SEBI Regulated",
                      description: "Grip is regulated by the Securities and Exchange Board of India, ensuring compliance with all regulatory standards."
                    },
                    {
                      title: "Industry Leading Returns",
                      description: "Our investments offer returns up to 14% p.a., significantly higher than traditional fixed income options."
                    },
                    {
                      title: "Community of 50,000+ Investors",
                      description: "Join a growing community of investors who trust Grip for their alternative investment needs."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-1 bg-grip-blue mr-4 rounded-full"></div>
                      <div>
                        <h3 className="text-sm font-semibold text-grip-dark mb-1">{item.title}</h3>
                        <p className="text-xs text-grip-neutral">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-grip-blue hover:bg-grip-blue/90 text-white px-6">
                  Learn More About Grip
                </Button>
              </div>
              
              <div className="bg-grip-lightest p-8 rounded-xl relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-grip-blue/5"></div>
                <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-grip-accent/5"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-grip-dark mb-6">Our Vision</h3>
                  
                  <blockquote className="border-l-4 border-grip-blue pl-4 mb-8">
                    <p className="text-grip-blue italic mb-2">
                      "We're building the future of alternative investments by making it accessible, transparent, and rewarding for everyone."
                    </p>
                    <footer className="text-sm text-grip-neutral">— Grip Leadership Team</footer>
                  </blockquote>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-grip-blue mb-1">$100M+</div>
                      <div className="text-xs text-grip-neutral">Annualized Investments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-grip-blue mb-1">$1B</div>
                      <div className="text-xs text-grip-neutral">2028 Target</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-grip-blue mb-1">5+</div>
                      <div className="text-xs text-grip-neutral">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-grip-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="tracking-tight">GRIP</span>
                <span className="text-grip-accent">®</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Redefining alternative investments with regulated debt instruments offering superior returns.
              </p>
              <div className="flex space-x-4">
                <SocialIcon href="#" ariaLabel="Twitter">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" ariaLabel="LinkedIn">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" ariaLabel="Instagram">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </SocialIcon>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Investments", href: "#invest" },
                  { label: "Learning Center", href: "#learn" },
                  { label: "About Us", href: "#about" },
                  { label: "FAQs", href: "#faqs" },
                  { label: "Blog", href: "#blog" },
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {[
                  { label: "Terms of Service", href: "#" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Risk Disclosure", href: "#" },
                  { label: "SEBI Compliance", href: "#" },
                  { label: "Security", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-grip-accent mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm text-white/90">Email Us</div>
                    <a href="mailto:support@gripinvest.com" className="text-sm text-white/70 hover:text-white">
                      support@gripinvest.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-grip-accent mr-3 mt-0.5" />
                  <div>
                    <div className="text-sm text-white/90">Chat Support</div>
                    <p className="text-sm text-white/70">
                      Monday to Friday, 10am - 6pm
                    </p>
                  </div>
                </li>
                <li className="mt-6">
                  <Button className="bg-white text-grip-dark hover:bg-white/90 w-full">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    Get Support
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Grip Invest. All rights reserved.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center text-white/50 hover:text-white text-sm transition-colors"
            >
              Back to top
              <ArrowUp className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialIcon = ({ 
  href, 
  ariaLabel, 
  children 
}: { 
  href: string; 
  ariaLabel: string; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="bg-white/10 hover:bg-white/20 h-8 w-8 rounded-full flex items-center justify-center transition-colors"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default Index;
