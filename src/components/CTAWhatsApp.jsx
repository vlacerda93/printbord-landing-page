import React from 'react';
import styles from './CTAWhatsApp.module.css';

const CTAWhatsApp = () => {
  return (
    <section className={styles.cta} id="cta" data-aos="fade-up">
      <div className={styles.container}>
        <h2 className={styles.title}>Pronto para fazer seu pedido?</h2>
        <p className={styles.subtitle}>
          Fale agora com a nossa equipe e receba um orçamento personalizado para o seu negócio.
        </p>
        <a 
          href="https://wa.me/5581997067025" 
          className={styles.waBigBtn}
          target="_blank" 
          rel="noopener noreferrer"
        >
          💬 Falar no WhatsApp
        </a>
        <div className={styles.contactInfo}>
          <div className={styles.phone}>(81) 99706-7025</div>
          <div>Seg–Sex a partir das 09h</div>
        </div>
      </div>
    </section>
  );
};

export default CTAWhatsApp;

