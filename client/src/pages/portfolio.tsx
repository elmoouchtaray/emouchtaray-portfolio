import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import cvFile from '@assets/MOHAMMED ELMOUCHTARAY CV_1756230222904.pdf';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Menu, 
  X, 
  ChevronDown,
  Code,
  Palette,
  Users,
  Clock,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Book,
  Plane,
  Wifi,
  Dumbbell,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Star,
  Award,
  Zap,
  Target
} from "lucide-react";


export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navHeight = 64; // Height of navigation
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Mohammed_Elmouchtaray_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-dark-bg text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-xl border-b border-gray-800/30 shadow-2xl" data-testid="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-black bg-gradient-to-r from-neon-cyan via-blue-400 to-neon-purple bg-clip-text text-transparent hero-glow" data-testid="logo">
              ME
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Experience", id: "experience" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className={`nav-link ${
                    activeSection === item.id ? "active text-neon-cyan" : "text-gray-300"
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-neon-cyan hover:bg-neon-cyan/10 rounded-xl"
                data-testid="mobile-menu-button"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-card/95 backdrop-blur-xl border-t border-gray-800/30" data-testid="mobile-menu">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Experience", id: "experience" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className="block w-full text-left px-4 py-3 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 rounded-lg"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" data-testid="hero-section">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full filter blur-3xl floating-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full filter blur-3xl floating-element"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full filter blur-3xl floating-element opacity-60"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Available for new opportunities
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 hero-glow" data-testid="hero-name">
              <span className="bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Mohammed Elmouchtaray
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold" data-testid="hero-title">
              <span className="text-gradient">Web & Software Developer</span>
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-tagline">
              Crafting digital experiences with passion and precision. Specializing in modern web applications, 
              user-centric design, and innovative software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={downloadCV}
                className="px-10 py-4 bg-gradient-to-r from-neon-cyan to-blue-500 text-white font-bold rounded-xl hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-neon-cyan/30 text-lg"
                data-testid="download-cv-button"
              >
                <Download className="mr-3 h-5 w-5" />
                Download CV
              </Button>
              
              <Button
                onClick={() => smoothScrollTo("contact")}
                variant="outline"
                className="px-10 py-4 border-2 border-neon-purple/50 text-neon-purple font-bold rounded-xl hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300 text-lg"
              >
                <Mail className="mr-3 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "15+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-neon-cyan mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Removed the decorative scroll indicator */}
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-dark-bg to-dark-card/30" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="about-title">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
              A passionate developer with a keen eye for detail and a drive for excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <p className="text-xl text-gray-300 leading-relaxed" data-testid="about-bio">
                I'm a dedicated web and software developer with a passion for creating innovative digital solutions. 
                My journey in technology has equipped me with expertise in modern web development, database management, 
                and collaborative project delivery. I believe in combining technical excellence with creative problem-solving 
                to build applications that not only meet requirements but exceed expectations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-gradient">
                  <div className="p-6" data-testid="personal-info">
                    <h4 className="text-neon-cyan font-bold mb-4 text-lg flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      Personal Info
                    </h4>
                    <div className="space-y-3 text-sm text-gray-400">
                      <p className="flex items-center"><MapPin className="mr-3 h-4 w-4 text-neon-cyan" />June 9, 2003</p>
                      <p className="flex items-center"><MapPin className="mr-3 h-4 w-4 text-neon-cyan" />Elgharbia, Zemamra Sidi Bennour</p>
                      <p className="flex items-center"><Mail className="mr-3 h-4 w-4 text-neon-cyan" />elmouchtaraymohamad7@email.com</p>
                      <p className="flex items-center"><Phone className="mr-3 h-4 w-4 text-neon-cyan" />0693601225</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-gradient">
                  <div className="p-6" data-testid="languages-info">
                    <h4 className="text-neon-purple font-bold mb-4 text-lg flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      Languages
                    </h4>
                    <div className="space-y-4">
                      {[
                        { name: "Arabic", level: "Native", percentage: 100 },
                        { name: "French", level: "Intermediate", percentage: 70 },
                        { name: "English", level: "Intermediate", percentage: 70 },
                      ].map((language) => (
                        <div key={language.name} data-testid={`language-${language.name.toLowerCase()}`}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white font-medium">{language.name}</span>
                            <span className="text-neon-purple">{language.level}</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{width: `${language.percentage}%`}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="border-gradient">
                <div className="p-8" data-testid="interests-section">
                  <h3 className="text-3xl font-bold mb-8 text-neon-cyan text-center">Interests & Hobbies</h3>
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { icon: Book, name: "Reading", desc: "Tech & Fiction" },
                      { icon: Plane, name: "Traveling", desc: "Exploring Cultures" },
                      { icon: Wifi, name: "Internet", desc: "Learning & Research" },
                      { icon: Dumbbell, name: "Sports", desc: "Fitness & Health" },
                    ].map((interest) => (
                      <div key={interest.name} className="text-center group" data-testid={`interest-${interest.name.toLowerCase()}`}>
                        <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-neon-cyan/30">
                          <interest.icon className="text-neon-cyan h-8 w-8" />
                        </div>
                        <p className="text-white font-semibold text-lg mb-1">{interest.name}</p>
                        <p className="text-gray-400 text-sm">{interest.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-dark-bg" data-testid="skills-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="skills-title">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
              A comprehensive toolkit for building exceptional digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Web Development Skills */}
            <div className="border-gradient card-hover" data-testid="web-dev-skills">
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-neon-cyan flex items-center">
                  <Code className="mr-4 h-8 w-8" />
                  Web Development
                </h3>
                <div className="space-y-8">
                  {[
                    { name: "HTML & CSS", percentage: 90, icon: "🎨" },
                    { name: "JavaScript", percentage: 85, icon: "⚡" },
                    { name: "VB.NET", percentage: 80, icon: "🔧" },
                    { name: "SQL", percentage: 75, icon: "🗄️" },
                  ].map((skill) => (
                    <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{skill.icon}</span>
                          <span className="text-white font-semibold text-lg">{skill.name}</span>
                        </div>
                        <span className="text-neon-cyan font-bold text-lg">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{width: `${skill.percentage}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Design & Databases */}
            <div className="border-gradient card-hover" data-testid="design-db-skills">
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-neon-purple flex items-center">
                  <Palette className="mr-4 h-8 w-8" />
                  Design & Databases
                </h3>
                <div className="space-y-8">
                  {[
                    { name: "Photoshop", percentage: 85, icon: "🎭" },
                    { name: "Microsoft Access", percentage: 80, icon: "📊" },
                    { name: "SQL Server", percentage: 75, icon: "🔄" },
                    { name: "phpMyAdmin", percentage: 70, icon: "🌐" },
                  ].map((skill) => (
                    <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{skill.icon}</span>
                          <span className="text-white font-semibold text-lg">{skill.name}</span>
                        </div>
                        <span className="text-neon-purple font-bold text-lg">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress bg-gradient-to-r from-neon-purple to-pink-500" 
                          style={{width: `${skill.percentage}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="mt-16 border-gradient card-hover" data-testid="soft-skills">
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-10 text-center">
                <span className="text-gradient">Soft Skills</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: Users, name: "Teamwork", desc: "Collaborative" },
                  { icon: Lightbulb, name: "Project Management", desc: "Organized" },
                  { icon: Clock, name: "Deadline Management", desc: "Reliable" },
                  { icon: Zap, name: "Problem Solving", desc: "Innovative" },
                ].map((skill) => (
                  <div key={skill.name} className="text-center group" data-testid={`soft-skill-${skill.name.toLowerCase().replace(/\s/g, '-')}`}>
                    <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-neon-cyan/30">
                      <skill.icon className="text-neon-cyan h-8 w-8" />
                    </div>
                    <p className="text-white font-semibold text-lg mb-1">{skill.name}</p>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-b from-dark-card/30 to-dark-bg" data-testid="experience-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="experience-title">
              <span className="text-gradient">Education & Experience</span>
            </h2>
            <div className="section-divider"></div>
            <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto">
              My journey of continuous learning and professional growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education Timeline */}
            <div className="animate-fade-in-up" data-testid="education-timeline">
              <h3 className="text-3xl font-bold mb-10 text-neon-cyan flex items-center">
                <GraduationCap className="mr-4 h-8 w-8" />
                Education
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Diplôme – Développement Informatique",
                    period: "2023-2025",
                    description: "Currently pursuing comprehensive training in software development and information systems.",
                    color: "neon-cyan",
                    icon: "🎓"
                  },
                  {
                    title: "Attestation – Photoshop & Video Editing, e-Commerce",
                    period: "2022-2023", 
                    description: "Specialized training in digital design and e-commerce solutions.",
                    color: "neon-purple",
                    icon: "🎨"
                  },
                  {
                    title: "Baccalauréat SVT",
                    period: "2020-2021",
                    description: "Lycée IBN ARABI - Scientific track focusing on Life and Earth Sciences.",
                    color: "gradient",
                    icon: "🔬"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="timeline-item border-gradient card-hover"
                    data-testid={`education-${index}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                          <p className={`text-sm font-semibold mb-3 ${item.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-cyan'}`}>{item.period}</p>
                          <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Timeline */}
            <div className="animate-fade-in-up" data-testid="work-experience">
              <h3 className="text-3xl font-bold mb-10 text-neon-purple flex items-center">
                <Briefcase className="mr-4 h-8 w-8" />
                Experience
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Stage – NEXACOM, Deroua",
                    period: "2024-2025",
                    description: "VB.NET application development with database management systems.",
                    color: "neon-purple",
                    icon: "💼"
                  },
                  {
                    title: "Stage – UDIGITAL, Deroua",
                    period: "2023-2024",
                    description: "Created responsive landing pages using HTML, CSS, and JavaScript.",
                    color: "neon-cyan",
                    icon: "🌐"
                  },
                  {
                    title: "Stage – INFOTOURISMEMAROC, El Jadida",
                    period: "2022-2023",
                    description: "Digital advertising and graphic design for tourism marketing campaigns.",
                    color: "neon-purple",
                    icon: "✈️"
                  },
                  {
                    title: "Stage – ARCH'IMMOMAROC, El Jadida",
                    period: "2022-2023",
                    description: "Photoshop visual design for real estate project presentations and marketing.",
                    color: "neon-cyan",
                    icon: "🏠"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="timeline-item border-gradient card-hover"
                    data-testid={`experience-${index}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                          <p className={`text-sm font-semibold mb-3 ${item.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-cyan'}`}>{item.period}</p>
                          <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark-bg relative" data-testid="contact-section">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-neon-cyan rounded-full filter blur-3xl floating-element"></div>
          <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-neon-purple rounded-full filter blur-3xl floating-element"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full filter blur-2xl floating-element"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6" data-testid="contact-title">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on your next project? Let's create something amazing together.
            </p>
          </div>
          
          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="animate-fade-in-up max-w-3xl w-full">
              <div className="space-y-8">
                <div className="border-gradient card-hover" data-testid="contact-info">
                  <div className="p-10">
                    <h3 className="text-3xl font-bold mb-8 text-neon-cyan text-center">Let's Connect</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-6 text-gray-300 hover:text-neon-cyan transition-colors duration-300 group" data-testid="contact-email">
                        <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-neon-cyan/30">
                          <Mail className="text-neon-cyan h-7 w-7" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Email</p>
                          <p className="text-gray-400">elmouchtaraymohamad7@email.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-gray-300 hover:text-neon-cyan transition-colors duration-300 group" data-testid="contact-phone">
                        <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-neon-purple/30">
                          <Phone className="text-neon-purple h-7 w-7" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Phone</p>
                          <p className="text-gray-400">0693601225</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-gray-300 hover:text-neon-cyan transition-colors duration-300 group" data-testid="contact-location">
                        <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-neon-cyan/30">
                          <MapPin className="text-neon-cyan h-7 w-7" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">Location</p>
                          <p className="text-gray-400">Elgharbia, Zemamra Sidi Bennour</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-gradient card-hover" data-testid="social-links">
                  <div className="p-10">
                    <h3 className="text-2xl font-bold mb-8 text-neon-purple text-center">Follow Me</h3>
                    <div className="flex justify-center space-x-6">
                      {[
                        { icon: Linkedin, name: "LinkedIn", color: "text-blue-400" },
                        { icon: Github, name: "GitHub", color: "text-gray-300" },
                        { icon: Twitter, name: "Twitter", color: "text-blue-400" },
                        { icon: Instagram, name: "Instagram", color: "text-pink-400" },
                      ].map((social) => (
                        <button
                          key={social.name}
                          className="social-button"
                          data-testid={`social-${social.name.toLowerCase()}`}
                          title={social.name}
                        >
                          <social.icon className={`h-6 w-6 ${social.color}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-dark-card/50 border-t border-gray-800/30 py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="text-2xl font-black bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4">
                Mohammed Elmouchtaray
              </div>
              <p className="text-gray-400 text-lg">
                Crafting digital experiences with passion and precision
              </p>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500">
              © 2025 Mohammed Elmouchtaray – All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
