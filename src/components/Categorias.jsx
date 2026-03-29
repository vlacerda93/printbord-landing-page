import React from 'react';
import { Megaphone, Gift, FileText, Camera, Calendar, Shirt } from 'lucide-react';
import styles from './Categorias.module.css';

const Categorias = () => {
  const categories = [
    {
      title: 'Comunicação Visual',
      icon: Megaphone,
      examples: 'Banners, adesivos, placas, lonas, faixas'
    },
    {
      title: 'Brindes e Presentes',
      icon: Gift,
      examples: 'Canecas, canetas, chinelos, garrafas, capas'
    },
    {
      title: 'Papelaria',
      icon: FileText,
      examples: 'Cartões de visita, folders, blocos, carimbos'
    },
    {
      title: 'Foto Produtos',
      icon: Camera,
      examples: 'Camisetas, postais, ímãs de geladeira, caixas'
    },
    {
      title: 'Eventos',
      icon: Calendar,
      examples: 'Convites, credenciais, ingressos, backdrop, cordões'
    },
    {
      title: 'Fardamentos',
      icon: Shirt,
      examples: 'Uniformes e fardamentos personalizados'
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
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardExamples}>{cat.examples}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categorias;

