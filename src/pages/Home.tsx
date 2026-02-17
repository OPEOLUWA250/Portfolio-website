import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => {
        const newIndex = (prev + 1) % 3;
        if (newIndex === 0) {
          setCycleCount((c) => c + 1);
        }
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = ["Web Developer", "Web Designer", "Creative"];

  // Determine direction based on cycle count
  // Even cycles: UP, UP, DOWN
  // Odd cycles: DOWN, DOWN, UP
  const isEvenCycle = cycleCount % 2 === 0;
  const getAnimation = (roleIndex: number) => {
    if (roleIndex === 2) {
      // Last role always opposite of the first two
      return isEvenCycle ? "fadeInDown" : "fadeInUp";
    }
    // First two roles
    return isEvenCycle ? "fadeInUp" : "fadeInDown";
  };

  return (
    <section
      id="home"
      style={{
        backgroundImage: "url('/Image/bg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
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
      onMouseMove={(e) => {
        const section = e.currentTarget;
        const rect = section.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const moveX = (x - 0.5) * 10;
        const moveY = (y - 0.5) * 10;
        section.style.backgroundPosition = `calc(center + ${moveX}px) calc(center + ${moveY}px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundPosition = "center";
      }}
    >
      {/* Overlay - Removed */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
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
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(36, 208, 198, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(36, 208, 198, 0.8);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        .scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        @media (max-width: 768px) {
          #home > div {
            align-items: center !important;
            text-align: center !important;
            paddingLeft: "clamp(8px, 3vw, 30px)" !important;
            paddingRight: "clamp(8px, 3vw, 30px)" !important;
          }
          #home h1 {
            align-items: center !important;
            text-align: center !important;
          }
          #home > div > div:nth-of-type(1) {
            align-items: center !important;
            justify-content: center !important;
          }
          #home > div > div:last-of-type {
            justify-content: center !important;
          }
        }
        @media (min-width: 769px) {
          #home > div {
            align-items: flex-start !important;
            text-align: left !important;
          }
          #home h1 {
            width: min(100%, 350px) !important;
            align-items: center !important;
            text-align: center !important;
            margin: 0 auto 16px 0 !important;
          }
          #home > div > div:nth-of-type(1) {
            width: min(100%, 350px) !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 auto 32px 0 !important;
          }
          #home > div > div:last-of-type {
            width: min(100%, 350px) !important;
            justify-content: center !important;
            margin: 0 auto 0 0 !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "90rem",
          width: "100%",
          paddingLeft: "clamp(8px, 3vw, 200px)",
          paddingRight: "clamp(8px, 3vw, 100px)",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <h1
          className="floating"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            fontWeight: "500",
            color: "#FFFFFF",
            marginBottom: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}>
            Hello, I'm
          </span>
          <span style={{ color: "#FFFFFF" }}>Opeoluwa</span>
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "32px",
            fontSize: "clamp(24px, 6vw, 48px)",
            fontWeight: "700",
            height: "auto",
            minHeight: "60px",
            position: "relative",
            alignItems: "center",
          }}
        >
          {currentRoleIndex === 0 && (
            <span
              key={`role-${currentRoleIndex}-${cycleCount}`}
              style={{
                color: "#24D0C6",
                animation: `${getAnimation(0)} 0.6s ease-out forwards`,
                whiteSpace: "nowrap",
              }}
            >
              {roles[0]}
            </span>
          )}
          {currentRoleIndex === 1 && (
            <span
              key={`role-${currentRoleIndex}-${cycleCount}`}
              style={{
                color: "#24D0C6",
                animation: `${getAnimation(1)} 0.6s ease-out forwards`,
                whiteSpace: "nowrap",
              }}
            >
              {roles[1]}
            </span>
          )}
          {currentRoleIndex === 2 && (
            <span
              key={`role-${currentRoleIndex}-${cycleCount}`}
              style={{
                color: "#24D0C6",
                animation: `${getAnimation(2)} 0.6s ease-out forwards`,
                whiteSpace: "nowrap",
              }}
            >
              {roles[2]}
            </span>
          )}
        </div>

        <button
          onClick={handleExplore}
          className="scale-in"
          style={{
            padding: "clamp(8px, 2vw, 10px) clamp(40px, 8vw, 120px)",
            backgroundColor: "#24D0C6",
            color: "#000000",
            fontWeight: "700",
            border: "none",
            borderRadius: "0",
            cursor: "pointer",
            fontSize: "clamp(13px, 2.5vw, 16px)",
            transition: "all 0.3s",
            marginBottom: "24px",
            width: "min(100%, 350px)",
            maxWidth: "100%",
            display: "block",
            margin: "0 0 24px 0",
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
          SEE MY WORK
        </button>

        {/* Social Icons */}
        <div
          className="scale-in"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
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
