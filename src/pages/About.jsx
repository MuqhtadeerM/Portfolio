import React from 'react'
import { Award, Briefcase, GraduationCap } from 'lucide-react'
import Card from '../components/common/Card'

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description:
        'Leading frontend development team and building scalable web applications using React and modern JavaScript.',
    },
    {
      icon: Briefcase,
      title: 'Full Stack Developer',
      company: 'Startup Solutions',
      period: '2020 - 2022',
      description:
        'Developed full-stack applications using React, Node.js, and MongoDB with focus on performance and UX.',
    },
    {
      icon: GraduationCap,
      title: 'Computer Science Degree',
      company: 'University Name',
      period: '2016 - 2020',
      description:
        'Bachelor of Science in Computer Science with honors. Specialized in web development and software engineering.',
    },
  ]

  return (
    <div className="min-h-screen py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center animate-fadeIn">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl gradient-text">
            About Me
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 transition-colors duration-300 dark:text-gray-400">
            Passionate developer dedicated to creating exceptional digital
            experiences
          </p>
        </div>

        {/* About Content */}
        <div className="grid max-w-6xl gap-8 mx-auto mb-16 md:grid-cols-2">
          <Card className="animate-slideUp">
            <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
              <Award className="text-blue-600 dark:text-blue-400" size={32} />
              My Story
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-400">
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience building modern web applications. My journey in tech
                started with a curiosity about how websites work, which quickly
                evolved into a career I absolutely love.
              </p>
              <p>
                I specialize in creating responsive, user-friendly interfaces
                using React and modern JavaScript frameworks. I'm particularly
                interested in the intersection of design and functionality,
                always striving to build products that are both beautiful and
                performant.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source
                projects, writing technical blog posts, or exploring new
                technologies and frameworks. I believe in continuous learning
                and sharing knowledge with the developer community.
              </p>
            </div>
          </Card>

          <Card className="animate-slideUp">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
              What I Do
            </h2>
            <ul className="space-y-4">
              {[
                'Build responsive web applications with React and modern JavaScript',
                'Design and implement RESTful APIs and backend services',
                'Create pixel-perfect UI implementations from design mockups',
                'Optimize application performance and user experience',
                'Collaborate with cross-functional teams using Agile methodologies',
                'Mentor junior developers and conduct code reviews',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    •
                  </span>
                  <span className="text-gray-600 transition-colors duration-300 dark:text-gray-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 transition-colors duration-300 md:text-4xl dark:text-white">
            Experience & Education
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <Card
                  key={index}
                  className="animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="font-semibold text-blue-600 transition-colors duration-300 dark:text-blue-400">
                        {exp.company}
                      </p>
                      <p className="mb-2 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-500">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 transition-colors duration-300 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
