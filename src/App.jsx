import './styles/global.css'
import './styles/variables.css'
import './styles/animations.css'
import Header from './components/Header'
import Hero from './components/hero'
import TrustSection from './components/TrustSection'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import CategoryFilter from './components/CategoryFilter'
import ProductGrid from './components/ProductGrid'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  return (
    <>
      <Header />
      <Hero />
      <TrustSection />
      <Services />
      <HowItWorks />
      <CategoryFilter onSelectCategory={setSelectedCategory} />
      <ProductGrid selectedCategory={selectedCategory} />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
