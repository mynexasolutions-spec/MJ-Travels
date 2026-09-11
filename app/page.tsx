"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];
const serviceTiles = [
  { label: <>Airport<br />Transfers</>, icon: "plane" },
  { label: <>Local<br />City Cabs</>, icon: "building" },
  { label: <>Outstation<br />Trips</>, icon: "mountain" },
  { label: <>One-Way<br />Drop</>, icon: "road" },
  { label: <>Round<br />Trip</>, icon: "round" },
  { label: <>Corporate<br />Travel</>, icon: "briefcase" },
  { label: <>Family<br />Trips</>, icon: "family" },
];

const trustFeatures = [
  { label: <>Safe &amp;<br />Reliable</>, icon: "shield" },
  { label: <>Transparent<br />Pricing</>, icon: "rupee" },
  { label: <>Experienced<br />Drivers</>, icon: "family" },
  { label: <>Clean &amp;<br />Hygienic Cars</>, icon: "car" },
  { label: <>On-Time<br />Guaranteed</>, icon: "clock" },
  { label: <>24×7<br />Customer Support</>, icon: "headset" },
];

const fleet = [
  { name: "Sedan", seats: "4 Seater", image: "/images/your-image-0.jpg", features: "AC • Comfortable • Ideal for City & Airport" },
  { name: "SUV", seats: "6/7 Seater", image: "/images/your-image-11.jpg", features: "Spacious • Family Friendly • Outstation Ready" },
  { name: "Premium Cars", seats: "Luxury Travel", image: "/images/your-image-12.jpg", features: "Luxury • Extra Comfort • For Special Occasions" },
  { name: "Tempo Traveller", seats: "9/12 Seater", image: "/images/your-image-13.jpg", features: "Group Travel • Comfortable • Best for Outstation" },
];

const popularRoutes = [
  { route: "Pune →|Mumbai Airport", image: "/images/your-image-3.jpg" },
  { route: "Pune →|Lonavala", image: "/images/your-image-4.jpg" },
  { route: "Pune →|Mahabaleshwar", image: "/images/your-image-6.jpg" },
  { route: "Pune →|Shirdi", image: "/images/your-image-7.jpg" },
  { route: "Pune →|Nashik", image: "/images/your-image-8.jpg" },
];

const customerReviews = [
  { name: "Rahul Sharma", image: "/images/your-image-16.jpg", quote: "Very professional service. On-time pickup and comfortable ride. Highly recommended" },
  { name: "Priya Deshmukh", image: "/images/your-image-17.jpg", quote: "Great experience for Pune to Mumbai Airport. Driver was polite and car was clean." },
  { name: "Amit Patil", image: "/images/your-image-18.jpg", quote: "Best cab service in Pune. Affordable and reliable. Will book again!" },
];

const customerStats = [
  { value: "1000+", label: "Happy Customers", icon: "family" },
  { value: "5000+", label: "Successful Trips", icon: "car" },
  { value: "4.9/5", label: "Customer Satisfaction", icon: "star" },
];

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 2.8 4.5 4.1c-.9.4-1.4 1.4-1.2 2.4 1.7 8.1 6.1 12.5 14.2 14.2 1 .2 2-.3 2.4-1.2l1.3-2.8-4.3-2.5-1.6 1.9c-3.1-1.4-5.9-4.2-7.3-7.3l1.9-1.6-2.6-4.4Z" /></svg>;
}

function MenuIcon({ open }: { open: boolean }) {
  return open
    ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
    : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></svg>;
}

function DriverIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3" /><path d="M5.5 20c.6-4 2.7-6 6.5-6s5.9 2 6.5 6M3.5 5.5 7 3.8M20.5 5.5 17 3.8" /></svg>;
}

function CarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5.2 10 1.6-4h10.4l1.6 4M4 10h16v7.2c0 .8-.7 1.5-1.5 1.5h-13c-.8 0-1.5-.7-1.5-1.5V10Zm2 8.7V21m12-2.3V21M4 13h16" /><circle cx="7" cy="15.5" r=".7" fill="currentColor" /><circle cx="17" cy="15.5" r=".7" fill="currentColor" /></svg>;
}

