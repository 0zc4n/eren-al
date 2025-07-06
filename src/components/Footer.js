import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Albeniz Web Tasarım</h3>
            <p>Küçük işletmelere modern ve profesyonel web siteleri tasarlıyoruz. Dijital varlığınızı güçlendirmek için buradayız.</p>
          </div>
          
          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Ana Sayfa</button></li>
              <li><button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Projelerimiz</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Hakkımızda</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>İletişim</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Hizmetlerimiz</h4>
            <ul>
              <li>Web Sitesi Tasarımı</li>
              <li>Mobil Uyumluluk</li>
              <li>SEO Optimizasyonu</li>
              <li>Hızlı Teslim</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>İletişim</h4>
            <div className="contact-info">
              <p>📧 <a href="mailto:albenizcreativeagency@gmail.com" style={{color:'#b0b0b0', textDecoration:'none'}}>albenizcreativeagency@gmail.com</a></p>
              <p>📱 <a href="tel:+905375939305" style={{color:'#b0b0b0', textDecoration:'none'}}>+90 537 593 93 05</a></p>
              <p>📍 İstanbul, Türkiye</p>
            </div>
            <div className="social-links">
              <a href="https://wa.me/905375939305" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                WhatsApp
              </a>
              <a href="https://instagram.com/albenizcreativeagency" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                Instagram
              </a>
              <a href="https://linkedin.com/company/albeniz" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Albeniz Creative Agency. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 