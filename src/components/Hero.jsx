import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import logoSrc from '../assets/images/logo.png';

const Hero = () => {
  const scrollToCategorias = (e) => {
    e.preventDefault();
    document.querySelector('#categorias')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.videoBackground}>
        <div className={styles.colorBlob1}></div>
        <div className={styles.colorBlob2}></div>
        <div className={styles.colorBlob3}></div>
        <div className={styles.noiseOverlay}></div>
      </div>
      <div className={styles.content}>
        <img src={logoSrc} alt="Print Bord" className={styles.heroLogo} />
        <h1 className={styles.headline}>A melhor Gráfica Digital da Região Metropolitana de Recife</h1>
        <p className={styles.subheadline}>
          Aqui produzimos com qualidade Premium mais de 500 tipos de produtos.
        </p>
        <a href="#categorias" className={styles.scrollBtn} onClick={scrollToCategorias}>
          Ver nossos produtos ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;

