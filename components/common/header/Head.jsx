import React from "react";
import './header.css'; // Ensure to import the CSS file

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <img src="/images/logo.jpeg" alt="Logo" className="logo-img" />
            <h1 className="logo-title">MELODIA</h1>
          </div>
          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
