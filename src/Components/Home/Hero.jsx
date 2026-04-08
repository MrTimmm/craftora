export default function Hero() {
  return (
    <section className="min-h-screen bg-crimson-deep text-cream flex items-center relative">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 pt-40 pb-20">

        {/* Left Content */}
        <div>
          <p className="uppercase tracking-[0.4em] text-cream-muted text-xs mb-6">
            Artisan Craft Studio · Est. 2018
          </p>

          <h1 className="font-cinzel text-5xl lg:text-7xl leading-tight">
            Crafted <br />
            <span className="font-cormorant italic text-cream-muted">
              with intention,
            </span>
            <br />
            given with love
          </h1>

          <div className="w-16 h-[1px] bg-cream-muted my-8" />

          <p className="max-w-md text-cream/70 leading-relaxed">
            We create heirloom-quality handcrafted pieces for life's most
            meaningful moments — weddings, anniversaries, and every celebration
            in between.
          </p>

          <div className="flex gap-6 mt-10">
            <a
              href="#collections"
              className="bg-cream text-crimson-deep px-8 py-3 font-cinzel uppercase tracking-[0.2em] text-xs hover:bg-cream-warm transition"
            >
              Explore Collections
            </a>

            <a
              href="#process"
              className="uppercase tracking-[0.2em] text-sm border-b border-cream/40 hover:text-cream"
            >
              Our Process
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-[380px] h-[480px] border border-cream/30 flex items-center justify-center">
            <span className="font-cinzel text-9xl text-cream/10">C</span>
          </div>
        </div>
      </div>
    </section>
  );
}