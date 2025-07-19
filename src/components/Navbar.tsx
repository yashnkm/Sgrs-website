import React, { useState } from 'react';
import { handleLenisScrollClick } from '../utils/lenisScrollTo';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    handleLenisScrollClick(
      e, 
      targetId, 
      () => setIsMobileMenuOpen(false), 
      1.5
    );
  };


  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-b-slate-200 transition-all duration-300"
    >
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-6 h-full">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 transition-transform duration-300">
          <img 
            alt="Company Logo" 
            className="h-8 w-8 text-blue-600" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyD7MAJLFaCyz2lxpp97nzvjSTSqa2K3sW6BZTu9r_vJU09HfyzcbusPGh2FdppOUcCyXN5n75esjjuI-B2flmHWq3XY2nSwy2uZVeXtHgDevA-CDhYSELB0PQ7pSXUn0C4789jVCsOhdfGIzuYN25EVvcewFpM6XVkcVP0T_AGZQEEQS2rlrYiw4m7fLiXeXmfoFAYq_HWAJPLQSP29fs64c3mw6QuF-LlyB3NSC7Hcj_9CFbcPAYv7Ycb4HcTVdRuyVFsUJOhE"
          />
          <h2 className="text-slate-900 text-xl font-bold tracking-tight">
            Shree Ganesh Refrigeration
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            className="nav-link relative text-slate-900 text-sm font-medium hover:text-blue-600 transition-all duration-300 py-2 px-1 group"
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="nav-link relative text-slate-900 text-sm font-medium hover:text-blue-600 transition-all duration-300 py-2 px-1 group"
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="nav-link relative text-slate-900 text-sm font-medium hover:text-blue-600 transition-all duration-300 py-2 px-1 group"
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="nav-link relative text-slate-900 text-sm font-medium hover:text-blue-600 transition-all duration-300 py-2 px-1 group"
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="nav-link relative text-slate-900 text-sm font-medium hover:text-blue-600 transition-all duration-300 py-2 px-1 group"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <button 
          className="cta-button hidden md:flex min-w-[120px] items-center justify-center rounded-md h-10 px-5 bg-orange-600 text-white hover:bg-orange-700 transition-all duration-150 text-sm font-bold"
          onClick={(e) => {
            handleLenisScrollClick(e as any, '#contact', undefined, 1.2);
          }}
        >
          <span className="truncate">Get Free Quote</span>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 6h16M4 12h16m-7 6h7" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a 
              className="block text-slate-900 text-sm font-medium hover:text-blue-600 transition-colors" 
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
            >
              Home
            </a>
            <a 
              className="block text-slate-900 text-sm font-medium hover:text-blue-600 transition-colors" 
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
            >
              Services
            </a>
            <a 
              className="block text-slate-900 text-sm font-medium hover:text-blue-600 transition-colors" 
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </a>
            <a 
              className="block text-slate-900 text-sm font-medium hover:text-blue-600 transition-colors" 
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              Projects
            </a>
            <a 
              className="block text-slate-900 text-sm font-medium hover:text-blue-600 transition-colors" 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </a>
            <button 
              className="w-full flex items-center justify-center rounded-md h-10 px-5 bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300 text-sm font-bold"
              onClick={(e) => {
                handleLenisScrollClick(e as any, '#contact', () => setIsMobileMenuOpen(false), 1.2);
              }}
            >
              <span className="truncate">Get Free Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;