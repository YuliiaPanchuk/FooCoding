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

                  <ul className="projectSkillsLink">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>

                <div className="projectSource">
                  <a href="/GITHUB_PAGE" rel="noreferrer"></a>
                  <a href="/GITHUB_PAGE" rel="noreferrer"></a>
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
