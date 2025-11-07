// Experience.jsx
import React from "react";

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      position: "Frontend Developer",
      company: "Freelance / Personal Projects",
      achievements: [
        "Developed several responsive websites using React.js and Bootstrap.",
        "Collaborated with designers to improve UI/UX for client projects.",
        "Implemented reusable components and optimized code performance.",
      ],
    },
    {
      year: "2022 - 2024",
      position: "Web Developer Intern",
      company: "Tech Innovators Indonesia",
      achievements: [
        "Built internal dashboards for performance monitoring using JavaScript and REST APIs.",
        "Worked closely with backend engineers to integrate API endpoints.",
        "Learned Git workflow and version control in a team setting.",
      ],
    },
    {
      year: "2020 - 2022",
      position: "Computer Science Student Projects",
      company: "University Projects",
      achievements: [
        "Created multiple academic projects, including a to-do app and landing page templates.",
        "Introduced component-based UI structure using React.",
        "Presented final-year project focused on improving UX in web-based learning apps.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Experience</h2>
          <p className="text-muted">
            My career journey and key achievements over the years.
          </p>
        </div>

        <div className="timeline position-relative border-start border-3 border-primary ps-4">
          {experiences.map((exp, index) => (
            <div className="mb-5 position-relative" key={index}>
              <div
                className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle"
                style={{ width: "16px", height: "16px" }}
              ></div>

              <div className="ms-4">
                <h5 className="fw-bold mb-1">{exp.position}</h5>
                <p className="text-muted mb-1">{exp.company}</p>
                <small className="text-secondary d-block mb-2">
                  {exp.year}
                </small>
                <ul className="mb-0">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
