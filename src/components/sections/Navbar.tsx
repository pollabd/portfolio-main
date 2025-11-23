'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-6">
          <a href="#" className="text-base font-semibold text-white hover:text-primary" aria-label="Pollab Das - Home">
            Pollab<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-10" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-primary"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="text-white/60 hover:text-white p-2 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative h-5 w-5">
                <Menu 
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div 
          id="mobile-menu" 
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation" 
          aria-label="Mobile navigation"
        >
          <div className="border-t border-white/5 mt-2 pt-4 pb-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li 
                  key={link.name}
                  className={`transition-all duration-300 ${
                    isMobileMenuOpen 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-2'
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                >
                  <a
                    href={link.href}
                    className="block text-sm text-white/50 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
