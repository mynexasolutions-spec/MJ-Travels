"use client";

import { type FormEvent, useState } from "react";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export default function ContactPage() {
  const [details, setDetails] = useState({ from: "", to: "", date: "", time: "" });
  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = ["Hello MJ Travels, I would like to book a cab.", `From: ${details.from || "Not selected"}`, `To: ${details.to || "Not selected"}`, `Date: ${details.date || "Not selected"}`, `Time: ${details.time || "Not selected"}`, "Please share a quote."].join("\n");
    window.location.href = `https://wa.me/918888184051?text=${encodeURIComponent(message)}`;
  };

  return <main className="inner-page contact-page">
    <SiteHeader active="Contact" />
    <section className="inner-hero contact-hero">
      <p className="page-kicker">MJ Travels support</p>
      <h1>Let&apos;s plan your <span>next comfortable ride.</span></h1>
      <p>Request a quick quote, call our team, or message us on WhatsApp. We&apos;re available to make every journey simple.</p>
      <div className="contact-hero-actions"><a href="tel:8888184051">Call 8888184051</a><a href="https://wa.me/918888184051" target="_blank" rel="noreferrer">WhatsApp us</a></div>
    </section>
    <section className="contact-page-content">
      <div className="contact-form-card"><p className="page-kicker">Request a ride</p><h2>Tell us about your trip.</h2><p className="contact-card-intro">Send your travel details and we&apos;ll share a quick quote on WhatsApp.</p><form onSubmit={submitBooking}><label>Pickup location<input required value={details.from} onChange={(event) => setDetails({ ...details, from: event.target.value })} placeholder="e.g. Pune" /></label><label>Drop location<input required value={details.to} onChange={(event) => setDetails({ ...details, to: event.target.value })} placeholder="e.g. Mumbai Airport" /></label><label>Travel date<input type="date" value={details.date} onChange={(event) => setDetails({ ...details, date: event.target.value })} /></label><label>Pickup time<input type="time" value={details.time} onChange={(event) => setDetails({ ...details, time: event.target.value })} /></label><button className="page-primary" type="submit">Get quote on WhatsApp</button></form></div>
      <aside className="contact-details-card"><p className="page-kicker">Speak with us</p><h2>Here when you need us.</h2><p className="contact-card-intro">Choose the most convenient way to get in touch with MJ Travels.</p><div className="contact-methods"><a href="tel:8888184051"><img src="/icons/call.png" alt="" /><span><small>Call us</small>8888184051</span></a><a href="mailto:mjtravels8886@gmail.com"><img src="/icons/gmail.png" alt="" /><span><small>Email us</small>mjtravels8886@gmail.com</span></a><a href="https://wa.me/918888184051" target="_blank" rel="noreferrer"><img src="/icons/whatsapp.png" alt="" /><span><small>WhatsApp</small>Chat with our team</span></a></div><div className="contact-address"><strong>Our office</strong><p>Tilak Nagar, Kondhwa,<br />Pune, Maharashtra 411048</p></div></aside>
      <div className="contact-map-section contact-map-card" aria-label="MJ Travels location">
        <div className="contact-map-heading"><p className="page-kicker">Find us in Pune</p><h2>Visit our office</h2><p>Tap the map to open our location in Google Maps.</p></div>
        <div className="contact-map-wrap">
          <iframe title="MJ Travels location map" src="https://www.google.com/maps?q=MJ%20Travels%20Tilak%20Nagar%20Kondhwa%20Pune%20Maharashtra%20411048&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a href="https://maps.app.goo.gl/KiFTY1Ay6cMxhtqPA" target="_blank" rel="noreferrer" aria-label="Open MJ Travels location in Google Maps" />
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
