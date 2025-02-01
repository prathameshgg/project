import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.emergencyInfo}>
        <p>
          If you are in a crisis or any other person may be in danger - don't use this site. 
          Below resources can provide you with immediate help.
        </p>
        <div className={styles.helplineInfo}>
          <h3>India</h3>
          <p>Emergency: <span>112</span></p>
          <p>Suicide Hotline: <span>7058385867</span></p>
          <p>iCALL Helpline: <a href="https://icallhelpline.org" target="_blank" rel="noopener noreferrer">+91-91529-87821</a></p>
          <p>KIRAN Mental Health Helpline: <span>1800-599-0019</span></p>
          <p>Sneha India: <span>91 44 24640050</span></p>
          <p>Student / Child Helpline: <span>1098</span></p>
          <p>Vandrevala Foundation Helpline: <span>+91-9999-666-555</span></p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 SereniLink. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;