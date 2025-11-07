import React from "react";
import styles from "../styles/Contact.module.css";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className={styles.section} data-aos="fade-up">
      <div className="container text-center">
        <div className="mb-5">
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            I’m always open to discussing new projects, collaborations, or
            opportunities to grow together. Feel free to reach out!
          </p>
        </div>

        <div className={styles.socials}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sbayu875@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.email}`}
          >
            <FiMail className="me-2" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/satrio-bayu"
            target="_blank"
            rel="noreferrer"
            className={`${styles.contactBtn} ${styles.linkedin}`}
          >
            <FiLinkedin className="me-2" />
            LinkedIn
          </a>

          <a
            href="https://github.com/SatrioBayu"
            target="_blank"
            rel="noreferrer"
            className={`${styles.contactBtn} ${styles.github}`}
          >
            <FiGithub className="me-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
