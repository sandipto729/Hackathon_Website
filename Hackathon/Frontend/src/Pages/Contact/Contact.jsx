import React from 'react';
import styles from './Contact.module.scss';

const ContactPage = () => {
    return (
        <div className={styles.contactPage}>
            <header className={styles.header}>
                <h1>Contact Us</h1>
                <p>We’re here to help! Reach out for any inquiries or support.</p>
            </header>

            {/* Contact Form */}
            <section className={styles.contactFormSection}>
                <h2>Send Us a Message</h2>
                <form className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </section>

            {/* Contact Info */}
            <section className={styles.contactInfo}>
                <h2>Contact Information</h2>
                <div className={styles.infoItems}>
                    <div className={styles.infoItem}>
                        <h3>Email</h3>
                        <p>sandipto729@gmail.com</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Phone</h3>
                        <p>9476455131</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Location</h3>
                        <p>NIT Durgapur,West Bengal</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
