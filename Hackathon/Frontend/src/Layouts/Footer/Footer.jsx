import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Hackathon</h3>
          <p>
            Join us for an exciting hackathon where developers, designers, and innovators come together to build the future! Collaborate, code, and create to solve real-world problems.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Useful Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: info@hackathon.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Hackathon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
