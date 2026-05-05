import styles from './testimonials.module.css';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jeffrey Perlman",
      role: "CSO - Mindvalley",
      quote: "Gregorio will guide you through the fear and into the truth... I highly recommend working with him."
    },
    {
      name: "Claire Fermont Langlais",
      role: "VP - Aerin Estée Lauder",
      quote: "Andrea is this shining star that brings purpose and intention to the next level... Thank you for your inspiration."
    },
    {
      name: "Ronny Turiaf",
      role: "NBA Champion",
      quote: "Gregorio Avanzini is a warrior of light... My life changed for the better by crossing paths with him."
    },
    {
      name: "Philipp von Bieberstein",
      role: "Co-Founder - Alice",
      quote: "My coaching sessions with Gregorio unlocked new doors for my personal growth... A wonderful and enriching experience."
    },
    {
      name: "Anonymous Participant",
      role: "Breathwork Immersion",
      quote: "I felt like I was high without taking any drugs. It was like a gastronomica orgasm."
    },
    {
      name: "Corporate Client",
      role: "Team Building Event",
      quote: "It was incredible, nourishing to our bodies and to our souls. Gregorio and Andrea were absolutely amazing."
    }
  ];

  return (
    <div className={styles.testimonials}>
      <section className={styles.hero}>
        <div className="container">
          <h1>HEART-CENTERED SUCCESS STORIES</h1>
          <p>Real experiences from individuals and organizations transformed by our programs.</p>
        </div>
      </section>

      <section className="container section-padding">
        <div className={styles.testimonialMasonry}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.author}>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.videoTestimonials}>
        <div className="container text-center">
          <h2>Watch the Transformation</h2>
          <div className={styles.videoGrid}>
            {/* Placeholders for video testimonials */}
            <div className={styles.videoPlaceholder}>Video Testimonial 1</div>
            <div className={styles.videoPlaceholder}>Video Testimonial 2</div>
          </div>
        </div>
      </section>
    </div>
  );
}
