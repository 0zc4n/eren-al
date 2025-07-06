import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Demo admin credentials (gerçek uygulamada backend'den kontrol edilmeli)
    const demoCredentials = {
      username: 'admin',
      password: 'admin123'
    };

    // Simulate API call
    setTimeout(() => {
      if (credentials.username === demoCredentials.username && 
          credentials.password === demoCredentials.password) {
        onLogin({
          username: credentials.username,
          role: 'admin',
          lastLogin: new Date().toLocaleString('tr-TR')
        });
      } else {
        setError('Kullanıcı adı veya şifre hatalı!');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-header">
          <h1>ALBENIZ</h1>
          <p>Admin Panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              placeholder="Kullanıcı adınızı girin"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Şifrenizi girin"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Demo Giriş Bilgileri:</p>
          <p><strong>Kullanıcı Adı:</strong> admin</p>
          <p><strong>Şifre:</strong> admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin; 