import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, Code, Mail } from 'lucide-react'
import useScrollPosition from '../../hooks/useScrollPosition'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${
          scrollPosition > 20
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  text-gray-700 dark:text-gray-300 
                  hover:text-blue-600 dark:hover:text-blue-400 
                  transition-colors duration-200 font-medium relative group
                  ${isActive(item.path) ? 'text-blue-600 dark:text-blue-400' : ''}
                `}
              >
                {item.name}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 
                    bg-blue-600 dark:bg-blue-400 
                    transition-all duration-300 
                    ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                ></span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu size={24} className="text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 animate-slideUp">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-6 py-4 
                    hover:bg-gray-50 dark:hover:bg-gray-700 
                    transition-colors
                    ${
                      isActive(item.path)
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
