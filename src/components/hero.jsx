import './hero.css'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const heroRef = useRef(null)

  const handleWhatsApp = () => {
    const phoneNumber = '5511999999999' // Placeholder
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal', 'active')
        }
      })
    }, { threshold: 0.1 })

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero reveal" ref={heroRef}>
      <div className="hero-background">
        <img
          src="/assets/1.png"
          alt="Printbord Gráfica - Impressora Digital Moderna em Ação"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content magnetic" data-cursor="-magnetic">
        <div className="hero-text">
          <div className="hero-badge animate-slide-up delay-200">
            ✨ Printbord Gráfica - Criatividade que Impressiona
          </div>

            <h1 className="hero-title font-display font-black animate-slide-up delay-300">
            Impressão Profissional em 24h | <span className="hero-highlight bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">Qualidade Gráfica Premium</span>
          </h1>

          <p className="hero-description animate-slide-up delay-500 max-w-2xl mx-auto">
            +5.000 clientes satisfeitos | Entrega rápida em todo Brasil. 
            Da arte ao produto final, cuidamos de tudo para sua marca se destacar.
          </p>

          <motion.div 
            className="hero-stats flex gap-12 justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="stat-card" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="stat-number font-display text-5xl font-[900] text-cyan-400 dark:text-cyan-400 mb-2 animate-float">10+</div>
              <div className="stat-label uppercase tracking-wider text-sm font-semibold">Anos de Experiência</div>
            </motion.div>
            <motion.div className="stat-card" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }}>
              <div className="stat-number font-display text-5xl font-[900] text-magenta-400 dark:text-magenta-400 mb-2 animate-float">2000+</div>
              <div className="stat-label uppercase tracking-wider text-sm font-semibold">Projetos Entregues</div>
            </motion.div>
            <motion.div className="stat-card" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}>
              <div className="stat-number font-display text-5xl font-[900] text-yellow-400 dark:text-yellow-400 mb-2 animate-float">5★</div>
              <div className="stat-label uppercase tracking-wider text-sm font-semibold">Avaliação Média</div>
            </motion.div>
          </motion.div>

          <div className="hero-buttons flex gap-4 justify-center flex-wrap">
            <button className="btn btn-primary btn-lg hover-lift magnetic animate-slide-up delay-900 bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 text-white shadow-2xl hover:shadow-cyan-glow hover:-translate-y-2 transition-all duration-500 font-display font-bold text-lg px-10 py-4 rounded-2xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Orçamento Grátis
            </button>
            <button className="btn btn-outline btn-lg hover-lift magnetic animate-slide-up delay-1000 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-200 hover:bg-transparent hover:border-cyan-400 hover:text-cyan-400 transition-all duration-500 font-semibold text-lg px-10 py-4 rounded-2xl backdrop-blur-sm">
              Ver Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

