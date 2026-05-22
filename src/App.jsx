import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Navbar from './components/Navbar.jsx';


import Hero from './components/Hero.jsx';

import Sobre from './components/Sobre.jsx';

import Categorias from './components/Categorias.jsx';

import Portfolio from './components/Portfolio.jsx';
import Catalogo from './components/Catalogo.jsx';
import Depoimentos from './components/Depoimentos.jsx';

import CTAWhatsApp from './components/CTAWhatsApp.jsx';

import Footer from './components/Footer.jsx';



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
        <Depoimentos />
        <CTAWhatsApp />
        <Footer />
      </main>

    </>
  );
}

export default App;

