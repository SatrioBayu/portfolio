import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`d-flex flex-column justify-content-center align-items-center text-center vh-100 ${styles.heroSection}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src="/Profile.png"
          alt="Profile"
          className={`${styles.heroImage} shadow`}
        />
      </div>

      <h1 className={`fw-bold mt-3 ${styles.heroName}`}>Satrio Bayu</h1>
      <h4 className={`text-muted mb-3 ${styles.heroTitle}`}>
        ITSM / ITIL | IT Governance | Project Manager | Web Developer
      </h4>

      <p className={`lead w-75 mx-auto ${styles.heroDesc}`}>
        IT professional with experience in service management and governance at
        Toyota Astra Motor and Astra Graphia Information Technology. Passionate
        about web development, building modern applications with JavaScript,
        Node.js (Express), and React.js.
      </p>

      <div className={`mt-4 ${styles.heroButtons}`}>
        <a href="#projects" className={`btn ${styles.primaryBtn}`}>
          View Portfolio
        </a>
        <a href="#contact" className={`btn ${styles.secondaryBtn}`}>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
