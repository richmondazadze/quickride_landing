import React from 'react';
import Icon from '../../../components/AppIcon';
import TeamMemberCard from './TeamMemberCard';
import Button from '../../../components/ui/Button';


const TeamSection = () => {
  const teamMembers = [
    {
      name: "Kwame Asante",
      role: "Founder & CEO",
      bio: "Visionary leader with 8+ years in tech innovation. KNUST Computer Science graduate passionate about transforming transportation in Ghana.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["Leadership", "Strategy", "Innovation"],
      social: [
        { platform: "Linkedin", url: "#" },
        { platform: "Twitter", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    },
    {
      name: "Ama Osei",
      role: "CTO & Co-founder",
      bio: "Full-stack engineer and AI specialist. Leading our technical vision with expertise in mobile development and machine learning systems.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      skills: ["AI/ML", "Mobile Dev", "Architecture"],
      social: [
        { platform: "Github", url: "#" },
        { platform: "Linkedin", url: "#" },
        { platform: "Twitter", url: "#" }
      ]
    },
    {
      name: "Kofi Mensah",
      role: "Head of Operations",
      bio: "Operations expert ensuring seamless ride experiences. Former logistics manager with deep understanding of Ghanaian transportation needs.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Operations", "Logistics", "Analytics"],
      social: [
        { platform: "Linkedin", url: "#" },
        { platform: "Phone", url: "#" },
        { platform: "Mail", url: "#" }
      ]
    },
    {
      name: "Akosua Frimpong",
      role: "Head of Design",
      bio: "Creative designer crafting intuitive user experiences. Specializes in mobile UI/UX with focus on accessibility and cultural relevance.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["UI/UX", "Branding", "Research"],
      social: [
        { platform: "Figma", url: "#" },
        { platform: "Instagram", url: "#" },
        { platform: "Dribbble", url: "#" }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-32 px-6 lg:px-12 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 glow-accent">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm font-body font-medium text-foreground">Meet Our Team</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            The Minds Behind
            <span className="block text-primary">QuickRide Innovation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Our diverse team of passionate innovators, engineers, and visionaries 
            working together to revolutionize transportation in Ghana and beyond.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 lg:mt-24">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground font-body">Team Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground font-body">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground font-body">KNUST Graduates</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground font-body">Ghanaian Owned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="glass rounded-2xl p-8 lg:p-12 glow-secondary">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Want to Join Our Mission?
            </h3>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for innovation and making transportation better for everyone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="right"
                className="magnetic glow-primary min-w-48"
                onClick={() => {
                  const element = document.getElementById('get-started');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Openings
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="magnetic min-w-48"
                onClick={() => {
                  const element = document.getElementById('team');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-8 w-4 h-4 bg-primary rounded-full animate-float glow-primary opacity-40" />
      <div className="absolute bottom-32 left-12 w-3 h-3 bg-secondary rounded-full animate-float-delayed glow-secondary opacity-50" />
    </section>
  );
};

export default TeamSection;