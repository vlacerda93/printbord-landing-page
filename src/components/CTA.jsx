import './CTA.css'

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-background">
        <div className="cta-decoration"></div>
      </div>
      
      <div className="container cta-content">
        <h2>Pronto para transformar sua marca?</h2>
        <p>
          Vamos conversar sobre sua ideia! Entre em contato e solicite um orçamento 
          totalmente gratuito. Nossa equipe está pronta para ajudar.
        </p>
        
        <div className="cta-buttons">
          <a 
            href="https://wa.me/5521999999999?text=Ol%C3%A1%20Printbord!%20Gostaria%20de%20um%20or%C3%A7amento" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary cta-btn"
          >
            💬 Conversar no WhatsApp
          </a>
          
          <a 
            href="mailto:contato@printbord.com.br"
            className="btn btn-secondary cta-btn"
          >
            📧 Enviar Email
          </a>
          
          <a 
            href="https://instagram.com/printbordgrafica"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary cta-btn"
          >
            📱 Siga no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
