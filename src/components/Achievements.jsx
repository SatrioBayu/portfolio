// Achievements.jsx
import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "React Developer Certificate",
      issuer: "Dicoding Indonesia",
      year: "2024",
      description:
        "Completed an in-depth React Developer learning path focused on modern web application development.",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Coursera",
      year: "2023",
      description:
        "Learned principles of user interface and user experience design with hands-on design projects.",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2022",
      description:
        "Covered HTML, CSS, JavaScript, and Bootstrap to build responsive websites from scratch.",
    },
  ];

  return (
    <section id="achievements" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Achievements & Certificates</h2>
          <p className="text-muted">
            Recognitions and certifications I’ve earned along my learning
            journey.
          </p>
        </div>

        <div className="row g-4">
          {achievements.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <h6 className="text-muted mb-1">{item.issuer}</h6>
                  <small className="text-secondary d-block mb-3">
                    {item.year}
                  </small>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
