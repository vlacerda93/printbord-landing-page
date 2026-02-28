import { useState } from 'react'
import './ProductGrid.css'
import ProductCard from './ProductCard'

export default function ProductGrid({ selectedCategory }) {
  // Dados de produtos com imagens genéricas
  const products = [
    {
      id: 1,
      name: 'Adesivo PVC 100% Calandrado',
      category: 'Adesivos',
      description: 'Adesivo confeccionado em 100% PVC calandrado de alta qualidade',
      price: 'A partir de R$ 0,50',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop',
      featured: true,
      minOrder: 10
    },
    {
      id: 2,
      name: 'Camiseta Personalizada',
      category: 'Camisetas',
      description: 'Camiseta premium personalizada com sua marca ou design',
      price: 'A partir de R$ 16,90',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      featured: true,
      minOrder: 10
    },
    {
      id: 3,
      name: 'Ímã de Geladeira',
      category: 'Brindes',
      description: 'Ímã personalizado para geladeira - ótima divulgação em massa',
      price: 'A partir de R$ 0,78',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      featured: true,
      minOrder: 50
    },
    {
      id: 4,
      name: 'Cartão de Visita',
      category: 'Cartões',
      description: 'Cartão de visita personalizado com design profissional',
      price: 'A partir de R$ 0,30',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop',
      featured: false,
      minOrder: 100
    },
    {
      id: 5,
      name: 'Letreiro em ACM Aço Inox',
      category: 'Fachadas',
      description: 'Letreiro profissional em ACM com acabamento em aço inox',
      price: 'Consultar orçamento',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      featured: true,
      minOrder: 1
    },
    {
      id: 6,
      name: 'Envelope Personalizado',
      category: 'Papelaria',
      description: 'Envelope corporativo personalizado com logotipo',
      price: 'A partir de R$ 0,40',
      image: 'https://images.unsplash.com/photo-1596903118318-a3a05e6d9ae3?w=400&h=400&fit=crop',
      featured: false,
      minOrder: 100
    },
    {
      id: 7,
      name: 'Brinde Personalizado',
      category: 'Brindes',
      description: 'Diversos modelos de brindes corporativos disponíveis',
      price: 'A partir de R$ 0,78',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      featured: true,
      minOrder: 50
    },
    {
      id: 8,
      name: 'Fachada Durável e Econômica',
      category: 'Fachadas',
      description: 'Fachada em material durável e econômico para sua loja',
      price: 'Consultar orçamento',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      featured: false,
      minOrder: 1
    },
    {
      id: 9,
      name: 'Produtos para Petshop',
      category: 'Brindes',
      description: 'Identidade visual completa para seu petshop',
      price: 'Consultar orçamento',
      image: 'https://images.unsplash.com/photo-1601758228300-8e0d3d3e1d92?w=400&h=400&fit=crop',
      featured: true,
      minOrder: 1
    },
    {
      id: 10,
      name: 'Material Festa Personalizada',
      category: 'Eventos',
      description: 'Kit completo de material para sua festa personalizada',
      price: 'Consultar orçamento',
      image: 'https://images.unsplash.com/photo-1610895756366-ae3fc32dd435?w=400&h=400&fit=crop',
      featured: false,
      minOrder: 1
    }
  ]

  // Filtrar produtos por categoria
  const filtered = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.category.toLowerCase() === selectedCategory)

  return (
    <section id="produtos" className="product-grid-section">
      <div className="container">
        <div className="results-info">
          <h2>Nosso Catálogo</h2>
          <p>{filtered.length} produtos encontrados</p>
        </div>

        <div className="products-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <p>Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
