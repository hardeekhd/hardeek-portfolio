import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import '../style.css'; // Import the style.css file

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    "About",
    "Education",
    "Projects",
    "Skills",
    "Certifications",
    "Achievements",
    "Contact",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span className="highlight">&lt;</span>
          <span>Hardeek</span>
          <span className="highlight-slash">/</span>
          <span>Khadilkar</span>
          <span className="highlight">&gt;</span>
        </div>

        {/* Desktop Navigation & Social Icons */}
        <div className="nav-social-container">
          {/* Navigation */}
          <nav className="nav">
            {navItems.map((item) => (
              <span
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav-item ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </span>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://github.com/hardeekhd"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/hardeek-khadilkar-0098681b7"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase());
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="mobile-menu-item"
            >
              {item}
            </div>
          ))}

          {/* Mobile Social Icons */}
          <div className="social-icons">
            <a
              href="https://github.com/hardeekhd"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/hardeek-khadilkar-0098681b7"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
