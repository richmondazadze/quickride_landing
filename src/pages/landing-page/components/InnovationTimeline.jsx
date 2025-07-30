import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InnovationTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  const timelineItems = [
    {
      year: "2024",
      title: "AI-Powered Matching",
      description: "Revolutionary algorithm that matches riders with drivers in under 15 seconds using machine learning and real-time data analysis.",
      icon: "Brain",
      status: "active",
      progress: 100,
      features: ["Smart route optimization", "Predictive demand forecasting", "Dynamic pricing algorithms"],
      tech: ["TensorFlow", "Python", "AWS"],
      impact: "Reduced wait times by 60%",
      color: "primary"
    },
    {
      year: "2025",
      title: "Autonomous Vehicle Integration",
      description: "Introducing self-driving vehicles to our fleet, starting with controlled routes in Kumasi for safer and more efficient transportation.",
      icon: "Bot",
      status: "development",
      progress: 75,
      features: ["Level 4 autonomous vehicles", "Remote monitoring systems", "Safety redundancy protocols"],
      tech: ["ROS2", "Computer Vision", "LiDAR"],
      impact: "Zero accident rate target",
      color: "secondary"
    },
    {
      year: "2026",
      title: "Holographic Driver Assistance",
      description: "AR-powered navigation and safety systems that project real-time information directly into the driver's field of vision.",
      icon: "Eye",
      status: "research",
      progress: 45,
      features: ["Augmented reality displays", "Real-time hazard detection", "Voice-activated controls"],
      tech: ["Unity", "ARKit", "Neural Networks"],
      impact: "Enhanced safety by 80%",
      color: "accent"
    },
    {
      year: "2027",
      title: "Quantum Route Optimization",
      description: "Leveraging quantum computing to solve complex routing problems instantly, reducing travel time by up to 40% across the network.",
      icon: "Zap",
      status: "concept",
      progress: 25,
      features: ["Quantum algorithms", "City-wide optimization", "Traffic prediction models"],
      tech: ["Qiskit", "Quantum ML", "IBM Quantum"],
      impact: "40% faster routes",
      color: "warning"
    },
    {
      year: "2028",
      title: "Neural Interface Integration",
      description: "Direct brain-computer interfaces for seamless ride booking and communication, making transportation truly hands-free.",
      icon: "Cpu",
      status: "future",
      progress: 10,
      features: ["Thought-based booking", "Emotion-aware systems", "Predictive preferences"],
      tech: ["BCI", "Neural Networks", "EEG"],
      impact: "100% hands-free operation",
      color: "muted"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineElements = sectionRef.current?.querySelectorAll('[data-index]');
    timelineElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
        setProgress(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-primary border-primary bg-primary/10';
      case 'development': return 'text-secondary border-secondary bg-secondary/10';
      case 'research': return 'text-accent border-accent bg-accent/10';
      case 'concept': return 'text-warning border-warning bg-warning/10';
      case 'future': return 'text-muted-foreground border-muted-foreground bg-muted/10';
      default: return 'text-muted-foreground border-muted-foreground bg-muted/10';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active': return 'Live Now';
      case 'development': return 'In Development';
      case 'research': return 'Research Phase';
      case 'concept': return 'Concept Stage';
      case 'future': return 'Future Vision';
      default: return 'Unknown';
    }
  };

  const getProgressColor = (color) => {
    switch (color) {
      case 'primary': return 'from-primary to-primary/80';
      case 'secondary': return 'from-secondary to-secondary/80';
      case 'accent': return 'from-accent to-accent/80';
      case 'warning': return 'from-warning to-warning/80';
      case 'muted': return 'from-muted-foreground to-muted-foreground/80';
      default: return 'from-primary to-primary/80';
    }
  };

  return (
    <section id="innovation" ref={sectionRef} className="py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,127,0.1),transparent_50%)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,255,127,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,255,127,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 lg:mb-24">
          <div className="inline-flex items-center space-x-2 glass px-4 lg:px-6 py-2 lg:py-3 rounded-full mb-6 lg:mb-8 glow-accent animate-pulse">
            <Icon name="Rocket" size={16} className="text-primary animate-bounce lg:w-5 lg:h-5" />
            <span className="text-xs lg:text-sm font-body font-medium text-foreground">Innovation Roadmap</span>
            <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-primary rounded-full animate-ping" />
          </div>
          
          <h2 className="text-3xl lg:text-6xl font-heading font-bold text-foreground mb-4 lg:mb-6 leading-tight">
            The Future of Transportation
            <span className="block text-primary animate-glow-pulse">Starts Here</span>
          </h2>
          
          <p className="text-base lg:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
            Explore our ambitious roadmap of cutting-edge technologies and innovations 
            that will reshape how we move through cities in the coming years.
          </p>

          {/* Progress Indicator */}
          <div className="mt-6 lg:mt-8 max-w-md mx-auto px-4 lg:px-0">
            <div className="flex justify-between text-xs lg:text-sm text-muted-foreground mb-2">
              <span>Research</span>
              <span>Development</span>
              <span>Deployment</span>
            </div>
            <div className="w-full bg-muted/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary via-secondary to-accent h-2 rounded-full transition-all duration-1000 ease-out glow-primary"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform lg:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent animate-pulse opacity-50" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-32">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center transition-all duration-500 spring ${
                  visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setActiveItem(activeItem === index ? null : index)}
              >
                {/* Enhanced Timeline Node */}
                <div className={`absolute left-4 lg:left-1/2 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-${item.color} to-${item.color}/80 rounded-full transform -translate-x-1/2 lg:-translate-x-1/2 glow-${item.color} z-10 transition-all duration-300 ${
                  hoveredItem === index ? 'scale-150' : 'scale-100'
                }`}>
                  <div className="absolute inset-0 rounded-full border-2 lg:border-4 border-background" />
                  <div className={`absolute inset-0 rounded-full animate-ping bg-${item.color} opacity-30`} />
                  <div className="absolute inset-0 rounded-full animate-spin-slow">
                    <div className="w-full h-full border-2 border-transparent border-t-current rounded-full opacity-50" />
                  </div>
                </div>

                {/* Enhanced Content Card */}
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                  <div className={`glass rounded-2xl lg:rounded-3xl p-4 lg:p-8 glow-${item.color} hover:glow-primary transition-all duration-500 magnetic cursor-pointer ${
                    activeItem === index ? 'ring-2 ring-primary ring-opacity-50' : ''
                  }`}>
                    {/* Enhanced Header */}
                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                      <div className="hidden lg:block text-2xl lg:text-4xl font-heading font-bold text-primary">
                        {item.year}
                      </div>
                      <div className={`px-2 lg:px-4 py-1 lg:py-2 rounded-full text-xs font-body font-medium border ${getStatusColor(item.status)}`}>
                        {getStatusLabel(item.status)}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4 lg:mb-6">
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${getProgressColor(item.color)} h-2 rounded-full transition-all duration-1000 ease-out glow-${item.color}`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Enhanced Icon */}
                    <div className={`w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-${item.color}/20 to-${item.color}/40 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 lg:mb-6 glow-${item.color} transition-all duration-300 ${
                      hoveredItem === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                      <Icon name={item.icon} size={24} className={`lg:w-10 lg:h-10`} color={`var(--color-${item.color})`} />
                    </div>

                    {/* Enhanced Content */}
                    <h3 className="text-xl lg:text-3xl font-heading font-bold text-foreground mb-3 lg:mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm lg:text-base text-muted-foreground font-body leading-relaxed mb-4 lg:mb-6">
                      {item.description}
                    </p>

                    {/* Impact Metric */}
                    <div className="mb-4 lg:mb-6 p-3 lg:p-4 glass rounded-xl lg:rounded-2xl border border-primary/20">
                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <Icon name="TrendingUp" size={16} className="text-primary lg:w-5 lg:h-5" />
                        <div>
                          <div className="text-xs lg:text-sm font-body font-medium text-foreground">Expected Impact</div>
                          <div className="text-sm lg:text-lg font-heading font-bold text-primary">{item.impact}</div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Features */}
                    <div className="space-y-3 lg:space-y-4">
                      <h4 className="text-xs lg:text-sm font-body font-medium text-foreground">Key Features:</h4>
                      <ul className="space-y-2 lg:space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 lg:space-x-3">
                            <div className={`w-1.5 lg:w-2 h-1.5 lg:h-2 bg-${item.color} rounded-full glow-${item.color}`} />
                            <span className="text-xs lg:text-sm text-muted-foreground font-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
                    <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-border">
                      <h4 className="text-xs lg:text-sm font-body font-medium text-foreground mb-2 lg:mb-3">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {item.tech.map((tech, idx) => (
                          <span key={idx} className={`px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-xs font-body bg-${item.color}/10 text-${item.color} border border-${item.color}/20`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Holographic Effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${item.color}/5 to-${item.color}/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </div>

                {/* Enhanced Floating Year (Desktop) */}
                <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? 'right-8' : 'left-8'
                }`}>
                  <div className={`glass px-6 py-3 rounded-2xl glow-${item.color} transition-all duration-300 ${
                    hoveredItem === index ? 'scale-110' : 'scale-100'
                  }`}>
                    <span className="text-lg font-data font-bold text-primary">{item.year}</span>
                  </div>
                </div>

                {/* Mobile Year Indicator */}
                <div className="lg:hidden absolute -top-2 left-4 transform -translate-x-1/2">
                  <div className={`glass px-3 py-1 rounded-lg glow-${item.color} transition-all duration-300`}>
                    <span className="text-sm font-data font-bold text-primary">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-32 right-8 w-4 h-4 bg-primary rounded-full animate-float glow-primary opacity-40" />
      <div className="absolute bottom-40 left-12 w-6 h-6 bg-secondary rounded-full animate-float-delayed glow-secondary opacity-30" />
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-accent rounded-full animate-float glow-accent opacity-50" />
      <div className="absolute top-1/3 left-20 w-2 h-2 bg-warning rounded-full animate-float-delayed glow-warning opacity-40" />
    </section>
  );
};

export default InnovationTimeline;