// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <div className="container text-center">
        <div className="mb-5">
          <h2 className="fw-bold">Get In Touch</h2>
          <p className="text-muted">
            I’m always open to discussing new projects, collaborations, or
            opportunities to grow together.
          </p>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <a
            href="mailto:satriobayu@example.com"
            className="btn btn-primary btn-lg"
          >
            <i className="bi bi-envelope me-2"></i>Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/satriobayu"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark btn-lg"
          >
            <i className="bi bi-linkedin me-2"></i>LinkedIn
          </a>
          <a
            href="https://github.com/satriobayu"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark btn-lg"
          >
            <i className="bi bi-github me-2"></i>GitHub
          </a>
        </div>

        <footer className="pt-4 border-top mt-5">
          <p className="mb-0 text-muted">
            © {new Date().getFullYear()} Satrio Bayu. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
