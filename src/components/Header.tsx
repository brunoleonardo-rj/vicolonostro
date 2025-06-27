import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-yellow-400">VICOLO</span> NOSTRO
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Cardápio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-white">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(19) 3199-7435</span>
            </div>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left"
              >
                Cardápio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left"
              >
                Contato
              </button>
              <div className="flex items-center text-white pt-2">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">(19) 3199-7435</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;