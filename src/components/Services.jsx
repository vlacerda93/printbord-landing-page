import './Services.css'
import { FileText, ImageIcon, Package, Shirt, Tag, BookOpen } from 'lucide-react'

export default function Services() {
    const services = [
        {
            id: 1,
            Icon: FileText,
            title: 'Cartões & Papelaria',
            description: 'Cartões de visita, envelopes, papel timbrado e muito mais',
            color: 'linear-gradient(135deg, var(--cyan), var(--magenta))'
        },
        {
            id: 2,
            Icon: ImageIcon,
            title: 'Banners & Adesivos',
            description: 'Impressão de alta qualidade para divulgação e decoração',
            color: 'linear-gradient(135deg, var(--magenta), var(--yellow))'
        },
        {
            id: 3,
            Icon: Package,
            title: 'Embalagens',
            description: 'Caixas, sacolas e embalagens personalizadas',
            color: 'linear-gradient(135deg, var(--cyan), var(--yellow))'
        },
        {
            id: 4,
            Icon: Shirt,
            title: 'Camisetas & Uniformes',
            description: 'Personalização de roupas para empresas e eventos',
            color: 'linear-gradient(135deg, var(--yellow), var(--magenta))'
        },
        {
            id: 5,
            Icon: Tag,
            title: 'Etiquetas & Tags',
            description: 'Etiquetas adesivas, tags e identificação de produtos',
            color: 'linear-gradient(135deg, var(--magenta), var(--cyan))'
        },
        {
            id: 6,
            Icon: BookOpen,
            title: 'Catálogos & Revistas',
            description: 'Impressão de materiais editoriais com acabamento premium',
            color: 'linear-gradient(135deg, var(--yellow), var(--cyan))'
        }
    ]

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title font-display font-extrabold reveal animate-slide-up delay-200">Nossos Serviços</h2>
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
                                <service.Icon className="service-icon" />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-image-container">
                              <img 
                                src={`./src/Imagens/${service.id + 1}.png`} 
                                alt={service.title} 
                                className="service-image"
                              />
                            </div>
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

