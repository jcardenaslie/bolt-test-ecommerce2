import React from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Headphones, Camera, Watch, Laptop, Tv } from 'lucide-react'

const CategoryList: React.FC = () => {
  const categories = [
    { name: 'Smartphones', icon: Smartphone },
    { name: 'Audio', icon: Headphones },
    { name: 'Cameras', icon: Camera },
    { name: 'Wearables', icon: Watch },
    { name: 'Laptops', icon: Laptop },
    { name: 'TVs', icon: Tv },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.name} to={`/products?category=${category.name.toLowerCase()}`} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <category.icon size={48} className="text-blue-600 mb-2" />
          <span className="text-sm font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default CategoryList