import React, { useState } from 'react';
import './Header.css';

const Header = ({ onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const goToAdmin = () => {
    onPageChange('admin');
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-text">
            <h1>ALBENIZ</h1>
            <span>CREATIVE AGENCY</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('home')}>Ana Sayfa</button></li>
            <li><button onClick={() => scrollToSection('portfolio')}>Projelerimiz</button></li>
            <li><button onClick={() => scrollToSection('about')}>Hakkımızda</button></li>
            <li><button onClick={() => scrollToSection('services')}>Hizmetlerimiz</button></li>
            <li><button onClick={() => scrollToSection('contact')}>İletişim</button></li>
          </ul>
        </nav>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 