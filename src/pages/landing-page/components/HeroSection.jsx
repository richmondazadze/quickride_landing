import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const carRef = useRef(null);

  const fullText = "Experience the Future of Transportation";
  const subText = "Join thousands of riders and drivers in the most innovative ride-hailing platform. Fast, safe, and sustainable transportation at your fingertips.";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
      style={{
        transform: `translateY(${scrollY * 0.05}px)`,
        opacity: Math.max(0.5, 1 - scrollY * 0.0005)
      }}
    >
      {/* Mockup Image */}
      <div 
        ref={carRef}
        className="absolute right-8 top-1/5 transform -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{
          transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5 + scrollY * 0.3}px, 0) rotateY(${mousePosition.x * 0.2 + scrollY * 0.1}deg) rotateX(${-mousePosition.y * 0.1 + scrollY * 0.05}deg) rotateZ(${scrollY * 0.2}deg)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        <div className="relative w-64 h-64 lg:w-[700px] lg:h-[700px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/assets/images/mockup.webp" 
              alt="QuickRide App Mockup" 
              className="w-96 h-96 lg:w-[600px] lg:h-[600px] object-contain transform-3d animate-float glow-primary"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))'
              }}
            />
            {/* LED Rings */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-spin-slow" />
            <div className="absolute inset-4 rounded-2xl border border-secondary/20 animate-spin-reverse" />
          </div>
        </div>
      </div>



      {/* Content */}
      <div 
        className="relative z-10 text-left px-6 lg:px-12 max-w-4xl mx-auto lg:mr-auto lg:ml-0"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.max(0.3, 1 - scrollY * 0.001)
        }}
      >
                  <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 glow-accent animate-bounce-subtle">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-body font-medium text-foreground">Now Available in Kumasi</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            <span className="block">
              {typewriterText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg lg:text-xl text-muted-foreground font-body max-w-2xl mb-8 leading-relaxed transition-all duration-300 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {subText}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12 transition-all duration-300 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <Button
              variant="default"
              size="lg"
              iconName="Download"
              iconPosition="right"
              className="magnetic glow-primary min-w-48"
              onClick={() => {
                const element = document.getElementById('get-started');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Download App
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="UserPlus"
              iconPosition="left"
              className="magnetic min-w-48 hidden sm:flex"
              onClick={() => {
                const element = document.getElementById('get-started');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Become a Driver
            </Button>
          </div>

          {/* Stats */}
          <div className={`flex flex-row justify-between items-start gap-4 sm:gap-8 max-w-2xl transition-all duration-300 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="text-left flex-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary mb-1 sm:mb-2">10K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-body">Active Riders</div>
            </div>
            <div className="text-left flex-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-secondary mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-body">Verified Drivers</div>
            </div>
            <div className="text-left flex-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent mb-1 sm:mb-2">50K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-body">Rides Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToFeatures}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center glow-primary">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float glow-primary opacity-40" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float-delayed glow-secondary opacity-30" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-accent rounded-full animate-float glow-accent opacity-30" />
    </section>
  );
};

export default HeroSection;