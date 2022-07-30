import React from 'react';
import { Link } from 'react-router-dom';

export function Home () {
  return (
    <div id="home">
      <nav>
        <ul className="navList">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="logIn">Admin</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <p className="nameText">YULIIA PANCHUK</p>
        <p className="devText">
          FRONT-END <br /> DEVELOPER
        </p>
      </div>
    </div>
  );
};
