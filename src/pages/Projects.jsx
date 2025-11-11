import React, { useState } from 'react'
import ProjectCard from '../components/sections/ProjectCard'
import { PROJECTS } from '../utils/constants'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'web', 'mobile', 'design']

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center animate-fadeIn">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl gradient-text">
            My Projects
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 transition-colors duration-300 dark:text-gray-400">
            A collection of projects I've worked on, showcasing my skills and
            experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
                }
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500 transition-colors duration-300 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
