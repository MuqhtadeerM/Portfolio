import React from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import Button from '../common/Button'
import SocialButton from '../common/SocialButton'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container-custom py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              👋 Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            I craft beautiful, functional, and user-friendly web experiences
            using modern technologies and best practices.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-4">
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button variant="primary" to="/projects">
              View My Work
            </Button>
            <Button variant="secondary" to="/contact">
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce-slow">
            <ArrowDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
