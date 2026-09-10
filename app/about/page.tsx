import { SiteFooter, SiteHeader } from "../components/site-chrome";

const values = [
  ["Safety first", "Thoughtful drivers and well-kept cars help every passenger travel with peace of mind."],
  ["Time matters", "We plan pickups carefully, so your airport, work and family plans stay on track."],
  ["Service with heart", "Clear communication, fair pricing and a helpful attitude are at the centre of every ride."],
];

export default function AboutPage() {
  return <main className="inner-page about-page">
    <SiteHeader active="About" />
    <section className="inner-hero about-hero"><p className="page-kicker">The MJ Travels story</p><h1>Your journey is <span>our responsibility.</span></h1><p>We are a Pune-based cab service built around a simple promise: every passenger deserves a ride that feels reliable, comfortable and personal.</p></section>
    <section className="about-story"><div className="about-story-image"><img src="/images/1.jpg" alt="MJ Travels car on the road" /></div><div className="about-story-copy"><p className="page-kicker">More than a cab service</p><h2>Comfort in the details. Trust in every kilometre.</h2><p>Whether you are catching a flight, travelling with family or heading out of town, our team is there to make the ride easier. From Pune to Mumbai Airport and destinations across Maharashtra, we focus on the things that make a real difference: a clean vehicle, a courteous driver and punctual service.</p><p>MJ Travels is proud to be the trusted choice for travellers who value a smooth, stress-free journey.</p><a className="page-secondary" href="/contact">Plan your ride</a></div></section>
    <section className="values-section"><div><p className="page-kicker">Our promise</p><h2>Why travellers choose MJ Travels</h2></div><div className="value-grid">{values.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-banner"><div><p>Safe rides. Happy journeys.</p><h2>Let&apos;s make your next trip feel effortless.</h2></div><a className="page-primary" href="/services">Explore our services</a></section>
    <SiteFooter />
  </main>;
}
