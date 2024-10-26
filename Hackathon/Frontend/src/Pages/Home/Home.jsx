import React from 'react';
import Slider from './../../Component/SliderImage/Slider';
import styles from './Home.module.scss';
import Project from './../../Component/Project/Project';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.homeContainer}>
                <div className={styles.leftBar}>
                    <h1>Welcome to Our Hackathon!</h1>
                    <p>
                        Join us for an exciting event where you can showcase your skills,
                        collaborate with others, and innovate solutions to real-world problems.
                    </p>
                    <p>Get ready to code, create, and connect!</p>
                </div>
                <div className={styles.rightBar}>
                    <Slider />
                </div>

            </div>
            <Project id="project"/>
        </div>


    );
};

export default Home;
