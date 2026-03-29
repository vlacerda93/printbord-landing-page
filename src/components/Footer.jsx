import React from 'react';
import styles from './Footer.module.css';
import logoSrc from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.footerLogo}>
          <img src={logoSrc} alt="Print Bord" className={styles.logoFooter} />
        </div>
        <div className={styles.footerInfo}>
          <h3>Contato</h3>
          <p>R. Sueli Luna Menelau, 65 — Imbiribeira, Recife - PE, 51170-150</p>
        </div>
        <div className={styles.footerInfo}>
          <h3>Siga-nos</h3>
          <a 
            href="https://www.instagram.com/printbordgrafica/" 
            className={styles.socialLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            @printbordgrafica
          </a>
        </div>
        <div className={styles.footerInfo}>
          <h3>Telefone</h3>
          <a href="tel:+5581997067025" className={styles.phoneLink}>
            (81) 99706-7025
          </a>
        </div>
        <div className={styles.copyright}>
          © 2025 Print Bord. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

