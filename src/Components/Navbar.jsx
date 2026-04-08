import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// ─── SVG Logo Mark (matches the organic leaf/wood grain style) ───────────────
const LogoMark = () => (
  <img src="/images/logo2.png" alt="" />
);

// ─── Decorative divider dot ──────────────────────────────────────────────────
const Dot = () => (
  <span style={{
    display: "inline-block",
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: "currentColor",
    opacity: 0.4,
    margin: "0 6px",
    verticalAlign: "middle",
  }} />
);

const NAV_LINKS = [
  { label: "Collections", href: "#" },
  { label: "Workshops", href: "#" },
  { label: "Bespoke", href: "#" },
  { label: "About", href: "#" },
];

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const navRef = useRef(null);
  const lastScroll = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 60);

      if (currentScroll > lastScroll.current && currentScroll > 80) {
        gsap.to(navRef.current, { y: -120, duration: 0.6, ease: "power3.out" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.6, ease: "power3.out" });
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, { opacity: 0, y: -10, duration: 0.25 });
      }
    }
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        :root {
          --crimson: #8B1A1A;
          --crimson-deep: #6B1212;
          --crimson-light: #a82020;
          --cream: #F0EAD6;
          --cream-dark: #e4dcc4;
          --cream-muted: #c8bfa8;
          --ink: #2a1a1a;
        }

        .craftora-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          font-family: 'Cormorant Garamond', serif;
          transition: background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
          border-bottom: 1px solid transparent;
        }

        .craftora-nav.scrolled {
          background: rgba(139, 26, 26, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 40px rgba(107, 18, 18, 0.35);
          border-bottom-color: rgba(240, 234, 214, 0.12);
        }

        .craftora-nav:not(.scrolled) {
          background: linear-gradient(to bottom, rgba(107, 18, 18, 0.9) 0%, rgba(107, 18, 18, 0) 100%);
        }

        /* Top thin ornament bar */
        .craftora-nav::before {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            var(--cream-muted) 20%,
            var(--cream) 50%,
            var(--cream-muted) 80%,
            transparent 100%
          );
          opacity: 0.5;
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 2rem;
        }

        /* ── Logo ─────────────────────────────── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--cream);
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo-icon {
          color: var(--cream);
          opacity: 0.88;
          transition: opacity 0.3s;
        }

        .nav-logo:hover .nav-logo-icon { opacity: 1; }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .nav-logo-name {
          font-family: 'Cinzel', serif;
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--cream);
          text-transform: uppercase;
        }

        .nav-logo-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.6rem;
          letter-spacing: 0.32em;
          color: var(--cream-muted);
          text-transform: uppercase;
          margin-top: 3px;
          font-style: italic;
        }

        /* ── Ornament divider ─────────────────── */
        .nav-divider {
          width: 1px;
          height: 28px;
          background: linear-gradient(to bottom, transparent, var(--cream-muted), transparent);
          opacity: 0.4;
          flex-shrink: 0;
        }

        /* ── Nav Links ────────────────────────── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          position: relative;
          display: inline-block;
          padding: 0.4rem 0.9rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.88rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          color: rgba(240, 234, 214, 0.8);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 1.8rem);
          height: 1px;
          background: var(--cream);
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0.7;
        }

        .nav-links a:hover {
          color: var(--cream);
        }

        .nav-links a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* ── CTA Button ───────────────────────── */
        .nav-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.55rem 1.5rem;
          font-family: 'Cinzel', serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          color: var(--crimson-deep);
          text-transform: uppercase;
          background: var(--cream);
          border: none;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--cream-dark);
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-cta:hover::before { opacity: 1; }
        .nav-cta:hover { transform: translateY(-1px); }
        .nav-cta:active { transform: translateY(0); }

        .nav-cta span { position: relative; z-index: 1; }

        /* ── Hamburger ────────────────────────── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          padding: 6px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--cream);
        }

        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: currentColor;
          transition: transform 0.35s ease, opacity 0.35s ease;
          transform-origin: center;
        }

        .nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile Menu ──────────────────────── */
        .nav-mobile {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(107, 18, 18, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(240, 234, 214, 0.12);
          border-bottom: 1px solid rgba(240, 234, 214, 0.12);
          padding: 1.5rem 2rem 2rem;
          display: none;
        }

        .nav-mobile.visible { display: block; }

        .nav-mobile-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .nav-mobile-links li {
          border-bottom: 1px solid rgba(240, 234, 214, 0.1);
        }

        .nav-mobile-links a {
          display: block;
          padding: 1rem 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          letter-spacing: 0.2em;
          color: rgba(240, 234, 214, 0.85);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.25s, padding-left 0.25s;
        }

        .nav-mobile-links a:hover {
          color: var(--cream);
          padding-left: 8px;
        }

        .nav-mobile-cta {
          margin-top: 1.5rem;
          width: 100%;
          padding: 0.85rem;
          font-family: 'Cinzel', serif;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--crimson-deep);
          background: var(--cream);
          border: none;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: background 0.3s;
        }

        .nav-mobile-cta:hover { background: var(--cream-dark); }

        .nav-mobile-tagline {
          margin-top: 1.25rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: rgba(200, 191, 168, 0.5);
          text-transform: uppercase;
          font-style: italic;
          text-align: center;
        }

        /* ── Responsive ───────────────────────── */
        @media (max-width: 900px) {
          .nav-links, .nav-divider, .nav-cta {
            display: none;
          }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav
        ref={navRef}
        className={`craftora-nav${isScrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo" aria-label="Craftora Atelier - Home">
            <img src="/images/logo2.png" className="w-36" alt="" />
          </a>

          {/* Divider */}
          <div className="nav-divider" aria-hidden="true" />

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.label)}
                  onMouseLeave={() => setActiveLink(null)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="nav-cta" aria-label="Request a bespoke order">
            <span>Order Now</span>
          </button>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`nav-mobile${menuOpen ? " visible" : ""}`}
          role="menu"
        >
          <ul className="nav-mobile-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label} role="none">
                <a href={link.href} role="menuitem" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>
            Order Now
          </button>
          <p className="nav-mobile-tagline">With love for love</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;