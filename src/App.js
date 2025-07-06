import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import SplashScreen from './components/SplashScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/superadmin"
              element={<Admin onBackToSite={() => window.location.href = '/'} />}
            />
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <main>
                    <Home />
                    <Portfolio />
                    <About />
                    <Services />
                    <Contact />
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
