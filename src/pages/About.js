import React from 'react';
import './About.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "SEO", level: 75 }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Kalite Odaklı",
      description: "Her projede en yüksek kaliteyi hedefliyoruz."
    },
    {
      icon: "⚡",
      title: "Hızlı Teslim",
      description: "Projelerinizi zamanında teslim ediyoruz."
    },
    {
      icon: "🤝",
      title: "Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti bizim önceliğimizdir."
    },
    {
      icon: "💡",
      title: "Yenilikçi Çözümler",
      description: "Modern teknolojilerle yaratıcı çözümler üretiyoruz."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2>Hakkımızda</h2>
          <p>Dijital dünyada işinizi büyütmek için buradayız</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Biz Kimiz?</h3>
            <p>
              Albeniz Web Tasarım olarak, 2020 yılından bu yana küçük ve orta ölçekli işletmelerin 
              dijital dönüşümüne öncülük ediyoruz. Modern web teknolojileri ve yaratıcı tasarım 
              anlayışımızla, her projeye özel çözümler üretiyoruz.
            </p>
            <p>
              Ekibimiz, deneyimli geliştiriciler ve tasarımcılardan oluşuyor. Her birimiz, 
              kendi alanında uzmanlaşmış ve sürekli kendini geliştiren profesyonelleriz. 
              Müşterilerimizin ihtiyaçlarını anlayarak, kullanıcı dostu, hızlı ve SEO uyumlu 
              web siteleri geliştiriyoruz.
            </p>
            <p>
              Amacımız, işletmenizi dijital dünyada öne çıkarmak ve müşterilerinizle güçlü 
              bağlar kurmanızı sağlamak. Her proje, bizim için sadece bir web sitesi değil, 
              işletmenizin dijital kimliğidir.
            </p>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">👥</span>
                <p>Profesyonel Ekip</p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3>Değerlerimiz</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3>Ekibimiz</h3>
          <Slider
            className="team-slider"
            dots={true}
            infinite={true}
            speed={1200}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3500}
            pauseOnHover={true}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 600, settings: { slidesToShow: 1 } }
            ]}
          >
            <div className="team-member">
              <div className="member-avatar">
                <img src="/eren.jpg" alt="Eren Albeniz" className="profile-avatar" />
              </div>
              <h4>Eren Albeniz</h4>
              <p className="member-role">Project Leader</p>
              <p className="member-description">
                Yaratıcı çözümler, yazılım geliştirme ve ekip koordinasyonunda deneyimli. Proje lideri ve stratejist.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="/ozcan.jpg" alt="Özcan Albeniz" className="profile-avatar" />
              </div>
              <h4>Özcan Albeniz</h4>
              <p className="member-role">Project Leader</p>
              <p className="member-description">
                Proje yönetimi, müşteri ilişkileri ve modern web teknolojilerinde uzman. Takım lideri ve vizyoner.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="/ziyahan.jpeg" alt="Ziyahan Albeniz" className="profile-avatar" />
              </div>
              <h4>Ziyahan Albeniz</h4>
              <p className="member-role">Software Developer</p>
              <p className="member-description">
                Web ve mobil uygulama geliştirme, modern yazılım teknolojileri, yapay zeka ve takım çalışmasında yetkin. Kod kalitesine ve yenilikçiliğe önem veren, ekibimizin en yeni ve dinamik yazılım geliştiricisi.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="/fatma.jpg" alt="Fatma Albeniz" className="profile-avatar" />
              </div>
              <h4>Fatma Albeniz</h4>
              <p className="member-role">UI/UX Designer</p>
              <p className="member-description">
                Kullanıcı odaklı arayüz tasarımı, görsel estetik ve deneyim geliştirme konularında uzman. Ekibimizin yaratıcı ve detaycı tasarımcısı.
              </p>
            </div>
          </Slider>
        </div>

        <div className="about-cta">
          <h3>Projenizi Hayata Geçirelim</h3>
          <p>Hayalinizdeki web sitesini birlikte tasarlayalım</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 