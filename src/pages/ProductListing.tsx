import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, Filter } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  rating: number
  image: string
  category: string
}

const ProductListing: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      // For demo purposes, we'll use mock data
      const mockProducts: Product[] = [
        { id: '1', name: 'Smartphone X', price: 699.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', category: 'smartphones' },
        { id: '2', name: 'Laptop Pro', price: 1299.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', category: 'laptops' },
        { id: '3', name: 'Wireless Headphones', price: 199.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', category: 'audio' },
        { id: '4', name: 'Smart Watch', price: 249.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', category: 'wearables' },
        { id: '5', name: 'Digital Camera', price: 599.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', category: 'cameras' },
        { id: '6', name: '4K Smart TV', price: 799.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', category: 'tvs' },
      ]
      setProducts(mockProducts)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    const category = searchParams.get('category')
    setSelectedCategory(category)
  }, [searchParams])

  useEffect(() => {
    let filtered = products
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
    setFilteredProducts(filtered)
  }, [products, selectedCategory, priceRange])

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    const isMin = event.target.id === 'min-price'
    setPriceRange((prev) => (isMin ? [value, prev[1]] : [prev[0], value]))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Listing</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Filter className="mr-2" /> Filters
            </h2>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  id="min-price"
                  value={priceRange[0]}
                  onChange={handlePriceRangeChange}
                  className="w-24 px-2 py-1 border rounded"
                />
                <span>to</span>
                <input
                  type="number"
                  id="max-price"
                  value={priceRange[1]}
                  onChange={handlePriceRangeChange}
                  className="w-24 px-2 py-1 border rounded"
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Categories</h3>
              <ul>
                {['smartphones', 'laptops', 'audio', 'wearables', 'cameras', 'tvs'].map((category) => (
                  <li key={category} className="mb-2">
                    <Link
                      to={`/products?category=${category}`}
                      className={`block px-2 py-1 rounded ${
                        selectedCategory === category ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProductListing