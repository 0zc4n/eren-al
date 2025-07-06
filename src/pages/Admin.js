import React, { useState } from 'react';
import './Admin.css';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = ({ onBackToSite }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState(null);

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setAdminData(data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminData(null);
  };

  const handleBackToSite = () => {
    onBackToSite();
  };

  return (
    <div className="admin-page">
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminDashboard 
          adminData={adminData} 
          onLogout={handleLogout} 
          onBackToSite={handleBackToSite}
        />
      )}
    </div>
  );
};

export default Admin; 