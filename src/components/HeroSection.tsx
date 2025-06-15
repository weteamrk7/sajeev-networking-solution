import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Cloud, Sparkles, Zap, Star, Globe, Shield } from 'lucide-react';

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleElements, setVisibleElements] = useState(new Set());

  const animatedTexts = [
    "Web Development",
    "App Development", 
    "SaaS Solutions",
    "API Integration",
    "Cloud Connectivity",
    "Data Analysis"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-element-id');
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isVisible]);

  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Mouse-following gradient spotlight */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl rotate-45 animate-float-slow blur-sm"></div>
          <div className="absolute top-40 right-40 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl rotate-12 animate-float-slow blur-sm" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-br from-green-400/30 to-teal-400/30 rounded-xl rotate-45 animate-float blur-sm" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Code className="absolute top-32 left-16 w-8 h-8 text-blue-500/40 animate-float-slow" style={{ animationDelay: '0s' }} />
          <Smartphone className="absolute top-48 right-24 w-6 h-6 text-purple-500/40 animate-float" style={{ animationDelay: '1s' }} />
          <Cloud className="absolute bottom-48 left-24 w-10 h-10 text-cyan-500/40 animate-float-slow" style={{ animationDelay: '2s' }} />
          <Globe className="absolute top-1/2 left-1/6 w-7 h-7 text-green-500/40 animate-float" style={{ animationDelay: '3s' }} />
          <Shield className="absolute bottom-1/3 right-1/4 w-8 h-8 text-orange-500/40 animate-float-slow" style={{ animationDelay: '4s' }} />
          <Star className="absolute top-1/4 right-1/3 w-5 h-5 text-yellow-500/40 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full animate-particle-float"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${15 + (i * 4)}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="transition-all duration-1000 transform">
          
          {/* Badge/Label */}
          <div 
            className={`
              hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm mb-8 transition-all duration-700 ease-out
              ${visibleElements.has('badge') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            data-element-id="badge"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Empowering Digital Innovation</span>
          </div>

          {/* Main Headlines */}
          <div className="mb-8">
            <h1 
              className={`
                hero-animate text-6xl md:text-8xl font-black mb-4 transition-all duration-700 ease-out
                ${visibleElements.has('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              data-element-id="title"
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                Sajeev
              </span>
            </h1>
            <h2 
              className={`
                hero-animate text-4xl md:text-6xl font-bold mb-6 text-slate-800 dark:text-slate-200 transition-all duration-700 ease-out
                ${visibleElements.has('subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              data-element-id="subtitle"
              style={{ transitionDelay: '0.2s' }}
            >
              Networking Solutions
            </h2>
          </div>
          
          {/* Fixed Dynamic text section */}
          <div className="mb-12">
            <p 
              className={`
                hero-animate text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 transition-all duration-700 ease-out
                ${visibleElements.has('description1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              data-element-id="description1"
              style={{ transitionDelay: '0.3s' }}
            >
              Cutting-edge
            </p>
            <div 
              className={`
                hero-animate relative h-16 mb-4 transition-all duration-700 ease-out
                ${visibleElements.has('animated-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              data-element-id="animated-text"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-2xl blur-xl"></div>
              <div className="relative text-3xl md:text-4xl font-bold text-slate-800 dark:text-white h-16 flex items-center justify-center">
                <span 
                  key={currentText}
                  className="animate-scale-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {animatedTexts[currentText]}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced description */}
          <p 
            className={`
              hero-animate text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out
              ${visibleElements.has('description2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            data-element-id="description2"
            style={{ transitionDelay: '0.5s' }}
          >
            Transform your business with innovative technology solutions that drive growth, efficiency, and success in the digital age.
          </p>

          {/* Enhanced CTA section */}
          <div 
            className={`
              hero-animate flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 ease-out
              ${visibleElements.has('cta-buttons') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            data-element-id="cta-buttons"
            style={{ transitionDelay: '0.6s' }}
          >
            <Button 
              size="lg" 
              onClick={scrollToConsultation}
              className="group relative text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl border-0 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-2xl border-2 border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats or key points */}
          <div 
            className={`
              hero-animate grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-700 ease-out
              ${visibleElements.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            data-element-id="stats"
            style={{ transitionDelay: '0.7s' }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">99%</div>
              <div className="text-slate-600 dark:text-slate-400">Client Satisfaction</div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div 
            className={`
              hero-animate absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out
              ${visibleElements.has('scroll-indicator') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            data-element-id="scroll-indicator"
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Scroll to explore</span>
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-400/50 dark:border-slate-500/50 rounded-full flex justify-center p-1">
                  <div className="w-1 h-3 bg-slate-500/70 dark:bg-slate-400/70 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
