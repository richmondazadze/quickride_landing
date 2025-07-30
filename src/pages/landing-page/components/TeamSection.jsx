import React from 'react';
import Icon from '../../../components/AppIcon';
import TeamMemberCard from './TeamMemberCard';
import Button from '../../../components/ui/Button';


const TeamSection = () => {
  const teamMembers = [
    {
      name: "GAWUGAH, Paul Listowel",
      role: "PROJECT MANAGER",
      bio: "Experienced project manager coordinating team efforts, timelines, and deliverables to ensure successful project execution and delivery.",
      skills: ["Management", "Planning", "Leadership"]
    },
    {
      name: "OFORI, Micah Dzidzo",
      role: "BACKEND",
      bio: "Experienced backend developer specializing in server-side development, database management, and API design for robust and scalable systems.",
      skills: ["Backend", "API", "Database"]
    },
    {
      name: "ASARE KYEI, Annie Pamela",
      role: "FRONTEND",
      bio: "Frontend specialist focused on creating responsive and intuitive user interfaces with modern web technologies and best practices.",
      skills: ["Frontend", "React", "UI/UX"]
    },
    {
      name: "MOHAMMED, Rayan Suhuyini",
      role: "FRONTEND",
      bio: "Frontend developer passionate about creating seamless user experiences with modern frameworks and responsive design principles.",
      skills: ["Frontend", "JavaScript", "CSS"]
    },
    {
      name: "YEBOAH, James Twum",
      role: "FRONTEND",
      bio: "Frontend specialist with expertise in modern web development, user interface design, and creating engaging digital experiences.",
      skills: ["Frontend", "React", "TypeScript"]
    },
    {
      name: "TACKIE-AKPLOR, John",
      role: "FRONTEND",
      bio: "Frontend developer with strong skills in modern web technologies, creating responsive and accessible user interfaces for web applications.",
      skills: ["Frontend", "HTML", "CSS"]
    },
    {
      name: "MAMBULIYA, Charity Tindan",
      role: "POWERPOINT",
      bio: "Presentation specialist creating compelling visual content and PowerPoint presentations that effectively communicate project ideas and progress.",
      skills: ["PowerPoint", "Design", "Presentation"]
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 lg:mt-24">
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground font-body">Team Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary">5</div>
                <div className="text-sm text-muted-foreground font-body">Frontend Developers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-accent">1</div>
                <div className="text-sm text-muted-foreground font-body">Backend Developer</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground font-body">Ghanaian Owned</div>
              </div>
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