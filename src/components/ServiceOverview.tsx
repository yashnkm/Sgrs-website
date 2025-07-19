import React, { useRef, useEffect } from 'react';
import { lenisScrollTo } from '../utils/lenisScrollTo';
import { createSplitTextAnimation } from '../utils/splitTextAnimations';

const ServiceOverview: React.FC = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  // Initialize SplitText animations on scroll
  useEffect(() => {
    if (titleRef.current && descriptionRef.current) {
      // Animate section title
      createSplitTextAnimation(titleRef.current, 'slideInLeft', {
        type: 'words',
        trigger: sectionRef.current || undefined,
        start: "top 75%",
        stagger: 0.1
      });

      // Animate section description
      createSplitTextAnimation(descriptionRef.current, 'fadeInUp', {
        type: 'words',
        trigger: sectionRef.current || undefined,
        start: "top 70%",
        delay: 0.3,
        stagger: 0.05
      });
    }
  }, []);

  const services = [
    {
      title: "HVAC Design & Installation",
      description: "Custom air conditioning systems, ventilation design and heating solutions for industrial spaces.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Cleanroom Solutions",
      description: "Pharmaceutical grade cleanrooms with ISO certification and precise climate control systems.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Industrial Refrigeration",
      description: "Cold storage facilities, commercial refrigeration and comprehensive industrial cooling solutions.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Maintenance & Support",
      description: "24/7 emergency support, preventive maintenance programs and complete system upgrades.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-split-title"
          >
            Our Core Services
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg text-slate-600 max-w-2xl mx-auto text-split-description"
          >
            Comprehensive HVAC and cleanroom solutions designed for excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-200 hover:border-orange-200"
              ref={(el) => {
                if (el) {
                  // Add SplitText animation to service titles
                  const titleElement = el.querySelector('.service-title');
                  const descElement = el.querySelector('.service-description');
                  
                  if (titleElement && descElement) {
                    createSplitTextAnimation(titleElement, 'fadeInUp', {
                      type: 'words',
                      trigger: el,
                      start: "top 85%",
                      delay: index * 0.1,
                      stagger: 0.05
                    });
                    
                    createSplitTextAnimation(descElement, 'fadeInUp', {
                      type: 'words',
                      trigger: el,
                      start: "top 80%",
                      delay: (index * 0.1) + 0.2,
                      stagger: 0.02
                    });
                  }
                }
              }}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="service-title text-xl font-semibold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="service-description text-slate-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="text-orange-600 font-medium hover:text-orange-700 transition-all duration-200 group-hover:translate-x-1">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button 
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            onClick={() => lenisScrollTo('#contact', 80, 1.2)}
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;