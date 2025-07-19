import React, { useRef, useEffect } from 'react';
import { createSplitTextAnimation } from '../utils/splitTextAnimations';

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && descriptionRef.current) {
      // Animate title with slide in right effect
      createSplitTextAnimation(titleRef.current, 'slideInRight', {
        type: 'words',
        trigger: sectionRef.current || undefined,
        start: "top 75%",
        stagger: 0.08
      });

      // Animate description with fade in up
      createSplitTextAnimation(descriptionRef.current, 'fadeInUp', {
        type: 'words',
        trigger: sectionRef.current || undefined,
        start: "top 70%",
        delay: 0.4,
        stagger: 0.03
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            alt="Professional team working" 
            className="w-full h-auto object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzcgahXU0DeabrKoemRttg8SuABwTDnho2dGOsNKDFklFIHXa20fVjYhBd6Tg45YWooTEgbRte81kcDzrS29Oh0jApznsuX1XedQ0ZaOaidbQp5mgzaJkGQYlqgK9A8FYR5AaoWOb0cTPr3U7ssSQ_tSkbY_BVhUCconGcgSqBVMjNLGhDkTyCj6sRc1XuMnVXxGCWxDy_yzuqLXvLGl8UgIPMKufeJry-QwD63leNHIK4P7ltFyl14cwq5k_rGj5C6RoEEDZk08"
          />
        </div>
        <div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-slate-900 text-split-title"
          >
            Why Choose Shree Ganesh Refrigeration?
          </h2>
          <p 
            ref={descriptionRef}
            className="mt-4 text-lg text-slate-600 text-split-description"
          >
            We provide end-to-end project management, from concept to commissioning, ensuring seamless execution and superior quality.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-lg">Turnkey Solutions</h4>
                <p className="text-slate-600">One-stop for design, supply, installation, and validation.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-lg">Expert Engineering Team</h4>
                <p className="text-slate-600">Experienced professionals delivering innovative and compliant systems.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-lg">Multi-Industry Experience</h4>
                <p className="text-slate-600">Proven track record in pharmaceuticals, manufacturing, and more.</p>
              </div>
            </li>
          </ul>
          <p className="mt-6 font-semibold text-slate-900">
            For project inquiries: 
            <a className="text-blue-600 hover:underline" href="mailto:Project.sgr.system@gmail.com">
              Project.sgr.system@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;