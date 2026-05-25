import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, ChevronRight, Terminal, Cpu, Database, 
  Globe, Shield, Smartphone, Code, Briefcase, FileText, 
  Newspaper, Lock, Download, Mail, Github, Linkedin, Twitter,
  Zap, Layers, BarChart, LockKeyhole, ArrowUp
} from 'lucide-react';

const Tooltip = ({ children, text }: { children: React.ReactNode, text: string }) => (
  <div className="group/tooltip relative inline-flex items-center justify-center">
    {children}
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 ease-out pointer-events-none z-50 whitespace-nowrap bg-dark-bg border border-cyan-glow text-cyan-glow text-xs font-mono px-2 py-1 rounded shadow-[0_0_10px_rgba(0,245,255,0.2)]">
      {text}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'BN'>('EN');

  const links = ['Home', 'About', 'Services', 'Portfolio', 'AI Tools', 'Agri-FinTech', 'Resources', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-border-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-orbitron font-bold text-xl text-cyan-glow text-glow-cyan tracking-wider">
              SMAN Global Nexus
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-cyan-glow px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link}
                </a>
              ))}
              <button 
                onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
                className="ml-4 px-3 py-1 border border-cyan-glow text-cyan-glow rounded text-xs font-mono hover:bg-cyan-glow/10 transition-colors"
              >
                {lang}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-glow hover:text-white">
              {isOpen ? <Tooltip text="Close Menu"><X size={24} /></Tooltip> : <Tooltip text="Open Menu"><Menu size={24} /></Tooltip>}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark-panel border-b border-border-cyan">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-cyan-glow block px-3 py-2 rounded-md text-base font-medium">
                {link}
              </a>
            ))}
            <button 
              onClick={() => setLang(lang === 'EN' ? 'BN' : 'EN')}
              className="w-full text-left px-3 py-2 text-cyan-glow font-mono"
            >
              Language: {lang}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[80vh] justify-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-mono text-green-glow text-sm md:text-base tracking-[0.2em] mb-4">
          // SYSTEM INITIALIZED
        </div>
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-cyan-glow text-glow-cyan mb-6 tracking-tight">
          Md. Mobaid Mollah Abir
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold tracking-wide">
          AI Solutions Architect | Full Stack Engineer | Sovereign Agent Specialist
        </h2>
        <p className="text-lg text-cyan-glow/80 mb-8 font-mono">
          Founder, SMAN Global Nexus
        </p>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
          Turning Ideas into Intelligent Systems<br/>
          <span className="text-sm md:text-base text-gray-400 mt-2 block">AI Tools • Custom Software • Agri-FinTech Solutions</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#ai-tools" className="px-8 py-3 bg-cyan-glow/10 border border-cyan-glow text-cyan-glow hover:bg-cyan-glow/20 transition-all font-bold tracking-wider flex items-center justify-center gap-2 box-glow-cyan-hover">
            <Tooltip text="AI Tools"><Terminal size={18} /></Tooltip>
            Explore AI Tools
          </a>
          <a href="#agri-fintech" className="px-8 py-3 bg-green-glow/10 border border-green-glow text-green-glow hover:bg-green-glow/20 transition-all font-bold tracking-wider flex items-center justify-center gap-2">
            <Tooltip text="Agri-FinTech"><Database size={18} /></Tooltip>
            Discover Agri-FinTech
          </a>
          <a href="#portfolio" className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all font-bold tracking-wider flex items-center justify-center gap-2">
            <Tooltip text="Portfolio"><Briefcase size={18} /></Tooltip>
            View Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon: any }) => (
  <div className="mb-12 border-b border-border-cyan pb-4">
    <div className="flex items-center gap-3 mb-2">
      <Tooltip text={`${title} Icon`}><Icon className="text-cyan-glow" size={28} /></Tooltip>
      <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">{title}</h2>
    </div>
    {subtitle && <p className="font-mono text-green-glow text-sm tracking-widest">{subtitle}</p>}
  </div>
);

