"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function SiteHeader({ active }: { active: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header page-header">
      <a className="brand" href="/" aria-label="MJ Travels home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mj">MJ</span><span>TRAVELS</span>
        <small>Our Service is Our Business...</small>
      </a>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        {navigation.map((link) => (
          <a className={link.label === active ? "active" : undefined} href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="top-call" href="tel:8888184051"><img className="call-icon" src="/icons/call.png" alt="" /><span>8888184051</span></a>
      <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><MenuIcon /></button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="/" aria-label="MJ Travels home">
            <span className="brand-mj">MJ</span><span>TRAVELS</span>
            <small>Our Service is Our Business...</small>
          </a>
          <p>Safe rides. Happy journeys. Always with you.</p>
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
          </div>
        </div>
      </div>
      <div className="footer-bottom"><p>© 2026 MJ Travels. All Rights Reserved.</p><p>Designed with <span aria-label="love">♥</span> for your journeys</p></div>
    </footer>
  );
}
