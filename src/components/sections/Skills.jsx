import React from "react";
import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";
import Card from "../common/Card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "Wireframing",
        "Prototyping",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Globe,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Webpack"],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
