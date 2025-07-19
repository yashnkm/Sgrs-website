import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready to Start Your Project?</h2>
        <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
          Let's discuss how we can engineer the perfect solution for your facility. Contact us for a free, no-obligation consultation.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              className="flex-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 h-14 px-4" 
              placeholder="Your Email Address" 
              type="email"
            />
            <button 
              className="bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-300 rounded-md h-14 px-8 font-bold text-lg" 
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="mt-8 text-center text-slate-600">
          <p className="font-semibold">
            Call us: 
            <a className="text-blue-600 hover:underline" href="tel:+919876543210">+91-9876543210</a> 
            | Email: 
            <a className="text-blue-600 hover:underline" href="mailto:Project.sgr.system@gmail.com">Project.sgr.system@gmail.com</a>
          </p>
          <p className="mt-2">
            <span className="font-bold text-orange-600">Emergency Service Available.</span> 
            Located in Shirur, Pune, serving clients nationwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;