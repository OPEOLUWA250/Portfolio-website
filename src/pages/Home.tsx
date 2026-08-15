import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const handleExplore = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        backgroundColor: "#0A1A2F",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        paddingLeft: "clamp(16px, 5vw, 24px)",
        paddingRight: "clamp(16px, 5vw, 24px)",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.35;
          }
        }
        .scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        @media (max-width: 768px) {
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-cta-row {
            justify-content: center;
          }
        }
      `}</style>

      <div
        className="hero-content"
        style={{
          maxWidth: "640px",
          width: "100%",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          margin: "0 auto",
        }}
      >
        <div
          className="scale-in"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "999px",
            border: "1px solid rgba(36, 208, 198, 0.3)",
            backgroundColor: "rgba(36, 208, 198, 0.08)",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#24D0C6",
              animation: "pulse 2s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          <span
            className="text-xs font-heading"
            style={{
              color: "#24D0C6",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Available for new projects
          </span>
        </div>

        <h1
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}
        >
          I turn ideas into fast, modern websites{" "}
          <span style={{ color: "#24D0C6" }}>built to perform.</span>
        </h1>

        <p
          className="scale-in text-sm sm:text-base"
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.6,
            maxWidth: "480px",
            marginBottom: "28px",
          }}
        >
          I design and build fast, accessible websites — from portfolios to
          e-commerce to dashboards — with clean code and real attention to
          detail.
        </p>

        <div
          className="hero-cta-row"
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "28px",
          }}
        >
          <button
            onClick={handleContact}
            className="scale-in text-sm sm:text-base font-bold"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "clamp(8px, 2vw, 10px) clamp(28px, 6vw, 48px)",
              backgroundColor: "#24D0C6",
              color: "#000000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s",
              boxSizing: "border-box",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.animation = "bounce 0.6s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#24D0C6";
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.animation = "none";
            }}
          >
            LET'S TALK
            <FaArrowRight size={13} />
          </button>

          <button
            onClick={handleExplore}
            className="scale-in text-sm sm:text-base font-bold"
            style={{
              padding: "clamp(8px, 2vw, 10px) clamp(28px, 6vw, 48px)",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s",
              boxSizing: "border-box",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#24D0C6";
              e.currentTarget.style.color = "#24D0C6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            SEE MY WORK
          </button>
        </div>

        {/* Social Icons */}
        <div
          className="scale-in"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "flex-start",
            animationDelay: "0.2s",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.linkedin.com/in/opeoluwa-adejumo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#24D0C6",
              fontSize: "28px",
              transition: "all 0.3s",
              padding: "8px",
              borderRadius: "50%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(36, 208, 198, 0.8)";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#24D0C6";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/devopeoluwa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#24D0C6",
              fontSize: "28px",
              transition: "all 0.3s",
              padding: "8px",
              borderRadius: "50%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(36, 208, 198, 0.8)";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#24D0C6";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/devopeoluwa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#24D0C6",
              fontSize: "28px",
              transition: "all 0.3s",
              padding: "8px",
              borderRadius: "50%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(36, 208, 198, 0.8)";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#24D0C6";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/OPEOLUWA250"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#24D0C6",
              fontSize: "28px",
              transition: "all 0.3s",
              padding: "8px",
              borderRadius: "50%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(36, 208, 198, 0.8)";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#24D0C6";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
