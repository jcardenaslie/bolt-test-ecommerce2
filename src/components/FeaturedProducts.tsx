import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const FeaturedProducts: React.FC = () => {
  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 79.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Portable Charger', price: 49.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1609592807597-7e1f9a32ce56?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Bluetooth Speaker', price: 89.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
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

export default FeaturedProducts