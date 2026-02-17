import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "clamp(20px, 5vw, 40px)",
            right: "clamp(20px, 5vw, 40px)",
            padding: "12px 16px",
            backgroundColor: "#24D0C6",
            border: "none",
            borderRadius: "50%",
            color: "#000000",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Poppins, sans-serif",
            transition: "all 0.3s",
            boxShadow: "0 4px 12px rgba(36, 208, 198, 0.3)",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(36, 208, 198, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#24D0C6";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(36, 208, 198, 0.3)";
          }}
          title="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
