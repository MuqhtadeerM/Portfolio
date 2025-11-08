import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, Code, Mail, Sun, Moon } from 'lucide-react'
import useScrollPosition from '../../hooks/useScrollPosition'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const scrollPosition = useScrollPosition()
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  const isActive = (path) => location.pathname === path

  // Persist theme on reload
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrollPosition > 20
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 text-lg rounded-md font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive(item.path)
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-6 py-3 text-lg rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                    isActive(item.path)
                      ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <Icon size={22} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-3 mt-2 px-6 py-3 text-lg rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 w-full transition-colors"
            >
              {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
              <span className="font-medium">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
