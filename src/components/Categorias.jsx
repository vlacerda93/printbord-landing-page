import React from 'react';
import { Megaphone, Gift, FileText, Camera, Calendar, Shirt } from 'lucide-react';
import styles from './Categorias.module.css';

// Import images
import visualImg from '../assets/images/van_envelopamento_new.png';
import brindesImg from '../assets/images/canecas_new.png';
import papelariaImg from '../assets/images/papelaria_new.png';
import fotoImg from '../assets/images/foto_produtos.png';
import eventosImg from '../assets/images/eventos.png';
import fardamentosImg from '../assets/images/camisetas-093.jpg';

const Categorias = () => {
  const categories = [
    {
      title: 'Comunicação Visual',
      icon: Megaphone,
      examples: 'Banners, adesivos, placas, lonas, faixas',
      image: visualImg
    },
    {
      title: 'Brindes e Presentes',
      icon: Gift,
      examples: 'Canecas, canetas, chinelos, garrafas, capas',
      image: brindesImg
    },
    {
      title: 'Papelaria',
      icon: FileText,
      examples: 'Cartões de visita, folders, blocos, carimbos',
      image: papelariaImg
    },
    {
      title: 'Foto Produtos',
      icon: Camera,
      examples: 'Camisetas, postais, ímãs de geladeira, caixas',
      image: fotoImg
    },
    {
      title: 'Eventos',
      icon: Calendar,
      examples: 'Convites, credenciais, ingressos, backdrop, cordões',
      image: eventosImg
    },
    {
      title: 'Fardamentos',
      icon: Shirt,
      examples: 'Uniformes e fardamentos personalizados',
      image: fardamentosImg
    }
  ];

  return (
    <section className={styles.categorias} id="categorias">
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 data-aos="fade-down">O que fazemos</h2>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
            Cobrimos todas as suas necessidades gráficas com qualidade e agilidade
          </p>
        </div>
        <div className={styles.grid}>
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.title} 
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div 
                  className={styles.cardImage} 
                  style={{ backgroundImage: `url(${cat.image})` }} 
                />
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardExamples}>{cat.examples}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categorias;

