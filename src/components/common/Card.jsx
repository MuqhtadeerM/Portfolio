import React from 'react'

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-2xl shadow-lg p-6 
        border border-gray-100 dark:border-gray-700 
        transition-all duration-300 
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card
