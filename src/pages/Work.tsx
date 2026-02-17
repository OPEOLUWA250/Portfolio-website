const Work = () => {
  const projects = [
    {
      title: "Uncover Your Essence",
      image: "/Image/work/UYE-website.jpg",
      link: "http://uncoveryouressence.com/",
      tech: "Wix, Web Design",
    },
    {
      title: "Sparrow Hair Studio",
      image: "/Image/work/Sparrow-Hair.jpg",
      link: "http://sparrowhairstudio.com/",
      tech: "Wix, Web Design",
    },
    {
      title: "Keonte Beals",
      image: "/Image/work/Beals.jpg",
      link: "https://www.keontebeals.com/",
      tech: "React, Tailwind CSS",
    },
    {
      title: "Hiitach",
      image: "/Image/work/Hiitach.jpg",
      link: "https://opeoluwa250.github.io/Hiitach/",
      tech: "React, JavaScript",
    },
    {
      title: "Tin Dog",
      image: "/Image/work/Tin-Dog.jpg",
      link: "https://opeoluwa250.github.io/Tin-dog/",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Railsware",
      image: "/Image/work/Railsware.jpg",
      link: "https://opeoluwa250.github.io/Railsware-contact-page/",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <section
      id="work"
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
          My Work
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(clamp(250px, 80vw, 280px), 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
          }}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "rgba(36, 208, 198, 0.05)",
                  border: "1px solid rgba(36, 208, 198, 0.2)",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
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
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "clamp(150px, 40vw, 200px)",
                    objectFit: "cover",
                  }}
                />

                {/* Project Info */}
                <div
                  style={{
                    padding: "clamp(12px, 3vw, 16px)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    className="text-base sm:text-lg md:text-xl font-bold"
                    style={{ color: "#24D0C6", marginBottom: "8px" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-light"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "12px",
                      flex: 1,
                    }}
                  >
                    {project.tech}
                  </p>
                  <button
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#24D0C6",
                      color: "#000000",
                      fontWeight: "700",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "clamp(12px, 2vw, 14px)",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#24D0C6";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
