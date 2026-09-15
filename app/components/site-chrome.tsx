"use client";

import { type CSSProperties, useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return open
    ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
    : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function SiteHeader({ active }: { active: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 24);
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const headerClassName = ["header", "page-header", menuOpen && "menu-active", isScrolled && "header-scrolled"]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName} style={{ "--scroll-progress": `${scrollProgress}%` } as CSSProperties}>
      <Link className="brand" href="/" aria-label="MJ Travels home" onClick={() => setMenuOpen(false)}>
        <img src="/logo.png" alt="MJ Travels" className="logo-img" />
      </Link>
      <nav id="main-navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        <div className="drawer-heading">
          <img src="/logo.png" alt="MJ Travels" />
          <div>
            <small>Safe rides • 24/7 service</small>
            <strong><span>MJ</span> TRAVELS</strong>
            <p>Pune&apos;s trusted cab partner</p>
          </div>
          <button className="drawer-close" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>&times;</button>
        </div>
        {navigation.map((link) => (
          <Link className={link.label === active ? "active" : undefined} href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="drawer-book" href="/book" onClick={() => setMenuOpen(false)}>Book a Cab</Link>
      </nav>
      <Link className="header-book" href="/book">Book a Cab</Link>
      <button className={menuOpen ? "menu-backdrop menu-backdrop-open" : "menu-backdrop"} type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />
      <a className="top-call" href="tel:8888184051"><img className="call-icon" src="/icons/call.png" alt="" /><span>8888184051</span></a>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      ><MenuIcon open={menuOpen} /></button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="/" aria-label="MJ Travels home">
            <img src="/logo.png" alt="MJ Travels" className="logo-img" />
          </a>
          <p>Safe Rides. Happy Journeys. Always With You.</p>
        </div>
        <div className="footer-column">
          <h2>Quick Links</h2>
          {navigation.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
        </div>
        <div className="footer-column">
          <h2>Our Services</h2>
          <a href="/services#airport">Airport Transfers</a><a href="/services#local">Local Cabs</a><a href="/services#outstation">Outstation Trips</a><a href="/services#corporate">Corporate Travel</a>
        </div>
        <div className="footer-column footer-social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a className="footer-call-link" href="tel:8888184051" aria-label="Call MJ Travels"><img src="/icons/phone-call.png" alt="" /></a>
            <a href="https://wa.me/918888184051" target="_blank" rel="noreferrer" aria-label="WhatsApp MJ Travels"><img src="/icons/whatsapp.png" alt="" /></a>
            <a href="https://www.instagram.com/mjtravels.1" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="/icons/instagram.png" alt="" /></a>
            <a className="footer-mobile-logo" href="/" aria-label="MJ Travels home"><img src="/logo.png" alt="MJ Travels" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><p>© 2026 MJ Travels. All Rights Reserved.</p><p>Designed with <span aria-label="love">♥</span> for your journeys</p></div>
    </footer>
  );
}
