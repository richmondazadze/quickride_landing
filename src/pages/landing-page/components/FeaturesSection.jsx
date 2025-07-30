import React from 'react';
import FeatureCard from './FeatureCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';



const FeaturesSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Lightning Fast Booking",
      description: "Book your ride in seconds with our AI-powered matching system. No more waiting - your driver is always nearby.",
      features: [
        "Instant driver matching",
        "Real-time GPS tracking",
        "Smart route optimization"
      ]
    },
    {
      icon: "Shield",
      title: "Safety First",
      description: "Your safety is our priority. Every ride is monitored with advanced security features and verified drivers.",
      features: [
        "Background-checked drivers",
        "24/7 safety monitoring",
        "Emergency assistance button"
      ]
    },
    {
      icon: "Leaf",
      title: "Eco-Friendly Rides",
      description: "Reduce your carbon footprint with our electric and hybrid vehicle fleet. Sustainable transportation for a better future.",
      features: [
        "Electric vehicle priority",
        "Carbon offset tracking",
        "Green rewards program"
      ]
    },
    {
      icon: "CreditCard",
      title: "Seamless Payments",
      description: "Multiple payment options with secure transactions. Pay with cash, card, or mobile money - whatever works for you.",
      features: [
        "Multiple payment methods",
        "Automatic fare calculation",
        "Digital receipts"
      ]
    },
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Need a ride at any time? We're here for you around the clock with drivers ready to serve you anytime, anywhere.",
      features: [
        "Round-the-clock service",
        "Night ride safety features",
        "Priority booking system"
      ]
    },
    {
      icon: "Star",
      title: "Premium Experience",
      description: "Enjoy luxury rides with professional drivers, clean vehicles, and exceptional service that exceeds expectations.",
      features: [
        "Professional drivers",
        "Premium vehicle options",
        "Personalized service"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 px-6 lg:px-12 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 glow-accent">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-body font-medium text-foreground">Why Choose QuickRide</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            Features That Make Us
            <span className="block text-primary">Different</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of ride-hailing with cutting-edge technology, 
            unmatched safety, and sustainable transportation solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="glass rounded-2xl p-8 lg:p-12 glow-secondary">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Join thousands of satisfied customers who have already made the switch to smarter transportation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
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
                Get Started Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="magnetic min-w-48"
                onClick={() => {
                  const element = document.getElementById('features');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-8 w-3 h-3 bg-secondary rounded-full animate-float glow-secondary opacity-40" />
      <div className="absolute bottom-40 right-12 w-4 h-4 bg-accent rounded-full animate-float-delayed glow-accent opacity-30" />
    </section>
  );
};

export default FeaturesSection;