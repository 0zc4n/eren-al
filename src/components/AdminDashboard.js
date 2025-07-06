import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ adminData, onLogout, onBackToSite }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [siteSettings, setSiteSettings] = useState({});
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [replyingToMessage, setReplyingToMessage] = useState(null);
  const [editingTeamMember, setEditingTeamMember] = useState(null);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messageFilter, setMessageFilter] = useState('all');
  const [projectForm, setProjectForm] = useState({
    name: '',
    client: '',
    status: 'Beklemede',
    progress: 0,
    description: '',
    startDate: ''
  });
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    status: 'Yeni'
  });
  const [replyForm, setReplyForm] = useState({
    subject: '',
    message: ''
  });
  const [teamForm, setTeamForm] = useState({
    name: '',
    position: '',
    role: 'Üye',
    email: '',
    phone: '',
    bio: '',
    photo: '',
    photoFile: null,
    skills: [],
    experience: '',
    education: '',
    hireDate: '',
    socialLinks: {
      linkedin: '',
      twitter: '',
      instagram: '',
      github: '',
      portfolio: ''
    }
  });
  const [settingsForm, setSettingsForm] = useState({
    siteInfo: {
      title: '',
      description: '',
      keywords: '',
      logo: ''
    },
    contact: {
      email: '',
      phone: '',
      address: '',
      workingHours: ''
    },
    socialMedia: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
      youtube: ''
    },
    seo: {
      googleAnalytics: '',
      metaDescription: '',
      ogImage: ''
    }
  });

  // LocalStorage'dan projeleri yükle
  useEffect(() => {
    const savedProjects = localStorage.getItem('adminProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // LocalStorage'dan mesajları yükle
  useEffect(() => {
    const savedMessages = localStorage.getItem('adminMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Demo mesajları yükle
      const demoMessages = [
        { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', subject: 'Proje Hakkında', message: 'Proje hakkında detaylı bilgi almak istiyorum. Fiyat teklifi de alabilir miyim?', status: 'Yeni', date: '2024-01-15', isRead: false },
        { id: 2, name: 'Ayşe Demir', email: 'ayse@example.com', subject: 'Fiyat Teklifi', message: 'Logo tasarımı için fiyat teklifi alabilir miyim? Proje detaylarını da paylaşabilirim.', status: 'Yanıtlandı', date: '2024-01-14', isRead: true },
        { id: 3, name: 'Mehmet Kaya', email: 'mehmet@example.com', subject: 'Proje Durumu', message: 'Mevcut projemizin durumu hakkında güncelleme alabilir miyim?', status: 'Yeni', date: '2024-01-13', isRead: false }
      ];
      setMessages(demoMessages);
      localStorage.setItem('adminMessages', JSON.stringify(demoMessages));
    }
  }, []);

  // LocalStorage'dan takım üyelerini yükle
  useEffect(() => {
    const savedTeam = localStorage.getItem('adminTeam');
    if (savedTeam) {
      setTeamMembers(JSON.parse(savedTeam));
    } else {
      // Demo takım üyelerini yükle
      const demoTeam = [
        { 
          id: 1, 
          name: 'Eren Albeniz', 
          position: 'Kurucu & CEO', 
          role: 'Yönetici',
          email: 'eren@albeniz.com', 
          phone: '+90 555 123 4567', 
          bio: '10+ yıllık deneyimle dijital dünyada yaratıcı çözümler üretiyoruz. Müşteri odaklı yaklaşım ve yenilikçi fikirlerle projeleri hayata geçiriyoruz.',
          photo: '/eren.jpg',
          skills: ['Stratejik Planlama', 'Proje Yönetimi', 'İş Geliştirme'],
          experience: '10+ yıl',
          education: 'İşletme Yönetimi',
          hireDate: '2020-01-15',
          socialLinks: {
            linkedin: 'https://linkedin.com/in/erenalbeniz',
            twitter: 'https://twitter.com/erenalbeniz',
            instagram: 'https://instagram.com/erenalbeniz',
            github: '',
            portfolio: 'https://erenalbeniz.com'
          }
        },
        { 
          id: 2, 
          name: 'Özcan Albeniz', 
          position: 'Tasarım Direktörü', 
          role: 'Yönetici',
          email: 'ozcan@albeniz.com', 
          phone: '+90 555 234 5678', 
          bio: 'Yaratıcı tasarım ve kullanıcı deneyimi konularında uzman. Modern tasarım trendlerini takip ederek etkileyici görsel çözümler üretiyor.',
          photo: '/ozcan.jpg',
          skills: ['UI/UX Tasarım', 'Grafik Tasarım', 'Branding'],
          experience: '8+ yıl',
          education: 'Grafik Tasarım',
          hireDate: '2020-03-20',
          socialLinks: {
            linkedin: 'https://linkedin.com/in/ozcanalbeniz',
            twitter: 'https://twitter.com/ozcanalbeniz',
            instagram: 'https://instagram.com/ozcanalbeniz',
            github: '',
            portfolio: 'https://ozcanalbeniz.com'
          }
        },
        { 
          id: 3, 
          name: 'Ziyahan Albeniz', 
          position: 'Geliştirici', 
          role: 'Uzman',
          email: 'ziyahan@albeniz.com', 
          phone: '+90 555 345 6789', 
          bio: 'Modern web teknolojileri ile yenilikçi çözümler geliştiriyor. Full-stack geliştirme konusunda deneyimli ve sürekli öğrenmeye odaklı.',
          photo: '/ziyahan.jpg',
          skills: ['React', 'Node.js', 'Python', 'MongoDB'],
          experience: '5+ yıl',
          education: 'Bilgisayar Mühendisliği',
          hireDate: '2021-06-10',
          socialLinks: {
            linkedin: 'https://linkedin.com/in/ziyahanalbeniz',
            twitter: 'https://twitter.com/ziyahanalbeniz',
            instagram: 'https://instagram.com/ziyahanalbeniz',
            github: 'https://github.com/ziyahanalbeniz',
            portfolio: 'https://ziyahanalbeniz.dev'
          }
        },
        { 
          id: 4, 
          name: 'Fatma Albeniz', 
          position: 'Pazarlama Uzmanı', 
          role: 'Uzman',
          email: 'fatma@albeniz.com', 
          phone: '+90 555 456 7890', 
          bio: 'Stratejik pazarlama ve marka yönetimi konularında deneyimli. Dijital pazarlama kampanyaları ve sosyal medya yönetimi uzmanı.',
          photo: '/fatma.jpg',
          skills: ['Dijital Pazarlama', 'Sosyal Medya', 'SEO', 'İçerik Yönetimi'],
          experience: '6+ yıl',
          education: 'Pazarlama',
          hireDate: '2021-09-15',
          socialLinks: {
            linkedin: 'https://linkedin.com/in/fatmaalbeniz',
            twitter: 'https://twitter.com/fatmaalbeniz',
            instagram: 'https://instagram.com/fatmaalbeniz',
            github: '',
            portfolio: 'https://fatmaalbeniz.com'
          }
        }
      ];
      setTeamMembers(demoTeam);
      localStorage.setItem('adminTeam', JSON.stringify(demoTeam));
    }
  }, []);

  // LocalStorage'dan site ayarlarını yükle
  useEffect(() => {
    const savedSettings = localStorage.getItem('adminSiteSettings');
    if (savedSettings) {
      setSiteSettings(JSON.parse(savedSettings));
    } else {
      // Demo site ayarlarını yükle
      const demoSettings = {
        siteInfo: {
          title: 'ALBENIZ Creative Agency',
          description: 'Yaratıcı dijital çözümler ve marka deneyimi',
          keywords: 'dijital ajans, web tasarım, marka yönetimi, sosyal medya',
          logo: '/logo.png'
        },
        contact: {
          email: 'albenizcreativeagency@gmail.com',
          phone: '+90 555 123 4567',
          address: 'İstanbul, Türkiye',
          workingHours: 'Pazartesi - Cuma: 09:00 - 18:00'
        },
        socialMedia: {
          facebook: 'https://facebook.com/albenizcreative',
          twitter: 'https://twitter.com/albenizcreative',
          instagram: 'https://instagram.com/albenizcreative',
          linkedin: 'https://linkedin.com/company/albenizcreative',
          youtube: 'https://youtube.com/albenizcreative'
        },
        seo: {
          googleAnalytics: 'GA-XXXXXXXXX',
          metaDescription: 'ALBENIZ Creative Agency - Yaratıcı dijital çözümler ve marka deneyimi',
          ogImage: '/og-image.jpg'
        }
      };
      setSiteSettings(demoSettings);
      localStorage.setItem('adminSiteSettings', JSON.stringify(demoSettings));
    }
  }, []);

  // Projeleri LocalStorage'a kaydet
  const saveProjects = (newProjects) => {
    localStorage.setItem('adminProjects', JSON.stringify(newProjects));
    setProjects(newProjects);
  };

  // Mesajları LocalStorage'a kaydet
  const saveMessages = (newMessages) => {
    localStorage.setItem('adminMessages', JSON.stringify(newMessages));
    setMessages(newMessages);
  };

  // Takım üyelerini LocalStorage'a kaydet
  const saveTeamMembers = (newTeam) => {
    localStorage.setItem('adminTeam', JSON.stringify(newTeam));
    setTeamMembers(newTeam);
  };

  // Site ayarlarını LocalStorage'a kaydet
  const saveSiteSettings = (newSettings) => {
    localStorage.setItem('adminSiteSettings', JSON.stringify(newSettings));
    setSiteSettings(newSettings);
  };

  // Proje ekleme/düzenleme
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (editingProject) {
      // Düzenleme
      const updatedProjects = projects.map(p => 
        p.id === editingProject.id ? { ...projectForm, id: p.id } : p
      );
      saveProjects(updatedProjects);
    } else {
      // Yeni proje ekleme
      const newProject = {
        ...projectForm,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      saveProjects([...projects, newProject]);
    }
    setShowProjectModal(false);
    setEditingProject(null);
    setProjectForm({
      name: '',
      client: '',
      status: 'Beklemede',
      progress: 0,
      description: '',
      startDate: ''
    });
  };

  // Mesaj ekleme/düzenleme
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (editingMessage) {
      // Düzenleme
      const updatedMessages = messages.map(m => 
        m.id === editingMessage.id ? { ...messageForm, id: m.id, date: m.date } : m
      );
      saveMessages(updatedMessages);
    } else {
      // Yeni mesaj ekleme
      const newMessage = {
        ...messageForm,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        isRead: false
      };
      saveMessages([...messages, newMessage]);
    }
    setShowMessageModal(false);
    setEditingMessage(null);
    setMessageForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      status: 'Yeni'
    });
  };

  // Takım üyesi ekleme/düzenleme
  const handleTeamSubmit = (e) => {
    e.preventDefault();
    
    // Fotoğraf kontrolü
    if (!teamForm.photo && !teamForm.photoFile) {
      alert('Lütfen bir profil fotoğrafı seçin.');
      return;
    }

    if (editingTeamMember) {
      // Düzenleme
      const updatedTeam = teamMembers.map(m => 
        m.id === editingTeamMember.id ? { 
          ...teamForm, 
          id: m.id,
          photo: teamForm.photo || m.photo // Mevcut fotoğrafı koru
        } : m
      );
      saveTeamMembers(updatedTeam);
    } else {
      // Yeni takım üyesi ekleme
      const newTeamMember = {
        ...teamForm,
        id: Date.now(),
        photo: teamForm.photo || '/default-avatar.jpg' // Varsayılan fotoğraf
      };
      saveTeamMembers([...teamMembers, newTeamMember]);
    }
    
    setShowTeamModal(false);
    setEditingTeamMember(null);
    setTeamForm({
      name: '',
      position: '',
      role: 'Üye',
      email: '',
      phone: '',
      bio: '',
      photo: '',
      photoFile: null,
      skills: [],
      experience: '',
      education: '',
      hireDate: '',
      socialLinks: {
        linkedin: '',
        twitter: '',
        instagram: '',
        github: '',
        portfolio: ''
      }
    });
    
    alert(editingTeamMember ? 'Takım üyesi başarıyla güncellendi!' : 'Yeni takım üyesi başarıyla eklendi!');
  };

  // Proje düzenleme modalını aç
  const handleEditProject = (project) => {
    setEditingProject(project);
    setProjectForm(project);
    setShowProjectModal(true);
  };

  // Mesaj düzenleme modalını aç
  const handleEditMessage = (message) => {
    setEditingMessage(message);
    setMessageForm(message);
    setShowMessageModal(true);
  };

  // Takım üyesi düzenleme modalını aç
  const handleEditTeamMember = (member) => {
    setEditingTeamMember(member);
    setTeamForm(member);
    setShowTeamModal(true);
  };

  // Proje silme
  const handleDeleteProject = (projectId) => {
    if (window.confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      const updatedProjects = projects.filter(p => p.id !== projectId);
      saveProjects(updatedProjects);
    }
  };

  // Mesaj silme
  const handleDeleteMessage = (messageId) => {
    if (window.confirm('Bu mesajı silmek istediğinizden emin misiniz?')) {
      const updatedMessages = messages.filter(m => m.id !== messageId);
      saveMessages(updatedMessages);
    }
  };

  // Takım üyesi silme
  const handleDeleteTeamMember = (memberId) => {
    if (window.confirm('Bu takım üyesini silmek istediğinizden emin misiniz?')) {
      const updatedTeam = teamMembers.filter(m => m.id !== memberId);
      saveTeamMembers(updatedTeam);
    }
  };

  // Mesaj durumunu değiştir
  const handleMessageStatusChange = (messageId, newStatus) => {
    const updatedMessages = messages.map(m => 
      m.id === messageId ? { ...m, status: newStatus, isRead: true } : m
    );
    saveMessages(updatedMessages);
  };

  // Tüm mesajları okundu işaretle
  const markAllAsRead = () => {
    const updatedMessages = messages.map(m => ({ ...m, isRead: true, status: m.status === 'Yeni' ? 'Okundu' : m.status }));
    saveMessages(updatedMessages);
  };

  // Mesajı okundu/okunmadı işaretle
  const toggleMessageRead = (messageId) => {
    const updatedMessages = messages.map(m => 
      m.id === messageId ? { ...m, isRead: !m.isRead } : m
    );
    saveMessages(updatedMessages);
  };

  // Mesaj seçimi
  const toggleMessageSelection = (messageId) => {
    setSelectedMessages(prev => 
      prev.includes(messageId) 
        ? prev.filter(id => id !== messageId)
        : [...prev, messageId]
    );
  };

  // Tüm mesajları seç/seçimi kaldır
  const toggleSelectAll = () => {
    const filteredMessages = getFilteredMessages();
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(m => m.id));
    }
  };

  // Toplu işlemler
  const handleBulkAction = (action) => {
    if (selectedMessages.length === 0) {
      alert('Lütfen işlem yapılacak mesajları seçin.');
      return;
    }

    let updatedMessages = [...messages];
    
    switch (action) {
      case 'markRead':
        updatedMessages = messages.map(m => 
          selectedMessages.includes(m.id) ? { ...m, isRead: true, status: 'Okundu' } : m
        );
        break;
      case 'markUnread':
        updatedMessages = messages.map(m => 
          selectedMessages.includes(m.id) ? { ...m, isRead: false, status: 'Yeni' } : m
        );
        break;
      case 'archive':
        updatedMessages = messages.map(m => 
          selectedMessages.includes(m.id) ? { ...m, status: 'Arşivlendi' } : m
        );
        break;
      case 'delete':
        if (window.confirm(`${selectedMessages.length} mesajı silmek istediğinizden emin misiniz?`)) {
          updatedMessages = messages.filter(m => !selectedMessages.includes(m.id));
        } else {
          return;
        }
        break;
      default:
        return;
    }
    
    saveMessages(updatedMessages);
    setSelectedMessages([]);
  };

  // Filtrelenmiş mesajları al
  const getFilteredMessages = () => {
    switch (messageFilter) {
      case 'unread':
        return messages.filter(m => !m.isRead);
      case 'read':
        return messages.filter(m => m.isRead);
      case 'archived':
        return messages.filter(m => m.status === 'Arşivlendi');
      case 'replied':
        return messages.filter(m => m.status === 'Yanıtlandı');
      default:
        return messages;
    }
  };

  // Yanıtlama modalını aç
  const handleReplyMessage = (message) => {
    setReplyingToMessage(message);
    setReplyForm({
      subject: `Re: ${message.subject}`,
      message: ''
    });
    setShowReplyModal(true);
  };

  // Yanıt gönder
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyingToMessage) {
      // Yanıt mesajını kaydet
      const replyMessage = {
        id: Date.now(),
        name: 'Admin',
        email: 'admin@albeniz.com',
        subject: replyForm.subject,
        message: replyForm.message,
        status: 'Yanıtlandı',
        date: new Date().toISOString().split('T')[0],
        isRead: true,
        isReply: true,
        originalMessageId: replyingToMessage.id
      };
      
      // Orijinal mesajı yanıtlandı olarak işaretle
      const updatedMessages = messages.map(m => 
        m.id === replyingToMessage.id ? { ...m, status: 'Yanıtlandı' } : m
      );
      
      saveMessages([...updatedMessages, replyMessage]);
      setShowReplyModal(false);
      setReplyingToMessage(null);
      setReplyForm({ subject: '', message: '' });
      
      alert('Yanıt başarıyla gönderildi!');
    }
  };

  // Form değişikliklerini yakala
  const handleFormChange = (e) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value
    });
  };

  const handleMessageFormChange = (e) => {
    setMessageForm({
      ...messageForm,
      [e.target.name]: e.target.value
    });
  };

  const handleTeamFormChange = (e) => {
    setTeamForm({
      ...teamForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialLinkChange = (platform, value) => {
    setTeamForm({
      ...teamForm,
      socialLinks: {
        ...teamForm.socialLinks,
        [platform]: value
      }
    });
  };

  // Fotoğraf yükleme işlemi
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Dosya boyutu kontrolü (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Dosya boyutu 5MB\'dan küçük olmalıdır.');
        return;
      }

      // Dosya tipi kontrolü
      if (!file.type.startsWith('image/')) {
        alert('Lütfen geçerli bir resim dosyası seçin.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setTeamForm({
          ...teamForm,
          photo: e.target.result,
          photoFile: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Beceri ekleme/çıkarma
  const handleSkillChange = (skill, action) => {
    if (action === 'add' && skill.trim() && !teamForm.skills.includes(skill.trim())) {
      setTeamForm({
        ...teamForm,
        skills: [...teamForm.skills, skill.trim()]
      });
    } else if (action === 'remove') {
      setTeamForm({
        ...teamForm,
        skills: teamForm.skills.filter(s => s !== skill)
      });
    }
  };

  // Site ayarları form işleme
  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    saveSiteSettings(settingsForm);
    setShowSettingsModal(false);
    alert('Site ayarları başarıyla güncellendi!');
  };

  // Site ayarları form değişikliklerini yakala
  const handleSettingsFormChange = (section, field, value) => {
    setSettingsForm({
      ...settingsForm,
      [section]: {
        ...settingsForm[section],
        [field]: value
      }
    });
  };

  // Demo data
  const stats = {
    totalProjects: projects.length,
    activeClients: new Set(projects.map(p => p.client)).size,
    totalRevenue: '₺125,000',
    pendingTasks: projects.filter(p => p.status === 'Beklemede').length,
    totalMessages: messages.length,
    unreadMessages: messages.filter(m => !m.isRead).length,
    teamMembers: teamMembers.length
  };

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="admin-stats">
        <div className="stat-card">
          <div className="stat-number">{stats.totalProjects}</div>
          <div className="stat-label">Toplam Proje</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.activeClients}</div>
          <div className="stat-label">Aktif Müşteri</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.totalRevenue}</div>
          <div className="stat-label">Toplam Gelir</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.teamMembers}</div>
          <div className="stat-label">Takım Üyesi</div>
        </div>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Son Projeler</h3>
          <div className="project-list">
            {projects.slice(0, 4).map(project => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <h4>{project.name}</h4>
                  <p>{project.client}</p>
                </div>
                <div className="project-status">
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <h3>Takım Üyeleri</h3>
          <div className="team-list">
            {teamMembers.slice(0, 4).map(member => (
              <div key={member.id} className="team-item">
                <div className="team-photo">
                  <img src={member.photo} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.position}</p>
                  <span className="team-email">{member.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="dashboard-projects">
      <div className="section-header">
        <h2>Proje Yönetimi</h2>
        <button 
          className="action-btn"
          onClick={() => {
            setEditingProject(null);
            setProjectForm({
              name: '',
              client: '',
              status: 'Beklemede',
              progress: 0,
              description: '',
              startDate: ''
            });
            setShowProjectModal(true);
          }}
        >
          Yeni Proje Ekle
        </button>
      </div>
      
      <div className="projects-table">
        <table>
          <thead>
            <tr>
              <th>Proje Adı</th>
              <th>Müşteri</th>
              <th>Durum</th>
              <th>İlerleme</th>
              <th>Başlangıç</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.client}</td>
                <td>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </td>
                <td>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{project.progress}%</span>
                </td>
                <td>{project.startDate}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="action-btn small"
                      onClick={() => handleEditProject(project)}
                    >
                      Düzenle
                    </button>
                    <button 
                      className="action-btn small danger"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Proje Ekleme/Düzenleme Modal */}
      {showProjectModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{editingProject ? 'Proje Düzenle' : 'Yeni Proje Ekle'}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowProjectModal(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleProjectSubmit} className="modal-form">
              <div className="form-group">
                <label>Proje Adı</label>
                <input
                  type="text"
                  name="name"
                  value={projectForm.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Müşteri</label>
                <input
                  type="text"
                  name="client"
                  value={projectForm.client}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Durum</label>
                <select
                  name="status"
                  value={projectForm.status}
                  onChange={handleFormChange}
                >
                  <option value="Beklemede">Beklemede</option>
                  <option value="Devam Ediyor">Devam Ediyor</option>
                  <option value="Tamamlandı">Tamamlandı</option>
                </select>
              </div>
              <div className="form-group">
                <label>İlerleme (%)</label>
                <input
                  type="number"
                  name="progress"
                  value={projectForm.progress}
                  onChange={handleFormChange}
                  min="0"
                  max="100"
                  required
                />
              </div>
              <div className="form-group">
                <label>Başlangıç Tarihi</label>
                <input
                  type="date"
                  name="startDate"
                  value={projectForm.startDate}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Açıklama</label>
                <textarea
                  name="description"
                  value={projectForm.description}
                  onChange={handleFormChange}
                  rows="3"
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="action-btn">
                  {editingProject ? 'Güncelle' : 'Ekle'}
                </button>
                <button 
                  type="button" 
                  className="action-btn secondary"
                  onClick={() => setShowProjectModal(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderMessages = () => (
    <div className="dashboard-messages">
      <div className="section-header">
        <h2>Mesaj Yönetimi</h2>
        <div className="message-actions-header">
          <button 
            className="action-btn"
            onClick={() => {
              setEditingMessage(null);
              setMessageForm({
                name: '',
                email: '',
                subject: '',
                message: '',
                status: 'Yeni'
              });
              setShowMessageModal(true);
            }}
          >
            Yeni Mesaj Ekle
          </button>
          <button className="action-btn secondary" onClick={markAllAsRead}>
            Tümünü Okundu İşaretle
          </button>
        </div>
      </div>

      {/* Mesaj Filtreleri ve Toplu İşlemler */}
      <div className="message-controls">
        <div className="message-filters">
          <select 
            value={messageFilter} 
            onChange={(e) => setMessageFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">Tüm Mesajlar</option>
            <option value="unread">Okunmamış</option>
            <option value="read">Okunmuş</option>
            <option value="replied">Yanıtlanmış</option>
            <option value="archived">Arşivlenmiş</option>
          </select>
          <span className="message-count">
            {getFilteredMessages().length} mesaj
          </span>
        </div>
        
        {selectedMessages.length > 0 && (
          <div className="bulk-actions">
            <span className="selected-count">
              {selectedMessages.length} mesaj seçildi
            </span>
            <button 
              className="action-btn small"
              onClick={() => handleBulkAction('markRead')}
            >
              Okundu İşaretle
            </button>
            <button 
              className="action-btn small"
              onClick={() => handleBulkAction('markUnread')}
            >
              Okunmadı İşaretle
            </button>
            <button 
              className="action-btn small secondary"
              onClick={() => handleBulkAction('archive')}
            >
              Arşivle
            </button>
            <button 
              className="action-btn small danger"
              onClick={() => handleBulkAction('delete')}
            >
              Sil
            </button>
          </div>
        )}
      </div>
      
      <div className="messages-list">
        {getFilteredMessages().map(message => (
          <div key={message.id} className={`message-card ${!message.isRead ? 'unread' : ''} ${message.isReply ? 'reply' : ''}`}>
            <div className="message-header">
              <div className="message-checkbox">
                <input
                  type="checkbox"
                  checked={selectedMessages.includes(message.id)}
                  onChange={() => toggleMessageSelection(message.id)}
                />
              </div>
              <div className="message-sender">
                <h4>{message.name}</h4>
                <span className="message-email">{message.email}</span>
                <span className="message-subject">{message.subject}</span>
                {message.isReply && (
                  <span className="reply-indicator">Yanıt</span>
                )}
              </div>
              <div className="message-meta">
                <span className="message-date">{message.date}</span>
                <span className={`message-status ${message.isRead ? 'read' : 'unread'}`}>
                  {message.isRead ? 'Okundu' : 'Yeni'}
                </span>
                <select 
                  className="status-select"
                  value={message.status}
                  onChange={(e) => handleMessageStatusChange(message.id, e.target.value)}
                >
                  <option value="Yeni">Yeni</option>
                  <option value="Okundu">Okundu</option>
                  <option value="Yanıtlandı">Yanıtlandı</option>
                  <option value="Arşivlendi">Arşivlendi</option>
                </select>
              </div>
            </div>
            <div className="message-content">
              <p>{message.message}</p>
            </div>
            <div className="message-actions">
              <button 
                className="action-btn small"
                onClick={() => toggleMessageRead(message.id)}
              >
                {message.isRead ? 'Okunmadı İşaretle' : 'Okundu İşaretle'}
              </button>
              <button 
                className="action-btn small"
                onClick={() => handleReplyMessage(message)}
              >
                Yanıtla
              </button>
              <button 
                className="action-btn small"
                onClick={() => handleEditMessage(message)}
              >
                Düzenle
              </button>
              <button 
                className="action-btn small secondary"
                onClick={() => handleMessageStatusChange(message.id, 'Arşivlendi')}
              >
                Arşivle
              </button>
              <button 
                className="action-btn small danger"
                onClick={() => handleDeleteMessage(message.id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mesaj Ekleme/Düzenleme Modal */}
      {showMessageModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{editingMessage ? 'Mesaj Düzenle' : 'Yeni Mesaj Ekle'}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowMessageModal(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleMessageSubmit} className="modal-form">
              <div className="form-group">
                <label>Gönderen Adı</label>
                <input
                  type="text"
                  name="name"
                  value={messageForm.name}
                  onChange={handleMessageFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={messageForm.email}
                  onChange={handleMessageFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Konu</label>
                <input
                  type="text"
                  name="subject"
                  value={messageForm.subject}
                  onChange={handleMessageFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mesaj</label>
                <textarea
                  name="message"
                  value={messageForm.message}
                  onChange={handleMessageFormChange}
                  rows="5"
                  required
                />
              </div>
              <div className="form-group">
                <label>Durum</label>
                <select
                  name="status"
                  value={messageForm.status}
                  onChange={handleMessageFormChange}
                >
                  <option value="Yeni">Yeni</option>
                  <option value="Okundu">Okundu</option>
                  <option value="Yanıtlandı">Yanıtlandı</option>
                  <option value="Arşivlendi">Arşivlendi</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="submit" className="action-btn">
                  {editingMessage ? 'Güncelle' : 'Ekle'}
                </button>
                <button 
                  type="button" 
                  className="action-btn secondary"
                  onClick={() => setShowMessageModal(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Yanıtlama Modal */}
      {showReplyModal && replyingToMessage && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Mesajı Yanıtla</h3>
              <button 
                className="modal-close"
                onClick={() => setShowReplyModal(false)}
              >
                ×
              </button>
            </div>
            <div className="original-message">
              <h4>Orijinal Mesaj:</h4>
              <div className="original-message-content">
                <p><strong>Gönderen:</strong> {replyingToMessage.name} ({replyingToMessage.email})</p>
                <p><strong>Konu:</strong> {replyingToMessage.subject}</p>
                <p><strong>Mesaj:</strong></p>
                <div className="original-message-text">
                  {replyingToMessage.message}
                </div>
              </div>
            </div>
            <form onSubmit={handleReplySubmit} className="modal-form">
              <div className="form-group">
                <label>Konu</label>
                <input
                  type="text"
                  value={replyForm.subject}
                  onChange={(e) => setReplyForm({...replyForm, subject: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Yanıtınız</label>
                <textarea
                  value={replyForm.message}
                  onChange={(e) => setReplyForm({...replyForm, message: e.target.value})}
                  rows="6"
                  required
                  placeholder="Yanıtınızı buraya yazın..."
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="action-btn">
                  Yanıtı Gönder
                </button>
                <button 
                  type="button" 
                  className="action-btn secondary"
                  onClick={() => setShowReplyModal(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderTeam = () => (
    <div className="dashboard-team">
      <div className="section-header">
        <h2>Ekip Yönetimi</h2>
        <button 
          className="action-btn"
          onClick={() => {
            setEditingTeamMember(null);
            setTeamForm({
              name: '',
              position: '',
              role: 'Üye',
              email: '',
              phone: '',
              bio: '',
              photo: '',
              photoFile: null,
              skills: [],
              experience: '',
              education: '',
              hireDate: '',
              socialLinks: {
                linkedin: '',
                twitter: '',
                instagram: '',
                github: '',
                portfolio: ''
              }
            });
            setShowTeamModal(true);
          }}
        >
          Yeni Üye Ekle
        </button>
      </div>
      
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="team-card-header">
              <div className="team-photo">
                <img src={member.photo} alt={member.name} />
                <div className="role-badge">{member.role}</div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-email">{member.email}</p>
                <p className="team-phone">{member.phone}</p>
                <p className="team-experience">Deneyim: {member.experience}</p>
              </div>
            </div>
            <div className="team-bio">
              <p>{member.bio}</p>
            </div>
            {member.skills && member.skills.length > 0 && (
              <div className="team-skills">
                <h4>Yetenekler:</h4>
                <div className="skills-list">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="team-social">
              {member.socialLinks.linkedin && (
                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  LinkedIn
                </a>
              )}
              {member.socialLinks.twitter && (
                <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  Twitter
                </a>
              )}
              {member.socialLinks.instagram && (
                <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  Instagram
                </a>
              )}
              {member.socialLinks.github && (
                <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link github">
                  GitHub
                </a>
              )}
              {member.socialLinks.portfolio && (
                <a href={member.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="social-link portfolio">
                  Portfolio
                </a>
              )}
            </div>
            <div className="team-actions">
              <button 
                className="action-btn small"
                onClick={() => handleEditTeamMember(member)}
              >
                Düzenle
              </button>
              <button 
                className="action-btn small danger"
                onClick={() => handleDeleteTeamMember(member.id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Takım Üyesi Ekleme/Düzenleme Modal */}
      {showTeamModal && (
        <div className="modal-overlay">
          <div className="modal large">
            <div className="modal-header">
              <h3>{editingTeamMember ? 'Takım Üyesi Düzenle' : 'Yeni Takım Üyesi Ekle'}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowTeamModal(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleTeamSubmit} className="modal-form">
              <div className="form-section">
                <h4>Temel Bilgiler</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={teamForm.name}
                      onChange={handleTeamFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Pozisyon *</label>
                    <input
                      type="text"
                      name="position"
                      value={teamForm.position}
                      onChange={handleTeamFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Rol *</label>
                    <select
                      name="role"
                      value={teamForm.role}
                      onChange={handleTeamFormChange}
                      required
                    >
                      <option value="Üye">Üye</option>
                      <option value="Uzman">Uzman</option>
                      <option value="Yönetici">Yönetici</option>
                      <option value="Lider">Lider</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>İşe Başlama Tarihi</label>
                    <input
                      type="date"
                      name="hireDate"
                      value={teamForm.hireDate}
                      onChange={handleTeamFormChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>İletişim Bilgileri</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      value={teamForm.email}
                      onChange={handleTeamFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={teamForm.phone}
                      onChange={handleTeamFormChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>Profil Fotoğrafı *</h4>
                <div className="photo-upload">
                  <div className="photo-preview">
                    {teamForm.photo && (
                      <img src={teamForm.photo} alt="Profil önizleme" />
                    )}
                  </div>
                  <div className="photo-input">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      id="photo-upload"
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="photo-upload" className="upload-btn">
                      Fotoğraf Seç
                    </label>
                    <p className="upload-info">Maksimum 5MB, JPG, PNG veya GIF</p>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>Profesyonel Bilgiler</h4>
                <div className="form-group">
                  <label>Hakkında *</label>
                  <textarea
                    name="bio"
                    value={teamForm.bio}
                    onChange={handleTeamFormChange}
                    rows="4"
                    required
                    placeholder="Takım üyesi hakkında kısa bilgi..."
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Deneyim</label>
                    <input
                      type="text"
                      name="experience"
                      value={teamForm.experience}
                      onChange={handleTeamFormChange}
                      placeholder="örn: 5+ yıl"
                    />
                  </div>
                  <div className="form-group">
                    <label>Eğitim</label>
                    <input
                      type="text"
                      name="education"
                      value={teamForm.education}
                      onChange={handleTeamFormChange}
                      placeholder="örn: Bilgisayar Mühendisliği"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>Yetenekler</h4>
                <div className="skills-input">
                  <div className="skill-input-group">
                    <input
                      type="text"
                      placeholder="Yetenek ekle..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleSkillChange(e.target.value, 'add');
                          e.target.value = '';
                        }
                      }}
                    />
                    <button 
                      type="button"
                      onClick={(e) => {
                        const input = e.target.previousSibling;
                        handleSkillChange(input.value, 'add');
                        input.value = '';
                      }}
                    >
                      Ekle
                    </button>
                  </div>
                  <div className="skills-list">
                    {teamForm.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                        <button 
                          type="button"
                          onClick={() => handleSkillChange(skill, 'remove')}
                          className="skill-remove"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h4>Sosyal Medya Linkleri</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>LinkedIn</label>
                    <input
                      type="url"
                      value={teamForm.socialLinks.linkedin}
                      onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  <div className="form-group">
                    <label>Twitter</label>
                    <input
                      type="url"
                      value={teamForm.socialLinks.twitter}
                      onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                      placeholder="https://twitter.com/username"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Instagram</label>
                    <input
                      type="url"
                      value={teamForm.socialLinks.instagram}
                      onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                      placeholder="https://instagram.com/username"
                    />
                  </div>
                  <div className="form-group">
                    <label>GitHub</label>
                    <input
                      type="url"
                      value={teamForm.socialLinks.github}
                      onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                      placeholder="https://github.com/username"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Portfolio</label>
                  <input
                    type="url"
                    value={teamForm.socialLinks.portfolio}
                    onChange={(e) => handleSocialLinkChange('portfolio', e.target.value)}
                    placeholder="https://portfolio.com"
                  />
                </div>
              </div>
              
              <div className="modal-actions">
                <button type="submit" className="action-btn">
                  {editingTeamMember ? 'Güncelle' : 'Ekle'}
                </button>
                <button 
                  type="button" 
                  className="action-btn secondary"
                  onClick={() => setShowTeamModal(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div className="dashboard-settings">
      <div className="section-header">
        <h2>Sistem Ayarları</h2>
        <button 
          className="action-btn"
          onClick={() => {
            setSettingsForm(siteSettings);
            setShowSettingsModal(true);
          }}
        >
          Site Ayarlarını Düzenle
        </button>
      </div>
      
      <div className="admin-grid">
        <div className="admin-card">
          <h3>Site Bilgileri</h3>
          <div className="settings-preview">
            <div className="setting-item">
              <strong>Site Başlığı:</strong>
              <span>{siteSettings.siteInfo?.title || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Açıklama:</strong>
              <span>{siteSettings.siteInfo?.description || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Anahtar Kelimeler:</strong>
              <span>{siteSettings.siteInfo?.keywords || 'Ayarlanmamış'}</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <h3>İletişim Bilgileri</h3>
          <div className="settings-preview">
            <div className="setting-item">
              <strong>E-posta:</strong>
              <span>{siteSettings.contact?.email || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Telefon:</strong>
              <span>{siteSettings.contact?.phone || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Adres:</strong>
              <span>{siteSettings.contact?.address || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Çalışma Saatleri:</strong>
              <span>{siteSettings.contact?.workingHours || 'Ayarlanmamış'}</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <h3>Sosyal Medya</h3>
          <div className="settings-preview">
            <div className="setting-item">
              <strong>Facebook:</strong>
              <span>{siteSettings.socialMedia?.facebook || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Twitter:</strong>
              <span>{siteSettings.socialMedia?.twitter || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Instagram:</strong>
              <span>{siteSettings.socialMedia?.instagram || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>LinkedIn:</strong>
              <span>{siteSettings.socialMedia?.linkedin || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>YouTube:</strong>
              <span>{siteSettings.socialMedia?.youtube || 'Ayarlanmamış'}</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <h3>SEO Ayarları</h3>
          <div className="settings-preview">
            <div className="setting-item">
              <strong>Google Analytics:</strong>
              <span>{siteSettings.seo?.googleAnalytics || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>Meta Açıklama:</strong>
              <span>{siteSettings.seo?.metaDescription || 'Ayarlanmamış'}</span>
            </div>
            <div className="setting-item">
              <strong>OG Resim:</strong>
              <span>{siteSettings.seo?.ogImage || 'Ayarlanmamış'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Site Ayarları Modal */}
      {showSettingsModal && (
        <div className="modal-overlay">
          <div className="modal large">
            <div className="modal-header">
              <h3>Site Ayarlarını Düzenle</h3>
              <button 
                className="modal-close"
                onClick={() => setShowSettingsModal(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSettingsSubmit} className="modal-form">
              <div className="form-section">
                <h4>Site Bilgileri</h4>
                <div className="form-group">
                  <label>Site Başlığı</label>
                  <input
                    type="text"
                    value={settingsForm.siteInfo?.title || ''}
                    onChange={(e) => handleSettingsFormChange('siteInfo', 'title', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Site Açıklaması</label>
                  <textarea
                    value={settingsForm.siteInfo?.description || ''}
                    onChange={(e) => handleSettingsFormChange('siteInfo', 'description', e.target.value)}
                    rows="3"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Anahtar Kelimeler</label>
                  <input
                    type="text"
                    value={settingsForm.siteInfo?.keywords || ''}
                    onChange={(e) => handleSettingsFormChange('siteInfo', 'keywords', e.target.value)}
                    placeholder="virgülle ayırarak yazın"
                  />
                </div>
                <div className="form-group">
                  <label>Logo URL</label>
                  <input
                    type="url"
                    value={settingsForm.siteInfo?.logo || ''}
                    onChange={(e) => handleSettingsFormChange('siteInfo', 'logo', e.target.value)}
                    placeholder="https://example.com/logo.png"
                  />
                </div>
              </div>

              <div className="form-section">
                <h4>İletişim Bilgileri</h4>
                <div className="form-group">
                  <label>E-posta</label>
                  <input
                    type="email"
                    value={settingsForm.contact?.email || ''}
                    onChange={(e) => handleSettingsFormChange('contact', 'email', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Telefon</label>
                  <input
                    type="tel"
                    value={settingsForm.contact?.phone || ''}
                    onChange={(e) => handleSettingsFormChange('contact', 'phone', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Adres</label>
                  <textarea
                    value={settingsForm.contact?.address || ''}
                    onChange={(e) => handleSettingsFormChange('contact', 'address', e.target.value)}
                    rows="2"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Çalışma Saatleri</label>
                  <input
                    type="text"
                    value={settingsForm.contact?.workingHours || ''}
                    onChange={(e) => handleSettingsFormChange('contact', 'workingHours', e.target.value)}
                    placeholder="Pazartesi - Cuma: 09:00 - 18:00"
                  />
                </div>
              </div>

              <div className="form-section">
                <h4>Sosyal Medya Linkleri</h4>
                <div className="form-group">
                  <label>Facebook</label>
                  <input
                    type="url"
                    value={settingsForm.socialMedia?.facebook || ''}
                    onChange={(e) => handleSettingsFormChange('socialMedia', 'facebook', e.target.value)}
                    placeholder="https://facebook.com/username"
                  />
                </div>
                <div className="form-group">
                  <label>Twitter</label>
                  <input
                    type="url"
                    value={settingsForm.socialMedia?.twitter || ''}
                    onChange={(e) => handleSettingsFormChange('socialMedia', 'twitter', e.target.value)}
                    placeholder="https://twitter.com/username"
                  />
                </div>
              </div>

              <div className="form-section">
                <h4>SEO Ayarları</h4>
                <div className="form-group">
                  <label>Google Analytics ID</label>
                  <input
                    type="text"
                    value={settingsForm.seo?.googleAnalytics || ''}
                    onChange={(e) => handleSettingsFormChange('seo', 'googleAnalytics', e.target.value)}
                    placeholder="GA-XXXXXXXXX"
                  />
                </div>
                <div className="form-group">
                  <label>Meta Açıklama</label>
                  <textarea
                    value={settingsForm.seo?.metaDescription || ''}
                    onChange={(e) => handleSettingsFormChange('seo', 'metaDescription', e.target.value)}
                    rows="3"
                    maxLength="160"
                    placeholder="Sitenizin arama motorlarında görünecek açıklaması"
                  />
                </div>
                <div className="form-group">
                  <label>OG Resim URL</label>
                  <input
                    type="url"
                    value={settingsForm.seo?.ogImage || ''}
                    onChange={(e) => handleSettingsFormChange('seo', 'ogImage', e.target.value)}
                    placeholder="https://example.com/og-image.jpg"
                  />
                </div>
              </div>
              
              <div className="modal-actions">
                <button type="submit" className="action-btn">
                  Ayarları Kaydet
                </button>
                <button 
                  type="button" 
                  className="action-btn secondary"
                  onClick={() => setShowSettingsModal(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <div className="user-info">
            <span>Hoş geldin, {adminData.username}</span>
            <span>Son giriş: {adminData.lastLogin}</span>
            <button className="back-btn" onClick={onBackToSite}>Siteye Dön</button>
            <button className="logout-btn" onClick={onLogout}>Çıkış Yap</button>
          </div>
        </div>

        <div className="admin-content">
          <div className="admin-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Genel Bakış
            </button>
            <button 
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projeler
            </button>
            <button 
              className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              Mesajlar
            </button>
            <button 
              className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              Takım
            </button>
            <button 
              className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Ayarlar
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'projects' && renderProjects()}
            {activeTab === 'messages' && renderMessages()}
            {activeTab === 'team' && renderTeam()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 