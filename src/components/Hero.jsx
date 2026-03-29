import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import logoSrc from '../assets/images/logo.png';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#1A1AE0', '#5CB85C', '#E01A1A', '#E0C01A', '#E07A1A'];
    const particles = [];

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: Math.random() * 0.02 - 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  const scrollToCategorias = (e) => {
    e.preventDefault();
    document.querySelector('#categorias')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.content}>
        <img src={logoSrc} alt="Print Bord" className={styles.heroLogo} />
        <h1 className={styles.headline}>Sua marca impressa com qualidade</h1>
        <p className={styles.subheadline}>
          Gráfica digital em Recife com mais de 500 produtos para o seu negócio
        </p>
        <a href="#categorias" className={styles.scrollBtn} onClick={scrollToCategorias}>
          Ver nossos produtos ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;

