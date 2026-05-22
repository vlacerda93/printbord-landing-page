import React, { useState, useEffect } from 'react';
import styles from './Portfolio.module.css';

// Import images from assets
import vanImg from '../assets/images/van_envelopamento_new.png';
import papelariaImg from '../assets/images/papelaria_new.png';
import garrafasImg from '../assets/images/garrafas_new.png';
import canecasImg from '../assets/images/canecas_new.png';
import imasImg from '../assets/images/adesivos_geladeira_novo.png';
import camisetasImg from '../assets/images/camisetas-093.jpg';
import eventosImg from '../assets/images/eventos.png';
import fotoImg from '../assets/images/foto_produtos.png';

const Portfolio = () => {
  const slides = [
    { src: vanImg, title: 'Comunicação Visual', alt: 'Envelopamento de frota comercial' },
    { src: papelariaImg, title: 'Papelaria', alt: 'Identidade corporativa completa' },
    { src: garrafasImg, title: 'Brindes', alt: 'Brindes premium para empresas' },
    { src: canecasImg, title: 'Brindes', alt: 'Canecas personalizadas em estúdio' },
    { src: eventosImg, title: 'Eventos', alt: 'Banner e sinalização em local de evento' },
    { src: fotoImg, title: 'Foto Produtos', alt: 'Produtos fotográficos personalizados em casa' },
    { src: camisetasImg, title: 'Fardamento', alt: 'Uniformes profissionais' },
    { src: imasImg, title: 'Adesivos', alt: 'Ímãs e adesivos para geladeira' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 11000); // 11 seconds average as requested (between 10 and 12)

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 data-aos="fade-down">Nosso trabalho</h2>
        </div>
        <div className={styles.slideshowContainer} data-aos="zoom-in">
          <div className={styles.slideWrapper}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                style={{ backgroundImage: `url(${slide.src})` }}
                aria-label={slide.alt}
              >
                <div className={styles.overlay}>
                  <h3 className={styles.overlayTitle}>{slide.title}</h3>
                  <p className={styles.overlayText}>{slide.alt}</p>
                </div>
              </div>
            ))}
            <div className={styles.indicators}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

