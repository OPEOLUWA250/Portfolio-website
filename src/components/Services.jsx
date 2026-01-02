import React from "react";

function Services() {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description:
        "I build fast, responsive websites using React, combining clean design with smooth user experience. From simple pages to full web apps, I deliver modern, scalable solutions that work beautifully on any device.",
    },
    {
      icon: "fas fa-laptop",
      title: "Web Design",
      description:
        "I design responsive websites using Wix and Square, focusing on clean layouts and intuitive user experiences. I ensure sites are visually appealing, mobile-friendly, and optimized for all devices, creating a seamless experience for your audience.",
    },
    {
      icon: "fas fa-file-code",
      title: "Geospatial Development",
      description:
        "I specialize in geospatial development using ArcGIS, QGIS, and Google Earth Engine to create interactive maps and spatial data solutions. I focus on turning complex data into clear, actionable insights for various applications like environmental analysis and urban planning.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="title">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Services
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          I design responsive websites that are fast, modern, and easy to use.
          With tools like <span>React</span> and <span>Wix</span>, I create
          clean layouts that reflect your brand and engage your audience. <br />
          From idea to launch, I build <span>functional designs</span> that work
          across all devices. Whether you need a <span>new site</span> or a
          <span>redesign</span>, I make the web work for <span>you</span>.
        </p>
      </div>
      <div className="content">
        {services.map((service, index) => (
          <div
            key={index}
            className="card"
            data-aos={["fade-right", "fade-up", "fade-left"][index]}
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <div className="info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
