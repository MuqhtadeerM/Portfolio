import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate form submission
    setStatus({ type: 'success', message: 'Message sent successfully!' })

    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus({ type: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your@email.com',
      href: 'mailto:your@email.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (234) 567-8900',
      href: 'tel:+12345678900',
    },
    { icon: MapPin, title: 'Location', value: 'San Francisco, CA', href: null },
  ]

  return (
    <div className="min-h-screen py-20 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center animate-fadeIn">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl gradient-text">
            Get In Touch
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 transition-colors duration-300 dark:text-gray-400">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6 animate-slideUp">
            <Card>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 transition-transform duration-300 transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-400">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
                Why Work With Me?
              </h2>
              <ul className="space-y-3">
                {[
                  'Fast response time',
                  'Clean, maintainable code',
                  'Responsive communication',
                  'On-time delivery',
                  'Post-launch support',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600 transition-colors duration-300 dark:text-gray-400"
                  >
                    <CheckCircle
                      size={20}
                      className="flex-shrink-0 text-green-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slideUp">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold text-gray-700 transition-colors duration-300 dark:text-gray-300">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 transition-all bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700 transition-colors duration-300 dark:text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 transition-all bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700 transition-colors duration-300 dark:text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 transition-all bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700 transition-colors duration-300 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 text-gray-900 transition-all bg-white border border-gray-300 rounded-lg resize-none dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg transition-colors duration-300 ${
                    status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                icon={Send}
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
