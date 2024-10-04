import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, ShieldCheck, CreditCard } from 'lucide-react'
import FeaturedProducts from '../components/FeaturedProducts'
import SponsoredProducts from '../components/SponsoredProducts'
import CategoryList from '../components/CategoryList'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Marketplace</h1>
        <p className="text-xl mb-6">Discover amazing products from sellers around the world.</p>
        <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
          Shop Now
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
        <CategoryList />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <FeaturedProducts />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Sponsored Products</h2>
        <SponsoredProducts />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex items-center space-x-4">
          <Truck size={48} className="text-blue-600" />
          <div>
            <h3 className="font-semibold text-lg">Free Shipping</h3>
            <p className="text-sm text-gray-600">On orders over $50</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ShieldCheck size={48} className="text-blue-600" />
          <div>
            <h3 className="font-semibold text-lg">Secure Payments</h3>
            <p className="text-sm text-gray-600">100% protected transactions</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CreditCard size={48} className="text-blue-600" />
          <div>
            <h3 className="font-semibold text-lg">Easy Returns</h3>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home