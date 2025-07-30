import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features", functional: true },
        { name: "Safety", href: "#safety", functional: false },
        { name: "For Drivers", href: "#drivers", functional: false }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About Us", href: "#team", functional: true },
        { name: "Innovation", href: "#innovation", functional: true }
      ]
    },

    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#", functional: true, action: () => setShowPrivacyModal(true) },
        { name: "Terms of Service", href: "#", functional: true, action: () => setShowTermsModal(true) }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Linkedin", icon: "Linkedin", href: "#" }
  ];

  // Modal handlers
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowPrivacyModal(false);
        setShowTermsModal(false);
      }
    };

    if (showPrivacyModal || showTermsModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPrivacyModal, showTermsModal]);

  const closeModals = () => {
    setShowPrivacyModal(false);
    setShowTermsModal(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="relative bg-background glass rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-foreground">{title}</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted/20 transition-colors"
            >
              <Icon name="X" size={20} color="var(--color-muted-foreground)" />
            </button>
          </div>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-background to-muted/20 pt-20 pb-8">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                  <Icon name="Car" size={24} color="var(--color-primary-foreground)" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Quick<span className="text-primary">Ride</span>
                  </h3>
                  <p className="text-xs font-caption text-muted-foreground">
                    Future of Transport
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Revolutionizing transportation in Ghana with cutting-edge technology, 
                unmatched safety, and sustainable solutions for a better tomorrow.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:glow-primary transition-all duration-200 magnetic"
                    title={social.name}
                  >
                    <Icon name={social.icon} size={18} color="var(--color-muted-foreground)" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="text-lg font-heading font-bold text-foreground mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.action ? (
                        <button
                          onClick={link.action}
                          className="text-muted-foreground font-body hover:text-primary transition-colors duration-200 text-left"
                        >
                          {link.name}
                        </button>
                      ) : link.functional ? (
                        <a
                          href={link.href}
                          className="text-muted-foreground font-body hover:text-primary transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>





          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground font-body">
                <div>© {currentYear} QuickRide. All rights reserved.</div>
                
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 glass px-4 py-2 rounded-xl hover:glow-primary transition-all duration-200 magnetic"
              >
                <span className="text-sm font-body font-medium text-foreground">Back to Top</span>
                <Icon name="ArrowUp" size={16} color="var(--color-primary)" />
              </button>
            </div>
          </div>

          {/* KNUST Attribution */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <div className="inline-flex items-center space-x-3 glass px-6 py-3 rounded-full glow-accent">
              <Icon name="GraduationCap" size={20} className="text-primary" />
              <span className="text-sm font-body font-medium text-foreground">
                Proudly developed by KNUST students
              </span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-8 w-3 h-3 bg-primary rounded-full animate-float glow-primary opacity-30" />
        <div className="absolute bottom-20 right-12 w-4 h-4 bg-secondary rounded-full animate-float-delayed glow-secondary opacity-20" />
      </footer>

      {/* Privacy Policy Modal */}
      <Modal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-lg font-semibold text-foreground">Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you create an account, request a ride, or contact us for support.</p>
          
          <h3 className="text-lg font-semibold text-foreground">How We Use Your Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
          
          <h3 className="text-lg font-semibold text-foreground">Location Information</h3>
          <p>We collect precise location information when you use our app to provide ride services and improve your experience.</p>
          
          <h3 className="text-lg font-semibold text-foreground">Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@quickride.app</p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal 
        isOpen={showTermsModal} 
        onClose={() => setShowTermsModal(false)}
        title="Terms of Service"
      >
        <div className="space-y-4">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-lg font-semibold text-foreground">Acceptance of Terms</h3>
          <p>By accessing and using QuickRide services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h3 className="text-lg font-semibold text-foreground">Use of Service</h3>
          <p>You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates applicable laws or regulations.</p>
          
          <h3 className="text-lg font-semibold text-foreground">User Accounts</h3>
          <p>You are responsible for safeguarding the password and all activities that occur under your account. You must notify us immediately of any unauthorized use.</p>
          
          <h3 className="text-lg font-semibold text-foreground">Payment Terms</h3>
          <p>Payment for rides is processed through our secure payment system. You agree to pay all charges incurred by your account.</p>
          
          <h3 className="text-lg font-semibold text-foreground">Limitation of Liability</h3>
          <p>QuickRide shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
          
          <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
          <p>For questions about these Terms of Service, please contact us at legal@quickride.app</p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;