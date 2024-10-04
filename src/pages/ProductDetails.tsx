import React from 'react'
import { useParams } from 'react-router-dom'
import { Star, ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()

  // Mock product data (replace with actual API call)
  const product = {
    id: id,
    name: 'Sample Product',
    price: 99.99,
    rating: 4.5,
    description: 'This is a sample product description. Replace this with actual product details.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <Star size={20} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{product.rating} / 5</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <ShoppingCart size={20} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails