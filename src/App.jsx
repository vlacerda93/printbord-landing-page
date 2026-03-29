import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Navbar from './components/Navbar.jsx';


import Hero from './components/Hero.jsx';

import Sobre from './components/Sobre.jsx';

import Categorias from './components/Categorias.jsx';

import Portfolio from './components/Portfolio.jsx';

import Catalogo from './components/Catalogo.jsx';

import CTAWhatsApp from './components/CTAWhatsApp.jsx';

import Footer from './components/Footer.jsx';

function WhatsAppFixed() {
  return (
    <a href="https://wa.me/5581997067025" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      <button className="btn-whatsapp" style={{ background: 'var(--verde-whatsapp)', color: 'white', borderRadius: '50px', padding: '1rem 1.5rem', fontSize: '1.1rem' }}>💬 WhatsApp</button>
    </a>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Portfolio />
        <Catalogo />
        <CTAWhatsApp />
        <Footer />
      </main>
      <WhatsAppFixed />
    </>
  );
}

export default App;

