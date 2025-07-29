import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import citLogo from '../img/CIT Logo Yellow-Autonomous(1).png';
import citbifLogo from '../img/CITBIF logo Final-02 (1).png';
import innovest from '../img/innovest.png';
import citil from '../img/CITIL.jpeg';
import Gallery_Header from './GalleryHeader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect and smooth scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    // Smooth scroll to section when URL has hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check for hash on page load
    handleHashChange();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle navigation click with smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's the home link
    if (href === '/') {
      if (window.location.pathname !== '/') {
        // If we're not on the home page, navigate to home
        window.location.href = '/';
      } else {
        // If we're on the home page, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState({}, '', '/');
      }
      return;
    }
    
    // For other links (with hashes)
    const targetId = href.replace(/.*#/, '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Update URL without triggering a page reload
      window.history.pushState({}, '', href);
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const eventDays = [
    { 
      name: 'Day 1', 
      date: 'August 18, 2025',
      theme: 'IgniteX',
      href: '#day1'
    },
    { 
      name: 'Day 2', 
      date: 'August 19, 2025',
      theme: 'Deep Sprint 2025',
      href: '#day2'
    },
    { 
      name: 'Day 3', 
      date: 'August 20, 2025',
      theme: 'Demo Day',
      href: '#day3'
    }
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/#schedule', hasDropdown: true },
    
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-xl shadow-lg border-b border-white/20' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <div className="h-12 w-auto flex items-center">
              <a 
                href="https://www.citchennai.edu.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-16 flex items-center"
              >
                <img 
                  src={citLogo} 
                  alt="CIT Logo" 
                  className="h-14 w-auto object-contain"
                />
              </a>
            </div>
            <div className="h-16 w-auto flex items-center">
              <img 
                src={citbifLogo} 
                alt="CITBIF Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="h-18 w-auto flex items-center">
              <a 
                href="http://www.citinnovationlabs.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-11 flex items-center"
              >
                <img 
                  src={citil} 
                  alt="CIT Innovation Labs Logo" 
                  className="h-full w-auto object-contain"
                />
              </a>
            </div>
            <div className="h-16 w-auto flex items-center">
              <img 
                src={innovest} 
                alt="Innovest Logo" 
                className="h-14 w-61 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div className="relative group">
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2.5 text-sm font-medium flex items-center rounded-md hover:bg-gray-50 transition-colors duration-200"
                      onMouseEnter={() => setActiveDropdown(item.name === 'Events' ? 'events' : null)}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>
                    
                    {item.name === 'Events' && (
                      <div 
                        className={`absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-200 origin-top ${
                          activeDropdown === 'events' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {eventDays.map((day, index) => (
                          <Link
                            key={index}
                            to={day.href}
                            className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-150"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <div className="font-medium text-gray-900">{day.name}</div>
                            <div className="text-sm text-gray-500">{day.date}</div>
                            <div className="text-sm text-blue-600 font-medium">{day.theme}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </nav>
            
            {/* DeepSprint Button */}
            <Link
              to="/innovesthack"
              className="ml-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2.5 rounded-md text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              DeepSprint 2025
            </Link>
            {/* DeepSprint Button */}
            {/* <Link
              to="/gallery_header"
              className="ml-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2.5 rounded-md text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              Gallery of 2025
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 py-2 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="px-3 py-2.5 text-sm text-gray-700 font-medium rounded-md hover:bg-gray-50">
                        {item.name}
                      </div>
                      <div className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                        {eventDays.map((day, index) => (
                          <Link
                            key={index}
                            to={day.href}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(day.href.replace('#', ''));
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                              }
                            }}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
                          >
                            <div className="font-medium">{day.name}</div>
                            <div className="text-xs text-gray-500">{day.date}</div>
                            <div className="text-xs font-medium text-blue-600">{day.theme}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href);
                        setIsMenuOpen(false);
                      }}
                      className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-200">
                <Link
                  to="/innovesthack"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2.5 rounded-md text-sm font-medium shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  DeepSprint 2025
                </Link>
              </div>
              <div className="pt-2 mt-2 border-t border-gray-200">
                <Link
                  to="/#gallery_header"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2.5 rounded-md text-sm font-medium shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery of 2024
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
