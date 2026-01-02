import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isSticky ? "sticky" : ""}>
      <a href="" className="brand" data-aos="zoom-in" data-aos-duration="1000">
        <span>dev</span>opeoluwa
      </a>
      <div
        className={`menu-btn ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <div className={`navigation ${isMenuOpen ? "active" : ""}`}>
        <a
          href="#main"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#about"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          onClick={closeMenu}
        >
          About
        </a>
        <a
          href="#skills"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          onClick={closeMenu}
        >
          Skills
        </a>
        <a
          href="#services"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="#work"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          onClick={closeMenu}
        >
          Work
        </a>
        <a
          href="#contact"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          onClick={closeMenu}
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
