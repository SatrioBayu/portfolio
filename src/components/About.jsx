import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section
      id="about"
      className={`py-5 ${styles.aboutSection}`}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`fw-bold ${styles.aboutTitle}`}>About Me</h2>
          <p className="text-muted">
            A short story about who I am and what I do
          </p>
        </div>

        <div className="row align-items-center justify-content-center">
          {/* <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <div className={styles.neonGlow}></div>
              <img
                src="/Profile2.jpg"
                alt="About"
                className={styles.aboutImage}
              />
            </div>
          </div> */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className={styles.imageWrapper}>
              <img
                src="/Profile2.jpg"
                alt="About"
                className={styles.aboutImage}
              />
            </div>
          </div>

          <div className="col-md-7">
            <p className={`lead ${styles.aboutText}`}>
              Hi! I'm <strong>Satrio Bayu</strong>, an <em>IT professional</em>{" "}
              with experience in service management and governance at{" "}
              <strong>Toyota Astra Motor</strong> and{" "}
              <strong>Astra Graphia Information Technology</strong>. I’m
              passionate about <strong>web development</strong>, building modern
              and efficient applications using
              <strong> JavaScript</strong>, <strong>Node.js (Express)</strong>,
              and <strong>React.js</strong>.
            </p>

            <p className={styles.aboutText}>
              Combining my background in IT governance with my technical
              expertise, I strive to create digital solutions that are not only
              functional but also aligned with organizational standards and best
              practices. I enjoy bridging the gap between technology, process,
              and user experience.
            </p>

            <div className="mt-4">
              <h5 className="fw-semibold mb-3">
                Technologies I frequently use:
              </h5>
              <div className={`d-flex flex-wrap gap-2 ${styles.techStack}`}>
                <span className={styles.techBadge}>JavaScript (ES6+)</span>
                <span className={styles.techBadge}>React.js</span>
                <span className={styles.techBadge}>Node.js</span>
                <span className={styles.techBadge}>PostgreSQL</span>
                <span className={styles.techBadge}>Bootstrap</span>
                <span className={styles.techBadge}>Git & GitHub</span>
                <span className={styles.techBadge}>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
