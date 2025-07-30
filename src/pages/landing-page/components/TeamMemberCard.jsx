import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TeamMemberCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
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
        x: (e.clientX - centerX) / 15,
        y: (e.clientY - centerY) / 15
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
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 30px) rotateX(${-mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
          : 'translate3d(0, 0, 0) rotateX(0) rotateY(0)'
      }}
    >
      {/* Card Container */}
              <div className={`relative glass rounded-3xl p-8 h-full flex flex-col transition-all duration-150 ${
        isHovered ? 'glow-primary' : ''
      }`}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />



        {/* Member Info */}
        <div className="relative text-center space-y-4 flex-grow flex flex-col justify-center">
          <div>
            <h3 className={`text-xl font-heading font-bold transition-colors duration-300 ${
              isHovered ? 'text-primary' : 'text-foreground'
            }`}>
              {member.name}
            </h3>
            <p className="text-secondary font-body font-medium text-sm mt-1">
              {member.role}
            </p>
          </div>

          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            {member.bio}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {member.skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-xs font-body font-medium rounded-full transition-all duration-300 ${
                  isHovered 
                    ? 'bg-primary/20 text-primary border border-primary/30' :'bg-muted/50 text-muted-foreground border border-transparent'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>


        </div>

        {/* Corner Decoration */}
        <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'scale-125 glow-primary' : 'scale-100'
        }`}>
          <Icon name="Star" size={12} color="var(--color-primary)" />
        </div>

        {/* Floating Ring */}
        <div className={`absolute inset-0 rounded-3xl border-2 border-primary/20 transition-all duration-500 ${
          isHovered ? 'scale-105 opacity-100 animate-spin-slow' : 'scale-100 opacity-0'
        }`} />
      </div>

      {/* 3D Shadow */}
      <div className={`absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transition-all duration-300 -z-10 ${
        isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
      }`} />
    </div>
  );
};

export default TeamMemberCard;