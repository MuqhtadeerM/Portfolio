import React from "react";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import Card from "../components/common/Card";

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Leading frontend development team and building scalable web applications.",
    },
    {
      icon: Briefcase,
      title: "Full Stack Developer",
      company: "Startup Solutions",
      period: "2020 - 2022",
      description:
        "Developed full-stack applications using React, Node.js, and MongoDB.",
    },
    {
      icon: GraduationCap,
      title: "Computer Science Degree",
      company: "University Name",
      period: "2016 - 2020",
      description: "Bachelor of Science in Computer Science with honors.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer dedicated to creating exceptional digital
            experiences
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <Card className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-primary-600" size={32} />
              My Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
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

          <Card className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">What I Do</h2>
            <ul className="space-y-4">
              {[
                "Build responsive web applications with React and modern JavaScript",
                "Design and implement RESTful APIs and backend services",
                "Create pixel-perfect UI implementations from design mockups",
                "Optimize application performance and user experience",
                "Collaborate with cross-functional teams using Agile methodologies",
                "Mentor junior developers and conduct code reviews",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold text-xl">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience & Education
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card key={index} className="animate-slide-up">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
