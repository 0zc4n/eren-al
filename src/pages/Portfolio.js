import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Restoran Web Sitesi",
      category: "ecommerce",
      description: "Modern ve kullanıcı dostu restoran web sitesi. Menü, rezervasyon sistemi ve online sipariş özellikleri.",
      image: "🍽️",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "E-ticaret Mağazası",
      category: "ecommerce",
      description: "Tam özellikli e-ticaret platformu. Ürün kataloğu, sepet sistemi ve güvenli ödeme entegrasyonu.",
      image: "🛒",
      technologies: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Kurumsal Web Sitesi",
      category: "corporate",
      description: "Profesyonel kurumsal web sitesi. Şirket profili, hizmetler ve iletişim sayfaları.",
      image: "🏢",
      technologies: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 4,
      title: "Blog Platformu",
      category: "blog",
      description: "Kişisel blog platformu. İçerik yönetimi, yorum sistemi ve SEO optimizasyonu.",
      image: "📝",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS"]
    },
    {
      id: 5,
      title: "Portföy Sitesi",
      category: "portfolio",
      description: "Yaratıcı portföy web sitesi. Proje galerisi ve animasyonlu geçişler.",
      image: "🎨",
      technologies: ["Vue.js", "GSAP", "Three.js"]
    },
    {
      id: 6,
      title: "Mobil Uygulama",
      category: "mobile",
      description: "Cross-platform mobil uygulama. iOS ve Android uyumlu.",
      image: "📱",
      technologies: ["React Native", "Firebase", "Redux"]
    }
  ];

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'ecommerce', label: 'E-ticaret' },
    { id: 'corporate', label: 'Kurumsal' },
    { id: 'blog', label: 'Blog' },
    { id: 'portfolio', label: 'Portföy' },
    { id: 'mobile', label: 'Mobil' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2>Projelerimiz</h2>
          <p>Tamamladığımız bazı projeler ve başarı hikayelerimiz</p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <button 
                    className="demo-btn locked"
                    disabled
                    title="Demo yakında aktif olacak"
                    style={{ cursor: 'not-allowed' }}
                  >
                    <span style={{marginRight: '8px'}}>🔒</span>Yakında
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <h3>Projenizi Hayata Geçirelim</h3>
          <p>Hayalinizdeki web sitesini birlikte tasarlayalım</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '24px' }}>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ücretsiz Danışmanlık
            </button>
            <a
              href="tel:+905375939305"
              className="btn btn-secondary"
              style={{ display: 'inline-block', textAlign: 'center' }}
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 