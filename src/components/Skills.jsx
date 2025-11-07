import React from "react";
import styles from "../styles/Skills.module.css";
import { FiCode, FiTool, FiLayers } from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode size={28} />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Backend Development",
      icon: <FiCode size={28} />,
      skills: ["Node.js", "Express.js", "PostgreSQL", "Restful APIs"],
    },
    {
      title: "Tools & Workflow",
      icon: <FiTool size={28} />,
      skills: ["Git & GitHub", "VS Code", "Figma", "Responsive Design"],
    },
    {
      title: "Other Knowledge",
      icon: <FiLayers size={28} />,
      skills: [
        "REST API Integration",
        "UI/UX Design Basics",
        "Version Control",
      ],
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection} data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`fw-bold ${styles.title}`}>Skills & Tech Stack</h2>
          <p className={styles.subtitle}>
            The technologies and tools I use to build interactive, efficient,
            and scalable web applications.
          </p>
        </div>

        <div className={`row g-4 justify-content-center ${styles.skillsGrid}`}>
          {skillCategories.map((category, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className={styles.skillCard}>
                <div className={styles.iconWrapper}>{category.icon}</div>
                <h5 className={styles.cardTitle}>{category.title}</h5>
                <div className={styles.skillList}>
                  {category.skills.map((skill, i) => (
                    <span key={i} className={styles.skillBadge}>
                      {skill}
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

export default Skills;
