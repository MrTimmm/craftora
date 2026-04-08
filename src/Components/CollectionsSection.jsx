import React from 'react';

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      name: 'Ceremony Collection',
      category: '01 / Ceremony',
      description: 'Handcrafted centrepieces and decorations for your ceremony space. Timeless, organic, unforgettable.',
      badge: 'Bestseller',
      gradient: 'linear-gradient(135deg,#4a0d0d,#6b1212)',
      delay: ''
    },
    {
      id: 2,
      name: 'Gift Atelier',
      category: '02 / Gifting',
      description: 'Thoughtfully crafted gifts for milestones, anniversaries, and every moment worth commemorating.',
      badge: null,
      gradient: 'linear-gradient(135deg,#5a1010,#8b1a1a)',
      delay: 'reveal-delay-1 mt-0 lg:mt-12'
    },
    {
      id: 3,
      name: 'Bespoke Studio',
      category: '03 / Bespoke',
      description: 'Fully custom commissions. Share your vision and we\'ll craft something utterly unique, just for you.',
      badge: 'New',
      gradient: 'linear-gradient(135deg,#3a0a0a,#6b1212)',
      delay: 'reveal-delay-2'
    }
  ];

  return (
    <section className="py-32 px-10 bg-[#6B1212]" id="collections">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5 reveal">
              <span className="w-10 h-px bg-[#c8bfa8] opacity-50"></span>
              <span className="text-[0.65rem] tracking-[0.45em] uppercase text-[#c8bfa8]">Our Work</span>
            </div>
            <h2 className="font-['Cinzel'] text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-[#F0EAD6] tracking-[0.02em] reveal reveal-delay-1">
              Curated<br/><em className="font-['Cormorant'] italic font-light text-[#c8bfa8]">Collections</em>
            </h2>
          </div>
          <p className="text-[0.9rem] text-[rgba(240,234,214,0.5)] max-w-75 leading-[1.8] reveal reveal-delay-2">
            Each collection tells a story. Browse our signature lines or enquire about a fully bespoke commission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className={`relative overflow-hidden bg-[#4a0d0d] reveal group ${collection.delay}`}
            >
              <div className="w-full pt-[130%] relative overflow-hidden transition-transform duration-700 ease-in-out group-hover:scale-105">
                <div className="absolute inset-0" style={{background: collection.gradient}}>
                  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[70%] mx-auto mt-16 opacity-30">
                    {collection.id === 1 && (
                      <>
                        <ellipse cx="100" cy="120" rx="70" ry="90" stroke="#F0EAD6" strokeWidth="1.5" fill="none"/>
                        <ellipse cx="100" cy="120" rx="50" ry="68" stroke="#F0EAD6" strokeWidth="1" fill="none" opacity="0.6"/>
                        <path d="M100 30 C100 75, 100 165, 100 210" stroke="#F0EAD6" strokeWidth="1" opacity="0.5"/>
                        <path d="M30 120 C65 120, 135 120, 170 120" stroke="#F0EAD6" strokeWidth="1" opacity="0.5"/>
                        <path d="M48 60 C70 90, 130 90, 152 60" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.35" fill="none"/>
                        <path d="M48 180 C70 150, 130 150, 152 180" stroke="#F0EAD6" strokeWidth="0.8" opacity="0.35" fill="none"/>
                        <circle cx="100" cy="120" r="12" stroke="#F0EAD6" strokeWidth="1" fill="none" opacity="0.5"/>
                      </>
                    )}
                    {collection.id === 2 && (
                      <>
                        <path d="M100 20 C60 50, 30 100, 35 155 C40 205, 75 235, 100 235 C125 235, 160 205, 165 155 C170 100, 140 50, 100 20Z" stroke="#F0EAD6" strokeWidth="1.5" fill="none"/>
                        <path d="M100 20 C115 70, 125 120, 120 165 C115 205, 105 225, 100 235" stroke="#F0EAD6" strokeWidth="1" fill="none" opacity="0.5"/>
                        <path d="M35 155 C62 145, 88 155, 100 165 C112 175, 140 168, 165 155" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.5"/>
                        <path d="M42 100 C65 90, 88 95, 100 85 C112 75, 138 80, 158 100" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.4"/>
                        <circle cx="100" cy="130" r="15" stroke="#F0EAD6" strokeWidth="1" fill="none" opacity="0.4"/>
                      </>
                    )}
                    {collection.id === 3 && (
                      <>
                        <rect x="25" y="30" width="150" height="185" rx="4" stroke="#F0EAD6" strokeWidth="1.5" fill="none"/>
                        <rect x="40" y="45" width="120" height="155" rx="2" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.5"/>
                        <path d="M25 90 C75 75, 125 105, 175 90" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.4"/>
                        <path d="M25 145 C75 130, 125 160, 175 145" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.4"/>
                        <path d="M100 30 L100 215" stroke="#F0EAD6" strokeWidth="0.6" opacity="0.3"/>
                        <circle cx="100" cy="122" r="20" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.4"/>
                        <circle cx="100" cy="122" r="8" stroke="#F0EAD6" strokeWidth="1" fill="none" opacity="0.5"/>
                      </>
                    )}
                  </svg>
                </div>
              </div>
              {collection.badge && (
                <span className="absolute top-4 right-4 px-3 py-[0.3rem] font-['Cinzel'] text-[0.55rem] tracking-[0.25em] uppercase text-[#6B1212] bg-[#F0EAD6]">
                  {collection.badge}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(74,13,13,0.95)] to-transparent p-6 pt-8 translate-y-[30%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                <div className="font-['Cinzel'] text-[0.6rem] tracking-[0.4em] text-[#c8bfa8] mb-1">{collection.category}</div>
                <div className="font-['Cinzel'] text-[1.2rem] font-medium text-[#F0EAD6] mb-2">{collection.name}</div>
                <div className="text-[0.82rem] text-[rgba(240,234,214,0.6)] leading-7 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20">{collection.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;