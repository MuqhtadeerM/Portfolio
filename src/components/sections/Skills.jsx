import React from 'react'
import {
  Code,
  Palette,
  Database,
  Globe,
  Terminal,
  Braces,
  FileCode2,
  Layout,
  Server,
  Network,
  Cloud,
  GitBranch,
  Boxes,
  Cpu,
  Package,
} from 'lucide-react'
import Card from '../common/Card'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: FileCode2 },
        { name: 'JavaScript', icon: Braces },
        { name: 'TypeScript', icon: Terminal },
        { name: 'HTML/CSS', icon: Layout },
        { name: 'Tailwind CSS', icon: Palette },
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Express', icon: Network },
        { name: 'MongoDB', icon: Database },
        { name: 'PostgreSQL', icon: Database },
        { name: 'REST APIs', icon: Globe },
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Globe,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'Docker', icon: Boxes },
        { name: 'AWS', icon: Cloud },
        { name: 'CI/CD', icon: Cpu },
        { name: 'Webpack', icon: Package },
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section className="py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="mb-16 text-center animate-fadeIn">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl gradient-text">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 transition-colors duration-300 dark:text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => {
                    const SkillIcon = skill.icon
                    return (
                      <li
                        key={idx}
                        className="flex items-center justify-center space-x-2 text-gray-600 transition-colors duration-300 dark:text-gray-400"
                      >
                        <SkillIcon
                          size={18}
                          className="text-gray-500 dark:text-gray-300"
                        />
                        <span>{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
