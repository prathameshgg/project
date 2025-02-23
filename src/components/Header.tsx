import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../assets/flogo.png'; // Update this path based on your actual logo file
import { 
  Home, 
  DollarSign, 
  BookOpen,
  Activity,
  ClipboardList,
  Users,
  MessageSquare,
  LogIn
} from 'lucide-react';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <img 
              src={logo} 
              alt="SereniLink Logo" 
              className={styles.logoImage}
            />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? styles.active : ''}
            >
              <Home size={20} className={styles.navIcon} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/pricing"
              className={location.pathname === '/pricing' ? styles.active : ''}
            >
              <DollarSign size={20} className={styles.navIcon} />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/articles"
              className={location.pathname === '/articles' ? styles.active : ''}
            >
              <BookOpen size={20} className={styles.navIcon} />
              <span>Articles</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/meditation"
              className={location.pathname === '/meditation' ? styles.active : ''}
            >
              <Activity size={20} className={styles.navIcon} />
              <span>Meditation</span>
            </Link>
          </li>
          {/* <li>
            <Link 
              to="/quiz"
              className={location.pathname === '/quiz' ? styles.active : ''}
            >
              <ClipboardList size={20} className={styles.navIcon} />
              <span>Quiz</span>
            </Link>
          </li> */}
          <li>
            <Link 
              to="/directory"
              className={location.pathname === '/directory' ? styles.active : ''}
            >
              <Users size={20} className={styles.navIcon} />
              <span>Directory</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/community"
              className={location.pathname === '/community' ? styles.active : ''}
            >
              <MessageSquare size={20} className={styles.navIcon} />
              <span>Community</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/signup"
              className={location.pathname === '/signup' ? styles.active : ''}
            >
              <LogIn size={20} className={styles.navIcon} />
              <span>Sign Up</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/mental-health-tests"
              className={location.pathname === '/mental-health-tests' ? styles.active : ''}
            >
              <Home size={20} className={styles.navIcon} />
              <span>Assessments</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/feedback"
              className={location.pathname === '/feedback' ? styles.active : ''}
            >
              <Home size={20} className={styles.navIcon} />
              <span>Feedback</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;