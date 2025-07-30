import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navigationItems = [
    { label: 'Home', target: 'home', icon: 'Home' },
    { label: 'Features', target: 'features', icon: 'Zap' },
    { label: 'Team', target: 'team', icon: 'Users' },
    { label: 'Innovation', target: 'innovation', icon: 'Rocket' },
    { label: 'Get Started', target: 'get-started', icon: 'ArrowRight' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.target);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 spring ${
        scrolled ? 'glass glow-primary' : 'bg-transparent'
      }`}>
        <div className="px-5 lg:px-10">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer magnetic"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                  <Icon name="Car" size={24} color="var(--color-primary-foreground)" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-bold text-foreground">
                  Quick<span className="text-primary">Ride</span>
                </h1>
                <p className="text-xs font-caption text-muted-foreground -mt-1">
                  Future of Transport
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`relative px-4 py-2 rounded-lg font-body font-medium transition-all duration-200 spring magnetic ${
                    activeSection === item.target
                      ? 'text-primary bg-primary/10 glow-sm' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Icon name={item.icon} size={16} />
                    <span>{item.label}</span>
                  </span>
                  {activeSection === item.target && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full glow-primary" />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                variant="default"
                iconName="Download"
                iconPosition="right"
                className="magnetic glow-primary"
                onClick={() => scrollToSection('get-started')}
              >
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg glass magnetic hover:glow-primary transition-all duration-200"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="var(--color-foreground)" 
              />
            </button>
          </div>
        </div>

        {/* Navigation Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative glass m-4 mt-20 rounded-2xl p-6 animate-slide-down">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 spring ${
                    activeSection === item.target
                      ? 'text-primary bg-primary/10 glow-sm' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-body font-medium">{item.label}</span>
                  {activeSection === item.target && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full glow-primary" />
                  )}
                </button>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-border">
              <Button
                variant="default"
                iconName="Download"
                iconPosition="right"
                fullWidth
                className="glow-primary"
                onClick={() => scrollToSection('get-started')}
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;