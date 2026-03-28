import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className={`product-card ${product.featured ? 'featured' : ''}`}>
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        {product.featured && (
          <div className="featured-badge">⭐ Destaque</div>
        )}
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-price">
          <span className="price-value">{product.price}</span>
          {product.minOrder && (
            <span className="min-order">Mín: {product.minOrder}un</span>
          )}
        </div>

        <button className="btn btn-primary" style={{ width: '100%' }}>
          Ver Mais
        </button>
      </div>
    </div>
  )
}