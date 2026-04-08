import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "The centrepieces Craftora created for our wedding were absolutely breathtaking. Every guest asked where they came from. They're now displayed in our home as permanent art pieces.",
      author: "Sofia & Arjun",
      role: "Wedding, Kathmandu — 2024",
      initials: "SA",
      delay: ""
    },
    {
      id: 2,
      rating: 5,
      quote: "I commissioned a bespoke anniversary gift and the process was pure joy. The team listened so carefully, and what arrived exceeded every expectation. Truly an heirloom.",
      author: "Marco Rossini",
      role: "Bespoke Commission — 2024",
      initials: "MR",
      delay: "reveal-delay-1"
    },
    {
      id: 3,
      rating: 5,
      quote: "Ordering from Craftora is an experience in itself. The packaging, the handwritten note, the craftsmanship — it all communicates so much love. This is what gifting should feel like.",
      author: "Priya Lakhani",
      role: "Gift Atelier — 2025",
      initials: "PL",
      delay: "reveal-delay-2"
    }
  ];

  return (
    <section className="py-32 px-10 bg-[#4a0d0d] relative overflow-hidden" id="testimonials">
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-5 reveal">
          <span className="w-10 h-px bg-[#c8bfa8] opacity-50"></span>
          <span className="text-[0.65rem] tracking-[0.45em] uppercase text-[#c8bfa8]">Client Stories</span>
        </div>
        <h2 className="font-['Cinzel'] text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-[#F0EAD6] tracking-[0.02em] mb-16 reveal reveal-delay-1">
          Words of<br/><em className="font-['Cormorant'] italic font-light text-[#c8bfa8]">love & gratitude</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`p-10 border border-[rgba(240,234,214,0.1)] bg-[rgba(240,234,214,0.03)] transition-all duration-400 hover:bg-[rgba(240,234,214,0.06)] hover:border-[rgba(240,234,214,0.2)] reveal ${testimonial.delay}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#e8dfc7] text-[0.7rem]">★</span>
                ))}
              </div>
              <div className="font-['Cormorant'] text-6xl font-light text-[#9e1f1f] leading-[0.6] mb-5">"</div>
              <p className="text-[1rem] leading-[1.9] font-light italic text-[rgba(240,234,214,0.75)] mb-7">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10.5 h-10.5 rounded-full bg-[#9e1f1f] flex items-center justify-center font-['Cinzel'] text-[0.8rem] text-[#F0EAD6] shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-['Cinzel'] text-[0.72rem] tracking-[0.15em] uppercase text-[#F0EAD6]">{testimonial.author}</div>
                  <div className="text-[0.72rem] text-[#c8bfa8] mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;