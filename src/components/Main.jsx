import React from "react";

function Main() {
  return (
    <section className="main" id="main">
      <div className="content">
        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
          Hello, I'm <br />
          <span>Opeoluwa</span>
        </h2>
        <div
          className="animated-text"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="900"
        >
          <h3>Web Developer</h3>
          <h3>Web Designer</h3>
          <h3>Creative</h3>
        </div>
        <a
          href="#work"
          className="btn"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          See My Work
        </a>
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
      </div>
    </section>
  );
}

export default Main;
