import { FaCode, FaPalette, FaGlobe } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "I build fast, responsive websites using React, combining clean design with smooth user experience. From simple pages to full web apps, I deliver modern, scalable solutions that work beautifully on any device.",
      icon: FaCode,
    },
    {
      title: "Web Design",
      description:
        "I design responsive websites using Wix and Square, focusing on clean layouts and intuitive user experiences. I ensure sites are visually appealing, mobile-friendly, and optimized for all devices.",
      icon: FaPalette,
    },
    {
      title: "Geospatial Development",
      description:
        "I specialize in geospatial development using ArcGIS, QGIS, and Google Earth Engine to create interactive maps and spatial data solutions. I focus on turning complex data into clear, actionable insights.",
      icon: FaGlobe,
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-primary flex items-center justify-center scale-in"
      style={{ paddingTop: "clamp(80px, 15vw, 120px)", paddingBottom: "40px" }}
    >
      <div
        className="max-w-6xl mx-auto px-6 w-full"
        style={{
          marginLeft: "clamp(10px, 3vw, 20px)",
          marginRight: "clamp(10px, 3vw, 20px)",
        }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          style={{ color: "#24D0C6", marginBottom: "clamp(24px, 5vw, 48px)" }}
        >
          My Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(clamp(250px, 80vw, 300px), 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                style={{
                  padding: "clamp(16px, 4vw, 24px)",
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  backgroundColor: "rgba(36, 208, 198, 0.05)",
                  border: "1px solid rgba(36, 208, 198, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(36, 208, 198, 0.4)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(36, 208, 198, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.backgroundColor =
                    "rgba(36, 208, 198, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.2)";
                }}
              >
                <Icon
                  style={{
                    fontSize: "clamp(36px, 8vw, 48px)",
                    color: "#24D0C6",
                    marginBottom: "clamp(12px, 3vw, 16px)",
                  }}
                />
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  style={{
                    color: "#24D0C6",
                    marginBottom: "clamp(8px, 2vw, 12px)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm sm:text-base text-light leading-relaxed"
                  style={{ color: "#FFFFFF" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
