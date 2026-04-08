import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animateCursor = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => ring?.classList.add('hover');
    const handleMouseLeave = () => ring?.classList.remove('hover');

    document.querySelectorAll('a, button, .collection-card').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, .collection-card').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed z-[99999] pointer-events-none w-2 h-2 rounded-full bg-[#8B1A1A] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      />
      <div 
        ref={ringRef}
        className="fixed z-[99998] pointer-events-none w-9 h-9 rounded-full border border-[#8B1A1A] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-60 [&.hover]:scale-150 [&.hover]:opacity-20 [&.hover]:bg-[#8B1A1A]"
      />
    </>
  );
};

export default CustomCursor;