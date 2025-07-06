import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "E-posta",
      value: "albenizcreativeagency@gmail.com",
      link: "mailto:albenizcreativeagency@gmail.com"
    },
    {
      icon: "📱",
      title: "Telefon",
      value: "+90 537 593 93 05",
      link: "tel:+905375939305"
    },
    {
      icon: "📍",
      title: "Adres",
      value: "İstanbul, Türkiye",
      link: "https://maps.google.com"
    },
    {
      icon: "🕒",
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cuma: 09:00 - 18:00"
    }
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/905375939305?text=Merhaba%2C%20web%20sitenizden%20ulaşıyorum.",
      color: "#25d366"
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/albenizcreativeagency",
      color: "#e4405f"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/eren-albeniz-8aa9a532b/",
      color: "#0077b5"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>İletişim</h2>
          <p>Projenizi hayata geçirmek için bizimle iletişime geçin</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3>İletişim Bilgilerimiz</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links-section">
              <h4>Sosyal Medya</h4>
              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Mesaj Gönderin</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+90 555 123 45 67"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Konu *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Konu seçin</option>
                    <option value="web-tasarim">Web Sitesi Tasarımı</option>
                    <option value="mobil-uyumluluk">Mobil Uyumluluk</option>
                    <option value="seo">SEO Optimizasyonu</option>
                    <option value="e-ticaret">E-ticaret Çözümleri</option>
                    <option value="bakim">Web Bakım & Destek</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Hemen Başlayalım</h3>
          <p>Ücretsiz danışmanlık için hemen arayın</p>
          <div className="cta-buttons">
            <a href="tel:+905375939305" className="btn btn-primary">
              📞 Hemen Ara
            </a>
            <a href="https://wa.me/905375939305" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 