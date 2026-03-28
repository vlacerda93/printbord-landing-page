import './CategoryFilter.css'

export default function CategoryFilter({ onSelectCategory }) {
  const categories = [
    { id: 'todos', name: 'Todos', icon: '📦' },
    { id: 'adesivos', name: 'Adesivos', icon: '🏷️' },
    { id: 'brindes', name: 'Brindes', icon: '🎁' },
    { id: 'camisetas', name: 'Camisetas', icon: '👕' },
    { id: 'cartoes', name: 'Cartões', icon: '🎫' },
    { id: 'papelaria', name: 'Papelaria', icon: '📄' },
    { id: 'fachadas', name: 'Fachadas', icon: '🏢' },
    { id: 'eventos', name: 'Eventos', icon: '🎉' }
  ]

  return (
    <section id="catalogo" className="category-filter">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Nossas Especialidades</h2>
        
        <div className="categories-grid">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className="category-pill"
              onClick={() => onSelectCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="search-box">
          <input 
            type="text" 
            placeholder="🔍 Buscar produto..." 
            className="search-input"
          />
        </div>
      </div>
    </section>
  )
}
