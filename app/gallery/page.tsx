"use client";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import Link from "next/link";

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

export default function GalleryPage() {
  return (
    <main className="gallery-page" id="top">
      <SiteHeader active="Gallery" />

      <section className="gallery-hero">
        <p className="gallery-kicker">MJ Travels Moments</p>
        <h1>Our Travel Gallery</h1>
        <p>
          A glimpse of comfortable rides, trusted journeys and happy travel moments with MJ Travels.
        </p>
        <div className="gallery-hero-actions">
          <Link href="/book">Book Your Ride</Link>
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
      <SiteFooter />
    </main>
  );
}
