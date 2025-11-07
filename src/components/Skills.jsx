const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git & GitHub", "VS Code", "Figma", "Responsive Design"],
    },
    {
      title: "Other Knowledge",
      skills: [
        "REST API Integration",
        "UI/UX Design Basics",
        "Version Control",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Skills & Tech Stack</h2>
          <p className="text-muted">
            The technologies and tools I use to build interactive, efficient,
            and scalable web applications.
          </p>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h5 className="fw-semibold mb-3">{category.title}</h5>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="badge bg-primary bg-opacity-75">
                        {skill}
                      </span>
                    ))}
                  </div>
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
