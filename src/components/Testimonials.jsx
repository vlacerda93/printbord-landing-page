import './Testimonials.css'
import { useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      business: 'Petshop Pet Love',
      text: 'Excelente qualidade e prazo! A Printbord superou nossas expectativas. Recomendo muito!',
      rating: 5,
      image: './src/Imagens/9.png'
    },
    {
      id: 2,
      name: 'Maria Santos',
      business: 'Loja de Roupas Fashion',
      text: 'Profissionalismo do início ao fim do processo. Ficou exatamente como imaginei!',
      rating: 5,
      image: './src/Imagens/9.png'
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      business: 'Franquia de Alimentos',
      text: 'Comunicação clara, preço justo e resultado impactante. Voltaremos com certeza!',
      rating: 5,
      image: './src/Imagens/9.png'
    },
    {
      id: 4,
      name: 'Ana Costa',
      business: 'Consultório Odontológico',
      text: 'A identidade visual ficou moderna e profissional. Nossos clientes comentam muito!',
      rating: 5,
      image: './src/Imagens/9.png'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="feedbacks" className="testimonials-section light-bg">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          O que nossos clientes dizem
        </h2>
        
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              {'⭐'.repeat(current.rating)}
            </div>
            
            <p className="testimonial-text">"{current.text}"</p>
            
            <div className="testimonial-author">
              <img 
                src={current.image} 
                alt={current.name}
                className="author-image"
              />
              <div className="author-info">
                <div className="author-name">{current.name}</div>
                <div className="author-business">{current.business}</div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prevTestimonial}>
              ❮
            </button>
            
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <button className="carousel-btn next" onClick={nextTestimonial}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
