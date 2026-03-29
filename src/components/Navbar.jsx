import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import styles from './Navbar.module.css';
import logoSrc from '../assets/images/logo.png';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setOpenMenu(!openMenu);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#categorias' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Contato', href: '#cta' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpenMenu(false);
  };

  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.logoLink}>
        <img src={logoSrc} alt="Print Bord - Gráfica Digital" className={styles.logo} />
      </a>

      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={(e) => scrollTo(e, link.href)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <a href="https://wa.me/5581997067025" className={styles.waNavBtn} target="_blank" rel="noopener noreferrer">
        <Phone className={styles.phoneIcon} size={20} />
        WhatsApp
      </a>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      {openMenu && (
        <nav className={`${styles.mobileMenu} ${openMenu ? styles.mobileMenuOpen : ''}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => scrollTo(e, link.href)} className={styles.mobileLink}>
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5581997067025" className={styles.waNavBtn} target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;

