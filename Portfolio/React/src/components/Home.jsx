import React from 'react';
import { Navbar } from './Navbar';

export function Home() {
  return (
    <div id="home">
      <Navbar />

      <section className="homeContainer">
        <div className="homeSectionCenter">
          <h1>Hi, my name is</h1>
        </div>

        <div className="homeSectionCenter">
          <h2 className="bigHeader">Julia Panchuk</h2>
        </div>

        <div className="homeSectionCenter">
          <h3 className="bigHeader">
            I am passionate Full stack developer with focus on Front end.
          </h3>
        </div>

        <div className="homeSectionCenter">
          <p>
            I am looking for an opportunity to enhance my skills, offering solid competence and
            value to the team while developing personal growth.
          </p>
        </div>
        <div className="contactLink">
          <a
            className="contactLink"
            href="https://www.linkedin.com/in/julia-panchuk/"
            target="_blank"
            rel="noreferrer"
          >
            Contact me
          </a>
        </div>
      </section>
    </div>
  );
}
