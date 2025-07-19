import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceOverview from './components/ServiceOverview'
import WhyChooseUs from './components/WhyChooseUs'
import IndustriesServed from './components/IndustriesServed'
import CompanyStats from './components/CompanyStats'
import ProjectsShowcase from './components/ProjectsShowcase'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { initializeLenisScroll, destroyLenisScroll } from './utils/lenisScrollTo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import './styles/splittext.css'

function App() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize Lenis smooth scrolling
    initializeLenisScroll();

    // Cleanup function to destroy Lenis when component unmounts
    return () => {
      destroyLenisScroll();
    };
  }, []);

  return (
    <div className="App">
      <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ServiceOverview />
          <WhyChooseUs />
          <IndustriesServed />
          <CompanyStats />
          <ProjectsShowcase />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
