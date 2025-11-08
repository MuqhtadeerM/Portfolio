import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
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
    setStatus({
      type: 'success',
      message: 'Message sent successfully! (Demo)',
    })

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
      value: '+1 234 567 8900',
      href: 'tel:+12345678900',
    },
    { icon: MapPin, title: 'Location', value: 'San Francisco, CA', href: null },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-4">Why Work With Me?</h2>
              <ul className="space-y-3">
                {[
                  'Fast response time',
                  'Clean, maintainable code',
                  'Responsive communication',
                  'On-time delivery',
                  'Post-launch support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                variant="primary"
                onClick={handleSubmit}
                icon={Send}
                className="w-full"
              >
                Send Message
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
