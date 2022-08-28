import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Admin.css';
import { isSignedIn } from '../api/account';
import { fetchProjects } from '../api/project';

export function Admin() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const displayProjects = async () => {
    const response = await fetchProjects();

    setProjects(response);
  };

  useEffect(() => {
    // check if user is signed in
    if (!isSignedIn()) {
      navigate('/');
    }

    displayProjects();
  }, []);

  function deleteProduct() {}

  return (
    <div className="tableWrapper">
      <h2 className="headerText">Projects</h2>

      <div id="addBtn">
        <Link to="/admin/projects/add">
          <button className="addBtn">Add project</button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr className="tableHeader">
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Link to the project</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((projectItem, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img className="dataImage" src={projectItem.image_url} alt="prodImg" />
                </td>
                <td className="dataName">{projectItem.name}</td>
                <td className="dataDescription">{projectItem.description}</td>
                <td>{projectItem.link}</td>
                <td>
                  <Link to={`/admin/projects/edit/${projectItem.name}`}>
                    <i className="fa-solid fa-pen"></i>
                  </Link>
                  <a href="#" onClick={deleteProduct}>
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
