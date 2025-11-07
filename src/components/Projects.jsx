import React from "react";
import styles from "../styles/Projects.module.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal website built with React.js and Bootstrap to showcase my projects and experiences.",
      tech: ["React.js", "Bootstrap", "JavaScript"],
      image: "/project-portfolio.png",
      demo: "#",
      repo: "#",
    },
    {
      title: "Sistem Persediaan Barang PTTUN Makassar",
      description:
        "A web-based inventory management system developed for PTTUN Makassar.",
      tech: ["React.js", "Express", "Node.js", "PostgreSQL"],
      image: "/project-istock.png",
      demo: "https://istock.pttun-makassar.go.id",
      repo: "#",
    },
    {
      title: "Duck Hunt",
      description:
        "A simple web-based duck hunt game inspired by the classic arcade game.",
      tech: ["HTML5", "CSS", "Javascript"],
      image: "/project-duck.png",
      demo: "https://satriobayu.github.io/",
      repo: "https://github.com/SatrioBayu/SatrioBayu.github.io",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`fw-bold ${styles.title}`}>Projects</h2>
          <p className={styles.subtitle}>
            Some of the projects I’ve built and worked on recently.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconBtn}
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconBtn}
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h5 className={styles.projectTitle}>{project.title}</h5>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.techList}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.techBadge}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
