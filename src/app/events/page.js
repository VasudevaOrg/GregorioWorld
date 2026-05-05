import styles from './events.module.css';

export default function EventsPage() {
  const events = [
    {
      title: 'MULTI-SENSORIAL DINING EXPERIENCE',
      description: 'An immersive journey through taste, sound, and touch. We create unique atmospheres where food becomes a medium for transformation.'
    },
    {
      title: 'THE ART OF RECONNECTING',
      description: 'Workshops focused on deep human connection, helping individuals and teams to build trust and authenticity.'
    },
    {
      title: 'THE JOY OF BEING A KID AGAIN',
      description: 'Playful exploration sessions designed to reconnect with your inner child, fostering creativity and joy.'
    },
    {
      title: 'SUSTAINABLE AND CONSCIOUS LIVING',
      description: 'Sessions focusing on environmental awareness and how to align your lifestyle with regenerative practices.'
    },
    {
      title: 'OPENING AND CLOSING CEREMONIES',
      description: 'Rituals designed to set the tone and conclude events with intention, creating a sacred space for growth.'
    },
    {
      title: 'INSPIRATIONAL TALKS',
      description: 'Motivational speaking engagements by Gregorio and his team to spark change and activate potential.'
    }
  ];

  return (
    <div className={styles.events}>
      <section className={styles.hero}>
        <div className="container">
          <h1>CURATED IMMERSIONS</h1>
          <p>Retreats, conferences, corporate events, and team building experiences worldwide.</p>
        </div>
      </section>

      <section className="container section-padding">
        <div className={styles.eventsGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2>Ready to Host an Event?</h2>
          <p style={{ marginBottom: '3rem' }}>Contact us to discuss how we can create a unique immersion for your group or organization.</p>
          <button className={styles.ctaBtn}>BOOK A CONSULTATION</button>
        </div>
      </section>
    </div>
  );
}
