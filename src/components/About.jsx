import React from "react";

const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Me</h2>
        <p className="text-muted">A short story about who I am and what I do</p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="/profile2.jpg" // replace with your photo path
            alt="About"
            className="rounded shadow"
            style={{ width: "80%", maxWidth: "300px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-7">
          <p className="lead">
            Hi! I'm <strong>Satrio Bayu</strong>, a <em>Frontend Developer</em>{" "}
            who loves building intuitive and engaging web interfaces. I’m
            passionate about creating interactive designs, optimizing
            performance, and delivering delightful user experiences.
          </p>

          <p>
            I started focusing on web development during my college years and
            have continued to sharpen my skills through both personal and
            collaborative projects. Currently, I mainly work with React.js to
            build modern, responsive, and dynamic websites.
          </p>

          <div className="mt-4">
            <h5 className="fw-semibold mb-3">Technologies I frequently use:</h5>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-primary">React.js</span>
              <span className="badge bg-secondary">Bootstrap</span>
              <span className="badge bg-success">JavaScript (ES6+)</span>
              <span className="badge bg-info text-dark">Git & GitHub</span>
              <span className="badge bg-warning text-dark">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
