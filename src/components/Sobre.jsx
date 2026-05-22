import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import styles from './Sobre.module.css';

// Carousel Images
import img1 from '../assets/images/grafica_equipe_1_1779454793702.png';
import img2 from '../assets/images/grafica_equipe_2_1779454822569.png';
import img3 from '../assets/images/grafica_equipe_3_1779454854159.png';
import img4 from '../assets/images/grafica_equipe_4_1779454893684.png';

const Sobre = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 15000); // 15 seconds per image

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className={styles.sobre} id="sobre">
      {/* Dynamic Background matching 500+ section but darker */}
      <div className={styles.dynamicBg}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 data-aos="fade-up" data-aos-delay="100">Quem somos</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            A Print Bord é uma gráfica digital localizada em Recife, PE, fundada e gerida por mulheres empreendedoras. 
            Há anos no mercado, atendemos empresas de todos os tamanhos com qualidade, agilidade e um catálogo com mais de 500 produtos personalizados.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statCard} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.statNumber}>
                <CountUp end={500} duration={2} />+
              </div>
              <div className={styles.statLabel}>Produtos</div>
            </div>
            <div className={styles.statCard} data-aos="fade-up" data-aos-delay="400">
              <div className={styles.statNumber}>
                <CountUp end={1000} duration={2} />+
              </div>
              <div className={styles.statLabel}>Clientes atendidos</div>
            </div>
            <div className={styles.statCard} data-aos="fade-up" data-aos-delay="500">
              <div className={styles.statNumber}>Recife, PE</div>
              <div className={styles.statLabel}>Localização</div>
            </div>
          </div>
        </div>
        
        <div className={styles.imageCarousel} data-aos="fade-left" data-aos-delay="600">
          {images.map((src, idx) => (
            <img 
              key={idx}
              src={src} 
              alt="Equipe Print Bord trabalhando" 
              className={`${styles.equipeImg} ${idx === currentImg ? styles.activeImg : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;

