import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="vertical">
        <div className="social-icons">
          <a href="https://twitter.com/tcbestepe">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="https://www.facebook.com/tcbestepe">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="https://www.instagram.com/tcbestepe/">
            <i className="fab fa-instagram fa-2x" />
          </a>
          <a href="https://www.youtube.com/c/tcbestepe">
            <i className="fab fa-youtube fa-2x" />
          </a>
        </div>
        <div className="copyright">© Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Footer;
