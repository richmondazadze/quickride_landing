import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMousePosition({
        x: (e.clientX - centerX) / 10,
        y: (e.clientY - centerY) / 10
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 20px) rotateX(${-mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
          : 'translate3d(0, 0, 0) rotateX(0) rotateY(0)'
      }}
    >
      {/* Card Background */}
              <div className={`relative glass rounded-2xl p-8 h-full transition-all duration-150 ${
        isHovered ? 'glow-primary' : ''
      }`}>
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Icon Container */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-all duration-200 ${
            isHovered ? 'scale-105 glow-primary' : 'scale-100'
          }`}>
            <Icon 
              name={feature.icon} 
              size={32} 
              color={isHovered ? "var(--color-primary)" : "var(--color-muted-foreground)"} 
            />
          </div>
          
          {/* Floating Ring */}
          <div className={`absolute inset-0 w-16 h-16 rounded-2xl border-2 border-primary/30 transition-all duration-500 ${
            isHovered ? 'scale-125 opacity-100 animate-spin-slow' : 'scale-100 opacity-0'
          }`} />
        </div>

        {/* Content */}
        <div className="relative space-y-4">
          <h3 className={`text-xl font-heading font-bold transition-colors duration-300 ${
            isHovered ? 'text-primary' : 'text-foreground'
          }`}>
            {feature.title}
          </h3>
          
          <p className="text-muted-foreground font-body leading-relaxed">
            {feature.description}
          </p>

          {/* Feature List */}
          {feature.features && (
            <ul className="space-y-2 mt-6">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full glow-primary" />
                  <span className="text-sm text-muted-foreground font-body">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Hover Effect Arrow */}
          <div className={`flex items-center space-x-2 mt-6 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'
          }`}>
            <span className="text-sm font-body font-medium text-primary">Learn More</span>
            <Icon name="ArrowRight" size={16} color="var(--color-primary)" />
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-4 right-4 w-2 h-2 bg-primary rounded-full transition-all duration-300 ${
          isHovered ? 'scale-150 glow-primary' : 'scale-100'
        }`} />
      </div>

      {/* 3D Shadow */}
      <div className={`absolute inset-0 bg-primary/5 rounded-2xl blur-xl transition-all duration-300 -z-10 ${
        isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
      }`} />
    </div>
  );
};

export default FeatureCard;