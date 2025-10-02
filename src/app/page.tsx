"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import Image from "next/image";
import { 
  Shield, 
  Settings, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  source: string;
  text: string;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

// Componente TestimonialsColumn
const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({ testimonials, className = "", duration }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <div key={index} className="flex flex-col gap-6">
            {testimonials?.map((testimonial: Testimonial, idx: number) => (
              <div
                key={idx}
                className="card bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <div className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded-full">
                    {testimonial.source}
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 text-sm"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SafeVisionBR: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ícones SVG customizados para cada serviço
  const NetworkIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
      <rect x="4" y="20" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.2)"/>
      <rect x="52" y="20" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.2)"/>
      <rect x="20" y="48" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.2)"/>
      <rect x="36" y="48" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.2)"/>
      <line x1="12" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="2"/>
      <line x1="44" y1="24" x2="52" y2="24" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="40" x2="24" y2="48" stroke="currentColor" strokeWidth="2"/>
      <line x1="40" y1="40" x2="40" y2="48" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  const WifiMeshIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.2)"/>
      <circle cx="32" cy="32" r="3" fill="currentColor"/>
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="48" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="16" cy="48" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="48" cy="48" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <line x1="21" y1="21" x2="27" y2="27" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="43" y1="21" x2="37" y2="27" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
    </svg>
  );

  const SecurityIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="20" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="32" cy="34" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.2)"/>
      <circle cx="32" cy="34" r="2" fill="currentColor"/>
      <path d="M20 20V16C20 10.48 24.48 6 30 6H34C39.52 6 44 10.48 44 16V20" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="28" y="40" width="8" height="4" rx="1" fill="currentColor"/>
      <circle cx="18" cy="26" r="1" fill="currentColor"/>
      <circle cx="46" cy="26" r="1" fill="currentColor"/>
      <circle cx="18" cy="42" r="1" fill="currentColor"/>
      <circle cx="46" cy="42" r="1" fill="currentColor"/>
    </svg>
  );

  const IoTIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="12" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="32" cy="20" r="3" fill="currentColor"/>
      <rect x="28" y="26" width="8" height="2" rx="1" fill="currentColor"/>
      <rect x="28" y="30" width="8" height="2" rx="1" fill="currentColor"/>
      <circle cx="12" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="52" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <rect x="8" y="44" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <rect x="44" y="44" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <line x1="16" y1="24" x2="24" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="48" y1="24" x2="40" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="20" y1="44" x2="28" y2="36" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="44" y1="44" x2="36" y2="36" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
    </svg>
  );

  const ITSupportIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
      <rect x="12" y="20" width="40" height="24" rx="2" stroke="currentColor" strokeWidth="1" fill="rgba(34, 211, 238, 0.05)"/>
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.2)"/>
      <path d="M32 28L34 30L32 32L30 30L32 28Z" fill="currentColor"/>
      <rect x="20" y="50" width="24" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <line x1="28" y1="54" x2="36" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="26" r="1" fill="currentColor"/>
      <circle cx="20" cy="26" r="1" fill="currentColor"/>
      <circle cx="24" cy="26" r="1" fill="currentColor"/>
    </svg>
  );

  const ElectricalIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 8L36 24H32L36 40L28 56L32 40H28L28 8Z" stroke="currentColor" strokeWidth="2" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="16" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="48" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="16" cy="44" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <circle cx="48" cy="44" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(34, 211, 238, 0.1)"/>
      <line x1="22" y1="20" x2="28" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="42" y1="20" x2="36" y2="24" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="22" y1="44" x2="28" y2="48" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="42" y1="44" x2="36" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
    </svg>
  );

  const services: Service[] = [
    {
      icon: <NetworkIcon />,
      title: "Cabeamento Estruturado",
      description: "Infraestrutura de rede profissional para empresas e residências com padrões internacionais de qualidade."
    },
    {
      icon: <WifiMeshIcon />,
      title: "WiFi Mesh",
      description: "Cobertura total de internet sem fio com tecnologia mesh para conectividade perfeita em todos os ambientes."
    },
    {
      icon: <SecurityIcon />,
      title: "Segurança Eletrônica",
      description: "Sistemas completos de câmeras, alarmes e monitoramento 24h para proteção total do seu patrimônio."
    },
    {
      icon: <IoTIcon />,
      title: "Automação IoT",
      description: "Casa e empresa inteligentes com dispositivos conectados para máximo conforto e eficiência energética."
    },
    {
      icon: <ITSupportIcon />,
      title: "Suporte de TI",
      description: "Contratos de suporte técnico especializado para manter sua tecnologia sempre funcionando perfeitamente."
    },
    {
      icon: <ElectricalIcon />,
      title: "Serviços Elétricos",
      description: "Instalação e manutenção elétrica predial e residencial com equipe certificada e materiais de qualidade."
    }
  ];

  // Logo SafeVisionBR
  const SafeVisionLogo = () => (
    <div className="relative">
      <Image 
        src="/Logo Safe Vision-png-menor-branco-03.png" 
        alt="Safe Vision Logo" 
        width={200}
        height={64}
        className="h-8 md:h-16 w-auto" 
        priority
      />
    </div>
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Testimonials data
  const testimonials = [
    {
      text: "Acabamento ficou show de bola não deixaram nenhum fio a mostra.",
      name: "Mikaella R. Da Silva",
      source: "Google",
    },
    {
      text: "Profissionais são qualificados, atenciosos e com experiência no negócio.",
      name: "Leonardo Moraes",
      source: "Google",
    },
    {
      text: "Super indico o trabalho dessa empresa, superou todas as minhas expectativas. O André sempre muito educado e solícito, executou um excelente trabalho em nossa escola.",
      name: "Escola de Danças Allegro",
      source: "Google",
    },
    {
      text: "Excelente atendimento e pós vendas. Sempre que precisamos do suporte de TI, estão sempre à disposição independente do horário, de prontidão. Muito obrigado pela excelência.",
      name: "Esfiharia Continental",
      source: "Google",
    },
    {
      text: "Trabalho impecável, equipe profissional e pontual. Recomendo para qualquer empresa que precise de soluções de TI.",
      name: "Maria Santos",
      source: "Google",
    },
    {
      text: "Suporte técnico excepcional, sempre resolvem nossos problemas rapidamente. Parceiros de confiança.",
      name: "Carlos Oliveira",
      source: "Google",
    },
    {
      text: "Instalação perfeita, sem complicações. Equipe muito preparada e educada.",
      name: "Ana Costa",
      source: "Google",
    },
    {
      text: "Melhor empresa de TI da região. Atendimento personalizado e soluções eficientes.",
      name: "Roberto Silva",
      source: "Google",
    },
    {
      text: "Transformaram nossa infraestrutura de TI completamente. Resultados surpreendentes.",
      name: "Luana Ferreira",
      source: "Google",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('home')} className="flex items-center group">
              <SafeVisionLogo />
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors">Início</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors">Contato</button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors text-left">Início</button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition-colors text-left">Serviços</button>
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors text-left">Sobre</button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors text-left">Contato</button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-900/20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
          <motion.div 
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative">
                <Image 
                  src="/Logo Safe Vision-png-menor-branco-03.png" 
                  alt="Safe Vision Logo" 
                  width={400}
                  height={312}
                  className="h-52 md:h-78 w-auto"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Transformamos seus ambientes com tecnologia de ponta, oferecendo segurança, 
              conectividade e automação inteligente para sua empresa ou residência.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <button 
                onClick={() => scrollToSection('services')}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Nossos Serviços
                <ChevronDown className="inline ml-2 w-5 h-5 group-hover:animate-bounce" />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce" style={{animationDuration: '2s'}}>
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia, desde infraestrutura de rede 
              até sistemas de segurança avançados, sempre com foco na excelência e inovação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Precisa de uma solução personalizada?</h3>
                <p className="text-slate-400 mb-6 max-w-2xl">
                  Nossa equipe especializada está pronta para desenvolver a solução perfeita 
                  para suas necessidades específicas de tecnologia e segurança.
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Consulte Nossos Especialistas
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Experiência e Qualidade
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Com anos de experiência no mercado, desenvolvemos soluções personalizadas que 
                atendem às necessidades específicas de cada cliente, sempre priorizando a qualidade 
                e a inovação tecnológica.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Nosso diferencial está na combinação de expertise técnica, atendimento personalizado 
                e uso de equipamentos de última geração, garantindo resultados superiores em todos os projetos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center">
                  <div className="bg-cyan-500/10 p-3 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Segurança Total</h4>
                    <p className="text-slate-400 text-sm">Monitoramento 24h</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-cyan-500/10 p-3 rounded-full mr-4">
                    <Settings className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Suporte Técnico</h4>
                    <p className="text-slate-400 text-sm">Equipe especializada</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                <img 
                  src="https://safevisionbr.com.br/wp-content/uploads/2025/05/safevision_cam-768x512.png" 
                  alt="SafeVisionBR - Sistemas de Segurança" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20"></div>
                
                <div className="absolute inset-6 flex flex-col justify-between">
                  <div className="text-right">
                    <div className="inline-block bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-full px-3 py-1">
                      <span className="text-cyan-400 text-xs font-medium">Tecnologia Avançada</span>
                    </div>
                  </div>
                  
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                      Sobre a SafeVisionBR
                    </h3>
                    <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-4">
                      Somos especialistas em soluções de tecnologia com foco em segurança, conectividade e automação.
                    </p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                      Nossa missão é proporcionar tranquilidade através da tecnologia mais avançada do mercado, 
                      com uma equipe qualificada e suporte contínuo.
                    </p>
                    
                    <div className="grid grid-cols-4 gap-3">
                      <div className="text-center bg-slate-900/40 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
                        <div className="text-lg font-bold text-cyan-400 mb-1">100+</div>
                        <div className="text-slate-300 text-xs">Projetos</div>
                      </div>
                      <div className="text-center bg-slate-900/40 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
                        <div className="text-lg font-bold text-cyan-400 mb-1">24/7</div>
                        <div className="text-slate-300 text-xs">Suporte</div>
                      </div>
                      <div className="text-center bg-slate-900/40 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
                        <div className="text-lg font-bold text-cyan-400 mb-1">5+</div>
                        <div className="text-slate-300 text-xs">Anos</div>
                      </div>
                      <div className="text-center bg-slate-900/40 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
                        <div className="text-lg font-bold text-cyan-400 mb-1">100%</div>
                        <div className="text-slate-300 text-xs">Satisfação</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-white bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Confira de perto as avaliações e veja por que </span><br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">tantos clientes recomendam!</span>
            </h2>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Pronto para transformar seu ambiente com tecnologia de ponta? 
              Entre em contato conosco e descubra como podemos ajudar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-cyan-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Telefone</h3>
              <p className="text-slate-400">Entre em contato direto</p>
              <p className="text-cyan-400 font-semibold mt-2">+55 (11) 963561680</p>
            </motion.div>

            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-cyan-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">E-mail</h3>
              <p className="text-slate-400">Envie sua mensagem</p>
              <p className="text-cyan-400 font-semibold mt-2">contato@safevisionbr.com.br</p>
            </motion.div>

            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-cyan-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mt-1" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Localização</h3>
              <p className="text-slate-400">Nossa região de atuação</p>
              <p className="text-cyan-400 font-semibold mt-2">São Paulo - SP</p>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=5511963561680&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=5511963561680&text=Olá! Gostaria de saber mais sobre os serviços da SafeVisionBR.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 relative"
          title="Fale conosco no WhatsApp"
        >
          <svg 
            className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.594z"/>
          </svg>
          
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          
          <div className="absolute bottom-16 right-0 bg-slate-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Fale conosco no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-2">
        <div className="container mx-auto px-2 text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="relative">
              <Image 
                src="/Logo Safe Vision-png-menor-branco-03.png" 
                alt="Safe Vision Logo" 
                width={160}
                height={80}
                className="h-14 md:h-20 w-auto"
              />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-2">
            Soluções de tecnologia para um futuro mais seguro e conectado.
          </p>
          <p className="text-slate-500 text-sm">
            © 2024 SafeVisionBR. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SafeVisionBR;
