import React from 'react'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 transition-all duration-300 bg-gray-200 shadow-md rounded-xl dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-lg"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon
          size={20}
          className="text-gray-800 transition-transform duration-300 hover:rotate-12"
        />
      ) : (
        <Sun
          size={20}
          className="text-yellow-400 transition-transform duration-300 hover:rotate-180"
        />
      )}
    </button>
  )
}

export default ThemeToggle
