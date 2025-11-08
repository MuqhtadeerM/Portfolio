import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Card from "../common/Card";
import Button from "../common/Button";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      {/* Project Image/Icon */}
      <div className="text-6xl mb-4 text-center">{project.icon}</div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
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
          className="flex-1 text-sm py-2"
        >
          Live Demo
        </Button>
        <Button
          variant="outline"
          href={project.githubUrl}
          icon={Github}
          className="flex-1 text-sm py-2"
        >
          Code
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
