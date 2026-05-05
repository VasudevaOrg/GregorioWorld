import styles from './coaching.module.css';

export default function CoachingPage() {
  const focusAreas = [
    {
      title: 'BODY: Invigorating your',
      items: [
        'Healthy habit building',
        'Movement (inner fire)',
        'Nutrition and wellbeing',
        'Go Beyond Limits (breathwork, cold therapy, fasting)'
      ]
    },
    {
      title: 'EMOTIONS: Mastering your',
      items: [
        'Self-love',
        'Transforming heavy emotions',
        'Moving from fear to courage',
        'Embodying authentic happiness'
      ]
    },
    {
      title: 'MIND: Expanding your',
      items: [
        'Empowered living (removing self-doubt)',
        'Revitalizing positivity',
        'Evolving stress into peace (mindfulness/meditation)',
        'Abundance/prosperity mindset',
        'Releasing vices/toxic habits'
      ]
    },
    {
      title: 'HEART: Following your',
      items: [
        'Living in flow and magic',
        'Blissipline (enjoyable discipline)',
        'Equilibrium/wholeness (masculine/feminine balance)',
        'Powerful manifesting',
        'Transitioning from career to life purpose'
      ]
    },
    {
      title: 'HARMONY: Living in',
      items: [
        'Thriving in love',
        'Authentic relationships',
        'Community and service',
        'Regenerative/sustainable living'
      ]
    }
  ];

  const coachingPaths = [
    {
      name: '1-1 COACHING',
      description: 'Personalized, intensive sessions tailored to individual needs and goals.'
    },
    {
      name: 'GROUP COACHING',
      description: 'Intimate groups (4 to 6 people) focused on shared growth and community support.'
    },
    {
      name: 'MEMBERSHIP',
      description: 'Monthly group coaching session with Q&A on voted topics, plus access to a private community group.'
    }
  ];

  return (
    <div className={styles.coaching}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>THE FORMULA FOR YOUR BEST LIFE.</h1>
          <p>Holistic coaching to transform your body, emotions, mind, heart, and harmony.</p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container section-padding">
        <h2 className="text-center" style={{ marginBottom: '4rem' }}>Our Five Pillars</h2>
        <div className={styles.focusGrid}>
          {focusAreas.map((area, index) => (
            <div key={index} className={styles.areaCard}>
              <h3>{area.title}</h3>
              <ul>
                {area.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Coaching Paths */}
      <section className={styles.pathsSection}>
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--white)', marginBottom: '4rem' }}>Choose Your Path</h2>
          <div className={styles.pathsGrid}>
            {coachingPaths.map((path, index) => (
              <div key={index} className={styles.pathCard}>
                <h3>{path.name}</h3>
                <p>{path.description}</p>
                <button className={styles.pathBtn}>LEARN MORE</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Summary */}
      <section className="container section-padding text-center">
        <h2>Your Mentors</h2>
        <p style={{ maxWidth: '800px', margin: '2rem auto' }}>
          Gregorio Avanzini and Andrea Ochoa Avanzini share personalized tools and guide you through your journey of self-discovery.
        </p>
        <div className={styles.mentors}>
          {/* Small mentor previews or links to home bios */}
        </div>
      </section>
    </div>
  );
}
