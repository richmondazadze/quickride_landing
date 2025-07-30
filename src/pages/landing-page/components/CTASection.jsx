import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section id="get-started" ref={sectionRef} className="py-20 lg:py-32 px-6 lg:px-12 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 glow-accent">
            <Icon name="Download" size={16} className="text-primary" />
            <span className="text-sm font-body font-medium text-foreground">Get Started Today</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            Ready to Experience
            <span className="block text-primary">The Future?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied users who have already made the switch to smarter, 
            safer, and more sustainable transportation.
          </p>
        </div>



        {/* App Download Section */}
        <div className="max-w-2xl mx-auto">
          <div className={`transition-all duration-300 spring ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="glass rounded-2xl p-8 lg:p-12 glow-secondary">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-primary">
                      <Icon name="Smartphone" size={40} color="var(--color-primary-foreground)" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                      Download QuickRide App
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Get the app and start riding in minutes. Available on all platforms.
                    </p>
                  </div>

                  {/* Download Buttons */}
                  <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* App Store Button */}
                  <a 
                    href="/" 
                    className="flex-1 group transition-all duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full h-16 bg-gray-900 border border-gray-700 rounded-2xl p-4 flex items-center space-x-4 hover:bg-gray-800 transition-all duration-300 shadow-lg">
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <img 
                          src="/assets/images/appstoreicon.webp" 
                          alt="App Store"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-body">Download on the</span>
                        <span className="text-lg font-bold text-white font-heading">App Store</span>
                      </div>
                    </div>
                  </a>
                  
                  {/* Google Play Button */}
                  <a 
                    href="/" 
                    className="flex-1 group transition-all duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full h-16 bg-gray-900 border border-gray-700 rounded-2xl p-4 flex items-center space-x-4 hover:bg-gray-800 transition-all duration-300 shadow-lg">
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <img 
                          src="/assets/images/playstoreicon.webp" 
                          alt="Google Play"
                          className="w-10 h-10"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-body">Get it on</span>
                        <span className="text-lg font-bold text-white font-heading">Google Play</span>
                      </div>
                    </div>
                  </a>
                    </div>
                  </div>
                </div>
              </div>
        </div>



        {/* Bottom CTA */}
        <div className={`text-center mt-16 lg:mt-24 transition-all duration-300 spring delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass rounded-2xl p-8 lg:p-12 glow-primary">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Questions? We're Here to Help
            </h3>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Our support team is available 24/7 to assist you with any questions 
              about getting started with QuickRide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="magnetic min-w-48"
              >
                Live Chat Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="magnetic min-w-48"
              >
                Call +233 24 123 4567
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-8 w-4 h-4 bg-primary rounded-full animate-float glow-primary opacity-40" />
      <div className="absolute bottom-32 right-12 w-3 h-3 bg-secondary rounded-full animate-float-delayed glow-secondary opacity-50" />
      <div className="absolute top-1/3 right-8 w-2 h-2 bg-accent rounded-full animate-float glow-accent opacity-30" />
    </section>
  );
};

export default CTASection;