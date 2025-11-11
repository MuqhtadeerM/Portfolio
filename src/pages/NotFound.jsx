import React from 'react'
import { Home } from 'lucide-react'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 space-y-6 text-center animate-fadeIn">
        <h1 className="font-bold text-9xl gradient-text">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 transition-colors duration-300 md:text-4xl dark:text-white">
          Page Not Found
        </h2>
        <p className="max-w-md mx-auto text-xl text-gray-600 transition-colors duration-300 dark:text-gray-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" to="/" icon={Home}>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
