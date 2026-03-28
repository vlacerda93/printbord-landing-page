import './Header.css';
import { Sun, Moon } from 'lucide-react';

export default function Header({ darkMode, toggleTheme }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src="/assets/logo1.png" alt="Printbord Logo" />
        </div>
        <nav className="nav">
          <a href="#catalogo" className="hover-border-magenta">Catálogo</a>
          <a href="#destaques" className="hover-border-magenta">Destaques</a>
          <a href="#feedbacks" className="hover-border-magenta">Feedbacks</a>
          <button className="contact-btn ml-4">
            Contatar
          </button>
          <button onClick={toggleTheme} className="theme-toggle neumorphism p-3 rounded-full glassmorphism hover-glow hover-lift w-12 h-12 flex items-center justify-center">
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-400" />}
          </button>
        </nav>
      </div>
    </header>
  )
}

