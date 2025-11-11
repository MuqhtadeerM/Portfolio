import React from 'react'
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import SocialButton from '../common/SocialButton'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ]

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden transition-colors duration-300 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-blue-300 rounded-full top-20 left-10 w-72 h-72 dark:bg-blue-700 mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute bg-purple-300 rounded-full bottom-20 right-10 w-72 h-72 dark:bg-purple-700 mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 px-6 py-20 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="space-y-8 text-center animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-300 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
            <Sparkles size={16} />
            <span>Available for Opportunities</span>
          </div>

          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-600 transition-colors duration-300 md:text-xl dark:text-gray-400">
              👋 Hello, I'm
            </p>
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              <span className="gradient-text">John Doe</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl font-medium leading-relaxed text-gray-700 transition-colors duration-300 md:text-2xl lg:text-3xl dark:text-gray-300">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 transition-colors duration-300 md:text-lg dark:text-gray-400">
            I craft beautiful, functional, and user-friendly web experiences
            using modern technologies and best practices. Let's build something
            amazing together.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            {socialLinks.map((social) => (
              <SocialButton
                key={social.label}
                icon={social.icon}
                href={social.href}
                label={social.label}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
            <Button variant="primary" to="/projects">
              View My Work
            </Button>
            <Button variant="secondary" to="/contact">
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <ArrowDown
              size={32}
              className="mx-auto text-gray-400 dark:text-gray-600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
