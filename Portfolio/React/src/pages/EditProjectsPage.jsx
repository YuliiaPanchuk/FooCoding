import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isSignedIn } from '../api/account';
import { fetchProjects } from '../api/project';

export function EditProjectsPage () {
  const navigate = useNavigate();
  const [project, setProject] = useState(undefined);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const displayProjects = async () => {
    const response = await fetchProjects();

    setProject(response[0]);
    setName(response[0].fields.name.stringValue);
    setImage(response[0].fields.image_url.stringValue);
    setDescription(response[0].fields.description.stringValue);
  };

  useEffect(() => {
    // check if user is signed in
    if (!isSignedIn()) {
      navigate("/");
    }

    displayProjects();
  }, []);

  if (!project) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="editWraper" key={project.name}>
        <div id="editImage" className="editForm">
          <label htmlFor="editImage" className="label">
            Image
          </label>
          <input
            className="editImage"
            type="text"
            id="editImage"
            name="editImage"
            alt="Editing image"
            value={image}
            onChange={(ev) => setImage(ev.target.value)}
          />
        </div>

        <div id="editHeadlines" className="editForm">
          <label htmlFor="editHeadline" className="label">
            Name
          </label>
          <input
            type="text"
            id="editHeadline"
            name="editHeadline"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>

        <div id="editDescription" className="editForm">
          <label htmlFor="editDescription" className="label">
            Description
          </label>
          <textarea
            name="editDescription"
            style={{ height: '200px' }}
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          ></textarea>
        </div>
      </div>

      <div id="editSubmitBtn">
        <button className="editSubmitBtn" type="submit">
          Submit
        </button>
      </div>
    </>
  );
};
