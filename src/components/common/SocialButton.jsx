import React from 'react'

const SocialButton = ({ icon: Icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-200 shadow-md hover:shadow-xl"
    >
      <Icon size={20} />
    </a>
  )
}

export default SocialButton
