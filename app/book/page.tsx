"use client";

import { type FormEvent, useState } from "react";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

type BookingDetails = {
  from: string;
  to: string;
  date: string;
  time: string;
};

export default function BookPage() {
  const [details, setDetails] = useState<BookingDetails>({ from: "", to: "", date: "", time: "" });

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello MJ Travels, I want to book a cab.",
      `From: ${details.from}`,
      `To: ${details.to}`,
      `Date: ${details.date || "Not selected"}`,
      `Time: ${details.time || "Not selected"}`,
    ].join("\n");

    window.location.href = `https://wa.me/918888184051?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="book-page">
      <SiteHeader active="" />
      <section className="book-page-hero">
        <div className="book-page-shell">
          <div className="book-page-copy">
            <p className="page-kicker">Book your ride</p>
            <h1>Where would you <span>like to go?</span></h1>
          </div>
          <form className="book-page-form" onSubmit={submitBooking}>
            <h2>Plan your journey</h2>
            <label>Pickup location<input required value={details.from} onChange={(event) => setDetails({ ...details, from: event.target.value })} placeholder="e.g. Pune" /></label>
            <label>Drop location<input required value={details.to} onChange={(event) => setDetails({ ...details, to: event.target.value })} placeholder="e.g. Mumbai Airport" /></label>
            <div className="book-page-form-row"><label>Travel date<input type="date" value={details.date} onChange={(event) => setDetails({ ...details, date: event.target.value })} /></label><label>Pickup time<input type="time" value={details.time} onChange={(event) => setDetails({ ...details, time: event.target.value })} /></label></div>
            <button type="submit">Get quote on WhatsApp</button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
