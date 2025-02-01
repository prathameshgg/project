import React from 'react';
import styles from '../styles/Articles.module.css';

const Articles = () => {
  const articles = [
    { title: 'Anxiety', description: 'Understanding and managing anxiety effectively.' },
    { title: 'Depression', description: 'Recognizing signs of depression and seeking help.' },
    { title: 'Mindfulness', description: 'Practicing mindfulness for better mental clarity.' },
    { title: 'Stress Management', description: 'Techniques to reduce and cope with daily stressors.' },  
    { title: 'Self-Care', description: 'Building routines to prioritize emotional and physical well-being.' },  
    { title: 'Burnout', description: 'Identifying and recovering from chronic workplace or life exhaustion.' },  
    { title: 'Social Connections', description: 'Strengthening relationships to improve mental resilience.' },  
    { title: 'Trauma', description: 'Addressing past experiences and healing emotional wounds.' },  
    { title: 'Positive Psychology', description: 'Cultivating gratitude and optimism for mental wellness.' }
    // Add more articles as needed
  ];

  return (
    <section id="articles" className={styles.articles}>
      <h2 className={styles.underlinedHeading}>Mental Health Articles</h2>
      <div className={styles.articlesContainer}>
        {articles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;