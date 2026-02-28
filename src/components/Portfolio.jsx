import { useState } from 'react'
import './Portfolio.css'

export default function Portfolio() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const portfolioItems = [
        {
            id: 1,
            title: 'Identidade Visual Completa',
            client: 'Café Aroma',
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=800&fit=crop&q=80',
            description: 'Cartões, banners e embalagens personalizadas'
        },
        {
            id: 2,
            title: 'Fachada Comercial',
            client: 'Loja Estilo',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&q=80',
            description: 'Letreiro em ACM com LED e adesivação de vitrine'
        },
        {
            id: 3,
            title: 'Material para Eventos',
            client: 'Festa Premium',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop&q=80',
            description: 'Convites, banners, tags e decoração completa'
        },
        {
            id: 4,
            title: 'Uniformes Corporativos',
            client: 'Tech Solutions',
            image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=800&fit=crop&q=80',
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

    return (
        <section className="portfolio-section">
            <div className="portfolio-header">
                <div className="container">
                    <h2 className="section-title">Nosso Portfólio</h2>
                    <p className="section-subtitle">
                        Alguns dos trabalhos que realizamos com orgulho
                    </p>
                </div>
            </div>

            <div className="portfolio-carousel">
                <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="carousel-slide">
                            <img src={item.image} alt={item.title} className="slide-image" />
                            <div className="slide-overlay"></div>
                            <div className="slide-content">
                                <div className="container">
                                    <span className="slide-client">{item.client}</span>
                                    <h3 className="slide-title">{item.title}</h3>
                                    <p className="slide-description">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navegação */}
                <button className="carousel-nav carousel-prev" onClick={prevSlide} aria-label="Anterior">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button className="carousel-nav carousel-next" onClick={nextSlide} aria-label="Próximo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Indicadores */}
                <div className="carousel-indicators">
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
