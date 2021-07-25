import React from "react";
import Card from "../../helpers/Card";
import projects from "../../helpers/projects.json";
import professionalWork from "../../helpers/professionalWork.json";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <div className="projects__title">
          <h2>Professional Work</h2>
        </div>
        <div className="projects__tabs">
          {professionalWork.map((project, i) => (
            <Card
              key={i}
              title={project.projectName}
              description={project.description}
              technologies={project.technologies}
              gitHub={project.gitHub}
              appLink={project.appLink}
              image={project.image}
            />
          ))}
        </div>
        <div className="projects__title">
          <h2>Expirimental Projects</h2>
        </div>
        <div className="projects__tabs">
          {projects.map((project, i) => (
            <Card
              key={i}
              title={project.projectName}
              description={project.description}
              technologies={project.technologies}
              gitHub={project.gitHub}
              appLink={project.appLink}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Projects;
