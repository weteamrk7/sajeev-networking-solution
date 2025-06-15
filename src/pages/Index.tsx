
import React, { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ServicesSection } from '../components/ServicesSection';
import { ConsultationSection } from '../components/ConsultationSection';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { ThemeToggle } from '../components/ThemeToggle';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Dynamic gradient background with multiple layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-cyan-50/40 dark:from-blue-950/40 dark:via-purple-950/30 dark:to-cyan-950/40 transition-all duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        
        {/* Multiple floating geometric shapes with enhanced animations */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-enhanced"
            style={{
              transform: `translate(${Math.sin(scrollY * 0.002) * 60}px, ${Math.cos(scrollY * 0.002) * 40}px) scale(${1 + Math.sin(scrollY * 0.001) * 0.1})`,
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-cyan-400/25 rounded-full blur-3xl animate-float-enhanced"
            style={{
              transform: `translate(${Math.cos(scrollY * 0.0015) * -50}px, ${Math.sin(scrollY * 0.0015) * 35}px) scale(${1 + Math.cos(scrollY * 0.001) * 0.15})`,
              animationDelay: '2s'
            }}
          />
          <div 
            className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-breathe"
            style={{
              transform: `translate(${Math.sin(scrollY * 0.0012) * 70}px, ${Math.cos(scrollY * 0.0012) * 50}px)`,
              animationDelay: '4s'
            }}
          />
          
          {/* Additional floating orbs */}
          <div 
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-2xl animate-float"
            style={{
              transform: `translate(${Math.cos(scrollY * 0.0008) * 45}px, ${Math.sin(scrollY * 0.0008) * 30}px)`,
              animationDelay: '6s'
            }}
          />
          <div 
            className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-gradient-to-r from-green-400/15 to-teal-400/15 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(${Math.sin(scrollY * 0.0006) * 35}px, ${Math.cos(scrollY * 0.0006) * 25}px)`,
              animationDelay: '8s'
            }}
          />
        </div>

        {/* Enhanced animated dots pattern with parallax */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 1px, transparent 1px),
                             radial-gradient(circle at 50% 10%, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px, 60px 60px, 40px 40px',
            transform: `translateY(${scrollY * 0.08}px)`,
          }} />
        </div>

        {/* Moving wave pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
              transform: `translateX(${Math.sin(scrollY * 0.001) * 100}px) translateY(${scrollY * 0.1}px)`,
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-particle-float"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i * 5)}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Mesh gradient overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/8 to-purple-500/8 animate-mesh-gradient" />
      </div>

      <ThemeToggle />
      <HeroSection />
      
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000 ease-out">
        <ProjectsSection />
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000 ease-out">
        <ServicesSection />
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000 ease-out">
        <ConsultationSection />
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000 ease-out">
        <AboutSection />
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-20 transition-all duration-1000 ease-out">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
