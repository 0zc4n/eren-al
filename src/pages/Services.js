import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "🖥️",
      title: "Web Sitesi Tasarımı",
      description: "Modern ve kullanıcı dostu web siteleri tasarlıyoruz. Responsive tasarım ile tüm cihazlarda mükemmel görünüm.",
      features: [
        "Responsive Tasarım",
        "Modern UI/UX",
        "Hızlı Yükleme",
        "SEO Optimizasyonu",
        "İçerik Yönetimi",
        "Teknik Destek"
      ],
      price: "₺5,000'den başlayan"
    },
    {
      icon: "📱",
      title: "Mobil Uyumluluk",
      description: "Mevcut web sitenizi mobil cihazlara uyumlu hale getiriyoruz. Kullanıcı deneyimini her platformda optimize ediyoruz.",
      features: [
        "Mobil Optimizasyon",
        "Touch-Friendly Tasarım",
        "Hızlı Mobil Yükleme",
        "Mobil SEO",
        "Cross-Platform Uyumluluk",
        "Mobil Test"
      ],
      price: "₺2,000'den başlayan"
    },
    {
      icon: "🔍",
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer almanızı sağlıyoruz. Organik trafiğinizi artırıyoruz.",
      features: [
        "Anahtar Kelime Analizi",
        "On-Page SEO",
        "Teknik SEO",
        "İçerik Optimizasyonu",
        "Backlink Stratejisi",
        "SEO Raporlama"
      ],
      price: "₺1,500'den başlayan"
    },
    {
      icon: "⚡",
      title: "Hızlı Teslim",
      description: "Acil projeleriniz için hızlı teslim seçeneği. Kaliteden ödün vermeden hızlıca tamamlıyoruz.",
      features: [
        "7-14 Gün Teslim",
        "Öncelikli Destek",
        "Hızlı Revizyon",
        "7/24 İletişim",
        "Garantili Teslim",
        "Ücretsiz Bakım"
      ],
      price: "₺8,000'den başlayan"
    },
    {
      icon: "🛒",
      title: "E-ticaret Çözümleri",
      description: "Tam özellikli e-ticaret siteleri. Ürün yönetimi, ödeme sistemi ve stok takibi.",
      features: [
        "Ürün Kataloğu",
        "Sepet Sistemi",
        "Ödeme Entegrasyonu",
        "Stok Yönetimi",
        "Sipariş Takibi",
        "Müşteri Paneli"
      ],
      price: "₺10,000'den başlayan"
    },
    {
      icon: "📊",
      title: "Web Bakım & Destek",
      description: "Web sitenizin sürekli güncel ve güvenli kalması için bakım ve destek hizmetleri.",
      features: [
        "Güvenlik Güncellemeleri",
        "Yedekleme",
        "Performans İzleme",
        "Teknik Destek",
        "İçerik Güncelleme",
        "Aylık Raporlar"
      ],
      price: "₺500/ay"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Görüşme & Analiz",
      description: "İhtiyaçlarınızı dinliyor ve projenizi analiz ediyoruz."
    },
    {
      step: "02",
      title: "Tasarım & Planlama",
      description: "Modern tasarım konseptleri ve detaylı proje planı hazırlıyoruz."
    },
    {
      step: "03",
      title: "Geliştirme",
      description: "En son teknolojilerle web sitenizi geliştiriyoruz."
    },
    {
      step: "04",
      title: "Test & Optimizasyon",
      description: "Kapsamlı testler ve performans optimizasyonu yapıyoruz."
    },
    {
      step: "05",
      title: "Teslim & Eğitim",
      description: "Projenizi teslim ediyor ve kullanım eğitimi veriyoruz."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Hizmetlerimiz</h2>
          <p>İşinizi dijital dünyada büyütmek için sunduğumuz kapsamlı hizmetler</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>Özellikler:</h4>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-price">
                <span className="price">{service.price}</span>
              </div>
              
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Teklif Alın
              </button>
            </div>
          ))}
        </div>

        {/* <div className="process-section">
          <h3>Çalışma Sürecimiz</h3>
          <div className="process-grid">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="services-cta">
          <h3>Projenizi Hayata Geçirelim</h3>
          <p>Hangi hizmete ihtiyacınız olduğunu söyleyin, size özel çözümler sunalım</p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ücretsiz Danışmanlık
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => window.open('tel:+905551234567', '_self')}
            >
              Hemen Ara
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services; 