function BookingIcon({ type }: { type: "location" | "calendar" | "time" }) {
  const paths = {
    location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></>,
    time: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function ServiceGlyph({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    plane: <path d="m2.5 13.5 19-10.4-5.9 8.1 3.9 4.8-2.8 1.7-5.5-4.2-3.7 3.4.8 2.8-2.4 1.2-1.8-4.5-2.6-1.8Z" />,
    building: <><path d="M5 21V4h10v17M2.5 21h19M8 7h1M12 7h1M8 11h1M12 11h1M8 15h1M12 15h1M17 21V10h4v11M19 13h.1M19 17h.1" /></>,
    mountain: <path d="m3 20 6.2-10 3 4.7 2.4-3.5L21 20H3Zm6.1-10.1L11 7l1.2 1.9" />,
    road: <path d="M7 21 9.8 3h4.4L17 21M12 6v2M12 12v2M12 18v2" />,
    round: <><path d="M20 8V4l-2 2a8 8 0 0 0-13 3M4 16v4l2-2a8 8 0 0 0 13-3" /><path d="M4 9h3M17 15h3" /></>,
    briefcase: <><path d="M3 8h18v11H3zM8 8V5h8v3M3 13h18M10 13v2h4v-2" /></>,
    family: <><circle cx="12" cy="7" r="3" /><circle cx="6" cy="10" r="2" /><circle cx="18" cy="10" r="2" /><path d="M6.5 20v-3.4c0-2 1.9-3.6 4.1-3.6h2.8c2.2 0 4.1 1.6 4.1 3.6V20M2.7 19v-2c0-1.7 1.3-3 3.1-3M21.3 19v-2c0-1.7-1.3-3-3.1-3" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.6-2.9 8-7 10-4.1-2-7-5.4-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    rupee: <path d="M6 5h10M6 9h10M7 5c4 0 6 1.2 6 4 0 2.7-2.2 4-6 4l7 6" />,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 13h3v6H5.5A1.5 1.5 0 0 1 4 17.5V13Zm16 0h-3v6h1.5a1.5 1.5 0 0 0 1.5-1.5V13ZM17 19c0 1.2-1.8 2-5 2" /></>,
    car: <path d="m5.2 10 1.6-4h10.4l1.6 4M4 10h16v7.2c0 .8-.7 1.5-1.5 1.5h-13c-.8 0-1.5-.7-1.5-1.5V10Zm2 8.7V21m12-2.3V21M4 13h16" />,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello MJ Travels, I want to book a cab.",
      `From: ${booking.from || "Pune"}`,
      `To: ${booking.to || "Mumbai Airport"}`,
      `Date: ${booking.date || "Not selected"}`,
      `Time: ${booking.time || "Not selected"}`,
      "Please share the quote.",
    ].join("\n");

    window.location.href = `https://wa.me/918888184051?text=${encodeURIComponent(message)}`;
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main id="top">
      <header className={menuOpen ? "header menu-active" : "header"}>
        <a className="brand" href="#top" aria-label="MJ Travels home" onClick={handleLogoClick}>
          <span className="brand-mj">MJ</span><span>TRAVELS</span>
          <small>Our Service is Our Business...</small>
        </a>
        <nav id="main-navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <div className="drawer-heading">
            <div>
              <small>Safe rides • 24/7 service</small>
              <strong><span>MJ</span> TRAVELS</strong>
              <p>Pune&apos;s trusted cab partner</p>
            </div>
            <button className="drawer-close" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>&times;</button>
          </div>
          {navLinks.map((link) => <Link className={link.label === "Home" ? "active" : undefined} href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
          <Link className="drawer-book" href="/book" onClick={() => setMenuOpen(false)}>Book a Cab</Link>
        </nav>
        <button className={menuOpen ? "menu-backdrop menu-backdrop-open" : "menu-backdrop"} type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />
        <a className="top-call" href="tel:8888184051"><img className="call-icon" src="/icons/call.png" alt="" /><span>8888184051</span></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><MenuIcon open={menuOpen} /></button>
      </header>

      <section className="hero">
      <div className="backdrop" />
      <div className="dark-panel" />

      <section className="content" id="home">
        <p className="eyebrow">PUNE&apos;S MOST TRUSTED CAB SERVICE</p>
        <h1>Your Journey <span>Our Priority</span></h1>
        <p className="description">Pune to Mumbai Airport and beyond — Safe, Reliable<br className="desktop-break" /> and Comfortable Rides with MJ Travels.</p>

        <div className="benefits">
          <div><span className="icon-circle"><ClockIcon /></span><p>On-Time<br />Pickup</p></div>
          <div><span className="icon-circle"><DriverIcon /></span><p>Professional<br />Drivers</p></div>
          <div><span className="icon-circle"><CarIcon /></span><p>Clean &amp;<br />Comfortable Cars</p></div>
        </div>

        <div className="actions">
          <Link className="book-button" href="/book">Book Your Cab</Link>
          <a className="call-button" href="tel:8888184051"><PhoneIcon />Call 8888184051</a>
        </div>

          <div className="rating" aria-label="Google rating 5 out of 5">
          <div><img className="google-logo" src="/icons/google.png" alt="Google" /><div className="rating-score"><span className="stars">★★★★★</span><strong>5.0 (Most Trustable)</strong></div></div>
          <p>Hundreds of happy travellers</p>
        </div>
      </section>

      </section>

      <section className="airport-service" id="services">
        <div className="service-shell">
          <div className="service-tiles">
            {serviceTiles.map((tile) => (
              <Link href="/book" className="service-tile" key={tile.icon}>
                {tile.icon === "plane" ? <img className="airport-transfer-icon" src="/icons/airplane.png" alt="" /> : <ServiceGlyph name={tile.icon} />}
                <span>{tile.label}</span>
              </Link>
            ))}
          </div>

          <div className="airport-grid">
            <div className="airport-copy">
              <h2>Pune to<br />Mumbai Airport</h2>
              <p className="cab-service">Cab Service</p>
              <p className="airport-description">Hassle-free airport drops with comfortable cars,<br />professional drivers and reliable pickup timings.</p>
              <ul>
                <li>Affordable Pricing</li>
                <li>24×7 Service</li>
                <li>Flight Tracking</li>
                <li>Doorstep Pickup</li>
              </ul>
              <Link className="airport-book" href="/book">Book Airport Cab</Link>
              <p className="journey-note">Start<br />Your Journey<br />Stress Free</p>
            </div>
            <div className="airport-photo" role="img" aria-label="MJ Travels cab heading toward Mumbai Airport" />
          </div>

          <div className="why-row">
            <div className="why-copy"><h2>Why Choose<br />MJ Travels?</h2><p>More than just a ride — a better travel experience.</p></div>
            <div className="trust-features">
              {trustFeatures.map((feature) => <div className="trust-feature" key={feature.icon}><span><ServiceGlyph name={feature.icon} /></span><p>{feature.label}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="fleet-section" id="fleet">
        <div className="fleet-shell">
          <div className="fleet-heading">
            <div>
              <h2>Our Fleet</h2>
              <p>A car for every journey. Travel in comfort and style.</p>
            </div>
            <a className="fleet-view-all" href="#contact">View All Cars</a>
          </div>

          <div className="fleet-grid">
            {fleet.map((vehicle) => (
              <article className="fleet-card" key={vehicle.name}>
                <div className="fleet-image-wrap">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <h3>{vehicle.name}</h3>
                <p className="fleet-seats">({vehicle.seats})</p>
                <p className="fleet-features">{vehicle.features}</p>
                <Link className="fleet-book" href="/book">Book Now</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="routes-section" id="routes">
        <div className="routes-shell">
          <div className="routes-intro">
            <h2>Popular<br />Routes</h2>
            <p>Explore top destinations<br />with MJ Travels.</p>
          </div>

          <div className="routes-grid">
            {popularRoutes.map((route) => (
              <a className="route-card" href="#contact" key={route.route}>
                <div className="route-image-wrap">
                  <img src={route.image} alt={route.route} />
                  <h3>{route.route.split("|").map((line) => <span key={line}>{line}</span>)}</h3>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="reviews-shell">
          <div className="reviews-main">
            <div className="reviews-heading">
              <h2>What Our<br />Customers Say</h2>
              <div className="google-review-rating">
                <div><img className="google-logo" src="/icons/google.png" alt="Google" /><span className="stars">★★★★★</span><strong>5.0 Rating</strong></div>
                <p>Based on 200+ Google Reviews</p>
              </div>
            </div>

            <div className="review-grid">
              {customerReviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-author">
                    <img src={review.image} alt={review.name} />
                    <div><h3>{review.name}</h3><span className="review-stars">★★★★★</span></div>
                  </div>
                  <span className="quote-mark">&ldquo;</span>
                  <p>&ldquo;{review.quote}&rdquo;</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="customer-stats">
            {customerStats.map((stat) => (
              <div className="customer-stat" key={stat.label}>
                <span className="stat-icon"><ServiceGlyph name={stat.icon} /></span>
                <div><strong>{stat.value}</strong><p>{stat.label}</p></div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="book-section" id="contact">
        <div className="book-overlay" />
        <div className="book-shell">
          <h2>Book Your Cab Now</h2>
          <p>Get a quick quote and confirm your ride in minutes.</p>

          <form className="booking-form" onSubmit={handleBookingSubmit}>
            <label className="booking-field">
              <BookingIcon type="location" />
              <span>
                <small>From</small>
                <input
                  aria-label="Pickup location"
                  type="text"
                  placeholder="Pune"
                  value={booking.from}
                  onChange={(event) => setBooking({ ...booking, from: event.target.value })}
                />
              </span>
            </label>
            <label className="booking-field">
              <BookingIcon type="location" />
              <span>
                <small>To</small>
                <input
                  aria-label="Drop location"
                  type="text"
                  placeholder="Mumbai Airport"
                  value={booking.to}
                  onChange={(event) => setBooking({ ...booking, to: event.target.value })}
                />
              </span>
            </label>
            <label className="booking-field">
              <BookingIcon type="calendar" />
              <span>
                <small>Date</small>
                <input
                  aria-label="Travel date"
                  type="date"
                  placeholder="Select date"
                  value={booking.date}
                  onChange={(event) => setBooking({ ...booking, date: event.target.value })}
                />
              </span>
            </label>
            <label className="booking-field">
              <BookingIcon type="time" />
              <span>
                <small>Time</small>
                <input
                  aria-label="Travel time"
                  type="time"
                  placeholder="Select time"
                  value={booking.time}
                  onChange={(event) => setBooking({ ...booking, time: event.target.value })}
                />
              </span>
            </label>
            <button className="booking-submit" type="submit">Get Quote / Book Now</button>
          </form>
        </div>
        <p className="book-note">Different<br />Routes<br />Same Trust</p>
      </section>

      <section className="location-section" id="location">
        <div className="location-shell">
          <div className="location-info">
            <h2>Our Location</h2>
            <div className="address-row">
              <BookingIcon type="location" />
              <div><strong>MJ Travels</strong><p>Tilak Nagar, Kondhwa,<br />Pune, Maharashtra 411048</p></div>
            </div>
            <a className="directions-button" href="https://maps.app.goo.gl/KiFTY1Ay6cMxhtqPA" target="_blank" rel="noreferrer">Get Directions</a>
          </div>

          <div className="location-map">
            <iframe
              title="MJ Travels location map"
              src="https://www.google.com/maps?q=MJ%20Travels%20Tilak%20Nagar%20Kondhwa%20Pune%20Maharashtra%20411048&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="map-link" href="https://maps.app.goo.gl/KiFTY1Ay6cMxhtqPA" target="_blank" rel="noreferrer" aria-label="Open MJ Travels location in Google Maps" />
          </div>

          <div className="touch-info">
            <h2>Get In Touch</h2>
            <p>We&apos;re here to help you. Call, email or connect with us.</p>
            <div className="contact-lines">
              <a href="tel:8888184051"><img className="contact-icon" src="/icons/call.png" alt="" />8888184051</a>
              <a href="mailto:mjtravels8886@gmail.com"><span className="contact-symbol">@</span>mjtravels8886@gmail.com</a>
              <a href="https://www.instagram.com/mjtravels.1?stkn=MWd1M3NwdGEyN3lwZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><img className="contact-icon" src="/icons/instagram.png" alt="" />@mjtravels.1</a>
            </div>
            <div className="contact-actions">
              <a className="call-now" href="tel:8888184051"><img className="action-icon" src="/icons/call.png" alt="" />Call Now</a>
              <a className="whatsapp-button" href="https://wa.me/918888184051" target="_blank" rel="noreferrer"><img className="action-icon" src="/icons/whatsapp.png" alt="" />WhatsApp</a>
              <a className="instagram-button" href="https://www.instagram.com/mjtravels.1?stkn=MWd1M3NwdGEyN3lwZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><img className="action-icon" src="/icons/instagram.png" alt="" />Follow Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#home" aria-label="MJ Travels home">
              <span className="brand-mj">MJ</span><span>TRAVELS</span>
              <small>Our Service is Our Business...</small>
            </a>
            <p>Safe Rides. Happy Journeys. Always With You.</p>
          </div>

          <div className="footer-column">
            <h2>Quick Links</h2>
            <a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Gallery</a><a href="/#routes">Popular Routes</a><a href="/about">About Us</a><a href="/reviews">Reviews</a><a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <h2>Our Services</h2>
            <a href="/services#airport">Airport Transfers</a><a href="/services#local">Local Cabs</a><a href="/services#outstation">Outstation Trips</a><a href="/services#outstation">One Way Drop</a><a href="/services#outstation">Round Trip</a><a href="/services#corporate">Corporate Travel</a><a href="/services#corporate">Family Trips</a>
          </div>

          <div className="footer-column footer-social">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a className="footer-call-link" href="tel:8888184051" aria-label="Call MJ Travels"><img src="/icons/phone-call.png" alt="" /></a>
              <a href="https://wa.me/918888184051" target="_blank" rel="noreferrer" aria-label="WhatsApp MJ Travels"><img src="/icons/whatsapp.png" alt="" /></a>
              <a href="https://www.instagram.com/mjtravels.1?stkn=MWd1M3NwdGEyN3lwZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="/icons/instagram.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 MJ Travels. All Rights Reserved.</p>
          <p>Designed with <span aria-label="love">♥</span> for Your Journeys</p>
        </div>
      </footer>
    </main>
  );
}
