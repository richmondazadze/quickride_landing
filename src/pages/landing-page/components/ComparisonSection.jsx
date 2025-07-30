import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const sectionRef = useRef(null);

  const comparisonData = [
    {
      category: "Booking Speed",
      quickride: { value: 15, unit: "seconds", icon: "Zap" },
      traditional: { value: 300, unit: "seconds", icon: "Clock" },
      improvement: "95% faster"
    },
    {
      category: "Driver Response",
      quickride: { value: 2, unit: "minutes", icon: "Car" },
      traditional: { value: 15, unit: "minutes", icon: "Timer" },
      improvement: "87% quicker"
    },
    {
      category: "Safety Rating",
      quickride: { value: 4.9, unit: "/5.0", icon: "Shield" },
      traditional: { value: 3.2, unit: "/5.0", icon: "AlertTriangle" },
      improvement: "53% safer"
    },
    {
      category: "Cost Efficiency",
      quickride: { value: 25, unit: "% savings", icon: "DollarSign" },
      traditional: { value: 0, unit: "% savings", icon: "Minus" },
      improvement: "25% cheaper"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    comparisonData.forEach((item, index) => {
      setTimeout(() => {
        animateValue(item.category, 'quickride', item.quickride.value);
        animateValue(item.category, 'traditional', item.traditional.value);
      }, index * 100);
    });
  };

  const animateValue = (category, type, targetValue) => {
    let currentValue = 0;
    const increment = targetValue / 50;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }
      
      setAnimatedStats(prev => ({
        ...prev,
        [`${category}_${type}`]: currentValue
      }));
    }, 30);
  };

  const getDisplayValue = (category, type, originalValue) => {
    const animatedValue = animatedStats[`${category}_${type}`];
    if (animatedValue === undefined) return 0;
    
    if (originalValue % 1 !== 0) {
      return animatedValue.toFixed(1);
    }
    return Math.round(animatedValue);
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-20 px-6 lg:px-12 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 glow-accent">
            <Icon name="BarChart3" size={16} className="text-primary" />
            <span className="text-sm font-body font-medium text-foreground">Performance Comparison</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            Why QuickRide Outperforms
            <span className="block text-primary">Traditional Taxis</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            See how our innovative technology and smart systems deliver superior 
            performance across all key metrics that matter to you.
          </p>
        </div>

        {/* Mobile-First Comparison Cards */}
        <div className="space-y-6">
          {comparisonData.map((item, index) => (
            <div
              key={item.category}
              className={`glass rounded-2xl p-6 transition-all duration-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-3">
                  {item.category}
                </h3>
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Icon name="TrendingUp" size={16} className="text-primary" />
                  <span className="text-sm font-body font-medium text-primary">
                    {item.improvement}
                  </span>
                </div>
              </div>

              {/* Comparison Cards - Side by Side */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* QuickRide Card */}
                <div className="text-center">
                  <div className="glass rounded-xl p-4 glow-primary">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3 glow-primary">
                      <Icon name={item.quickride.icon} size={24} color="var(--color-primary-foreground)" />
                    </div>
                    <div className="text-lg lg:text-2xl font-heading font-bold text-primary mb-1">
                      {getDisplayValue(item.category, 'quickride', item.quickride.value)}
                      <span className="text-xs text-muted-foreground ml-1">
                        {item.quickride.unit}
                      </span>
                    </div>
                    <div className="text-xs font-body font-medium text-foreground">
                      QuickRide
                    </div>
                  </div>
                </div>

                {/* Traditional Card */}
                <div className="text-center">
                  <div className="glass rounded-xl p-4 opacity-60">
                    <div className="w-12 h-12 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name={item.traditional.icon} size={24} color="var(--color-muted-foreground)" />
                    </div>
                    <div className="text-lg lg:text-2xl font-heading font-bold text-muted-foreground mb-1">
                      {getDisplayValue(item.category, 'traditional', item.traditional.value)}
                      <span className="text-xs text-muted-foreground ml-1">
                        {item.traditional.unit}
                      </span>
                    </div>
                    <div className="text-xs font-body font-medium text-muted-foreground">
                      Traditional
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-body text-muted-foreground">Performance Advantage</span>
                  <span className="text-xs font-body font-medium text-primary">{item.improvement}</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full glow-primary transition-all duration-500 ease-out"
                    style={{ 
                      width: isVisible ? `${Math.min(parseInt(item.improvement), 100)}%` : '0%',
                      transitionDelay: `${index * 200 + 500}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats - Mobile Optimized */}
        <div className="mt-12 lg:mt-16">
          <div className="glass rounded-2xl p-6 lg:p-8 glow-secondary">
            <div className="text-center mb-6">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Overall Performance Summary
              </h3>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                QuickRide consistently outperforms traditional transportation across all key metrics.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-heading font-bold text-primary">65%</div>
                <div className="text-xs lg:text-sm text-muted-foreground font-body">Average Improvement</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-heading font-bold text-secondary">4.9★</div>
                <div className="text-xs lg:text-sm text-muted-foreground font-body">User Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-heading font-bold text-accent">99.8%</div>
                <div className="text-xs lg:text-sm text-muted-foreground font-body">Reliability Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-heading font-bold text-primary">24/7</div>
                <div className="text-xs lg:text-sm text-muted-foreground font-body">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 left-8 w-3 h-3 bg-accent rounded-full animate-float glow-accent opacity-40" />
      <div className="absolute bottom-20 right-12 w-4 h-4 bg-primary rounded-full animate-float-delayed glow-primary opacity-30" />
    </section>
  );
};

export default ComparisonSection;