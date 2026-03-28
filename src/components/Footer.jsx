import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Printbord Gráfica</h4>
            <p>Sua marca merece brilhar com comunicação visual impactante.</p>
            <div className="footer-social">
              <a href="https://instagram.com/printbordgrafica" target="_blank" rel="noopener noreferrer">📱 Instagram</a>
              <a href="https://facebook.com/printbordgrafica" target="_blank" rel="noopener noreferrer">👥 Facebook</a>
              <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#destaques">Destaques</a></li>
              <li><a href="#feedbacks">Feedbacks</a></li>
              <li><a href="#cta">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <p>📞 (21) 99999-9999</p>
            <p>📧 contato@printbord.com.br</p>
            <p>📍 Rio de Janeiro, RJ</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Printbord Gráfica. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">Seu Nome</a></p>
        </div>
      </div>
    </footer>
  )
}
