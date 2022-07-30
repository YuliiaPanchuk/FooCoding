import React from 'react';
import { Image } from '../Image';

export function About () {
  return (
    <div id="about">
      <div className="aboutContent">
        <div className="bioText">
          <p className="aboutHeadline"> {'<h1> ABOUT ME </h1>'}</p>
          <p className="aboutText">
            I am a full-stack developer student with a goal to gain industry experience in building
            websites and web applications. I specialize in HTML, CSS, JavaScript, React and have
            some knowledge of C#, and C++. I am looking forward to integrate into the IT working
            industry and implement my knowledge into real working projects. Also, I have a "hunger"
            to learn new things, programs, etc. to extend my knowledge.
          </p>
        </div>

        <div className="bioImage">
          <Image />
        </div>
      </div>
    </div>
  );
};
