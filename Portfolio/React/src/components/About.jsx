import React from 'react';

export function About() {
  return (
    <section id="about">
      <h2 className="numberedHeader">About me</h2>
      <div className="aboutContent">
        <div className="bioText">
          <p className="aboutText">
            My interest in web development started back in 2020 when I moved to Sweden and switched
            my career from a Customer Support Agent to a Frontend developer. <br /> <br /> I am
            currently working on my final project at FooCoding where I use{' '}
            <span>HTML, CSS, JavaScript, Typescript, React, and Firebase</span>. <br /> <br />{' '}
            Furthermore, I am familiar with <span>Node.js, JSON, Express, Git, C#, and C++</span>.
            My goal is to DEVELOP applications that will make an impact on the world. I am EAGER to
            develop my current skills and GAIN new knowledge. <br />
            <br /> I'm not a pro yet, but my goal is to become one.
          </p>
        </div>

        <div className="bioImage">
          <img className="profileImage" src={require('../images/profileImage.jpg')} alt="" />
        </div>
      </div>
    </section>
  );
}
