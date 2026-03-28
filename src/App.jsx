import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import './index.css';
import Header from './components/Header.jsx';
import Hero from './components/hero.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactCTA from './components/ContactCTA.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import TrustSection from './components/TrustSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';

// Icons if needed
// import { SunIcon, MoonIcon } from './components/icons.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Pass theme prop to Header for toggle button */}
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Services />
          <HowItWorks />
          <ProductGrid />
          <Portfolio />
          <TrustSection />
          <Testimonials />
          <ContactCTA />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

