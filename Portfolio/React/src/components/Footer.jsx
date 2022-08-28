import React from 'react';

export function Footer() {
  return (
    <div className="footer">
      <p>Follow me</p>
      <div className="icons">
        <a href="https://github.com/YuliiaPanchuk" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/julia-panchuk/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
      </div>
      <small className="footerBottom">2022 Yuliia Panchuk</small>
    </div>
  );
}
