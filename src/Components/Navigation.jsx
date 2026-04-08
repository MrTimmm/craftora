import React, { useEffect, useRef, useState } from 'react';

const Navigation = ({ scrollToSection }) => {
  const navRef = useRef(null);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');

      if (current > lastScroll && current > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastScroll = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when offcanvas is open
  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOffcanvasOpen]);

  const handleNavLinkClick = (sectionId) => {
    setIsOffcanvasOpen(false);
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b border-transparent before:content-[''] before:block before:w-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#c8bfa8] before:to-transparent before:opacity-45 nav py-2"
        style={{
          background: 'linear-gradient(to bottom, rgba(74,13,13,0.85) 0%, rgba(74,13,13,0) 100%)',
        }}
      >
        <div className="max-w-[1300px] mx-auto px-10 flex items-center justify-between h-[76px] gap-8">
          <a 
            href="#" 
            className="flex items-center gap-3 text-[#F0EAD6] my-2 no-underline shrink-0"
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('top'); }}
          >
            <img src="/images/main2.png" className='sm:w-40 w-28 object-cover' alt="" />
          </a>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-[0.1rem] list-none">
            <li><a href="#collections" onClick={(e) => { e.preventDefault(); handleNavLinkClick('collections'); }} className="relative inline-block px-4 py-[0.45rem] text-[0.8rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-[calc(100%-2rem)] after:h-px after:bg-[#F0EAD6] after:opacity-70 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">Collections</a></li>
            <li><a href="#process" onClick={(e) => { e.preventDefault(); handleNavLinkClick('process'); }} className="relative inline-block px-4 py-[0.45rem] text-[0.8rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-[calc(100%-2rem)] after:h-px after:bg-[#F0EAD6] after:opacity-70 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">Process</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }} className="relative inline-block px-4 py-[0.45rem] text-[0.8rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-[calc(100%-2rem)] after:h-px after:bg-[#F0EAD6] after:opacity-70 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">About</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }} className="relative inline-block px-4 py-[0.45rem] text-[0.8rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-[calc(100%-2rem)] after:h-px after:bg-[#F0EAD6] after:opacity-70 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">Contact</a></li>
          </ul>
          
          <div className="flex items-center gap-4">
            {/* Desktop Button */}
            <button 
              className="hidden lg:block px-6 py-[0.55rem] font-['Cinzel'] text-[0.65rem] font-medium tracking-[0.25em] uppercase text-[#6B1212] bg-[#F0EAD6] border-none transition-all duration-300 hover:bg-[#e8dfc7] hover:-translate-y-px"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              onClick={() => handleNavLinkClick('contact')}
            >
              Order Bespoke
            </button>

            {/* Hamburger Menu Button with Hover Animation */}
            <button 
              onClick={() => setIsOffcanvasOpen(true)}
              className="lg:hidden group relative flex flex-col items-center justify-center w-12 h-12 focus:outline-none z-[1001] rounded-lg transition-all duration-300 hover:bg-white/10"
              aria-label="Open menu"
            >
              {/* Hamburger Icon Lines with Hover Animation */}
              <div className="relative flex flex-col items-center justify-center gap-1.5 w-6">
                <span className={`w-6 h-0.5 bg-[#F0EAD6] rounded-full transition-all duration-300 group-hover:w-7 group-hover:bg-white ${isOffcanvasOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-[#F0EAD6] rounded-full transition-all duration-300 group-hover:w-7 group-hover:bg-white ${isOffcanvasOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-[#F0EAD6] rounded-full transition-all duration-300 group-hover:w-7 group-hover:bg-white ${isOffcanvasOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[1002] transition-all duration-500 lg:hidden ${
          isOffcanvasOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOffcanvasOpen(false)}
      />

      {/* Offcanvas Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[320px] sm:w-[400px] bg-gradient-to-br from-[#4a0d0d] via-[#3a0a0a] to-[#2a0606] z-[1003] shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          isOffcanvasOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Offcanvas Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#c8bfa8]/30">
          <img src="/images/main2.png" className='w-32 object-cover' alt="" />
          <button 
            onClick={() => setIsOffcanvasOpen(false)}
            className="text-[#F0EAD6] hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-110"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Offcanvas Navigation Links */}
        <div className="flex flex-col p-6 gap-2">
          <a 
            href="#collections" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('collections'); }}
            className="group relative py-4 text-[1rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-all duration-300 hover:text-[#F0EAD6] hover:pl-6 border-b border-[#c8bfa8]/20 overflow-hidden"
          >
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-2">Collections</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-gradient-to-r from-[#c8bfa8]/20 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#process" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('process'); }}
            className="group relative py-4 text-[1rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-all duration-300 hover:text-[#F0EAD6] hover:pl-6 border-b border-[#c8bfa8]/20 overflow-hidden"
          >
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-2">Process</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-gradient-to-r from-[#c8bfa8]/20 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}
            className="group relative py-4 text-[1rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-all duration-300 hover:text-[#F0EAD6] hover:pl-6 border-b border-[#c8bfa8]/20 overflow-hidden"
          >
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-2">About</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-gradient-to-r from-[#c8bfa8]/20 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}
            className="group relative py-4 text-[1rem] font-normal tracking-[0.2em] uppercase text-[rgba(240,234,214,0.78)] no-underline transition-all duration-300 hover:text-[#F0EAD6] hover:pl-6 border-b border-[#c8bfa8]/20 overflow-hidden"
          >
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-2">Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-gradient-to-r from-[#c8bfa8]/20 to-transparent transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Mobile Order Button */}
          <button 
            className="group mt-8 px-6 py-3 font-['Cinzel'] text-[0.75rem] font-medium tracking-[0.25em] uppercase text-[#6B1212] bg-[#F0EAD6] border-none transition-all duration-300 hover:bg-[#e8dfc7] hover:scale-105 hover:shadow-xl w-full relative overflow-hidden"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            onClick={() => handleNavLinkClick('contact')}
          >
            <span className="relative z-10">Order Bespoke</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c8bfa8] to-[#e8dfc7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </div>

        {/* Social Links Optional */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="flex justify-center gap-6 pt-6 border-t border-[#c8bfa8]/20">
            <a href="#" className="text-[#F0EAD6]/60 hover:text-[#F0EAD6] transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="text-[#F0EAD6]/60 hover:text-[#F0EAD6] transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.315 11.165a3.165 3.165 0 100-6.33 3.165 3.165 0 000 6.33zm0-8.73a5.565 5.565 0 100 11.13 5.565 5.565 0 000-11.13zM18.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;