import React from 'react';
import CountUp from 'react-countup';
import styles from './Catalogo.module.css';

const Catalogo = () => {
  return (
    <section className={styles.catalogo} id="catalogo" data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.number}>
          <CountUp end={500} duration={2.5} />+
        </div>
        <div className={styles.text}>produtos disponíveis no nosso catálogo completo</div>
        <p className={styles.subtext}>
          De banners a brindes, de fardamentos a papelaria fina — se você precisa imprimir, a Print Bord faz.
        </p>

      </div>
    </section>
  );
};

export default Catalogo;

