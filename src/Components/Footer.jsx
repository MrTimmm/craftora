import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4a0d0d] px-10 pt-20 pb-8 border-t border-[rgba(240,234,214,0.08)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-[rgba(240,234,214,0.08)]">
          <div>
           <img src="/images/main2.png" className='w-40' alt="" />
            <p className="text-[0.88rem] leading-[1.9] text-[rgba(240,234,214,0.45)] max-w-65 mt-4">
              A boutique artisan studio creating handcrafted pieces for life's most meaningful moments. Based in Kathmandu, shipping worldwide.
            </p>
          </div>
          
          <div>
            <div className="font-['Cinzel'] text-[0.7rem] tracking-[0.25em] uppercase text-[#F0EAD6] mb-6">Navigate</div>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#home" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Home</a></li>
              <li><a href="#collections" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Collections</a></li>
              <li><a href="#process" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Our Process</a></li>
              <li><a href="#about" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">About</a></li>
              <li><a href="#contact" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <div className="font-['Cinzel'] text-[0.7rem] tracking-[0.25em] uppercase text-[#F0EAD6] mb-6">Studio</div>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Bespoke Orders</a></li>
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Gift Wrapping</a></li>
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Workshops</a></li>
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Stockists</a></li>
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Press</a></li>
            </ul>
          </div>
          
          <div>
            <div className="font-['Cinzel'] text-[0.7rem] tracking-[0.25em] uppercase text-[#F0EAD6] mb-6">Contact</div>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="mailto:hello@craftoraatelier.com" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">hello@craftoraatelier.com</a></li>
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">+977 98 0000 0000</a></li>
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Kathmandu, Nepal</a></li>
              <li className="mt-4"><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Instagram</a></li>
              <li><a href="#" className="text-[0.85rem] text-[rgba(240,234,214,0.45)] no-underline transition-colors duration-300 hover:text-[#F0EAD6] tracking-[0.05em]">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center pt-8 gap-4">
          <span className="text-[0.72rem] text-[rgba(240,234,214,0.3)] tracking-[0.08em]">© 2025 Craftora Atelier. All rights reserved. Crafted with love.</span>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/craftora_atelier_/" target='_blank' className="w-9 h-9 flex items-center justify-center border border-[rgba(240,234,214,0.15)] text-[0.7rem] text-[rgba(240,234,214,0.4)] transition-all duration-300 hover:border-[rgba(240,234,214,0.5)] hover:text-[#F0EAD6] no-underline font-['Cinzel'] tracking-[0.05em]">In</a>
           
            <a href="https://www.facebook.com/craftoraatelier" target='_blank' className="w-9 h-9 flex items-center justify-center border border-[rgba(240,234,214,0.15)] text-[0.7rem] text-[rgba(240,234,214,0.4)] transition-all duration-300 hover:border-[rgba(240,234,214,0.5)] hover:text-[#F0EAD6] no-underline font-['Cinzel'] tracking-[0.05em]">Fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;