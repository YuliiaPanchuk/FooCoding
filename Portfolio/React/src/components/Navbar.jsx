import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
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
  );
}
