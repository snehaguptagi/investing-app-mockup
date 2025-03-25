
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-grip-blue">
            <span className="tracking-tight">GRIP</span>
            <span className="text-grip-accent">®</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#invest">Invest</NavLink>
          <NavLink href="#learn">Learn</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavDropdown 
            label="Resources" 
            items={[
              { label: 'FAQs', href: '#faqs' },
              { label: 'Blog', href: '#blog' },
              { label: 'Support', href: '#support' },
            ]} 
          />
          <Button className="bg-grip-blue text-white hover:bg-grip-blue/90 transition-all">
            Start Investing
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-grip-blue"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ease-out-expo md:hidden',
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <MobileNavLink href="#invest" onClick={toggleMobileMenu}>Invest</MobileNavLink>
          <MobileNavLink href="#learn" onClick={toggleMobileMenu}>Learn</MobileNavLink>
          <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
          <MobileNavLink href="#faqs" onClick={toggleMobileMenu}>FAQs</MobileNavLink>
          <MobileNavLink href="#blog" onClick={toggleMobileMenu}>Blog</MobileNavLink>
          <MobileNavLink href="#support" onClick={toggleMobileMenu}>Support</MobileNavLink>
          <Button className="w-full bg-grip-blue text-white hover:bg-grip-blue/90 transition-all">
            Start Investing
          </Button>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-grip-blue/80 hover:text-grip-blue text-sm font-medium animated-border"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="text-grip-blue text-lg font-medium p-2 border-b border-grip-light"
    onClick={onClick}
  >
    {children}
  </a>
);

const NavDropdown = ({ 
  label, 
  items 
}: { 
  label: string; 
  items: { label: string; href: string }[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        className="text-grip-blue/80 hover:text-grip-blue text-sm font-medium flex items-center space-x-1 animated-border"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown size={16} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </button>

      <div
        className={cn(
          'absolute top-full left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg transition-all duration-200 ease-out-expo origin-top-left',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-4 py-2 text-sm text-grip-dark hover:bg-grip-light/50 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
