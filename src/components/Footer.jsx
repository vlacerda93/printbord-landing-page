import React from 'react';
import styles from './Footer.module.css';
import logoSrc from '../assets/images/logo.png';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <img src={logoSrc} alt="Print Bord Logo" className={styles.logoFooter} />
          <p className={styles.brandDesc}>
            A melhor gráfica digital da região metropolitana de Recife. Qualidade premium, rapidez e mais de 500 produtos para sua marca.
          </p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/printbordgrafica/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Quem Somos</a></li>
            <li><a href="#categorias">Nossos Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#cta">Fazer Pedido</a></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3>Contato & Horários</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.contactIcon} />
              <span>R. Sueli Luna Menelau, 65<br/>Imbiribeira, Recife - PE, 51170-150</span>
            </li>
            <li>
              <Phone size={20} className={styles.contactIcon} />
              <a href="tel:+5581997067025">(81) 99706-7025</a>
            </li>
            <li>
              <Clock size={20} className={styles.contactIcon} />
              <span>Seg–Sex: 09h às 18h<br/>Sáb: Fechado</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <div className={styles.copyText}>
          © {new Date().getFullYear()} Print Bord Gráfica Digital. Todos os direitos reservados.
        </div>
        <div className={styles.cnpj}>
          CNPJ: XX.XXX.XXX/0001-XX
        </div>
      </div>
    </footer>
  );
};

export default Footer;

