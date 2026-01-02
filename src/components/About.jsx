import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="title reveal">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About me
        </h2>
      </div>
      <div className="content">
        <div className="column col-right reveal">
          <h2
            className="content-title"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Hey There! I am <span>dev</span>opeoluwa
          </h2>
          <p
            className="paragraph-text"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            I create visually compelling digital experiences using
            <span>modern web technologies</span>, ensuring that every
            interaction is intuitive and responsive across devices.
            <span>From planning to deployment</span>, I handle every detail with
            care.
            <br />I specialize in <span>web and mobile design</span>, user
            interface development, and bringing ideas to life through clean code
            and seamless layouts. Whether it's crafting
            <span>portfolio websites, e-commerce pages, or dashboards</span>, I
            ensure they are optimized, engaging, and user-friendly. With a focus
            on consistency and accessibility, I build solutions that resonate
            with real people and <span>solve real problems</span>.
          </p>
          <a
            href="#work"
            className="btn about-btn"
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
