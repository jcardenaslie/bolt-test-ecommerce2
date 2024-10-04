import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, Search } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

const Header: React.FC = () => {
  const { user, logout } = useAuth()
  const { cartItems } = useCart()

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Marketplace</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="py-2 px-4 rounded-full text-gray-800 w-64"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
          </div>
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-2">
                <User size={24} />
                <span>{user.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <Link to="/seller/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Seller Dashboard</Link>
                <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="flex items-center space-x-2">
              <User size={24} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header