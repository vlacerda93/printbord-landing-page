import React from 'react';
import styles from './Depoimentos.module.css';
import { Star, Quote } from 'lucide-react';

const depoimentos = [
  {
    id: 1,
    nome: "Carlos Eduardo",
    empresa: "Moura Baterias",
    texto: "A Print Bord salvou nosso evento de última hora. A qualidade dos banners e fardamentos superou nossas expectativas. Profissionalismo puro.",
    rating: 5
  },
  {
    id: 2,
    nome: "Ana Beatriz Silva",
    empresa: "Vitarella",
    texto: "Impressão impecável e atendimento rápido. Já fizemos vários lotes de adesivos e cadernos corporativos e a cor vem sempre perfeita.",
    rating: 5
  },
  {
    id: 3,
    nome: "Ricardo Menezes",
    empresa: "Tech Solutions PE",
    texto: "Encontrar uma gráfica digital que entregue qualidade premium na região era difícil até conhecermos a Print Bord. O melhor custo-benefício.",
    rating: 5
  }
];

const Depoimentos = () => {
  return (
    <section className={styles.depoimentos} id="depoimentos">
      <div className={styles.container}>
        <div className={styles.title} data-aos="fade-up">
          <h2>O Que Nossos Clientes Dizem</h2>
          <p>Não acredite apenas na nossa palavra. Veja o que grandes marcas da região acham do nosso trabalho.</p>
        </div>
        
        <div className={styles.grid}>
          {depoimentos.map((dep) => (
            <div key={dep.id} className={styles.card} data-aos="fade-up" data-aos-delay={dep.id * 100}>
              <div className={styles.iconWrapper}>
                <Quote size={28} className={styles.quoteIcon} />
              </div>
              <p className={styles.texto}>"{dep.texto}"</p>
              <div className={styles.stars}>
                {[...Array(dep.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className={styles.starIcon} />
                ))}
              </div>
              <div className={styles.authorInfo}>
                <h4>{dep.nome}</h4>
                <span>{dep.empresa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
