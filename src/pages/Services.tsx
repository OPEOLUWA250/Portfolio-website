import { FaCode, FaPalette, FaGlobe, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description:
        "I build cross-platform mobile apps for iOS and Android using React Native and Expo, with smooth native feel, offline support, and polished interfaces. From idea to app store, I ship apps people enjoy using every day.",
      icon: FaMobileAlt,
    },
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
      className="min-h-screen flex items-center justify-center scale-in"
      style={{
        backgroundColor: "#0A1A2F",
        paddingTop: "clamp(80px, 15vw, 120px)",
        paddingBottom: "40px",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <h2
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          style={{ color: "#24D0C6", marginBottom: "clamp(24px, 5vw, 48px)" }}
        >
          My Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(clamp(250px, 80vw, 420px), 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                style={{
                  padding: "clamp(20px, 4vw, 28px)",
                  borderRadius: "16px",
                  transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
                  cursor: "pointer",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
                  border: "1px solid rgba(182, 211, 209, 0.14)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 32px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(36, 208, 198, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(36, 208, 198, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.3)";
                  e.currentTarget.style.borderColor = "rgba(182, 211, 209, 0.14)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "clamp(52px, 10vw, 60px)",
                    height: "clamp(52px, 10vw, 60px)",
                    borderRadius: "50%",
                    backgroundColor: "rgba(36, 208, 198, 0.1)",
                    border: "1px solid rgba(36, 208, 198, 0.2)",
                    marginBottom: "clamp(16px, 4vw, 20px)",
                  }}
                >
                  <Icon
                    style={{
                      fontSize: "clamp(22px, 4vw, 26px)",
                      color: "#24D0C6",
                    }}
                  />
                </div>
                <h3
                  className="font-heading text-lg sm:text-xl md:text-2xl font-bold"
                  style={{
                    color: "#FFFFFF",
                    marginBottom: "clamp(8px, 2vw, 12px)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "rgba(255, 255, 255, 0.65)" }}
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
