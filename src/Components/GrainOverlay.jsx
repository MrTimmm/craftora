import React from 'react';

const GrainOverlay = () => {
  return (
    <div 
      className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')] bg-[length:200px] animate-grain-shift"
      aria-hidden="true"
    />
  );
};

export default GrainOverlay;