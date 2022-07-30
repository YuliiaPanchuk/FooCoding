import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api/project';

export function Projects() {
  const [projects, setProjects] = useState([]);

  const displayProjects = async () => {
    const response = await fetchProjects();

    setProjects(response);
  };

  useEffect(() => {
    displayProjects();
  }, []);

  return (
    <div id="projects">
      {projects.map((projectItem) => (
        <div className="wraper" key={projectItem.id}>
          <a href={projectItem.link}>
            <img className="projectImage" src={projectItem.image_url} alt="" />
          </a>
          <div className="wrapperText">
            <p className="headline">{projectItem.name}</p>
            <p className="description">{projectItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
