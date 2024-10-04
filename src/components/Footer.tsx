import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Your trusted marketplace for quality products and amazing deals.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Seller Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer