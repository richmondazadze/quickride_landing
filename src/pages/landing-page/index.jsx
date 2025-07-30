import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';
import ComparisonSection from './components/ComparisonSection';
import InnovationTimeline from './components/InnovationTimeline';
import CTASection from './components/CTASection';
import Footer from './components/Footer';


const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);



  useEffect(() => {
    // Mouse tracking for magnetic effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    // Scroll tracking
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Performance optimization for scroll-based effects
  useEffect(() => {
    const handleScrollOptimized = () => {
      requestAnimationFrame(() => {
        // Update CSS custom properties for scroll-based animations
        document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
        document.documentElement.style.setProperty('--scroll-progress', `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`);
      });
    };

    window.addEventListener('scroll', handleScrollOptimized, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollOptimized);
  }, [scrollY]);

  // Mouse position CSS custom properties for magnetic effects
  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', mousePosition.x.toString());
    document.documentElement.style.setProperty('--mouse-y', mousePosition.y.toString());
  }, [mousePosition]);

  return (
    <>
      <Helmet>
        <title>QuickRide - The Future of Transportation in Ghana</title>
        <meta name="description" content="Experience the most innovative ride-hailing platform in Ghana. Fast, safe, and sustainable transportation with cutting-edge technology. Download the QuickRide app today." />
        <meta name="keywords" content="ride hailing, Ghana transportation, QuickRide app, taxi service, KNUST innovation, sustainable transport" />
        <meta property="og:title" content="QuickRide - The Future of Transportation in Ghana" />
        <meta property="og:description" content="Revolutionary ride-hailing platform with AI-powered matching, electric vehicles, and 24/7 safety monitoring. Join thousands of satisfied users." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickride.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QuickRide - The Future of Transportation" />
        <meta name="twitter:description" content="Experience the most innovative ride-hailing platform in Ghana with cutting-edge technology and sustainable solutions." />
        <link rel="canonical" href="https://quickride.app/landing-page" />
      </Helmet>

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Fixed Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10" role="main">
          {/* Hero Section */}
          <HeroSection />

          {/* Features Section */}
          <FeaturesSection />

          {/* Team Section */}
          <TeamSection />

          {/* Comparison Section */}
          <ComparisonSection />

          {/* Innovation Timeline */}
          <InnovationTimeline />

          {/* CTA Section */}
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />



        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left transition-transform duration-300"
             style={{ 
               transform: `scaleX(${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) || 0})` 
             }} 
        />

        {/* Global Styles for Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          
          @keyframes glow-pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 4s ease-in-out infinite;
          }
          
          .animate-bounce-subtle {
            animation: bounce-subtle 2s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          
          .animate-spin-reverse {
            animation: spin-reverse 6s linear infinite;
          }
          
          .animate-glow-pulse {
            animation: glow-pulse 2s ease-in-out infinite;
          }
          
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
          
          .animate-slide-down {
            animation: slide-down 0.3s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
          }
          
          .magnetic {
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          
          .magnetic:hover {
            transform: translateY(-2px);
          }
          
          .spring {
            transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          
          .transform-3d {
            transform-style: preserve-3d;
            perspective: 1000px;
          }
        `}</style>
      </div>
    </>
  );
};

export default LandingPage;