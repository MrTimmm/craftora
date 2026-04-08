import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We start with a conversation. Tell us about your occasion, your style, and what matters most to you.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our artisans sketch and prototype your piece, sharing concepts until you\'re completely in love with the direction.'
    },
    {
      number: '03',
      title: 'Craft',
      description: 'We hand-craft your piece with the finest natural materials, with care and precision at every stage.'
    },
    {
      number: '04',
      title: 'Delivered',
      description: 'Your piece arrives beautifully packaged, ready to be treasured for a lifetime and passed through generations.'
    }
  ];

  return (
    <section className="py-32 px-10 bg-[#e8dfc7] overflow-hidden" id="process">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5 reveal">
            <span className="w-10 h-px bg-[#8B1A1A] opacity-50"></span>
            <span className="text-[0.65rem] tracking-[0.45em] uppercase text-[#8B1A1A]">How It Works</span>
            <span className="w-10 h-px bg-[#8B1A1A] opacity-50"></span>
          </div>
          <h2 className="font-['Cinzel'] text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-[#6B1212] tracking-[0.02em] text-center reveal reveal-delay-1">
            From concept<br/><em className="font-['Cormorant'] italic font-light text-[#8B1A1A]">to creation</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-0 relative before:content-[''] before:absolute before:top-6 before:left-[12%] before:right-[12%] before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#8B1A1A] before:to-transparent before:opacity-30">
          {steps.map((step, index) => (
            <div key={index} className={`px-8 text-center relative reveal reveal-delay-${index + 1}`}>
              <div className="w-12.5 h-12.5 rounded-full bg-[#6B1212] flex items-center justify-center font-['Cinzel'] text-[0.8rem] text-[#F0EAD6] mx-auto mb-8 relative z-10 border-2 border-[#e8dfc7] before:content-[''] before:absolute before:-inset-1.5 before:rounded-full before:border before:border-[rgba(139,26,26,0.3)]">
                {step.number}
              </div>
              <div className="font-['Cinzel'] text-[0.9rem] font-medium tracking-[0.12em] uppercase text-[#6B1212] mb-3">{step.title}</div>
              <div className="text-[0.88rem] leading-7 text-[#5a3535]">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;