const Card = ({ title, description, icon: Icon, actionText, onAction }: any) => (
  <div className="bg-dark-panel border border-border-cyan p-6 rounded-sm hover:border-cyan-glow transition-colors group box-glow-cyan-hover flex flex-col h-full">
    <div className="mb-4 text-cyan-glow group-hover:text-white transition-colors">
      <Tooltip text={`${title} Feature`}><Icon size={32} /></Tooltip>
    </div>
    <h3 className="font-orbitron text-lg font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
    {actionText && (
      <button 
        onClick={onAction}
        className="mt-auto flex items-center gap-2 text-xs font-mono text-cyan-glow hover:text-green-glow transition-colors uppercase tracking-widest"
      >
        {actionText} <Tooltip text="Proceed"><ChevronRight size={14} /></Tooltip>
      </button>
    )}
  </div>
);

const AITools = () => {
  const tools = [
    { title: "J.A.R.V.I.S v5.03", desc: "Sovereign Personal AI Agent", icon: Cpu },
    { title: "MiRA V4.1", desc: "Autonomous AI Orchestrator", icon: Zap },
    { title: "SmartChar AI", desc: "Farmer Scoring & Risk Analysis", icon: BarChart },
    { title: "RAG Pipeline Builder", desc: "Knowledge Base Assistant", icon: Database },
    { title: "Web Intelligence Agent", desc: "Automated News & Research", icon: Globe },
    { title: "Offline ERP Engine", desc: "BCIC Compliant Invoicing System", icon: Terminal },
  ];

  return (
    <section id="ai-tools" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="AI Tools" subtitle="// INTELLIGENT SYSTEMS" icon={Terminal} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <Card 
            key={idx} 
            {...tool} 
            actionText="Try Demo" 
            onAction={() => alert("Demo Coming Soon")} 
          />
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Custom Website & Dashboard", desc: "High-performance web applications and admin panels.", icon: Globe },
    { title: "AI Automation & Agentic Systems", desc: "End-to-end AI workflows and autonomous agents.", icon: Cpu },
    { title: "Mobile App Development", desc: "Native and cross-platform apps for Android/iOS.", icon: Smartphone },
    { title: "Custom Enterprise Software", desc: "Scalable software solutions for complex business needs.", icon: Code },
    { title: "Agri-FinTech Implementation", desc: "Specialized platforms for agricultural finance.", icon: Layers },
    { title: "Monthly AI Maintenance", desc: "Ongoing support and optimization for AI systems.", icon: Shield },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-dark-panel/30">
      <SectionHeader title="Services & Software" subtitle="// CORE SOLUTIONS" icon={Code} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <Card key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "J.A.R.V.I.S v5.03", desc: "Sovereign Agent Architecture", icon: Cpu },
    { title: "MiRA V4.1", desc: "Multi-Agent AI Orchestrator", icon: Zap },
    { title: "SmartChar", desc: "Zero NPL Agri-Finance Framework", icon: BarChart },
    { title: "Fertilizer Sales App", desc: "Offline BCIC System", icon: Smartphone },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Portfolio" subtitle="// RECENT DEPLOYMENTS" icon={Briefcase} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card 
            key={idx} 
            {...project} 
            actionText="View Details" 
            onAction={() => alert("Details Coming Soon")} 
          />
        ))}
      </div>
    </section>
  );
};

const ContentHub = () => {
  const contents = [
    { title: "AI Prompt Library", desc: "Free Download", icon: FileText },
    { title: "Agri-FinTech Content Ideas", desc: "Strategic insights", icon: Layers },
    { title: "Sovereign Agent Use Cases", desc: "Real-world applications", icon: Shield },
    { title: "Monthly Newsletter Signup", desc: "Stay updated", icon: Mail },
  ];

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-dark-panel/30">
      <SectionHeader title="Content Creation Hub" subtitle="// IDEAS & FREE RESOURCES" icon={FileText} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contents.map((content, idx) => (
          <Card key={idx} {...content} actionText="Access" onAction={() => alert("Coming Soon")} />
        ))}
      </div>
    </section>
  );
};

