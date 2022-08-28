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
    <section id="projects">
      <h2 className="numberedHeader">My projects</h2>
      <div className="projectsWrapper">
        {projects.map((projectItem) => (
          <ul className="wraper" key={projectItem.id}>
            <li className="listProjects">
              <div className="projectContent">
                <div>
                  <h3 className="headline">{projectItem.name}</h3>

                  <div className="descriptionWrapper">
                    <p className="description">{projectItem.description}</p>
                  </div>
                </div>

                <div className="projectSource">
                  <a href={projectItem.github_link} rel="noreferrer">
                    <i class="fa-brands fa-github fa-2x" />
                  </a>
                </div>
              </div>

              <div className="projectImageWrapper">
                <a href={projectItem.link}>
                  <img className="projectImage" src={projectItem.image_url} alt="" />
                </a>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
