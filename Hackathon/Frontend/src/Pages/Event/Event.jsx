import React from 'react';
import styles from './Event.module.scss';
import {HashLink} from 'react-router-hash-link';

const EventPage = () => {
    return (
        <div className={styles.eventPage}>
            {/* Event Banner Section */}
            <header className={styles.banner}>
                <h1>Hackathon 2024</h1>
                <p>Build, innovate, and showcase your skills in a 48-hour coding sprint.</p>
                <HashLink smooth to="/home#project" className={styles.registerButton}>Register Now</HashLink>
            </header>

            {/* Schedule Section */}
            <section className={styles.schedule}>
                <h2>Event Schedule</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <span>Day 1</span>
                        <p>Opening Ceremony & Team Formation - 10:00 AM</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <span>Day 1</span>
                        <p>Hacking Begins - 12:00 PM</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <span>Day 2</span>
                        <p>Midnight Check-in - 12:00 AM</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <span>Day 3</span>
                        <p>Final Presentations & Closing - 4:00 PM</p>
                    </div>
                </div>
            </section>

            {/* Prizes Section */}
            <section className={styles.prizes}>
                <h2>Prizes</h2>
                <div className={styles.prizeCards}>
                    <div className={styles.prizeCard}>
                        <h3>1st Place</h3>
                        <p>3000 Cash Prize</p>
                    </div>
                    <div className={styles.prizeCard}>
                        <h3>2nd Place</h3>
                        <p>1500 Cash Prize</p>
                    </div>
                    <div className={styles.prizeCard}>
                        <h3>3rd Place</h3>
                        <p>750 Cash Prize</p>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className={styles.speakers}>
                <h2>Speakers</h2>
                <div className={styles.speakerList}>
                    <div className={styles.speaker}>
                        <img src="https://media.vanityfair.com/photos/5cf71b7e5d0130aa612df063/4:3/w_1772,h_1329,c_limit/zuckerberg1.jpg" alt="Speaker 1" />
                        <h3>Mark Zuckerberg</h3>
                        <p>CEO of Facebook</p>
                    </div>
                    <div className={styles.speaker}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQC2dj-U2VXQvq6srsWfRSXF6hFtg1oTCbqQ&s" alt="Speaker 2" />
                        <h3>Sam Altman</h3>
                        <p>CEO of OpenAI</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventPage;
