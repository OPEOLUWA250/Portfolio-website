import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = ["Home", "About", "Skills", "Services", "Work", "Contact"];

  const handleNavClick = (item: string) => {
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          header {
            padding: clamp(15px, 4vw, 20px) clamp(12px, 4vw, 30px) !important;
          }
        }
        @media (min-width: 769px) {
          header {
            padding: clamp(15px, 4vw, 20px) clamp(40px, 8vw, 200px) !important;
          }
        }
      `}</style>
      <header
        style={{
          backgroundColor: "#0A1A2F",
          padding: "clamp(15px, 4vw, 20px) clamp(12px, 4vw, 30px)",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 50,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "80rem",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: "clamp(18px, 5vw, 28px)",
              fontWeight: "bold",
              display: "flex",
              gap: "0",
            }}
          >
            <span style={{ color: "#24D0C6" }}>DEV</span>
            <span style={{ color: "#FFFFFF" }}>OPEOLUWA</span>
          </div>

          {/* Desktop Navigation */}
          <div
            style={{
              display: !isMobile ? "flex" : "none",
              gap: "clamp(16px, 3vw, 32px)",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                style={{
                  color: "#FFFFFF",
                  cursor: "pointer",
                  fontWeight: "500",
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize: "clamp(13px, 2vw, 16px)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#24D0C6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: isMobile ? "block" : "none",
              color: "#FFFFFF",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ width: "24px", height: "24px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            style={{
              backgroundColor: "#0A1A2F",
              borderTop: "1px solid #24D0C6",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                maxWidth: "80rem",
                margin: "0 auto",
                padding: "16px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  style={{
                    color: "#FFFFFF",
                    width: "100%",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "8px 0",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#24D0C6")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#FFFFFF")
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
