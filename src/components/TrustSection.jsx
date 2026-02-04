import './TrustSection.css'

export default function TrustSection() {
  const stats = [
    { number: '10+', label: 'Anos de Experiência', icon: '⏱️' },
    { number: '2000+', label: 'Clientes Satisfeitos', icon: '👥' },
    { number: '5★', label: 'Avaliação no Google', icon: '⭐' }
  ]

  return (
    <section className="trust-section light-bg">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Por que escolher a Printbord?</h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <p style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
          Um gráfica 5 estrelas no Google com mais de 2000 clientes satisfeitos
        </p>
        <div style={{ textAlign: 'center' }}>
          <a href="#" className="btn btn-outline">
            Ver 200+ Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  )
}
