import React, { useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const MobileMenuOverlay = ({ 
  isOpen, 
  onClose, 
  sections, 
  activeSection, 
  onSectionChange 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSectionClick = (target) => {
    onSectionChange(target);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-xl animate-fade-in"
        onClick={handleBackdropClick}
      />
      
      {/* Menu Content */}
      <div className="relative glass m-4 mt-20 rounded-2xl p-6 animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
              <Icon name="Car" size={18} color="var(--color-primary-foreground)" />
            </div>
            <div>
              <h2 className="text-lg font-heading font-bold text-foreground">
                Quick<span className="text-primary">Ride</span>
              </h2>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
          >
            <Icon name="X" size={20} color="var(--color-muted-foreground)" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.target}
              onClick={() => handleSectionClick(section.target)}
              className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 spring magnetic ${
                activeSection === section.target
                  ? 'text-primary bg-primary/10 glow-sm' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <div className="flex-shrink-0">
                <Icon name={section.icon} size={20} />
              </div>
              <div className="flex-1 text-left">
                <span className="font-body font-medium block">{section.label}</span>
                {section.description && (
                  <span className="text-xs text-muted-foreground font-caption">
                    {section.description}
                  </span>
                )}
              </div>
              {activeSection === section.target && (
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full glow-primary animate-scale-in" />
              )}
            </button>
          ))}
        </nav>
        
        {/* CTA Section */}
        <div className="mt-6 pt-6 border-t border-border space-y-3">
          <Button
            variant="default"
            iconName="Download"
            iconPosition="right"
            fullWidth
            className="glow-primary"
            onClick={() => handleSectionClick('get-started')}
          >
            Download App
          </Button>
          
          <Button
            variant="outline"
            iconName="UserPlus"
            iconPosition="left"
            fullWidth
            onClick={() => handleSectionClick('get-started')}
          >
            Become a Driver
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-center text-xs font-caption text-muted-foreground">
            Experience the future of transportation
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;