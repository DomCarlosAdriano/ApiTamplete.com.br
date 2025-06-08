import React, { useState } from "react";
import "./Header.css";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen){
    document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
  } else{
    document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
  }
  
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <span>
         <i className="fa-solid fa-cube"></i> ApiTemplate<span className="dot">.com.br</span>
          </span>
        </div>

        <div className="menu-container">
          {/* Menu Desktop */}
          <nav className="nav">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Docs</a>
            <a href="#">Support</a>
            <a href="#">Login</a>
          </nav>

          {/* Get Started */}
          <div className="get-started">
            <button>Cadastre-se Agora</button>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Support</a>
          <a href="#">Login</a>
          <button>Cadastre-se Agora</button>
        </div>
      )}
    </header>
  );
}
