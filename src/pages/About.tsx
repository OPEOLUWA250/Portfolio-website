const About = () => {
  return (
    <section
      id="about"
      className="bg-primary flex items-center justify-center scale-in"
      style={{
        paddingTop: "clamp(80px, 15vw, 120px)",
        paddingBottom: "clamp(60px, 10vw, 90px)",
        minHeight: "auto",
      }}
    >
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        <h2
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          style={{ color: "#24D0C6", marginBottom: "clamp(24px, 5vw, 48px)" }}
        >
          About Me
        </h2>
        <div
          className="text-center"
          style={{ marginBottom: "clamp(32px, 8vw, 48px)" }}
        >
          <h3
            className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-light"
            style={{ marginBottom: "clamp(20px, 5vw, 32px)" }}
          >
            Hey There! I am <span style={{ color: "#24D0C6" }}>dev</span>
            opeoluwa
          </h3>
          <p
            className="text-sm sm:text-base text-light text-justify leading-relaxed"
            style={{ marginBottom: "clamp(16px, 4vw, 24px)" }}
          >
            I create visually compelling digital experiences using{" "}
            <span style={{ color: "#24D0C6" }}>modern web technologies</span>,
            ensuring that every interaction is intuitive and responsive across
            devices.{" "}
            <span style={{ color: "#24D0C6" }}>
              From planning to deployment
            </span>
            , I handle every detail with care.
          </p>
          <p
            className="text-sm sm:text-base text-light text-justify leading-relaxed"
            style={{ marginBottom: "clamp(32px, 8vw, 48px)" }}
          >
            I specialize in{" "}
            <span style={{ color: "#24D0C6" }}>web and mobile design</span>,
            user interface development, and bringing ideas to life through clean
            code and seamless layouts. Whether it's crafting{" "}
            <span style={{ color: "#24D0C6" }}>
              portfolio websites, e-commerce pages, or dashboards
            </span>
            , I ensure they are optimized, engaging, and user-friendly. With a
            focus on consistency and accessibility, I build solutions that
            resonate with real people and{" "}
            <span style={{ color: "#24D0C6" }}>solve real problems</span>.
          </p>
        </div>
        <a href="#work">
          <button
            className="scale-in"
            style={{
              padding: "clamp(6px, 1.5vw, 8px) clamp(40px, 15vw, 130px)",
              backgroundColor: "#24D0C6",
              color: "#000000",
              fontWeight: "700",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "clamp(13px, 2vw, 16px)",
              transition: "all 0.3s",
              display: "block",
              margin: "0 auto 24px auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.animation = "bounce 0.6s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#24D0C6";
              e.currentTarget.style.animation = "none";
            }}
          >
            SEE MORE
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
