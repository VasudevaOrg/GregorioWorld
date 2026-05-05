import styles from './program.module.css';

export default function ProgramPage() {
  const pricingPlans = [
    {
      name: 'Essential',
      price: '$37',
      features: [
        '5 Powerful Meditations',
        'Lifetime Access',
        'Mobile App Access',
        'Bonus: Daily Checklist'
      ],
      buttonText: 'ENROLL NOW',
      highlight: false
    },
    {
      name: 'Growth',
      price: '$97',
      features: [
        '15 Transformational Meditations',
        '21-Day Challenge',
        'Private Community Access',
        'Bonus: 3 Live Q&A Recordings',
        'Breathwork Masterclass'
      ],
      buttonText: 'JOIN NOW',
      highlight: true
    },
    {
      name: 'Mastery',
      price: '$197',
      features: [
        'Complete Meditation Library (30+)',
        'Personal Growth Roadmap',
        '1-on-1 Strategy Call',
        'Bonus: All Future Updates',
        'VIP Community Status'
      ],
      buttonText: 'GO MASTERY',
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "Gregorio's breathwork is the most powerful thing I've ever experienced. It changed my life in minutes.",
      name: "Simon Nicolas Pelland",
      role: "Founder"
    },
    {
      quote: "I've tried many meditation programs, but this one is on another level. The energy is incredible.",
      name: "David Block",
      role: "Musician"
    }
  ];

  return (
    <div className={styles.program}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>MASTER YOUR HAPPINESS, REACH ULTIMATE BLISS.</h1>
          <p className={styles.subtitle}>Breathwork to achieve your greatness in record time.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="container section-padding">
        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Choose Your Path</h2>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`${styles.plan} ${plan.highlight ? styles.highlight : ''}`}>
              <h3>{plan.name}</h3>
              <div className={styles.price}>{plan.price}</div>
              <ul>
                {plan.features.map((feat, i) => <li key={i}>{feat}</li>)}
              </ul>
              <button className={styles.enrollBtn}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <h2 className="text-center">What People Say</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <p>"{t.quote}"</p>
                <h4>- {t.name}</h4>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container section-padding">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary>Who is this program for?</summary>
            <p>This program is for anyone looking to reduce stress, increase clarity, and find a deeper sense of peace and purpose in their lives.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>How long will it take to feel the benefits?</summary>
            <p>Many participants report feeling a significant shift after just their first session. Consistent practice over 21 days leads to lasting transformation.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>What is the concept of Blissipline?</summary>
            <p>Blissipline is the practice of prioritizing your inner state of bliss as a daily discipline, knowing that your external world is a reflection of your internal state.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
