import React from "react";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal website built with React.js and Bootstrap to showcase my projects and experiences.",
      tech: ["React.js", "Bootstrap", "JavaScript"],
      image: "/project1.jpg",
      demo: "#",
      repo: "#",
    },
    {
      title: "Task Manager App",
      description:
        "A simple task management web app allowing users to add, edit, and organize tasks efficiently.",
      tech: ["React.js", "LocalStorage", "CSS3"],
      image: "/project2.jpg",
      demo: "#",
      repo: "#",
    },
    {
      title: "Landing Page Redesign",
      description:
        "A clean and modern landing page redesign for a local business to improve user engagement.",
      tech: ["HTML5", "Bootstrap", "Figma"],
      image: "/project3.jpg",
      demo: "#",
      repo: "#",
    },
  ];
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Projects</h2>
          <p className="text-muted">
            Some of the projects I’ve built and worked on recently.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="text-muted">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge bg-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.demo}
                      className="btn btn-sm btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.repo}
                      className="btn btn-sm btn-outline-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
