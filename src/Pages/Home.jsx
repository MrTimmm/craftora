import React from 'react';
import CustomCursor from '../Components/CustomCursor';
import GrainOverlay from '../Components/GrainOverlay';
import Navigation from '../Components/Navigation';
import HeroSection from '../Components/HeroSection';
import MarqueeStrip from '../Components/MarqueeStrip';
import AboutSection from '../Components/AboutSection';
import CollectionsSection from '../Components/CollectionsSection';
import ProcessSection from '../Components/ProcessSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import CTASection from '../Components/CTASection';
import Footer from '../Components/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
  useScrollReveal();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f3eb] font-['Cormorant_Garamond'] overflow-x-hidden">
      <CustomCursor />
      <GrainOverlay />
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <MarqueeStrip />
      <AboutSection />
      <CollectionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection scrollToSection={scrollToSection} />
      <Footer />

      <style jsx global>{`
        @keyframes grain-shift {
          0%,100%{transform:translate(0,0)}
          10%{transform:translate(-2%,-1%)}
          20%{transform:translate(2%,1%)}
          30%{transform:translate(-1%,2%)}
          40%{transform:translate(1%,-2%)}
          50%{transform:translate(-2%,1%)}
          60%{transform:translate(2%,-1%)}
          70%{transform:translate(-1%,-2%)}
          80%{transform:translate(1%,2%)}
          90%{transform:translate(-2%,0)}
        }
        @keyframes marquee {
          0%{transform:translateX(0)}
          100%{transform:translateX(-50%)}
        }
        @keyframes scroll-line {
          0%{transform:scaleY(0);transform-origin:top}
          50%{transform:scaleY(1);transform-origin:top}
          51%{transform:scaleY(1);transform-origin:bottom}
          100%{transform:scaleY(0);transform-origin:bottom}
        }
        @keyframes fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
        }
        .animate-grain-shift { animation: grain-shift 8s steps(10) infinite; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-scroll-line { animation: scroll-line 2s ease infinite; }
        .animate-fade-up { animation: fade-up 0.8s forwards ease; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-750 { animation-delay: 0.75s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.35s; }
        .reveal-delay-4 { transition-delay: 0.5s; }
        .nav.scrolled { background: rgba(107,18,18,0.97) !important; backdrop-filter: blur(20px); box-shadow: 0 4px 40px rgba(74,13,13,0.4); border-bottom-color: rgba(240,234,214,0.12); }
        .group:hover .group-hover\\:scale-105 { transform: scale(1.04); }
        .group:hover .group-hover\\:translate-y-0 { transform: translateY(0); }
        .group:hover .group-hover\\:max-h-20 { max-height: 80px; }
        @media (max-width: 1024px) {
          .cursor-none { cursor: auto; }
        }
      `}</style>
    </div>
  );
};

export default Home;