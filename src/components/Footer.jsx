import React from "react";

function Footer({ year }) {
  return (
    <footer className="footer">
      <span className="footer-title">Adejumo Opeoluwa</span>
      <div className="media-icons">
        <a
          href="https://www.linkedin.com/in/opeoluwa-adejumo/"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="1200"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/devopeoluwa/#"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="1300"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://x.com/devopeoluwa"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="1400"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/OPEOLUWA250"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="1500"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>
        Copyright @{new Date().getFullYear()} <a href="#">devopeoluwa</a>. All
        Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
