import React from 'react';
import CountUp from 'react-countup';
import styles from './Sobre.module.css';
import equipeSrc from '../assets/images/equipe.png';

const Sobre = () => {
  return (
    <section className={styles.sobre} id="sobre">
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
        <img 
          src={equipeSrc} 
          alt="Equipe Print Bord em Recife" 
          className={styles.equipeImg}
          data-aos="fade-left"
          data-aos-delay="600"
        />
      </div>
    </section>
  );
};

export default Sobre;

