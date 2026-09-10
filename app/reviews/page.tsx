import { SiteFooter, SiteHeader } from "../components/site-chrome";

const reviews = [
  ["Rahul Sharma", "Very professional service. On-time pickup and a comfortable ride. Highly recommended.", "/images/your-image-16.jpg"],
  ["Priya Deshmukh", "Great experience for Pune to Mumbai Airport. The driver was polite and the car was clean.", "/images/your-image-17.jpg"],
  ["Amit Patil", "Best cab service in Pune. Affordable and reliable. I will book again!", "/images/your-image-18.jpg"],
  ["Neha Kulkarni", "Booking was easy and the pickup was right on time. A very smooth family trip.", "/images/your-image-19.jpg"],
  ["Sanjay Jadhav", "The car was spotless and the driver knew the route well. Excellent airport drop service.", "/images/your-image-20.jpg"],
  ["Kavita More", "A dependable choice for outstation travel. We felt safe and comfortable throughout the journey.", "/images/your-image-21.jpg"],
];

export default function ReviewsPage() {
  return <main className="inner-page reviews-page">
    <SiteHeader active="Reviews" />
    <section className="inner-hero reviews-hero"><p className="page-kicker">Loved by travellers</p><h1>Journeys they&apos;d <span>gladly take again.</span></h1><p>Every review is a reminder of what matters most: showing up on time and making every ride a good one.</p><div className="review-score"><strong>5.0</strong><span>★★★★★</span><p>Based on 200+ Google Reviews</p></div></section>
    <section className="review-page-content"><div className="review-page-heading"><p className="page-kicker">Traveller stories</p><h2>What our customers say</h2><p>Real experiences from people who chose MJ Travels for airport, city and outstation journeys.</p></div><div className="review-page-grid">{reviews.map(([name, quote, image]) => <article className="review-page-card" key={name}><div><img src={image} alt={name} /><span>★★★★★</span></div><p>“{quote}”</p><h3>{name}</h3><small>Verified traveller</small></article>)}</div></section>
    <section className="page-cta reviews-cta"><h2>Your comfortable ride can be next.</h2><a className="page-primary" href="/contact">Book your cab</a></section>
    <SiteFooter />
  </main>;
}
