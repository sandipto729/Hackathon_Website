import React from 'react';
import styles from './About.module.scss';
import {HashLink} from 'react-router-hash-link';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.introSection}>
                <h1>About Hackathon 2024</h1>
                <p>
                    Hackathon 2024 is an immersive 48-hour event where developers, designers, and tech enthusiasts come together to solve real-world problems, innovate, and build projects that can make a difference. Participants will have the opportunity to showcase their skills, collaborate with like-minded individuals, and compete for exciting prizes.
                </p>
            </section>

            <section className={styles.missionSection}>
                <h2>Our Mission</h2>
                <p>
                    The mission of Hackathon 2024 is to foster innovation, creativity, and collaboration within the tech community. We aim to provide a platform where individuals from diverse backgrounds can come together, share ideas, and bring their innovative solutions to life.
                </p>
            </section>

            <section className={styles.eventHighlights}>
                <h2>Event Highlights</h2>
                <ul>
                    <li>48 hours of non-stop coding</li>
                    <li>Mentorship from industry experts</li>
                    <li>Workshops on cutting-edge technologies</li>
                    <li>Networking opportunities with tech leaders</li>
                    <li>Exciting prizes for top-performing teams</li>
                </ul>
            </section>

            <section className={styles.footer}>
                <h2>Join Us!</h2>
                <p>
                    Whether you're a seasoned developer or just starting your tech journey, Hackathon 2024 welcomes you. Be a part of this incredible experience, showcase your talents, and take the first step in creating tomorrow’s technology.
                </p>
                <HashLink smooth to="/home#project" className={styles.registerButton}>Register Now</HashLink>
            </section>
        </div>
    );
};

export default About;
