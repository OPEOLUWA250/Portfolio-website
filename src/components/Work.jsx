import React from "react";

function Work() {
  const works = [
    {
      image: "/Image/work/UYE-website.png",
      title: "Uncover Your Essence",
      link: "http://uncoveryouressence.com/",
      delay: "200",
    },
    {
      image: "/Image/work/Sparrow-Hair.png",
      title: "Sparrow Hair Studio",
      link: "http://sparrowhairstudio.com/",
      delay: "200",
    },
    {
      image: "/Image/work/Beals.png",
      title: "Keonte Beals",
      link: "https://www.keontebeals.com/",
      delay: "200",
    },
    {
      image: "/Image/work/Hiitach.png",
      title: "Hiitach",
      link: "https://opeoluwa250.github.io/Hiitach/",
      delay: "400",
    },
    {
      image: "/Image/work/Tin-Dog.png",
      title: "Tin Dog",
      link: "https://opeoluwa250.github.io/Tin-dog/",
      delay: "400",
    },
    {
      image: "/Image/work/Railsware.png",
      title: "Railsware",
      link: "https://opeoluwa250.github.io/Railsware-contact-page/",
      delay: "400",
    },
  ];

  return (
    <section className="work" id="work">
      <div className="title">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Work
        </h2>
      </div>
      <div className="content">
        {works.map((work, index) => (
          <div
            key={index}
            className="card"
            data-aos={
              [
                "fade-right",
                "fade-up",
                "fade-left",
                "fade-right",
                "fade-up",
                "fade-left",
              ][index]
            }
            data-aos-duration="1000"
            data-aos-delay={work.delay}
          >
            <div className="card-img">
              <img src={work.image} alt={work.title} />
            </div>
            <p className="card-title">{work.title}</p>
            <a
              href={work.link}
              className="card-btn"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              Check it out
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
