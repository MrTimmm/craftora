import React from 'react';

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      name: 'Ceremony Collection',
      category: '01 / Ceremony',
      description: 'Handcrafted centrepieces and decorations for your ceremony space. Timeless, organic, unforgettable.',
      badge: 'Bestseller',
      image: '/images/flower6.jpeg',
      gradient: 'linear-gradient(135deg,#4a0d0d,#6b1212)',
      delay: ''
    },
    {
      id: 2,
      name: 'Gift Atelier',
      category: '02 / Gifting',
      description: 'Thoughtfully crafted gifts for milestones, anniversaries, and every moment worth commemorating.',
      badge: null,
      image: '/images/tulip.jpg',
      gradient: 'linear-gradient(135deg,#5a1010,#8b1a1a)',
      delay: ''
    },
    {
      id: 3,
      name: 'Bespoke Studio',
      category: '03 / Bespoke',
      description: 'Fully custom commissions. Share your vision and we\'ll craft something utterly unique, just for you.',
      badge: 'New',
      image: '/images/flower2.jpeg',
      gradient: 'linear-gradient(135deg,#3a0a0a,#6b1212)',
      delay: ''
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
              className={`relative overflow-hidden bg-[#4a0d0d] reveal group ${collection.delay} cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/30`}
            >
              <div className="w-full pt-[130%] relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient overlay that changes on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              </div>
              
              {collection.badge && (
                <span className="absolute top-4 right-4 px-3 py-[0.3rem] font-['Cinzel'] text-[0.55rem] tracking-[0.25em] uppercase text-[#6B1212] bg-[#F0EAD6] z-20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  {collection.badge}
                </span>
              )}
              
              {/* Hover overlay panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(74,13,13,0.98)] via-[rgba(74,13,13,0.5)] to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 z-10"></div>
              
              {/* Content that slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-all duration-500 ease-out group-hover:translate-y-0 z-20">
                <div className="transform transition-all duration-500 delay-100">
                  <div className="font-['Cinzel'] text-[0.6rem] tracking-[0.4em] text-[#c8bfa8] mb-1 opacity-80 group-hover:opacity-100">
                    {collection.category}
                  </div>
                  <div className="font-['Cinzel'] text-[1.2rem] font-medium text-[#F0EAD6] mb-3">
                    {collection.name}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[0.82rem] text-[rgba(240,234,214,0.7)] leading-relaxed max-h-0 opacity-0 transition-all duration-500 delay-150 group-hover:max-h-32 group-hover:opacity-100">
                      {collection.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .reveal {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .reveal-delay-1 {
          animation-delay: 0.2s;
        }
        
        .reveal-delay-2 {
          animation-delay: 0.4s;
        }
        
        /* Smooth hover transition for all elements */
        .group:hover .group-hover\\:scale-110 {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Optional: Add a subtle border glow on hover */
        .group:hover {
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default CollectionsSection;