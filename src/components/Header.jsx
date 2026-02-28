import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src="/src/Imagens/logo1.png" alt="Printbord Logo" />
        </div>
        <nav className="nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#destaques">Destaques</a>
          <a href="#feedbacks">Feedbacks</a>
          <button className="btn btn-primary" style={{ padding: '8px 24px' }}>
            Contatar
          </button>
        </nav>
      </div>
    </header>
  )
}
