import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light"
    >
      <img
        src="/Profile.png" // ganti dengan path foto kamu
        alt="Profile"
        className="rounded-circle mb-4 shadow"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />

      <h1 className="fw-bold">Satrio Bayu</h1>
      <h4 className="text-muted mb-3">
        ITSM/ITIL | IT Governance | Project Manager | Web Developer
      </h4>

      {/* <p className="lead w-75 mx-auto">
        IT professional experienced in IT Service Management and IT Governance,
        supporting service operations at PT Toyota Astra Motor and PT Astra
        Graphia Information Technology. Skilled in implementing ITIL-aligned
        practices to enhance service quality, efficiency, and incident
        resolution. Also served as ISMS Officer, contributing to ISO/IEC 27001
        internal audits and compliance. Beyond IT operations, I have a strong
        interest in web development with hands-on experience in JavaScript,
        particularly Node.js (Express) and React.js.
      </p> */}

      <p className="lead w-75 mx-auto">
        IT professional with experience in service management and governance at
        Toyota Astra Motor and Astra Graphia IT. Passionate about web
        development, building modern applications with JavaScript, Node.js
        (Express), and React.js.
      </p>

      <div className="mt-4">
        <a href="#projects" className="btn btn-primary btn-lg mx-2">
          Lihat Portofolio
        </a>
        <a href="#contact" className="btn btn-outline-dark btn-lg mx-2">
          Hubungi Saya
        </a>
      </div>
    </section>
  );
};

export default Hero;
