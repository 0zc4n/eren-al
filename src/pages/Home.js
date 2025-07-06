import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Modern Web Siteleri
              <span className="highlight"> Küçük İşletmeler İçin</span>
            </h1>
            <p className="hero-subtitle">
              Dijital varlığınızı güçlendirin. Profesyonel, hızlı ve mobil uyumlu web siteleri tasarlıyoruz.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projelerimizi Görün
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                İletişime Geçin
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-icon">💻</div>
              <h3>Modern Tasarım</h3>
              <p>Güncel trendlere uygun</p>
            </div>
            <div className="floating-card">
              <div className="card-icon">📱</div>
              <h3>Mobil Uyumlu</h3>
              <p>Tüm cihazlarda mükemmel</p>
            </div>
            <div className="floating-card">
              <div className="card-icon">⚡</div>
              <h3>Hızlı Teslim</h3>
              <p>7-14 gün içinde hazır</p>
            </div>
          </div>
        </div>
      </div>

      {/* Biz Kimiz Section */}
      <div className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Biz Kimiz?</h2>
              <p>
                Albeniz Web Tasarım olarak, küçük işletmelerin dijital dünyada güçlü bir varlık göstermelerini sağlıyoruz. 
                Modern teknolojiler ve yaratıcı tasarım anlayışımızla, her projeye özel çözümler üretiyoruz.
              </p>
              <p>
                Müşterilerimizin ihtiyaçlarını anlayarak, kullanıcı dostu, hızlı ve SEO uyumlu web siteleri geliştiriyoruz. 
                Amacımız, işletmenizi dijital dünyada öne çıkarmak ve müşterilerinizle güçlü bağlar kurmanızı sağlamak.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Tamamlanan Proje</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Müşteri Memnuniyeti</span>
                </div>
                <div className="stat">
                  <span className="stat-number">7-14</span>
                  <span className="stat-label">Gün Teslim</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">🎨</span>
                  <p>Web Tasarım</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hizmet Özeti */}
      <div className="services-preview">
        <div className="container">
          <h2>Neler Sunuyoruz?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Web Sitesi Tasarımı</h3>
              <p>Modern ve kullanıcı dostu web siteleri tasarlıyoruz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobil Uyumluluk</h3>
              <p>Tüm cihazlarda mükemmel görünüm sağlıyoruz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>SEO Optimizasyonu</h3>
              <p>Arama motorlarında üst sıralarda yer almanızı sağlıyoruz.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Hızlı Teslim</h3>
              <p>Projelerinizi kısa sürede teslim ediyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 