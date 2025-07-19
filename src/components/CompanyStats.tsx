import { useRef, useEffect } from 'react';
import { createSplitTextAnimation } from '../utils/splitTextAnimations';

const CompanyStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years of Experience" },
    { number: "10+", label: "Industries Served" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "Pan India", label: "Geographic Coverage" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      // Add staggered animations to stat numbers and labels
      stats.forEach((_, index) => {
        const numberElement = document.querySelector(`.stat-number-${index}`);
        const labelElement = document.querySelector(`.stat-label-${index}`);
        
        if (numberElement && labelElement) {
          createSplitTextAnimation(numberElement, 'scaleUp', {
            type: 'chars',
            trigger: sectionRef.current,
            start: "top 80%",
            delay: index * 0.1,
            stagger: 0.05
          });
          
          createSplitTextAnimation(labelElement, 'fadeInUp', {
            type: 'words',
            trigger: sectionRef.current,
            start: "top 75%",
            delay: (index * 0.1) + 0.3,
            stagger: 0.1
          });
        }
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className={`stat-number-${index} text-4xl font-bold`}>{stat.number}</p>
              <p className={`stat-label-${index} mt-1 text-blue-200`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;