const BusinessNews = () => {
  const news = [
    { title: "Bangladesh Agri Loan Update 2026", desc: "Latest policies and market trends.", icon: Newspaper },
    { title: "New AI Models for Farming Efficiency", desc: "Technological advancements in agriculture.", icon: Cpu },
    { title: "Zero NPL Success Stories from Char Areas", desc: "Case studies on effective risk management.", icon: BarChart },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Business News" subtitle="// LATEST INSIGHTS" icon={Newspaper} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
      <p className="text-xs font-mono text-gray-500 mt-4 text-right">* Dynamic updates via JARVIS API coming soon</p>
    </section>
  );
};

const AgriFinTech = () => {
  return (
    <section id="agri-fintech" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-dark-panel/30 border-y border-border-cyan">
      <div className="text-center mb-12">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-green-glow text-glow-green mb-4">SmartChar Zero NPL</h2>
        <p className="text-xl text-white font-mono">Agri-FinTech Platform</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 border border-green-glow/30 rounded-sm bg-green-glow/5">
          <Tooltip text="Risk Coverage"><Shield className="mx-auto text-green-glow mb-4" size={40} /></Tooltip>
          <h3 className="font-bold text-lg text-white mb-2">Insurance-Backed Risk Coverage</h3>
        </div>
        <div className="text-center p-6 border border-green-glow/30 rounded-sm bg-green-glow/5">
          <Tooltip text="Digital System"><Smartphone className="mx-auto text-green-glow mb-4" size={40} /></Tooltip>
          <h3 className="font-bold text-lg text-white mb-2">Digital Voucher & Traceable Input System</h3>
        </div>
        <div className="text-center p-6 border border-green-glow/30 rounded-sm bg-green-glow/5">
          <Tooltip text="Real-time Monitoring"><Globe className="mx-auto text-green-glow mb-4" size={40} /></Tooltip>
          <h3 className="font-bold text-lg text-white mb-2">GIS + AI Real-time Monitoring</h3>
        </div>
      </div>
      
      <div className="text-center">
        <button className="px-8 py-3 bg-green-glow/20 border border-green-glow text-green-glow hover:bg-green-glow/30 transition-all font-bold tracking-wider inline-flex items-center gap-2">
          <Tooltip text="Download Document"><Download size={18} /></Tooltip>
          Download Whitepaper
        </button>
      </div>
    </section>
  );
};

