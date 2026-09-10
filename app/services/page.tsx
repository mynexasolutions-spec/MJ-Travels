import { SiteFooter, SiteHeader } from "../components/site-chrome";

const services = [
  { id: "airport", title: "Airport Transfers", text: "Reliable Pune to Mumbai Airport drops with doorstep pickup, flight-aware timing and clean, comfortable cars.", image: "/images/your-image-3.jpg", points: ["24×7 availability", "On-time pickup", "Transparent quotes"] },
  { id: "local", title: "Local City Cabs", text: "Move around Pune with an experienced driver when you need a comfortable ride for errands, meetings or a day out.", image: "/images/your-image-9.jpg", points: ["Flexible hourly rides", "Clean AC cars", "Friendly local drivers"] },
  { id: "outstation", title: "Outstation & One-Way", text: "Plan a relaxed escape or a practical one-way drop. We make intercity travel simple from the first call to the final stop.", image: "/images/your-image-6.jpg", points: ["Popular Maharashtra routes", "One-way or return travel", "Comfort for every group"] },
  { id: "corporate", title: "Corporate & Family Travel", text: "Dependable transport for work travel, family occasions and group journeys, with the right vehicle for your plan.", image: "/images/your-image-13.jpg", points: ["Sedans, SUVs & Tempo Travellers", "Professional service", "Easy advance booking"] },
];

export default function ServicesPage() {
  return <main className="inner-page services-page">
    <SiteHeader active="Services" />
    <section className="inner-hero services-hero"><p className="page-kicker">Travel made easy</p><h1>Every ride, <span>handled with care.</span></h1><p>From quick city rides to memorable outstation journeys, MJ Travels keeps every trip safe, comfortable and on time.</p><a className="page-primary" href="/contact">Get a quick quote</a></section>
    <section className="service-page-grid" aria-label="MJ Travels services">
      {services.map((service, index) => <article className={index % 2 ? "service-page-card service-page-card-reverse" : "service-page-card"} id={service.id} key={service.title}>
        <img src={service.image} alt={service.title} />
        <div><p className="card-number">0{index + 1}</p><h2>{service.title}</h2><p>{service.text}</p><ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul><a href="/contact">Book this service</a></div>
      </article>)}
    </section>
    <section className="page-cta"><p>Ready when you are</p><h2>Tell us where you want to go.</h2><a className="page-primary" href="https://wa.me/918888184051" target="_blank" rel="noreferrer">WhatsApp MJ Travels</a></section>
    <SiteFooter />
  </main>;
}
