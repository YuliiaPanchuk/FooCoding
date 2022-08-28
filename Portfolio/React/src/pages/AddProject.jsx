import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AddProject.css';
import { isSignedIn } from '../api/account';
import { createProject } from '../api/project';

export function AddProject() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageUrlRef = useRef(null);

  // check if user is signed in
  useEffect(() => {
    if (!isSignedIn()) {
      navigate('/');
    }
  }, []);

  async function addProject() {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const link = '';
    const imageUrl = imageUrlRef.current.value;

    const ok = await createProject(name, description, link, imageUrl);
    if (ok) {
      navigate('/admin');
    } else {
      alert('Failed to add project');
    }
  }

  return (
    <div id="addProjectF">
      <div className="addProjectF">
        <div className="addImage">
          <label htmlFor="addImage">Link to image</label>
          <input className="inputAddPro" type="text" ref={imageUrlRef} />
        </div>

        <div className="addName">
          <label htmlFor="">Project name</label>
          <input className="inputAddPro" type="text" ref={nameRef} />
        </div>

        <div className="addProjectDescr">
          <label htmlFor="projectDescribtion">Project description</label>
          <textarea name="projectDescribtion" id="projectDescribtion" ref={descriptionRef} />
        </div>

        <div id="saveBtn">
          <button className="saveBtn" type="submit" onClick={addProject}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
