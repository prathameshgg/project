import React from 'react';
import styles from '../styles/ArticlesPage.module.css';
import { 
  User, 
  Calendar, 
  Clock, 
  Tag,
  Hash,
  BookOpen,
  ArrowRight,
  Search
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tag: string;
  author: string;
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding Mental Health in the Modern World',
    description: 'Explore the latest research and insights on mental health challenges and solutions in todays fast-paced society.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: 'https://news.un.org/en/story/2024/10/1155536',
    tag: 'Featured',
    author: 'John Doe',
    date: '2024-10-11',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'The Science Behind Anxiety Management',
    description: 'Discover evidence-based strategies and expert insights for managing anxiety effectively in daily life.',
    imageUrl: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.medicalnewstoday.com/articles/154543',
    tag: 'Research',
    author: 'Jane Smith',
    date: '2024-09-15',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Breaking the Stigma: Mental Health Conversations',
    description: 'How open discussions about mental health are changing perspectives and improving lives worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.health.harvard.edu/topics/mental-health',
    tag: 'Society',
    author: 'Alice Johnson',
    date: '2024-10-01',
    readTime: '3 min read'
  },
  {
    id: '4',
    title: 'Research on Mental Health',
    description: 'A comprehensive research article on mental health awareness and practices.',
    imageUrl: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4409431/',
    author: 'Bob Brown',
    date: '2024-09-20',
    readTime: '8 min read'
  },
  {
    id: '5',
    title: 'Mental Health Awareness Blog',
    description: 'Insightful blogs to help you stay informed and mindful about mental health.',
    imageUrl: 'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    link: 'https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/',
    author: 'Eve Wilson',
    date: '2024-10-05',
    readTime: '4 min read'
  }
];

const ArticlesPage = () => {
  return (
    <main className={styles.articlesPage}>
      <h2 className={styles.title}>Mental Health Insights</h2>
      <p className={styles.introText}>
        Explore our curated collection of expert articles, research findings, and practical guides to support your mental health journey.
      </p>
      <div className={styles.articlesContainer}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className={styles.articleThumbnail}
            />
            <span className={styles.tag}>{article.tag}</span>
            <div className={styles.articleContent}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className={styles.metaInfo}>
                <span className={styles.author}>
                  <User size={16} className={styles.icon} />
                  {article.author}
                </span>
                <span className={styles.date}>
                  <Calendar size={16} className={styles.icon} />
                  {new Date(article.date).toLocaleDateString()}
                </span>
              </div>
              <div className={styles.readTime}>
                <Clock size={16} className={styles.icon} />
                {article.readTime}
              </div>
              <div className={styles.filterTags}>
                <Tag className={styles.icon} />
                {['Mental Health', 'Self-Care', 'Therapy'].map(tag => (
                  <button key={tag} className={styles.tagFilter}>
                    <Hash size={14} className={styles.icon} />
                    {tag}
                  </button>
                ))}
              </div>
              <button 
                className={styles.readMoreBtn}
                onClick={() => window.open(article.link, '_blank')}
              >
                Read Article
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ArticlesPage;