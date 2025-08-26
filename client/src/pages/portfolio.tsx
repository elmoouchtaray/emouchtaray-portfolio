import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
  Instagram
} from "lucide-react";


export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    // Create a mock CV download - in real implementation, this would download an actual CV
    alert("CV download would start here. Please contact me directly for my latest CV.");
  };

  return (
    <div className="bg-dark-bg text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-gray-800/50" data-testid="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent" data-testid="logo">
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
                  className={`hover:text-neon-cyan transition-colors duration-300 ${
                    activeSection === item.id ? "text-neon-cyan" : ""
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
                className="text-white hover:text-neon-cyan"
                data-testid="mobile-menu-button"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-card/95 backdrop-blur-md" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                  className="block w-full text-left px-3 py-2 hover:text-neon-cyan transition-colors duration-300"
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-testid="hero-section">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-name">
              <span className="bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Mohammed Elmouchtaray
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium" data-testid="hero-title">
              Web & Software Developer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-tagline">
              Passionate about web development, design, and creating modern applications.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={downloadCV}
                className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-neon-cyan/25"
                data-testid="download-cv-button"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-neon-cyan h-8 w-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/50" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="about-title">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-gray-300 leading-relaxed" data-testid="about-bio">
                Passionate about web and software development, skilled in web design, database management, and project collaboration. I combine creativity with technical expertise to build modern, user-centric applications that solve real-world problems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-dark-card/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50" data-testid="personal-info">
                  <h4 className="text-neon-cyan font-semibold mb-2">Personal Info</h4>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p><MapPin className="inline mr-2 h-4 w-4 text-neon-cyan" />June 9, 2003</p>
                    <p><MapPin className="inline mr-2 h-4 w-4 text-neon-cyan" />Elgharbia, Zemamra Sidi Bennour</p>
                    <p><Mail className="inline mr-2 h-4 w-4 text-neon-cyan" />elmouchtaraymohamad7@email.com</p>
                    <p><Phone className="inline mr-2 h-4 w-4 text-neon-cyan" />0693601225</p>
                  </div>
                </div>
                
                <div className="bg-dark-card/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50" data-testid="languages-info">
                  <h4 className="text-neon-cyan font-semibold mb-2">Languages</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Arabic", level: "Native", percentage: 100 },
                      { name: "French", level: "Intermediate", percentage: 70 },
                      { name: "English", level: "Intermediate", percentage: 70 },
                    ].map((language) => (
                      <div key={language.name} data-testid={`language-${language.name.toLowerCase()}`}>
                        <div className="flex justify-between text-sm">
                          <span>{language.name}</span>
                          <span className="text-neon-cyan">{language.level}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div 
                            className="bg-gradient-to-r from-neon-cyan to-blue-500 h-2 rounded-full animate-slide-in" 
                            style={{width: `${language.percentage}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="bg-dark-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300" data-testid="interests-section">
                <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Interests & Hobbies</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Book, name: "Reading" },
                    { icon: Plane, name: "Traveling" },
                    { icon: Wifi, name: "Internet" },
                    { icon: Dumbbell, name: "Sports" },
                  ].map((interest) => (
                    <div key={interest.name} className="text-center" data-testid={`interest-${interest.name.toLowerCase()}`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                        <interest.icon className="text-neon-cyan h-6 w-6" />
                      </div>
                      <p className="text-gray-300">{interest.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-bg" data-testid="skills-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="skills-title">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Skills & Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Development Skills */}
            <div className="bg-dark-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300 animate-fade-in-up" data-testid="web-dev-skills">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan flex items-center">
                <Code className="mr-3 h-6 w-6" />
                Web Development
              </h3>
              <div className="space-y-6">
                {[
                  { name: "HTML & CSS", percentage: 90 },
                  { name: "JavaScript", percentage: 85 },
                  { name: "VB.NET", percentage: 80 },
                  { name: "SQL", percentage: 75 },
                ].map((skill) => (
                  <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-neon-cyan">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-neon-cyan to-blue-500 h-3 rounded-full shadow-lg animate-slide-in" 
                        style={{width: `${skill.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Design & Databases */}
            <div className="bg-dark-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300 animate-fade-in-up" data-testid="design-db-skills">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple flex items-center">
                <Palette className="mr-3 h-6 w-6" />
                Design & Databases
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Photoshop", percentage: 85 },
                  { name: "Microsoft Access", percentage: 80 },
                  { name: "SQL Server", percentage: 75 },
                  { name: "phpMyAdmin", percentage: 70 },
                ].map((skill) => (
                  <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-neon-purple">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-neon-purple to-pink-500 h-3 rounded-full shadow-lg animate-slide-in" 
                        style={{width: `${skill.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="mt-12 bg-dark-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300 animate-fade-in-up" data-testid="soft-skills">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Soft Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, name: "Teamwork" },
                { icon: Lightbulb, name: "Project Management" },
                { icon: Clock, name: "Deadline Management" },
                { icon: Lightbulb, name: "Problem Solving" },
              ].map((skill) => (
                <div key={skill.name} className="text-center" data-testid={`soft-skill-${skill.name.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                    <skill.icon className="text-neon-cyan h-6 w-6" />
                  </div>
                  <p className="text-gray-300 font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-dark-card/50 to-dark-bg" data-testid="experience-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="experience-title">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Education & Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="animate-fade-in-up" data-testid="education-timeline">
              <h3 className="text-2xl font-bold mb-8 text-neon-cyan flex items-center">
                <GraduationCap className="mr-3 h-6 w-6" />
                Education
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Diplôme – Développement Informatique",
                    period: "2023-2025",
                    description: "Currently pursuing comprehensive training in software development and information systems.",
                    color: "neon-cyan"
                  },
                  {
                    title: "Attestation – Photoshop & Video Editing, e-Commerce",
                    period: "2022-2023", 
                    description: "Specialized training in digital design and e-commerce solutions.",
                    color: "neon-purple"
                  },
                  {
                    title: "Baccalauréat SVT",
                    period: "2020-2021",
                    description: "Lycée IBN ARABI - Scientific track focusing on Life and Earth Sciences.",
                    color: "gradient"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-dark-card/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300 hover:scale-105"
                    data-testid={`education-${index}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-4 h-4 ${item.color === 'neon-cyan' ? 'bg-neon-cyan' : item.color === 'neon-purple' ? 'bg-neon-purple' : 'bg-gradient-to-r from-neon-cyan to-neon-purple'} rounded-full mt-2 flex-shrink-0`}></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className={`text-sm ${item.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-cyan'}`}>{item.period}</p>
                        <p className="text-gray-400 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Timeline */}
            <div className="animate-fade-in-up" data-testid="work-experience">
              <h3 className="text-2xl font-bold mb-8 text-neon-purple flex items-center">
                <Briefcase className="mr-3 h-6 w-6" />
                Experience
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Stage – NEXACOM, Deroua",
                    period: "2024-2025",
                    description: "VB.NET application development with database management systems.",
                    color: "neon-purple"
                  },
                  {
                    title: "Stage – UDIGITAL, Deroua",
                    period: "2023-2024",
                    description: "Created responsive landing pages using HTML, CSS, and JavaScript.",
                    color: "neon-cyan"
                  },
                  {
                    title: "Stage – INFOTOURISMEMAROC, El Jadida",
                    period: "2022-2023",
                    description: "Digital advertising and graphic design for tourism marketing campaigns.",
                    color: "neon-purple"
                  },
                  {
                    title: "Stage – ARCH'IMMOMAROC, El Jadida",
                    period: "2022-2023",
                    description: "Photoshop visual design for real estate project presentations and marketing.",
                    color: "neon-cyan"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-dark-card/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-neon-purple/30 transition-all duration-300 hover:scale-105"
                    data-testid={`experience-${index}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-4 h-4 ${item.color === 'neon-purple' ? 'bg-neon-purple' : 'bg-neon-cyan'} rounded-full mt-2 flex-shrink-0`}></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className={`text-sm ${item.color === 'neon-purple' ? 'text-neon-purple' : 'text-neon-cyan'}`}>{item.period}</p>
                        <p className="text-gray-400 mt-2">{item.description}</p>
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
      <section id="contact" className="py-20 bg-dark-bg relative" data-testid="contact-section">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-neon-cyan rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-neon-purple rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="contact-title">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something amazing together.
            </p>
          </div>
          
          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="animate-fade-in-up max-w-2xl">
              <div className="space-y-8">
                <div className="bg-dark-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-neon-cyan/30 transition-all duration-300" data-testid="contact-info">
                  <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Let's Connect</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300" data-testid="contact-email">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                        <Mail className="text-neon-cyan h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-400">elmouchtaraymohamad7@email.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300" data-testid="contact-phone">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                        <Phone className="text-neon-purple h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-gray-400">0693601225</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300" data-testid="contact-location">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center">
                        <MapPin className="text-neon-cyan h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-gray-400">Elgharbia, Zemamra Sidi Bennour</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-dark-card/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-neon-purple/30 transition-all duration-300" data-testid="social-links">
                  <h3 className="text-xl font-bold mb-6 text-neon-purple">Follow Me</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Linkedin, name: "LinkedIn" },
                      { icon: Github, name: "GitHub" },
                      { icon: Twitter, name: "Twitter" },
                      { icon: Instagram, name: "Instagram" },
                    ].map((social) => (
                      <button
                        key={social.name}
                        className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                        data-testid={`social-${social.name.toLowerCase()}`}
                      >
                        <social.icon className="text-neon-cyan group-hover:text-white h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-card/50 border-t border-gray-800/50 py-8" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Mohammed Elmouchtaray – All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
