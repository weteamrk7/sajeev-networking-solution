import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Cloud, Database, BarChart3, Cog, ArrowRight, Zap, Sparkles } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and cutting-edge technologies",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern Frameworks"]
  },
  {
    id: 2,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    features: ["Cross-platform", "Native Performance", "App Store Ready", "User-centric Design"]
  },
  {
    id: 3,
    title: "SaaS Solutions",
    description: "Scalable software-as-a-service platforms designed for businesses of all sizes and industries",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    features: ["Scalable Architecture", "Multi-tenant", "Subscription Management", "Analytics Dashboard"]
  },
  {
    id: 4,
    title: "API Integration",
    description: "Seamless integration of third-party APIs and custom API development for enhanced functionality",
    icon: Cog,
    color: "from-orange-500 to-red-500",
    features: ["RESTful APIs", "GraphQL", "Webhooks", "Comprehensive Documentation"]
  },
  {
    id: 5,
    title: "Cloud Connectivity",
    description: "Cloud infrastructure setup and management for optimal performance and reliability",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    features: ["AWS/Azure/GCP", "DevOps Automation", "24/7 Monitoring", "Enterprise Security"]
  },
  {
    id: 6,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with advanced analytics and machine learning",
    icon: BarChart3,
    color: "from-teal-500 to-blue-500",
    features: ["Data Visualization", "Machine Learning", "Real-time Analytics", "Custom Reporting"]
  }
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = entry.target.getAttribute('data-feature-id');
            if (featureId) {
              setVisibleFeatures(prev => new Set([...prev, featureId]));
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const features = document.querySelectorAll('.feature-item');
    features.forEach((feature) => featuresObserver.observe(feature));

    return () => featuresObserver.disconnect();
  }, [visibleCards]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-950 dark:to-purple-950/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-48 h-48 bg-cyan-400/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center animate-bounce-subtle">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Enhanced Service Cards with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = index === activeService;
            const isVisible = visibleCards.has(index);
            
            return (
              <Card 
                key={service.id}
                data-index={index}
                className={`
                  service-card cursor-pointer transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl
                  ${isActive ? 'ring-2 ring-blue-500 shadow-lg scale-105' : ''}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm
                `}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 
                    transition-all duration-500 hover:scale-110 hover:rotate-6
                    ${isVisible ? 'animate-bounce-subtle' : ''}
                  `}
                  style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                      <ArrowRight className="w-4 h-4 text-primary transition-transform hover:translate-x-1" />
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => {
                        const featureId = `${index}-${featureIndex}`;
                        const isFeatureVisible = visibleFeatures.has(featureId);
                        
                        return (
                          <li 
                            key={featureIndex} 
                            data-feature-id={featureId}
                            className={`
                              feature-item text-sm text-muted-foreground flex items-center transition-all duration-700 ease-out
                              ${isFeatureVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                            `}
                            style={{ 
                              transitionDelay: `${index * 150 + featureIndex * 200}ms`
                            }}
                          >
                            <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${service.color} transition-all duration-500 ${isFeatureVisible ? 'scale-100' : 'scale-0'}`}
                            style={{ 
                              transitionDelay: `${index * 150 + featureIndex * 200 + 100}ms`
                            }}></div>
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Statistics with staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "50+", label: "Projects Delivered", icon: "🚀" },
            { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
            { number: "5⭐", label: "Client Satisfaction", icon: "🌟" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`
                text-center p-6 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm
                transition-all duration-700 hover:scale-105 hover:shadow-lg
                scroll-animate opacity-0 translate-y-8
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl mb-2 animate-bounce-subtle" style={{ animationDelay: `${index * 300}ms` }}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