const GalleryResources = () => {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'abir2026') {
      setUnlocked(true);
    } else {
      alert('Incorrect Password');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Gallery & Secure Resources" subtitle="// CLASSIFIED DATA" icon={LockKeyhole} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-orbitron text-xl text-cyan-glow mb-6">System Gallery</h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-dark-panel border border-border-cyan flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/400/300')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-luminosity"></div>
                <span className="font-mono text-xs text-cyan-glow z-10 bg-dark-bg/80 px-2 py-1">IMG_00{i}.DAT</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-orbitron text-xl text-cyan-glow mb-6">Secure Documents</h3>
          
          {!unlocked ? (
            <div className="bg-dark-panel border border-border-cyan p-8 text-center">
              <Tooltip text="Secure Area"><Lock className="mx-auto text-gray-500 mb-4" size={48} /></Tooltip>
              <p className="text-gray-400 mb-6 font-mono text-sm">Authentication required to access classified documents.</p>
              <form onSubmit={handleUnlock} className="flex max-w-xs mx-auto">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password" 
                  className="flex-1 bg-dark-bg border border-border-cyan px-4 py-2 text-white focus:outline-none focus:border-cyan-glow font-mono"
                />
                <button type="submit" className="bg-cyan-glow/20 border border-cyan-glow border-l-0 px-4 text-cyan-glow hover:bg-cyan-glow/30 transition-colors">
                  <Tooltip text="Submit Password"><ChevronRight size={20} /></Tooltip>
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              {['Field Research Report', 'SmartChar Technical Whitepaper', 'Company Profile', 'Financial Projections'].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-green-glow/30 bg-green-glow/5">
                  <div className="flex items-center gap-3">
                    <Tooltip text="Document"><FileText className="text-green-glow" size={20} /></Tooltip>
                    <span className="text-white font-medium">{doc}.pdf</span>
                  </div>
                  <button className="text-green-glow hover:text-white transition-colors">
                    <Tooltip text="Download File"><Download size={20} /></Tooltip>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return;
    setNewsletterStatus('submitting');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }, 1000);
  };

  const validate = () => {
    const newErrors: {name?: string, email?: string, message?: string} = {};
    
    if (!name.trim()) {
      newErrors.name = 'Designation / Name is required.';
    } else if (name.length > 50) {
      newErrors.name = 'Designation / Name cannot exceed 50 characters.';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Comm-Link (Email) is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format.';
    }

    const inappropriateWords = ['spam', 'scam', 'hack', 'fuck', 'shit', 'bitch', 'asshole'];
    const containsInappropriate = inappropriateWords.some(word => message.toLowerCase().includes(word));

    if (!message.trim()) {
      newErrors.message = 'Transmission Payload is required.';
    } else if (message.length < 20) {
      newErrors.message = 'Payload must be at least 20 characters.';
    } else if (containsInappropriate) {
      newErrors.message = 'Payload contains inappropriate language. Please revise.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setName('');
          setEmail('');
          setMessage('');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <footer id="contact" className="bg-dark-panel border-t border-border-cyan pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-orbitron text-3xl font-bold text-cyan-glow mb-6">Initialize Contact</h2>
            <p className="text-gray-400 mb-8 font-mono">Establish a secure connection with SMAN Global Nexus.</p>
            
            <div className="space-y-4 font-mono text-sm">
              <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-glow transition-colors">
                <Tooltip text="Email Address"><Mail size={18} /></Tooltip> abir.molla98@gmail.com
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-glow transition-colors">
                <Tooltip text="WhatsApp"><Smartphone size={18} /></Tooltip> WhatsApp Connection
              </a>
              <div className="flex gap-4 mt-6 pt-6 border-t border-border-cyan/50">
                <a href="#" className="text-gray-400 hover:text-cyan-glow transition-colors"><Tooltip text="LinkedIn Profile"><Linkedin size={24} /></Tooltip></a>
                <a href="#" className="text-gray-400 hover:text-cyan-glow transition-colors"><Tooltip text="GitHub Profile"><Github size={24} /></Tooltip></a>
                <a href="#" className="text-gray-400 hover:text-cyan-glow transition-colors"><Tooltip text="Twitter Profile"><Twitter size={24} /></Tooltip></a>
              </div>

              <div className="mt-10 pt-8 border-t border-border-cyan/50">
                <h3 className="font-orbitron text-lg text-cyan-glow mb-3">Newsletter Sync</h3>
                <p className="text-gray-400 font-mono text-xs mb-4">Subscribe for the latest updates and transmissions.</p>
                {newsletterStatus === 'success' ? (
                  <div className="bg-green-glow/10 border border-green-glow p-3 text-center rounded-sm">
                    <p className="text-green-glow font-mono text-sm">Subscription Active.</p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter Comm-Link"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="flex-1 bg-dark-bg border border-border-cyan p-2 text-white focus:outline-none focus:border-cyan-glow font-mono text-sm"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === 'submitting'}
                      className="px-4 py-2 bg-cyan-glow/10 border border-cyan-glow text-cyan-glow hover:bg-cyan-glow/20 transition-all font-bold font-mono text-sm disabled:opacity-50"
                    >
                      {newsletterStatus === 'submitting' ? '...' : 'Sync'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div>
            {isSubmitting ? (
              <div className="bg-cyan-glow/5 border border-cyan-glow/30 p-12 text-center rounded-sm flex flex-col items-center justify-center h-full min-h-[250px]">
                <div className="w-10 h-10 border-2 border-cyan-glow/20 border-t-cyan-glow rounded-full animate-spin mb-4"></div>
                <h3 className="text-cyan-glow font-orbitron text-lg mb-2 animate-pulse">Transmitting Data...</h3>
                <p className="text-gray-400 font-mono text-xs">Establishing secure connection</p>
              </div>
            ) : isSubmitted ? (
              <div className="bg-green-glow/10 border border-green-glow p-12 text-center rounded-sm flex flex-col items-center justify-center h-full min-h-[250px]">
                <h3 className="text-green-glow font-orbitron text-xl mb-2">Transmission Successful</h3>
                <p className="text-gray-300 font-mono text-sm">Your message has been securely delivered to SMAN Global Nexus.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-cyan-glow font-mono text-xs mb-1">Designation / Name</label>
                  <div className="relative group/input">
                    <input 
                      id="contact-name"
                      type="text" 
                      placeholder="Designation / Name" 
                      className={`w-full bg-dark-bg border ${errors.name ? 'border-red-500' : 'border-border-cyan'} p-3 text-white focus:outline-none focus:border-cyan-glow font-mono text-sm`} 
                      value={name}
                      onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({...errors, name: undefined}); }}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <div id="name-error" role="tooltip" className="absolute right-0 bottom-full mb-1 opacity-0 scale-95 group-hover/input:opacity-100 group-hover/input:scale-100 group-focus-within/input:opacity-100 group-focus-within/input:scale-100 transition-all duration-200 ease-out pointer-events-none z-50 whitespace-nowrap bg-dark-bg border border-red-500 text-red-500 text-xs font-mono px-2 py-1 rounded shadow-[0_0_10px_rgba(255,45,85,0.2)]">
                        {errors.name}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-cyan-glow font-mono text-xs mb-1">Comm-Link (Email)</label>
                  <div className="relative group/input">
                    <input 
                      id="contact-email"
                      type="email" 
                      placeholder="Comm-Link (Email)" 
                      className={`w-full bg-dark-bg border ${errors.email ? 'border-red-500' : 'border-border-cyan'} p-3 text-white focus:outline-none focus:border-cyan-glow font-mono text-sm`} 
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({...errors, email: undefined}); }}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <div id="email-error" role="tooltip" className="absolute right-0 bottom-full mb-1 opacity-0 scale-95 group-hover/input:opacity-100 group-hover/input:scale-100 group-focus-within/input:opacity-100 group-focus-within/input:scale-100 transition-all duration-200 ease-out pointer-events-none z-50 whitespace-nowrap bg-dark-bg border border-red-500 text-red-500 text-xs font-mono px-2 py-1 rounded shadow-[0_0_10px_rgba(255,45,85,0.2)]">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-cyan-glow font-mono text-xs mb-1">Transmission Payload (Message)</label>
                  <div className="relative group/input">
                    <textarea 
                      id="contact-message"
                      placeholder="Transmission Payload (Message)" 
                      rows={4} 
                      className={`w-full bg-dark-bg border ${errors.message ? 'border-red-500' : 'border-border-cyan'} p-3 text-white focus:outline-none focus:border-cyan-glow font-mono text-sm`} 
                      value={message}
                      onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors({...errors, message: undefined}); }}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && (
                      <div id="message-error" role="tooltip" className="absolute right-0 bottom-full mb-1 opacity-0 scale-95 group-hover/input:opacity-100 group-hover/input:scale-100 group-focus-within/input:opacity-100 group-focus-within/input:scale-100 transition-all duration-200 ease-out pointer-events-none z-50 whitespace-nowrap bg-dark-bg border border-red-500 text-red-500 text-xs font-mono px-2 py-1 rounded shadow-[0_0_10px_rgba(255,45,85,0.2)]">
                        {errors.message}
                      </div>
                    )}
                  </div>
                </div>
                <button type="submit" className="w-full py-3 bg-cyan-glow/10 border border-cyan-glow text-cyan-glow hover:bg-cyan-glow/20 transition-all font-bold tracking-wider font-mono uppercase text-sm">
                  Transmit Message
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="text-center border-t border-border-cyan/50 pt-8 font-mono text-xs text-gray-500">
          <p>© 2026 SMAN Global Nexus. All systems operational.</p>
          <p className="mt-2 text-cyan-glow/50">Designed by Md. Mobaid Mollah Abir</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-glow/30 selection:text-cyan-glow">
      <Navbar />
      <main>
        <Hero />
        <AITools />
        <Services />
        <Portfolio />
        <ContentHub />
        <BusinessNews />
        <AgriFinTech />
        <GalleryResources />
      </main>
      <ContactFooter />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-dark-panel border border-cyan-glow text-cyan-glow rounded-full shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:bg-cyan-glow hover:text-dark-bg hover:shadow-[0_0_25px_rgba(0,245,255,0.6)] transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
