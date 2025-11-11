import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'

const ProjectCard = ({ project }) => {
  return (
    <Card className="group">
      {/* Project Image/Icon */}
      <div className="mb-4 text-6xl text-center transition-transform duration-300 transform group-hover:scale-110">
        {project.icon}
      </div>

      {/* Project Title */}
      <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="mb-4 leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium text-blue-700 transition-colors duration-300 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="primary"
          href={project.liveUrl}
          icon={ExternalLink}
          className="flex-1 py-2 text-sm"
        >
          Live Demo
        </Button>
        <Button
          variant="outline"
          href={project.githubUrl}
          icon={Github}
          className="flex-1 py-2 text-sm"
        >
          Code
        </Button>
      </div>
    </Card>
  )
}

export default ProjectCard
