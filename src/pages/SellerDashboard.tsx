import React, { useState } from 'react'
import { Package, DollarSign, Users, BarChart2 } from 'lucide-react'

const SellerDashboard: React.FC = () => {
  const [products] = useState([
    { id: 1, name: 'Product A', price: 19.99, stock: 50 },
    { id: 2, name: 'Product B', price: 29.99, stock: 30 },
    { id: 3, name: 'Product C', price: 39.99, stock: 20 },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <Package size={48} className="text-blue-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Products</h2>
            <p className="text-3xl font-bold">{products.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <DollarSign size={48} className="text-green-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Revenue</h2>
            <p className="text-3xl font-bold">$1,234.56</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <Users size={48} className="text-purple-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Customers</h2>
            <p className="text-3xl font-bold">56</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <BarChart2 size={48} className="text-orange-600 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-3xl font-bold">89</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Product Inventory</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Stock</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SellerDashboard