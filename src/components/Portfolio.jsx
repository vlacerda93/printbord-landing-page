import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = [
    {
src: '../Imagens/van_envelopamento.png',
      title: 'Comunicação Visual',
      alt: 'Van envelopamento'
    },
    {
src: '../Imagens/papelaria_flutuando.png',
      title: 'Papelaria',
      alt: 'Papelaria flutuando'
    },
    {
src: '../Imagens/garrafas_personalizadas.png',
      title: 'Brindes e Presentes',
      alt: 'Garrafas personalizadas'
    },
    {
src: '../Imagens/canecas.png',
      title: 'Brindes e Presentes',
      alt: 'Canecas personalizadas'
    },
    {
src: '../Imagens/cartoes_visita.png',
      title: 'Papelaria',
      alt: 'Cartões de visita'
    },
    {
src: '../Imagens/convites.png',
      title: 'Eventos',
      alt: 'Convites'
    },
    {
src: '../Imagens/credenciais.png',
      title: 'Eventos',
      alt: 'Credenciais'
    },
    {
src: '../Imagens/backdrop.png',
      title: 'Eventos',
      alt: 'Backdrop de evento'
    }
  ];

  return (
    <>
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.container}>
          <div className={styles.title}>
            <h2 data-aos="fade-down">Nosso trabalho</h2>
          </div>
          <div className={styles.portfolioGrid}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={styles.portfolioItem}
                onClick={() => {
                  setPhotoIndex(index);
                  setOpen(true);
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={styles.portfolioImg}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>{slide.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
        on={{ view: ({ index: currentIndex }) => setPhotoIndex(currentIndex) }}
      />
    </>
  );
};

export default Portfolio;

