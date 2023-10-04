import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesArray = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
    ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span id="technologies">
        {technologiesArray}
        </span>
      </div>
    </div>
  );
}

export default ProjectItem;