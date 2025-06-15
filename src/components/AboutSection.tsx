import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Star, Sparkles, Zap, TrendingUp, Target } from 'lucide-react';


const stats = [
  {
    id: 1,
    icon: Award,
    number: 50,
    suffix: '+',
    label: 'Projects Delivered',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: Clock,
    number: 99.9,
    suffix: '%',
    label: 'Uptime Across Cloud Apps',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    icon: Star,
    number: 5,
    suffix: ' Star',
    label: 'Average Client Rating',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 4,
    icon: Users,
    number: 100,
    suffix: '+',
    label: 'Happy Clients',
    color: 'from-purple-500 to-pink-500'
  }
];

const timeline = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to transform businesses through innovative digital solutions',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2021',
    title: 'First Major Success',
    description: 'Delivered 10+ enterprise-level projects, establishing our reputation in the market',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Grew our team of experts and expanded into cloud connectivity and data analysis',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Achieved 5-star rating from startups and enterprises alike',
    icon: Award,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: '2024',
    title: 'Innovation Leader',
    description: 'Leading the way in cutting-edge web and app development solutions',
    icon: Target,
    color: 'from-indigo-500 to-purple-500'
  }
];

export const AboutSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          stats.forEach((stat, index) => {
            setTimeout(() => {
              const target = stat.number;
              const increment = target / 100; 
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = current;
                  return newCounters;
                });
              }, 20); 
            }, index * 200); 
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-timeline-index') || '0');
            setVisibleTimelineItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => timelineObserver.observe(item));

    return () => timelineObserver.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-blue-950/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center animate-bounce-subtle">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Sajeev Networking Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just developers – we're digital transformation partners committed to your success
          </p>
        </div>

        {/* Enhanced Stats Section with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.id} 
                className={`
                  text-center hover:shadow-xl transition-all duration-700 border-0 
                  bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:-translate-y-2
                  scroll-animate opacity-0 translate-y-10
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`
                    w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${stat.color} 
                    flex items-center justify-center animate-bounce-subtle
                  `}
                  style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {Math.round(counters[index] * 10) / 10}{stat.suffix}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Timeline Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Journey</h3>
            <p className="text-muted-foreground">A timeline of innovation, growth, and success</p>
          </div>
          
          <div className="relative">
            {/* Enhanced Timeline Line */}
            {/* On mobile, line is on the left. On medium screens and up, it's centered. */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-60"></div>
            
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isVisible = visibleTimelineItems.has(index);
              
              return (
                <div 
                  key={index} 
                  data-timeline-index={index}
                  className={`
                    timeline-item relative flex items-center mb-16 transition-all duration-800
                    flex-col md:flex-row /* Stack vertically on small, row on md+ */
                    ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} /* Alternating on md+ */
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                  `}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot (always left of card on mobile, centered on desktop line) */}
                  <div className={`
                    absolute z-10 
                    top-0 -translate-y-1/2 /* Position at the top of the card for mobile stacking */
                    left-4 /* Aligned with the main line on mobile */
                    md:top-1/2 md:-translate-y-1/2 /* Vertically center for desktop */
                    md:left-1/2 md:-translate-x-1/2 /* Centered on the line for desktop */
                  `}>
                    <div className={`
                      w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-background 
                      shadow-xl transition-all duration-500 hover:scale-125
                      ${isVisible ? 'animate-pulse' : ''}
                    `}></div>
                  </div>

                  {/* Timeline Card Wrapper */}
                  <div className={`
                    w-full /* Full width on mobile */
                    md:w-1/2 /* Half width on md+ */
                    pl-12 pr-4 text-left /* Default padding and text alignment for mobile (left-aligned relative to timeline line) */
                    ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} /* Adjust padding and text alignment for md+ */
                  `}>
                    <Card className="hover:shadow-xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:scale-105">
                      <CardContent className="p-6">
                        <div className={`
                            flex items-center gap-4 mb-4 
                            justify-start /* Always align left on mobile */
                            ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} /* Align icon/badge right for left cards on md+ */
                        `}>
                          <div className={`
                            w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} 
                            flex items-center justify-center transition-transform duration-500 hover:rotate-12
                          `}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <Badge variant="outline" className={`bg-gradient-to-r ${item.color} text-white border-0 animate-pulse`}>
                            {item.year}
                          </Badge>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Horizontal Connecting Line (desktop only) */}
                  <div className={`
                    absolute h-1 bg-gradient-to-r ${item.color} rounded-full z-0
                    top-1/2 -translate-y-1/2 /* Vertically center */
                    w-6 /* Fixed width for desktop */
                    ${index % 2 === 0 ? 'md:right-1/2 md:mr-6' : 'md:left-1/2 md:ml-6'} /* Desktop alternating positions */
                    hidden md:block /* Hide on mobile, show on md+ */
                    transition-all duration-500 ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                  `}></div>

                  {/* Horizontal Connecting Line (mobile only) */}
                  <div className={`
                    absolute h-1 bg-gradient-to-r ${item.color} rounded-full z-0
                    top-0 -translate-y-1/2 /* Position to visually connect dot to card */
                    left-[1.75rem] /* Start just after the dot, adjusted for 12px dot width (6px radius + 4px border = 10px from center. 4px line + 1.25 rem from left for card = 1.75 rem) */
                    w-[calc(100%-4rem)] /* Extend to cover content width, adjust as needed */
                    block md:hidden /* Show on mobile, hide on md+ */
                    transition-all duration-500 ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                  `}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
