import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const SponsoredProducts: React.FC = () => {
  const products = [
    { id: 5, name: 'Premium Headphones', price: 249.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 6, name: 'Fitness Tracker', price: 129.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border-2 border-yellow-400">
          <div className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 absolute">Sponsored</div>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-bold">${product.price}</span>
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SponsoredProducts