import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tuned and get the latest updates</h1>
            <span>one mail,more information</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <button className="send-btn"><i className="fa fa-paper-plane"></i></button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><i className="fa fa-map-marker"></i> 123 Street, City, Country</p>
            <p><i className="fa fa-phone"></i> +123 456 7890</p>
            <p><i className="fa fa-envelope"></i> melodia@company.com</p>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="legal">
          <p>&copy; 2024 Melodia. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
