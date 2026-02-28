import './Services.css'

export default function Services() {
    const services = [
        {
            id: 1,
            icon: '📄',
            title: 'Cartões & Papelaria',
            description: 'Cartões de visita, envelopes, papel timbrado e muito mais',
            color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 2,
            icon: '🎨',
            title: 'Banners & Adesivos',
            description: 'Impressão de alta qualidade para divulgação e decoração',
            color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 3,
            icon: '📦',
            title: 'Embalagens',
            description: 'Caixas, sacolas e embalagens personalizadas',
            color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            id: 4,
            icon: '👕',
            title: 'Camisetas & Uniformes',
            description: 'Personalização de roupas para empresas e eventos',
            color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
            id: 5,
            icon: '🏷️',
            title: 'Etiquetas & Tags',
            description: 'Etiquetas adesivas, tags e identificação de produtos',
            color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
            id: 6,
            icon: '📚',
            title: 'Catálogos & Revistas',
            description: 'Impressão de materiais editoriais com acabamento premium',
            color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        }
    ]

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">Nossos Serviços</h2>
                    <p className="section-subtitle">
                        Soluções completas em comunicação visual para sua empresa
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-card animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div
                                className="service-icon-wrapper"
                                style={{ background: service.color }}
                            >
                                <span className="service-icon">{service.icon}</span>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <button className="service-link">
                                Saiba mais
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
