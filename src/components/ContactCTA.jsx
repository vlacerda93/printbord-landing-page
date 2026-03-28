import { useState } from 'react'
import './ContactCTA.css'

export default function ContactCTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Criar mensagem para WhatsApp
        const phoneNumber = '5511999999999' // Placeholder
        const message = `Olá! Meu nome é ${formData.name}.
    
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank')

        // Reset form
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' })
            setIsSubmitting(false)
        }, 1000)
    }

    return (
        <section className="contact-cta-section">
            <div className="contact-cta-container">
                {/* Lado Esquerdo - Texto Motivador */}
                <div className="cta-left">
                    <div className="cta-content">
                        <span className="cta-badge">💬 Vamos Conversar</span>
                        <h2 className="cta-title">
                            Pronto para dar vida às suas ideias?
                        </h2>
                        <p className="cta-description">
                            Nossa equipe está pronta para transformar sua visão em realidade.
                            Preencha o formulário ao lado e entraremos em contato rapidamente
                            para discutir seu projeto.
                        </p>

                        <div className="cta-features">
                            <div className="cta-feature">
                                <div className="feature-icon">⚡</div>
                                <div className="feature-text">
                                    <h4>Resposta Rápida</h4>
                                    <p>Retornamos em até 24h</p>
                                </div>
                            </div>
                            <div className="cta-feature">
                                <div className="feature-icon">💰</div>
                                <div className="feature-text">
                                    <h4>Orçamento Grátis</h4>
                                    <p>Sem compromisso</p>
                                </div>
                            </div>
                            <div className="cta-feature">
                                <div className="feature-icon">🎨</div>
                                <div className="feature-text">
                                    <h4>Consultoria Gratuita</h4>
                                    <p>Ajudamos na criação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lado Direito - Formulário */}
                <div className="cta-right">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3 className="form-title">Solicite seu Orçamento</h3>

                        <div className="form-group">
                            <label htmlFor="name">Nome Completo *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Seu nome"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Telefone/WhatsApp *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="(11) 99999-9999"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensagem *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Conte-nos sobre seu projeto..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </button>

                        <p className="form-note">
                            Ao enviar, você será redirecionado para o WhatsApp
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}
