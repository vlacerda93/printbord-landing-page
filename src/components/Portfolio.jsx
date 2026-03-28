import { useState, useEffect, useRef } from 'react'
import './Portfolio.css'

export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const portfolioRef = useRef(null)

    const portfolioItems = [
        {
            id: 1,
            title: 'Identidade Visual Completa',
            client: '@printbordgrafica',
image: './src/Imagens/2.png',
            likes: '1.2k',
            comments: '89',
            description: 'Cartões, banners e embalagens personalizadas'
        },
        {
            id: 2,
            title: 'Fachada Comercial',
            client: '@printborddesignermkt',
image: './src/Imagens/3.png',
            likes: '2.5k',
            comments: '124',
            description: 'Letreiro em ACM com LED e adesivação de vitrine'
        },
        {
            id: 3,
            title: 'Material para Eventos',
            client: '@printbordgrafica',
image: './src/Imagens/4.png',
            likes: '987',
            comments: '67',
description: 'Caixas, sacolas e embalagens personalizadas para brindes'
        },
        {
            id: 4,
            title: 'Uniformes Corporativos',
            client: '@printborddesignermkt',
image: './src/Imagens/5.png',
            likes: '3.1k',
            comments: '156',
            description: 'Camisetas e bonés personalizados para equipe'
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal')
            }
          })
        })
        if (portfolioRef.current) {
          observer.observe(portfolioRef.current)
        }
        return () => observer.disconnect()
    }, [])

    return (
        <section className="portfolio-section reveal" ref={portfolioRef}>
            <div className="portfolio-header">
                <div className="container">
                    <h2 className="section-title font-display animate-slide-up">Instagram Feed</h2>
                    <p className="section-subtitle animate-slide-up delay-200">
                        Siga <span className="font-bold text-magenta-400">@printbordgrafica</span> e <span className="font-bold text-yellow-400">@printborddesignermkt</span>
                    </p>
                </div>
            </div>

            <div className="portfolio-carousel instagram-style">
                <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="carousel-slide magnetic hover-lift">
                            <img src={item.image} alt={item.title} className="slide-image" />
                            <div className="slide-overlay glassmorphism"></div>
                            <div className="slide-content instagram-overlay">
                                <div className="container">
                                    <div className="instagram-header">
                                        <span className="instagram-avatar">P</span>
                                        <span className="instagram-user">{item.client}</span>
                                    </div>
                                    <h3 className="slide-title">{item.title}</h3>
                                    <p className="slide-description">{item.description}</p>
                                    <div className="instagram-stats flex gap-4 mt-4">
                                        <div className="stat">
                                            <span className="stat-number">{item.likes}</span>
                                            <span className="stat-label">likes</span>
                                        </div>
                                        <div className="stat">
                                            <span className="stat-number">{item.comments}</span>
                                            <span className="stat-label">comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navegação */}
                <button className="carousel-nav carousel-prev hover-glow" onClick={prevSlide} aria-label="Anterior">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button className="carousel-nav carousel-next hover-glow" onClick={nextSlide} aria-label="Próximo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Indicadores */}
                <div className="carousel-indicators">
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''} hover-scale`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
