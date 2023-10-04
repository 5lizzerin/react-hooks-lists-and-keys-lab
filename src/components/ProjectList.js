import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectsArray = projects.map((oneProject) => (
    <ProjectItem key={projects.id} name={oneProject.name} about={oneProject.about} technologies={oneProject.technologies}/>
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectsArray}
      </div>
    </div>
  );
}

export default ProjectList;