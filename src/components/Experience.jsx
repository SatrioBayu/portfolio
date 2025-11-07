import React from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      year: "Jun 2024 - Jun 2025",
      position: "ITSM Lead",
      company: "PT. Astra Graphia Information Technology",
      achievements: [
        "Reviewed IT documentation (policies, guidelines, procedures) at least annually to maintain relevance with current processes and regulations.",
        "Maintained 95% SLA Achievements for ticket related to client devices.",
        "Ensure 100% maintenance is renewed on time to maintain business operations.",
        "Reviewed IT documentation (policies, guidelines, procedures) at least annually to maintain relevance with current processes and regulations.",
        "Support ISO/IEC 27001 surveillance audit and upgrade version from 2013 to 2022 with 0 findings, ensuring full compliance with information security standards.",
      ],
    },
    {
      year: "Jun 2023 - Jun 2024",
      position: "ITSM Officer",
      company: "PT. Toyota Astra Motor",
      achievements: [
        "Established standards for client devices to ensure devices security.",
        "Maintained 95% SLA Achievements for ticket related to client devices.",
        "Ensure 100% maintenance is renewed on time to maintain business operations.",
        "Ensure 100% of IT services that will be deployed in production have passed the release management process and completed project documentation.",
        "Lead ISO 27001 Surveillance Audit with 0 findings.",
        "Supported ISO 9001 External Audit with 1 OFI.",
        "Lead as Project Manager to Implemented Freshservice to improve ticket management system.",
      ],
    },
    {
      year: "May 2023 - Jun 2023",
      position: "IT Support",
      company: "CV Sinar Terang Sejahtera",
      achievements: [
        "Assist problem solving related to existing client devices such as Notebook and printer.",
        "Assist with operational data transform before input it to the system.",
      ],
    },
    {
      year: "Feb 2023 - Mar 2023",
      position: "Fullstack Web Developer Intern",
      company: "PT. Sekawan Media Informatika",
      achievements: [
        "Developed and design UI Dashboard.",
        "Consuming APIs and determining the optimal form of data presentation.",
      ],
    },
    {
      year: "2019 - 2023",
      position: "Computer Science Student",
      company: "Brawijaya University",
      achievements: [
        "UI/UX related thesis with the title 'Analisis Perbandingan Layout Form Single-Page dan Multi-Page dalam Pengisian Form Data Penduduk'.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={styles.experienceSection}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`fw-bold ${styles.title}`}>Experience</h2>
          <p className={styles.subtitle}>
            My career journey and key achievements over the years.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.year}>{exp.year}</div>
                <h5 className={styles.position}>{exp.position}</h5>
                <p className={styles.company}>{exp.company}</p>
                <ul className={styles.achievementList}>
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
