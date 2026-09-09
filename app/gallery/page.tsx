"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Routes", href: "/#routes" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const galleryImages = [
  "WhatsApp Image 2026-09-09 a2t 12.23.45 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 12.23.144 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 12.23.412 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 12.23.42 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 12.23.4311 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 12.23.45 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 121.23.43 PM.jpeg",
  "WhatsApp Image 2026-09-09 at 122.23.44 PM.jpeg",
];

function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export default function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="gallery-page" id="top">
      <header className="header gallery-header">
        <a className="brand" href="/" aria-label="MJ Travels home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mj">MJ</span><span>TRAVELS</span>
          <small>Our Service is Our Business...</small>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              className={link.label === "Gallery" ? "active" : undefined}
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="top-call" href="tel:8888184051">
          <img className="call-icon" src="/icons/call.png" alt="" />
          <span>8888184051</span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </button>
      </header>

      <section className="gallery-hero">
        <p className="gallery-kicker">MJ Travels Moments</p>
        <h1>Our Travel Gallery</h1>
        <p>
          A glimpse of comfortable rides, trusted journeys and happy travel moments with MJ Travels.
        </p>
        <div className="gallery-hero-actions">
          <a href="https://wa.me/918888184051" target="_blank" rel="noreferrer">Book Your Ride</a>
          <a href="/">Back to Home</a>
        </div>
      </section>

      <section className="gallery-section" aria-label="MJ Travels photo gallery">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <article className="gallery-card" key={image}>
              <img src={`/gallery/${image}`} alt={`MJ Travels gallery photo ${index + 1}`} />
              <div className="gallery-card-caption">
                <span>MJ Travels</span>
                <small>Safe rides. Happy journeys.</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
