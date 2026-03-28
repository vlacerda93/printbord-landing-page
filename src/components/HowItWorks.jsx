import './HowItWorks.css'

export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            number: '01',
            title: 'Escolha',
            description: 'Navegue pelo catálogo e escolha os produtos que precisa',
            icon: 'Search'
        },
        {
            id: 2,
            number: '02',
            title: 'Personalize',
            description: 'Envie seu design ou conte sua ideia para criarmos juntos',
            icon: 'Palette'
        },
        {
            id: 3,
            number: '03',
            title: 'Aprove',
            description: 'Revise a arte e aprove antes da produção iniciar',
            icon: 'CheckCircle'
        },
        {
            id: 4,
            number: '04',
            title: 'Receba',
            description: 'Seu pedido pronto com qualidade e no prazo combinado',
            icon: 'Package'
        }
    ]

    return (
        <section className="how-it-works-section">
            <div className="timeline-bg">
                <img src="/assets/8.png" alt="Processo Criativo Printbord" className="timeline-bg-image" />
            </div>
            <div className="container">
                <div className="how-it-works-header">
                    <h2 className="section-title">Como Funciona</h2>
                    <p className="section-subtitle">
                        Processo simples e transparente do pedido à entrega
                    </p>
                </div>

                <div className="timeline-wrapper">
                    <div className="timeline-line"></div>

                    <div className="timeline-steps">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="timeline-step"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="step-connector"></div>

                                <div className="step-circle">
                                    <span className="step-icon">{step.icon}</span>
                                    <div className="step-pulse"></div>
                                </div>

                                <div className="step-content">
                                    <div className="step-number">{step.number}</div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="how-it-works-cta">
                    <p>Pronto para começar?</p>
                    <button className="btn btn-primary btn-lg">
                        Fale Conosco no WhatsApp
                    </button>
                </div>
            </div>
        </section>
    )
}
