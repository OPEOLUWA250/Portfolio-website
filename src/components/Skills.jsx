import React from "react";

function Skills() {
  const skills = [
    { name: "Javascript", percentage: "95%" },
    { name: "React", percentage: "90%" },
    { name: "Next.Js", percentage: "80%" },
    { name: "Wix", percentage: "85%" },
    { name: "Square", percentage: "80%" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="title">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Skills
        </h2>
      </div>
      <div className="content">
        <div className="column col-left">
          <h2
            className="content-title"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            My Skills and Experiences
          </h2>
          <div
            className="paragraph-text"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            I build responsive websites with <span>React</span>, creating
            dynamic, scalable interfaces using clean, maintainable code. <br />
            For modern, sleek designs, I use <span>Wix</span> and
            <span>Square</span> to deliver visually appealing, user-friendly
            sites. I prioritize seamless performance, intuitive navigation, and
            <span>mobile responsiveness</span>. <br />
            Whether starting from scratch or improving existing projects, I
            focus on <span>efficiency</span>, <span>consistency</span>, and
            <span>usability</span> bringing ideas to life through creative,
            <span>reliable front-end solutions</span>.
          </div>
          <a
            href="#work"
            className="btn"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            See more
          </a>
        </div>
        <div className="column col-right">
          {skills.map((skill, index) => (
            <div className="bar" key={index}>
              <div
                className="info"
                data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-delay={`${100 + index * 100}`}
              >
                <span>{skill.name}</span>
                <span>{skill.percentage}</span>
              </div>
              <div
                className={`line ${
                  ["html", "css", "javascript", "python", "php"][index]
                }`}
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay={`${140 + index * 100}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
