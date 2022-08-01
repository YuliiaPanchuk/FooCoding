import React from 'react';
import { Navbar } from './Navbar';

export function Home () {
  return (
    <div id="home">
      <Navbar />

      <div className="container">
        <p className="nameText">YULIIA PANCHUK</p>
        <p className="devText">
          FRONT-END <br /> DEVELOPER
        </p>
      </div>
    </div>
  );
};
