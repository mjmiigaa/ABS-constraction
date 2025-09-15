import React, {useState} from "react";
import "./Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header_left">
        <a href="#home" className="logo">
          <img src="/public/assets/logo.png" alt="Logo" className="header_logo" />
           </a>
      </div>
          <button className="burger-menu" onClick={toggleMenu}>

          </button>
        <nav className={`header_nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => handleScroll("home")}>Home</a>
            </li>
            <li>
              <a href="#service" onClick={() => handleScroll("service")}>service</a>
            </li>
            <li>
              <a href="#project" onClick={() => handleScroll("project")}>project</a>
            </li>
            <li>
              <a href="#ceo-message" onClick={() => handleScroll("ceo-message")}>message</a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleScroll("contact")}>contact</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
